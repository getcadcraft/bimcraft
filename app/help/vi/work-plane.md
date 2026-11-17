---
title: Mặt phẳng làm việc: đặt, hiện, nhìn thẳng vào nó
summary: Mặt phẳng làm việc là mặt phẳng mà đường mô hình, văn bản mô hình và Trình xem mặt phẳng làm việc sử dụng. Đặt nó theo một cốt, một mặt, một mặt phẳng tham chiếu đã đặt tên hoặc một đường; hiện nó trong các khung nhìn; mở trình xem để vẽ trên mặt phẳng đứng.
keywords: mặt phẳng làm việc, đặt mặt phẳng làm việc, hiện mặt phẳng làm việc, mặt phẳng tham chiếu, trình xem mặt phẳng làm việc, mặt phẳng đã đặt tên, mặt, cốt, mặt phẳng đứng, mặt phẳng thẳng đứng, vẽ trên tường, bản vẽ mặt đứng, bắt điểm, căn chỉnh, ref plane
from: 8aceee1d
---

## Bạn sẽ làm gì

Chọn mặt phẳng bạn vẽ lên, xem nó ở đâu, và vẽ trên một mặt phẳng đứng.

## Các bước

1. Bật **Vẽ** và mở menu **Xây dựng** (trong bố cục dải lệnh: thẻ Kiến trúc, Mặt phẳng làm việc).
2. Chọn **Đặt mặt phẳng làm việc**. Sau đó làm một trong các cách sau:
   - chọn một cốt trong **Đặt thành**;
   - chọn một mặt phẳng tham chiếu đã đặt tên trong danh sách bên cạnh;
   - nhấp vào một đường trong mặt bằng: tường, đường lưới, mặt phẳng tham chiếu, đường mô hình hoặc hệ tường kính. Mặt phẳng làm việc trở thành mặt phẳng đứng đi qua đường đó;
   - nhấp vào một mặt phẳng trong khung nhìn 3D. Mặt phẳng làm việc nằm trên mặt đó.
3. Chọn **Hiện mặt phẳng làm việc** để xem: một tấm tô màu nhẹ với lưới mét trong khung nhìn 3D, một đường viền hoặc đường nét đứt trong mặt bằng, và một đường viền nét đứt trong bảng mặt đứng và mặt cắt. Chọn lại để ẩn.
4. Chọn **Trình xem mặt phẳng làm việc** để nhìn thẳng vào mặt phẳng. Các đường màu đen là mô hình bị mặt phẳng cắt qua. Dùng các công cụ của nó để vẽ đường mô hình, văn bản mô hình hoặc mặt phẳng tham chiếu trên mặt phẳng. **Nhìn trong 3D** xoay khung nhìn 3D để đối diện mặt phẳng.

## Mặt phẳng tham chiếu

Mặt phẳng tham chiếu là một mặt phẳng có tên mà bạn vẽ bằng một đường.

1. Chọn **Mặt phẳng tham chiếu**. Nhập tên trong hàng của nó nếu bạn muốn đặt (nếu không, tên sẽ được đặt tự động) và nhập chiều cao.
2. Nhấp vào điểm bắt đầu và điểm kết thúc của nó. Trong mặt bằng, thao tác này tạo một mặt phẳng đứng. Trong Trình xem mặt phẳng làm việc, nó tạo một mặt phẳng vuông góc với mặt phẳng làm việc.
3. Nó hiện như một đường xanh lá nét đứt kèm tên trong mặt bằng, một đường viền nét đứt trong khung nhìn 3D và trong bảng mặt đứng và mặt cắt.
4. Chọn nó để đổi tên, thay đổi chiều dài, chiều cao và chân của nó, hoặc nhấn **Dùng làm mặt phẳng làm việc**.

Hai mặt phẳng tham chiếu không thể có cùng tên, vì tên là cách bạn chọn một mặt phẳng.

## Cần biết

- Mô hình chưa đặt mặt phẳng làm việc sẽ làm việc trên cốt thấp nhất của nó.
- Mặt phẳng làm việc được lưu trong tệp. Việc hiện hay ẩn nó được ghi nhớ trong trình duyệt này, không phải trong tệp.
- Nếu mặt phẳng làm việc theo một mặt phẳng tham chiếu và bạn di chuyển mặt phẳng đó, mặt phẳng làm việc cũng di chuyển theo.
- Trên mặt phẳng làm việc đứng, các công cụ Đường mô hình và Văn bản mô hình mở trình xem, vì mặt bằng không thể trỏ tới một chiều cao.
- Các công cụ vẽ bắt điểm cuối của mặt phẳng tham chiếu được vẽ trong mặt bằng giống như cách chúng bắt điểm cuối của các đường khác trong trình xem.

## Trong tệp IFC

- Mặt phẳng làm việc là một bộ thuộc tính (CadCraft_WorkPlane) trên dự án.
- Mặt phẳng tham chiếu là một IfcAnnotation với kiểu đối tượng ReferencePlane và tên của nó. Hình dạng của nó là đường viền khép kín của mặt phẳng, nên chương trình khác vẫn thấy vị trí của nó. Bộ CadCraft_ReferencePlane của nó chứa gốc, hướng, pháp tuyến và phạm vi. IFC không có lớp đối tượng riêng cho mặt phẳng tham chiếu; chú thích không được tính là cấu kiện công trình và không giới hạn phòng.
