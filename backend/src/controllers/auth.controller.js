const pool = require("../config/database");

function createAuthController(customPool = pool) {
  const signIn = (req, res) => {
    const { username, password } = req.body;

    const query =
      "SELECT * FROM users WHERE username = $1 AND user_password = $2";

    customPool.query(query, [username, password], (error, results) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ status: "error", message: "Internal Server Error" });
      }

      if (results.rows.length === 0) {
        return res
          .status(401)
          .json({ status: "error", message: "Invalid credentials" });
      }

      const user = results.rows[0];
      return res.status(200).json({ status: "success", user });
    });
  };

  const signUp = (req, res) => {
    const { fullName, email, username, password } = req.body;

    const query = `INSERT INTO users (full_name, email, username, user_password, membership_status)
      VALUES ($1, $2, $3, $4, 0)`;

    customPool.query(
      query,
      [fullName, email, username, password],
      (error, result) => {
        if (error) throw error;
        return res.status(201).json({ status: "success creating user!" });
      }
    );
  };

  return { signIn, signUp };
}

const defaultController = createAuthController();

module.exports = {
  ...defaultController,
  createAuthController,
};
