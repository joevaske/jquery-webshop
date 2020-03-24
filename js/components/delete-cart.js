$(document).ready(function() {
  var storage = JSON.parse(localStorage.getItem("cart"));

  if (storage == null) {
    storage = [];
  }
  // console.log(storage);

  $(document).on("click", ".remove-from-cart", function(e) {
    var deleteId = $(this)
      .find(":input")
      .val();

    storage.splice(deleteId, 1);
    //   console.log(storage);

    localStorage.setItem("cart", JSON.stringify(storage));

    var storedNames = JSON.parse(localStorage.getItem("cart"));
    console.log(storedNames);
    location.reload();
  });
});
