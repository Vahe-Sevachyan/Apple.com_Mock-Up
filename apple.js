
let accordionTitle = document.getElementsByClassName("mobileNavUlLinks");



for (i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let item = this.nextElementSibling;
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
    }else {
      item.style.maxHeight = item.scrollHeight + "px";
    } 
  });
}


