---
title: Tài liệu từ mô hình
summary: Viết một đặc tả hoặc mô tả một lần dưới dạng mẫu, với các trường cho khối lượng, thuộc tính và thẻ gắn, rồi điền từ IFC đang mở thành PDF hoặc tài liệu Word.
keywords: tài liệu, đặc tả, mô tả, mẫu, markdown, báo cáo, word, docx, pdf, khối lượng, bảng thống kê, hạng mục thi công, bảng cửa, hoàn thiện, documentcad
from: 2b0c9156
---

## Bạn sẽ làm gì

Mẫu là một văn bản Markdown với các trường trong dấu ngoặc nhọn kép. BimCraft điền các trường từ mô hình đang mở (số lượng, khối lượng theo loại, thuộc tính, các [thẻ gắn](topic:tags-and-schedules) của bạn) và lưu kết quả dưới dạng PDF, tài liệu Word (.docx) hoặc Markdown.

## Các bước

1. Mở một mô hình IFC.
2. Ở thanh bên trái, dưới {{ui:Khối lượng}}, mở {{ui:Tài liệu từ mô hình}}.
3. Chọn một mẫu: {{ui:Cửa đi và phụ kiện}} hoặc {{ui:Tường, lớp ốp và hoàn thiện}}, hoặc {{ui:Tải một mẫu (.md)…}} cho mẫu của riêng bạn.
4. Nếu mẫu đọc các thẻ mà mô hình chưa định nghĩa, nhấp {{ui:Thêm các thẻ gắn của mẫu này}}, rồi gắn thẻ cho các phần tử dưới {{ui:Thẻ}}.
5. Đổi văn bản theo ý bạn và nhấp {{ui:Hiển thị tài liệu}}.
6. Nhấp {{ui:PDF}} (chọn A4 hoặc Letter trước) hoặc {{ui:Word (.docx)}}.

## Bạn sẽ thấy gì

- Tài liệu đã điền bên dưới các nút, với các bảng của nó.
- Danh sách cảnh báo khi một trường không đọc được (một thẻ chưa được định nghĩa, một thuộc tính mô hình không có, một khối không bao giờ đóng); trường như vậy sẽ in ra dạng `[?…]`.
- Các trang PDF có tiêu đề tài liệu và "Trang 1 của 3" ở chân mỗi trang; bảng dài tiếp tục sang trang sau với hàng tiêu đề.

## Các trường

| Trường | Cho ra |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | tên và mô tả dự án, tên tệp, ngày hôm nay |
| `{{count IfcDoor}}` | số cửa đi |
| `{{sum IfcWall NetSideArea}}` | một tổng, kèm đơn vị |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | phép tính (`+ - * /` và dấu ngoặc) trên các số hạng trong dấu ngoặc vuông: `[sum …]`, `[count …]`, và trong vòng `{{#each}}` là `[qty Width]`. `round n` đặt số chữ số thập phân, `unit` thêm đơn vị. Thứ nó không đọc được, hoặc phép chia cho không, sẽ in `[?…]` và có cảnh báo |
| `{{qty IfcWall NetSideArea by Type}}` | một bảng: một hàng cho mỗi loại với số lượng và tổng, và một hàng tổng cộng |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | một bảng, mỗi phần tử một hàng |
| `{{tag Finish}}` | trong vòng lặp, giá trị của phần tử; ở nơi khác là mọi giá trị đã dùng (Oak, Paint) |
| `{{tags}}` | các định nghĩa thẻ dưới dạng bảng |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | văn bản một lần cho mỗi phần tử; phần sau `{{else}}` khi không có phần tử nào |
| `{{#group IfcWall by Type}} … {{/group}}` | văn bản một lần cho mỗi loại, với `{{value}}`, `{{count}}`, `{{sum Length}}` và một `{{#each}}` thường bên trong |

Bên trong `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (thẻ IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (của phần tử, kèm đơn vị của nó).

Một lớp có thể là nhiều lớp (`IfcDoor|IfcWindow`) hoặc mọi phần tử (`*`). Thu hẹp bất kỳ lớp nào bằng `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Các phép thử là `=`, `!=`, `~` (chứa), `>`, `<`, `>=`, `<=`, `has` và `hasnot`; nối nhiều điều kiện bằng `and`; đặt một giá trị có khoảng trắng trong "dấu ngoặc kép". `sort Name` sắp xếp một vòng lặp.

## Bảng thống kê và đặc tả trong tài liệu

`{{schedule doors}}` in một bảng thống kê của mô hình dưới dạng bảng, theo bố cục văn phòng của bạn: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, hoặc tên một cấu hình bạn đã lưu trong Bảng thống kê. `{{specification}}` in đặc tả của dự án. Các mẫu **Bảng thống kê bản vẽ thi công** và **Đặc tả** dùng chúng. Trong bản xem trước, nhấp vào một số liệu của bảng thống kê như vậy để chọn các phần tử mà nó lấy từ đó. Xem [Bố trí, lưu và xuất bảng thống kê](topic:schedule-layouts) và [Viết đặc tả từ mô hình](topic:specification).

## Điều nên biết

- Một trường nêu tên một thuộc tính dựng sẵn (Name, Type, Storey, Class, Material, Mark), một thẻ (`tag:Fire rating`, hoặc tên của nó), một thuộc tính (`Pset_WallCommon.FireRating`) hoặc chỉ tên của một thuộc tính (`NetSideArea`, `Width`): tên trơ đọc bộ thuộc tính của mỗi phần tử, bộ khối lượng trước, nên `Width` trên một cửa là chiều rộng của cửa, không phải độ dày tường. Trong `where`, tên trơ đọc bộ mà phần lớn các phần tử được chọn có.
- Khối lượng là những gì các bộ khối lượng của tệp nói (BimCraft ghi chúng cho những gì nó vẽ); đơn vị lấy từ cài đặt đơn vị của tệp.
- Các từ trường (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) giữ nguyên tiếng Anh trong mọi ngôn ngữ. Các mẫu ví dụ bằng tiếng Anh.
- Văn bản từ mô hình không bao giờ trở thành định dạng: một tên có `*` hoặc `|` sẽ in đúng như vậy.
- Giữ một mẫu bạn đã đổi bằng {{ui:Lưu trong trình duyệt này}} (chỉ trình duyệt này có) hoặc {{ui:Tải mẫu xuống}}.
- Văn bản PDF dùng các phông chữ PDF chuẩn: ký tự ngoài văn bản Tây Âu sẽ in thành "?" và dòng trạng thái cho biết có bao nhiêu ký tự như vậy.
- Mẫu theo từng hạng mục thi công nằm trong Thư viện (loại Mẫu tài liệu). Trong Tài liệu từ mô hình, chọn Từ thư viện…, chọn một mẫu, và văn bản cùng các thẻ mà nó đọc sẽ được đưa vào; sửa như bạn muốn. Xuất bản mẫu của riêng bạn lên Thư viện là cùng một lần tải lên như mọi mục khác. Chưa xây dựng: các phép tính ngoài số đếm và tổng.
