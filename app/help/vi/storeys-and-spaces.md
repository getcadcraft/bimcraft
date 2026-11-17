---
title: Ẩn và hiện tầng, không gian và cạnh
summary: Tắt tầng để nhìn vào bên trong công trình, hiện phòng và không gian, và bật hoặc tắt các đường cạnh.
keywords: tầng, mức, sàn, ẩn, cô lập, phòng, không gian, ifcspace, cạnh, hiển thị, mặt cắt
from: b838dcc0
---

## Bạn sẽ làm gì

Nhìn vào bên trong một mô hình IFC bằng cách tắt các tầng phía trên tầng bạn quan tâm, rồi hiện các phòng và không gian, và tắt các đường cạnh để nhìn gọn hơn.

## Các bước: xem một tầng

1. Mở một mô hình IFC. Xem [Mở mô hình IFC và xem trong 3D](topic:open-ifc-model).
2. Tìm danh sách {{ui:Tầng}} ở bên trái. Tầng cao nhất ở đầu, giống như đọc mặt cắt từ mái xuống.
3. Bỏ chọn mái và mọi tầng phía trên tầng bạn muốn xem.
4. Nhấp {{ui:Trên}} để nhìn xuống tầng đó.
5. Chọn lại các tầng để đưa chúng trở lại.

## Bạn sẽ thấy gì

Mỗi tầng bạn bỏ chọn biến mất ngay, cùng mọi thứ trên đó. Danh sách chỉ hiển thị các tầng có thứ gì nhìn thấy được. Các phần tử không được gán cho tầng nào được gom thành **Không thuộc tầng nào** ở cuối; phần tử cảnh quan và một số đồ nội thất thường nằm ở đó.

## Các bước: hiện phòng và không gian

1. Nhấp {{ui:Không gian}} trên thanh công cụ phía trên mô hình. Nút sẽ giữ trạng thái được nhấn.
2. Nhìn mô hình: phòng và không gian hiện ra thành khối nhạt, xuyên thấu.
3. Nhấp một không gian để đọc các thuộc tính của nó, như tên, số hiệu và diện tích, ở bên phải.
4. Nhấp {{ui:Không gian}} lần nữa để ẩn chúng.

Không gian được ẩn khi mô hình mở ra, vì nếu không chúng sẽ che tường và sàn.

## Các bước: cạnh

1. Nhấp {{ui:Cạnh}} để tắt các đường cạnh mảnh.
2. Nhấp lại để bật chúng.

Trên mô hình rất lớn (trên 1.5 triệu tam giác), nút bị mờ với gợi ý "Cạnh đã tắt cho mô hình rất lớn". Việc này giúp tiết kiệm bộ nhớ.

## Lỗi thường gặp

- **Bỏ chọn một tầng nhưng vẫn thấy một phần của nó.** Một phần tử thuộc về tầng mà chương trình xuất đã gán nó vào. Tường cao hoặc cầu thang thường chỉ thuộc tầng gốc, nên nó vẫn còn khi tầng phía trên bị ẩn, hoặc biến mất cùng tầng bên dưới.
- **Ẩn tầng để nhìn vào bên trong.** Hộp cắt thường nhanh hơn: xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane#a-section-box). Bạn cũng có thể bỏ chọn các dòng trong {{ui:Cây mô hình}} (xem [Tìm đường trong cây mô hình](topic:model-tree)).
- **Nhấp vào một không gian xuyên qua tường.** Nhấp chọn bề mặt nhìn thấy gần nhất. Ẩn tầng phía trên, hoặc chuyển sang {{ui:Trên}}, rồi nhấp.
- **Tên tầng trông lạ.** BimCraft hiển thị tên tầng được lưu trong tệp. Nếu chúng ghi "Level 1" hoặc một số, đó là những gì trình xuất đã ghi.
