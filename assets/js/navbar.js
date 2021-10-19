$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() < $("#landing-page").height()) {
         $(".navbar").removeClass("bg-dark");
      } else {
         $(".navbar").addClass("bg-dark");
      }
   });
});
