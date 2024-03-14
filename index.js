function showMenu() {
  var isChecked = document.getElementById("menu-button").checked;
  var nav = document.getElementById("mini_nav");

  if (isChecked) {
    nav.classList.remove("masked-nav", "slide-reverse");
    nav.classList.add("showed-nav", "slide");
  } else {
    nav.classList.remove("slide");
    nav.classList.remove("showed-nav");
    nav.classList.add("slide-reverse");
    nav.classList.add("masked-nav");

    // window.setTimeout(function () {
    //   $("#mini_nav").addClass("masked-nav");
    // }, 5000);
    // window.setTimeout(function () {
    //   $("#mini_nav").removeClass("showed-nav");
    // }, 10000);
  }
}
