---
title: Các trường của bảng Thuộc tính
summary: Ý nghĩa của từng trường trong bảng Thuộc tính và các bảng Tệp, Bản vẽ và Thư mục, và những trường nào bạn có thể thay đổi.
keywords: thuộc tính, trường, globalid, guid, sao chép, sao chép giá trị, sao chép tất cả, csv, bộ nhớ tạm, số sê-ri, thẻ, kiểu đối tượng, dòng, express id, bộ thuộc tính, pset, khối lượng, lược đồ, bảng tệp
from: fe55b435
---

## Một cấu kiện IFC

Phần trên của bảng {{ui:Thuộc tính}} hiển thị loại của cấu kiện không kèm tiền tố "Ifc" (ví dụ "Door", "WallStandardCase", "FurnishingElement") và tên của nó, hoặc "Chưa đặt tên".

| Trường | Ý nghĩa | Có thể sửa |
|---|---|---|
| Tên | Tên của cấu kiện, thường là tên họ và tên kiểu mà phần mềm xuất ghi | Có |
| Kiểu | Tên kiểu của cấu kiện, khi nó có kiểu | Không |
| Kiểu đối tượng | Mô tả kiểu dạng văn bản tự do mà một số phần mềm xuất điền vào | Có |
| Thẻ | Thẻ hoặc ký hiệu của cấu kiện; nhiều phần mềm xuất ghi mã định danh của cấu kiện vào đây | Có |
| Mô tả | Văn bản tự do | Có |
| GlobalId | Mã định danh IFC 22 ký tự cố định của cấu kiện, giống nhau ở mọi lần xuất của cùng cấu kiện | Không |
| Dòng | Số dòng của cấu kiện (`#1234`) trong tệp IFC này. Số này thay đổi giữa các lần xuất | Không |

Bên dưới là các **bộ thuộc tính**, sắp xếp theo tên:

- Mỗi bộ mở hoặc đóng khi bạn nhấp vào tên của nó. Ba bộ đầu tiên được mở sẵn.
- Bộ được đánh dấu "(type)" thuộc về kiểu của cấu kiện: "Thuộc tính kiểu: thay đổi ở đây áp dụng cho mọi cấu kiện thuộc kiểu này."
- Các bộ khối lượng (chiều dài, diện tích, thể tích, số lượng, trọng lượng) chỉ đọc.
- Danh sách và giá trị liệt kê được hiển thị, chỉ đọc.
- Giá trị Có/Không hiển thị là **Có** hoặc **Không**.
- Số được làm tròn đến bốn chữ số thập phân khi hiển thị. Chiều dài (thuộc tính chiều dài hoặc chiều dài của một khối lượng) hiển thị theo {{ui:Đơn vị}} chọn trên thanh công cụ, kèm đơn vị bên cạnh, và bạn có thể nhập giá trị mới theo đơn vị đó hoặc theo một ký hiệu đơn vị khác (2.4 m, 8'-0"): BimCraft ghi lại số gốc của tệp. Các số khác hiển thị đúng như tệp có.
- Giá trị trống hiển thị là *trống*. Giá trị đã sửa được in đậm và có một thanh màu xanh bên cạnh.

## Sao chép một giá trị

Mọi giá trị trong {{ui:Thuộc tính}} đều có một nút sao chép nhỏ bên cạnh: nhấp vào để đưa giá trị đó vào bộ nhớ tạm đúng như đang hiển thị, ví dụ GlobalId, số sê-ri hoặc bất kỳ giá trị bộ thuộc tính nào. Sao chép không bao giờ bắt đầu chỉnh sửa.

Ở trên cùng, {{ui:Sao chép tất cả}} sao chép mọi giá trị của cấu kiện dưới dạng văn bản, theo từng bộ, và {{ui:Sao chép dạng CSV}} sao chép chúng thành các hàng gồm nhóm, thuộc tính và giá trị để dán vào bảng tính; các giá trị trống được giữ lại để mỗi trường có một hàng. Cách này hoạt động giống nhau với cấu kiện của mô hình khác đang mở; khi có nhiều mô hình mở, CSV bắt đầu bằng một cột Mô hình ghi tên tệp.

## Bảng Tệp (IFC)

| Trường | Ý nghĩa |
|---|---|
| Tệp, Dung lượng | Tệp bạn đã mở |
| Lược đồ | Phiên bản IFC, như IFC2X3 hoặc IFC4 |
| Dự án | Tên và tên dài của dự án |
| Giai đoạn | Giai đoạn dự án, nếu phần mềm xuất đã ghi |
| Xuất từ | Chương trình xuất, lấy từ phần đầu tệp |
| Tác giả | Tác giả trong phần đầu tệp |
| Đã xuất | Ngày và giờ trong phần đầu tệp |
| Cấu kiện | Có bao nhiêu cấu kiện có hình dạng được vẽ |
| Tam giác | Các hình dạng của chúng tạo thành bao nhiêu tam giác; thước đo độ nặng của mô hình |

## Bảng Tệp (tệp dự án và họ)

| Trường | Ý nghĩa |
|---|---|
| Loại | Dự án, Mẫu dự án, Họ hoặc Mẫu họ |
| Lưu bằng | Phiên bản đã lưu tệp lần cuối |
| Build | Bản dựng chính xác của phiên bản đó |
| Đã đọc | Phần nào của tệp BimCraft đã đọc, trên tổng kích thước tệp |

## Bảng Bản vẽ (DWG và DXF)

| Trường | Ý nghĩa |
|---|---|
| Định dạng | Phiên bản mà bản vẽ được lưu theo, kèm mã định dạng, như AC1032 |
| Đơn vị | Đơn vị chèn của bản vẽ, khi đã đặt |
| Thực thể | Có bao nhiêu đối tượng đã được đọc |
| Lớp | Có bao nhiêu lớp |
| Tờ | Có bao nhiêu tờ (bố cục), hoặc Không có |
| Bản vẽ liên kết | Có bao nhiêu bản vẽ liên kết được tìm thấy và tải |
| Thiết bị | Có bao nhiêu thiết bị đã gắn thẻ nằm trên các tờ |

## Bảng Thư mục

| Trường | Ý nghĩa |
|---|---|
| Thư mục, Tệp, Dung lượng | Thư mục bạn đã mở, nó có bao nhiêu tệp và tổng dung lượng |
| Mô hình | Tệp dự án và họ, mỗi tệp với các bản sao lưu của nó được đếm một lần |
| Bản vẽ CAD, Mô hình IFC | Số lượng mỗi loại |
| Vấn đề | Có bao nhiêu bản sao mô hình không đầy đủ hoặc không đọc được, hoặc Không có |
