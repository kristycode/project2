// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  // app.get("/api/comments", function (req, res) {
  //   var query = {};
  //   if (req.query.post_id) {
  //     query.PostId = req.query.post_id;
  //   }
  //   db.Comment.findAll({
  //     where: query,
  //     include: db.User
  //   }).then(function (dbComment) {
  //     var data = dbComment.map(e =>
  //       e.dataValues
  //     );
  //     res.render("user-dream", {
  //       comments: data,
  //       post: req.post,
  //       style: "main.css"
  //     });
  //   });
  // });

  // POST route for saving a new comment
  app.post("/api/comments", function (req, res) {
    db.Comment.create(req.body).then(function (dbComment) {
      res.json(dbComment);
    });
  });
};
