function navbar() {
  let showMenu = false;
  let hamburgerElement = document.getElementById("hamburger");

  hamburgerElement.addEventListener("click", toggleNavbar);

  function toggleNavbar() {
    let menuElements = document.getElementById("menu-elements");
    menuElements.dataset.mobileOpen = !showMenu;
    showMenu = !showMenu;
  }
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementH = reveals[i].getBoundingClientRect().height;
    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    
    if (elementTop + elementH > 0 && elementTop < height) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

window.addEventListener("load", () => {
  setTimeout(() => {
    reveal();
  }, 100);
  navbar();
});
