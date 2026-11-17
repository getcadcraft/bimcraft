---
title: Định vị địa lý với mọi phép chiếu
summary: Cho BimCraft biết mô hình có tọa độ thuộc hệ bản đồ nào, từ toàn bộ danh sách EPSG, mọi múi UTM, hoặc một phép chiếu bạn tự định nghĩa, và dùng nó cho Vị trí, các lớp bản đồ và đám điểm.
keywords: phép chiếu, hệ tọa độ, crs, epsg, utm, múi utm, phép chiếu tùy chỉnh, proj4, chuỗi proj, prj, wkt, định vị địa lý, chuyển đổi bản đồ, ifcprojectedcrs, phép chiếu của tôi, vĩ độ, kinh độ, đông, bắc, lambert, gauss-kruger, state plane, lưới quốc gia
from: 6894c1f2
---

Một số bản vẽ mặt bằng được vẽ trên một hệ bản đồ không nằm trong danh sách ngắn: một múi UTM, một lưới quốc gia, hoặc một phép chiếu nào đó được viết thành một định nghĩa văn bản. {{ui:Đo}} › {{ui:Hệ tọa độ…}} cho phép bạn chỉ ra mô hình dùng hệ nào.

## Chọn hệ cho một mô hình

1. Mở mô hình, chọn {{ui:Đo}}, rồi {{ui:Hệ tọa độ…}}.
2. Gõ vào ô tìm kiếm. Bất kỳ cách nào sau đây đều được:
   - một số EPSG: `32633` hoặc `EPSG:2277`;
   - một múi UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - các từ trong tên: `lambert 93`, `mga zone 56`, `texas central`;
   - một định nghĩa phép chiếu: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, tùy chọn có một tên đứng trước (`My grid = +proj=…`);
   - nội dung của một tệp `.prj`, hoặc dùng {{ui:Tải tệp .prj…}}.
3. Chọn một kết quả, rồi nhấn {{ui:Dùng hệ này}}.

Lựa chọn được lưu trong mô hình (một bộ thuộc tính tên `CadCraft_CRS` trên dự án), nên nó mở lại cùng mô hình. Lưu mô hình để giữ lại. {{ui:Bỏ khỏi mô hình}} quay về những gì tệp ghi.

Nếu định nghĩa của bạn cho cùng tọa độ như một hệ EPSG đã liệt kê, BimCraft sẽ báo và dùng mã đó; khi nhiều hệ được liệt kê có cùng công thức toán, nó cũng nêu tên các hệ kia.

## Phép chiếu của tôi

Một định nghĩa bạn dán vào, hoặc một `.prj` bạn tải, có thể được giữ lại bằng {{ui:Giữ trong Phép chiếu của tôi}}. Danh sách nằm trên thiết bị này (trình duyệt này) và được đưa ra lần tiếp theo bạn mở bộ chọn.

## Những gì sử dụng nó

- {{ui:Đo}} › {{ui:Vị trí}} biến một điểm được chọn thành vĩ độ và kinh độ qua hệ của mô hình. Trước đây nó dừng với một ghi chú khi tệp nêu tên hệ bản đồ nhưng không có mã EPSG; khi đã lưu một lựa chọn, nó cho kết quả.
- Các lớp bản đồ dưới mô hình dùng cùng hệ. Một đám điểm hoặc tệp địa hình ở hệ khác được đề nghị hệ của mô hình (xem bên dưới).
- {{ui:Cài đặt}} › {{ui:BimCraft}} › {{ui:Vị trí}} › {{ui:Chọn hệ khác…}} đặt những gì {{ui:Vị trí}} còn báo cáo: vĩ độ và kinh độ trong bất kỳ hệ địa lý nào đã liệt kê, hoặc Đông và Bắc trong bất kỳ hệ chiếu nào, bên cạnh hệ riêng của mô hình.

## Mô hình chưa có trên bản đồ

Nếu tệp không có chuyển đổi bản đồ, khi chọn một hệ sẽ mở {{ui:Đặt mô hình này lên bản đồ}}. Bạn cũng có thể mở nó từ {{ui:Đo}} › {{ui:Gốc bản đồ…}}.

1. Cho gốc của mô hình dưới dạng Đông và Bắc trong hệ, hoặc gõ vĩ độ và kinh độ rồi chọn {{ui:Quy đổi sang Đông và Bắc}}.
2. Đặt góc xoay về bắc lưới (độ, ngược chiều kim đồng hồ; 0 nghĩa là trục Y của mô hình hướng về bắc lưới) và độ cao của gốc.
3. Tỷ lệ bắt đầu bằng chênh lệch đơn vị giữa mô hình và bản đồ (0.001 cho một mô hình milimét trên lưới mét). Chỉ đổi khi đó là một hệ số kết hợp từ mặt đất đến lưới.
4. Chọn {{ui:Đặt lên bản đồ}}. Một bước hoàn tác ghi một IfcProjectedCRS và một IfcMapConversion (IFC4). Bản thân mô hình không di chuyển.

Một tệp IFC2X3 không có cả hai thực thể đó. BimCraft ghi các số theo cách chuẩn đó cho phép: các bộ thuộc tính buildingSMART `ePSet_MapConversion` và `ePSet_ProjectedCRS` trên dự án, vĩ độ và kinh độ của khu đất, và bắc thật. Hộp thoại có nêu điều này. Lưu mô hình để giữ lại.

## Mô hình đã có trên bản đồ

Khi tệp đã tự định vị trên bản đồ và bạn chọn một hệ khác, BimCraft hỏi:

- {{ui:Chỉ đổi phần Vị trí báo cáo}} giữ định vị địa lý riêng của tệp và dùng lựa chọn của bạn cho {{ui:Vị trí}}, các lớp bản đồ và đám điểm (khi đó các số của mô hình được đọc là thuộc hệ mới).
- {{ui:Di chuyển mô hình sang hệ này}} viết lại định vị địa lý: gốc được đưa qua phép chiếu (Đông, Bắc, độ cao, góc xoay và tỷ lệ), và IfcProjectedCRS (tên, datum, phép chiếu, múi, đơn vị) được viết lại, nên IFC đã lưu ghi hệ mới. Vị trí trên Trái Đất không đổi: gốc giữ nguyên vĩ độ và kinh độ của nó. Các phần tử bên trong mô hình không bao giờ đổi; chỉ định vị địa lý thay đổi.

Hộp thoại hiển thị gốc cũ và gốc mới trước khi bạn chọn. Chuyển đi rồi chuyển lại sẽ đưa gốc về trong phạm vi 1 mm.

## Đám điểm và địa hình ở hệ khác

Một đám điểm hoặc tệp khảo sát mang hệ riêng của nó (LAS, LAZ, E57, GeoTIFF) hoặc không có hệ nào. Khi nó khác với hệ của mô hình, BimCraft đề nghị {{ui:Chiếu lại sang hệ của mô hình}}. Các điểm được di chuyển theo lô (trong một tiến trình nền khi có nhiều điểm, để trang vẫn dùng được), tệp trên máy tính của bạn không bị đụng đến, và dòng trạng thái cho biết đã làm gì. Mở lại tệp để quay về hệ riêng của nó. Với một đám điểm đã mở, {{ui:Chiếu lại sang mô hình…}} trong thanh đám điểm làm điều tương tự.

Nếu tệp không nêu hệ nào, BimCraft hỏi {{ui:Tệp này thuộc hệ tọa độ nào?}}: chọn bằng {{ui:Chọn hệ…}} và câu trả lời được nhớ cho tệp đó trên thiết bị này. {{ui:Giữ hệ riêng của tệp}} để các điểm giữ nguyên.

## Khi có điều gì đó chỉ là xấp xỉ

Các vấn đề được liệt kê trong hộp thoại và trong bảng **Vấn đề**, không bao giờ âm thầm:

- Một vị trí nằm ngoài khu vực mà hệ được tạo ra: các số vẫn chạy, nhưng độ méo tăng dần.
- Các dịch chuyển datum cần một tệp lưới (NADCON, NTv2 và tương tự) không có sẵn. Các hệ trên một datum khác được dịch chuyển bằng phép dịch không cần lưới mà sổ đăng ký EPSG liệt kê, và kết quả chỉ xấp xỉ theo độ chính xác đã nêu, mà thông báo cho biết bằng mét.
- Một điểm không thể chiếu sẽ bị bỏ qua và được đếm; một tệp vượt giới hạn kích thước sẽ bị từ chối và giới hạn được nêu rõ.

:::tip
Tọa độ bản đồ cần một chuyển đổi bản đồ. Một tệp không có chuyển đổi được đặt lên bản đồ bằng {{ui:Gốc bản đồ…}}.
:::

:::note
Di chuyển giữa các datum mà không có tệp lưới chính xác trong vài mét; kết quả Vị trí cho biết khoảng cách sai số khi danh mục có thông tin đó.
:::
