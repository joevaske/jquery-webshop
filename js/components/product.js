$(document).ready(function() {
  var productImg = $("#product-image");
  var productSlider = $(".product__slider-slide-images");

  var productId = $(".id");
  var productDescName = $(".product__description-text-name");
  var productDescPrice = $(".product__description-text-price");
  var productDescContent = $(".product__description-text-content");

  //var totalPrice = $(".total-price");
  //get json file
  $.getJSON("doc/products.json", function(result) {
    //get url id
    var url = $(location).attr("href");
    var id = url.split("id")[1].split("=");
    id.shift();
    id = id - 1;
    product = result.products[id];

    var getId = product.id;
    var getName = product.name;
    var getPrice = product.price;
    var getDescription = product.description;

    var getImg = product.images;

    //For content
    productId.html(getId);
    productDescName.html(getName);
    productDescPrice.html("$ " + getPrice);
    //totalPrice.html(getPrice);
    productDescContent.html(getDescription);

    //for slider
    for (var i = 1; i < getImg.length; i++) {
      productSlider.append("<img src='" + getImg[i] + "'></img>");
      productImg.attr("src", getImg[1]);
    }

    // console.log(id);
  });
});
