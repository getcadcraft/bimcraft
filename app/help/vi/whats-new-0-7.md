---
title: Có gì mới trong 0.7 (cũ hơn)
summary: BimCraft bổ sung tường qua nhiều tầng và Sao chép tầng này, tường từ PDF và bản quét, cấu tạo tường riêng, họ đối tượng phong phú hơn, thiết bị MEP có cổng, bộ va chạm, lỗ mở và đoạn ống, tài liệu tài sản, COBie và số đọc cảm biến, bầu trời, mặt trời, ánh sáng ban ngày trên lưới và tải sưởi và làm mát, đăng ký bản quét, xem trực tiếp và dò đường trên card đồ họa, STEP và USD, biến thể thư viện, và nhiều hơn nữa cho trợ lý AI.
keywords: có gì mới 0.7, bản phát hành cũ, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, tường qua các tầng, sao chép tầng này, pdf, bản quét, vẽ lại, tường từ bản vẽ, cấu tạo tường, lớp, lõi, màng, kích thước tham chiếu, thư viện vật liệu, đơn vị hiển thị, kiểu khung nhìn, khung, dầm sàn, họ, tham số, ký hiệu mặt bằng, điểm nóng, lặp lại, mức chi tiết, họ lồng nhau, kích thước csv, theo phần tử, thiết bị, cổng, kết nối, khoảng hở, lỗ mở, đoạn ống, bản vẽ đoạn ống, mối hàn tại công trường, danh sách cắt ống gió, tài liệu, cobie, cảm biến, mqtt, nguồn dữ liệu trực tiếp, thành phần bầu trời đứng, bức xạ mặt trời, lưới ánh sáng ban ngày, sưởi, làm mát, tải, hệ số u, đăng ký bản quét, icp, e57, xem trực tiếp, dò đường, webgpu, khử nhiễu, bầu trời vật lý, trộn ánh sáng, hàng đợi kết xuất, máy của bạn, step, usd, gói dự án, phát triển khối, biến thể, trợ lý, api tiện ích bổ sung, nhà máy, điện, kiểm tra thiết kế
from: ef226539
---

Đây là những gì đã thay đổi trong BimCraft 0.7, so với 0.6. Danh sách được nhóm theo khu vực, với những điều quan trọng nhất đứng trước.

## Mới

### Vẽ một tòa nhà

- **Tường qua nhiều tầng.** Danh sách chiều cao của công cụ Tường cung cấp **Lên đến** bất kỳ tầng nào cao hơn, như Thuộc tính làm với một tường được chọn. Các mặt bằng của những tầng ở giữa hiển thị tường nhạt hơn, các phòng ở đó khép sát vào nó, và cửa đi và cửa sổ có thể được đặt trong nó từ các mặt bằng đó; **Chạy xuyên** trong Thuộc tính nêu tên các tầng nó đi qua. Xem [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door#change-a-wall).
- **Sao chép tầng này.** {{ui:Sao chép tầng này…}} trong bảng Tầng vẽ lại các tường của một tầng cùng cửa đi và cửa sổ, các sàn và trần của nó trên một tầng khác hoặc một tầng mới đặt phía trên, trong một bước hoàn tác; các phòng xuất hiện tự động. Xem [Vẽ tường](topic:draw-walls#levels).
- **Tường từ PDF hoặc bản quét.** {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} giờ nhận một PDF (nét vẽ, hoặc một bản quét bên trong nó) hoặc một mặt bằng quét (PNG, JPEG, TIFF, nhiều trang): mỗi trang trở thành các tường, cửa đi, cửa sổ và phòng của một tầng, với trang được giữ bên dưới mặt bằng của nó. Quá trình vẽ lại không dùng mạng hay mô hình đã huấn luyện nào, và kết quả là những gì các đường cho ra: hãy kiểm tra từng tầng với trang của nó. Xem [Tường từ bộ bản vẽ (PDF hoặc bản quét)](topic:walls-from-plans).
- **Cấu tạo tường của riêng bạn.** {{ui:Cấu tạo tường…}} xây dựng một loại tường từng lớp, với lõi, khe khí và màng, và một bản xem trước có kích thước; {{ui:Thư viện vật liệu…}} giữ vật liệu của dự án trong IFC; {{ui:Chú thích}} › {{ui:Kích thước tham chiếu}} đo đến các mặt và đường lõi, và theo các tường khi chúng thay đổi. Từ một người đóng góp cộng đồng, Doc (drsurfbum). Xem [Cấu tạo tường và kích thước tham chiếu](topic:wall-assemblies).
- **Đơn vị hiển thị và điều khiển khung nhìn.** {{ui:Đơn vị}} trên thanh công cụ hiển thị chiều dài theo feet và inch, inch, feet thập phân, milimét, xentimét hoặc mét, trong kích thước, bảng thống kê, tọa độ, phép đo và mặt cắt. {{ui:Mặt bằng}}, {{ui:Tách}} và {{ui:3D}} nằm trên thanh công cụ, khung nhìn tách có thể kéo (hoặc di chuyển bằng bàn phím), {{ui:Tô bóng}}, {{ui:Cạnh}} và {{ui:Khung dây}} nằm cạnh khối xem, và độ dốc mái, diềm mái và mái hiên thay đổi mái được chọn ngay lập tức. Từ một người đóng góp cộng đồng, Joel (yisraelk). Xem [Vẽ tường](topic:draw-walls#levels).
- **Dầm sàn theo nhịp.** {{ui:Khung}} có thể bố trí dầm sàn kỹ thuật (sơ bộ) cũng như gỗ xẻ, chọn chuỗi và chiều sâu nhỏ nhất được liệt kê đủ để đạt nhịp, 16" hoặc 24" tâm đến tâm, theo một trong hai hướng; chúng được đưa vào IFC và danh sách cắt. Đây là gợi ý từ một bảng đã công bố của nhà sản xuất, không phải tính toán kỹ thuật. Cũng từ Joel. Xem [Khung tường, sàn và mái](topic:framing).
- **Thêm thiết bị điện.** {{ui:Điện}} bổ sung ổ cắm dữ liệu, điện thoại và âm thanh-hình ảnh, một công tắc chọn, một bộ hẹn giờ, một bộ điều nhiệt, đầu báo khói và nhiệt, một nút báo cháy và còi, một quạt, một đồng hồ năng lượng và một tủ điện phụ, mỗi loại là một lớp IFC riêng. Xem [Mặt bằng điện](topic:electrical-plan).

### Họ

- **Họ làm được nhiều hơn.** Tham số có thể là số nguyên, văn bản, vật liệu, bút vẽ hoặc tô; một họ có thể vẽ ký hiệu mặt bằng riêng, lặp lại một khối đặc, đánh dấu các bộ phận cho mức chi tiết thô hơn, chứa các họ khác (một chân trong một cái bàn), và có các điểm nóng bạn kéo, cũng trên một phần tử đã đặt trong mặt bằng. Kích thước lấy từ một bảng CSV, và các tham số được đánh dấu **Theo phần tử** cho phép hai cửa cùng kích thước khác nhau. Xem [Chỉnh sửa một họ](topic:family-editor#plan-symbol) và [Họ và kích thước của chúng](topic:families#sizes-from-a-table).

### Ống, ống gió và thiết bị

- **Thiết bị có cổng.** {{ui:Bản dựng}} › {{ui:Thiết bị}} đặt một máy xử lý không khí chung, quạt nối tiếp, bơm, nồi hơi, bình nước nóng, thiết bị đầu cuối, miệng gió, lưới gió hoặc bồn, có kích thước theo các giá trị bạn nhập, với các kết nối ống và ống gió của nó là các cổng. Mỗi thiết bị được lưu dưới lớp IFC của nó với các cổng IFC. Xem [Thiết bị MEP có cổng](topic:mep-equipment).
- **Các đoạn được kết nối.** Một ống hoặc ống gió bắt đầu tại một cổng nhận kích thước và hệ thống của nó và được cố định vào nó: di chuyển bơm và ống của nó sẽ theo. {{ui:Kiểm tra kết nối}} liệt kê các cổng hở, các đầu lỏng, sự không khớp kích thước và hệ thống, và các đoạn không có nguồn cấp. Xem [Kết nối ống và ống gió với thiết bị](topic:mep-connections).
- **Ống và ống gió so với kết cấu.** {{ui:Kiểm tra va chạm}} có sẵn các bộ và {{ui:Ống và ống gió × kết cấu}} chỉ với một cú nhấp; {{ui:Kiểm tra khoảng hở}} dùng lớp cách nhiệt của mỗi đoạn cộng với một khoảng hở bạn nhập; {{ui:Lỗ mở cần thiết}} liệt kê nơi các đoạn đi xuyên qua tường và sàn, dưới dạng CSV và vấn đề BCF. Không có gì bị cắt. Xem [Kiểm tra ống và ống gió so với kết cấu](topic:mep-against-structure).
- **Đoạn ống thép.** Một đoạn ống thép được cắt thành các đoạn được đánh số theo chiều dài lớn nhất và tại các {{ui:Mối hàn tại công trường}} bạn đặt; {{ui:Bản vẽ đoạn ống (PDF)}} cho mỗi đoạn một trang với hình chiếu đẳng trục, chiều dài cắt, phụ kiện, mối hàn và bảng vật tư, và {{ui:Danh sách cắt ống gió}} liệt kê các đoạn ống gió thẳng. Xem [Đoạn ống thép và bản vẽ đoạn ống](topic:pipe-spools).

Đây là các công cụ hỗ trợ vẽ và phối hợp, do kỹ sư định cỡ: không có lưu lượng, áp suất hay cân bằng.

### Vận hành tòa nhà

- **Tài liệu theo tài sản.** Tab {{ui:Tài nguyên}} liên kết hướng dẫn sử dụng, bảo hành, ảnh và bản vẽ với một tài sản bằng tên tệp bên cạnh IFC hoặc một địa chỉ web; chỉ liên kết được đưa vào IFC. Xem [Tài liệu](topic:assets-and-maintenance#documents).
- **Bảng tính COBie.** {{ui:Lưu thành COBie (.xlsx)}} ghi sổ bàn giao COBie 2.4, và một sổ COBie được đọc lại liệt kê mọi thay đổi trước khi một {{ui:Áp dụng}}. Nó chưa qua trình kiểm tra COBie nào. Xem [Bảng tính COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Số đọc cảm biến và nguồn dữ liệu trực tiếp.** Mở một CSV các số đọc, hoặc {{ui:Kết nối}} trực tiếp từ trình duyệt đến máy môi giới MQTT của riêng bạn hoặc một địa chỉ mà hệ thống tòa nhà của bạn trả lời: mỗi tài sản hiển thị số đọc mới nhất và một biểu đồ, được tô màu trên mô hình, và được đánh dấu khi nằm ngoài giới hạn đã lưu trong IFC. Số đọc chỉ nằm trong thẻ; mật khẩu không bao giờ được lưu. Xem [Số đọc cảm biến](topic:assets-and-maintenance#sensor-readings) và [Số đọc trực tiếp](topic:assets-and-maintenance#live-readings).

### Ánh sáng ban ngày và năng lượng

- **Bầu trời và mặt trời tại mọi cửa sổ.** Tab {{ui:Ánh sáng ban ngày}} cho mỗi cửa sổ thành phần bầu trời đứng và góc che khuất, theo dõi mặt trời qua một ngày với {{ui:Nắng qua cửa sổ trong một ngày}}, và tính {{ui:Hệ số ánh sáng ban ngày trên lưới}} trên khắp mỗi phòng, được vẽ trên mặt bằng của nó. Xem [Thành phần bầu trời đứng của mỗi cửa sổ](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Tải sưởi và làm mát.** {{ui:Tải sưởi và làm mát}} tính tổn thất nhiệt của mỗi phòng, lượng sưởi trong một năm từ số độ-ngày và đỉnh làm mát, từ những gì giới hạn nó trong mô hình và hệ số U của từng phần tử; một hệ số U được nhập ở đó sẽ được ghi vào IFC. Xem [Ước tính tải sưởi và làm mát](topic:heating-and-cooling-loads).

Cả hai đều là công cụ thiết kế theo các phương pháp đã công bố, không phải tính toán tuân thủ, và mọi bảng đều nói như vậy.

### Bản quét

- **Đăng ký nhiều bản quét.** {{ui:Đăng ký các bản quét…}} (trên bảng khởi đầu, hoặc trong {{ui:Hiển thị}}) đặt các bản quét vào một khung chung bằng các cặp điểm đã chọn hoặc mục tiêu đã nhập, tinh chỉnh chúng bằng ICP từ điểm đến điểm rồi từ điểm đến mặt phẳng, lưu việc đăng ký thành một tệp dự án nhỏ, và ghi đám mây đã đăng ký thành một tệp LAS hoặc E57. Xem [Đăng ký nhiều bản quét thành một](topic:register-scans).

### Hình ảnh và xem trực tiếp

- **Xem trực tiếp.** {{ui:Xem trực tiếp}} trên thanh công cụ hiển thị mô hình theo kiểu thời gian thực bên cạnh khung nhìn 3D, theo dõi nó và mọi thay đổi, cùng với Đi bộ, thời gian trong ngày và tháng; {{ui:Xem trực tiếp trong cửa sổ mới}} đặt nó trên màn hình thứ hai. Xem [Xem trực tiếp](topic:live-view).
- **Dò đường trên card đồ họa.** Với WebGPU, {{ui:Kết xuất}} › {{ui:Chất lượng cao (dò đường)}} chạy bộ dò đường riêng của CadCraft trên card đồ họa, có thể dừng và {{ui:Tiếp tục}}, và được khử nhiễu ở cuối; không có WebGPU, nó dùng bộ dò đường WebGL như trước. Xem [Chất lượng cao](topic:render#high-quality).
- **Thêm trong hộp thoại Kết xuất** (trên card đồ họa, nên cần WebGPU): một bầu trời vật lý và ảnh bầu trời, hồ sơ ánh sáng IES, một camera với f-stop, độ sâu trường ảnh, phối cảnh hai điểm, cân bằng trắng và toàn cảnh 360°, một bảng màu cho ảnh đã hoàn thành, trộn ánh sáng và các phần tử kết xuất sau khi kết xuất, sương mù, khói và caustic, lưu thành PNG 16-bit, EXR hoặc một tệp kết xuất, và một hàng đợi kết xuất. Xem [Bầu trời và hồ sơ ánh sáng trên card đồ họa](topic:render#skies-and-light-profiles-on-the-graphics-card) và [Hàng đợi kết xuất](topic:render#the-render-queue).
- **Máy của bạn.** {{ui:Cài đặt}} › {{ui:BimCraft}} › {{ui:Kết xuất}} › {{ui:Máy của bạn}} cho biết card đồ họa, số nhân xử lý và bộ nhớ mà trình duyệt này cho phép ứng dụng dùng, và mức mà kết xuất bắt đầu. Xem [Máy của bạn kết xuất bằng gì](topic:your-machine).

### Tệp và các ứng dụng khác

- **Mở tệp STEP.** Một phần `.step` hoặc `.stp`, một thiết bị hoặc mô hình của nhà cung cấp (AP203, AP214, AP242) mở thành một mô hình IFC nhỏ, mỗi khối là một phần tử bạn có thể kiểm tra, cắt mặt, đo và lưu thành IFC. Màu và tên bộ phận của cụm lắp chưa được đọc. Xem [Tệp BimCraft mở và lưu](topic:files#what-it-opens).
- **Xuất USD.** {{ui:USD}} trên thanh công cụ ghi các mô hình đang mở thành `.usda`, `.usdc` hoặc `.usdz`, sắp xếp theo khu đất, tòa nhà, tầng và bộ môn, với lớp IFC, GlobalId và thuộc tính của mọi phần tử. Xem [Xuất mô hình sang USD](topic:usd).
- **Khối lượng từ CivilCraft.** Một khối lượng tòa nhà được gửi từ khung nhìn công trường của CivilCraft hiển thị các số nghiên cứu của nó trong Thuộc tính, và {{ui:Phát triển khối này}} tạo tường trên mọi tầng và một sàn từ nó trong một bước hoàn tác. Xem [Phát triển khối lượng tòa nhà từ một nghiên cứu công trường](topic:develop-a-mass).
- **Mục thư viện có biến thể.** Một mục đến trong nhiều biến thể có một lựa chọn {{ui:Biến thể}} trong tab {{ui:Thư viện}}; phần tử đã đặt giữ biến thể của nó trong IFC, {{ui:Đổi mục…}} liệt kê các biến thể khác, và các bản sao và cập nhật vẫn giữ nó. Xem [Đặt và đổi một mục thư viện có biến thể](topic:library-variants).
- **Gói dự án trong thư mục.** {{ui:Mở thư mục}} liệt kê các tệp `.ccbundle.zip` dưới {{ui:Gói dự án}}, và mỗi bố cục trong một gói có **Mở trong …**: PDF đến MarkupCraft, DWG đến CadCraft, trong một thẻ mới. Xem [Mở một bố cục](topic:open-project-bundle#open-a-layout).

### Trợ lý và tiện ích bổ sung

- **Nhiều hơn cho trợ lý AI.** Một trợ lý giờ có thể đổi tên phần tử và đặt giá trị thuộc tính, di chuyển và xóa phần tử, thay đổi tường, cửa đi và cửa sổ, xuất USD, và kết xuất một ảnh hoặc chạy hàng đợi kết xuất; mỗi thay đổi là một bước hoàn tác. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).
- **Tiện ích bổ sung có thể xây dựng trong mô hình.** API tiện ích bổ sung 1.1 cho phép một tiện ích bổ sung thực hiện một thay đổi trong mô hình như một bước hoàn tác (nó đi qua Live TeamWork), đọc mô hình, và đọc các đoạn ống và ống gió, cổng, thiết bị và đoạn ống.
- **Tiện ích bổ sung Nhà máy** (tắt cho đến khi bạn bật nó trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Tiện ích bổ sung}}): thông số ống được kiểm tra so với các đoạn, bản vẽ đẳng trục của một đoạn dưới dạng SVG và DXF với bảng vật tư, thiết bị quy trình chung với các ống nối đặt trong mô hình, một bộ định tuyến giữa hai cổng, và kiểm tra bố trí nhà máy. Đây là công cụ hỗ trợ bản vẽ, không phải phê duyệt kỹ thuật; các từ của nó chỉ bằng tiếng Anh.

## Thay đổi

- **Một ngôi nhà đầu tiên trên máy tính xách tay.** Trên màn hình cỡ máy tính xách tay, BimCraft khởi động chỉ với mặt bằng, thanh Vẽ là một bảng hẹp với mặt bằng vừa khít bên cạnh, mặt bằng và khung nhìn 3D quay lại khi bản vẽ rời khỏi chúng, khung nhìn 3D bao quanh cả ngôi nhà trong một ngăn hẹp, và cửa đi và cửa sổ được chọn trước các đường kích thước.
- **Lưu một ảnh.** **Lưu PNG** trong hộp thoại Kết xuất giờ là {{ui:Lưu}}, với {{ui:Lưu thành}} bên cạnh cho các định dạng khác. Xem [Lưu ảnh](topic:render#save-the-picture).
- **Tab Phân tích** có một khối {{ui:Kiểm tra thiết kế}}: nó tạo các tổ hợp tải theo ASCE 7 hoặc EN 1990 cho các trường hợp của bạn và kiểm tra từng tiết diện chữ I thép cán (một kích thước W, S, IPE, HEA hoặc HEB theo tên biên dạng và kích thước của nó) theo AISC 360 hoặc EN 1993-1-1, cho biết nó sử dụng bao nhiêu khả năng chịu lực. Một công cụ hỗ trợ cho đến khi kỹ sư xem xét; các tiết diện hàn và các tiết diện khác ghi "chưa kiểm tra". Xem [Kiểm tra thiết kế](topic:frame-analysis#design-checks).

## Đã sửa

- Làm lại sau một bước đã tạo một kích thước họ mới ("không có kích thước") bị lỗi. Mọi bước giờ tạo lại cùng các GlobalId IFC khi làm lại, nên làm lại hoạt động với họ và mọi thay đổi khác.
- Khi hai người lưu cùng một họ (trong một phiên Live TeamWork hoặc hai cửa sổ), lần lưu thứ hai âm thầm thay thế thay đổi của lần đầu. Giờ nó từ chối và cho biết cách xem thay đổi của họ và thực hiện lại thay đổi của bạn.
- Một mô hình bằng feet khảo sát của Hoa Kỳ được đọc là 0.3048 m cho mỗi foot thay vì 0.3048006096 m, làm mọi IFC có tọa độ bản đồ bằng feet Hoa Kỳ bị lệch trên bản đồ.
- Trình chỉnh sửa họ: đóng nó không còn làm mất tiêu điểm bàn phím về trang, nút Lưu luôn hiển thị trên điện thoại, và các trường không còn làm điện thoại phóng to.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với các kích thước chính xác mà định nghĩa của đơn vị đưa ra (feet khảo sát Hoa Kỳ là một đơn vị riêng). Tắt các đơn vị bạn không bao giờ dùng và chúng rời khỏi danh sách; đánh dấu sao một đơn vị và công việc mới bắt đầu bằng nó. Một tệp luôn giữ đơn vị riêng của nó. Trong BimCraft, danh sách {{ui:Đơn vị}} trên thanh công cụ theo các công tắc, dấu sao đặt đơn vị hiển thị cho đến khi bạn chọn chúng trên thanh công cụ (lựa chọn trước của bạn được giữ), và các ô chiều dài của công cụ vẽ nhận ký hiệu của bất kỳ đơn vị nào, chẳng hạn `3.5 m` hoặc `10 US ft`. Xem [Đơn vị, giá trị đã nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày hơn và các bảng tự gọn.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} vừa thêm nhiều thứ hơn lên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mảnh: kéo nó để neo hoặc nổi bảng, thả nó lên thanh của một bảng khác để chia sẻ một khung như các thẻ, ghim nó để trượt về cạnh, hoặc ẩn nó và đưa nó trở lại từ cạnh. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo một hộp thoại bằng thanh tiêu đề của nó ra khỏi đường đi của bản vẽ; nó quay lại vị trí bạn đã để. Nhấp đúp vào thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý riêng của bạn (dọn gọn một bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, tổng hợp một bóc tách khối lượng, thử một biến thể của chi tiết…), mỗi yêu cầu có các công cụ mà nó gọi và các quyền nó cần, và mỗi yêu cầu được chạy lại bởi các kiểm thử của chúng tôi. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đầy đủ mọi từ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp bằng tiếng Anh, với một số bằng tiếng Tây Ban Nha.
- **CadCraft Studio** cho biết vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký không hợp lệ) thay vì chỉ "Xong", và ngừng đưa lại một thẻ Có gì mới mà bạn đã đóng cho đến khi có một bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã, và gói Microsoft Store, được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa hoàn tất. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trong cửa hàng ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nào đọc chúng.
- Kết xuất bằng card đồ họa, các phần bổ sung trong hộp thoại Kết xuất và hàng đợi kết xuất cần WebGPU (không có nó, chất lượng cao dùng bộ dò đường WebGL); xem trực tiếp dùng WebGPU khi trình duyệt có nó, nếu không dùng WebGL 2. Chúng được thử nghiệm ở đây chỉ trên một card đồ họa giả lập bằng phần mềm, chưa thử trên card đồ họa thật. Xem trực tiếp trong BimCraft không có tán xạ hay chia sẻ (của ModelCraft thì có).
- Kết xuất một đường đi đã ghi thành video chưa được tích hợp trong BimCraft.
- Kiểm tra thiết kế: một tiết diện chữ I có tên biên dạng IFC không phải là kích thước W, S, IPE, HEA hoặc HEB (hoặc có kích thước khác với nó) được coi là hàn và trả về "chưa kiểm tra", cũng như ống, thép góc, thép chữ C, cấu kiện mảnh và xoắn. Chưa có kỹ sư nào xem xét các kiểm tra.
- Các phần tử đã vẽ không thể được sao chép từng cái, xoay, đối xứng hoặc sắp mảng (có thể sao chép cả một tầng), và không có tường tách, công cụ Văn bản hay tường rèm. Một tường gặp một tường từ tầng thấp hơn trên một tầng cao không được cắt vào khối 3D của tường đó, và các bảng thống kê liệt kê một lỗ mở ở tầng cao dưới tầng riêng của tường đó.
- Họ: thư viện họ dùng chung giữa các dự án chưa được xây dựng. Các họ và tầng đã sao chép chưa được mở trong các chương trình BIM khác.
- MEP: thiết bị là chung (không có dữ liệu của nhà sản xuất); tê và giảm trên đoạn ống thép là chung, không theo bảng ASME B16.9; các cổng của mục thư viện được đặt từ tab {{ui:Thư viện}} không được ghi vào IFC; chưa có kỹ sư nào xem xét gì cả.
- Tiện ích bổ sung Nhà máy chưa thể vẽ một đoạn có tuyến vào mô hình, đánh số đoạn ống trên các bản đẳng trục của nó, hay kiểm tra bố trí của thiết bị đặt từ thư viện.
- Các nhà máy từ thư viện nhà máy của CivilCraft chưa thể đặt từ tab {{ui:Thư viện}} của BimCraft.
- Năng lượng: không có mô phỏng theo giờ, không có phương pháp ISO 52016-1 và không có tệp khí hậu. Tài sản: không có bản sao số được lưu trữ giữ số đọc hoặc gửi cảnh báo khi BimCraft đóng.
- Đăng ký bản quét mới được thử trên các bản quét thử, chưa thử trên một bộ quét thật từ máy quét thực; các tệp E57 vẫn mở tối đa 6 triệu điểm và 512 MB.
- Các gói dự án chỉ mở trong BimCraft (các ứng dụng khác nhận bố cục qua **Mở trong …**), và các gói cùng bộ hai chương trình đã được thử với các bản thay thế, chưa thử với chính Archicad hay Revit.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet).
