---
title: BimCraft đọc gì từ mỗi định dạng
summary: Chính xác những gì BimCraft đọc từ IFC, tệp dự án và family, DWG và DXF, và những gì nó để lại.
keywords: định dạng, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, phiên bản, tương thích, đọc gì
from: 9b8dfb4f
---

## IFC

| Đọc | Chi tiết |
|---|---|
| Hình học | Mọi phần tử có hình dạng, được tô màu theo tệp. Phòng và không gian được vẽ xuyên thấu và ẩn lúc đầu |
| Tầng | Các tầng của công trình theo thứ tự cao độ, và các phần tử nằm trên mỗi tầng. Phần tử không thuộc tầng nào được nhóm là "Không thuộc tầng nào" |
| Số phần tử | Có bao nhiêu phần tử mỗi loại (tường, cửa đi, sàn…), hiển thị trong {{ui:Phần tử}} |
| Thông tin dự án | Tên dự án, tên đầy đủ và giai đoạn; schema; chương trình xuất, tác giả và ngày xuất từ tiêu đề tệp |
| Dữ liệu phần tử | Tên, kiểu, loại đối tượng, nhãn, mô tả, GlobalId; mọi bộ thuộc tính và bộ khối lượng gắn trên phần tử và trên kiểu của nó |

Có thể sửa: tên, loại đối tượng, nhãn, mô tả, và từng giá trị thuộc tính. Lưu thành tệp IFC mới. Các schema IFC2X3, IFC4 và IFC4X3 mở được, được đọc bởi bộ máy IFC riêng của BimCraft; bất cứ thứ gì nó chưa vẽ được sẽ được liệt kê dưới **Chưa vẽ** trong bảng {{ui:Tệp}}. Mô hình được dời về gốc khi mở, nên một mô hình đặt xa gốc vẫn hiển thị ở giữa màn hình. `.ifczip` và `.ifcxml` không mở được.

## Tệp dự án và family

Dự án `.rvt`, mẫu dự án `.rte`, family `.rfa` và mẫu family `.rft`.

| Đọc | Chi tiết |
|---|---|
| Thông tin tệp | Phiên bản phát hành và bản dựng, chia sẻ làm việc, đường dẫn mô hình trung tâm, đường dẫn lưu lần cuối, tên người dùng, ngôn ngữ vùng, GUID tài liệu |
| Thông tin dự án | Các trường riêng của dự án (tên, số hiệu, chủ đầu tư, địa chỉ, trạng thái…), không gồm giá trị mặc định của dự án mới |
| Thông tin family | Tên family, loại, phiên bản phát hành, lần cập nhật cuối, và các tham số của nó theo nhóm |
| Liên kết | Danh sách các mô hình liên kết, liên kết CAD, hình ảnh và bảng ghi chú chính mà tệp trỏ tới |
| Ảnh xem trước | Ảnh thu nhỏ được lưu trong tệp |

Không đọc: mô hình 3D, phần tử, khung nhìn, tờ và bảng thống kê. Chúng được lưu theo định dạng không có tài liệu. BimCraft chỉ đọc vài chục KB từ mỗi tệp, nên kích thước tệp hầu như không quan trọng.

## Tệp dự án .pln, .pla, .tpl và .bpn

Chưa đọc: BimCraft cho biết điều này khi bạn mở một tệp. Xuất IFC cho mô hình và DWG cho các bản vẽ; xem [Mở tệp dự án .pln và .pla](topic:pln-project-files).

## DWG và DXF

| Đọc | Chi tiết |
|---|---|
| Không gian | Không gian mô hình và mọi tờ (bố cục), theo thứ tự thẻ |
| Khung nhìn | Các khung nhìn của mỗi tờ, với tỷ lệ, góc xoay và các lớp bị đóng băng |
| Lớp | Tên, màu, bật/tắt, đóng băng, cờ in và độ dày nét |
| Đối tượng | Đường thẳng, đa tuyến, cung tròn, vòng tròn, elip, spline, tô bóng (hatch) và khối đặc, văn bản và văn bản nhiều dòng, khối và thuộc tính, kích thước, đường dẫn và đường dẫn nhiều, bảng, điểm, hình ảnh |
| Bản vẽ liên kết | Được vẽ tại nơi chúng được chèn, khi tìm thấy tệp của chúng |
| Hình ảnh | Được vẽ từ các tệp ảnh khi tìm thấy (PNG, JPEG, GIF, BMP, WebP; không có TIFF) |
| Nhãn thiết bị | Nhãn hạng mục dịch vụ ăn uống (thuộc tính `KCL-ITEM`), cho bảng thiết bị |

Mọi thứ khác được đếm dưới **Chưa vẽ**, không bao giờ đoán. Các định dạng DWG từ AutoCAD 2000 đến 2018 là những định dạng đã được kiểm tra (tệp R13 và R14 cũng được chấp nhận, nhưng không có trong bộ kiểm thử; DWG cũ hơn không mở được); bảng {{ui:Bản vẽ}} hiển thị mã định dạng (như AC1032). Tệp DXF của mọi phiên bản đều mở được, kể cả R12. Cả hai được đọc bởi bộ đọc riêng của BimCraft, trong thẻ này. Không có gì được lưu ngược lại thành DWG hoặc DXF.

## Trong một thư mục

| Loại | Phần mở rộng | Trong báo cáo |
|---|---|---|
| Mô hình | `.rvt` `.rfa` `.rte` `.rft` | Được nhóm với các bản sao lưu đánh số, đã kiểm tra tình trạng, đọc thẻ thông tin, kiểm tra liên kết |
| IFC | `.ifc` | Được liệt kê; mở trong 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Được liệt kê cùng các mô hình liên kết chúng; DWG và DXF mở trong 2D, DGN thì không |
| Tệp thừa | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Được liệt kê dưới **Để sang một bên** |
| Thư mục phụ trợ | `*_backup`, `*_log`, `Revit_temp`, thư mục ẩn | Được liệt kê dưới **Để sang một bên**, không đọc |

Xem [Báo cáo thư mục: vai trò, trạng thái và liên kết](topic:folder-roles).
