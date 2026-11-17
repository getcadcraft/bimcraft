---
title: Tìm đường với cây mô hình
summary: Duyệt mô hình IFC theo dự án, khu đất, công trình, tầng và không gian, với các cấu kiện được nhóm theo loại; đánh dấu ô để hiện và ẩn, nhấp một hàng để chọn, nhấp đúp để phóng to.
keywords: cây mô hình, cây, cấu trúc, cấu trúc không gian, trình duyệt, đề cương, bộ điều hướng, tầng, cốt, sàn, không gian, phòng, nhóm, loại, ẩn, hiện, chọn, thu phóng
from: 69de4ab7
---

## Bạn sẽ làm gì

Xem mô hình được ghép như thế nào và tới được bất kỳ cấu kiện nào mà không phải tìm trong 3D: công trình, các tầng, các không gian trên mỗi tầng, và các cấu kiện trong đó, được nhóm theo loại (tường, cửa đi, sàn…).

## Các bước

1. Mở một mô hình IFC. {{ui:Model tree}} bên trái mở xuống đến các tầng.
2. Nhấp mũi tên bên cạnh một hàng để mở hoặc đóng nó. Một tầng chứa các không gian của nó trước, rồi đến các cấu kiện theo loại kèm số lượng. Một cấu kiện gồm nhiều phần, như cầu thang, chứa các phần của nó.
3. Bỏ đánh dấu ô của một hàng để ẩn mọi thứ trong nó; đánh dấu lại để hiện. Ô có dấu gạch ngang nghĩa là chỉ một phần những gì bên trong được hiện.
4. Nhấp tên một hàng để chọn thứ nó đại diện: một cấu kiện, hoặc mọi cấu kiện trong một nhóm, tầng hoặc không gian. {{key:Mod}}+click thêm chúng vào vùng chọn, hoặc bỏ chúng ra.
5. Nhấp nút {{ui:i}} bên cạnh một tầng, không gian hoặc công trình để xem thuộc tính riêng của nó.
6. Nhấp đúp một hàng để phóng to tới nó.

## Bạn sẽ thấy gì

- Khi bạn chọn một cấu kiện trong khung nhìn 3D, cây mở xuống tới nó và đánh dấu nó.
- Các cấu kiện bị ẩn được gạch ngang. Các ô đánh dấu của cây và {{ui:Show}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) làm việc cùng nhau: xem [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate).
- Các cấu kiện mà mô hình không đặt trong tầng nào nằm trong một nhóm ở cuối, **Không nằm trong cấu trúc không gian**.
- Một nhóm dài hiện 200 hàng mỗi lần; nhấp **Hiện thêm** bên dưới nó để xem phần còn lại.

## Phím

Khi tên một hàng đang có tiêu điểm: {{key:Up}} và {{key:Down}} di chuyển, {{key:Right}} mở, {{key:Left}} đóng hoặc đi lên, {{key:Space}} đánh dấu ô, {{key:Enter}} chọn.

## Lỗi thường gặp

- **Ô của một tầng được đánh dấu nhưng không thấy gì.** Danh sách {{ui:Storeys}} bên dưới cây tự tắt toàn bộ tầng: hãy đánh dấu cả ở đó.
- **Một hàng không chọn được gì.** Một số hàng, như một không gian trống, không có cấu kiện nào có thể vẽ; dòng trạng thái sẽ nói điều đó.

## Tiếp theo

- [Xóa, cắt, sao chép và dán cấu kiện công trình](topic:edit-elements)
- [Hiện và ẩn tầng, không gian và cạnh](topic:storeys-and-spaces)
