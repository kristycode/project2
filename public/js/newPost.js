$(document).ready(function () {
  // require("dotenv").config();

  var bodyInput = $("#body");
  var titleInput = $("#title");
  var dreamForm = $("#dreamPost");
  var postCategorySelect = $("#category");
  var qCategory = postCategorySelect.val();
  var apiKey = "16264583-da5b3c8db2ac66bc7ed9ce8a3&q";
  var pixaBay = `https://pixabay.com/api/?key=${apiKey}&q=${qCategory}&safesearch=true&image_type=photo`;

  $(dreamForm).on("submit", function handleFormSubmit (event) {
    event.preventDefault();
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    userIdFunc();
  });

  const userIdFunc = async () => {
    try {
      const userData = await $.get("/api/user_data");
      const photoURL = await $.get(pixaBay);
      const res = await photoURL.hits[0].webformatURL;
      // if (userData) {
      const userId = userData.id;
      var newPost = {
        post_title: titleInput.val().trim(),
        post_content: bodyInput.val().trim(),
        post_category: postCategorySelect.val(),
        url_image: res,
        UserId: userId
      };
      await submitPost(newPost);
    } catch (error) {
      console.error(error);
    }
  };

  function submitPost (post) {
    $.post("/api/posts/", post, function () {
      window.location.href = "/dreamstream-home";
    });
  }
});
