const designSystem = {
    name: 'Project 1 Tokens',
    colors: {
        cta: '#FF5733',
        background: '#F0F0F0',
        text: '#1A1A1A'
    },
    spacing: {
        s: 8,
        m: 16,
        l: 32
    }
};
// Yêu cầu: Destructure để lấy: cta (đổi tên thành accentColor), l (đổi tên thành largeSpace), và background

// Thực hành Destructuring
const { 
    colors: { cta: accentColor, background }, // Destructuring lồng nhau và đổi tên cta
    spacing: { l: largeSpace } 
} = designSystem;

console.log(`Màu nhấn: ${accentColor}, Khoảng cách lớn: ${largeSpace}`);

const baseClasses = ['btn', 'btn--primary'];
// Tạo mảng mới copy baseClasses và thêm class mới
const activeClasses = [...baseClasses, 'btn--active']; 

console.log("Classes cũ:", baseClasses);
console.log("Classes mới:", activeClasses); // Chứng minh mảng cũ không đổi

const baseConfig = {x:0, y:0, opacity:1};
const tweenConfig = {...baseConfig, duration: 1, ease: 'power2'};
console.log("GSAP Config:", tweenConfig);

const calculateSum = (base, ...numbersToAdd) => {
    // numbersToAdd là một Array chứa tất cả các tham số còn lại
    const sumOfRest = numbersToAdd.reduce((acc,num) => acc + num, 0);
    return base + sumOfRest;
}

// base = 10, numbersToAdd = [5, 2, 3]
console.log("Tổng linh hoạt:", calculateSum(10, 5, 2, 3)); 
// Output: 20