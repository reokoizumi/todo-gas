import { Todo } from "../entity/Todo";
import { SheetDb } from "../util/SheetDb";

function getAllTodos() {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const records: any[][] = sheetDb.findAll(SHEET_NAME)
  const todos: Todo[] = records.filter(([id]) => id != '').map(([id, task, done]) => ({id, task, done}))
  return {todos}
}