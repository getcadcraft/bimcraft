---
title: Tạo hình tường: gắn, biên dạng, nghiêng và lỗ mở
summary: Gắn đỉnh tường vào mái, sàn hoặc trần, cho nó một đường viền mặt đứng riêng, làm nó nghiêng, hoặc cắt một lỗ mở không có cửa đi hay cửa sổ, trong Thuộc tính, trên mặt đứng hoặc mặt cắt, trên mặt nhìn riêng của tường hoặc trong 3D; mỗi thao tác là một bước hoàn tác.
keywords: gắn, gắn đỉnh, gắn chân, mái, sàn, trần, đầu hồi, biên dạng, sửa biên dạng, đường viền mặt đứng, bậc thang, lan can, nghiêng, nghiêng nhẹ, độ nghiêng, thuôn, nghiêng kép, lỗ mở, lỗ thủng, xuyên qua, không cửa, tay nắm, mặt đứng, mặt cắt, 3D, mặt nhìn, tường cong, sao chép
from: f558b269
---

## Mục tiêu

Thay đổi hình dạng của tường phía trên và phía dưới mặt bằng của nó: đỉnh có thể theo mái, bản sàn hoặc trần; nó có thể có đường viền riêng nhìn từ bên hông; nó có thể nghiêng; và nó có thể có các lỗ mở không có cửa đi hay cửa sổ. Mặt bằng của tường, các góc và đường vị trí của nó vẫn giữ nguyên như cũ.

## Bạn có thể làm ở đâu

- **Thuộc tính**: khi {{ui:Vẽ}} và {{ui:Chọn}} đều bật, nhấp vào một bức tường bạn đã vẽ. **Thuộc tính** hiển thị các hàng của tường, rồi đến **Hình dạng**, nơi mọi thứ được nhập bằng số.
- **Một mặt đứng hoặc một mặt cắt**: bút chì của trình duyệt dự án ({{ui:Chỉnh sửa trong khung nhìn này}}) mở khung nhìn; chọn một bức tường ở đó và kéo các tay nắm của nó. Xem "Trong mặt đứng hoặc mặt cắt" bên dưới.
- **Mặt nhìn riêng của tường**: {{ui:Tường}} › {{ui:Sửa biên dạng}}, rồi nhấp vào bức tường trên mặt bằng. Cách này dùng được cho mọi bức tường, kể cả bức tường mà không mặt đứng nào nhìn thẳng vào, và cho tường cong (hiển thị đã trải phẳng).
- **Mặt bằng và 3D**: bốn lệnh trong {{ui:Tường}} (nhóm Chỉnh sửa): {{ui:Gắn đỉnh / đáy}}, {{ui:Sửa biên dạng}}, {{ui:Nghiêng}} và {{ui:Lỗ mở trên tường}}. Xem "Trên mặt bằng và trong 3D" bên dưới.

Dù chọn cách nào, đó vẫn là cùng một thay đổi: một bước trong **Thay đổi**, và {{ui:Hoàn tác}} sẽ lấy lại nó.

Mọi công cụ Hình dạng đều dùng được với cả tường thẳng và tường cong. Trên tường cong, khoảng cách chạy dọc theo cung của nó.

## Gắn đỉnh hoặc đáy

- **Gắn đỉnh**: chọn một mái, một sàn hoặc một trần. Đỉnh của tường theo mặt dưới của thứ bạn chọn, thẳng đứng phía trên mỗi góc của tường. Dưới mái dốc, tường có đỉnh nghiêng, và khi mái đổi mặt (một đường nóc hoặc một đường chóp), đỉnh tường cũng uốn theo.
- **Gắn chân**: chọn một sàn hoặc một trần. Chân của tường theo mặt trên của nó.
- Tại những phần của tường không có gì phía trên (hoặc phía dưới), phần đó giữ chiều cao riêng của tường.
- Liên kết được giữ: thay đổi độ dốc hoặc phần nhô của mái, hoặc chiều cao của trần, và các tường được gắn sẽ theo trong cùng một bước.
- Chọn **Chiều cao riêng** để hủy liên kết.

## Sửa biên dạng

{{ui:Sửa biên dạng…}} mở đường viền của tường nhìn từ bên hông:

- **Đường trên**: các hàng **Dọc theo** (khoảng cách từ điểm đầu của tường) và **Chiều cao** (trên chân tường). Ba hàng 0 / 3000, 2500 / 4500, 5000 / 3000 tạo thành một đầu hồi trên tường 5 m.
- **Đường dưới**: để trống cho chân ngang bằng, hoặc nhập các hàng cho tường đặt trên móng bậc thang.
- {{ui:Thêm một điểm}} thêm một hàng, **Gỡ bỏ** loại bỏ một hàng. {{ui:Dùng biên dạng này}} áp dụng; {{ui:Về thẳng}} gỡ biên dạng.

Mỗi đường chạy dọc tường đúng một lần, từ điểm đầu đến điểm cuối; một đường quay lại chính nó, hoặc một đỉnh đi xuống đến chân, sẽ bị từ chối. Khi cũng có đỉnh được gắn, phần thấp hơn trong hai phần được dùng.

## Làm nghiêng tường

**Nghiêng**: **Thẳng đứng**, **Nghiêng** (cả hai mặt nghiêng về cùng một phía, độ dày vẫn giữ nguyên) hoặc **Nghiêng kép** (mỗi mặt có góc riêng: tường mỏng dần hoặc dày dần khi lên cao). Nhập độ từ phương thẳng đứng; góc dương nghiêng về bên trái của tường, nhìn từ điểm đầu. Tường vẫn ở đúng vị trí được vẽ tại chân; các tường nối với nó không nghiêng theo.

## Lỗ mở không có cửa đi hay cửa sổ

{{ui:Thêm lỗ mở}} cắt một lỗ rộng 900 ở giữa tường. Hàng của nó trong **Lỗ mở** đặt **Từ điểm đầu**, **Chiều rộng**, **Ngưỡng** (tính từ mức tầng) và **Chiều cao**; **Gỡ bỏ** loại bỏ nó. Lỗ mở đi xuyên qua toàn bộ tường, khối lượng của tường loại trừ nó, và mặt bằng hiển thị một khe hở tại nơi nó vươn tới độ cao cắt của mặt bằng. Khi điểm đầu của tường trượt dọc theo đường của nó, lỗ mở giữ nguyên vị trí; một thay đổi làm lỗ mở nằm ngoài tường sẽ bị từ chối.

## Trong mặt đứng hoặc mặt cắt

Mở khung nhìn bằng bút chì của trình duyệt dự án. Khi {{ui:Chọn và di chuyển}} được bật:

- **Biên dạng**: nhấp vào một bức tường đối diện khung nhìn. Đường trên và đường dưới của nó chuyển sang màu xanh, với một tay nắm vuông tại mỗi điểm và một chấm ở giữa mỗi đoạn.
  - Kéo một hình vuông để di chuyển điểm đó (hai điểm cuối chỉ di chuyển lên và xuống).
  - Kéo một chấm để di chuyển cả đoạn lên hoặc xuống.
  - Nhấp đúp vào một đường (hoặc nhấp chuột phải) để thêm một điểm tại đó; {{ui:Thêm điểm (đỉnh)}} và {{ui:Thêm điểm (đáy)}} thêm một điểm ở giữa đoạn dài nhất.
  - Nhấp vào một hình vuông và nhấn Delete (hoặc nhấp chuột phải vào nó) để gỡ điểm đó. {{ui:Về thẳng}} gỡ biên dạng.
  - Khi đã chọn một điểm, nhập **Dọc theo** và **Chiều cao** của nó trong thanh dưới thanh công cụ.
- **Gắn**: thanh có các danh sách **Gắn đỉnh** và **Gắn chân** cho bức tường đã chọn. Hoặc dùng công cụ {{ui:Gắn vào đỉnh}} hoặc {{ui:Gắn vào chân}}: nhấp vào tường hoặc các tường, rồi đến mái, sàn hoặc trần, được hiển thị dưới dạng hộp đứt nét. Tất cả các tường đã chọn được gắn trong một bước.
- **Lỗ mở trên tường**: với công cụ {{ui:Lỗ mở trên tường}}, kéo một hình chữ nhật trên mặt tường. Trở lại {{ui:Chọn và di chuyển}}, kéo một lỗ mở để di chuyển nó, kéo một trong tám tay nắm của nó để đổi kích thước, nhập **Từ điểm đầu**, **Chiều rộng**, **Ngưỡng** và **Chiều cao** trong thanh, hoặc nhấn Delete để xóa nó.
- **Nghiêng**: một bức tường mà khung nhìn nhìn dọc theo (nhìn thẳng từ đầu, như một mặt cắt đi qua nó, hoặc trong mặt đứng từ đầu của nó) cũng có thể được nhấp. Kéo tay cầm tròn ở đỉnh để làm nghiêng, hoặc chọn **Thẳng đứng**, **Nghiêng** hoặc **Nghiêng kép** trong thanh và nhập các góc.

Kích thước bắt vào bước 10 mm; nhập một giá trị cho bất kỳ thứ gì tinh hơn. Một tường cong có thể được chỉnh sửa trong mặt đứng khi nó chạy theo một hướng ngang qua khung nhìn; mặt nhìn riêng của nó luôn hoạt động.

## Trên mặt bằng và trong 3D

Mở {{ui:Tường}} trong nhóm Chỉnh sửa:

- {{ui:Gắn đỉnh / đáy}}: chọn **Gắn đỉnh** hoặc **Gắn chân** trong hàng của công cụ. Nhấp vào tường hoặc các tường (trên mặt bằng hoặc trong khung nhìn 3D), rồi đến thứ chúng gắn vào: trong 3D, nhấp vào chính mái, sàn hoặc trần; trên mặt bằng, nhấp vào một điểm nằm dưới nó (khi có nhiều hơn một, một danh sách sẽ hỏi).
- {{ui:Sửa biên dạng}}: trên mặt bằng, nhấp vào một bức tường để mở mặt nhìn riêng của nó. Trong 3D, nhấp vào một bức tường: các điểm biên dạng của nó nhận tay nắm; kéo một điểm trong mặt phẳng của tường.
- {{ui:Nghiêng}}: nhấp vào một bức tường (trên mặt bằng hoặc trong 3D) và nhập mức nó nghiêng bao nhiêu.
- {{ui:Lỗ mở trên tường}}: trên mặt bằng, nhấp vào một bức tường nơi lỗ mở đặt; **Chiều rộng**, **Chiều cao** và **Ngưỡng** nằm trong hàng của công cụ. Trong 3D, nhấp vào một góc trên mặt tường, rồi góc đối diện. Khi một bức tường được chọn trong 3D, các lỗ mở của nó có tay nắm: các góc đổi kích thước, phần giữa di chuyển.

Các tay nắm 3D là tay nắm riêng của khung nhìn 3D, nên chúng chờ khi hộp cắt đang hiển thị tay nắm của nó.

## Trên mặt bằng

Một bức tường nghiêng được vẽ tại nơi mặt bằng cắt qua nó (cao 1200 trên mức tầng, trừ khi khung nhìn nói khác): đường viền của nó được dời đi bằng mức nó nghiêng ở độ cao đó, và nghiêng kép thì rộng hơn hoặc hẹp hơn tại đó. Đường viền của nó tại sàn được vẽ bằng nét mảnh của những gì nằm dưới mặt cắt. Các góc, tay nắm và kích thước của tường vẫn ở chân của nó.

## Sao chép

{{ui:Sao chép tầng này…}} và Di chuyển với **Sao chép** mang theo biên dạng, độ nghiêng và lỗ mở của tường. Một tường được gắn vào sàn hoặc trần thì được gắn vào bản sao của sàn hoặc trần trên tầng mới; liên kết với mái thì không được sao chép cùng tầng (mái không được sao chép). Một bản sao trên cùng tầng vẫn gắn vào cùng mái, sàn hoặc trần.

## Trong tệp

Tường có hình dạng được ghi dưới dạng một khối đa diện (IfcFacetedBrep), mà các chương trình khác đọc đúng như nó được vẽ; các thiết lập của nó nằm trên tường (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Một lỗ mở là một IfcOpeningElement trong tường, không có gì lấp đầy.

## Chưa xây dựng

- Một biên dạng có phần nhô hoặc lỗ trong đường viền (dùng lỗ mở để tạo lỗ).
- Trong 3D: thêm hoặc gỡ điểm biên dạng, và làm nghiêng bằng tay cầm (dùng mặt nhìn của tường, mặt đứng hoặc mặt cắt, hoặc nhập số).
- {{ui:Khoảng lệch}} khi bật Sao chép không sao chép hình dạng hoặc lỗ mở của tường (Di chuyển với Sao chép thì có).
- Các lớp của tường nghiêng không được vẽ trên mặt bằng Trung bình và Mịn (đường viền thì có).
- Các lỗ mở không phải hình chữ nhật.
