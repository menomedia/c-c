var ham = document.getElementById("hamburger");
var sidebar = document.querySelector(".mobile-menu");
var header = document.querySelector("header")

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
