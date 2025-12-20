// 1. CHỌN LỌC CŨ (ID)
const headerElement = document.getElementById('main-header');
console.log('1. Chọn bằng ID (Element):', headerElement);

// 2. CHỌN LỌC CŨ (CLASS) - Trả về HTMLCollection
const allCards_old = document.getElementsByClassName('card');
console.log('2. Chọn bằng Class (HTMLCollection):', allCards_old);

// 3. CHỌN LỌC HIỆN ĐẠI (querySelector - Single)
const activeCard = document.querySelector('.card.is-active');
console.log('3. Chọn Card đang active (querySelector):', activeCard);

// 4. CHỌN LỌC HIỆN ĐẠI (querySelectorAll - Multiple)
// Chọn TẤT CẢ các thẻ article bên trong class card-list
const allCards_new = document.querySelectorAll('.card-list article');
console.log('4. Chọn tất cả Cards (NodeList):', allCards_new);

// 5. Thử nghiệm NodeList (dùng forEach và chuyển đổi)
console.log('5. Lặp qua NodeList:');
allCards_new.forEach((card, index) => {
    console.log(`Card ${index + 1}:`, card);
});

const cardArray = [...allCards_new]; // Chuyển đổi thành Array đầy đủ (ES6+)
console.log('6. NodeList đã chuyển thành Array:', cardArray);