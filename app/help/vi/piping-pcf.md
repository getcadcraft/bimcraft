---
title: Gửi đường ống sang chương trình ứng suất hoặc isometric, và đọc lại (PCF)
summary: Ghi các tuyến ống của mô hình thành tệp thành phần đường ống PCF, hoặc đọc tệp PCF từ chương trình phân tích ứng suất đường ống hoặc isometric và vẽ ống của nó thành các tuyến.
keywords: pcf, piping component file, tệp thành phần đường ống, pipe stress, phân tích ứng suất, isometric, isometrics, export, xuất, import, nhập, đường ống, piping, ống thép, steel pipe, chuyển công trình, move a job, phần mềm khác, other software
from: 24f91355
---

## Bạn sẽ làm gì

PCF là tệp văn bản thuần mà các chương trình phân tích ứng suất đường ống và isometric đọc và ghi. Nó liệt kê từng thành phần của mỗi đường ống cùng các điểm đầu và đường kính trong của chúng.

## Xuất

1. Chọn công cụ Ống. Thanh tùy chọn hiển thị **Xuất PCF**.
2. Bấm vào nó. Mọi tuyến ống trong mô hình được ghi: ống thẳng, co (góc quay 90 độ, nếu không thì là cút uốn), tê với điểm rẽ nhánh, côn thu và van.
3. Tệp dùng milimét. Đường kính trong là đường kính danh nghĩa tính bằng milimét. Điểm giữa của một co là góc của nó, nơi hai nhánh gặp nhau.

PCF được ghi cho ống thép hàn đối đầu. Một tuyến có vật liệu khác cũng được ghi, với mã thành phần thép, và được ghi chú trong bảng Vấn đề (Problems).

## Nhập

1. Chọn công cụ Ống và bấm **Nhập PCF…**, rồi chọn tệp.
2. Từ ống thẳng đến co, cút, van và mặt bích trở thành một tuyến trên cốt hiện tại. Thay đổi kích thước bắt đầu một tuyến mới. Nhánh của một tê trở thành tuyến riêng bắt đầu tại tâm tê.
3. Mô hình tự lắp các phụ kiện của nó. Côn thu và tê không được sao chép: chúng xuất hiện khi các tuyến có kích thước khác nhau, hoặc một nhánh, gặp nhau.

:::note
Cao độ trong tệp được đọc là cao độ trên cốt hiện tại. Tải trọng, neo giữ và chính phân tích ứng suất không có trong tệp PCF và không được chuyển sang.
:::

## Kiểm tra những gì đã chuyển sang

- Tổng chiều dài ống theo mỗi đường ống phải khớp với nguồn.
- Bảng Vấn đề liệt kê, mỗi mục một lần, một co có điểm giữa không cách đều hai đầu, ống không có chiều dài, và một đường kính trong không phải kích thước tiêu chuẩn.

## Đường ống đã có trong tệp IFC

Khi một tệp IFC đang mở, **Xuất PCF** cũng ghi các đoạn ống, phụ kiện và van của nó, cạnh các tuyến bạn đã vẽ. Một đoạn lấy điểm đầu từ các cổng của nó, hoặc từ các đầu của thân nó. Một phụ kiện không có cổng sẽ bị bỏ qua và bảng Vấn đề sẽ thông báo. Bạn có thể xuất chỉ từ IFC khi mô hình không có tuyến vẽ.

Khi nhập, giá đỡ, ống nhánh (olet), mặt bích, gioăng và nắp trong tệp không được vẽ. Bảng Vấn đề liệt kê số lượng của mỗi loại bị bỏ, để không có gì biến mất lặng lẽ.
