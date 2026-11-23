---
title: Tự động định tuyến ống gió, ống thoát nước, ống nước và ống môi chất lạnh
summary: Trong kiểm tra va chạm, BimCraft tìm đường đi vòng qua mô hình cho ống gió, thoát nước theo trọng lực, nước lạnh và nóng, và ống môi chất lạnh split hoặc multi-split, rồi vẽ các đoạn ống cùng phụ kiện trong một bước hoàn tác. Đây là công cụ hỗ trợ bản vẽ: kích thước, độ dốc và các kiểm tra lấy từ các bảng trong chương trình và các số bạn nhập; không có gì ở đây cho biết một thiết kế đáp ứng quy chuẩn.
keywords: định tuyến tự động, autoroute, định tuyến ống gió, định tuyến ống, thoát nước, vệ sinh, trọng lực, ống đứng, ống thông hơi, bẫy, nước, nước nóng, vòng hồi, tuần hoàn, môi chất lạnh, split, multi-split, VRF, chiều dài tương đương, bộ nhánh rẽ, chữ Y (wye)
from: 5841d513
---

## Bạn sẽ làm gì

Để BimCraft bố trí một mạng các đoạn ống giữa các đầu nối đã có sẵn trong mô hình, đi vòng qua tường và dầm, rồi kiểm tra kết quả theo các số bạn có thể thấy.

## Các bước

1. Mở mô hình và kiểm tra va chạm. Trong **Định tuyến ống gió tự động**, chọn một bộ xử lý không khí và các miệng gió của nó, hoặc trong **Định tuyến các hệ thống khác tự động**, chọn một hệ thống.
2. **Thoát nước vệ sinh bằng trọng lực.** Nhập vị trí cửa xả và, nếu có, vị trí các ống đứng. Chọn **Định tuyến mọi tầng trong một lần** để lấy mọi tầng có thiết bị: thoát nước của mỗi tầng nối vào ống đứng ở cao độ của nó, và ống đứng chạy từ phía trên vòi cao nhất xuống đến chân ống. Nhấn {{ui:Route}}.
3. **Bẫy đến ống thông hơi.** Bảng liệt kê khoảng cách từ mỗi bẫy đến ống thông hơi của nó. Nhập khoảng cách lớn nhất mà quy chuẩn của bạn cho phép trong **Khoảng cách lớn nhất từ bẫy đến ống thông hơi**; thiết bị nào vượt quá sẽ được liệt kê là chưa xong, kèm số milimét vượt. Chọn **Thông hơi qua ống đứng** khi thiết bị không có nhánh thông hơi riêng: khi đó khoảng cách được đo đến ống đứng. BimCraft không có bảng quy chuẩn cho việc này: bạn nhập số.
4. **Nước lạnh và nước nóng.** Chọn nguồn, nhập áp suất tại nguồn và áp suất bạn cần tại một thiết bị. Chọn **Nước nóng**, chọn đầu nối nóng của bình đun, rồi chọn **Vòng hồi** để kết thúc đường hồi tại đầu nối **hot-return** của bình đun, hoặc tại bất kỳ đầu nối nào khác bạn chọn (đầu nối đó kết thúc cách 150 mm, để hở, cho bạn tự nối).
5. **Split, multi-split và VRF.** Chọn dàn nóng, chọn các dàn lạnh và nhập công suất của từng dàn. Nhập các giới hạn theo dữ liệu của hãng sản xuất. Nhập **chiều dài tương đương** của một co và của một bộ nhánh rẽ (giá trị của hãng), khi đó chiều dài lớn nhất và tổng chiều dài được kiểm tra theo chiều dài tương đương.
6. Nhấn {{ui:Route}}. Bảng cho biết đã vẽ bao nhiêu đoạn, và những việc không làm được cùng lý do. {{ui:Undo}} hoàn tác mọi thứ trong một bước.

## Bạn sẽ thấy

Ống có co, tê và côn thu; các đoạn ống thoát nước dốc ít nhất bằng độ dốc nhỏ nhất cho kích thước của chúng; nhánh thông hơi tại các thiết bị; các đường môi chất lạnh là một cặp lỏng và khí, đổi hướng đồng nhất ở mọi góc, với một bộ nhánh rẽ được đánh dấu tại chỗ nhánh rời khỏi thân chính.

## Điều nên biết

- Khi một ống thoát nước gặp một ống thoát nước khác, mô hình vẽ một tê. Mặt bằng gọi những chỗ đó là điểm nối chữ Y 45 độ để bạn đổi phụ kiện.
- Nước nóng dùng đầu nối nóng của chính thiết bị khi họ thiết bị đó có sẵn, và một đầu nối cách đầu nối lạnh 100 mm khi không có.
- Các đường môi chất lạnh bắt đầu giữa hai cổng của mỗi dàn. Khi hai cổng của một dàn đứng quá sát nhau để uốn cong, cặp ống được giữ ở giữa hai cổng.
- Mạng nước dùng đường cong nhu cầu và số liệu ma sát hiển thị trong các phép tính; hãy thay chúng bằng số liệu của quy chuẩn bạn trước khi dựa vào áp suất.
- Nhà lớn có thể mất nửa phút hoặc lâu hơn, chủ yếu là mạng nước nóng.
- Đây là công cụ hỗ trợ bản vẽ. Người có chuyên môn phải kiểm tra kích thước, độ dốc, ống thông hơi và áp suất theo quy chuẩn hiện hành.

## Tiếp theo

[Kiểm tra va chạm](topic:clash-check) · [Kiểm tra ống và ống gió với kết cấu](topic:mep-against-structure) · [Kết nối giữa ống và thiết bị](topic:mep-connections)
