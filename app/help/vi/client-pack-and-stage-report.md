---
title: Gói khách hàng, báo cáo giai đoạn và so sánh phương án
summary: Tạo gói khách hàng hoặc báo cáo giai đoạn từ mô hình, với các phương án khối tích được so sánh theo diện tích và chi phí, diện tích sàn, bản vẽ kèm các lần sửa đổi, và lịch sử phát hành. Mỗi con số giữ các cấu kiện đằng sau nó.
keywords: gói khách hàng, thuyết trình, báo cáo giai đoạn, báo cáo, so sánh phương án, phương án, diện tích và chi phí, chi phí theo phương án, không có đơn giá, khối tích, diện tích sàn, danh sách bản vẽ, lịch sử phát hành, con số, con số liên kết
from: f6679bf5
---

## Bạn sẽ làm gì

Tạo gói khách hàng hoặc báo cáo giai đoạn từ mô hình ở trạng thái hiện tại, và so sánh các phương án khối tích đã giữ cạnh nhau theo diện tích và chi phí.

## Các bước

1. Trong bảng bên trái, mở **Gói khách hàng và báo cáo giai đoạn**.
2. Chọn **Mở trong Tài liệu** cạnh Gói khách hàng hoặc Báo cáo giai đoạn. Tài liệu xuất hiện trong Tài liệu từ mô hình, nơi bạn có thể thay đổi nội dung của nó.
3. Trong bản xem trước, nhấn một con số để chọn các cấu kiện đằng sau nó.
4. Chọn **Tạo gói**. Một tệp zip được lưu: tài liệu dưới dạng PDF, một ảnh chụp khung nhìn 3D, và `figures.csv`, liệt kê mọi con số kèm GlobalId của các cấu kiện của nó.

## Các trường

Bạn có thể dùng các trường này trong bất kỳ tài liệu nào.

| Trường | Nội dung in ra |
|---|---|
| `{{stage}}` | Giai đoạn dự án từ chi tiết bản vẽ. |
| `{{options}}` | Các phương án khối tích đã giữ, cạnh nhau: số tầng, chiều cao, diện tích chiếm đất, tổng diện tích sàn, bao che và chi phí. |
| `{{areas}}` | Diện tích sàn theo cấp, từ các phòng. |
| `{{sheets}}` | Các tờ kèm lần sửa đổi mà mỗi tờ đang ở và thời điểm nó được phát hành lần cuối. |
| `{{issues}}` | Lịch sử phát hành và nhật ký thay đổi bản vẽ. |
| `{{changes}}` | Những gì đã thay đổi kể từ lần phát hành trước, theo từng tờ. |

## Cách tính chi phí các phương án

Chi phí chỉ đến từ bảng giá của dự án (Năng lượng/Chi phí, chi phí 5D). Không có gì được ước tính thay bạn.

- Một dòng giá chỉ định giá một phương án khi các lớp của nó nêu `IfcBuildingElementProxy`.
- Diện tích sàn được định giá bởi một dòng mà các từ của nó nêu công năng của phương án, chẳng hạn văn phòng. Nếu không có, dùng dòng có các từ gross floor area hoặc building mass. Một dòng tính theo m² dùng diện tích sàn tổng. Một dòng tính theo m³ dùng thể tích.
- Bao che (chu vi nhân chiều cao) được định giá bởi một dòng có từ envelope hoặc facade.
- Một phương án không có dòng khớp sẽ hiển thị **Chưa có đơn giá**. Tổng chỉ được hiển thị khi mọi phần được yêu cầu đều có đơn giá.

## Cần biết

- Giữ các phương án bằng **Giữ làm phương án** trong danh sách khối tích của chương trình phòng. Xem Phương án khối tích.
- PDF không thể chọn cấu kiện. Ngoài BimCraft, `figures.csv` mang liên kết từ mỗi con số tới các cấu kiện của nó.

## Chưa xây dựng

- Các tờ và khung nhìn đã vẽ không được đặt bên trong tài liệu. Gói chỉ chứa một ảnh của khung nhìn 3D.
