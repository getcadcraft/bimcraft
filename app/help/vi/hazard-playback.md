---
title: Mô phỏng lũ, gió hoặc động đất trên công trình
summary: Nước dâng qua các phòng, áp lực gió lên từng tầng, hoặc động đất làm rung các tầng, được phát trên mặt bằng hoặc mặt đứng với thanh trượt thời gian. Mô hình đơn giản, liệt kê các giả định của chúng; không phải kiểm tra theo quy chuẩn hay thiết kế kết cấu.
keywords: nguy cơ, lũ, gió, động đất, địa chấn, trôi, lắc, lực cắt đáy, mực nước, khí hậu, kịch bản, mực nước biển, phát lại, tầng, chu kỳ
from: ff0d34d1
---

Mục {{ui:Hazard playback}} của bảng bên trái phát một nguy cơ trên mô hình IFC đang mở. Không có gì trong mô hình bị thay đổi.

:::warning
Đây là **các mô hình đơn giản để xem một nguy cơ tác động thế nào lên bố cục này**, không phải nghiên cứu lũ, kiểm tra quy chuẩn gió hay thiết kế kết cấu. Mỗi kết quả đều liệt kê các giả định của nó.
:::

## Lũ

Đặt mực nước cao nhất trên sàn thấp nhất và số phút để nước dâng, giữ và rút. Nước vào một phòng qua một lỗ mở mà ngưỡng cửa của nó đã bị nước vượt qua, và các phòng nối với phòng ngập nước qua các lỗ mở dưới mực nước sẽ có cùng mức nước (bán tĩnh). Bảng cho biết khi nào mỗi phòng bị ngập lần đầu và sâu bao nhiêu; mặt bằng phát lại diễn biến đó. Nhập lượng nước tối đa một phòng có thể chịu, và các phòng vượt mức đó sẽ hiện cảnh báo. **Khí hậu tương lai:** tải tệp kịch bản của riêng bạn (JSON hoặc CSV có năm, mức nước biển dâng và hệ số lũ), rồi chọn một năm. Hoặc bật tiện ích bổ sung Khí hậu tương lai và chọn một kịch bản và một năm: lũ sẽ chạy hai lần, hiện tại đặt cạnh tương lai (xem "Khí hậu tương lai: lũ, nóng và cháy rừng năm 2050 và 2080"). Các loại Phơi nhiễm cháy rừng và Nhiệt: tệp thời tiết tương lai cũng nằm trong cùng danh sách.

## Gió

Áp lực tuân theo ½ρV², với tốc độ tăng theo chiều cao; lực tác dụng lên một tầng là áp lực đó nhân với hệ số giật, hai hệ số áp lực, chiều rộng và chiều cao tầng. Bạn nhận được lực cắt, mô men lật và độ lắc.

## Động đất

Một công trình cắt: một khối lượng cho mỗi sàn (diện tích mặt bằng × kg trên mỗi mét vuông, do bạn đặt), cùng một độ cứng ở mọi tầng được điều chỉnh theo chu kỳ đầu tiên bạn nhập (mặc định một phần mười giây cho mỗi tầng nếu bạn để trống, và chương trình sẽ nói rõ điều đó), giảm chấn, và một chuyển động nền giả lập (một xung hoặc nhiễu đã lọc) ở gia tốc đỉnh bạn chọn. Kết quả là độ trôi của mỗi tầng, gia tốc của sàn và lực cắt đáy; mặt đứng thể hiện độ lắc, được vẽ phóng đại hơn thực tế. Nhập tỷ lệ trôi bạn cho phép và các tầng vượt mức đó sẽ hiện cảnh báo. Đây là đàn hồi: không có gì chảy hay nứt.

## Độ cứng sàn từ khung Phân tích

Với động đất hoặc độ lắc do gió, chọn **Khung Phân tích** làm nguồn độ cứng thay vì nhập một chu kỳ. Mỗi sàn được đẩy ngang lần lượt, khung (dầm, cột, giằng và sàn) được giải, và độ cứng của các sàn khi mọi thứ làm việc cùng nhau sẽ điều khiển lượt chạy. Trọng lượng là trọng lượng của chính các cấu kiện cộng với tải sàn trên mỗi mét vuông bạn đặt trong ô của mặt bằng từng tầng. Chu kỳ đầu tiên thực tế được hiển thị. Đây là đàn hồi: không có gì chảy, và xoắn không được mô hình hóa. Với gió, các lực theo tầng vẫn là các lực giả định ở trên (dạng phân bố luật lũy thừa, hệ số giật của bạn và các hệ số áp lực cố định, không phải quy chuẩn gió); chỉ độ lắc đến từ khung, bằng cách giải ma trận độ cứng đầy đủ của khung với các lực đó. Mô hình cần một tệp IFC có khung mà thẻ Phân tích đọc được.

## Đơn vị

Độ sâu nước, độ lắc và độ trôi theo từng tầng, khoảng cách và diện tích được hiển thị theo {{ui:Units}} bạn đã chọn. Lực (kN), thời gian và gia tốc giữ đơn vị riêng, và giá trị bạn nhập trong một ô ghi bằng mét vẫn ở mét. Điều này cũng áp dụng cho kết quả sơ tán, ánh sáng ban ngày, sưởi và làm mát và bố trí nội thất: chiều dài, diện tích và thể tích theo lựa chọn của bạn; áp suất, lưu lượng, nhiệt độ, năng lượng và công suất không bao giờ được quy đổi.
