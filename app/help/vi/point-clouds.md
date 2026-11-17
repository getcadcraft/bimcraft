---
title: Hiển thị đám điểm cạnh mô hình
summary: Mở bản quét laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS hoặc XYZ) trong chế độ xem 3D riêng hoặc cùng mô hình IFC, tô màu, cắt một lát mỏng qua nó, đo tới các điểm của nó, và chuyển sang ứng dụng bản vẽ để vẽ theo các đường hoàn công.
keywords: đám điểm, quét laser, bản quét, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, hoàn công, as-built, as built, khảo sát, căn chỉnh, lát cắt, cắt mặt bằng, bắt điểm, đo, vẽ theo, quét sang bim
from: d0a3e740
---

## Bạn sẽ làm gì

Xem bản quét laser của một tòa nhà cạnh mô hình của nó: kiểm tra những gì đã xây khớp với thiết kế, đo giữa các điểm đã quét, và cắt một lát mỏng để đọc tường, cửa và cột.

## Các bước

1. Mở đám điểm: {{ui:Mở}} tệp `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` hoặc `.xyz`, hoặc thả tệp lên trang (xem chủ đề về định dạng đám điểm để biết mỗi định dạng mang lại gì, và cần xuất gì từ phần mềm riêng của máy quét). Khi đang mở mô hình, đám điểm nhập vào mô hình trong chế độ xem 3D; mở đám điểm không bao giờ đóng mô hình hay các thay đổi chưa lưu của nó. Khi không có mô hình, đám điểm mở riêng.
2. Thanh đám điểm xuất hiện dưới thanh công cụ. Thanh cho biết có bao nhiêu điểm đang hiển thị và tệp có bao nhiêu điểm.
3. Chọn {{ui:Tô màu theo}}: màu của tệp (khi máy quét đã lưu), {{ui:Cao}}, {{ui:Cường độ}}, {{ui:Class}} (các lớp LiDAR như mặt đất, thực vật và công trình) hoặc {{ui:Một màu}}. {{ui:Dung lượng}} làm điểm to hơn hoặc nhỏ hơn.
4. Nhấp {{ui:Mặt bằng}} dưới {{ui:Lát cắt}} để chỉ giữ một dải mỏng cao 1.2 m trên điểm thấp nhất, nhìn từ trên: tường, lỗ cửa và cột đọc được như mặt bằng. {{ui:Trước}} và {{ui:Bên}} cắt các dải thẳng đứng cho mặt đứng và mặt cắt. Di chuyển dải bằng {{ui:Tại}}, và đổi {{ui:Độ dày}} (mét). {{ui:Tắt}} hiển thị lại toàn bộ đám điểm.
5. Nhấp {{ui:Đo}} trên thanh công cụ. Con trỏ bắt vào các điểm của đám điểm (nhãn ghi "Đám điểm"), để bạn đo từ tường tới tường trong lát cắt, hoặc từ một cấu kiện của mô hình tới bản quét. Góc hay cạnh của mô hình trong tầm với vẫn được ưu tiên.
6. Với {{ui:Đo}} › {{ui:Vị trí}}, một điểm của đám điểm cho biết vĩ độ và kinh độ theo hệ tọa độ riêng của đám điểm, khi tệp có ghi tên hệ tọa độ đó.
7. {{ui:Ẩn}} ẩn đám điểm trong chốc lát; {{ui:Xóa}} bỏ nó hẳn. {{ui:Hiển thị}} › {{ui:Đám điểm}} ẩn hoặc hiện thanh đám điểm.

## Đám điểm nằm ở đâu

{{ui:Đặt}} trong thanh cho biết đám điểm khớp với mô hình như thế nào:

- **Tọa độ mô hình**: các số của đám điểm chính là số của mô hình (bản quét đã căn chỉnh theo tọa độ của thiết kế).
- **Tọa độ bản đồ**: mô hình có phép chuyển đổi bản đồ (IfcMapConversion) và đám điểm nằm trong cùng hệ chiếu: đám điểm được đặt qua phép chuyển đổi đó. Nếu hai bên ghi tên hệ khác nhau, dòng trạng thái sẽ báo.
- **Căn giữa theo mô hình**: khi cả hai cách đều không đặt đám điểm gần mô hình, điểm giữa của nó nằm ở điểm giữa của mô hình và điểm thấp nhất của nó nằm trên sàn của mô hình. Chọn một cách khác để ghi đè.

Khi tệp không ghi đơn vị, BimCraft đọc theo mét và đưa ra {{ui:Đơn vị}} trong thanh.

## Vẽ theo các đường hoàn công

Nhấp {{ui:Vẽ theo trong CadCraft}} để chuyển đám điểm sang ứng dụng bản vẽ trong một thẻ mới. Nó mở ở đó dưới bản vẽ, nơi lát cắt mặt bằng và bắt điểm đối tượng cho phép bạn vẽ tường lên bản quét. Xem chủ đề CadCraft về đám điểm.

## Số lượng điểm

Một bản quét có thể chứa hàng trăm triệu điểm. BimCraft đọc mỗi điểm một lần và giữ lại một phần đều đặn để vẽ: {{ui:Hiển thị}} trong thanh đặt số lượng đó (1, 2, 5 hoặc 10 triệu). Nhiều điểm hơn cần nhiều bộ nhớ hơn và card đồ họa nhanh hơn. Số lượng theo mỗi lớp LiDAR tính trên mọi điểm trong tệp.

:::note
Tệp được đọc trên máy tính này; không có gì được tải lên. Đọc được LAS 1.0–1.4 và LAZ (tệp LAZ tối đa 1 GB, được giữ trong bộ nhớ khi đọc); E57 tối đa 6 triệu điểm và 512 MB hiện tại (bản quét lớn hơn: xuất LAS hoặc LAZ); PLY, PCD và PTX đọc đầy đủ; đám điểm văn bản là `x y z`, kèm các cột màu (`r g b`) và cường độ khi có.
:::

## Nhiều bản quét

Các bản quét chụp từ nhiều vị trí có thể được ghép vào một hệ khung chung, tinh chỉnh bằng ICP và xuất thành một tệp LAS hoặc E57: xem [Ghép nhiều bản quét thành một](topic:register-scans).
