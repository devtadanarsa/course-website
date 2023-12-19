const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "0101",
  host: "localhost",
  port: 5432,
  database: "dacourse",
});

module.exports = pool;
