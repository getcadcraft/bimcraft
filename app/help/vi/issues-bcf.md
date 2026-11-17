---
title: Vấn đề và tệp BCF
summary: Lưu một góc nhìn của mô hình thành một vấn đề — camera, các cấu kiện đã chọn, các cấu kiện bị ẩn, mặt cắt — chia sẻ dưới dạng tệp BCF với các công cụ phối hợp khác, và mở tệp BCF của họ để xem vấn đề của họ.
keywords: bcf, bcfzip, vấn đề, chủ đề, điểm nhìn, báo cáo xung đột, phối hợp, nhận xét, ảnh chụp, mở bcf, lưu bcf, xuất, nhập
from: 2a6cf201
---

## Bạn sẽ làm gì

Chỉ vào một vấn đề trong mô hình và giữ góc nhìn thể hiện nó, rồi gửi tiếp trong tệp BCF, định dạng mà các công cụ phối hợp khác đọc và ghi.

## Các bước

1. Mở mô hình IFC và thiết lập góc nhìn: xoay quanh mô hình, chọn các cấu kiện liên quan, ẩn những gì đang chắn, cắt bằng mặt phẳng cắt hoặc hộp cắt.
2. Nhấp thẻ {{ui:Vấn đề}} ở bên phải, rồi {{ui:Vấn đề mới từ góc nhìn này}}.
3. Nhập tiêu đề, và nhận xét nếu muốn; chọn trạng thái; nhập tên hoặc email của bạn (khi đã đăng nhập, tên tài khoản được điền sẵn; xem [Cài đặt BimCraft](topic:settings#your-name-on-issues)). Nhấp {{ui:Tạo vấn đề}}.
4. Nhấp {{ui:Hiển thị}} trên một vấn đề để đưa góc nhìn của nó trở lại.
5. Nhấp {{ui:Lưu BCF}} để tải xuống mọi vấn đề thành một tệp `.bcf`.
6. Để xem các vấn đề do người khác tạo, nhấp {{ui:Mở BCF…}} và chọn tệp `.bcf` hoặc `.bcfzip` của họ.

## Bạn sẽ thấy

- Mỗi vấn đề trong danh sách kèm một hình ảnh góc nhìn của nó, tiêu đề, trạng thái, tác giả và ngày.
- {{ui:Hiển thị}} đưa lại camera, các cấu kiện đã chọn, những gì đã bị ẩn (hoặc chỉ những gì được hiển thị) và mặt cắt. Cấu kiện được tìm theo GlobalId của chúng trong mọi mô hình đang mở; dòng trạng thái cho biết nếu một số cấu kiện không có.
- Một mặt phẳng cắt hoặc hộp cắt từ công cụ khác được hiển thị khi nó thẳng hàng với các trục của mô hình; mặt phẳng nghiêng hoặc thêm mặt phẳng sẽ quay lại thành một thể tích cắt (tối đa 6 mặt phẳng). Một vấn đề giữ hộp đầu tiên của một thể tích gồm nhiều hộp.

## Điều cần biết

- Tệp là BCF 2.1 và giữ góc nhìn trong tọa độ riêng của mô hình, nên các công cụ khác đặt camera ở cùng vị trí.
- Các vấn đề vẫn nằm trong thẻ này cho đến khi bạn lưu chúng. Mở một mô hình khác vẫn giữ danh sách; hãy mở mô hình mà các vấn đề thuộc về trước khi hiển thị chúng.
- Camera song song (trực giao) từ công cụ khác được hiển thị bằng camera phối cảnh của trình xem này, lùi ra xa để cùng một phần của mô hình lấp đầy khung nhìn.

## Lỗi thường gặp

- **Hiển thị đưa camera đến một nơi lạ.** Vấn đề được tạo trên một mô hình khác hoặc với tọa độ khác. Hãy mở đúng mô hình trước.
- **Tệp không mở được.** Đó không phải là tệp zip BCF, hoặc tệp bị hỏng; dòng trạng thái cho biết lý do.

## Tiếp theo

- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
- [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)
