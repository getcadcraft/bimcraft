---
title: Cộng khối lượng, liệt kê cấu kiện và lập bảng thống kê không gian
summary: Đếm cấu kiện và cộng chiều dài, diện tích, thể tích hoặc bất kỳ thuộc tính số nào, nhóm theo thuộc tính bất kỳ; liệt kê một hàng cho mỗi cấu kiện; hoặc lập bảng thống kê không gian cùng diện tích và thể tích. Mỗi kết quả tải xuống dưới dạng CSV.
keywords: khối lượng, bóc tách khối lượng, tổng, cộng, bảng thống kê, bảng khối lượng, boq, qto, csv, nhóm theo, đếm, chiều dài, diện tích, thể tích, không gian, phòng, bảng thống kê phòng, bảng thống kê diện tích, danh sách cấu kiện
from: e2e7210c
---

## Bạn sẽ làm gì

Lấy tổng từ một mô hình: chiều dài tường theo tầng, số lượng cửa theo kiểu, thể tích sàn theo vật liệu, chi phí của mọi vùng.

## Các bước

1. Mở một mô hình IFC.
2. Mở {{ui:Tổng khối lượng}} ở bảng bên trái.
3. Trong {{ui:Đếm}}, chọn {{ui:Mọi phần tử}} hoặc chỉ những phần tử đã chọn.
4. Dưới {{ui:Nhóm theo}}, chọn một thuộc tính, như {{ui:Class}}. Nhấp {{ui:Thêm nhóm}} để chia nhỏ thêm, tối đa ba, ví dụ theo {{ui:Tầng}}.
5. Dưới {{ui:Cộng tổng}}, đánh dấu các số cần cộng. Các bộ khối lượng của mô hình được đánh dấu sẵn.
6. Nhấp {{ui:Tải CSV}} để mở bảng trong bảng tính.

## Bạn sẽ thấy gì

- Một hàng cho mỗi nhóm với số cấu kiện của nó và từng tổng, cùng một hàng tổng.
- Cấu kiện không có giá trị được đếm nhưng không cộng vào đâu. Khi điều đó xảy ra, CSV thêm cột "bỏ sót" cạnh tổng để bạn thấy có bao nhiêu.
- Số theo đơn vị của tệp, đúng như tệp lưu, thường là milimét đối với chiều dài.

## Một hàng cho mỗi cấu kiện, hoặc các không gian

Đổi {{ui:Hiển thị}}:

- **Một hàng cho mỗi cấu kiện**: mỗi cấu kiện một hàng, với các thuộc tính dưới {{ui:Cột}} và các số dưới {{ui:Cộng tổng}}. CSV bắt đầu bằng GlobalId của mỗi cấu kiện. Nhấp giá trị đầu tiên trong một hàng để chọn cấu kiện đó.
- **Không gian**: mỗi phòng với số, tên, tầng, diện tích và thể tích của nó, cùng tổng. Diện tích và thể tích lấy từ khối lượng của không gian như tệp ghi. Khi tệp không có, chúng được đo từ hình dạng của không gian theo m² và m³ và hiển thị in nghiêng; CSV ghi rõ cái nào là cái nào.

## Tiếp theo

- [Tìm cấu kiện theo lớp, tên hoặc thuộc tính](topic:find)
- [Tô màu cấu kiện theo thuộc tính](topic:color-by-property)

## Hạ tầng (IFC 4.3)

Chọn **Hạ tầng (IFC 4.3)** trong danh sách chế độ xem để xem đường, đường sắt, cầu và công trình thủy được cộng theo lớp và kiểu, với chiều dài, diện tích và thể tích mà chính tệp ghi. Khối lượng mà tệp không ghi sẽ để trống, không bao giờ được tính ra. **Gửi khối lượng hạ tầng đến TakeoffCraft** lưu một tệp `.quantities.json` mà TakeoffCraft mở như khối lượng có kiểu.
