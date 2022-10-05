require("dotenv").config();

const express = require("express");
const app = express();

const routes = require('./routes/routes');

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("Server Running in Port: " + process.env.PORT);
});
