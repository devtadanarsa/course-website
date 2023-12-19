const pool = require('../config/database');

const getUsers = (req, res) => {
    const queries = "SELECT * FROM users ORDER BY user_id";
    pool.query(queries, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const queries = `SELECT * FROM users WHERE user_id=${id}`;

    pool.query(queries, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports ={
    getUsers,
    getUserById
}