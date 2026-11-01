---
title: Các tệp BimCraft mở và lưu
summary: Mọi định dạng BimCraft mở, những gì nó giữ lại, những gì nó lưu, tệp đã lưu đi đâu, và điều gì khác nhau giữa các trình duyệt và khi bạn ngoại tuyến.
keywords: định dạng, mở, lưu, xuất, tải xuống, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, tải lên, quyền riêng tư, dung lượng tệp
from: a1f0161b
---

BimCraft đọc tệp trên máy tính của bạn, ngay trong thẻ trình duyệt. **Không có gì được tải lên** CadCraft hay bất kỳ ai khác. Khi bạn lưu, BimCraft đưa cho trình duyệt một tệp mới để tải xuống; nó không bao giờ ghi đè lên tệp bạn đã mở.

## Những gì nó mở

| Định dạng | Phần mở rộng | Bạn nhận được gì |
|---|---|---|
| IFC | `.ifc` | Mô hình ở dạng 3D, các tầng, số phần tử và thuộc tính của từng phần tử. Có thể đổi tên, thẻ và từng giá trị thuộc tính. |
| Tệp dự án và family | `.rvt` `.rfa` `.rte` `.rft` | Một thẻ tệp: bản phát hành, bản dựng, làm việc chung, thông tin dự án, tham số family, các tệp liên kết và ảnh xem trước. Không có 3D. |
| DWG | `.dwg` | Bản vẽ ở dạng 2D: không gian mô hình, mọi tờ, các lớp, bản vẽ liên kết, hình ảnh và chế độ in. Không gian mô hình cũng xem được ở dạng 3D. Các định dạng từ AutoCAD 2000 đến 2018 là những định dạng đã được kiểm tra. |
| DXF | `.dxf` | Giống DWG. |
| STEP | `.step` `.stp` | Một chi tiết, một thiết bị hoặc mô hình của nhà cung cấp (AP203, AP214, AP242) ở dạng 3D: mỗi khối đặc trở thành một phần tử (building element proxy) của một mô hình IFC nhỏ trên một tầng, được đọc thành các tam giác với kích thước thật, một cụm lắp ráp có mọi chi tiết ở đúng chỗ tệp đặt chúng. Từ đó nó hoạt động như mọi IFC: thuộc tính, mặt cắt, đo, lưu thành IFC. Màu sắc và cây lắp ráp không được đọc. |
| Đám điểm | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Bản quét trong khung nhìn 3D, bên cạnh một mô hình hoặc riêng lẻ: xem [Hiển thị đám điểm bên cạnh mô hình](topic:point-clouds). |
| Gói dự án | `.ccbundle.zip` | Mô hình cùng các góc nhìn, bố cục và nhóm thuộc tính: xem [Mở gói dự án](topic:open-project-bundle). |
| Một thư mục | bất kỳ | Báo cáo về mọi mô hình, bản vẽ và gói dự án trong đó. Mọi IFC, mô hình, bản vẽ hoặc gói trong báo cáo đều mở bằng một lần nhấp. |

[BimCraft đọc gì từ mỗi định dạng](topic:file-formats) đi vào chi tiết.

BimCraft xác định tệp là gì bằng cách xem cả những byte đầu tiên lẫn tên tệp, nên một tệp dự án có phần mở rộng lạ vẫn mở ra thành thẻ tệp.

### Không mở được

- `.ifczip` và `.ifcxml`: BimCraft báo ".ifczip is not supported yet. Save or export the model as a plain .ifc file." Hãy giải nén `.ifczip` (bên trong là một `.ifc` thường) hoặc xuất lại thành IFC thường.
- Bản vẽ DGN được liệt kê trong báo cáo thư mục nhưng không mở được.
- PDF, hình ảnh và tệp văn phòng không tự mở được. Hình ảnh được dùng làm ảnh bên trong DWG, và {{ui:Xây dựng}} › {{ui:Từ bản vẽ…}} biến các trang PDF hoặc bản quét thành tường: xem [Tường từ một bộ mặt bằng](topic:walls-from-plans).

## Những gì nó lưu

| Bạn nhấp | Bạn nhận được | Ở đâu |
|---|---|---|
| {{ui:Lưu thành IFC}} | Một tệp IFC mới có các chỉnh sửa của bạn, tên "*tên gốc* (edited).ifc" | Thư mục tải xuống của trình duyệt |
| {{ui:Tải CSV}} trong bảng thống kê thiết bị | Một CSV gồm các mục trong danh sách, tên "*tên bản vẽ* equipment.csv" | Thư mục tải xuống của trình duyệt |

Những thứ khác được lưu ngay nơi chúng được tạo, mỗi thứ trong chủ đề riêng: {{ui:USD}} ([Xuất mô hình thành USD](topic:usd)), .glb {{ui:Để kết xuất}}, ảnh đã kết xuất, tờ và mặt bằng dạng PDF, bảng thống kê và danh sách dạng CSV, vấn đề BCF, bảng tính COBie, tệp family, và các bản quét đã đăng ký dạng LAS hoặc E57. BimCraft không lưu DWG, DXF hay tệp dự án, và không bao giờ thay đổi các tệp bạn đã mở.

:::chromium
Chrome và Edge lưu tệp tải xuống vào thư mục đặt trong cài đặt của chúng, thường là Downloads. Để được hỏi nơi lưu mỗi lần, hãy bật "Ask where to save each file before downloading" trong cài đặt tải xuống của trình duyệt.
:::

:::firefox
Firefox lưu vào thư mục Downloads trừ khi bạn đặt thành "Always ask you where to save files" trong cài đặt của nó.
:::

:::safari
Safari lưu vào Downloads trừ khi bạn chọn thư mục khác tại **Safari > Settings > General > File download location**.
:::

## Lưu lần thứ hai

Mỗi lần lưu tải xuống toàn bộ mô hình cùng **mọi chỉnh sửa kể từ khi bạn mở nó**, không chỉ những chỉnh sửa sau lần lưu trước. Danh sách {{ui:Thay đổi}} lại trống sau mỗi lần lưu, nên bạn không thể hoàn tác vượt qua một lần lưu. Để bắt đầu lại từ bản gốc, hãy mở lại tệp gốc.

## Tệp lớn và bộ nhớ

- Tệp **IFC** được đọc hoàn toàn vào bộ nhớ của thẻ, và hình học 3D cần thêm bộ nhớ nữa. Một mô hình vài trăm megabyte có thể quá nặng với laptop. Trên 1,5 triệu tam giác, các cạnh bị tắt để tiết kiệm bộ nhớ ("Edges are off for very large models").
- **Tệp dự án** không được đọc toàn bộ. BimCraft chỉ đọc những phần nhỏ nó cần, khoảng 40 KB đến 100 KB dù tệp lớn đến đâu, nên một mô hình trung tâm 500 MB trên ổ mạng mở ra trong chốc lát.
- Tệp **DWG và DXF** được đọc hoàn toàn. Một bản vẽ rất lớn hiện "This drawing is very large; only part of it is shown."
- **Thư mục** đến 20.000 tệp mở được. Chỉ đọc vài kilobyte mà thẻ của mỗi mô hình cần.

Xem [Trình duyệt, thiết bị và bộ nhớ](topic:platforms) để biết thêm.

## Trực tuyến và ngoại tuyến

Mở tệp không bao giờ cần internet. Một trình đọc được tải từ trang web vào lần đầu bạn cần đến: công cụ IFC, vào lần đầu bạn mở một mô hình IFC ("Starting the IFC engine…"). Trình đọc DWG và DXF nằm sẵn trong ứng dụng.

:::offline
Bạn đang ngoại tuyến. Nếu nút trên thanh ứng dụng ghi {{ui:Sẵn sàng ngoại tuyến}}, mọi định dạng đều mở như bình thường. Nếu không, mô hình IFC không mở được trừ khi đã có một mô hình được mở trong thẻ này: hãy kết nối lại trước. Xem [Trực tuyến và ngoại tuyến](topic:online-offline).
:::

Để dùng BimCraft khi không có kết nối, nhấp {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng khi đang trực tuyến và chờ {{ui:Sẵn sàng ngoại tuyến}}. Bản đã lưu khoảng 33 MB; nó gồm công cụ IFC nên mô hình IFC cũng mở được khi ngoại tuyến. [Làm việc ngoại tuyến](common:offline) giải thích chung về các bản đã lưu.

## Lưu lên đám mây

Chưa có tính năng lưu lên đám mây. Hãy lưu các bản sao đã chỉnh sửa trên máy tính của bạn hoặc máy chủ tệp của văn phòng, như với mọi tệp khác. Xem [Tệp của bạn](common:your-files).
