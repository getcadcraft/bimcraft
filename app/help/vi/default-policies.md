---
title: "Chính sách mặc định: đặt những gì một công trình mới bắt đầu với"
summary: Khai báo một lần loại tường, các tầng, tờ đầu tiên, nhãn LOD, đơn vị và công cụ mà một công trình mới bắt đầu với, cho dự án hệ mét và dự án đơn vị Anh, và chia sẻ các chính sách trong văn phòng dưới dạng một tệp nhỏ.
keywords: mặc định, chính sách mặc định, chính sách, tiêu chuẩn văn phòng, mặc định văn phòng, mẫu, công trình mới, loại tường đầu tiên, tường hệ mét, xây gạch, LOD, mức độ phát triển, tờ đầu tiên, giấy, tỷ lệ, tầng, chiều cao tầng, tên tầng, công cụ tường, đơn vị, chia sẻ, xuất, nhập, json
from: 42379aa5
---

## Bạn sẽ làm gì

Cho BimCraft biết một công trình mới nên bắt đầu với điều gì, để không ai trong văn phòng phải đổi cùng những thứ đó mỗi lần. Đây là một tiện ích bổ sung: nó tắt cho đến khi bạn bật, và chính sách nào bạn không đặt sẽ giữ nguyên mặc định của BimCraft.

:::note
Đây là mặc định cho công trình **mới** và các thứ **mới**. Một dự án bạn đã bắt đầu sẽ không bị thay đổi.
:::

## Các bước

1. Mở Cài đặt, vào {{ui:Tiện ích bổ sung}} và bật {{ui:Chính sách mặc định}}.
2. Trong Cài đặt, mở thẻ **BimCraft** và chọn {{ui:Chính sách mặc định}} trong danh sách bên trái.
3. Đặt các chính sách bạn muốn. Mỗi chính sách bắt đầu ở **của BimCraft**, với giá trị đó trong ngoặc. Một chính sách có hộp **Hệ mét** và **Đơn vị Anh** nhận một giá trị cho mỗi loại dự án; chỉ điền những cái bạn cần.
4. Không có nút Lưu: mỗi thay đổi được lưu ngay khi bạn làm. Giá trị không dùng được sẽ bị từ chối bằng lời và giá trị cũ được giữ nguyên.
5. Nhấp {{ui:Công trình mới}}. Hộp thoại được điền từ các chính sách của bạn, và mỗi giá trị do một chính sách đặt sẽ hiển thị **từ Chính sách mặc định của bạn** bên cạnh. Bạn vẫn có thể đổi bất kỳ giá trị nào trước khi {{ui:Tạo}}.

## Các chính sách

- **Đơn vị của công trình mới**: đơn vị chuyển sang giá trị này khi Tạo.
- **Số tầng**, **Tên tầng** và **Chiều cao tầng**. Trong tên, `{n}` đếm 1, 2, 3; `{n0}` đếm 0, 1, 2; `{nn}` và `{nn0}` làm tương tự với hai chữ số. Vậy `Tầng {nn0}` cho Tầng 00, Tầng 01, Tầng 02.
- **Loại tường đầu tiên**: thứ mà công cụ Tường vẽ trước. Một văn phòng hệ mét có thể bắt đầu với Exterior masonry 300 mm trong khi các dự án đơn vị Anh giữ Exterior 2×6.
- **Nhãn LOD trên các loại tường khởi đầu**: mức độ phát triển (LOD 100 đến 500) mà chín loại khởi đầu hiển thị ở mọi nơi có liệt kê loại. Xem [Xây dựng tổ hợp tường](topic:wall-assemblies).
- **LOD của loại tường mới tạo**: nhãn mà loại mới bắt đầu với trong trình chỉnh sửa loại. Bạn có thể đổi ở đó.
- **Tờ đầu tiên**: khổ giấy, tỷ lệ, số tờ và tên của nó (dùng `{level}` cho tên tầng thấp nhất), hoặc không có tờ đầu tiên nào.
- **Cỡ chú thích trên giấy** (Cài đặt › Chung › Chính sách mặc định): chiều cao của văn phòng, tính bằng milimét khi in, cho ghi chú, chữ kích thước, nhãn, tên phòng, chữ trong vòng lưới, tiêu đề khung nhìn và chữ bảng thống kê. Một công trình mới lấy các giá trị này khi Tạo và giữ chúng trong tệp của nó. Xem [Vẽ ở kích thước thật, chú thích theo tỷ lệ](topic:annotation-sizes).
- **Công cụ đang hoạt động sau khi Tạo**: Chọn, như BimCraft tự làm, hoặc Tường, để hai cú nhấp đầu tiên trên mặt bằng đã vẽ được một bức tường.

## Bố cục bảng thống kê: tiêu chuẩn văn phòng

Trong **Cài đặt › Chung › Chính sách mặc định**, dưới **Bố cục bảng thống kê (tiêu chuẩn văn phòng)**, đặt cách mỗi bảng được nhóm, có hay không có tổng phụ và tổng cộng, tiêu đề và kiểu chữ của tiêu đề cột. Mọi bảng không tự đặt sẽ lấy các giá trị này, bất kể ai thiết lập. Xem [Bố trí, lưu và xuất bảng thống kê](topic:schedule-layouts).

## Chia sẻ trong văn phòng

1. Trong Cài đặt, mở thẻ **Chung** và chọn {{ui:Chính sách mặc định}}.
2. Nhập **Tên văn phòng** nếu bạn muốn. Tên này được ghi vào tệp.
3. Nhấp {{ui:Lưu vào tệp}}. Bạn nhận được một tệp nhỏ kết thúc bằng `.ccdefaults.json`.
4. Trên máy tính khác, bật tiện ích bổ sung, mở cùng nơi và nhấp {{ui:Tải từ tệp}}. Các chính sách trong tệp sẽ thay thế các chính sách trên máy đó.

Thẻ Chung cũng có **Hệ đơn vị của dự án mới**, áp dụng cho mọi ứng dụng có tiện ích bổ sung, và {{ui:Đặt lại mọi chính sách}}. {{ui:Đặt lại về mặc định của BimCraft}} trên thẻ BimCraft chỉ xóa các chính sách của BimCraft.

## Điều nên biết

- Tệp là JSON mở, dạng văn bản thuần: một danh sách tên chính sách và giá trị. Chính sách mà tệp nêu nhưng phiên bản này không biết sẽ bị bỏ qua và được nêu tên trong thông báo; phần còn lại vẫn được tải.
- Các chính sách được giữ trong trình duyệt này, cho mọi ứng dụng CadCraft trên máy tính này. Chúng không được lưu trong tệp công trình và không được đồng bộ giữa các máy tính: hãy dùng tệp.
- Nhãn LOD của loại khởi đầu lấy từ chính sách trên máy tính này. Một loại bạn tạo làm bản sao của loại khởi đầu sẽ mang nhãn của nó trong tệp công trình.
- BimCraft không có cài đặt độ chính xác, nên không có chính sách độ chính xác ở đây.
- Công trình bắt đầu từ một mẫu sẽ mang các tầng và tờ của chính mẫu đó. Chính sách loại tường và chính sách đơn vị vẫn áp dụng.
- Tắt tiện ích bổ sung thì mọi thứ trở lại mặc định của BimCraft. Chính sách của bạn được giữ lại để dùng khi bạn bật lại.
