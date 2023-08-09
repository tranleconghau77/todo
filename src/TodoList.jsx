import TodoItem from "./TodoItem"

export default function TodoList({ todos, deleteTodo }) {
    return <>
        <ul className="list">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            })}
        </ul>
    </>
}