---
title: Đăng ký nhiều bản quét thành một
summary: Đặt các bản quét chụp từ những vị trí khác nhau vào một hệ chung bằng các cặp điểm đã chọn hoặc mục tiêu nhập tay, tinh chỉnh bằng ICP, lưu phép đăng ký thành dự án, và xuất đám điểm đã đăng ký dưới dạng LAS hoặc E57.
keywords: đăng ký, sự đăng ký, bản quét, đám điểm, icp, điểm gần nhất lặp, mục tiêu, cặp điểm, biến đổi cứng, căn chỉnh, gộp, e57, las, quét sang bim
from: e8e270db
---

## Bạn sẽ làm gì

Nhiều bản quét của cùng một nơi (mỗi bản chụp từ vị trí máy quét riêng) ban đầu đều nằm trong tọa độ riêng của chúng. Đăng ký chúng: cho mỗi bản quét một vị trí để tất cả nằm trong một hệ chung, rồi lưu thành dự án và ghi đám điểm đã đăng ký thành một tệp LAS hoặc E57.

## Đặt các bản quét

1. Mở hộp thoại ({{ui:Đăng ký các bản quét…}} trên bảng khởi đầu, hoặc {{ui:Hiển thị}} › {{ui:Đăng ký các bản quét…}} khi đã mở một mô hình). {{ui:Thêm bản quét…}} nhận các tệp LAS, LAZ, E57, PLY, PCD, PTX, PTS hoặc XYZ, hoặc thả chúng lên hộp thoại. Các bản quét dùng đơn vị khác nhau sẽ bị từ chối kèm ghi chú: cần chuyển đổi một bản trước.
2. Chọn {{ui:Bản quét cần di chuyển}} và {{ui:Đặt theo}}. Hình hiển thị mọi bản quét trong hệ chung đúng như hiện tại, mỗi bản một màu: {{ui:Mặt bằng}}, {{ui:Trước}} hoặc {{ui:Bên}}; kéo để di chuyển khung nhìn, dùng con lăn chuột để thu phóng.
3. **Theo cặp điểm.** Nhấp {{ui:Chọn một cặp}}, rồi chọn một điểm trên bản quét cần di chuyển, sau đó chọn đúng vị trí đó trên bản quét khác (một góc, một mục tiêu, chân cột). Làm việc này ít nhất ba lần, với các điểm không thẳng hàng và được trải rộng. Nhấp {{ui:Đặt theo cặp}}: bản quét được đặt bằng phép khớp bình phương tối thiểu, và **Chênh lệch còn lại** cho thấy mỗi cặp còn lệch bao nhiêu. Cặp có số lớn là chọn sai: xóa cặp đó bằng dấu ×, rồi đặt lại.
4. **Theo mục tiêu.** Nếu biết tọa độ thật của một điểm (mục tiêu đã đo đạc), nhấp {{ui:Chọn, rồi nhập mục tiêu}}, nhấp điểm đó trên bản quét, rồi nhập X, Y và Z của mục tiêu vào hàng. Cặp điểm và mục tiêu nhập tay có thể dùng lẫn với nhau tự do.

## Tinh chỉnh bằng ICP

Các cặp điểm cho một vị trí gần đúng. {{ui:Tinh chỉnh}} di chuyển bản quét cho đến khi các bề mặt của nó khớp với bề mặt của bản quét kia: trước hết là **điểm tới điểm**, sau đó là **điểm tới mặt phẳng**. Bảng liệt kê mọi bước cùng sai số và số điểm đã khớp; dòng phía trên vẽ sai số giảm dần. {{ui:Dừng}} kết thúc lượt chạy sau bước đang thực hiện và giữ lại kết quả đã đạt được. {{ui:Hoàn tác}} hoàn tác toàn bộ lượt chạy (hoặc lần đặt cuối); {{ui:Đặt lại}} đưa bản quét về tọa độ trong tệp của nó.

Để chạy nhanh trên máy tính xách tay, ICP làm việc trên một phần đã giảm bớt của các điểm ({{ui:Số điểm dùng}}, 5,000 đến 60,000) và bỏ qua các cặp khớp xa hơn {{ui:Khoảng cách khớp lớn nhất}} (mặc định là 5% kích thước bản quét, thu nhỏ dần khi ổn định). Trước tiên cần một vị trí gần đúng: các bản quét hầu như không chồng lấn sẽ báo rằng không thể khớp. Các bề mặt chỉ phẳng hoặc chỉ thẳng không thể cố định vị trí dọc theo chính chúng; trong trường hợp đó nên thêm các cặp điểm.

## Lưu và xuất

- {{ui:Lưu dự án}} ghi một tệp `.ccscans.json` nhỏ: tên, dung lượng của mỗi bản quét và dấu vân tay của 64 KB đầu tiên, cùng phép biến đổi của nó. Tệp không chứa điểm nào. {{ui:Mở dự án…}} tìm các tệp bản quét theo những tham chiếu đó (các tệp phải được thêm trước) và khôi phục mọi phép biến đổi.
- {{ui:Xuất LAS}} và {{ui:Xuất E57}} ghi một tệp với mọi bản quét ở vị trí đã đăng ký. Các điểm trong bản gốc không bao giờ bị ghi lại; phép biến đổi được áp dụng khi xuất. Khi bật {{ui:Đọc mọi điểm từ các tệp}}, mỗi tệp được đọc lại cho từng điểm (tối đa 20 triệu điểm mỗi bản quét); khi tắt, chỉ ghi các điểm hiển thị trong trình xem.
- {{ui:Hiển thị đám điểm đã đăng ký}} (BimCraft) ghi tệp LAS và mở nó trong khung nhìn 3D cạnh mô hình, như mọi đám điểm khác.

:::note
**Không có gì được tải lên.** Việc đăng ký làm việc theo đơn vị của chính các tệp và giữ nguyên milimét: tệp LAS được ghi với tỷ lệ phù hợp (tới 0.1 mm), tệp E57 ghi bằng kiểu double. Hệ tọa độ chỉ được đưa vào tệp LAS khi mọi bản quét đều ghi cùng một mã EPSG. Bộ ghi E57 là bộ ghi tự phát triển; nó được kiểm tra bằng cách đọc lại các tệp bằng trình đọc này và bằng libE57Format.
:::
