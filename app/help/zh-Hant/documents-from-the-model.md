---
title: 由模型產生文件
summary: 將規格或說明撰寫一次作為樣板，其中包含數量、屬性與標籤的欄位，並從已開啟的 IFC 填入，輸出為 PDF 或 Word 文件。
keywords: 文件, 規格, 說明, 樣板, markdown, 報告, word, docx, pdf, 數量, 明細表, 工種, 門窗明細表, 表面處理, DocumentCAD
from: 2b0c9156
---

## 操作目標

樣板是一段含有以雙大括號標示之欄位的 Markdown 文字。BimCraft 會從已開啟的模型填入欄位（計數、依類型的數量、屬性、[標籤](topic:tags-and-schedules)），並將結果儲存為 PDF、Word 文件（.docx）或 Markdown。

## 步驟

1. 開啟 IFC 模型。
2. 在左側面板的{{ui:數量}}下，開啟{{ui:由模型產生文件}}。
3. 選擇一個樣板：{{ui:門與五金}}或{{ui:牆、內襯與粉刷}}，或使用{{ui:載入樣板（.md）…}}載入自訂樣板。
4. 若樣板讀取了模型中尚未定義的標籤，請按一下{{ui:新增此樣板的標籤}}，然後在{{ui:標籤}}下為元素加上標籤。
5. 依需要修改文字，然後按一下{{ui:顯示文件}}。
6. 按一下{{ui:PDF}}（請先選擇 A4 或 Letter）或{{ui:Word（.docx）}}。

## 預期結果

- 按鈕下方會出現已填入的文件，包含其表格。
- 當欄位無法讀取時（未定義的標籤、模型沒有的屬性、未關閉的區塊），會列出警告清單；該欄位會以 `[?…]` 顯示。
- PDF 每頁底部會有文件標題與「第 1 頁，共 3 頁」等頁碼；長表格會延續至下一頁，並保留表頭列。

## 欄位

| 欄位 | 產生的內容 |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | 專案名稱與說明、檔案名稱、今日日期 |
| `{{count IfcDoor}}` | 門的數量 |
| `{{sum IfcWall NetSideArea}}` | 總計，並附單位 |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | 對方括號中的項目進行算術運算（`+ - * /` 與括號）：`[sum …]`、`[count …]`，以及在 each 中的 `[qty Width]`。`round n` 設定小數位數，`unit` 加上單位。無法讀取的內容，或除以零，會以 `[?…]` 顯示並發出警告 |
| `{{qty IfcWall NetSideArea by Type}}` | 表格：每種類型一列，含數量與合計，最後一列為總計 |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | 表格，每個元素一列 |
| `{{tag Finish}}` | 在迴圈中為元素的值；其他地方則為所用的每個值（Oak, Paint） |
| `{{tags}}` | 以表格呈現標籤定義 |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | 每個元素輸出一次文字；沒有元素時輸出 `{{else}}` 之後的部分 |
| `{{#group IfcWall by Type}} … {{/group}}` | 每種類型輸出一次文字，內含 `{{value}}`、`{{count}}`、`{{sum Length}}` 以及一般的 `{{#each}}` |

在 `{{#each}}` 中：`{{name}}`、`{{type}}`、`{{storey}}`、`{{class}}`、`{{material}}`、`{{mark}}`（IFC 標記）、`{{guid}}`、`{{n}}`（1、2、3 …）、`{{prop Pset_DoorCommon.FireRating}}`、`{{qty Width}}`（元素自身的值，附單位）。

一個類別可以是多個（`IfcDoor|IfcWindow`），也可以是所有元素（`*`）。任一項都可以用 `where` 縮小範圍：`{{#each IfcDoor where Fire rating >= 60}}`、`{{count IfcWall where Wall finish hasnot}}`。判斷條件為 `=`、`!=`、`~`（包含）、`>`、`<`、`>=`、`<=`、`has` 與 `hasnot`；多個條件以 `and` 連接；含空格的值請以雙引號括住。`sort Name` 會排序迴圈。

## 明細表與文件中的規格

`{{schedule doors}}` 會以表格列印模型明細表，並依辦公室的配置排版：`doors`、`windows`、`walls`、`rooms`、`floors`、`roomfinishes`、`wallfinishes`、`zonefinishes`、`finishtotals`、`layers`，或在明細表中所儲存之配置的名稱。`{{specification}}` 會列印專案的規格。**工作圖明細表**與**規格**樣板會使用這些欄位。在預覽中，按一下此類明細表的數字即可選取其來源元素。請參閱[配置、儲存與匯出明細表](topic:schedule-layouts)與[從模型撰寫規格](topic:specification)。

## 注意事項

- 欄位名稱可指向內建項目（Name、Type、Storey、Class、Material、Mark）、標籤（`tag:Fire rating` 或其名稱）、屬性（`Pset_WallCommon.FireRating`），或僅指屬性名稱（`NetSideArea`、`Width`）：單獨的名稱會讀取每個元素自身的屬性集，數量屬性集優先，因此門上的 `Width` 是門的寬度，而非牆的厚度。在 `where` 中，單獨的名稱會讀取大多數所選元素都有的屬性集。
- 數量取自檔案中的數量屬性集（BimCraft 會為其繪製的內容寫入這些數值）；單位取自檔案的單位設定。
- 欄位用語（`count`、`sum`、`qty`、`by`、`cols`、`where`、`each`、`group` 等）在所有語言中都保持英文。範例樣板為英文。
- 模型中的文字不會成為格式：名稱中含 `*` 或 `|` 時會照原樣列印。
- 修改過的樣板請使用{{ui:保存在此瀏覽器}}（僅此瀏覽器保存），或使用{{ui:下載樣板}}保存。
- PDF 文字使用標準 PDF 字型：西歐文字以外的字元會列印為 "?"，狀態列會顯示數量。
- 各工種的樣板存放於程式庫中（類型為文件樣板）。在{{ui:由模型產生文件}}中，選擇「從程式庫…」，挑選一個，其文字與所讀取的標籤會一併帶入；可依需要編輯。將自己的樣板發佈到程式庫與上傳任何其他項目相同。尚未實作：超出計數與總計之外的計算。
