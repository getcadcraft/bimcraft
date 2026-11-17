---
title: Báo cáo thư mục: vai trò, trạng thái và liên kết
summary: Mọi nhãn trong báo cáo thư mục, ý nghĩa của nó, và cách gợi ý Bắt đầu tại đây được chọn.
keywords: báo cáo thư mục, vai trò, trạng thái, hoàn chỉnh, không đầy đủ, không đọc được, liên kết, nền, mẫu khởi đầu, trung tâm, family, chỉ bản sao lưu, bắt đầu tại đây, trạng thái liên kết
from: b35bdd10
---

## Trạng thái bản sao

Mọi bản sao của một mô hình, tệp chính cũng như các bản sao lưu đánh số, đều được kiểm tra tiêu đề.

| Nhãn | Ý nghĩa |
|---|---|
| **Hoàn chỉnh** | Tiêu đề và chỉ mục của tệp nằm gọn trong tệp |
| **Không đầy đủ** | Tệp ngắn hơn chỉ mục của chính nó: tệp đã bị cắt khi đang được sao chép, tải lên hoặc đồng bộ, hoặc là một tệp đám mây vẫn ở trạng thái "chỉ trực tuyến" |
| **Không đọc được** | Tệp không phải là tệp compound hợp lệ, hoặc không thể đọc |

Trong cột **Trạng thái**, một mô hình hiển thị **Hoàn chỉnh**, một dòng màu hổ phách "*n* không đầy đủ" khi có ít nhất một bản sao hỏng nhưng vẫn có bản sao tốt, hoặc **Không đầy đủ** màu đỏ khi không còn bản sao nào tốt.

## Bản sao lưu

Các tệp tên `Name.0001.rvt`, `Name.0002.rvt` và tiếp theo là các bản sao lưu đánh số của `Name.rvt`. Chúng được nhóm dưới mô hình của chúng, mới nhất trước, trong **Tất cả … bản sao**. Thẻ được đọc từ tệp chính khi tệp đó hoàn chỉnh, nếu không thì từ bản sao lưu hoàn chỉnh mới nhất ("hoàn chỉnh mới nhất").

## Vai trò

Hiển thị in nghiêng dưới tên một mô hình.

| Vai trò | Ý nghĩa |
|---|---|
| Liên kết bởi *mô hình khác*: nền | Một mô hình khác trong thư mục liên kết đến mô hình này, nên rất có thể nó là nền của người khác, chẳng hạn mô hình của một tư vấn |
| Tệp mẫu khởi đầu hoặc chưa đặt tên | Một tên như Blank, Template, Default, Untitled hoặc Project1: một điểm khởi đầu, hoặc một tệp chưa bao giờ được đặt tên đúng |
| Mô hình trung tâm | Một mô hình trung tâm dùng chung công việc. Công việc diễn ra trong một bản sao cục bộ, không phải ở đây |
| Family (một chi tiết) | Một tệp `.rfa` hoặc `.rft`: một cấu kiện, không phải dự án |
| Chỉ bản sao lưu | Tệp chính đã mất và chỉ còn các bản sao lưu đánh số |

## Cách chọn Bắt đầu tại đây

BimCraft áp dụng lý luận mà một người dùng có kinh nghiệm sẽ áp dụng:

1. Các ứng viên là các tệp dự án đọc được (`.rvt`, `.rte`) không được liên kết bởi mô hình khác và không phải mẫu khởi đầu.
2. Mô hình trung tâm và mô hình chỉ có bản sao lưu chỉ được tính khi không có lựa chọn nào tốt hơn.
3. Trong số các ứng viên, tệp được lưu gần đây nhất sẽ được chọn.

Hộp này liệt kê các lý do và cảnh báo khi một tệp trông như lựa chọn rõ ràng nhưng bị hỏng, khi các mô hình khác là nền, và khi lựa chọn là một mô hình trung tâm. Đây chỉ là phỏng đoán tốt nhất; hãy kiểm tra với người làm việc cuối cùng trên dự án.

## Trạng thái liên kết

| Nhãn | Ý nghĩa |
|---|---|
| **Trong thư mục này** | Tìm thấy tại đường dẫn tương đối đã lưu, hoặc ở cuối đường dẫn đầy đủ đã lưu bên trong thư mục |
| **Tìm thấy tên trùng** | Không nằm tại đường dẫn của nó, nhưng có một tệp cùng tên trong thư mục. Hãy kiểm tra xem đó có đúng là tệp cần tìm không |
| **Tệp thư viện** | Bảng mã ghi chú hoặc mã lắp ráp. Chúng đi kèm chương trình trên mỗi máy tính |
| **Không có trong thư mục này** | Không tìm thấy ở bất kỳ đâu trong thư mục |

Cột **Liên kết đã tìm thấy** trong **Mô hình** cho biết có bao nhiêu liên kết của một mô hình được tìm thấy, trong số các liên kết dự kiến có trong thư mục (các tệp thư viện không được tính).

## Bỏ qua

| Dòng | Ý nghĩa |
|---|---|
| Thư mục dọn dẹp của Revit (không đọc) | Các thư mục `*_backup`, `*_log` và `Revit_temp`, cùng các thư mục ẩn và `__MACOSX` |
| Tệp khóa, nhật ký và sao lưu còn sót | Các tệp `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` và `.slog` |
| Tệp khác | Mọi thứ còn lại (40 tệp đầu tiên được nêu tên) |
