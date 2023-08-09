export default function TodoItem({ todo, deleteTodo }) {
    return <>
        <li key={todo.id}>
            <label>
                {todo.title}
                <input type="checkbox" checked={todo.checked} />
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    </>
}