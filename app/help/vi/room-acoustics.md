---
title: Kiểm tra độ vang của phòng và nghe thử
summary: Thời gian vang theo dải quãng tám cho mỗi phòng (Sabine và Eyring) từ kích thước và lớp hoàn thiện, một mục tiêu do bạn đặt, và giọng nói, tiếng vỗ tay hoặc nhạc được phát qua đáp ứng xung đã tính của phòng.
keywords: âm học, độ vang, thời gian vang, rt60, sabine, eyring, hấp thụ, tiếng vọng, âm thanh, nghe, đáp ứng xung, lời nói, lớp học, văn phòng, thảm, tấm trần, tiếng ồn
from: 16996cbb
---

Mục {{ui:Âm học phòng}} của bảng bên trái tính xem âm thanh ngân vang trong mỗi phòng lâu bao lâu. Mục này đọc diện tích sàn, chiều cao, tường, cửa đi và cửa sổ của mỗi phòng từ mô hình IFC đang mở. Không có gì trong mô hình bị thay đổi.

## Chọn lớp hoàn thiện

Khi mô hình cho biết bề mặt được phủ bằng gì, phòng sẽ đọc thông tin đó: lớp bên trong của kiểu tường mỗi tường (thạch cao, trát, gạch, bê tông và khối xây được nhận biết), loại sàn (gỗ hoặc bê tông) và trần có ốp gạch hay không. Nhãn cạnh mỗi lựa chọn cho biết nó lấy từ mô hình, là mặc định hay do bạn chọn; chọn một hoàn thiện khác để ghi đè. Những gì mô hình không nêu thì giữ mặc định. Các hệ số là **giá trị công bố điển hình**; thay bằng dữ liệu thử nghiệm của sản phẩm khi bạn có. Nhập một **mục tiêu** (độ vang trung tần lâu nhất bạn muốn) và mọi phòng vượt quá sẽ có cảnh báo, kèm độ hấp thụ cần thêm để đưa độ vang xuống.

## Đọc bảng

Độ vang được cho từ 125 Hz đến 4 kHz. Sabine phù hợp với phòng vang, Eyring phù hợp với phòng ít vang; dòng đánh dấu *Đã dùng* chọn Eyring khi độ hấp thụ trung bình trên 0.2. Độ hấp thụ của không khí được tính vào (nó làm ngắn các dải tần cao trong phòng lớn). Đây là mô hình thống kê: nó giả định âm thanh lan đều, nên phòng dài hoặc phẳng và phòng rất nhỏ chỉ là hướng dẫn gần đúng, còn đồ đạc, người và cửa đang mở không được tính.

## Nghe

{{ui:Phát trong phòng này}} phát một giọng nói (tạo tại đây), tiếng vỗ tay, các nốt gảy hoặc **tệp âm thanh của bạn** (tệp vẫn nằm trên máy tính) qua một đáp ứng xung được tính cho phòng: âm trực tiếp, các phản xạ đầu tiên của một hộp có kích thước đó, và phần đuôi tắt dần theo thời gian vang của chính phòng ở mỗi dải. {{ui:Phát nguyên bản}} phát cùng âm thanh ở cùng mức nhưng không có phòng. Bạn có thể lưu đáp ứng xung hoặc âm thanh trong phòng dưới dạng tệp WAV. Nó nghe như một phòng có kích thước và hoàn thiện đó, không giống phòng thực nào.

## Người và đồ đạc

Nhập số **người trong phòng này** để cộng độ hấp thụ của họ. Đồ đạc có trong mô hình (sofa, giường, ghế, bàn, tủ quần áo, nhận diện theo tên) cộng độ hấp thụ riêng. Các con số là giá trị lập kế hoạch thô, đã làm tròn; hãy thay bằng số đo cho phòng quan trọng.

## Nguồn âm và người nghe

Dưới {{ui:Nguồn âm và người nghe}}, nhấn {{ui:Đặt nguồn âm}} hoặc {{ui:Đặt người nghe}} rồi nhấp lên mặt bằng của phòng. Âm thanh bạn phát khi đó sẽ được nghe từ vị trí đó: âm trực tiếp đến sau một khoảng cách, và phần vang có mức theo khoảng cách đó. Xóa cả hai để quay lại ô khoảng cách.

## Hấp thụ không đều và mode phòng

Dưới {{ui:Hấp thụ không đều (phòng hình hộp)}}, nhập phòng dưới dạng hình hộp và chọn lớp hoàn thiện sàn, trần và tường. Bảng bổ sung Fitzroy và Arau-Puchades vào Sabine và Eyring: chúng xử lý riêng ba cặp mặt đối diện, nên phòng có thảm và trần cứng không bị đọc là quá ngắn. Khi các cặp khác nhau nhiều, một ghi chú cho biết nên tin cặp nào. Dưới bảng, **Mode phòng** liệt kê các sóng dừng thấp nhất của hộp và tần số mà dưới đó phòng có các mode riêng thay vì trường âm đều. Đây là dự đoán cho phòng hình hộp, là công cụ hỗ trợ thiết kế chứ không phải phép đo.

## Đơn vị

Diện tích, chiều cao, thể tích và khoảng cách của phòng được hiển thị theo {{ui:Đơn vị}} bạn đã chọn (feet vuông và feet khối, inch, milimét, xentimét hoặc mét). Phép tính vẫn theo SI; chỉ phần hiển thị thay đổi. Thời gian (giây), tần số và mức không thay đổi.
