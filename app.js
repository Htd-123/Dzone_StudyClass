const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
//app.use('/', require('./Routes/login_router'));
app.use('/', require('./Routes/courses_router'));
//app.use('/', require('./Routes/lesson_router'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});