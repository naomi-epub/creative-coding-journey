// Khai báo biến (var)
var studentName="Neko";
var age=26;
var isCoding=true;

// kiểm tra kiểu dữ liệu
console.log("Kiểu dữ liệu của age:", typeof age);
console.log("Kiểm tra null (đối tượng):", typeof null);

// hàm 1: chào mừng
function greeting(name, project){
    console.log("--- Hàm Greeting (var) ---");
    return "Xin chào " + name + "! Bạn đang làm dự án " + project;
}

// hàm 2: kiểm tra scope của var
function checkScope(){
    if (true){
        var scopeTest="I am hoisted out!";
    }
    console.log("var có thoát khỏi khối if không?"), scopeTest;
    // mở DevTools Console để xem kết quả thực tế
}
checkScope();

console.log(greeting(studentName, "Project Mini 1"));

// kiểm tra hoisting
console.log("Hoisting Test (var):", hoistedVar); // sẽ in ra undefined
var hoistedVar="Tôi đã được nâng lên!";

// kiểm tra hoisting của hàm (hàm có thể gọi trước khi được khai báo)
hoistedFunction(); // hợp lệ, hàm sẽ chạy
function hoistedFunction(){
    console.log("Hàm này dược gọi là thành công trước khi khai báo.");
}