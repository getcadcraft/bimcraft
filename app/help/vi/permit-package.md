---
title: Hồ sơ xin cấp phép và hồ sơ kèm theo của cơ quan
summary: Tập hợp kết quả kiểm tra quy định, các nhận xét có khả năng từ người thẩm định, mô hình và danh mục tài liệu kèm theo của cơ quan vào một tệp zip, với mỗi tài liệu được liên kết với tờ hoặc bảng thống kê đáp ứng nó.
keywords: quy trình phê duyệt, định dạng nộp, bản vẽ bắt buộc, khổ tờ, định dạng tệp, số bản, bộ quy định, giấy phép, hồ sơ xin cấp phép, nộp hồ sơ xây dựng, phê duyệt bản vẽ, nộp hồ sơ theo luật định, hồ sơ kèm theo, danh mục kiểm tra, cơ quan, chính quyền địa phương, hội đồng, hồ sơ quy hoạch, nhận xét thẩm định, National Building Regulations, tài liệu còn thiếu
from: 47dd77ee
---

## Bạn sẽ làm gì

Tạo một tệp zip cho một hồ sơ nộp theo luật định (khi danh mục của cơ quan đến từ một bộ quy định, nó cũng chứa các bước phê duyệt và định dạng nộp): một trang bìa, các nhận xét mà người thẩm định có khả năng đưa ra (được viết từ các kiểm tra, không phải đoán), báo cáo quy định khi tiện ích bổ sung Quy định xây dựng được bật, mô hình, và danh sách tài liệu kèm theo mà cơ quan phê duyệt của bạn yêu cầu.

Đây là hướng dẫn được tạo từ mô hình. Người hành nghề có đăng ký và cơ quan quyết định những gì được yêu cầu và những gì được chấp nhận.

## Các bước

1. Khi có một mô hình đang mở, mở {{ui:Hồ sơ xin cấp phép}} trong bảng bên trái.
2. Nhập tên dự án, địa chỉ và người nộp đơn, rồi liệt kê các tờ và biểu mẫu của bạn, mỗi dòng một mục.
3. Dưới {{ui:Hồ sơ kèm theo}}, chọn {{ui:Danh mục của cơ quan}}. Các danh mục đến từ bộ quy định: thêm tiện ích bổ sung Quy định xây dựng và đánh dấu bộ quy định cho địa phương của bạn trong Cài đặt › Quy định xây dựng (một bộ có thể chứa các quy tắc, quy trình phê duyệt, định dạng nộp, quy ước bản vẽ và ghi chú chuẩn). Danh mục chung hoạt động mà không cần nó.
4. Đọc danh mục. Mỗi tài liệu là {{ui:Đã liên kết}} (kèm tờ và lý do), {{ui:Do bạn cung cấp}}, {{ui:Không áp dụng}} hoặc {{ui:Bị thiếu}}.
5. Với giấy tờ do chính bạn cung cấp (một biểu mẫu, một giấy chứng nhận quyền sử dụng đất, một biên lai lệ phí), chọn {{ui:Do bạn cung cấp}}. Với một mục được đánh dấu "nếu có áp dụng" mà không áp dụng, chọn {{ui:Không áp dụng ở đây}}. Để tự liên kết một tài liệu với một tờ, chọn tờ đó.
6. Mở {{ui:Quy trình phê duyệt}} và {{ui:Định dạng nộp}} dưới danh mục để đọc các bước và những gì cần nộp (khổ tờ, định dạng tệp, số bản). Lệ phí hoặc khung thời gian chỉ hiển thị khi nguồn của bộ quy định nêu rõ, cùng với trang và ngày đã đọc.
7. Nhấp {{ui:Tạo hồ sơ xin cấp phép (zip)}}. Các bước và định dạng cũng có trên trang bìa.

## Cách một tài liệu được liên kết

Một tài liệu được liên kết với một tờ chứa đúng loại khung nhìn (mặt bằng, mặt đứng, mặt cắt), với một tờ chứa đúng bảng thống kê (bảng thống kê cửa đi cho mục liên quan đến cửa đi), hoặc với một tờ có tiêu đề nói về nó (tờ có tiêu đề "Mặt bằng tổng thể"). Khi mô hình có các hàng nhưng không tờ nào chứa bảng thống kê, hoặc khi khu đất đã được vẽ nhưng không tờ nào có tiêu đề là mặt bằng tổng thể, mục đó vẫn ở trạng thái thiếu và ghi lý do.

## Lưu ý

- **Danh mục của mỗi cơ quan chưa được một người hành nghề địa phương xác minh.** Mỗi danh mục được đọc từ nguồn công bố mà nó trích dẫn, vào ngày nguồn đó ghi, và được viết lại bằng lời của chúng tôi. Yêu cầu có thể thay đổi: hãy kiểm tra danh mục hiện hành của chính cơ quan.
- Những gì bộ hồ sơ vẫn còn thiếu, hoặc một tờ không đúng khổ, hướng hoặc tỷ lệ mà bộ quy định yêu cầu, sẽ hiển thị trong danh sách Vấn đề dưới dạng ghi chú. Ghi chú chỉ là lời khuyên: chúng không bao giờ làm dừng việc tạo hồ sơ.
- Tài liệu còn thiếu không bao giờ làm dừng hồ sơ. Chúng được liệt kê trên trang bìa và trong `04-supporting-documents.csv`.
- Các danh mục là dữ liệu, không phải mã, bên trong bộ quy định: Nam Phi (National Building Regulations, quy định A2), Cape Town (kèm vùng Nam Phi được thêm từ Thư viện), Anh (yêu cầu thông tin quốc gia), Portland ở Oregon, một bộ giảng dạy GIẢ LẬP, và một danh mục chung không thuộc cơ quan nào. Bất kỳ ai cũng có thể viết một bộ cho nơi của mình.
- Lựa chọn của bạn được giữ trong mô hình, nên chúng vẫn ở đó khi bạn mở lại, và mỗi lựa chọn là một bước có thể hoàn tác.

Xem thêm [Tờ](topic:sheets) và [Khu đất, công trình trên đó và các tầng của nó](topic:site-building-and-levels).
