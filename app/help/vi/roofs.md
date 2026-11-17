---
title: Mái: độ dốc cho từng tường, đầu hồi, mái một dốc và mặt phẳng mái
summary: Đặt từng tường dưới mái thành có độ dốc, đầu hồi hoặc không có, dùng các kiểu sẵn có mái chóp, đầu hồi và mái một dốc, nâng mái bằng chiều cao đỉnh tường, thêm diềm và trần mái hiên, và vẽ từng mặt phẳng mái khi mái tự động không vừa.
keywords: đổi mái, sửa mái, mái đã chọn, thuộc tính mái, hoàn tác mái, mái, độ dốc, theo từng tường, đầu hồi, mái một dốc, mái lợp dựa, mái chóp, rãnh mái, nóc, chiều cao đỉnh tường, gót mái, diềm mái, trần mái hiên, mép mái, mép dốc, phần nhô, mặt phẳng mái, mái hiên, cửa mái, cửa mái đầu hồi, cửa mái một dốc
from: 096084a7
---

## Bạn sẽ làm gì

Tạo dáng mái từ các tường bên dưới. Mỗi tường có cài đặt riêng, nên một mái có thể là mái chóp ở mặt trước, đầu hồi ở hai đầu và dừng bằng phẳng sát một tường cao hơn ở phía sau. Với mái hiên hoặc mặt nào mà mái tự động không tạo được, hãy vẽ một mặt phẳng mái theo các góc của nó.

## Đặt mái

1. Ở tầng có các tường mang mái, nhấn {{ui:Mái}}.
2. Nhập **Độ dốc** (`6/12`, hoặc số độ như `30`) và **Phần nhô**.
3. Chọn một kiểu sẵn có: **Mái chóp**, **Đầu hồi ở cạnh ngắn**, **Đầu hồi ở cạnh dài**, hoặc **Mái một dốc** (cạnh gần con trỏ nhất là mép thấp; các cạnh còn lại là đầu hồi).
4. Giữ **Diềm và trần mái hiên** được chọn để có mép mái kín với tấm diềm, hoặc bỏ chọn để mép mái trần.
5. Đặt con trỏ bên trong công trình: mép mái, nóc, sống mái và rãnh mái hiện trên mặt bằng. Nhấn chuột.

Mọi đường bao đều được: hình L, T, U và chữ thập, góc nghiêng và chỗ khuyết. Sống mái, nóc và rãnh mái được xác định ở nơi các mặt phẳng mái gặp nhau.

## Từng tường một

Chọn mái (ở tầng phía trên tường, nhấn bên trong đường bao) và xem mục **Từng tường** trong **Thuộc tính**. Trỏ vào một hàng sẽ đánh dấu tường đó trên mặt bằng.

- **Có độ dốc**: tường có một mặt phẳng mái dốc phía trên. Nhập độ dốc riêng bên cạnh, ví dụ `12/12` cho đầu hồi dốc trên mái `6/12`.
- **Đầu hồi**: mái dừng bằng một đầu thẳng đứng phía trên tường đó, tường được lấp đầy đến mái, và mái vươn qua tường một đoạn bằng **Phần nhô đầu hồi**.
- **Không (dừng ngang bằng)**: mái dừng ở tường đó, không có phần nhô và không có tường đầu hồi, dùng cho mái sát một tường cao hơn.

Danh sách **Các đầu mái** ở trên cùng đặt mọi tường cùng lúc; **Đặt theo từng tường** hiện ra khi các tường không còn khớp với một kiểu sẵn có.

## Đổi một mái đã đặt

Chọn mái, **Thuộc tính** hiển thị cùng các cài đặt của công cụ Mái: **Độ dốc**, **Phần nhô**, **Phần nhô đầu hồi**, **Chiều cao đỉnh tường**, **Chiều cao diềm**, **Mép mái kín** và **Độ dày**. Mỗi thay đổi hiện ngay trên mặt bằng và trong 3D, với cùng các kiểm tra như công cụ (độ dốc từ 80 độ trở lên bị từ chối, và cũng vậy với cài đặt không thể tạo mái). Nhập giá trị rồi nhấn {{key:Enter}}, hoặc rời khỏi ô.

Mỗi thay đổi là một bước hoàn tác. Nhiều thay đổi liên tiếp trong cùng một ô (nhập `6/12`, rồi `7/12`, rồi `8/12`) được gộp thành một bước, nên một lần {{key:Ctrl}}+{{key:Z}} khôi phục mái về trạng thái trước chuỗi thay đổi; đổi sang ô khác sẽ bắt đầu bước mới.

## Chiều cao đỉnh tường, diềm và trần mái hiên

- **Chiều cao đỉnh tường** là nơi các mặt phẳng mái gặp mặt ngoài của tường, đo từ sàn của tầng. Để trống để mái đặt trên đỉnh tường; nhập giá trị lớn hơn cho gót mái nâng cao.
- **Chiều cao diềm** là tấm dọc theo mép mái và lên các mép dốc. Nhập `0` nếu không có.
- **Mép mái kín** đặt một trần ngang dưới mỗi mép mái, từ tường đến mặt sau của diềm.

Mỗi mặt phẳng gặp tường tại chiều cao đỉnh tường, nên các tường có độ dốc khác nhau vẫn giữ một đường đỉnh chung, và mép mái kết thúc ở các độ cao khác nhau, như khi dựng khung thực tế.

## Vẽ một mặt phẳng mái

1. Ở tầng có các tường mà mặt phẳng nằm trên, mở {{ui:Bản dựng}} và chọn {{ui:Mặt phẳng mái}}.
2. Nhập **Độ dốc** và, nếu không phải đỉnh tường, nhập **Chiều cao mép mái**.
3. Nhấn các góc. Cạnh đầu tiên bạn vẽ là mép mái; mặt phẳng dâng lên từ đó về phía phần còn lại của hình.
4. Nhấn lại góc đầu tiên, nhấp đúp, hoặc nhấn {{key:Enter}} để kết thúc. {{key:Esc}} bỏ các góc.

Mặt phẳng mái không theo tường. Chọn nó ở tầng phía trên (nhấn bên trong) để đổi độ dốc, chiều cao mép mái hoặc độ dày, hoặc nhấn {{key:Delete}} để xóa.

## Thêm cửa mái

1. Hiển thị tầng có mái.
2. Mở {{ui:Bản dựng}} và chọn {{ui:Cửa mái}}.
3. Trong dòng tùy chọn, chọn **Loại cửa mái** (**Đầu hồi** hoặc **Mái một dốc**) rồi đặt **Chiều rộng**, **Tường mặt trước** (chiều cao của tường mặt trước, từ đỉnh mái đến mép mái của cửa mái), **Độ dốc** và **Phần nhô**.
4. Nhấn lên một mặt mái tại vị trí giữa mặt trước của cửa mái.

BimCraft dựng tường mặt trước, hai tường má và mái của cửa mái, rồi kéo nó về phía sau cho đến khi gặp mái. Cửa mái đầu hồi có hai mặt gặp nhau tại một nóc. Cửa mái một dốc có một mặt, và mặt này phải thoải hơn mái. Phần mái bên dưới cửa mái được cắt bỏ. Cửa mái theo mái khi các tường di chuyển.

Chọn nó để đổi loại, chiều rộng, tường mặt trước, độ dốc hoặc phần nhô trong **Thuộc tính**. {{key:Delete}} xóa nó và đóng lại mái. Nó phải nằm gọn trên một mặt mái, tránh sống mái, rãnh mái và nóc; và chỉ mái được tạo bằng công cụ {{ui:Mái}} mới nhận cửa mái, không nhận mặt phẳng mái vẽ tay. Chưa xây dựng: cửa sổ trên mặt trước của cửa mái, và cửa mái trên mặt phẳng mái vẽ tay.

## Được lưu gì

Mái là mái IFC gồm một tấm mái cho mỗi mặt phẳng, các tường đầu hồi, một cấu kiện diềm và một lớp trần mái hiên. Mái mang theo chiều dài nóc, sống mái, rãnh mái, mép mái và mép dốc, cùng diện tích để bóc khối lượng. Mặt phẳng mái là mái IFC với một tấm.

:::tip
Hoàn tác khôi phục mọi thay đổi mái trong một bước, kể cả một kiểu sẵn có làm thay đổi mọi tường.
:::
