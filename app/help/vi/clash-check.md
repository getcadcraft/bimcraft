---
title: Kiểm tra va chạm
summary: Tìm những nơi các cấu kiện của một bộ va vào cấu kiện của bộ khác — ống gió xuyên dầm, tường đâm vào sàn — trong một mô hình hoặc nhiều mô hình, với dung sai, và biến một va chạm thành một vấn đề.
keywords: va chạm, phát hiện va chạm, kiểm tra va chạm, va chạm cứng, xuyên thấu, va đập, phối hợp, chồng lấn, dung sai, mep, kết cấu
from: 9cb12346
---

## Bạn sẽ làm gì

Tìm những nơi hai bộ cấu kiện va vào nhau, ví dụ mọi thứ trong mô hình hệ thống so với kết cấu, rồi xem từng nơi và giữ lại những nơi quan trọng làm vấn đề.

## Các bước

1. Mở một mô hình IFC, và thêm các mô hình khác bằng {{ui:Add a model…}} nếu bạn kiểm tra qua nhiều mô hình. Xem [Xem nhiều mô hình IFC cùng lúc](topic:several-models).
2. Mở {{ui:Clash check}} trong bảng bên trái.
3. Trong {{ui:Check}} và {{ui:Against}}, chọn hai bộ: các cấu kiện bạn đã chọn, một lớp (trên mọi mô hình đang mở), một bộ tìm kiếm đã lưu (xem [Tìm cấu kiện theo lớp, tên hoặc thuộc tính](topic:find)), hoặc tất cả.
4. Đặt mức chồng lấn cần bỏ qua, tính bằng mét. 0.01 bỏ qua các cấu kiện chỉ vừa chạm nhau.
5. Nhấn {{ui:Run}}. Kiểm tra chạy ở nền; {{ui:Cancel}} dừng nó.
6. Nhấn một kết quả để xem: hai cấu kiện được chọn và hiển thị, mọi thứ khác được xuyên thấu, và khung nhìn phóng tới chúng.
7. Nhấn {{ui:Make an issue of it}} dưới một kết quả để ghi lại trong thẻ {{ui:Issues}}. Xem [Vấn đề và tệp BCF](topic:issues-bcf).

## Bạn sẽ thấy gì

- Các va chạm được liệt kê kèm tên của cả hai cấu kiện (và tệp của chúng khi nhiều mô hình đang mở) và mức độ chồng lấn sâu bao nhiêu, sâu nhất trước.
- Các mặt chỉ chạm nhau, chẳng hạn tường đứng trên sàn hoặc cửa nằm trong lỗ cửa, không phải là va chạm.

## Cần biết

- Đây là kiểm tra va chạm cứng cơ bản: các cấu kiện có bề mặt cắt nhau. Một cấu kiện nằm hoàn toàn bên trong cấu kiện khác (ống chôn trong tường) chưa được tìm thấy.
- Độ sâu là mức chồng lấn nhỏ nhất của biên hai cấu kiện: một chỉ dẫn, không phải phép đo chính xác.

## Tiếp theo

- [Đo khoảng cách, diện tích mặt và vị trí trong 3D](topic:measure)
- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
