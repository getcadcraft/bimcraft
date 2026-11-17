---
title: Nối ống và ống gió với thiết bị
summary: Bắt đầu hoặc kết thúc một ống hoặc ống gió tại một cổng để nó nhận kích thước và hệ thống của cổng và được cố định vào đó, rồi kiểm tra các kết nối — cổng hở, lệch kích thước và hệ thống, các đoạn không có nguồn.
keywords: mep, nối, kết nối, cổng, cổng hở, lệch kích thước, lệch hệ thống, nguồn, kiểm tra kết nối, cố định, theo, di chuyển thiết bị, ifcrelconnectsports, phối hợp
from: 29144fb0
---

## Bạn sẽ làm gì

Nối các đoạn với thiết bị để mô hình thành một hệ thống liền mạch: đầu ra của bơm nối với ống đi ra khỏi nó, cổ miệng gió nối với ống nhánh gió. Sau đó để BimCraft liệt kê những gì chưa được nối.

## Vẽ từ một cổng

1. Chọn {{ui:Ống}} hoặc {{ui:Ống gió}}.
2. Di chuyển con trỏ tới một cổng của thiết bị (các vòng tròn nhỏ; cổng hở được vẽ bằng màu cảnh báo). Con trỏ bắt vào cổng và hiện **trên một cổng**.
3. Bấm: đoạn bắt đầu ở độ cao của cổng và **nhận kích thước và hệ thống của cổng** (ống cũng nhận vật liệu thông thường của hệ thống). Dòng trạng thái cho biết nó đã nhận những gì.
4. Vẽ tiếp như thường lệ. Kết thúc một đoạn tại cổng khác cũng sẽ cố định đầu đó.

Đầu của đoạn tại một cổng được **cố định** vào cổng đó: di chuyển hoặc xoay thiết bị (trong Thuộc tính) thì đầu đoạn đi theo; sửa đoạn thì đầu đó vẫn ở trên cổng. Các góc khác của đoạn giữ nguyên vị trí, nên sau một lần di chuyển lớn, đoạn đầu có thể rời cổng theo góc: hãy di chuyển cả góc tiếp theo.

## Kiểm tra kết nối

Mở {{ui:Bản dựng}} và bấm {{ui:Kiểm tra kết nối}}. Danh sách dưới thanh hiển thị:

| Dòng | Ý nghĩa |
|---|---|
| Một cổng chưa được nối | Một thiết bị có một kết nối mà chưa có gì được vẽ tới |
| Không có gì ở đầu | Một đoạn kết thúc giữa không trung |
| Các cổng được nối có kích thước khác nhau | Một đoạn cỡ này gặp một cổng hoặc đoạn cỡ khác mà không có bộ thu (cỡ danh định của ống, hình dạng và các cạnh của ống gió) |
| Các cổng được nối có hệ thống khác nhau | Ví dụ, ống hồi gió nối vào miệng gió cấp |
| Ống nối với ống gió | Hai kết nối khác loại gặp nhau |
| Không có thiết bị nào trong mạng của nó cấp cho nó | Không có gì mà một đoạn nối tới, dù xa đến đâu, có đầu ra. Ống thoát, ống thoát nước mưa và ống thông hơi không được kiểm tra điều này: nước của chúng lấy từ các thiết bị vệ sinh |
| Cố định vào một cổng của thiết bị không còn trong mô hình | Thiết bị đã bị xóa; hãy vẽ lại đầu đó hoặc xóa đoạn |

Lỗi hiển thị trước. Bấm một dòng để chọn đối tượng mà nó nêu tên. {{ui:Đóng}} ẩn danh sách. Kiểm tra chỉ đọc mô hình như đã vẽ: nó kiểm tra kết nối và kích thước, không bao giờ kiểm tra lưu lượng, áp suất hay cân bằng.
