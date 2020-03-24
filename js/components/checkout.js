$(document).ready(function() {
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

  //reading from localstorage

  var storedProducts = JSON.parse(localStorage.getItem("checkout"));
  if (storedProducts == null) {
    alert(
      "You dont have any items in your char. Please return and select product."
    );
    window.location.href = "index.html";
  }

  var order = $(".order");

  //console.log(storedProducts[0]);

  for (var i = 0; i < storedProducts.length; i++) {
    var products = storedProducts[0];
    // console.log(products);
    k = 0;
    g = 1;
    for (var j = 0; j < products.length / 2; j++) {
      order.append(
        "<tr><td>" +
          products[k] +
          "</td><td class='checkout-price'>" +
          products[g] +
          "</td></tr>"
      );
    }

    k++;
    g++;
  }

  var priceTotal = $(".order").find(".checkout-price");

  //console.log(priceTotal);
  total = 0;
  for (var m = 0; m < priceTotal.length; m++) {
    var pr = priceTotal[m];
    var prNew = pr.innerHTML;
    var prNew2 = prNew.substring(3, prNew.length);
    prNew2Float = parseFloat(prNew2);
    total = prNew2Float + total;
    //var newPr = pr.substring(3, pr.length);

    //  console.log(total);
  }
  $(".checkout-total").html("$ " + total);

  $("#checkout-form").submit(function(event) {
    //alert("Handler for .submit() called.");

    storedProducts = [];
    localStorage.setItem("checkout", JSON.stringify(storedProducts));
    localStorage.setItem("cart", JSON.stringify(storedProducts));
    console.log(storedProducts);
    //event.preventDefault();
  });
  /*
  $(".place-order").submit(function() {
    //alert(" You placed order successfully");
    //window.location.href = "index.html";
    storedProducts = [];
    localStorage.setItem("checkout", JSON.stringify(storedProducts));
    localStorage.setItem("cart", JSON.stringify(storedProducts));
    console.log(storedProducts);
  });
*/
  // console.log(storedProducts);
});
