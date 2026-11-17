---
title: 将场景发送到游戏引擎
summary: Studio 可以将场景写入 Unreal Engine 项目，并在每次发送时保持同步；你自己的编辑保存在 CadCraft 从不写入的图层中。用于打开它的插件尚未发布。
keywords: unreal, unreal engine, 游戏引擎, 链接, 发送, usd 舞台, 项目, 实时, cine camera, movie render queue
from: 154d55ef
---

在 CadCraft Studio 中，引擎列表可以包含指向 Unreal Engine 项目的**链接**。该链接仅单向：从 CadCraft 到 Unreal。

## 发送场景

1. 在引擎列表中选择 Unreal 条目。第一次使用时，Studio 会要求你选择项目文件夹（即包含 `.uproject` 文件的那个）；它会记住该文件夹。
2. 点击 {{ui:Send}}。Studio 会在项目中写入 `CadCraft/<文件名>/`：场景的 USD 文件、设置文件、配光文件，以及两个小的图层文件。
3. 修改模型、保存后再次发送。只有场景和设置文件会被替换。

## 你自己的编辑是安全的

Unreal 打开的舞台是一个只创建一次的小型根图层，其下有两个图层：位于上方的**你的图层**（`<name>.user.usda`，最初为空，CadCraft 从不改写），以及下方的 CadCraft 场景图层。你保存到自己图层中的编辑，在再次发送场景时会保留。你在 Unreal 关卡中放置的灯光和其他 Actor 不在舞台内，同样不会受到影响。

## 不使用 Studio

在浏览器中，或在 Studio 找不到 Unreal 的计算机上，请在引擎列表中选择 **Unreal 项目文件夹（.zip）**，然后点击 {{ui:Render}}。它会将相同的文件夹保存为 zip：将其解压到项目的 `CadCraft` 文件夹中。第一次保存时保持 **包含舞台文件** 开启；之后保存时将其关闭，使 zip 只包含场景和设置文件，你自己的图层永远不会被替换。

:::note
用于打开舞台、应用太阳、灯具、相机和曝光、跟随每次发送并渲染相机的 Unreal 插件**尚未发布**，也未在 Unreal 中运行过。在它发布之前，发送会将文件放入项目中，Unreal 自带的 USD 工具可以打开这些文件。Windows 是首个支持的系统，macOS 随后支持。
:::
