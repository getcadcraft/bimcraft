---
title: Những gì chưa xây dựng
summary: Những gì bản dựng BimCraft này chưa làm, và hiện nay nên dùng gì thay thế.
keywords: thiếu, giới hạn, hạn chế, không hỗ trợ, lộ trình, tạo lập, mô hình hóa, mặt cắt, đo, va chạm, bcf, đám mây, máy tính để bàn, xuất
from: 87777dcc
---

BimCraft hiện nay là một trình đọc, trình kiểm tra và trình chỉnh sửa dữ liệu IFC, và đã bắt đầu vẽ công trình: tường, cửa đi và cửa sổ, phòng, sàn, trần và mái (xem [Vẽ tường](topic:draw-walls), [Cửa đi và cửa sổ](topic:doors-and-windows) và [Phòng, sàn, trần và mái](topic:floors-and-roofs)). Đây là danh sách trung thực những gì nó chưa làm, cùng cách thay thế hiện nay.

## Mô hình hóa và tạo lập

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Vẽ dầm; cột thép hình | Dùng chương trình thiết kế của bạn, rồi mở tệp xuất IFC của nó tại đây. Cột chữ nhật và tròn được đặt tại đây (xem [Lưới và cột](topic:grids-and-columns)); cầu thang thẳng, chữ L, chữ U, cầu thang quạt và cầu thang xoắn ốc, cùng lan can, được vẽ tại đây (xem [Cầu thang và lan can](topic:stairs-and-railings)) |
| Cửa sổ ở mặt trước của dormer (mái lồi); dormer trên mặt phẳng mái vẽ bằng tay; mái cong; lớp phủ mái có kết cấu khi kết xuất | Các mặt phẳng mái vẽ theo góc của chúng, và một độ dốc cho mỗi tường: xem [Mái: độ dốc cho mỗi tường, đầu hồi, mái lều và mặt phẳng mái](topic:roofs) |
| Thay đổi tường, cửa đi hoặc cửa sổ do chương trình khác tạo | Chương trình thiết kế của bạn; các công cụ vẽ chỉ thay đổi những gì chúng đã vẽ |
| Biên dạng tường có phần nhô hoặc lỗ; lỗ mở tường không phải hình chữ nhật; thêm hoặc bỏ điểm biên dạng của tường trong khung nhìn 3D | Biên dạng, gắn, nghiêng và lỗ mở hoạt động trong Thuộc tính, trên mặt đứng và mặt cắt, trên mặt nhìn của tường và bằng các grip trong 3D, cho tường thẳng và tường cong: xem [Định hình tường: gắn, biên dạng, nghiêng và lỗ mở](topic:wall-shape) |
| Với tường cong: {{ui:Trim / extend}} và {{ui:Corner}}, khung xương, kích thước mặt bằng tự động, bắt điểm dọc theo cung (nó bắt vào hai đầu và giữa cung) | Vẽ tường thẳng cho những việc đó, hoặc dùng các đoạn thẳng. Tường cong có trong [Vẽ tường](topic:draw-walls) |
| Kéo một mục thư viện đã đặt trong khung nhìn 3D | Kéo nó trên mặt bằng, hoặc nhập X, Y và Xoay trong {{ui:Properties}}: xem [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library) |
| Đặt cây từ thư viện thực vật của không gian làm việc Landscape của CivilCraft | Trồng chúng trong CivilCraft, hoặc đặt cây và bụi từ phần cây cảnh của thư viện: xem [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library) |
| Trong tiện ích bổ sung Plant (tắt cho đến khi bạn bật): vẽ một tuyến ống định tuyến vào mô hình, số cuộn ống trên hình đẳng trục của nó, kiểm tra bố cục thiết bị đặt từ thư viện | Vẽ tuyến ống bằng {{ui:Pipe}} (xem [Ống và ống gió](topic:pipes-and-ducts)); kiểm tra bố cục đọc bảng thiết bị của chính tiện ích bổ sung |
| Xoay, đối xứng hoặc tạo mảng các tường, cửa đi và cửa sổ đã vẽ riêng lẻ (tường di chuyển và sao chép bằng Di chuyển, Dời song song và kéo giãn hộp: xem [Hình dạng tường, tách, dời, kéo giãn và khóa](topic:wall-tools)); kiểu nối (đối đầu, cắt vuông) ở góc có tường cong hoặc ba tường trở lên (xem [Hình dạng tường, tách, dời, kéo giãn và khóa](topic:wall-tools)); công cụ Văn bản; tường rèm | Sao chép mọi thứ trên một tầng bằng {{ui:Copy this level…}} (xem [Vẽ tường](topic:draw-walls#levels)); nếu không thì vẽ lại |
| Các lớp cấu tạo tường vẽ trên mặt bằng và mặt cắt; kích thước trên mặt cắt và mặt đứng; kích thước tham chiếu tới cửa đi, cửa sổ và cấu kiện khác; cấu tạo và màng trong bảng thống kê và khối lượng; thư viện vật liệu dùng chung giữa các dự án; ưu tiên lớp trên mặt cắt, mặt đứng và 3D và tại nút của ba tường trở lên (trên mặt bằng, góc, mối nối chữ T và giao nhau của hai tường được làm sạch theo ưu tiên lớp: xem [Hình dạng tường, tách, dời, kéo giãn và khóa](topic:wall-tools)); lớp bọc hoặc lớp thay đổi; chỉnh sửa cấu tạo của một tường do chương trình khác tạo | Các lớp nằm trong loại tường và bản xem trước của nó ({{ui:Wall assemblies…}}); tường được đo như một bao bọc duy nhất: xem [Cấu tạo tường và kích thước tham chiếu](topic:wall-assemblies) |
| Thay đổi hình dạng hoặc kích thước của cấu kiện (ngoài tường, cửa đi và cửa sổ vẽ tại đây, và cấu kiện đặt từ họ) | Chương trình thiết kế của bạn. Xóa, sao chép, cắt và dán làm việc tại đây: xem [Xóa, cắt, sao chép và dán cấu kiện công trình](topic:edit-elements) |
| Xóa tầng, không gian, công trình hoặc khu đất | Xóa các cấu kiện trong chúng |
| Dán cấu kiện công trình vào một mô hình khác | Sao chép và dán trong cùng một mô hình; mục thư viện đã đặt có thể dán vào mọi mô hình |
| Thêm thuộc tính mới hoặc bộ thuộc tính mới | Điền giá trị có sẵn tại đây, hoặc thêm tham số trong chương trình thiết kế của bạn rồi xuất lại |
| Chỉnh sửa khối lượng, danh sách, kiểu liệt kê | Chương trình thiết kế của bạn |
| Lưu tệp dự án của chương trình khác | BimCraft lưu IFC (và tệp họ riêng của nó: xem [Họ và kích thước của chúng](topic:families)) |
| Họ: thư viện họ đặt từ mặt bằng và dùng chung giữa các dự án (Thư viện), một điểm nóng kéo trong khung nhìn 3D của cấu kiện đã đặt (họ kéo trong bản xem trước của trình chỉnh sửa họ và trên mặt bằng), mức chi tiết chọn theo từng khung nhìn (một mức cho dự án; các tờ chọn theo tỷ lệ), phép quay trên mặt phẳng đứng bên trong một họ khác được xoay một phần tư vòng, ký hiệu mặt bằng cửa đi và cửa sổ riêng (họ vẽ theo ký hiệu khởi đầu của chúng) | Họ có tham số kiểu, công thức, ký hiệu mặt bằng riêng, điểm nóng, lặp lại, mức chi tiết, họ bên trong họ, kích thước từ bảng và tham số theo từng cấu kiện được tạo tại đây: xem [Chỉnh sửa họ](topic:family-editor) và [Họ và kích thước của chúng](topic:families). Nhân bản một họ để bắt đầu từ một họ |
| Chỉnh sửa kiểu của chương trình khác dưới dạng họ; biến mục thư viện thành họ | Kiểu của chương trình khác được liệt kê, nhóm theo ước đoán, và các cấu kiện của chúng được chọn. Mục thư viện được đặt nguyên trạng |
| Phụ kiện, van và thiết bị của nhà sản xuất (công suất, trọng lượng, kích thước kết nối của nhà sản xuất); chiều dài tê và côn ASME B16.9 trên cuộn thép; tổn thất áp suất qua phụ kiện, lưu lượng và cân bằng; đầu phun nước chữa cháy; máng cáp; tính kích thước ống đứng và ống thông hơi theo đơn vị thiết bị vệ sinh; kéo các góc của một tuyến; khoét lỗ trong tường và sàn; thả đầu tuyến đang cố định vào một cổng (trừ khi xóa thiết bị); cổng trên mục thư viện đặt từ bảng Thư viện; trọng lượng phụ kiện; đường nối, độ dày và đầu nối ống gió | Tuyến ống và ống gió với phụ kiện tiêu chuẩn chung, hệ thống, mặt bằng, bảng thống kê và khối lượng được vẽ tại đây: xem [Ống và ống gió](topic:pipes-and-ducts). Thiết bị chung có cổng, tuyến nối và kiểm tra kết nối: [Thiết bị MEP có cổng](topic:mep-equipment), [Nối ống và ống gió với thiết bị](topic:mep-connections). Bộ va chạm, khoảng hở và danh sách lỗ mở: [Kiểm tra ống và ống gió với kết cấu](topic:mep-against-structure). Cuộn thép và tờ cuộn: [Cuộn ống thép và tờ cuộn](topic:pipe-spools). Hãy mang các mục của nhà sản xuất từ chương trình MEP của bạn dưới dạng IFC |
| Kiểm tra tiêu chuẩn thiết kế cho thép chữ I hàn, cho thép chữ I có biên dạng IFC không được đặt tên là kích thước cán W, S, IPE, HEA hoặc HEB, và cho ống, thép góc và thép chữ C (chúng được trả về là chưa kiểm tra); mất ổn định hoặc đáp ứng động (tần số riêng nằm trong khối Phần tử hữu hạn) (bậc hai chỉ là P-Delta: đàn hồi, uốn, không giảm độ cứng); tường và sàn trong phân tích; tải trọng tạo từ diện tích (trừ một áp lực trên mỗi sàn bê tông) | Tab {{ui:Analysis}} cho lực, phản lực và độ võng của dầm, cột và giằng bằng phân tích bậc nhất, và kiểm tra thép chữ I cán, một công cụ hỗ trợ cho đến khi kỹ sư đã xem xét: xem [Phân tích khung kết cấu](topic:frame-analysis#design-checks) |

## Xem mô hình

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| 3D từ tệp dự án | Xuất IFC rồi mở. Xem [Đưa tệp dự án vào 3D qua IFC](topic:rvt-to-ifc) |
| Mặt đứng nội thất trong bộ bản vẽ được tạo ra (từ Thuộc tính của phòng và trên các tờ của riêng bạn thì chúng được dựng); kích thước riêng của bạn trên mặt đứng và mặt cắt (dấu cốt, chiều cao, chiều rộng và nhãn cửa đi / cửa sổ được vẽ; ghi chú được viết trong khung nhìn: xem [Chỉnh sửa trên mặt đứng và mặt cắt](topic:edit-in-elevations)); vẽ tường trên mặt đứng (chúng được vẽ trên mặt phẳng của mặt cắt); mẫu nhóm qua Studio | Bộ bản vẽ tạo từ mô hình: xem [Mặt đứng, mặt cắt và tờ](topic:sheets). Với mọi mô hình IFC: một mặt phẳng {{ui:Section}}, hoặc một hộp cắt; xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane) |
| Khung nhìn chú thích, khung nhìn chi tiết, khung nhìn bản vẽ và chú giải; đường vẽ và tô bóng vẽ trong khung nhìn; cắt xén mặt đứng hoặc mặt cắt; mẫu khung nhìn cho mặt đứng, mặt cắt, mặt bằng trần và khung nhìn 3D; mặt bằng trần trong bộ bản vẽ được tạo ra; toàn bộ tập tờ của riêng bạn trong một PDF | Mặt bằng và mặt bằng trần có phạm vi khung nhìn, vùng cắt, tỷ lệ và lớp nền (mặt bằng cũng có mẫu), và các tờ của bạn nhận mặt bằng, mặt bằng trần, mặt đứng, mặt cắt và bảng thống kê, mỗi cái lưu thành PDF: xem [Khung nhìn, phạm vi khung nhìn và tờ của bạn](topic:views-and-sheets) |
| Di chuyển đèn đã đặt lên trần sau đó; trần dốc hoặc có bậc; mẫu trần khác năm lưới; ký hiệu riêng của đèn trên mặt bằng trần | Đặt nó với **Gắn: Tại trần**; mặt bằng trần vẽ một thiết bị theo hình dạng riêng của nó: xem [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library) |
| Chia sẻ bộ tìm kiếm với người khác, các bộ bên trong tệp IFC | Bộ được giữ trong trình duyệt này; xem [Tìm cấu kiện theo lớp, tên hoặc thuộc tính](topic:find) |
| Đo góc, hoặc dọc theo một đường gồm nhiều điểm | Đo từng phần bằng {{ui:Measure}}: xem [Đo khoảng cách, diện tích mặt và vị trí trong 3D](topic:measure) |
| Kết cấu (texture) trong khung nhìn 3D trực tiếp | Vật liệu được sơn hiện màu trong khung nhìn và kết cấu trong các ảnh kết xuất: xem [Kết xuất ảnh mô hình](topic:render) |
| Va chạm khoảng hở (mềm) giữa hai bộ bất kỳ, nhóm va chạm, lưu kết quả va chạm | Chạy {{ui:Clash check}} và tạo vấn đề cho những cái quan trọng: xem [Kiểm tra va chạm](topic:clash-check). Ống và ống gió với kết cấu có {{ui:Check clearances}}: xem [Kiểm tra ống và ống gió với kết cấu](topic:mep-against-structure) |
| Lưu nhiều mô hình thành một bộ, hoặc chỉnh sửa hai mô hình cùng lúc | Chỉnh sửa một mô hình tại một thời điểm; mỗi mô hình lưu tệp riêng của nó |
| Gán vấn đề, hạn chót, nhãn, nhiều góc nhìn cho mỗi vấn đề, chỉnh sửa một vấn đề | Một góc nhìn cho mỗi vấn đề; xem [Vấn đề và tệp BCF](topic:issues-bcf) |
| `.ifczip` và `.ifcxml` | Giải nén hoặc xuất `.ifc` thuần |
| Lớp bản đồ cho mô hình không có chuyển đổi bản đồ, hoặc trong các khung nhìn của bản vẽ | Xuất mô hình cùng tọa độ của nó: xem [Bản đồ trên mặt đất dưới mô hình](topic:map-layers) |
| Bản quét E57 trên 6 triệu điểm hoặc 512 MB; tệp riêng của hãng máy quét (RCP, RCS, FLS, LGS, TZF, ZFS); đám điểm trong khung nhìn 3D của bản vẽ; lưu vị trí của đám điểm cùng mô hình | Xuất bản quét thành LAS hoặc LAZ và mở nó bên cạnh mô hình IFC: xem [Định dạng đám điểm](topic:point-cloud-formats) và [Hiển thị đám điểm bên cạnh mô hình](topic:point-clouds) |
| Đăng ký bản quét: tự tìm mục tiêu (quả cầu, bàn cờ) trong một bản quét, giải tất cả bản quét cùng lúc (điều chỉnh bó), tỷ lệ, đăng ký với một mô hình | Chọn các điểm khớp hoặc nhập tọa độ mục tiêu, rồi tinh chỉnh từng bản quét một bằng ICP: xem [Đăng ký nhiều bản quét thành một](topic:register-scans) |
| Mở tệp dự án `.pln`, `.pla`, `.tpl` và `.bpn` | Xuất IFC và DWG từ chúng, hoặc một gói dự án: xem [Mở tệp dự án .pln và .pla](topic:pln-project-files) và [Mở gói dự án](topic:open-project-bundle) |
| Mở danh sách {{ui:Elements}} để chọn theo loại | Nhấp nhóm của một loại trong {{ui:Model tree}}: xem [Tìm đường với cây mô hình](topic:model-tree) |
| Gõ bình luận hoặc tiêu đề cho vấn đề trong VR, ghi chú bằng giọng nói, di chuyển mặt phẳng cắt bằng tay trong VR, hộp cắt trong VR | Đặt vấn đề trong VR, rồi thêm nội dung của nó trong tab Vấn đề; đặt mặt phẳng cắt hoặc hộp cắt trong khung nhìn 3D trước khi vào: xem [Xem lại mô hình trong kính VR](topic:vr-review) |
| Thấy người ở bàn trong VR (chỉ người đang ở trong VR mới hiện), ghi lại một lần đi bộ trong VR | Nhờ họ tham gia trong VR, hoặc theo dõi trong khung nhìn 3D |
| Mô phỏng ánh sáng ban ngày (ánh sáng theo khí hậu, chói, số giờ nắng), cửa sổ mái trong hệ số ánh sáng ban ngày, kiểm tra theo BS EN 17037 hoặc các chương trình công trình xanh; phương pháp năng lượng ISO 52016-1, mô phỏng năng lượng theo giờ, khối lượng nhiệt và cầu nhiệt, tệp khí hậu | Công cụ hỗ trợ thiết kế: hệ số ánh sáng ban ngày trung bình, thành phần bầu trời đứng của từng cửa sổ, ánh nắng qua cửa sổ vào một ngày và hệ số ánh sáng ban ngày trên lưới ([Ước tính ánh sáng ban ngày trong từng phòng](topic:daylight-factor)); tổn thất nhiệt, năm độ-ngày và đỉnh làm lạnh theo từng phòng ([Ước tính tải sưởi và làm lạnh](topic:heating-and-cooling-loads)). Dùng chương trình mô phỏng để kiểm tra tuân thủ |
| Bản sao số công trình được lưu trữ: số liệu đọc được giữ và cảnh báo được gửi qua email khi BimCraft đã đóng, email đến hạn bảo trì; MQTT 5; đọc lại công việc COBie | Số liệu đọc từ CSV hoặc trực tiếp từ broker hoặc địa chỉ của riêng bạn khi mô hình đang mở, các giới hạn đánh dấu tài sản, tài liệu, COBie xuất và nhập: xem [Giữ dữ liệu tài sản và hồ sơ bảo trì trong mô hình](topic:assets-and-maintenance) |
| Plug-in hoặc liên kết trực tiếp cho Enscape, Twinmotion hoặc các chương trình trực quan hóa khác; tệp FBX hoặc Datasmith; một đối tượng cho mỗi cấu kiện, khung nhìn và lối đi đã lưu trong .glb | Lưu `.glb` cho các chương trình kết xuất đọc glTF, tệp USD (một đối tượng cho mỗi cấu kiện, với dữ liệu IFC của nó: xem [Xuất mô hình sang USD](topic:usd)), hoặc IFC cho những chương trình chạy bên trong một chương trình thiết kế khác: xem [Gửi mô hình tới chương trình kết xuất](topic:model-for-rendering) và [Mở cảnh trong chương trình khác](topic:render-open-in) |
| Chương trình khác vẽ ảnh Kết xuất mà không có tiện ích bổ sung công cụ kết xuất (CadCraft không bao giờ chạy chương trình theo giấy phép GNU GPL); camera toàn cảnh hoặc lập thể và ảnh bầu trời qua chương trình khác; plug-in Unreal Engine (các tệp được ghi, plug-in mở chúng chưa được phát hành) | Các công cụ kết xuất Fast và Path tracer của chúng tôi; tiện ích bổ sung của một công cụ kết xuất ([vẽ ảnh bằng chương trình khác](topic:render-other-program)); một tệp thư mục USD, glTF hoặc Unreal từ danh sách công cụ kết xuất để mang đến bất kỳ chương trình nào |
| Trong khung nhìn trực tiếp: rải cây và đá, chia sẻ toàn cảnh, một chuyến tham quan, trình xem ngoại tuyến hoặc video | Khung nhìn trực tiếp của ModelCraft có chúng; ở đây có ảnh kết xuất và toàn cảnh 360°: xem [Khung nhìn trực tiếp](topic:live-view) và [Kết xuất ảnh mô hình](topic:render) |

## Bản vẽ

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Chỉnh sửa, đo hoặc lưu DWG và DXF | Ứng dụng bản vẽ CadCraft ({{ui:Edit in CadCraft}} trên khung nhìn 2D) |
| In hoặc xuất PDF | In từ chương trình đã tạo bản vẽ; kiểm tra trước bằng {{ui:Print view}} |
| Kiểu in và bảng bút | {{ui:Print view}} hiện màu đen trơn với độ dày nét |
| Tệp DWG cũ hơn R13, và DXF nhị phân (BimCraft sẽ báo khi bạn mở một tệp) | Lưu lại bản vẽ thành DWG mới hơn, hoặc thành DXF ASCII |
| Bản vẽ liên kết bên trong bản vẽ liên kết | Mở trực tiếp chúng |
| Ảnh TIFF | Lưu bản sao PNG hoặc JPEG cùng tên rồi thêm nó |
| Bản vẽ DGN | Chỉ được liệt kê trong báo cáo thư mục |
| Đối tượng được liệt kê dưới **Chưa vẽ** | Xem bản vẽ trong chương trình đã tạo ra nó |
| Khối ACIS, vật thể, miền và bề mặt, và lưới chia nhỏ trong 3D | Xuất IFC hoặc mặt 3D từ chương trình đã tạo bản vẽ |
| Ảnh, đường dẫn nhiều và tờ trong khung nhìn 3D của bản vẽ | Xem chúng trên tab {{ui:Model}} và các tờ |
| Chọn đối tượng trong khung nhìn 2D của bản vẽ | Chuyển sang {{ui:3D}} và nhấp đối tượng ở đó: xem [Xem bản vẽ DWG hoặc DXF trong 3D](topic:dwg-in-3d) |
| Bảng thiết bị từ bản vẽ không có thẻ `KCL-ITEM` | Không có |
| Bảng thiết bị dạng XLSX hoặc PDF | {{ui:Download CSV}} rồi mở nó trong bảng tính |

## Tệp và nền tảng

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Lưu trên đám mây | Lưu bản sao trên máy tính hoặc máy chủ văn phòng của bạn. Lưu đám mây chưa có sẵn |
| Ghi nhớ thư mục trong Firefox và Safari | Chọn lại thư mục, hoặc kéo nó vào |
| Hoàn tác sau khi lưu | Mở lại tệp gốc để bắt đầu lại |
| Khôi phục phần bị thiếu của tệp dự án bị cắt | Sao chép lại bản gốc; trong một thư mục, BimCraft đọc bản sao lưu đầy đủ mới nhất |
| Mở lại các tệp bạn đang mở | Thay đổi chưa lưu được đề nghị khôi phục dưới dạng "Khôi phục công việc của bạn?" khi bạn quay lại; mở lại các tệp từ danh sách gần đây |
