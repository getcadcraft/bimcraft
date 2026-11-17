---
title: Khắc phục sự cố
summary: Các thông báo BimCraft hiển thị, nguyên nhân và cách xử lý, khi mở tệp, thư mục, mô hình 3D, bản vẽ và chỉnh sửa.
keywords: sự cố, lỗi, không hoạt động, không mở được, thất bại, chưa đầy đủ, hỏng, chậm, treo, trống, thiếu, thông báo, trợ giúp
from: 1e5a79fc
---

Các thông báo xuất hiện trên dòng trạng thái ở dưới cùng của khu vực làm việc, bằng màu đỏ khi có gì đó thất bại. Tìm thông báo bên dưới.

## Mở tệp

**"*name* không phải là tệp IFC, RVT, RFA, DWG hay DXF."**
BimCraft không nhận ra tệp. Kiểm tra phần mở rộng và xem tệp có rỗng không. Tệp PDF, hình ảnh và tệp văn phòng không mở được.

**".ifczip chưa được hỗ trợ. Lưu hoặc xuất mô hình thành tệp .ifc thuần túy."** (cũng áp dụng cho `.ifcxml`)
Giải nén `.ifczip` (đó là một tệp zip thông thường chứa một `.ifc`) hoặc xuất IFC thuần túy.

**"… là tệp dự án mà BimCraft chưa đọc được."**
Một tệp `.pln`, `.pla`, `.tpl` hoặc `.bpn`. Xuất IFC hoặc DWG từ nó rồi mở tệp đó: xem [Mở tệp dự án .pln và .pla](topic:pln-project-files).

**"Không thể đọc tệp IFC này."**
Tệp IFC bị hỏng hoặc thực ra không phải IFC. Mở nó trong trình soạn thảo văn bản: một tệp IFC thật bắt đầu bằng `ISO-10303-21;`. Xuất lại tệp.

**"Tệp chưa đầy đủ: nó có … MB, nhưng chỉ mục của chính nó trỏ tới dữ liệu ít nhất đến … MB. …"**
Tệp dự án hoặc tệp họ bị cắt cụt khi đang được sao chép, tải lên hoặc đồng bộ. Một tệp trên ổ đám mây ở chế độ "chỉ trực tuyến" trông cũng như vậy. Một tệp mở riêng lẻ vẫn mở được, với thông báo này ở đầu thẻ và "Đang hiển thị phần đã khôi phục; sao chép lại bản gốc để có toàn bộ mô hình.": thẻ chỉ hiển thị các phần mà mọi byte đều nằm trong tệp và liệt kê phần còn lại dưới **Không có trong tệp**. Đặt tệp dùng được ngoại tuyến trong ổ đám mây của bạn, hoặc sao chép lại bản gốc, rồi mở lại. Trong một thư mục, BimCraft thay vào đó hiển thị bản sao lưu hoàn chỉnh mới nhất.

**"… Danh mục nội dung của chính tệp cũng nằm trong phần bị thiếu, nên không có gì trong đó mở được."**
Tệp bị cắt quá sớm đến mức ngay cả danh mục nội dung cũng không còn. Không thể khôi phục gì từ bản sao này. Sao chép lại bản gốc và mở lại.

**"Tệp hợp chất này không có luồng BasicFileInfo, nên nó không phải tệp Revit."**
Tệp là một tệp hợp chất thuộc loại khác (các tài liệu văn phòng cũ dùng cùng loại vùng chứa). Kiểm tra xem bạn đã chọn đúng tệp chưa.

**"Vẫn đang xử lý tệp trước…"**
BimCraft vẫn đang bận với tệp hoặc thư mục trước. Chờ dòng trạng thái xong, rồi thử lại.

**Hộp chọn tệp làm mờ tệp của bạn.**
Hộp chọn chỉ cung cấp `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` và `.dxf`. Thay vào đó, kéo các tệp khác vào trang, và BimCraft sẽ cho bạn biết liệu nó có đọc được chúng không.

## Mở thư mục

**"Thư mục này có hơn 20,000 tệp. Chọn một thư mục nhỏ hơn, chẳng hạn một dự án."**
Bạn đã chọn một thư mục ở mức quá cao, chẳng hạn cả một ổ đĩa. Chọn một thư mục dự án.

**"Trình duyệt không cấp quyền truy cập *name*. Chọn lại bằng Mở thư mục."**
Bạn đã nhấp {{ui:Mở lại}} trên một thư mục gần đây và quyền của trình duyệt bị từ chối hoặc đã hết hạn. Chọn lại thư mục, hoặc kéo nó vào.

**Trình duyệt nói sẽ "tải lên" các tệp.**
Đó là cách diễn đạt riêng của trình duyệt khi giao tệp cho một trang. BimCraft không gửi chúng đi đâu cả. Kéo thư mục vào để tránh câu hỏi này.

**Không có gì xảy ra trên điện thoại hoặc máy tính bảng.**
Nhiều trình duyệt di động không thể chọn thư mục. Mở từng tệp riêng lẻ, hoặc dùng máy tính.

## Lần đầu tải bộ máy IFC

**Dòng trạng thái vẫn ở "Đang khởi động bộ máy IFC…", hoặc hiển thị lỗi như "Failed to fetch".**
Không thể tải bộ máy IFC. Bạn có thể đang ngoại tuyến, hoặc tường lửa hay trình chặn nội dung đang chặn nó.

:::offline
Bạn đang ngoại tuyến. Nếu nút của thanh ứng dụng không hiển thị {{ui:Sẵn sàng ngoại tuyến}}, bộ máy IFC chưa bao giờ được lưu trong trình duyệt này. Kết nối lại, mở lại tệp, rồi nhấp {{ui:Lưu để dùng ngoại tuyến}} để nó hoạt động ngoại tuyến lần sau. Xem [Trực tuyến và ngoại tuyến](topic:online-offline).
:::

:::online
Tải lại trang và thử lại. Trên mạng công việc, hãy nhờ bộ phận CNTT cho phép các tệp `.wasm` của trang.
:::

## Lưu để dùng ngoại tuyến

**Nút hiển thị {{ui:Không thể lưu}}.**
Một số tệp chưa tải xong, thường do kết nối bị ngắt. Kiểm tra kết nối và nhấp nút lần nữa. Bản ngoại tuyến trước đó vẫn được giữ cho đến khi bản mới hoàn tất.

**Nút hiển thị {{ui:Không dùng được chế độ ngoại tuyến}}.**
Cửa sổ này không thể giữ bản ngoại tuyến, chẳng hạn cửa sổ riêng tư hoặc máy tính công việc được quản lý. Xem [Làm việc ngoại tuyến](common:offline).

**Nút vẫn ở "Đang lưu *n* trên *m*" một lúc.**
Bản sao của BimCraft khoảng 11 MB, phần lớn là bộ máy IFC. Giữ thẻ mở cho đến khi nó hiển thị {{ui:Sẵn sàng ngoại tuyến}}.

**BimCraft mở ở chế độ ngoại tuyến nhưng có vẻ đã cũ.**
Bản đã lưu của bạn là từ lần truy cập trước. Khi trực tuyến, nhấp {{ui:Sẵn sàng ngoại tuyến}} và chọn {{ui:Lưu lại (lấy bản mới nhất)}}.

## Khung nhìn 3D

**Mô hình không nằm ở chỗ bạn mong đợi, hoặc nó quá nhỏ.**
Nhấn {{key:F}} hoặc nhấp {{ui:Vừa khung}}. Vừa khung luôn bao quát mọi thứ trong mô hình, kể cả các tầng bạn đã bỏ đánh dấu và các phần tử lạc xa tòa nhà, nên tòa nhà có thể trông nhỏ. Sau đó phóng to.

**Nhấp không chọn được gì.**
Giữ chuột yên khi nhấp: kéo nhẹ sẽ xoay khung nhìn. Các phần tử trên tầng đã bỏ đánh dấu không thể chọn được. Khi {{ui:Không gian}} bật, các không gian xuyên thấu được chọn trước những gì nằm bên trong chúng.

**Nút {{ui:Cạnh}} bị làm mờ: "Cạnh bị tắt cho các mô hình rất lớn".**
Mô hình có hơn 1.5 triệu tam giác. Các cạnh được để tắt để tiết kiệm bộ nhớ.

**Thẻ chạy chậm, trắng, hoặc hiển thị trang báo lỗi treo của trình duyệt.**
Mô hình quá lớn so với bộ nhớ mà trình duyệt cấp cho thẻ. Đóng các thẻ khác và tải lại. Xuất một tệp IFC nhỏ hơn: một tòa nhà, một bộ môn hoặc ít tầng hơn. Xem [Trình duyệt, thiết bị và bộ nhớ](topic:platforms).

**Khung nhìn 3D vẫn trống.**
WebGL có thể đã bị tắt hoặc bị chặn. Trong cài đặt của trình duyệt, bật tăng tốc phần cứng (hoặc tăng tốc đồ họa) và khởi động lại trình duyệt.

## Chỉnh sửa IFC

**"Dùng một số."** Giá trị là số. Gõ một số thuần túy không có đơn vị, chẳng hạn `2.4`.

**"Dùng một số nguyên."** Giá trị là một số đếm hoặc số nguyên. Xóa phần thập phân.

**"Chỉ có thể chỉnh sửa thuộc tính một giá trị."** Danh sách, liệt kê và khối lượng chỉ để đọc.

**{{key:Mod+S}} mở cửa sổ "Lưu trang" của trình duyệt.**
Không có thay đổi chưa lưu, nên BimCraft để phím đó cho trình duyệt. Đóng cửa sổ.

**{{key:Mod+Z}} không làm gì cả.**
Nó chỉ hoạt động khi bạn có thay đổi chưa lưu và không đang gõ trong một ô nhập. Sau khi lưu, không còn gì để hoàn tác.

**Danh sách {{ui:Thay đổi}} vẫn hiển thị các chỉnh sửa sau khi bạn đã bỏ chúng và mở một bản vẽ hoặc một thư mục.**
Khi bạn trả lời câu hỏi "Bỏ chúng?" bằng OK rồi mở thứ khác ngoài mô hình IFC, các chỉnh sửa cũ vẫn được giữ trong bộ nhớ và {{ui:Lưu thành IFC}} vẫn sẽ lưu chúng. Để thực sự bắt đầu lại, mở lại IFC gốc, hoặc tải lại trang.

**Chỉnh sửa của bạn đã thay đổi nhiều phần tử hơn những gì bạn chọn.**
Bạn đã đổi một thuộc tính trong một bộ được đánh dấu "(type)". Thuộc tính kiểu áp dụng cho mọi phần tử của kiểu đó. Nhấp {{ui:Hoàn tác}}. Xem [Thay đổi thuộc tính kiểu cho mọi phần tử của một kiểu](topic:type-vs-instance).

## Bản vẽ

**"*name* không thể đọc. Tệp có thể bị hỏng, hoặc được lưu ở định dạng mà trình đọc chưa xử lý được (…)."**
Lưu bản vẽ từ chương trình đã tạo ra nó dưới dạng DWG cũ hơn (2018 hoặc cũ hơn) hoặc DXF, rồi thử lại.

**"Bản vẽ này không có gì để hiển thị."** hoặc **"*name* là một bản vẽ rỗng: nó không có đường, văn bản hay khối nào."**
Bản vẽ rỗng, hoặc chỉ chứa những thứ BimCraft chưa vẽ được (xem **Chưa vẽ** ở bên phải).

**"Bản vẽ này rất lớn; chỉ một phần của nó được hiển thị."**
BimCraft đã ngừng vẽ để giữ phản hồi nhanh. Tắt các lớp bạn không cần, hoặc mở các tờ cần thiết từ một bản vẽ nhỏ hơn.

**Thiếu một phần của tờ bản vẽ.**
Có thể thiếu các bản vẽ liên kết: xem mục **Bản vẽ liên kết** ở bên phải. Xem [Tìm bản vẽ và hình ảnh liên kết](topic:dwg-linked-files). Các lớp cũng có thể đang tắt: nhấp {{ui:Bật tất cả}}.

**Một hình ảnh hiển thị như khung trống.**
Tệp của nó không được tìm thấy, hoặc nó là TIFF ("TIFF không thể hiển thị trong trình duyệt"). Thêm một bản sao PNG hoặc JPEG bằng {{ui:Thêm ảnh…}}.

**Cuộn trên bàn di chuột của bạn thì phóng to thay vì di chuyển bản vẽ.**
Đó là cách bản vẽ hoạt động trong BimCraft. Nhấp và kéo để di chuyển khung nhìn.

## Vẫn gặp sự cố

Đọc [Những gì chưa được xây dựng](topic:not-built-yet): thứ bạn đang tìm có thể không tồn tại trong bản dựng này.
