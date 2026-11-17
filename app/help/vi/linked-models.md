---
title: Liên kết các mô hình khác để phối hợp
summary: Hiển thị một mô hình IFC khác cạnh mô hình của bạn bằng cách tham chiếu (không bao giờ gộp), đặt nó theo tọa độ chung, tọa độ bản đồ hoặc hai điểm, bắt điểm vào nó khi vẽ, và tải lại khi tệp của nó thay đổi.
keywords: liên kết, mô hình liên kết, tham chiếu, xref, phối hợp, liên hợp, kết cấu, MEP, tư vấn, tọa độ chung, khảo sát, tọa độ bản đồ, tải lại, gỡ, tham chiếu tài liệu, IfcDocumentReference
from: 3e0f1eab
---

## Bạn sẽ làm gì

Vẽ dựa trên mô hình của tư vấn (kết cấu, hệ thống kỹ thuật, công trình hiện hữu) mà không sao chép bất cứ thứ gì vào tệp của bạn.

**Mô hình liên kết** được hiển thị trong khung nhìn 3D và được cắt trên các mặt bằng của bạn, nhưng không bao giờ bị thay đổi và không bao giờ được lưu vào mô hình của bạn. Mô hình của bạn chỉ giữ liên kết: tên tệp và vị trí đặt của nó.

## Liên kết một mô hình

1. Trong mục {{ui:Mô hình liên kết}} của bảng bên trái, nhấp {{ui:Liên kết mô hình…}} và chọn tệp IFC. Mô hình hiển thị ngay, và dòng của nó ghi **Đang hiển thị**.
2. Chọn vị trí đặt trong {{ui:Vị trí đặt}}:
   - **Tọa độ chung** (mặc định): tọa độ của nó trùng với tọa độ của bạn, như khi cả hai mô hình được bố trí từ cùng một gốc.
   - **Tọa độ bản đồ**: tọa độ bản đồ của cả hai tệp căn chỉnh chúng với nhau (cả hai cần chuyển đổi bản đồ; BimCraft sẽ thông báo khi một trong hai không có).
   - **Theo hai điểm…**: nhấp một điểm trên mô hình liên kết, rồi vị trí tương ứng trong mô hình của bạn; sau đó là cặp thứ hai. Liên kết sẽ được dời và xoay (quanh trục đứng) để khớp.
3. Mỗi thay đổi liên kết và vị trí đặt là một bước: {{key:Mod+Z}} sẽ hoàn tác.

## Làm việc với liên kết

- Các mặt bằng hiển thị mô hình liên kết được cắt ở cao độ cắt của tầng dưới dạng nét mảnh, và công cụ {{ui:Tường}} cùng các công cụ vẽ khác bắt điểm vào góc và cạnh của nó.
- Chọn các cấu kiện của nó trong khung nhìn 3D để đọc thuộc tính; mô hình liên kết không bao giờ là mô hình bạn chỉnh sửa, nên nút chọn của nó trong {{ui:Mô hình}} sẽ tắt.
- **Tệp đã thay đổi?** Khi trình duyệt có thể theo dõi tệp (tệp được mở qua hộp chọn tệp của trình duyệt, hoặc trong Studio), BimCraft sẽ tự tải lại liên kết vài giây sau khi tệp được lưu lại và thông báo điều đó. Nếu không, hãy nhấp {{ui:Tải lại}}.
- {{ui:Gỡ}} ẩn liên kết và giải phóng bộ nhớ; liên kết vẫn nằm trong mô hình của bạn. {{ui:Tải…}} hiển thị lại (bạn chọn tệp: trình duyệt không thể tự mở tệp theo tên).
- Dấu × gỡ liên kết khỏi mô hình của bạn.

## Bạn sẽ thấy gì

- Trong tệp IFC của bạn: một IfcDocumentReference cho mỗi liên kết (tên tệp), gắn với dự án, và vị trí đặt của nó trong bộ thuộc tính CadCraft_Links của dự án. Khi mở lại mô hình, các liên kết được liệt kê là **Chưa tải** cho đến khi bạn tải chúng.

:::note
Kiểm tra va chạm, So sánh và Tìm có thể dùng một liên kết đã tải như bất kỳ mô hình mở nào khác: xem [Xem nhiều mô hình IFC cùng lúc](topic:several-models).
:::
