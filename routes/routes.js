const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", controller.renderIndexPage);

//accounts

router.get("/login", controller.renderLoginPage);

router.post("/auth", controller.login);

router.get("/register", controller.renderRegisterPage);

router.post("/create", controller.register);

router.get("/forgetpassword", controller.renderforgetPassword);

router.post("/check", controller.checkEmail);

router.post("/ResetPassword", controller.resetPassword);

//students dashboard

router.get("/dashboard", controller.renderDashboard);

router.get("/grades", controller.renderGrades);

router.get("/reminders", controller.renderReminders);

router.get("/announcements", controller.renderAnnouncements);

//administrator

router.get("/administrator", controller.renderAdminDashboard);

router.get("/encode_grades");

router.get("/set_reminders");

router.get("/create_announcement");

module.exports = router;
