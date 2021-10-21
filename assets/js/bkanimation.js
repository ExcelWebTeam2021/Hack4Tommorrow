"use strict";

var app = {
   chars: ["1", "0", "#", ";", "''", ";", "!", "1", "0"],

   init: function () {
      app.container = document.createElement("div");
      app.container.className = "animation-container";
      document.body.appendChild(app.container);
      window.setInterval(app.add, 100);
   },

   add: function () {
      var element = document.createElement("span");
      app.container.appendChild(element);
      app.animate(element);
   },

   animate: function (element) {
      var character = app.chars[Math.floor(Math.random() * app.chars.length)];
      var duration = Math.floor(Math.random() * 15) + 1;
      var offset = Math.floor(Math.random() * (350 - duration * 2)) + 3;
      var size = 10 + (20 - duration);
      element.style.cssText = "right:" + offset + "vw; font-size:" + size + "px;animation-duration:" + duration + "s";
      element.innerHTML = character;
      window.setTimeout(app.remove, duration * 1000, element);
   },

   remove: function (element) {
      element.parentNode.removeChild(element);
   },
};

document.addEventListener("DOMContentLoaded", app.init);
