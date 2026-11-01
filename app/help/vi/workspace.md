---
title: Màn hình BimCraft
summary: Một vòng tham quan mọi thanh, bảng và nút, theo tên hiển thị trên màn hình, và cách màn hình thay đổi theo từng loại tệp.
keywords: màn hình, bố cục, bảng, thanh công cụ, giao diện, ui, tham quan, bảng thuộc tính, trình duyệt, thanh ứng dụng
from: 2eb01ec2
---

Màn hình BimCraft có một thanh ngang ở trên cùng và ba khu vực bên dưới: một bảng ở bên trái, sân khấu ở giữa và bảng {{ui:Thuộc tính}} ở bên phải. Nội dung mỗi khu vực tùy thuộc vào thứ bạn đã mở: mô hình IFC, tệp dự án hoặc family, bản vẽ hay thư mục.

## Thanh ứng dụng

Thanh mỏng ngang trên cùng thuộc về trang web CadCraft, không phải của chính BimCraft. Từ trái sang phải:

- Biểu tượng CadCraft: đi đến trang chủ CadCraft.
- Tên ứng dụng và menu phiên bản. Trong bản nội bộ, menu cho biết bạn đang chạy bản dựng nào và cho phép chuyển sang một phiên bản đã phát hành.
- {{ui:Giới thiệu BimCraft}}: trang của ứng dụng trên trang web.
- {{ui:Cài đặt}}: cài đặt riêng của BimCraft và những cài đặt mọi ứng dụng dùng chung. Xem [Cài đặt BimCraft](topic:settings).
- {{ui:Toàn màn hình}}: chuyển vòng qua các chế độ màn hình. Xem [Chế độ màn hình](topic:workspace#screen-modes) bên dưới.
- {{ui:Giấy}} và {{ui:Mô hình}}: giao diện sáng và tối. Khung nhìn 3D và các bản vẽ 2D theo giao diện bạn chọn.

## Bảng bên trái

Bảng bên trái luôn bắt đầu bằng **Mở tệp hoặc thư mục**:

- Vùng thả, {{ui:Chọn một tệp, hoặc kéo thả tệp hoặc thư mục vào đây}}. Nhấp vào đó để chọn một tệp, hoặc thả một tệp hay thư mục lên đó (hoặc lên bất kỳ chỗ nào trên trang).
- {{ui:Mở thư mục}}: chọn cả một thư mục dự án. Xem [Mở cả thư mục dự án](topic:open-project-folder).
- {{ui:Thư mục gần đây}}: xuất hiện trong Chrome và Edge sau khi bạn mở một thư mục bằng bộ chọn thư mục hoặc bằng cách thả vào. Nhấp {{ui:Mở lại}} cùng tên thư mục để mở lại, hoặc dấu × nhỏ để quên nó.

Bên dưới, các mục xuất hiện tùy tình huống:

| Mục | Khi nào hiện | Bên trong có gì |
|---|---|---|
| {{ui:Thay đổi}} | Đang mở một mô hình IFC | Các chỉnh sửa chưa lưu của bạn, mới nhất ở trên, cùng {{ui:Hoàn tác}} và {{ui:Lưu thành IFC}} |
| {{ui:Tệp}} | Đang mở một mô hình hoặc thẻ tệp | Thông tin về tệp: dung lượng, lược đồ hoặc bản phát hành, dự án, tác giả, số phần tử |
| {{ui:Bản vẽ}} | Đang mở một DWG hoặc DXF | Định dạng, đơn vị, số đối tượng và số lớp, các tờ, bản vẽ liên kết, thiết bị |
| {{ui:Thư mục}} | Đang mở một thư mục | Số tệp và số mô hình, dung lượng, các vấn đề tìm thấy |
| {{ui:Quay lại thư mục}} | Bạn đã mở một tệp từ một thư mục | Trở về báo cáo thư mục |
| {{ui:Lớp}} | Đang mở một bản vẽ | Một ô đánh dấu cho mỗi lớp, cùng {{ui:Bật tất cả}} và {{ui:Tắt tất cả}} |
| {{ui:Tầng}} | Đang mở một mô hình IFC | Một ô đánh dấu cho mỗi tầng, tầng trên cùng ở đầu |
| {{ui:Phần tử}} | Đang mở một mô hình IFC | Mô hình có bao nhiêu phần tử mỗi loại (30 loại phổ biến nhất) |

## Sân khấu

Giữa màn hình hiển thị tệp đang mở.

- **Trống**: "Open a building model." cùng {{ui:Chọn tệp}} và {{ui:Mở thư mục}}, và mô tả ngắn về từng định dạng.
- **Mô hình IFC**: khung nhìn 3D với thanh công cụ ở phía trên, chia thành các nhóm có tên giống ứng dụng vẽ CadCraft, biểu tượng của mỗi công cụ nằm trên tên của nó: {{ui:Xem}} ({{ui:Vừa khung}}, {{ui:Trên}}, {{ui:Trước}}, {{ui:Bên}}, {{ui:Cạnh}}, {{ui:Không gian}}); {{ui:Chỉnh sửa}} ({{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}} và {{ui:Thêm}}, xem [Sao chép, dán và nhân bản các mục thư viện](topic:copy-paste)); {{ui:Mô hình}} ({{ui:Đơn vị}} và {{ui:Vẽ}}); {{ui:Thư viện}} ({{ui:Thư viện}}, {{ui:Thiết bị}}, {{ui:Cập nhật}}, {{ui:Ghi công}}); {{ui:Rà soát}} ({{ui:Hiển thị}}, {{ui:Mặt cắt}}, {{ui:Đi bộ}}, {{ui:Đo}}; xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)); và {{ui:Đầu ra}} (kết xuất, xem trực tiếp, VR, xuất tệp, tô vật liệu và các góc nhìn đã lưu). Khi {{ui:Vẽ}} đang bật, thanh Vẽ bên dưới có cùng kiểu: {{ui:Xem}} (tầng và loại mặt bằng), {{ui:Vẽ}}, {{ui:Chỉnh sửa}} và {{ui:Thư viện}}. Một khối xem nằm ở góc dưới bên phải. Xem [Mở mô hình IFC và nhìn quanh trong 3D](topic:open-ifc-model). Trong {{ui:Cài đặt}}, {{ui:Chung}} chọn biểu tượng, nhãn hoặc cả hai trên các nút này, hiện hoặc ẩn tên nhóm, và nhấp chuột phải vào thanh công cụ để sắp xếp công cụ và nhóm. Khi cửa sổ thấp, thanh công cụ bỏ phần tên dưới biểu tượng.
- **Tệp dự án hoặc family**: thẻ tệp, kèm ảnh xem trước, thông tin dự án và các tệp liên kết. Xem [Đọc tệp dự án hoặc family](topic:read-rvt-file).
- **DWG hoặc DXF**: một hàng thẻ ({{ui:Mô hình}}, rồi mỗi tờ một thẻ, rồi {{ui:Thiết bị}} khi bản vẽ có thiết bị được gắn thẻ, {{ui:3D}}, {{ui:Vừa khung}} và {{ui:Chế độ in}}), bản vẽ, và tọa độ X và Y trực tiếp ở một góc. Xem [Xem bản vẽ DWG hoặc DXF](topic:view-dwg) và [Xem bản vẽ DWG hoặc DXF ở dạng 3D](topic:dwg-in-3d).
- **Thư mục**: báo cáo thư mục, với ô {{ui:Bắt đầu từ đây}} và các bảng mô hình, liên kết, mô hình IFC và bản vẽ. Xem [Mở cả thư mục dự án](topic:open-project-folder).

**Dòng trạng thái** ở cuối sân khấu cho bạn biết BimCraft đang làm gì ("Reading the model…", "Building geometry: 1200 of 5400 elements") và điều gì đã hỏng, bằng màu đỏ, khi có lỗi. Các thông báo thành công mờ dần sau vài giây.

## Bảng Thuộc tính

Bảng bên phải hiển thị:

- Với mô hình IFC: phần tử bạn đã nhấp, cùng tên, kiểu, thẻ, GlobalId và mọi bộ thuộc tính. Các giá trị có thể đổi trông như nút. Xem [Các trường của bảng Thuộc tính](topic:properties-panel).
- Với bản vẽ: cách di chuyển, các bản vẽ và ảnh liên kết của bản vẽ cùng việc mỗi mục có được tìm thấy không, và danh sách những gì **Not drawn yet**.
- Với thẻ tệp hoặc thư mục: một ghi chú ngắn về việc nên mở gì tiếp theo.

## Trên màn hình nhỏ

Khi cửa sổ hẹp hơn màn hình laptop, BimCraft xếp chồng các khu vực: sân khấu ở trên, rồi các bảng ở dưới. Cuộn trang để tới các bảng. Trên điện thoại chúng thành một cột; trên máy tính bảng, hai cột.

## Chế độ màn hình

Nút {{ui:Toàn màn hình}} trên thanh ứng dụng, hoặc {{key:Ctrl+Shift+F}} trên mọi nền tảng, chuyển vòng qua ba chế độ:

1. Bình thường.
2. Toàn màn hình, các thanh vẫn hiện.
3. Toàn màn hình với thanh ứng dụng bị ẩn. Di con trỏ lên mép trên, hoặc chạm vào đó, để đưa nó trở lại.

Nhấn {{key:Esc}} để về bình thường. Các trình duyệt không hỗ trợ toàn màn hình (như trên iPhone) chỉ chuyển giữa bình thường và ẩn thanh.

## Liên quan

- [Phím và chuột](topic:keyboard)
- [Các tệp BimCraft mở và lưu](topic:files)
