---
title: Mặt đứng nội thất
summary: Tạo một tờ thể hiện bốn bức tường của một phòng nhìn từ bên trong, có kích thước và thẻ, rồi lưu thành PDF.
keywords: mặt đứng nội thất, phòng, tường, tủ, bếp, mặt đứng, tờ, PDF, kích thước, thẻ, không gian, A-501
from: 1e3a70a8
---

## Bạn sẽ làm gì

Chọn một phòng và nhận một tờ thể hiện bốn bức tường của phòng như khi bạn đứng bên trong. Tờ này dành cho bếp, phòng tắm và mọi phòng cần xem tủ, cửa đi và cửa sổ trên từng bức tường.

## Tạo tờ

1. Chọn phòng. Trên mặt bằng khi bật {{ui:Vẽ}}, nhấp vào bên trong phòng. Trong góc nhìn 3D hoặc cây mô hình, chọn không gian (một IfcSpace).
2. Trong **Thuộc tính**, nhấp {{ui:Mặt đứng nội thất…}}.
3. Hộp thoại mở ra cùng tờ.
4. Nhấp {{ui:Tải PDF}} để lưu tờ. Tệp được đặt tên "<file> — Mặt đứng nội thất — <room>.pdf" và là PDF vector.
5. Nhấp {{ui:Đóng}} khi xong.

## Tờ hiển thị gì

Tờ có bốn góc nhìn, xếp thành hai hàng hai cột, cùng một tỷ lệ: tỷ lệ tiêu chuẩn lớn nhất vừa khung. Chúng là **Tường Bắc**, **Tường Đông**, **Tường Nam** và **Tường Tây**. Khung tên ghi số tờ A-501, tiêu đề "Mặt đứng nội thất — " kèm số và tên phòng, dự án và ngày.

Mỗi góc nhìn được cắt ngang giữa phòng và nhìn vào bức tường ở phía đó. Các tường bên, và những gì được cắt trong chúng như cửa sổ, hiển thị dưới dạng poché cắt màu xám quanh góc nhìn. Góc nhìn dừng ngay sau mặt tường, nên không có gì phía sau tường hiện ra.

Mỗi góc nhìn có:

- chiều rộng của phòng ở bên dưới, từ mặt trong đến mặt trong;
- chiều cao của phòng ở bên cạnh, từ sàn đến cao độ tầng phía trên;
- một thẻ vuông trên mỗi cửa đi và một thẻ lục giác trên mỗi cửa sổ trong bức tường đó, kèm ký hiệu của nó (D1, W1, v.v.);
- một thẻ tròn kèm số mục trên mỗi mục thư viện đặt phía trước bức tường đó: tủ, thiết bị lắp đặt và thiết bị.

:::note
Các góc nhìn được tạo từ mô hình mỗi lần bạn mở hộp thoại, nên luôn khớp với mô hình. Di chuyển một tủ, rồi mở lại hộp thoại.
:::

## Trên tờ của riêng bạn

Mỗi tường của mỗi phòng cũng là một góc nhìn bạn có thể đặt lên tờ do bạn tạo: trong trình duyệt dự án, nhấp {{ui:Tờ mới}}, rồi dưới **Mặt đứng nội thất** thêm "101 Bếp — Tường Bắc" và các tường khác. Góc nhìn đi kèm cùng kích thước và thẻ.

## Chưa xây dựng

Mặt đứng nội thất trong bộ bản vẽ được tạo ra (chúng lấy từ **Thuộc tính** của phòng hoặc từ các tờ của bạn), phòng không gần như hình chữ nhật (góc nhìn trông vuông ở mỗi bên của hộp phòng), bản vẽ, ghi chú hoặc kích thước riêng của bạn trên đó, và việc chọn tường nào để hiển thị. Xem [Những gì chưa xây dựng](topic:not-built-yet).
