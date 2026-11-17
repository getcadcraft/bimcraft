---
title: Đổi tường, cửa hoặc cửa sổ
summary: Nhấp một tường, cửa hoặc cửa sổ đã vẽ và đổi kiểu, kích thước, chiều cao hoặc vị trí trong Thuộc tính, hoặc kéo nó trên mặt bằng; mỗi thay đổi là một bước hoàn tác.
keywords: làm vuông góc, vuông góc, 90, góc vuông, lệch, góc, ortho, kích thước phòng, mặt trong, mặt ngoài, đo từ, khoảng cách di chuyển, khoảng cách nhập, cong, cung, chiều cao cung, bán kính, đường định vị, căn chỉnh, đổi, sửa, thuộc tính, kiểu tường, độ dày, chiều dài, chiều cao, độ lệch đáy, đỉnh, tầng, đảo, bên ngoài, kích thước cửa, kích thước cửa sổ, ngưỡng, khoảng cách, di chuyển, grip, kéo, đổi kiểu, nhiều
from: 63052d5d
---

## Bạn sẽ làm gì

Đổi những gì bạn đã vẽ: chọn một tường, cửa hoặc cửa sổ, rồi gõ số mới trong **Thuộc tính** hoặc kéo nó trên mặt bằng. Mặt bằng và khung nhìn 3D theo, các góc nối lại, và cửa, cửa sổ vẫn nằm trong tường của chúng.

## Đổi tường

1. Khi {{ui:Vẽ}} và {{ui:Chọn}} đều bật, nhấp tường trên mặt bằng (hoặc trong khung nhìn 3D).
2. **Thuộc tính** hiển thị một hộp với các số của tường. Đổi một số rồi nhấn {{key:Enter}}:
   - **Kiểu tường**: một kiểu khác trong các kiểu khởi đầu. Độ dày và các lớp đổi theo.
   - **Độ dày**: độ dày bất kỳ. Kiểu giữ các lớp khác của nó, và lớp chính (khung đứng hoặc khối xây) nhận phần chênh lệch, ví dụ "Ngoài 2×6, 200 mm".
   - **Đo từ**: **Đường tâm**, **Mặt trong** hoặc **Mặt ngoài**. **Chiều dài** và **Kích thước phòng** đọc và đặt từ đó. Mặt ngoài là những gì kích thước trên mặt bằng hiển thị.
   - **Chiều dài**: đầu cuối của tường di chuyển dọc theo đường của nó. Tường nối vào đầu đó di chuyển vuông góc với chính nó và giữ góc.
   - **Kích thước phòng** (khi có tường song song qua phòng): gõ kích thước bạn muốn. Tường này di chuyển vuông góc và các tường nối được kéo dãn theo.
   - **Di chuyển vuông góc**: gõ khoảng cách tường di chuyển vuông góc với chính nó: một số dương đẩy ra, một số âm đẩy vào.
   - **Góc với tường nối**: góc với tường nối ở đầu của nó. Gõ 90 để đặt vuông góc. Tường không nối với gì hiển thị **Hướng**, tính bằng độ từ hướng đông.
   - {{ui:Làm vuông góc}}: xoay các tường nối với tường này về góc vuông, theo hướng mà phần lớn chiều dài của chúng chạy. Nó làm việc trên toàn bộ phòng hoặc bố cục được nối, dù bạn chọn tường nào trong đó. Tường lệch hơn 10 độ so với góc vuông được giữ nguyên, nên một tường đặt ở 45 độ là an toàn. Một lần {{ui:Hoàn tác}} lấy lại tất cả.
   - **Chiều cao tường**: **Tới tầng trên** theo tầng đó; **Tới Tầng 3** (và bất kỳ tầng nào cao hơn) tạo một tường đi xuyên các tầng ở giữa; gõ một chiều cao khi đó đặt đỉnh cách tầng đó bao xa phía dưới hoặc phía trên. **Chiều cao cố định** giữ số bạn gõ. **Đi xuyên qua** liệt kê các tầng mà tường như vậy đi qua: nó được vẽ nhạt hơn trên mặt bằng của các tầng đó, các phòng ở đó đóng sát vào nó, và cửa, cửa sổ có thể đặt trong nó từ các mặt bằng đó. Nó được di chuyển và định hình lại trên tầng nơi nó bắt đầu.
   - **Độ lệch đáy**: tường bắt đầu cách tầng bao nhiêu. Đỉnh của nó giữ nguyên.
   - **Ngoài**: {{ui:Đảo}} đưa các lớp ngoài sang mặt kia.
   - **Đường định vị**: **Đường tâm**, **Mặt ngoài**, **Mặt trong**, **Mặt trái** hoặc **Mặt phải**. Đổi nó không di chuyển gì. Sau đó, khi tường dày hơn (theo kiểu hoặc **Độ dày**) hoặc mặt ngoài của nó bị đảo, đường định vị giữ nguyên và tường lớn ra hoặc đảo quanh nó. Một tường thẳng gặp nó ở góc sẽ theo, nên góc vẫn khép kín. Đường định vị của tường được chọn được vẽ nét đứt trên mặt bằng. Chọn nhiều tường để đặt cho tất cả.
   - **Chiều cao cung** (tường cong): đường giữa cong ra khỏi đường thẳng bao nhiêu. 0 làm nó thẳng; giá trị âm cong về phía bên kia. Bán kính hiển thị bên cạnh.
3. Mỗi thay đổi là một bước trong **Thay đổi**; {{ui:Hoàn tác}} lấy lại.

## Kéo tường trên mặt bằng

Khi một tường được chọn, nó hiện ba tay nắm: một ô vuông ở mỗi đầu và một hình tròn ở giữa.

- Kéo một đầu để tường dài hơn, ngắn hơn hoặc xoay. Nó bắt điểm như công cụ Tường, và bắt vuông góc với tường nối ở đầu kia khi bạn trong phạm vi 3 độ; {{key:Shift}} giữ nó trên các trục của mặt bằng.
- Các tường nối tại đầu bạn kéo giữ góc của chúng: đầu của chúng trượt dọc theo đường riêng để gặp đường mới của tường, nên không có gì bị nghiêng. Giữ {{key:Mod}} để kéo tự do (đầu của tường nối đi theo đầu của bạn và tường đó xoay), hoặc {{key:Alt}} để ngắt các mối nối tại tường này.
- Kéo phần giữa để di chuyển toàn bộ tường vuông góc với chính nó, theo bất kỳ hướng nào bạn kéo. Các góc của nó trượt dọc theo các tường nối, nên các tường đó giữ góc của chúng.
- Giữ {{key:Mod}} khi kéo phần giữa để di chuyển tự do, khi bạn thực sự muốn phá góc. {{ui:Làm vuông góc}} đưa nó trở lại.
- Khi giữ một tay nắm, gõ một khoảng cách và nhấn {{key:Enter}} (hoặc thả ra): tường đi đúng khoảng cách đó, theo cách bạn đang kéo. {{key:Esc}} hủy di chuyển.
- Một tường cong được chọn hiển thị tay nắm ở hai đầu và một tay nắm tròn ở giữa cung. Kéo tay nắm tròn để uốn cong.
- Cửa và cửa sổ luôn nằm trong tường. Một tường quá ngắn so với những gì nó chứa bị từ chối với thông báo "Không vừa trong tường đó."

## Đổi cửa hoặc cửa sổ

1. Nhấp cửa hoặc cửa sổ trên mặt bằng.
2. Trong **Thuộc tính**: **Kiểu** (một cửa hoặc cửa sổ khác cùng loại), **Chiều rộng**, **Chiều cao**, **Ngưỡng** (cửa sổ), **Từ đầu** và **Từ cuối** (khoảng cách từ mỗi đầu của mặt tường đến cạnh của nó), **Bản lề** {{ui:Đảo}} (cửa một cánh và cửa sổ mở quay; cửa trượt, cửa âm tường, cửa kiểu kho và cửa xếp thì ghi **Mở về** thay thế; cửa sổ cố định, treo, kiểu tranh và cửa đôi không có), và **Mở về phía** (cửa) hoặc **Phía khung** (cửa sổ) {{ui:Đảo}}.
3. Hoặc kéo nó dọc theo tường của nó, hoặc sang một tường khác: xem [Cửa và cửa sổ](topic:doors-and-windows).

## Đổi nhiều thứ cùng lúc

Chọn nhiều tường (hoặc nhiều cửa, nhiều cửa sổ) bằng {{key:Shift}}+nhấp hoặc {{key:Mod}}+nhấp. **Thuộc tính** đưa ra những gì chúng có chung: **Đổi kiểu…**, chiều cao, kích thước. Một thay đổi đặt tất cả, và một lần {{ui:Hoàn tác}} lấy lại toàn bộ.

## Điều cần biết

- Các số hiển thị theo {{ui:Đơn vị}} được chọn trên thanh công cụ.
- Tường, cửa và cửa sổ từ chương trình khác hiển thị dữ liệu IFC của chúng trong **Thuộc tính** như trước, không có hộp này.
