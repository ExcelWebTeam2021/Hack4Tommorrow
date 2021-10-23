function resizeNav() {
   // Set the nav height to fill the window
   $("#nav-fullscreen").css({ height: window.innerHeight });

   // Set the circle radius to the length of the window diagonal,
   // this way we're only making the circle as big as it needs to be.
   var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
   var diameter = radius * 2;
   $("#nav-overlay").width(diameter);
   $("#nav-overlay").height(diameter);
   $("#nav-overlay").css({ "margin-top": -radius, "margin-left": -radius });
}

// Set up click and window resize callbacks, then init the nav. hamburger-navbar
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $(".horizontal-navbar").addClass("d-none");
         $(".hamburger-navbar").removeClass("d-none");
      } else {
         $(".hamburger-navbar").addClass("d-none");
         $(".horizontal-navbar").removeClass("d-none");
      }
   });
   $("#nav-toggle").click(function () {
      $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
   });

   $(window).resize(resizeNav);

   resizeNav();
});
