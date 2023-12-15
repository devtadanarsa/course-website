const Pool = require('pg').Pool;

const pool = new Pool(
    {
        user: "devtadanarsa",
        host: "localhost",
        database: "dacourse",
        password: "test",
        port: 5432
    }
)

module.exports = pool;