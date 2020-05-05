$(document).ready(function () {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  // var route = require("../../routes/html-routes");
  // var url = window.location.search;
  // var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  // var updating = false;
  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  // if (url.indexOf("?post_id=") !== -1) {
  //   postId = url.split("=")[1];
  //   getPostData(postId);
  // }
  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var dreamForm = $("#dreamPost");
  var postCategorySelect = $("#category");
  // var userSelect = $.get("/api/user_data");
  // Giving the postCategorySelect a default value
  // postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(dreamForm).on("submit", function handleFormSubmit (event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    function userIdFunc () {
      var photoURL;
      dreamTopic();
      function dreamTopic () {
        var qCategory = postCategorySelect.val();
        // pixabay API key
        const apiKey = "16264583-da5b3c8db2ac66bc7ed9ce8a3&q";
        // building the URL we need to query the database
        //
        const dreamCategory = qCategory;
        //   let safesearch = "true"; // this is hard coded in the query
        // let qCategory = "dolphins";
        //   var queryURL2 =
        //     "https://pixabay.com/api/?key=16264583-da5b3c8db2ac66bc7ed9ce8a3&q=black+food+&image_type=photo";
        var queryURL3 =
                "https://pixabay.com/api/?key=" +
                apiKey +
                "&q=" +
                // dreamColor +
                // "+" +
                dreamCategory +
                "&safesearch=true&image_type=photo";
        //
        $.ajax({
          url: queryURL3,
          method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {
            // Log the queryURL
            // console.log(queryURL3);
            // console.log(response);
            // console.log(response.hits[0].webformatURL);
            // Log the resulting object
            // number of days of forecast
            //
            // console.log(Dream Category: " + dreamCategory);
            // console.log("Dream Date: " + moment().format("LL"));
            console.log("Image Link: " + response.hits[0].webformatURL);
            // testing something here
            /*     fetch(response.hits[1].webformatURL)
                .then(res => res.blob())
                .then(blob => saveAs(blob, "test1.jpg")); */
            // Transfer content to HTML
            //          $(".color").html("<h1>" + response.hits[0].webformatURL + " image url</h1>");
            // $(".color").html("<a href=" + response.hits[0].webformatURL + "> Dream Image</a>");
            photoURL = response.hits[0].webformatURL;
            // return photoURL;
          });
      }
      $.get("/api/user_data", function (data) {
        console.log(data);
        var userId;
        if (data) {
          userId = data.id;
          // return userId;
          var newPost = {
            post_title: titleInput.val().trim(),
            post_content: bodyInput.val().trim(),
            post_category: postCategorySelect.val(),
            url_image: photoURL,
            UserId: userId
          };
          console.log("this is my post data:");
          console.log(newPost);
          // If we're updating a post run updatePost to update a post
          // Otherwise run submitPost to create a whole new post
          // if (updating) {
          //   newPost.id = postId;
          //   updatePost(newPost);
          // } else {
          submitPost(newPost);
        }
      });
    }
    userIdFunc();
  });
  // Submits a new post and brings user to blog page upon completion
  function submitPost (post) {
    $.post("/api/posts/", post, function () {
      window.location.href = "/dreamstream-home";
    });
  }
  // Gets post data for a post if we're editing
  // function getPostData (id) {
  //   $.get("/api/posts/" + id, function (data) {
  //     if (data) {
  //       // If this post exists, prefill our cms forms with its data
  //       titleInput.val(data.title);
  //       bodyInput.val(data.body);
  //       postCategorySelect.val(data.category);
  //       // If we have a post with this id, set a flag for us to know to update the post
  //       // when we hit submit
  //     }
  //   });
  // }
});
