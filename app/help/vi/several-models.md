---
title: Xem nhiều mô hình IFC cùng nhau
summary: Thêm các tệp IFC khác vào cảnh, như kiến trúc, kết cấu và hệ thống kỹ thuật, xem chúng trong cùng tọa độ, di chuyển một mô hình, ẩn một mô hình, và chọn mô hình nào bạn chỉnh sửa.
keywords: liên kết, liên kết mô hình, mô hình liên kết, nhiều mô hình, nhiều tệp, kết hợp, chồng lớp, phối hợp, bộ môn, kết cấu, mep, hệ thống kỹ thuật, khoảng lệch, di chuyển mô hình, mô hình đang hoạt động, thêm mô hình
from: df0efbbf
---

## Bạn sẽ làm gì

Xem các mô hình của nhiều bộ môn ở một nơi: mô hình kiến trúc cùng với các mô hình kết cấu và hệ thống kỹ thuật. Mỗi mô hình vẫn là một tệp riêng; BimCraft chỉ hiển thị chúng cùng nhau.

## Các bước

1. Mở mô hình IFC đầu tiên như bình thường.
2. Trong {{ui:Mô hình}} bên trái, nhấp {{ui:Thêm mô hình…}} và chọn một hoặc nhiều tệp IFC. Mỗi tệp xuất hiện trong danh sách và trong khung nhìn 3D.
3. Bỏ chọn một mô hình để ẩn nó; chọn lại để hiện.
4. Nếu một mô hình nằm sai vị trí (một điểm khảo sát khác), nhấp {{ui:Di chuyển}} bên dưới nó, nhập mức dịch chuyển theo X, Y và Z bằng mét, rồi nhấp {{ui:Áp dụng}}.
5. Mô hình có chấm tròn là mô hình bạn chỉnh sửa. Nhấp chấm tròn của một mô hình khác để chỉnh sửa mô hình đó.
6. Nhấp × bên cạnh một mô hình để loại nó khỏi cảnh.

## Mở các mô hình của nhóm

Khi mô hình đang mở là một tệp đám mây trong dự án nhóm, {{ui:Mở các mô hình của nhóm}} xuất hiện dưới danh sách. Nó mở các mô hình IFC khác của dự án bên cạnh mô hình này, mỗi mô hình được dịch chuyển theo khoảng lệch mà dự án đã đặt. Các mô hình bị ẩn đối với bạn sẽ không được mở và được đếm; một mô hình mà dự án xoay sẽ được mở không xoay và cũng được đếm; các tệp không phải IFC (ví dụ DWG) bị bỏ qua và được nêu tên trong dòng trạng thái. Một mô hình đã mở sẽ không bao giờ được mở hai lần. Nút này ẩn đối với tệp không thuộc dự án nhóm.

## Bạn sẽ thấy gì

- Mọi mô hình ở tọa độ của mô hình đầu tiên, như tệp của nó đặt. Các mô hình xuất từ cùng một dự án khớp nhau mà không cần di chuyển gì.
- Chọn một cấu kiện của mô hình mà bạn không chỉnh sửa sẽ hiển thị thuộc tính của nó ở chế độ chỉ đọc, kèm {{ui:Chỉnh sửa mô hình đó}} để chuyển.
- {{ui:Cây mô hình}}, {{ui:Tầng}}, {{ui:Màu}}, danh sách {{ui:Thay đổi}}, việc đặt mục thư viện và {{ui:Lưu thành IFC}} đều hoạt động trên mô hình bạn chỉnh sửa. Ẩn, cô lập, xuyên thấu và {{ui:Chọn tất cả}} hoạt động trên mọi mô hình.
- {{ui:Lưu thành IFC}} tải xuống mô hình bạn chỉnh sửa, chỉ với các thay đổi của nó.

## Lỗi thường gặp

- **Một mô hình ở xa hoặc bị thiếu.** Tệp của nó dùng tọa độ khác. Dùng {{ui:Vừa khung}} để tìm, rồi {{ui:Di chuyển}} để đưa nó vào vị trí.
- **Xóa hoặc Sao chép bị mờ trên một cấu kiện đã chọn.** Nó thuộc về mô hình khác: chuyển sang mô hình đó trước.
- **Mở tệp bằng Chọn tệp đã thay thế mọi thứ.** Thao tác đó tạo một cảnh mới. Dùng {{ui:Thêm mô hình…}} để thêm tệp vào cảnh bạn đang có.

## Tiếp theo

- [Ẩn, cô lập và xuyên thấu các cấu kiện](topic:hide-and-isolate)
- [Tô màu cấu kiện theo thuộc tính](topic:color-by-property)
