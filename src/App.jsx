import { useState } from "react"
import "./style.css"
import NewTodoForm from "./NewTodoForm"
import TodoList from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((previousTodos) => [...previousTodos, { id: crypto.randomUUID(), title, completed: false }])
  }

  const deleteTodo = (id) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <div>
        <h1 className="header">Todo List</h1>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div >
    </>
  )
}