---
title: Các tệp BimCraft mở và lưu
summary: Mọi định dạng BimCraft mở được, phần nào được giữ lại, tệp đã lưu nằm ở đâu, và điều gì thay đổi giữa các trình duyệt và khi bạn ngoại tuyến.
keywords: định dạng, mở, lưu, xuất, tải xuống, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, tải lên, quyền riêng tư, kích thước tệp
from: a7275dbf
---

BimCraft đọc tệp trên máy tính của bạn, trong thẻ trình duyệt. **Không có gì được tải lên** CadCraft hay bất kỳ ai khác. Khi bạn lưu, BimCraft gửi cho trình duyệt một tệp mới để tải xuống; nó không bao giờ ghi đè lên tệp bạn đã mở.

## Mở được gì

| Định dạng | Phần mở rộng | Bạn nhận được |
|---|---|---|
| IFC | `.ifc` | Mô hình 3D, các tầng, số lượng cấu kiện và thuộc tính của từng cấu kiện. Có thể thay đổi tên, thẻ và từng giá trị thuộc tính đơn. |
| Tệp dự án và tệp họ | `.rvt` `.rfa` `.rte` `.rft` | Thẻ tệp: bản phát hành, bản dựng, chia sẻ làm việc, thông tin dự án, tham số họ, tệp liên kết và ảnh xem trước. Không có 3D. |
| DWG | `.dwg` | Bản vẽ 2D: không gian mô hình, mọi tờ, lớp, bản vẽ liên kết, hình ảnh và chế độ xem in. Không gian mô hình cũng có 3D. Các định dạng từ AutoCAD 2000 đến 2018 là những định dạng đã được kiểm tra. |
| DXF | `.dxf` | Giống như DWG. |
| STEP | `.step` `.stp` | Một chi tiết, một thiết bị hoặc mô hình của nhà cung cấp (AP203, AP214, AP242) ở 3D: mỗi khối đặc trở thành một cấu kiện (proxy cấu kiện xây dựng) trong một mô hình IFC nhỏ trên một tầng, được đọc dưới dạng tam giác với kích thước thật, và một cụm lắp ráp với mọi chi tiết ở đúng vị trí tệp đặt. Từ đó nó hoạt động như mọi IFC khác: thuộc tính, mặt cắt, đo, lưu thành IFC. Màu sắc và cây lắp ráp không được đọc. |
| Đám điểm | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Bản quét trong khung nhìn 3D, cạnh một mô hình hoặc riêng lẻ: xem [Hiển thị đám điểm bên cạnh mô hình](topic:point-clouds). |
| Gói dự án | `.ccbundle.zip` | Mô hình cùng các khung nhìn, bố cục và nhóm thuộc tính: xem [Mở gói dự án](topic:open-project-bundle). |
| Một thư mục | bất kỳ | Báo cáo về mọi mô hình, bản vẽ và gói dự án trong thư mục đó. Bất kỳ IFC, mô hình, bản vẽ hoặc gói nào trong báo cáo đều mở bằng một lần nhấp. |

[Định dạng nào BimCraft đọc từ mỗi loại](topic:file-formats) trình bày chi tiết.

BimCraft xác định tệp là loại gì bằng cách xem các byte đầu tiên cũng như tên tệp, nên tệp dự án có phần mở rộng lạ vẫn mở thành thẻ tệp.

### Không mở được

- `.ifczip` và `.ifcxml`: BimCraft hiển thị "Chưa hỗ trợ .ifczip. Hãy lưu hoặc xuất mô hình thành tệp .ifc thường." Giải nén `.ifczip` (bên trong là một tệp `.ifc` thường) hoặc xuất lại dưới dạng IFC thường.
- Bản vẽ DGN được liệt kê trong báo cáo thư mục nhưng không mở được.
- PDF, hình ảnh và tệp văn phòng không tự mở được. Hình ảnh được dùng làm ảnh bên trong DWG, còn {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} biến các trang PDF hoặc bản quét thành tường: xem [Tường từ bộ mặt bằng](topic:walls-from-plans).

## Lưu được gì

| Bạn nhấn | Bạn nhận được | Ở đâu |
|---|---|---|
| {{ui:Lưu thành IFC}} | Tệp IFC mới với các chỉnh sửa của bạn, đặt tên "*tên gốc* (edited).ifc" | Thư mục tải xuống của trình duyệt |
| {{ui:Tải CSV}} trong bảng thống kê thiết bị | Tệp CSV các mục trong danh sách, đặt tên "*tên bản vẽ* equipment.csv" | Thư mục tải xuống của trình duyệt |

Những thứ khác được lưu ngay tại nơi chúng được tạo, mỗi thứ trong một chủ đề riêng: {{ui:USD}} ([Xuất mô hình sang USD](topic:usd)), {{ui:Collada}} ([Xuất mô hình sang Collada hoặc cho Google Earth](topic:collada)): tệp .dae và .kmz của Google Earth, tệp .glb {{ui:Để kết xuất}}, ảnh đã kết xuất, tờ và mặt bằng dưới dạng PDF, bảng thống kê và danh sách dưới dạng CSV, các vấn đề BCF, bảng tính COBie, tệp họ, và các bản quét đã đăng ký dưới dạng LAS hoặc E57. BimCraft không lưu DWG, DXF hay tệp dự án, và không bao giờ thay đổi các tệp bạn đã mở.

:::chromium
Chrome và Edge lưu tệp tải xuống vào thư mục đặt trong cài đặt, thường là thư mục Downloads. Để được hỏi nơi lưu mỗi tệp, hãy bật "Hỏi nơi lưu mỗi tệp trước khi tải xuống" trong cài đặt tải xuống của trình duyệt.
:::

:::firefox
Firefox lưu vào thư mục Downloads, trừ khi bạn đặt trong cài đặt là "Luôn hỏi bạn nơi lưu tệp".
:::

:::safari
Safari lưu vào Downloads, trừ khi bạn chọn thư mục khác trong **Safari > Cài đặt > Chung > Vị trí tải tệp xuống**.
:::

## Lưu lần thứ hai

Mỗi lần lưu tải xuống toàn bộ mô hình với **mọi chỉnh sửa từ khi bạn mở nó**, không chỉ các chỉnh sửa sau lần lưu trước. Danh sách {{ui:Thay đổi}} trống trở lại sau mỗi lần lưu, nên bạn không thể hoàn tác vượt qua một lần lưu. Để bắt đầu lại từ bản gốc, hãy mở lại tệp gốc.

## Tệp lớn và bộ nhớ

- **IFC**: tệp được đọc đầy đủ vào bộ nhớ của thẻ, và hình học 3D chiếm thêm bộ nhớ. Một mô hình vài trăm MB có thể quá sức với máy tính xách tay. Trên 1.5 triệu tam giác, cạnh bị tắt để tiết kiệm bộ nhớ ("Cạnh đã tắt với mô hình rất lớn").
- **Tệp dự án** không được đọc đầy đủ. BimCraft chỉ đọc các phần nhỏ cần thiết, khoảng 40 KB đến 100 KB dù tệp lớn đến đâu, nên một mô hình trung tâm 500 MB trên ổ mạng mở chỉ trong chốc lát.
- **DWG và DXF** được đọc đầy đủ. Bản vẽ rất lớn hiển thị "Bản vẽ này rất lớn; chỉ hiển thị một phần."
- **Thư mục** mở được tối đa 20.000 tệp. Chỉ đọc vài kilobyte mà mỗi thẻ mô hình cần.

Xem [Trình duyệt, thiết bị và bộ nhớ](topic:platforms) để biết thêm.

## Trực tuyến và ngoại tuyến

Mở tệp không bao giờ cần internet. Một trình đọc tải từ trang web lần đầu bạn cần: bộ máy IFC, lần đầu bạn mở mô hình IFC ("Đang khởi động bộ máy IFC…"). Trình đọc DWG và DXF là một phần của ứng dụng.

:::offline
Bạn đang ngoại tuyến. Nếu nút trên thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}, mọi định dạng vẫn mở như thường. Nếu không, mô hình IFC không thể mở trừ khi một mô hình đã được mở trong thẻ này: hãy kết nối lại trước. Xem [Trực tuyến và ngoại tuyến](topic:online-offline).
:::

Để dùng BimCraft không cần kết nối, nhấn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng khi bạn đang trực tuyến và đợi đến khi thấy {{ui:Sẵn sàng ngoại tuyến}}. Bản sao đã lưu khoảng 33 MB; nó gồm bộ máy IFC, nên các mô hình IFC cũng mở được khi ngoại tuyến. [Làm việc ngoại tuyến](common:offline) giải thích bản sao đã lưu nói chung.

## Lưu trên đám mây

Lưu trên đám mây chưa có sẵn. Hãy lưu các bản đã chỉnh sửa trên máy tính của bạn hoặc máy chủ tệp của văn phòng, như bất kỳ tệp nào khác. Xem [Tệp của bạn](common:your-files).
