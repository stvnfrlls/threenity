const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
