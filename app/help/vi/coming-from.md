---
title: Chuyển từ các chương trình BIM và bản vẽ khác
summary: Thói quen từ phần mềm BIM trên máy tính và từ việc xem tệp DWG ánh xạ sang BimCraft ra sao, cùng những khác biệt dễ gây vướng.
keywords: chuyển đổi, di chuyển, quen thuộc, bim trên máy tính, họ, tham số, trình duyệt dự án, bảng thuộc tính, khối xem, xref, trình quản lý lớp, khác biệt, so sánh
from: 2de629af
---

Nếu bạn biết Revit, phần lớn BimCraft sẽ quen về từ ngữ và lạ về phạm vi. Khác biệt quan trọng nhất: **bản dựng này đọc và kiểm tra mô hình, và chỉnh sửa dữ liệu IFC. Hiện tại nó chưa tạo mô hình như Revit.** Bạn không thể vẽ tường, đặt họ (family), tạo khung nhìn hay tờ bản vẽ, hoặc lưu tệp dự án. Điều bạn có thể làm là mở hầu hết các tệp công trình trên bất kỳ máy tính nào có trình duyệt, xem những gì có trong đó, kiểm tra cả thư mục dự án, và sửa dữ liệu trong mô hình IFC.

## Ánh xạ thói quen

| Nếu bạn quen với | Trong BimCraft |
|---|---|
| Mở `.rvt` trong Revit để xem mô hình | BimCraft mở `.rvt` dưới dạng một thẻ tệp: phiên bản, thông tin dự án, liên kết, ảnh xem trước. Để xem mô hình 3D, xuất IFC và mở tệp đó. [Đọc tệp dự án hoặc họ](topic:read-rvt-file) |
| Kiểm tra phiên bản mà tệp được lưu trước khi mở | Thẻ ghi "Đã lưu trong Revit …" ở trên cùng, mà không nâng cấp hay thay đổi tệp |
| Trình duyệt dự án (Project Browser) | Không có trình duyệt khung nhìn và tờ bản vẽ. Mô hình IFC có danh sách {{ui:Tầng}} và {{ui:Phần tử}}; bản vẽ có thẻ tờ |
| Bảng thuộc tính (Properties palette) | Bảng {{ui:Thuộc tính}} bên phải, cho cấu kiện bạn đã nhấp. Bộ thuộc tính IFC thay cho nhóm tham số |
| Tham số thể hiện và tham số kiểu | Bộ thuộc tính thể hiện, và các bộ được đánh dấu "(type)". Thay đổi kiểu áp dụng cho mọi cấu kiện của kiểu, như trong Revit. [Thay đổi thuộc tính kiểu cho mọi cấu kiện thuộc kiểu](topic:type-vs-instance) |
| Edit Type | Không có hộp thoại: nhấp vào một giá trị trong bộ "(type)" và nhập |
| Chọn nhiều cấu kiện, bộ lọc, Select All Instances | Từng cấu kiện một. Chưa xây dựng |
| Khối xem và bánh xe điều hướng | Khối xem ở góc dưới bên phải, bốn nút ({{ui:Vừa khung}}, {{ui:Trên}}, {{ui:Trước}}, {{ui:Bên}}) và xoay tự do. Không có bánh xe điều hướng |
| Shift và kéo chuột giữa để xoay, kéo chuột giữa để di chuyển | Kéo trái để xoay, kéo phải (hoặc giữ {{key:Shift}} và kéo) để di chuyển, cuộn để thu phóng. Kiểu menu {{ui:BIM ribbon}} chuyển sang kéo chuột giữa để di chuyển và {{key:Shift}} cùng nút giữa để xoay. [Menu, phím và chuột](topic:menus-keys-and-mouse) |
| Mặt bằng tầng, mặt cắt, hộp cắt | Một mặt phẳng {{ui:Mặt cắt}} mỗi lần ({{key:X}}); không có hộp cắt hay mặt bằng 2D. [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane) |
| Ẩn trong khung nhìn, cô lập, khả kiến và đồ họa | Bật và tắt {{ui:Tầng}}, {{ui:Không gian}} và {{ui:Cạnh}}. Chưa có ẩn từng cấu kiện |
| Phòng | Không gian IFC, ban đầu bị ẩn. Nhấp {{ui:Không gian}} |
| Lưu, Lưu thành, đồng bộ với tệp trung tâm | {{ui:Lưu thành IFC}} tải xuống một tệp IFC mới. Bản gốc không bao giờ thay đổi. Không có tệp trung tâm, không có chia sẻ nhóm |
| Hoàn tác bằng {{key:Mod+Z}} | Áp dụng cho chỉnh sửa IFC cho đến khi bạn lưu. [Thay đổi thuộc tính IFC và lưu bản sao đã chỉnh sửa](topic:edit-ifc-properties) |
| Manage Links | Mở thư mục dự án: mọi liên kết được kiểm tra và đánh dấu **Trong thư mục này**, **Tìm thấy tên trùng**, **Tệp thư viện** hoặc **Không có trong thư mục này**. [Mở toàn bộ thư mục dự án](topic:open-project-folder) |
| Kiểm tra, hoặc mở tệp để xem có bị hỏng không | Báo cáo thư mục kiểm tra mọi bản sao và bản sao lưu xem có bị cắt cụt không, trong vài giây. [Kiểm tra thư mục để tìm bản sao bị hỏng](topic:check-folder-health) |
| Chọn đúng tệp trong một thư mục lộn xộn | Ô {{ui:Bắt đầu từ đây}} gợi ý một tệp, kèm lý do |

Nếu bạn chủ yếu mở mô hình để kiểm tra, như trong chương trình kiểm tra mô hình hoặc xem IFC, hãy chọn kiểu menu {{ui:Trình xem}}: các công cụ xem và kiểm tra đứng trước, còn công cụ xây dựng nằm trong một menu. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).

## Từ việc xem tệp DWG

Nếu bạn mở DWG trong AutoCAD hoặc trình xem DWG:

| Nếu bạn quen với | Trong BimCraft |
|---|---|
| Thẻ mô hình và bố cục ở dưới | Các thẻ phía trên bản vẽ: {{ui:Mô hình}} và một thẻ cho mỗi tờ |
| ZOOM Extents, nhấp đúp con lăn | Nhấp đúp, {{key:F}} hoặc {{ui:Vừa khung}} |
| Di chuyển bằng nút giữa | Kéo bằng nút nào cũng được |
| Trình quản lý lớp | Danh sách {{ui:Lớp}}: đánh dấu để hiện, bỏ đánh dấu để ẩn, {{ui:Bật tất cả}} và {{ui:Tắt tất cả}} |
| Trình quản lý xref | **Bản vẽ liên kết** ở bên phải, với **Đang hiện** hoặc **Không tìm thấy**, và {{ui:Thêm bản vẽ liên kết…}} |
| Xem trước bản in | {{ui:Chế độ in}} hoặc {{key:P}}: đen trên trắng với độ dày nét. Không in ra |
| Trích xuất dữ liệu thuộc tính khối | Thẻ {{ui:Thiết bị}} cho bản vẽ thiết bị dịch vụ ăn uống đã gắn thẻ, với {{ui:Tải CSV}} |
| Đo, vẽ, chỉnh sửa, lưu thành | Không có trong BimCraft. Ứng dụng bản vẽ CadCraft vẽ và chỉnh sửa |

## Khác biệt dễ gây vướng

- **Nó chạy trong trình duyệt, và trình duyệt cẩn trọng với tệp của bạn.** BimCraft chỉ có thể đọc các tệp và thư mục bạn đưa cho nó, bằng cách chọn hoặc kéo thả. Nó không thể tự mở tệp, và không thể ghi đè lên tệp. Mỗi lần lưu là một lần tải xuống.
- **Không có gì được tải lên.** Từ "tải lên" trong một số hộp thoại thư mục của trình duyệt là cách diễn đạt của chính trình duyệt. Các tệp vẫn nằm trên máy tính của bạn.
- **IFC là định dạng mô hình.** Tệp dự án mở thành thẻ vì nội dung 3D của nó chưa được tài liệu hóa. Hãy xem IFC là cách mô hình đi vào BimCraft.
- **Chỉnh sửa theo kiểu sao chép khi ghi.** Thay đổi giá trị của một cấu kiện không bao giờ làm thay đổi các cấu kiện lân cận, ngay cả khi bộ xuất đã dùng chung giá trị đó. Thuộc tính kiểu là ngoại lệ có chủ đích.
- **Không có dự án, không có khung nhìn.** BimCraft hiển thị một tệp mỗi lần và không nhớ gì về tệp đó sau khi bạn đóng thẻ, ngoại trừ tên các thư mục gần đây trong Chrome và Edge.
- **Phím trên Mac.** Nơi phím tắt Windows của Revit dùng Ctrl, phím tắt của BimCraft dùng {{key:Mod}}: Command trên Mac.
- **Thói quen dùng chuột của bạn.** Xoay là nút trái, không phải Shift và nút giữa, trừ khi bạn chọn kiểu menu {{ui:BIM ribbon}} hoặc tự đặt các nút trong [Menu, phím và chuột](topic:menus-keys-and-mouse).

Xem [Những gì chưa xây dựng](topic:not-built-yet) để biết nên dùng gì thay thế hiện nay.
