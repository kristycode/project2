const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
// adding dotenv-json to hide SQL password
require("dotenv").config();
console.log(process.env.DB_PASSWORD);
const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();
// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// require our routes here:

app.get("/", (req, res) => res.send("dreamstream home"));

db.sequelize.sync().then(function () {
  app.listen(PORT, () =>
    console.log(`...drift into the dreamstream... http://localhost:${PORT}`)
  );
});
