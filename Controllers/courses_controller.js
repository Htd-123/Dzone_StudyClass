const CoursesModel = require("../Models/courses_model");

// GET courses page
exports.coursesPage = async (req, res) => {
    res.render("courses");
}


