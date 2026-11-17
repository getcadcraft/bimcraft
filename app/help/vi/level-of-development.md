---
title: Mức phát triển (LOD) và kiểm tra theo mốc
summary: Gán mức phát triển cho cấu kiện, xem mức đó lấy từ đâu, kiểm tra mô hình theo LOD mà một mốc yêu cầu, và sửa các thẻ còn thiếu cùng phòng chưa đặt tên. Mọi kiểm tra chỉ đưa ra khuyến nghị; không có gì bị chặn.
keywords: lod, mức phát triển, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mốc, bảng mốc, kiểm tra mô hình, thẻ thiếu, phòng chưa đặt tên, chung giai đoạn đầu, lớp ifc, phân loại
from: 2091c79b
---

## Bạn sẽ làm gì

Khai báo mức phát triển của từng cấu kiện, sau đó kiểm tra toàn bộ mô hình theo những gì một mốc dự án yêu cầu.

## Các bước

1. Chọn một cấu kiện (hoặc nhiều cấu kiện) và mở {{ui:Thuộc tính}}. Tìm {{ui:Mức phát triển}}.
2. Chọn một mức từ danh sách. Mỗi mức được đặt tên theo ý nghĩa của nó, và mỗi mức bao gồm các mức bên dưới. Một bước hoàn tác bao trọn toàn bộ lần chọn.
3. Xem mức đến từ đâu: cấu kiện này, kiểu của nó, hoặc một dấu đã được kiểm tra thực địa.
4. Để kiểm tra mô hình, mở {{ui:Kiểm tra mô hình}} ở bên trái, rồi chọn {{ui:Mốc LOD}}. Chọn mốc và bảng (bảng khởi đầu, hoặc tệp CSV hay JSON của riêng bạn bằng {{ui:Tải}}).
5. Nhấp {{ui:Kiểm tra mô hình}}. Tổng số và một dòng cho mỗi hàng của bảng cho biết cấu kiện nào đã đạt mức và cấu kiện nào chưa; các phát hiện cũng xuất hiện trong danh sách Vấn đề.
6. Trong mục {{ui:Thẻ bị thiếu và phòng chưa đặt tên}}, nhấp {{ui:Tìm chúng}}, chỉnh sửa các đề xuất nếu muốn, rồi nhấp {{ui:Áp dụng}}.

## Bạn sẽ thấy gì

- Mức bạn đã chọn trên cấu kiện, cùng với lớp IFC và mã phân loại bên cạnh.
- Tổng số và các hàng của mốc. Bảng không bao giờ thay đổi ý nghĩa của một mức: thang đo được cố định, bảng chỉ cho biết mốc nào cần mức nào.
- "Giữ tính chung ở giai đoạn đầu": khuyến nghị giữ cấu kiện ở dạng chung ở một mốc sớm. Đây chỉ là khuyến nghị.

## Cần biết

- Không có gì ở đây chặn bạn. Một mô hình dưới mức mà một mốc yêu cầu sẽ được liệt kê, không bị từ chối.
- Ba phần của một mức (hình học, thông tin, tài liệu) có thể được đặt riêng từng phần; một dấu cho biết đã đạt, dưới mức, hoặc chưa khai báo.
