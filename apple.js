let accordionTitle = document.getElementsByClassName("mobileNavUlLinks");
const hamburgerMenu = document.querySelector(".twoLineHamburgerMenu");
const mobileNavMenu = document.querySelector(".mobileNav");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const shopOnlineHeader = document.querySelector(".deliveryHeaderContainer");
const mobileBottomBar = document.querySelector(".mobilNavBorder");

for (i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let item = this.nextElementSibling;
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
    } else {
      item.style.maxHeight = item.scrollHeight + "px";
    }
  });
}

hamburgerMenu.addEventListener("click", (event) => {
  event.preventDefault();
  main.classList.toggle("show");
  footer.classList.toggle("show");
  shopOnlineHeader.classList.toggle("show");
  mobileBottomBar.classList.toggle("show");
  mobileNavMenu.classList.toggle("show");
});
