---
title: Thêm một công cụ kết xuất bằng tiện ích bổ sung
summary: Tiện ích bổ sung có thể thêm gì vào danh sách Công cụ của hộp thoại Kết xuất, quyền cần có để chạy một chương trình, và những gì Studio kiểm tra và hỏi.
keywords: tiện ích bổ sung, addon, công cụ, công cụ kết xuất, nhà phát triển, engine.run, quyền, chương trình, kịch bản, đã ký, studio, api
from: 06295376
---

Một tiện ích bổ sung (Cài đặt › Tiện ích bổ sung) có thể thêm một công cụ vào danh sách công cụ của {{ui:Kết xuất}}. Toàn văn dành cho tác giả tiện ích bổ sung là mục 16 của đặc tả tiện ích bổ sung; tóm lại:

- Tiện ích bổ sung đăng ký một công cụ với một mã định danh bắt đầu bằng mã riêng của nó, một tên, các cài đặt tùy chọn và **hoặc** một chương trình để chạy **hoặc** một hàm JavaScript vẽ ảnh.
- Công cụ chạy một chương trình cần quyền **`engine.run`**, được hiển thị trước khi cài đặt và trong Cài đặt. Công cụ chỉ chạy trong Studio; trên trình duyệt, nó hiển thị như một tệp để lưu.
- Tiện ích bổ sung nêu tên chương trình (chỉ là tên tệp thông thường, không bao giờ là shell), một kịch bản **nằm bên trong tiện ích bổ sung đã ký**, và các đối số gồm các chỗ giữ chỗ và từ thông thường. Studio tìm chương trình hoặc yêu cầu bạn chỉ đến chương trình đó một lần.
- Lần đầu tiên một tiện ích bổ sung chạy một chương trình, **Studio hỏi bạn trong hộp thoại riêng của nó**: tiện ích bổ sung nào, chương trình nào, và rằng một kịch bản có thể làm bất cứ điều gì chương trình làm được. Chỉ cho phép với tiện ích bổ sung bạn tin cậy. Lựa chọn của bạn được ghi nhớ cho tiện ích bổ sung và chương trình đó.
- Gói (cảnh dưới dạng USD và một tệp cài đặt, cùng tệp glTF khi tiện ích bổ sung yêu cầu) và kịch bản của tiện ích bổ sung được đưa vào một thư mục tạm mới; chương trình chạy ở đó, và ảnh trả về được đánh dấu bằng tên công cụ của tiện ích bổ sung.

:::note
Tiện ích bổ sung chỉ có thể thêm công cụ kết xuất từ API tiện ích bổ sung 1.4. Một ví dụ mẫu cho một bộ kết xuất dòng lệnh mã nguồn mở nằm trong kho mã riêng của nó; ví dụ này chưa được chạy trên bộ kết xuất đó.
:::
