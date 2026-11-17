---
title: Kiểm tra sưởi và làm mát bằng mô phỏng năng lượng
summary: Ghi mô hình thành tệp EnergyPlus, hoặc chạy EnergyPlus phiên bản 26.2.0 trên đó trong trình duyệt, và so sánh tải thiết kế với công cụ ước tính nhanh về sưởi và làm mát. Đây là đánh giá thứ hai cho giai đoạn thiết kế sơ bộ, không phải tính toán tuân thủ.
keywords: energyplus, mô phỏng năng lượng, ngày thiết kế, tải sưởi, tải làm mát, tệp thời tiết, epw, idf, khối nhiệt, năng lượng hằng năm, mô phỏng
from: b82a5bf2
---

## Bạn sẽ làm gì

Bảng **Kiểm tra với EnergyPlus** ghi mô hình đang mở thành một tệp đầu vào EnergyPlus (IDF): mỗi phòng là một vùng, các tường, sàn, mái và cửa sổ kèm hệ số U, số lần trao đổi không khí, và hệ thống sưởi và làm mát lý tưởng. Bạn luôn có thể **lưu tệp đó** và chạy trong EnergyPlus của riêng mình.

Nếu bạn cũng thiết lập bộ mô phỏng, bảng có thể mô phỏng ngay tại chỗ và liệt kê tải sưởi và làm mát thiết kế của EnergyPlus cạnh công cụ ước tính nhanh, theo từng phòng.

Đây là công cụ hỗ trợ thiết kế. Quy chuẩn năng lượng, chứng nhận và giấy phép cần một công cụ được phê duyệt và dữ liệu khí hậu mà nó yêu cầu, và kết quả cần được người chịu trách nhiệm xem xét.

## Thiết lập bộ mô phỏng

BimCraft không đi kèm EnergyPlus. Đây là một bản dựng WebAssembly lớn (khoảng 6 MB đã nén, cộng thêm tệp dữ liệu 4.6 MB), nên bạn tự lưu trữ và nhập địa chỉ của nó vào bảng. Trang chỉ tải nó khi bạn nhấn nút mô phỏng, không bao giờ khi khởi động. Địa chỉ phải là https, một đường dẫn trên trang này, hoặc localhost.

## Ngày thiết kế hoặc một năm

- **Mô phỏng ngày thiết kế** không cần tệp thời tiết. Nó chạy một ngày đông lạnh không có nắng và một ngày hè nóng, quang đãng ở các nhiệt độ trong đầu vào sưởi và làm mát của thẻ Ánh sáng tự nhiên, và báo cáo tải của từng phòng bằng watt.
- **Mô phỏng một năm** cần một tệp thời tiết định dạng EPW mà bạn chọn. Nó thêm người, đèn và thiết bị từ cùng đầu vào (luôn bật, vì không có lịch nào được đặt thêm), và báo cáo năng lượng sưởi và làm mát của từng phòng bằng kWh. Tệp thời tiết có giấy phép riêng, nên hãy dùng tệp mà bạn được phép dùng.

## Khối nhiệt

Đánh dấu chọn **Cho tường có các lớp đã biết khối nhiệt**, và các tường, mái, sàn có lớp vật liệu đã biết sẽ được ghi theo từng lớp, với mật độ và nhiệt dung riêng lấy từ một bảng ngắn các giá trị điển hình theo tên vật liệu. Các lớp được lấy từ bên ngoài trước, theo thứ tự tệp liệt kê. Cấu kiện không có lớp sẽ giữ hệ số U và không có khối nhiệt.

## Đọc kết quả so sánh

Hai phương pháp trả lời các câu hỏi hơi khác nhau. Công cụ ước tính nhanh giữ mọi cấu kiện; tệp EnergyPlus lấy trung bình hệ số U của từng phòng theo loại bề mặt. Chênh lệch trên 15 % ở tải sưởi thiết kế của một phòng được liệt kê thành ghi chú trong bảng ⚠, kèm cả hai con số. Tải làm mát khác nhau nhiều hơn theo thiết kế: công cụ ước tính nhanh tính đỉnh từ nắng vào một ngày, còn EnergyPlus tính kích thước theo ngày thiết kế của riêng nó.
