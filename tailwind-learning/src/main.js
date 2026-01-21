import './style.css'
import gsap from 'gsap'

window.addEventListener('load', () => {
    const items = document.querySelectorAll('.bento-item,.card');
    
    // Tạo timeline
    const tl = gsap.timeline();

    // --- HÀNH ĐỘNG 1: HIỆN NGUYÊN HÌNH (Kéo rèm) ---
    // autoAlpha: 1 tương đương với (opacity: 1 + visibility: visible)
    tl.to("body", { 
        duration: 0.5, // Hiện ra nhanh trong 0.5s
        autoAlpha: 1 
    })
    
    // --- HÀNH ĐỘNG 2: MÚA LỬA (Bento Grid) ---
    // Nối tiếp ngay sau khi body hiện ra
    .fromTo(items, 
        { 
            y: 50, // Nini giảm xuống 50 thôi cho nó tinh tế, 100 hơi xa
            scale: 0.9, 
            autoAlpha: 0 // Vẫn cần ẩn lúc đầu để nó hiện dần ra
        },
        {
            duration: 1,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            stagger: 0.1, // Nhanh hơn xíu cho năng động
            ease: "power3.out",
            force3D: true
        }
    );
});