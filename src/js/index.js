const navBar = document.getElementById("nav-bar");
const toTop = document.getElementById("to-top");

document.addEventListener("scroll", () => {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("fixed");
    toTop.style = 'display: none';
  } else {
    navBar.classList.add("fixed");
    toTop.style = 'display: flex';
  }
});
