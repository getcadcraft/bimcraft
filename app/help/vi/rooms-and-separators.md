---
title: Phòng và vách ngăn phòng
summary: Chọn một phòng để đặt tên, đánh số và xem diện tích, chu vi và thể tích. Vẽ vách ngăn phòng nơi hai phòng gặp nhau mà không có tường giữa.
keywords: phòng, các phòng, vách ngăn phòng, đường phân chia, không gian, IfcSpace, tên, số, diện tích, chu vi, thể tích, không gian mở, chia phòng, bếp và phòng khách, không khép kín
from: d4c1d66b
---

## Bạn sẽ làm gì

Đặt tên cho các phòng do tường tạo thành, và chia một phòng mở thành hai mà không cần tường.

## Các công cụ ở đâu

- Bố cục dải lệnh: {{ui:Kiến trúc}} › **Phòng & Diện tích** › {{ui:Phòng}} và {{ui:Vách ngăn phòng}}.
- Bố cục cổ điển: thanh Vẽ › menu {{ui:Phòng}}.
- Kiểu menu bất kỳ: các lệnh có tên Room và Room Separator; bảng lệnh sẽ tìm thấy chúng.

## Các bước

1. Vẽ tường. Mỗi vòng tường khép kín đã là một phòng: BimCraft tạo nó, đánh số và gán diện tích khi bạn vẽ.
2. Chọn {{ui:Phòng}}. Di chuyển trên mặt bằng: phòng dưới con trỏ sáng lên cùng diện tích, chu vi và thể tích.
3. Để đặt tên phòng nhanh, nhập trước một {{ui:Tên}} và một {{ui:Số}} trong dòng, rồi nhấp vào phòng. Số tự tăng một cho phòng tiếp theo (101, 102; A-09, A-10).
4. Hoặc chỉ cần nhấp một phòng: nó được chọn, và Thuộc tính có tên, số, diện tích, chu vi, thể tích và nhãn của nó.
5. Để chia một phòng mở, chọn {{ui:Vách ngăn phòng}} và nhấp hai điểm: từ tường đến tường, hoặc từ tường đến một vách ngăn khác. Tiếp tục nhấp để tạo chuỗi; Enter, Esc hoặc nhấp đúp sẽ kết thúc.

## Vách ngăn làm gì

- Nó giới hạn phòng như một bức tường không có độ dày. Diện tích của hai phòng cộng lại đúng bằng phòng ban đầu.
- Phòng giữ phần giữa của phòng cũ sẽ giữ tên và số của nó. Phòng còn lại là phòng mới.
- Vách ngăn dừng giữa không gian mở, không chạm vào gì ở một đầu, thì không chia gì cả. Kéo dài nó ra và nó sẽ chia.
- Phần vách ngăn nằm trong tường bị bỏ qua, nên bạn có thể bắt điểm vào đường tâm tường.
- Chọn một vách ngăn rồi nhấn Delete để xóa: hai phòng hợp lại thành một. Hoàn tác đặt nó lại.

## Nếu không có phòng nơi bạn nhấp

Thanh trạng thái cho biết điều đó: các tường không khép kín ở đó. Hãy đóng khoảng hở, hoặc vẽ một vách ngăn băng qua nó. Không có gì bị từ chối; chỉ là chưa có phòng khép kín.

## Trong IFC

Một phòng là một IfcSpace với số (Name), tên (LongName) và Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Thể tích bằng diện tích nhân chiều cao đến tầng phía trên.

Vách ngăn phòng là một IfcVirtualElement, thực thể IFC dùng cho một ranh giới chưa được dựng. Nó có một đường và không có khối, nên chương trình khác không đọc thành tường và không tính gì cho nó.

## Chưa xây dựng

- Vách ngăn cong.
- Phòng theo trần nghiêng: thể tích luôn là diện tích nhân chiều cao tầng.
- Các quan hệ ranh giới không gian (IfcRelSpaceBoundary) không được ghi, cho tường hay vách ngăn.

Xem thêm [Nhãn phòng và nhãn diện tích](topic:room-and-area-tags), [Diện tích và ranh giới diện tích](topic:areas-and-area-boundaries).
