---
title: Làm việc với lớp và tờ
summary: Bật và tắt các lớp bản vẽ, chuyển giữa không gian mô hình và các tờ, và hiểu cách các tờ hiển thị mô hình qua các khung nhìn của chúng.
keywords: lớp, bật tắt lớp, đóng băng, mở băng, tờ, bố cục, không gian giấy, thẻ, khung nhìn, quản lý lớp, la
from: a9a16b53
---

## Bạn sẽ làm gì

Làm gọn khung nhìn của một bản vẽ bận rộn bằng cách tắt các lớp, rồi xem lần lượt từng tờ của bản vẽ.

## Các bước: lớp

1. Mở một bản vẽ DWG hoặc DXF.
2. Tìm danh sách {{ui:Lớp}} bên trái. Mỗi lớp có một ô đánh dấu, một ô màu và tên của nó.
3. Bỏ đánh dấu một lớp để ẩn mọi thứ trên đó.
4. Nhấp {{ui:Tắt tất cả}} để ẩn mọi lớp.
5. Chỉ đánh dấu các lớp bạn muốn xem.
6. Nhấp {{ui:Bật tất cả}} để hiển thị lại mọi thứ.

## Bạn sẽ thấy gì

Các lớp biến mất và xuất hiện lại cùng lúc, trên {{ui:Mô hình}} và trên mọi tờ. Các lớp đã tắt hoặc đóng băng trong chính bản vẽ sẽ bắt đầu ở trạng thái không đánh dấu.

## Các bước: tờ

1. Nhìn hàng thẻ phía trên bản vẽ: {{ui:Mô hình}}, rồi từng tờ theo tên.
2. Nhấp một thẻ tờ.
3. Nhìn tờ: tờ giấy nằm trên một nền tối hơn, và mỗi khung nhìn hiển thị phần mô hình của nó ở tỷ lệ và góc riêng.
4. Thu phóng vào một khung nhìn để đọc chi tiết. Bạn đang thu phóng tờ, không phải khung nhìn, nên toàn bộ tờ di chuyển cùng nhau.
5. Nhấp {{ui:Vừa khung}} hoặc nhấp đúp để xem lại toàn bộ tờ.

## Cách tờ hoạt động ở đây

Một tờ (bố cục, hay không gian giấy) chứa một khung tên và các khung nhìn nhìn vào không gian mô hình. BimCraft vẽ mỗi khung nhìn được cắt theo cạnh của nó, ở tỷ lệ và độ xoay riêng, và ẩn các lớp bị đóng băng trong khung nhìn đó. Khung nhìn đầu tiên của mỗi tờ chính là tờ và không được vẽ hai lần.

## Lỗi thường gặp

- **Mong đợi thay đổi lớp được lưu.** Cài đặt lớp chỉ ảnh hưởng đến khung nhìn, cho đến khi bạn mở tệp khác.
- **Mong đợi kiểm soát lớp theo từng khung nhìn.** Danh sách {{ui:Lớp}} chuyển một lớp ở mọi nơi. Các lớp bị đóng băng trong một khung nhìn bởi bản vẽ vẫn bị đóng băng ở đó.
- **Tìm kiếm lớp hoặc trạng thái lớp.** Chưa xây dựng. Danh sách theo thứ tự của bản vẽ.
- **Mong đợi làm việc bên trong một khung nhìn.** Không có gì để kích hoạt: BimCraft chỉ hiển thị tờ. Dùng {{ui:Mô hình}} để xem trực tiếp không gian mô hình.
