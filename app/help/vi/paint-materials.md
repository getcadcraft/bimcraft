---
title: Tô vật liệu lên tường, sàn và mái
summary: Gán cho phần tử một vật liệu như gạch, ốp vách, ngói, gỗ hoặc gạch lát, cho toàn bộ phần tử hoặc chỉ một mặt, được lưu trong IFC và hiển thị trong ảnh kết xuất.
keywords: tô, vật liệu, lớp hoàn thiện, kết cấu, gạch, ốp vách, ngói, lợp mái, gỗ, đá, gạch lát, bê tông, vữa trát, cỏ, sỏi, kính, kim loại, mặt tường, bên trong, bên ngoài, lớp hoàn thiện sàn, phòng, kiểu bề mặt
from: fbfed676
---

{{ui:Tô vật liệu}} trên thanh công cụ mở thư viện vật liệu phủ lên khung nhìn 3D: gạch và khối xây, ốp vách, lợp mái, gỗ, đá, gạch lát, bê tông, vữa trát, mặt đất, kính và kim loại.

## Tô phần tử

1. Nhấp {{ui:Tô vật liệu}}.
2. Nhấp một vật liệu.
3. Nhấp các phần tử trong khung nhìn 3D. Mỗi lần nhấp sẽ tô phần tử bạn nhấp.

Để tô nhiều phần tử cùng lúc, chọn chúng trước (nhấp, {{key:Ctrl}}+nhấp, hoặc [tìm kiếm](topic:find)), rồi nhấp vật liệu: mọi phần tử được chọn nhận vật liệu trong một bước.

Phần tử hiển thị màu của vật liệu trong khung nhìn 3D ngay lập tức. Kết cấu của nó hiện trong [ảnh kết xuất](topic:render). {{key:Esc}} hoặc {{ui:Đóng}} kết thúc việc tô.

## Tô một mặt

Chọn {{ui:Chỉ mặt được nhấp}}, rồi nhấp mặt bạn muốn: mặt ngoài của tường bằng ốp vách và mặt trong bằng lớp hoàn thiện khác, hoặc mặt trên của sàn bằng gỗ với mặt dưới giữ nguyên. Phần còn lại của phần tử giữ vật liệu của nó.

Một mặt được xác định theo hướng của chính phần tử, nên nó vẫn là cùng một mặt khi bạn di chuyển hoặc xoay phần tử.

Để tô sàn theo từng phòng, cho mỗi phòng một sàn riêng ({{ui:Vẽ}} › {{ui:Sàn}} › **Phòng này**, xem [Phòng, sàn, trần và mái](topic:floors-and-roofs)), rồi tô mặt trên của từng sàn.

## Gỡ vật liệu

Nhấp ô màu kẻ sọc ({{ui:Không có vật liệu}}), rồi nhấp phần tử. Mọi vật liệu trên nó, kể cả các mặt, đều được gỡ bỏ.

## Trong tệp

Việc tô thay đổi IFC (mỗi lần là một bước, {{key:Ctrl+Z}} hoàn tác) và vẫn là IFC thuần:

- mỗi phần tử được tô có thêm bộ thuộc tính `CadCraft_Render` nêu tên vật liệu của nó, và một thuộc tính cho mỗi mặt được tô;
- khối của nó có một kiểu bề mặt với màu của vật liệu, để các chương trình BIM khác hiển thị màu. Trong IFC4, kiểu này cũng nêu kết cấu.

Khi BimCraft định hình lại một bức tường bạn đã tô (chẳng hạn bạn kéo đầu tường), tường giữ vật liệu và màu của nó, trong BimCraft, trong ảnh và trong các chương trình khác.

:::note
Các kết cấu do chính BimCraft vẽ: chúng hoạt động ngoại tuyến và miễn phí dùng cho mọi mục đích (CC0). Kết cấu ảnh của riêng bạn chưa được xây dựng.
:::

## Kết cấu trong khung nhìn 3D

Một bức tường gạch đã tô hiển thị các viên gạch, một sàn gỗ hiển thị các tấm ván, ở kích thước thực, ngay khi lớp sơn được áp dụng. Bỏ chọn **Hiển thị kết cấu trong khung nhìn 3D** trong bảng Tô vật liệu để chỉ thấy màu phẳng (một mô hình rất lớn sẽ tự tắt chúng và báo cho bạn biết). Tô màu theo thuộc tính luôn hiển thị màu riêng của nó. Các kết cấu do chương trình vẽ, nên không có gì được tải xuống, và ảnh kết xuất cùng tệp glTF đều mang chúng trong mọi trường hợp.
