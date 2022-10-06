require("dotenv").config();

const express = require("express");
const app = express();

const index = require('./routes/indexRoutes');
const accounts = require('./routes/accountRoutes');
const student = require('./routes/studentRoutes');
const admin = require('./routes/adminRoutes');

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", index);
app.use("/accounts", accounts);
app.use("/student", student);
app.use("/admin", admin);

app.listen(process.env.PORT, () => {
  console.log("Server Running in Port: " + process.env.PORT);
});
