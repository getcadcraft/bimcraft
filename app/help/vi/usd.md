---
title: Xuất mô hình sang USD
summary: Ghi các mô hình IFC đang mở thành USD để kết xuất, lắp ghép cảnh và các chương trình 3D khác, với lớp IFC, GlobalId và thuộc tính của mọi cấu kiện.
keywords: usd, usda, usdc, usdz, openusd, xuất, ifc, globalid, thuộc tính, tầng, bộ môn, lắp ghép cảnh, archviz, kết xuất
from: 2be5f7b8
---

{{ui:USD}} trên thanh công cụ ghi mọi thứ đang mở (mọi mô hình, các mô hình liên kết nơi bạn đã đặt) thành một tệp USD.

## Xuất

1. Chọn {{ui:USD}} trên thanh công cụ.
2. Chọn {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} hoặc {{ui:Package (.usdz)}}.
3. Tệp được tải xuống. Thanh trạng thái cho biết có bao nhiêu cấu kiện đã được đưa vào.

## Nội dung của tệp

| Trong mô hình IFC | Trong tệp USD |
|---|---|
| Khu đất, công trình, tầng | Nhóm lồng nhau, các tầng theo thứ tự cao độ |
| Mỗi cấu kiện | Một prim dưới tầng và bộ môn của nó (Architecture, Structure, MEP, Furnishing, Site, Spaces, Other), với hình học dưới dạng lưới |
| Lớp, GlobalId, tên, kiểu, thẻ | Thuộc tính tên `ifc:class`, `ifc:globalId`, `ifc:name` và các thuộc tính khác |
| Bộ thuộc tính và bộ khối lượng | Một thuộc tính cho mỗi thuộc tính; chiều dài, diện tích và thể tích tính bằng mét, mét vuông và mét khối |
| Màu sắc | Vật liệu (có độ trong suốt) |
| Không gian | Được giữ lại, đánh dấu là đường dẫn để trình kết xuất bỏ qua |

Hình học nằm theo tọa độ riêng của tệp IFC. Bố cục theo quy ước USD cho công trình mà CadCraft đã ghi lại.
