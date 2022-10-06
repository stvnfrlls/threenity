const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

//students dashboard

router.get("/dashboard", controller.renderDashboard);

router.get("/grades", controller.renderGrades);

router.get("/reminders", controller.renderReminders);

router.get("/announcements", controller.renderAnnouncements);

module.exports = router;
