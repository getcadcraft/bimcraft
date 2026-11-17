---
title: Carbon hàm chứa và chi phí trên lịch biểu
summary: Cộng carbon hàm chứa của mô hình từ một bảng hệ số mở, có thể chỉnh sửa, và trải chi phí trên lịch 4D thành đường cong chi phí và dòng tiền. Cả hai đều bắt đầu từ các giá trị bạn nhập hoặc nhập vào.
keywords: carbon hàm chứa, carbon, co2, kgco2e, phát thải, bảng hệ số, epd, 5d, chi phí, dòng tiền, đường cong S, chi phí lịch biểu, đơn giá, đơn giá bóc tách
from: 83e82840
---

## Carbon hàm chứa

Mở bảng **Carbon**. Khối lượng của mỗi phần tử (thể tích, diện tích hoặc chiều dài) được nhân với một hệ số trong bảng, theo từng mô-đun vòng đời: giai đoạn sản phẩm là bắt buộc, vận chuyển và xử lý phế thải là tùy chọn. Tổng được tính theo vật liệu, loại và tầng, và theo mỗi m² sàn.

**Bảng hệ số thuộc về bạn.** Các dòng đi kèm BimCraft là giá trị khởi đầu chung, có đúng bậc độ lớn. Chúng không lấy từ cơ sở dữ liệu nào, được đánh dấu là chưa kiểm tra, và cần được thay bằng nguồn bạn dùng (EPD, cơ sở dữ liệu quốc gia, hoặc số liệu của công ty bạn). Sửa các dòng trong bảng, hoặc nhập và xuất bảng dưới dạng CSV hoặc JSON. Dòng bạn thêm sẽ ghi đè dòng khởi đầu có cùng mã. Bảng được lưu trong mô hình.

Phần tử không khớp hệ số nào, hoặc không có khối lượng, được liệt kê trong **Vấn đề** thay vì tính là không.

## Chi phí trên lịch 4D

Mở bảng **Chi phí** cạnh lịch 4D. Nhập đơn giá (gõ tay, nhập tệp CSV hoặc JSON, hoặc lấy các dòng của TakeoffCraft), gán từng đơn giá với vật liệu của mô hình bằng từ khóa, và bảng sẽ định giá các phần tử của mỗi công việc. Chi phí của một công việc được trải từ ngày bắt đầu đến ngày kết thúc (đều, hoặc dồn về đầu hoặc cuối). Bảng vẽ đường dòng tiền lũy kế theo ngày, tuần hoặc tháng, với chi phí theo giai đoạn và gói công việc, và so sánh kế hoạch với thực tế đã xây dựng tại một ngày. Xuất CSV. Chưa có gì được định giá cho đến khi bạn nhập đơn giá: không có đơn giá nào được cung cấp sẵn.

## Tiền tệ

Bảng đơn giá có thể ghi đơn vị tiền tệ của các đơn giá (ba chữ cái, chẳng hạn USD hoặc EUR). Bảng 5D có một ô để nhập, được lưu trong tệp cùng đơn giá, và các lần xuất JSON mang theo nó. Bảng được tạo trước khi có tính năng này, hoặc bảng mà bạn để trống ô này, không có tiền tệ: chi phí của nó được hiển thị là USD, mặc định của ứng dụng, và bảng cùng các tổng chạy sẽ ghi như vậy. Không có quy đổi nào giữa các đơn vị tiền tệ.
