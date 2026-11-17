---
title: So sánh bản quét với mô hình và lịch tiến độ 4D
summary: Đánh giá từng cấu kiện của mô hình so với một đám điểm đang mở (đã xây, xây một phần, thiếu, chưa tới), xem phần trăm đã xây, tô màu mô hình theo đó, và với lịch tiến độ 4D đã tải, liệt kê những gì đang chậm hoặc nhanh hơn so với ngày 4D.
keywords: bản quét, đám điểm, tiến độ, phần trăm hoàn thành, đã xây, thiếu, chậm tiến độ, nhanh tiến độ, 4D, tiến độ công trường, độ lệch, hoàn công, quét laser, drone, so sánh
from: 6fdc9003
---

Mở một IFC, mở một đám điểm bên cạnh (xem [Đám điểm](topic:point-clouds)) và đặt nó lên mô hình. Mục {{ui:So sánh bản quét với mô hình}} xuất hiện trong bảng bên phải khi có đám điểm đang mở.

## Nó làm gì

Nhấn {{ui:So sánh}}. Mỗi cấu kiện của mô hình được đánh giá theo bề mặt của nó, vì đó là thứ máy quét nhìn thấy. Sáu mặt của hộp bao được chia thành các ô khoảng 20 cm; một ô được tính khi một điểm quét nằm trong {{ui:Dung sai}} của bạn (50 mm ban đầu) tính từ mặt. Mặt lớn nhất tốt nhất được tính, nên một bức tường được quét từ một phía không bị phạt vì phía còn lại.

- **Đã xây**: ít nhất 40 % bề mặt được nhìn thấy.
- **Xây một phần**: từ 10 % đến 40 %.
- **Thiếu**: ít hơn thế, nhưng máy quét có tới cấu kiện (các điểm trong vòng 1.5 m của nó).
- **Chưa tới**: máy quét chưa từng đến đó, nên không có kết luận nào về nó.

Với các cấu kiện đã xây và xây một phần, nó cũng đưa ra độ lệch trung bình của các điểm quét so với bề mặt mô hình, và cho biết cấu kiện nằm đúng vị trí (trong dung sai), gần (trong vòng ba lần) hay lệch (xa hơn). Nó chỉ thấy độ lệch đến năm lần dung sai; một cấu kiện được xây xa vị trí của nó hơn mức đó sẽ bị coi là thiếu.

Tóm tắt cho biết phần trăm đã xây trong số các cấu kiện mà máy quét tới được, theo số lượng và theo thể tích. Các cấu kiện xây một phần được đếm riêng và không cộng vào số đã xây.

## So với lịch tiến độ 4D

Khi đã tải lịch tiến độ 4D (xem [Lịch tiến độ 4D](topic:4d-schedule)), kết quả cũng dùng ngày bạn đã đặt trên thanh trượt 4D: các cấu kiện đến hạn đến ngày đó mà máy quét không cho thấy là đã xây thì **chậm tiến độ**; các cấu kiện chưa đến hạn mà đã xây thì **nhanh tiến độ**. Các cấu kiện chậm tiến độ được liệt kê trong {{ui:Sự cố}}, và bảng có thể lọc theo chúng. Không có lịch tiến độ thì không có kết luận nào về chậm hay nhanh.

## Bảng và mô hình

Nhấp một hàng để chọn cấu kiện. {{ui:Tô màu mô hình}} tô các cấu kiện màu xanh lá (đã xây), cam (xây một phần), đỏ (thiếu) hoặc xám (chưa tới); {{ui:Màu riêng}} trả lại màu cũ. {{ui:Lưu CSV}} ghi bảng ra tệp. Đánh dấu các cấu kiện khớp là đã xác minh tại hiện trường đánh dấu mọi cấu kiện được thấy là đã xây và nằm trong dung sai là đã xác minh tại hiện trường (LOD 500, phương pháp quét), trong một bước mà bạn có thể hoàn tác. Xem [Đánh dấu cấu kiện đã kiểm tra hoặc đã xác minh tại hiện trường](topic:verification).

:::warning
Phần này so sánh hộp của từng cấu kiện với các điểm quét trong một dung sai. Nó **không phải là khảo sát, không phải bóc tách khối lượng hay cơ sở thanh toán**. Một cấu kiện bị che khuất so với một cấu kiện đã quét (một bức tường phía sau lớp ốp, một sàn dưới lớp hoàn thiện sàn) chia sẻ bề mặt của nó và có thể được đọc là đã xây; một cấu kiện cong hoặc nghiêng có hộp lớn hơn thân của nó và có thể được đọc là xây một phần hoặc thiếu. Hãy xem danh sách trước khi hành động. Ghi chú cấp phép và ghi chú tiến độ không thuộc phần này: chúng nằm trong các cột bạn giữ.
:::

Một trợ lý có thể chạy cùng phép so sánh bằng công cụ {{ui:So sánh bản quét với mô hình}}; nó không thay đổi gì trong mô hình.
