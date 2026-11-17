---
title: Đọc tệp dự án hoặc họ
summary: Mở tệp .rvt, .rfa, .rte hoặc .rft và đọc phiên bản, chia sẻ công việc, thông tin dự án, tham số họ, liên kết và ảnh xem trước, mà không cần chương trình đã tạo ra nó.
keywords: rvt, rfa, rte, rft, tệp dự án, họ, phiên bản, bản dựng, phiên bản nào, build, chia sẻ công việc, trung tâm, thông tin dự án, xem trước, ảnh thu nhỏ, liên kết
from: df3600e1
---

## Bạn sẽ làm gì

Tìm xem trong một tệp dự án hoặc họ có những gì mà không cần mở nó trong Revit: phiên bản nào đã lưu nó, nó có được chia sẻ công việc không, thông tin dự án, và nó liên kết tới những gì. Hữu ích khi một tệp đến từ người khác và bạn cần biết nên mở bằng phiên bản nào.

## Các bước

1. Nhấp {{ui:Chọn tệp}}.
2. Chọn một tệp `.rvt`, `.rfa`, `.rte` hoặc `.rft`.
3. Đợi một lát. Dòng trạng thái ghi "Đang đọc tệp…" rồi "Đã mở *tên tệp*".
4. Nhìn phần trên của thẻ: ảnh xem trước được lưu trong tệp, loại tệp và phiên bản đã lưu nó, cùng tên dự án.
5. Cuộn xuống để đọc các phần của thẻ.

## Bạn sẽ thấy gì

Thẻ ở giữa, với các phần sau khi tệp có chúng:

| Phần | Cho bạn biết gì |
|---|---|
| Tệp | Tên tệp, dung lượng, loại (dự án, mẫu dự án, họ hoặc mẫu họ), phiên bản và bản dựng đã lưu nó, chia sẻ công việc, đường dẫn của mô hình trung tâm, nơi lưu lần cuối, ai đã lưu, ngôn ngữ vùng và GUID tài liệu |
| Thông tin dự án | Các trường riêng của dự án, như tên, số, khách hàng, địa chỉ và trạng thái. Các trường vẫn để giá trị mặc định của dự án mới bị bỏ qua. |
| Họ, Họ: … | Với một họ: tên, danh mục, phiên bản, lần cập nhật cuối và các tham số của nó, theo từng nhóm |
| Tệp được liên kết và tham chiếu | Mọi mô hình liên kết, liên kết CAD, hình ảnh và bảng ghi chú (keynote) mà tệp trỏ tới, cùng đường dẫn đã lưu |

Ở bên trái, bảng {{ui:Tệp}} lặp lại các thông tin chính và thêm **Đã đọc**: phần tệp mà BimCraft thực sự đọc, thường khoảng 40 KB của một tệp nhiều megabyte. Ở bên phải, bảng {{ui:Thuộc tính}} cho biết thuộc tính cấu kiện cần mô hình 3D.

## Vì sao không có 3D

Mô hình 3D và các cấu kiện bên trong tệp dự án được lưu theo một định dạng không có tài liệu. BimCraft chỉ đọc các phần của tệp đã có tài liệu hoặc rõ ràng dễ đọc: thông tin tệp, thông tin dự án, dữ liệu họ, danh sách liên kết và ảnh xem trước. Nó không đoán phần còn lại. Để xem mô hình 3D và đọc thuộc tính cấu kiện, xuất IFC từ chương trình đã tạo ra tệp. Xem [Đưa tệp dự án vào 3D qua IFC](topic:rvt-to-ifc).

## Lỗi thường gặp

- **Tưởng sẽ có 3D.** Xem trên.
- **Liên kết chỉ hiện đường dẫn đã lưu.** Một tệp mở riêng không thể kiểm tra liên kết của nó có tồn tại không. Thay vào đó hãy mở thư mục chứa nó, và BimCraft đánh dấu mỗi liên kết là đã tìm thấy hoặc chưa: [Mở toàn bộ thư mục dự án](topic:open-project-folder).
- **"Tệp này không đầy đủ…"** Tệp bị cắt khi đang được chép, tải lên hoặc đồng bộ. Một tệp trên ổ đám mây vẫn ở trạng thái "chỉ trực tuyến" cũng gây ra điều này. BimCraft vẫn mở nó và chỉ hiển thị phần đã khôi phục được: một thông báo màu hổ phách ở đầu thẻ, một mục **Đã khôi phục từ tệp này** liệt kê các phần mà mọi byte đều có trong tệp, và **Không có trong tệp** cho phần còn lại. Không có gì được điền thay cho phần thiếu, nên phiên bản, ảnh xem trước hoặc thông tin dự án có thể thiếu khi chúng được lưu sau điểm bị cắt. Nếu ngay cả danh sách nội dung của tệp cũng bị cắt, không thể mở gì cả. Sao chép lại bản gốc và mở lại để có tệp đầy đủ.
- **"Tệp này không có ảnh xem trước".** Một số tệp được lưu không kèm ảnh. Điều đó là bình thường.
- **Mở nhầm bản sao lưu.** Tệp đặt tên như `Tower.0004.rvt` là các bản sao lưu được đánh số. Mở thư mục sẽ nhóm chúng với mô hình của chúng.
