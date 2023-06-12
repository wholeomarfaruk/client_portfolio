
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stickybar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickybar")
  } else {
    navbar.classList.remove("stickybar");
  }
}
