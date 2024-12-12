const express = require('express');
const cors = require('cors'); 
const Log = require('./middleware/Logger.js');
const Auth = require('./middleware/Auth.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Log);
app.use(Auth);

// Set up the routes
const addUser = require('./users/Post.js');
app.post('/users', addUser);

const login = require('./users/Login.js');
app.post('/login', login);

const logout = require('./users/Logout.js');
app.post('/logout', logout);


//in dev branch, testing this commit
// Start the server
const port = 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
  
