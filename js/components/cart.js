$(document).ready(function() {
  var cartTable = $(".cart-table");

  //reading from localstorage
  var storage = JSON.parse(localStorage.getItem("cart"));

  if (storage == null) {
    storage = [];
  }

  //Get products
  k = 0;
  $.getJSON("doc/products.json", function(result) {
    var results = result.products;

    for (var j = 0; j < results.length; j++) {
      for (var i = 0; i < storage.length; i++) {
        var products = storage[i];

        if (products.id == result.products[j].id) {
          k++;
          var h = k + 1;
          var totalPrice = (products.number * result.products[j].price).toFixed(
            2
          );

          cartTable.append(
            "<tr><td><img src='" +
              result.products[j].images[1] +
              "'/></td><td class='product-name'>" +
              result.products[j].name +
              "</td><td>Size: " +
              result.products[j].size[1] +
              "<br/>Color: " +
              result.products[j].size[1] +
              " </td><td><form class='increment-form' id='myform" +
              k +
              "' method='POST' action='#'> " +
              "<input type='button' value='-' class='qtyminus increment-button' field='quantity" +
              h +
              "' /> " +
              "<input type='text' name='quantity" +
              h +
              "' value='" +
              products.number +
              "' class='qty increment-form__input' />" +
              "<input type='button' value='+' class='qtyplus increment-button' field='quantity" +
              h +
              "' />" +
              "</form></td>" +
              "<td class='price-quantity" +
              h +
              "'>$" +
              result.products[j].price +
              "</td>" +
              "<td class='total total-price-quantity" +
              h +
              "'> $ " +
              totalPrice +
              "</td>" +
              "<td class='remove-from-cart'>" +
              "<input class='delete-id' type='hidden' value='" +
              i +
              "'>" +
              "<i class='fas fa-times'></i>" +
              "</td>" +
              "</tr>"
          );
        }
      }
    }
  });
});
