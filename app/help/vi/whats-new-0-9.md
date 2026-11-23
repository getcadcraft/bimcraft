---
title: Có gì mới trong 0.9 (cũ hơn)
summary: Hình dạng tường, tách, dời, kéo giãn và khóa vào lưới, tầng dưới mặt đất, kích thước lưới và đo trên mặt bằng, khung nhìn nhân bản với phong cách làm việc và bảng nét, Báo cáo là, xuất Collada và Google Earth, Scan to BIM, phân tích gió và địa chấn, tiện ích in nhựa lỏng.
keywords: có gì mới 0.9, bản phát hành cũ, có gì mới, 0.9, ghi chú phát hành, hình dạng tường, hình chữ nhật, đa giác, cung, chọn đường, viền vết, dời, nối, kéo giãn hộp, căn chỉnh và khóa, tách tường, khoảng hở, nối lại, khóa vào lưới, mở rộng từ, đo từ, thêm tầng bên dưới, tầng hầm, lệnh tầng, kích thước lưới, đo trên mặt bằng, phong cách làm việc, nhân bản khung nhìn, bản sao riêng, khung nhìn liên kết, bảng nét, in như đã hiển thị, báo cáo là, collada, dae, kmz, google earth, scan to bim, tải gió, địa chấn, phần tử hữu hạn, bảng tài liệu, in nhựa lỏng, có gì mới, changelog, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, sơ tán, người, hàng đợi, âm học, vang, đáp ứng xung, lũ, gió, động đất, nguy cơ, vòng đời, tuổi thọ, ids, thẻ, bảng thống kê, di chuyển, căn chỉnh, phân bố, ảnh, nền, quét thành tường, địa điểm từ civilcraft, bản vẽ tấm, khung, năng lượng mặt trời, pv, vrf, fan coil, cỡ ống, máng cáp, độ rọi, bê tông, so sánh bản quét, epsg, phép chiếu, tài liệu, mẫu, carbon, chi phí, energyplus, bộ máy kết xuất, mở trong, usd, glb, unreal, hoàn tác, tiện ích, pcf, ký hiệu, cây, trace, nét bút, dải lệnh, trình duyệt dự án, bố cục
from: 816df7f8
---

Đây là những gì đã thay đổi trong BimCraft 0.9, so với 0.8.1. Hai chủ đề lớn là một công cụ tường thực sự và các khung nhìn hoạt động theo cách người đến từ các chương trình BIM lớn mong đợi. Xung quanh chúng là xuất Collada, trợ lý có thể đặt thiết bị điện, Scan to BIM, và công việc về gió, địa chấn và phần tử hữu hạn trong thẻ {{ui:Analysis}}.

## Mới

### Tường

- **Vẽ nguyên hình dạng.** Trong {{ui:Draw}}, mở {{ui:Shapes}} (hoặc chọn một hình trong danh sách Hình dạng của hàng Tường) để có hình chữ nhật, hình chữ nhật xoay, đa giác 3 đến 64 cạnh, cung theo tâm, cung tiếp tuyến, tường trên các đường đã chọn, hoặc tường quanh một vùng kín bạn bấm bên trong. Một hình chữ nhật là bốn tường với bốn góc nối và một bước hoàn tác. Xem [Hình dạng tường, tách, dời, kéo giãn và khóa](topic:wall-tools).
- **Đặt trước khi vẽ, đổi sau.** Hàng Tường có {{ui:Offset}} và {{ui:Join}} (bỏ chọn để vẽ tường độc lập). Sau đó dùng {{ui:Offset}}, {{ui:Box stretch}} và {{ui:Align and lock}} trên tường đã vẽ. Tường được di chuyển hoặc kéo giãn vẫn giữ cửa đi, cửa sổ và kích thước của nó. Mỗi công thức là một bước hoàn tác.
- **Cắt tường.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} và {{ui:Rejoin}} cắt tường tại một cú bấm hoặc nơi tường khác cắt qua nó. Cắt qua một cửa đi bị từ chối. Xem [Hình dạng tường, tách, dời, kéo giãn và khóa](topic:wall-tools).
- **Khóa tường vào đường lưới.** Chọn một tường nằm dọc đường lưới và đánh dấu {{ui:Lock to grid}} trong {{ui:Properties}}. Khi công cụ Lưới bật, nhập một khoảng cách trong {{ui:Move by}} cho một đường đã chọn, và các tường bị khóa đi theo trong một bước hoàn tác.
- **Định hình một tường.** Trong {{ui:Properties}} của một tường, bạn có thể gắn đỉnh hoặc chân tường vào mái, sàn hoặc trần, sửa đường viền cao độ, nghiêng tường, hoặc cắt một lỗ tường không có cửa đi hay cửa sổ. Xem [Hình dạng tường](topic:wall-shape).
- **Chiều dài cho biết đầu nào giữ nguyên.** {{ui:Grow from}} đặt xem đầu đầu, đầu cuối hay tâm giữ nguyên khi bạn đổi chiều dài.
- **Chiều dài và kích thước trên mặt bằng khớp nhau.** {{ui:Measure from}} (đường tâm, mặt trong hoặc mặt ngoài) điều khiển cả trường Chiều dài lẫn kích thước tường trên mặt bằng. Nó bắt đầu từ đường tâm, nên kích thước tường trên mặt bằng nay đọc đường tâm, trước đây đọc mặt ngoài. Đổi ở hàng Tường, trong {{ui:Properties}} hoặc trong {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Tầng, lưới và đo

- **Thêm tầng bên dưới.** {{ui:Add a level below}} trong bảng {{ui:Levels}} thêm một tầng dưới tầng thấp nhất, cao bằng nó, ở cao độ âm (Level -1, Level -2). Không có gì khác di chuyển. {{ui:Add levels…}} nay nhận chiều cao âm. Gõ LEVEL, LEVELS, STOREY hoặc STOREYS trên dòng lệnh sẽ mở {{ui:Add levels…}}, và có nút {{ui:Levels}} trong các menu và thẻ dải lệnh. Xem [Khu đất, công trình và tầng](topic:site-building-and-levels).
- **Kích thước lưới trên mặt bằng.** Khi công cụ {{ui:Grid}} bật, đánh dấu {{ui:Dimensions}} để vẽ khoảng cách giữa các đường lưới kề nhau và kích thước tổng ngoài các vòng tròn trên mặt bằng của mỗi tầng. Xem [Ghi kích thước lưới](topic:grid-dimensions).
- **Đo trên mặt bằng.** {{ui:Measure}} trong nhóm {{ui:Draw}} cho một khoảng cách cùng độ chênh X và Y giữa hai lần bấm. Không có gì được lưu trong mô hình. Xem [Đo trên mặt bằng](topic:measure-on-the-plan).
- **Đổi nhiều cột cùng lúc.** Chọn các cột cùng với một tường, và danh sách liệt kê từng loại với {{ui:Keep only these}}. Một cú bấm giữ các cột và hiển thị các trường chung của chúng.
- **Một đơn vị hiển thị ở mọi nơi.** Tọa độ, số đo, mặt cắt, tỷ lệ tờ, tải và kết quả của thẻ khung, và văn bản Vấn đề đều theo đơn vị bạn chọn. Xuất vẫn theo SI.

### Khung nhìn, tờ và in

- **Phong cách làm việc.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} chọn giữa việc mỗi khung nhìn có chú thích và bảng nét riêng, hoặc dùng chung. Xem [Phong cách làm việc, khung nhìn nhân bản, nét bút trên giấy, Báo cáo là và mẫu](topic:working-style).
- **Nhân bản khung nhìn.** Mặt bằng, mặt bằng trần, gọi chú thích, mặt đứng và mặt cắt có thể nhân bản thành {{ui:Own copy}} hoặc {{ui:Linked}}; {{ui:Make own copy}} biến một bản liên kết thành độc lập. Xem [Phong cách làm việc, khung nhìn nhân bản, nét bút trên giấy, Báo cáo là và mẫu](topic:working-style).
- **In như đã hiển thị, hoặc qua bảng nét.** Ghi đè nét được giữ trong IFC cùng khung nhìn, và tờ cùng PDF vẽ chúng như màn hình. Cùng chủ đề có cả bảng nét.
- **Báo cáo là.** {{ui:Report as}} trong {{ui:Properties}} ghi một sàn vẽ như đường, một tường như tấm hoặc một mái như đoạn dốc vào IFC dưới lớp bạn chọn, và tính như vậy trong bảng thống kê, Quantities, Find, Color by và Problems.
- **Sửa trong mặt đứng và mặt cắt.** Vẽ và di chuyển tường, lỗ mở, tầng, kích thước và ghi chú ngay trong mặt đứng hoặc mặt cắt, với khổ tờ và khung tên riêng. Xem [Sửa trong mặt đứng và mặt cắt](topic:edit-in-elevations).
- **Tờ.** Mỗi tờ có thể nằm ngang hoặc đứng. Một ô {{ui:Type a scale}} nằm cạnh danh sách tỷ lệ trên mỗi khung nhìn đã đặt (1:64, 2:1, 1/4" = 1'). Bạn có thể kéo một bản vẽ đã đặt hoặc nhích nó bằng phím mũi tên, và {{ui:Formats…}} › {{ui:Import SVG…}} biến thiết kế tờ của bạn thành khung tên với các trường nhập theo từng tờ.
- **Ghi công thư viện trên tờ.** Một bộ bản vẽ có mục Thư viện sẽ nhận một bảng ghi công thư viện mà bạn đặt trên bất kỳ tờ nào. Xem [Ghi công thư viện](topic:library-credits).

### Thư viện: đặt đối tượng

- **Đặt theo khung nhìn.** Trong khung nhìn Mặt bằng, Thư viện hiển thị {{ui:Place in plan}}; trong 3D nó hiển thị {{ui:Place in model}}; trong Tách nó hiển thị một nút chia với {{ui:Place in plan}} là hành động chính. Cả hai cách đều ghi cùng một cấu kiện IFC. Bạn cũng có thể kéo thẻ Thư viện lên mặt bằng hoặc khung nhìn 3D; với bút hoặc ngón tay, nhấn giữ rồi kéo. Xem [Đặt từ Thư viện](topic:place-from-library).

### Tệp và trợ lý

- **Collada và Google Earth.** {{ui:Collada}} trên thanh công cụ (menu Tệp trong các kiểu menu) ghi một tệp .dae, hoặc một .kmz đặt đúng vị trí mô hình trên bản đồ. Xem [Xuất mô hình dưới dạng Collada hoặc cho Google Earth](topic:collada).
- **Trợ lý có thể đặt thiết bị điện.** Trợ lý đã kết nối của bạn có công cụ mới để thêm, liệt kê, đổi và xóa thiết bị và để bật đèn. Trợ lý luôn tắt cho đến khi bạn bật trong {{ui:Settings}}. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).
- **Scan to BIM (tiện ích).** Mặc định tắt và cần tiện ích Đám điểm. Nó đề xuất tầng, tường, cửa đi và cửa sổ từ một bản quét, kèm độ lệch đo được cho từng mục; chấp nhận là một bước hoàn tác.

### Phân tích

- **Dữ liệu gió và động đất của địa điểm.** Trong thẻ {{ui:Analysis}}: tải gió theo ASCE 7-10 hoặc 7-16 cho công trình kín cứng, với lực trên mỗi tầng như các trường hợp tải, và dữ liệu địa chấn của địa điểm với tra cứu USGS và phổ thiết kế.
- **Theo dõi kết cấu và phần tử hữu hạn.** Kiểm tra bê tông theo ACI 318-19, lực ngang tương đương theo ASCE 7-22, trôi tầng, sàn và tường như tấm, và tổ hợp tải theo ASCE 7 và EN 1990. Bộ máy phần tử hữu hạn của chúng tôi làm vỏ, tứ diện và phân tích mode. Xem [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic) và [Phân tích khung](topic:frame-analysis).

### Tiện ích khác và tài liệu

- **Chiếu sáng trong nhà (tiện ích).** Đặt đèn và ghi độ rọi (lux) dưới dạng số lên mặt bằng của mỗi tầng, kèm ước lượng chói và báo cáo có thể in.
- **Bảng Tài liệu.** {{ui:File}} › {{ui:Documents…}} có check out và check in kèm tệp khóa, ký hiệu sửa đổi, trạng thái phát hành và lịch sử.
- **Vùng và thép.** Bộ quy định bản vẽ và xây dựng của Nam Phi trong tiện ích Quy định, và 976 kích thước thép của Anh trong bảng tiết diện dùng chung.
- **Tiện ích in nhựa lỏng miễn phí.** Trình cắt lát, giá đỡ và bè, thử nghiệm phơi sáng, và các định dạng tệp GOO, SL1, Chitubox và Anycubic, đều tắt mặc định.

## Trong mọi ứng dụng

- Di chuột qua một nút hoặc điều khiển sẽ hiện chú giải Bootstrap.
- Vùng mẹo khởi đầu trên bản vẽ trống có nút đóng; BimCraft nhớ rằng nó đã bị đóng.
- Dải thẻ của bảng nay cuộn khi không vừa, thay vì bị cắt.
- Khi có tài liệu mở, thẻ trình duyệt hiển thị "<document> - BimCraft | CadCraft".
- Trong {{ui:Settings}} › {{ui:General}} › {{ui:Layout}}, các bố cục là danh sách thả xuống với các lựa chọn hai dòng.
- Danh sách ngôn ngữ trong {{ui:Settings}} có nhiều ngôn ngữ hơn 0.8; các ngôn ngữ khác tiếng Anh là bản nháp máy.

## Đã sửa

- **Di chuyển hoạt động trên cầu thang,** và trên dốc, lan can, mặt phẳng mái, thiết bị đứng riêng, ảnh và đường dẫn.
- **Kéo tường không còn làm lệch phòng.** Tay nắm tâm di chuyển tường vuông góc với chính nó, và các góc trượt dọc theo các tường nối. Giữ {{key:Mod}} để di chuyển tự do kiểu cũ; {{ui:Square up}} đưa góc 90 độ trở lại.
- **Đổi độ dày hoặc kiểu tại một nút nối** nay giữ góc khép kín ở chữ L, chữ T, nút ba tường và cạnh một tường cong.
- **Di chuyển hoặc sao chép một nhóm phòng** giữ các tường nối bên ngoài nhóm được nối.
- **Làm lại giữ nguyên nhận dạng kích thước tường.**
- **Chọn một tường khi Draw tắt** không còn báo lỗi trong Properties.
- **Kết xuất chuyển sang WebGL** khi GPU không khởi động được, thay vì dừng.
- **Kiểm tra EnergyPlus có thể bật lại.**
- **Tài liệu mở thành hộp thoại ở giữa.** {{key:Esc}}, nút X hoặc một cú nhấp vào trang tối đều đóng nó.
- **Các nút {{ui:Plan}}, {{ui:Split}} và {{ui:3D}} hiển thị** ngay khi một mô hình được mở, không chỉ sau khi Draw đã được bật một lần.

## Những giới hạn cần biết

- Chưa in thử trên phần cứng thật. Giá đỡ nhựa lỏng là mới và chưa được kiểm chứng.
- Kết quả gió, động đất, bê tông và phần tử hữu hạn là công cụ kiểm tra cho kỹ sư, đã đối chiếu với các công thức đóng, chưa đối chiếu với một công trình thật.
- Scan to BIM được thử trên một công trình tổng hợp, không phải bản quét thật, và chỉ tìm được các phòng vuông góc.
- Collada chưa được mở trong Blender hay Google Earth tại đây.
- Ước lượng chiếu sáng được đối chiếu với trace của chính chúng tôi, không đối chiếu với các chương trình chiếu sáng khác.
- Các số liệu của Nam Phi chưa được kiểm chứng.
- Kiểu nối tường (butt, vát góc, cắt vuông) và ưu tiên lớp chưa được xây dựng; các góc được vát (mitre).
- Các ngôn ngữ khác tiếng Anh là bản nháp máy.

Mọi thứ khác nằm trong [Những gì chưa xây dựng](topic:not-built-yet). Các ghi chú 0.8 và 0.8.1 nằm phía dưới trên trang này.

## Cũ hơn: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong BimCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. BimCraft nay có thể trả lời các câu hỏi về một công trình và kiểm tra nó, với người, âm thanh, nước, gió và động đất, và vẽ nó với nhiều công cụ hơn; 0.8.1 là bản sửa lỗi.

### Mới

**Kiểm tra công trình**

- **Người trong công trình.** Mục {{ui:People in the building}} của bảng bên trái đưa người đi qua các phòng, cửa và cầu thang của bạn trong một tình huống sơ tán hoặc một ngày người đến bình thường. Bạn thấy các hàng đợi nơi công trình thu hẹp, quãng đường dài nhất đến lối thoát từ mỗi phòng và người cuối cùng mất bao lâu. Đánh dấu {{ui:Shut}} trên một cửa để xem điều gì thay đổi, và đánh dấu {{ui:Show the people in the 3D view}} để xem những người đi bộ. Các phát hiện chuyển sang Vấn đề. Đây là mô hình đám đông thô phục vụ quyết định thiết kế, không phải chứng nhận an toàn cháy. Xem [Cho người đi bộ qua công trình](topic:people-in-the-building).
- **Âm học phòng, và nghe thử.** Mục {{ui:Room acoustics}} cho thời gian vang của mỗi phòng theo dải quãng tám (Sabine và Eyring) từ kích thước và các lớp hoàn thiện bạn chọn, và với mục tiêu riêng cho biết cần thêm bao nhiêu hấp thụ để đạt. {{ui:Play it in this room}} phát giọng nói, tiếng vỗ tay, nốt gảy hoặc tệp âm thanh riêng của bạn qua đáp ứng xung được tính cho phòng. Các số liệu hấp thụ là giá trị công bố điển hình để bạn thay thế. Xem [Âm học phòng](topic:room-acoustics).
- **Phát lũ, gió và động đất.** {{ui:Hazard playback}} phát nước dâng qua các phòng, áp lực gió trên mỗi tầng và một trận động đất làm rung các tầng, trên một mặt bằng hoặc mặt đứng có thanh thời gian. Mô hình đơn giản với giả định hiển thị trên bảng; không phải kiểm tra quy chuẩn. Xem [Phát lũ, gió hoặc động đất](topic:hazard-playback).
- **Điều gì hao mòn trong năm mươi năm.** {{ui:Life-cycle view}} liệt kê cửa sổ, cửa đi, lớp hoàn thiện và mái, mỗi thứ kèm tuổi thọ, các năm thay thế và, khi bạn nhập chi phí đơn vị, chi phí theo năm và giá trị hiện tại. {{ui:Save the schedule (CSV)}} ghi ra. Tuổi thọ là số liệu lập kế hoạch. Xem [Xem điều gì hao mòn trong năm mươi năm](topic:life-cycle-view).
- **Kiểm tra bê tông và địa chấn.** Các khối {{ui:Concrete members}} và {{ui:Seismic loads}} trong thẻ {{ui:Analysis}} kiểm tra dầm và cột bê tông theo ACI 318-19 và tạo lực ngang tương đương theo ASCE 7-22 trên sàn cứng, kèm trôi tầng. Để kỹ sư kiểm tra. Xem [Kiểm tra cấu kiện bê tông và tạo tải động đất](topic:concrete-and-seismic).

**Kiểm tra và báo cáo**

- **Kiểm tra theo IDS.** Tải tệp `.ids` khách hàng đưa cho bạn và xem mọi cấu kiện không đạt trong Vấn đề, trước khi bạn giao IFC. Mở {{ui:Check against an IDS}} dưới {{ui:Model checks}}. Xem [Kiểm tra mô hình theo IDS của khách hàng](topic:check-against-ids).
- **Thẻ và bảng thống kê.** Định nghĩa thẻ riêng, đặt chúng cho nhiều cấu kiện cùng lúc, và tạo bảng thống kê có cột, bộ lọc và nhóm đọc các thẻ đó; thẻ được giữ trong IFC. Xem [Thẻ và bảng thống kê](topic:tags-and-schedules).
- **Tài liệu từ mô hình.** {{ui:Documents from the model}} điền một mẫu đặc tả từ IFC đang mở và lưu thành PDF, tài liệu Word hoặc Markdown. Xem [Tài liệu từ mô hình](topic:documents-from-the-model).
- **So sánh bản quét với mô hình.** Khi có đám điểm mở, {{ui:Compare}} đánh giá mỗi cấu kiện là đã xây, xây một phần, thiếu hoặc chưa tới, và hiển thị phần trăm đã xây. Xem [So sánh bản quét với mô hình](topic:compare-scan-with-model).
- **Carbon và chi phí.** Ngăn Carbon cộng carbon nội tại từ một bảng hệ số bạn có thể sửa, và ngăn Chi phí trải giá trên lịch 4D. Các hệ số đi kèm BimCraft là chung và được đánh dấu chưa kiểm chứng. Xem [Carbon nội tại và chi phí](topic:embodied-carbon-and-5d-cost).
- **Mọi phép chiếu bản đồ.** {{ui:Measure}} › {{ui:Coordinate system…}} nhận một số EPSG, một múi UTM, một tên hoặc định nghĩa phép chiếu riêng của bạn. Xem [Định vị với mọi phép chiếu](topic:georeference-any-projection).

**Vẽ và chỉnh sửa**

- **Move, Align và Distribute.** Dưới {{ui:Build}}; {{key:Shift+M}} bắt đầu Move (chỉ {{key:M}} vẫn là Measure). Move sao chép khi bạn đi với {{key:C}}, mỗi bước là một lần hoàn tác, và nó đi qua phiên Live TeamWork. Xem [Di chuyển, sao chép, căn chỉnh và phân bố](topic:move-align-distribute).
- **Ảnh dưới mặt bằng.** {{ui:Build}} › {{ui:Picture}} đặt PNG, JPEG hoặc WebP dưới mặt bằng của một tầng hoặc trên mặt phẳng đứng. Đặt tỷ lệ bằng hai điểm, rồi di chuyển, xoay, làm mờ và khóa nó. Một vùng được sao chép trong MarkupCraft dán vào theo tỷ lệ tờ của nó. Xem [Đặt ảnh dưới mặt bằng](topic:pictures-as-backgrounds).
- **Tường từ bản quét.** Khi có bản quét mở, tường, cửa đi và phòng xuất hiện như đề xuất để bạn giữ hoặc bỏ từng cái, trong một bước hoàn tác. Chỉ tìm được tường theo hai phương vuông góc. Xem [Biến bản quét thành tường](topic:scan-to-walls).
- **Trace, nét bút và cầu thang từ phác thảo.** {{ui:Trace}} hiển thị một tầng khác nét đứt dưới mặt bằng, {{ui:Pens}} cho tường, cửa đi và cửa sổ độ dày nét riêng trong một khung nhìn, và {{ui:Sketch stair}} biến một đường đi bộ thành cầu thang. Lưới Wavefront OBJ được mở. Xem [Trace tầng, nét bút và cầu thang từ phác thảo](topic:trace-pens-stairs-obj).
- **Công trình quanh một địa chỉ.** Các công trình và thửa đất mà Địa chỉ đến địa điểm của CivilCraft tìm được xuất hiện như đề xuất; bạn đánh dấu những cái muốn thêm. Xem [Bắt đầu từ địa điểm của CivilCraft](topic:site-from-civilcraft).
- **Bản vẽ tấm.** {{ui:Build}} › {{ui:Panel drawings}} dựng khung tường, sàn và mái bằng gỗ hoặc thép tấm mỏng, và lưu danh sách cắt dạng CSV cùng bản vẽ thi công dạng PDF. Đây là giá trị khởi đầu, không phải thiết kế kết cấu. Xem [Bản vẽ tấm](topic:panel-drawings).
- **Bảng ký hiệu và cây.** {{ui:Build}} › {{ui:Symbol palette}} tìm ký hiệu điện và cấp thoát nước theo tên; nguồn {{ui:Plants}} của {{ui:Library}} liệt kê khoảng 400 loại cây với ký hiệu mặt bằng. Xem [Bảng ký hiệu](topic:symbol-palette) và [Đặt một cây](topic:plant-list).

**Ống, ống gió và năng lượng**

- **Split, VRF và fan coil.** Dàn trong nhà và dàn ngoài trời cùng các đầu nối, và các bộ ống được chọn kích thước từ một bảng giá trị ví dụ điển hình mà bạn có thể đổi. Xem [Split, VRF và fan coil](topic:split-vrf-fan-coils).
- **Tính toán.** Ngăn Tính toán kiểm tra kích thước ống cấp và ống gió theo tổn thất áp suất, định tuyến cáp qua máng và ống luồn và hiển thị độ lấp đầy của chúng, và tính độ rọi từ tệp IES hoặc EULUMDAT. Giá trị mặc định được ghi nhãn; nhập giá trị theo quy chuẩn của bạn. Xem [Tính toán ống, ống gió, cáp và ánh sáng](topic:mep-calculations).
- **Tệp PCF.** **Export PCF** của công cụ Ống ghi các đoạn cho chương trình phân tích ứng suất ống và bản vẽ isometric, và một tệp PCF đọc lại sẽ vẽ ống của nó. Xem [Tệp thành phần ống](topic:piping-pcf).
- **Điện mặt trời.** Lắp mảng trên mái hoặc mặt đất, che bóng từ mô hình, ước tính năng lượng hằng năm, kiểm tra chuỗi và tạo dữ liệu sơ đồ một sợi. Mô-đun khởi đầu và tổn thất là chung. Xem [Điện mặt trời](topic:solar-pv).
- **Tệp EnergyPlus.** Ngăn Kiểm tra với EnergyPlus ghi mô hình thành IDF để chạy trong EnergyPlus của bạn. Chạy trong trình duyệt cần một bản dựng bạn tự lưu trữ và nhập địa chỉ; BimCraft không đi kèm. Xem [Kiểm tra sưởi và làm lạnh với EnergyPlus](topic:check-with-energyplus).

**Ảnh và tệp**

- **Chọn bộ máy kết xuất.** {{ui:Render}} có một lựa chọn {{ui:Engine}}. Hai bộ máy tích hợp của chúng tôi (Fast và Path tracer) vẫn là mặc định. **Open in** lưu cảnh thành tệp USD hoặc glTF, và một thư mục dự án Unreal thành tệp .zip; trong CadCraft Studio, một tiện ích có thể thêm bộ máy. Plug-in Unreal mở dự án chưa được phát hành. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Hoàn tác trong Studio.** Bên trong CadCraft Studio, BimCraft báo cho Studio mỗi bước đã xong để Studio có thể hoàn tác bước cuối của bạn trong cửa sổ bạn đã dùng gần nhất. Xem [Hoàn tác giữa các ứng dụng](topic:undo-across-apps).
- **Tiện ích trong tệp của bạn.** Một IFC ghi lại tiện ích nào đã ghi vào nó, và đề xuất những cái bạn thiếu khi mở. Xem [Tiện ích trong tệp của bạn](topic:add-ons-in-your-file).

**Trong mọi ứng dụng**

- **Kết nối AI của bạn.** Trợ lý riêng của bạn có thể điều khiển BimCraft qua kết nối của Studio và trả lời câu hỏi về mô hình, chẳng hạn phòng nào nằm dưới một diện tích nhất định. Studio không có AI riêng. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).
- **Dải nút công cụ.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} có Wrap, 2 hàng hoặc 1 hàng; Wrap vẫn là mặc định.
- **Thiết bị nhập.** Cài đặt bàn di chuột, bút, chuột 3D, bộ điều khiển và MIDI được mọi ứng dụng dùng chung.
- **Vấn đề và Live.** Bảng cảnh báo và các phiên Live hoạt động như trước, với các kiểm tra mới ở trên đưa vào Vấn đề.
- **Ngôn ngữ.** 54 ngôn ngữ, mười trong số đó mới. Các ngôn ngữ khác tiếng Anh là bản nháp máy chưa được người bản ngữ đọc; các chủ đề trợ giúp chủ yếu là tiếng Anh.

### Đã sửa trong 0.8.1

- **Bố cục Dải lệnh + Trình duyệt dự án.** Insert › Import CAD, Insert › Image và Manage › Project Units từng hiển thị "Chưa xây dựng trong BimCraft". Image nay mở công cụ Picture, Import CAD mở {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF hoặc bản quét), và Project Units mở {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Move và Align chạy các công cụ Move và Align, Level mở {{ui:Add levels…}}, Phases mở mục giai đoạn cải tạo và Materials mở thư viện vật liệu.
- **Mục bản vẽ DWG.** Nó bị đọc sai kiểu; đã sửa trong BimCraft và các ứng dụng khác đọc DWG.
- **Ngôn ngữ khi chạy.** Studio và các bản đóng gói nay có thể đổi ngôn ngữ mà không cần khởi động lại. Điều này chưa được thử trên mọi nền tảng; hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Kịch bản gói Archicad.** `archicad_bundle.py`, một tệp tải riêng, nay tìm đường dẫn của Archicad, theo dõi thư mục tối đa 20 giây và thử lại cạnh gói.

### Chưa có trong phiên bản này

- **Công cụ an toàn và thiết kế.** Người trong công trình không có giới hạn khoảng cách đi lại theo quy chuẩn xây dựng (bạn nhập giới hạn) và chưa được kiểm tra thủ công trên một mặt bằng thật. Các số liệu âm học, vòng đời và phát lũ là giá trị lập kế hoạch, không phải kiểm tra quy chuẩn.
- **Khí hậu tương lai và EnergyPlus.** Không có khí hậu tương lai tích hợp: bạn có thể tải tệp kịch bản cho lần chạy lũ. Chạy EnergyPlus trong trình duyệt không thuộc bản phát hành này.
- **Bố cục dải lệnh.** Material Takeoff vẫn là "Chưa xây dựng" vì BimCraft không có danh sách khối lượng vật liệu, và 54 công cụ dải lệnh bị mờ khác chưa có công cụ BimCraft tương ứng.
- **Chữ ký và nền tảng.** Bộ cài Windows và tệp .dmg của macOS chưa được ký, nên SmartScreen hiển thị {{ui:More info}}, rồi {{ui:Run anyway}}, và macOS cần nhấp chuột phải rồi {{ui:Open}}. Bản dựng iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Thử nghiệm trên trang thật.** Một số thử nghiệm trình duyệt BimCraft cũ vẫn lỗi trên trang thử của chúng tôi, như trước 0.8.1.

Mọi thứ khác nằm trong [Những gì chưa xây dựng](topic:not-built-yet). Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
