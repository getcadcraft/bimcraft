---
title: Gửi khối lượng sang TakeoffCraft
summary: Một cú nhấp gửi khối lượng của mô hình sang TakeoffCraft — tường theo kiểu, mái theo diện tích dốc, sống mái, sống chéo và rãnh, móng, cửa đi và cửa sổ, tủ, thiết bị điện, diện tích sàn và danh sách cắt gỗ — được đánh dấu trên mặt bằng của mỗi tầng, với định mức của các gói công việc gắn vào hạng mục.
keywords: bóc tách khối lượng, dự toán, ước tính, danh sách vật liệu, bảng vật tư, takeoffcraft, khối lượng, diện tích tường, diện tích mái, móng, bê tông, cubic yards, danh sách cắt, gỗ xẻ, gói công việc, định mức
from: c5a745af
---

## Mục bạn sẽ làm

Biến mô hình thành danh sách vật liệu và dự toán trong TakeoffCraft. BimCraft vẽ mặt bằng của mỗi tầng ở tỷ lệ chuẩn, đánh dấu mọi khối lượng lên đó, và đưa bảng bóc tách vào trong tệp PDF. TakeoffCraft tự đo các dấu, nên mọi con số đều có thể kiểm tra trên bản vẽ.

## Gửi đi

1. Nhấp {{ui:Bóc tách khối lượng}} trên thanh mô hình (cạnh {{ui:Tờ}}).
2. TakeoffCraft mở trong thẻ mới với các mặt bằng. Khi được hỏi, chọn mở bảng bóc tách đã tìm thấy trong tệp PDF.
3. Thêm giá của bạn vào bảng khối lượng của TakeoffCraft; các định mức đã liệt kê sẵn vật liệu.

:::note
Khi TakeoffCraft không có sẵn ở đây, nút sẽ tải tệp PDF về thay thế. Mở tệp đó trong TakeoffCraft sau này: nó sẽ tìm thấy bảng bóc tách bên trong.
:::

## Những gì được đo

- **Tường** theo kiểu và chiều cao: đường tâm của chúng dưới dạng các đoạn, với chiều cao tường gắn trên hạng mục, để TakeoffCraft tính ra chiều dài và diện tích tường. Mỗi đoạn mang theo cửa đi và cửa sổ của tường, nên TakeoffCraft trừ chúng khỏi diện tích tường một lần, theo cùng quy tắc với bảng thống kê của BimCraft: hai bên khớp nhau về diện tích gộp, phần trừ và diện tích thuần. Dữ liệu bóc tách của một kiểu tường (đơn vị, vữa, đơn giá; xem [Định mức tường](topic:wall-assemblies)) đi kèm như một dòng có giá trên hạng mục của kiểu đó. Theo một phương pháp đo khác mặc định (xem [Chọn phương pháp đo](topic:plan-schedules-and-pdf#choose-a-measurement-method)), bảng bóc tách mang theo phương pháp, mỗi đoạn mang theo phần mà các điểm nối trừ đi trên mặt tường, và TakeoffCraft đo theo cùng phương pháp và ghi tên nó. Một kiểu tường có đơn vị với chiều dài và chiều cao sẽ chuyển giao hai thành phần có khối lượng: số đơn vị cần đặt và thể tích vữa, được tính giá khi đơn giá của kiểu là theo đơn vị, theo 1000 đơn vị hoặc theo m³ vữa. Một số đếm đúng số nguyên có thể cao hơn một đơn vị trong TakeoffCraft, vì việc chuyển giao làm tròn các vị trí trên bản vẽ.
- **Mái**: mỗi mặt mái là một diện tích với độ dốc của nó (TakeoffCraft cho diện tích dốc), sống mái, sống chéo và rãnh (sống chéo và rãnh đo theo chiều dốc của chúng), mép mái và mép đầu hồi.
- **Móng**: móng băng và tường móng là các đoạn chạy qua giữa của chúng, sàn là các diện tích với độ dày, nên bê tông ra theo thể tích.
- **Cửa đi và cửa sổ** đếm theo kiểu, kèm khung cửa sổ.
- **Tủ bếp dưới** theo chiều dài mặt tủ.
- **Thiết bị điện** đếm theo loại.
- **Diện tích sàn** của mỗi tầng, từ các phòng của nó.
- **Danh sách cắt gỗ** từ khung kết cấu, đếm trên một tờ riêng (một chấm cho mỗi thanh).

Khi một gói công việc có định mức tương ứng — tường ngoài và tường trong, sàn, móng, tường móng, ngói, sống mái và sống chéo, rãnh, mép mái, cửa đi trong nhà, khung cửa sổ, tủ bếp dưới, ổ cắm, công tắc, đèn, hộp nối và bảng điện — hạng mục đi kèm với vật liệu và công thức. Các gói không có đơn giá và chưa được chuyên gia dự toán xem xét.

:::tip
Mặt bằng được làm từ mô hình mỗi lần bạn nhấp, nên sau một thay đổi chỉ cần nhấp {{ui:Bóc tách khối lượng}} lại.
:::
