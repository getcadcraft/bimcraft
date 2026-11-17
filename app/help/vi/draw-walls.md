---
title: Vẽ tường
summary: Vẽ tường trên mặt bằng của một tầng bằng cách nhấp vào các góc hoặc gõ chiều dài; các góc tự nối với nhau, và tường được lưu dưới dạng IFC.
keywords: cong, cung, đường định vị, căn chỉnh, tường, vẽ, mặt bằng, mặt bằng tầng, phòng, góc, nối, loại tường, 2x6, 2x4, cmu, bê tông, chiều cao, tầng, cốt, chiều dài đã gõ, ortho, bắt điểm
from: 8269cd4b
---

## Bạn sẽ làm gì

Vẽ các tường của một tòa nhà trên mặt bằng của từng tầng. Nhấp vào nơi tường bắt đầu, rồi nhấp vào từng góc; BimCraft tự nối các góc, cấp cho mỗi tường các lớp của nó (ốp ngoài, ván lót, thanh đứng, tấm thạch cao …) và kéo tường lên đến tầng phía trên. Khung nhìn 3D hiển thị các tường khi bạn vẽ.

## Mở mặt bằng

1. Bắt đầu một tòa nhà mới ([Bắt đầu một tòa nhà mới](topic:start-a-new-building)) hoặc mở một mô hình IFC.
2. Nhấp {{ui:Vẽ}} trên thanh công cụ. Một tòa nhà mới mở ra với chế độ này đã bật sẵn.
3. Mặt bằng của một tầng hiển thị bên trái và khung nhìn 3D bên phải. Chọn tầng trong danh sách ở đầu mặt bằng, hoặc bằng nút tròn bên cạnh trong bảng **Các tầng**.
4. {{ui:Mặt bằng}}, {{ui:Tách}} và {{ui:3D}} là các công cụ trong hàng {{ui:Chế độ xem}} của thanh công cụ (các lệnh PLAN, SPLIT và các phím hoạt động như trước). Dùng {{ui:Mặt bằng}} để chỉ xem mặt bằng, {{ui:Tách}} để xem cả hai, {{ui:3D}} để đóng mặt bằng. Khi cửa sổ hẹp (hoặc kích thước giao diện lớn), {{ui:Tách}} đặt mặt bằng phía trên khung nhìn 3D thay vì bên cạnh.

Mặt bằng cắt tầng ở độ cao 4'-0" (1200 mm) phía trên sàn của nó, như một mặt bằng sàn. Cuộn chuột để thu phóng; kéo bằng nút giữa hoặc nút phải (hoặc giữ {{key:Space}} và kéo) để di chuyển khung nhìn. Khi {{ui:Chọn}} được bật, kéo bình thường cũng di chuyển khung nhìn. {{key:F}} khi con trỏ nằm trên mặt bằng sẽ vừa khung mặt bằng.

## Vẽ một phòng

1. Nhấp {{ui:Tường}} (hoặc nhấn {{key:W}}).
2. Chọn loại tường trong danh sách đầu tiên, ví dụ **Tường ngoài 2×6** hoặc **Tường trong 2×4**.
3. Chọn chiều cao: **Lên đến tầng phía trên** (tường đi theo tầng đó nếu tầng đó di chuyển), **Lên đến** một tầng cao hơn cho tường chạy qua nhiều tầng (sảnh cầu thang, phòng hai tầng cao, đầu hồi cao), hoặc **Chiều cao cố định** rồi gõ giá trị. Tường như vậy thuộc về tầng bạn vẽ nó; mặt bằng của các tầng nó đi qua hiển thị nó nhạt hơn, các phòng ở đó khép vào nó, và bạn có thể nhấp cửa đi và cửa sổ vào nó từ các mặt bằng đó (cửa đi đặt trên sàn của tầng đó). Để di chuyển hoặc định hình lại chính bức tường, hãy đến tầng nơi nó bắt đầu.
4. Nhấp nơi tường đầu tiên bắt đầu.
5. Nhấp vào từng góc. Mỗi lần nhấp tạo một tường; tường kế tiếp bắt đầu tại điểm tường trước đã kết thúc. Chiều dài và góc hiển thị cạnh con trỏ.
6. Nhấp lại điểm đầu tiên để khép phòng. Dòng trạng thái cho biết phòng có bao nhiêu tường; ở chế độ đường tâm, mỗi tường nhận lớp ngoài của nó ở phía ngoài phòng.
7. Nhấn {{key:Esc}} (hoặc nhấp chuột phải, hoặc nhấp đúp) để dừng mà không khép phòng.

Các góc tự nối với nhau: hai tường gặp nhau bằng mối vát góc, tường kết thúc trên một tường khác sẽ dừng ở mặt của nó (chữ T), và ba tường trở lên tại một điểm sẽ dùng chung góc. Các tường cắt nhau được giữ nguyên.

Vẽ cả một phòng cùng lúc: mở {{ui:Hình dạng}} để chọn hình chữ nhật, hình chữ nhật đã xoay, đa giác, cung, tường trên các đường đã chọn, hoặc tường bao quanh một đường bao (xem [Hình dạng tường, cắt, dời, kéo giãn và khóa](topic:wall-tools)).

## Chọn tham chiếu vẽ

Chọn **Đường tâm**, **Mặt trong** hoặc **Mặt ngoài** trước lần nhấp đầu tiên. Khi đã chọn một mặt, các lần nhấp và chiều dài gõ của bạn mô tả mặt đó; BimCraft dời đường tâm tường một nửa tổng độ dày và nối các góc liên tiếp. Chọn **Ngoài bên trái** hoặc **Ngoài bên phải** theo hướng bạn vẽ. Với một đường bao khép kín vẽ ngược chiều kim đồng hồ, phía ngoài nằm bên phải; theo chiều kim đồng hồ, nằm bên trái. Với **Mặt trong**, thân tường nằm về phía ngoài của đường bạn vẽ; với **Mặt ngoài**, nằm về phía bên kia. Vẽ theo mặt giữ phía ngoài bạn đã chọn khi bạn khép vòng lặp. Trên đường tâm, các tường không khép phòng nhận phía ngoài bạn đã chọn; khi khép phòng, mọi tường tự đặt phía ngoài là phía ngoài của phòng, bất kể bạn vẽ theo chiều nào.

Đổi loại tường, tham chiếu hoặc phía ngoài sẽ kết thúc chuỗi hiện tại. Gần một góc quay ngược, các mối vát dài được giới hạn bằng cách để đầu tường vuông.

Khi đang vẽ, một điểm đầu mút trên khoảng trống có thể thẳng hàng theo chiều ngang hoặc chiều dọc với một đầu mút tường hoặc một góc trước đó. Một đường dẫn nét đứt nối điểm đó với con trỏ đã bắt điểm. Shift giữ hướng vẽ vuông góc; khi đó căn chỉnh dừng dọc theo hướng đó. Đầu mút, trung điểm và giao điểm tường gần đó được ưu tiên hơn căn chỉnh ở xa.

## Đường định vị

Với **Tham chiếu** đặt là **Mặt ngoài** hoặc **Mặt trong**, tường giữ mặt đó làm đường định vị. Về sau, nếu tường dày hơn hoặc phía ngoài của nó bị lật, mặt đó vẫn ở nguyên vị trí và tường tăng lên hoặc lật quanh nó. Tường thẳng gặp nó tại một góc sẽ đi theo, nên góc vẫn khép kín. Bạn có thể đổi đường định vị sau đó trong **Thuộc tính**: xem [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door).

## Vẽ tường cong

1. Nhấp {{ui:Tường}}, rồi chọn **Cong** trong danh sách **Dạng** của hàng tùy chọn.
2. Nhấp nơi tường bắt đầu, rồi nhấp nơi nó kết thúc.
3. Nhấp một điểm trên cung của nó. Hoặc gõ chiều cao cung và nhấn {{key:Enter}}.
4. Chuỗi tiếp tục từ đầu mút của tường. Nhấn {{key:Esc}} để kết thúc.

Tường cong nối với các tường tại hai đầu (nối góc và nối chữ T đều hoạt động), tạo phòng, và giữ cửa đi và cửa sổ dọc theo cung. Chúng vẫn là các đơn vị thẳng, vuông góc với tường tại điểm giữa, và khoảng cách của chúng được đo dọc theo cung. Một tường có thể rẽ tối đa ba phần tư vòng tròn. Nó bắt điểm vào hai đầu và điểm giữa cung.

Chưa xây dựng cho tường cong: {{ui:Cắt / kéo dài}} và {{ui:Góc}}, khung sườn, kích thước mặt bằng tự động và bắt điểm dọc theo cung. Xem [Những gì chưa xây dựng](topic:not-built-yet).

## Gõ chiều dài thay vì nhấp

Sau lần nhấp đầu tiên, gõ rồi nhấn {{key:Enter}}:

| Gõ | Vẽ |
|---|---|
| `12'6"` hoặc `3810` | một tường dài bằng vậy, theo hướng con trỏ chỉ |
| `12'6"<90` | dài bằng vậy, theo góc đó (độ, ngược chiều kim đồng hồ từ bên phải) |
| `@3000,0` | đến một điểm cách điểm cuối cùng bằng khoảng đó, theo chiều ngang và chiều lên |
| `1200,3400` | đến điểm đó trên mặt bằng |

Gõ một số khi công cụ Tường đang bật sẽ đi thẳng vào hộp {{ui:Chiều dài}}. Với feet và inch, một số trơn là inch; với milimét, là milimét. Bạn luôn có thể gõ đơn vị: `3.5 m`, `10 ft`, `6 1/2"`.

## Bắt điểm

- Đầu tường, các góc mặt của chúng và trung điểm tường bắt điểm khi con trỏ ở gần (hình vuông, hình tam giác).
- Con trỏ bắt vào đường tâm của tường hoặc một trong hai mặt (hình chữ thập).
- Từ điểm cuối cùng, hướng được giữ tại mỗi 15° khi gần; giữ {{key:Shift}} để giữ ở 0°, 90°, 180° hoặc 270°.
- Hướng tự do làm tròn chiều dài tới 1/2" (hoặc 10 mm).

## Thay đổi, hoàn tác, xóa

- Mỗi tường là một bước trong **Thay đổi**: {{ui:Hoàn tác}} và {{ui:Làm lại}} đưa tường đi rồi đặt lại.
- Khi {{ui:Chọn}} được bật, nhấp một tường trên mặt bằng để chọn nó; khung nhìn 3D và **Thuộc tính** sẽ theo. {{key:Delete}} xóa các tường đã chọn, và các tường mà chúng nối với nhau sẽ được dọn dẹp lại.

## Các tầng

Bảng **Các tầng** liệt kê mọi tầng cùng cao độ và chiều cao của nó.

- Gõ tên, cao độ hoặc chiều cao mới rồi nhấn {{key:Enter}}. Thay đổi chiều cao (hoặc cao độ) của một tầng sẽ dời các tầng phía trên nó cùng một khoảng, và các tường kéo lên đến một tầng sẽ đi theo.
- {{ui:Thêm tầng ở trên cùng}} thêm một tầng phía trên tầng cao nhất, cao bằng nó.
- {{ui:Thêm cốt bên dưới}} thêm một tầng dưới tầng thấp nhất (tầng hầm), cao bằng tầng đó: cao độ của nó là âm khi tầng thấp nhất ở 0, và không tầng nào khác bị dời. {{ui:Hoàn tác}} sẽ gỡ nó đi.
- {{ui:Sao chép tầng này…}} vẽ lại những gì có trên tầng bạn đang xem sang một tầng khác, hoặc sang một tầng mới phía trên: các tường cùng cửa đi và cửa sổ, sàn và trần (không có mái). Các tường kéo lên đến tầng phía trên sẽ kéo lên đến tầng phía trên tầng mới; các phòng xuất hiện tự động. Một lần {{ui:Hoàn tác}} sẽ hoàn lại tất cả. Nếu tầng kia đã có tường, bản sao được thêm vào chúng.
- {{ui:Đơn vị}} trên thanh công cụ chọn đơn vị (feet và inch, inch, feet thập phân, milimét, xentimét hoặc mét) cho mọi thứ mà các công cụ vẽ hiển thị và đọc.

## Lưu

Nhấp {{ui:Lưu thành IFC}}. Mỗi tường là một tường IFC với đường tâm, hình dạng đã nối, loại và các lớp, `Pset_WallCommon` và khối lượng cơ sở (chiều dài, chiều cao, diện tích và thể tích), để các chương trình BIM khác mở được và lập bảng thống kê được.

## Cần biết

- Tường được vẽ theo đường tâm của chúng. Độ dày lấy từ loại tường.
- Mặt bằng hiển thị các tường vẽ ở đây được tô đặc, và mọi thứ khác (mục thư viện, mô hình từ các chương trình khác) bị cắt bởi cùng một mặt phẳng, với phần nằm dưới mặt cắt bằng nét mảnh.
- Tường do chương trình khác tạo sẽ hiển thị trên mặt bằng nhưng chưa thể thay đổi bằng các công cụ này.
