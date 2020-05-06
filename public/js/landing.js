// on click, on click function with keyword this to find data-id then throw that attr into an ajax call
$(document).ready(function () {
    $("this.commentBtn").on("click", (e) => {
        e.preventDefault();
      console.log("comments button was clicked");     
    //   $.ajax({
    //     type: "PUT",
    //     url: "/api/user-dream/" + id
    //   }).then(
    //     function(data) {
    //       console.log(data);
    //       location.reload();
    //     }
    //   )
    // })
};
