---
title: So sánh hai phiên bản của một mô hình
summary: Mở hai phiên bản của cùng một mô hình IFC và xem những cấu kiện nào đã được thêm, xóa và thay đổi, được khớp theo GlobalId của chúng, với một tệp CSV ghi mọi thay đổi.
keywords: so sánh, khác biệt, phiên bản, bản sửa đổi, thay đổi, đã thay đổi, đã thêm, đã xóa, đã di chuyển, globalid, guid, cái gì đã thay đổi
from: cfca6971
---

## Bạn sẽ làm gì

Xem những gì đã thay đổi giữa mô hình bạn có và mô hình được gửi cho bạn: cấu kiện nào mới, cái nào đã mất, cái nào đã di chuyển hoặc có giá trị thuộc tính mới.

## Các bước

1. Mở phiên bản mới hơn, rồi nhấp {{ui:Thêm mô hình…}} và chọn phiên bản cũ hơn. Xem [Xem nhiều mô hình IFC cùng lúc](topic:several-models).
2. Trong {{ui:Mô hình}}, mở {{ui:So sánh phiên bản}}.
3. Chọn {{ui:Phiên bản cũ hơn}} và {{ui:Phiên bản mới hơn}}.
4. Nhấp {{ui:So sánh}}.
5. Nhấp một cấu kiện trong danh sách để chọn nó và xem thuộc tính. Nhấp {{ui:Tải CSV}} để lấy mọi thay đổi, theo từng thuộc tính.
6. Nhấp {{ui:Xóa}} để quay về chế độ xem thông thường.

## Bạn sẽ thấy

- Cấu kiện **Đã thêm** màu xanh dương, từ phiên bản mới hơn.
- Cấu kiện **Đã xóa** màu đỏ, từ phiên bản cũ hơn.
- Cấu kiện **Đã thay đổi** màu vàng đất, từ phiên bản mới hơn, mỗi cái ghi rõ điều gì đã thay đổi: thuộc tính, một lần di chuyển với khoảng cách, hoặc một hình dạng mới.
- Mọi thứ giống nhau, trong suốt.

## Điều nên biết

- Cấu kiện được khớp theo GlobalId của chúng. Một chương trình cấp GlobalId mới cho cấu kiện mỗi lần xuất sẽ làm mọi cấu kiện trông như bị xóa rồi thêm lại.
- Vị trí được so sánh ở nơi các mô hình đặt trong cảnh. Nếu một phiên bản được di chuyển có chủ ý, hãy căn chỉnh trước bằng {{ui:Di chuyển}} trong {{ui:Mô hình}}.
- Một GlobalId dùng hai lần trong một mô hình bị loại khỏi so sánh. [Kiểm tra mô hình để tìm các vấn đề thường gặp](topic:model-checks) tìm ra những cái đó.

## Tiếp theo

- [Vấn đề và tệp BCF](topic:issues-bcf)
- [Cộng tổng khối lượng theo thuộc tính](topic:quantity-totals)
