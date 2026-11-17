---
title: Bảng thống kê, kích thước và PDF của mặt bằng
summary: Bảng cửa, cửa sổ, tường và phòng thay đổi khi bạn vẽ, kích thước trên mặt bằng, và mặt bằng của một tầng được lưu thành PDF ở tỷ lệ tiêu chuẩn.
keywords: bảng thống kê, schedule, bảng cửa, door schedule, bảng cửa sổ, window schedule, bảng tường, wall schedule, bảng phòng, room schedule, khối lượng, quantities, takeoff, diện tích, area, csv, bảng tính, spreadsheet, kích thước, dimension, dimensions, in, print, pdf, plot, tỷ lệ, scale, 1/4", 1:50, tờ, sheet
from: d97cd16e
---

## Bạn sẽ làm gì

Xem tòa nhà bạn vẽ cộng lại thành bao nhiêu khi bạn đang vẽ: có bao nhiêu cửa và cửa sổ mỗi cỡ, bao nhiêu tường mỗi loại, mỗi phòng lớn bao nhiêu. Đặt kích thước lên mặt bằng và lưu nó thành PDF để in hoặc gửi đi.

## Bảng thống kê

Khi {{ui:Vẽ}} được bật, **Bảng thống kê** ở bảng bên trái hiển thị một bảng tại một thời điểm:

- **Cửa** và **Cửa sổ**: mỗi cái theo ký hiệu của nó (D1, D2 … và W1 …, được đặt khi bạn đặt), kiểu, chiều rộng, chiều cao (và ngưỡng), tầng và tường mà nó nằm trong.
- **Tường theo loại**: với mỗi loại tường, số tường, độ dày, tổng chiều dài và diện tích mặt bên của chúng là **Diện tích tổng**, **Khấu trừ** và **Diện tích thuần**, cùng một tổng.
- **Phòng**: số, tên, tầng, diện tích và chu vi, cùng tổng diện tích.
- **Sàn**: mỗi sàn với tầng, loại và độ dày, cùng diện tích tổng, khấu trừ và diện tích thuần.
- **Hoàn thiện**: mỗi lớp hoàn thiện của các loại tường (theo vật liệu và phía của tường) và các trần, với số mặt và tổng, khấu trừ và thuần.
- **Loại tường: dữ liệu bóc tách**: những gì đã nhập một lần cho mỗi loại tường (đơn vị, vữa, đơn giá), với số tường, chiều dài và diện tích thuần của chúng, và đơn giá nhân với khối lượng đo được. Xem [Cấu kiện tường](topic:wall-assemblies).
- **Hoàn thiện theo phòng**, **Hoàn thiện theo tường**, **Hoàn thiện theo khu vực** và **Khối lượng hoàn thiện**: những gì phủ mỗi phòng, với diện tích, số lượng gạch kể cả phần cắt và thể tích nền. Xem [Hoàn thiện phòng và bảng thống kê hoàn thiện](topic:room-finishes).
- **Cấu hình** của riêng bạn: một bảng bạn đã nhóm, cộng tổng và lưu dưới một tên. Xem [Bố trí, lưu và xuất bảng thống kê](topic:schedule-layouts).

Các bảng thay đổi theo từng lần chỉnh sửa. Bấm một dòng, hoặc một con số đơn lẻ, để chọn các phần tử mà nó đến từ. {{ui:Tải CSV}} lưu bảng để mở trong bảng tính; {{ui:Tải Excel}} và {{ui:Sao chép cho Google Sheets}} nằm dưới nó. **Hoàn thiện phòng** và **Đặc tả** ([Lập đặc tả từ mô hình](topic:specification)) mở từ cùng nơi đó.

## Diện tích và thể tích của mỗi lớp

Chọn **Lớp: diện tích và thể tích** trong danh sách Bảng thống kê. Bảng có một dòng cho mỗi lớp của mỗi loại tường, sàn, mái và trần đang dùng: phần tử, loại và LOD của nó, lớp (đếm từ phía ngoài của tường, từ đỉnh của sàn, mái hoặc trần), vật liệu và chức năng của nó, độ dày, số phần tử, **diện tích thuần** và **thể tích**.

- Diện tích là diện tích thuần của các phần tử thuộc loại đó, đo đúng như trong Tường theo loại, Sàn và Hoàn thiện, theo phương pháp đo của dự án. Mái được đo theo độ dốc; không có phương pháp đo nào có quy tắc cho mái.
- Thể tích là diện tích đó nhân với độ dày riêng của lớp.
- Sàn, mái hoặc trần không có loại là một dòng: một lớp với độ dày riêng của nó.
- Một khoang khí được liệt kê với diện tích của nó và bị bỏ khỏi tổng thể tích. Một màng có diện tích và không có thể tích.

Bấm một dòng để chọn các phần tử của nó. {{ui:Tải CSV}} lưu bảng.

## Cách đo diện tích

Mọi diện tích là ba số cộng lại với nhau: diện tích tổng trừ khấu trừ là diện tích thuần. Quy tắc được viết phía trên mỗi bảng này, và đó là một quy tắc duy nhất: các bảng thống kê, khối lượng được lưu trong tệp IFC và bóc tách khối lượng gửi sang TakeoffCraft đều dùng nó.

- **Một tường**: diện tích tổng là một mặt của tường, chiều dài theo đường tim nhân với chiều cao của nó (mặt thực cho tường có đỉnh hoặc chân được tạo hình). Mọi cửa, cửa sổ và lỗ mở khác đều bị khấu trừ, chiều rộng nhân chiều cao, mỗi lỗ một lần.
- **Một sàn hoặc trần**: diện tích tổng là diện tích bên trong đường bao của nó. Mọi lỗ mở và lỗ cắt bên trong đều bị khấu trừ một lần.
- **Một lớp hoàn thiện tường**: mỗi lớp hoàn thiện của loại tường phủ một mặt của tường, đo như tường, với các lỗ mở cùng bị khấu trừ. Một hoàn thiện là một lớp của tường: nó được liệt kê dưới Hoàn thiện và không được cộng vào diện tích tường, nên một tường có cửa không bao giờ bị tính hai lần.

Đó là **mặc định của CadCraft**: mọi lỗ mở đều bị khấu trừ, bất kể kích thước; chiều dài tường đo theo đường tim; các mép lỗ không được đo. Đó là cách mọi dự án dùng cho đến khi bạn chọn phương pháp khác.

## Chọn phương pháp đo

Phía trên bảng thống kê, **Phương pháp đo** liệt kê các phương pháp đi kèm BimCraft, và **Tải tệp phương pháp** lấy tệp của văn phòng bạn. Lựa chọn được lưu trong tệp IFC, như một bước hoàn tác, và ba thứ theo nó cùng lúc: các bảng thống kê, khối lượng thuần được lưu trong tệp, và bóc tách khối lượng gửi sang TakeoffCraft. Quy tắc phía trên mỗi bảng khi đó bắt đầu bằng phương pháp, nguồn của nó, ngày nguồn được đọc và các chữ **Chưa được chuyên gia định lượng kiểm tra**.

Phương pháp là một tệp nhỏ các dữ kiện, không phải mã chương trình. Với mỗi khối lượng, nó nói:

- **lỗ mở nhỏ nhất được khấu trừ**: ví dụ, một lỗ mở 0.5 m² hoặc nhỏ hơn thì được giữ trong diện tích tường;
- **cách đo các chỗ giao tường**: theo đường tim; hoặc với một tường kết thúc vào tường khác thì đo đến mặt của tường đó; hoặc với mọi đầu tường gặp tường khác thì đo đến mặt gần nhất;
- **có đo các mép lỗ mở hay không** đối với hoàn thiện (phần quay của hoàn thiện vào các lỗ mở), như diện tích hoặc, khi nông, như chiều dài. Độ sâu của mép được lấy bằng nửa độ dày tường;
- **nó nói gì về xây gạch đá**: cách đo, và bất kỳ phần hao hụt hoặc dự phòng vữa nào nó nêu.

Các phương pháp đi kèm BimCraft:

| Phương pháp | Tường: lỗ mở nhỏ nhất được khấu trừ | Hoàn thiện tường | Trần | Xây gạch đá |
|---|---|---|---|---|
| CadCraft default | mọi lỗ mở | mọi lỗ mở | mọi lỗ cắt | không có dự phòng |
| RICS NRM 2 (Vương quốc Anh), ấn bản thứ 2, 2021 | 0.5 m² hoặc nhỏ hơn được giữ lại | 1 m² hoặc nhỏ hơn được giữ lại | 1 m² hoặc nhỏ hơn được giữ lại | theo diện tích; không nêu tỷ lệ phần trăm |
| AAQS Standard Method for Africa 2015 | 0.5 m² hoặc nhỏ hơn được giữ lại | 0.5 m² hoặc nhỏ hơn được giữ lại | 0.5 m² hoặc nhỏ hơn được giữ lại | theo diện tích; đo thuần, hao hụt 0% |
| IS 1200 (Ấn Độ), 1976, xây gạch | 0.1 m² hoặc nhỏ hơn được giữ lại | mặc định (xem bên dưới) | mặc định | theo thể tích |
| BIA Technical Note 10 (Hoa Kỳ), 2009 | mọi lỗ mở | mặc định | mặc định | hao hụt 5% với viên, 15% với vữa |

Đọc các giới hạn này trước khi bạn dựa vào một phương pháp:

- **Chưa có chuyên gia định lượng nào kiểm tra bất kỳ phương pháp nào trong số này.** Mỗi phương pháp được làm bằng cách đọc nguồn được nêu và ghi các con số của nó cùng điều khoản mà chúng xuất phát từ. Nếu bạn là chuyên gia định lượng và có thể kiểm tra một phương pháp, những người làm ứng dụng rất muốn nghe từ bạn.
- Khi một quy tắc không thể đọc được từ nguồn, phương pháp ghi **chưa xác nhận** cho nó và mặc định CadCraft được dùng. Không có phương pháp nào đi kèm BimCraft có quy tắc đã xác nhận cho các chỗ giao tường, mép lỗ hay sàn, nên các phần đó được đo theo cách mặc định dưới mọi phương pháp.
- IS 1200 khấu trừ lỗ mở trong lớp trát theo ba dải. Tệp phương pháp chưa thể chứa dải, nên hoàn thiện tường dùng mặc định dưới phương pháp đó, và quy tắc nói rõ điều đó.
- Hệ thống Tiêu chuẩn Nam Phi đo công việc xây dựng **không** nằm trong số này: nội dung của nó không đọc được. Phương pháp AAQS cho Châu Phi nói rằng nó dựa trên ấn bản 1991 của hệ thống đó, nhưng đó là một tài liệu khác.
- BIA Technical Note 10 là một ghi chú dự toán của ngành, không phải phương pháp đo tiêu chuẩn.
- Một lỗ mở đúng bằng kích thước nhỏ nhất sẽ theo lời của chính phương pháp ("not exceeding", "less than"). Kích thước trong vòng 2 phần trong 10 000 của nó được tính là đúng bằng nó.
- Theo một phương pháp, diện tích mặt tường thuần và diện tích sàn hoặc trần thuần trong tệp tuân theo phương pháp, và bộ khối lượng ghi tên nó. Các diện tích tổng và thể tích trong tệp giữ nguyên như đã vẽ.

**Ghi chú về phương pháp này**, dưới bộ chọn, nói rõ mỗi nguồn để ngỏ điều gì. **Mở nguồn** đưa đến tài liệu.

### Phương pháp riêng của văn phòng bạn

Tệp phương pháp là JSON với định dạng `cadcraft-measurement-method`. Mọi giá trị trong đó đều ghi điều khoản mà nó xuất phát từ; một giá trị không có điều khoản sẽ bị từ chối. Tệp được kiểm tra khi bạn tải, một trường sai sẽ được chỉ đích danh, và không có gì được dùng từ một tệp không đạt. Khi đã chọn, tệp được lưu trong dự án, nên dự án mở giống nhau trên máy tính khác. Mã của nó là một tên riêng đơn giản của bạn (không được là mã của một phương pháp đi kèm ứng dụng).

## Gạch, khối và vữa

**Loại tường: dữ liệu bóc tách** đếm đơn vị và vữa của mọi loại tường có đơn vị với chiều dài và chiều cao (xem [Cho một loại dữ liệu bóc tách](topic:wall-assemblies#give-a-type-its-takeoff-data)). Đây là các công thức, đúng như được tính:

- **Đơn vị trên diện tích của một lớp** = 1 / ((chiều dài đơn vị + mạch) × (chiều cao đơn vị + mạch)). Một viên gạch 215 × 65 mm với mạch 10 mm: 1 / (225 × 75 mm) = 59.26 trên m².
- **Số đơn vị theo bề rộng trên một lớp** = (độ dày lớp + mạch) / (chiều rộng đơn vị + mạch), làm tròn đến số nguyên, tối thiểu 1. Một lớp 102.5 mm bằng gạch 102.5 mm là 1; một tường 215 mm bằng cùng loại gạch là 2.
- **Đơn vị** = số đơn vị trên diện tích × số đơn vị theo bề rộng × diện tích thuần của mặt tường, cộng lại trên các lớp xây của loại đó.
- **Đơn vị cần đặt** = đơn vị × (1 + hao hụt % / 100), làm tròn lên đến đơn vị nguyên. Hao hụt là giá trị nhập trên loại; nếu chưa nhập, dùng của phương pháp, nếu phương pháp có nêu; nếu không thì 0%.
- **Vữa** = diện tích thuần × độ dày lớp, trừ thể tích của đơn vị (đơn vị × dài × cao × rộng), rồi cộng thêm phần trăm bổ sung nhập trên loại cho rãnh hoặc lỗ, rồi cộng dự phòng của phương pháp nếu có nêu. Cần chiều rộng đơn vị.

Điều được giả định: mọi lớp xây của một loại được xây bằng đơn vị duy nhất của loại đó; lớp dày hơn một chiều rộng đơn vị được tính là bằng số chiều rộng đơn vị đó, mỗi lớp như một lớp xếp theo chiều dọc, nên gạch cắt, gạch góc và hình đặc biệt không được tính riêng; khi không có lớp nào được đánh dấu là xây bằng đơn vị, các lớp lõi được xem là các lớp xây, và ghi chú phía trên bảng nói điều đó. **Amount** là đơn giá nhân với đơn vị tính của đơn giá, giờ có thể là một đơn vị cần đặt, 1000 đơn vị cần đặt hoặc một m³ vữa.

Mã là thẻ IFC của phần tử: đổi một mã trong **Thuộc tính** (Tag) và bảng thống kê theo. Với mọi mô hình IFC, đã vẽ hay không, [Cộng tổng khối lượng, liệt kê phần tử và thống kê không gian](topic:quantity-totals) cộng bất kỳ thuộc tính nào.

## Kích thước

Mặt bằng hiển thị chiều dài của mỗi tường đã vẽ dọc theo mặt ngoài của nó (một tường trong: dọc theo một mặt), và với tường có cửa hoặc cửa sổ, một chuỗi kích thước từ các góc đến mỗi lỗ mở. {{ui:Kích thước}} trong thanh mô hình ẩn chúng và hiển thị lại.

## Lưu mặt bằng thành PDF

1. Hiển thị tầng bạn muốn và đặt đơn vị trong bảng **Levels**.
2. Bấm {{ui:In}} trên thanh mô hình.
3. BimCraft lưu "<file> — <level>.pdf": mặt bằng đen trắng ở tỷ lệ tiêu chuẩn lớn nhất vừa trang: 1/4" = 1'-0", 1/8" = 1'-0" … trên Letter theo foot và inch; 1:50, 1:100 … trên A4 theo milimét, với tường được tô đầy, cửa, cửa sổ, tên phòng và diện tích, kích thước, và một dải khung tên có tầng, tệp, cao độ cắt, ngày và tỷ lệ.

PDF được vẽ bằng đường và chữ, nên nó sắc nét ở mọi mức thu phóng và chữ của nó có thể tìm kiếm.

## Điều nên biết

- Các bảng thống kê liệt kê những gì công cụ vẽ đã tạo. Cửa và cửa sổ từ chương trình khác hiển thị trong Tổng khối lượng thay vào đó.
- Để định giá công việc, gửi khối lượng cho TakeoffCraft: xem [Khối lượng gửi tới TakeoffCraft](topic:takeoff). Tải CSV vẫn có cho bảng tính.
