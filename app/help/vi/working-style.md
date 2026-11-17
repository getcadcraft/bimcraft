---
title: Phong cách làm việc, khung nhìn đã nhân bản, nét bút khi in, Báo cáo là và mẫu
summary: Chọn cách BimCraft hoạt động theo cách bạn làm việc, nhân bản bất kỳ khung nhìn nào thành bản sao riêng hoặc bản liên kết, giữ ghi đè nét bút trong tệp và in như đang hiển thị hoặc qua bảng bút vẽ, báo cáo một cấu kiện là lớp IFC khác, và bắt đầu dự án từ mẫu của riêng bạn.
keywords: phong cách làm việc, nhân bản khung nhìn, nhân bản, sao chép khung nhìn, khung nhìn phụ thuộc, khung nhìn liên kết, bản sao riêng, sao chép khung nhìn, ghi đè nét bút, nét bút, độ dày nét, in như hiển thị, bảng bút vẽ, kiểu nét in, ctb, đơn sắc, thang xám, báo cáo là, lớp ifc, phân loại lại, kiểu xác định trước, mô hình chung, sàn làm đường, tường làm tấm, mái làm đường dốc, mẫu dự án, mẫu, tạo từ mẫu, lưu thành mẫu, tiêu chuẩn văn phòng
from: 231d98b0
---

## Bạn sẽ làm gì

Thiết lập BimCraft theo cách bạn làm việc, nhân bản khung nhìn, in chúng đúng như bạn mong đợi, đếm cấu kiện đúng như bản chất của chúng, và bắt đầu mọi dự án từ mẫu của văn phòng bạn.

## Chọn phong cách làm việc

1. Mở {{ui:Cài đặt}} và thẻ {{ui:BimCraft}}. Tìm {{ui:Phong cách làm việc}}.
2. Chọn một:
   - {{ui:Mỗi khung nhìn riêng}} (lựa chọn đầu tiên): khung nhìn được nhân bản sao chép chú thích của nó và chúng vẫn thuộc về khung nhìn đó; các tờ in như màn hình hiển thị.
   - {{ui:Chú thích và bảng bút vẽ dùng chung}}: các khung nhìn đã nhân bản dùng chung chú thích; việc in đi qua bảng bút vẽ.
3. Bên dưới lựa chọn là bốn mục mà nó đặt. Thay đổi bất kỳ mục nào riêng lẻ; khi đó phong cách hiển thị là {{ui:Tùy chỉnh}}.

Phong cách làm việc được giữ trong trình duyệt này, giống như bố cục không gian làm việc. Mẫu sẽ mang nó sang các mô hình mới.

## Nhân bản khung nhìn

1. Trong {{ui:Trình duyệt dự án}}, mọi mặt bằng tầng, mặt bằng trần, chú thích gọi, mặt đứng và mặt cắt đều có nút {{ui:Nhân bản}} (hình hai tờ giấy).
2. Đặt tên bản sao và chọn cách nó hoạt động:
   - {{ui:Bản sao riêng}}: bản vẽ, kích thước, vùng cắt, cấu kiện ẩn và nét bút của nó được sao chép và giữ riêng. Chỉnh sửa một trong hai khung nhìn không bao giờ thay đổi khung nhìn kia, nên khung nhìn trên tờ đã phát hành vẫn như khi được phát hành.
   - {{ui:Liên kết}}: nó hiển thị cùng khung nhìn với một bộ chú thích và cài đặt.
3. Bản sao được liệt kê dưới {{ui:Khung nhìn đã nhân bản}}. Nhấp vào nó để mở; thanh phía trên mặt bằng cho biết nó là bản sao, cùng với {{ui:Lên}} để quay lại khung nhìn của nó.
4. Nút cài đặt của nó mở các thiết lập: tên, {{ui:Phạm vi nhìn}} (bản sao riêng có phạm vi riêng), {{ui:Chuyển thành bản sao riêng}} cho bản liên kết, và {{ui:Xóa}}.

Bản sao của mặt đứng và mặt cắt được đặt trên các tờ của riêng bạn giống như các khung nhìn gốc của chúng. Nhân bản là một bước hoàn tác, và các bản sao được giữ trong IFC cùng với chú thích gọi.

## Nét bút giữ theo khung nhìn và in như hiển thị

1. Bật {{ui:Vẽ}} và chọn {{ui:Nét bút}}.
2. {{ui:Cho}} hiện liệt kê mọi hạng mục: tường, cửa đi và cửa sổ, sàn, mái, cột, cầu thang, nội thất và phần còn lại, cùng bản vẽ và kích thước.
3. {{ui:Áp dụng}} giữ nét bút trong IFC cùng với khung nhìn đang hiển thị: một mặt bằng, mặt bằng trần, chú thích gọi hoặc khung nhìn đã nhân bản. Nét bút được tạo trước 0.9 được giữ trong trình duyệt; {{ui:Giữ các mục này trong tệp}} sẽ chuyển chúng vào tệp.
4. Các tờ và PDF vẽ mọi nét bút như màn hình hiển thị.

Để thay vào đó in qua bảng bút vẽ, đặt {{ui:In}} trong hàng Nét bút thành {{ui:Qua bảng bút vẽ}}, rồi chọn một bảng (màu, đơn sắc, thang xám) hoặc {{ui:Sửa bảng bút vẽ…}}: mỗi màu nhận màu, độ dày nét và độ tram mà nó được in. Bảng này là tệp kiểu in của CadCraft, nên {{ui:Nhập…}} nhận một bảng được tạo trong ứng dụng CadCraft và {{ui:Xuất}} trả lại một bảng. Mô hình giữ lựa chọn của nó; nếu không có lựa chọn nào, phong cách làm việc sẽ quyết định.

## Báo cáo một cấu kiện là lớp IFC khác

Sàn được vẽ như đường, tường được dùng như tấm, mái được tạo hình như đường dốc: giữ công cụ bạn đã dùng để vẽ và báo cáo nó đúng với bản chất của nó.

1. Chọn cấu kiện và mở {{ui:Thuộc tính}}. Mở {{ui:Báo cáo là}}.
2. Nhập vào hộp tìm kiếm để tìm một lớp phù hợp với hình dạng, chọn nó và kiểu xác định trước của nó. Với kiểu riêng của bạn, chọn USERDEFINED và đặt tên cho nó.
3. {{ui:Áp dụng}} (một bước hoàn tác). {{ui:Xóa}} báo cáo nó như đã vẽ lại.

Bạn vẫn chỉnh sửa nó bằng công cụ đã dùng để vẽ. IFC đã lưu ghi nó dưới lớp đã báo cáo, nên các chương trình khác, phần bóc tách {{ui:Khối lượng}}, Tìm, Tô màu theo, kiểm tra mô hình và {{ui:Sự cố}} đếm nó như vậy. Các bảng thống kê loại trừ một tường được báo cáo là tấm khỏi bảng thống kê tường, và {{ui:Cấu kiện theo lớp đã báo cáo}} liệt kê từng cái. Tính năng này hoạt động trong tệp IFC4 và IFC2X3; danh sách chỉ đưa ra các lớp mà phiên bản IFC của tệp có. Cửa đi, cửa sổ, cầu thang, phòng và tầng giữ lớp riêng của chúng.

## Lưu dự án thành mẫu và bắt đầu từ đó

1. Khi một dự án đang mở, nhấp {{ui:Lưu thành mẫu}} bên cạnh {{ui:Lưu}}.
2. Đặt tên cho nó. Đánh dấu {{ui:Cũng tải tệp mẫu}} để chia sẻ dưới dạng tệp IFC, và {{ui:Bắt đầu mô hình mới từ mẫu này}} để đặt làm mặc định của bạn.
3. Mẫu giữ các tầng, mẫu khung nhìn và cài đặt khung nhìn, khung nhìn đã nhân bản và chú thích gọi, bản vẽ, nét bút và bảng bút vẽ, thẻ, họ và kiểu, tờ, khổ tờ, khung tên và phong cách làm việc. Tường, sàn, cửa đi và mọi cấu kiện mô hình khác không được đưa vào.
4. Nhấp {{ui:Công trình mới}} và chọn nó dưới {{ui:Bắt đầu từ}}, hoặc chọn {{ui:Tệp mẫu…}} cho mẫu bạn được gửi. Dự án mới nhận tên riêng và định danh dự án riêng; mọi thứ khác giống như mẫu có.

:::note
Mẫu được giữ trong trình duyệt này. Mẫu nhóm được chia sẻ qua CadCraft Studio chưa được xây dựng: thay vào đó hãy gửi tệp mẫu.
:::
