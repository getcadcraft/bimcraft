---
title: Cấu tạo tường và kích thước tham chiếu
summary: Tạo loại tường của riêng bạn từng lớp một với lõi rõ ràng, giữ thư viện vật liệu của dự án, và ghi kích thước đến các mặt và tim luôn gắn kết khi tường thay đổi.
keywords: lod, mức phát triển, lod 200, lod 300, chung, cấu tạo tường, loại tường, lớp, lõi, mặt lõi, tim lõi, khoang khí, khe khí, màng, màng bọc nhà, thư viện vật liệu, vật liệu, độ dày, kích thước tham chiếu, kích thước, liên kết, đường vị trí, ốp ngoài, thanh gỗ đứng, tấm thạch cao
from: 4ea8fbf5
---

## Mục tiêu

Tạo một loại tường khớp với bức tường bạn sẽ xây: ốp ngoài, tấm ốp, lõi thanh gỗ đứng 5½ inch và tấm thạch cao, hoặc gạch, khe khí và tường khung gỗ. Đánh dấu những lớp nào là lõi, để một kích thước hoặc một đường vị trí có thể giữ lõi trong khi các lớp hoàn thiện xung quanh thay đổi. Sau đó ghi kích thước tường đến các mặt và tim mà bạn muốn.

## Tạo một loại tường

1. Bắt đầu một tòa nhà hoặc mở một mô hình IFC, bật {{ui:Vẽ}}, rồi chọn công cụ {{ui:Tường}}.
2. Chọn một mẫu khởi đầu trong {{ui:Loại tường}} và mở {{ui:Cấu tạo tường…}}. Mẫu khởi đầu mở ra dưới dạng một bản sao; đặt tên cho loại mới.
3. Các lớp chạy từ ngoài ở đầu danh sách vào trong ở cuối danh sách. Chọn vật liệu cho từng lớp, nhập độ dày (theo đơn vị dự án, hoặc các giá trị rõ ràng như `12.7 mm` hoặc `1/2"`), chọn chức năng (hoàn thiện, nền, kết cấu, cách nhiệt, màng) và đánh dấu ô **Lõi** cho các lớp lõi. Lõi phải là một nhóm liên tục.
4. {{ui:Thêm lớp}} thêm một lớp, {{ui:Thêm khoang khí}} thêm một khe khí cùng hệ thống thông gió của nó (không xác định, không thông gió, có thông gió), {{ui:Thêm màng}} thêm một lớp không có độ dày danh định, chẳng hạn màng bọc nhà. Các mũi tên di chuyển một lớp ra ngoài hoặc vào trong.
5. Bản xem trước vẽ các lớp theo tỷ lệ, với lõi được gạch chân, đánh số như các hàng, và ghi kích thước từng lớp, lõi và tổng. {{ui:Lưu loại}}.

Loại mới nằm trong danh sách của công cụ Tường và trong **Thuộc tính** của một bức tường được chọn. Lưu một loại mà bạn sửa sẽ thay đổi mọi bức tường đang dùng nó; {{ui:Nhân bản loại}} tạo một loại riêng và chỉ gán cho các bức tường bạn đã chọn. Mỗi lần lưu là một bước hoàn tác, cùng với các bức tường bị di chuyển, các cửa đi và cửa sổ trong chúng, và các kích thước phụ thuộc vào chúng.

Một khoang khí làm tăng bề rộng. Một màng không làm tăng gì: nó vẫn nằm trong loại để bảng thống kê có thể tìm thấy sau này, và không tính vào độ dày của tường hay của lõi. Khoang khí hoặc màng không bao giờ được tính là vật liệu đặc. Trong tệp lưu dưới dạng IFC2X3, màng được giữ trong bản ghi của loại nhưng bị bỏ khỏi các lớp vật liệu vật lý của nó.

## Gắn mức phát triển (LOD) cho loại

Một loại có thể cho biết nó được phát triển đến mức nào. Trong trình chỉnh sửa, **Mức phát triển (LOD)** cung cấp thang cố định 100, 200, 300, 350, 400 và 500, hoặc **Chưa đặt**. Một tường chung ("Tường 230 chung") là LOD 100 hoặc 200; một cấu tạo cụ thể với các lớp thật ("230 gạch đất nung, trát hai mặt") là LOD 300 trở lên. Thẻ này do bạn đặt: BimCraft không tự tính, và các loại khởi đầu không có thẻ.

Thẻ hiển thị bên cạnh tên loại trong danh sách loại của công cụ Tường, trong **Thuộc tính** của tường, và trong danh sách [Đổi kiểu](topic:wall-tools); báo cáo sau khi đổi cho biết mức đã tăng hay giảm. Để xem thẻ trong bảng thống kê **Tường theo loại** và tệp CSV của nó, đánh dấu ô **Hiển thị LOD của mỗi loại tường trong bảng thống kê tường** trong Cài đặt › BimCraft › Tường: một cột cuối cùng, LOD, sẽ được thêm vào. Thẻ được lưu trong tệp IFC cùng với loại (trong bộ thuộc tính `CadCraft_WallType` của loại, dưới tên thuộc tính `LOD` và bên trong bản ghi của loại), nên nó vẫn có khi bạn mở lại tệp. Hiện tại thẻ chỉ dùng cho loại tường, không dùng cho từng phần tử riêng lẻ hay các loại phần tử khác.

## Tường chung cho giai đoạn phác thảo

Danh sách Loại của công cụ Tường bắt đầu với hai tường **chung**: **Tường chung 200 mm (ngoài)** và **Tường chung 100 mm (trong)**. Mỗi tường là một lớp của vật liệu chung, được gắn thẻ LOD 200. Hãy dùng chúng khi bạn đã biết tường đặt ở đâu nhưng chưa biết chúng làm bằng gì.

Một bức tường có loại được gắn thẻ **LOD 100** hoặc **LOD 200** được vẽ trong mọi mặt bằng dưới dạng **một dải gạch chéo**, ở mọi mức chi tiết: không có lớp, không có đường lớp. Điều này đúng với các tường chung và với mọi loại riêng mà bạn gắn thẻ LOD 100 hoặc 200. Bản thân bức tường đã đầy đủ: nó có độ dày, các cửa đi và cửa sổ, các phòng và khối lượng của nó.

Để phát triển nó, hãy đổi loại của nó (Chỉnh sửa › Tường › **Đổi kiểu**, hoặc Loại trong Thuộc tính). Bức tường không bao giờ được vẽ lại: cùng một bức tường nhận loại mới, và báo cáo cho biết những gì đã di chuyển. Một loại được gắn thẻ LOD 300 trở lên được vẽ với các lớp của nó như trước.

Để vẽ mọi bức tường theo các lớp của nó bất kể thẻ là gì: Cài đặt › BimCraft › Tường, bỏ đánh dấu ô **Vẽ tường loại LOD 100 hoặc LOD 200 thành một dải gạch chéo**.

Cửa đi và cửa sổ mẫu khởi đầu cũng là các loại chung (một kích thước và một cách mở, không phải một sản phẩm). Khi ô **Hiển thị LOD của mỗi loại tường trong bảng thống kê tường** được bật, các bảng thống kê Cửa đi và Cửa sổ hiển thị LOD 200 cho chúng.

## Gắn dữ liệu bóc tách khối lượng cho một loại

Trong trình chỉnh sửa loại tường, **Dữ liệu bóc tách khối lượng** lấy những gì người dự toán cần biết về bức tường, một lần cho loại: **đơn vị** mà tường được xây bằng (một viên gạch hoặc khối xây: tên, chiều dài, chiều cao và chiều rộng của nó), **vữa** (tên và độ dày mạch vữa) và một **đơn giá** cùng mã tiền tệ (ba chữ cái, chẳng hạn USD, EUR hoặc ZAR) và đơn giá đó tính trên đơn vị nào: mét vuông hoặc feet vuông diện tích tường thuần, mét hoặc feet chiều dài tường, hoặc mỗi bức tường. Tất cả đều không bắt buộc.

Dữ liệu này được lưu cùng loại trong tệp. Mọi bức tường thuộc loại đó khi ấy đều báo cáo nó: {{ui:Bảng thống kê}} › **Loại tường: dữ liệu bóc tách khối lượng** liệt kê đơn vị, vữa, đơn giá và đơn giá nhân với khối lượng đo được, và phần bóc tách khối lượng gửi sang TakeoffCraft mang dữ liệu này trên mục của loại tường đó. Thay đổi trên loại và mọi bức tường đều theo.

Ba trường nữa dành cho việc đếm gạch hoặc khối và vữa:

- **Hao hụt viên, %** được cộng vào số lượng viên. Để trống để dùng số liệu của phương pháp đo của dự án, hoặc không có nếu phương pháp không có. Nhập 0 để không có hao hụt bất kể phương pháp nói gì.
- **Vữa thêm, %** dành cho các lỗ rỗng hoặc lỗ thủng cần vữa. Nó được cộng vào thể tích vữa. Để trống nếu không có.
- **Các lớp làm bằng đơn vị này**: đánh dấu từng lớp là một lá của viên gạch hoặc khối này. Một tường có khoang có hai lá. Nếu không đánh dấu lớp nào, các lớp lõi được tính.

Đơn giá cũng có thể tính trên mỗi đơn vị đặt hàng, trên 1000 đơn vị đặt hàng hoặc trên m³ vữa. Khi đơn vị có chiều dài và chiều cao, **Dữ liệu bóc tách khối lượng của loại tường** hiển thị số đơn vị trên m² (hoặc ft²) của một lá, số đơn vị cần đặt và thể tích vữa; các công thức nằm trong [Gạch, khối và vữa](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Một loại chỉ có một đơn vị: hai lá với các đơn vị khác nhau (lá ngoài bằng gạch và lá trong bằng khối) hiện chưa thể đếm trên một loại.

## Giữ lõi cố định

Trong **Thuộc tính**, đặt **Đường vị trí** của một bức tường thành một mặt lõi hoặc tim lõi. Khi sau này bạn thêm hoặc làm dày một lớp hoàn thiện, đường đó vẫn ở nguyên vị trí và bức tường lớn lên xung quanh nó; các bức tường gặp nó ở góc sẽ theo, nên các góc thẳng vẫn khép kín.

## Vật liệu của dự án

{{ui:Thư viện vật liệu…}} liệt kê vật liệu của dự án: tên, danh mục, độ dày mà một lớp bắt đầu với, màu hiển thị, mẫu tô cắt và ghi chú. Thư viện được lưu trong IFC cùng với dự án. Khi chọn một vật liệu cho một lớp, lớp đó nhận độ dày mặc định của vật liệu, bạn có thể đổi sau; chỉnh sửa thư viện sau này không bao giờ làm thay đổi kích thước các bức tường bạn đã vẽ. Bạn cũng có thể tạo một vật liệu từ danh sách vật liệu của lớp bằng {{ui:+ Vật liệu mới…}}.

## Kích thước tham chiếu

{{ui:Chú thích}} › {{ui:Kích thước tham chiếu}}: chọn ngang, đứng hoặc song song, và một tham chiếu: mặt hoàn thiện ngoài hoặc trong, mặt lõi ngoài hoặc trong, tim tường hoặc tim lõi. Chọn bức tường thứ nhất, đổi tham chiếu nếu bạn muốn, chọn bức tường thứ hai, rồi nhấp vào nơi đường kích thước đặt. Hai tham chiếu trên một bức tường đo tổng độ dày hoặc độ dày lõi của nó. {{ui:Kích thước tham chiếu…}} liệt kê các kích thước của khung nhìn, kể cả những kích thước đã mất một bức tường, với Thuộc tính, Gắn lại tham chiếu và Xóa.

### Ghi kích thước toàn bộ mặt bằng theo quy tắc

{{ui:Chú thích}} › {{ui:Ghi kích thước mặt bằng…}} ghi kích thước phía ngoài của mặt bằng tầng mà bạn đang xem: kích thước tổng theo mỗi hướng, một hàng kích thước dọc theo mỗi cạnh ngoài (đầu tường, các tường gặp cạnh ngoài, và các cửa đi và cửa sổ trong đó), với các hàng được đặt cách xa tòa nhà. Đánh dấu những gì bạn muốn, đọc số lượng, rồi {{ui:Thêm kích thước}}. Chúng là các kích thước tham chiếu thông thường, nên chúng theo các bức tường khi tường di chuyển, và bạn có thể chọn, di chuyển hoặc xóa bất kỳ cái nào; toàn bộ tập hợp là một bước hoàn tác, và chạy lại không tạo thêm bản sao nào.

Lệnh này chỉ ghi kích thước phần ngoài: các phòng bên trong tòa nhà, tường cong và tường không vuông góc với mặt bằng được để lại cho các công cụ vẽ tay, và đường lưới không phải là tường, nên kích thước giữa các lưới không được tạo ở đây. Trợ lý được kết nối của bạn có thể làm việc tương tự bằng `plan_dimension`.

Kích thước được gắn vào các bức tường, không gắn vào một vị trí trên màn hình: khi một bức tường di chuyển hoặc loại của nó thay đổi, giá trị theo sau. Nếu một bức tường bị xóa, kích thước cho biết nó chưa được giải quyết và không hiển thị số, cho đến khi bạn gắn lại hoặc hoàn tác. Ô độ dài cũng nhận tọa độ mặt bằng như `10',12'` cho một đường kích thước đặt tại một vị trí chính xác.

Kích thước dành cho các tường do BimCraft vẽ, trong các khung nhìn mặt bằng. Chưa xây dựng: kích thước trên mặt cắt và mặt đứng, đến cửa đi, cửa sổ và các cấu kiện khác, và các lớp cấu tạo được vẽ trên mặt bằng và mặt cắt; xem [Chưa xây dựng](topic:not-built-yet).

## Xem thêm

[Vẽ tường](topic:draw-walls), [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door), [Bảng thuộc tính](topic:properties-panel).
