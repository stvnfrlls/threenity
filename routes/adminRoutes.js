const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

//administrator

router.get("/administrator", controller.renderAdminDashboard);

router.get("/encode_grades");

router.get("/set_reminders");

router.get("/create_announcement");

module.exports = router;
