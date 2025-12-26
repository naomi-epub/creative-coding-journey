const initGsap = () => {
    const box = document.querySelector('#gsap-box');

    // Animation Tween đầu tiên
    gsap.to(box, {
        duration: 1.5,
        x: 300, // Chuyển sang 300px trên trục X
        rotation: 360, // Xoay 360 độ
        opacity: 0.5,
        ease: "power1.out", // Easing tinh tế
        delay: 0.2 // Độ trễ 0.2 giây trước khi bắt đầu
    });
};

// Gọi hàm initGsap cùng với initApp (hoặc sau khi DOMContentLoaded)
window.addEventListener('DOMContentLoaded', initGsap);

