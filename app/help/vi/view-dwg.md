---
title: Xem bản vẽ DWG hoặc DXF
summary: Mở DWG hoặc DXF, di chuyển trong không gian mô hình và các tờ, đọc tọa độ, và xem những gì chưa được vẽ.
keywords: khối động, trạng thái hiển thị, dwg, dxf, cad, bản vẽ, 2d, xem, trình xem, di chuyển khung nhìn, thu phóng, không gian mô hình, không gian giấy, bố cục, tọa độ, mở dwg
from: 4db3122a
---

## Bạn sẽ làm gì

Mở một bản vẽ CAD, xem nó ở 3D hoặc 2D, di chuyển quanh nó, chuyển giữa không gian mô hình và các tờ của nó, và đọc tọa độ. BimCraft hiển thị bản vẽ DWG và DXF; nó không sửa hay lưu chúng. Để thay đổi một bản vẽ, nhấn {{ui:Chỉnh sửa trong CadCraft}} và bản vẽ sẽ mở trong ứng dụng vẽ CadCraft ở một thẻ mới.

## Các bước

1. Nhấn {{ui:Chọn tệp}}, hoặc thả bản vẽ lên trang.
2. Chọn một tệp `.dwg` hoặc `.dxf`.
3. Chờ trong khi dòng trạng thái ghi "Đang đọc bản vẽ…". Bản vẽ lớn mất vài giây. Sau đó dòng trạng thái cho biết việc đọc mất bao lâu, "đang kết xuất…" trong lúc hình đầu tiên được vẽ, và việc đó mất bao lâu.
4. Bản vẽ mở ở 3D, cách nhanh nhất để hiển thị bản vẽ lớn (xem [Xem bản vẽ DWG hoặc DXF ở 3D](topic:dwg-in-3d)). Nhấn {{ui:Mô hình}} để xem phẳng 2D. Để luôn mở bản vẽ ở 2D, đặt {{ui:Cài đặt}} › {{ui:BimCraft}} › **Bản vẽ mở trong** thành {{ui:Mô hình (2D)}}. Bản vẽ không có gì trong không gian mô hình, hoặc trình duyệt không hiển thị được 3D, sẽ mở ở 2D.
5. Xem các thẻ phía trên bản vẽ: {{ui:Mô hình}} trước, rồi một thẻ cho mỗi tờ, theo thứ tự của chính bản vẽ.
6. Nhấn thẻ một tờ để xem tờ đó: tờ giấy, với mô hình hiển thị qua các khung nhìn của nó.
7. Nhấn {{ui:Mô hình}} để quay lại không gian mô hình.
8. Di chuyển con trỏ qua bản vẽ và đọc tọa độ X và Y ở góc.

## Bạn nên thấy

- Bản vẽ, vừa khung cửa sổ. Màu theo bản vẽ; nét trắng (màu 7) được vẽ bằng màu mực của chủ đề, và các màu nhạt được làm tối hơn trên giao diện sáng để vẫn đọc được.
- Bảng {{ui:Bản vẽ}} bên trái: tệp, kích thước, định dạng (ví dụ "AutoCAD 2018 (AC1032)"), đơn vị, số lượng thực thể và lớp, số tờ, và bản vẽ liên kết cùng thiết bị khi có.
- Danh sách {{ui:Lớp}} bên trái.
- Bên phải: cách di chuyển, bản vẽ và hình ảnh liên kết, và **Chưa vẽ**.

## Di chuyển

:::mouse
| Để | Làm như sau |
|---|---|
| Di chuyển khung nhìn | Kéo bằng nút chuột nào cũng được |
| Thu phóng | Lăn bánh xe; điểm dưới con trỏ giữ nguyên |
| Vừa khung | Nhấp đúp, nhấn {{key:F}}, hoặc nhấn {{ui:Vừa khung}} |
:::

:::mac mouse
Trên bàn di chuột (trackpad), cuộn bằng hai ngón tay là **thu phóng**, không di chuyển khung nhìn. Chụm ngón tay cũng thu phóng. Để di chuyển khung nhìn, nhấn và kéo.
:::

:::touch
Kéo bằng một ngón tay để di chuyển khung nhìn. Thu phóng bằng cử chỉ chụm chưa được xây dựng cho bản vẽ: chạm {{ui:Vừa khung}} để xem toàn bộ tờ, và dùng chuột hoặc bàn di chuột để phóng to.
:::

## Khối động

Khối động được vẽ như bản vẽ hiển thị nó: mỗi khối được đặt ở trạng thái hiển thị mà bản vẽ đã lưu ("Plan" hoặc "Front", "Single bowl" hoặc "Double bowl"). Ở bên phải, **Khối động** liệt kê mọi khối được đặt trong không gian mô hình: có bao nhiêu khối được đặt, các trạng thái chúng hiển thị, và mọi trạng thái mà khối có. Trong {{ui:3D}}, nhấn một khối đã đặt để xem **Khối động**, **Trạng thái hiển thị** và **Trạng thái khác** trong Thuộc tính. BimCraft không đổi trạng thái.

## Chưa vẽ

Một số loại đối tượng không được vẽ trong bản dựng này. Chúng được đếm dưới **Chưa vẽ** ở bên phải ("Các phần này của bản vẽ được bỏ qua tạm thời, không suy đoán."), để bạn biết có gì đó đang thiếu. Đường thẳng, đa tuyến, cung tròn, vòng tròn, elip, spline, tô bóng và tô đặc, văn bản và văn bản nhiều dòng, khối có thuộc tính, kích thước, đường dẫn và đường dẫn nhiều, bảng, hình ảnh và khung nhìn (viewport) đều được vẽ. Mặt 3D, lưới đa diện và lưới đa giác được vẽ dưới dạng các cạnh nhìn từ trên; chuyển sang {{ui:3D}} để xem chúng như bề mặt.

DXF nhị phân không mở được: BimCraft cho biết như vậy. Hãy lưu lại thành DXF ASCII, hoặc thành DWG, từ chương trình đã tạo ra nó.

## Lỗi thường gặp

- **Bản vẽ trông trống.** Một số lớp có thể đang tắt hoặc bị đóng băng trong chính bản vẽ; chúng bắt đầu ở trạng thái không chọn trong {{ui:Lớp}}. Nhấn {{ui:Bật tất cả}}. Nếu trạng thái ghi "*tên* là bản vẽ trống: không có đường thẳng, văn bản hay khối nào.", thì bản vẽ không có gì cả.
- **Một tờ hiện khung trống.** Tờ có thể dựa vào các bản vẽ liên kết. Xem [Tìm bản vẽ và hình ảnh liên kết](topic:dwg-linked-files).
- **Chữ trông hơi khác.** BimCraft vẽ chữ bằng phông sans-serif hẹp, không phải phông riêng của bản vẽ, nên chữ có thể rộng hơn hoặc hẹp hơn một chút so với chương trình đã tạo ra nó.
- **"*tên* không thể đọc. Tệp có thể bị hỏng, hoặc được lưu ở định dạng mà bộ đọc chưa xử lý được."** Phần trong ngoặc ở cuối nêu mã định dạng của tệp. Hãy lưu lại từ chương trình đã tạo ra nó dưới dạng DWG cũ hơn hoặc DXF, rồi thử lại.
- **Cần đo, vẽ hoặc sửa.** BimCraft chỉ xem bản vẽ. Nhấn {{ui:Chỉnh sửa trong CadCraft}} để mở cùng tệp trong ứng dụng vẽ CadCraft, nơi bạn sửa và lưu một bản sao dưới dạng DWG hoặc DXF. Tệp gốc của bạn không thay đổi, và các bản vẽ liên kết vẫn ở trong BimCraft. Nút này chỉ hiện khi CadCraft mở được với bạn.

## Tiếp theo

- [Xem bản vẽ DWG hoặc DXF ở 3D](topic:dwg-in-3d)
- [Làm việc với lớp và tờ](topic:dwg-layers-sheets)
- [Kiểm tra bản vẽ ở chế độ in](topic:print-view)
