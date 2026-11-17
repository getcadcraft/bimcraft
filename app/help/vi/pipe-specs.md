---
title: Thông số ống, van, van điều tiết và họ của nhà sản xuất
summary: Thiết lập thông số ống riêng (bảng kích thước kèm vật liệu, kiểu nối và độ nhám), lưu trong tệp mô hình; đặt van, lọc và van điều tiết lên các tuyến ống; và đưa mô hình van hoặc thiết bị của nhà sản xuất vào dưới dạng họ có cổng kết nối.
keywords: thông số ống, pipe spec, pipe specs, piping specification, cấp ống, piping class, ống tùy chỉnh, custom pipe, bảng kích thước, size table, ống (tube), ống vệ sinh, hygienic tube, inox, stainless, schedule, đường kính ngoài, outside diameter, độ dày thành, wall thickness, đường kính trong, inside diameter, độ nhám, roughness, áp suất định mức, pressure rating, csv, json, nhập, import, xuất, export, bảng tính, spreadsheet, tiêu chuẩn, standard, bpe, din, en 10357, en 10255, van, valve, valves, van bướm, butterfly valve, van cân bằng, balancing valve, van điều khiển, control valve, lọc, strainer, van điều tiết, damper, van điều tiết lưu lượng, volume damper, van chống cháy, fire damper, oem, nhà sản xuất, manufacturer, hãng, maker, họ, family, families, cổng, ports, kết nối, connection, step, obj, gltf, ifc, lò sưởi, radiator, bộ đối lưu, convector, tấm sưởi, panel heater, tổ xử lý khí, air handler, miệng gió, diffuser, lưới gió, grille
from: bc2f7c4e
---

## Bạn sẽ làm gì

Vẽ ống theo thông số của riêng bạn thay vì các bảng thép, đồng và nhựa có sẵn, đặt van và van điều tiết lên các tuyến ống, và đặt mô hình của hãng với các cổng mà ống sẽ nối vào.

:::note
Đây là công cụ hỗ trợ bản vẽ và phối hợp. Thông số ống chỉ giữ các con số bạn nhập hoặc nhập vào: hãy kiểm tra từng bảng theo tiêu chuẩn dự án của bạn. Van, lọc và van điều tiết có sẵn là hình dạng sơ đồ, có kích thước theo tuyến, không phải chiều dài theo catalogue của hãng hay theo tiêu chuẩn van.
:::

## Thiết lập một thông số ống

1. Bật {{ui:Vẽ}}, mở {{ui:Bản dựng}} và chọn {{ui:Thông số ống}}. Nút này cũng có trên thanh của công cụ Ống.
2. Chọn {{ui:Mới}}, hoặc bắt đầu từ một tệp, một lần dán hoặc một thông số mẫu (bên dưới).
3. Nhập tên, tiêu chuẩn hoặc tài liệu tham chiếu mà nó theo, vật liệu và kiểu đầu nối hoặc kiểu nối.
4. Nhập mỗi kích thước một hàng: tên kích thước, đường kính ngoài và độ dày thành, tính bằng milimét. Nếu bạn chỉ có đường kính trong thay vì độ dày thành, hãy nhập đường kính trong: giá trị còn lại sẽ được tự điền. DN, áp suất định mức và trọng lượng là tùy chọn.
5. Tùy chọn: độ nhám tính bằng milimét (phép tính tổn thất áp suất dùng giá trị này), độ dày cách nhiệt mà các tuyến mới bắt đầu với, bán kính co như một hệ số của đường kính ngoài, việc thông số có tê và côn thu hay không, và một màu riêng trong 3D.
6. Đánh dấu các loại dịch vụ mà tuyến mới sẽ bắt đầu với thông số này, ví dụ nước lạnh.
7. Chọn {{ui:Lưu trong mô hình}}.

Thông số được lưu trong tệp mô hình. Ai mở tệp cũng có chúng, và Hoàn tác sẽ lấy lại một thay đổi.

Không thể xóa một thông số, hoặc một kích thước của nó, khi đang có tuyến vẽ theo thông số đó. Thay đổi số liệu của một kích thước sẽ vẽ lại các tuyến theo kích thước đó.

## Dùng lại thông số trong mô hình khác

- {{ui:Xuất .json}} lưu thông số đang chọn thành một tệp nhỏ; {{ui:Xuất tất cả}} lưu mọi thông số của mô hình. {{ui:Nhập tệp}} đọc lại chúng.
- {{ui:Xuất .csv}} lưu bảng kích thước cho bảng tính. {{ui:Nhập tệp}} cũng đọc được `.csv`.
- {{ui:Dán các hàng}} nhận một bảng đã sao chép từ bảng tính. Hàng đầu tiên đặt tên cột: `Size`, `OD` và `Wall` (hoặc `ID`), và tùy chọn là `DN`, `Pressure`, `Weight`. Mỗi hàng là một kích thước. Số được hiểu là milimét trừ khi bạn chọn inch hoặc một ô ghi đơn vị (`0.065 in`).

## Thông số mẫu

{{ui:Thêm thông số mẫu}} thêm một trong các mẫu này vào mô hình dưới dạng một bản sao mà bạn có thể sửa.

| Mẫu | Kích thước |
|---|---|
| ASME BPE tube | 1/4" đến 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 đến DN200 |
| EN 10255 steel tube, medium series | DN15 đến DN150 |
| EN 10255 steel tube, heavy series | DN15 đến DN125 |

Các bảng này là đường kính ngoài và độ dày thành mà hai hoặc nhiều trang của nhà cung cấp đã công bố cho tiêu chuẩn và thống nhất với nhau. Chúng không được lấy trực tiếp từ bản tiêu chuẩn. Các kích thước chỉ có trên một trang thì bị bỏ qua. Mỗi mẫu có ghi các trang nguồn và được đánh dấu "kiểm tra theo tiêu chuẩn dự án". Không có độ nhám, áp suất định mức hay trọng lượng.

## Vẽ một tuyến theo thông số

1. Chọn {{ui:Ống}}. Một loại dịch vụ mà bạn đã đánh dấu trong thông số sẽ bắt đầu với thông số đó. Với tuyến khác, chọn thông số trong danh sách vật liệu: các thông số được liệt kê sau các vật liệu có sẵn dưới dạng "Thông số: tên".
2. Danh sách kích thước lúc này chỉ có các kích thước của thông số đó. Chọn một kích thước và vẽ tuyến.

Để chuyển một tuyến sang thông số sau này, chọn nó và đổi **Vật liệu** trong {{ui:Thuộc tính}}. Kích thước của nó sẽ thành kích thước gần nhất của thông số theo đường kính ngoài.

Trong tệp IFC, ống mang tên thông số, tiêu chuẩn, vật liệu, kiểu nối và các kích thước (`CadCraft_PipeSpec` và `Pset_PipeSegmentTypeCommon`, trên ống và trên kiểu của nó).

Các phép tính cỡ ống và tổn thất áp suất đọc đường kính trong của thông số. Khi thông số có độ nhám, ma sát của tuyến được tính theo độ nhám đó (Darcy-Weisbach); nếu không có, phép tính dùng giá trị mặc định thường lệ.

## Van, lọc và van điều tiết

1. Chọn {{ui:Van}} và chọn loại trên thanh: van cổng, van bi, van bướm, van cầu, van một chiều, van cân bằng hoặc van điều khiển, hoặc lọc, cho ống; van điều tiết lưu lượng hoặc van chống cháy, cho ống gió.
2. Bấm vào tuyến nơi đặt van. Tuyến được cắt quanh van và hai phía vẫn được nối. Van nhận kích thước của tuyến và di chuyển theo tuyến.

Thuộc tính của tuyến liệt kê từng van với {{ui:Xóa}}; tuyến lại khép kín.

Phép tính tổn thất áp suất chỉ tính tổn thất phụ kiện cho van cổng, van bi, van cầu và van một chiều. Các loại khác, van điều tiết và họ của nhà sản xuất không cộng tổn thất ở đó: hãy tự tính đến chúng trong kiểm tra của bạn. Chúng được tính trong bảng **Phụ kiện và van** và trong bóc tách khối lượng, và được ghi vào IFC dưới dạng van, một bộ lọc (lọc) và van điều tiết với hai cổng nối.

## Mô hình của nhà sản xuất dưới dạng họ

1. Mở {{ui:Bản dựng}} và chọn {{ui:Họ}}, rồi {{ui:Nhập mô hình}}. Các tệp IFC, STEP, OBJ, STL, glTF và mục Thư viện được đọc. Với OBJ và STL, hãy đặt đơn vị và trục hướng lên của tệp trước.
2. Trong hộp thoại cổng, nhập tên, hãng và số hiệu mẫu.
3. Chọn **Trên đường ống** (van, lọc hoặc van điều tiết) hoặc **Thiết bị**, và nó được ghi thành gì.
4. Gán các cổng. Mỗi cổng có tên, ống hoặc ống gió, dịch vụ, kích thước tính bằng milimét (đường kính ngoài của ống), kích thước danh nghĩa theo cách thông số của bạn gọi, kiểu đầu nối, vị trí và hướng nhìn. {{ui:Trên một mặt}} đặt một cổng vào tâm của một mặt của hộp bao quanh mô hình. Hình chiếu bằng nhỏ hiển thị các cổng.
5. Chọn {{ui:Lưu họ vào mô hình}}.

Một họ đặt trên tuyến cần đúng hai cổng quay ra xa nhau trên cùng một đường thẳng. Chọn nó trong danh sách của công cụ Van và bấm vào một tuyến: nó được đặt với chiều dài riêng và các ống nối vào cổng của nó.

Một họ không bao giờ bị kéo giãn. Nếu cổng của nó không cùng kích thước với tuyến, bạn sẽ được thông báo khi đặt, và {{ui:Kiểm tra kết nối}} sẽ liệt kê nó.

Họ thiết bị được đặt bằng {{ui:Thiết bị}}, loại **Họ của nhà sản xuất**. Ống và ống gió bắt vào các cổng của nó.

{{ui:Tải xuống dưới dạng mục Thư viện}} lưu một họ cùng các cổng thành một tệp mà bạn có thể gửi lên Thư viện.

## Lò sưởi và bộ đối lưu

{{ui:Thiết bị}} cũng có **Lò sưởi** và **Bộ đối lưu / tấm sưởi**: các khối chung có một đầu nối cấp và một đầu nối hồi cho nước sưởi. Xem [Thiết bị MEP có cổng](topic:mep-equipment).
