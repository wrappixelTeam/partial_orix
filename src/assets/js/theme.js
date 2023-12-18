$(function () {
  "use strict";

  $(".preloader").fadeOut();



  // increment & decrement
  $(".minus,.add").on("click", function () {
    var $qty = $(this).closest("div").find(".qty"),
      currentVal = parseInt($qty.val()),
      isAdd = $(this).hasClass("add");
    !isNaN(currentVal) &&
      $qty.val(
        isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal
      );
  });

   // fixed header
   $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $(".topbar").addClass("shadow-sm");
    } else {
      $(".topbar").removeClass("shadow-sm");
    }
  });
   $(window).resize(function () {
    if ($(window).innerWidth() <= 572) {
      $(".notification-dropdown").removeClass("dropstart");
      $(".notification-dropdown").addClass("dropdown");
    } else {
      $(".notification-dropdown").removeClass("dropdown");
      $(".notification-dropdown").addClass("dropstart");
    }
  });

  if ($(window).innerWidth() <= 572) {
    $(".notification-dropdown").removeClass("dropstart");
    $(".notification-dropdown").addClass("dropdown");
  } else {
    $(".notification-dropdown").removeClass("dropdown");
    $(".notification-dropdown").addClass("dropstart");
  }
  
});
