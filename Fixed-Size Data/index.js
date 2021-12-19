const toggleMenu = () => {
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");

    menu.classList.toggle("hidden");
    toggle.classList.toggle("hidden");
}
