const navLink = document.querySelector(".nav-links");
const menubtn = document.querySelector(".menu");

menubtn.addEventListener("click", function () {
  navLink.classList.toggle("show");
});
