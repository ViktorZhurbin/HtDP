const toggleMenu = () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    menu.classList.toggle("hidden");
    burger.classList.toggle("hidden");
}

window.onhashchange = toggleMenu;
