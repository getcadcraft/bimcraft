---
title: Bắt đầu một công trình mới
summary: Tạo mô hình công trình trống với các tầng, vẽ tường, đặt các mục từ thư viện và lưu thành IFC.
keywords: mới, công trình mới, trống, rỗng, bắt đầu từ đầu, mẫu, tầng, cốt, sàn, tạo, mô hình
from: 546b8ae8
---

## Bạn sẽ làm gì

Bắt đầu một mô hình công trình từ con số không thay vì mở một tệp có sẵn. BimCraft tạo một mô hình IFC trống gồm dự án, khu đất, công trình và các tầng. Bạn có thể đặt thiết bị và đồ nội thất lên các tầng từ thư viện rồi lưu thành tệp IFC.

:::note
Hiện đã vẽ được tường: xem [Vẽ tường](topic:draw-walls). Cửa đi, cửa sổ, sàn và mái sẽ được xây dựng tiếp theo.
:::

## Các bước

1. Nhấp {{ui:Công trình mới}} dưới **Mở tệp hoặc thư mục**, hoặc trên trang bắt đầu.
2. Nhập **Tên công trình**.
3. Chọn công trình có bao nhiêu **Số tầng** (từ 1 đến 200).
4. Nhập **Chiều cao tầng**, từ sàn đến sàn: ví dụ `10'-0"`, `10'6"` hoặc `3000 mm`. Một số trơn được hiểu là feet ở Mỹ và milimét ở nơi khác.
5. Nhấp {{ui:Tạo}}. Các tầng được xếp chồng từ 0, mỗi tầng cao hơn tầng trước một chiều cao tầng, và được đặt tên Level 1, Level 2, v.v. Chúng hiện trong cây mô hình, và mặt bằng của Level 1 mở ra cạnh khung nhìn 3D với {{ui:Vẽ}} đang bật.
6. Vẽ tường: xem [Vẽ tường](topic:draw-walls). Đổi tên tầng hoặc đổi chiều cao của chúng trong bảng **Tầng**.
7. Đặt các mục: xem [Đặt thiết bị và đồ nội thất từ thư viện](topic:place-from-library). Thanh đặt liệt kê mọi tầng.
8. Nhấp {{ui:Lưu thành IFC}}. Tệp được đặt tên theo công trình, ví dụ `Smith's house.ifc`.

## Cần biết

- Mô hình được lưu theo milimét, dạng IFC4. Các chương trình BIM khác mở được tệp này.
- **Tầng** trong bảng bên trái chỉ liệt kê các tầng đã có thứ gì đó; cây mô hình liệt kê tất cả.
- Cho đến khi bạn lưu, công trình mới được tính là công việc chưa lưu. BimCraft hỏi trước khi bạn mở tệp khác hoặc rời đi, và giữ một bản sao trong trình duyệt này phòng khi thẻ bị đóng.
