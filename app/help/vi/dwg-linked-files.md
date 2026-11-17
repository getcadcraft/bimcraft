---
title: Tìm bản vẽ liên kết và ảnh
summary: Hiển thị các bản vẽ liên kết (xref) và ảnh trong khung tên của một bản vẽ, bằng cách mở thư mục của nó hoặc thêm tệp thủ công.
keywords: xref, tham chiếu ngoài, bản vẽ liên kết, gắn, chồng lớp, ảnh, hình ảnh, logo, khung tên, xref bị thiếu, etransmit, trình quản lý tham chiếu
from: 5593d4b1
---

## Bạn sẽ làm gì

Làm cho một bản vẽ đầy đủ: hiển thị các bản vẽ mà nó liên kết tới (tham chiếu ngoài, hay xref) và các ảnh nó dùng, như logo trong khung tên.

## Cách dễ nhất: mở thư mục

1. Nhấp {{ui:Mở thư mục}} và chọn thư mục chứa bản vẽ và các liên kết của nó, ví dụ toàn bộ thư mục `Cad` của một dự án.
2. Trong báo cáo thư mục, cuộn đến **Bản vẽ CAD**.
3. Nhấp bản vẽ.
4. Nhìn bảng {{ui:Thuộc tính}} bên phải, dưới **Bản vẽ liên kết** và **Hình ảnh**.

BimCraft tìm mỗi bản vẽ liên kết theo tên của nó ("*name*.dwg"), trong cùng thư mục với bản vẽ trước, rồi đến bất kỳ đâu trong thư mục bạn đã mở. Ảnh được tìm theo cách tương tự, và cũng theo tên gần giống: một bản xuất eTransmit hoặc Revit thường thêm tên dự án vào trước, nên `logo.png` được tìm thấy là `Tower-logo-5425051.png`.

## Cách khác: thêm tệp thủ công

1. Mở bản vẽ riêng.
2. Ở bên phải, dưới **Bản vẽ liên kết**, nhấp {{ui:Thêm bản vẽ liên kết…}}. Dưới **Hình ảnh**, nút là {{ui:Thêm ảnh…}}; cả hai đều mở cùng một hộp chọn.
3. Chọn các tệp `.dwg` liên kết và các tệp ảnh. Bạn có thể chọn nhiều tệp cùng lúc.
4. Chờ trong khi BimCraft mở lại bản vẽ với các tệp đó.

## Bạn sẽ thấy gì

Mỗi bản vẽ liên kết và ảnh được liệt kê kèm một nhãn:

| Nhãn | Nghĩa là |
|---|---|
| **Đã hiển thị** | Đã tìm thấy và được vẽ. Đường dẫn bên dưới cho biết nó từ đâu, hoặc "do bạn thêm". |
| **Đã hiển thị, tên gần giống** | Một ảnh được tìm thấy theo tên gần giống. Kiểm tra xem đó có đúng ảnh không. |
| **Không tìm thấy** | Không có trong thư mục hoặc các tệp bạn đã thêm. Ảnh bị thiếu hiển thị dưới dạng khung trống. |
| **Không thể hiển thị TIFF trong trình duyệt** | Ảnh là tệp TIFF, mà trình duyệt không vẽ được. Lưu thành PNG với cùng tên và thêm lại. |
| **Không đọc được** | Tệp được tìm thấy nhưng không thể mở như một ảnh. |

Bảng {{ui:Bản vẽ}} bên trái hiển thị "*n* trong *m* đã tải" cho các bản vẽ liên kết. Các lớp của bản vẽ liên kết xuất hiện trong {{ui:Lớp}} dưới dạng "*tên liên kết*|*lớp*".

## Lỗi thường gặp

- **Chỉ mở bản vẽ.** "Bản vẽ này chỉ hiển thị nội dung riêng của nó cho đến khi các bản vẽ liên kết được thêm vào. Mở toàn bộ thư mục dự án sẽ tự động tìm thấy chúng."
- **Mở một thư mục quá nhỏ.** Nếu các liên kết nằm trong thư mục anh em, hãy mở thư mục cha.
- **Liên kết đã đổi tên.** BimCraft khớp các bản vẽ liên kết theo tên. Một liên kết đổi tên trên đĩa sẽ không được tìm thấy; hãy thêm nó thủ công.
- **Liên kết của liên kết.** BimCraft tải các bản vẽ mà bản vẽ đang mở liên kết tới. Các bản vẽ được liên kết bên trong chúng không được tìm, nên thường không hiển thị trong bản dựng này.
