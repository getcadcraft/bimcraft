---
title: 0.8 和 0.8.1 版新增功能
summary: BimCraft 新增：让人员穿行建筑、可听见的室内声学、洪水、风和地震回放、五十年全生命周期视图、依据 IDS 的检查、标记与明细表、移动、对齐和分布、平面下的图片、由扫描生成墙体、墙板图、太阳能、分体式与 VRF 系统、管道和线缆选型、混凝土与地震校核、任意地图投影、渲染引擎选择以及 Studio 撤销；0.8.1 修复了功能区布局中灰显的工具。
keywords: 新增功能, 更新日志, 发行说明, 更改, 0.8, 0.8.1, 版本, 新功能, 疏散, 人员, 队列, 声学, 混响, 脉冲响应, 洪水, 风, 地震, 灾害, 全生命周期, 使用寿命, ids, 标记, 明细表, 移动, 对齐, 分布, 图片, 背景, 扫描转墙体, CivilCraft 场地, 墙板图, 框架, 太阳能, 光伏, 分体式, vrf, 风机盘管, 管道选型, 线槽, 照度, 混凝土, 抗震, 比较扫描, epsg, 投影, 文档, 模板, 碳, 成本, energyplus, 渲染引擎, 打开方式, usd, glb, unreal, 撤销, 插件, pcf, 符号, 植物, 描摹, 画笔, 功能区, 项目浏览器, 布局
from: 87b03056
---

这是 BimCraft 0.8（2026-11-01）和 0.8.1（2026-11-02）相对于 0.7 的变化。BimCraft 现在可以回答有关建筑的问题并进行测试，包括人员、声音、水、风和地震，并可使用更多工具绘制建筑；0.8.1 为修复版本。

## 新增内容

### 测试建筑

- **建筑中的人员。** {{ui:People in the building}}区块位于左侧面板，可让人员按疏散或正常一天的到达情况穿过房间、门和楼梯。可看到建筑收窄处的排队情况、从每个房间到出口的最长步行距离，以及最后一人所需的时间。在门上勾选{{ui:Shut}}可查看变化，勾选{{ui:Show the people in the 3D view}}可观看行人。结果会显示在问题中。这是用于设计决策的粗略人群模型，不是消防安全证明。参见[让人员穿过建筑](topic:people-in-the-building)。
- **室内声学，可听见效果。** {{ui:Room acoustics}}区块按八度频带给出每个房间的混响时间（Sabine 和 Eyring），依据房间尺寸和所选饰面计算；若设定自定义目标值，还会说明需要多少吸声量才能达标。{{ui:Play it in this room}}通过为该房间计算的脉冲响应播放人声、拍手声、拨弦音或自备的声音文件。吸声数值为可替换的典型公开值。参见[室内声学](topic:room-acoustics)。
- **洪水、风和地震回放。** {{ui:Hazard playback}}在平面或立面上通过时间滑块播放水位上涨穿过房间的过程、每层的风压以及地震引起的楼层震动。简单模型及其假设条件显示在面板上，不是规范校核。参见[播放洪水、风或地震](topic:hazard-playback)。
- **五十年内会磨损的部分。** {{ui:Life-cycle view}}列出窗、门、饰面和屋顶及各自的使用寿命、更换年份；若输入每单位成本，还会列出按年的成本及其现值。{{ui:Save the schedule (CSV)}}将其导出。使用寿命为规划参考值。参见[查看五十年内的磨损情况](topic:life-cycle-view)。
- **混凝土与地震校核。** {{ui:Analysis}}选项卡中的{{ui:Concrete members}}和{{ui:Seismic loads}}区块按 ACI 318-19 校核混凝土梁和柱，并按 ASCE 7-22 在刚性楼板上生成等效侧向力，同时计算层间位移。供工程师复核。参见[校核混凝土构件并生成地震荷载](topic:concrete-and-seismic)。

### 检查与报告

- **依据 IDS 检查。** 加载客户提供的 `.ids` 文件，在交付 IFC 之前即可在问题中看到所有不符合要求的构件。在{{ui:Model checks}}下打开{{ui:Check against an IDS}}。参见[依据客户的 IDS 检查模型](topic:check-against-ids)。
- **标记与明细表。** 定义自有标记，一次性应用到多个构件，并创建其列、筛选和分组读取这些标记的明细表；标记保存在 IFC 中。参见[标记与明细表](topic:tags-and-schedules)。
- **由模型生成文档。** {{ui:Documents from the model}}将打开的 IFC 填入规范模板，并保存为 PDF、Word 文档或 Markdown。参见[由模型生成文档](topic:documents-from-the-model)。
- **将扫描与模型比较。** 打开点云后，{{ui:Compare}}会判断每个构件为已建成、部分建成、缺失或未到达，并显示建成百分比。参见[将扫描与模型比较](topic:compare-scan-with-model)。
- **隐含碳与成本。** 碳排放面板根据可编辑的因子表汇总隐含碳，成本面板将价格分摊到 4D 进度表中。随 BimCraft 提供的因子为通用值，并标记为未核实。参见[隐含碳与成本](topic:embodied-carbon-and-5d-cost)。
- **任意地图投影。** {{ui:Measure}} › {{ui:Coordinate system…}}接受 EPSG 编号、UTM 带号、名称或自定义投影定义。参见[使用任意投影进行地理配准](topic:georeference-any-projection)。

### 绘制与编辑

- **移动、对齐和分布。** 位于{{ui:Build}}下；{{key:Shift+M}}启动移动（单独的{{key:M}}仍为测量）。移动时按{{key:C}}可一边移动一边复制，每一步为一次撤销，并可在 Live TeamWork 会话中同步。参见[移动、复制、对齐和分布](topic:move-align-distribute)。
- **平面下的图片。** {{ui:Build}} › {{ui:Picture}}可在某个楼层平面下或竖直平面上放置 PNG、JPEG 或 WebP 图片。通过两点设置比例，并可移动、旋转、淡化和锁定。在 MarkupCraft 中复制的区域会以其图纸比例粘贴。参见[在平面下放置图片](topic:pictures-as-backgrounds)。
- **由扫描生成墙体。** 打开扫描后，墙体、门和房间会以建议形式出现，可逐一保留或拒绝，全部操作可合并为一次撤销步骤。仅能识别两个互相垂直方向上的墙体。参见[将扫描转换为墙体](topic:scan-to-walls)。
- **描摹、画笔与楼梯草图。** {{ui:Trace}}在平面下以虚线显示另一楼层，{{ui:Pens}}可在一个视图中为墙、门和窗设置各自的线宽，{{ui:Sketch stair}}可将行走路线转换为楼梯。可打开 Wavefront OBJ 网格。参见[描摹楼层、画笔与由草图生成楼梯](topic:trace-pens-stairs-obj)。
- **围绕地址的建筑。** CivilCraft 的“地址转场地”找到的建筑和地块会以建议形式出现；勾选要添加的项目。参见[从 CivilCraft 场地开始](topic:site-from-civilcraft)。
- **墙板图。** {{ui:Build}} › {{ui:Panel drawings}}以木材或轻型钢框架构造墙体、楼板和屋顶，并将切割清单保存为 CSV，将加工详图保存为 PDF。仅为起始值，不是结构设计。参见[墙板图](topic:panel-drawings)。
- **符号面板与植物。** {{ui:Build}} › {{ui:Symbol palette}}可按名称查找电气和给排水符号；{{ui:Library}}的{{ui:Plants}}来源列出约 400 种带平面符号的植物。参见[符号面板](topic:symbol-palette)和[放置植物](topic:plant-list)。

### 管道、风管与能源

- **分体式、VRF 与风机盘管。** 室内外机及其连接，以及依据可修改的典型示例值表选定尺寸的配管组。参见[分体式、VRF 与风机盘管](topic:split-vrf-fan-coils)。
- **计算。** 计算面板可用压降校核供水管和风管尺寸，将线缆穿过线槽和导管并显示其填充率，并根据 IES 或 EULUMDAT 文件计算照度。默认值均有标注；请输入规范中的数值。参见[管道、风管、线缆与照明计算](topic:mep-calculations)。
- **PCF 文件。** 管道工具中的**导出 PCF**可将管线写入管道应力和等轴测图程序，读回的 PCF 文件可绘制其管道。参见[管道组件文件](topic:piping-pcf)。
- **太阳能光伏。** 在屋顶或地面布置光伏阵列，根据模型计算遮挡，估算年发电量，检查组串，并生成单线图数据。起始组件和损耗为通用值。参见[太阳能光伏](topic:solar-pv)。
- **EnergyPlus 文件。** “使用 EnergyPlus 检查”面板会将模型写成 IDF 文件，以便在本机 EnergyPlus 中运行。在浏览器中运行需要自行托管的版本并输入其地址；BimCraft 不附带该版本。参见[使用 EnergyPlus 检查供暖与制冷](topic:check-with-energyplus)。

### 图片与文件

- **选择渲染引擎。** {{ui:Render}}有一个{{ui:Engine}}选项。内置的两个引擎（Fast 和 Path tracer）仍为默认。**打开方式**可将场景保存为 USD 或 glTF 文件，并将 Unreal 项目文件夹保存为 .zip；在 CadCraft Studio 中，插件可添加引擎。打开项目的 Unreal 插件尚未发布。参见[选择由哪个程序绘制图片](topic:render-engines)。
- **Studio 撤销。** 在 CadCraft Studio 内，BimCraft 会将每个完成的步骤告知 Studio，使 Studio 能够撤销最近使用的窗口中的最后一步。参见[跨应用撤销](topic:undo-across-apps)。
- **文件中的插件。** IFC 会记录哪些插件写入了它，并在打开时提供尚未安装的插件。参见[文件中的插件](topic:add-ons-in-your-file)。

### 所有应用

- **连接 AI 助手。** 自备的助手可通过 Studio 的连接控制 BimCraft，并回答有关模型的问题，例如某个面积下有哪些房间。Studio 本身没有 AI。参见[让 AI 助手处理模型](topic:assistants)。
- **工具栏行数。** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}}可选择换行、2 行或 1 行；默认仍为换行。
- **输入设备。** 触控板、手写笔、3D 鼠标、控制器和 MIDI 设置在所有应用中共享。
- **问题与 Live。** 警告面板和 Live 会话的工作方式与之前相同，上述新增检查会汇入问题。
- **语言。** 支持 54 种语言，其中十种为新增。英语以外的语言均为尚未经母语者审校的机器草稿；帮助主题大多为英语。

## 0.8.1 中的修复

- **功能区 + 项目浏览器布局。** 插入 › 导入 CAD、插入 › 图像和管理 › 项目单位此前显示“BimCraft 尚未实现”。现在“图像”会打开图片工具，“导入 CAD”会打开{{ui:Build}} › {{ui:From a drawing…}}（DWG、DXF、PDF 或扫描件），“项目单位”会打开{{ui:Settings}} › {{ui:Global}} › {{ui:Units}}。移动和对齐分别运行移动与对齐工具，“标高”会打开{{ui:Add levels…}}，“阶段”会打开改造阶段区块，“材料”会打开材料库。
- **DWG 类区块。** 此前被读取为错误的类型；已在 BimCraft 及其他读取 DWG 的应用中修复。
- **运行时语言。** Studio 和打包版本现在无需重启即可切换语言。尚未在所有平台上测试；如果语言未切换，请反馈给我们。
- **Archicad 打包脚本。** `archicad_bundle.py` 是单独下载的文件，现在可查找 Archicad 的路径，最多监视文件夹 20 秒，并在包旁重试。

## 本版本尚未包含

- **安全与设计辅助。** 建筑中的人员没有建筑规范中的疏散距离限制（需自行输入限值），也未在真实平面图上手工核验。声学、全生命周期和灾害数值为规划值，不是规范校核。
- **气候情景与 EnergyPlus。** 没有内置气候情景：可为洪水计算加载情景文件。浏览器中的 EnergyPlus 运行不属于本版本。
- **功能区布局。** 材料算量仍为“未实现”，因为 BimCraft 没有材料数量清单；另有 54 个灰显的功能区工具后端尚无 BimCraft 工具。
- **签名与平台。** Windows 安装程序和 macOS .dmg 未签名，因此 SmartScreen 会显示{{ui:More info}}，然后显示{{ui:Run anyway}}；macOS 则需右键点击，再选择{{ui:Open}}。iPad 和 iPhone 版本未针对 0.8.1 重新构建。
- **真实页面测试。** 一些较早的 BimCraft 浏览器测试在我们的测试页面中仍然失败，与 0.8.1 之前一样。

其他内容见[尚未实现的内容](topic:not-built-yet)。更早的变更见[0.7 新增功能](topic:whats-new-0-7)。
