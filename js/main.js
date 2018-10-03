const navOpen = "fa-bars";
const navClose = "fa-times";

window.onload = function() {
  const navBtn = document.getElementById("nav-btn");
  const classes = navBtn.classList;
  const navbar = document.getElementById("navbar");

  navBtn.addEventListener("click", function() {
    if (classes.contains(navOpen)) {
      openNav();
    } else {
      closeNav();
    }
  });
  const navLinks = document.getElementsByClassName("nav-link");
  [...navLinks].forEach(function(elem) {
    elem.addEventListener("click", function() {
      closeNav();
    });
  });

  function closeNav() {
    classes.remove(navClose);
    classes.add(navOpen);
    navbar.classList.add("hide");
  }
  function openNav() {
    classes.remove(navOpen);
    classes.add(navClose);
    navbar.classList.remove("hide");
  }
};
