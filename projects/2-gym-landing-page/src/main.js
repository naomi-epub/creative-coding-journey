import './style.css'
import gsap from 'gsap'

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('grid-rows-[1fr]');
  menuIcon.classList.toggle('rotate-45');
});