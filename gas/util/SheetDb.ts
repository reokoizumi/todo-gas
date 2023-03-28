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
    * 行を指定して1行取得
    * @param sheetName シート名　
    * @param rowIndex 行インデックス
    * @return
    */
  findBy(sheetName: string, rowIndex: number): any[] {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    // let table: any[][] = []
    if (sheet == null) {
      console.error('シート名がnullです。')
      return
    }
    const record = sheet.getRange(rowIndex, 1, 1, sheet.getLastColumn()).getValues()[0]
    return JSON.parse(JSON.stringify(record))
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

  /**
    * 行の更新
    * @param sheetName シート名
    * @param rowIndex 行のインデックス
    * @param values 1行分の配列
    * @return void
    */
  update(sheetName: string, rowIndex: number, values: any[]) {
    const sheet: Sheet | null = this.spreadSheet.getSheetByName(sheetName)
    if (sheet == null) {
      console.error('シート名がnullです。')
      return
    }
    sheet.getRange(rowIndex, 1, 1, values.length).setValues([values])
  }

}