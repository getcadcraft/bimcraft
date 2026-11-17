---
title: Bản đồ trên mặt đất dưới mô hình
summary: Đặt bản đồ đường phố hoặc ảnh chụp từ trên không lên mặt đất bên dưới một mô hình IFC có tọa độ địa lý, lấy từ ô bản đồ, dịch vụ bản đồ hoặc một ảnh kèm tệp world file.
keywords: bản đồ, lớp bản đồ, bản đồ nền, ảnh chụp từ trên không, vệ tinh, mặt bằng công trường, mặt đất, ô bản đồ, xyz, wms, wmts, dịch vụ bản đồ, tệp world file, tọa độ địa lý, ifcmapconversion, hệ tọa độ phẳng, epsg, bối cảnh công trường
from: 84e2e9df
---

## Bạn sẽ làm gì

Xem mô hình ở đúng vị trí của nó: bản đồ đường phố hoặc ảnh chụp từ trên không của công trường nằm trên mặt đất bên dưới nó.

## Các bước

1. Mở một mô hình IFC có vị trí trên bản đồ (một chuyển đổi bản đồ, IfcMapConversion, với hệ tọa độ phẳng). Các phần mềm xuất sẽ ghi nó khi tọa độ dự án (điểm khảo sát, tọa độ chung) được thiết lập.
2. Chọn {{ui:Hiển thị}} › {{ui:Lớp bản đồ…}}. Hộp thoại cho biết hệ tọa độ của mô hình, ví dụ EPSG:28356. Mô hình không có chuyển đổi bản đồ thì không thể có lớp bản đồ: hộp thoại sẽ thông báo điều đó.
3. Bật {{ui:Lớp bản đồ từ internet}}. Cho đến lúc đó, không có yêu cầu nào được gửi tới máy chủ; khi bật, các máy chủ bạn thêm vào sẽ thấy khu vực xung quanh mô hình và địa chỉ internet của bạn, nhưng không bao giờ thấy mô hình.
4. Trong {{ui:Thêm lớp}}, chọn ô bản đồ (một địa chỉ có `{z}`, `{x}` và `{y}`), dịch vụ WMS, WMTS hoặc ArcGIS ({{ui:Lấy danh sách lớp}}, rồi chọn một lớp), hoặc một ảnh kèm tệp world file của nó.
5. Đóng hộp thoại. Bản đồ nằm trên mặt đất ngay dưới điểm thấp nhất của mô hình, phủ diện tích hình chiếu của mô hình và mở rộng thêm một khoảng bằng chừng đó ra xung quanh.

:::note
Bản đồ chỉ hiển thị trên màn hình; nó không được lưu trong tệp IFC. Danh sách lớp được giữ trong trình duyệt này. Chỉ sử dụng các dịch vụ bản đồ có điều khoản cho phép.
:::
