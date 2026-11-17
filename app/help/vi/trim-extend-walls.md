---
title: Cắt, kéo dài và nối tường
summary: Cắt hoặc kéo dài tường đến một tường khác, và nối hai tường tại điểm chúng gặp nhau, mỗi thao tác là một bước bạn có thể hoàn tác.
keywords: cắt, kéo dài, góc, nối, gặp nhau, dọn dẹp, đầu tường, góc tường, cắt lùi, kéo dài độ dài, rút ngắn, chỉnh sửa, TR
from: a6fb2e8b
---

## Mục bạn sẽ làm

Chỉnh lại các tường bạn đã vẽ: cắt lùi một tường chạy qua tường khác, kéo dài một tường chưa tới, hoặc khép một góc hở.

## Các bước

1. Bật {{ui:Vẽ}} và chọn tầng trong danh sách tầng của mặt bằng.
2. **Cắt hoặc kéo dài đến một tường:** chọn {{ui:Chỉnh sửa}} › {{ui:Cắt / kéo dài}}. Nhấp tường để cắt hoặc kéo dài đến (cạnh), rồi nhấp từng tường bạn muốn thay đổi. Tường chạy qua cạnh sẽ được cắt lùi về nó, và phần bạn nhấp là phần được giữ lại; tường chưa tới cạnh được kéo dài đến khi gặp nó. Cạnh vẫn được chọn, nên bạn có thể nhấp nhiều tường lần lượt. Nhấn {{key:Esc}} để chọn cạnh khác.
3. **Nối hai tường tại một góc:** chọn {{ui:Chỉnh sửa}} › {{ui:Góc}}, nhấp tường thứ nhất, rồi tường thứ hai. Cả hai chạy đến điểm chúng gặp nhau, và BimCraft dọn góc. Khi một tường cắt ngang tường kia, phần bạn đã nhấp sẽ được giữ lại.
4. Nhấn {{key:Esc}} để bắt đầu lại, hoặc {{key:V}} để quay về {{ui:Chọn}}.

## Bạn sẽ thấy

- Khi bạn trỏ vào một tường, mặt bằng cho thấy nó sẽ nằm ở đâu, đã nối với các tường nó gặp, cùng độ dài mới.
- Mỗi thay đổi là một bước: {{key:Mod+Z}} hoàn tác nó.
- Phòng, sàn, trần, mái và những gì đi theo tường được tạo lại, như sau bất kỳ thay đổi nào của tường. Một phòng được khép bởi một góc hiển thị số và diện tích của nó.
- Cửa đi hoặc cửa sổ nằm trên phần bị cắt đứt sẽ bị xóa cùng nó.

## Cần biết

- Tường được vẽ theo đường tâm của chúng, nên chúng được cắt và kéo dài dọc theo đường tâm: một tường gặp đường tâm của tường kia, và chỗ nối được dọn thành hình chữ T hoặc chữ L.
- BimCraft cho biết lý do khi không làm được: hai tường song song, đường của tường đi ngang qua tường kia, một cửa đi hoặc cửa sổ đang chắn (di chuyển hoặc xóa nó trước), hoặc không còn phần nào của tường (dưới 1 mm). Một tường còn lại ngắn hơn 50 mm vẫn được tạo, kèm cảnh báo trong Vấn đề: xem [Lời khuyên bản vẽ](topic:drawing-advice).
- Chỉ các tường vẽ trong BimCraft mới cắt hoặc kéo dài được.

Xem thêm [Vẽ tường](topic:draw-walls) và [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door).
