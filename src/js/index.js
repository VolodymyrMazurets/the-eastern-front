const navBar = document.getElementById("nav-bar");
const toTop = document.getElementById("to-top");
const close = document.getElementById("close-menu");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

document.addEventListener("scroll", () => {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("fixed");
    toTop.style = 'display: none';
  } else {
    navBar.classList.add("fixed");
    toTop.style = 'display: flex';
  }
});

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("show");
}
const clickEventListenerCreator = (element) => {
  element.addEventListener("click", () => {
    toggleMobileMenu();
  });
};
clickEventListenerCreator(close);
clickEventListenerCreator(burger);

