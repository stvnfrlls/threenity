const Model = require("../models/model");
const model = new Model();

exports.renderIndexPage = (req, res) => {
  res.render("index");
};

//account page
exports.renderLoginPage = (req, res) => {
  res.render("accounts/login");
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let data = await model.getUserdetails(email);

  if (data.length > 0) {
    if (data[0].password == password) {
      if (data[0].role == "admin") {
        res.redirect("/admin");
      } else {
        res.redirect("/dashboard");
      }
    }
  } else {
    console.log("Email does not exist.");
  }
};

exports.renderRegisterPage = (req, res) => {
  res.render("accounts/register");
};

exports.register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let checkEmail = await model.getUserdetails(email);

  if (checkEmail.length > 0) {
    console.log("Email is already registered");
  } else {
    let data = await model.addUserdetails(email, password);

    if (data.affectedRows > 0) {
      console.log(data.affectedRows);
      res.redirect("/accounts/login");
    } else {
      console.log("Error inserting data");
    }
  }
};

exports.renderforgetPassword = (req, res) => {
  res.render("accounts/verify");
};

exports.checkEmail = async (req, res) => {
  const email = req.body.email;

  let data = await model.getUserdetails(email);

  const userID = data[0].userID;
  const dbemail = data[0].username;

  if (userID && dbemail) {
    res.render("accounts/reset", { userID: userID, dbemail: email });
  } else {
    res.render("accounts/verify", { errors: "Error with the process" });
  }
};

exports.resetPassword = async (req, res) => {
  const userID = req.body.userID;
  const password = req.body.password;

  let resetPass = await model.updateUserPassword(password, userID);

  if (resetPass.affectedRows > 0) {
    console.log(resetPass.affectedRows);
    res.redirect("/accounts/login");
  }
};

//student dashboard
exports.renderDashboard = (req, res) => {
  res.render("students/dashboard");
};

exports.renderGrades = (req, res) => {
  res.render("students/grades");
};

exports.renderReminders = (req, res) => {
  res.render("students/reminders");
};

exports.renderAnnouncements = (req, res) => {
  res.render("students/announcements");
};

//administrator dashboard

exports.renderAdminDashboard = (req, res) => {
  res.render("admin/dashboard");
};
