---
title: Gợi ý khi vẽ: kích thước bất thường vẫn được tạo, kèm cảnh báo
summary: BimCraft tạo đúng những gì bạn yêu cầu. Kích thước ngoài mức thông thường sẽ thành cảnh báo trong Sự cố; nó không bao giờ ngăn bạn vẽ hoặc lưu.
keywords: gợi ý, cảnh báo, sự cố, bị từ chối, không vẽ được, quá nhỏ, quá hẹp, tối thiểu, giới hạn, chiều rộng cầu thang, alzơ, mặt bậc, cột, dốc, kích thước cửa đi, đường lưới, chiều cao tầng, cửa sổ mái, cầu thang xoắn, độ dốc nền, tường ngắn, không có rào chắn
from: 20090130
---

## Bạn sẽ làm gì

Vẽ một kích thước không phải là kích thước thông thường, và xem BimCraft cho bạn biết về nó ở đâu.

## Các bước

1. Vẽ hoặc thay đổi cấu kiện như bạn muốn: ví dụ một cầu thang rộng 400 mm.
2. BimCraft tạo nó đúng như yêu cầu.
3. Mở {{ui:Sự cố}} trên thanh trên cùng. Dưới **Gợi ý khi vẽ** có một cảnh báo nêu tên cấu kiện, kích thước bạn đã nhập và phạm vi thông thường.
4. Nhấp cảnh báo để chọn cấu kiện. Đổi kích thước nếu đó là nhầm lẫn, hoặc giữ nguyên: một cảnh báo có thể được chấp nhận, có hoặc không kèm lý do.

## Gợi ý là gì

Trước đây những thứ này bị từ chối. Giờ chúng được tạo, mỗi cái kèm một cảnh báo:

- **Cầu thang**: hẹp hơn 500 mm hoặc rộng hơn 5 m; alzơ ngoài khoảng 100 đến 300 mm; mặt bậc ngoài khoảng 150 đến 600 mm.
- **Cầu thang xoắn**: trụ ngoài khoảng 40 đến 400 mm; mặt bậc sâu dưới 100 mm trên đường đi bộ.
- **Cột**: rộng dưới 50 mm hoặc cao dưới 300 mm.
- **Dốc**: rộng dưới 300 mm.
- **Cửa đi và cửa sổ**: rộng hoặc cao dưới 100 mm.
- **Đường lưới**: dài dưới 100 mm.
- **Tường**: một tường bị để lại dài dưới 50 mm, ví dụ sau khi cắt.
- **Tầng**: cao dưới 1 m hoặc trên 100 m (tòa nhà mới, tầng lệch, chiều cao của một tầng).
- **Cửa sổ mái**: rộng ngoài khoảng 600 mm đến 12 m, tường mặt trước ngoài khoảng 300 mm đến 4 m, phần nhô ra trên 1 m, tường ngoài khoảng 50 đến 400 mm.
- **Nền công trình**: độ dốc mái ngoài khoảng 1:1 đến 10:1.

## Vẫn bị từ chối

Chỉ những gì không thể xây dựng hoặc không tìm thấy, mỗi cái kèm một thông báo nêu lý do:

- Kích thước dưới 10 mm (tường dưới 1 mm): không có gì để xây dựng.
- Cửa sổ mái không rộng hơn hai lần độ dày tường của nó: hai tường bên sẽ gặp nhau.
- Nền công trình có độ dốc mái dốc hơn 0.1:1 (đó là tường chắn) hoặc thoải hơn 100:1 (việc san nền sẽ chạy mãi không dừng).
- Thứ gì đó không vừa với vị trí bạn đặt, một đường bao tự cắt chính nó, hoặc một cấu kiện không còn trong mô hình.

## Cần biết

- Gợi ý được tính từ mô hình, nên nó vẫn hiện lại khi bạn mở tệp sau này, và nó biến mất khi kích thước được sửa đúng.
- Kiểm tra mô hình, bộ quy định và kiểm tra IDS cũng chỉ liệt kê những gì chúng tìm thấy. Không có gì trong {{ui:Sự cố}} ngăn bạn vẽ hoặc lưu.
- Phạm vi thông thường là thực hành chung, không phải quy chuẩn xây dựng. Để có quy chuẩn, thêm tiện ích bổ sung Quy định xây dựng và chọn địa điểm của bạn.

## Tiếp theo

- [Kiểm tra mô hình để tìm các vấn đề thường gặp](topic:model-checks)
- [Cầu thang và lan can](topic:stairs-and-railings)
