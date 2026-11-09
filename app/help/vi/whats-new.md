---
title: Có gì mới trong 0.8 và 0.8.1
summary: BimCraft thêm người đi qua tòa nhà, âm học phòng bạn có thể nghe, phát lại lũ, gió và động đất, góc nhìn vòng đời năm mươi năm, kiểm tra theo IDS, thẻ và bảng thống kê, Di chuyển, Căn chỉnh và Phân bố, ảnh dưới mặt bằng, tường từ bản quét, bản vẽ tấm, điện mặt trời, hệ thống chia tách và VRF, chọn kích thước ống và cáp, kiểm tra bê tông và động đất, phép chiếu bản đồ bất kỳ, lựa chọn bộ máy kết xuất và hoàn tác trong Studio; 0.8.1 sửa các công cụ bị xám trên bố cục Ribbon.
keywords: có gì mới, phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, sơ tán, người, hàng đợi, âm học, vang, đáp ứng xung, lũ, gió, động đất, thiên tai, vòng đời, tuổi thọ, ids, thẻ, bảng thống kê, di chuyển, căn chỉnh, phân bố, ảnh, nền, quét thành tường, địa điểm từ civilcraft, bản vẽ tấm, khung, điện mặt trời, pv, chia tách, vrf, fan coil, chọn kích thước ống, máng cáp, độ rọi, bê tông, động đất, so sánh quét, epsg, phép chiếu, tài liệu, mẫu, carbon, chi phí, energyplus, bộ máy kết xuất, mở trong, usd, glb, unreal, hoàn tác, tiện ích bổ sung, pcf, ký hiệu, cây, dò theo, nét bút, ribbon, bảng dự án, bố cục
from: 87b03056
---

Đây là những thay đổi trong BimCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. BimCraft giờ có thể trả lời câu hỏi về một tòa nhà và kiểm tra nó, với người, âm thanh, nước, gió và động đất, và vẽ nó với nhiều công cụ hơn; 0.8.1 là bản sửa lỗi.

## Mới

### Kiểm tra tòa nhà

- **Người trong tòa nhà.** Mục {{ui:Người trong tòa nhà}} của bảng bên trái cho người đi qua các phòng, cửa và cầu thang của bạn trong một lần sơ tán hoặc lượng người đến trong một ngày bình thường. Bạn thấy hàng đợi tại nơi tòa nhà thu hẹp, quãng đường dài nhất đến lối thoát từ mỗi phòng và thời gian người cuối cùng đi mất bao lâu. Tích {{ui:Đóng}} ở một cửa để xem điều gì thay đổi, và tích {{ui:Hiện người trong khung nhìn 3D}} để xem người đi bộ. Kết quả gửi đến Vấn đề. Đây là mô hình đám đông thô phục vụ quyết định thiết kế, không phải chứng nhận an toàn phòng cháy. Xem [Cho người đi qua tòa nhà](topic:people-in-the-building).
- **Âm học phòng, và nghe thử.** Mục {{ui:Âm học phòng}} cho thời gian vang của mỗi phòng theo băng quãng bát (Sabine và Eyring) từ kích thước và lớp hoàn thiện bạn chọn, và với mục tiêu riêng sẽ cho biết cần bao nhiêu độ hấp thụ để đạt. {{ui:Phát trong phòng này}} phát giọng nói, tiếng vỗ tay, nốt gảy hoặc tệp âm thanh riêng của bạn qua đáp ứng xung được tính cho phòng. Các số liệu hấp thụ là giá trị công bố điển hình để bạn thay thế. Xem [Âm học phòng](topic:room-acoustics).
- **Phát lại lũ, gió và động đất.** {{ui:Phát lại thiên tai}} phát nước dâng qua các phòng, áp lực gió lên mỗi tầng và động đất làm rung các tầng, trên mặt bằng hoặc mặt đứng với thanh thời gian. Mô hình đơn giản cùng các giả định của chúng hiện trên bảng; không phải kiểm tra theo quy chuẩn. Xem [Phát lũ, gió hoặc động đất](topic:hazard-playback).
- **Điều gì hao mòn sau năm mươi năm.** {{ui:Góc nhìn vòng đời}} liệt kê cửa sổ, cửa đi, lớp hoàn thiện và mái, mỗi thứ với tuổi thọ, các năm được thay thế và, khi bạn nhập chi phí cho mỗi đơn vị, chi phí theo năm và giá trị hiện tại của chúng. {{ui:Lưu lịch (CSV)}} xuất ra tệp. Tuổi thọ là số liệu lập kế hoạch. Xem [Xem điều gì hao mòn sau năm mươi năm](topic:life-cycle-view).
- **Kiểm tra bê tông và động đất.** Các khối {{ui:Cấu kiện bê tông}} và {{ui:Tải trọng động đất}} của thẻ {{ui:Phân tích}} kiểm tra dầm và cột bê tông theo ACI 318-19 và tạo lực ngang tương đương theo ASCE 7-22 trên sàn cứng, cùng độ trôi tầng. Để kỹ sư kiểm tra. Xem [Kiểm tra cấu kiện bê tông và tạo tải trọng động đất](topic:concrete-and-seismic).

### Kiểm tra và báo cáo

- **Kiểm tra theo IDS.** Tải tệp `.ids` khách hàng đưa cho bạn và xem mọi cấu kiện không đạt trong Vấn đề, trước khi bạn giao IFC. Mở {{ui:Kiểm tra theo IDS}} trong {{ui:Kiểm tra mô hình}}. Xem [Kiểm tra mô hình theo IDS của khách hàng](topic:check-against-ids).
- **Thẻ và bảng thống kê.** Định nghĩa các thẻ riêng, gán chúng cho nhiều cấu kiện cùng lúc và tạo bảng thống kê mà các cột, bộ lọc và nhóm đọc các thẻ đó; thẻ được giữ trong IFC. Xem [Thẻ và bảng thống kê](topic:tags-and-schedules).
- **Tài liệu từ mô hình.** {{ui:Tài liệu từ mô hình}} điền một mẫu đặc tả từ IFC đang mở và lưu thành PDF, tài liệu Word hoặc Markdown. Xem [Tài liệu từ mô hình](topic:documents-from-the-model).
- **So sánh bản quét với mô hình.** Khi một đám điểm đang mở, {{ui:So sánh}} đánh giá từng cấu kiện là đã xây, xây một phần, thiếu hoặc chưa tới, và hiển thị phần trăm đã xây. Xem [So sánh bản quét với mô hình](topic:compare-scan-with-model).
- **Carbon và chi phí.** Ngăn Carbon cộng carbon nhúng từ một bảng hệ số bạn có thể sửa, và ngăn Chi phí trải giá trên lịch 4D. Các hệ số đi kèm BimCraft là chung và được đánh dấu chưa kiểm tra. Xem [Carbon nhúng và chi phí](topic:embodied-carbon-and-5d-cost).
- **Phép chiếu bản đồ bất kỳ.** {{ui:Đo}} › {{ui:Hệ tọa độ…}} nhận số EPSG, múi UTM, tên hoặc định nghĩa phép chiếu riêng của bạn. Xem [Định vị địa lý với phép chiếu bất kỳ](topic:georeference-any-projection).

### Vẽ và chỉnh sửa

- **Di chuyển, Căn chỉnh và Phân bố.** Nằm dưới {{ui:Bản dựng}}; {{key:Shift+M}} bắt đầu Di chuyển (phím {{key:M}} thường vẫn là Đo). Khi di chuyển, nhấn {{key:C}} để sao chép, mỗi bước là một lần hoàn tác, và thao tác này đi theo trong phiên Live TeamWork. Xem [Di chuyển, sao chép, căn chỉnh và phân bố](topic:move-align-distribute).
- **Ảnh dưới mặt bằng.** {{ui:Bản dựng}} › {{ui:Ảnh}} đặt PNG, JPEG hoặc WebP dưới mặt bằng của một tầng hoặc trên mặt phẳng đứng. Đặt tỷ lệ bằng hai điểm, rồi di chuyển, xoay, làm mờ và khóa ảnh. Vùng đã sao chép trong MarkupCraft dán vào với tỷ lệ của tờ. Xem [Đặt ảnh dưới mặt bằng](topic:pictures-as-backgrounds).
- **Tường từ bản quét.** Khi một bản quét đang mở, tường, cửa và phòng xuất hiện như các đề xuất mà bạn giữ hoặc bỏ từng cái một, trong một bước hoàn tác. Chỉ tìm thấy tường theo hai hướng vuông góc. Xem [Biến bản quét thành tường](topic:scan-to-walls).
- **Dò theo, nét bút và cầu thang phác thảo.** {{ui:Dò theo}} hiển thị một tầng khác dạng nét đứt dưới mặt bằng, {{ui:Nét bút}} cho tường, cửa và cửa sổ độ dày nét riêng trong cùng một khung nhìn, và {{ui:Phác thảo cầu thang}} biến một đường đi bộ thành cầu thang. Một lưới Wavefront OBJ mở được. Xem [Dò một tầng, nét bút và cầu thang từ phác thảo](topic:trace-pens-stairs-obj).
- **Các tòa nhà quanh một địa chỉ.** Các tòa nhà và thửa đất mà Địa chỉ đến địa điểm của CivilCraft tìm được xuất hiện như gợi ý; bạn tích những cái muốn thêm. Xem [Bắt đầu từ địa điểm của CivilCraft](topic:site-from-civilcraft).
- **Bản vẽ tấm.** {{ui:Bản dựng}} › {{ui:Bản vẽ tấm}} khung tường, sàn và mái bằng gỗ hoặc thép tấm nhẹ, và lưu danh sách cắt dạng CSV cùng bản vẽ thi công dạng PDF. Đây là giá trị khởi đầu, không phải thiết kế kết cấu. Xem [Bản vẽ tấm](topic:panel-drawings).
- **Bảng ký hiệu và cây.** {{ui:Bản dựng}} › {{ui:Bảng ký hiệu}} tìm ký hiệu điện và cấp thoát nước theo tên; nguồn {{ui:Cây}} của {{ui:Thư viện}} liệt kê khoảng 400 loại cây với ký hiệu mặt bằng. Xem [Bảng ký hiệu](topic:symbol-palette) và [Đặt một cây](topic:plant-list).

### Ống, ống dẫn và năng lượng

- **Hệ thống chia tách, VRF và fan coil.** Các dàn trong nhà và ngoài trời cùng kết nối, và các bộ ống môi chất được chọn kích thước theo bảng giá trị ví dụ điển hình mà bạn có thể thay đổi. Xem [Hệ thống chia tách, VRF và fan coil](topic:split-vrf-fan-coils).
- **Tính toán.** Ngăn Tính toán kiểm tra kích thước ống cấp và ống dẫn theo tổn thất áp suất, đi cáp qua máng và ống luồn và hiển thị độ lấp đầy, và tính độ rọi từ tệp IES hoặc EULUMDAT. Giá trị mặc định được ghi nhãn; hãy nhập giá trị theo quy chuẩn của bạn. Xem [Tính toán ống, ống dẫn, cáp và ánh sáng](topic:mep-calculations).
- **Tệp PCF.** **Xuất PCF** của công cụ Ống ghi các tuyến cho chương trình phân tích ứng suất ống và chương trình isometric, và một tệp PCF đọc lại sẽ vẽ ống của nó. Xem [Tệp thành phần ống](topic:piping-pcf).
- **Điện mặt trời.** Lắp các dãy trên mái hoặc mặt đất, che bóng từ mô hình, ước tính năng lượng hằng năm, kiểm tra chuỗi và tạo dữ liệu sơ đồ một sợi. Mô-đun khởi đầu và tổn thất là chung. Xem [Điện mặt trời](topic:solar-pv).
- **Tệp EnergyPlus.** Ngăn Kiểm tra với EnergyPlus ghi mô hình thành tệp IDF để chạy trong EnergyPlus của bạn. Chạy trong trình duyệt cần một bản dựng do bạn tự lưu trữ và nhập địa chỉ của nó; BimCraft không đi kèm. Xem [Kiểm tra sưởi và làm lạnh với EnergyPlus](topic:check-with-energyplus).

### Ảnh và tệp

- **Chọn bộ máy kết xuất.** {{ui:Kết xuất}} có lựa chọn {{ui:Bộ máy}}. Hai bộ máy tích hợp của chúng tôi (Nhanh và Theo dõi đường đi) vẫn là mặc định. **Mở trong** lưu cảnh thành tệp USD hoặc glTF, và thư mục dự án Unreal thành .zip; trong CadCraft Studio, một tiện ích bổ sung có thể thêm bộ máy. Plug-in Unreal mở dự án chưa được phát hành. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Hoàn tác trong Studio.** Trong CadCraft Studio, BimCraft báo cho Studio mỗi bước đã hoàn tất để Studio có thể hoàn tác bước cuối của bạn trong cửa sổ bạn dùng gần nhất. Xem [Hoàn tác giữa các ứng dụng](topic:undo-across-apps).
- **Tiện ích bổ sung trong tệp của bạn.** IFC ghi lại tiện ích bổ sung nào đã ghi vào nó, và đề nghị những cái bạn thiếu khi bạn mở nó. Xem [Tiện ích bổ sung trong tệp của bạn](topic:add-ons-in-your-file).

### Trong mọi ứng dụng

- **Kết nối AI của bạn.** Trợ lý riêng của bạn có thể điều khiển BimCraft qua kết nối của Studio và trả lời câu hỏi về mô hình, ví dụ phòng nào nằm dưới một diện tích nhất định. Studio không có AI riêng. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).
- **Thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} cung cấp Xuống dòng, 2 hàng hoặc 1 hàng; Xuống dòng vẫn là mặc định.
- **Thiết bị nhập.** Cài đặt bàn di chuột, bút, chuột 3D, bộ điều khiển và MIDI được mọi ứng dụng dùng chung.
- **Vấn đề và Live.** Bảng cảnh báo và phiên Live hoạt động như trước, với các kiểm tra mới ở trên đưa vào Vấn đề.
- **Ngôn ngữ.** 54 ngôn ngữ, trong đó mười ngôn ngữ mới. Các ngôn ngữ khác tiếng Anh là bản dịch máy chưa được người bản ngữ đọc; các chủ đề trợ giúp chủ yếu bằng tiếng Anh.

## Đã sửa trong 0.8.1

- **Bố cục Ribbon + Bảng dự án.** Chèn › Nhập CAD, Chèn › Ảnh và Quản lý › Đơn vị dự án từng hiển thị "Chưa xây dựng trong BimCraft". Ảnh giờ mở công cụ Ảnh, Nhập CAD mở {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} (DWG, DXF, PDF hoặc bản quét), và Đơn vị dự án mở {{ui:Cài đặt}} › {{ui:Chung toàn cục}} › {{ui:Đơn vị}}. Di chuyển và Căn chỉnh chạy các công cụ Di chuyển và Căn chỉnh, Tầng mở {{ui:Thêm tầng…}}, Giai đoạn mở mục Các giai đoạn cải tạo, và Vật liệu mở thư viện vật liệu.
- **Mục classes của DWG.** Mục này bị đọc sai kiểu; đã sửa trong BimCraft và các ứng dụng khác đọc DWG.
- **Ngôn ngữ khi chạy.** Studio và các bản đóng gói giờ có thể đổi ngôn ngữ mà không cần khởi động lại. Điều này chưa được kiểm tra trên mọi nền tảng; hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Script gói Archicad.** `archicad_bundle.py`, một tệp tải riêng, giờ tìm đường dẫn của Archicad, theo dõi thư mục tối đa 20 giây và thử lại bên cạnh gói.

## Chưa có trong phiên bản này

- **Công cụ an toàn và thiết kế.** Người trong tòa nhà không có giới hạn khoảng cách di chuyển theo quy chuẩn xây dựng (bạn nhập giới hạn) và chưa được kiểm tra thủ công trên một mặt bằng thực. Các số liệu âm học, vòng đời và thiên tai là giá trị lập kế hoạch, không phải kiểm tra theo quy chuẩn.
- **Khí hậu tương lai và EnergyPlus.** Chưa có khí hậu tương lai tích hợp: bạn có thể tải tệp kịch bản cho lần chạy lũ. Lần chạy EnergyPlus trong trình duyệt không thuộc bản phát hành này.
- **Ribbon.** Material Takeoff vẫn "Chưa xây dựng" vì BimCraft không có danh sách khối lượng vật liệu, và 54 công cụ ribbon bị xám khác chưa có công cụ BimCraft tương ứng.
- **Chữ ký và nền tảng.** Trình cài đặt Windows và tệp .dmg macOS chưa được ký, nên SmartScreen hiện {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}, và macOS cần nhấp chuột phải rồi chọn {{ui:Mở}}. Bản dựng iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Kiểm thử trên trang thực.** Một số bài kiểm thử trình duyệt BimCraft cũ vẫn hỏng trên trang kiểm thử của chúng tôi, như trước 0.8.1.

Mọi nội dung khác nằm trong [Những gì chưa xây dựng](topic:not-built-yet). Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
