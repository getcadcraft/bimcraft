---
title: Sàn theo mọi hình dạng, lỗ mở và dốc
summary: Vẽ một sàn hoặc bản sàn theo đường viền của nó (ban công, công xôn, chiếu nghỉ), đục lỗ trong đó, và vẽ dốc cùng các chiếu nghỉ của nó.
keywords: sàn, bản sàn, đường viền, ban công, công xôn, chiếu nghỉ, sàn hiên, lỗ sàn, lỗ mở, giếng, khoảng trống, dốc, độ dốc, dốc tiếp cận, dốc xe lăn, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Bạn sẽ làm gì

Tạo các sàn không theo phòng, chẳng hạn một ban công vượt ra ngoài tường, và vẽ dốc giữa các tầng.

## Vẽ sàn theo đường viền

1. Bật {{ui:Vẽ}}, chọn tầng, rồi chọn {{ui:Bản dựng}} › {{ui:Sàn theo đường viền}}.
2. Trong hàng dưới các công cụ, chọn **Loại** (bản bê tông hoặc sàn gỗ), **Công dụng** (sàn hoặc chiếu nghỉ), độ dày và vị trí mặt trên của sàn so với cốt tầng (0 = ngang với sàn của tầng; giá trị âm đặt sàn thấp hơn).
3. Nhấn các góc. Công cụ bắt vào tường, đường lưới và các giao điểm của chúng; giữ {{key:Shift}} để giữ một cạnh vuông góc. Chiều dài của mỗi cạnh và diện tích hiển thị khi bạn vẽ. {{key:Backspace}} hoàn tác góc cuối cùng.
4. Nhấn lại góc đầu tiên, nhấp đúp, hoặc nhấn {{key:Enter}} để kết thúc.

## Cắt một lỗ mở

Nhấn sàn (trong khung nhìn 3D, hoặc đường viền của nó trên mặt bằng), rồi trong {{ui:Thuộc tính}} nhấn {{ui:Thêm lỗ mở}} và nhấn các góc của lỗ mở bên trong sàn, kết thúc như trên. Phần {{ui:Thuộc tính}} của sàn liệt kê các lỗ mở của nó, mỗi lỗ có {{ui:Xóa}}, và diện tích của sàn không tính các lỗ đó.

## Vẽ dốc

1. Chọn {{ui:Bản dựng}} › {{ui:Dốc}}. Đặt chiều rộng và chọn **lên tầng phía trên** hoặc **lên một độ cao** mà bạn gõ.
2. Chọn cách đặt: **theo độ dốc** (1:12 để bắt đầu; dốc dài bằng độ cao cần) hoặc **theo chiều dài** (lần nhấn thứ hai đặt chiều dài, và độ dốc theo đó).
3. Nhấn chân dốc (điểm giữa của cạnh dưới), rồi nhấn hướng đi lên. Bản xem trước hiển thị chiều dài, các đoạn dốc và độ dốc của nó.

Dốc cao hơn 30 in (760 mm) được chia thành các đoạn, với một chiếu nghỉ 5 ft (1525 mm) ở giữa. Đây là các giá trị lập kế hoạch thông dụng, không phải quy chuẩn của bạn: cần kiểm tra quy định nơi bạn xây dựng. Dốc có độ dốc lớn hơn 1:12 được đánh dấu trong {{ui:Thuộc tính}} của nó.

## Bạn sẽ thấy gì

- Mỗi sàn, lỗ mở và dốc là một bước: {{key:Mod+Z}} hoàn tác nó.
- Trên mặt bằng, đường viền của một sàn đã vẽ (một lỗ mở được gạch chéo), và đường viền của một dốc, các đoạn, chiếu nghỉ và một mũi tên đi lên kèm độ dốc.
- {{ui:Thuộc tính}} của một sàn đã vẽ (loại, công dụng, độ dày, mặt trên, diện tích, lỗ mở) và của một dốc (chiều rộng, mặt trên, độ cao, độ dốc hoặc chiều dài); {{key:Delete}} xóa một trong hai.
- Một dốc lên tầng phía trên đi theo tầng đó khi chiều cao của tầng thay đổi.
- Trong tệp IFC: sàn đã vẽ là một bản sàn (IfcSlab, sàn hoặc chiếu nghỉ) với các lỗ mở được cắt ra (IfcOpeningElement); một dốc là IfcRamp gồm các đoạn dốc (IfcRampFlight) và bản chiếu nghỉ, với độ dốc và chiều rộng của nó.

:::note
Các sàn vẽ theo cách này giữ nguyên ở nơi bạn đã vẽ. Các sàn tạo bằng {{ui:Sàn}} đi theo phòng khi tường di chuyển: xem [Phòng, sàn, trần và mái](topic:floors-and-roofs).
:::
