---
title: Hoàn tác xuyên ứng dụng trong CadCraft Studio
summary: Trong Studio, BimCraft báo cho Studio từng bước đã hoàn tất, để Studio có thể hoàn tác bước cuối cùng của bạn trong cửa sổ bạn làm việc sau cùng.
keywords: hoàn tác, studio, xuyên ứng dụng, hoàn tác dự án, lịch sử, nhật ký, cửa sổ
from: c66dd0c1
---

## Tính năng này làm gì

Trong CadCraft Studio, mỗi cửa sổ ứng dụng báo cho Studio khi một bước đã hoàn tất (vừa vẽ xong một bức tường, vừa chấp nhận một nhóm tường từ bản quét). Studio giữ các bước đó theo đúng thứ tự bạn làm việc và có thể yêu cầu cửa sổ đã tạo bước mới nhất hoàn tác bước đó, bằng chức năng hoàn tác riêng của cửa sổ ấy. Ctrl+Z trong BimCraft vẫn là chức năng riêng của BimCraft và cũng được báo cho Studio.

## Cần biết

- Studio chỉ yêu cầu một cửa sổ hoàn tác khi danh sách hoàn tác của cửa sổ đó vẫn đúng như bước đã để lại. Sau khi Lưu (việc này bắt đầu một danh sách thay đổi mới) hoặc sau khi bạn chuyển sang mô hình khác để chỉnh sửa, BimCraft trả lời rằng danh sách đã thay đổi và Studio bỏ qua cửa sổ này. Không có gì bị buộc phải làm.
- Hoàn tác tác động của một ứng dụng trong ứng dụng khác chưa được xây dựng.
- Ngoài Studio thì không có gì thay đổi.
- Mục menu Studio yêu cầu hoàn tác đi kèm bản dựng Studio; trước đó các bước vẫn được báo nhưng không có mục menu nào dùng đến chúng.

## Tiếp theo

- [Làm việc Live với người khác](topic:work-live)
