const menuBtn = document.querySelector(".menu-btn-container");
const sideNav = document.querySelector(".sidenav");
const mobileMenuLink = document.querySelector(".mob-menu-link");

const page = {
  sideNavState: 0,
};

menuBtn.addEventListener("click", menuBtnHandler);

sideNav.addEventListener("click", (e) => {
  menuBtnHandler(e.target);
});

function menuBtnHandler(target) {
  if (target.className !== "sidenav") {
    menuBtn.classList.toggle("change");
    if (page.sideNavState) {
      page.sideNavState = 0;
      sideNav.style.width = "0";
    } else {
      page.sideNavState = 1;
      sideNav.style.width = "250px";
    }
  }
}
