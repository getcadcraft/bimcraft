---
title: Lập bảng thiết bị và xuất CSV
summary: Chuyển các nhãn hạng mục trong bản vẽ dịch vụ ăn uống thành bảng thiết bị, lọc, chuyển đến từng hạng mục trên tờ của nó, và tải xuống dưới dạng CSV.
keywords: thiết bị, bảng thống kê, dịch vụ ăn uống, nhà bếp, nhãn hạng mục, kcl, thuộc tính, bom, bảng kê vật tư, csv, bảng tính, xuất, trích xuất dữ liệu
from: e3faa1c8
---

## Bạn sẽ làm gì

Đọc danh sách thiết bị từ bản vẽ bếp hoặc dịch vụ ăn uống, kiểm tra, tìm từng hạng mục trên mặt bằng, và tải xuống dưới dạng tệp bảng tính.

Cách này dùng được với các bản vẽ mà nhãn thiết bị mang dữ liệu dưới dạng thuộc tính khối, như các thư viện thiết kế bếp như KCL: mỗi nhãn chứa số hạng mục (`KCL-ITEM`), số lượng, loại, nhà sản xuất, mẫu, dữ liệu điện và cấp thoát nước, và ghi chú. Các bản vẽ khác không có thẻ {{ui:Thiết bị}}.

## Các bước

1. Mở bản vẽ, tốt nhất từ thư mục dự án của nó để các bản vẽ liên kết cũng được tải.
2. Nhấn thẻ {{ui:Thiết bị}} phía trên bản vẽ. Nhãn của nó cho biết có bao nhiêu hạng mục trên các tờ, ví dụ "Thiết bị (88)".
3. Đọc bảng: **Hạng mục**, **SL**, **Thiết bị**, **Nhà sản xuất**, **Mẫu**, **Điện**, **Cấp thoát nước** và **Vị trí**.
4. Chọn nội dung cần liệt kê trong menu phía trên bảng: **Mọi tờ**, một tờ, **Không trên tờ nào**, hoặc **Mọi thứ được gắn nhãn trong bản vẽ**. Mỗi lựa chọn hiển thị số lượng của nó.
5. Gõ vào ô lọc ("Lọc: loại, hãng, mẫu…") để thu hẹp danh sách, ví dụ `refrigerator` hoặc `208`.
6. Nhấn tên tờ của hạng mục trong cột **Vị trí**.
7. Xem bản vẽ: BimCraft chuyển sang tờ đó, phóng to hạng mục và vẽ một vòng quanh nó. Dòng trạng thái ghi "Hạng mục *n*, *loại* được khoanh trên *tờ*."
8. Nhấn {{ui:Thiết bị}} để quay lại bảng.
9. Nhấn {{ui:Tải CSV}}.

## Bạn sẽ thấy gì

- Một tệp tên "*tên bản vẽ* equipment.csv" (với tên tờ trong ngoặc khi bạn liệt kê một tờ) trong thư mục tải xuống. Tệp mở được trong Excel, Numbers, LibreOffice hoặc Google Sheets.
- Dòng trạng thái: "Đã tải *tên tệp* (*n* hạng mục)."

CSV có các cột: Hạng mục, SL, Loại, Nhà sản xuất, Mẫu, Điện, Cấp thoát nước, Ghi chú, Ghi chú điện, Ghi chú cấp thoát nước, Tờ, Đã đặt (số nhãn). Nó tải đúng những dòng bảng đang hiển thị, sau menu và bộ lọc.

## Cách bảng được lập

- Bảng được đọc từ **chính các nhãn**, không phải từ bảng thống kê vẽ trên tờ. Ghi chú phía trên bảng cho biết đã đọc bao nhiêu nhãn.
- Mỗi dòng là một số hạng mục với một bộ dữ liệu. Số lượng của nó là **tổng** các nhãn, như cách một bảng in đếm: kệ được gắn nhãn "5" ở một chỗ và "3" ở chỗ khác là 8, hiển thị là "5 + 3".
- **Vị trí** liệt kê các tờ thể hiện từng hạng mục, được xác định từ những gì khung nhìn của mỗi tờ hiển thị, tức là phần sẽ được in. "Chỉ mô hình" nghĩa là không tờ nào thể hiện nó.
- **Số dùng hai lần** đánh dấu một số hạng mục trên hai thiết bị khác nhau. Dòng đó có dấu màu hổ phách.
- Các nhãn không tờ nào thể hiện được tách riêng dưới **Không trên tờ nào**. Chúng thường là phần còn sót lại từ các bản vẽ trước hoặc công việc khác, và không bao giờ được gộp vào **Mọi tờ**.
- **Điện** hiển thị ampe, kW, HP, vôn, pha, cách đấu nối và phích cắm như đã gắn nhãn. **Cấp thoát nước** hiển thị kích thước đấu nối: CW nước lạnh, HW nước nóng, DD thoát trực tiếp, ID thoát gián tiếp, và gas. Các trường nhãn khác chưa được hiển thị.

## Lỗi thường gặp

- **Không có thẻ {{ui:Thiết bị}}.** Bản vẽ không có nhãn `KCL-ITEM`, hoặc thiết bị của nó được vẽ không có dữ liệu. Không có gì để đọc.
- **Số lượng khác với bảng in.** Bảng in có thể liệt kê số dự phòng hoặc dùng tên ngắn hơn nhãn. Hãy tin nhãn về những gì đã được đặt; kiểm tra chênh lệch với người thiết kế.
- **Mở CSV hiện ký tự lạ.** Tệp dùng UTF-8. Mở nó bằng lệnh nhập của bảng tính và chọn UTF-8 nếu chương trình hỏi.
- **Một ô bắt đầu bằng dấu nháy đơn.** Các giá trị bắt đầu bằng `=`, `+`, `-` hoặc `@` được thêm `'` ở đầu để bảng tính không chạy chúng như công thức.
- **{{key:F}} và {{key:P}} không làm gì cả.** Chúng hoạt động trên bản vẽ, không phải trên bảng. Hãy nhấn thẻ tờ trước.
