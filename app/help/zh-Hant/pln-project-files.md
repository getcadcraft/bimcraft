---
title: 開啟.pln與.pla專案檔
summary: BimCraft目前如何處理.pln、.pla、.tpl與.bpn檔案，以及如何從中匯出IFC與DWG，讓模型與圖紙能在此開啟。
keywords: pln, pla, tpl, bpn, 專案檔, 封存, 範本, 備份, ifc匯出, dwg匯出, 轉換器, 區域, 配置
from: 41fb921d
---

## 目標

將以`.pln`（專案）、`.pla`（含程式庫的封存）、`.tpl`（範本）或`.bpn`（備份）儲存的專案匯入BimCraft。這些都是Archicad自有的檔案。

## 目前可開啟的內容

- **專案檔本身目前還無法開啟。** 其格式尚未公開，BimCraft目前尚不讀取。開啟時，BimCraft會說明此情況，並指向本頁。
- **BimCraft會檢查檔案的前幾個位元組。** 17版以後的Archicad專案都以相同的簡短簽章開頭，因此BimCraft可以確定檔案是Archicad專案。若檔案使用Archicad的檔名，但開頭不是該簽章，可能是已更名、已損毀或來自較舊版本。此簽章無法區分專案、封存與範本。
- **IFC匯出檔可完整開啟**：3D模型、樓層、以空間呈現的區域、元素資料、屬性集與分類，並可使用BimCraft所有工具。
- **DWG匯出檔可在2D視圖中開啟**，包含其圖層與配置，並可在{{ui:3D}}中開啟。若要編輯，請使用{{ui:Edit in CadCraft}}。

或是將整個專案以單一zip檔匯入，包括其視圖、配置與特性群組：請參閱[開啟專案套件](topic:open-project-bundle)。

## 匯出IFC（模型）

1. 在Archicad中開啟專案。
2. 選擇 **檔案 > 另存新檔**，並選取 **IFC** 作為檔案類型。
3. 選擇IFC轉換器（Archicad對一組IFC匯出設定的稱呼）。**IFC4 Reference View**或**IFC2X3 Coordination View 2.0**適用於BimCraft。IFC4X3也能開啟。
4. 選擇要匯出的內容：整個專案，或僅匯出目前所檢視樓層上可見的元素。
5. 儲存後，在BimCraft中按一下{{ui:Choose a file}}，並選擇`.ifc`檔案。

匯出前，請在轉換器設定中檢查以下項目：

- **區域**：請匯出，讓房間以空間呈現。在BimCraft中按一下{{ui:Spaces}}即可查看。
- **特性與分類**：請匯出，讓它們顯示在{{ui:Properties}}中，並可用於{{ui:Find}}、{{ui:Color}}與{{ui:Quantity totals}}。
- **純`.ifc`**，而非`.ifczip`或`.ifcxml`。BimCraft只開啟純`.ifc`。

## 匯出DWG（圖紙）

1. 開啟要匯出的平面、剖面或配置。
2. 選擇 **檔案 > 另存新檔**，並選取 **DWG** 作為檔案類型。
3. 選取DXF-DWG轉換器，然後儲存。
4. 若要匯出整組圖紙，請從配置簿儲存配置，或將其發佈為DWG。
5. 在BimCraft中開啟`.dwg`。若匯出時連結的圖形與其位於同一資料夾，會隨之開啟；請參閱[連結的圖形與影像](topic:dwg-linked-files)。

## 疑難排解

- **「… 是Archicad專案：其前幾個位元組已表明此點。」** 請依上述方式匯出IFC或DWG，並開啟該檔案。
- **「… 的檔名與Archicad檔案相同，但開頭不符。」** 請檢查檔案來源：它可能是其他類型的檔案改了新檔名（請嘗試以其真正的副檔名開啟）、未完成的複本，或是17版之前的專案。若可以，請在Archicad中開啟後匯出IFC或DWG。
- **模型開啟時沒有房間。** 未匯出區域。請在IFC轉換器中開啟區域選項，然後重新匯出。
- **開口未被切割。** BimCraft會在{{ui:File}}面板的 **尚未繪製** 下說明此情況。請重新匯出；若仍然如此，請在產生該模型的程式中開啟模型，並檢查其中的開口。
- **DWG上的文字外觀不同。** 匯出時可能保留了BimCraft沒有的字型；BimCraft會以一般無襯線字型繪製文字。

另請參閱[透過IFC將專案檔載入3D](topic:rvt-to-ifc)與[BimCraft從各格式讀取的內容](topic:file-formats)。
