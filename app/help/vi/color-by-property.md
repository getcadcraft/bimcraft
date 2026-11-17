---
title: Tô màu cấu kiện theo thuộc tính
summary: Tô mỗi cấu kiện theo giá trị của một thuộc tính, như lớp, kiểu, tầng, vật liệu, cấp chống cháy hoặc chi phí; đọc chú giải, nhấp vào một giá trị để chỉ hiện các cấu kiện đó, và lưu màu thành bảng màu để dùng cho mô hình khác.
keywords: màu, tô màu, tô theo, chú giải, chế độ xem thông minh, diện mạo, thuộc tính, kiểu, vật liệu, cấp chống cháy, lọc, cô lập, chủ đề, giá trị, bảng màu, lưu màu, tái sử dụng, nhóm, json, mẫu màu
from: f081d343
---

## Bạn sẽ làm gì

Xem nhanh một thuộc tính được phân bố thế nào trên mô hình: tường nào là tường ngoài, vật liệu nào được dùng ở đâu, cấu kiện nào chưa có cấp chống cháy. Mỗi cấu kiện nhận màu theo giá trị của nó, và chú giải cho biết mỗi màu có nghĩa gì và có bao nhiêu cấu kiện mang màu đó.

## Các bước

1. Mở một mô hình IFC.
2. Nhấp vào thẻ {{ui:Màu}} ở bên phải.
3. Chọn một thuộc tính trong danh sách. Những thuộc tính đầu tiên thuộc về mọi cấu kiện ({{ui:Class}}, {{ui:Loại}}, {{ui:Tầng}}, {{ui:Vật liệu}}, {{ui:Tên}}…); phần còn lại đến từ các bộ thuộc tính và bộ đại lượng của mô hình, nằm dưới tên của bộ. Con số sau mỗi mục là số cấu kiện có thuộc tính đó.
4. Đọc chú giải: một màu, giá trị và số cấu kiện có giá trị đó.
5. Nhấp vào một giá trị để chỉ hiện các cấu kiện đó. Giữ {{key:Mod}} và nhấp để thêm giá trị. Nhấn {{key:Shift+H}} để hiện lại tất cả.
6. Nhấp {{ui:Tắt}} để quay về màu riêng của mô hình.

## Bạn sẽ thấy

- Tối đa bảy giá trị, mỗi giá trị có màu riêng, giá trị phổ biến nhất đứng trước. Nhiều giá trị hơn thế sẽ dùng chung một màu xám, được liệt kê là **các giá trị khác**.
- Số có nhiều giá trị khác nhau được chia thành sáu khoảng bằng nhau, từ nhạt (thấp) đến đậm (cao).
- Cấu kiện không có thuộc tính này có màu xám nhạt, được liệt kê là **Không có giá trị**, để các cấu kiện có màu nổi bật.
- Màu thay đổi theo Giấy và Mô hình, và giữ nguyên khi bạn chỉnh sửa mô hình.
- Thuộc tính của một kiểu áp dụng cho mọi cấu kiện thuộc kiểu đó; khi một cấu kiện có giá trị riêng cho cùng thuộc tính, giá trị riêng sẽ được ưu tiên.

## Đổi màu và giữ lại thành bảng màu

- Nhấp vào ô màu của một giá trị trong chú giải để chọn màu khác. Mô hình được tô lại ngay.
- {{ui:Lưu bảng màu}} tải màu xuống dưới dạng một tệp `.json` nhỏ, đặt tên theo thuộc tính, ví dụ `Class colors.json`.
- Trên mô hình khác, hoặc trên máy tính của đồng nghiệp, nhấp {{ui:Mở bảng màu…}} và chọn tệp đó. Mọi giá trị trong bảng màu sẽ nhận màu của nó, nên cùng một cấp chống cháy hoặc hệ thống sẽ có cùng màu trong mọi mô hình.
- Giá trị không có trong bảng màu được tô xám và liệt kê là "không có trong bảng màu"; các giá trị trong bảng màu mà mô hình này không có vẫn được liệt kê với 0, để bạn thấy toàn bộ bảng màu.
- Bảng màu giữ màu của nó ở cả hai chủ đề. Chọn một thuộc tính trong danh sách sẽ bắt đầu lại từ màu tự động.

## Lỗi thường gặp

- **"Mô hình này không có giá trị …".** Bảng màu được lưu cho một thuộc tính mà mô hình này không có (ví dụ tên bộ thuộc tính khác). Mở một bảng màu được tạo cho loại mô hình này, hoặc chọn một thuộc tính trong danh sách.
- **Thiếu một thuộc tính trong danh sách.** Không có cấu kiện nào có hình dạng trong mô hình mang thuộc tính đó. Thuộc tính của chính các tầng và không gian không được liệt kê.
- **Mọi thứ cùng một màu.** Mọi cấu kiện có cùng giá trị, hoặc không có giá trị nào: hãy xem số đếm trong chú giải.

## Tiếp theo

- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
- [Định hướng bằng cây mô hình](topic:model-tree)
