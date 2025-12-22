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

    // 3. Logic Xóa (Sẽ được hoàn thiện vào Chiều)
    removeBtn.addEventListener('click', (e) => {
        // Sử dụng phương thức .remove() hiện đại
        e.target.parentElement.remove();
    });

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
