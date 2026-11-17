---
title: Thay đổi thuộc tính IFC và lưu bản sao đã chỉnh sửa
summary: Thay đổi tên, thẻ, mô tả hoặc giá trị thuộc tính của một cấu kiện, hoàn tác, và tải xuống một tệp IFC mới trong khi tệp gốc vẫn giữ nguyên.
keywords: chỉnh sửa, thay đổi, thuộc tính, tham số, thẻ, tên, đổi tên, ký hiệu, lưu thành, tải xuống, hoàn tác, sao chép, ifc, ghi
from: f8035d62
---

## Bạn sẽ làm gì

Sửa dữ liệu trong mô hình IFC: đổi tên một cấu kiện, sửa thẻ của nó, thay đổi giá trị thuộc tính. Sau đó lưu một tệp IFC mới với các thay đổi của bạn. Tệp bạn đã mở không bao giờ bị động đến.

## Bạn có thể thay đổi gì

| Trường | Có thể chỉnh sửa |
|---|---|
| Tên, Loại đối tượng, Thẻ, Mô tả | Có |
| Giá trị thuộc tính đơn (văn bản, số, Có/Không) | Có |
| Thuộc tính kiểu (các bộ được đánh dấu "(kiểu)") | Có, và thay đổi áp dụng cho mọi cấu kiện thuộc kiểu đó |
| Kiểu, GlobalId, Dòng | Không |
| Khối lượng (chiều dài, diện tích, thể tích, số đếm) | Không |
| Danh sách, liệt kê và các giá trị nhiều phần khác | Không |
| Hình học, vị trí, thêm hoặc xóa cấu kiện | Không |

## Các bước

1. Mở một mô hình IFC và nhấp cấu kiện bạn muốn thay đổi.
2. Trong bảng {{ui:Thuộc tính}}, nhấp giá trị bạn muốn thay đổi. Nó chuyển thành một hộp văn bản. Giá trị trống hiển thị là *trống*.
3. Gõ giá trị mới.
4. Nhấn {{key:Enter}}, hoặc nhấp ở chỗ khác, để giữ lại. Nhấn {{key:Esc}} để hủy.
5. Nhìn giá trị: nó giờ in đậm với một thanh xanh bên cạnh, đánh dấu một giá trị đã chỉnh sửa.
6. Nhìn phần {{ui:Thay đổi}} bên trái: thay đổi được liệt kê dưới dạng *cấu kiện*: *trường*, giá trị cũ thành giá trị mới.
7. Lặp lại cho các giá trị khác hoặc các cấu kiện khác.
8. Nhấp {{ui:Lưu thành IFC}} (nó hiển thị có bao nhiêu thay đổi đang chờ, ví dụ "Lưu thành IFC (3)"), hoặc nhấn {{key:Mod+S}}.
9. Tìm "*original name* (edited).ifc" trong thư mục tải xuống của bạn.

## Bạn sẽ thấy gì

Dòng trạng thái ghi "Đã lưu *name* (edited).ifc với *n* thay đổi (… byte). Tệp gốc của bạn không thay đổi." Danh sách {{ui:Thay đổi}} trống, sẵn sàng cho vòng tiếp theo.

## Các loại giá trị

- **Văn bản**: bất cứ thứ gì bạn gõ được giữ nguyên. Xóa Tên, Loại đối tượng, Thẻ hoặc Mô tả sẽ gỡ bỏ giá trị.
- **Số**: gõ một số trơn, như `2.4` hoặc `1200`, theo đơn vị riêng của tệp. Không có ký hiệu đơn vị. Bất cứ thứ gì khác hiển thị "Nhập một số."
- **Số nguyên** (số đếm, số nguyên): "Nhập một số nguyên." nếu bạn gõ số thập phân.
- **Có/Không**: giá trị trở thành một menu với Có và Không.

Mỗi giá trị giữ kiểu IFC của nó, nên một số vẫn là số và các chương trình khác đọc đúng.

## Hoàn tác

1. Nhấp {{ui:Hoàn tác}} trong phần {{ui:Thay đổi}}, hoặc nhấn {{key:Mod+Z}} khi bạn không gõ trong một trường.
2. Lặp lại để hoàn tác thêm. Mỗi lần hoàn tác gỡ thay đổi mới nhất.

Bạn không thể hoàn tác vượt qua một lần lưu: sau khi lưu, danh sách bắt đầu lại. Tệp đã lưu giữ mọi thứ.

## Vì sao chỉnh sửa của bạn chỉ thay đổi một cấu kiện

Các công cụ xuất tiết kiệm không gian bằng cách chia sẻ dữ liệu. Một bộ thuộc tính có thể được chia sẻ bởi hai mươi cửa đi, và một giá trị ("Chịu lửa: 60 phút") có thể được liệt kê trong chín mươi bộ. Nếu BimCraft chỉ đơn giản thay đổi giá trị dùng chung, mọi cấu kiện chia sẻ nó cũng sẽ thay đổi.

Vì vậy BimCraft sao chép trước khi ghi:

- Nếu bộ thuộc tính bạn chỉnh sửa được chia sẻ với các cấu kiện khác, cấu kiện của bạn sẽ có bản sao riêng của bộ đó, và chỉ bản sao thay đổi.
- Nếu giá trị được chia sẻ với các bộ khác, bộ của bạn sẽ có bản sao riêng của giá trị.

Các cấu kiện lân cận giữ dữ liệu cũ của chúng. Đây được gọi là *sao chép khi ghi* (copy-on-write). Nó thêm vài mục nhỏ vào tệp, mà mọi chương trình IFC đều đọc bình thường.

**Thuộc tính kiểu là ngoại lệ có chủ ý.** Một bộ được đánh dấu "(kiểu)" thuộc về kiểu của cấu kiện, và trong IFC mọi cấu kiện cùng kiểu đều đọc nó từ đó. Thay đổi nó sẽ thay đổi kiểu, nên mọi cấu kiện thuộc kiểu đó hiển thị giá trị mới. Danh sách {{ui:Thay đổi}} đánh dấu các chỉnh sửa như vậy bằng "(kiểu)". Xem [Thay đổi thuộc tính kiểu cho mọi cấu kiện của một kiểu](topic:type-vs-instance).

## Cảnh báo trước khi mất công việc

- Mở một tệp khác khi bạn còn thay đổi chưa lưu sẽ hỏi "Bạn có *n* thay đổi chưa lưu trong *tệp*. Bỏ chúng không?" Nhấp Hủy để tiếp tục làm việc, rồi lưu.
- Đóng hoặc tải lại thẻ khi có thay đổi chưa lưu sẽ khiến trình duyệt hỏi bạn có muốn rời đi không.

## Lỗi thường gặp

- **Gõ đơn vị.** `2400 mm` bị từ chối. Hãy gõ `2400`.
- **Thay đổi một thuộc tính kiểu khi bạn muốn chỉ một cấu kiện.** Tìm ghi chú "(kiểu)" trước khi gõ. Nếu bạn muốn một cấu kiện khác biệt, hãy thay đổi thuộc tính thể hiện hoặc Thẻ hoặc Tên của nó.
- **Mong đợi tệp gốc thay đổi.** Lưu luôn tải xuống một tệp mới. Hãy tự thay thế tệp gốc nếu đó là điều bạn muốn, và giữ một bản sao.
- **Nhấn {{key:Mod+S}} khi không có thay đổi.** BimCraft chỉ lưu khi có gì để lưu; nếu không, hộp "Lưu trang" của trình duyệt có thể mở ra. Hãy đóng nó.
- **Lưu hai lần và mong đợi hai tệp nhỏ.** Mỗi lần lưu chứa mọi chỉnh sửa kể từ khi bạn mở mô hình.
- **Mong đợi chỉnh sửa quay lại tệp dự án.** BimCraft chỉ ghi IFC. Đưa tệp IFC đã chỉnh sửa vào chương trình thiết kế của bạn như cách bạn nhập bất kỳ IFC nào.
