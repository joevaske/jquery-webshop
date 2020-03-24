$(document).ready(function() {
  $(".add-to-cart").click(function(e) {
    // Get previous storage, if any.
    var storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
      storage = [];
    }
    var totalPrice = $(".total-price").html();
    var productId = $(".id").html();
    var numberItems = $(".qty").val();

    // Create an object to store.
    var data = { id: productId, number: numberItems };
    storage.push(data);

    // Store it.
    localStorage.setItem("cart", JSON.stringify(storage));

    var storedNames = JSON.parse(localStorage.getItem("cart"));
    //console.log(storedNames);

    // window.location.href = "cart.html";
  });
  $(".add-to-cart").click(function() {
    window.location.href = "cart.html";
  });
});
