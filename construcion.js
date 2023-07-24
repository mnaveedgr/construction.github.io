let menubtn=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menubtn.onclick=()=>{
  menubtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
window.onscroll=()=>{
  menubtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};
let contactInfo = document.querySelector(".contact-info");
document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.toggle("active");
};
document.querySelector("#fa-time").onclick = () => {
  contactInfo.classList.remove("active");
};
// ================================= login form javascript start========================================
let registerbtn = document.querySelector(".register-btn");
let loginbtn = document.querySelector(".login-btn");
registerbtn.onclick = () => {
  registerbtn.classList.add("active");
  loginbtn.classList.remove("active");
  document.querySelector("#login-child").classList.remove("active");
  document.querySelector("#register-child").classList.add("active");
};
loginbtn.onclick = () => {
  registerbtn.classList.remove("active");
  loginbtn.classList.add("active");
  document.querySelector("#login-child").classList.add("active");
  document.querySelector("#register-child").classList.remove("active");
};
let loginform = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginform.classList.add("active");
};
document.querySelector("#fa-close").onclick = () => {
  loginform.classList.remove("active");
};
window.onscroll = () => {
  contactInfo.classList.remove("active");
  loginform.classList.remove("active");
};

// slider javascript
var swiper = new Swiper(".home-slider", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".review-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
});
var swiper = new Swiper(".blog-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
});
