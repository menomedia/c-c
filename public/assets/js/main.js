window.addEventListener("load", () => {
  window.scroll({
    top: 0,
    behavior:'smooth'
  })
})

var ham = document.getElementById("hamburger");
var sidebar = document.querySelector(".mobile-menu");
var header = document.querySelector("header");

var isOpen = false;
ham.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    ham.classList.add("active");
    sidebar.classList.add("active");
  } else {
    ham.classList.remove("active");
    sidebar.classList.remove("active");
  }
});



/* For mobile devices remove delay */
var aosCont = document.querySelectorAll("[data-aos]");

window.onload = function () {
  if (window.innerWidth < 992) {
    aosCont.forEach((x) => {
      x.removeAttribute("data-aos-delay")
    })
  }
}