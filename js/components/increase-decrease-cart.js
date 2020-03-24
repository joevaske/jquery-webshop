$(document).ready(function() {
  $(document).on("click", ".qtyplus", function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");

    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If is not undefined
    console.log(currentVal);
    if (currentVal == 100) {
      $("input[name=" + fieldName + "]").val(currentVal);
    } else if (!isNaN(currentVal)) {
      // Increment
      $("input[name=" + fieldName + "]").val(currentVal + 1);
      //Add valute to total
      price = $(".price-" + fieldName).html();

      priceCurrent = parseFloat(price.substring(1));

      let priceNew = priceCurrent * (currentVal + 1);
      $(".total-price-" + fieldName).html("$" + priceNew.toFixed(2));
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val();
    }
  });
  $(document).on("click", ".qtyminus", function(e) {
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

      price = $(".price-" + fieldName).html();
      console.log(price);
      priceCurrent = parseFloat(price.substring(1));
      let priceNew = priceCurrent * (currentVal - 1);
      $(".total-price-" + fieldName).html("$" + priceNew.toFixed(2));
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(1);
    }
  });
});
