---
title: Trình duyệt, thiết bị và bộ nhớ
summary: Điểm khác nhau của BimCraft giữa Chrome, Edge, Firefox và Safari, trên Mac, Windows và Linux, với chuột, bàn di chuột hoặc cảm ứng, và kích thước tệp tối đa có thể mở.
keywords: trình duyệt, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, máy tính bảng, điện thoại, cảm ứng, bàn di chuột, bộ nhớ, tệp lớn, webgl, hiệu năng
from: fd8acba1
---

BimCraft chạy trên các phiên bản hiện tại của Chrome, Edge, Firefox và Safari, trên Mac, Windows và Linux. Chế độ xem 3D cần WebGL, mà mọi trình duyệt hiện tại đều có. Xem [Trình duyệt và máy tính](common:browsers) để biết nói chung ứng dụng cần những gì.

## Mở thư mục

| Trình duyệt | {{ui:Mở thư mục}} làm gì | Kéo thư mục vào | {{ui:Thư mục gần đây}} |
|---|---|---|---|
| Chrome, Edge | Trình chọn thư mục của trình duyệt, rồi hỏi "Cho phép trang xem tệp?": nhấp **Xem tệp** | Mở không hỏi | Có, với thư mục đã chọn hoặc đã kéo vào |
| Firefox | Trình chọn thư mục của hệ thống | Mở không hỏi | Không |
| Safari | Trình chọn thư mục của hệ thống, có nút **Tải lên** (không tải gì lên) | Mở không hỏi | Không |

Phía sau, Chrome và Edge dùng trình chọn File System Access và có thể nhớ thư mục. Firefox và Safari dùng trình chọn thư mục cũ hơn, giao mọi tệp trong thư mục cùng lúc và không thể nhớ. Thư mục được kéo vào được đọc từng mục một trong mọi trình duyệt.

:::chromium
Brave và một số trình duyệt Chromium khác tắt trình chọn thư mục. Khi đó BimCraft dùng trình chọn thư mục của hệ thống thay thế, và trình duyệt có thể hỏi "Tải lên *n* tệp lên trang này?". Không có gì được tải lên; tệp chỉ đi vào thẻ. Kéo thư mục vào sẽ tránh câu hỏi này.
:::

## Mac, Windows và Linux

- Phím tắt viết {{key:Mod+S}} và {{key:Mod+Z}} là Command trên Mac và Ctrl trên Windows và Linux.
- {{key:Ctrl+Shift+F}} (chế độ màn hình) là Control trên mọi nền tảng, kể cả Mac.
- Hộp thoại tệp và thư mục tải xuống là của hệ thống bạn.

## Chuột, bàn di chuột và cảm ứng

| Thiết bị nhập | Chế độ xem 3D | Bản vẽ 2D |
|---|---|---|
| Chuột | Kéo trái để xoay, kéo phải để di chuyển, cuộn để thu phóng, nhấp để chọn | Kéo bất kỳ để di chuyển, cuộn để thu phóng, nhấp đúp để {{ui:Vừa khung}} |
| Bàn di chuột | Nhấp rồi kéo để xoay; {{key:Shift}} hoặc {{key:Mod}} rồi kéo để di chuyển; cuộn hai ngón hoặc chụm để thu phóng | Nhấp rồi kéo để di chuyển; cuộn hai ngón hoặc chụm để thu phóng |
| Cảm ứng | Một ngón để xoay, hai ngón chụm và di chuyển, chạm để chọn | Một ngón để di chuyển; chưa có chụm để thu phóng; chạm {{ui:Vừa khung}} |

Trên bàn di chuột Mac, nhấp chuột phải là nhấp bằng hai ngón (hoặc Control-click). Xem [Phím, chuột và bàn di chuột](common:keys).

Máy tính bảng và điện thoại có thể mở từng tệp đơn lẻ và xem, nhưng màn hình nhỏ, nhiều trình duyệt di động không thể chọn thư mục, và mô hình lớn có thể không vừa bộ nhớ của chúng. Máy tính cho kết quả tốt nhất.

## Tệp lớn và bộ nhớ

Mọi thứ BimCraft đọc đều nằm trong bộ nhớ của thẻ trình duyệt. Thẻ có thể dùng bao nhiêu phụ thuộc vào trình duyệt và máy tính của bạn nhiều hơn vào BimCraft.

| Tệp | Lượng được đọc | Điều cần biết |
|---|---|---|
| IFC | Toàn bộ tệp, cộng với hình học 3D dựng từ tệp | Tùy máy tính và trình duyệt; mô hình vài trăm megabyte có thể quá sức với laptop. Trên 1.5 triệu tam giác thì tắt cạnh |
| Tệp dự án và họ | Khoảng 40 KB đến 100 KB, bất kể kích thước | Ngay cả mô hình trung tâm rất lớn cũng mở trong chốc lát, kể cả từ ổ mạng |
| DWG và DXF | Toàn bộ tệp | Bản vẽ rất lớn hiển thị "Bản vẽ này rất lớn; chỉ hiển thị một phần." |
| Thư mục | Danh sách tệp, cộng vài kilobyte cho mỗi mô hình | Tối đa 20.000 tệp |

Nếu thẻ hết bộ nhớ, trình duyệt hiển thị trang lỗi riêng của nó (ví dụ "Aw, Snap!" trong Chrome). Đóng các thẻ khác, tải lại BimCraft rồi thử lại, hoặc dùng máy tính có nhiều bộ nhớ hơn.

## Liên quan

- [Trực tuyến và ngoại tuyến](topic:online-offline)
- [Khắc phục sự cố](topic:troubleshooting)
