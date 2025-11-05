// tutorController.test.js

const {
  createTutorController,
} = require("../src/controllers/tutors.controller");

describe("TutorController Unit Tests", () => {
  let poolMock;
  let resMock;
  let controller;

  beforeEach(() => {
    poolMock = { query: jest.fn() };
    resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    controller = createTutorController(poolMock);
  });

  test("getTutors - success", () => {
    const fakeRows = [{ tutor_id: 1, tutor_name: "John" }];
    poolMock.query.mockImplementation((query, callback) => {
      callback(null, { rows: fakeRows });
    });

    controller.getTutors({}, resMock);

    expect(poolMock.query).toHaveBeenCalled();
    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(resMock.json).toHaveBeenCalledWith(fakeRows);
  });

  test("getTutors - error", () => {
    poolMock.query.mockImplementation((q, cb) =>
      cb(new Error("DB error"), null)
    );

    controller.getTutors({}, resMock);

    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({ error: "DB error" });
  });

  test("addTutor - success", () => {
    const req = {
      body: {
        name: "John",
        degree: "PhD",
        language: "English",
        desc: "Great tutor",
        video: "link.mp4",
      },
    };
    const fakeResult = { rows: [{ tutor_id: 1, tutor_name: "John" }] };
    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, fakeResult);
    });

    controller.addTutor(req, resMock);

    expect(poolMock.query).toHaveBeenCalled();
    expect(resMock.status).toHaveBeenCalledWith(201);
    expect(resMock.json).toHaveBeenCalledWith(fakeResult.rows[0]);
  });

  test("editTutor - success", () => {
    const req = {
      params: { id: 1 },
      body: {
        name: "Jane",
        degree: "MSc",
        language: "Spanish",
        desc: "Updated tutor",
        video: "new.mp4",
      },
    };
    const fakeResult = { rows: [{ tutor_id: 1, tutor_name: "Jane" }] };
    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, fakeResult);
    });

    controller.editTutor(req, resMock);

    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(resMock.json).toHaveBeenCalledWith(fakeResult.rows[0]);
  });

  test("removeTutor - success", () => {
    const req = { params: { id: 1 } };
    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, {});
    });

    controller.removeTutor(req, resMock);

    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(resMock.send).toHaveBeenCalledWith("Removed!");
  });
});
