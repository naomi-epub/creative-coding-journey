// Refactor code buổi sáng
const studentName = "Neko"; 
let age = 28; 

// Kiểm tra Block Scope
function testScope() {
  const BASE_URL = "api.com";
  if (true) {
    let localData = "Local";
    console.log("Trong khối if:", BASE_URL); 
  }
  // console.log(localData); // Uncomment dòng này, save, và kiểm tra lỗi ReferenceError trong console
}
testScope();

// Hàm 1: Chào mừng (Refactor sang const và Arrow Function)
const greetingES6 = (name, project) => {
  console.log("--- Hàm Greeting (ES6) ---");
  // Dùng Template Literals (ES6) cho cú pháp chuỗi sạch hơn
  return `Xin chào ${name}! Bạn đang làm dự án ${project}`;
};

// Hàm 2: Tính tổng (Implicit return)
const addNumbersES6 = (a, b) => a + b;

console.log(greetingES6(studentName, "Project Mini 1"));
console.log(`Tổng 10 và 5 (ES6) là: ${addNumbersES6(10, 5)}`);