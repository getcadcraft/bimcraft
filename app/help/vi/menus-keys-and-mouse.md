---
title: Menu, phím và chuột
summary: Chọn kiểu menu hợp với cách bạn làm việc, gán phím riêng cho lệnh bất kỳ, chuyển lệnh giữa các menu, và đặt chức năng cho con lăn cùng từng nút chuột.
keywords: kiểu menu, menu, thanh menu, dải lệnh, dòng lệnh, phím tắt, phím nóng, phím, tùy chỉnh, gán lại, chuột, con lăn, đảo ngược, hướng thu phóng, nút giữa, di chuyển khung nhìn, xoay quanh, phím hai chữ, xuất, nhập, chuyển đổi, quen thuộc
from: a424e836
---

Các lệnh của BimCraft giống nhau dù bạn gọi chúng bằng cách nào. **Kiểu menu** chỉ quyết định lệnh nằm ở đâu trên màn hình, được gọi tên gì và chạy bằng phím nào, để bạn giữ được thói quen sẵn có. Chọn một kiểu trong {{ui:Cài đặt}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu, phím và chuột}}; thay đổi có hiệu lực ngay và trình duyệt này sẽ ghi nhớ.

## Năm kiểu

| Kiểu | Bạn được gì |
|---|---|
| {{ui:CadCraft}} | Thanh công cụ và phím riêng của BimCraft ({{key:W}} tường, {{key:D}} cửa đi, {{key:N}} cửa sổ, {{key:X}} mặt cắt, {{key:F}} vừa khung). Điểm khởi đầu. |
| {{ui:Home design}} | Một thanh menu (Tệp, Chỉnh sửa, Bản dựng, Thư viện, 3D, CAD, Công cụ, Chế độ xem) phía trên một hàng công cụ xây dựng, theo cách bố trí của các chương trình thiết kế nhà ở. Vẫn các phím đơn như trên, cộng thêm {{key:Mod+L}} cho thư viện, {{key:F9}} cho khung nhìn 3D, {{key:F10}} cho mặt bằng và {{key:F11}} cho cả hai. |
| {{ui:BIM ribbon}} | Các thẻ có nút lớn (Kiến trúc, Chèn, Chú thích, Chỉnh sửa, Chế độ xem, Xuất), kèm menu Tệp và các nút nhanh ở bên phải. Phím hai chữ: {{key:W}} rồi {{key:A}} cho tường, {{key:D}} {{key:R}} cho cửa đi, {{key:W}} {{key:N}} cho cửa sổ, {{key:S}} {{key:C}} cho mặt cắt, {{key:Z}} {{key:F}} cho vừa khung. Nút giữa di chuyển khung nhìn; {{key:Shift}} cùng nút giữa xoay quanh. |
| {{ui:Drafting classic}} | Một dải lệnh nhỏ và một dòng lệnh, dành cho người gõ lệnh: WALL, DOOR, WINDOW, ROOF, U (hoàn tác), ZOOM, SECTION, PLOT, INSERT, HELP. Gõ ở đâu cũng được, các chữ sẽ đi vào dòng lệnh; {{key:Enter}} để chạy, {{key:Enter}} khi không gõ gì sẽ lặp lại lệnh trước, {{key:Esc}} xóa dòng lệnh. |
| {{ui:Viewer}} | Để mở và kiểm tra mô hình thay vì vẽ: các menu {{ui:Tệp}}, {{ui:Chế độ xem}}, {{ui:Hiển thị}}, {{ui:Kiểm tra}} và {{ui:Chỉnh sửa}} phía trên một hàng công cụ xem (vừa khung, nhìn từ trên, trước, bên, mặt cắt, đo, ẩn, cô lập, xuyên thấu, hiển thị tất cả, đi bộ). Các công cụ xây dựng nằm trong menu {{ui:Mô hình}} ở cuối. Dùng cùng các phím với kiểu riêng của BimCraft. |

Các menu và dải lệnh hiện ra khi bạn đã mở một mô hình hoặc bắt đầu một công trình mới; trước đó, bảng bên trái dùng để mở tệp và bắt đầu công trình.

:::tip
Phím thuộc bố cục riêng của BimCraft nhưng không thuộc kiểu bạn chọn sẽ không làm gì cả, và dòng trạng thái cho biết lệnh của nó đã chuyển đi đâu ("Trong Dải lệnh BIM, Mặt cắt là SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} và các phím mũi tên luôn giữ nghĩa của chúng, và công cụ đang chạy giữ các phím riêng của nó: {{key:R}} và {{key:Tab}} khi đặt, {{key:W}} {{key:A}} {{key:S}} {{key:D}} khi đi bộ, {{key:H}} với công cụ cửa đi và cửa sổ, các số khi bạn nhập chiều dài.
:::

## Tự làm theo ý bạn

1. Chọn kiểu gần nhất với điều bạn muốn, rồi bấm {{ui:Tùy chỉnh…}}.
2. Trên {{ui:Phím và menu}}, tìm một lệnh (ô tìm kiếm sẽ giúp ích). Bấm {{ui:Thêm phím}} rồi nhấn phím đó, hoặc hai phím liên tiếp cho phím hai chữ. Bấm vào một phím để gỡ nó.
3. Với thanh menu hoặc dải lệnh, {{ui:Vị trí}} chuyển lệnh sang menu hoặc bảng khác, hoặc sang {{ui:Chỉ có phím}}.
4. Trên {{ui:Chuột}}, đặt chức năng cho con lăn, các nút dùng để di chuyển khung nhìn mặt bằng, và chức năng của từng nút trong khung nhìn 3D.
5. Đặt tên và bấm {{ui:Lưu}}.

Lưu một kiểu có sẵn sẽ tạo bản sao riêng ("Thiết kế nhà của tôi"); kiểu có sẵn không bao giờ thay đổi. Một phím được gán cho hai lệnh, hoặc một phím sẽ chạy trước khi kịp gõ phím hai chữ, sẽ hiện màu đỏ và phải được sửa trước khi bạn lưu.

## Chuột

- **Con lăn chuột**: {{ui:Cuộn lên để phóng to}} (mặc định) hoặc {{ui:Cuộn lên để thu nhỏ}}, và tốc độ. Cử chỉ chụm trên bàn di chuột luôn thu phóng theo chiều ngón tay chuyển động.
- **Di chuyển khung nhìn mặt bằng và bản vẽ bằng**: bất kỳ nút trái, giữa hoặc phải. {{key:Space}} và kéo cũng di chuyển khung nhìn; kéo bằng nút trái chỉ di chuyển ở những nơi một lần nhấp sẽ không chọn hoặc vẽ gì.
- **Kéo trong khung nhìn 3D**: {{ui:Riêng của từng chế độ xem}} giữ các nút của BimCraft (trái xoay quanh, phải di chuyển khung nhìn). Hoặc đặt mỗi nút thành xoay quanh, di chuyển khung nhìn, thu phóng hoặc không làm gì; {{key:Shift}} cùng nút sẽ đổi giữa xoay quanh và di chuyển khung nhìn. Nhấp chuột không kéo vẫn chọn được.

## Mang theo

{{ui:Xuất}} lưu kiểu đang dùng thành một tệp `.ccinput.json` nhỏ; {{ui:Nhập…}} thêm một tệp như vậy, từ máy tính khác hoặc từ đồng nghiệp. Tệp nhập vào chỉ có thể trỏ đến các lệnh của chính BimCraft: mọi thứ khác trong đó (một lệnh mà phiên bản này không có, một phím không hoạt động ở đây) sẽ bị bỏ qua và được đếm trong dòng trạng thái. {{ui:Xóa kiểu này}} gỡ một kiểu do chính bạn tạo.

:::note
Các thiết lập này được giữ trong trình duyệt này. {{ui:Dùng kiểu này trong mọi ứng dụng}} dưới các thẻ kiểu làm cho mọi ứng dụng mở ra ở kiểu tương ứng của nó (thanh công cụ riêng, thanh menu, dải lệnh hoặc Vẽ kỹ thuật cổ điển; {{ui:Trình xem}} là riêng của BimCraft và không có kiểu tương ứng ở nơi khác), kèm các thay đổi bạn đã làm trong từng ứng dụng; ứng dụng nào không có kiểu tương ứng sẽ giữ kiểu riêng của nó. Chọn kiểu khác trong một ứng dụng chỉ thay đổi ứng dụng đó.
:::

Liên quan: [Bàn phím và chuột](topic:keyboard) · [Cài đặt BimCraft](topic:settings) · [Chuyển từ các chương trình BIM và vẽ khác](topic:coming-from)
