---
title: Family và kích thước của chúng
summary: Cửa đi, cửa sổ và đồ nội thất được tổ chức theo family. Mỗi kích thước của một family là một kiểu trong tệp IFC, nên danh sách kiểu trong BimCraft vẫn ngắn, còn các chương trình khác đọc các kiểu đơn thuần.
keywords: family, kiểu, kích thước, kiểu cửa đi, kiểu cửa sổ, nội thất, bàn, kệ, tủ, kích thước mới, nhân bản, đặt family, tệp family, ccfamily, thư viện IFC, thư viện dự án, nhóm, hiển thị, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Family là gì

Family là một loại vật thể có nhiều kích thước: một cửa đơn mở quay có chiều rộng 32, 36 và 42 inch, hoặc một cái bàn có loại dài và loại ngắn. Trong BimCraft, bạn thấy family một lần, với các kích thước nằm bên dưới, thay vì một danh sách dài các kiểu.

IFC không có family. Trong tệp, mỗi kích thước là một kiểu thông thường (kiểu cửa đi, kiểu cửa sổ, kiểu đồ nội thất…), và family là một nhóm liệt kê các kích thước của nó. Các chương trình BIM khác đọc các kiểu và nhóm đúng như chúng là; BimCraft đọc lại family từ chúng.

## Tìm family ở đâu

- Nhóm **Family** trong trình duyệt dự án liệt kê các family trong mô hình này, với số kích thước của mỗi family và số lượng đã đặt. Bên dưới là các **Family khởi đầu**: cửa đi và cửa sổ của công cụ Cửa đi và Cửa sổ, cùng một cái bàn, một kệ và một tủ đế.
- {{ui:Bản dựng}} › {{ui:Family…}} hiển thị cùng danh sách trong một cửa sổ.
- Nhấn một family để mở: các kích thước của nó, giá trị của từng kích thước, và số phần tử dùng mỗi kích thước.

## Cửa đi và cửa sổ

Công cụ Cửa đi và Cửa sổ liệt kê các family thuộc loại đó, kèm một **danh sách kích thước** bên cạnh. Chọn một kích thước, hoặc gõ **W** và **H**: một chiều rộng và chiều cao chưa có kích thước nào sẽ trở thành một kích thước mới của family khi bạn đặt cửa. Các cửa cùng kích thước dùng chung một kiểu.

Trong {{ui:Thuộc tính}}, cửa đi hoặc cửa sổ được chọn hiển thị **Family** và **Kích thước** của nó. Chọn kích thước khác trong danh sách, hoặc gõ chiều rộng hoặc chiều cao mới. {{ui:Mở family}} mở family mà nó thuộc về.

Khung của mỗi cửa đi hoặc cửa sổ theo độ dày tường của chính nó, như trước khi có family. Kiểu của kích thước cũng giữ cửa được vẽ trong tường 140 mm, cho các chương trình đọc kiểu.

## Kích thước mới từ family này

1. Mở family.
2. Dưới **Kích thước mới từ family này**, nhập các giá trị của nó (Width, Height và các tham số khác của family) và, nếu muốn, một tên. Nếu không có tên, kích thước sẽ được đặt tên theo giá trị của nó.
3. Nhấn {{ui:Tạo kích thước}}.

Hai kích thước không thể có cùng giá trị. **Đổi tên** đổi tên một kích thước; **Gỡ bỏ** gỡ một kích thước không ai dùng; **Chọn** chọn các phần tử của kích thước đó.

## Đặt đồ nội thất

1. {{ui:Bản dựng}} › {{ui:Đặt family}}, hoặc {{ui:Đặt}} trong cửa sổ của một family.
2. Trong thanh, chọn family và kích thước của nó.
3. Nhấn lên mặt bằng để đặt trên tầng. Nhấn {{key:R}} để xoay 90° trước khi nhấn. {{key:Esc}} để dừng.

**{{ui:Thuộc tính}}** của một món đã đặt cho biết kích thước, vị trí và góc xoay của nó; {{key:Delete}} xóa nó. Mọi món cùng kích thước dùng chung hình dạng của kích thước đó, nên đổi family sẽ đổi tất cả.

## Kích thước từ bảng

{{ui:Kích thước từ bảng…}} trong cửa sổ của một family đọc một tệp CSV (phân tách bằng dấu phẩy, dấu chấm phẩy hoặc tab). Hàng đầu tiên đặt tên cho các cột: tên hoặc nhãn của một tham số, và tùy chọn `Name`. Chiều dài tính bằng milimét trừ khi bạn ghi đơn vị (`1.2 m`, `36 in`). Cột Yes / No nhận yes, no, true, false, 1 hoặc 0, và tham số không có cột sẽ giữ giá trị mặc định. Mỗi hàng thành một kích thước, trong một bước bạn có thể hoàn tác; kích thước đã có sẵn sẽ bị bỏ qua. Một hàng không đọc được, hoặc family không vẽ được, sẽ từ chối cả bảng và nêu rõ dòng của nó. Tối đa 200 hàng và 1 MB. {{ui:Lưu các kích thước thành bảng}} ghi lại cùng bảng đó.

## Đặt cho từng phần tử

Tham số được đánh dấu **Theo phần tử** trong trình chỉnh sửa (một Yes / No thêm thanh ngang, nhãn, hoặc vật liệu) không thuộc về kích thước: hai cửa cùng kích thước có thể khác nhau. Chọn phần tử và **{{ui:Thuộc tính}}** hiển thị các tham số này; đổi một tham số và phần tử đó được vẽ lại với hình dạng riêng (đồ nội thất và thiết bị lắp đặt có hình dạng riêng, cửa đi và cửa sổ được làm lại trong tường của chúng). Đặt tất cả về mặc định và nó sẽ quay lại hình dạng của kích thước.

## Mức chi tiết

{{ui:Bản dựng}} › {{ui:Family…}} › **Mức chi tiết** đặt, cho mọi family trong mô hình, những gì được lưu trong các khối đặc và được vẽ trong ký hiệu mặt bằng: **Mịn** giữ mọi thứ, **Vừa** và **Thô** bỏ các phần mà trình chỉnh sửa đánh dấu là chi tiết hơn (tệp nhỏ hơn, hiển thị nhanh hơn). **Tự động** lưu mọi thứ và để khung nhìn của tờ chọn theo tỷ lệ: 1:50 trở lên là mịn, 1:100 là vừa, 1:200 trở xuống là thô. Một bước bạn có thể hoàn tác.

## Nhân bản một family

Bạn không cần bắt đầu từ đầu. {{ui:Nhân bản}} sao chép một family cùng các tham số, khối đặc và kích thước dưới một tên mới. Hãy sửa bản sao trong trình chỉnh sửa; bản gốc giữ nguyên.

## Tệp family

- {{ui:Lưu tệp family}} lưu một `.ccfamily.json`: các tham số, khối đặc và kích thước của family. Mở nó trong mô hình khác bằng {{ui:Mở tệp family…}} trong nhóm Family.
- {{ui:Lưu thành IFC}} lưu family thành một tệp IFC nhỏ: các kiểu của kích thước và nhóm của nó, được khai báo bởi một thư viện dự án IFC. Các chương trình khác mở nó như một tập các kiểu; BimCraft mở lại nó như family.

Tệp family mở tại đây được đọc như dữ liệu và được kiểm tra trước khi ghi bất cứ điều gì. Family có khóa đã có trong mô hình sẽ vào như một family riêng. Family chứa các family khác (xem {{ui:Họ cấu kiện bên trong}} trong trợ giúp của trình chỉnh sửa) sẽ mang theo chúng: tệp liệt kê chúng, và mô hình giữ những cái đã có.

## Family trong Thư viện

Mở {{ui:Family…}} và chọn {{ui:Từ Thư viện…}} để xem các family đã được chia sẻ trong Thư viện. {{ui:Thêm vào dự án này}} đọc một family như một tệp family: BimCraft kiểm tra mọi trường trước khi tạo bất cứ thứ gì, family được thêm vào như một family riêng, và nó mở trong trình chỉnh sửa. Thêm là một bước hoàn tác. Để chia sẻ family của riêng bạn, dùng {{ui:Lưu tất cả thành thư viện}} và gửi tệp lên Thư viện (nhân viên Thư viện đăng tệp family bằng một lệnh, và mỗi family là một mục riêng với các kích thước của nó). Nếu không kết nối được Thư viện, danh sách sẽ báo và không có gì thay đổi.

## Kiểu của các chương trình khác

Các kiểu do chương trình khác tạo cũng hiển thị trong nhóm Family, được nhóm theo cách đoán: theo phần tên của phần tử trước dấu hai chấm đầu tiên, hoặc theo tên kiểu chỉ khác nhau ở số. Cửa sổ family cho biết đã dùng cách đoán nào. Chúng được liệt kê và bạn có thể chọn các phần tử của chúng, nhưng không được chỉnh sửa ở đây: chúng không có công thức family.

:::note
Cửa khởi đầu và cửa sổ khởi đầu được vẽ đúng như trước khi có family. Các tệp tạo trước family mở nguyên vẹn: cửa và cửa sổ của chúng hiển thị dưới family của chúng với các kích thước đang dùng, và chuyển sang một kích thước riêng lần đầu bạn đổi chúng.
:::

Xem thêm [Chỉnh sửa family](topic:family-editor) và [Cửa đi và cửa sổ](topic:doors-and-windows).
