function Footer({ todos, setFilter }) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.filter((t) => !t.completed).length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a 
                        className="selected" 
                        href='/#'
                        onClick={() => setFilter('all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a 
                        href='/#'
                        onClick={() => setFilter('not_completed')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a 
                        href='/#'
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer