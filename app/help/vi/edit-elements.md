---
title: Xóa, cắt, sao chép và dán cấu kiện công trình
summary: Chọn tường, cửa, nội thất hoặc bất kỳ thứ gì khác trong mô hình IFC; xóa, cắt, hoặc sao chép và dán chúng tại nơi bạn nhấp, tại chỗ, hoặc sang tầng khác.
keywords: xóa, gỡ bỏ, cắt, sao chép, dán, nhân bản, di chuyển, chọn tất cả, chọn hết, cấu kiện công trình, tường, cửa đi, cửa sổ, cầu thang, lỗ mở, hoàn tác
from: d9eec37f
---

## Bạn sẽ làm gì

Thay đổi nội dung của mô hình IFC: bỏ các cấu kiện không cần, sao chép một bức tường hoặc một bộ nội thất sang vị trí khác, hoặc di chuyển cấu kiện bằng cách cắt và dán. Mỗi thay đổi là một bước bạn có thể hoàn tác, và khi lưu, hệ thống ghi thành một tệp mới, nên tệp gốc giữ nguyên.

## Các bước

1. Mở một mô hình IFC. Xem [Mở mô hình IFC và xem trong 3D](topic:open-ifc-model).
2. Chọn những gì bạn muốn thay đổi: nhấp một cấu kiện, giữ {{key:Mod}} hoặc {{key:Shift}} rồi nhấp để chọn thêm, hoặc nhấn {{key:Mod+A}} ({{ui:Thêm}}, {{ui:Chọn tất cả}}) để chọn mọi cấu kiện đang hiển thị.
3. Sau đó:
   - **Xóa:** nhấn {{key:Delete}}, hoặc {{ui:Thêm}}, {{ui:Xóa}}.
   - **Sao chép:** nhấn {{key:Mod+C}} hoặc nhấp {{ui:Sao chép}}.
   - **Cắt:** nhấn {{key:Mod+X}}, hoặc {{ui:Thêm}}, {{ui:Cắt}}. Các cấu kiện được gỡ khỏi mô hình và bạn có thể dán chúng.
4. Để dán, nhấn {{key:Mod+V}} hoặc nhấp {{ui:Dán}}. Một hộp trong suốt có kích thước bằng thứ bạn đã sao chép sẽ đi theo con trỏ, trên tầng được chọn trong thanh đặt. Nhấn {{key:R}} để xoay 90°, rồi nhấp nơi cần đặt. Mỗi lần nhấp đặt thêm một bản sao; nhấn {{key:Esc}} để dừng.
5. Hoặc nhấn {{key:Mod+Shift+V}} ({{ui:Thêm}}, {{ui:Dán tại chỗ}}): sau khi cắt, các cấu kiện trở về đúng vị trí cũ; sau khi sao chép, bản sao được đặt ngay cạnh bản gốc.
6. Nhấp {{ui:Lưu thành IFC}} để tải xuống mô hình đã chỉnh sửa.

## Những gì đi kèm cấu kiện

- **Bộ phận:** cầu thang đi kèm các vế thang, tường rèm đi kèm các tấm, bất kỳ thứ gì được tạo từ nhiều bộ phận đều đi kèm tất cả.
- **Lỗ mở:** tường đi kèm các lỗ mở đã khoét trong nó. Xóa cửa đi hoặc cửa sổ cũng xóa lỗ mở mà nó lấp đầy, nên tường được đóng lại, như trong phần mềm thiết kế khác. Xóa một bức tường vẽ trong BimCraft cũng xóa các cửa đi và cửa sổ trên tường đó, và nối lại các tường còn lại. Xóa một bức tường từ tệp tạo ở nơi khác thì cửa đi và cửa sổ vẫn ở nguyên vị trí.
- **Dữ liệu:** bản sao có cùng kiểu, vật liệu, bộ thuộc tính và khối lượng với bản gốc, và có một GlobalId mới. Sau này thay đổi một giá trị trên bản sao sẽ không ảnh hưởng đến bản gốc.
- **Mục thư viện** giữ dữ liệu thư viện của chúng; bản sao nhận số mục trống tiếp theo, còn mục đã cắt rồi dán lại thì giữ số riêng của nó.

## Bạn nên thấy gì

- "Đã xóa: …" hoặc "Đã dán: …" trong danh sách {{ui:Thay đổi}}. {{key:Mod+Z}} hoàn tác thay đổi cuối cùng; {{key:Mod+Y}} làm lại thay đổi đó.
- Sau khi xóa, dòng trạng thái cho biết có bao nhiêu bộ phận và lỗ mở cũng bị xóa.
- Các cấu kiện vừa dán được chọn, nên bạn có thể dán tại chỗ thêm lần nữa để tạo một hàng, hoặc xóa chúng.

## Điều nên biết

- Bản sao dùng cùng hình học với bản gốc (IFC cho phép các cấu kiện dùng chung hình học), nên tệp tăng rất ít.
- Cấu kiện công trình chỉ dán vào mô hình mà chúng được sao chép từ đó, trong cùng thẻ. Để dùng mục thư viện đã đặt trong mô hình khác, hãy sao chép từng mục một: xem [Sao chép, dán và nhân bản mục thư viện](topic:copy-paste).
- Tầng, không gian, tòa nhà và khu đất không thể xóa hoặc sao chép. Hãy chọn các cấu kiện nằm trong đó. Một phòng vẽ trong BimCraft được tạo từ các tường bao quanh: xóa một bức tường để nối hai phòng.
- Tường, cửa đi và cửa sổ vẽ bằng công cụ tường, cửa đi, cửa sổ của BimCraft chưa thể sao chép, cắt hoặc nhân bản; dòng trạng thái sẽ cho biết điều đó. Hãy vẽ lại. Xóa vẫn dùng được.
- Sao chép cũng đưa tên và thuộc tính của những gì bạn sao chép vào bộ nhớ tạm dưới dạng văn bản, để dán vào bảng tính hoặc thư điện tử.

## Lỗi thường gặp

- **{{ui:Xóa}} bị mờ.** Chưa chọn gì, hoặc chỉ chọn tầng hoặc không gian. Đưa con trỏ vào đó để xem lý do.
- **Dán báo cấu kiện đến từ mô hình khác.** Bạn đã mở một mô hình khác kể từ khi sao chép. Hãy mở lại mô hình đầu tiên và sao chép lại ở đó.
- **Bản sao dán nằm ở tầng khác.** {{ui:Tầng}} trong thanh đặt quyết định nơi nó được đặt; hãy chọn tầng trước khi nhấp.

## Liên quan

- [Ẩn, cô lập và xem xuyên qua cấu kiện](topic:hide-and-isolate)
- [Phím và chuột](topic:keyboard#edit)
