---
title: Sao chép, dán và nhân bản mục thư viện
summary: Sao chép một mục thư viện đã đặt và dán nó nơi bạn nhấp, ngay bên cạnh bản gốc, hoặc vào mô hình khác; sao chép thuộc tính của phần tử khác dưới dạng văn bản; hoàn tác và làm lại.
keywords: sao chép, dán, nhân bản, bộ nhớ tạm, dán tại chỗ, cắt, xóa, chọn tất cả, hoàn tác, làm lại, menu chỉnh sửa, thêm, mục thư viện, đặt, lặp lại, mảng
from: 6ac15931
---

## Bạn sẽ làm gì

Tạo thêm bản sao của một mục bạn đã đặt: một bàn làm việc thứ hai, một dãy bồn rửa. Chủ đề này nói về **mục thư viện đã đặt**, tức các phần tử BimCraft đã ghi vào mô hình: một trong số đó có thể dán vào mô hình bất kỳ, kể cả ở thẻ khác. Tường, cửa và mọi phần tử khác được sao chép, cắt, dán và xóa theo cùng cách trong chính mô hình của chúng: xem [Xóa, cắt, sao chép và dán cấu kiện công trình](topic:edit-elements).

Các lệnh nằm trên thanh công cụ phía trên mô hình: {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}} và {{ui:Thêm}}, cùng một menu có {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}} và {{ui:Bỏ chọn}}. Lệnh không thể thực hiện lúc này sẽ bị mờ; trỏ vào nó để xem lý do, hoặc nhấp và dòng trạng thái sẽ cho biết lý do.

## Các bước

1. Mở một mô hình IFC có mục thư viện trong đó, hoặc đặt một mục trước. Xem [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library).
2. Nhấp mục trong khung nhìn 3D. Thuộc tính của nó hiển thị một hộp **Mục thư viện**.
3. Nhấp {{ui:Sao chép}} hoặc nhấn {{key:Mod+C}}.
4. Nhấp {{ui:Dán}} hoặc nhấn {{key:Mod+V}}. Thanh đặt mở ra và một hộp trong suốt đi theo con trỏ, xoay giống bản gốc.
5. Nhấn {{key:R}} để xoay 90°, {{key:Tab}} để bắt mặt sau của nó vào tường, hoặc nhập X và Y trên thanh đặt.
6. Nhấp vào nơi bản sao sẽ đặt. Mỗi lần nhấp đặt thêm một bản sao; nhấn {{key:Esc}} để dừng.
7. Nhấp {{ui:Lưu thành IFC}} để tải xuống bản sao đã chỉnh sửa của mô hình.

## Dán tại chỗ

{{ui:Thêm}}, {{ui:Dán tại chỗ}} hoặc {{key:Mod+Shift+V}} dán mà không cần nhấp, ở cùng X và Y và cùng hướng xoay:

- **Vào cùng mô hình, trên cùng tầng**: hai mục nằm đúng một vị trí thì vô ích, nên bản sao được đặt ngay cạnh bản gốc, cách một khoảng bằng chiều rộng mục cộng 100 mm dọc theo chiều rộng của chính mục. Dán tại chỗ lần nữa từ bản sao mới để tạo thành một dãy.
- **Sang tầng khác hoặc vào mô hình khác**: đúng cùng X, Y và hướng xoay. BimCraft dùng tầng có cùng tên; nếu không có, dùng tầng gần nhất về cao độ. Dòng trạng thái sẽ cho biết tầng nào.

## Nhân bản

{{ui:Thêm}}, {{ui:Nhân bản}} hoặc {{key:Mod+D}} sao chép mục đã chọn và bắt đầu dán ngay: một bước thay vì hai.

## Vào mô hình khác hoặc thẻ khác

Nội dung bạn sao chép được giữ trong trình duyệt này, nên bạn có thể mở một mô hình IFC khác, hoặc BimCraft ở thẻ khác, rồi dán vào đó. Mô hình khác cần chính mục thư viện: BimCraft có mục này khi mục được đặt, thay thế hoặc cập nhật trong thẻ này. Mục được đặt trong phiên trước chỉ có thể dán lại trong chính mô hình của nó; ở mô hình khác, hãy đặt nó từ thẻ {{ui:Thư viện}}.

## Bạn sẽ thấy gì

- Bản sao trong mô hình, đã được chọn, có cùng mục thư viện, giấy phép, dữ liệu thiết bị, số lượng và ghi chú như bản gốc, và **số mục tiếp theo còn trống**. Đổi số trong Thuộc tính, dưới `CadCraft_Placement`.
- "Đã đặt: *mục* (mục *n*)" trong danh sách thay đổi. {{key:Mod+Z}} hoàn tác; {{key:Mod+Y}} làm lại.

## Điều nên biết

- Các bản sao dùng chung kiểu với bản gốc, nên tất cả dùng chung một bộ hình học, giống như khi đặt cùng một mục hai lần.
- {{ui:Hoàn tác}} và {{ui:Làm lại}} áp dụng cho mọi thay đổi: giá trị bạn đã sửa, các lần đặt, dán, thay thế và cập nhật. Làm lại đặt lại một lần đặt ở cùng vị trí; một thay đổi mới sẽ xóa những gì có thể làm lại.
- Trong khung nhìn 2D của bản vẽ không có gì để chọn, nên không có gì để sao chép. Dùng {{ui:Sửa trong CadCraft}} để thay đổi bản vẽ, khi nút này hiển thị.

## Lỗi thường gặp

- **{{ui:Dán}} báo các phần tử lấy từ mô hình khác.** Thứ cuối cùng bạn sao chép là một cấu kiện công trình, hoặc nhiều phần tử: những thứ này chỉ dán được vào chính mô hình của chúng. Chọn một mục thư viện đã đặt và sao chép nó.
- **{{ui:Dán}} báo bản sao lấy từ mô hình khác và không có mục thư viện.** Đặt mục từ thẻ {{ui:Thư viện}} một lần trong thẻ này, rồi sao chép và dán.
- **{{key:Mod+C}} sao chép văn bản trang thay vì mô hình.** Văn bản đã được chọn trên trang. Nhấp vào mô hình trước.

## Liên quan

- [Phím và chuột](topic:keyboard#edit)
- [Cài đặt BimCraft](topic:settings)
