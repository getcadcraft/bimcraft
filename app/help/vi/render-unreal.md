---
title: Gửi cảnh tới công cụ trò chơi
summary: Studio có thể ghi cảnh vào một dự án Unreal Engine và giữ cho nó đồng bộ ở mỗi lần gửi; các chỉnh sửa của bạn nằm trong một lớp mà CadCraft không bao giờ ghi. Plug-in mở nó chưa được phát hành.
keywords: unreal, unreal engine, công cụ trò chơi, liên kết, gửi, stage usd, dự án, live, camera cine, hàng đợi kết xuất phim
from: 154d55ef
---

Trong CadCraft Studio, danh sách công cụ có thể chứa một **liên kết** tới dự án Unreal Engine. Chỉ một chiều: từ CadCraft sang Unreal.

## Gửi cảnh

1. Chọn mục Unreal trong danh sách công cụ. Lần đầu tiên, Studio yêu cầu bạn chọn thư mục dự án (thư mục có tệp `.uproject`); Studio ghi nhớ thư mục đó.
2. Nhấp {{ui:Gửi}}. Studio ghi `CadCraft/<tên tệp>/` bên trong dự án: cảnh dưới dạng tệp USD, tệp cài đặt, hồ sơ ánh sáng, và hai tệp lớp nhỏ.
3. Thay đổi mô hình, lưu và gửi lại. Chỉ cảnh và tệp cài đặt được thay thế.

## Các chỉnh sửa của bạn được giữ an toàn

Stage mà Unreal mở là một lớp gốc nhỏ được tạo một lần, với hai lớp nằm dưới nó: lớp **của bạn** ở trên (`<name>.user.usda`, lúc đầu trống, không bao giờ bị CadCraft ghi lại) và cảnh của CadCraft ở dưới. Các chỉnh sửa bạn lưu vào lớp riêng sẽ được giữ lại khi cảnh được gửi lại. Đèn và các actor khác bạn đặt trong level Unreal nằm ngoài stage và cũng không bị ảnh hưởng.

## Không có Studio

Trên trình duyệt, hoặc trên máy tính mà Studio không tìm thấy Unreal, chọn **Thư mục dự án Unreal (.zip)** trong danh sách công cụ và nhấp {{ui:Kết xuất}}. Nó lưu cùng thư mục dưới dạng zip: giải nén vào thư mục `CadCraft` của dự án. Giữ **Bao gồm các tệp stage** bật ở lần đầu; tắt khi lưu về sau, để tệp zip chỉ chứa cảnh và tệp cài đặt, và lớp riêng của bạn không bao giờ bị thay thế.

:::note
Plug-in Unreal mở stage, áp dụng mặt trời, đèn, camera và độ phơi sáng, theo dõi mỗi lần gửi và kết xuất một camera **chưa được phát hành** và chưa được chạy trong Unreal. Cho đến khi có, Gửi đặt các tệp vào dự án và các công cụ USD của chính Unreal có thể mở chúng. Windows là hệ điều hành đầu tiên; macOS theo sau.
:::
