---
title: Nhãn phòng và nhãn diện tích
summary: Đặt nhãn có số, tên và diện tích lên một phòng hoặc khu vực. Nhãn đi theo phòng và có kích thước theo chiều cao trên giấy.
keywords: nhãn, nhãn phòng, nhãn diện tích, ghi nhãn phòng, ghi nhãn diện tích, ghi nhãn tất cả, ghi nhãn tất cả chưa có nhãn, chữ, chiều cao chữ, chiều cao trên giấy, chú thích
from: 67059d8a
---

## Bạn sẽ làm gì

Ghi nhãn phòng và khu vực từng cái một hoặc tất cả cùng lúc, và di chuyển nhãn đến nơi dễ đọc.

## Các công cụ ở đâu

- Bố cục dải lệnh: {{ui:Kiến trúc}} › **Phòng & Diện tích** › {{ui:Ghi nhãn phòng}} và {{ui:Ghi nhãn diện tích}}.
- Bố cục cổ điển: thanh Vẽ › menu {{ui:Phòng}}.
- Phòng hoặc khu vực đã chọn: Thuộc tính › {{ui:Thêm nhãn}}.

## Các bước

1. Chọn {{ui:Ghi nhãn phòng}} rồi nhấp vào một phòng, nơi nhãn nên nằm.
2. Hoặc nhấn {{ui:Ghi nhãn tất cả chưa có nhãn}} trong dòng: mỗi phòng ở tầng này chưa có nhãn sẽ được ghi nhãn, ở giữa phòng. Đây là một bước hoàn tác.
3. Để di chuyển nhãn, chọn nó bằng công cụ Chọn rồi kéo. Thuộc tính có {{ui:Đặt lại vào giữa}}.
4. {{ui:Ghi nhãn diện tích}} hoạt động tương tự cho khu vực.

## Nhãn làm gì

- Nhãn thể hiện số, tên và diện tích, theo đơn vị hiển thị của bạn.
- Nhãn đi theo phòng: đổi tên phòng hoặc di chuyển tường, và chữ cũng như vị trí của nhãn thay đổi trong cùng một bước.
- Nhãn được đo theo kích thước trên giấy: {{ui:Chiều cao chữ trên giấy}} tính bằng milimét (bắt đầu từ 2.5). Ở tỷ lệ khung nhìn 1:50, nhãn 2.5 mm cao 125 mm trong mô hình; ở 1:100 là 250 mm.
- Phòng có nhãn sẽ hiển thị nhãn thay cho nhãn chữ thông thường.
- Khi phòng hoặc khu vực của nó không còn, nhãn cũng mất theo. Hoàn tác khôi phục cả hai.

## Trong IFC

Nhãn là một IfcAnnotation (ObjectType ROOMTAG hoặc AREATAG) với chữ của nó là một chuỗi văn bản, và GlobalId của đối tượng mà nó gọi tên. Văn bản trong tệp cho diện tích bằng mét vuông.

## Chưa xây dựng

- Hình dạng nhãn tùy chỉnh, và đường dẫn.
- Nhãn trên cửa đi, cửa sổ và tường là một công cụ riêng (xem các kiểu nhãn của tờ vẽ).

Xem thêm [Phòng và vách ngăn phòng](topic:rooms-and-separators).
