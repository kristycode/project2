// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Post.findAll({
      where: query
    }).then(function (dbPost) {
      console.log(dbPost);
      res.render("dreamstream-home", {
        post: dbPost
      });
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    console.log(req.body);
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/posts/:id/comment", async (req, res) => {
    const comment = await db.Comment.create({
    });
    return res.json(comment);
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

// PUT route for updating posts
//   app.put("/api/posts", function (req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function (dbPost) {
//       res.json(dbPost);
//     });
//   });
};
