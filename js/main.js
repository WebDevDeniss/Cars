import { changePopapWindow } from "./changePopapWindow.js";
import formPopupWindow from "./formPopupWindow.js";

const mainSection = document.querySelector(".main__section");
const headerMainSectionFixed = document.querySelector(
  ".main__section .header__container__fixed",
);

const darkEffectsOfCardServices = document.querySelectorAll(".dark__effect");
const wrapperPopapWindow = document.querySelector(".wrapper__popap__window");
const btnCloseWrapperPopapWindow = document.querySelector(
  ".icon__close__popap__window",
);
const popapWindow = document.querySelector(".popap__window");
const sectionServices = document.querySelector(".section__services");
const section__services = document.querySelector(".section__services");

const burgerManu = document.querySelector(".wrapper__btn__burger__menu");

const iconCloseMobileMenu = document.querySelector(".close__btn__mobile__menu");
const mobileMenu = document.querySelector(".mobile-menu ");

changePopapWindow();
formPopupWindow();

// resizeWindowTo430();

function scrollToEndSectionSecvices() {
  window.scrollTo(0, section__services.clientHeight);
}

function activeWrapperPopapWindow() {
  wrapperPopapWindow.classList.add("active");
  document.body.style.overflow = "hidden";
}

function disabledWrapperPopapWindow() {
  wrapperPopapWindow.classList.remove("active");
  document.body.style.overflow = "";
}

darkEffectsOfCardServices.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (window.innerWidth <= 430) {
      return;
    } else {
      activeWrapperPopapWindow();
      scrollToEndSectionSecvices();
    }
  });
});

popapWindow.addEventListener("click", (event) => {
  event.stopPropagation();
  activeWrapperPopapWindow();
});

wrapperPopapWindow.addEventListener("click", () => {
  disabledWrapperPopapWindow();
});

btnCloseWrapperPopapWindow.addEventListener("click", (event) => {
  event.stopPropagation();
  disabledWrapperPopapWindow();
});

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY >= mainSection.clientHeight / 2) {
    if (window.innerWidth <= 430) {
      return;
    } else {
      headerMainSectionFixed.classList.add("active");
      // headerMainSection.classList.add("active");
    }
  } else {
    headerMainSectionFixed.classList.remove("active");
  }
});

burgerManu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  burgerManu.classList.remove("active");
});

iconCloseMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  burgerManu.classList.add("active");
});
