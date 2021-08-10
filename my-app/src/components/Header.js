import  { useTodos }  from '../store/store'
import { useState } from 'react'

function Header() {
    const { addTodo } = useTodos()
    const [newTodo, setNewTodo] = useState("");

    const onKeyUp = (event) => {
        if (newTodo.trim() && event.keyCode === 13) {
            addTodo(newTodo.trim())
            setNewTodo("")
        } else if (event.keyCode === 27) {
            setNewTodo("")
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input 
                className="new-todo" 
                placeholder="What needs to be done?"
                autoFocus 
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyUp={onKeyUp}
            />
        </header>
    );
}

export default Header