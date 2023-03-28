import React, { useState } from "react"

interface TodoFormProps {
  onAdd: (task: string) => void
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [task, setTask] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (task.trim()) {
      onAdd(task)
      setTask('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit} >
      <div className="flex">
        <input 
          type="text"
          value={task}
          onChange={handleChange}
          className="border-gray-300 border-2 p-2 mr-2 grow rounded"
          placeholder="Add Todo"
          />
          <button 
            type="submit"
            className="px-4 py-2 rounded text-white bg-green-500"
            disabled={!task.trim()}
          >
            Add
          </button>
      </div>
    </form>
  )
}

export default TodoForm;