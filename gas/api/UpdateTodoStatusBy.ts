import { Todo } from "../entity/Todo";
import { SheetDb } from "../util/SheetDb";

function updateTodoStatusBy(todoId: number) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const [id, task, done] = sheetDb.findBy(SHEET_NAME, todoId + 1)
  const todo: Todo = {id, task, done}

  sheetDb.update(SHEET_NAME, todoId + 1, Object.values({...todo, done: !todo.done}))
}