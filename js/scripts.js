function openMenu() {
  $(".burger-nav").on("click", function () {
    $(this).toggleClass("open");
    $(".side-menu").toggleClass("open");
  });
}

function services() {
  $("header .header-holder .nav-search-holder nav ul li.services").hover(
    function () {
      $(".links-services").addClass("open");
    }
  );
  $(".links-services").hover(function () {
    $(".links-services").addClass("open");
  });
  $("header .header-holder .nav-search-holder nav ul li.services").mouseleave(
    function () {
      $(".links-services").removeClass("open");
    }
  );
  $(".links-services").mouseleave(function () {
    $(".links-services").removeClass("open");
  });
}

$(document).ready(function () {
  openMenu();
  services();
});
