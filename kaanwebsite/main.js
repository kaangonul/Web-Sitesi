const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".quality__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".quality__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".quality__content .quality__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevealOption,
  delay: 200,
  easing: "ease",
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".quality__content .section__header", {
  ...scrollRevealOption,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".quality__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".quality__content .quality__btn", {
  ...scrollRevealOption,
  delay: 1000,
  easing: "ease-in-out",
});
