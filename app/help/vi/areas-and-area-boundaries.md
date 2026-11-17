---
title: Diện tích và ranh giới diện tích
summary: Đo diện tích xây dựng tổng hoặc diện tích cho thuê bên trong các đường ranh giới bạn vẽ hoặc lấy từ tường, và liệt kê các diện tích trong bảng thống kê.
keywords: diện tích, ranh giới diện tích, sơ đồ diện tích, diện tích xây dựng tổng, diện tích sàn tổng, GFA, cho thuê, mặt bằng diện tích, bảng thống kê diện tích, chọn tường, không khép kín
from: c79f96d2
---

## Bạn sẽ làm gì

Vẽ ranh giới của một sơ đồ diện tích, đặt diện tích bên trong, và đọc các tổng.

## Công cụ ở đâu

- Bố cục dải lệnh: {{ui:Kiến trúc}} › **Phòng & Diện tích** › {{ui:Diện tích}} và {{ui:Ranh giới diện tích}}.
- Bố cục cổ điển: thanh Vẽ › menu {{ui:Phòng}}.

## Các bước

1. Chọn {{ui:Ranh giới diện tích}}. Ở dòng, chọn {{ui:Sơ đồ}}: Xây dựng tổng hoặc Cho thuê. Mỗi sơ đồ có ranh giới riêng.
2. Chọn cách tạo đường trong {{ui:Tạo bằng}}:
   - **Vẽ**: nhấp từng điểm một.
   - **Chọn tường: đường tâm**: nhấp một bức tường, đường tâm của nó là một ranh giới.
   - **Chọn tường: mặt được nhấp**: nhấp một bức tường ở phía bạn muốn; mặt đó là ranh giới. Với diện tích xây dựng tổng, nhấp phía ngoài của các tường ngoài.
3. Chọn {{ui:Diện tích}}. Chọn cùng sơ đồ, gõ tên, số hoặc loại nếu muốn, rồi nhấp bên trong các ranh giới.
4. Diện tích được đo ngay. Chọn nó để đổi tên, số hoặc loại trong **Thuộc tính**.

## Thứ tự phụ thuộc

- Ranh giới tạo bằng cách chọn tường sẽ theo bức tường đó: di chuyển tường thì diện tích được đo lại trong cùng bước.
- Ranh giới bạn vẽ giữ nguyên chỗ bạn đã vẽ.
- Mặt của các tường gặp nhau ở góc cũng gặp nhau tại đó, nên bốn tường được chọn sẽ khép một diện tích không có khe hở.
- Ranh giới diện tích hiển thị trên mặt bằng khi bạn đang dùng công cụ phòng hoặc diện tích, nên không làm rối mặt bằng ở các lúc khác.

## Nếu các ranh giới không khép kín

Diện tích vẫn được đặt. Nó ghi **Chưa khép kín** và không đo gì cho đến khi các ranh giới khép kín quanh nó. Đây chỉ là lời khuyên: không có gì bị từ chối.

## Bảng thống kê

Bảng bên trái › {{ui:Bảng thống kê}} › **Diện tích**: sơ đồ, số, tên, loại, tầng, diện tích và chu vi, kèm tổng. Nhấp một dòng để chọn diện tích. {{ui:Tải CSV}} cho cùng bảng.

## Trong IFC

Một diện tích là một IfcSpace không có thân: PredefinedType GFA cho sơ đồ xây dựng tổng, USERDEFINED với ObjectType Rentable cho cho thuê. Nó mang GrossFloorArea và GrossPerimeter, và không có diện tích thực, nên không bị nhầm với phòng. Ranh giới là một IfcVirtualElement.

## Chưa xây dựng

- Sơ đồ riêng của bạn (chỉ có Xây dựng tổng và Cho thuê).
- Tô màu theo loại diện tích.
- Quy tắc đặt ranh giới thay bạn, chẳng hạn "đến đường mặt kính".

Xem thêm [Phòng và vách ngăn phòng](topic:rooms-and-separators), [Thẻ phòng và diện tích](topic:room-and-area-tags).
