---
title: 在其他程式中開啟場景
summary: 將場景儲存為 USD 或 glTF 檔案，供任何可讀取這些格式的程式使用；或從 Studio 在此電腦的程式中開啟。
keywords: 開啟於, usd, gltf, glb, 匯出, 算圖程式, 建築視覺化, studio, usdview, 傳送, 交接, 封裝檔, unreal 資料夾
from: 0a6559ee
---

在{{ui:算圖}}的引擎清單中選擇一個**開啟於…**項目，即可將場景帶到其他程式。不會有任何內容傳回模型。

## 適用於任何程式的檔案

- **USD 檔**會將場景儲存為 `.usdc`（若模型含有圖片則為 `.usdz`）：與[另存新檔為 USD](topic:usd)相同的檔案，包含材質、燈具與相機。它保留實例化與精確的材質數值。大多數算圖器、遊戲引擎與檢視器都能讀取 USD。
- **glTF 檔（.glb）**會儲存較輕量的 glTF 2.0 檔案，包含材質、貼圖與燈具；其包含與不包含的內容，請見[將模型傳送給算圖程式](topic:model-for-rendering)。

- **Unreal 專案資料夾（.zip）**會儲存[將場景傳送到遊戲引擎](topic:render-unreal)所寫出的資料夾，供任何電腦上的專案使用。

三者在瀏覽器與 Studio 中都可使用。

## 在 Studio 中：在程式中開啟

Studio 會列出此電腦上能開啟該場景的程式：若 usdview 位於你的搜尋路徑中則列出它，另外還有電腦為該檔案類型提供的程式。選擇一個程式，若它同時支援 USD 與 glTF，則選擇其一，然後按下{{ui:算圖}}。Studio 會將封裝檔寫入「文件」下的新資料夾（`CadCraft hand-off`；不會覆寫任何內容，每次傳送都有各自的資料夾），接著在該資料夾上啟動程式，並告知檔案所在的位置。

| 程式 | 最適合讀取 |
|---|---|
| usdview | USD |
| 電腦本身的程式 | 電腦為該檔案類型提供的任何程式 |

Studio 只會啟動此固定清單中的程式；它不會執行網頁要求的任何程式，也絕不會啟動 GNU GPL 授權的程式（請見[用其他程式繪製畫面](topic:render-other-program#programs-cadcraft-never-runs)）。任何能讀取 USD 或 glTF 的程式，都可以從上方的**適用於任何程式的檔案**開啟該檔案。

:::note
Twinmotion、Enscape 及其他視覺化程式不在清單中：CadCraft 尚未與它們測試，對它們也不作任何說明。從這裡取得的 glTF 或 USD 檔案是進入的途徑；請見[外掛算圖器](topic:model-for-rendering#enscape-and-other-plug-in-renderers)的相關說明。
:::
