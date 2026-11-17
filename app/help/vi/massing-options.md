---
title: Các phương án khối tích đặt cạnh nhau
summary: Giữ nhiều phương án khối tích trong cùng một mô hình, chọn một phương án hiện hành, kiểm tra với đường giới hạn xây dựng và quyền địa dịch của công trường, nhận khối tích từ ModelCraft, và triển khai phương án đã chọn thành tường và sàn.
keywords: khối tích, khối, phương án, các phương án, bộ phương án, sơ đồ, thiết kế ý tưởng, giai đoạn 2, phương án thay thế, so sánh phương án, phương án hiện hành, khối xây dựng, đẩy kéo, modelcraft, civilcraft, tổng diện tích sàn, diện tích hình chiếu, thể tích, triển khai khối, địa dịch, đường giới hạn xây dựng, khoảng lùi
from: 69a01459
---

## Bạn sẽ làm gì

Giữ các phương án khối tích của một ý tưởng thiết kế trong một mô hình thay vì trong các tệp riêng: nhiều khối công trình đặt cạnh nhau, một trong số đó là **phương án hiện hành**, các phương án còn lại được giữ để so sánh.

Một phương án khối tích là một khối công trình: một đường bao được nâng lên một chiều cao, với một số tầng. Nó chưa phải là tường. Bạn có thể giữ bao nhiêu phương án tùy ý, nhóm trong **bộ phương án** (các phương án trong cùng một bộ là phương án thay thế cho nhau).

## Giữ một phương án

1. Mở {{ui:Từ chương trình phòng đến khối công trình}}, nhập chương trình phòng và đường bao, rồi chọn {{ui:Tìm các phương án}}.
2. Chọn một trong các phương án được liệt kê.
3. Trong {{ui:Các phương án khối tích trong mô hình}}, nhập tên cho {{ui:Bộ phương án}} nếu bạn muốn, rồi chọn {{ui:Giữ phương án đã chọn}}.

Phương án xuất hiện trong mô hình như một khối công trình và trong danh sách, cùng với số tầng, diện tích hình chiếu, tổng diện tích sàn và thể tích. Chưa có gì được xây dựng. Giữ phương án khác theo cách tương tự.

Phương án đầu tiên của một bộ là phương án hiện hành của bộ đó. Mỗi bước là một bước hoàn tác.

## Phương án hiện hành

Mỗi bộ có một phương án là phương án hiện hành. Điều đó có hai ý nghĩa:

- **Các tầng của nó được tính là diện tích sàn của công trình.** Phương án hiện hành có một không gian cho mỗi tầng, mang tổng diện tích của tầng đó, nên bất cứ thứ gì đọc diện tích sàn đều thấy phương án đang có hiệu lực và không thấy phương án nào khác.
- **Nó được kiểm tra với công trường.** Nếu nó nằm ngoài ranh giới công trường, vượt đường giới hạn xây dựng hoặc nằm trên quyền địa dịch, một cảnh báo nêu tên nó sẽ xuất hiện trong {{ui:Sự cố}}. Đó chỉ là cảnh báo: không có gì bị từ chối. Các phương án không hiện hành thì không được kiểm tra.

Chọn {{ui:Đặt làm hiện hành}} trên một phương án khác để thay đổi.

{{ui:Ẩn các phương án không hiện hành}} ẩn các phương án còn lại trong khung nhìn 3D. Điều này chỉ áp dụng cho trình duyệt này và không được lưu trong tệp.

## Khối tích từ ModelCraft

Trong ModelCraft, {{ui:Xuất}} › {{ui:Khối tích sang BimCraft…}} gửi mỗi nhóm hoặc cấu kiện thành một phương án. BimCraft mở tệp với các phương án được liệt kê.

Để đưa chúng vào một mô hình đang mở, chọn {{ui:Thêm phương án khối tích từ tệp}} và chọn tệp `.ifc`. Các khối sẽ vào dưới dạng phương án của một bộ, trong một bước hoàn tác, đứng đúng vị trí đã được mô hình hóa. Một tệp khối công trình từ CivilCraft cũng hoạt động tương tự.

Phương án được đánh dấu "(hình dạng đã đơn giản hóa)" không phải là khối đứng đơn giản trong ModelCraft (nó lùi bậc, dốc hoặc không khép kín). Khối của nó ở đây là đường bao của đáy được nâng lên đến chiều cao; diện tích sàn và thể tích của nó là các giá trị đo từ chính khối đặc.

## Triển khai phương án đã chọn

Chọn {{ui:Triển khai}} trên một phương án. Nó trở thành các tầng (tổng bằng số tầng của nó), tường bao quanh đường bao trên mỗi tầng và một bản sàn trên mỗi tầng, trong một bước hoàn tác. Phương án rời khỏi danh sách; các phương án khác giữ nguyên. Hiện chưa có mái.

{{ui:Đổi tên}} thay đổi tên của phương án, {{ui:Xóa}} đưa nó ra khỏi mô hình. Xóa phương án hiện hành sẽ làm phương án khác đầu tiên của bộ trở thành phương án hiện hành.

## Bạn sẽ thấy gì

- Mỗi phương án được giữ là một khối trong khung nhìn 3D và một dòng trong danh sách.
- "(hiện hành)" bên cạnh một phương án của mỗi bộ.
- Một cảnh báo trong {{ui:Sự cố}} khi phương án hiện hành vượt ranh giới công trường, một đường giới hạn xây dựng hoặc một quyền địa dịch.

## Nên biết

- Trong tệp IFC, một phương án là một building element proxy với bộ thuộc tính `CadCraft_SiteMass` (bộ phương án, tên phương án và việc nó có phải là hiện hành hay không đều nằm trong bộ này). Các tầng của phương án hiện hành là các không gian kiểu `MassingFloor`. Các chương trình khác đọc proxy như một cấu kiện chung.
- Giữ một phương án không bao giờ thêm tầng; triển khai một phương án thì có.
- Trợ lý có thể liệt kê các phương án đã giữ, giữ một phương án, đặt một phương án làm hiện hành, đổi tên, triển khai hoặc xóa nó.
