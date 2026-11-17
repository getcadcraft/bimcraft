---
title: Giếng và lỗ mở xuyên sàn
summary: Giếng là một đường viền cắt qua mọi sàn, trần và mái giữa hai cốt. Lỗ mở thẳng đứng cắt một trong số chúng. Lỗ mở tường cắt một bức tường.
keywords: giếng, giếng thang máy, giếng thang, lỗ mở cầu thang, alzơ, lỗ mở thẳng đứng, lỗ mở sàn, lỗ mở trần, lỗ mở mái, lỗ mở trần kính, lỗ trên sàn, lỗ mở tường, IfcOpeningElement, khấu trừ, diện tích thực
from: 8e9e1641
---

## Bạn sẽ làm gì

Cắt một giếng thang máy qua một công trình bằng một bản phác thảo, cắt một lỗ trên một sàn, và đọc phần đã bị lấy ra khỏi các diện tích.

## Các công cụ ở đâu

- Bố cục dải lệnh: {{ui:Kiến trúc}} › **Lỗ mở** › {{ui:Giếng thông tầng}}, {{ui:Lỗ mở thẳng đứng}} và {{ui:Lỗ mở tường}}.
- Bố cục cổ điển: thanh Vẽ › menu {{ui:Phòng}} (Giếng thông tầng, Lỗ mở thẳng đứng) và › menu {{ui:Tường}} (Lỗ mở tường).

## Một giếng

1. Mở mặt bằng của cốt mà giếng bắt đầu. Chọn {{ui:Giếng thông tầng}}.
2. Trên hàng, chọn {{ui:Cốt đáy}} và {{ui:Cốt đỉnh}}, và khoảng lệch nếu giếng bắt đầu hoặc kết thúc phía trên hoặc phía dưới chúng.
3. Nhấp các góc của đường viền. Nhấp lại góc đầu tiên, nhấp đúp hoặc nhấn {{key:Enter}} để kết thúc.
4. Mọi sàn, trần và mái giữa hai độ cao đó đều bị cắt. Dòng trạng thái cho biết có bao nhiêu.

Giếng là một đối tượng duy nhất. Chọn đường viền của nó trên bất kỳ cốt nào nó đi qua: **Thuộc tính** có tên, các cốt và khoảng lệch, những gì nó cắt và diện tích bị lấy ra. Thay đổi nó thì mọi lỗ mở đều theo. Xóa nó thì mọi lỗ mở đều mất. Mỗi thao tác là một bước hoàn tác.

Nó vẫn tiếp tục cắt: một sàn được tạo sau này nằm giữa các cốt của nó sẽ được cắt mà không cần yêu cầu, và một sàn bạn xóa sẽ được bỏ qua.

Sàn mà giếng đứng trên không bị cắt (đỉnh của nó là đáy). Đặt khoảng lệch âm cho đáy để cắt luôn sàn đó. Đặt khoảng lệch dương cho đỉnh để xuyên qua mái.

## Một lỗ mở thẳng đứng

1. Chọn {{ui:Lỗ mở thẳng đứng}}. Trên hàng, chọn thứ cần cắt: sàn, trần hoặc mái.
2. Nhấp các góc của đường viền và kết thúc như trên.
3. Sàn, trần hoặc mái của cốt này nằm dưới đường viền sẽ bị cắt. Nó thuộc về đúng một cấu kiện: xóa sàn thì lỗ mở cũng mất theo.

## Một lỗ mở tường

{{ui:Lỗ mở tường}} là công cụ của [Tạo hình tường](topic:wall-shape): nhấp một bức tường trên mặt bằng, hoặc hai góc trên mặt của nó trong 3D.

## Khối lượng

Theo quy tắc đo của sàn, diện tích thực của một cấu kiện là diện tích tổng trừ đi phần bị cắt khỏi nó. Giếng hoặc lỗ mở thẳng đứng là một khoản khấu trừ trên mỗi sàn và trần mà nó cắt; các bảng thống kê Sàn và Hoàn thiện cùng các khối lượng IFC hiển thị cùng các con số. Trên mái, khoản khấu trừ là diện tích bề mặt mái: diện tích mặt bằng chia cho cosin của độ dốc.

Một đường viền treo qua mép chỉ khấu trừ phần nằm trên cấu kiện.

## Nếu không có gì bị cắt

Một giếng không có gì cản đường vẫn được tạo, và nó báo như vậy: nó sẽ cắt những gì được xây ở đó sau này. Một lỗ mở thẳng đứng cần có thứ gì đó ở dưới; nếu không có gì, dòng trạng thái sẽ báo và không tạo gì cả.

## Trong IFC

Mỗi phần cắt là một IfcOpeningElement với IfcRelVoidsElement tới cấu kiện nó cắt, nên mọi chương trình IFC đều hiển thị lỗ. Mái được cắt từng mặt. Bản thân giếng là một IfcGroup gồm các lỗ mở của nó.

## Chưa xây dựng

- Đường viền cong.
- Các bức tường của giếng: vẽ chúng bằng công cụ Tường.
- Chỉnh sửa đường viền bằng cách kéo các góc (thay đổi trong Thuộc tính, hoặc xóa và phác thảo lại).
- Phần Thuộc tính của một sàn đã vẽ chỉ hiển thị diện tích trừ đi các lỗ mở của chính nó; các bảng thống kê và khối lượng IFC bao gồm cả lỗ của giếng.

Xem thêm [Phòng và vách ngăn phòng](topic:rooms-and-separators).
