---
title: 在CadCraft Studio中跨應用程式復原
summary: 在Studio內，BimCraft會把每個完成的步驟告知Studio，讓Studio能復原你最後操作的那個視窗中的最後一步。
keywords: 復原, studio, 跨應用程式, 專案復原, 歷程, 紀錄, 視窗
from: c66dd0c1
---

## 功能說明

在CadCraft Studio中，每個應用程式視窗會在步驟完成時通知Studio（例如畫好一面牆，或從掃描接受一組牆）。Studio會依你操作的順序保存這些步驟，並可要求產生最新步驟的視窗，使用該視窗自己的復原功能將其復原。在BimCraft中按Ctrl+Z仍由BimCraft自行處理，同時也會通知Studio。

## 注意事項

- Studio只有在視窗的復原清單與該步驟留下時完全相同時，才會要求該視窗復原。儲存後（儲存會開始一份新的變更清單），或切換你正在編輯的模型後，BimCraft會回覆清單已移動，Studio就會略過此視窗。不會強制執行任何操作。
- 在另一個應用程式中復原某一應用程式的效果，目前尚未實作。
- 在Studio之外，不會有任何改變。
- 要求復原的Studio功能表項目需隨Studio版本提供；在此之前，步驟仍會被回報，但沒有功能表項目使用它們。

## 下一步

- [與他人即時協作](topic:work-live)
