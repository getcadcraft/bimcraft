---
title: Khu đất, công trình trên đó và các cốt
summary: Vẽ đường viền khu đất, đặt và xoay công trình trên khu đất, thêm cốt theo độ cao đã cho hoặc chia chiều cao công trình, và vẽ trên cốt bạn chọn.
keywords: khu đất, mặt bằng khu đất, đường giới hạn xây dựng, khoảng lùi, hành lang, quyền lối đi, đường ranh giới, lô đất, thửa đất, ranh giới, đặt công trình, xoay công trình, cốt, tầng, sàn, thêm cốt, chia chiều cao, cao độ từ sàn đến sàn, IfcSite, IfcBuilding, IfcBuildingStorey, cấu trúc không gian
from: 48d10c1e
---

## Bạn sẽ làm gì

Thiết lập các phần của mô hình IFC giữ mọi thứ khác: khu đất, công trình trên đó và các cốt của công trình.

Mô hình được tổ chức như một **khu đất** chứa một **công trình**, và công trình chứa các **cốt** (tầng); tường, sàn và mọi thứ khác thuộc về một cốt. {{ui:Tệp}} › {{ui:Công trình mới}} thiết lập cả ba. Mô hình từ chương trình khác có công trình nhưng không có khu đất sẽ có khu đất khi bạn vẽ lần đầu: công trình được đặt trên đó đúng vị trí cũ.

## Vẽ khu đất

1. Bật {{ui:Vẽ}}, rồi chọn {{ui:Bản dựng}} › {{ui:Khu đất}}.
2. Nhấp các góc của khu đất (công cụ bắt điểm như công cụ Tường). Nhấp lại góc đầu tiên, nhấp đúp hoặc nhấn {{key:Enter}} để kết thúc. {{key:Backspace}} lấy lại một góc.
3. Hàng hiển thị diện tích của khu đất. Vẽ lại để thay đổi.

Mặt bằng của mọi cốt đều hiển thị đường viền khu đất như một đường ranh giới.

## Đặt công trình trên khu đất

Khi {{ui:Khu đất}} đang bật, nhập **X** và **Y** của công trình trên khu đất và **Xoay** bằng độ, hoặc nhấp {{ui:Đặt công trình bằng một lần nhấp}} rồi nhấp nơi gốc của công trình sẽ đặt. Mọi thứ trong công trình (các cốt, tường, lưới, mọi thứ bạn đã vẽ) di chuyển theo; khu đất và đường viền của nó giữ nguyên. Các mặt bằng vẫn hiển thị mỗi cốt vuông góc với công trình.

## Đường giới hạn xây dựng và hành lang

Đường giới hạn xây dựng và hành lang (quyền lối đi, lối đi) được vẽ trên khu đất như các ràng buộc. Chúng **chỉ cảnh báo, không bao giờ chặn**: một bức tường nằm trên chúng vẫn được vẽ như bạn yêu cầu, và một cảnh báo nêu tên bức tường cùng đường hoặc hành lang sẽ xuất hiện trong Vấn đề. Di chuyển bức tường về thì cảnh báo mất. Một cảnh báo có thể được chấp nhận kèm lý do (ví dụ một sự nới lỏng mà cơ quan cấp phép đã cho).

- **Đường giới hạn từ khoảng lùi.** {{ui:Bản dựng}} › {{ui:Đường giới hạn xây dựng}}, rồi {{ui:Khoảng lùi}}: nhập đường đứng cách mỗi ranh giới của khu đất bao xa. Các ranh giới được đánh số trên mặt bằng khi công cụ đang bật. Đường được tính từ các khoảng cách đó và theo đường viền khu đất nếu bạn vẽ lại với đủ số ranh giới. Các khoảng cách là của bạn, lấy từ giấy chứng nhận quyền sử dụng đất hoặc quy hoạch; BimCraft không tự điền khoảng cách nào.
- **Một đường giới hạn đã vẽ.** Khi {{ui:Đường giới hạn xây dựng}} bật, nhấp các điểm của nó và kết thúc bằng nhấp đúp hoặc {{key:Enter}}. Kết thúc tại điểm đầu tiên để có đường khép kín: vùng bên trong là nơi được phép xây, và một bức tường có bất kỳ phần nào nằm ngoài nó sẽ bị cảnh báo. Đường mở chỉ cảnh báo về bức tường cắt qua nó.
- **Một hành lang.** {{ui:Bản dựng}} › {{ui:Hành lang}}: chọn loại, nhập tên, số tham chiếu đã đăng ký và chiều rộng, rồi nhấp dọc theo đường tâm của nó và kết thúc (một dải), hoặc đóng lại tại điểm đầu tiên (một vùng). Một bức tường có bất kỳ phần nào nằm trên nó sẽ bị cảnh báo, trên mọi cốt.
- Một mặt nằm đúng trên đường thì là chạm, không phải cắt (dung sai là 1 mm).
- Phương án khối hiện tại của mỗi bộ phương án được kiểm tra giống như các bức tường: một khối nằm ngoài ranh giới, vượt qua một đường giới hạn xây dựng hoặc nằm trên một hành lang sẽ bị cảnh báo. Xem [Phương án khối đặt cạnh nhau](topic:massing-options).
- Chọn một đường bằng {{ui:Chọn}} để thay đổi tên, số tham chiếu, loại hoặc chiều rộng, di chuyển hoặc xóa nó.

Chúng được vẽ trên mặt bằng của mọi cốt, trên các tờ và trong PDF mặt bằng: đường giới hạn xây dựng nét đứt, hành lang nét chấm, mỗi cái có nhãn. Trong tệp IFC, mỗi cái là một chú thích (IfcAnnotation, kiểu BuildingLine hoặc Servitude) trên khu đất, với đường của nó là một đường cong đơn giản mà các chương trình khác đọc được. Phép kiểm tra dùng đường viền thực của mỗi bức tường trên mặt bằng, với các mối nối như đã vẽ; một bức tường cong được kiểm tra theo chiều dày của chính nó quanh đường tâm.

## Thêm cốt

Trong bảng {{ui:Số tầng}}, {{ui:Thêm tầng ở trên cùng}} thêm một cốt, còn {{ui:Thêm cốt bên dưới}} thêm một cốt dưới cốt thấp nhất (một tầng hầm, ở cao độ âm). {{ui:Thêm tầng…}} thêm nhiều cốt cùng lúc:

- **Ở các độ cao này**: nhập các độ cao trên cốt thấp nhất, cách nhau bằng dấu phẩy (ví dụ `12', 24', 36'`). Các độ cao đã có cốt sẽ được bỏ qua.
- **Chia chiều cao công trình**: nhập chiều cao công trình và số cốt. Các cốt bạn có sẽ chuyển đến độ cao mới của chúng từ thấp nhất lên, các cốt còn thiếu được thêm vào, và mọi cốt cao hơn chúng vẫn ở nguyên chỗ.

Tường nối lên cốt phía trên sẽ theo nó, cũng như cột và dốc.

{{ui:Sao chép tầng này…}} (cùng bảng) sao chép những gì được vẽ trên cốt bạn đang xem sang một cốt khác hoặc một cốt mới ở trên cùng, để một mặt bằng có thể lên cao cả công trình chỉ trong một bước. Xem [Vẽ tường](topic:draw-walls).

## Vẽ trên một cốt

Mọi công cụ {{ui:Vẽ}} đều hoạt động trên cốt được chọn trong danh sách cốt của mặt bằng (hoặc được chọn trong bảng {{ui:Số tầng}}): những gì bạn vẽ thuộc về cốt đó.

## Bạn sẽ thấy gì

- Mỗi thay đổi này là một bước: {{key:Mod+Z}} sẽ hoàn tác nó.
- Trong tệp IFC: khu đất (IfcSite) với đường viền và diện tích, công trình (IfcBuilding) được đặt trên đó, và các cốt (IfcBuildingStorey) trong công trình.

Xem thêm [Tọa độ trong BimCraft](topic:coordinates) về gốc dự án và điểm khảo sát.
