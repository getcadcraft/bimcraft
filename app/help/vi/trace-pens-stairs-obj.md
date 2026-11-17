---
title: Dò một tầng, đặt nét bút theo khung nhìn, phác thảo cầu thang, mở tệp OBJ
summary: Hiển thị một tầng khác dạng nét đứt dưới mặt bằng và căn chỉnh nó; cho tường, cửa đi và cửa sổ nét bút riêng trong một khung nhìn; vẽ một đường đi bộ để tạo cầu thang; và mở lưới Wavefront OBJ.
keywords: tham chiếu dò, bóng mờ, nền, nét bút, độ dày nét, kiểu đường, ghi đè, cầu thang, phác thảo, chiếu nghỉ, OBJ, lưới, nhập, Wavefront
from: 333ebbde
---

## Dò một tầng

Chọn {{ui:Dò theo}} trong menu {{ui:Bản dựng}}, rồi chọn một khung nhìn trong danh sách: mặt bằng của tầng khác, mặt bằng trần của một tầng, hoặc một chú thích (cắt theo khung của nó). Tường, cột và sàn của nó hiển thị nét đứt dưới mặt bằng bạn đang vẽ. Di chuyển nó bằng cách nhấp một điểm gốc trên tham chiếu rồi nhấp đến chỗ điểm đó cần đến, hoặc gõ X, Y và một góc (nó xoay quanh tâm riêng). {{ui:Đặt lại}} đưa nó về chỗ cũ, {{ui:Ẩn}} gỡ nó đi. Nó chỉ là tham chiếu: không có gì chọn được nó, nó không được in và không được lưu trong IFC. BimCraft ghi nhớ nó cho mỗi tầng trong trình duyệt này.

## Nét bút theo khung nhìn

Chọn {{ui:Nét bút}}. Cho biết nét bút dùng để làm gì: tất cả tường, tất cả cửa đi, tất cả cửa sổ, loại của phần tử được chọn, hoặc các phần tử được chọn. Chọn độ dày, kiểu đường (liền, nét đứt, chấm) và màu, rồi {{ui:Áp dụng}}. Thay đổi chỉ áp dụng cho mặt bằng của tầng này. Một phần tử được chọn sẽ thắng một kiểu, và một kiểu thắng cả một loại. {{ui:Xóa tất cả}} gỡ chúng đi. Chúng được lưu trong trình duyệt này. Đánh dấu **Màu nét bút trong 3D** để tô màu các nét bút trên mô hình trong chế độ xem 3D (độ dày hay nét đứt là của đường, nên ở đó chỉ hiện màu); bỏ đánh dấu để trở lại. {{ui:In}} vẽ chúng lên tệp PDF của mặt bằng: độ dày được co theo màn hình (nét tường mặc định 1.75 pixels là 0.5 mm), nét đứt vẫn là nét đứt, và màu được in theo giá trị của chủ đề Giấy.

## Cầu thang từ phác thảo

Chọn {{ui:Phác thảo cầu thang}} và nhấp các góc của đường đi bộ, bắt đầu từ bậc dưới cùng. Một đường là cầu thang thẳng, hai đường gặp nhau ở góc vuông là hình chữ L, và ba đường (lên, ngang, xuống) là hình chữ U. Nhấn {{key:L}} để vẽ chiếu nghỉ: nhấp các góc của nó rồi nhấn {{key:Enter}}, và cạnh ngắn của nó đặt chiều rộng của cầu thang. Nhấn {{key:Enter}} để đặt cầu thang. Mỗi bậc được tính từ chiều dài đường bạn vẽ và số alzơ mà chiều cao cần. Sau đó nó là một cầu thang thông thường: đổi nó trong Thuộc tính, và giếng thang và tay vịn sẽ theo.

Đánh dấu **Biến thành họ** trong hàng của công cụ (hoặc nhấn {{key:F}}) trước khi nhấn {{key:Enter}} để đặt cầu thang dưới dạng một họ (cầu thang thẳng, chữ L hoặc chữ U). Nó vào như một phần tử duy nhất và mở trong trình chỉnh sửa họ với chiều rộng, bậc, tổng chiều cao, số bậc trong mỗi vế và khoảng hở của hình chữ U làm tham số, nên bạn có thể thêm kích thước, ký hiệu mặt bằng hoặc điểm nóng. Các bậc và chiều cao alzơ được suy ra từ chúng. Nó không có tay vịn hay giếng thang: những thứ đó thuộc về cầu thang thông thường.

## Mở tệp OBJ

Mở tệp `.obj` như mở bất kỳ tệp nào khác. Tệp OBJ không có đơn vị, nên BimCraft đọc theo mét với trục Y hướng lên, như hầu hết các chương trình ghi. Mỗi đối tượng hoặc nhóm trở thành một phần tử lưới trên một tầng duy nhất, và bạn có thể xem, đo, cắt mặt cắt, đặt vào mô hình và lưu thành IFC. Đường, đường cong và bề mặt bị bỏ qua, và dòng trạng thái nói như vậy.

Một đối tượng chính xác là một khối lăng trụ thẳng (lưới khép kín với hai mặt đầu song song, giống hệt nhau và các mặt bên phẳng vuông góc với chúng: một tấm sàn, một cột, một khối tường, một tấm có lỗ) được lưu trong IFC thành khối đùn của chính IFC với đường viền và độ sâu của nó, không phải một danh sách tam giác. Các chương trình khác đọc nó như một khối đặc thực sự, nó vẫn nhỏ gọn, và độ sâu và đường viền có thể sửa sau. Dòng trạng thái cho biết có bao nhiêu đối tượng được giữ theo cách đó. Bất cứ thứ gì không phải lăng trụ chính xác (một hình thu nhỏ dần, một lưới có một đỉnh bị dời, một lưới có khe hở) vẫn ở dạng tam giác. Một tệp STEP được đọc theo cách tương tự.
