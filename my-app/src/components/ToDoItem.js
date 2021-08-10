import  { useTodos }  from '../store/store'

function ToDoItem({ todo }) {
    const { removeTodo, toggleTodo } = useTodos();
    return (
        <li 
            key={todo.id} 
            className={todo.completed ? 'completed' : undefined}
        >
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button 
                    className="destroy"
                    onClick={() => removeTodo(todo.id)}
                >

                </button>
            </div>
            <input className="edit" value="Create a TodoMVC template" readOnly/>
        </li>
    );
}

export default ToDoItem