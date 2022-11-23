window.addEventListener("load", () => {
    var showMenu = false;
    var hamburgerElement = document.getElementById("hamburger");

    hamburgerElement.addEventListener("click", toggleNavbar);

    function toggleNavbar() {
        let menuElements = document.getElementById("menu-elements");
        menuElements.dataset.mobileOpen = !showMenu;
        showMenu = !showMenu;
    }
});