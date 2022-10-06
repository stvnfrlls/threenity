const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

//administrator

router.get("/tools", controller.renderAdminDashboard);

router.get("/addStudents", controller.renderAddStudent);

router.get("/attendance", controller.renderAttendance);

router.get("/encodeGrades", controller.renderEncodeGrades);

router.get("/editProfile", controller.renderEditProfile);

module.exports = router;
