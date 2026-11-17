---
title: Tiện ích bổ sung mà tệp của bạn sử dụng
summary: BimCraft ghi trong tệp IFC những tiện ích bổ sung nào đã ghi vào nó, và đề nghị thêm những tiện ích bạn đang thiếu khi bạn mở tệp.
keywords: tiện ích bổ sung, addon, tệp này sử dụng, tiện ích bổ sung bị thiếu, trusscraft, thư viện, bản ghi, cadcraft_addons
from: 9d9500d8
---

## Chức năng

Khi một tiện ích bổ sung ghi vào mô hình (một giàn, một đường ống), BimCraft ghi tiện ích đó và phiên bản của nó vào đối tượng dự án IFC, trong một tập thuộc tính tên CadCraft_AddOns. Bản ghi được ghi trong cùng một bước hoàn tác với thay đổi của chính tiện ích, nên hoàn tác thay đổi cũng lấy lại bản ghi. Các chương trình khác bỏ qua tập thuộc tính này; phần tiện ích đã vẽ vẫn nằm trong tệp trong mọi trường hợp.

## Các bước

1. Mở một tệp IFC mà một tiện ích bổ sung đã giúp tạo.
2. Nếu có tiện ích bổ sung mà nó dùng chưa bật, một ghi chú phía trên mô hình cho biết là những tiện ích nào, kèm một nút để thêm chúng từ tài khoản Thư viện của bạn.
3. Thêm chúng, hoặc đóng ghi chú. Mô hình vẫn mở trong cả hai trường hợp.

## Lỗi thường gặp

- **Không có ghi chú nào xuất hiện.** Bạn chưa đăng nhập tài khoản trong thẻ này, hoặc tệp không có bản ghi nào (tệp được tạo trước khi có bản ghi, hoặc bởi chương trình khác).
- **Danh sách thay đổi ghi "undefined".** Đã sửa: nhãn giờ hiển thị tên của tiện ích bổ sung.

## Tiếp theo

- [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library)
