---
title: Gắn thẻ phần tử và lập bảng thống kê theo thẻ
summary: Định nghĩa thẻ riêng của bạn (tên, kiểu, các giá trị cho phép, những lớp nào), gắn thẻ nhiều phần tử cùng lúc, và lập bảng thống kê có cột, bộ lọc và nhóm đọc từ thẻ. Thẻ được giữ trong IFC.
keywords: thẻ, gắn thẻ, thẻ tùy chỉnh, thuộc tính, tham số, tham số dùng chung, bộ thuộc tính, pset, bảng thống kê, bộ lọc, nhóm theo, hoàn thiện, xếp hạng chống cháy, chỉnh sửa hàng loạt, csv
from: 9cc7c90d
---

## Bạn sẽ làm gì

Thẻ là một thuộc tính của riêng bạn, như *Hoàn thiện* hay *Xếp hạng chống cháy*. Bạn định nghĩa nó một lần cho dự án, đặt giá trị cho nhiều phần tử cùng lúc, và mọi bảng thống kê trong BimCraft đều đọc được nó: bảng thẻ ở đây, {{ui:Khối lượng}}, Tìm, Tô màu theo thuộc tính và [Tài liệu từ mô hình](topic:documents-from-the-model).

## Các bước

1. Mở một mô hình IFC, hoặc bắt đầu một công trình mới.
2. Trong bảng bên trái, dưới {{ui:Khối lượng}}, mở {{ui:Thẻ gắn}}.
3. Nhấp {{ui:Thêm nhãn}}. Đặt tên, chọn kiểu, và nếu muốn, liệt kê các giá trị cho phép (cách nhau bằng dấu phẩy) và các lớp mà nó dành cho (`IfcDoor`, `IfcWall` …). Nhấp {{ui:Thêm thẻ gắn}}.
4. Chọn các phần tử trong mô hình (Tìm giúp bạn: chọn mọi cửa đi cùng lúc).
5. Dưới {{ui:Gắn thẻ cho vùng chọn}}, chọn hoặc gõ một giá trị cho mỗi thẻ bạn muốn đặt, giữ nguyên các thẻ khác, rồi nhấp {{ui:Áp dụng cho … phần tử đã chọn}}.
6. Dưới {{ui:Bảng thống kê thẻ gắn}}, đánh dấu các cột, thêm bộ lọc, chọn {{ui:Nhóm theo}}, rồi nhấp {{ui:Tải CSV}}.

## Bạn sẽ thấy gì

- Một bước trong danh sách thay đổi cho mỗi định nghĩa đã lưu và mỗi lần gắn thẻ; {{ui:Hoàn tác}} sẽ đưa lại.
- Phần tử thuộc lớp mà thẻ không dành cho sẽ bị loại khỏi thẻ đó, và dòng trạng thái cho biết có bao nhiêu phần tử như vậy.
- Bảng thống kê thẻ liệt kê một hàng cho mỗi phần tử, nhóm theo trường bạn chọn; nhấp ô đầu tiên của một hàng để chọn phần tử đó.
- {{ui:Khối lượng}} liệt kê các thẻ dưới `CadCraft_Tags`, nên bạn có thể cộng diện tích hoặc số lượng theo thẻ ở đó.

## Kiểu

Các kiểu giống với danh sách tham số họ: Độ dài (milimét), Góc (độ), Số, Số nguyên, Có / Không, Bút (1–16), Văn bản, Vật liệu và Tô. Giá trị không khớp với kiểu của nó, hoặc không nằm trong các giá trị cho phép, sẽ bị từ chối kèm thông báo, và không có gì thay đổi.

## Cần biết

- Mọi thứ đều là IFC thuần, nên các phần mềm khác đọc được giá trị: các định nghĩa nằm trong bộ thuộc tính `CadCraft_TagDefs` trên dự án, các giá trị nằm trong bộ thuộc tính `CadCraft_Tags` trên mỗi phần tử (một thuộc tính cho mỗi thẻ). Độ dài được ghi theo đơn vị độ dài của tệp.
- `IfcWall` trong các lớp của một thẻ cũng bao gồm tường standard-case và tường theo phần tử (elemented).
- Đổi tên một thẻ sẽ đổi tên các giá trị của nó trên mọi phần tử trong cùng một bước. Xóa một thẻ chỉ xóa định nghĩa của nó: các giá trị đã đặt vẫn nằm trên phần tử như thuộc tính thường. Hãy xóa chúng trước (chọn {{ui:Xóa}}) để gỡ chúng đi.
- Thẻ trong ứng dụng vẽ CadCraft (thuộc tính khối) chưa xây dựng.
