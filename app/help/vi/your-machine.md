---
title: Máy của bạn kết xuất bằng những gì
summary: Cài đặt › Kết xuất hiển thị card đồ họa, số nhân bộ xử lý và bộ nhớ mà trình duyệt này cho phép ứng dụng sử dụng, cùng cấp độ đặt điểm bắt đầu kết xuất.
keywords: máy của bạn, card đồ họa, gpu, webgpu, webgl, bộ xử lý, cpu, nhân, luồng, bộ nhớ, ram, bộ nhớ dùng chung, cách ly, cấp độ, tầng, tốc độ, chậm, tốc độ kết xuất, laptop
from: 360f2375
---

Mở {{ui:Cài đặt}} ({{key:Mod+,}}), giữ ở thẻ riêng của ứng dụng này và cuộn đến {{ui:Kết xuất}}. {{ui:Máy của bạn}} liệt kê những gì trình duyệt này cho phép ứng dụng dùng để kết xuất. Không có gì trong đó rời khỏi máy tính của bạn.

| Hàng | Ý nghĩa |
|---|---|
| {{ui:Đồ họa}} | Card đồ họa mà trình duyệt báo cáo. "WebGPU" nghĩa là nó có thể thực hiện công việc kết xuất; "WebGL 2 only" nghĩa là không có WebGPU: khung nhìn trực tiếp và ảnh chất lượng cao dùng card đồ họa qua WebGL 2 (ảnh với bộ theo dõi đường đi (path tracer) WebGL cũ hơn, không có các tính năng bổ sung cần WebGPU); một bộ thay thế bằng phần mềm nghĩa là mọi thứ chạy trên bộ xử lý |
| {{ui:Bộ xử lý}} | Số nhân bộ xử lý mà trình duyệt báo cáo |
| {{ui:Bộ nhớ}} | Khoảng bao nhiêu bộ nhớ máy tính có, khi trình duyệt cho biết. Một số trình duyệt không cho biết |
| {{ui:Bộ nhớ dùng chung}} | Trang có được phép chia sẻ bộ nhớ giữa các worker của nó hay không. Bật: mọi nhân có thể làm việc trên một bản sao của cảnh; tắt: mỗi nhân cần bản sao riêng, nên một cảnh lớn chỉ vừa với ít nhân hơn cùng lúc |
| {{ui:Mã bộ xử lý nhanh}} | Trình duyệt có chạy mã WebAssembly nhanh hơn hay không. Nếu không, một phương án dự phòng chậm hơn sẽ được dùng |
| {{ui:Tầng}} | {{ui:Card đồ họa, cao}}, {{ui:Card đồ họa, cơ bản}} hoặc {{ui:Chỉ bộ xử lý}}, kèm lý do bên dưới |

## Cấp độ

Cấp độ là nơi bắt đầu kết xuất, để một máy tính xách tay có chip đồ họa tích hợp hoặc không có card đồ họa nào vẫn phản hồi nhanh. Chip đồ họa tích hợp hoặc của điện thoại, hoặc bộ nhớ từ 4 GB trở xuống, sẽ không bao giờ nhận {{ui:Card đồ họa, cao}}.

:::note
Các trình duyệt khác nhau. Cùng một máy tính có thể hiển thị WebGPU trong trình duyệt này và "WebGL 2 only" trong trình duyệt khác. Trên Linux, hầu hết trình duyệt chưa có WebGPU.
:::
