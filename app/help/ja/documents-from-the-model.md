---
title: モデルからドキュメントを作成する
summary: 仕様書や説明文を、数量、プロパティ、タグのフィールドを含むテンプレートとして一度作成します。開いているIFCモデルからフィールドを埋め、PDFまたはWord文書として出力します。
keywords: ドキュメント, 仕様書, 仕様, 説明, テンプレート, Markdown, レポート, Word, docx, PDF, 数量, 集計表, 工種, 建具表, 仕上げ, documentcad
from: 2b0c9156
---

## 実行内容

テンプレートは、二重の波かっこで囲まれたフィールドを含むMarkdownのテキストです。BimCraftは開いているモデルからフィールドを埋めます（個数、型ごとの数量、プロパティ、あなたの[タグ](topic:tags-and-schedules)）。結果をPDF、Word文書（.docx）、またはMarkdownとして保存します。

## 手順

1. IFCモデルを開きます。
2. 左パネルの{{ui:Quantities}}の下で、{{ui:Documents from the model}}を開きます。
3. テンプレートを選びます: {{ui:Doors and hardware}}、{{ui:Walls, linings and finishes}}、または自分用の{{ui:Load a template (.md)…}}。
4. テンプレートが、モデルにまだ定義されていないタグを読む場合は、{{ui:Add this template’s tags}}をクリックし、次に{{ui:Tags}}の下で要素にタグを付けます。
5. テキストを自由に変更し、{{ui:Show the document}}をクリックします。
6. {{ui:PDF}}をクリックします（先にA4かLetterを選びます）。または{{ui:Word (.docx)}}をクリックします。

## 結果

- ボタンの下に、表を含む埋められたドキュメントが表示されます。
- フィールドを読めない場合（定義されていないタグ、モデルにないプロパティ、閉じられていないブロック）は、警告の一覧が表示されます。そのようなフィールドは `[?…]` と表示されます。
- PDFでは、各ページの下部に文書のタイトルと "Page 1 of 3" が表示されます。長い表は、ヘッダー行とともに次のページに続きます。

## フィールド

| フィールド | 結果 |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | プロジェクト名と説明、ファイル名、今日の日付 |
| `{{count IfcDoor}}` | ドアの数 |
| `{{sum IfcWall NetSideArea}}` | 単位付きの合計 |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | 角括弧の中の項に対する四則演算（`+ - * /` と括弧）: `[sum …]`、`[count …]`、eachの中では `[qty Width]`。`round n` は小数桁数、`unit` は単位を追加します。読めないもの、またはゼロ除算は `[?…]` と表示され、警告が出ます |
| `{{qty IfcWall NetSideArea by Type}}` | 表: 型ごとに1行、その数と合計、そして合計行 |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | 表。要素ごとに1行 |
| `{{tag Finish}}` | 繰り返しの中では要素の値、それ以外では使われたすべての値（Oak, Paint） |
| `{{tags}}` | タグの定義を表として表示 |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | 要素ごとに1回テキストを出力。要素がない場合は `{{else}}` の後の部分 |
| `{{#group IfcWall by Type}} … {{/group}}` | 型ごとに1回テキストを出力。`{{value}}`、`{{count}}`、`{{sum Length}}`、内側の通常の `{{#each}}` を使用 |

`{{#each}}` の中では: `{{name}}`、`{{type}}`、`{{storey}}`、`{{class}}`、`{{material}}`、`{{mark}}`（IFCのタグ）、`{{guid}}`、`{{n}}`（1、2、3 …）、`{{prop Pset_DoorCommon.FireRating}}`、`{{qty Width}}`（その要素自身の値、単位付き）。

クラスは複数指定できます（`IfcDoor|IfcWindow`）。またはすべての要素（`*`）も指定できます。いずれも `where` で絞り込めます: `{{#each IfcDoor where Fire rating >= 60}}`、`{{count IfcWall where Wall finish hasnot}}`。条件は `=`、`!=`、`~`（含む）、`>`、`<`、`>=`、`<=`、`has`、`hasnot` です。複数の条件は `and` で結びます。空白を含む値は引用符で囲みます。`sort Name` で繰り返しを並べ替えます。

## 集計表と文書内の仕様

`{{schedule doors}}` は、モデルの集計表を事務所のレイアウトで表として出力します: `doors`、`windows`、`walls`、`rooms`、`floors`、`roomfinishes`、`wallfinishes`、`zonefinishes`、`finishtotals`、`layers`、または集計表で保存した設定の名前。`{{specification}}` はプロジェクトの仕様書を出力します。テンプレートの**図面用の集計表**と**仕様書**は、これらを使います。プレビューでこの種の集計表の数値をクリックすると、その元になった要素が選択されます。[集計表のレイアウトを設定、保存、書き出す](topic:schedule-layouts)と[モデルから仕様書を作成](topic:specification)を参照してください。

## 補足

- フィールドは、組み込み項目（Name、Type、Storey、Class、Material、Mark）、タグ（`tag:Fire rating` またはその名前）、プロパティ（`Pset_WallCommon.FireRating`）、またはプロパティ名だけ（`NetSideArea`、`Width`）を指定します。名前だけの場合は、各要素自身のセットを読み取り、数量セットを優先します。そのため、ドアの `Width` はドアの幅であり、壁の厚さではありません。`where` の中の名前だけの場合は、選択された要素の多くが持つセットを読み取ります。
- 数量は、ファイルの数量セットが示すものです（BimCraftが描いたものに対して書き込みます）。単位はファイルの単位設定から取得されます。
- フィールドの語（`count`、`sum`、`qty`、`by`、`cols`、`where`、`each`、`group` など）は、どの言語でも英語のままです。サンプルテンプレートも英語です。
- モデルのテキストは書式になりません。`*` や `|` を含む名前は、そのまま表示されます。
- 変更したテンプレートは、{{ui:Keep in this browser}}（このブラウザーにのみ保存）または{{ui:Download the template}}で保存してください。
- PDFのテキストは標準のPDFフォントを使います。西ヨーロッパの文字以外は "?" と表示され、ステータス行にその数が表示されます。
- 工種ごとのテンプレートは、ライブラリ（種類: ドキュメントテンプレート）にあります。{{ui:Documents from the model}}で「ライブラリから選択…」を選び、テンプレートを1つ選ぶと、そのテキストと読み取るタグが読み込まれます。必要に応じて編集してください。自分のテンプレートをライブラリに公開するのは、ほかの項目のアップロードと同じです。まだ作成されていません: 件数と合計以外の計算。
