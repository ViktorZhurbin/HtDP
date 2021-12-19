const toggleMenu = () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    menu.classList.toggle("hidden");
    burger.classList.toggle("hidden");
}

window.onhashchange = toggleMenu;

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const burger = document.querySelector(".burger");
    const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    burger.style.top = "var(--menu-indent)";
  } else {
    burger.style.top = "-50px";
  }

  prevScrollpos = currentScrollPos;
}
