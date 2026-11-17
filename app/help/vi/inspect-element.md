---
title: Chọn một cấu kiện và đọc thuộc tính của nó
summary: Nhấn bất kỳ cấu kiện nào trong mô hình 3D để làm nổi bật nó và đọc tên, loại, thẻ, GlobalId, các bộ thuộc tính và khối lượng của nó.
keywords: thuộc tính, chọn, nhấn, cấu kiện, tham số, bộ thuộc tính, pset, khối lượng, globalid, guid, kiểu, kiểm tra
from: 43b80aa8
---

## Bạn sẽ làm gì

Chọn các cấu kiện trong mô hình IFC và đọc mọi thông tin mà tệp ghi về chúng: thuộc tính, bộ thuộc tính, thuộc tính kiểu và khối lượng.

## Các bước

1. Mở một mô hình IFC.
2. Nhấn một cấu kiện, ví dụ một cửa đi. Nhấn mà không kéo: kéo quá vài pixel sẽ xoay thay vì chọn.
3. Nhìn vào cấu kiện: nó được tô sáng màu xanh dương.
4. Nhìn vào bảng {{ui:Properties}} bên phải. Ở trên cùng là loại của cấu kiện (như "Door" hoặc "WallStandardCase") và tên của nó.
5. Đọc khối đầu tiên: **Tên**, **Kiểu**, **Kiểu đối tượng**, **Thẻ**, **Mô tả**, **GlobalId** và **Dòng**.
6. Cuộn xuống các bộ thuộc tính. Ba bộ đầu tiên đã mở; nhấn tên của bất kỳ bộ nào khác để mở nó.
7. Nhấn một cấu kiện khác để chuyển sang nó.
8. Nhấn {{key:Esc}}, hoặc nhấn nền trống, để bỏ chọn.

## Bạn sẽ thấy

- Cấu kiện được tô sáng và dữ liệu của nó ở bên phải.
- Các bộ thuộc tính theo thứ tự bảng chữ cái. Các bộ đến từ **kiểu** của cấu kiện có " (kiểu)" sau tên và ghi chú "Thuộc tính kiểu: thay đổi ở đây áp dụng cho mọi cấu kiện cùng kiểu."
- Các bộ đại lượng (như chiều dài, diện tích và thể tích) được liệt kê cùng các bộ khác. Đại lượng chỉ đọc.
- Các giá trị bạn có thể thay đổi trông như nút bấm. [Đổi thuộc tính IFC và lưu bản sao đã chỉnh sửa](topic:edit-ifc-properties) chỉ cách làm.

[Các trường của bảng Thuộc tính](topic:properties-panel) giải thích từng trường.

## Cách tới các cấu kiện bị ẩn

1. Để tới một thứ bên trong công trình, bỏ chọn các tầng phía trên nó trong danh sách {{ui:Storeys}}.
2. Để tới một bức tường phía sau khối phòng, tắt {{ui:Spaces}}.
3. Nhấn cấu kiện.

## Lỗi thường gặp

- **Kéo nhẹ khi đang nhấn.** BimCraft coi đó là xoay và không chọn. Hãy giữ chuột đứng yên.
- **Mong đợi đơn vị bên cạnh số.** Giá trị được hiển thị như được lưu trong tệp, làm tròn đến bốn chữ số thập phân, không có ký hiệu đơn vị. Chiều dài trong một xuất metric thường là milimét hoặc mét; hãy kiểm tra cài đặt của chương trình xuất.
- **Tìm một tham số theo tên quen thuộc.** Các chương trình xuất đổi tên và nhóm lại tham số thành các bộ thuộc tính IFC như `Pset_WallCommon`. Hãy xem qua từng bộ; các tham số tùy chỉnh thường nằm trong một bộ được đặt theo tên chương trình xuất hoặc tên công ty của bạn.
- **Mong đợi một ô tìm kiếm.** Nhấn để chọn một cấu kiện; {{key:Mod}}+nhấn hoặc {{key:Shift}}+nhấn để chọn thêm, và {{key:Mod+A}} chọn mọi cấu kiện đang hiển thị. Danh sách {{ui:Elements}} ở bên trái chỉ đếm cấu kiện theo loại; nó không thể nhấn được.
- **Chọn trên thẻ tệp dự án.** Thẻ tệp không có cấu kiện để chọn: "Thuộc tính cấu kiện cần mô hình 3D. Mở một bản xuất IFC của tệp này để xem chúng."
