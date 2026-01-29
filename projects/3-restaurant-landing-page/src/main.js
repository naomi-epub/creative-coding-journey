import './style.css'
import gsap from 'gsap'

window.addEventListener('load',()=>{
  gsap.to("body",{autoAlpha:1, duration:0.5})
})