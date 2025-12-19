const rawData = [15, 2, 44, 7, 18, 3, 20, 5, 10, 11];

// 1. Dùng .filter() để lấy số chẵn
const evenNumbers = rawData.filter(num => num % 2 === 0);
console.log("Số chẵn:", evenNumbers); // [2, 44, 18, 20, 10]

// 2. Dùng .map() để nhân đôi các số chẵn
const doubledEvens = evenNumbers.map(num => num * 2);
console.log("Số chẵn nhân đôi:", doubledEvens); // [4, 88, 36, 40, 20]

const finalResult = rawData
  .filter(num => num % 2 === 0) // Bước 1: Lọc
  .map(num => num * 2);        // Bước 2: Chuyển đổi

console.log("Chaining Result:", finalResult); // [4, 88, 36, 40, 20]

const metrics = rawData.reduce((acc, num) => {
    acc.sum += num;
    if (num > acc.max) {
        acc.max = num;
    }
    return acc;
}, { sum: 0, max: -Infinity }); // Giá trị khởi tạo là Object

console.log("Metrics (Sum/Max):", metrics); 
// Output: { sum: 140, max: 44 }
