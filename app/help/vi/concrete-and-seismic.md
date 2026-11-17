---
title: Kiểm tra cấu kiện bê tông và tạo tải trọng động đất
summary: Thiết lập các thanh của dầm và cột bê tông của mô hình đang mở, kiểm tra theo ACI 318-19, tạo lực ngang tương đương theo ASCE 7-22 trên sàn cứng, và xem chuyển vị tầng. Công cụ hỗ trợ kỹ sư kiểm tra.
keywords: bê tông, bê tông cốt thép, ACI 318, ACI 318-19, thép thanh, dầm, cột, lực cắt, đai, động đất, lực ngang tương đương, ELF, ASCE 7-22, chuyển vị, chuyển vị tầng, sàn, màng cứng, trọng lượng tầng, tỷ số sử dụng, kết cấu, kỹ sư, phân tích
from: 2f342e72
---

Các khối {{ui:Cấu kiện bê tông}} và {{ui:Tải trọng động đất}} trong thẻ {{ui:Phân tích}} kiểm tra dầm và cột bê tông cốt thép của IFC đang mở, và tạo các lực ngang của động đất tác dụng lên các sàn của khung. Chúng là cùng các khối với DetailCraft, chạy sau phân tích của thẻ {{ui:Phân tích}}, và được lưu trong IFC cùng các thiết lập phân tích khác.

:::warning
Kết quả **dành cho kỹ sư kiểm tra**: chỉ là công cụ hỗ trợ cho đến khi một kỹ sư đã xem xét. Các kiểm tra bê tông dùng nội lực bậc nhất (một cột trong khung bạn gọi là không lắc được thiết kế cho mô men đã khuếch đại của nó), không có khuếch đại lắc, không có thiết kế xoắn, không có cấu tạo chống động đất (chương 18 của ACI) và không có chi tiết đai. Tải trọng động đất bỏ qua hệ số dư, hiệu ứng động đất theo phương đứng, khuếch đại xoắn và hiệu ứng P-delta. **Tải trọng gió chưa được xây dựng**: các chương gió của tiêu chuẩn không có trong trang tham chiếu của dự án.
:::

## BimCraft đọc gì

Phân tích đọc dầm, cột và thanh giằng của mô hình cùng với tiết diện của chúng (xem [Phân tích khung kết cấu](topic:frame-analysis)). Khối {{ui:Cấu kiện bê tông}} liệt kê mọi tiết diện chúng dùng. Nhấn {{ui:Thiết lập là bê tông…}} trên một tiết diện là bê tông: BimCraft lấy một hình chữ nhật từ diện tích và độ cứng của tiết diện (chiều rộng b và chiều cao h mà bạn có thể thay đổi sau), nên một tiết diện không gần hình chữ nhật (một thép hình cán) cho ra kích thước bạn phải hiệu chỉnh, hoặc bị bỏ qua.

Một tiết diện được thiết lập là bê tông, và mọi cấu kiện có vật liệu tên là bê tông, đều được phân tích như bê tông: E = 4700 √f′c, 2400 kg/m³, và theo mặc định với **tiết diện nứt** (cột 0.70 Ig, dầm 0.35 Ig; ACI 318-19 Bảng 6.6.3.1.1(a)). Chọn {{ui:Tiết diện nguyên}} để tắt điều đó. Không có các thiết lập này thì mô hình được phân tích đúng như trước.

## Thanh, tổ hợp, kiểm tra

Nhập lớp bê tông bảo vệ, thanh trên, thanh dưới và thanh bên (hoặc khung thép của cột) và đai của mỗi tiết diện, đặt f′c, fy, fyt, K và khung có lắc hoặc không lắc. Gán loại cho các trường hợp tải, nhấn {{ui:Tạo tổ hợp}} (ASCE 7 §5.3.1) và rồi {{ui:Kiểm tra bê tông}}: mỗi cấu kiện có một tỷ số sử dụng, được tô trên mô hình. Các cấu kiện vượt khả năng chịu tải, và chuyển vị tầng vượt giới hạn, được liệt kê trong {{ui:Sự cố}} kèm điều khoản của chúng; nhấp vào một mục để chọn cấu kiện.

## Sàn và tải trọng động đất

Trong khối {{ui:Tải trọng động đất}}, {{ui:Tìm các sàn}} lấy các cao độ nơi hai dầm trở lên gặp nhau; mỗi cao độ thành một màng cứng. {{ui:Lấy trọng lượng từ các trường hợp}} đọc trọng lượng động đất của mỗi sàn từ các trường hợp bạn cho một hệ số. Điền SDS, SD1, S1, R, Ie, Cd, TL, hệ kết cấu và nhóm rủi ro, rồi {{ui:Tạo các trường hợp động đất}} (ASCE 7-22 12.8: chu kỳ, lực cắt đáy, phân bố lên các sàn, và 5 % xoắn ngẫu nhiên). Lực tầng và kiểm tra chuyển vị tầng (12.12) hiện sau khi chạy. Cùng chu kỳ và độ cứng tầng này cũng cung cấp dữ liệu cho động đất trong [Phát lại lũ, gió hoặc động đất](topic:hazard-playback) khi bạn chọn khung phân tích làm nguồn.

Sàn và tường bê tông trở thành các tấm trong phân tích, và khối {{ui:Cốt thép sàn}} tính lượng thép chúng cần trên mỗi mét. Chi tiết của mọi kiểm tra có trong chủ đề cùng tên của DetailCraft.
