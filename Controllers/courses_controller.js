const CoursesModel = require("../Models/courses_model");
const path = require('path');

// GET courses page
exports.coursesPage = async (req, res) => {
    res.sendFile(
        path.join(__dirname, "../Views/courses.html")
    );
}


