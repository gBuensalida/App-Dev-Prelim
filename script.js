const burgerBTn = document.querySelector(".burger__btn");
const headerNav = document.querySelector(".header__nav");
burgerBTn.addEventListener("click", () => {
     burgerBTn.classList.toggle("open")
     headerNav.classList.toggle("open")
})