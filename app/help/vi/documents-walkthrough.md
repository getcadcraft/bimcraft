---
title: Tài liệu và các bản sửa đổi (kho)
summary: Hướng dẫn từng bước qua một công việc thực: đưa thư mục dự án các mô hình IFC vào kiểm soát, mượn một mô hình, sửa đổi, trả lại kèm ghi chú, gửi đi rà soát, phê duyệt và phát hành, xem lịch sử và những gì đang dùng nó, người thứ hai thấy gì khi tệp đang bị giữ, và cách nó hoạt động với thư mục đám mây.
keywords: kho, tài liệu, hướng dẫn, hướng dẫn từng bước, mượn ra, trả vào, bản sửa đổi, phát hành, phê duyệt, khóa, lịch sử, nơi sử dụng, ifc, mô hình, thư mục đám mây, thư mục dự án, hai người, thư mục dùng chung
from: 0a753f25
---

## Bạn sẽ làm gì

Bạn là Ana, làm việc tại Riverside Clinic cùng một đồng nghiệp, Ben. Các mô hình IFC của dự án nằm trong một thư mục mà cả hai bạn đều truy cập được (ổ đĩa dùng chung, thư mục đồng bộ, hoặc thư mục đám mây). Khi kết thúc, một tệp đã đi từ bản sao đầu tiên đến bản sửa đổi **A** được phát hành, đã được thay đổi lần nữa thành **B.1**, bạn đã thấy ai làm gì, và bạn đã thấy Ben thấy gì khi bạn đang giữ tệp.

Mọi thứ được giữ trong một thư mục `.ccvault` ẩn bên cạnh tệp của bạn: không có máy chủ, không tải lên gì (thư mục đám mây là ngoại lệ, xem bước cuối). Để xem mọi nút và quy tắc ở một nơi, xem chủ đề *Tài liệu: mượn ra, bản sửa đổi và phát hành* ở nơi ứng dụng của bạn có nó.

## 1. Thiết lập thư mục dự án

1. Chọn {{ui:Tài liệu}} bên cạnh {{ui:Mở thư mục}} trên màn hình bắt đầu, hoặc {{ui:Tài liệu…}} trong menu **Tệp**.
2. Chọn {{ui:Chọn thư mục dự án}} và chọn thư mục chứa các mô hình IFC của dự án. (Thư mục dự án hoạt động trong Studio và trong các trình duyệt có thể mở thư mục, như Chrome và Edge. Ở trình duyệt khác, bảng sẽ cho biết điều đó.)
3. Chọn {{ui:Thay đổi}} bên cạnh **Bạn:** và nhập tên của bạn, `Ana` (nếu được hỏi, thêm tên của máy tính này). Bảng hiển thị *Bạn: Ana trên* và máy tính của bạn. Tên bạn được ghi vào mọi việc bạn làm.
4. Chọn {{ui:Bắt đầu một kho trong thư mục này}} và nhập tên dự án, `Riverside clinic`. Bảng hiển thị *Đã bắt đầu kho cho Riverside clinic.*

## 2. Đưa một tệp vào kiểm soát

1. Mở **Tệp không nằm trong kho** và chọn {{ui:Thêm}} bên cạnh `models/House.ifc`.
2. Tệp xuất hiện dưới **Tệp trong kho** ở bản sửa đổi **A.1**, trạng thái **Đang thực hiện**. A.1 là bản sao đầu tiên của nó; kho giữ một bản sao của mọi bản sửa đổi.

## 3. Mượn ra, sửa, trả vào

1. Chọn {{ui:Mở}} bên cạnh `models/House.ifc`. Mô hình mở trong BimCraft và bảng đóng lại để bạn nhìn thấy. Mở lại bảng từ {{ui:Tài liệu}}.
2. Mở lại bảng và chọn {{ui:Mượn ra}}. Hàng bây giờ ghi **Đã mượn ra cho bạn**. Một tệp khóa đã được tạo trong `.ccvault/locks`; không ai khác có thể mượn tệp này cho đến khi bạn trả vào.
3. Sửa mô hình: di chuyển một tường, thêm một cửa. Lưu bị từ chối trừ khi mô hình được mượn cho bạn, và nó cho biết lý do; Lưu thành luôn hoạt động cho một bản sao của chính bạn.
4. Mở bảng, chọn {{ui:Trả vào}} và nhập những gì đã thay đổi (`Đã di chuyển cửa`). Bảng hiển thị *đã trả vào với tên A.2*. Tệp trong thư mục dự án giờ là mô hình bạn đã mở, và khóa đã được gỡ. Trả vào mà không đổi gì thì giữ nguyên bản sửa đổi.

Nếu bạn đổi ý, {{ui:Hoàn tác mượn ra}} trả tệp lại mà không có bản sửa đổi mới.

## 4. Rà soát và phát hành

1. Chọn {{ui:Gửi đi rà soát}}. Trạng thái trở thành **Chờ rà soát** và tệp chỉ đọc.
2. Trước khi phê duyệt, chọn {{ui:Cài đặt dự án}} và liệt kê ai được phê duyệt (mỗi tên một dòng), ví dụ `Ben` và `Carla`, rồi đánh dấu quy tắc rằng người phê duyệt phải là người khác với tác giả. Chọn {{ui:Lưu cài đặt}}. Lúc này chính kho sẽ từ chối bất kỳ ai khác.
3. Ben (hoặc Carla) chọn {{ui:Phê duyệt}} và nhập tên người phê duyệt. Trạng thái trở thành **Đã phát hành** và bản sửa đổi trở thành **A**, với *phê duyệt bởi* và tên. Tệp đã phát hành chỉ đọc. {{ui:Gửi lại}} sẽ đưa nó về Đang thực hiện, kèm lý do.

Tên người phê duyệt là tên được nhập trong bảng; nó là bản ghi về người đã ký duyệt, không phải bằng chứng danh tính.

## 5. Một bản sửa đổi mới

1. Trên tệp đã phát hành, chọn {{ui:Bản sửa đổi mới}}. Bạn giữ nó cho chữ cái tiếp theo.
2. Sửa nó, rồi {{ui:Trả vào}}. Bản sửa đổi là **B.1**, đang thực hiện. Phát hành theo cách tương tự và nó thành **B**. {{ui:Hoàn tác mượn ra}} trước lần trả vào đầu tiên sẽ giữ nó ở **A**.

Chữ cái bản sửa đổi chạy A, B … Z, AA, AB. Nếu tiêu chuẩn của bạn bỏ qua một số chữ cái, cài đặt dự án *Dùng chuỗi ASME Y14.35* sẽ bỏ qua I, O, Q, S, X và Z cho các bản sửa đổi tiếp theo.

## 6. Xem chuyện gì đã xảy ra

Chọn tên của tệp để mở chi tiết:

- **{{ui:Lịch sử}}**: mọi sự kiện, mới nhất trước, kèm ai, máy tính nào và khi nào: *Đã trả vào A.2* bởi Ana, *Đã phát hành* bởi Ben, và các sự kiện khác.
- **{{ui:Revisions}}**: bảng bản sửa đổi: mọi bản được giữ, kèm ngày, ai đã trả vào, ghi chú và ai đã phê duyệt. Kho giữ một bản sao của mỗi bản trong `.ccvault/revs`.
- **{{ui:Sử dụng}}**: các tài liệu mà một mô hình IFC trỏ tới.
- **{{ui:Được dùng bởi}}**: liệt kê mọi mô hình trong kho trỏ tới tệp này.

## Mô hình trỏ tới tài liệu khác

Một mô hình IFC trỏ tới các tài liệu khác trong thư mục (bản vẽ, bảng thống kê) sẽ hiển thị chúng dưới **Sử dụng**, và mỗi tài liệu đó hiển thị mô hình dưới **Được dùng bởi**. Trả vào một tài liệu và bạn có thể thấy những mô hình nào tham chiếu đến nó.

## 7. Ben thấy gì khi bạn giữ tệp

Bây giờ mượn tệp lại, và nhờ Ben mở cùng thư mục dự án trên máy tính của anh ấy và mở bảng. Ở hàng của tệp, anh ấy thấy **Đã mượn ra bởi Ana trên** máy tính của bạn **từ** thời điểm đó, và không có nút {{ui:Mượn ra}}. Nếu anh ấy vẫn thử, kho từ chối: khóa là một tệp hệ thống không thể tạo hai lần, nên hai người không thể cùng giữ tệp, kể cả trong cùng một khoảnh khắc, khi thư mục nằm trên đĩa trong Studio. (Trên trình duyệt, thư mục chỉ cho phép cố gắng hết sức, và bảng cho biết điều đó dưới **Thư mục**.)

Nếu Ana vắng mặt và Ben cần tệp, {{ui:Hủy mượn ra}} sẽ giải phóng nó. Anh ấy phải nhập một lý do; lý do được ghi vào nhật ký cùng với việc mượn ra của ai. Khi dự án liệt kê quản trị viên, chỉ họ mới làm được. Một lần mượn ra cũ hơn giới hạn lỗi thời (mặc định 14 ngày) được đánh dấu *đã lâu*. Sau khi hủy, việc trả vào muộn của Ana bị từ chối, nên hai bạn không thể ghi đè lên nhau.

## 8. Thư mục đám mây

Thư mục đám mây là một thư mục dự án được giữ trong kho đám mây của nhóm bạn, nên nhóm không cần ổ đĩa dùng chung. Trong Studio, khi đã đăng nhập vào tài khoản CadCraft của bạn, bảng hiển thị {{ui:Mở thư mục đám mây}} bên cạnh {{ui:Chọn thư mục dự án}}. Chọn nó và chọn thư mục, được liệt kê dạng không gian làm việc / thư mục. Chủ sở hữu không gian làm việc tạo thư mục trước, và kho đám mây của nhóm phải đang có hiệu lực. Mọi thứ ở trên hoạt động như nhau; máy chủ tạo khóa, và khóa này nghiêm ngặt giữa những người. Nếu bạn chưa đăng nhập, bảng sẽ yêu cầu bạn đăng nhập. Trong một thẻ trình duyệt thông thường, nút đám mây không được cung cấp; hãy dùng Studio.

## Thử xem

Thực hiện tám bước trên với một bản sao của một tệp thực. Với các bước hai người, bạn cần một người khác, hoặc hai cửa sổ với hai tên. Nếu bạn thử với một thư mục dùng chung thật, trang Kiểm thử cộng đồng có một kiểm tra hỏi đúng điều này và nhận kết quả.
