---
title: Đo khoảng cách, diện tích mặt và vị trí trong 3D
summary: Đo giữa hai điểm của một mô hình IFC với bắt điểm vào góc và cạnh, đọc chênh lệch theo X, Y và Z, và đo diện tích của một mặt phẳng.
keywords: đo, phép đo, khoảng cách, chiều dài, kích thước, diện tích, diện tích mặt, bắt điểm, góc, cạnh, thước dây, thước, khoảng hở, vị trí, vĩ độ, kinh độ, tọa độ, tọa độ địa lý, chuyển đổi bản đồ, EPSG, khảo sát, tọa độ đông, tọa độ bắc, WGS 84, hệ quy chiếu
from: 5f430bba
---

## Bạn sẽ làm gì

Kiểm tra khoảng hở, chiều dài tường hoặc kích thước của một mặt trực tiếp từ mô hình, mà không cần mở chương trình thiết kế.

## Các bước

1. Mở một mô hình IFC.
2. Nhấp {{ui:Đo}} trên thanh công cụ, hoặc nhấn {{key:M}}. Một thanh mở ở dưới cùng khung nhìn.
3. **Một khoảng cách:** khi {{ui:Khoảng cách}} được chọn, nhấp điểm thứ nhất, rồi điểm thứ hai. Gần một góc, con trỏ bắt vào góc đó; gần một cạnh, bắt vào cạnh; nhãn nhỏ ở con trỏ cho biết là gì. Mỗi cặp lần nhấp tạo một phép đo.
4. **Diện tích của một mặt:** chọn {{ui:Diện tích mặt}} và nhấp một mặt. Toàn bộ mặt phẳng được làm sáng và diện tích của nó hiển thị.
5. **Đường thẳng:** giữ {{key:Shift}} khi chọn điểm thứ hai, hoặc nhấn {{ui:Thẳng}} trên thanh để giữ chế độ này. Đường khi đó chạy dọc theo trục gần con trỏ nhất (trong góc nhìn từ trên, dọc theo X hoặc Y của mặt bằng; trong các góc nhìn khác, dọc theo X, Y hoặc Z), và nhãn con trỏ hiển thị "thẳng theo một trục". {{key:M}} vẫn bắt đầu và dừng Đo.
6. Nhấp {{ui:Xóa}} để gỡ các phép đo, hoặc {{ui:Xong}} (hoặc {{key:Esc}}) để dừng đo.

## Bạn sẽ thấy gì

- Một đường nối hai điểm với chiều dài ghi trên đó, và trên thanh là chiều dài cùng độ dài theo X, Y và Z (theo trục của mô hình, Z hướng lên), tất cả theo {{ui:Đơn vị}} đã chọn trên thanh công cụ.
- Diện tích của một mặt tính bằng mét vuông (m²), hiển thị trên mặt và trên thanh.
- Nhãn giữ nguyên trên các phép đo khi bạn xoay, di chuyển khung nhìn và thu phóng.
- Khi đang đo, các lần nhấp không chọn cấu kiện. Mặt phẳng cắt hoặc hộp cắt vẫn cắt mô hình, và bạn có thể đo những gì nó hiển thị, kể cả các mặt cắt.

## Một điểm nằm ở đâu trên Trái Đất

Nhấp {{ui:Vị trí}} trên thanh đo, rồi nhấp một điểm trên mô hình (nó bắt vào góc và cạnh như khi đo khoảng cách). Thanh hiển thị:

- **vĩ độ và kinh độ**, theo độ thập phân và theo độ, phút, giây, mặc định trong WGS 84;
- **tọa độ bản đồ** (tọa độ Đông và Bắc, viết theo {{ui:Đơn vị}} đã chọn trên thanh công cụ) trong hệ tọa độ bản đồ riêng của mô hình, ví dụ `EPSG:28356`;
- **cao độ** và hệ quy chiếu đứng mà tệp ghi, cùng **hệ quy chiếu** riêng của tệp (ví dụ GDA94).

{{ui:Sao chép}} đưa tất cả vào bộ nhớ tạm trong một dòng. Để đổi hệ tọa độ của vĩ độ và kinh độ, vào {{ui:Cài đặt}} › {{ui:BimCraft}} › {{ui:Vị trí}}: WGS 84 (như GPS và bản đồ web), hệ quy chiếu riêng của tệp, hoặc một hệ phổ biến khác như ETRS89 hoặc NAD83.

Cần một mô hình có tọa độ địa lý: mô hình được xuất với tọa độ bản đồ (một chuyển đổi bản đồ sang hệ phẳng có mã EPSG). Mô hình chỉ có vĩ độ và kinh độ của công trường sẽ nhận một vị trí gần đúng, tính từ điểm của công trường và hướng bắc thật, và thanh sẽ thông báo điều đó. Khi có nhiều mô hình mở, mỗi điểm dùng tọa độ địa lý của mô hình riêng của nó.

:::note
Chuyển đổi giữa các hệ quy chiếu (ví dụ GDA94 sang WGS 84) được thực hiện không dùng tệp lưới, nên chỉ chính xác trong vài mét; dòng trạng thái cho biết mức độ chính xác. Bản thân tọa độ bản đồ là chính xác.
:::

## Các lỗi thường gặp

- **"…không có tọa độ địa lý".** Tệp không có chuyển đổi bản đồ và không có vĩ độ, kinh độ của công trường. Hãy xuất lại với hệ tọa độ đã được thiết lập (tọa độ chung / điểm khảo sát trong công cụ thiết kế).
- **Có tọa độ bản đồ nhưng không có vĩ độ và kinh độ.** Tệp ghi hệ tọa độ bản đồ mà không có mã EPSG, hoặc có mã không nằm trong danh sách; dòng trạng thái cho biết đó là trường hợp nào.

- **Điểm rơi vào mặt, không phải góc.** Bắt điểm xét cấu kiện nằm dưới con trỏ. Hãy di chuyển gần góc hơn, hoặc phóng to.
- **Diện tích nhỏ hơn mong đợi.** Các lỗ mở bị bỏ qua, và một mặt bị uốn cong là nhiều mặt: hãy nhấp từng mặt.
- **{{key:Esc}} dừng đo.** Lần {{key:Esc}} đầu tiên bỏ một khoảng cách đang đo dở; lần thứ hai thì dừng.

## Tiếp theo

- [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)
- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
