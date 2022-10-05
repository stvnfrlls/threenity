require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(process.env.PORT, () => {
  console.log("Server Running in Port: " + process.env.PORT);
});
