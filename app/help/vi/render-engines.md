---
title: Chọn chương trình nào vẽ ảnh
summary: Lựa chọn Công cụ trong hộp thoại Kết xuất: hai công cụ tích hợp sẵn, các chương trình khác trong CadCraft Studio, và những gì web làm thay thế.
keywords: kết xuất, công cụ, bộ kết xuất, công cụ kết xuất, plug-in, plugin, studio, chương trình bên ngoài, vẽ bởi, hàng đợi, công cụ của tiện ích bổ sung
from: 44a1ef5e
---

{{ui:Kết xuất}} có một lựa chọn **Công cụ** phía trên {{ui:Dạng}}. Hai công cụ tích hợp sẵn luôn có mặt và hoạt động ở mọi nơi; tiện ích bổ sung có thể thêm nhiều công cụ khác, và trong CadCraft Studio, danh sách còn chứa các chương trình tiếp quản cảnh.

| Công cụ | Chức năng | Nơi dùng |
|---|---|---|
| Tích hợp sẵn: Nhanh | Ảnh tĩnh nhanh: ánh sáng ban ngày, bóng mềm, kiểu kính và kim loại, trong vài giây | Trình duyệt và Studio |
| Tích hợp sẵn: Bộ dò đường | Ánh sáng nảy giữa các bề mặt, trên card đồ họa hoặc bộ xử lý của bạn, hàng đợi kết xuất và các máy tính khác trong mạng của bạn | Trình duyệt và Studio |
| Công cụ của một tiện ích bổ sung | Nó vẽ và trả ảnh về: xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program) | Trình duyệt (công cụ viết bằng JavaScript) hoặc Studio (công cụ chạy một chương trình) |
| Một chương trình tiếp quản cảnh | Studio đặt cảnh vào thư mục của nó và giữ cho cảnh luôn đồng bộ | Studio |
| Mở bằng … | Lưu cảnh và mở nó trong một chương trình; không có gì trả về: xem [Mở cảnh trong chương trình khác](topic:render-open-in) | Web lưu tệp |

## Lựa chọn hoạt động thế nào

- Chọn Nhanh hoặc Bộ dò đường cũng thay đổi Dạng theo, và ngược lại. Không có gì khác trong hộp thoại thay đổi đối với người không bao giờ dùng công cụ khác.
- Công cụ không khả dụng vẫn nằm trong danh sách kèm lý do ("không tìm thấy", "cần phiên bản mới hơn"); bạn không thể chọn nó. Trên trình duyệt, công cụ chỉ chạy trong Studio hiển thị "lưu tệp": {{ui:Kết xuất}} khi đó lưu cảnh và cài đặt của cảnh vào một tệp mà bạn mang đến chương trình đó.
- Lựa chọn được lưu cùng cài đặt kết xuất của tệp, và công cụ bạn chọn gần nhất là công cụ khởi đầu cho các tệp không có lựa chọn riêng.
- Ảnh từ chương trình khác ghi rõ chương trình nào đã vẽ và phiên bản của nó, trong hộp thoại và trong hàng đợi kết xuất. Các cam kết của trang [Kết xuất](topic:render) chỉ áp dụng cho **công cụ tích hợp sẵn**: chương trình khác chiếu sáng, chỉnh tông và lấy mẫu theo cách riêng, nên hai ảnh của cùng một cảnh giống nhau về góc máy, mặt trời, đèn và độ phơi sáng, nhưng không giống nhau từng điểm ảnh.

## Mỗi công cụ nhận được gì

Cảnh được chuyển cho chương trình khác dưới dạng một **gói**: mô hình dưới dạng tệp USD (cùng tệp mà [Lưu thành USD](topic:usd) ghi), và một tệp cài đặt chứa những thứ mà trình nhập USD không đáng tin cậy để xử lý: các giá trị vật liệu chính xác, các đèn đang bật cùng công suất và hồ sơ ánh sáng của chúng, mặt trời, bầu trời, độ phơi sáng và camera đúng như hộp thoại sẽ vẽ. Không có gì được tải lên bất kỳ đâu.

## Hàng đợi kết xuất

Một ảnh cho chương trình khác có thể chờ trong [hàng đợi kết xuất](topic:render#the-render-queue) như các ảnh của công cụ tích hợp sẵn; tác vụ của nó ghi nhớ công cụ nào dành cho nó.
