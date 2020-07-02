// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let isDevouredYorN = $(this).data("isDevouredYorN");
  
      let newDevouredState = {
        devoured: isDevouredYorN
      };
  
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
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
        // Don't need devoured here if default = false
      };
  
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
  