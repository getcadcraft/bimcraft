---
title: Ẩn, cô lập và xuyên thấu cấu kiện
summary: Chọn nhiều cấu kiện, ẩn chúng, chỉ hiển thị chúng, hoặc hiển thị chúng cùng mọi thứ khác ở chế độ xuyên thấu, rồi hiển thị lại tất cả.
keywords: ẩn, cô lập, xuyên thấu, trong suốt, bóng ma, tia X, hiện tất cả, hiện lại, chọn nhiều, lựa chọn nhiều, nhấn Ctrl, nhấn Shift, khả năng hiển thị
from: 97e98b8c
---

## Bạn sẽ làm gì

Làm sạch khung nhìn xuống còn những gì bạn đang xem: ẩn các cấu kiện đang chắn, chỉ hiện những cấu kiện bạn đã chọn, hoặc giữ mọi thứ khác trên màn hình dưới dạng đường viền mờ để bạn vẫn biết mình đang ở đâu.

## Các bước

1. Mở một mô hình IFC. Xem [Mở mô hình IFC và xem quanh trong 3D](topic:open-ifc-model).
2. Nhấn một cấu kiện để chọn nó. Để chọn thêm, giữ {{key:Mod}} hoặc {{key:Shift}} rồi nhấn từng cấu kiện. Nhấn lại một cấu kiện đã chọn theo cách đó sẽ bỏ nó ra.
3. Mở {{ui:Show}} trên thanh công cụ và chọn việc cần làm, hoặc nhấn phím tắt của nó:
   - {{ui:Hide}} ({{key:H}}) ẩn các cấu kiện đã chọn.
   - {{ui:Isolate}} ({{key:I}}) chỉ hiển thị các cấu kiện đã chọn.
   - {{ui:See-through}} ({{key:T}}) hiển thị các cấu kiện đã chọn như bình thường và mọi thứ khác ở chế độ xuyên thấu.
4. Nhấn {{ui:Show all}} trong cùng menu, hoặc nhấn {{key:Shift+H}}, để hiển thị lại mọi cấu kiện.
5. Để cắt bỏ mọi thứ quanh các cấu kiện đã chọn thay vào đó, nhấn {{ui:Section box round the pick}} trong cùng menu, hoặc nhấn {{key:Shift+X}}. Xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane).

## Bạn sẽ thấy

- Khi chọn nhiều cấu kiện, {{ui:Properties}} cho biết số lượng và liệt kê chúng theo lớp. Nhấn một cấu kiện riêng để xem thuộc tính của nó.
- Cấu kiện đã ẩn không thể được chọn: một lần nhấn sẽ trúng vào thứ nằm phía sau chúng.
- Cấu kiện xuyên thấu cũng không thể được chọn, nên bạn có thể nhấn xuyên qua tường tới những gì đã cô lập.
- Các cạnh được ẩn cùng cấu kiện, và mờ đi cùng nó.
- Trạng thái ẩn, cô lập và xuyên thấu được giữ nguyên khi bạn chỉnh sửa, đặt mục từ thư viện hoặc cắt mô hình bằng mặt phẳng cắt. Mở một mô hình khác sẽ hiển thị lại mọi thứ.

## Lỗi thường gặp

- **Các mục trong menu bị mờ.** Chưa chọn gì. Hãy nhấn một cấu kiện trước; trỏ vào một mục để đọc lý do nó không thể hoạt động.
- **Cô lập lại hiện ra một bức tường đã bị ẩn.** Cô lập hiển thị đúng những gì đã chọn, dù bị ẩn hay không.
- **Thiếu cả một tầng.** Đó là danh sách {{ui:Storeys}}, không phải {{ui:Show all}}: hãy chọn lại tầng đó.

## Tiếp theo

- [Hiển thị và ẩn tầng, không gian và cạnh](topic:storeys-and-spaces)
- [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)
