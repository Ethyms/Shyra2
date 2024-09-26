$(document).ready(function () {
  var modal = document.getElementById("myModal");

  var modalImg = document.getElementById("img-extended");
  var captionText = document.getElementById("caption");

  $(".popup-img").on("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  }
});