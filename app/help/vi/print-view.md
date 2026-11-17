---
title: Kiểm tra bản vẽ trong chế độ in
summary: Chuyển một DWG hoặc DXF sang chế độ in để xem nó trên nền trắng, với độ dày nét đúng và không có các lớp không bao giờ in.
keywords: in, xem trước, độ dày nét, lineweight, đơn sắc, đen trắng, defpoints, không in
from: 1a59c23e
---

## Bạn sẽ làm gì

Xem một tờ sẽ trông thế nào trên giấy trước khi in từ chương trình đã tạo ra nó: nền trắng với chữ đen, độ dày nét đúng kích thước thật, và không có các lớp được đặt không in.

## Các bước

1. Mở một bản vẽ DWG hoặc DXF.
2. Nhấp một thẻ tờ phía trên bản vẽ.
3. Nhấp {{ui:Chế độ in}} ở cuối các thẻ, hoặc nhấn {{key:P}}.
4. Phóng to một chi tiết để so sánh nét đậm và nét nhạt.
5. Nhấp {{ui:Chế độ in}} lần nữa, hoặc nhấn {{key:P}}, để quay lại màu thường.

## Bạn sẽ thấy gì

- Giấy trắng trên nền bàn xám; mọi nét và chữ đều màu đen, bất kể giao diện.
- Độ dày nét: trên tờ, mỗi độ dày được vẽ đúng bề rộng thật trên giấy, nên nét 0.5 mm dày gấp đôi nét 0.25 mm ở mọi mức thu phóng. Nét không bao giờ vẽ mỏng hơn độ dày trên màn hình của nó.
- Các lớp được đặt không in, và lớp DEFPOINTS, bị ẩn.
- Nút {{ui:Chế độ in}} giữ trạng thái được nhấn. Chế độ in vẫn bật khi bạn chuyển tờ hoặc mở bản vẽ khác, cho tới khi bạn tắt nó.

Trong {{ui:Mô hình}}, chế độ in chỉ dùng độ dày trên màn hình (nét mỏng rộng một pixel, nét đậm hơn dày thêm một chút), vì không gian mô hình không có khổ giấy.

## Lỗi thường gặp

- **Tưởng là để in.** Chế độ in chỉ là xem trước. In và xuất PDF chưa được tích hợp trong BimCraft; hãy in từ chương trình đã tạo ra bản vẽ.
- **Mong đợi có kiểu in.** Bảng bút và màu kiểu in không được đọc. Mọi thứ đều là đen đơn giản.
- **Nhấn P khi đang gõ.** {{key:F}} và {{key:P}} không làm gì khi bạn đang gõ trong ô nhập, hoặc khi bảng thống kê thiết bị đang hiển thị.
