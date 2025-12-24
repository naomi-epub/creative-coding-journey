const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const createTodoItem = (text) => {
    // 1. Tạo phần tử (createElement)
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.textContent = text;

    // 2. Tạo nút Xóa
    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'Xóa';
    removeBtn.classList.add('remove-btn');

    // 4. Chèn nút Xóa vào item (appendChild)
    listItem.appendChild(removeBtn);
    return listItem;
};

addButton.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        const newItem = createTodoItem(text);
        // 5. Chèn Item mới vào danh sách (appendChild)
        todoList.appendChild(newItem);
        todoInput.value = ''; // Xóa nội dung input
    }
});

todoList.addEventListener('click', (e) => {
    // 1. Kiểm tra xem sự kiện có phải là từ một nút xóa không
    if (e.target.classList.contains('remove-btn')) {
        // Nếu là nút Xóa, dùng .remove() để xóa phần tử cha (<li>)
        e.target.parentElement.remove(); 
        console.log('Item đã được xóa bằng Event Delegation');
       return; // Kết thúc hàm
    }

    // 2. Logic hoàn thành nhiệm vụ (toggle class)
   // Kiểm tra xem sự kiện có phải là từ một item todo không
   if (e.target.classList.contains('todo-item')) {
        e.target.classList.toggle('is-done');
       console.log('Trạng thái hoàn thành đã được chuyển đổi');
    }
});