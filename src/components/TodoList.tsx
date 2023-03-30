import { Todo } from "../types/Todo"
import TodoItem from "./TodoItem"

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="bg-white divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList