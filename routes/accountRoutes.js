const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

//accounts

router.get("/login", controller.renderLoginPage);

router.post("/auth", controller.login);

router.get("/register", controller.renderRegisterPage);

router.post("/create", controller.register);

router.get("/forgetpassword", controller.renderforgetPassword);

router.post("/check", controller.checkEmail);

router.post("/ResetPassword", controller.resetPassword);

module.exports = router;
