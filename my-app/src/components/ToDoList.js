import ToDoItem from "./ToDoItem";
import  { useTodos }  from '../store/store'
import { useState } from 'react'


function ToDoList({ todos, filteredTodos }) {
    const [ change, setChange ] = useState(false)
    const { toggleTodoAll } = useTodos()
    return (
        <section className="main">
            <input 
                id="toggle-all" 
                className="toggle-all" 
                type="checkbox" 
                onChange = {() => {
                    toggleTodoAll()
                    setChange(!change)
                }}
                checked = {!todos.filter((t) => !t.completed).length}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {filteredTodos.map(todo => 
                    <ToDoItem key={todo.id} todo={ todo } />
                    )}
            </ul>
        </section>
    );
}

export default ToDoList
