---
title: Bản vẽ tấm bằng gỗ hoặc thép tạo hình nguội mỏng
summary: Dựng khung các tường, sàn và mái của mô hình thành tấm bằng gỗ hoặc thép tạo hình nguội mỏng, xem mọi thanh đứng, thanh biên, lanh tô, đà và xà gồ theo tỷ lệ, rồi lưu danh sách cắt dạng CSV và bản vẽ thi công dạng PDF.
keywords: tấm, khung, bản vẽ thi công, danh sách cắt, thép tạo hình nguội, thanh đứng thép, LGS, gỗ, đà, xà gồ, lanh tô, phôi, PDF
from: c09f916e
---

## Mở các tấm

Chọn {{ui:Bản vẽ tấm}} trong menu {{ui:Bản dựng}} (hoặc gõ {{cmd:PANELS}}). Danh sách có mọi tường đã vẽ, mọi sàn và mọi mái của mô hình, mỗi mục có một ô đánh dấu. Tường có kèm cửa đi và cửa sổ như các lỗ mở. Một sàn được dựng khung theo hình chữ nhật bao quanh đường viền của nó, với các đà chạy theo chiều ngắn. Một mái được dựng khung thành mái đầu hồi trên đường viền các tường của nó, theo độ dốc của mái; danh sách ghi rõ điều này, vì mái chóp hoặc mái phức tạp không phải là mái đầu hồi.

## Vật liệu, kích thước và khoảng cách

Chọn {{ui:Vật liệu}}: **Gỗ** hoặc **Thép tạo hình nguội**. Các chi tiết thép là thanh chữ C được đặt tên theo chiều sâu và độ dày (ví dụ C92-1.2), kèm một thanh ray cho các thanh biên. {{ui:Kích thước thanh}} chọn một kích thước cho mọi tấm được đánh dấu, hoặc để ở Mặc định để dùng giá trị mặc định của từng loại tấm. {{ui:Khoảng cách}} là khoảng cách giữa các thanh đứng, đà hoặc xà gồ. Đây là các giá trị khởi đầu để bạn điều chỉnh. Chúng không phải là kiểm tra theo quy chuẩn: việc một thanh đứng ở khoảng cách đó có chịu được bức tường đó hay không, và một lanh tô với nhịp đó, thuộc về các bảng tra của quy chuẩn (tiện ích bổ sung Quy định xây dựng có bảng IRC) và kỹ sư của bạn quyết định.

## Bạn nhận được gì

Tấm được đánh dấu đầu tiên được vẽ theo tỷ lệ trong hộp thoại, kèm các kích thước. {{ui:Danh sách cắt (CSV)}} lưu mọi chi tiết của mọi tấm theo ký hiệu, kích thước và chiều dài, cùng các chiều dài phôi cần mua cho chúng. {{ui:Bản vẽ thi công (PDF)}} lưu một trang A3 cho mỗi tấm, với mọi chi tiết được đánh ký hiệu và danh sách cắt của nó. {{ui:Bản vẽ (SVG)}} lưu tấm đầu tiên thành một bản vẽ. Bất cứ thứ gì mà mã dựng khung không thể dựng được (một lỗ mở quá gần đầu tường, một lanh tô không lọt dưới các thanh biên, hoặc một chi tiết dài hơn phôi dài nhất) đều được liệt kê trong mục Vấn đề cũng như trong hộp thoại.

## Những gì nó không làm

Các tấm là bản vẽ được tạo từ mô hình mỗi khi bạn yêu cầu: không có gì được ghi vào mô hình, nên chúng luôn khớp với mô hình. Để đưa khung vào mô hình dưới dạng cấu kiện, dùng {{ui:Khung}} cho tường, sàn và mái bằng gỗ.
