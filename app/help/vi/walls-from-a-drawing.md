---
title: Tường từ bản vẽ đã vẽ lại
summary: Biến một mặt bằng DWG hoặc DXF thành tường, cửa đi và cửa sổ trên một tầng, và giữ bản vẽ bên dưới mặt bằng như một tham chiếu.
keywords: dwg, dxf, vẽ lại, đã vẽ lại, nhập mặt bằng, chuyển đổi, cad sang bim, 2d sang 3d, tường từ đường, lớp, khối, cửa từ khối, nền, bản vẽ tham chiếu, nền phía sau, xref, ứng dụng bản vẽ
from: 3bf213f1
---

## Mục tiêu

Dùng một mặt bằng mà bạn (hoặc người khác) đã vẽ trong ứng dụng bản vẽ làm điểm bắt đầu cho mô hình: các đường tường của nó trở thành tường, và các khối cửa đi và cửa sổ của nó trở thành cửa đi và cửa sổ.

## Các bước

1. Bật {{ui:Vẽ}} và chọn tầng mà bản vẽ thể hiện trong danh sách tầng của mặt bằng.
2. Chọn {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}}, rồi {{ui:Chọn một bản vẽ…}} và chọn tệp DWG hoặc DXF.
3. Trong hộp thoại:
   - **Đơn vị bản vẽ** lấy từ bản vẽ; chọn đơn vị khác nếu chúng sai (một mặt bằng vẽ theo feet nhưng đọc là inch sẽ nhỏ gấp mười hai lần).
   - **Các lớp chứa tường**: đánh dấu các lớp mà đường tường nằm trên đó. Các lớp có tên chứa "wall" được đánh dấu sẵn cho bạn.
   - **Các đường là**: **cả hai mặt của mỗi tường** (cách thông thường các mặt bằng được vẽ: mỗi cặp đường song song cách nhau tối đa 600 mm trở thành một tường có độ dày bằng khoảng hở), **đường tâm của tường**, hoặc **một mặt** với tường nằm bên trái hoặc bên phải của nó. Với đường tâm hoặc một mặt, loại tường quyết định độ dày.
   - **Loại tường** và **Chiều cao tường**, như với công cụ {{ui:Tường}}.
   - **Khối**: chọn một loại cửa đi hoặc cửa sổ cho từng khối là cửa đi hoặc cửa sổ, hoặc bỏ qua. Các khối có tên chứa "door" hoặc "window" được chọn sẵn cho bạn. Mỗi khối được đặt vào bức tường nó nằm trên, rộng bằng khối dọc theo tường; một cửa đi mở về phía mà cánh của nó được vẽ.
   - **Vị trí đặt**: theo tọa độ riêng của bản vẽ, hoặc với góc dưới bên trái của nó nằm tại gốc của mặt bằng.
   - **Giữ bản vẽ bên dưới mặt bằng của tầng này**: để nguyên đánh dấu để xem bản vẽ dưới dạng nét mảnh bên dưới những gì bạn tạo.
4. Dòng bên dưới các lựa chọn cho biết sẽ tạo bao nhiêu tường, cửa đi và cửa sổ. Nhấp {{ui:Tạo chúng}}.

## Kết quả

- Các tường, cửa đi và cửa sổ trên tầng, nối với nhau tại nơi chúng gặp nhau, cùng các phòng mà chúng khép kín; tất cả là một bước, nên {{key:Mod+Z}} sẽ lấy lại.
- Bản vẽ dưới dạng nét mảnh bên dưới mặt bằng. {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} liệt kê các bản vẽ được giữ trên tầng, mỗi bản có {{ui:Xóa}}; gỡ một bản không làm mất tường.
- Trong tệp IFC, bản vẽ được giữ là một chú thích trên tầng (các đường của nó), nên các chương trình BIM khác cũng hiển thị nó.

:::note
Một PDF hoặc bản quét cũng dùng được: xem [Tường từ bộ bản vẽ (PDF hoặc bản quét)](topic:walls-from-plans). Các cung bị bỏ qua (BimCraft vẽ tường thẳng), và các đường nằm trong khối cũng vậy. Các đường không có cặp trong "cả hai mặt" được đếm trong hộp thoại và bị bỏ qua: hãy vẽ những tường đó bằng công cụ {{ui:Tường}}, hoặc chỉnh lại bằng {{ui:Chỉnh sửa}} › {{ui:Cắt / kéo dài}} (xem [Cắt, kéo dài và nối tường](topic:trim-extend-walls)).
:::

:::tip
Vẽ lại trên một bản quét trong ứng dụng bản vẽ? Mở bản quét ở đây luôn và kiểm tra các tường với nó: xem [Mô hình từ bản quét](topic:model-from-a-scan).
:::
