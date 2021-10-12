$(window).load(function () {
   $(".preloader").fadeOut("slow");
});

$(function () {
   "use strict";

   // ===== FAQ section
   const items = document.querySelectorAll(".accordion a");

   function toggleAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
   }

   items.forEach((item) => item.addEventListener("click", toggleAccordion));

   //===== wow

   new WOW().init();

   //===== AOS

   AOS.init({
      duration: 800,
   });
});
