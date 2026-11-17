---
title: Đợt phát hành, sửa đổi và nhật ký thay đổi bản vẽ
summary: Ghi lại mỗi bộ tờ bạn giao, xem điều gì đã thay đổi kể từ đó trên từng tờ và từng cấu kiện, và giữ chỉ dẫn công trường, bản vẽ thi công xưởng và mô hình liên kết gắn với đợt phát hành mà chúng thuộc về.
keywords: đợt phát hành, bộ đã phát hành, bộ đã nộp, nộp, sửa đổi, các sửa đổi, thay đổi từ, sau đợt phát hành, nhật ký thay đổi, nhật ký thay đổi bản vẽ, sổ đăng ký bản vẽ, phiếu chuyển giao, chỉ dẫn công trường, bản vẽ thi công xưởng, mô hình liên kết, dự thầu, thi công, ảnh chụp, so sánh
from: 4c732832
---

## Bạn sẽ làm gì

Ghi nhận một đợt phát hành: những tờ nào đã được gửi đi, vào ngày nào, với mục đích gì, mỗi tờ ở sửa đổi nào. Sau đó, hỏi điều gì đã thay đổi kể từ đợt phát hành đó. Giữ chỉ dẫn công trường và bản vẽ thi công xưởng đã nhận lại gắn với đợt phát hành.

## Các bước

1. Trong bảng bên trái, mở **Đợt phát hành và sửa đổi**.
2. Chọn **Ghi nhận một đợt phát hành**. Sửa đổi được gợi ý (A, rồi B; sửa đổi có số như P1 sẽ tăng dần). Chọn mục đích phát hành, gửi cho ai, ngày và các tờ. Khi giai đoạn dự án đã được đặt, mục đích theo giai đoạn đó. Khi gói giấy phép có danh sách tài liệu kèm theo, các tờ liên kết với danh sách đó sẽ được đánh dấu sẵn cho bạn.
3. Giữ **Đồng thời lưu bản sao mô hình như đã phát hành** được đánh dấu để giữ mô hình đúng như đã được gửi đi. Bản sao được tải xuống; tên, kích thước và SHA-256 của nó được lưu cùng đợt phát hành.
4. Chọn **Ghi nhận đợt phát hành này**. Một tờ đã thay đổi kể từ lần phát hành trước sẽ nhận sửa đổi mới. Một tờ không thay đổi giữ sửa đổi đang có. Khung tên của mỗi tờ hiển thị sửa đổi của nó.
5. Để xem điều gì đã thay đổi, chọn **Thay đổi từ** bên cạnh một đợt phát hành. Mỗi tờ hiển thị Giống hoặc Đã thay đổi, kèm các cấu kiện được thêm, thay đổi và gỡ bỏ trên tờ đó. Nhấp vào một số đếm để chọn các cấu kiện đó.
6. Chọn **Thêm bản ghi** cho một chỉ dẫn công trường, một bản vẽ thi công xưởng, một bộ đánh dấu, một mô hình liên kết hoặc một ghi chú. Chọn đợt phát hành mà nó thuộc về. Tệp bạn chọn được ghi lại theo tên, kích thước và SHA-256; tệp vẫn nằm ở nơi nó đang có.
7. **Nhật ký thay đổi bản vẽ** hiển thị một hàng cho mỗi tờ và một cột cho mỗi đợt phát hành. **Tải nhật ký thay đổi (CSV)** lưu nó cùng các đợt phát hành và bản ghi.
8. **Lưu lịch sử đợt phát hành** ghi một tệp `.issues.json`. MarkupCraft, TakeoffCraft và DetailCraft đọc tệp này bằng **Đọc lịch sử đợt phát hành**.

## Điều cần biết

- Lịch sử được giữ bên trong tệp IFC (bộ thuộc tính `CadCraft_Issues` trên dự án). Các chương trình khác bỏ qua nó.
- Một tờ được tính là đã thay đổi khi chính thiết lập của nó thay đổi, hoặc khi một cấu kiện nó thể hiện có thay đổi: mặt bằng thể hiện cao độ của nó, mặt đứng hoặc mặt cắt thể hiện toàn bộ mô hình, bảng thống kê cửa đi hoặc cửa sổ thể hiện các cửa đi hoặc cửa sổ của nó.
- Một cấu kiện được tính là đã thay đổi khi một thuộc tính, vị trí, kích thước hoặc hình dạng của nó thay đổi.
- Để xem chính xác thuộc tính nào đã thay đổi, mở bản sao đã lưu của mô hình đã phát hành bằng **So sánh phiên bản**.
- Gỡ bỏ một đợt phát hành giữ lại các bản ghi của nó, nhưng không còn đợt phát hành. Mỗi bước là một lần Hoàn tác.
- Mô hình có hơn 60.000 cấu kiện không giữ bản ghi của từng cấu kiện theo đợt phát hành. Các tờ vẫn được so sánh.

## Chưa xây dựng

- Các tờ không được lưu thành PDF cùng đợt phát hành.
- Đám mây sửa đổi không được vẽ trên các tờ của chính BimCraft. Hãy ghi đám mây trong MarkupCraft gắn với đợt phát hành.
