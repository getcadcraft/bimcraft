---
title: Lưới và cột
summary: Bố trí các đường lưới với nhãn tròn đánh số và đánh chữ, theo khoảng cách hoặc từng đường một, vẽ tường và cột dọc theo chúng, và xem chúng trên mặt bằng, mặt đứng và mặt cắt.
keywords: lưới, các lưới, đường lưới, lưới cột, trục, các trục, nhãn tròn, gridline, lưới kết cấu, 1 2 3, A B C, cột, các cột, trụ, cọc, bắt điểm, IfcGrid, IfcColumn
from: bf99a8f7
---

## Bạn sẽ làm gì

Bố trí công trình theo một lưới, rồi vẽ tường và đặt cột dọc theo các đường của lưới.

## Đặt cả một lưới

1. Bật {{ui:Draw}}, rồi chọn {{ui:Build}} › {{ui:Grid}}.
2. Nhấn {{ui:Place a grid…}}. Cho biết bạn cần bao nhiêu **đường đánh số** (1, 2, 3…) và **đường đánh chữ** (A, B, C…), và chúng cách nhau bao xa. Nhập một khoảng cách, hoặc nhiều khoảng cách ngăn cách bằng dấu phẩy cho các nhịp không đều (ví dụ `20', 24', 20'`). {{ui:Past the last lines}} là mức kéo dài của mỗi đường vượt qua các đường ngoài cùng của loại kia, và {{ui:Turned (degrees)}} xoay toàn bộ lưới.
3. Nhấn {{ui:Place it}}, rồi nhấn nơi đặt giao điểm đầu tiên (1 / A). Bản xem trước sẽ đi theo con trỏ.

Các đường đánh số chạy dọc theo mặt bằng và được trải đều qua nó; các đường đánh chữ chạy ngang qua mặt bằng và được trải đều theo chiều dọc. Chữ cái bỏ qua I và O, như trên bản vẽ, nên không bị đọc nhầm thành 1 và 0.

## Vẽ từng đường lưới

Khi {{ui:Grid}} đang bật, nhấn nơi một đường bắt đầu và nơi nó kết thúc. Đường đó nhận nhãn kế tiếp của các đường cùng hướng (sau 3 là 4; sau B là C). Nhấn {{key:Esc}} để dừng.

## Đổi một đường lưới

Khi {{ui:Grid}} đang bật, nhấn một đường để chọn nó. Nhập {{ui:Label}} mới rồi nhấn {{key:Enter}}, hoặc nhấn {{ui:Delete this line}} (hoặc nhấn {{key:Delete}}). {{ui:Bubbles}} đặt nhãn tròn ở cả hai đầu, ở đầu hoặc cuối của mỗi đường, hoặc không đặt ở đâu cả. Mỗi thay đổi là một bước: {{key:Mod+Z}} hoàn tác lại.

## Vẽ theo lưới

Công cụ {{ui:Wall}}, công cụ {{ui:Column}} và các công cụ vẽ khác bắt điểm vào các đường lưới và vào nơi chúng giao nhau (dấu bắt điểm là một vòng tròn nhỏ có dấu chéo).

**Cột:** chọn {{ui:Build}} › {{ui:Column}}, chọn hình dạng (chữ nhật hoặc tròn), kích thước, và cột kéo **đến tầng phía trên** hay đến một chiều cao cố định, rồi nhấn. {{ui:At every grid crossing}} đặt một cột tại mỗi giao điểm chưa có cột. Nhấn một cột để đổi hình dạng, kích thước hoặc chiều cao trong {{ui:Properties}}; {{key:Delete}} sẽ xóa cột. Các cột kéo đến tầng phía trên sẽ theo chiều cao của tầng đó khi nó thay đổi.

## Bạn sẽ thấy

- Lưới trên mặt bằng của mọi tầng, với một nhãn tròn và nhãn của nó ở hai đầu mỗi đường.
- Các đường lưới trong bộ bản vẽ: trên mặt bằng, và trên mặt đứng và mặt cắt nơi một đường được nhìn thẳng từ đầu, với nhãn tròn nằm phía trên công trình. Xem [Mặt đứng, mặt cắt và tờ](topic:sheets).
- Trong tệp IFC: một lưới cho công trình (IfcGrid, các đường đánh số nằm trong một danh sách và các đường đánh chữ trong danh sách kia), và các cột dạng IfcColumn kèm kích thước, chiều cao và khối lượng. Các chương trình BIM khác đều hiển thị cả hai.

:::note
Lưới đến từ tệp của chương trình khác vẫn được hiển thị, và các công cụ vẫn bắt điểm vào nó, nhưng các đường của nó không thể đổi ở đây.
:::
