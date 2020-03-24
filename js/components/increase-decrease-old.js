$(document).ready(function() {
  $.getJSON("doc/products.json", function(result) {
    //get url id
    var url = $(location).attr("href");
    var id = url.split("id")[1].split("=");
    id.shift();
    id = id - 1;
    product = result.products[id];

    var getPrice = product.price;
    $(".total-price").html("$" + getPrice);

    console.log(getPrice);
  });

  ///incerase decrease
  let price = $(".price").html();
  console.log(price);
  price = parseFloat(price.substring(1));
  var initialVal = 1;
  let priceInit = price * initialVal;

  // insert default value
  //$(".total-price").html("$" + priceInit.toFixed(2));

  // This button will increment the value
  $(".qtyplus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If is not undefined
    if (currentVal == 100) {
      $("input[name=" + fieldName + "]").val(currentVal);
    } else if (!isNaN(currentVal)) {
      // Increment
      $("input[name=" + fieldName + "]").val(currentVal + 1);
      //Add valute to total
      let priceNew = price * (currentVal + 1);
      $(".total-price").html("$" + priceNew.toFixed(2));
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val();
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one
      $("input[name=" + fieldName + "]").val(currentVal - 1);
      let priceNew = price * (currentVal - 1);
      $(".total-price").html("$" + priceNew.toFixed(2));
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(1);
    }
  });
});
