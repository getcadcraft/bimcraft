---
title: Gửi cấu kiện sang PartCraft và nhận lại
summary: Chọn một giá đỡ, thanh giằng, lan can hoặc thiết bị, thiết kế nó thành một chi tiết trong PartCraft cùng với công trình xung quanh, rồi chấp nhận hình dạng mới trở lại mô hình.
keywords: partcraft, chi tiết, gửi, liên kết, cấu kiện, giá đỡ, thanh giằng, hàng rào, lan can, thiết bị, thiết kế, khứ hồi, chấp nhận, đã thay đổi, liên kết chi tiết
from: 4ce2f449
---

## Bạn sẽ làm gì

Thiết kế một cấu kiện của công trình như một chi tiết: gửi sang PartCraft, thay đổi ở đó (cắt, thêm, khoan, đổi kích thước), rồi đưa hình dạng mới về mô hình.

## Các bước

1. Chọn một cấu kiện trong mô hình: cấu kiện chung, thiết bị, cột, dầm, lan can hoặc đồ nội thất.
2. Chọn {{ui:Liên kết chi tiết}} trên thanh công cụ, rồi chọn {{ui:Gửi sang PartCraft}}. PartCraft mở trong thẻ mới với cấu kiện như một chi tiết. Các cấu kiện trong phạm vi 3 m được vẽ màu xám bên cạnh để bạn thiết kế tại chỗ. Không thể thay đổi chúng ở đó.
3. Thay đổi chi tiết trong PartCraft. Trong PartCraft, chọn {{ui:Tệp}} › {{ui:Xuất}} › {{ui:Lưu về BimCraft}}. Bạn có thể lưu về bao nhiêu lần tùy ý.
4. Trở lại BimCraft, nút {{ui:Liên kết chi tiết}} hiển thị một số đếm, và thẻ liệt kê cấu kiện là {{ui:Đã thay đổi trong PartCraft}}, với sự thay đổi kích thước và thể tích được mô tả bằng chữ.
5. Chọn {{ui:Hiển thị}} để xem, rồi {{ui:Chấp nhận}} để cấu kiện nhận hình dạng mới, hoặc {{ui:Giữ bản hiện tại}} để giữ nguyên như cũ.

## Bạn nên thấy gì

- Chấp nhận là một bước hoàn tác. Cấu kiện giữ vị trí, GlobalId, kiểu, vật liệu và thuộc tính của nó. Chỉ phần thân được thay.
- Cấu kiện nhận một bộ thuộc tính {{ui:CadCraft_PartLink}} với liên kết, trạng thái và bản sửa đổi.
- {{ui:Gửi lại}} mở lại cùng cấu kiện trong PartCraft, trên cùng liên kết.

## Điều nên biết

- Tường, sàn, mái, cửa đi, cửa sổ, cầu thang, đường dốc và không gian được vẽ bằng công cụ công trình từ một đường bao và được dựng lại sau mỗi thay đổi. Phần thân từ ứng dụng khác sẽ bị ghi đè, nên các cấu kiện này bị từ chối và có lý do đi kèm.
- Hình dạng trả về là một lưới (phép tessellation IFC), không phải các đặc trưng của chi tiết. Lịch sử của chi tiết vẫn ở trong PartCraft.
- Nếu cấu kiện thay đổi trong mô hình sau khi bạn gửi, thẻ sẽ cho biết trước khi bạn chấp nhận: chấp nhận sẽ thay thế những thay đổi đó.
- Không có gì được tải lên. Hai ứng dụng là các trang của cùng một trang web và chuyển cấu kiện giữa chúng trong trình duyệt này. Cả hai cần được mở trong cùng một trình duyệt.
- Cấu kiện phải khép thành khối đặc trong PartCraft. Cấu kiện có khe hở mở lớn sẽ bị từ chối ở đó, kèm số cạnh hở.
- Để chấp nhận, hãy đặt mô hình chứa cấu kiện làm mô hình đang hoạt động.
