---
title: Có gì mới trong 0.7
summary: BimCraft thêm tường qua nhiều tầng và Sao chép tầng này, tường từ PDF và bản quét, cấu tạo tường của riêng bạn, họ cấu kiện phong phú hơn, thiết bị MEP có cổng, bộ kiểm tra va chạm, lỗ mở và đoạn ống, tài liệu tài sản, COBie và số đọc cảm biến, bầu trời, mặt trời, ánh sáng ban ngày trên lưới và tải sưởi và làm mát, đăng ký bản quét, xem trực tiếp và dò đường trên card đồ họa, STEP và USD, biến thể thư viện, và nhiều hơn nữa cho trợ lý AI.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, tường qua các tầng, sao chép tầng này, pdf, bản quét, dò, tường từ bộ mặt bằng, cấu tạo tường, lớp, lõi, màng, kích thước tham chiếu, thư viện vật liệu, đơn vị hiển thị, kiểu xem, khung, đà, họ cấu kiện, tham số, ký hiệu mặt bằng, điểm nóng, lặp, mức chi tiết, họ lồng nhau, kích thước csv, theo từng cấu kiện, thiết bị, cổng, kết nối, khoảng hở, lỗ mở, đoạn ống, bản vẽ đoạn ống, mối hàn tại công trường, danh sách cắt ống gió, tài liệu, cobie, cảm biến, mqtt, luồng trực tiếp, thành phần bầu trời thẳng đứng, tăng nhiệt mặt trời, lưới ánh sáng ban ngày, sưởi, làm mát, tải, hệ số u, đăng ký bản quét, icp, e57, xem trực tiếp, dò đường, webgpu, khử nhiễu, bầu trời vật lý, trộn đèn, hàng đợi kết xuất, máy của bạn, step, usd, gói dự án, phát triển khối, biến thể, trợ lý, api tiện ích bổ sung, plant, điện, kiểm tra thiết kế
from: 5c27b80a
---

Đây là những thay đổi trong BimCraft 0.7 so với 0.6. Danh sách được nhóm theo khu vực, với nội dung quan trọng nhất đứng đầu.

## Mới

### Vẽ một tòa nhà

- **Tường qua nhiều tầng.** Danh sách chiều cao của công cụ Tường cung cấp **Lên đến** bất kỳ tầng nào cao hơn, giống như Thuộc tính làm với tường đã chọn. Mặt bằng của các tầng ở giữa hiển thị tường nhạt hơn, các phòng ở đó sát vào tường, và có thể đặt cửa đi và cửa sổ vào tường từ các mặt bằng đó; **Đi qua** trong Thuộc tính ghi tên các tầng mà tường đi qua. Xem [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door#change-a-wall).
- **Sao chép tầng này.** {{ui:Sao chép tầng này…}} trong bảng Tầng vẽ lại tường của một tầng cùng cửa đi và cửa sổ, sàn và trần của tầng đó lên một tầng khác hoặc một tầng mới ở trên, trong một bước hoàn tác; các phòng tự xuất hiện. Xem [Vẽ tường](topic:draw-walls#levels).
- **Tường từ PDF hoặc bản quét.** {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} giờ nhận PDF (nét vẽ hoặc bản quét bên trong) hoặc mặt bằng đã quét (PNG, JPEG, TIFF, nhiều trang): mỗi trang trở thành tường, cửa đi, cửa sổ và phòng của một tầng, và trang được giữ dưới mặt bằng của tầng. Việc dò không dùng mạng và không dùng mô hình đã huấn luyện, và kết quả là những gì nét vẽ cho phép: hãy kiểm tra từng tầng với trang của nó. Xem [Tường từ một bộ mặt bằng](topic:walls-from-plans).
- **Cấu tạo tường của riêng bạn.** {{ui:Cấu tạo tường…}} dựng một kiểu tường theo từng lớp, với lõi, khe không khí và màng, cùng bản xem trước có kích thước; {{ui:Thư viện vật liệu…}} giữ vật liệu của dự án trong IFC; {{ui:Chú thích}} › {{ui:Kích thước tham chiếu}} đo đến mặt và đường lõi, và theo các tường khi chúng thay đổi. Từ người đóng góp cộng đồng, Doc (drsurfbum). Xem [Cấu tạo tường và kích thước tham chiếu](topic:wall-assemblies).
- **Đơn vị hiển thị và điều khiển khung nhìn.** {{ui:Đơn vị}} trên thanh công cụ hiển thị chiều dài theo feet và inch, inch, feet thập phân, milimét, xentimét hoặc mét, trong kích thước, bảng thống kê, tọa độ, phép đo và mặt cắt. {{ui:Mặt bằng}}, {{ui:Chia đôi}} và {{ui:3D}} nằm trên thanh công cụ, đường chia đôi có thể kéo (hoặc di chuyển bằng bàn phím), {{ui:Tô bóng}}, {{ui:Cạnh}} và {{ui:Khung dây}} nằm cạnh khối xem, và độ dốc mái, diềm mái và mặt dưới mái thay đổi mái đã chọn ngay lập tức. Từ người đóng góp cộng đồng, Joel (yisraelk). Xem [Vẽ tường](topic:draw-walls#levels).
- **Đà sàn theo nhịp.** {{ui:Khung}} có thể bố trí đà kỹ thuật (sơ bộ) cũng như gỗ xẻ, chọn dòng và chiều cao nhỏ nhất trong danh sách đủ cho nhịp, 16" hoặc 24" tâm đến tâm, theo một trong hai hướng; chúng được đưa vào IFC và danh sách cắt. Đây là gợi ý từ bảng công bố của nhà sản xuất, không phải tính toán kỹ thuật. Cũng từ Joel. Xem [Dựng khung tường, sàn và mái](topic:framing).
- **Thêm thiết bị điện.** {{ui:Điện}} thêm ổ cắm dữ liệu, điện thoại và âm thanh-hình ảnh, công tắc chọn, bộ hẹn giờ, bộ điều nhiệt, đầu báo khói và đầu báo nhiệt, nút báo cháy và còi hú, quạt, đồng hồ đo năng lượng và tủ điện phụ, mỗi loại là một lớp IFC riêng. Xem [Mặt bằng điện](topic:electrical-plan).

### Họ cấu kiện

- **Họ cấu kiện làm được nhiều hơn.** Tham số có thể là số nguyên, văn bản, vật liệu, bút hoặc màu tô; một họ cấu kiện có thể vẽ ký hiệu mặt bằng riêng, lặp lại một khối đặc, đánh dấu các chi tiết cho mức chi tiết thô hơn, chứa các họ cấu kiện khác (một chân trong bàn), và có điểm nóng để kéo, cũng trên một cấu kiện đã đặt trên mặt bằng. Kích thước lấy từ bảng CSV, và các tham số được đánh dấu **Theo từng cấu kiện** cho phép hai cửa cùng kích thước khác nhau. Xem [Chỉnh sửa họ cấu kiện](topic:family-editor#plan-symbol) và [Họ cấu kiện và kích thước của chúng](topic:families#sizes-from-a-table).

### Ống, ống dẫn và thiết bị

- **Thiết bị có cổng kết nối.** {{ui:Bản dựng}} › {{ui:Thiết bị}} đặt một máy xử lý không khí, quạt nối ống, bơm, nồi hơi, bình nước nóng, thiết bị đầu cuối, miệng thổi, lưới thông gió hoặc bồn chứa, có kích thước theo giá trị bạn nhập, với các kết nối ống và ống dẫn làm cổng. Mỗi thiết bị được lưu thành lớp IFC của nó kèm cổng IFC. Xem [Thiết bị MEP có cổng kết nối](topic:mep-equipment).
- **Tuyến đã nối.** Ống hoặc ống dẫn bắt đầu từ một cổng sẽ nhận kích thước và hệ thống của cổng đó và luôn gắn cố định với nó: di chuyển bơm thì ống của nó đi theo. {{ui:Kiểm tra kết nối}} liệt kê các cổng hở, đầu ống lỏng, sai lệch kích thước và hệ thống, và các tuyến không được cấp nguồn. Xem [Nối ống và ống dẫn vào thiết bị](topic:mep-connections).
- **Ống và ống dẫn so với kết cấu.** {{ui:Kiểm tra va chạm}} có sẵn các bộ kiểm tra và {{ui:Ống và ống gió × kết cấu}} chỉ bằng một lần nhấn; {{ui:Kiểm tra khoảng hở}} dùng lớp cách nhiệt của mỗi tuyến cộng với khoảng hở bạn nhập; {{ui:Lỗ mở cần thiết}} liệt kê các nơi tuyến đi xuyên tường và sàn, dưới dạng các vấn đề CSV và BCF. Không có gì bị cắt. Xem [Kiểm tra ống và ống dẫn so với kết cấu](topic:mep-against-structure).
- **Đoạn ống thép (spool).** Một tuyến thép được cắt thành các đoạn đánh số theo chiều dài tối đa và tại các {{ui:Mối hàn tại công trường}} bạn đặt; {{ui:Bản vẽ đoạn ống (PDF)}} cho một trang cho mỗi đoạn với hình chiếu trục đo, chiều dài cắt, phụ kiện, mối hàn và bảng vật tư, và {{ui:Danh sách cắt ống gió}} liệt kê các đoạn ống dẫn thẳng. Xem [Đoạn ống thép và bản vẽ đoạn ống](topic:pipe-spools).

Đây là công cụ hỗ trợ vẽ và phối hợp, do kỹ sư định kích thước: không có lưu lượng, áp suất hoặc cân bằng.

### Vận hành công trình

- **Tài liệu theo tài sản.** Thẻ {{ui:Tài sản}} liên kết sách hướng dẫn, phiếu bảo hành, ảnh và bản vẽ với một tài sản bằng tên tệp nằm cạnh IFC hoặc một địa chỉ web; chỉ liên kết được ghi vào IFC. Xem [Tài liệu](topic:assets-and-maintenance#documents).
- **Bảng tính COBie.** {{ui:Lưu thành COBie (.xlsx)}} ghi sổ bàn giao COBie 2.4, và khi đọc lại một sổ COBie, danh sách liệt kê mọi thay đổi trước khi nhấn một lần {{ui:Áp dụng}}. Bảng này chưa qua bộ kiểm tra COBie nào. Xem [Bảng tính COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Số đọc cảm biến và luồng dữ liệu trực tiếp.** Mở một tệp CSV số đọc, hoặc {{ui:Kết nối}} thẳng từ trình duyệt đến máy chủ MQTT (broker) của riêng bạn hoặc một địa chỉ mà hệ thống tòa nhà của bạn phản hồi: mỗi tài sản hiển thị số đọc mới nhất và một biểu đồ, được tô màu trên mô hình, và được đánh dấu khi nằm ngoài giới hạn đã lưu trong IFC. Số đọc chỉ nằm trong thẻ; mật khẩu không bao giờ được lưu. Xem [Số đọc cảm biến](topic:assets-and-maintenance#sensor-readings) và [Số đọc trực tiếp](topic:assets-and-maintenance#live-readings).

### Ánh sáng ban ngày và năng lượng

- **Bầu trời và mặt trời tại mọi cửa sổ.** Thẻ {{ui:Ánh sáng ban ngày}} cho mỗi cửa sổ thành phần bầu trời thẳng đứng và góc che khuất, theo mặt trời qua một ngày với {{ui:Nắng qua cửa sổ trong một ngày}}, và tính {{ui:Hệ số ánh sáng ban ngày trên lưới}} trên từng phòng, được vẽ trên mặt bằng của phòng. Xem [Thành phần bầu trời thẳng đứng của mỗi cửa sổ](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Tải sưởi và làm mát.** {{ui:Tải sưởi và làm mát}} tính thất thoát nhiệt của mỗi phòng, lượng sưởi trong một năm theo ngày độ và đỉnh làm mát, dựa trên những gì bao quanh phòng trong mô hình và hệ số U của từng cấu kiện; hệ số U nhập tại đó được ghi vào IFC. Xem [Ước tính tải sưởi và làm mát](topic:heating-and-cooling-loads).

Cả hai đều là công cụ hỗ trợ thiết kế theo các phương pháp đã công bố, không phải tính toán tuân thủ, và mỗi bảng đều nói rõ điều đó.

### Bản quét

- **Đăng ký nhiều bản quét.** {{ui:Đăng ký các bản quét…}} (trên bảng khởi động, hoặc trong {{ui:Hiển thị}}) đặt các bản quét vào một khung bằng các cặp điểm đã chọn hoặc mục tiêu đã nhập, tinh chỉnh chúng bằng ICP từ điểm đến điểm rồi từ điểm đến mặt phẳng, lưu việc đăng ký thành một tệp dự án nhỏ và ghi đám điểm đã đăng ký thành một tệp LAS hoặc E57. Xem [Đăng ký nhiều bản quét thành một](topic:register-scans).

### Hình ảnh và xem trực tiếp

- **Xem trực tiếp.** {{ui:Xem trực tiếp}} trên thanh công cụ hiển thị mô hình theo kiểu thời gian thực cạnh khung nhìn 3D, theo dõi mô hình và mọi thay đổi, với Đi bộ, thời gian trong ngày và tháng; {{ui:Xem trực tiếp trong cửa sổ mới}} đưa nó sang màn hình thứ hai. Xem [Xem trực tiếp](topic:live-view).
- **Dò đường trên card đồ họa.** Với WebGPU, {{ui:Kết xuất}} › {{ui:Chất lượng cao (dò đường)}} chạy bộ dò đường riêng của CadCraft trên card đồ họa, có thể dừng và {{ui:Tiếp tục}}, và được khử nhiễu khi kết thúc; không có WebGPU, nó dùng bộ dò đường WebGL như trước. Xem [Chất lượng cao](topic:render#high-quality).
- **Thêm trong hộp thoại Kết xuất** (trên card đồ họa, nên cần WebGPU): bầu trời vật lý và ảnh bầu trời, hồ sơ đèn IES, máy ảnh có f-stop, độ sâu trường ảnh, phối cảnh hai điểm, cân bằng trắng và toàn cảnh 360°, một bước hiệu chỉnh màu cho ảnh hoàn thiện, trộn đèn và các thành phần kết xuất sau khi kết xuất, sương mù, khói và caustic, lưu thành PNG 16 bit, EXR hoặc tệp kết xuất, và một hàng đợi kết xuất. Xem [Bầu trời và hồ sơ đèn trên card đồ họa](topic:render#skies-and-light-profiles-on-the-graphics-card) và [Hàng đợi kết xuất](topic:render#the-render-queue).
- **Máy của bạn.** {{ui:Cài đặt}} › {{ui:BimCraft}} › {{ui:Kết xuất}} › {{ui:Máy của bạn}} hiển thị card đồ họa, nhân xử lý và bộ nhớ mà trình duyệt này cho phép ứng dụng dùng, và mức mà kết xuất bắt đầu. Xem [Máy của bạn kết xuất bằng gì](topic:your-machine).

### Tệp và các ứng dụng khác

- **Mở tệp STEP.** Một chi tiết `.step` hoặc `.stp`, thiết bị hoặc mô hình của nhà cung cấp (AP203, AP214, AP242) mở thành một mô hình IFC nhỏ, mỗi khối đặc là một cấu kiện mà bạn có thể kiểm tra, cắt mặt cắt, đo và lưu thành IFC. Màu sắc và tên chi tiết của cụm lắp ráp chưa được đọc. Xem [Tệp BimCraft mở và lưu](topic:files#what-it-opens).
- **Xuất USD.** {{ui:USD}} trên thanh công cụ ghi các mô hình đang mở thành `.usda`, `.usdc` hoặc `.usdz`, sắp xếp theo công trường, công trình, tầng và bộ môn, với lớp IFC, GlobalId và thuộc tính của mọi cấu kiện. Xem [Xuất mô hình sang USD](topic:usd).
- **Khối từ CivilCraft.** Khối công trình được gửi từ khung nhìn công trường của CivilCraft hiển thị các chỉ số nghiên cứu trong Thuộc tính, và {{ui:Phát triển khối này}} dựng tường trên mọi tầng và một sàn từ khối đó trong một bước hoàn tác. Xem [Phát triển khối công trình từ nghiên cứu công trường](topic:develop-a-mass).
- **Mục thư viện có biến thể.** Mục có nhiều biến thể có lựa chọn {{ui:Biến thể}} trong thẻ {{ui:Thư viện}}; cấu kiện đã đặt giữ biến thể của nó trong IFC, {{ui:Đổi mục…}} liệt kê các biến thể khác, và bản sao và cập nhật vẫn giữ biến thể đó. Xem [Đặt và đổi mục thư viện có biến thể](topic:library-variants).
- **Gói dự án trong một thư mục.** {{ui:Mở thư mục}} liệt kê các tệp `.ccbundle.zip` dưới {{ui:Gói dự án}}, và mỗi bố cục trong gói có **Mở trong …**: PDF sang MarkupCraft, DWG sang CadCraft, trong một thẻ mới. Xem [Mở một bố cục](topic:open-project-bundle#open-a-layout).

### Trợ lý và tiện ích bổ sung

- **Thêm cho trợ lý AI.** Trợ lý giờ có thể đổi tên cấu kiện và đặt giá trị thuộc tính, di chuyển và xóa cấu kiện, thay đổi tường, cửa đi và cửa sổ, xuất USD, và kết xuất một ảnh hoặc chạy hàng đợi kết xuất; mỗi thay đổi là một bước hoàn tác. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).
- **Tiện ích bổ sung có thể dựng trong mô hình.** API 1.1 của tiện ích bổ sung cho phép một tiện ích thực hiện thay đổi trong mô hình như một bước hoàn tác (thay đổi này được truyền trong Live TeamWork), đọc mô hình, và đọc các tuyến ống và ống dẫn, cổng, thiết bị và đoạn ống.
- **Tiện ích bổ sung Plant** (tắt cho đến khi bạn bật trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Tiện ích bổ sung}}): thông số ống được kiểm tra theo các tuyến, bản vẽ trục đo của tuyến dưới dạng SVG và DXF có bảng vật tư, thiết bị quy trình chung có vòi phun được đặt trong mô hình, bộ định tuyến giữa hai cổng, và kiểm tra bố cục nhà máy. Đây là công cụ hỗ trợ vẽ, không phải phê duyệt kỹ thuật; nội dung của nó chỉ bằng tiếng Anh.

## Đã thay đổi

- **Ngôi nhà đầu tiên trên máy tính xách tay.** Trên màn hình cỡ máy tính xách tay, BimCraft khởi động chỉ với mặt bằng, thanh Vẽ là một bảng hẹp với mặt bằng vừa khít bên cạnh, mặt bằng và khung nhìn 3D quay lại tầm nhìn khi bản vẽ đi khỏi chúng, khung nhìn 3D bao toàn bộ ngôi nhà trong một khung hẹp, và cửa đi và cửa sổ được chọn trước đường kích thước.
- **Lưu ảnh.** **Lưu PNG** trong hộp thoại Kết xuất giờ là {{ui:Lưu}}, với {{ui:Lưu thành}} bên cạnh cho các định dạng khác. Xem [Lưu ảnh](topic:render#save-the-picture).
- **Thẻ Phân tích** có khối {{ui:Kiểm tra thiết kế}}: khối này tạo các tổ hợp tải của ASCE 7 hoặc EN 1990 cho các trường hợp của bạn và kiểm tra từng tiết diện chữ I thép cán (kích thước W, S, IPE, HEA hoặc HEB theo tên và kích thước profile của nó) theo AISC 360 hoặc EN 1993-1-1, hiển thị tỷ lệ khả năng chịu lực đang dùng. Đây là công cụ hỗ trợ cho đến khi kỹ sư xem xét; các tiết diện hàn và tiết diện khác ghi "chưa kiểm tra". Xem [Kiểm tra thiết kế](topic:frame-analysis#design-checks).

## Đã sửa

- Làm lại sau một bước tạo kích thước họ cấu kiện mới đã thất bại ("không có kích thước"). Mọi bước giờ tạo lại cùng GlobalId IFC khi làm lại, nên làm lại hoạt động cho họ cấu kiện và mọi thay đổi khác.
- Khi hai người lưu cùng một họ cấu kiện (trong phiên Live TeamWork hoặc hai cửa sổ), lần lưu thứ hai âm thầm thay thế thay đổi của lần đầu. Giờ nó từ chối và cho biết cách xem thay đổi của họ và thực hiện lại thay đổi của bạn.
- Mô hình theo US survey feet được đọc là 0.3048 m cho mỗi foot thay vì 0.3048006096 m, làm lệch mọi IFC có định vị địa lý theo feet Mỹ trên bản đồ.
- Trình chỉnh sửa họ cấu kiện: khi đóng, nó không còn đưa tiêu điểm bàn phím về trang, nút Lưu vẫn hiển thị trên điện thoại, và các ô nhập không còn làm điện thoại phóng to.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách cho chiều dài, diện tích, thể tích, góc và độ dốc, với các kích thước chính xác theo định nghĩa của đơn vị (US survey foot là một đơn vị riêng). Tắt các đơn vị bạn không bao giờ dùng thì chúng rời khỏi danh sách đơn vị; đánh dấu sao một đơn vị thì công việc mới bắt đầu bằng đơn vị đó. Tệp luôn giữ đơn vị riêng của nó. Trong BimCraft, danh sách {{ui:Đơn vị}} trên thanh công cụ theo các công tắc, dấu sao đặt đơn vị hiển thị cho đến khi bạn chọn trên thanh công cụ (lựa chọn trước đó của bạn được giữ lại), và các ô chiều dài của công cụ vẽ nhận ký hiệu đơn vị bất kỳ, như `3.5 m` hoặc `10 US ft`. Xem [Đơn vị, giá trị đã nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày đặc hơn và các bảng tự gọn lại.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} vừa được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại vẫn giữ các nút lớn). Mỗi bảng bên có thanh tiêu đề mảnh: kéo để neo hoặc làm nổi bảng, thả lên thanh của bảng khác để chung một khung dưới dạng các thẻ, ghim để trượt ra mép, hoặc ẩn và đưa trở lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại bằng thanh tiêu đề ra khỏi bản vẽ; nó trở lại vị trí bạn đã để. Nhấp đúp vào thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn gọn một bản vẽ, in một bộ, kiểm tra bản vẽ, đặt câu hỏi cho mô hình, tổng hợp bóc tách khối lượng, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và mỗi yêu cầu được chạy lại bằng các bài kiểm thử của chúng tôi. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đầy đủ mọi từ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp viết bằng tiếng Anh, một số bằng tiếng Tây Ban Nha.
- **CadCraft Studio** cho biết lý do kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Xong", và không còn đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã, và gói Microsoft Store, được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa hoàn tất. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấn chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa ô nào đọc chúng.
- Dò đường trên card đồ họa, các phần thêm trong hộp thoại Kết xuất và hàng đợi kết xuất cần WebGPU (không có WebGPU, chất lượng cao dùng bộ dò đường WebGL); xem trực tiếp dùng WebGPU khi trình duyệt có hỗ trợ, nếu không thì dùng WebGL 2. Chúng chỉ được thử nghiệm tại đây trên một giả lập đồ họa bằng phần mềm, chưa thử trên card đồ họa thật. Xem trực tiếp trong BimCraft không có tán xạ hay chia sẻ (của ModelCraft thì có).
- Kết xuất một đường đi bộ đã ghi thành video chưa được xây dựng trong BimCraft.
- Kiểm tra thiết kế: tiết diện chữ I có tên profile IFC không phải kích thước W, S, IPE, HEA hoặc HEB (hoặc có kích thước khác với nó) được coi là hàn và trả về "chưa kiểm tra", như ống, thép góc, thép máng, cấu kiện mảnh và xoắn. Chưa có kỹ sư nào xem xét các kiểm tra này.
- Cấu kiện đã vẽ không thể sao chép từng cái, xoay, đối xứng hoặc tạo mảng (có thể sao chép cả một tầng), và không có tường tách, công cụ Văn bản hay tường rèm. Tường gặp tường từ tầng thấp hơn trên tầng cao hơn không bị cắt vào khối 3D của tường đó, và các bảng thống kê liệt kê lỗ mở của tầng trên dưới tầng của chính tường đó.
- Họ cấu kiện: thư viện họ cấu kiện dùng chung giữa các dự án chưa được xây dựng. Họ cấu kiện và các tầng đã sao chép chưa được mở trong các chương trình BIM khác.
- MEP: thiết bị là loại chung (không có dữ liệu nhà sản xuất); tê và côn thu trên đoạn ống thép là loại chung, không lấy từ bảng ASME B16.9; cổng của mục thư viện đặt từ thẻ {{ui:Thư viện}} không được ghi vào IFC; chưa có gì được kỹ sư xem xét.
- Tiện ích bổ sung Plant chưa thể vẽ một tuyến đã định tuyến vào mô hình, đánh số đoạn ống trên các hình chiếu trục đo của nó, hoặc kiểm tra bố cục thiết bị được đặt từ thư viện.
- Các nhà máy từ thư viện nhà máy của CivilCraft chưa thể đặt từ thẻ {{ui:Thư viện}} của BimCraft.
- Năng lượng: không có mô phỏng theo giờ, không có phương pháp ISO 52016-1 và không có tệp khí hậu. Tài sản: không có bản sinh đôi số lưu trữ trên máy chủ để giữ số đọc hoặc gửi cảnh báo khi BimCraft đóng.
- Đăng ký bản quét đã được thử trên bản quét thử nghiệm, chưa thử trên bộ bản quét của một máy quét thực tế; tệp E57 vẫn mở tối đa 6 triệu điểm và 512 MB.
- Gói dự án chỉ mở trong BimCraft (các ứng dụng khác nhận bố cục qua **Mở trong …**), và các gói cùng bộ công cụ hai chương trình đã được thử với giả lập, chưa thử với chính Archicad hay Revit.

Mọi nội dung khác nằm trong [Những gì chưa được xây dựng](topic:not-built-yet).
