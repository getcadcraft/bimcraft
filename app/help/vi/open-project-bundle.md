---
title: Mở gói dự án
summary: Gói dự án là một tệp zip chứa mô hình, các khung nhìn, các bố cục và nhóm thuộc tính của nó. Mở gói, hiển thị một khung nhìn với tầng và lớp của nó, mở một bố cục, và xem thuộc tính trong các nhóm riêng của dự án.
keywords: gói, gói dự án, ccbundle, zip, khung nhìn, bản đồ khung nhìn, bố cục, sổ bố cục, tổ hợp lớp, nhóm thuộc tính, tiêu chuẩn, pln, mẫu
from: b5b86e8f
---

## Bạn sẽ làm gì

Mở một **gói dự án** (`.ccbundle.zip`) và làm việc với dự án theo cách nó đã được tổ chức: các khung nhìn, bố cục và nhóm thuộc tính, trên nền mô hình.

Một gói chứa:

- mô hình dưới dạng IFC,
- các bố cục dưới dạng PDF và DWG,
- một danh sách những gì IFC không giữ lại: các khung nhìn (mỗi khung nhìn kèm tầng, tổ hợp lớp và tỷ lệ), các bố cục và bản vẽ đặt trên đó, định nghĩa thuộc tính trong các nhóm của chúng, phân loại, và các tiêu chuẩn như lớp, bộ bút vẽ, kiểu đường, kiểu tô, bề mặt và vật liệu tổ hợp.

Gói được tạo bởi một tập lệnh mã nguồn mở chạy bên trong Archicad, và tập lệnh yêu cầu chính Archicad cung cấp các danh sách này. BimCraft không bao giờ đọc trực tiếp tệp `.pln` hoặc `.tpl`; xem [Mở tệp dự án .pln và .pla](topic:pln-project-files).

## Tạo gói

Tập lệnh đang ở giai đoạn xem trước: nó chưa được thử trên mọi phiên bản Archicad. Lấy tập lệnh tại [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Bạn cần Archicad 24 trở lên và Python 3.8 trở lên; không cần cài thêm gì khác.

1. Lưu `archicad_bundle.py` vào một thư mục, ví dụ `C:\cc-bundle`.
2. Trong Archicad, mở dự án và tạo một bộ xuất bản có tên đúng là **CadCraft bundle**: khung nhìn 3D dưới dạng IFC, mọi bố cục dưới dạng PDF, và mọi bố cục lại dưới dạng DWG, được xuất ra các tệp trên đĩa trong một thư mục phẳng.
3. Khi dự án đang mở, chạy `python archicad_bundle.py --probe --out .` một lần. Lệnh này chỉ đọc, và ghi `probe.json`.
4. Chạy `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (dùng bộ dịch IFC mà bạn đã chọn). Archicad xuất bộ và tập lệnh ghi `<project>.ccbundle.zip`.

Nếu xuất bản qua tập lệnh bị lỗi, hãy xuất bộ bằng tay rồi chạy `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README của kho mã có mọi tùy chọn. Nếu có gì không được đưa vào, hãy mở một vấn đề tại đó và đính kèm `probe.json`.

## Mở gói

1. Nhấp {{ui:Chọn tệp}}, hoặc thả `.ccbundle.zip` lên BimCraft. Trong một thư mục bạn đã mở bằng {{ui:Mở thư mục}}, các gói được liệt kê dưới **Gói dự án**; nhấp vào tên gói.
2. Mô hình mở như bất kỳ IFC nào, và mục **Gói dự án** xuất hiện ở bên trái, dưới thông tin của tệp.

Không có gì được tải lên: gói được đọc trên máy tính của bạn, từng tệp một, nên một mô hình lớn không bị sao chép hai lần.

## Hiển thị một khung nhìn

Dưới **Khung nhìn**, các khung nhìn được nhóm theo thư mục mà chúng có trong dự án. Nhấp vào tên một khung nhìn:

- **Mặt bằng** chỉ hiển thị tầng của nó, nhìn từ trên xuống.
- **Tổ hợp lớp** của nó ẩn các phần tử nằm trên những lớp mà tổ hợp đó ẩn. Dòng trạng thái cho biết đã ẩn bao nhiêu phần tử.
- **Tỷ lệ** của nó được hiển thị cạnh tên và trong dòng trạng thái.
- **Khung nhìn 3D** hiển thị mọi tầng.

Để hiện lại tất cả, dùng {{ui:Hiện tất cả}} trong {{ui:Hiển thị}} và đánh dấu mọi tầng.

:::note
BimCraft tìm các lớp thông qua phần gán lớp của tệp IFC. Nếu IFC được xuất mà không có chúng, một tổ hợp lớp sẽ không ẩn gì cả, và dòng trạng thái ghi 0 phần tử bị ẩn.
:::

## Mở một bố cục

Dưới **Bố cục**, mỗi bố cục hiển thị số, tên, khổ giấy và các khung nhìn đặt trên đó.

- **PDF** lưu tệp PDF của bố cục từ gói.
- **DWG** mở bản vẽ của bố cục trong khung nhìn 2D. Nhấp bất kỳ khung nhìn nào để quay về mô hình.
- **Mở trong …** gửi tệp của bố cục đến ứng dụng xử lý nó, trong một thẻ mới: PDF sang MarkupCraft, DWG sang CadCraft. Nút chỉ hiện khi ứng dụng đó đang mở cạnh BimCraft. Tệp được đọc từ gói khi thẻ tải, và không có gì được tải lên.

Bố cục không có cả hai sẽ hiển thị **Không có tệp trong gói**.

## Xem thuộc tính theo nhóm của dự án

Chọn một phần tử. **Nhóm thuộc tính** hiển thị các thuộc tính của nó dưới những nhóm mà dự án đã định nghĩa, được ghép qua bộ thuộc tính và tên mà định nghĩa đưa ra cho IFC, hoặc nếu không thì theo tên. Phần còn lại vẫn nằm trong {{ui:Thuộc tính}} như thường lệ. **Định nghĩa thuộc tính** liệt kê mọi định nghĩa cùng nhóm, kiểu và tên IFC của nó.

## Tiêu chuẩn và ghi chú

- **Tiêu chuẩn** đếm các lớp, tổ hợp lớp, bộ bút vẽ, kiểu đường, kiểu tô, bề mặt, vật liệu tổ hợp và vật liệu trong gói.
- **Ghi chú** liệt kê những gì tập lệnh không lấy được từ phiên bản Archicad đó, mọi trường mà BimCraft không đọc được, và mọi tệp mà gói nêu tên nhưng không chứa.

## Khắc phục sự cố

- **"… là tệp zip nhưng không phải gói dự án."** Tệp zip không có `manifest.json`. Giải nén và mở tệp `.ifc` bên trong.
- **"… là gói dự án mới hơn mức BimCraft đọc được."** Cập nhật BimCraft.
- **"… không chứa mô hình mà manifest của nó nêu tên."** Tệp zip bị cắt hoặc đã bị sửa. Tạo lại gói.
- **Một khung nhìn hiển thị mọi tầng.** Tầng của nó không có trong IFC của mô hình (dòng trạng thái cho biết điều này). Kiểm tra rằng việc xuất IFC đã bao gồm tầng đó.

Xem thêm [Làm việc giữa hai chương trình BIM](topic:two-bim-programs) và [BimCraft đọc gì từ mỗi định dạng](topic:file-formats).
