import { Todo } from "../entity/Todo";
import { SheetDb } from "../util/SheetDb";

function postNew(task: string) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const newId: number = sheetDb.getLastRowNumber(SHEET_NAME)
  const newTodo: Todo = {
    id: newId, 
    task: task, 
    done: false
  }
  sheetDb.insert(SHEET_NAME, Object.values(newTodo))
}

function executePostNewTask() {
  postNew("Task1")
}
