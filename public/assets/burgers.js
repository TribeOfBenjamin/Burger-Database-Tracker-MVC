console.log("javascript loaded");
$(function() {


    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      console.log(this)
      let isDevouredYorN = $(this).attr("data-isDevouredyorn");
  
      let newDevouredState = {
        devoured: isDevouredYorN
      };
  console.log(newDevouredState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("Changed devoured to:", isDevouredYorN);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submitBtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  