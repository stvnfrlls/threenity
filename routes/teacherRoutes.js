const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/createAnnouncement", controller.renderCreateAnnouncement);

router.get("/createReminders", controller.renderCreateReminders);

router.get("/dashboard", controller.renderTeacherDashboard);

router.get("/encodeGrades", controller.renderEncodeGrades);

router.get("/scanQR", controller.renderScanQR);

module.exports = router;