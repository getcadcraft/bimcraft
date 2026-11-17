---
title: Xuất mô hình dưới dạng Collada hoặc cho Google Earth
summary: Ghi các mô hình IFC đang mở thành tệp Collada (.dae) cho Blender và các chương trình 3D khác, hoặc thành gói Google Earth (.kmz) đặt đúng vị trí của mô hình trên bản đồ.
keywords: collada, dae, kmz, kml, google earth, blender, xuất, định vị địa lý, georeference, vĩ độ, kinh độ, vị trí, chương trình 3d
from: 81cfec09
---

{{ui:Collada}} trên thanh công cụ (hoặc {{ui:Xuất Collada (.dae, .kmz)…}} trong menu Tệp của kiểu menu và dải lệnh) ghi những gì đang mở dưới dạng Collada 1.4.1: mọi mô hình đang hiển thị, các mô hình liên kết nằm đúng vị trí bạn đã đặt.

## Xuất

1. Chọn {{ui:Collada}}.
2. Chọn định dạng:
   - {{ui:Tệp Collada (.dae), cho Blender và các chương trình 3D khác}}.
   - {{ui:Gói Google Earth (.kmz): mô hình đặt đúng vị trí trên bản đồ}}. Chỉ hiện khi mô hình có vị trí.
3. Chọn các tùy chọn, rồi {{ui:Xuất}}. Tệp được tải xuống, và thanh trạng thái cho biết có bao nhiêu phần tử đã được ghi.

| Tùy chọn | Tác dụng |
|---|---|
| {{ui:Ghi vị trí vào tệp}} | Thêm vĩ độ, kinh độ, cao độ và hướng của gốc tệp vào .dae |
| {{ui:Cao}} | {{ui:Trên mặt đất: cốt 0 của mô hình đặt trên địa hình}}, hoặc {{ui:Chiều cao riêng của mô hình so với mực nước biển}} |
| {{ui:Bao gồm phòng và không gian}} | Không gian cũng được ghi (mặc định bị bỏ qua) |
| {{ui:Bao gồm cấu kiện ẩn}} | Cấu kiện bạn đã ẩn cũng được ghi (mặc định chỉ ghi những gì bạn thấy) |

## Nội dung trong tệp

| Trong mô hình | Trong tệp Collada |
|---|---|
| Công trình, các tầng | Nút lồng nhau, các tầng theo thứ tự cao độ; cấu kiện không thuộc tầng nào nằm dưới "Chưa đặt" |
| Mỗi cấu kiện | Một nút với lưới riêng, được đặt tên như trong mô hình (tên, nếu không có thì lớp và thẻ) |
| Class, GlobalId, kiểu xác định trước | Trong dữ liệu bổ sung của nút (hồ sơ IFC), với tên chính xác (hồ sơ ModelCraft) |
| Màu | Vật liệu, có độ trong suốt |
| Đơn vị và trục | Mét, Z hướng lên. Cốt 0 của mô hình đang mở ở cao độ 0 |

Mô hình giữ gần gốc tọa độ trên mặt đất, nên các chương trình làm việc với độ chính xác đơn sẽ hiển thị mà không bị giật. ModelCraft ghi tệp Collada bằng cùng bộ ghi này, và mở các tệp này với tên phần tử của chúng.

## Vị trí lấy từ đâu

Mô hình đang mở cung cấp vị trí, theo cách {{ui:Đo}} tính vĩ độ và kinh độ của một điểm:

- Chuyển đổi bản đồ (IFC4 IfcMapConversion, hoặc các bộ thuộc tính IFC2X3) thông qua hệ tọa độ của mô hình. Hệ bạn chọn cho mô hình được ưu tiên hơn hệ mà tệp ghi.
- Nếu không có, dùng vĩ độ và kinh độ của công trường (gần đúng: đủ dùng trong phạm vi công trường).

Hướng được đo, không giả định: tính đến góc xoay của bản đồ, bắc thật và độ hội tụ của bản đồ. Để gán vị trí cho một mô hình, dùng {{ui:Gốc bản đồ…}} trong mục {{ui:Đo}}.

## Trong các chương trình khác

- **Google Earth** đọc .kmz: mô hình hiện đúng vị trí, xoay về hướng bắc. Tệp .dae thường không có vị trí để Google Earth đọc; hãy dùng .kmz.
- **Blender** (4.x trở về trước): File, Import, Collada (.dae). Mỗi cấu kiện được nhập như một đối tượng riêng cùng vật liệu của nó. Vị trí được giữ trong dữ liệu bổ sung của tệp, mà Blender không đọc. Blender 5.0 đã bỏ trình nhập Collada có sẵn; khi đó, dùng {{ui:USD}} hoặc xuất glTF thay thế, hoặc mở .dae trong Blender 4.5 và lưu thành .blend.

Kiểm thử của chúng tôi kiểm tra từng tệp theo lược đồ Collada 1.4.1 và đọc lại bằng một trình đọc Collada độc lập. Chúng tôi chưa mở tệp trong Blender hay Google Earth.
