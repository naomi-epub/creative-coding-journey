function pad(n) {
  return n.toString().padStart(2, "0");
}

function formatDate(d) {
  const days = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
  const months = [
    "Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
    "Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"
  ];
  const dayName = days[d.getDay()];
  const date = d.getDate();
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();
  return `${dayName}, ${pad(date)} ${monthName} ${year}`;
}

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const toggle = document.getElementById("formatToggle");

let is24h = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = "";
  if (!is24h) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 -> 12
  }

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  ampmEl.textContent = ampm;

  // Cập nhật ngày
  dateEl.textContent = formatDate(now);
}

toggle.addEventListener("change", (e) => {
  is24h = e.target.checked;
  updateClock();
});

// Khởi tạo: chế độ 24h mặc định
toggle.checked = is24h;

// Cập nhật mỗi giây (đồng bộ về đầu giây để mượt hơn)
function startTicker() {
  updateClock();
  const ms = 1000 - (Date.now() % 1000);
  setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, ms);
}

startTicker();
