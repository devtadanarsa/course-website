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

const getUserByUsername = (req, res) => {
    const {username} = req.params;
    console.log(username);
    const query = `SELECT * FROM users WHERE username='${username}'`;

    pool.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }

        if (results.rows.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }

        res.status(200).json({ status: 'success', user: results.rows[0] });
    })

}

module.exports ={
    getUsers,
    getUserById,
    getUserByUsername
}