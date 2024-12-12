const connection = require('../Connection');

const post = (req, res) => {
    // Log incoming request body
    // console.log(req.body);

    // Create a new user in the database
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], (error, results) => {
        if (error) {
            console.error('Error creating a new user in the database:', error);
            res.status(500).json({ message: 'Error creating a new user in the database' });
        } else {
            res.status(201).json({ message: 'User created successfully', userId: results.insertId });
        }
    });
};

module.exports = post;
