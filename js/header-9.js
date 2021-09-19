let navWrapper = document.querySelector(".nav__wrapper");
let navToggle = document.querySelector(".nav__toggle");

$(document).ready(function(){
  $('#nav-icon4').click(function(){
    $(this).toggleClass('open');

    if (navWrapper.classList.contains("active")) {
      this.setAttribute("aria-expanded", "false");
      this.setAttribute("aria-label", "menu");
      navWrapper.classList.remove("active");
    } else {
      navWrapper.classList.add("active");
      this.setAttribute("aria-label", "close menu");
      this.setAttribute("aria-expanded", "true");
    }
  });
});