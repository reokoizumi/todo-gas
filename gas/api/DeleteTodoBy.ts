import { SheetDb } from "../util/SheetDb";

function deleteTodoBy(todoId: number) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  const records: any[][] = sheetDb.findAll(SHEET_NAME)
  const rowIndex: number = records.findIndex(record => record[0] === todoId) + 2
  sheetDb.delete(SHEET_NAME, rowIndex)
  return
}