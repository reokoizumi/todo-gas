import SpreadSheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

export class SheetDb {

  spreadSheet: SpreadSheet

  constructor(spreadSheet: SpreadSheet) {
    this.spreadSheet = spreadSheet
  }

  /**
    * レコードの全取得
    * @param sheetName シート名
    * @return 
    */
  findAll(sheetName: string): any[][] {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    if (sheet == null) {
      console.error('シート名がnullです。')
      return
    }
    const table: any[][] = sheet.getDataRange().getValues().slice(1)
    return JSON.parse(JSON.stringify(table))
  }

  /**
    * 最終行を取得
    * @param sheetName シート名
    * @return 最終行
    */
  getLastRowNumber(sheetName: string): number {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    if (sheet == null) {
      console.error('シート名がnullです。')
      return
    }
    return sheet.getLastRow()
  }

  /**
    * データの挿入
    * @param sheetName シート名
    * @param values １行分の配列
    * @return void
    */
  insert(sheetName: string, values: any[]) {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    if (sheet == null) {
      console.error('シート名がnullです。')
      return
    }
    sheet.appendRow(values)
  }
}