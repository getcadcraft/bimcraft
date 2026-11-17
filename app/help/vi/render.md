---
title: Kết xuất ảnh của mô hình
summary: Tạo một ảnh ban ngày của khung nhìn 3D: bầu trời, mặt trời ở vĩ độ của công trình, bóng mềm, cửa kính; với WebGPU, dò đường trên card đồ họa với bầu trời, camera, trộn ánh sáng, chỉnh màu, sương mù và hàng đợi kết xuất.
keywords: kết xuất, cài đặt sẵn, cài đặt sẵn cảnh, nội thất, ngoại thất, khung nhìn mặt cắt, ban đêm, một cú nhấp, dò đường, dò tia, chiếu sáng toàn cục, phản xạ, khúc xạ, chất lượng cao, ảnh, ảnh chân thực, thực tế, hình ảnh, png, ảnh tĩnh, bầu trời, mặt trời, ánh sáng ban ngày, bóng, bóng mềm, che khuất môi trường, kính, cửa sổ, kim loại, vật liệu, độ phơi sáng, độ sáng, trời âm u, hoàng hôn, studio, trình bày, trực quan hóa, webgpu, khử nhiễu, bầu trời vật lý, hdri, ies, độ sâu trường ảnh, toàn cảnh, cân bằng trắng, trộn ánh sáng, lớp kết xuất, exr, png 16 bit, sương mù, caustics, hàng đợi kết xuất
from: beb74cc7
---

{{ui:Kết xuất}} trên thanh công cụ tạo một ảnh của khung nhìn 3D trông như ánh sáng ban ngày: bầu trời, mặt trời ở vị trí mà vĩ độ của công trình đặt nó, bóng mềm, ánh sáng từ toàn bộ bầu trời làm tối các góc, và màu sắc có thể trông như kính hoặc kim loại. Mô hình và tệp không bị thay đổi.

## Kết xuất khung nhìn

1. Thiết lập khung nhìn 3D theo cách bạn muốn cho ảnh: xoay quanh và thu phóng, ẩn các tầng hoặc cấu kiện không muốn hiển thị, và đặt một [mặt cắt](topic:section-plane) nếu ảnh cần thể hiện một lát cắt.
2. Nhấp {{ui:Kết xuất}} trên thanh công cụ.
3. Chọn một {{ui:Cảnh}} nếu cảnh đang được chọn không phải là cảnh bạn muốn (xem [Cài đặt sẵn cảnh](topic:render#scene-presets-a-good-picture-in-one-click)), chọn {{ui:Dung lượng}}, rồi nhấp {{ui:Kết xuất}} trong hộp thoại.

   Ảnh hiện dần khi kết xuất và mịn hơn sau mỗi lượt. {{ui:Dừng}} (hoặc {{key:Esc}}) kết thúc sớm và giữ ảnh đến lúc đó.

4. Nhấp {{ui:Lưu}} để tải xuống dưới dạng PNG, hoặc {{ui:Lưu thành}} để chọn định dạng khác (xem [Lưu ảnh](topic:render#save-the-picture)). Ảnh được đặt tên theo tệp mô hình.

:::tip
Bắt đầu với {{ui:Nháp}} ở {{ui:Kích thước khung nhìn}} để kiểm tra camera, rồi kết xuất {{ui:Tốt}} hoặc {{ui:Tốt nhất}} ở kích thước lớn hơn cho ảnh cuối cùng.
:::

## Cài đặt sẵn cảnh: một ảnh tốt chỉ với một cú nhấp

Phía trên hộp thoại có bốn nút {{ui:Cảnh}}. Mỗi nút đặt bầu trời, độ sáng, mặt đất, đường cạnh, chất lượng và mặt trời chỉ bằng một cú nhấp, nên không cần học gì trước ảnh đầu tiên. Nhấp một nút, rồi {{ui:Kết xuất}}.

| Cảnh | Đặt gì | Dùng cho |
|---|---|---|
| {{ui:Bên ngoài}} | Trời quang, mặt trời riêng của mô hình, bật mặt đất | Công trình nhìn từ bên ngoài |
| {{ui:Bên trong}} | Trời âm u (ánh sáng đều, không có mảng nắng gắt), sáng hơn nửa nấc | Khung nhìn từ bên trong phòng |
| {{ui:Khung nhìn mặt cắt}} | Studio trắng, không mặt đất, đường cạnh trong kết xuất nhanh | Mô hình được cắt bằng mặt cắt |
| {{ui:Ban đêm}} | Mặt trời lặn (nửa đêm giữa đông ở bán cầu của công trình), sáng hơn một nấc | Đèn chiếu sáng mô hình. Không có đèn thì ảnh tối |

- {{ui:Chọn theo khung nhìn này}} tự chọn thay bạn: {{ui:Khung nhìn mặt cắt}} khi có lát cắt mặt cắt, {{ui:Bên trong}} khi camera nằm trong mô hình, còn lại là {{ui:Bên ngoài}}. Lần đầu bạn mở hộp thoại, nó tự bắt đầu theo cách này.
- Mọi cài đặt vẫn nằm bên dưới và có thể thay đổi. Khi bạn đổi một cài đặt do cảnh đặt, không nút nào còn được chọn và dòng dưới các nút cho biết các cài đặt là của riêng bạn. Nhấp lại cảnh để đưa các giá trị của nó trở lại.
- Cảnh không ảnh hưởng đến công cụ, dạng, kích thước, vật liệu, camera hay đèn.

:::note
Các cảnh cho cùng giá trị trong ModelCraft và BimCraft. Ảnh hoàn chỉnh trông ra sao phụ thuộc vào mô hình và card đồ họa của bạn.
:::

## Những gì hiển thị trong ảnh

Những gì khung nhìn 3D hiển thị đặc: các cấu kiện bị ẩn và xuyên thấu, tầng bị ẩn và mô hình bị ẩn đều bị loại khỏi ảnh, và các phòng chỉ hiển thị khi {{ui:Không gian}} được bật. Mặt phẳng cắt hoặc hộp cắt cắt ảnh giống như cách nó cắt khung nhìn. Các cấu kiện hiển thị bằng màu riêng của chúng: không dùng tô màu theo thuộc tính (thẻ {{ui:Màu}}).

## Cài đặt

| Cài đặt | Chức năng |
|---|---|
| {{ui:Dung lượng}} | Kích thước khung nhìn, gấp đôi kích thước khung nhìn, Full HD, 4K hoặc hình vuông |
| {{ui:Dạng}} | {{ui:Nhanh}}, hoặc {{ui:Chất lượng cao (dò đường)}} (bên dưới) với {{ui:Giới hạn thời gian}} của nó |
| {{ui:Chất lượng}} | Số lượt (hoặc, ở chất lượng cao, số mẫu) được lấy trung bình: {{ui:Nháp}} 16, {{ui:Tốt}} 64, {{ui:Tốt nhất}} 256. Nhiều lượt hơn cho bóng và cạnh mịn hơn nhưng lâu hơn |
| {{ui:Bầu trời}} | {{ui:Trời quang}}, {{ui:Trời âm u}}, {{ui:Hoàng hôn}} hoặc {{ui:Phòng studio trắng}} (nền trắng trơn) |
| {{ui:Mặt trời}} | 21 tháng 6 lúc 15:00 tại vĩ độ mà tệp cung cấp cho công trình (IfcSite), xoay theo hướng bắc thật của mô hình. Đánh dấu {{ui:Dùng ngày và giờ khác cho ảnh này}} để chọn thời điểm khác |
| {{ui:Độ sáng}} | Sáng hơn hoặc tối hơn, theo từng nấc (stop) |
| {{ui:Mặt đất dưới mô hình}} | Mặt đất ở điểm thấp nhất của mô hình, nhận bóng và mờ dần vào đường chân trời |
| {{ui:Vẽ cạnh}} | Vẽ mỏng các cạnh của cấu kiện phủ lên ảnh |

Khi mặt trời nằm dưới đường chân trời vào thời điểm đã chọn thì là ban đêm: bầu trời tối đi và đèn của mô hình chiếu sáng nó.

## Đèn

Mọi thiết bị chiếu sáng trong mô hình đều là một đèn trong ảnh: các thiết bị trong tệp IFC (IfcLightFixture, hoặc cấu kiện được gán kiểu thiết bị chiếu sáng), kể cả những thiết bị bạn đặt từ thư viện. Mỗi đèn chiếu xuống từ ngay dưới thiết bị. Khi tệp cho biết công suất của thiết bị, độ sáng được suy ra từ đó; nếu không thì là 800 lumen, ánh trắng ấm.

Hộp thoại liệt kê các đèn dưới {{ui:Đèn}}: bỏ đánh dấu một đèn để tắt nó, hoặc nhập độ sáng của nó tính bằng lumen. Các thay đổi này được lưu trong IFC (bộ thuộc tính `CadCraft_Light` của thiết bị, nơi bạn cũng có thể đổi chúng trong Thuộc tính), và {{key:Ctrl+Z}} hoàn tác chúng.

Khi tệp không nói gì về vị trí công trình, mặt trời được đặt ở 40° bắc, và hộp thoại cho biết điều đó. Giờ là giờ địa phương của công trình, tính từ kinh độ của nó, nên có thể lệch một giờ ở nơi đồng hồ được đặt khác.

Các cài đặt này được giữ trong trình duyệt này cho ảnh kế tiếp. Chúng không được lưu trong tệp IFC.

## Kính và các vật liệu khác

Dưới {{ui:Vật liệu}}, mọi màu trên màn hình đều có một kiểu hiển thị: {{ui:Mờ}}, {{ui:Satin}}, {{ui:Bóng}}, {{ui:Kim loại}}, {{ui:Kim loại đánh bóng}}, {{ui:Kính}} hoặc {{ui:Kính mờ}}. Các màu mà tệp IFC làm xuyên thấu (ví dụ kính cửa sổ) ban đầu là {{ui:Kính}}.

:::note
Ở dạng {{ui:Nhanh}}, kính và kim loại phản chiếu bầu trời, không phải phần còn lại của mô hình, và ánh sáng không khúc xạ qua kính. Dạng {{ui:Chất lượng cao (dò đường)}} bên dưới làm được cả hai điều này.
:::

## Chất lượng cao

Chọn {{ui:Dạng}} › {{ui:Chất lượng cao (dò đường)}} để có ảnh theo ánh sáng như cách camera nhìn thấy:

- ánh sáng nảy giữa các bề mặt, nên một phòng được chiếu sáng qua cửa sổ, hoặc bởi đèn, được chiếu sáng khắp các phía và màu lan sang các bề mặt lân cận;
- kính là kính thật: ánh sáng khúc xạ qua nó và nó phản chiếu mô hình;
- kim loại và bề mặt đánh bóng phản chiếu phần còn lại của mô hình;
- tấm đèn chiếu sáng như tấm đèn, với bóng mềm.

Chậm hơn nhiều so với {{ui:Nhanh}}: mỗi lượt dò lại ánh sáng của từng điểm ảnh. Ảnh bắt đầu có hạt và rõ dần khi các mẫu cộng lại, nên hãy bắt đầu với kích thước nhỏ ({{ui:Kích thước khung nhìn}}, {{ui:Nháp}}) và chọn {{ui:Giới hạn thời gian}}: khi hết thời gian, ảnh đến lúc đó được giữ lại. {{ui:Dừng}} cũng giữ ảnh. Lượt đầu tiên chờ trong khi trình duyệt chuẩn bị bộ dò đường.

Khi trình duyệt có WebGPU, bộ dò đường là của CadCraft và chạy trên card đồ họa; dòng dưới ảnh cho biết điều đó. Sau khi {{ui:Dừng}} hoặc hết giới hạn thời gian, {{ui:Tiếp tục}} tiếp tục với cùng ảnh cho đến khi đủ tất cả các mẫu; thay đổi một cài đặt hoặc nhấn {{ui:Kết xuất}} lần nữa sẽ bắt đầu lại từ đầu. Không có WebGPU thì ảnh được dò đường bằng WebGL thay thế (dòng đó cho biết rõ) và {{ui:Tiếp tục}} không được cung cấp.

:::linux
Firefox và phần lớn cấu hình Chrome trên Linux chưa có WebGPU, nên chất lượng cao dùng WebGL ở đó.
:::

Ở dạng này, cạnh không được vẽ, texture chỉ hiển thị màu và độ nhám chứ không hiển thị độ lồi lõm (bump), và việc cắt mặt cắt được thực hiện trên mô hình trước khi ảnh bắt đầu.

{{ui:Khử nhiễu (xóa hạt còn lại sau các mẫu)}} được bật mặc định: khi ảnh xong, hoặc bị dừng, hạt còn lại được xóa bởi một mạng nơ-ron được thiết kế cho việc này (mạng đã công bố của Intel Open Image Denoise, chạy trên máy tính của bạn: trên card đồ họa, nếu không thì trên bộ xử lý). {{ui:Hiển thị}} › {{ui:Ảnh trước khi khử nhiễu}} hiển thị ảnh như đã kết xuất.

## Bầu trời và hồ sơ ánh sáng trên card đồ họa

Với WebGPU, chất lượng cao có thêm hai kiểu bầu trời:

- {{ui:Bầu trời vật lý}} tính ánh sáng ban ngày từ độ cao của mặt trời: màu xanh đậm phía trên, một dải nhạt ở đường chân trời, và mặt trời ấm hơn và mờ hơn khi thấp xuống. {{ui:Độ mờ}} đi từ một ngày rất trong (2) đến một ngày mờ sương (10).
- {{ui:Ảnh bầu trời (HDRI)}} chiếu sáng mô hình bằng một ảnh toàn cảnh của một địa điểm thật. {{ui:Chọn ảnh…}} nhận tệp `.hdr` hoặc `.exr` dạng equirectangular; {{ui:Xoay}} xoay nó quanh mô hình và {{ui:Độ sáng ảnh}} làm nó sáng hơn hoặc tối hơn. Ảnh có mặt trời riêng, nên mặt trời của mô hình không được thêm vào. Ảnh chỉ được giữ khi trang còn mở: sau khi mở lại, chọn lại.

Mỗi đèn trong danh sách {{ui:Đèn}} có thể nhận một hồ sơ ánh sáng của nhà sản xuất: {{ui:Hồ sơ IES…}} đọc một tệp IES (LM-63) và đèn sau đó chiếu sáng theo cách thiết bị đó chiếu (một đèn downlight hẹp, một đèn rọi tường). Mọi đèn có tên đó đều dùng nó, và đèn giữ độ sáng riêng của nó. Nhấp tên hồ sơ để ngừng dùng nó.

Cửa sổ kính trong giúp ánh sáng bầu trời vào được phòng.

Dạng {{ui:Nhanh}} và bộ dò đường WebGL hiển thị {{ui:Bầu trời vật lý}} và {{ui:Ảnh bầu trời (HDRI)}} như trời quang và bỏ qua hồ sơ ánh sáng.

## Camera

{{ui:Camera}} thiết lập ảnh như một bức ảnh chụp:

- {{ui:Mức phơi gió}}: giữ {{ui:Thanh độ sáng}}, hoặc chọn {{ui:Cài đặt camera}} và đặt {{ui:Khẩu độ (f-stop)}}, {{ui:Tốc độ màn trập}} và {{ui:ISO}} như trên máy ảnh; EV bên cạnh chúng là giá trị phơi sáng thông thường. f/16 ở 1/100 s và ISO 100 khớp với một ngày nắng; cảnh tối hơn cần khẩu độ rộng hơn, màn trập chậm hơn hoặc ISO cao hơn. Điều này hoạt động ở mọi dạng.
- {{ui:Độ sâu trường ảnh}} làm mờ những gì gần hơn hoặc xa hơn {{ui:Khoảng cách lấy nét (m)}} như một ống kính với f-stop đó sẽ làm (để trống để lấy nét vào những gì ở giữa khung nhìn); {{ui:Hình dạng khẩu độ}} làm các điểm sáng ngoài tiêu cự có hình tròn hoặc hình đa giác.
- {{ui:Phối cảnh hai điểm (đường thẳng đứng giữ thẳng đứng)}} cân bằng camera và dịch chuyển ảnh, như ống kính tilt-shift kiến trúc, nên các bức tường không nghiêng khi bạn nhìn lên hoặc xuống một công trình.
- {{ui:Cân bằng trắng}} đặt màu ánh sáng nào hiển thị là trắng: thấp hơn (ví dụ 3000 K) cho ánh đèn ấm, cao hơn cho bóng râm và ngày âm u.
- {{ui:Phép chiếu}}: {{ui:Toàn cảnh 360°}} tạo ảnh 2:1 của mọi thứ xung quanh camera cho trình xem toàn cảnh; {{ui:Toàn cảnh 360° nổi}} xếp chồng một toàn cảnh cho mắt trái và một cho mắt phải dành cho kính thực tế ảo; {{ui:Bản đồ khối (6 mặt)}} tạo sáu khung nhìn vuông trong lưới 3 × 2. Chiều rộng lấy từ {{ui:Dung lượng}}.

Phép chiếu, độ sâu trường ảnh, phối cảnh hai điểm và cân bằng trắng cần bộ dò đường trên card đồ họa (WebGPU), nên chúng chỉ hiển thị trong {{ui:Chất lượng cao (dò đường)}}.

## Hoàn thiện ảnh

{{ui:Ảnh}} chỉnh màu ảnh chất lượng cao như một bức ảnh, và mọi điều khiển thay đổi ảnh hoàn chỉnh ngay lập tức, không cần kết xuất lại:

- {{ui:Kiểu hiển thị (view transform)}}: {{ui:ACES filmic}} (ảnh như trước), {{ui:AgX}} (mềm hơn, giữ màu trong ánh sáng rất sáng), {{ui:Filmic}} (đường cong phim nhẹ) hoặc {{ui:Tiêu chuẩn}} (đơn giản, ánh sáng quá sáng bị cắt thành trắng).
- {{ui:Độ tương phản}} và {{ui:Nén vùng sáng}} (khôi phục chi tiết ở các phần rất sáng).
- {{ui:Quầng sáng (bloom)}} (ánh sáng mềm quanh nguồn sáng), {{ui:Chói}} cùng {{ui:Vệt chói}} (các tia sao từ những điểm sáng nhất) và {{ui:Tối góc (vignette)}} (các góc tối hơn).
- {{ui:Bảng màu (.cube)…}} áp dụng cấp màu từ tệp `.cube`, với {{ui:Cường độ bảng màu}} của nó; giống ảnh bầu trời, nó chỉ được giữ khi trang còn mở.

## Lưu ảnh

{{ui:Lưu thành}} bên cạnh {{ui:Lưu}} chọn tệp: {{ui:PNG}}, {{ui:JPEG}} hoặc {{ui:WebP}} để chia sẻ (JPEG và WebP chỉ khi trình duyệt có thể ghi chúng), và sau khi kết xuất chất lượng cao trên card đồ họa, còn có:

- {{ui:PNG, 16 bit}}: ảnh đã chỉnh màu với các bước chuyển sắc mịn hơn, để in hoặc chỉnh sửa tiếp.
- {{ui:EXR, mọi lớp (số thực 32 bit)}}: ảnh như đã kết xuất (ánh sáng tuyến tính, không chỉnh màu) với mọi lớp kết xuất và nhóm đèn thành lớp riêng, dùng cho chương trình ghép hình.
- {{ui:Tệp kết xuất (.ccrender, để chỉnh màu sau)}}: mọi thứ hộp thoại cần để trộn và chỉnh màu ảnh lần nữa. {{ui:Mở tệp kết xuất…}} đưa nó trở lại, với phần trộn và phần chỉnh màu của nó, mà không cần kết xuất.

## Trộn ánh sáng sau khi kết xuất

Bật {{ui:Trộn ánh sáng (đổi màu và độ sáng của từng đèn sau khi kết xuất)}} trước khi bạn nhấn {{ui:Kết xuất}}. Khi ảnh xong (hoặc bị dừng), {{ui:Trộn ảnh}} liệt kê các đèn của nó theo nhóm: bầu trời, mặt trời, và các đèn theo tên (mọi đèn cùng tên là một nhóm). Tắt một nhóm, đặt cho nó một màu, hoặc làm nó sáng hơn hoặc tối hơn, và ảnh thay đổi ngay, không cần kết xuất lại. {{ui:Lưu cách trộn}} giữ cách trộn dưới một tên để chọn lại sau; {{ui:Như đã kết xuất}} quay về ảnh như lúc được tạo. {{ui:Lưu}} lưu ảnh đã trộn.

{{ui:Các lớp kết xuất (albedo, pháp tuyến, độ sâu, khuếch tán, phản xạ, truyền qua, phát sáng, mã đối tượng)}} cũng giữ các phần của ảnh. {{ui:Hiển thị}} chuyển khung nhìn sang một trong số đó: màu bề mặt (albedo), pháp tuyến, độ sâu, ánh sáng khuếch tán, phản xạ và truyền qua (mỗi loại trực tiếp và gián tiếp), phần phát sáng và bầu trời, và một màu cho mỗi đối tượng hoặc mỗi vật liệu để làm mặt nạ.

Cả hai đều giữ thêm lớp trên card đồ họa. Ở kích thước lớn, card đồ họa có thể không đủ chỗ; hộp thoại cho biết điều đó và kích thước nhỏ hơn sẽ hoạt động.

## Sương mù, khói, nhiễu và caustics

Các tính năng này nằm trong {{ui:Sương mù, khói và nhiễu}} và hoạt động trong {{ui:Chất lượng cao (dò đường)}} trên card đồ họa; các công cụ khác không có chúng.

- {{ui:Sương mù và màn mờ}} lấp đầy không khí tới một độ cao bằng một lớp sương mà mặt trời, bầu trời và đèn chiếu sáng. {{ui:Tầm nhìn xa, tính bằng mét}} đặt độ dày của nó (khoảng 100 m là màn mờ nhẹ, 20 m là sương mù dày), {{ui:Độ cao sương mù so với mặt đất, tính bằng mét}} là nơi nó kết thúc, và {{ui:Tia sáng xuyên qua}} là mức sương sáng lên hướng về nguồn sáng. Ánh nắng rời khỏi sương ở đỉnh của nó, nên khi nắng xuyên qua cửa sổ hoặc giữa các tòa nhà, bạn thấy nó như những tia sáng.
- {{ui:Khói hoặc mây}} thêm một khối khói hoặc mây được chiếu sáng như sương mù. {{ui:Loại}} là {{ui:Mây}}, {{ui:Cột khói}} hoặc {{ui:Từ tệp khối (.ccvol)}}, định dạng lưới riêng của CadCraft. {{ui:Chi tiết}} và {{ui:Biến thể}} thay đổi mây hoặc cột đã tạo, {{ui:Kích thước cạnh dài nhất, tính bằng mét (0 = kích thước của mô hình)}}, {{ui:Dời X (m)}}, {{ui:Dời Y (m)}}, {{ui:Dời Z (m)}} và {{ui:Xoay}} đặt nó (nó bắt đầu ở giữa mô hình), {{ui:Độ dày}} làm nó đặc hơn, {{ui:Phát sáng phía trước}} làm nó sáng hơn về phía nguồn sáng, và {{ui:Màu}} nhuộm màu nó. Tệp khối chỉ được giữ khi trang còn mở, giống ảnh bầu trời.
- {{ui:Dừng sớm ở những vùng ảnh đã sạch (lấy mẫu thích ứng)}} không cấp thêm mẫu cho các điểm ảnh đã ổn định. {{ui:Mức nhiễu chấp nhận}} là lượng hạt còn lại khi một điểm ảnh dừng. Dòng dưới ảnh cho biết trung bình một điểm ảnh nhận được bao nhiêu mẫu.
- {{ui:Caustics (ánh sáng khúc xạ qua kính hoặc phản xạ bởi gương)}} dò ánh sáng từ đèn và mặt trời, nên vệt sáng dưới quả cầu thủy tinh hoặc ánh gương trên tường hiện ra sạch thay vì có hạt. Nó tắt khi sương mù, khói, trộn ánh sáng hoặc các lớp kết xuất đang bật, và nó được làm cho ảnh, không dành cho ảnh 360°.

## Hàng đợi kết xuất

{{ui:Hàng đợi kết xuất}} trong hộp thoại: {{ui:Thêm ảnh này vào hàng đợi}} giữ các cài đặt và khung nhìn của ảnh, và {{ui:Bắt đầu hàng đợi}} kết xuất những gì đang chờ, lần lượt từng cái, trên máy tính này. Đóng trang sẽ giữ hàng đợi; mở cùng mô hình để tiếp tục. {{ui:Lưu}} tải xuống một mục đã xong; {{ui:Xóa}} và {{ui:Xóa mục đã xong}} dọn danh sách. Hàng đợi kết xuất ở chất lượng cao, nên cần WebGPU.

## Mất bao lâu

Ảnh được tạo trên máy tính của bạn, bởi card đồ họa của nó; không có gì được tải lên. Thời gian tăng theo số lượt và số điểm ảnh: {{ui:Tốt nhất}} có số lượt gấp 16 lần {{ui:Nháp}}, và ảnh 4K có số điểm ảnh gấp khoảng bốn lần Full HD. Mô hình lớn mất nhiều thời gian hơn cho mỗi lượt.
