(function () {
   const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

   let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      dayMonth = "11/21/",
      birthday = dayMonth + yyyy;

   today = mm + "/" + dd + "/" + yyyy;

   const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
         distance = 0;

         (document.getElementById("days").innerText = Math.floor(distance)), (document.getElementById("hours").innerText = Math.floor(distance)), (document.getElementById("minutes").innerText = Math.floor(distance)), (document.getElementById("seconds").innerText = Math.floor(distance));

         //seconds
      }, 0);
})();
