const pool = require('../config/database');

const signIn = (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    const query = `SELECT * FROM users WHERE username='${username}' AND user_password='${password}'`;

    pool.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }

        if (results.rows.length === 0) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
        }

        // Replace this with your actual response logic
        const user = results.rows[0];
        res.status(200).json({ status: 'success', user });
    });
}

module.exports = {
    signIn,
}