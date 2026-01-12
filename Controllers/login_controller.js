// const account = require('../Models/login_model');

// // GET login page
// exports.loginPage = (req, res) => {
//     res.render("login");
// }

// // Post login
// exports.handleLogin = async (req, res) => {
//     const { username, password } = req.body;
//     const user = await account.findByUsernameAndPassword(username, password);
//     if(user) {
//         return res.redirect("/khoa-hoc");
//     } else {
//         res.send("Invalid username or password.");
//     }
// };