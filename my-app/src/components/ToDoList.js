import ToDoItem from "./ToDoItem.js";

function ToDoList() {
    return (
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <ToDoItem />
            </ul>
        </section>
    );
}

export default ToDoList