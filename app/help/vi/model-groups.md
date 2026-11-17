---
title: Nhóm mô hình
summary: Gộp các cấu kiện đã chọn thành một nhóm có tên, đặt lại nhóm ở nơi khác, và đổi một bản sao để đổi tất cả.
keywords: nhóm, nhóm mô hình, gộp nhóm, hủy nhóm, thể hiện, sao chép, lặp lại, đơn vị điển hình, nhịp, căn hộ, chỉnh sửa nhóm, IfcGroup
from: 121c5027
---

## Bạn sẽ làm gì

Gộp một nhịp điển hình, đặt nó nhiều lần, và đổi mọi bản sao bằng cách đổi một bản.

## Công cụ nằm ở đâu

- Bố cục dải lệnh: {{ui:Architecture}} › **Mô hình** › {{ui:Model Group}}.
- Bố cục cổ điển: thanh Vẽ › menu {{ui:Rooms}} › Nhóm mô hình.

## Các bước

1. Với công cụ Chọn, chọn các cấu kiện: nhấp một cái, Ctrl+click hoặc Shift+click các cái khác.
2. Chọn {{ui:Model Group}}. Chúng thành một nhóm ngay. Nhập {{ui:Group name}} trong hàng trước để đặt tên, hoặc nhập sau để đổi tên.
3. Nhấn {{ui:Place another}} và nhấp nơi bản sao nên đứng: góc dưới bên trái của nó đi tới điểm nhấp.
4. Đổi bất kỳ bản sao nào: di chuyển đầu tường, đổi kích thước cửa, xóa một cột. Mọi bản sao khác của nhóm đổi trong cùng bước, và một lần hoàn tác lấy lại tất cả.
5. Khi Nhóm mô hình đang được chọn làm công cụ, một lần nhấp vào cấu kiện sẽ chọn cả nhóm của nó.

## Việc khác bạn có thể làm

- {{ui:Add the picked}}: thêm cấu kiện vào nhóm bạn chọn lần cuối.
- {{ui:Ungroup}}: bản sao này thành các cấu kiện thông thường. Các bản sao khác vẫn là một nhóm.
- Di chuyển cả một bản sao bằng lệnh {{ui:Move}}: nó vẫn là cùng nhóm ở vị trí mới; các bản khác không di chuyển.
- Xóa các cấu kiện của một bản sao thì bản sao đó biến mất.

## Nhóm có thể chứa gì

Tường cùng cửa đi và cửa sổ của nó, cột và sàn đã vẽ có thể đặt lại và giữ giống nhau. Nhóm có thể chứa cả cấu kiện khác, nhưng khi đó nó chưa thể đặt lại; hàng đó nêu lý do.

Bản sao được di chuyển, không xoay hay đối xứng.

## Trong IFC

Nhóm là một IfcGroup với IfcRelAssignsToGroup tới các thành viên, và các thành viên vẫn là tường, cột và sàn thông thường. Mọi bản sao của một nhóm mang cùng một định nghĩa id.

## Chưa xây dựng

- Xoay hoặc đối xứng một bản sao.
- Cầu thang, mái, sàn phòng và mục thư viện trong một nhóm được đặt lại.
- Biên dạng, độ nghiêng của tường và lỗ mở tường không được truyền tới các bản sao.
- Nhóm nằm trong nhóm.

Xem thêm [Di chuyển, căn chỉnh và phân bố](topic:move-align-distribute).
