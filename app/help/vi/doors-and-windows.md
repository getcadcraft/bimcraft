---
title: Cửa đi và cửa sổ
summary: Đặt cửa đi và cửa sổ vào các tường đã vẽ: trỏ vào một tường, xem hướng mở và khoảng cách đến các góc, rồi nhấp; lỗ mở trên tường tự cắt.
keywords: cửa đi, cửa, cửa sổ, lỗ mở, hướng mở, bản lề, chiều, lật, cửa trượt, cửa âm tường, cửa nhà để xe, cửa đôi, cửa tủ gấp, cửa Pháp, cửa kiểu chuồng trại, kính bên, cửa vào, cửa mở quay, cửa sổ treo, cửa sổ trượt, cửa sổ cố định, bậu cửa, lanh tô, cửa sổ mở hất, cửa sổ kính lớn, ô lấy sáng phía trên
from: 4d8ac009
---

## Bạn sẽ làm gì

Đặt cửa đi và cửa sổ vào các tường bạn đã vẽ ([Vẽ tường](topic:draw-walls)). Trỏ vào một tường và cửa đi hoặc cửa sổ sẽ hiển thị vị trí đặt, hướng mở và khoảng cách đến mỗi góc. Nhấp, và lỗ mở tự cắt ra khỏi tường trên mặt bằng và trong 3D.

## Đặt cửa đi

1. Khi {{ui:Vẽ}} đang bật, nhấp {{ui:Cửa đi}} (hoặc nhấn {{key:D}}).
2. Chọn loại: **Cửa mở đơn**, **Cửa mở đôi**, **Cửa trượt**, **Cửa âm tường**, **Cửa nhà để xe**, **Cửa tủ gấp**, **Cửa Pháp**, **Cửa kiểu chuồng trại (trên tường)** hoặc **Cửa vào có kính bên**. Kích thước thông thường của nó điền vào **W** và **H**; chọn kích thước khác từ danh sách bên cạnh, hoặc nhập kích thước khác, ví dụ `2'-8"` hoặc `800`. Danh sách cũng cung cấp các họ cửa của mô hình này (xem [Họ và kích thước của chúng](topic:families)).
3. Trỏ vào một tường. Biểu tượng cửa đi theo con trỏ dọc theo tường, và khoảng cách từ mỗi đầu của mặt tường đó hiện trên mặt bằng.
4. Cửa mở về phía của tường mà con trỏ đang ở. Nhấn {{key:H}} (hoặc nhấp {{ui:Đảo}}) để đặt bản lề ở đầu kia.
5. Nhấp. Cửa được đặt và công cụ vẫn bật cho cửa tiếp theo. Trỏ vào giữa một tường và cửa sẽ tự căn giữa.

Để đặt cửa ở một khoảng cách chính xác, trỏ vào tường gần góc mà bạn đo từ đó, nhập khoảng cách (ví dụ `2'` hoặc `600`) và nhấn {{key:Enter}}. Khoảng cách đi từ đầu gần hơn của mặt tường đến mép cửa.

## Đặt cửa sổ

1. Nhấp {{ui:Cửa sổ}} (hoặc nhấn {{key:N}}).
2. Chọn loại: **Cửa sổ cố định**, **Cửa sổ treo đơn**, **Cửa sổ treo đôi**, **Cửa sổ mở quay**, **Cửa sổ trượt**, **Cửa sổ mở hất**, **Cửa sổ kính lớn** hoặc **Ô lấy sáng phía trên**, và **W**, **H** và **Bậu** của nó (chiều cao của đáy cửa sổ so với sàn).
3. Trỏ vào một tường và nhấp, hoặc nhập khoảng cách và nhấn {{key:Enter}} như với cửa đi. Cửa sổ nằm ở mặt ngoài của tường.

## Di chuyển, lật, xóa

- Khi {{ui:Chọn}} đang bật, kéo một cửa đi hoặc cửa sổ dọc theo tường của nó. Kéo nó sang tường khác để chuyển sang đó.
- {{key:Delete}} xóa các cửa đi và cửa sổ đã chọn; tường khép lại.
- Di chuyển hoặc xóa một tường sẽ di chuyển hoặc xóa những gì ở trong nó. Khi điểm đầu của tường di chuyển dọc theo đường thẳng của chính nó, các cửa đi và cửa sổ của nó giữ nguyên vị trí.
- {{ui:Hoàn tác}} và {{ui:Làm lại}} đưa từng lần đặt, di chuyển hoặc xóa qua lại.

## Những gì bị từ chối

- **Không vừa trong tường đó.** Cửa đi hoặc cửa sổ rộng hơn tường, hoặc sẽ nhô ra khỏi đầu của nó. Thử chiều rộng ngắn hơn hoặc tường dài hơn.
- **Cao hơn tường.** Bậu cộng với chiều cao vượt quá đỉnh của tường.

## Những gì được lưu

Mỗi cửa đi hoặc cửa sổ là một cửa đi hoặc cửa sổ IFC với kích thước, cách vận hành (ví dụ cửa mở đơn bên trái), kiểu kích thước của nó (một kiểu cho mỗi kích thước trong họ), `Pset_DoorCommon` hoặc `Pset_WindowCommon` và khối lượng cơ sở, lấp đầy một lỗ mở IFC trong tường của nó. Diện tích mặt bên thực và thể tích của tường loại trừ lỗ mở. Các chương trình BIM khác mở nó như một cửa đi trong tường.

## Điều nên biết

- Mặt bằng hiển thị cửa đi mở 90° cùng hướng mở, cửa trượt là hai tấm, cửa âm tường trượt vào tường, cửa nhà để xe là đường đứt nét phía trên, và cửa sổ với đường khung và kính.
- Chiều rộng là chiều rộng tổng của khung; cánh cửa là chiều rộng trừ hai khung bên.
- Sao chép cửa đi và cửa sổ đã vẽ chưa được xây dựng: hãy đặt một cái khác.

## Cửa sổ thoát hiểm tầng hầm và giếng

Chọn **Cửa sổ thoát hiểm tầng hầm có giếng** trong danh sách loại cửa sổ. Nó bắt đầu là một cửa sổ mở quay 36 × 48 inch với bậu cao 36 inch so với tầng. Giếng nằm ở mặt ngoài tường, với chiều rộng thông thủy ít nhất 48 inch, nhô ra 36 inch, và đáy thấp hơn bậu 6 inch. Nó hiển thị dưới dạng các đường đứt nét trên mặt bằng và dạng ba cạnh hở trên cùng trong 3D. Giếng là một phần của thân IFC của cửa sổ, nên lưu, di chuyển, đổi kích thước hoặc xóa cửa sổ sẽ mang theo nó. Đổi kích thước giữ ít nhất 6 inch ở mỗi bên khung.

Đây là các mặc định mô hình hóa, không phải chứng nhận tuân thủ quy định thoát hiểm. Hãy kiểm tra riêng khoảng mở thông thủy thực tế của nhà sản xuất, các yêu cầu địa phương, cao độ, thoát nước và bất kỳ thang nào bắt buộc. Độ sâu và chiều cao giếng là các kích thước đặt sẵn; chúng không theo địa hình.
