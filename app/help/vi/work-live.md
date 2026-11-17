---
title: Làm việc trên một mô hình cùng nhau với Live TeamWork
summary: Điều gì thay đổi trong BimCraft khi bạn ở trong phiên Live TeamWork từ CadCraft Studio: chỉnh sửa của mọi người trên cùng một mô hình IFC, hoàn tác của riêng bạn, và tham gia từ trình duyệt trong cùng mạng.
keywords: live, live teamwork, studio live, cùng nhau, cộng tác, phiên, chia sẻ live, tham gia, ifc, thuộc tính, đổi tên, con trỏ, pointer, thấy nhau, tên, màu, vùng chọn, hoàn tác, máy chủ
from: 32061b72
---

## Bạn sẽ tìm hiểu

Điều gì xảy ra với một mô hình IFC khi nhiều người cùng chỉnh sửa nó một lúc. CadCraft Studio bắt đầu và tham gia phiên Live TeamWork (Chia sẻ, Tham gia); trang này nói về chính mô hình.

## Mọi người cùng chỉnh sửa

Mô hình của máy chủ được gửi đến mọi người tham gia. Đổi tên cấu kiện, thay đổi giá trị thuộc tính của chúng, đặt, thay thế hoặc gỡ bỏ mục thư viện và cấu kiện như bình thường. Chỉnh sửa của bạn hiện ngay; chỉnh sửa của người khác hiện sau một lúc khi họ thực hiện. Khi một chỉnh sửa làm thay đổi những gì bạn thấy (cấu kiện được đặt hoặc gỡ bỏ), BimCraft vẽ lại mô hình và giữ nguyên khung nhìn của bạn.

- **Hai người cùng đổi một cấu kiện:** thay đổi đến sau trên cùng một dòng của mô hình sẽ được giữ. Một bộ thuộc tính dùng chung cho nhiều cấu kiện sẽ được sao chép cho cấu kiện bạn sửa, như thường lệ, nên các cấu kiện khác giữ nguyên giá trị.
- **Cấu kiện vừa bị ai đó gỡ bỏ** không thể chỉnh sửa được nữa: chỉnh sửa của bạn được hoàn lại, và thanh trạng thái cho biết lý do.
- Các dòng mới trong mô hình do mỗi người tạo đều được cấp số riêng, nên hai người không bao giờ tạo trùng số.

## Thấy nhau

Mỗi người trong phiên có một màu riêng. Trong khung nhìn 3D, bạn thấy con trỏ của mỗi người là một mũi tên màu của họ kèm tên bên cạnh, nằm trên cấu kiện họ đang trỏ tới, và một hộp nét đứt màu của họ bao quanh mỗi cấu kiện họ đã chọn.

Con trỏ, tên và vùng chọn chỉ tồn tại trong phiên: chúng không bao giờ được lưu vào tệp và không bao giờ đi vào hoàn tác của ai. Chúng trượt mượt đến vị trí của từng người, nên vẫn mượt cả khi kết nối chậm.

## Hoàn tác chỉ hoàn tác công việc của bạn

{{ui:Hoàn tác}} hoàn tác chỉnh sửa gần nhất của bạn và không đụng đến chỉnh sửa của người khác. Khi ai đó đã thay đổi cùng nội dung kể từ đó, không có gì được hoàn tác và thanh trạng thái cho biết là ai.

## Tham gia từ trình duyệt

Đồng đội không có Studio có thể quét hình dưới mã của máy chủ bằng điện thoại, máy tính bảng hoặc máy tính trong cùng mạng. BimCraft mở trong trình duyệt và mở mô hình của máy chủ khi máy chủ cho phép bạn vào. Liên kết mời cho phép ai đó tham gia từ mạng khác: máy chủ cần một chỗ giấy phép Team Cloud Plan cho ứng dụng, những người khác tham gia miễn phí, và liên kết chỉ hoạt động khi phiên của máy chủ đang mở.

## Khi phiên kết thúc

Chỉ máy chủ lưu mô hình. Những người khác giữ một bản sao chưa lưu: dùng {{ui:Lưu thành IFC}} nếu bạn muốn giữ lại.

:::note
Chỉ mô hình đầu tiên trong cảnh được chia sẻ. Mở một tệp khác trong lúc có phiên sẽ rời khỏi phiên trong cửa sổ đó.
:::
