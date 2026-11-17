---
title: Giai đoạn dự án, từ bản yêu cầu đến chỉ thị hiện trường
summary: Bắt đầu từ bản yêu cầu với diện tích mục tiêu và xem các phòng đạt hoặc thiếu khi bạn vẽ, so sánh các phương án ý tưởng với bản yêu cầu, liên kết đặc tả kỹ thuật và chi tiết với các kiểu, xem xét bản vẽ thi công xưởng và ghi chỉ thị hiện trường theo cấu kiện.
keywords: bản yêu cầu, bảng thống kê không gian, diện tích mục tiêu, đạt, thiếu, phòng, phương án ý tưởng, phương án, khối tích, ngân sách, đặc tả kỹ thuật, đặc tả, chi tiết, chi tiết thi công, kiểu, bản vẽ thi công xưởng, xem xét, phê duyệt, nộp lại, chỉ thị hiện trường, bản sửa đổi, nguyên nhân, hiện trường, giai đoạn
from: 0a49b852
---

## Bạn sẽ làm gì

Thực hiện các giai đoạn của một dự án trong một bảng: viết bản yêu cầu của khách hàng dưới dạng các phòng với diện tích mục tiêu, so sánh các phương án ý tưởng với bản yêu cầu, giữ đặc tả kỹ thuật và chi tiết thi công cùng với các kiểu mà chúng thuộc về, xem xét bản vẽ thi công xưởng khi các nhà thầu trả về, và ghi chỉ thị hiện trường theo các cấu kiện mà chúng thay đổi.

## Các bước

1. Trong bảng bên trái, mở **Giai đoạn dự án**, rồi **Bản yêu cầu**.
2. Dán các phòng, mỗi dòng một phòng: `Living; 1; 30` nghĩa là một phòng 30 m². Có thể bỏ qua số đếm. Chọn **Thêm phòng**. Điền khách hàng, địa điểm, ngân sách, dung sai và tiến độ, rồi chọn **Lưu bản yêu cầu**.
3. Vẽ tường. Mỗi phòng mà các bức tường tạo thành, nếu có tên trùng với tên phòng trong bản yêu cầu (số đi sau tên, chẳng hạn "Bedroom 2", sẽ bị bỏ qua), sẽ được tính. **Bảng thống kê không gian** hiển thị **Đạt**, **Thiếu**, **Vượt** hoặc **Chưa vẽ**, kèm chênh lệch theo m².
4. Để bắt đầu dự án mới theo cách này, chọn **Bắt đầu dự án mới từ bản yêu cầu**. Lệnh này mở một mô hình mới, dùng một trong các bản mẫu đã lưu nếu bạn chọn, và đưa bản yêu cầu vào làm bước đầu tiên.
5. Mở **Phương án so với bản yêu cầu**. Mọi phương án khối tích được giữ trong mô hình sẽ được vẽ trên cùng một tỷ lệ với tổng diện tích của nó, phần bản yêu cầu yêu cầu, và số phòng của bản yêu cầu vừa với phương án. **Xếp bản yêu cầu tại đây** đặt các phòng vào các tầng của phương án, từ tầng thấp nhất trở lên, và cho biết phần nào không vừa. Chi phí chỉ lấy từ bảng giá của dự án; nếu không có dòng khớp, bảng hiển thị "Không có đơn giá".
6. Mở **Kiểu, đặc tả kỹ thuật và chi tiết**. Mỗi kiểu tường, cửa đi, cửa sổ và sàn hiển thị có văn bản đặc tả kỹ thuật hay không, các chi tiết được liên kết với nó, và nơi đặc tả, các bảng thống kê và các bản vẽ không khớp nhau. **Liên kết chi tiết** thêm một tệp DetailCraft hoặc CadCraft, một địa chỉ, hoặc một tờ của mô hình này.
7. Mở **Bản vẽ thi công xưởng**. Chọn các cấu kiện mà bản vẽ thi công xưởng bao phủ trong mô hình, rồi chọn **Nhận bản vẽ**. Dùng **Phê duyệt**, **Ghi chú** hoặc **Sửa đổi** kèm tên và ghi chú của người xem xét. **Đã nộp lại** tạo bản sửa đổi tiếp theo của cùng bản ghi và giữ lịch sử xem xét. Trạng thái cũng được ghi trên từng cấu kiện.
8. Mở **Chỉ thị hiện trường**. Chọn các cấu kiện, nêu nguyên nhân và tác động đến chi phí và thời gian theo cách diễn đạt của bạn, rồi chọn **Ghi lại**. Sau khi một vấn đề đã được ghi lại, **Giải thích các thay đổi kể từ vấn đề này** cho biết những cấu kiện đã thay đổi nào được một chỉ thị bao phủ và những cấu kiện nào thay đổi mà chưa ghi lại gì.

## Cần biết

- Mỗi bước là một lần Hoàn tác. Không có gì bị từ chối: bản yêu cầu chưa đạt, kiểu không khớp với văn bản của nó, hoặc bản vẽ thi công xưởng quá hạn đều chỉ là cảnh báo hoặc ghi chú trong Vấn đề.
- Các phòng của bản yêu cầu là không gian không có tường. Chúng mang một diện tích mục tiêu, không phải diện tích đã vẽ, nên bảng thống kê phòng và COBie không bao giờ tính chúng là phòng đã vẽ.
- Một bố cục chỉ xếp các phòng vào tầng theo diện tích. Nó không vẽ tường.
- Văn bản đặc tả kỹ thuật được viết trong Tài liệu từ mô hình. Ở đây, nó chỉ được so sánh với các kích thước của chính mô hình: không có điều khoản nào của tiêu chuẩn được viết thay bạn.
- Bản vẽ thi công xưởng và chỉ thị hiện trường là các bản ghi trong cùng lịch sử với bảng Vấn đề và bản sửa đổi, nên cả hai bảng đều hiển thị chúng.
- Trạng thái của bản vẽ thi công xưởng là một thuộc tính của từng cấu kiện (`CadCraft_ShopDrawing`), còn chỉ thị hiện trường là `CadCraft_SiteInstruction`, nên Tìm và Tô màu theo thuộc tính có thể dùng chúng.
- Các dấu xác minh tại hiện trường (Giai đoạn 7) nằm trong Thuộc tính, dưới mục Xác minh.
