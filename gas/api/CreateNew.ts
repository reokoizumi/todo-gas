import { Todo } from "../entity/Todo";
import { SheetDb } from "../util/SheetDb";

function createNew(task: string) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const newTodo: Todo = {
    id: Utilities.getUuid(), 
    task: task, 
    done: false
  }
  sheetDb.insert(SHEET_NAME, Object.values(newTodo))
}

function executeCreateNewTask() {
  createNew("Task1")
}
