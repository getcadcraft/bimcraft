---
title: Viết đặc tả từ mô hình
summary: Một mục đặc tả cho mỗi loại tường, cửa đi, cửa sổ, sàn và lớp hoàn thiện đang dùng, với các thông số đọc từ mô hình và phần văn bản của bạn, xuất thành tài liệu PDF hoặc Word.
keywords: đặc tả, spec, bản vẽ thi công, giai đoạn 5, hồ sơ thiết kế thi công, mục, loại tường, loại cửa đi, loại cửa sổ, hoàn thiện, phân loại, uniclass, omniclass, masterformat, tài liệu, pdf, word, docx, bảng thống kê
from: a6acc6d4
---

## Bạn sẽ làm gì

Tạo bản đặc tả bám theo mô hình: một mục cho mỗi loại thực sự có trong công trình, mỗi mục có cấu tạo và khối lượng đọc từ mô hình, cùng phần văn bản bạn viết cho mục đó.

## Các bước

1. Bật {{ui:Vẽ}}, mở **Bảng thống kê** trong bảng bên trái và nhấp **Đặc tả**.
2. Hộp thoại liệt kê một mục cho mỗi loại tường, loại cửa đi, loại cửa sổ, sàn và lớp hoàn thiện phòng đang dùng. Dưới mỗi tiêu đề là các **thông số** đọc từ mô hình: chiều dày, từng lớp, mức độ phát triển, kích thước, số lượng và khối lượng. Mục có các phần tử mang mã phân loại sẽ hiển thị mã đó trong tiêu đề.
3. Viết văn bản đặc tả trong ô bên dưới một mục. **Chọn phần tử** hiển thị các phần tử mà mục đó nói đến.
4. Nhấp **Lưu**. Đây là một bước trong {{ui:Hoàn tác}}, và văn bản được giữ trong tệp công trình.
5. Mở **Tài liệu từ mô hình**, chọn mẫu **Đặc tả** và nhấp **Xem trước**, rồi lưu thành PDF, Word hoặc Markdown. Xem [Tài liệu từ mô hình](topic:documents-from-the-model).

## Bảng thống kê bản vẽ thi công dưới dạng tài liệu

Mẫu **Bảng thống kê bản vẽ thi công** in trực tiếp các bảng thống kê cửa đi, cửa sổ và hoàn thiện từ mô hình, theo bố cục văn phòng của bạn. Trong mẫu riêng của bạn, gõ `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, hoặc tên một thiết lập đã lưu, ví dụ `{{schedule Door schedule by floor}}`. `{{specification}}` in bản đặc tả.

## Cần biết

- Các thông số là của mô hình. Chúng thay đổi khi mô hình thay đổi; văn bản của bạn thì không.
- BimCraft không viết điều khoản của tiêu chuẩn nào hay nội dung của nhà sản xuất nào. Mục chưa có văn bản sẽ in "Chưa viết văn bản đặc tả."
- Văn bản viết cho một loại không còn trong mô hình được giữ lại và liệt kê dưới "Văn bản cho các loại không còn trong mô hình".
- Để đổi một loại chung thành cấu tạo cụ thể, xem [Công cụ tường](topic:wall-tools) (Đổi loại).
