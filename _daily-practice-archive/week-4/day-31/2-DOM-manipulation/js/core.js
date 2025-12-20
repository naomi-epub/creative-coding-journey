const headerElement = document.querySelector('#main-header');
const activeCard = document.querySelector('.is-active');

// 1. Thay đổi Nội dung
headerElement.textContent = "Tiêu đề đã được thay đổi bằng JS!";
// Dùng innerHTML cho mục đích học tập. Khuyến cáo không dùng với User Input.
activeCard.innerHTML = `<strong>Nội dung HTML MỚI: </strong> ${new Date().toLocaleTimeString()}`; 

// 2. Thay đổi Style Inline (Kiểm tra tính đặc hiệu cao nhất)
headerElement.style.backgroundColor = "lightgray";
headerElement.style.fontSize = "24px"; 

const allCards = document.querySelectorAll('.card');

// 1. Thêm class 'is-active' cho Card 1
const card1 = allCards[0];
card1.classList.add('is-active');

// 2. Tắt/Bật trạng thái của Card 2
const card2 = allCards[1];
card2.addEventListener('click', () => {
    card2.classList.toggle('is-active'); // Chìa khóa của UI
    card2.setAttribute('aria-pressed', card2.classList.contains('is-active')); // Luật 13: Cập nhật ARIA
});
console.log('CLICK vào Card 2 để thử classList.toggle() và ARIA');

// 3. Thao tác Dark Mode (Toggle Global State)
const body = document.querySelector('body');
body.addEventListener('dblclick', () => {
    body.classList.toggle('dark-mode'); // Dùng classList.toggle() cho trạng thái toàn cục
    console.log('Chế độ Dark Mode đã được BẬT/TẮT');
});
console.log('DOUBLE CLICK vào bất kỳ đâu trên Body để bật/tắt Dark Mode');
