const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.keys button');

let daTinhXong = false; // Cờ hiệu

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nutBam = button.innerText;
        const cacPhepTinh = ['+', '-', '*', '/'];

        switch (nutBam) {
            case 'C':
                screen.value = '0'; // Reset về 0 thay vì rỗng
                daTinhXong = false;
                break;

            case '=':
                try {
                    screen.value = eval(screen.value);
                    daTinhXong = true;
                } catch {
                    screen.value = "Lỗi!";
                    daTinhXong = true;
                }
                break;

            default:
                // --- LOGIC XỬ LÝ NHẬP SỐ & PHÉP TÍNH ---
                
                // 1. Nếu vừa tính xong (Reset logic)
                if (daTinhXong) {
                    if (cacPhepTinh.includes(nutBam)) {
                        screen.value += nutBam; // Giữ kết quả cũ tính tiếp
                    } else {
                        screen.value = nutBam;  // Nhập số mới -> Xóa cũ
                    }
                    daTinhXong = false; // Tắt cờ
                } 
                // 2. Nếu đang nhập bình thường
                else {
                    // Logic fix lỗi số 0 ở đây:
                    // Nếu màn hình là '0' VÀ nút bấm KHÔNG PHẢI phép tính hay dấu chấm
                    if (screen.value === '0' && !cacPhepTinh.includes(nutBam) && nutBam !== '.') {
                        screen.value = nutBam; // Thay thế số 0
                    } else {
                        screen.value += nutBam; // Nối đuôi bình thường
                    }
                }
        }
    });
});