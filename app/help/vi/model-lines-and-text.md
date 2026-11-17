---
title: Đường và văn bản mô hình: vẽ trong mô hình, trên mặt phẳng làm việc
summary: Đường mô hình là một đường thẳng, đa tuyến hoặc cung tròn nằm trong mô hình và hiện trong mọi khung nhìn thấy nó. Văn bản mô hình là chữ 3D có độ sâu thực. Cả hai đều được vẽ trên mặt phẳng làm việc.
keywords: đường mô hình, văn bản mô hình, văn bản 3D, chữ, biển hiệu, biển báo, đường 3D, cung tròn, đa tuyến, mặt phẳng làm việc, văn bản đùn, phông chữ, độ sâu, đường chi tiết, đường bản vẽ, chú thích, IfcAnnotation
from: fc9cccb5
---

## Bạn sẽ làm gì

Vẽ các đường và chữ là một phần của mô hình, không thuộc riêng một khung nhìn.

## Các bước

1. Đặt mặt phẳng làm việc trước (xem **Mặt phẳng làm việc**). Mặt phẳng nằm ngang được vẽ trên mặt bằng; mặt phẳng đứng được vẽ trong Trình xem mặt phẳng làm việc.
2. Để vẽ đường, chọn **Đường mô hình** trong menu **Bản dựng** rồi chọn **Đường thẳng**, **Đa tuyến** hoặc **Cung tròn (ba điểm)**:
   - đường thẳng cần hai lần nhấp;
   - đa tuyến cần một lần nhấp cho mỗi điểm, rồi Enter hoặc nhấp đúp. Nhấp vào điểm đầu tiên sẽ khép kín nó;
   - cung tròn cần ba lần nhấp: điểm đầu, một điểm nó đi qua, và điểm cuối.
3. Để tạo chữ, chọn **Văn bản mô hình**. Nhập các từ, đặt chiều cao chữ hoa và độ sâu, rồi nhấp nơi chữ bắt đầu (đầu bên trái của đường cơ sở).
4. Chọn một đường hoặc chữ để xem nó trong **Thuộc tính**. Nội dung, chiều cao và độ sâu của chữ có thể đổi ở đó. Nhấn {{key:Delete}} để xóa.

## Nơi chúng hiển thị

- Đường mô hình hiện trên mặt bằng của tầng nó nằm, trong khung nhìn 3D, trong bảng mặt đứng và mặt cắt, và trong Trình xem mặt phẳng làm việc khi nó nằm trên mặt phẳng làm việc. Đường bản vẽ (Chú thích, Đường thẳng) chỉ thuộc về một khung nhìn.
- Văn bản mô hình là hình khối đặc: nó hiện ở bất kỳ đâu mô hình hiện, trên mặt bằng, trong 3D, trên mặt đứng và mặt cắt, và trên bản vẽ tờ.
- Đường mô hình chưa được vẽ trên các tờ in. Văn bản mô hình thì có.

## Phông chữ

Văn bản mô hình dùng cùng phông chữ với tờ và PDF: Liberation Sans, theo SIL Open Font License. Chữ mà phông không có sẽ được vẽ thành dấu hỏi và bạn được thông báo chữ nào. Chỉ có một phông và một độ đậm. Các chữ được cách nhau theo độ rộng của chính phông, không có kerning.

## Trong tệp IFC

- Đường mô hình là một IfcAnnotation với kiểu đối tượng ModelLine. Hình dạng của nó là một đường cong 3D: một đa tuyến, hoặc một vòng tròn đã cắt xén cho cung tròn.
- Văn bản mô hình là một IfcBuildingElementProxy với kiểu đối tượng ModelText. Hình dạng của nó là một khối đùn cho mỗi mảnh chữ, với các lỗ của chữ như O và B. Khối lượng của nó là diện tích mặt và thể tích (diện tích mặt nhân độ sâu).

## Điều nên biết

- Mọi kích thước đều được tạo theo yêu cầu. Chỉ một đường không có chiều dài, một cung có ba điểm thẳng hàng, hoặc một chữ không có ký tự nào bị từ chối, vì không có gì để tạo.
- Mỗi đường, và mỗi chữ hay thay đổi của nó, là một bước hoàn tác.
