import './css/base.css'
import './css/style.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList.js'
import Footer from './components/Footer.js';
import React , { useState, useMemo } from 'react';
import  { useTodos, withProvider }  from './store/store'

function App() {
  const [filter, setFilter] = useState("all");
  const { todos } = useTodos()
  const filteredTodos = useMemo(() => {
      if (filter === "all") {
        return todos;
      } else if (filter === "completed") {
        return todos.filter((t) => t.completed);
      } else if (filter === "not_completed") {
        return todos.filter((t) => !t.completed);
      }
    }, [todos, filter]);

  return (
    <section className="todoapp">
     <Header/>
     <ToDoList todos = { todos } filteredTodos={ filteredTodos }/>
     <Footer todos = { todos  } setFilter= { setFilter }/>
    </section>
  );
}

export default withProvider(App)
