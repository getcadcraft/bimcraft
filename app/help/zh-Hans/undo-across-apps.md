---
title: 在CadCraft Studio中跨应用撤销
summary: 在Studio内，BimCraft会将每个完成的步骤告知Studio，使Studio能够撤销你最后所在窗口中的最后一步。
keywords: 撤销, studio, 跨应用, 项目撤销, 历史, 日志, 窗口
from: c66dd0c1
---

## 功能说明

在CadCraft Studio中，每个应用窗口在一个步骤完成时都会告知Studio（如绘制一面墙，或从扫描中接受一组墙体）。Studio按你操作的顺序保存这些步骤，并可要求产生最新步骤的窗口使用其自身的撤销功能将其撤销。BimCraft内的Ctrl+Z仍由BimCraft自行处理，同时也会告知Studio。

## 注意事项

- 只有当某窗口的撤销列表与该步骤留下的状态完全一致时，Studio才会要求其撤销。保存之后（保存会开始新的更改列表），或切换正在编辑的模型之后，BimCraft会回复列表已变化，Studio将跳过该窗口。不会强制执行任何操作。
- 在其他应用中撤销某个应用的效果尚未实现。
- 在Studio之外，没有任何变化。
- 请求撤销的Studio菜单项随Studio版本一同提供；在此之前，步骤只会被上报，没有任何菜单项使用它们。

## 后续

- [与他人实时协作](topic:work-live)
