---
title: Tìm cấu kiện theo lớp, tên hoặc thuộc tính
summary: Tìm mọi cấu kiện khớp với một hoặc nhiều quy tắc — lớp, tên, kiểu, tầng, vật liệu hoặc giá trị của bất kỳ thuộc tính nào — chọn tất cả chúng, và giữ các quy tắc thành một bộ tìm kiếm có tên.
keywords: tìm, tìm kiếm, lọc, truy vấn, quy tắc, bộ tìm kiếm, bộ chọn, tìm kiếm đã lưu, thuộc tính, giá trị, lớp, vật liệu, chọn tất cả
from: 3d293bc2
---

## Bạn sẽ làm gì

Chọn mọi cấu kiện cùng một loại hoặc có cùng một giá trị chỉ trong một bước: mọi cửa đi, mọi tường ở {{ui:Tầng}} 2, mọi cấu kiện có khả năng chịu lửa EI60, mọi tường có chi phí vượt một mức đã đặt.

## Các bước

1. Mở một mô hình IFC.
2. Mở {{ui:Tìm}} trong bảng bên trái.
3. Ở quy tắc đầu tiên, chọn một thuộc tính (trước hết là thuộc tính riêng của cấu kiện, như {{ui:Class}} và {{ui:Tầng}}, sau đó là các bộ thuộc tính của mô hình), cách so sánh và một giá trị. Ô giá trị gợi ý các giá trị mà mô hình có.
4. Để thu hẹp phạm vi, nhấn {{ui:Thêm quy tắc}}. Chọn {{ui:Mọi quy tắc}} để cần tất cả, hoặc {{ui:Bất kỳ quy tắc nào}} để chỉ cần một trong số đó.
5. Nhấn {{ui:Tìm}}, hoặc nhấn {{key:Enter}} trong ô giá trị. Những gì khớp sẽ được chọn.
6. Để giữ các quy tắc, nhấn {{ui:Lưu thành bộ}}, gõ một tên rồi nhấn lại. Sau này, nhấn tên một bộ để tìm theo bộ đó.

## Bạn sẽ thấy gì

- Các cấu kiện khớp được chọn trong khung nhìn 3D và cây mô hình, và {{ui:Thuộc tính}} cho biết số lượng theo lớp. Nhấn {{key:I}} để chỉ hiện chúng, {{key:H}} để ẩn chúng.
- Chữ khớp không phân biệt chữ hoa, chữ thường. Số được so sánh như số: "lớn hơn 1000" so sánh giá trị, không phải văn bản.
- {{ui:có giá trị}} và {{ui:không có giá trị}} không cần giá trị; chúng tìm những gì đã được điền, hoặc còn thiếu.
- Các bộ đã lưu nằm trong trình duyệt này và dùng cho mọi mô hình bạn mở.

## Những lỗi thường gặp

- **Không tìm thấy gì.** Một quy tắc cần một giá trị có thể khớp: xem các gợi ý trong ô giá trị.
- **Thiếu một thuộc tính trong danh sách.** Không có cấu kiện nào có hình học trong mô hình này có thuộc tính đó.

## Tiếp theo

- [Tô màu cấu kiện theo thuộc tính](topic:color-by-property)
- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
