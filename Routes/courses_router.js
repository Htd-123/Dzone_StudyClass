const express = require('express');
const router = express.Router();
const coursesController = require('../Controllers/courses_controller');

router.get('/khoa-hoc', coursesController.coursesPage);
//router.post('/dang-nhap', loginController.handleLogin);

module.exports = router; 

