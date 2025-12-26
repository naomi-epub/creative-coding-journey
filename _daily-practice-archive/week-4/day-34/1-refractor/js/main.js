// Import các hàm từ utils.js
import { BASE_SPACING, calculateSum, pxToRem } from './utils.js';

// 1. DOM Selection (Logic chính)
const initApp = () => {
    const result = calculateSum(10, 5, 2, 3);
    console.log(`Tính toán sử dụng utils.js: ${result}`);
    console.log(`Khoảng cách chuẩn: ${BASE_SPACING}px`);
    console.log(`32px thành rem: ${pxToRem(32)}`);

    // Áp dụng Event Listeners, DOM Manipulation (code cũ của Day 31/32)
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('click', () => {
            header.classList.toggle('is-clicked');
        });
    }
};

// Khởi động ứng dụng sau khi DOM đã sẵn sàng
window.addEventListener('DOMContentLoaded', initApp);
