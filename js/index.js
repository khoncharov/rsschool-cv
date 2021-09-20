const menuBtn = document.querySelector(".menu-btn-container");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.currentTarget);
  menuBtnHandler(e.currentTarget);
});

function menuBtnHandler(target) {
  target.classList.toggle("change");
}
