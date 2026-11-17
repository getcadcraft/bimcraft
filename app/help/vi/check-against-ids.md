---
title: Kiểm tra mô hình với IDS của khách hàng
summary: Tải tệp .ids bạn được cung cấp và xem mọi cấu kiện không đáp ứng trong Mục cần xử lý, trước khi giao tệp IFC.
keywords: ids, information delivery specification, buildingsmart, yêu cầu, giao nộp, kiểm tra, xác thực, qa, eir, bep, thuộc tính, phân loại, vật liệu, mua sắm
from: 7b960222
---

## Bạn sẽ làm gì

IDS (Information Delivery Specification, một tiêu chuẩn của buildingSMART) là danh sách những gì một IFC phải chứa: những lớp IFC nào, những thuộc tính nào với giá trị nào, phân loại, vật liệu, và các thứ nằm ở đâu. Khách hàng và các gói mua sắm công gửi kèm một IDS cùng công trình. BimCraft kiểm tra mô hình IFC đang mở theo IDS đó và liệt kê mọi cấu kiện không đạt yêu cầu.

## Các bước

1. Mở một mô hình IFC.
2. Mở {{ui:Check against an IDS}} trong bảng bên trái, dưới {{ui:Model checks}}, hoặc chọn {{ui:Check against IDS…}} từ menu theo kiểu menu của bạn.
3. Nhấn {{ui:Load an .ids file…}} và chọn tệp. Không có gì được tải lên.
4. Đọc kết quả: mỗi đặc tả kèm {{ui:Pass}} hoặc {{ui:Fail}} và số cấu kiện nó áp dụng.
5. Mở Mục cần xử lý ({{key:Ctrl+Shift+M}}) và nhấn một mục không đạt để chọn cấu kiện và phóng tới nó.

## Bạn sẽ thấy gì

- Một cảnh báo cho mỗi cấu kiện và mỗi yêu cầu mà nó không đáp ứng, kèm tên đặc tả, những gì IDS yêu cầu và những gì cấu kiện có.
- Một đặc tả bắt buộc mà không có gì trong mô hình khớp với nó sẽ là một cảnh báo riêng.
- Báo cáo kiểm tra (trong Mục cần xử lý) bắt đầu bằng IDS: tiêu đề, phiên bản, tác giả, và số lượng áp dụng, đạt và không đạt của từng đặc tả.

## Cần biết

- IFC chỉ giữ một tham chiếu tới IDS (tên, tiêu đề, phiên bản và một mã băm), không giữ chính IDS: IDS của khách hàng có thể là bí mật, và tệp IFC được gửi cho người khác. IDS nằm trong trình duyệt này bên cạnh mô hình, nên khi bạn mở lại tệp IFC đã lưu ở đây thì nó được kiểm tra lại. Tải hoặc quên IDS là một bước bạn có thể hoàn tác.
- Mở trên máy tính hoặc trình duyệt khác, Mục cần xử lý sẽ hiển thị ghi chú rằng không tìm thấy IDS: hãy tải lại để kiểm tra lại.
- Để gửi IDS cùng tệp IFC, bật {{ui:Keep the IDS inside the IFC}} trong Cài đặt, ở thẻ BimCraft, trước khi tải IDS.
- Mỗi lần sửa, hoàn tác và làm lại đều được kiểm tra lại sau một lát.
- Giá trị được so sánh theo cách của IDS: văn bản khớp chính xác (có phân biệt chữ hoa, chữ thường); số theo đơn vị SI với một sai số nhỏ (chiều dài tính bằng mét, nên mô hình tính bằng milimét được chuyển đổi trước).
- Một đặc tả viết cho phiên bản IFC khác (chẳng hạn IFC2X3 khi mô hình là IFC4) vẫn được kiểm tra; kết quả sẽ ghi rõ điều đó.
- Nếu tệp IDS có lỗi mà kiểm tra IDS sẽ báo, hộp thoại liệt kê chúng; các đặc tả chứa lỗi đó sẽ không đạt.
- Bạn có thể chấp nhận một lỗi không đạt kèm lý do, như với mọi vấn đề. Nó vẫn được chấp nhận chừng nào giá trị của cấu kiện không đổi.

- Các mẫu trong IDS được đọc như toàn bộ giá trị. Ký tự `^` ở đầu và `$` ở cuối cũng được hiểu là "toàn bộ giá trị", như cách hầu hết tệp IDS hiểu.

## Tiếp theo

- [Kiểm tra mô hình để tìm các vấn đề thường gặp](topic:model-checks)
- [Đổi tường hoặc cửa](topic:change-a-wall-or-door)
