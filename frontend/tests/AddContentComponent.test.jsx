import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddContentComponent from "../src/components/admin-components/AddContentComponent";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

describe("AddContentComponent", () => {
  const props = {
    courseId: 1,
    chapterId: 2,
  };

  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders Add button", () => {
    render(<AddContentComponent {...props} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens modal when button is clicked", () => {
    render(<AddContentComponent {...props} />);
    const addButton = screen.getByRole("button");
    fireEvent.click(addButton);
    expect(screen.getByText(/Add Chapter Content/i)).toBeInTheDocument();
  });

  it("submits form correctly and calls fetch", async () => {
    render(<AddContentComponent {...props} />);
    fireEvent.click(screen.getByRole("button"));

    const nameInput = screen.getByLabelText(/Content Name/i);
    const videoInput = screen.getByLabelText(/Video Link/i);
    const submitBtn = screen.getByText(/Submit/i);

    fireEvent.change(nameInput, { target: { value: "Lesson 1" } });
    fireEvent.change(videoInput, { target: { value: "https://youtube.com" } });
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/lessons/1/content/2",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      )
    );
  });
});
