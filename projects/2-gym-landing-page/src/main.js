import './style.css'
import gsap from 'gsap'

window.addEventListener('load',()=>{
  gsap.to("body",{autoAlpha:1, duration:0.5})
})

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('grid-rows-[1fr]');
  menuIcon.classList.toggle('rotate-45');
});