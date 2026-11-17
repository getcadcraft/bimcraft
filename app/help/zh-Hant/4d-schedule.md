---
title: 在模型上播放施工進度表
summary: 以 CSV 開啟工作清單，依屬性將每項工作連結到元素，並移動日期以查看哪些已完成、正在施工，以及尚未開始。
keywords: 4d, 進度表, 施工順序, 時間軸, 分期, 排程, 甘特圖, 工作, 日期, 模擬, 進度, 已完成, csv, 階段, 分期, 工作套件, wbs, 群組
from: 1b985a64
---

## 目標

查看建築如何逐步完成：依日期顯示進度表中每項工作所連結的元素。

## 步驟

1. 開啟 IFC 模型，並在左側面板中開啟 {{ui:4D schedule}}。
2. 按 {{ui:Download a template}}，取得每層樓一週的工作清單範本，並在試算表中修改。也可自行撰寫。
3. 按 {{ui:Open a task list…}}，然後選擇 CSV 檔。
4. 拖曳日期滑桿，或按 {{ui:Play}}。

## 工作清單

CSV 檔需有標題列，欄位為 **Task**、**Start**、**Finish**、**Field** 與 **Value**。逗號或分號皆可。

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- 日期請寫成 YYYY-MM-DD。
- 每一列會將工作連結到所有 **Field** 的值與 **Value** 完全相符的元素。**Field** 可為 Storey、Class、Name、Type、Material、Tag 或 GlobalId 等屬性，也可為以屬性集與名稱寫出的屬性，例如 `Pset_WallCommon.FireRating`。
- 若要連結更多元素，請在更多列中重複同一工作，日期保持相同。

## 階段與工作套件

加入 **Stage** 欄、**Package** 欄，或兩者皆加，即可將工作歸入階段與工作套件。Phase 與 WBS 同樣可作為欄位名稱。

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- 一項工作只屬於一個階段與一個工作套件。若同一工作的後續列指定了另一個階段或工作套件，該列會連同其行號一併列出並略過。
- 兩個階段中同名的工作套件，視為兩個工作套件。

清單含有群組時，日期上方會出現 {{ui:Show}} 清單。選擇一個階段或工作套件，即可如同單一項目般播放：

- 滑桿與 {{ui:Play}} 會從該群組的最早開始日播放到最晚完成日，
- 清單只列出並上色該群組的工作，群組以外的元素呈透明，
- 清單下方的文字會說明在該日期已完成、進行中與尚未開始的工作數量，
- {{ui:Select its elements}} 會選取該群組的所有元素，以供 {{ui:Show}}、{{ui:Section}} 或明細表使用。

選擇**所有工作**即可再次查看整份進度表。

## 預期結果

- **已完成**：所有工作皆已完成的元素，以其原本顏色顯示。
- **進行中**：當日有工作進行中的元素，以赭色顯示。工作從開始日到完成日為止皆屬進行中。
- **尚未開始**：呈透明。
- 不屬於任何工作的元素維持原狀。清單會顯示每項工作找到的元素數量。無法讀取或未找到任何元素的列，會連同其行號一併列出。

## 連結、甘特圖與 MS Project

- 開啟 Microsoft Project XML 檔（`.xml`），或含有 `Predecessors` 欄的 CSV。連結類型可為完成到開始、開始到開始、完成到完成或開始到完成，並可設定以天數計的提前或延後。
- 工作清單下方的甘特圖會將每項工作畫成長條，並以箭頭表示連結。要徑上的工作以紅色顯示。連結迴圈或不存在的前置工作會列在面板中。
- {{ui:Save as MS Project XML}} 與 {{ui:Save CSV with links}} 會將含連結的進度表寫回檔案。

## 下一步

- [依類別、名稱或屬性尋找元素](topic:find)
- [依屬性為元素上色](topic:color-by-property)
