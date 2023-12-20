const authController = require('./src/controllers/auth.controller');
const userController = require('./src/controllers/users.controller')

// initalize express app and cors
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());

// specify the route
const userRoutes = require('./src/routes/users.routes');
const courseRoutes = require('./src/routes/course.routes');

app.use(express.json());

// using the route
app.use('/users', userRoutes);
app.use('/lessons', courseRoutes);

app.use('/auth/sigin', authController.signIn);
app.get('/:username', userController.getUserByUsername);

// listen the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})