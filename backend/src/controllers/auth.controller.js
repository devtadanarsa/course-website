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

  return { signIn };
}

const defaultController = createAuthController();

module.exports = {
  ...defaultController,
  createAuthController,
};
