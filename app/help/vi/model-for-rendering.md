---
title: Gửi mô hình đến chương trình kết xuất
summary: Lưu những gì khung nhìn 3D hiển thị thành một mô hình glTF (.glb) cùng vật liệu, kết cấu và đèn, cho các chương trình kết xuất và trực quan hóa đọc glTF.
keywords: glb, gltf, định dạng truyền glTF, xuất, kết xuất, trực quan hóa, thời gian thực, archviz, vật liệu, kết cấu, đèn, nguồn sáng, tài sản, tài sản tùy chỉnh
from: e62d57dc
---

{{ui:Để kết xuất}} trên thanh công cụ lưu những gì khung nhìn 3D hiển thị thành một tệp **.glb** duy nhất (glTF 2.0, định dạng mở của Khronos Group). Các chương trình kết xuất đọc glTF sẽ mở nó cùng vật liệu và đèn của mô hình; Twinmotion liệt kê glTF và GLB trong các tệp hình học mà nó nhập và giữ lại đèn của chúng (tài liệu của Epic, "Importing geometry in Twinmotion"): hãy dùng {{ui:Để kết xuất}} và nhập tệp .glb ở đó. Không có gì được tải lên: tệp được tạo trên máy tính này.

## Lưu

1. Mở mô hình IFC và thiết lập khung nhìn 3D: ẩn các tầng, phần tử hoặc mô hình liên kết mà bạn không muốn, và [tô vật liệu](topic:paint-materials) mà bạn muốn thấy.
2. Bấm {{ui:Để kết xuất}} (hoặc gõ `GLB`).
3. Tệp được tải xuống với tên "<model name>.glb". Thanh trạng thái cho biết tệp có bao nhiêu tam giác, vật liệu và đèn.

## Tệp chứa gì

- **Hình học** của mọi phần tử mà khung nhìn 3D hiển thị, tính bằng mét, với trục Y hướng lên (trục riêng của glTF). Mỗi đối tượng là một tầng và một vật liệu, được đặt tên như "Level 1 — Brick, red", để bạn có thể chọn một vật liệu trong chương trình kết xuất và thay bằng vật liệu riêng.
- **Vật liệu:** mỗi màu với kiểu bề mặt bạn đã chọn cho nó trong [Kết xuất](topic:render) (mờ, satin, bóng, kim loại, kính…), và mỗi vật liệu thư viện đã tô với màu, độ nhám và **kết cấu** (hình của nó nằm trong tệp, được thu theo kích thước thật: viên gạch có kích thước của viên gạch). Kính trong suốt.
- **Đèn:** mọi bộ đèn đang bật trong Kết xuất › Đèn, dưới dạng đèn điểm hoặc đèn chiếu, với độ sáng (lumen đổi thành candela), màu và góc chùm sáng.
- **Vị trí công trường:** vĩ độ và kinh độ của công trường được ghi trong tệp để tham khảo. Các chương trình kết xuất có mặt trời riêng: hãy nhập địa điểm ở đó.

## Tệp không chứa

- Mặt cắt (toàn bộ phần tử được đưa vào) và các phần tử được hiển thị xuyên thấu (chúng bị bỏ qua).
- Đối tượng từng phần tử (thay vào đó là một đối tượng cho mỗi tầng và vật liệu), thuộc tính IFC, bản đồ gồ ghề (bump), khung nhìn đã lưu và các lượt đi bộ đã ghi.
- Cạnh và nền.

## Enscape và các trình kết xuất cắm thêm

Enscape chạy bên trong một chương trình thiết kế khác và không có tệp nào để mở cả dự án. Có hai cách:

- Mở **IFC** của mô hình (Tệp › Lưu) trong chương trình mà Enscape chạy; hầu hết đều đọc IFC. Màu được giữ lại; vật liệu thư viện đến dưới dạng màu của chúng.
- Đưa một **chi tiết nhỏ** (nội thất, thiết bị cố định) vào như một tài sản tùy chỉnh: cô lập nó trước, rồi bấm {{ui:Cho Enscape (.gltf)}}. Thư viện tài sản tùy chỉnh của Enscape liệt kê các tệp .gltf, .obj và .fbx, không có .glb, nên nút này lưu cùng cảnh thành một tệp **.gltf** tự chứa (dữ liệu nhị phân và hình ảnh nằm trong tệp; không có gì khác cần sao chép cùng nó). Enscape khuyên dùng tài sản nhỏ (dưới khoảng 20,000 tam giác).

:::note
Trong CadCraft Studio, cùng tệp glTF (và một tệp USD) cũng có thể được lưu từ {{ui:Kết xuất}} › Động cơ › **Tệp glTF** / **Tệp USD**, hoặc mở ngay trong một chương trình trên máy tính này: xem [Mở cảnh trong chương trình khác](topic:render-open-in). Plug-in hoặc liên kết trực tiếp cho Enscape hoặc Twinmotion chưa được xây dựng. Các định dạng FBX và Datasmith không có đặc tả công bố, nên BimCraft không ghi chúng; glTF là đường mở.
:::
