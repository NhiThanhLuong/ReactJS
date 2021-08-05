import './App.css';
import './css/base.css'
import './css/style.css'
import Header from './components/Header.js'
import ToDoList from './components/ToDoList.js'


function App() {
  return (
    <section className="todoapp">
     <Header />
     <ToDoList />
     
    </section>
  );
}

export default App;
