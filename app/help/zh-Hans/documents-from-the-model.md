---
title: 由模型生成文档
summary: 将技术规格书或说明编写为一次性模板，其中包含数量、属性和标记的字段，并从已打开的 IFC 生成 PDF 或 Word 文档。
keywords: 文档, 技术规格书, 规格, 说明, 描述, 模板, markdown, 报告, word, docx, pdf, 工程量, 明细表, 专业, 门窗表, 装修, documentcad
from: 2b0c9156
---

## 操作目标

模板是包含双花括号字段的 Markdown 文本。BimCraft 会从已打开的模型中填充这些字段（计数、按类型的工程量、属性，以及[标记](topic:tags-and-schedules)），并将结果保存为 PDF、Word 文档 (.docx) 或 Markdown。

## 步骤

1. 打开一个 IFC 模型。
2. 在左侧面板中，于{{ui:工程量}}下打开{{ui:由模型生成文档}}。
3. 选择一个模板：{{ui:门和五金}}或{{ui:墙、内衬和饰面}}，或使用{{ui:加载模板（.md）……}}加载自定义模板。
4. 如果模板读取了模型中尚未定义的标记，请点击{{ui:添加此模板的标记}}，然后在{{ui:标记}}下为构件添加标记。
5. 根据需要修改文字，然后点击{{ui:显示文档}}。
6. 点击{{ui:PDF}}（先选择 A4 或 Letter），或点击{{ui:Word（.docx）}}。

## 应看到的结果

- 按钮下方显示已填充的文档，包括其中的表格。
- 当某个字段无法读取时（如未定义的标记、模型中没有的属性、未闭合的块），会显示警告列表；该字段会打印为 `[?…]`。
- PDF 页面的页脚有文档标题和每页的“第1页，共3页”；长表格会延续到下一页，并带有表头行。

## 字段

| 字段 | 生成的内容 |
|---|---|
| `{{project}}`、`{{project description}}`、`{{file}}`、`{{date}}` | 项目名称和描述、文件名、今天的日期 |
| `{{count IfcDoor}}` | 门的数量 |
| `{{sum IfcWall NetSideArea}}` | 总计，附带单位 |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | 对方括号中的项进行算术运算（`+ - * /` 和括号）：`[sum …]`、`[count …]`，以及在 each 中的 `[qty Width]`。`round n` 设置小数位数，`unit` 添加单位。无法读取的内容或除以零，会打印 `[?…]` 并发出警告 |
| `{{qty IfcWall NetSideArea by Type}}` | 表格：每种类型一行，包含数量和总计，并有一行合计 |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | 表格，每个构件一行 |
| `{{tag Finish}}` | 在循环中为该构件的值；在其他位置为所用的全部值（Oak、Paint） |
| `{{tags}}` | 以表格形式列出标记定义 |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | 每个构件输出一次该文字；若无构件，则输出 `{{else}}` 之后的部分 |
| `{{#group IfcWall by Type}} … {{/group}}` | 每种类型输出一次该文字，其中包含 `{{value}}`、`{{count}}`、`{{sum Length}}` 以及内部的普通 `{{#each}}` |

在 `{{#each}}` 中可使用：`{{name}}`、`{{type}}`、`{{storey}}`、`{{class}}`、`{{material}}`、`{{mark}}`（IFC 标签）、`{{guid}}`、`{{n}}`（1、2、3 …）、`{{prop Pset_DoorCommon.FireRating}}`、`{{qty Width}}`（构件自身的数量，附带其单位）。

一个类可以是多个（`IfcDoor|IfcWindow`），也可以是所有构件（`*`）。可用 `where` 缩小范围：`{{#each IfcDoor where Fire rating >= 60}}`、`{{count IfcWall where Wall finish hasnot}}`。判断条件包括 `=`、`!=`、`~`（包含）、`>`、`<`、`>=`、`<=`、`has` 和 `hasnot`；多个条件用 `and` 连接；含有空格的值请放在引号中。`sort Name` 用于对循环排序。

## 明细表和文档中的规范

`{{schedule doors}}` 会以表格形式按办公室布局打印模型明细表，可用名称包括：`doors`、`windows`、`walls`、`rooms`、`floors`、`roomfinishes`、`wallfinishes`、`zonefinishes`、`finishtotals`、`layers`，或在明细表中保存的布局名称。`{{specification}}` 打印项目的规范。模板**施工图明细表**和**规范**会使用它们。在预览中，点击此类明细表中的数字即可选中生成该数字的构件。参见[布局、保存和导出明细表](topic:schedule-layouts)以及[从模型编写规范](topic:specification)。

## 注意事项

- 字段指向内置项（Name、Type、Storey、Class、Material、Mark）、标记（`tag:Fire rating`，或其名称）、属性（`Pset_WallCommon.FireRating`），或仅指属性名称（`NetSideArea`、`Width`）：裸名称会读取每个构件自身的属性集，并优先读取数量集，因此门上的 `Width` 指门的宽度，而非墙的厚度。在 `where` 中，裸名称读取所选构件大多数所具有的属性集。
- 数量即文件中数量集所记录的内容（BimCraft 为其绘制的内容写入这些数量）；单位取自文件的单位设置。
- 字段关键词（`count`、`sum`、`qty`、`by`、`cols`、`where`、`each`、`group` 等）在所有语言中都保持英文。示例模板为英文。
- 来自模型的文字不会被当作格式：名称中含有 `*` 或 `|` 的，将原样打印。
- 保存已修改的模板，可使用{{ui:保存在此浏览器中}}（仅此浏览器可访问）或{{ui:下载模板}}。
- PDF 文字使用标准 PDF 字体：西欧文字以外的字符会打印为“?”，状态栏会说明数量。
- 各专业的模板保存在库中（类型为文档模板）。在{{ui:由模型生成文档}}中，选择**从库中选择……**，挑选一个模板，其文字及所读取的标记会一并导入；可按需编辑。将自己的模板发布到库中，与上传任何其他库项目相同。尚未实现：超出计数和汇总之外的计算。
