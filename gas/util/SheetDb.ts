import { element } from "prop-types";
import SpreadSheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

export class SheetDb {

  spreadSheet: SpreadSheet

  constructor(spreadSheet: SpreadSheet) {
    this.spreadSheet = spreadSheet
  }

  getSheet(sheetName: string): Sheet {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    if (sheet == null) {
      console.error(`${sheetName}のシートが存在しません`)
      return
    }
    return sheet
  }

  /**
    * レコードの全取得
    * @param sheetName シート名
    * @return 
    */
  findAll(sheetName: string): any[][] {
    const sheet: Sheet = this.getSheet(sheetName)
    const table: any[][] = sheet.getDataRange().getValues().slice(1)
    return JSON.parse(JSON.stringify(table))
  }

  /**
    * データの挿入
    * @param sheetName シート名
    * @param values １行分の配列
    * @return void
    */
  insert(sheetName: string, values: any[]) {
    const sheet: Sheet = this.getSheet(sheetName)
    sheet.appendRow(values)
  }

    /**
    * 該当するidの行番号を取得
    * @param sheetName シート名
    * @param rowIndex 行のインデックス
    * @param values 1行分の配列
    * @return void
    */
  getRowIndex(sheetName: string, id: string) {
    const sheet: Sheet = this.getSheet(sheetName)
    const record = sheet.getRange(1, 2, sheet.getLastRow()).getValues()
    const rowIndex = record.flat().filter((value, index) => (value === id) ? index : null)
    if (!rowIndex) {
      console.error(`${id}が存在しません`)
      return
    }
    return rowIndex

  }

  /**
    * 行の更新
    * @param sheetName シート名
    * @param rowIndex 行のインデックス
    * @param values 1行分の配列
    * @return void
    */
  update(sheetName: string, rowIndex: number, values: any[]) {
    const sheet: Sheet = this.getSheet(sheetName)
    sheet.getRange(rowIndex, 1, 1, values.length).setValues([values])
  }

  /**
    * 行の削除
    * @param sheetName シート名
    * @param rowIndex 行のインデックス
    * @return void
    */
   delete(sheetName: string, rowIndex: number) {
    const sheet: Sheet = this.getSheet(sheetName)
    sheet.deleteRow(rowIndex)
  }
}
