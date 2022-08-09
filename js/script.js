let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-swiper", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".popular-swiper", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector(".popular-preview-container");
let previewBox = previewContainer.querySelectorAll(".popular-preview");

document.querySelectorAll('.popular .slide').forEach(slidePopular => {
  slidePopular.onclick = () => {
    previewContainer.style.display = "flex";
    let name = slidePopular.getAttribute("data-name");
    previewBox.forEach(preview => {
      let target = preview.getAttribute("data-target");
      if (target == name) {
        preview.classList.add("active");
      }
    });
  };
});

// Boton para cerrar la ventana de preview
previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach(close => {
    close.classList.remove("active");
  });
};

var swiper = new Swiper('.menu-swiper', {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});