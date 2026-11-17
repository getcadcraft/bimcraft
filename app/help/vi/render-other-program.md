---
title: Vẽ ảnh bằng chương trình khác
summary: Bộ dò đường tích hợp sẵn vẽ ảnh Kết xuất; chương trình khác chỉ vẽ được qua một tiện ích bổ sung công cụ kết xuất trong CadCraft Studio. Những gì được chuyển sang, và lý do một số chương trình không bao giờ được đề xuất.
keywords: kết xuất, công cụ, chương trình bên ngoài, công cụ của tiện ích bổ sung, studio, nền, hàng đợi, usd, gltf, vẽ bởi, blender, gpl
from: 652b413c
---

Ảnh trong {{ui:Kết xuất}} được vẽ bởi **các công cụ tích hợp sẵn**: Nhanh và Bộ dò đường, trên trình duyệt và trong CadCraft Studio. Chương trình khác chỉ có thể vẽ ảnh khi một **tiện ích bổ sung công cụ kết xuất** đưa nó vào: xem [Thêm một công cụ kết xuất bằng tiện ích bổ sung](topic:render-engine-addons). Để chuyển cảnh sang chương trình khác và tiếp tục làm việc ở đó, dùng [Mở cảnh trong chương trình khác](topic:render-open-in) hoặc [Gửi cảnh tới công cụ trò chơi](topic:render-unreal).

## Vẽ ảnh bằng công cụ của một tiện ích bổ sung

1. Bật tiện ích bổ sung trong Cài đặt › Tiện ích bổ sung. Công cụ của nó xuất hiện trong danh sách công cụ của {{ui:Kết xuất}}.
2. Chọn nó. Các cài đặt riêng của nó hiển thị bên dưới danh sách công cụ.
3. Nhấp {{ui:Kết xuất}}. Trong Studio, lần đầu tiên một tiện ích bổ sung chạy một chương trình, Studio hỏi bạn trong hộp thoại riêng của nó. Tiến trình hiển thị khi nó đang vẽ; {{ui:Dừng}} kết thúc việc đó. Ảnh xuất hiện với dấu của công cụ đã vẽ nó.

Công cụ viết bằng JavaScript cũng chạy trong trình duyệt. Công cụ chạy một chương trình trên máy tính này chỉ chạy trong Studio; trên trình duyệt, nó hiển thị như một tệp để lưu.

## Những gì được chuyển sang

Công cụ nhận một **gói**: mô hình dưới dạng tệp USD (và tệp glTF khi nó yêu cầu), cùng một tệp cài đặt với các giá trị vật liệu chính xác, mặt trời và bầu trời, mọi đèn đang bật cùng công suất và hồ sơ ánh sáng của nó, camera và độ phơi sáng. Mỗi chương trình chiếu sáng, chỉnh tông và lấy mẫu theo cách riêng, nên các ảnh giống nhau về góc máy, mặt trời, đèn và độ phơi sáng, nhưng không giống nhau từng điểm ảnh.

## Các chương trình CadCraft không bao giờ chạy

CadCraft không bao giờ khởi chạy chương trình theo giấy phép GNU GPL, và không bao giờ liệt kê chương trình nào như một công cụ hoặc đích của Mở bằng … . Blender là một trong số đó, nên nó không có trong danh sách công cụ. Tệp USD hoặc glTF được lưu từ {{ui:Kết xuất}} vẫn mở được trong Blender như trong mọi chương trình đọc các tệp đó.

:::note
Camera toàn cảnh và camera lập thể, cùng ảnh bầu trời (thay vào đó dùng màu của bầu trời) không được chuyển sang chương trình khác. Không có gì làm trong chương trình khác được trả về mô hình.
:::
