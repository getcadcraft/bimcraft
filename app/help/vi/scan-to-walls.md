---
title: Tường và cửa từ quét bằng điện thoại hoặc laser
summary: Biến bản quét một phòng thành các tường, cửa và phòng đề xuất mà bạn chấp nhận từng cái một.
keywords: quét, quét bằng điện thoại, lidar, đám điểm, tường từ quét, cửa từ quét, quét phòng, ply, e57, las, obj, gợi ý
from: a4ef0f10
---

## Nó làm gì

Khi một bản quét đang mở (đám điểm như PLY, E57 hoặc LAS, hoặc lưới như OBJ), BimCraft cắt bản quét ở chiều cao mặt bằng, xoay nó thẳng góc với công trình, và tìm các dãy điểm dài, mỏng: đó là tường. Một khoảng hở cỡ chiều rộng cửa giữa hai dãy trên cùng một đường sẽ thành một tường có một cửa trong đó. Các tường khép kín một không gian sẽ tạo thành một phòng.

Chưa có gì được vẽ cho đến khi bạn chấp nhận. Tường và cửa đến dưới dạng danh sách đề xuất (là các thay đổi ở chế độ Gợi ý): giữ những cái đúng, từ chối những cái khác, và mọi thứ bạn giữ lại được vẽ trong một bước hoàn tác. Các phòng tự xuất hiện.

## Nó kiểm tra gì

Tường không khép kín, các dãy tường ngắn hơn độ dày tường, và khoảng hở cỡ cửa không có tường bao quanh được báo cáo là Vấn đề kèm vị trí, để bạn xem bản quét tại đó.

## Chưa được xác minh cho đến khi kiểm tra

Các tường, cửa và phòng bạn chấp nhận từ bản quét được đánh dấu là chưa xác minh: một hộp nét đứt và dấu "?" trên mặt bằng cho đến khi bạn đánh dấu là đã kiểm tra. Xem [Đánh dấu cấu kiện đã kiểm tra hoặc đã xác minh tại hiện trường](topic:verification).

## Nó không làm được gì

- Nó tìm các tường chạy theo hai hướng vuông góc. Tường chéo hoặc cong không được tìm thấy.
- Một tầng mỗi lần. Cửa sổ không được tìm thấy (cửa sổ chỉ là khoảng hở khi cắt ở chiều cao bậu cửa sổ).
- Nó đã được thử trên bản quét và lưới phòng được tạo ra, chưa thử trên bản quét từ điện thoại thật. Mức độ tốt của nó trên bản quét thật (trôi lệch qua một quãng đi bộ dài, đồ đạc dựa vào tường, kính, cửa đang mở) chưa rõ, và việc điều chỉnh trên bản quét thật là bước tiếp theo. Hãy kiểm tra mọi đề xuất với bản quét trước khi chấp nhận.
