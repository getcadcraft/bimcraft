---
title: Bắt đầu với BimCraft
summary: BimCraft làm được gì hiện nay, cách mở mô hình đầu tiên, xem ở dạng 3D, đổi một giá trị và lưu một bản sao.
keywords: bắt đầu, chạy lần đầu, mở, ifc, rvt, dwg, bắt đầu nhanh, giới thiệu, trình xem, bim
from: fc2dea19
---

BimCraft là ứng dụng mô hình công trình của họ CadCraft. Ở bản này, nó **mở, đọc và kiểm tra** các tệp công trình, và **chỉnh sửa dữ liệu trong mô hình IFC**. Nó chưa vẽ hay dựng các phần tử mới. Hãy xem nó như một trình xem và kiểm tra mô hình, đồng thời cho phép sửa tên, thẻ và giá trị thuộc tính trong tệp IFC.

Những gì nó mở được:

| Tệp | Bạn nhận được gì |
|---|---|
| IFC (`.ifc`) | Toàn bộ mô hình ở dạng 3D: xoay quanh, các tầng, thuộc tính phần tử và chỉnh sửa tên cùng giá trị thuộc tính |
| Tệp dự án và family (`.rvt`, `.rfa`, `.rte`, `.rft`) | Một thẻ tệp: bản phát hành đã lưu, thông tin dự án, ảnh xem trước và các tệp liên kết. Không có 3D. |
| DWG và DXF | Bản vẽ ở dạng 2D: không gian mô hình và mọi tờ, các lớp, bản vẽ liên kết, chế độ in, và bảng thống kê thiết bị cho bản vẽ bếp có gắn thẻ |
| Một thư mục dự án | Báo cáo về mọi mô hình trong thư mục: bản sao lưu, liên kết, bản bị hỏng, và gợi ý nên bắt đầu với tệp nào |

Mọi thứ diễn ra trong trình duyệt, trên máy tính của bạn. **Không có gì được tải lên.** Xem [Các tệp BimCraft mở và lưu](topic:files) để biết chi tiết.

## Mở BimCraft

1. Mở BimCraft trong một trình duyệt hiện đại. Chrome, Edge, Firefox và Safari đều chạy được; [Trình duyệt, thiết bị và bộ nhớ](topic:platforms) liệt kê các điểm khác nhau.
2. Chờ màn hình trống có dòng "Open a building model."

:::note
BimCraft chạy trong trình duyệt, và trên máy tính để bàn bên trong CadCraft Studio cùng các ứng dụng khác. Chưa có tính năng lưu lên đám mây: bạn mở tệp từ máy tính và lưu các bản sao trở lại máy.
:::

## Mở mô hình đầu tiên

Cách nhanh nhất để thấy BimCraft làm gì là mở một tệp IFC.

1. Nhấp {{ui:Chọn tệp}} ở giữa màn hình.
2. Chọn một tệp `.ifc` trong {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} rồi xác nhận.
3. Chờ trong khi dòng trạng thái ở cuối màn hình hiện "Starting the IFC engine…", rồi "Building geometry".

Bạn sẽ thấy mô hình ở dạng 3D ở giữa, bảng {{ui:Tệp}} và danh sách {{ui:Tầng}} ở bên trái, và bảng {{ui:Thuộc tính}} trống ở bên phải. Dòng trạng thái kết thúc bằng "Opened" và số phần tử.

:::tip
Bạn cũng có thể kéo một tệp từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} thẳng vào trang. Màn hình hiện "Drop to open" trong lúc bạn kéo.
:::

:::offline
Công cụ IFC được tải từ trang web vào lần đầu bạn mở một mô hình IFC, trừ khi BimCraft đã được lưu để dùng ngoại tuyến. Bản vẽ DWG và DXF, tệp dự án và thư mục không cần thêm gì: trình đọc của chúng nằm sẵn trong ứng dụng. Nếu nút trên thanh ứng dụng ghi {{ui:Sẵn sàng ngoại tuyến}}, mọi thứ đều mở được khi ngoại tuyến. Nếu không, các mô hình IFC sẽ không mở được cho đến khi bạn kết nối lại, trừ khi đã có một mô hình được mở trong thẻ này. Xem [Trực tuyến và ngoại tuyến](topic:online-offline).
:::

:::online
Sắp đến nơi không có kết nối? Nhấp {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng và chờ đến khi hiện {{ui:Sẵn sàng ngoại tuyến}}. Bản đã lưu (khoảng 11 MB) bao gồm công cụ IFC. Xem [Làm việc ngoại tuyến](common:offline).
:::

## Nhìn quanh

:::mouse
1. Kéo bằng nút chuột trái để xoay quanh mô hình.
2. Cuộn con lăn để thu phóng.
3. Kéo bằng nút chuột phải để di chuyển khung nhìn. Trên bàn di chuột Mac, hãy giữ {{key:Shift}} và kéo.
4. Nhấn {{key:F}} hoặc nhấp {{ui:Vừa khung}} để thấy lại toàn bộ mô hình.
:::

:::touch
1. Kéo bằng một ngón tay để xoay quanh.
2. Chụm hai ngón tay để thu phóng, và di chuyển hai ngón tay cùng nhau để di chuyển khung nhìn.
3. Chạm {{ui:Vừa khung}} để thấy lại toàn bộ mô hình.
:::

## Làm một việc thật: sửa một thẻ

1. Nhấp vào một bức tường, cửa đi hoặc phần tử bất kỳ trong mô hình. Phần tử chuyển sang màu xanh, và thuộc tính của nó hiện ở bên phải.
2. Trong bảng {{ui:Thuộc tính}}, nhấp giá trị bên cạnh **Tag**.
3. Nhập thẻ mới và nhấn {{key:Enter}}.
4. Nhìn vào mục {{ui:Thay đổi}} vừa mở ở bên trái: thay đổi của bạn được liệt kê kèm giá trị cũ và mới.

## Lưu một bản sao

1. Nhấp {{ui:Lưu thành IFC}} trong mục {{ui:Thay đổi}}, hoặc nhấn {{key:Mod+S}}.
2. Tìm tệp mới trong thư mục tải xuống của bạn. Tệp được đặt tên theo tệp gốc kèm thêm " (edited)", ví dụ `Clinic (edited).ifc`.

Tệp gốc của bạn không bao giờ bị thay đổi. [Đổi thuộc tính IFC và lưu bản sao đã chỉnh sửa](topic:edit-ifc-properties) giải thích đầy đủ về việc chỉnh sửa.

## Đi tiếp đến đâu

- [Màn hình BimCraft](topic:workspace): mọi bảng, gọi theo tên.
- [Chuyển từ các chương trình BIM và vẽ khác](topic:coming-from): điều gì khác đi nếu bạn quen dùng Revit.
- [Mở cả thư mục dự án](topic:open-project-folder): trỏ BimCraft vào một thư mục dự án và để nó tự sắp xếp các tệp.
- [Xem bản vẽ DWG hoặc DXF](topic:view-dwg): các tờ, lớp và chế độ in.
