---
title: Mở toàn bộ thư mục dự án
summary: Trỏ BimCraft vào một thư mục dự án để thấy mọi mô hình, bản sao lưu và liên kết của chúng cùng lúc, và để hộp Bắt đầu từ đây gợi ý tệp nên làm việc.
keywords: thư mục, thư mục dự án, ổ mạng, máy chủ, bắt đầu từ đây, tệp nào, bản sao lưu, liên kết, xref, thư mục gần đây, kéo thư mục
from: 16fbdce2
---

## Bạn sẽ làm gì

Mở toàn bộ một thư mục dự án, chẳng hạn thư mục bạn được giao cho một công việc, và để BimCraft sắp xếp: có những mô hình nào, bản sao nào là bản sao lưu, cái gì liên kết với cái gì, tệp nào bị hỏng, và tệp nào bạn có khả năng muốn mở nhất.

Chỉ vài kilobyte mỗi thẻ mô hình cần được đọc, nên một thư mục trên ổ mạng hoặc thư mục đám mây được đồng bộ đều ổn.

## Các bước

:::chromium
1. Nhấp {{ui:Mở thư mục}} ở bên trái (hoặc giữa màn hình trống).
2. Chọn thư mục dự án trong cửa sổ mở ra và nhấp **Chọn** (hoặc **Tải lên** hoặc **Mở**, tùy hệ thống của bạn).
3. Nhấp **Xem tệp** khi trình duyệt hỏi "Cho phép trang xem các tệp?". Việc này chỉ cho phép thẻ đọc thư mục; không có gì được tải lên.
4. Đợi trong khi dòng trạng thái đếm: "Đang liệt kê thư mục: … tệp", rồi "Đang kiểm tra tệp Revit: … trên …".
:::

:::firefox
1. Nhấp {{ui:Mở thư mục}} ở bên trái (hoặc giữa màn hình trống).
2. Chọn thư mục dự án trong cửa sổ mở ra và xác nhận. Firefox có thể yêu cầu bạn xác nhận rằng trang được đọc các tệp của thư mục; chúng vẫn ở trên máy tính của bạn.
3. Đợi trong khi dòng trạng thái ghi "Đang đọc thư mục: … tệp", rồi "Đang kiểm tra tệp Revit: … trên …".
:::

:::safari
1. Nhấp {{ui:Mở thư mục}} ở bên trái (hoặc giữa màn hình trống).
2. Chọn thư mục dự án trong cửa sổ mở ra và nhấp **Tải lên**. Dù tên gọi như vậy, không có gì rời khỏi máy Mac của bạn: các tệp chỉ được chuyển cho thẻ.
3. Đợi trong khi dòng trạng thái ghi "Đang đọc thư mục: … tệp", rồi "Đang kiểm tra tệp Revit: … trên …".
:::

Bạn cũng có thể **kéo thư mục** từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} vào trang. Thư mục được kéo sẽ mở mà không có lời nhắc cấp quyền nào trên mọi trình duyệt.

## Bạn sẽ thấy

Báo cáo thư mục hiện ở giữa:

- Tên thư mục, số lượng mô hình, bản vẽ CAD, mô hình IFC và tệp, cùng tổng dung lượng.
- Ghi chú màu đỏ hoặc màu hổ phách nếu có tệp chưa đầy đủ hoặc tệp liên kết nào bị thiếu trong thư mục.
- Hộp {{ui:Bắt đầu từ đây}}: tệp mà BimCraft gợi ý mở, kèm lý do.
- **Mô hình**: mỗi mô hình một hàng, với các bản sao lưu được nhóm bên dưới.
- **Tệp liên kết và tham chiếu**, **Mô hình IFC**, **Bản vẽ CAD** và **Để riêng**, khi thư mục có các mục này.

Ở bên trái, bảng {{ui:Thư mục}} tóm tắt tất cả; **Vấn đề** hiển thị "Không có" khi mọi bản sao đều lành lặn.

## Dùng hộp Bắt đầu từ đây

Hộp nêu tên một tệp và lý do, chẳng hạn:

- "Bản đã lưu mới nhất trong thư mục này (Mar 3, 2025)."
- "*Consultant.rvt* được liên kết vào các mô hình khác, nên nó là nền, không phải tệp để chỉnh sửa."
- "*Tower.rvt* trông như lựa chọn hiển nhiên, nhưng nó bị hỏng; bản tốt cuối cùng của nó là từ …"
- "Đây là mô hình trung tâm: trong Revit, mở nó bằng "Create New Local" và làm việc trên bản cục bộ."

1. Đọc các lý do.
2. Nhấp {{ui:Mở thẻ của tệp}} để đọc thẻ của tệp đó, hoặc {{ui:Hiển thị trong danh sách}} để tìm hàng của nó trong **Mô hình**.
3. Kiểm tra với người làm việc cuối cùng trên dự án trước khi bạn dựa vào nó. Hộp cũng nói điều đó: đó là phỏng đoán tốt nhất từ tên, ngày tháng và liên kết.

## Mở tệp từ báo cáo

1. Nhấp tên một mô hình để mở thẻ của nó. Thẻ kiểm tra từng liên kết với thư mục.
2. Nhấp {{ui:Quay lại}} và tên thư mục ở đầu thẻ (hoặc {{ui:Quay lại thư mục}} ở bên trái) để quay về.
3. Nhấp bất kỳ tệp IFC nào dưới **Mô hình IFC** để mở nó trong 3D.
4. Nhấp bất kỳ DWG hoặc DXF nào dưới **Bản vẽ CAD** để mở nó trong 2D. Các bản vẽ liên kết và hình ảnh của nó được tự động tìm trong thư mục.

## Mở lại thư mục sau này

:::chromium
Các thư mục bạn đã mở bằng {{ui:Mở thư mục}} hoặc bằng cách kéo được liệt kê dưới {{ui:Thư mục gần đây}} ở bên trái. Nhấp {{ui:Mở lại}} và tên thư mục để mở lại mà không cần chọn. Sau khi khởi động lại trình duyệt, Chrome hoặc Edge sẽ hỏi thêm một lần; chọn "Cho phép mỗi lần truy cập" để ngừng bị hỏi. Danh sách chỉ được giữ trong trình duyệt này, không bao giờ được gửi đi đâu. Nhấp × để quên một thư mục.
:::

:::firefox safari
Trình duyệt này không thể nhớ thư mục giữa các lần truy cập. Chọn lại thư mục bằng {{ui:Mở thư mục}}, hoặc kéo thư mục vào.
:::

## Lỗi thường gặp

- **Chọn một thư mục quá lớn.** Trên 20,000 tệp: "Thư mục này có hơn 20,000 tệp. Chọn một thư mục nhỏ hơn, chẳng hạn một dự án." Chọn thư mục dự án, không phải toàn bộ ổ đĩa.
- **Chọn thư mục cha của nhiều dự án.** Hộp {{ui:Bắt đầu từ đây}} khi đó sẽ chọn giữa các dự án. Chỉ chọn một dự án.
- **Thư mục riêng của Revit có vẻ bị bỏ qua.** Các thư mục `*_backup`, `*_log` và `Revit_temp` là phần dọn dẹp và được liệt kê dưới **Để riêng**, không được đọc.
- **Mong mô hình mở được trong 3D từ thẻ của nó.** Tệp dự án chỉ là một thẻ. Hãy mở bản xuất IFC của nó.
- **Điện thoại và máy tính bảng.** Nhiều trình duyệt di động không thể chọn thư mục. Dùng máy tính.

Xem [Kiểm tra thư mục để tìm bản sao hỏng, liên kết thiếu và tệp thừa](topic:check-folder-health) và [Báo cáo thư mục: vai trò, trạng thái và liên kết](topic:folder-roles).
