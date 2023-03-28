import { useEffect, useState } from 'react'
import './index.css'
import { Todo } from './types/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { addNewTodo, fetchAllTodos, updateTodo, deleteTodo } from './api/todoApi'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const loaldTodos = async () => {
      const allTodos = await fetchAllTodos()
      setTodos(allTodos)
    }
    loaldTodos()
  }, [])

  const handleAdd = async (task: string) => {
    await addNewTodo(task)
    const updateTodos = await fetchAllTodos()
    setTodos(updateTodos)
  }

  const handleToggle = async (id: number) => {
    await updateTodo(id)
    const updateTodos = await fetchAllTodos()
    setTodos(updateTodos)
  }

  const handleDelete = async (id: number) => {
    await deleteTodo(id)
    const updateTodos = await fetchAllTodos()
    setTodos(updateTodos)
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <TodoForm onAdd={handleAdd}/>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}
export default App