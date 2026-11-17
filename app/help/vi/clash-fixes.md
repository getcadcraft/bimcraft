---
title: Xử lý va chạm bằng cách sửa của từng bộ môn
summary: Từ kết quả va chạm, Đề xuất cách sửa liệt kê cho mọi va chạm những việc từng bộ môn có thể làm — ống gió vòng qua dầm, ống nước được dời sang một bên, cột được di chuyển, lỗ mở trong dầm — mỗi cách được thử trên bản sao của mô hình kèm các đánh đổi, để bạn chấp nhận hoặc từ chối. Các cách sửa đã chấp nhận được đưa vào như một bước hoàn tác.
keywords: va chạm, sửa va chạm, giải quyết va chạm, xử lý va chạm, phối hợp, đề xuất cách sửa, định tuyến lại, vòng tránh, dời, ống gió, ống nước, máng, dầm, cột, lỗ mở, ống lồng, đánh đổi, bộ môn, kết cấu, cơ khí, cấp thoát nước, điện, kiến trúc, trợ lý
from: f7bafdd9
---

## Bạn sẽ làm gì

Biến danh sách va chạm thành các quyết định. Mỗi bộ môn (kết cấu, cơ khí, cấp thoát nước, điện, kiến trúc) đề xuất cách sửa chỉ cho cấu kiện của riêng mình, mọi đề xuất được kiểm tra trên bản sao của mô hình, và bạn chọn.

## Các bước

1. Chạy kiểm tra va chạm trước. Xem [Kiểm tra va chạm](topic:clash-check) và [Kiểm tra ống và ống gió với kết cấu](topic:mep-against-structure).
2. Dưới kết quả, nhấn {{ui:Propose fixes}}. Bảng **Các cách sửa đề xuất** mở cạnh mô hình.
3. Với mỗi va chạm, bạn thấy đề xuất của từng bộ môn, cái tốt nhất trước. Mỗi dòng nói nó làm gì và các đánh đổi: nó có giải quyết va chạm không, tạo ra bao nhiêu va chạm mới, vi phạm quy tắc nào, thêm bao nhiêu đoạn ống hoặc dời đi bao xa, bao nhiêu phụ kiện, và một điểm chi phí.
4. Nhấn {{ui:Show}} để xem các cấu kiện trong 3D. Nhấn {{ui:Accept}} trên cách sửa bạn muốn (một cách cho mỗi va chạm), hoặc {{ui:Reject}}.
5. Dòng ở cuối cho biết mọi cách sửa đã chấp nhận cùng làm gì: bao nhiêu va chạm được giải quyết, bao nhiêu còn lại, và có va chạm mới nào không.
6. Nhấn {{ui:Apply accepted fixes (one undo step)}}. Kiểm tra va chạm chạy lại. {{ui:Undo}} lấy lại tất cả cùng lúc.

## Mỗi bộ môn được làm gì

- **Cơ khí** (ống gió, ống sưởi và làm mát): vòng qua phía trên hoặc phía dưới ở nhánh bị va, nâng hoặc hạ cả đoạn, dời sang một bên, làm ống gió hình chữ nhật dẹt hơn với cùng diện tích.
- **Cấp thoát nước** (nước, thoát nước, khí đốt, phòng cháy): các thao tác tương tự, trừ việc ống thoát nước theo trọng lực không bao giờ được cho vòng tránh; nó chỉ có thể dời nguyên đoạn, giữ độ dốc.
- **Điện** (máng và ống luồn dây): các thao tác tương tự; máng phải giữ khoảng trống 150 mm phía trên để đi dây cáp.
- **Kết cấu**: di chuyển cột (tối đa 300 mm), hoặc một lỗ mở trong bụng dầm hay sàn cho đoạn ống đi qua. Mọi cách sửa kết cấu đều ghi rằng kỹ sư kết cấu phải ký duyệt.
- **Kiến trúc**: một ống lồng trong tường cho đoạn ống đi qua, hoặc di chuyển một bức tường được biết là không chịu tải.

## Bạn sẽ thấy gì

- Các cách sửa vi phạm quy tắc được đánh dấu: gần hơn khoảng hở 25 mm tới vật khác, dưới đường chiều cao thông thủy 2,100 mm, lỗ mở trong bụng dầm lớn hơn 40 % chiều cao dầm hoặc quá gần hai đầu, hoặc dầm sẽ thay đổi nhịp.
- Các cách sửa BimCraft có thể thực hiện được được áp dụng vào mô hình: các đoạn ống bạn vẽ bằng công cụ Ống và Ống gió, và các cột bạn vẽ. Các cách khác ghi **Chỉ là gợi ý**: khi chấp nhận, chúng chỉ thêm một vấn đề trong thẻ Vấn đề.

## Cần biết

- Các cách sửa đến từ quy tắc có sẵn trong ứng dụng; không dùng AI cho chúng.
- Nếu bạn kết nối một trợ lý (xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants)), nó có thể đọc các va chạm và thêm đề xuất riêng cho một bộ môn vào bảng đang mở. Chúng được kiểm tra theo cùng cách, được đánh dấu bằng tên trợ lý, và không có gì thay đổi cho đến khi bạn chấp nhận và áp dụng.
- Bản sao được kiểm tra bằng hộp bao quanh mỗi cấu kiện và mỗi nhánh của một đoạn ống, nên một đoạn ống nghiêng có thể cho thấy một va chạm mà kiểm tra va chạm sẽ không thấy. Hãy chạy lại kiểm tra va chạm sau khi áp dụng: đó là kết quả cuối cùng.
- Các giới hạn (một đoạn ống được dời bao xa, vòng tránh được leo cao bao nhiêu, khoảng hở) là mặc định được ghi trong bảng.

## Tiếp theo

- [Vấn đề và tệp BCF](topic:issues-bcf)
- [Vẽ đoạn ống và ống gió](topic:pipes-and-ducts)
