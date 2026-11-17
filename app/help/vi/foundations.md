---
title: Móng dưới các tường
summary: Đặt một sàn trên nền, tường móng có sàn, gầm sàn hoặc tầng hầm dưới một tòa nhà chỉ với một lần nhấn; đài móng được định kích thước theo các tường và số tầng, và móng đi theo khi tường di chuyển.
keywords: móng, đài móng, sàn trên nền, mép dày, sàn liền khối, tường móng, gầm sàn, tầng hầm, tường tầng hầm, băng giá, bê tông, chiều rộng đài móng
from: c0e20172
---

## Bạn sẽ làm gì

Tạo cho tòa nhà một móng khớp với các tường của nó. BimCraft theo mặt ngoài của tường, định kích thước đài móng theo loại tường và số tầng đặt trên đó, và tạo lại móng bất cứ khi nào tường thay đổi.

## Đặt móng

1. Trên tầng có các tường đặt trên móng (thường là tầng đầu), mở {{ui:Bản dựng}} và chọn {{ui:Móng}}.
2. Chọn loại:
   - **Sàn trên nền**: một bản bê tông 4 in mà mặt trên của nó là sàn, với một mép dày bên dưới các tường.
   - **Tường móng và sàn**: tường móng lên đến sàn trên các đài móng, với một sàn bên trong chúng.
   - **Gầm sàn**: tường móng dừng dưới kết cấu sàn, trên các đài móng, không có sàn.
   - **Tầng hầm**: tường móng đủ chiều cao trên các đài móng, với một sàn tầng hầm, nằm dưới kết cấu sàn.
3. Trỏ vào bên trong tòa nhà: các đài móng hiện nét đứt cùng kích thước của chúng. Nhấn.

Nhấn một tòa nhà đã có móng sẽ chọn móng đó, để bạn đổi nó thay vì thêm móng thứ hai.

## Thay đổi móng

Chọn móng (nhấn bên trong tòa nhà bằng {{ui:Móng}}, hoặc nhấn bất kỳ phần nào của nó trong khung nhìn 3D hoặc cây mô hình) và đổi trong {{ui:Thuộc tính}}: loại, chiều rộng và độ sâu của đài móng, khoảng cách từ đáy đài móng xuống dưới, độ dày tường, khoảng cách các tường dừng bên dưới sàn, chiều cao tầng hầm và độ dày bản sàn. Mỗi thay đổi là một bước {{ui:Hoàn tác}}.

Các kích thước đánh dấu **auto** lấy từ các tường: đài móng rộng 12 in, 15 in hoặc 23 in cho một, hai hoặc ba tầng trên sàn hoặc tường móng; 18 in, 22 in hoặc 27 in trên gầm sàn hoặc tầng hầm; và rộng thêm 4 in dưới tường xây hoặc tường bê tông. Gõ một kích thước để đặt giá trị riêng của bạn; gõ `0` để quay về **auto**.

:::warning
Các kích thước tự động là mặc định được gắn nhãn cho nhà khung nhẹ điển hình, không phải tính toán kỹ thuật. Kỹ sư thiết kế kiểm tra đài móng, độ sâu và tường theo đất nền, độ sâu băng giá và tải trọng.
:::

## Những gì được lưu

Một móng được lưu thành một cụm cấu kiện IFC ("Foundation") gồm một đài móng (hoặc mép dày của một sàn), một tường móng và một sàn tùy theo loại cần, tất cả đều là bê tông, mỗi cái có khối lượng: chiều dài, chiều rộng, chiều cao, diện tích và thể tích, sẵn sàng cho việc bóc tách khối lượng.

## Điều cần biết

- Di chuyển, thêm hoặc xóa tường thì móng bên dưới chúng được tạo lại; vẽ tường ở tầng phía trên thì các đài móng bên dưới rộng thêm để đỡ tầng tăng thêm.
- {{key:Delete}} xóa một móng đã chọn cùng mọi phần của nó.
- Khi mặt đất của khu đất nằm trong mô hình (xem [Mặt đất khu đất, nền xây dựng và lát nền](topic:terrain)), tường móng và đài móng gầm sàn hạ xuống theo nó theo bước 8 in.
- Đài móng dưới các tường bên trong chưa được xây dựng.
