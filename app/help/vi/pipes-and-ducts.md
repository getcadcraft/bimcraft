---
title: Ống và ống gió
summary: Vẽ tuyến ống và ống gió trên mặt bằng theo đường tim; các co, tê, côn thu và chuyển tiếp được tạo cho bạn, các tuyến thuộc về hệ thống với các cổng nối trong tệp IFC, và chúng hiển thị trong mặt bằng, bảng thống kê và bóc tách khối lượng.
keywords: ống, pipe, pipes, đường ống, piping, cấp thoát nước, plumbing, ống gió, duct, ducts, ductwork, hvac, mep, cơ điện, mechanical, co, elbow, tê, tee, côn thu, reducer, chuyển tiếp, transition, phụ kiện, fitting, fittings, van, valve, valves, van cổng, gate valve, van bi, ball valve, van cầu, globe valve, van một chiều, check valve, ống đứng, riser, độ dốc, slope, ống thoát, drain, thoát sinh hoạt, sanitary, thoát mưa, storm, ống thông hơi, vent, nước lạnh, cold water, nước nóng, hot water, nước sưởi, chilled water, sưởi, heating, gas, chữa cháy, fire protection, khí cấp, supply air, khí hồi, return air, khí thải, exhaust, khí ngoài trời, outside air, hệ thống, system, systems, cổng, port, ports, đầu nối, connector, connectors, thiết bị cấp thoát nước, fixture, fixtures, plumbing fixture, chậu rửa, basin, sink, bồn cầu, toilet, water closet, lavatory, chậu rửa bát, kitchen sink, vòi sen, shower, chậu giặt, laundry tub, đơn vị thiết bị, fixture units, uhc, dfu, cỡ ống thoát, size the drains, drain sizing, ống thoát chính, building drain, nhánh, branch, ramal, coletor, lưu lượng khí, airflow, cfm, ma sát, friction, cân bằng ma sát, equal friction, tính cỡ, sizing, bảng thống kê, schedule, bóc tách khối lượng, takeoff, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Bạn sẽ làm gì

Vẽ ống và ống gió của một tòa nhà như bạn vẽ tường: bấm các góc của đường tim tuyến ở cao độ bạn đặt. BimCraft tạo các phụ kiện, đưa từng phần vào hệ thống của nó và nối chúng, để các chương trình khác đọc tuyến như một hệ thống liên thông.

## Vẽ một ống

1. Bật {{ui:Vẽ}}, mở {{ui:Bản dựng}} và chọn {{ui:Ống}}.
2. Trên thanh, chọn **hệ thống** (nước lạnh, nước nóng, thoát sinh hoạt, gas…). Hệ thống đặt một vật liệu thường dùng: đồng cho nước, PVC cho thoát và thông hơi, thép cho sưởi, nước lạnh, gas và chữa cháy. Đổi **vật liệu**, **cấp** và **kích thước** nếu bạn cần. Kích thước và độ dày thành lấy từ tiêu chuẩn công khai: ống thép ASME B36.10M, ống đồng ASTM B88, PVC ASTM D1785 và PEX ASTM F876. Các dự án Brazil có thể dùng **ống nước PVC (NBR 5648)**, PVC hàn dung môi cho nước lạnh, và **ống thoát PVC (NBR 5688)**, loại thường hoặc gia cường, cho thoát và thông hơi: kích thước của chúng được gọi theo DN (DN 25, DN 100). Khi bạn đã chọn một trong số đó, chọn hệ thống khác sẽ giữ theo ống Brazil (ống thoát PVC cho thoát sinh hoạt sau ống nước PVC).
3. Đặt **At**: cao độ của đường tim ống so với cốt.
4. Bấm nơi ống bắt đầu, rồi từng góc. Nhấp đúp, hoặc nhấn {{key:Enter}}, tại điểm cuối. {{key:Backspace}} lấy lại góc cuối; {{key:Esc}} bỏ tuyến.

Ống bắt vào như tường, và bắt vào các tuyến khác: bắt đầu tại đầu của một ống để nối tiếp, hoặc kết thúc trên đường của một ống để rẽ nhánh. Tuyến mới nhận cao độ của ống mà nó bắt vào.

Tuyến bắt đầu hoặc kết thúc tại một cổng của thiết bị sẽ nhận kích thước và hệ thống của nó và được gắn cố định: xem [Thiết bị MEP có cổng](topic:mep-equipment) và [Kết nối ống và ống gió với thiết bị](topic:mep-connections).

## Đặt tiêu chuẩn đường ống của dự án

Danh sách đầu tiên trên thanh ống là **tiêu chuẩn đường ống** của mô hình: **Mỹ (IPC, inch)** hoặc **Brazil (ABNT, DN)**. Nó được lưu trong mô hình, nên mọi người mở tệp đều bắt đầu tuyến theo cùng một cách. Với **Mỹ**, tuyến mới bắt đầu bằng đồng (nước) hoặc PVC Schedule 40 (thoát), theo inch, với độ dốc của International Plumbing Code. Với **Brazil**, nước lạnh bắt đầu bằng PVC soldável DN 25, ống thoát và thông hơi sinh hoạt và mưa bằng PVC esgoto DN 100 với độ dốc của NBR 8160, và nước nóng bằng đồng. Điều này cũng áp dụng cho tuyến bắt đầu tại đầu nối của thiết bị hoặc cổng của thiết bị. Các ống đã vẽ giữ vật liệu và bảng riêng của chúng; danh sách vật liệu vẫn mở, nên bạn vẫn có thể cố ý vẽ một tuyến Brazil trong mô hình Mỹ. Tệp chưa có lựa chọn nào thì hoạt động như trước: tuyến mới theo vật liệu đang dùng.

## Vẽ một ống gió

1. Chọn {{ui:Ống gió}}. Chọn hệ thống (khí cấp, khí hồi, khí thải hoặc khí ngoài trời) và hình dạng: tròn, chữ nhật hoặc bầu dẹt.
2. Nhập chiều rộng và chiều cao (chiều rộng của ống gió tròn là đường kính), và **At** cho cao độ của đường tim.
3. Để tính cỡ theo lưu lượng khí, nhập **Airflow** và **Friction** rồi bấm {{ui:Tính cỡ}}. Ống gió được tính theo cân bằng ma sát, phương pháp trong chương thiết kế ống gió của ASHRAE Handbook, và được làm tròn lên một cỡ có sẵn, nên ma sát ra bằng hoặc thấp hơn tốc độ bạn nhập. Nếu không nhập tốc độ thì dùng 0.08 in. of water trên 100 ft (0.8 Pa/m). Ống gió chữ nhật giữ chiều cao bạn nhập và nhận một chiều rộng; BimCraft sẽ báo khi hai cạnh vượt tỷ lệ 4 : 1.
4. Bấm các góc như với ống.

## Thiết bị cấp thoát nước

{{ui:Bản dựng}} › {{ui:Đặt family}} cung cấp năm thiết bị để bắt đầu, mỗi cái có một đầu thoát và một đầu nước lạnh: **Bồn cầu** (Water closet), **Chậu rửa mặt** (Lavatory), **Chậu rửa bát** (Kitchen sink), **Khay tắm** (Shower tray) và **Chậu giặt** (Laundry tub). Mặt trước của chúng hướng về bạn khi bạn đặt và mặt sau áp vào tường. Ống thoát của chúng có cỡ nhỏ nhất của thiết bị theo NBR 8160 (DN 100 cho bồn cầu, DN 50 cho chậu rửa bát, DN 40 cho các loại khác); nước là DN 20. Thay đổi kích thước hoặc chỉnh sửa chúng như bất kỳ họ nào: xem [Họ và kích thước của họ](topic:families).

Một họ cho biết nó là thiết bị nào dưới {{ui:Thiết bị cấp thoát nước}} trên thẻ {{ui:Đầu nối}} của trình soạn họ. Ống thoát của nó khi đó được tính theo đơn vị thiết bị: 6 UHC cho bồn cầu, 1 cho chậu rửa mặt, 3 cho chậu rửa bát hoặc chậu giặt, 2 cho vòi sen (NBR 8160), hoặc đơn vị thiết bị thoát nước của IPC Table 709.1.

## Từ đầu nối của thiết bị

Các phần tử đặt từ một họ có đầu nối (ống thoát và vòi của chậu rửa, cổ đầu gió của một đầu ra không khí: xem [Chỉnh sửa một họ](topic:family-editor)) hiển thị các đầu nối trống của chúng dưới dạng điểm khi {{ui:Ống}} hoặc {{ui:Ống gió}} đang bật, và con trỏ bắt vào các điểm đó.

- **Bắt đầu tại một đầu nối**: tuyến nhận hệ thống và kích thước của nó (ống của vật liệu trên thanh tại hoặc ngay trên kích thước của đầu nối; ống gió tròn bằng đường kính của nó). Khi đầu nối hướng xuống hoặc lên, như ống thoát dưới chậu rửa, tuyến trước hết đi thẳng xuống hoặc lên đến cao độ trong **At**, rồi tiếp tục theo các lần bấm của bạn.
- **Kết thúc tại một đầu nối**: tuyến đi xuống hoặc lên đến đầu nối và kết thúc tại đó.

Tuyến được nối với phần tử trong tệp IFC, nên các chương trình khác thấy thiết bị là một phần của hệ thống. Một phần tử được đặt sau này với một đầu nối ở cuối tuyến cũng được nối với nó. Một tuyến được di chuyển khỏi đầu nối sẽ không còn nối với nó nữa.

## Các phụ kiện, do BimCraft tạo

| Vị trí | BimCraft tạo gì |
|---|---|
| Tuyến rẽ | Một co. Ống thép với bán kính dài của ASME B16.9 (1.5 × kích thước), ống khác với một đường kính ngoài, ống gió tròn với 1.5 đường kính, ống gió chữ nhật với một chiều rộng (hoặc một chiều cao khi rẽ lên hoặc xuống) |
| Một tuyến kết thúc trên đường của tuyến khác | Một tê; tuyến kia được tách tại đó |
| Hai tuyến gặp nhau đầu nối đầu với kích thước khác nhau | Một côn thu (ống) hoặc một chuyển tiếp (ống gió) |
| Hai tuyến cùng kích thước gặp nhau đầu nối đầu theo góc | Một co |

Khi bạn đổi, di chuyển hoặc xóa một tuyến, mọi phụ kiện trên tầng đó được làm lại. Nếu một nhánh quá ngắn cho các phụ kiện ở đầu của nó, BimCraft sẽ báo và không thay đổi gì: hãy di chuyển góc ra xa hơn.

:::note
Các phụ kiện và van là chung chung: vẽ theo kích thước ống hoặc ống gió, không theo catalogue của hãng. Phụ kiện nối ổ cắm, nén và rãnh, thân van và thiết bị có kích thước riêng của hãng; hãy kiểm tra với nhà cung cấp trước khi đặt hàng.
:::

## Ống đứng

Khi đang vẽ, nhập một cao độ mới vào **At** và nhấn {{key:Enter}}: tuyến đi thẳng lên hoặc xuống tại góc cuối, với một co ở mỗi đầu. Ống đứng có thể đi lên tầng trên. Mỗi tầng hiển thị các phần của tuyến mà phạm vi xem của nó chạm tới, với **UP** hoặc **DN** tại ống đứng.

## Ống thoát và độ dốc của chúng

Ống thoát sinh hoạt và ống thoát mưa bắt đầu với độ dốc nhỏ nhất mà International Plumbing Code cho phép theo kích thước của chúng: 1/4 in. trên mỗi foot đến 2-1/2 in., 1/8 in. trên mỗi foot từ 3 đến 6 in., 1/16 in. trên mỗi foot từ 8 in. Ống thoát PVC Brazil bắt đầu với độ dốc của NBR 8160: 2 % đến DN 75, 1 % từ DN 100. Nhập độ dốc khác trên thanh hoặc trong Thuộc tính: `1/4"/ft`, `2 %` hoặc `1:50`. Tuyến đi xuống từ điểm đầu, nên hãy vẽ ống thoát theo hướng nước chảy. Mặt bằng thể hiện độ dốc và một mũi tên. Thuộc tính cảnh báo khi một ống thoát thoải hơn mức tối thiểu của quy chuẩn.

## Tính cỡ ống thoát theo đơn vị thiết bị

Chọn một ống thoát sinh hoạt: **Fixture units** trong Thuộc tính cho biết nó chịu bao nhiêu và cỡ nhỏ nhất cần thiết. Mọi thiết bị cấp thoát nước có đầu nối thoát nằm trên tuyến đều được tính, và cũng vậy mọi ống thoát đổ vào nó: vẽ ống thoát theo hướng nước chảy, mỗi ống kết thúc tại ống mà nó đổ vào.

- Ống thoát bằng PVC Brazil tính **UHC** và theo NBR 8160; các loại khác tính **DFU** và theo International Plumbing Code.
- **Drain**: một **Branch** được tính theo bảng của quy chuẩn cho nhánh thiết bị; một **Building drain** theo bảng của nó theo độ dốc, nên **Slope** có ý nghĩa.
- Một ống thoát không bao giờ nhỏ hơn các ống thoát thiết bị mà nó phục vụ (bồn cầu cần DN 100, hay 3 in.), cũng không nhỏ hơn ống thoát đổ vào nó. Theo NBR 8160, một ống thoát chính ít nhất là DN 100.

{{ui:Chọn kích thước ống thoát}} làm cho mọi ống thoát sinh hoạt của mô hình quá nhỏ so với đơn vị thiết bị của nó có kích thước cần thiết, như một bước mà bạn có thể hoàn tác. Ống thoát được vẽ lớn hơn mức cần thì giữ nguyên. Khi một ống thoát chở nhiều hơn mức cỡ lớn nhất của ống có thể chở ở độ dốc của nó, BimCraft sẽ báo: hãy cho nó độ dốc lớn hơn hoặc chọn ống khác.

:::note
Các bảng là của ống thoát nằm ngang. Ống đứng, ống thông hơi và ống thoát mưa không được tính ở đây: hãy kiểm tra chúng, và toàn bộ thiết kế, theo quy chuẩn áp dụng cho dự án.
:::

## Van

1. Chọn {{ui:Van}} và loại: van cổng, van bi, van cầu hoặc van một chiều.
2. Bấm vào một ống nơi đặt van. Ống được cắt quanh van và van được nối với cả hai phía.

Thuộc tính của tuyến liệt kê các van của nó, mỗi van có {{ui:Xóa}}.

Các loại van khác, lọc, van điều tiết trên ống gió, thông số ống riêng và họ của nhà sản xuất: xem [Thông số ống, van, van điều tiết và họ của nhà sản xuất](topic:pipe-specs).

## Thay đổi một tuyến

Chọn bất kỳ phần nào của tuyến, trên mặt bằng hoặc khung nhìn 3D. Trong Thuộc tính:

- **Hệ thống**, **Vật liệu**, **Cấp** và **Kích thước** (ống), hoặc **Hình dạng**, **Chiều rộng**, **Chiều cao** (ống gió).
- **Cao độ trên cốt** di chuyển cả tuyến lên hoặc xuống.
- **Cách nhiệt**: độ dày của nó, được giữ cho kiểm tra khoảng hở và danh sách lỗ mở (không vẽ gì cho nó): xem [Kiểm tra ống và ống gió với kết cấu](topic:mep-against-structure).
- Ống thép: **Cắt thành đoạn ống**: xem [Đoạn ống thép (spool) và bản vẽ đoạn ống](topic:pipe-spools).
- **Độ dốc** (ống).
- **Lưu lượng** với {{ui:Tính cỡ}}: với nước, kích thước nhỏ nhất giữ nước ở 8 ft/s (2.4 m/s), hoặc 5 ft/s (1.5 m/s) với nước nóng; ở 3 m/s với ống nước PVC Brazil (NBR 5626). Với ống gió, tốc độ và tỷ lệ ma sát của ống gió như đã vẽ. Ống thoát sinh hoạt thay vào đó được tính theo đơn vị thiết bị: xem **Tính cỡ ống thoát theo đơn vị thiết bị** bên dưới.

Mỗi thay đổi là một bước của {{ui:Hoàn tác}}. {{key:Delete}} xóa toàn bộ tuyến.

## Mặt bằng

- Ống nhỏ hơn 150 mm (khoảng 6 in.) được vẽ thành một đường trên đường tim; ống lớn hơn và mọi ống gió được vẽ thành hai đường theo chiều rộng của chúng.
- Mỗi hệ thống có màu riêng; PDF mặt bằng in chúng bằng màu đen.
- Mỗi tuyến được ghi nhãn kích thước và hệ thống (ví dụ `2" CW` hoặc `16×10 SA`).
- Phạm vi xem của mặt bằng quyết định những tuyến nào được hiển thị, và {{ui:Hiển thị trong mặt bằng này}} có thể bỏ **Pipes** hoặc **Ducts**: xem [Khung nhìn, phạm vi xem và bản vẽ của riêng bạn](topic:views-and-sheets).

## Bảng thống kê và bóc tách khối lượng

Bảng {{ui:Bảng thống kê}} thêm **Pipes** (theo hệ thống, vật liệu và kích thước, kèm chiều dài), **Ducts** (theo hệ thống, hình dạng và kích thước, kèm chiều dài và diện tích bề mặt ngoài) và **Fittings and valves** (theo loại và kích thước, được đếm). Bấm một dòng để chọn những gì nó liệt kê; {{ui:Tải CSV}} tải xuống bảng.

{{ui:Bóc tách khối lượng}} đưa các tuyến sang TakeoffCraft: ống và ống gió theo kích thước dưới dạng tuyến vẽ trên mặt bằng (ống thoát có độ dốc được đo theo độ dốc của nó), phụ kiện và van được đếm tại nơi chúng nằm: xem [Gửi khối lượng của mô hình sang TakeoffCraft](topic:takeoff). Các ống đứng bị bỏ khỏi bảng đó, vì mặt bằng không đo được chúng; bảng Pipes có chiều dài của chúng.

## Trong tệp IFC

Mỗi tuyến là một cụm chứa các phần của nó: đoạn ống và ống gió, phụ kiện và van, mỗi phần có kiểu, vật liệu, màu theo hệ thống và các cổng của nó. Các cổng chạm nhau được nối, và mọi phần thuộc hệ thống phân phối của nó (tệp IFC2X3 nhận cùng thông tin dưới dạng đoạn dòng chảy, phụ kiện và bộ điều khiển trong một hệ thống). Các chương trình khác đọc hệ thống IFC sẽ thấy một tuyến liên thông cho mỗi hệ thống. Định nghĩa riêng của tuyến được giữ cùng nó, nên BimCraft làm lại tuyến đúng như vậy khi bạn thay đổi.
