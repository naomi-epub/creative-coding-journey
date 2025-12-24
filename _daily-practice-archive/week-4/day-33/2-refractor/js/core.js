const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const createTodoItem = (text) => {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.id = `todo-${Date.now()}`; // tạo ID duy nhất
    listItem.textContent = text;

    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'Xóa';
    removeBtn.classList.add('remove-btn');

    listItem.appendChild(removeBtn);
    return listItem;
};

addButton.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        const newItem = createTodoItem(text);
        todoList.appendChild(newItem);
        todoInput.value = '';

        // 👉 Sau khi thêm item mới, ta thực hiện yêu cầu:
        const todoItemsArray = [...document.querySelectorAll('.todo-item')];

        // map() để tạo mảng dữ liệu mới
        const todoData = todoItemsArray.map(item => ({
            id: item.id,
            isAnimated: false
        }));

        console.log('Danh sách dữ liệu:', todoData);

        // forEach() để gắn sự kiện click toggle
        todoItemsArray.forEach(item => {
            item.addEventListener('click', (e) => {
                // Nếu click vào nút Xóa
                if (e.target.classList.contains('remove-btn')) {
                    e.target.parentElement.remove();
                    console.log('Item đã được xóa');
                    return;
                }
                // Nếu click vào chính item
                if (e.target.classList.contains('todo-item')) {
                    e.target.classList.toggle('is-done');
                    console.log('Trạng thái hoàn thành đã được chuyển đổi');
                }
            });
        });
    }
});