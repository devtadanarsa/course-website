const { createAuthController } = require("../src/controllers/auth.controller");

describe("AuthController", () => {
  let poolMock;
  let resMock;
  let controller;

  beforeEach(() => {
    poolMock = { query: jest.fn() };
    resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    controller = createAuthController(poolMock);
  });

  // ----------------- signIn tests -----------------
  test("signIn success", () => {
    const req = { body: { username: "john", password: "1234" } };
    const fakeUser = { user_id: 1, username: "john" };

    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, { rows: [fakeUser] });
    });

    controller.signIn(req, resMock);

    expect(poolMock.query).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM users"),
      ["john", "1234"],
      expect.any(Function)
    );
    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(resMock.json).toHaveBeenCalledWith({
      status: "success",
      user: fakeUser,
    });
  });

  test("signIn invalid credentials", () => {
    const req = { body: { username: "john", password: "wrong" } };

    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, { rows: [] });
    });

    controller.signIn(req, resMock);

    expect(resMock.status).toHaveBeenCalledWith(401);
    expect(resMock.json).toHaveBeenCalledWith({
      status: "error",
      message: "Invalid credentials",
    });
  });

  test("signIn database error", () => {
    const req = { body: { username: "john", password: "1234" } };

    poolMock.query.mockImplementation((query, values, callback) => {
      callback(new Error("DB down"), null);
    });

    controller.signIn(req, resMock);

    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({
      status: "error",
      message: "Internal Server Error",
    });
  });

  // ----------------- signUp tests -----------------
  test("signUp success", () => {
    const req = {
      body: {
        fullName: "John Doe",
        email: "john@example.com",
        username: "john",
        password: "1234",
      },
    };

    poolMock.query.mockImplementation((query, values, callback) => {
      callback(null, { rowCount: 1 });
    });

    controller.signUp(req, resMock);

    expect(poolMock.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO users"),
      ["John Doe", "john@example.com", "john", "1234"],
      expect.any(Function)
    );
    expect(resMock.status).toHaveBeenCalledWith(201);
    expect(resMock.json).toHaveBeenCalledWith({
      status: "success creating user!",
    });
  });

  test("signUp database error", () => {
    const req = {
      body: {
        fullName: "John Doe",
        email: "john@example.com",
        username: "john",
        password: "1234",
      },
    };

    poolMock.query.mockImplementation((query, values, callback) => {
      callback(new Error("DB error"), null);
    });

    // Because signUp throws on error, we need to catch it
    expect(() => controller.signUp(req, resMock)).toThrow("DB error");
  });
});
