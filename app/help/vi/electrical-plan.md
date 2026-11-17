---
title: Mặt bằng điện
summary: Đặt ổ cắm, công tắc, đèn, cảm biến, hộp nối và tủ điện lên mặt bằng với cùng ký hiệu như tiện ích bổ sung Điện của CadCraft, liên kết công tắc với các đèn chúng bật, và liệt kê thiết bị và mạch trong các bảng thống kê.
keywords: điện, mặt bằng điện, ổ cắm, ổ đôi, công tắc, hai chiều, bộ điều chỉnh độ sáng, đèn, đèn trần, đèn âm trần, đèn downlight, cảm biến chuyển động, hộp nối, tủ điện, bảng phân phối, mạch, tải, watts, amps, nhánh công tắc, bảng thiết bị, bảng tủ điện
from: f7de1947
---

## Bạn sẽ làm gì

Vẽ mặt bằng điện của ngôi nhà trong mô hình: ổ cắm, công tắc và tủ điện trên tường, đèn và cảm biến trên trần. Mỗi thiết bị là một phần tử điện thật trong tệp IFC, với nhãn, mạch và tải của nó, và công tắc ghi nhớ các đèn mà chúng bật.

## Đặt thiết bị

1. Trên một tầng, mở {{ui:Bản dựng}} và chọn {{ui:Điện}}.
2. Chọn thiết bị: ổ cắm (điện, dữ liệu, điện thoại, âm thanh-hình ảnh), công tắc và cảm biến (cả bộ điều nhiệt và bộ hẹn giờ), đèn, thiết bị dò và báo động, hộp nối, tủ điện hoặc tủ điện phụ.
3. Nhập **Mạch** nếu bạn đã biết (tên bất kỳ: 1, 2, A-3). Để trống **Chiều cao lắp đặt** để dùng chiều cao thông thường của thiết bị đó.
4. Nhấn lên mặt bằng. Ổ cắm, công tắc và tủ điện đặt trên mặt của tường gần nhất, hướng vào phòng; đèn, cảm biến và hộp nối đặt trên trần tại nơi bạn nhấn.

Thiết bị được gắn nhãn ngay khi bạn đặt: **R** cho ổ cắm, **S** cho công tắc, **L** cho đèn, **M** cho cảm biến chuyển động, **J** cho hộp nối, **P** cho tủ điện. Thiết bị trên tường di chuyển cùng tường khi bạn di chuyển tường.

Muốn chọn theo hình? Mở **Bảng ký hiệu** từ {{ui:Bản dựng}} để tìm thiết bị theo tên, đánh dấu sao những thiết bị bạn dùng và đặt chỉ bằng một lần nhấn: xem [Bảng ký hiệu](topic:symbol-palette).

## Liên kết công tắc với đèn

1. Chọn một công tắc (hoặc cảm biến chuyển động) và nhấn **Liên kết đèn** trong **{{ui:Thuộc tính}}**.
2. Nhấn từng đèn mà công tắc bật. Nhấn lại đèn đã liên kết để bỏ liên kết.
3. Nhấn {{key:Enter}} hoặc nhấn **Xong**.

Mặt bằng vẽ một đường cong nét đứt từ công tắc đến từng đèn của nó. Phần **{{ui:Thuộc tính}}** của đèn cho biết những công tắc nào bật nó.

## Phòng chứa thiết bị

Mỗi thiết bị đều biết phòng mà nó đang đứng. Thiết bị trên tường thuộc phòng mà nó hướng vào; thiết bị trên trần thuộc phòng ở bên dưới nó. **{{ui:Thuộc tính}}** hiển thị **Phòng**, và bảng thống kê **Thiết bị điện** có cột **Phòng** (số và tên, chẳng hạn 101 Bếp).

Thông tin này được cập nhật liên tục: đổi tên hoặc đánh lại số phòng, di chuyển thiết bị hoặc di chuyển tường, và phòng sẽ theo trong cùng một bước. Thiết bị ở mặt ngoài của tòa nhà, hoặc trong một không gian không phải phòng, sẽ ghi rõ là không nằm trong phòng.

Phòng cũng được ghi vào tệp, trong bộ thuộc tính `CadCraft_Location` của thiết bị (Room, RoomNumber, RoomName), để Tìm, Tô màu theo thuộc tính và bảng thẻ có thể dùng, và các chương trình khác cũng dùng được. Ký hiệu mặt bằng và phần tử liên kết với một ký hiệu sẽ nhận cùng bộ đó; xem [Bảng ký hiệu](topic:symbol-palette).

## Để trợ lý đặt thiết bị

Khi đã kết nối trợ lý (Cài đặt › Trợ lý, có cho phép chỉnh sửa), bạn có thể yêu cầu thiết bị bằng lời: "đặt một ổ đôi cách nhau 2 m dọc các tường phòng khách, cao 300 mm, trên mạch 3", hoặc "thêm một đèn trần cùng công tắc ở cạnh cửa". Trợ lý dùng năm công cụ: `devices_add`, `device_change`, `lights_set`, `devices_delete` và `devices_list`. Chúng tạo cùng thiết bị mà công cụ Điện tạo, trên cùng tường và với cùng nhãn, mạch, tải và chiều cao, và mỗi lần gọi là một bước hoàn tác.

Thiết bị không bao giờ nhận một loại mà công cụ Điện không có: loại không xác định sẽ bị từ chối và trợ lý nhận lại danh sách. Ổ cắm hoặc công tắc phải nằm trong vòng 600 mm từ mặt tường, như khi nhấn, nếu không lệnh sẽ bị từ chối và không có gì được đặt. Chiều cao mặc định tính bằng milimét: 300 cho ổ cắm, 1100 cho công tắc; thiết bị trên trần treo từ trần xuống.

## Thay đổi và liệt kê

Chọn một thiết bị để đổi nhãn, mạch, tải (watt) và chiều cao lắp đặt. Chọn nhiều thiết bị để đặt tất cả lên cùng một mạch cùng lúc. Nhấn {{key:Delete}} để xóa một thiết bị; đèn bị xóa sẽ được gỡ khỏi các công tắc của nó.

Trong {{ui:Bảng thống kê}}, chọn **Thiết bị điện** để xem mọi thiết bị kèm tầng, mạch, tải, chiều cao và các đèn mà mỗi công tắc bật, hoặc **Mạch** để xem thiết bị của từng mạch, tổng tải và dòng điện. Cả hai cũng nằm trên tờ bảng thống kê của bộ bản vẽ: xem [Mặt đứng, mặt cắt và tờ](topic:sheets).

:::note
Chiều cao lắp đặt và tải là giá trị mặc định để lập kế hoạch (ổ cắm cao 16" và 200 W, công tắc cao 48", đèn trần 60 W), không phải thiết kế: thợ điện hoặc kỹ sư sẽ xác định kích thước mạch và kiểm tra quy chuẩn.
:::

:::tip
Các ký hiệu là những ký hiệu mà tiện ích bổ sung Điện của CadCraft vẽ trên bản vẽ lắp đặt, nên mặt bằng từ hai ứng dụng đọc giống nhau.
:::
