---
title: Từ tệp dự án đến BimCraft qua IFC
summary: Các cài đặt xuất IFC mở tốt nhất trong BimCraft (phiên bản, bộ thuộc tính, số lượng cơ bản, phòng, mô hình liên kết, tọa độ), cách mở kết quả, và những gì quá trình xuất giữ lại.
keywords: xuất, xuất ifc, rvt sang ifc, chuyển đổi, 3d, hình học, ifc2x3, ifc4, khung nhìn phối hợp, khung nhìn tham chiếu, khung nhìn chuyển giao thiết kế, bộ thuộc tính, số lượng cơ bản, phòng, không gian, tệp liên kết, tọa độ dùng chung, điểm khảo sát, điểm cơ sở dự án, cài đặt
from: 3efd5fc9
---

## Bạn sẽ làm gì

Biến một tệp dự án thành tệp IFC mà bạn có thể xoay, xem, kiểm tra và chỉnh sửa trong BimCraft. BimCraft chưa đọc được mô hình 3D bên trong tệp `.rvt`, nên việc xuất diễn ra trong chương trình đã tạo tệp (Revit); BimCraft mở kết quả.

## Các bước

1. Mở dự án trong chương trình đã tạo nó. Thẻ của BimCraft ghi tên bản phát hành đã lưu nó.
2. Mở một khung nhìn 3D thể hiện những gì bạn muốn xuất.
3. Chọn **Tệp > Xuất > IFC**.
4. Trong hộp thoại xuất, chọn một cấu hình (hoặc **Sửa cấu hình…**) với các cài đặt dưới đây.
5. Chọn thư mục và tên tệp, rồi xuất.
6. Trong BimCraft, nhấn {{ui:Chọn tệp}} và chọn tệp `.ifc` mới. Các mô hình liên kết được xuất thành tệp riêng sẽ mở vào cùng một cảnh bằng {{ui:Thêm mô hình}}.

## Cài đặt hoạt động tốt nhất ở đây

| Cài đặt trong trình xuất | Chọn | Lý do |
|---|---|---|
| Phiên bản IFC | **IFC4 Reference View** để xem, kiểm tra và bóc khối lượng; **IFC2X3 Coordination View 2.0** khi người khác cần IFC2X3 | Cả hai đều mở đầy đủ. **IFC4 Design Transfer View** cũng mở được, với hình dạng chính xác hơn, nhưng tệp lớn hơn và chậm hơn. |
| Loại tệp | **IFC** (thường) | BimCraft không mở `.ifczip` hoặc `.ifcxml`. |
| Pha / cấu kiện hiển thị | Pha bạn muốn, và **Chỉ xuất cấu kiện hiển thị trong khung nhìn** khi bạn thiết lập khung nhìn 3D cho việc đó | Bỏ qua những gì bạn đã ẩn có chủ đích. |
| Bộ thuộc tính | **Xuất bộ thuộc tính Revit** và **Xuất bộ thuộc tính IFC chung** | Chúng trở thành các bộ thuộc tính mà BimCraft hiển thị trong {{ui:Thuộc tính}}, và được {{ui:Tìm}}, {{ui:Màu}} và {{ui:Kiểm tra mô hình}} sử dụng. |
| Số lượng cơ bản | **Xuất số lượng cơ bản** | {{ui:Tổng khối lượng}} và các bảng thống kê dùng chúng (chiều dài, diện tích, thể tích) thay vì ước đoán. |
| Phòng và khu vực | **Xuất phòng trong khung nhìn 3D** (hoặc tùy chọn Phòng / Không gian) | Phòng đến dưới dạng không gian: nhấn {{ui:Không gian}} để xem chúng. |
| Tệp liên kết | **Xuất tệp liên kết thành IFC riêng** | Mỗi liên kết thành một tệp riêng; mở chúng cùng nhau bằng {{ui:Thêm mô hình}} và chúng sẽ khớp nhau. |
| Cơ sở tọa độ | **Tọa độ dùng chung** (hoặc điểm khảo sát) | Khi đó tệp mang vị trí trên bản đồ (IfcMapConversion), nên Đo › Vị trí, lớp bản đồ trên mặt đất và đám điểm được đặt theo tọa độ bản đồ đều hoạt động. Điểm cơ sở dự án giữ mô hình gần gốc tọa độ nhưng không có vị trí trên bản đồ. |
| Tách tường và cột theo tầng | Bật, khi bạn bóc khối lượng theo tầng | Phần của mỗi tầng là một cấu kiện riêng. |

## Bạn sẽ thấy gì

Mô hình trong 3D, với các tầng lấy từ cao độ của dự án và thông tin dự án trong bảng {{ui:Tệp}}. **Xuất từ** cho biết trình xuất.

## Những gì quá trình xuất giữ lại và không giữ lại

- **Được giữ**: hình học, các tầng, loại cấu kiện, tên, kiểu, hầu hết tham số (dưới dạng bộ thuộc tính), số lượng cơ bản khi được yêu cầu, phòng dưới dạng không gian, và vị trí bản đồ khi dùng tọa độ dùng chung.
- **Không được giữ**: khung nhìn, tờ vẽ, chú thích, họ cấu kiện ở dạng có thể chỉnh sửa, workset và tùy chọn thiết kế. Một tệp IFC là ảnh chụp các cấu kiện của mô hình, không phải dự án. Với các tờ vẽ, hãy xuất DWG và mở nó trong khung nhìn 2D.

## Lỗi thường gặp

- **Thiếu tham số trong BimCraft.** Bật các tùy chọn bộ thuộc tính ở trên và xuất lại.
- **Thiếu phòng.** Bật tùy chọn phòng, rồi nhấn {{ui:Không gian}}.
- **Lưu thành `.ifczip`.** Chọn IFC thường, hoặc giải nén `.ifczip`.
- **Không có vị trí bản đồ.** Xuất với tọa độ dùng chung; kiểm tra điểm khảo sát của dự án đã được đặt.
- **Mong chỉnh sửa được đưa ngược lại.** Các chỉnh sửa bạn lưu trong BimCraft đi vào một tệp IFC mới, không đi vào tệp dự án.
