import  { useTodos }  from '../store/store'

function Footer({ filter, todos, setFilter }) {
    const { clearTodoCompleted } = useTodos()
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.filter((t) => !t.completed).length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a 
                        className={ filter === 'all' ? 'selected' : undefined }
                        href='/#'
                        onClick={() => setFilter('all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a 
                        className={ filter === 'not_completed' ? 'selected' : undefined }
                        href='/#'
                        onClick={() => setFilter('not_completed')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a 
                        className={ filter === 'completed' ? 'selected' : undefined }
                        href='/#'
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button 
                className="clear-completed"
                onClick={() => clearTodoCompleted()}
            >
                Clear completed
            </button>
        </footer>
    );
}

export default Footer