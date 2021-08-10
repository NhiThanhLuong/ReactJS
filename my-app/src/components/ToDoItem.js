import  { useTodos }  from '../store/store'
import classNames from 'classnames/bind';
import { useState } from 'react';

function ToDoItem({ todo }) {
    const { removeTodo, toggleTodo, editTodo } = useTodos();
    const [editId, setEditId ] = useState(-1)
    const [newTodo, setNewTodo] = useState(todo.text);
    console.log(editId);
    const onDoubleClick = (id) => setEditId(id)
    const cancelEdit = () => {
        setEditId(-1)
        setNewTodo(todo.text)
    }
    const onKeyUp = (event) => {;
        switch (event.keyCode) {
            case 13:
                newTodo.trim() ? editTodo(editId, newTodo.trim()) : removeTodo(editId)
                setEditId(-1)
                break
            case 27:
                cancelEdit()
                break
            default:
                break
        }
    }
    return (
        <li 
            key={todo.id} 
            className={classNames({'completed' : todo.completed }, {'editing' : todo.id === editId})}
        >
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <label onDoubleClick={() => onDoubleClick(todo.id)}>{todo.text}</label>
                <button 
                    className="destroy"
                    onClick={() => removeTodo(todo.id)}
                >

                </button>
            </div>
            <input 
                className="edit"
                value={newTodo} 
                onKeyUp={onKeyUp}
                onChange={(e) => setNewTodo(e.target.value)}
                onBlur={cancelEdit}
                />
        </li>
    );
}

export default ToDoItem