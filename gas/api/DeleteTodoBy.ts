import { SheetDb } from "../util/SheetDb";

function deleteTodoBy(id: number) {
  const sheetDb: SheetDb = new SheetDb(SpreadsheetApp.getActiveSpreadsheet())
  sheetDb.delete(SHEET_NAME, id + 1)
  return
}