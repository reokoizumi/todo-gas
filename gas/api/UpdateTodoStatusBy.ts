import { Todo } from "../entity/Todo";
import { SheetDb } from "../util/SheetDb";

function updateTodoStatusBy(todoId: string) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const records: any[][] = sheetDb.findAll(SHEET_NAME)
  const rowIndex: number = records.findIndex(record => record[0] === todoId) + 2
  const todo: Todo = {
    id: records[rowIndex][0] as string,
    task: records[rowIndex][1] as string,
    done: records[rowIndex][2] as boolean
  }

  sheetDb.update(SHEET_NAME, rowIndex, Object.values({...todo, done: !todo.done}))
}