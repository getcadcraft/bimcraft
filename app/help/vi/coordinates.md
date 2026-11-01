---
title: Tọa độ trong BimCraft
summary: Bạn đang làm việc ở đâu: vị trí con trỏ trên mặt bằng và khung nhìn 3D, tầng bạn đang ở, gốc dự án và điểm đo của công trường.
keywords: tọa độ, tôi đang ở đâu, vị trí, con trỏ, số đọc, x y z, tầng, cốt, gốc dự án, gốc, điểm gốc, điểm đo, công trường, tọa độ bản đồ, đông, bắc, định vị địa lý, đơn vị, vị trí
from: 84df5245
---

## Bạn sẽ làm gì

Nhìn nhanh biết bạn đang ở đâu trong mô hình: bạn đang vẽ trên tầng nào, con trỏ cách gốc dự án bao xa, và điểm đo của công trường nằm ở đâu.

## Các số hiển thị ở đâu

- **Trên khung nhìn 3D** (góc dưới bên phải, cạnh khối xem): di chuyển con trỏ qua mô hình. Hộp hiển thị tầng mà điểm đó nằm trên và điểm đó cao bao nhiêu so với sàn của tầng ấy, rồi đến **X, Y và Z**. Trên khoảng trống, hộp đọc điểm trên sàn của tầng thấp nhất.
- **Trên mặt bằng** (góc dưới bên phải, khi {{ui:Vẽ}} đang bật): tầng mà mặt bằng đang hiển thị và cao độ sàn của tầng đó, cùng **X và Y** của con trỏ khi con trỏ nằm trên mặt bằng.
- Khi tệp có chuyển đổi bản đồ (được xuất kèm tọa độ bản đồ), cả hai hộp đều thêm **Đông và Bắc** trên lưới bản đồ, theo {{ui:Đơn vị}} mà bạn đã chọn (luôn kèm đơn vị viết bên cạnh; feet và inch hiển thị dưới dạng feet thập phân). Bản vẽ (DWG hoặc DXF) giữ đơn vị riêng: số đọc con trỏ ghi rõ đơn vị đó và không bao giờ bị đổi.

Mọi X, Y và Z đều được đo từ **gốc dự án**, theo {{ui:Đơn vị}} đã chọn trên thanh công cụ (feet và inch, inch, feet thập phân, milimét, xentimét hoặc mét). Y dương hướng về phía bắc của mô hình, không phải lúc nào cũng là bắc thực. Đông và Bắc trên bản đồ theo cùng lựa chọn (feet và inch hiển thị dưới dạng feet thập phân); khi đơn vị của hệ bản đồ khác với đơn vị bạn đã chọn, tên đơn vị đó được ghi trong ngoặc sau các số, ví dụ *(US survey feet)*, để nhân viên khảo sát biết hệ thống tự viết bằng đơn vị gì.

## Hai điểm đánh dấu

- **Gốc dự án** (vòng tròn đỏ có dấu thập): điểm 0, 0, 0 mà mọi tọa độ trong mô hình được đo từ đó.
- **Điểm đo** (vòng tròn xanh dương có hình tam giác): điểm tham chiếu của công trường, điểm mà vĩ độ, kinh độ và cao độ, hoặc tọa độ bản đồ, được cung cấp cho nó. Trong khung nhìn 3D, trỏ vào đó để đọc vị trí của nó.

Khi công trường nằm trên gốc dự án, như trong một tòa nhà mới được vẽ tại đây, một điểm đánh dấu hiển thị cả hai. Nhấn nút chữ thập trong một trong hai hộp để ẩn hoặc hiện các điểm đánh dấu; BimCraft ghi nhớ lựa chọn của bạn trên trình duyệt này.

## Bạn sẽ thấy gì

- Các số thay đổi khi con trỏ di chuyển, và hộp trên mặt bằng ghi tên tầng bạn đã chọn trong danh sách tầng.
- Các điểm đánh dấu giữ nguyên vị trí khi bạn xoay quanh, di chuyển khung nhìn và thu phóng.

:::tip
Để đọc vĩ độ và kinh độ của một điểm, dùng {{ui:Đo}} › {{ui:Vị trí}}: xem [Đo khoảng cách, diện tích mặt và vị trí trong 3D](topic:measure).
:::

:::touch
Trên màn hình cảm ứng, hộp 3D không hiển thị gì cho đến khi bạn dùng chuột hoặc bút: ngón tay sẽ di chuyển khung nhìn thay vào đó.
:::
