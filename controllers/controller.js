const Model = require("../models/model");
const model = new Model();

exports.renderIndexPage = (res) => {
  res.render("index");
};
