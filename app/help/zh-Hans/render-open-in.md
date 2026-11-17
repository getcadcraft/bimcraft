---
title: 在另一程序中打开场景
summary: 将场景保存为任何程序都能读取的 USD 或 glTF 文件，或在 Studio 中于本机的程序里打开它。
keywords: 在…中打开, usd, gltf, glb, 导出, 渲染程序, archviz, studio, usdview, 发送, 交接, 打包, Unreal 文件夹
from: 0a6559ee
---

在 {{ui:Render}} 的引擎列表中选择一个 **在…中打开** 条目，即可将场景交给其他程序。结果不会返回到模型中。

## 适用于任何程序的文件

- **USD 文件** 将场景保存为 `.usdc`（若模型包含图片则为 `.usdz`）：与 [另存为 USD](topic:usd) 相同的文件，包含材质、灯具和相机。它保留实例化以及精确的材质数值。大多数渲染器、游戏引擎和查看器都能读取 USD。
- **glTF 文件（.glb）** 保存较轻量的 glTF 2.0 文件，包含材质、纹理和灯具；其包含与省略的内容见 [将模型发送到渲染程序](topic:model-for-rendering)。
- **Unreal 项目文件夹（.zip）** 保存 [将场景发送到游戏引擎](topic:render-unreal) 所写入的文件夹，用于任何计算机上的项目。

三者在浏览器和 Studio 中均可使用。

## 在 Studio 中：在程序里打开

Studio 会列出本机上能打开该场景的程序：若 usdview 位于你的搜索路径中，则列出 usdview，以及计算机为该文件类型提供的程序。选择一个程序，若其同时支持 USD 和 glTF，则选择 USD 或 glTF，然后点击 {{ui:Render}}。Studio 会将打包文件写入 `文档` 下的一个新文件夹（`CadCraft hand-off`；不会覆盖任何内容，每次发送都有各自的文件夹），启动该程序并打开它，然后告知文件所在的位置。

| 程序 | 读取效果最佳 |
|---|---|
| usdview | USD |
| 计算机自带的程序 | 计算机为该文件类型提供的任何程序 |

Studio 只会启动这份固定列表中的程序；它不会运行页面按名称请求的任何东西，也从不启动 GNU GPL 许可证下的程序（见 [用其他程序绘制图像](topic:render-other-program#programs-cadcraft-never-runs)）。任何能读取 USD 或 glTF 的程序都可以打开上面 **适用于任何程序的文件** 中的文件。

:::note
Twinmotion、Enscape 及其他可视化程序不在列表中：CadCraft 未对它们进行过检查，也不对其作出任何保证。从这里导出的 glTF 或 USD 文件是进入这些程序的途径；请参阅关于 [插件渲染器](topic:model-for-rendering#enscape-and-other-plug-in-renderers) 的说明。
:::
