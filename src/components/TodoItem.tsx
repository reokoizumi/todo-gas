import { Todo } from "../types/Todo"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  return (
    <li className="p-4">
      <div className="flex justify-between">
        <label className={`inline-flex items-center ${todo.done ? 'line-through text-gray-500': ''}`}>
          <input 
            type="checkbox" 
            className="form-checkbox h-5 w-5 text-green-400" 
            checked={todo.done} 
            onChange={handleToggle}
          />
          <span className="ml-2">{todo.task}</span>
        </label>
        <button className="bg-red-500 text-white px-4 py-2 rounded ml-4" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem