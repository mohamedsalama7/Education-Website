
// change navbar style on scroll

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 0);
})

// show/hide faq answer

let faqs = document.querySelectorAll(".faqs .faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    }
    else {
      icon.classList = "fa-solid fa-plus"
    }
  })
})

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
})

function closeBtnfun() {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeBtnfun);


// loading page
const load = document.getElementById("loading");
window.addEventListener("load", () => {

  setTimeout(() => {
    load.style.height = 0;
  }, 1000);

  setTimeout(() => {
    load.style.display = "none";
  }, 2000);


})



