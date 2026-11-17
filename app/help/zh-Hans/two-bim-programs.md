---
title: 两个BIM程序之间的协作
summary: 通过IFC在两个BIM程序之间传递模型，BimCraft居中进行检查、补充并报告，保留GlobalId、属性集和分类；为两个程序设置相同的属性，并查看返回的结果。
keywords: ifc, 往返, 互操作, globalid, guid, 属性集, psets, 分类, 共享参数, 属性映射, 翻译器, bcf, 协调, 交换
from: 9f224176
---

## 操作内容

在两个BIM程序之间转移模型，例如从Revit到Archicad再返回，通过IFC进行，BimCraft居中进行检查、补充并报告哪些内容得以保留。两个程序各自的文件格式均不会被读取：所有内容都以IFC形式传递。

## BimCraft 保留的内容

在BimCraft中修改模型并点击{{ui:Save as IFC}}时，您未更改的每一行都会按原样写回。因此：

- **GlobalId** 保持不变，另一程序可以将每个构件与其发送出去的构件进行匹配。
- **属性集**及其值保持不变，您更改的值除外。
- **分类**仍附着于其构件。

## 为两个程序设置相同的属性

1. 在BimCraft中打开模型（如果您有项目包，也请打开：其属性组会被添加）。
2. 在左侧面板中，打开{{ui:Between two BIM programs}}。
3. 在**属性映射**下，下载每个程序所需的文件：
   - {{ui:Shared parameters}}：共享参数文件。在Revit中，通过“管理 › 共享参数”加载它，并将参数添加到需要它们的类别中。
   - {{ui:IFC export property sets}}：用户定义的属性集文件。在Revit的IFC导出设置中，将其选为用户定义属性集，以使导出的IFC携带相同的属性集和属性名称。
   - {{ui:Mapping table (CSV)}}：每个属性及其IFC属性集和名称、其类型，以及每个程序中对应的名称。Archicad的映射文件并非公开格式，因此请根据此表手动设置其IFC转换器和属性管理器。
   - {{ui:Mapping file}}：整个映射作为一个文件，与项目一起保存。

标准属性集（Pset_ 和 Qto_）不包含在共享参数文件中：两个程序都从各自的数据中写入这些属性集。

## 发送模型并将其带回

1. 从第一个程序导出IFC，并保留GlobalId（Revit：开启 "Store the IFC GUID in an element parameter after export"）。
2. 在BimCraft中打开它，进行检查（{{ui:Model checks}}、{{ui:Clash check}}），添加问题（{{ui:Issues}}，BCF），如有需要更改数值，然后{{ui:Save as IFC}}。
3. 在第二个程序中打开保存的IFC，进行工作，并从那里导出IFC，同时保留GlobalId（Archicad的转换器："Global Unique Identifiers: Keep existing"）。
4. 回到BimCraft，打开已发出的模型，然后添加返回的模型（在**模型**下使用{{ui:Add a model}}）。
5. 在{{ui:Between two BIM programs}}中，选择**已发出**和**已返回**，然后点击{{ui:Make the report}}。

## 阅读报告

- **构件**：有多少带着相同的GlobalId返回，多少缺失，多少是新增的。GlobalId已更改的构件显示为一个缺失和一个新增：另一程序未保留它。
- **IFC类别已更改**：以另一种构件类型返回的构件。
- **保留的属性值**：未更改而返回的值所占比例。下方列表显示更改或缺失值最多的属性。
- **分类**：保留、已更改（同一系统、另一代码）或缺失。

{{ui:Download the report (CSV)}}提供每个属性及其计数。要查看哪些构件移动或改变了形状，请对同样的两个模型使用{{ui:Compare versions}}。

:::note
BimCraft 并不运行这两个程序。哪些设置能使数值得以保留，取决于每个程序的IFC设置：报告显示实际返回的内容，因此请尝试某项设置，重新导出并比较。
:::

## 问题以BCF形式传递

您在BimCraft中提出的问题会以BCF形式导出（{{ui:Issues}}），两个程序都可以用其BCF工具读取，因此关于某个构件的问题会连同其视点一起传达给在另一程序中工作的人员。

另请参见[打开项目包](topic:open-project-bundle)、[通过IFC从项目文件到BimCraft](topic:rvt-to-ifc)和[比较模型的两个版本](topic:compare-versions)。
