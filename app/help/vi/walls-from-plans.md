---
title: Tường từ bộ bản vẽ (PDF hoặc bản quét)
summary: Biến các trang của một PDF, hoặc một bản vẽ quét, thành tường, cửa đi và cửa sổ, mỗi trang một tầng, với trang được giữ bên dưới mỗi mặt bằng.
keywords: pdf, bản vẽ, bộ bản vẽ, quét, bản vẽ quét, tiff, vẽ lại, tường từ pdf, tường từ bản quét, tầng, trang, tỷ lệ, cửa đi, cửa sổ, hướng mở, ngưỡng, nền
from: b70d9db7
---

## Mục tiêu

Bắt đầu một mô hình từ các bản vẽ bạn có trên giấy: một PDF (vẽ bằng đường nét, hoặc một bản quét bên trong PDF) hoặc một bản quét (PNG, JPEG, TIFF với một hoặc nhiều trang). Mỗi trang trở thành các tường, cửa đi và cửa sổ của một tầng.

## Các bước

1. Bật {{ui:Vẽ}}. Chọn {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}}, rồi {{ui:Chọn một bản vẽ…}} và chọn PDF hoặc bản quét.
2. **Trang và tầng.** Mỗi trang được liệt kê cùng với loại của nó (**nét vẽ**, hoặc **một hình ảnh (đã vẽ lại)**) và tầng mà nó đi tới: một trong các tầng bạn có, **một tầng mới phía trên các tầng khác**, hoặc **bỏ trang này ra**. Các trang được ghép với các tầng của bạn theo thứ tự; thay đổi bất kỳ trang nào trong số đó.
3. **Tỷ lệ.** Với PDF, cho biết nó được vẽ theo tỷ lệ nào (**1 : 100**, **1 : 50**…). Với mọi thứ khác, hoặc khi bạn không biết, chọn **từ một khoảng cách tôi biết**: nhấp vào hai đầu của một kích thước hoặc một thanh tỷ lệ trên bản xem trước, rồi nhập khoảng cách thật. Tất cả các trang dùng chung một tỷ lệ.
4. Chọn **loại tường** và **chiều cao của một tầng mới**. Để **Giữ mỗi trang bên dưới mặt bằng của tầng của nó** được đánh dấu để xem mỗi trang dưới dạng nét mảnh bên dưới mặt bằng của nó.
5. Dòng bên dưới các lựa chọn cho biết sẽ tạo bao nhiêu tường, cửa đi và cửa sổ, và trên bao nhiêu tầng. Nhấp {{ui:Tạo chúng}}.

## Cách đọc một trang

- **Tường** được tạo từ các cặp đường song song cách nhau tối đa 600 mm (hai mặt của một tường); tường có độ dày bằng khoảng hở. Nét đổ bóng và chữ được bỏ qua.
- **Cửa đi và cửa sổ.** Một khoảng hở trong tường (500 đến 2600 mm) có cung mở cửa được vẽ bên cạnh là một cửa đi, bản lề ở một đầu của khoảng hở và mở về phía cung. Một khoảng hở hoặc một tường có các đường ngưỡng bên trong là một cửa sổ. Một khoảng hở không có cả hai thì là cửa đi nếu rộng đến 1300 mm, và là cửa sổ nếu rộng hơn.
- **Bản quét** trước hết được nắn thẳng nếu lúc quét nó bị nghiêng (hộp thoại cho biết điều này), được chuyển thành đen trắng, làm sạch các đốm và được vẽ lại; một **trang PDF là hình ảnh** được vẽ trước rồi được xử lý theo cách tương tự. Quá trình vẽ lại tìm tâm của mỗi nét và khớp các đường thẳng và cung với nó, và không dùng mạng hay mô hình đã huấn luyện nào.
- **Các phòng** tự theo các vòng khép kín mà các tường tạo ra. Khi PDF có chữ, một phòng nhận tên từ chữ bên trong nó (lớn nhất; một kích thước, một tỷ lệ hay số hiệu tờ không phải là tên). Bản quét không có chữ, nên các phòng của nó giữ tên mà chương trình đặt cho chúng.
- **Mọi thứ đọc được từ trang đều được đánh dấu là chưa xác minh**: mỗi tường, cửa đi, cửa sổ và phòng có một hộp đứt nét và dấu "?" trên mặt bằng cho đến khi bạn kiểm tra. Chọn những gì bạn đã kiểm tra và dùng {{ui:Công cụ}} › {{ui:Đánh dấu đã kiểm tra}}. Xem [Đánh dấu phần tử đã kiểm tra hoặc đã xác minh tại hiện trường](topic:verification).

## Kết quả

- Các tường, cửa đi, cửa sổ và phòng trên mỗi tầng, cùng bất kỳ tầng mới nào, đều là một bước: {{key:Mod+Z}} lấy lại mọi thứ.
- Mỗi trang dưới dạng nét mảnh bên dưới mặt bằng của tầng của nó, được liệt kê trong {{ui:Bản dựng}} › {{ui:Từ bản vẽ…}} với {{ui:Xóa}}.

:::note
Đây là những gì các đường cho ra, với độ chính xác của trang. Một bản quét có thể làm mất một tường mờ, nối hai tường rất gần nhau, hoặc tìm thấy một tường trong một vết bẩn; một cung mở cửa mà bản vẽ không thể hiện sẽ biến một khoảng hở thành cửa đi thông thường. Hãy kiểm tra từng tầng với trang trước khi dựa vào nó, và sửa những gì sai bằng các công cụ {{ui:Tường}}, {{ui:Cửa đi}} và {{ui:Cửa sổ}}.
:::
