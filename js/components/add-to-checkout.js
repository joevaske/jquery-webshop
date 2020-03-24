$(document).ready(function() {
  var storageCheck = JSON.parse(localStorage.getItem("checkout"));
  if (storageCheck == null) {
    storageCheck = [];
  }
  $(".add-to-checkout").click(function(e) {
    // Get previous storage, if any.

    var itemNames = [];
    var itemPrices = [];
    $(".cart-table .product-name").each(function(name) {
      itemNames[name] = $(this).html();
      // var data = { id: productId, number: numberItems };
    });
    $(".cart-table .total").each(function(total) {
      itemPrices[total] = $(this).html();
    });

    var itemArr = [];

    for (var i = 0, len = itemNames.length; i < len; i++) {
      itemArr[itemArr.length] = itemNames[i];
      itemArr[itemArr.length] = itemPrices[i];
      // var data = { name: productId, number: numberItems };
    }

    // alert(itemArr);
    storageCheck.push(itemArr);
    localStorage.setItem("checkout", JSON.stringify(storageCheck));
    var storedItems = JSON.parse(localStorage.getItem("checkout"));

    storageCheck = [];
    //localStorage.setItem("checkout", JSON.stringify(storageCheck));
    console.log(storedItems);
    window.location.href = "checkout.html";
    /*
    var totalPrice = $(".total-price").html();
    var productId = $(".id").html();
    var numberItems = $(".qty").val();

    // Create an object to store.
    var data = { id: productId, number: numberItems };
    storage.push(data);

    // Store it.
    localStorage.setItem("cart", JSON.stringify(storage));

    var storedNames = JSON.parse(localStorage.getItem("cart"));
    console.log(storedNames);

    */
    //console.log(itemNames);
  });
});
