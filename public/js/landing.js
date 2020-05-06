// on click, on click function with keyword this to find data-id then throw that attr into an ajax call
$(document).ready(function () {
  var commentInput = $("#comment");
  var dreamComment = $("#dreamComment");

  $(dreamComment).on("submit", function handleFormSubmit (event) {
    event.preventDefault();
    if (!commentInput.val().trim()) {
      return;
    }
    userIdFunc();
  });

  const userIdFunc = async () => {
    try {
      const userData = await $.get("/api/user_data");
      const postData = await $.get("/api/posts/:id");
      // if (userData) {
      const userId = userData.id;
      const postId = postData.id;
      var newComment = {
        commentary: commentInput.val().trim(),
        UserId: userId,
        PostId: postId
      };
      await submitComment(newComment);
    } catch (error) {
      console.error(error);
    }
  };

  function submitComment (comment) {
    $.post("/api/comments/", comment, function () {
      window.location.href = "/user-dream";
    });
  }
});
