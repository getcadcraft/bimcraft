---
title: Trực tuyến và ngoại tuyến
summary: BimCraft tải gì từ trang web, cách Lưu để dùng ngoại tuyến làm cho mô hình IFC và bản vẽ DWG mở được mà không cần kết nối, và tại sao không có tệp nào bạn mở được tải lên.
keywords: ngoại tuyến, trực tuyến, internet, kết nối, không có mạng, chế độ máy bay, chuyến thăm công trường, lưu để dùng ngoại tuyến, sẵn sàng ngoại tuyến, tải lên, quyền riêng tư, wasm, webassembly, IFC engine, dwg, đám mây
from: 39e5c7eb
---

BimCraft đọc tệp của bạn bên trong thẻ trình duyệt. Mở, xem, chỉnh sửa và lưu không bao giờ gửi tệp của bạn đi đâu, trực tuyến hay ngoại tuyến. [Làm việc ngoại tuyến](common:offline) giải thích cách bản sao ngoại tuyến hoạt động trong mọi ứng dụng; trang này nói về những gì đặc thù của BimCraft.

## BimCraft tải gì từ trang web

| Phần | Khi tải mà không có bản sao ngoại tuyến | Kích thước |
|---|---|---|
| Ứng dụng, với trình xem 3D và mã của IFC engine | Khi bạn mở BimCraft | Vài megabyte |
| Phần WebAssembly của IFC engine | Tệp IFC đầu tiên bạn mở trong thẻ: "Đang khởi động IFC engine…" | Khoảng 1,6 MB |

Bản vẽ DWG và DXF, tệp và thư mục dự án cùng họ không cần gì thêm: trình đọc của chúng là một phần của ứng dụng.

## Lưu BimCraft để dùng ngoại tuyến

1. Mở BimCraft khi bạn đang trực tuyến.
2. Nhấp {{ui:Save for offline}} trên thanh ứng dụng phía trên.
3. Xem nút đếm lên: ví dụ "Đang lưu 40 trên 212". Bản sao của BimCraft khoảng 11 MB, vì nó bao gồm IFC engine.
4. Đợi {{ui:Offline ready}}.

Khi nút hiện {{ui:Offline ready}}, các mô hình IFC, bản vẽ DWG và DXF, tệp dự án, thư mục và trợ giúp này đều mở được mà không cần kết nối. Bạn không cần mở một IFC hoặc DWG trước để "khởi động" các trình đọc.

Để cập nhật hoặc gỡ bản sao, nhấp {{ui:Offline ready}} rồi chọn {{ui:Save again (get the newest version)}} hoặc {{ui:Remove the offline copy}}.

## Nút hiển thị gì

| Nút | Nghĩa là |
|---|---|
| {{ui:Save for offline}} | Trong trình duyệt này chưa có bản sao ngoại tuyến. Nhấp để lưu một bản |
| "Đang lưu *n* trên *m*" | Đang lưu; giữ thẻ mở cho đến khi xong |
| {{ui:Offline ready}} | Đã lưu. Di chuột để xem lúc nào; nhấp để mở menu |
| {{ui:Could not save}} | Một số tệp chưa tải xuống được. Kiểm tra kết nối và nhấp để thử lại. Bản tốt gần nhất, nếu có, vẫn được giữ |
| {{ui:Offline not available}} | Cửa sổ này không thể giữ bản sao ngoại tuyến (cửa sổ riêng tư hoặc máy tính được quản lý). Xem [Làm việc ngoại tuyến](common:offline) |

:::offline
Bạn đang ở chế độ ngoại tuyến.

- Nếu nút hiện {{ui:Offline ready}}, mọi loại tệp đều mở như thường lệ.
- Nếu không, chỉ những gì thẻ này đã tải mới hoạt động: một trình đọc chưa từng tải trong thẻ này thì không khởi động được, và mở loại tệp đó sẽ hiện lỗi từ trình duyệt trong dòng trạng thái. Đừng tải lại thẻ cho đến khi bạn trực tuyến trở lại.
:::

## Những gì không cần kết nối

Khi BimCraft đã mở trong thẻ, những việc này hoạt động ngoại tuyến ngay cả khi không có bản sao đã lưu:

- Đọc tệp dự án và tệp họ, và kiểm tra thư mục.
- Chọn cấu kiện, đọc thuộc tính và chỉnh sửa giá trị IFC trong một mô hình đã mở.
- {{ui:Save as IFC}} và {{ui:Download CSV}}: cả hai đều là tải xuống được thực hiện trong thẻ.

## Những gì chưa có

- **Lưu trên đám mây.** Tệp chỉ được lưu vào máy tính của bạn.

Xem [Tệp của bạn được lưu ở đâu](common:your-files).
