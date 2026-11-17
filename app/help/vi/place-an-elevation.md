---
title: Đặt mặt đứng và mở khung nhìn của nó
summary: Đặt một ký hiệu mặt đứng lên mặt bằng tầng, hướng nó theo cách nó được nhìn, rồi tìm bản vẽ của nó trong trình duyệt dự án, chỉnh sửa trong đó và đưa lên bản vẽ. Các bước cho bố cục dải lệnh và bố cục cổ điển.
keywords: mặt đứng, elevation, elevation view, ký hiệu mặt đứng, elevation marker, elevation tag, đặt mặt đứng, place an elevation, mặt đứng mới, new elevation, tạo mặt đứng, make an elevation, mặt đứng bên ngoài, exterior elevation, khung nhìn bên, side view, khung nhìn trước, front view, nhìn từ một điểm, view from a point, mặt đứng ở đâu, where is my elevation, mở mặt đứng, open elevation, mặt đứng trên bản vẽ, elevation on a sheet, đổi hướng mặt đứng, flip elevation, đổi tên mặt đứng, rename elevation, mặt đứng bắc, north elevation, xếp lát khung nhìn, tile views, tách khung nhìn, split view, mặt bằng và 3D cạnh nhau, plan and 3D side by side
from: a7cfd2b9
---

## Bạn sẽ làm gì

Tạo một mặt đứng của riêng bạn: bản vẽ tòa nhà nhìn từ một điểm bạn chọn, hướng theo cách bạn chọn. Cần hai lần bấm trên mặt bằng tầng. Bản vẽ sau đó được liệt kê cùng các mặt đứng khác của tòa nhà.

:::note
Bốn phía đã có sẵn. Mọi tòa nhà đều có mặt đứng Bắc, Đông, Nam và Tây trong {{ui:Trình duyệt dự án}} dưới {{ui:Mặt đứng}} mà không cần đặt gì. Hãy đặt một mặt đứng của riêng bạn khi bạn muốn nhìn từ nơi khác: vuông góc với một cánh nhà xiên, từ trong sân trong, hoặc vào một bức tường bên trong một phòng.
:::

## Công cụ ở đâu

- Các bố cục dải lệnh: {{ui:Chế độ xem}} › **Tạo** › {{ui:Cao độ}}.
- Bố cục cổ điển: bật {{ui:Vẽ}}, rồi {{ui:Bản dựng}} › {{ui:Cao độ}}.
- Mọi kiểu menu: lệnh có tên {{ui:Cao độ}}; bảng lệnh tìm thấy nó, còn dòng lệnh nhận ELEVATION.

## Các bước

1. Chọn {{ui:Cao độ}}. Một mặt đứng được đặt trên mặt bằng tầng, nên nếu bạn đang ở khung nhìn 3D, BimCraft hiển thị mặt bằng của tầng bạn đang ở. Con trỏ hiển thị **Bấm nơi mặt đứng đặt**.
2. Bấm nơi khung nhìn được lấy từ đó. Với mặt đứng bên ngoài, bấm bên ngoài tòa nhà, cách bức tường bạn muốn nhìn một chút.
3. Lúc này con trỏ hiển thị **Bấm theo hướng nhìn**. Di chuyển về phía tòa nhà: một mũi tên chỉ hướng, và đoạn ngắn cắt ngang lần bấm đầu là cạnh mà khung nhìn hướng tới. Bấm.
4. Một vòng tròn có số và một con trỏ xuất hiện trên mặt bằng. Đó là ký hiệu mặt đứng. Cái đầu tiên là 1, cái tiếp theo là 2.
5. Nhấn Esc để kết thúc, hoặc tiếp tục và đặt thêm một cái khác.

Đặt một ký hiệu là một bước: {{key:Mod+Z}} lấy lại nó.

## Mở bản vẽ

Mặt bằng vẫn ở phía trước bạn sau lần bấm thứ hai. Bản vẽ nằm trong {{ui:Trình duyệt dự án}}:

1. Mở {{ui:Mặt đứng}}. Của bạn được liệt kê sau bốn phía là **Elevation 1**.
2. Bấm nút bút chì {{ui:Chỉnh sửa trong khung nhìn này}} trên dòng của nó để xem bản vẽ và làm việc trong đó: di chuyển tường, cửa, cửa sổ và các tầng, thêm ghi chú và kích thước. Xem [Chỉnh sửa trong mặt đứng và mặt cắt](topic:edit-in-elevations).
3. Bấm chính dòng đó để mở bộ bản vẽ, hoặc thêm khung nhìn vào một tờ của riêng bạn. Xem [Khung nhìn và tờ](topic:views-and-sheets).

Trong bố cục cổ điển, trình duyệt dự án nằm ở bảng bên trái khi {{ui:Vẽ}} được bật. Trong các bố cục dải lệnh, nó là thẻ {{ui:Trình duyệt dự án}} dưới Thuộc tính.

## Khung nhìn hiển thị gì

- Mọi thứ đứng trước ký hiệu, cho đến khi hết tòa nhà. Không có gì phía sau.
- Các tầng, với tên và cao độ của chúng.
- Nếu ký hiệu đứng bên trong tòa nhà, bất cứ thứ gì nó đứng trong đó sẽ bị cắt tại đó, như một mặt cắt cắt nó. Để có mặt đứng bên ngoài sạch, hãy đứng bên ngoài.

## Thay đổi nó

Chọn ký hiệu trên mặt bằng (bấm vào vòng tròn của nó bằng {{ui:Chọn}}). Thuộc tính có:

- {{ui:Nhãn}}: số của nó hoặc một tên riêng, tối đa 8 ký tự.
- {{ui:Đảo hướng nhìn}}: nhìn theo hướng ngược lại từ cùng vị trí.
- {{ui:Nhìn xa tới}}: khung nhìn vươn ra phía trước ký hiệu bao xa. 0 hiển thị mọi thứ.

Nhấn Delete để xóa ký hiệu và bản vẽ của nó. Hoàn tác đưa cả hai trở lại.

:::tip
Để xem mặt bằng và khung nhìn 3D cùng lúc khi bạn làm việc, dùng {{ui:Chế độ xem}} › **Cửa sổ** › {{ui:Xếp lát các khung nhìn}} trong các bố cục dải lệnh, hoặc {{ui:Tách}} trong bố cục cổ điển. Một cú bấm vào thẻ khung nhìn sẽ quay về một khung nhìn.
:::

## Giới hạn

- Chưa thể kéo hoặc xoay ký hiệu trên mặt bằng. Xóa nó và đặt lại, hoặc dùng {{ui:Đảo hướng nhìn}}.
- Trong danh sách các khung nhìn bạn có thể thêm vào tờ, một mặt đứng của riêng bạn được liệt kê cùng các mặt cắt.
- Thẻ cửa và cửa sổ được vẽ trên bốn mặt đứng, không vẽ trên mặt đứng bạn đặt.

## Trong IFC

Ký hiệu được lưu trong tệp dưới dạng IfcAnnotation tên "Elevation 1" với kiểu đối tượng "Elevation marker", trong tầng nơi nó được đặt. Chương trình khác hiển thị nó như một chú thích; bản vẽ được BimCraft tạo từ mô hình mỗi lần.
