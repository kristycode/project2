$(document).ready(function () {
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var postCategorySelect = $("#category");
  var dreamForm = $("#dreamPost");

  $(dreamForm).on("submit", function handleFormSubmit (event) {
    // console.log(pixaBay);
    event.preventDefault();
    if (!titleInput.val().trim() || !bodyInput.val().trim() || !postCategorySelect.val().trim()) {
      return;
    }
    userIdFunc();
  });

  const userIdFunc = async () => {
    try {
      var qCategory = postCategorySelect.val();
      var apiKey = "16264583-da5b3c8db2ac66bc7ed9ce8a3&q";
      var pixaBay = `https://pixabay.com/api/?key=${apiKey}&q=${qCategory}&safesearch=true&image_type=photo`;

      const userData = await $.get("/api/user_data");
      console.log(`Category: ${qCategory}`);
      console.log(`URL: ${pixaBay}`);
      const photoURL = await $.get(pixaBay);
      var res = await photoURL.hits[1].webformatURL;
      const userId = userData.id;
      console.log(res);
      var newPost = {
        post_title: titleInput.val().trim(),
        post_content: bodyInput.val().trim(),
        post_category: postCategorySelect.val(),
        url_image: res,
        UserId: userId
      };
      console.log(newPost);
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
