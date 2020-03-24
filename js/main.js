//Sticky menu
$(document).ready(function() {
  // grab the initial top offset of the navigation
  var stickyNavTop = $(".main-menu").offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $(".main-menu").addClass("sticky");
    } else {
      $(".main-menu").removeClass("sticky");
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });

  var menuToggler = $(".main-menu__right-toggle");
  var menuItems = $(".main-menu__items");

  menuToggler.click(function() {
    if (menuItems.css("visibility") == "hidden") {
      menuItems.css("visibility", "visible");
    } else {
      menuItems.css("visibility", "hidden");
    }
  });

  var searchToggle = $(".main-menu__right-search-toggle");
  var search = $(".main-menu__right-search");
  searchToggle.click(function() {
    search.toggle();
  });
});
