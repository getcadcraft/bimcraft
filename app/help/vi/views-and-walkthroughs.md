---
title: Lưu góc nhìn và hướng dẫn từng bước
summary: Giữ các góc nhìn camera của mô hình theo tên, quay lại chúng, phát chúng lần lượt, và ghi lại một lượt đi qua tòa nhà để phát lại.
keywords: góc nhìn, góc nhìn đã lưu, camera, điểm nhìn, cảnh, tour, trình bày, hướng dẫn từng bước, đi bộ, bay xuyên qua, ghi, phát, đường đi, hoạt hình
from: 3af19a36
---

{{ui:Góc nhìn}} trên thanh công cụ giữ các camera của góc nhìn 3D trong tệp của mô hình, để bạn và bất kỳ ai bạn gửi đến đều có thể quay lại ngay.

## Lưu một góc nhìn

1. Thiết lập góc nhìn 3D: xoay, thu phóng, ẩn những gì bạn không muốn.
2. Nhấn {{ui:Góc nhìn}}, gõ một tên (hoặc giữ tên được gợi ý) và nhấn {{ui:Lưu góc nhìn}} hoặc nhấn {{key:Enter}}.

Lưu với một tên đã có trong danh sách sẽ cập nhật góc nhìn đó. Nhấn tên một góc nhìn để quay lại; camera di chuyển đến đó một cách mượt mà.

Các mũi tên đổi thứ tự, bút chì đổi tên, thùng rác xóa. Mỗi thay đổi là một bước, nên {{key:Ctrl+Z}} hoàn tác nó.

## Phát các góc nhìn

{{ui:Phát các góc nhìn}} chuyển từ góc nhìn này sang góc nhìn kế tiếp theo thứ tự trong danh sách, dừng một chút ở mỗi góc. {{key:Esc}} hoặc {{ui:Dừng}} kết thúc việc phát.

## Ghi một hướng dẫn từng bước

1. Bật [Đi bộ](topic:walk) và bắt đầu đi bên trong tòa nhà.
2. Trong {{ui:Góc nhìn}}, nhấn {{ui:Ghi đường đi}}.
3. Đi bằng {{key:W}} {{key:A}} {{key:S}} {{key:D}} và nhìn xung quanh bằng chuột.
4. Nhấn {{ui:Dừng ghi}}. Lượt đi được lưu thành "Walk 1", kèm độ dài của nó.

Nhấn một lượt đi để phát lại đúng như bạn đã đi. {{key:Esc}} dừng việc phát.

## Kết xuất hướng dẫn thành video

Nhấn biểu tượng phim bên cạnh một lượt đi. Hộp thoại video vẽ mọi khung hình của lượt đi với cài đặt kết xuất bạn đã chọn lần cuối, ở kích thước, tốc độ khung hình và chất lượng bạn chọn tại đây. Lưu thành video WebM hoặc MP4, hoặc thành một tệp ZIP với một ảnh cho mỗi khung hình. Mỗi khung hình mất thời gian như khi kết xuất một ảnh, nên hãy bắt đầu với {{ui:Nhanh}}.

## Thuyết minh hướng dẫn

Nhấn biểu tượng bong bóng lời thoại bên cạnh một lượt đi. Viết một dòng cho mỗi điều được nói, và bắt đầu dòng bằng thời điểm nó bắt đầu (`12`, `0:12` hoặc `1:02.5`); dòng không có thời điểm sẽ theo sau dòng phía trên, sau khoảng thời gian cần để đọc nó. Chọn ngôn ngữ, theo ngôn ngữ của người sẽ xem nếu đó là khách hàng. {{ui:Xem trước}} phát lời bằng giọng nói của chính máy tính này và hiển thị chúng dưới dạng phụ đề; điều tương tự xảy ra mỗi khi lượt đi được phát. {{ui:Lưu cùng đi bộ}} giữ lời thuyết minh trong IFC cùng với lượt đi.

Trợ lý đã kết nối của riêng bạn có thể viết thuyết minh cho bạn: yêu cầu nó xem lượt đi và các góc nhìn đã lưu, và nó sẽ đặt các dòng bằng ngôn ngữ bạn chỉ định, như một bước hoàn tác.

Video đã kết xuất không có âm thanh riêng, vì trình duyệt không thể ghi lại giọng nói của chính nó. Lưu phụ đề (`.srt` hoặc `.vtt`) và thêm vào video trong trình phát hoặc trình biên tập video của bạn. Giọng nói bạn có thể chọn tùy thuộc vào máy tính: một ngôn ngữ chưa cài giọng nói vẫn nhận được phụ đề.

## Trong tệp

Góc nhìn và lượt đi được lưu trong IFC dưới dạng bộ thuộc tính `CadCraft_Views` trên dự án: IFC thuần mà các chương trình khác bỏ qua. Chúng nằm trong tọa độ của mô hình đầu tiên, nên vẫn khớp sau khi mô hình được tải lại hoặc khi thêm một mô hình khác.

:::tip
Để kết xuất một ảnh từ góc nhìn đã lưu, đi đến góc nhìn đó, rồi nhấn [Kết xuất](topic:render).
:::
