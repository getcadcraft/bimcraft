---
title: 將模型匯出為USD
summary: 將開啟的IFC模型寫成USD，用於算圖、場景組合與其他3D程式，並保留每個元素的IFC類別、GlobalId與特性。
keywords: usd, usda, usdc, usdz, openusd, 匯出, ifc, globalid, 特性, 樓層, 專業, 場景組合, 建築視覺化, 算圖
from: 2be5f7b8
---

工具列上的{{ui:USD}}會將目前開啟的所有內容（每個模型，包括你放置的聯合模型）寫成一個USD檔案。

## 匯出

1. 在工具列上選擇{{ui:USD}}。
2. 選取{{ui:文字（.usda）}}、{{ui:二進位（.usdc）}}或{{ui:封裝（.usdz）}}。
3. 檔案會下載。狀態列會顯示寫入了多少個元素。

## 檔案內容

| IFC模型中 | USD檔案中 |
|---|---|
| 基地、建築、樓層 | 巢狀群組，樓層依標高順序排列 |
| 每個元素 | 位於其樓層與專業（Architecture、Structure、MEP、Furnishing、Site、Spaces、Other）之下的一個prim，其幾何為網格 |
| 類別、GlobalId、名稱、類型、標籤 | 名為`ifc:class`、`ifc:globalId`、`ifc:name`等的屬性 |
| 特性集與數量集 | 每個特性一個屬性；長度、面積與體積分別以公尺、平方公尺與立方公尺表示 |
| 顏色 | 材質（含透明度） |
| 空間 | 保留，並標記為參考用，讓算圖器略過 |

幾何位於IFC檔案本身的座標上。配置遵循CadCraft為建築所撰寫的USD慣例。
