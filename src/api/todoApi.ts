import googleScriptRun from '../util/GoogleScriptRun'

export const fetchAllTodos = async () => {
  try {
    const response: any = await googleScriptRun("getAllTodos")
    return response.todos
  } catch(error) {
    console.error('Error fetching data', error)
  }
}

export const addNewTodo = async (task: string) => {
  try {
    await googleScriptRun("postNew", task)
  } catch(error) {
    console.error('Error posting data', error)
  }
}

export const updateTodo = async (id: number) => {
  try {
    await googleScriptRun("updateTodoStatusBy", id)
  } catch(error) {
    console.error('Error updating data', error)
  }
}

export const deleteTodo = async (id: number) => {
  try {
    await googleScriptRun("deleteTodoBy", id)
  } catch(error) {
    console.error('Error deleting data', error)
  }
}