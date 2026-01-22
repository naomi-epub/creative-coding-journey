import './style.css'
import gsap from 'gsap'

window.addEventListener('load', () => {
    
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const items = document.querySelectorAll('.bento-item, .card');
    
    // BƯỚC QUAN TRỌNG: Bật hiển thị cho khung chính (nhưng vẫn để opacity 0 để GSAP diễn)
    // autoAlpha: 0 nghĩa là opacity: 0 + visibility: hidden
    gsap.set(mainContent, { autoAlpha: 1 }); 

    const tl = gsap.timeline();

    tl
    .to(loader, {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => loader.style.display = 'none'
    })

    .fromTo(items, 
        { 
            y: 100, 
            scale: 0.9, 
            autoAlpha: 0 
        },
        {
            duration: 1,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true
        },
        "-=1.0"
    );
});