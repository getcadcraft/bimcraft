---
title: Mảng pin mặt trời, bóng đổ và sản lượng
summary: Lắp mảng pin mặt trời trên mái hoặc mặt đất, tính bóng đổ từ mô hình, ước tính năng lượng hằng năm, định cỡ chuỗi và tạo dữ liệu sơ đồ một sợi. Mọi đầu vào đều được hiển thị, còn tấm pin khởi đầu và các tổn thất là chung chung.
keywords: năng lượng mặt trời, pv, quang điện, mảng, tấm pin, mái, bóng đổ, sản lượng, kwh, kwp, định cỡ chuỗi, biến tần, sơ đồ một sợi, sơ đồ đơn tuyến, độ nghiêng, góc phương vị, khoảng cách hàng
from: adf4aaf3
---

## Bạn sẽ làm gì

Mở ngăn **Năng lượng mặt trời (PV)**. Chọn một mặt mái (độ nghiêng và hướng của nó được đọc từ mô hình) hoặc đặt một mảng trên mặt đất với độ nghiêng và hướng; các tấm pin được lắp bên trong với khoảng lùi và được đếm, cho công suất DC tính bằng kWp. Đặt mảng sẽ ghi nó vào mô hình dưới dạng thiết bị năng lượng mặt trời, trong một bước hoàn tác.

## Bóng đổ, sản lượng và chuỗi

- **Bóng đổ** phóng một tia từ mỗi tấm pin hướng về mặt trời, trong các ngày điển hình của mỗi tháng, đối chiếu với hình học của chính mô hình, nên các tòa nhà lân cận, tường chắn mái và các hàng phía trước đều được tính. Chỉ ánh nắng trực tiếp bị giảm, và một mảng bị che một phần sẽ mất công suất theo tỷ lệ.
- **Sản lượng** cho kWh theo tháng và năm, kWh trên mỗi kWp, và tỷ số hiệu suất. Dữ liệu nắng là tổng hằng tháng của chính bạn trên mặt phẳng ngang, nếu bạn nhập chúng. Nếu không có chúng, ngăn dùng một cận trên trời quang và nói rõ điều đó. **Lấy khí hậu từ NASA POWER** bằng một nút trên thẻ Sản lượng: nó chỉ gửi vĩ độ và kinh độ của khu đất, một lần, và giữ câu trả lời trên máy tính này (đã kiểm tra từ trình duyệt vào 2026-10-30). PVGIS không cho phép trang web đọc câu trả lời của nó, nên thẻ đưa ra một liên kết mở dữ liệu theo tháng của PVGIS cho khu đất trong tab mới; dán những gì nó hiển thị vào ô và mười hai tháng sẽ được điền.
- **Chuỗi** kiểm tra số tấm pin trong mỗi chuỗi theo dải điện áp của biến tần vào ngày lạnh nhất và nóng nhất, và các chuỗi song song theo dòng điện của nó.
- **Sơ đồ một sợi** tạo dữ liệu sơ đồ (mảng, hộp hợp dòng, công tắc ngắt, biến tần, bảng điện, lưới điện) với kích thước dây và cầu chì theo các hệ số bạn nhập. Đó là dữ liệu và một SVG; tiện ích bổ sung Điện trong CadCraft có thể đặt chúng thành ký hiệu.

Các tấm pin, biến tần, tổn thất và hệ số dây đi kèm BimCraft là các ví dụ chung, được ghi nhãn trong mọi kết quả. Hãy nhập dữ liệu của nhà sản xuất và các giá trị theo quy chuẩn bạn thiết kế, rồi để người chịu trách nhiệm về thiết kế xem lại.
