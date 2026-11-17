---
title: Khung xem trực tiếp
summary: Một bảng bên cạnh mô hình, hiển thị mô hình theo kiểu thời gian thực, với mặt trời, bóng đổ và ánh sáng phản xạ; theo dõi mọi thay đổi bạn thực hiện; đi bộ qua mô hình và đặt giờ trong ngày cùng tháng.
keywords: xem trực tiếp, thời gian thực, kết xuất thời gian thực, đi bộ, đi bộ qua, góc nhìn thứ nhất, trình bày, khách hàng, màn hình thứ hai, cửa sổ thứ hai, màn hình, giờ trong ngày, mặt trời, mùa, tháng, bóng đổ, chiếu sáng môi trường, phản xạ, ánh sáng phản xạ, chiếu sáng toàn cục, webgpu, webgl
from: ea5c02bf
---

Khung xem trực tiếp hiển thị mô hình theo kiểu thời gian thực: bầu trời và mặt trời theo vị trí và ngày của công trường, bóng đổ của mặt trời, sơn và vật liệu bạn gán cho các cấu kiện, đèn, và ánh sáng phản xạ từ tường và sàn. Nó theo dõi những gì bạn làm: xoay khung nhìn 3D thì nó cũng xoay theo, thay đổi mô hình thì nó hiển thị thay đổi sau một lát. Không có gì được tải lên.

Nó vẽ cùng cảnh, sơn, đèn và mặt trời như [Kết xuất một ảnh](topic:render); để có một ảnh hoàn chỉnh, hãy dùng chức năng đó.

## Mở khung

1. Mở một mô hình và chọn {{ui:Xem trực tiếp}} trên thanh công cụ. Bảng mở ra trên ứng dụng, ở góc dưới bên phải.
2. Kéo thanh tiêu đề để di chuyển, kéo góc để phóng to.
3. {{ui:Xem trực tiếp trong cửa sổ mới}} (nút bên cạnh) hoặc {{ui:Cửa sổ mới}} trong bảng sẽ chuyển nó sang một cửa sổ riêng, dành cho màn hình thứ hai. Nếu trình duyệt chặn cửa sổ bật lên, nó sẽ mở như bảng.
4. {{ui:Đóng}} sẽ đóng nó.

## Các điều khiển

| Điều khiển | Chức năng |
|---|---|
| {{ui:Theo khung nhìn}} | Bật: khung xem trực tiếp nhìn theo hướng khung nhìn 3D. Khi đi bộ thì tắt |
| {{ui:Đi bộ}} | Đi bộ qua mô hình (xem bên dưới) |
| {{ui:Trọng lực}} | Khi đi bộ: đứng trên sàn và leo cầu thang. Tắt: bay |
| {{ui:Giờ}} | Giờ trong ngày. Mặt trời di chuyển khi bạn kéo |
| {{ui:Tháng}} | Tháng, để bạn thấy mặt trời vào mùa đông và mùa hè |
| {{ui:Chất lượng}} | {{ui:Theo máy này}}, hoặc {{ui:Thấp}}, {{ui:Trung bình}} hoặc {{ui:Cao}} |

Dòng ở dưới cùng cho biết thứ đang vẽ khung nhìn (WebGPU hoặc WebGL 2), chất lượng, và ánh sáng phản xạ.

## Đi bộ qua mô hình

1. Xoay khung nhìn 3D đến nơi bạn muốn đứng rồi chọn {{ui:Đi bộ}}. Bạn đứng trên sàn bên dưới điểm nhìn của khung, cao 1.6 m.
2. Nhấp vào khung xem trực tiếp, rồi dùng {{key:W}} {{key:A}} {{key:S}} {{key:D}} hoặc các phím mũi tên. Giữ {{key:Shift}} để chạy. Kéo để nhìn quanh.
3. Bậc cao tới 40 cm sẽ được leo (cầu thang); vật cao hơn là tường. Tường chặn bạn lại và bạn trượt dọc theo chúng.
4. Khi {{ui:Trọng lực}} tắt, bạn bay: {{key:E}} đi lên, {{key:Q}} đi xuống.
5. {{key:Esc}} dừng đi bộ.

## Ánh sáng phản xạ

Ánh sáng phản xạ từ tường được chiếu nắng xuống sàn, và phần tối hơn bên trong phòng, được tính toán ở nền trên mọi nhân xử lý. Trong lúc tính, dòng dưới cùng hiển thị {{ui:Ánh sáng phản xạ: 40 %}}; khi xong, khung xem sẽ áp dụng nó. Sau mỗi thay đổi, quá trình này lại bắt đầu.

:::note
Đây là một phép xấp xỉ cho khung xem trực tiếp, không phải ảnh đã kết xuất: các chi tiết nhỏ nằm giữa các điểm sẽ nhận ánh sáng phản xạ của các điểm gần chúng.
:::

:::note
Các trình duyệt khác nhau. Nơi trình duyệt có WebGPU, khung xem trực tiếp dùng WebGPU; ở nơi khác, nó dùng WebGL 2 và trông giống hệt. Nếu không có cả hai, bảng sẽ thông báo.
:::
