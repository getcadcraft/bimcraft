---
title: Đổi thuộc tính kiểu cho mọi cấu kiện cùng kiểu
summary: Phân biệt thuộc tính kiểu với thuộc tính cá thể, đổi một giá trị trên kiểu để mọi cấu kiện theo, và kiểm tra việc sửa riêng một cấu kiện vẫn chỉ ảnh hưởng đến chính nó.
keywords: kiểu, cá thể, thuộc tính kiểu, kiểu họ, dùng chung, sao chép khi ghi, tất cả cấu kiện, sửa hàng loạt, nhà sản xuất, mô hình
from: bffd8789
---

## Bạn sẽ làm gì

Đặt nhà sản xuất cho một kiểu cửa để mọi cửa thuộc kiểu đó đều hiển thị giá trị này, rồi cho riêng một cửa một chỉ số chống cháy mà không đụng đến các cửa khác. Bài này cho thấy sự khác nhau giữa thuộc tính kiểu và thuộc tính cá thể trong BimCraft.

## Kiểu hay cá thể?

- Một thuộc tính **cá thể** thuộc về một cấu kiện: thẻ, ký hiệu, phòng, chỉ số chống cháy riêng của nó.
- Một thuộc tính **kiểu** thuộc về kiểu mà nhiều cấu kiện dùng chung: nhà sản xuất, model, chiều rộng của một kiểu cửa.

Trong {{ui:Thuộc tính}}, các bộ đến từ kiểu có " (type)" sau tên, và dòng "Type property: a change here applies to every element of this type." Mọi bộ khác thuộc về chính cấu kiện. **Type** ở khối đầu tiên hiển thị tên của kiểu.

## Các bước: đổi kiểu

1. Mở một mô hình IFC và nhấn vào một cửa.
2. Ghi lại **Type** của nó ở khối đầu tiên trong {{ui:Thuộc tính}}, ví dụ "Single-Flush 900 x 2100".
3. Cuộn đến một bộ có tên kết thúc bằng "(type)".
4. Nhấn vào giá trị bạn muốn đổi, ví dụ **Manufacturer**.
5. Gõ giá trị mới và nhấn {{key:Enter}}.
6. Nhìn vào danh sách {{ui:Changes}}: mục đó kết thúc bằng "(type)".
7. Nhấn một cửa khác cùng kiểu.
8. Kiểm tra cùng giá trị: nó cũng hiển thị giá trị mới.

## Các bước: chỉ đổi một cấu kiện

1. Nhấn một cửa.
2. Mở một bộ không có "(type)" trong tên, ví dụ `Pset_DoorCommon`.
3. Nhấn một giá trị, như **FireRating**, gõ giá trị mới và nhấn {{key:Enter}}.
4. Nhấn cửa kế bên, cùng kiểu.
5. Kiểm tra cùng giá trị: nó vẫn hiển thị giá trị cũ.

Ngay cả khi bộ thuộc tính đó được công cụ xuất dùng chung cho cả hai cửa, BimCraft đã cấp cho cửa đầu tiên một bản sao riêng trước khi đổi. Xem [Vì sao thay đổi của bạn chỉ áp dụng cho một cấu kiện](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Lưu

1. Nhấn {{ui:Save as IFC}} hoặc nhấn {{key:Mod+S}}.
2. Mở bản đã lưu trong BimCraft, hoặc trong bất kỳ trình xem IFC nào, để kiểm tra cả hai thay đổi.

## Lỗi thường gặp

- **Không phải mô hình nào cũng có kiểu.** Một số công cụ xuất không ghi đối tượng kiểu, hoặc đặt mọi thứ trên cá thể. Khi đó không có bộ "(type)" nào, và mỗi cấu kiện phải được đổi riêng.
- **Cùng một giá trị xuất hiện trong bộ kiểu và bộ cá thể.** Một số công cụ xuất ghi một tham số ở cả hai nơi. Các chương trình khác có thể đọc một trong hai; hãy đổi cả hai nếu bạn cần chúng khớp nhau.
- **Mong chọn "tất cả cửa của kiểu này" để sửa cùng lúc.** Bản dựng này không có chọn nhiều. Thuộc tính kiểu là cách đổi nhiều cấu kiện cùng lúc.
