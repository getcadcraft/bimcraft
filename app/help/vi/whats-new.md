---
title: Có gì mới trong 0.9
summary: Hình dạng tường, tách, khoảng lệch, kéo giãn và khóa vào lưới, tầng dưới mặt đất, kích thước lưới và Đo trên mặt bằng, khung nhìn nhân bản với phong cách làm việc và bảng nét bút, Báo cáo là, xuất Collada và Google Earth, Scan to BIM, phân tích gió và động đất, tiện ích bổ sung in nhựa lỏng.
keywords: có gì mới, 0.9, ghi chú phát hành, hình dạng tường, hình chữ nhật, đa giác, cung tròn, chọn đường thẳng, dò theo đường bao, khoảng lệch, nối, kéo giãn theo hộp, căn chỉnh và khóa, tách tường, khoảng hở, nối lại, khóa vào lưới, mở rộng từ, đo từ, thêm cốt bên dưới, tầng hầm, lệnh tầng, kích thước lưới, đo trên mặt bằng, phong cách làm việc, nhân bản khung nhìn, bản sao riêng, khung nhìn liên kết, bảng nét bút, in như đang hiển thị, báo cáo là, nhập tỷ lệ, nhập svg, đặt trên mặt bằng, đặt trong mô hình, collada, dae, kmz, google earth, scan to bim, tải trọng gió, động đất, phần tử hữu hạn, bảng tài liệu, in nhựa lỏng, có gì mới, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, sơ tán, người, hàng đợi, âm học, hồi âm, đáp ứng xung, lũ lụt, gió, động đất, thiên tai, vòng đời, tuổi thọ, ids, thẻ, lịch biểu, di chuyển, căn chỉnh, phân bố, ảnh, nền, quét thành tường, địa điểm từ civilcraft, bản vẽ tấm, khung, năng lượng mặt trời, pv, tách, vrf, dàn lạnh fan coil, định cỡ ống, máng cáp, độ rọi, bê tông, động đất, so sánh quét, epsg, phép chiếu, tài liệu, mẫu, carbon, chi phí, bộ máy kết xuất, mở trong, usd, glb, unreal, hoàn tác, tiện ích bổ sung, pcf, ký hiệu, cây, dò theo, bút, dải lệnh, trình duyệt dự án, bố cục
from: 5624fe88
---

Đây là những gì đã thay đổi trong BimCraft 0.9, so với 0.8.1. Hai chủ đề lớn là một công cụ tường thực thụ và các khung nhìn hoạt động theo cách người dùng từ các chương trình BIM lớn mong đợi. Bên cạnh đó có xuất Collada, trợ lý có thể đặt thiết bị điện, Scan to BIM, và phân tích gió, động đất và phần tử hữu hạn trong thẻ {{ui:Analysis}}.

## Mới

### Tường

- **Vẽ nguyên hình dạng.** Trong {{ui:Draw}}, mở {{ui:Shapes}} (hoặc chọn một hình trong danh sách Shape ở dòng Wall) để có hình chữ nhật, hình chữ nhật xoay, đa giác 3 đến 64 cạnh, cung tròn theo tâm, cung tròn tiếp tuyến, tường trên các đường đã chọn, hoặc tường quanh một vùng khép kín mà bạn nhấp vào bên trong. Một hình chữ nhật là bốn bức tường với bốn góc nối và một bước hoàn tác. Xem [Hình dạng tường, tách, khoảng lệch, kéo giãn và khóa](topic:wall-tools).
- **Đặt trước khi vẽ, đổi sau.** Dòng Wall có {{ui:Offset}} và {{ui:Join}} (bỏ chọn để vẽ tường độc lập). Sau đó dùng {{ui:Offset}}, {{ui:Box stretch}} và {{ui:Align and lock}} trên tường đã vẽ. Tường được di chuyển hoặc kéo giãn vẫn giữ cửa đi, cửa sổ và kích thước. Mỗi công thức là một bước hoàn tác.
- **Cắt tường.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} và {{ui:Rejoin}} cắt tường tại một điểm nhấp hoặc chỗ tường khác cắt ngang. Cắt xuyên qua cửa đi sẽ bị từ chối. Xem [Hình dạng tường, tách, khoảng lệch, kéo giãn và khóa](topic:wall-tools).
- **Khóa tường vào đường lưới.** Chọn một bức tường dọc theo đường lưới và chọn {{ui:Lock to grid}} trong {{ui:Properties}}. Khi công cụ Grid đang bật, nhập khoảng cách trong {{ui:Move by}} cho một đường đã chọn, và các tường bị khóa sẽ đi theo trong một bước hoàn tác.
- **Định hình một tường.** Trong {{ui:Properties}} của một tường, bạn có thể gắn đỉnh hoặc chân tường vào mái, sàn hoặc trần, sửa đường bao cao độ, nghiêng tường, hoặc cắt lỗ tường không có cửa đi hay cửa sổ. Xem [Hình dạng tường](topic:wall-shape).
- **Chiều dài cho biết đầu nào được giữ.** {{ui:Grow from}} đặt xem đầu đầu, đầu cuối hay tâm được giữ cố định khi bạn đổi chiều dài.
- **Chiều dài và kích thước trên mặt bằng khớp nhau.** {{ui:Measure from}} (đường tâm, mặt trong hoặc mặt ngoài) điều khiển cả ô Length lẫn kích thước tường trên mặt bằng. Mặc định là đường tâm, nên kích thước tường trên mặt bằng giờ đọc theo đường tâm, trong khi trước đây đọc theo mặt ngoài. Đổi nó trong dòng Wall, trong {{ui:Properties}} hoặc trong {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Cốt, lưới và đo lường

- **Thêm cốt bên dưới.** {{ui:Add a level below}} trong bảng {{ui:Levels}} thêm một cốt dưới cốt thấp nhất, cao bằng nó, ở cao độ âm (Level -1, Level -2). Không có gì khác bị di chuyển. {{ui:Add levels…}} giờ chấp nhận chiều cao âm. Gõ LEVEL, LEVELS, STOREY hoặc STOREYS trên dòng lệnh sẽ mở {{ui:Add levels…}}, và có nút {{ui:Levels}} trong menu và các thẻ dải lệnh. Xem [Khu đất, công trình và cốt](topic:site-building-and-levels).
- **Kích thước lưới trên mặt bằng.** Khi công cụ {{ui:Grid}} đang bật, chọn {{ui:Dimensions}} để vẽ khoảng cách giữa các đường lân cận và kích thước tổng thể nằm ngoài các vòng tròn trên mặt bằng của mọi tầng. Xem [Kích thước lưới](topic:grid-dimensions).
- **Đo trên mặt bằng.** {{ui:Measure}} trong nhóm {{ui:Draw}} cho một khoảng cách cùng với chênh lệch X và Y giữa hai lần nhấp. Không có gì được lưu trong mô hình. Xem [Đo trên mặt bằng](topic:measure-on-the-plan).
- **Đổi nhiều cột cùng lúc.** Chọn các cột cùng với một tường, và danh sách chọn liệt kê từng loại kèm {{ui:Keep only these}}. Một lần nhấp giữ các cột và hiện các trường chung của chúng.
- **Một đơn vị hiển thị ở mọi nơi.** Tọa độ, số đo, mặt cắt, tỷ lệ tờ, tab tải trọng và kết quả của khung, cùng nội dung Vấn đề, đi theo đơn vị bạn chọn. Xuất file vẫn ở hệ SI.

### Khung nhìn, tờ và in

- **Phong cách làm việc.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} chọn giữa việc mỗi khung nhìn có chú thích và bảng nét bút riêng, hoặc dùng chung. Xem [Phong cách làm việc, khung nhìn nhân bản, nét bút trên giấy, Báo cáo là và mẫu](topic:working-style).
- **Nhân bản khung nhìn.** Mặt bằng, mặt bằng trần, chú thích, mặt đứng và mặt cắt có thể được nhân bản thành {{ui:Own copy}} hoặc {{ui:Linked}}; {{ui:Make own copy}} biến một khung nhìn liên kết thành độc lập. Xem [Phong cách làm việc, khung nhìn nhân bản, nét bút trên giấy, Báo cáo là và mẫu](topic:working-style).
- **In như đang hiển thị, hoặc qua bảng nét bút.** Các ghi đè nét bút được giữ trong IFC cùng khung nhìn, và tờ cùng PDF vẽ chúng giống như màn hình. Cùng chủ đề này cũng bao gồm bảng nét bút.
- **Báo cáo là.** {{ui:Report as}} trong {{ui:Properties}} ghi một sàn được vẽ như đường, một tường như tấm, hoặc một mái như dốc vào IFC dưới lớp bạn chọn, và đếm theo cách đó trong lịch biểu, Quantities, Find, Color by và Vấn đề.
- **Chỉnh sửa trong mặt đứng và mặt cắt.** Vẽ và di chuyển tường, lỗ mở, cốt, kích thước và ghi chú ngay trong mặt đứng hoặc mặt cắt, với khổ tờ và khung tên riêng của bạn. Xem [Chỉnh sửa trong mặt đứng và mặt cắt](topic:edit-in-elevations).
- **Tờ.** Mọi tờ có thể nằm ngang hoặc đứng. Một ô {{ui:Type a scale}} nằm cạnh danh sách tỷ lệ trên mỗi khung nhìn được đặt (1:64, 2:1, 1/4" = 1'). Bạn có thể kéo một bản vẽ đã đặt hoặc đẩy nhẹ bằng phím mũi tên, và {{ui:Formats…}} › {{ui:Import SVG…}} biến thiết kế tờ riêng của bạn thành khung tên với các trường nhập theo từng tờ.
- **Ghi công thư viện trên tờ.** Một bộ bản vẽ có mục {{ui:Library}} sẽ có bảng ghi công thư viện để đặt trên bất kỳ tờ nào. Xem [Ghi công thư viện](topic:library-credits).

### Thư viện: đặt mục

- **Cách đặt theo khung nhìn.** Trong khung nhìn Mặt bằng, Thư viện hiện {{ui:Place in plan}}; trong 3D nó hiện {{ui:Place in model}}; trong Split nó hiện một nút chia với {{ui:Place in plan}} là hành động chính. Cả hai cách đều ghi cùng một phần tử IFC. Bạn cũng có thể kéo một thẻ Thư viện lên mặt bằng hoặc khung nhìn 3D; với bút hoặc ngón tay, nhấn giữ rồi kéo. Xem [Đặt từ Thư viện](topic:place-from-library).

### Tệp và trợ lý

- **Collada và Google Earth.** {{ui:Collada}} trên thanh công cụ (menu File trong các kiểu menu) ghi một tệp .dae, hoặc một tệp .kmz đặt đúng vị trí mô hình trên bản đồ. Xem [Xuất mô hình sang Collada hoặc cho Google Earth](topic:collada).
- **Trợ lý có thể đặt thiết bị điện.** Trợ lý đã kết nối của bạn có công cụ mới để thêm, liệt kê, đổi và xóa thiết bị, và đặt đèn. Trợ lý vẫn tắt cho đến khi bạn bật trong {{ui:Settings}}. Xem [Để trợ lý AI làm việc với mô hình](topic:assistants).
- **Scan to BIM (tiện ích bổ sung).** Mặc định tắt và cần tiện ích bổ sung đám điểm (point cloud). Nó đề xuất sàn, tường, cửa đi và cửa sổ từ một bản quét, kèm độ lệch đo được của từng mục; chấp nhận là một bước hoàn tác.

### Phân tích

- **Dữ liệu địa điểm gió và động đất.** Trong thẻ {{ui:Analysis}}: tải trọng gió theo ASCE 7-10 hoặc 7-16 cho công trình kín cứng, với lực trên mỗi tầng như các trường hợp tải, và dữ liệu địa điểm động đất có tra cứu USGS cùng phổ thiết kế.
- **Theo dõi kết cấu và phần tử hữu hạn.** Kiểm tra bê tông theo ACI 318-19, lực ngang tương đương theo ASCE 7-22, độ trôi tầng, sàn và tường như tấm, và tổ hợp tải từ ASCE 7 và EN 1990. Bộ máy phần tử hữu hạn riêng của chúng tôi xử lý vỏ, tứ diện và phân tích dạng dao động. Xem [Kiểm tra cấu kiện bê tông và tạo tải trọng động đất](topic:concrete-and-seismic) và [Phân tích khung](topic:frame-analysis).

### Tiện ích bổ sung khác và tài liệu

- **Chiếu sáng nội thất (tiện ích bổ sung).** Đặt đèn chiếu sáng và ghi độ rọi bằng số lux vào mặt bằng mỗi tầng, kèm ước tính chói lóa và báo cáo có thể in.
- **Bảng Tài liệu.** {{ui:File}} › {{ui:Documents…}} có check out và check in với tệp khóa, ký hiệu sửa đổi, trạng thái phát hành và lịch sử.
- **Khu vực và thép.** Bộ bản vẽ và quy định xây dựng của Nam Phi trong tiện ích bổ sung Quy định, và 976 kích thước thép của Vương quốc Anh trong bảng mặt cắt dùng chung.
- **Tiện ích bổ sung in nhựa lỏng miễn phí (resin).** Bộ cắt lát (slicer), giá đỡ và đế bè (raft), thử nghiệm phơi sáng, và các định dạng tệp GOO, SL1, Chitubox và Anycubic, tất cả mặc định tắt.

## Trong mọi ứng dụng

- Khi di chuột qua một nút hoặc điều khiển, sẽ hiện chú giải công cụ (tooltip) Bootstrap.
- Mẹo khởi đầu trên vùng vẽ trống có nút đóng; BimCraft ghi nhớ rằng nó đã được đóng.
- Dải thẻ của bảng nếu không vừa giờ sẽ cuộn thay vì bị cắt.
- Khi có tài liệu mở, thẻ trình duyệt hiển thị "<tài liệu> - BimCraft | CadCraft".
- Trong {{ui:Settings}} › {{ui:General}} › {{ui:Layout}}, các bố cục là một danh sách thả xuống với các lựa chọn hai dòng.
- Danh sách ngôn ngữ trong {{ui:Settings}} có nhiều ngôn ngữ hơn 0.8; các ngôn ngữ khác tiếng Anh là bản nháp máy.

## Đã sửa

- **Move hoạt động trên cầu thang,** và trên đường dốc, lan can, mặt mái, thiết bị đứng riêng, ảnh và đường dẫn.
- **Kéo tường không còn làm méo phòng.** Núm giữa di chuyển tường vuông góc với chính nó, và các góc trượt dọc theo tường đã nối. Giữ {{key:Mod}} để di chuyển tự do kiểu cũ; {{ui:Square up}} đưa góc 90 độ trở lại.
- **Đổi độ dày hoặc loại tại một nút nối** giờ giữ góc khép kín ở hình chữ L, hình chữ T, nút ba tường và cạnh tường cong.
- **Di chuyển hoặc sao chép một nhóm phòng** giữ các tường nối bên ngoài nhóm vẫn nối.
- **Làm lại giữ nguyên danh tính kích thước tường.**
- **Chọn một tường khi Draw tắt** không còn gây lỗi trong Properties.
- **Kết xuất chuyển sang WebGL** khi GPU không khởi động được, thay vì dừng.
- **Kiểm tra EnergyPlus** có thể bật lại.
- **Tài liệu mở thành hộp thoại căn giữa.** {{key:Esc}}, nút X hoặc nhấp vào trang tối đều đóng nó.
- **Các nút {{ui:Plan}}, {{ui:Split}} và {{ui:3D}} hiện** ngay khi mô hình được mở, không chỉ sau khi Draw đã bật ít nhất một lần.

## Giới hạn thực tế

- Chưa in gì trên phần cứng thật. Các giá đỡ nhựa lỏng là mới và chưa được kiểm chứng.
- Kết quả gió, động đất, bê tông và phần tử hữu hạn là công cụ kiểm tra cho kỹ sư, được đối chiếu với nghiệm giải tích, không phải với một công trình thật.
- Scan to BIM được thử trên một tòa nhà tổng hợp, không phải bản quét thật, và chỉ tìm được các phòng có cạnh vuông góc.
- Collada chưa được mở trong Blender hay Google Earth tại đây.
- Ước tính chiếu sáng được đối chiếu với trace của chính chúng tôi, không phải với các chương trình chiếu sáng khác.
- Các số liệu của Nam Phi chưa được kiểm chứng.
- Kiểu nối tường (butt, mitre, square off) và ưu tiên lớp chưa được xây dựng; góc được vát 45 độ (mitre).
- Các ngôn ngữ khác tiếng Anh là bản nháp máy.

Mọi thứ còn lại nằm trong [Những gì chưa được xây dựng](topic:not-built-yet). Các thay đổi trước đó nằm trong phần ghi chú 0.8 và 0.8.1 ở bên dưới trang này.

## Trước đó: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong BimCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. BimCraft giờ có thể trả lời các câu hỏi về một công trình và kiểm thử nó, với người, âm thanh, nước, gió và động đất, và vẽ nó với nhiều công cụ hơn; 0.8.1 là bản sửa lỗi.

### Mới

**Kiểm thử công trình**

- **Người trong tòa nhà.** Phần {{ui:People in the building}} của bảng bên trái cho người đi qua phòng, cửa và cầu thang trong một lần sơ tán hoặc một ngày đến thông thường. Bạn thấy hàng đợi tại chỗ tòa nhà thu hẹp, quãng đường đi bộ dài nhất đến lối thoát từ mỗi phòng và thời gian người cuối cùng mất. Chọn {{ui:Shut}} ở một cửa để xem điều gì thay đổi, và chọn {{ui:Show the people in the 3D view}} để xem những người đi bộ. Các phát hiện được đưa vào Vấn đề. Đây là mô hình đám đông thô phục vụ quyết định thiết kế, không phải chứng nhận an toàn cháy. Xem [Cho người đi qua tòa nhà](topic:people-in-the-building).
- **Âm học phòng, và nghe thử.** Phần {{ui:Room acoustics}} cho thời gian vang của mỗi phòng theo băng quãng octave (Sabine và Eyring) từ kích thước và lớp hoàn thiện bạn chọn, và với mục tiêu riêng, cho biết cần thêm bao nhiêu khả năng hấp thụ để đạt. {{ui:Play it in this room}} phát giọng nói, tiếng vỗ tay, nốt gảy hoặc tệp âm thanh của bạn qua đáp ứng xung được tính cho phòng. Các số hấp thụ là giá trị công bố điển hình để bạn thay thế. Xem [Âm học phòng](topic:room-acoustics).
- **Mô phỏng lũ, gió và động đất.** {{ui:Hazard playback}} phát nước dâng qua các phòng, áp lực gió trên mỗi tầng và rung chấn động đất làm rung các tầng, trên mặt bằng hoặc mặt đứng với thanh trượt thời gian. Mô hình đơn giản với các giả định ghi trên bảng; không phải kiểm tra theo quy chuẩn. Xem [Phát lũ, gió hoặc động đất](topic:hazard-playback).
- **Điều gì hao mòn sau năm mươi năm.** {{ui:Life-cycle view}} liệt kê cửa sổ, cửa đi, lớp hoàn thiện và mái, mỗi mục kèm tuổi thọ, các năm được thay thế và, khi bạn nhập chi phí đơn vị, chi phí theo năm cùng giá trị hiện tại. {{ui:Save the schedule (CSV)}} xuất ra. Tuổi thọ là số liệu lập kế hoạch. Xem [Xem điều gì hao mòn sau năm mươi năm](topic:life-cycle-view).
- **Kiểm tra bê tông và động đất.** Các khối {{ui:Concrete members}} và {{ui:Seismic loads}} của thẻ {{ui:Analysis}} kiểm tra dầm và cột bê tông theo ACI 318-19 và tạo lực ngang tương đương theo ASCE 7-22 trên sàn cứng, kèm độ trôi tầng. Dành cho kỹ sư kiểm tra. Xem [Kiểm tra cấu kiện bê tông và tạo tải trọng động đất](topic:concrete-and-seismic).

**Kiểm tra và báo cáo**

- **Kiểm tra theo IDS.** Tải tệp `.ids` khách hàng đưa cho bạn và xem mọi phần tử không đáp ứng trong Vấn đề, trước khi giao IFC. Mở {{ui:Check against an IDS}} trong {{ui:Model checks}}. Xem [Kiểm tra mô hình theo IDS của khách hàng](topic:check-against-ids).
- **Thẻ và lịch biểu.** Định nghĩa thẻ riêng, gán cho nhiều phần tử cùng lúc, và tạo lịch biểu có các cột, bộ lọc và nhóm đọc từ thẻ đó; các thẻ được giữ trong IFC. Xem [Thẻ và lịch biểu](topic:tags-and-schedules).
- **Tài liệu từ mô hình.** {{ui:Documents from the model}} điền một mẫu đặc tả từ IFC đang mở và lưu thành PDF, tài liệu Word hoặc Markdown. Xem [Tài liệu từ mô hình](topic:documents-from-the-model).
- **So sánh bản quét với mô hình.** Khi một đám điểm (point cloud) đang mở, {{ui:Compare}} đánh giá từng phần tử là đã xây, xây một phần, thiếu hoặc chưa tới, và hiển thị phần trăm đã xây. Xem [So sánh bản quét với mô hình](topic:compare-scan-with-model).
- **Carbon và chi phí.** Khung Carbon cộng carbon tích hợp từ một bảng hệ số bạn có thể sửa, và khung Cost trải giá theo lịch 4D. Các hệ số đi kèm BimCraft là chung chung và được đánh dấu chưa kiểm chứng. Xem [Carbon tích hợp và chi phí](topic:embodied-carbon-and-5d-cost).
- **Mọi phép chiếu bản đồ.** {{ui:Measure}} › {{ui:Coordinate system…}} nhận số EPSG, múi UTM, tên hoặc định nghĩa phép chiếu riêng của bạn. Xem [Định vị địa lý với mọi phép chiếu](topic:georeference-any-projection).

**Vẽ và chỉnh sửa**

- **Move, Align và Distribute.** Dưới {{ui:Build}}; {{key:Shift+M}} bắt đầu Move (chỉ {{key:M}} vẫn là Measure). Move sao chép khi bạn đi với {{key:C}}, mỗi bước là một lần hoàn tác, và nó đi qua một phiên Live TeamWork. Xem [Di chuyển, sao chép, căn chỉnh và phân bố](topic:move-align-distribute).
- **Ảnh dưới mặt bằng.** {{ui:Build}} › {{ui:Picture}} đặt PNG, JPEG hoặc WebP dưới mặt bằng một cốt hoặc trên mặt phẳng đứng. Đặt tỷ lệ bằng hai điểm, và di chuyển, xoay, làm mờ và khóa. Một vùng được sao chép trong MarkupCraft dán vào theo tỷ lệ tờ của nó. Xem [Đặt ảnh dưới mặt bằng](topic:pictures-as-backgrounds).
- **Tường từ bản quét.** Khi một bản quét đang mở, tường, cửa đi và phòng xuất hiện như đề xuất, bạn giữ hoặc bỏ từng cái, trong một bước hoàn tác. Chỉ tìm được tường theo hai hướng vuông góc. Xem [Biến bản quét thành tường](topic:scan-to-walls).
- **Trace, nét bút và cầu thang phác thảo.** {{ui:Trace}} hiện một tầng khác bằng nét đứt dưới mặt bằng, {{ui:Pens}} cho tường, cửa đi và cửa sổ độ dày nét riêng trong một khung nhìn, và {{ui:Sketch stair}} biến một đường đi bộ thành cầu thang. Lưới Wavefront OBJ được mở. Xem [Trace một tầng, nét bút và cầu thang từ phác thảo](topic:trace-pens-stairs-obj).
- **Công trình quanh một địa chỉ.** Các công trình và thửa đất mà Address to site của CivilCraft tìm được xuất hiện như đề xuất; bạn chọn những cái muốn thêm. Xem [Bắt đầu từ địa điểm của CivilCraft](topic:site-from-civilcraft).
- **Bản vẽ tấm.** {{ui:Build}} › {{ui:Panel drawings}} dựng khung tường, sàn và mái bằng gỗ hoặc thép tấm nhẹ, và lưu danh sách cắt dạng CSV cùng bản vẽ thi công dạng PDF. Đây là giá trị khởi đầu, không phải thiết kế kết cấu. Xem [Bản vẽ tấm](topic:panel-drawings).
- **Bảng ký hiệu và cây.** {{ui:Build}} › {{ui:Symbol palette}} tìm ký hiệu điện và cấp thoát nước theo tên; nguồn {{ui:Plants}} của {{ui:Library}} liệt kê khoảng 400 loại cây với ký hiệu mặt bằng. Xem [Bảng ký hiệu](topic:symbol-palette) và [Đặt một loại cây](topic:plant-list).

**Đường ống, ống dẫn và năng lượng**

- **Split, VRF và dàn lạnh fan coil.** Các dàn trong nhà và ngoài trời cùng kết nối của chúng, và bộ đường ống được định cỡ từ bảng giá trị ví dụ điển hình mà bạn có thể đổi. Xem [Split, VRF và dàn lạnh fan coil](topic:split-vrf-fan-coils).
- **Tính toán.** Khung Calculations kiểm tra kích thước ống cấp và ống gió theo tổn thất áp suất, định tuyến cáp qua máng và ống luồn cùng hiển thị độ đầy của chúng, và tính độ rọi từ tệp IES hoặc EULUMDAT. Giá trị mặc định được ghi nhãn; hãy nhập giá trị của quy chuẩn bạn áp dụng. Xem [Tính toán ống, ống dẫn, cáp và ánh sáng](topic:mep-calculations).
- **Tệp PCF.** **Export PCF** của công cụ Pipe ghi các tuyến cho các chương trình phân tích ứng suất và isometric, và một tệp PCF đọc lại sẽ vẽ ống của nó. Xem [Tệp thành phần đường ống](topic:piping-pcf).
- **Điện mặt trời PV.** Lắp các dãy trên mái hoặc mặt đất, tạo bóng từ mô hình, ước tính năng lượng hằng năm, kiểm tra chuỗi và tạo dữ liệu sơ đồ một sợi. Mô-đun khởi đầu và tổn thất là chung chung. Xem [Điện mặt trời PV](topic:solar-pv).
- **Tệp EnergyPlus.** Khung Check with EnergyPlus ghi mô hình thành IDF để chạy trong EnergyPlus của bạn. Chạy trong trình duyệt cần một bản dựng bạn tự lưu trữ và nhập địa chỉ; BimCraft không đi kèm. Xem [Kiểm tra sưởi và làm mát với EnergyPlus](topic:check-with-energyplus).

**Ảnh và tệp**

- **Chọn bộ máy kết xuất.** {{ui:Render}} có lựa chọn {{ui:Engine}}. Hai bộ máy tích hợp của chúng tôi (Fast và Path tracer) vẫn là mặc định. **Open in** lưu cảnh thành tệp USD hoặc glTF, và một thư mục dự án Unreal thành .zip; trong CadCraft Studio, một tiện ích bổ sung có thể thêm bộ máy. Plug-in Unreal mở dự án chưa được phát hành. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Hoàn tác trong Studio.** Bên trong CadCraft Studio, BimCraft báo cho Studio từng bước đã xong để Studio hoàn tác bước cuối của bạn trong cửa sổ bạn dùng sau cùng. Xem [Hoàn tác qua các ứng dụng](topic:undo-across-apps).
- **Tiện ích bổ sung trong tệp của bạn.** Một IFC ghi lại tiện ích bổ sung nào đã ghi vào nó, và đề nghị những cái bạn chưa có khi bạn mở. Xem [Tiện ích bổ sung trong tệp của bạn](topic:add-ons-in-your-file).

**Trong mọi ứng dụng**

- **Kết nối AI của bạn.** Trợ lý riêng của bạn có thể điều khiển BimCraft qua kết nối của Studio và trả lời các câu hỏi về mô hình, chẳng hạn phòng nào nằm dưới một diện tích nhất định. Studio không có AI riêng. Xem [Để trợ lý AI làm việc với mô hình](topic:assistants).
- **Hàng thanh công cụ.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} cung cấp Wrap, 2 rows hoặc 1 row; Wrap vẫn là mặc định.
- **Thiết bị nhập.** Cài đặt bàn di chuột, bút, chuột 3D, bộ điều khiển và MIDI được mọi ứng dụng dùng chung.
- **Vấn đề và Live.** Bảng cảnh báo và phiên Live hoạt động như trước, với các kiểm tra mới ở trên đưa vào Vấn đề.
- **Ngôn ngữ.** 54 ngôn ngữ, trong đó mười ngôn ngữ là mới. Những ngôn ngữ khác tiếng Anh là bản nháp máy chưa được người bản ngữ đọc; các chủ đề trợ giúp chủ yếu bằng tiếng Anh.

### Đã sửa trong 0.8.1

- **Bố cục Ribbon + Project browser.** Insert › Import CAD, Insert › Image và Manage › Project Units từng ghi "Not built in BimCraft yet". Image giờ mở công cụ Picture, Import CAD mở {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF hoặc bản quét), và Project Units mở {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Move và Align chạy các công cụ Move và Align, Level mở {{ui:Add levels…}}, Phases mở phần Renovation phases, và Materials mở thư viện vật liệu.
- **Phần DWG classes.** Nó bị đọc sai kiểu; đã sửa trong BimCraft và các ứng dụng khác đọc DWG.
- **Ngôn ngữ khi đang chạy.** Studio và các bản đóng gói giờ đổi được ngôn ngữ mà không cần khởi động lại. Chưa được kiểm thử trên mọi nền tảng; hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Script bó Archicad.** `archicad_bundle.py`, một tệp tải riêng, giờ tìm được đường dẫn của Archicad, theo dõi thư mục tới 20 giây và thử lại bên cạnh bó.

### Chưa có trong phiên bản này

- **Công cụ an toàn và thiết kế.** People in the building không có giới hạn quãng đường đi từ quy chuẩn xây dựng (bạn tự nhập giới hạn) và chưa được kiểm tra thủ công trên mặt bằng thật. Các số liệu âm học, vòng đời và thiên tai là giá trị lập kế hoạch, không phải kiểm tra theo quy chuẩn.
- **Dự báo khí hậu và EnergyPlus.** Không có dự báo khí hậu tích hợp: bạn có thể tải tệp kịch bản cho lần chạy lũ. Lần chạy EnergyPlus trong trình duyệt không thuộc bản phát hành này.
- **Bố cục ribbon.** Material Takeoff vẫn ghi "Not built" vì BimCraft chưa có danh sách khối lượng vật liệu, và 54 công cụ ribbon mờ khác chưa có công cụ BimCraft tương ứng.
- **Ký và nền tảng.** Bộ cài Windows và tệp .dmg macOS chưa được ký, nên SmartScreen hiện {{ui:More info}}, rồi {{ui:Run anyway}}, và macOS cần chuột phải rồi {{ui:Open}}. Bản dựng iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Kiểm thử trang thật.** Một số kiểm thử trình duyệt BimCraft cũ vẫn thất bại trên trang kiểm thử của chúng tôi, như trước 0.8.1.

Mọi thứ còn lại nằm trong [Những gì chưa được xây dựng](topic:not-built-yet). Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
