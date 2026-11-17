---
title: Đặt và đổi biến thể của mục thư viện
summary: Một số mục thư viện có nhiều kích thước hoặc tùy chọn. Chọn biến thể trước khi đặt, xem một mục đã đặt là biến thể nào, đổi sang biến thể khác chỉ bằng một lần nhấp, và giữ lại khi mục được cập nhật.
keywords: biến thể, các biến thể, kích thước, tùy chọn, cấu hình, thư viện, librarycraft, đặt, đổi, trình cấu hình, họ, kiểu, cập nhật, cổng
from: c05f0af3
---

## Bạn sẽ làm gì

Đặt một mục thư viện với kích thước hoặc tùy chọn bạn cần, và đổi ý sau này mà không phải đặt lại. Một mục có biến thể là một mục trong thư viện (một tên, một giấy phép, một phiên bản) kèm bảng các biến thể mà nó có: ví dụ một tấm gắn ở kích thước Nhỏ, Vừa và Lớn, hoặc cùng tấm đó nhưng không có lỗ.

## Chọn biến thể và đặt

1. Mở thẻ {{ui:Thư viện}} và nhấp vào thẻ của mục.
2. Dưới tên, lựa chọn {{ui:Biến thể}} liệt kê mọi biến thể kèm kích thước của nó. Biến thể mặc định của mục được chọn đầu tiên.
3. Chọn một biến thể. Mặt bằng, kích thước và hàng thân 3D sẽ theo lựa chọn của bạn.
4. Nhấp {{ui:Đặt trên mặt bằng}} (hoặc {{ui:Đặt trong mô hình}} trong góc nhìn 3D) và đặt như mọi mục khác: xem [Đặt thiết bị và đồ nội thất từ thư viện](topic:place-from-library).

Cấu kiện đã đặt được đặt tên theo mục và biến thể, ví dụ *Tấm gắn — Lớn*, để bảng {{ui:Thiết bị}} và cây phân biệt chúng. Mỗi biến thể là một kiểu IFC riêng: đặt cùng một biến thể hai lần thì dùng chung một kiểu, một biến thể khác sẽ có kiểu riêng.

## Xem một mục đã đặt là biến thể nào

Chọn cấu kiện. Trong {{ui:Thuộc tính}}, hộp **Mục thư viện** có một dòng **Biến thể**. IFC lưu thông tin này trong `CadCraft_LibraryItem`: `Variant` (mã của biến thể), `VariantName` và `VariantValues` (các giá trị tùy chọn, dạng văn bản), để các chương trình khác có thể đọc.

## Đổi sang biến thể khác

1. Chọn mục đã đặt và nhấp {{ui:Đổi mục…}} trong hộp **Mục thư viện**. Thẻ {{ui:Thư viện}} mở ra.
2. Ở trên cùng, **Các biến thể khác của** *mục* liệt kê mọi biến thể kèm kích thước. Biến thể đang đặt được đánh dấu và không thể chọn.
3. Nhấp {{ui:Đổi sang …}} trên biến thể bạn muốn.

Cấu kiện giữ vị trí, góc xoay, tầng, số mục, số lượng và ghi chú của nó; kiểu, hình dạng và dữ liệu của nó thay đổi theo biến thể kia. {{key:Mod+Z}} sẽ đưa cái trước trở lại. Bạn vẫn có thể chọn bất kỳ mục nào khác trong danh sách bên dưới thay vì đổi biến thể, như trước đây: xem [Đổi mục đã đặt và cập nhật mục từ thư viện](topic:swap-and-update-library-items).

## Sao chép, dán và cập nhật

- Bản sao của một biến thể đã đặt là cùng biến thể đó: trong mô hình này, và trong một mô hình khác được mở trong cùng thẻ trình duyệt, qua Sao chép và Dán.
- **Cập nhật** giữ nguyên biến thể: nếu phiên bản mới của mục vẫn có biến thể đó, vị trí đặt trở thành biến thể đó của phiên bản mới. Nếu phiên bản mới không còn biến thể đó, vị trí đặt sẽ dùng biến thể mặc định của mục.

## Điều cần biết

- Chỉ một số mục thư viện có biến thể. Thẻ không cho biết điều đó; bạn sẽ thấy lựa chọn {{ui:Biến thể}} khi mở một mục.
- Một mục có thể liệt kê **cổng** (điểm kết nối cho đường ống và ống dẫn) theo từng biến thể. Thẻ Thư viện hiển thị một biến thể có bao nhiêu cổng. Hiện tại các cổng này **chưa** được ghi vào IFC khi bạn đặt mục từ thẻ Thư viện.
- Một biến thể không có thân 3D được đặt bằng một khối thay thế, như mọi ký hiệu 2D.
- Kích thước trong lựa chọn tính bằng mm, như thư viện ghi.
