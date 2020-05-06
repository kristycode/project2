// on click, on click function with keyword this to find data-id then throw that attr into an ajax call
$(document).ready(function () {
  $(".commentBtn").on("submit", function (e) {
    e.preventDefault();
    console.log("comments was clicked");
  });
});
