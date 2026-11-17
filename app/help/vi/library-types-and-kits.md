---
title: Ký hiệu, Kiểu và Tài sản, mẫu dự án và Quick Kit
summary: Thư viện có ba loại mục (Ký hiệu, Kiểu, Tài sản). Thêm một Kiểu vào dự án, bắt đầu từ một mẫu dự án được chia sẻ, thêm một Quick Kit, và chia sẻ mẫu, kiểu và bộ của riêng bạn qua trang tải lên của Thư viện.
keywords: thư viện, ký hiệu, kiểu, tài sản, kiểu tường, kiểu sàn, kiểu mái, kiểu trần, mẫu dự án, mẫu, quick kit, bộ, chia sẻ, tải lên, phiên bản, nhật ký thay đổi, LOD, phân loại, giấy phép, ghi chú từ thực tế
from: e13b0e67
---

## Bạn sẽ làm gì

Tìm những gì bạn cần trong Thư viện theo bản chất của nó, thêm một Kiểu vào dự án bạn đang vẽ, bắt đầu một dự án mới từ một mẫu do người khác chia sẻ, và chia sẻ các mẫu, kiểu và bộ của riêng bạn.

## Ba loại mục thư viện

- **Ký hiệu** là các quy ước vẽ: chỉ 2D, vẽ ở kích thước chú thích, nhóm theo bộ môn.
- **Kiểu** cho biết một cấu kiện được làm từ gì: các lớp của nó với độ dày thực, mức phát triển (LOD) và mã phân loại. Một Kiểu được thêm vào dự án, không được vẽ.
- **Tài sản** là các vật thể thực như cửa đi, cửa sổ, đồ nội thất, thiết bị lắp đặt và thiết bị, với mặt bằng và thân 3D ở kích thước thực.

Trong thẻ {{ui:Thư viện}}, chọn {{ui:Thư viện}} và dùng **Loại mục** để hiển thị Tất cả, Ký hiệu, Kiểu hoặc Tài sản.

## Thêm một Kiểu vào dự án

1. Chọn **Kiểu** trong **Loại mục** và mở một kiểu.
2. Kiểm tra cấu tạo, LOD và phân loại của nó bên dưới hình ảnh, rồi chọn {{ui:Thêm vào dự án này}}.
3. Nó được thêm như một kiểu tường, sàn, mái hoặc trần mà bạn có thể vẽ. Nếu một kiểu cùng tên đã có sẵn, kiểu mới được thêm như một bản sao và kiểu của bạn giữ nguyên. Một lần Hoàn tác sẽ gỡ nó ra.

## Mẫu dự án và Quick Kit

Chọn {{ui:Bộ}} để xem những gì người khác đã chia sẻ.

- **Mẫu dự án** là một tệp IFC gồm các tầng, lưới, kiểu và thiết lập. {{ui:Lưu vào mẫu của bạn}} đưa nó vào Công trình mới trong mục "Bắt đầu từ".
- **Quick Kit** là danh sách các mục Thư viện. {{ui:Hiển thị các mục của bộ}} liệt kê chúng dưới dạng thẻ bạn có thể đặt.
- Mỗi bộ có phiên bản và nhật ký thay đổi, mới nhất trước. Phiên bản bắt đầu bằng 0 dành cho thảo luận; 1.0.0 chỉ dành cho những gì chủ sở hữu dòng sản phẩm đã thông qua.

## Chia sẻ của riêng bạn

- **Mẫu dự án:** {{ui:Lưu thành mẫu}}, đánh dấu {{ui:Đồng thời tạo tệp để chia sẻ trong Thư viện}}, thêm những gì nó chứa và một phiên bản. Bạn nhận được một tệp `.json`.
- **Quick Kit:** trong {{ui:Bộ}}, chọn Tạo Quick Kit từ dự án này. Nó liệt kê các mục Thư viện mà dự án dùng.
- **Kiểu:** trong {{ui:Gói kiểu}}, đánh dấu một kiểu và chọn {{ui:Lưu thành mục Thư viện…}}.

Tải tệp lên trang tải lên của Thư viện. Nó đi qua cùng quy trình duyệt như mọi mục khác, và bạn chọn giấy phép ở đó: mọi mục đều ghi giấy phép của nó. Các mục cần có LOD, lớp IFC và mã phân loại (một mã, không chỉ là tên).

## Ghi chú từ thực tế

Trên trang của bất kỳ mục Thư viện nào, thành viên đã đăng nhập có thể thêm ghi chú: đã dùng trong một dự án thực, đã thử trên một dự án mẫu, hoặc đã tìm thấy một vấn đề. Nêu loại dự án trong vài từ và bỏ tên khách hàng. Ghi chú là công khai và không phải đánh giá: nó không thay đổi mục.

## Điều cần biết

- Không có gì được gửi từ ứng dụng. Các tệp được tạo trên máy tính của bạn và bạn tự tải lên.
- Một bộ được tạo từ mẫu mang đúng văn bản IFC đã lưu. Hãy kiểm tra xem có nội dung riêng tư trước khi tải lên.
- CadCraft hiển thị Ký hiệu và Tài sản trong thẻ Thư viện; Kiểu và mẫu dành cho các dự án BimCraft.
