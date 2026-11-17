---
title: 渲染模型的图像
summary: 为三维视图生成日光图像：天空、按站点纬度放置的太阳、柔和阴影、玻璃窗；使用 WebGPU 时，可在显卡上通过路径追踪实现天空、相机、光线混合、调色、雾和渲染队列。
keywords: 渲染, 预设, 场景预设, 室内, 室外, 剖面视图, 夜景, 一键, 渲染, 路径追踪, 光线追踪, 全局光照, 反射, 折射, 高质量, 照片, 真实感, 图片, 图像, png, 静态图, 天空, 太阳, 日光, 阴影, 柔和阴影, 环境光遮蔽, 玻璃, 窗, 金属, 材质, 曝光, 亮度, 阴天, 黄昏, 影棚, 演示, 可视化, webgpu, 降噪, 物理天空, hdri, ies, 景深, 全景, 白平衡, 光线混合, 渲染元素, exr, 16 位 png, 雾, 焦散, 渲染队列
from: beb74cc7
---

{{ui:Render}} 位于工具栏上，可生成三维视图的日光图像：包括天空、按站点纬度放置的太阳、柔和阴影、从整个天空照来并使角落变暗的光线，以及可呈现玻璃或金属效果的颜色。模型和文件都不会被修改。

## 渲染视图

1. 将三维视图调整为你希望图像呈现的样子：环绕和缩放，隐藏不需要的楼层或构件，若图像应显示切面，则设置一个 [剖面](topic:section-plane)。
2. 点击工具栏上的 {{ui:Render}}。
3. 若按下的 {{ui:Scene}} 不是你想要的，请选择一个 {{ui:Scene}}（见 [场景预设](topic:render#scene-presets-a-good-picture-in-one-click)），选择 {{ui:Size}}，然后在对话框中点击 {{ui:Render}}。

   图像在渲染时逐步显现，每一遍都会更平滑。{{ui:Stop}}（或 {{key:Esc}}）会提前结束渲染，并保留当前的图像。

4. 点击 {{ui:Save}} 将其下载为 PNG，或点击 {{ui:Save as}} 选择其他格式（见 [保存图像](topic:render#save-the-picture)）。图像以模型的文件名命名。

:::tip
先以 {{ui:Draft}} 质量、视图的大小检查相机，然后以更大的尺寸渲染 {{ui:Good}} 或 {{ui:Best}} 作为最终图像。
:::

## 场景预设：一键获得好图像

对话框顶部有四个 {{ui:Scene}} 按钮。每个按钮可一次性设置天空、亮度、地面、边线、质量和太阳，因此在第一张图像之前无需学习任何内容。点击其中一个，然后点击 {{ui:Render}}。

| 场景 | 设置内容 | 用途 |
|---|---|---|
| {{ui:Exterior}} | 晴朗天空、模型自身的太阳、开启地面 | 从外部看建筑 |
| {{ui:Interior}} | 阴天天空（光线均匀，无强烈的太阳光斑），亮半档 | 从房间内部看 |
| {{ui:Section view}} | 白色影棚、无地面、快速渲染中显示边线 | 被剖面切开的模型 |
| {{ui:Night}} | 太阳落下（站点所在半球的仲冬午夜）、亮一档 | 灯具照亮模型。若无灯具，图像会很暗 |

- {{ui:Pick for this view}} 会为你选择：剖切开启时为 {{ui:Section view}}，相机位于模型内部时为 {{ui:Interior}}，否则为 {{ui:Exterior}}。你第一次打开对话框时，它会自动以此方式开始。
- 所有设置都保留在下方，可以更改。一旦你更改了某项设置，场景就不再与之匹配，任何按钮都不会被按下，按钮下方的提示行会说明这些设置是你自定义的。再次点击场景可将其数值恢复。
- 场景不会改变引擎、模式、大小、材质、相机或灯具。

:::note
场景在 ModelCraft 和 BimCraft 中给出的数值相同。最终图像的效果取决于你的模型和显卡。
:::

## 图像中显示的内容

三维视图中以实体显示的内容会被渲染：隐藏和透明的构件、隐藏的楼层及隐藏的模型都会被排除；只有当 {{ui:Spaces}} 开启时才显示房间。剖切面或剖切框会像在视图中一样切开图像。构件以其自身颜色显示：不使用按属性着色（{{ui:Color}} 选项卡）。

## 设置

| 设置 | 作用 |
|---|---|
| {{ui:Size}} | 视图的大小、视图大小的两倍、Full HD、4K 或正方形 |
| {{ui:Mode}} | {{ui:Fast}}，或下方的 {{ui:High quality (path traced)}}，及其 {{ui:Time limit}} |
| {{ui:Quality}} | 平均多少遍（在高质量模式下为采样数）：{{ui:Draft}} 为 16，{{ui:Good}} 为 64，{{ui:Best}} 为 256。遍数越多，阴影和边缘越平滑，耗时越长 |
| {{ui:Sky}} | {{ui:Clear sky}}、{{ui:Overcast}}、{{ui:Dusk}}，或 {{ui:White studio}}（纯白背景） |
| {{ui:Sun}} | 文件为其站点提供的纬度（IfcSite）上的 6 月 21 日 15:00，并转向模型的真北。勾选 {{ui:Use another date and time for this picture}} 可选择其他时间 |
| {{ui:Brightness}} | 以档（stops）为单位调亮或调暗 |
| {{ui:Ground under the model}} | 位于模型最低点的地面，接收阴影并淡入地平线 |
| {{ui:Draw edges}} | 在图像上以细线绘制构件的边缘 |

当所选时间太阳位于地平线以下时，即为夜晚：天空变暗，模型的灯具将其照亮。

## 灯具

模型中的每个灯具都是图像中的一盏灯：IFC 文件中的灯具（IfcLightFixture，或类型为灯具的构件），包括你从库中放置的灯具。每盏灯从灯具略下方向下照射。若文件给出了灯具的功率，其亮度据此确定；否则为 800 流明的暖白光。

对话框在 {{ui:Lamps}} 下列出灯具：取消勾选可关闭一盏灯，或输入其亮度（流明）。这些更改会保存在 IFC 中（灯具的 `CadCraft_Light` 属性集中，你也可以在属性中更改），{{key:Ctrl+Z}} 可撤销它们。

若文件未说明其站点位置，则太阳将置于北纬 40°，对话框会说明这一点。时间为站点的当地时间，由其经度推算，因此在时钟设置不同的地方可能相差一小时。

这些设置保存在此浏览器中，供下一张图像使用，不会保存在 IFC 文件中。

## 玻璃和其他材质

在 {{ui:Materials}} 下，屏幕上的每种颜色都有一种外观：{{ui:Matte}}、{{ui:Satin}}、{{ui:Glossy}}、{{ui:Metal}}、{{ui:Polished metal}}、{{ui:Glass}} 或 {{ui:Frosted glass}}。IFC 文件中设为透明的颜色（例如窗玻璃）默认为 {{ui:Glass}}。

:::note
在 {{ui:Fast}} 模式下，玻璃和金属反射的是天空，而不是模型的其余部分，且光线不会通过玻璃折射。下方的 {{ui:High quality (path traced)}} 模式可以同时实现这两者。
:::

## 高质量

选择 {{ui:Mode}} › {{ui:High quality (path traced)}}，可得到遵循相机所见光线路径的图像：

- 光线在表面之间反弹，因此透过窗户或由灯具照亮的房间会在各个方向被照亮，颜色也会溢到相邻表面上；
- 玻璃是真实的玻璃：光线会穿过它折射，并且它会反射模型；
- 金属和抛光表面会反射模型的其余部分；
- 灯板以面光源方式发光，并带有柔和阴影。

此模式比 {{ui:Fast}} 慢得多：每一遍都会重新追踪每个像素的光线。图像开始时会有颗粒，随着采样累加而逐渐变清晰，因此请从小尺寸开始（{{ui:The view's size}}，{{ui:Draft}}），并选择 {{ui:Time limit}}：时间到时，将保留当前图像。{{ui:Stop}} 同样会保留图像。第一遍需要等待，直到浏览器完成路径追踪器的准备。

在浏览器支持 WebGPU 的情况下，路径追踪器为 CadCraft 自研，并在显卡上运行；图像下方的提示行会说明这一点。在 {{ui:Stop}} 或时间限制到达后，{{ui:Resume}} 会继续同一图像，直到完成全部采样；更改设置或再次按下 {{ui:Render}} 则会从头开始。没有 WebGPU 时，图像改用 WebGL 进行路径追踪（提示行会说明），此时不提供 {{ui:Resume}}。

:::linux
Linux 上的 Firefox 和大多数 Chrome 配置尚未提供 WebGPU，因此那里的高质量模式使用 WebGL。
:::

在此模式下不绘制边线，纹理显示其颜色和粗糙度但不显示其凹凸，并且在图像开始渲染前会先对模型进行剖切。

{{ui:Denoise (clears the grain left after the samples)}} 默认开启：图像完成或停止后，剩余颗粒会由为此设计的神经网络清除（Intel Open Image Denoise 公布的网络，在你自己的计算机上运行：优先使用显卡，否则使用处理器）。{{ui:Show}} › {{ui:The picture before denoising}} 会显示未降噪的图像。

## 显卡上的天空和配光文件

在 WebGPU 下，高质量模式还有两种天空：

- {{ui:Physical sky}} 根据太阳高度计算日光：头顶为深蓝色，地平线处为淡色带，太阳越低越暖、越暗。{{ui:Haze}} 从非常清澈的一天（2）到雾霾的一天（10）。
- {{ui:Sky picture (HDRI)}} 用真实场所的全景图片照亮模型。{{ui:Choose a picture…}} 可选择等距圆柱投影的 `.hdr` 或 `.exr` 文件；{{ui:Turn}} 使其绕模型旋转，{{ui:Picture brightness}} 使其变亮或变暗。图片自带太阳，因此不会再添加模型的太阳。它仅在页面打开期间保留：重新打开后需再次选择。

{{ui:Lamps}} 列表中的每盏灯都可以使用厂商的配光文件：{{ui:IES profile…}} 读取 IES（LM-63）文件，之后该灯的光线会按照该灯具的方式照射（例如窄光射灯、墙面洗墙灯）。所有同名灯都会使用它，且每盏灯保持自己的亮度。点击配光文件的名称即可停止使用它。

清澈的玻璃窗有助于天空的光线进入房间。

{{ui:Fast}} 模式和 WebGL 路径追踪器会将 {{ui:Physical sky}} 和 {{ui:Sky picture (HDRI)}} 显示为晴朗天空，并忽略配光文件。

## 相机

{{ui:Camera}} 像拍照一样设置图像：

- {{ui:Exposure}}：保留 {{ui:Brightness slider}}，或选择 {{ui:Camera settings}}，并像在相机上一样设置 {{ui:Aperture (f-stop)}}、{{ui:Shutter speed}} 和 {{ui:ISO}}；旁边的 EV 是常用的曝光值。f/16、1/100 秒、ISO 100 符合晴天；较暗的场景需要更大的光圈、更慢的快门或更高的 ISO。此功能适用于所有模式。
- {{ui:Depth of field}} 会模糊比 {{ui:Focus distance (m)}} 更近或更远的部分，效果如同该光圈的镜头所呈现（留空则对准视图中央的内容）；{{ui:Aperture shape}} 使焦外高光呈圆形或多边形。
- {{ui:Two-point perspective (vertical lines stay vertical)}} 会将相机调平并平移图像，如同建筑移轴镜头，因此在仰视或俯视建筑时墙面不会倾斜。
- {{ui:White balance}} 设置哪种光色显示为白色：较低（例如 3000 K）适用于暖色灯光，较高适用于阴影和阴天。
- {{ui:Projection}}：{{ui:360° 全景图}} 为全景查看器生成 2:1 的图像，包含相机周围的所有内容；{{ui:360° 立体全景}} 将左眼和右眼的全景堆叠，用于头显；{{ui:立方体贴图（6 面）}} 以 3 × 2 的网格生成六个正方形视图。宽度来自 {{ui:Size}}。

投影、景深、两点透视和白平衡需要显卡上的路径追踪器（WebGPU），因此仅在 {{ui:High quality (path traced)}} 中显示。

## 完成图像

{{ui:Picture}} 会像照片一样对高质量图像进行调色，且每个控件都会立即改变完成的图像，无需重新渲染：

- {{ui:Look (view transform)}}：{{ui:ACES filmic}}（与之前相同）、{{ui:AgX}}（更柔和，在极亮光线下保留颜色）、{{ui:Filmic}}（柔和的胶片曲线）或 {{ui:Standard}}（朴素，过亮处截为白色）。
- {{ui:Contrast}} 和 {{ui:Highlight compression}}（在极亮部分找回细节）。
- {{ui:Bloom}}（亮光周围的柔和光晕）、{{ui:Glare}} 及其 {{ui:Glare streaks}}（从最亮点射出的星芒），以及 {{ui:Vignette}}（较暗的角落）。
- {{ui:Colour table (.cube)…}} 从 `.cube` 文件应用颜色分级，并带有其 {{ui:Colour table strength}}；与天空图片一样，仅在页面打开期间保留。

## 保存图像

{{ui:Save as}} 位于 {{ui:Save}} 旁边，用于选择文件格式：{{ui:PNG}}、{{ui:JPEG}} 或 {{ui:WebP}} 用于分享（JPEG 和 WebP 仅在浏览器能够写入时可用）。在显卡上完成高质量渲染后，还提供：

- {{ui:PNG, 16 bits}}：经过调色的图像，明暗之间的层次更细，用于打印或进一步编辑。
- {{ui:EXR, every layer (32-bit float)}}：渲染时的原始图像（线性光，未调色），每个渲染元素和光组各为一个图层，用于合成程序。
- {{ui:Render file (.ccrender, to grade again later)}}：对话框重新混合和调色图像所需的全部内容。{{ui:Open a render file…}} 可将其恢复，连同其混合和调色设置，无需重新渲染。

## 渲染后混合灯光

在按下 {{ui:Render}} 之前开启 {{ui:Light mixing (change each light's colour and brightness after the render)}}。图像完成（或停止）后，{{ui:Mix the picture}} 会按组列出其灯光：天空、太阳，以及按名称分组的灯具（每个同名灯具为一组）。可关闭某一组、为其设置颜色，或使其变亮或变暗，图像会立即改变，无需重新渲染。{{ui:Save mix}} 会将混合效果以一个名称保存，供以后再次选择；{{ui:As rendered}} 则恢复为生成时的图像。{{ui:Save}} 会保存混合后的图像。

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} 同样会保留图像的各个部分。{{ui:Show}} 会将视图切换为其中之一：表面颜色（反照率）、法线、深度、漫反射、镜面反射和透射光（各自的直接与间接光）、发光体与天空，以及按对象或按材质的颜色（用于制作蒙版）。

两者都会在显卡上保留额外的图层。在大尺寸下，显卡可能没有足够的空间；对话框会给出提示，此时使用较小的尺寸即可。

## 雾、烟、噪点和焦散

这些功能位于 {{ui:Fog, smoke and noise}} 中，在显卡上的 {{ui:High quality (path traced)}} 模式下工作；其他引擎不包含它们。

- {{ui:Fog and haze}} 用一层雾气填充空气直至某一高度，雾气会被太阳、天空和灯具照亮。{{ui:How far you can see, in meters}} 设定雾的浓度（约 100 m 为轻度雾霾，20 m 为浓雾），{{ui:Fog height above the ground, in meters}} 为雾的顶部，{{ui:Light shafts}} 决定雾向光源方向发光的程度。阳光在雾的顶部离开雾层，因此在阳光穿过窗户或建筑之间时，你会看到光束。
- {{ui:Smoke or cloud}} 添加一个烟或云的体积，由雾的光线照亮。{{ui:Kind}} 可为 {{ui:Cloud}}、{{ui:Smoke column}} 或 {{ui:From a volume file (.ccvol)}}（CadCraft 自有的网格格式）。{{ui:Detail}} 和 {{ui:Variation}} 用于更改已生成的云或烟柱；{{ui:Size of its longest side, in meters (0 = the size of the model)}}、{{ui:Move X (m)}}、{{ui:Move Y (m)}}、{{ui:Move Z (m)}} 和 {{ui:Turn}} 用于放置它（默认位于模型中央）；{{ui:Thickness}} 使其更浓密，{{ui:Forward glow}} 使其更朝光源方向发亮，{{ui:Color}} 为其着色。体积文件仅在页面打开期间保留，与天空图片相同。
- {{ui:Stop early where the picture is clean (adaptive sampling)}} 不再为已稳定的像素增加采样。{{ui:Noise to accept}} 为像素停止时仍可接受的颗粒程度。图像下方的提示行会说明每个像素平均获得了多少采样。
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} 追踪来自灯具和太阳的光线，使玻璃球下的亮斑或镜子在墙上的光斑清晰而无颗粒。当雾、烟、光线混合或渲染元素开启时它会关闭；它是为普通图像而设计的，并不适用于 360° 图像。

## 渲染队列

对话框中的 {{ui:Render queue}}：{{ui:Add this picture to the queue}} 会保留图像的设置和视图，{{ui:Start the queue}} 会在本计算机上依次渲染等待中的图像。关闭页面时队列会保留；打开同一模型即可继续。{{ui:Save}} 可下载已完成的图像；{{ui:Remove}} 和 {{ui:Clear finished}} 用于整理列表。队列以高质量模式渲染，因此需要 WebGPU。

## 需要多长时间

图像由你自己的计算机通过显卡生成；不会上传任何内容。耗时随遍数和像素增加：{{ui:Best}} 的遍数是 {{ui:Draft}} 的 16 倍，4K 图像的像素约为 Full HD 的四倍。大型模型每遍耗时更长。
