---
title: Đổi mục đã đặt và cập nhật mục từ thư viện
summary: Thay một mục thư viện đã đặt bằng mục khác mà vẫn giữ vị trí và số hiệu mục, và kiểm tra Thư viện xem có phiên bản mới hơn cho mọi thứ trong mô hình hay không.
keywords: đổi, thay thế, thay bằng, cập nhật, phiên bản mới hơn, kiểm tra cập nhật, thư viện, đã rút, thay đổi giấy phép, số hiệu mục
from: 8bdfe01d
---

## Bạn sẽ làm gì

Đổi ý về một mục mà không phải đặt lại, và giữ các mục thư viện trong mô hình luôn ở bản mới.

## Đổi một mục

1. Nhấp một mục thư viện đã đặt trong mô hình.
2. Trong {{ui:Thuộc tính}}, nhấp {{ui:Đổi mục…}} trong hộp **Mục thư viện**. Thẻ {{ui:Thư viện}} sẽ mở ra.
3. Tìm mục mới và nhấp thẻ của nó.
4. Nhấp {{ui:Đổi … thành mục này}}.

Phần tử giữ nguyên vị trí, góc xoay, tầng, số hiệu mục, số lượng và ghi chú. Loại, hình dạng và dữ liệu mục của nó đổi sang mục mới. Các mục được đặt theo cùng một cách sẽ dùng chung một loại, như khi bạn đặt chúng.

Mục có biến thể (xem [Đặt và đổi mục thư viện có biến thể](topic:library-variants)) liệt kê các biến thể khác của nó ở đầu thẻ {{ui:Thư viện}} khi bạn đổi nó: mỗi biến thể một lần nhấp.

Khi mục mới thuộc một loại khác, ví dụ bồn rửa thay cho bàn, lớp IFC của phần tử sẽ đổi theo (ở đây từ phần tử nội thất sang thiết bị vệ sinh), để các phần mềm khác lập bảng thống kê đúng. Nó vẫn là cùng một phần tử, với cùng GlobalId, nên các liên kết đến nó vẫn hoạt động. {{key:Mod+Z}} đưa lại lớp cũ cùng mục cũ.

## Kiểm tra cập nhật

1. Nhấp {{ui:Cập nhật}} trên thanh công cụ (hoặc {{ui:Kiểm tra cập nhật}} trong hộp của một mục thư viện).
2. Đọc danh sách: mỗi mục thư viện trong mô hình, với phiên bản trong mô hình, phiên bản mới nhất và trạng thái: **Đã cập nhật**, **Phiên bản mới hơn**, **Đã rút** hoặc **Không tìm thấy**. Danh sách cũng ghi những gì đã thay đổi (hình học, dữ liệu, giấy phép hoặc bản sửa lỗi).
3. Nhấp {{ui:Cập nhật}} ở một hàng, hoặc {{ui:Cập nhật tất cả}}.

## Bạn sẽ thấy gì

- "Đã cập nhật *n* vị trí đặt. Vị trí, số hiệu mục, số lượng và ghi chú được giữ nguyên."
- Các dòng "Đã cập nhật: *mục*" trong danh sách thay đổi. {{key:Mod+Z}} hoàn tác từng dòng.

## Cần biết

- Chỉ các mục lấy từ Thư viện mới kiểm tra được. Mục từ tệp không mang mã thư viện.
- Khi giấy phép thay đổi, bản đã đặt giữ giấy phép mà nó có lúc được thêm vào cho đến khi bạn cập nhật nó.
- Mục **Đã rút** không được đề xuất để đặt mới. Mục bị rút vì lý do bản quyền thì không tải về được; hãy thay nó bằng {{ui:Đổi mục…}}.
- Biến thể đã đặt vẫn là biến thể đó khi phiên bản mới của mục vẫn có biến thể ấy; nếu không, nó lấy biến thể mặc định của mục.
- Việc kiểm tra chỉ gửi mã mục và phiên bản, không bao giờ gửi mô hình của bạn.
