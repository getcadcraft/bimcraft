---
title: Mặt đứng, mặt cắt và tờ
summary: Vẽ đường mặt cắt trên mặt bằng, rồi mở Tờ để có một bộ bản vẽ sẵn sàng in được tạo từ mô hình: mặt bằng của từng cốt, bốn mặt đứng, mặt cắt công trình, bảng thống kê và khung tường, cùng khung tên và tỷ lệ, thành một PDF.
keywords: tờ, bộ bản vẽ, bản vẽ thi công, in, in ra giấy, pdf, mặt đứng, mặt đứng bắc, mặt cắt, mặt cắt công trình, đường mặt cắt, cắt, nét khuất, khung tên, số tờ, tỷ lệ, 1/4" = 1'-0", 1:50, 1:100, giấy, 11x17, 24x36, A3, A1, bộ hồ sơ xin phép
from: 91ed0cde
---

## Bạn sẽ làm gì

Tạo một bộ bản vẽ từ mô hình: mặt bằng của từng cốt, các mặt đứng bắc, đông, nam và tây, một mặt cắt công trình cho mỗi đường mặt cắt, các bảng thống kê cửa đi, cửa sổ, phòng và gỗ, và một mặt đứng của mỗi tường có khung. Bộ bản vẽ được vẽ lại từ mô hình mỗi lần bạn mở, nên luôn khớp với những gì bạn đã xây.

## Vẽ một đường mặt cắt

1. Trên một cốt, mở {{ui:Bản dựng}} và chọn {{ui:Đường mặt cắt}}.
2. Nhấp nơi đường bắt đầu và nơi nó kết thúc. Đoạn ngắn ở giữa đường cho biết phía mà mặt cắt hướng tới: bên trái của đường, đi từ điểm nhấp thứ nhất đến điểm thứ hai.
3. Đường hiển thị trên mặt bằng với các đầu và chữ cái của nó (A, rồi B, v.v.).

Chọn đường để thay đổi trong **Thuộc tính**: chữ cái của nó, **Đảo khung nhìn** để nhìn theo hướng khác, và **Nhìn xa tới** để dừng khung nhìn một khoảng cách đã đặt sau mặt cắt (0 hiển thị mọi thứ phía sau). Nhấn {{key:Delete}} để xóa nó.

## Mở các tờ

1. Nhấp {{ui:Tờ}} trên thanh mô hình (bên cạnh {{ui:In}}).
2. Các tờ được liệt kê bên trái: **A-101** trở đi cho mặt bằng, **A-201** cho mặt đứng, **A-301** cho mặt cắt, **A-401** cho bảng thống kê và **S-101** cho khung tường. Nhấp một tờ để xem.
3. Chọn **Giấy**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 hoặc A1. Giấy giữ tên tiêu chuẩn của nó, và kích thước được ghi theo {{ui:Đơn vị}} bạn đã chọn, ví dụ *Letter · 8.5 × 11 in* hoặc *A3 · 297 × 420 mm*.
4. Nhấp {{ui:Tải bộ bản vẽ dạng PDF}}: một trang cho mỗi tờ.

## Ghi chú tiêu chuẩn từ bộ quy định

Trong một tờ, {{ui:Ghi chú tiêu chuẩn}} cho phép bạn đặt các ghi chú từ một bộ quy định (theo bộ môn) vào cột bên phải của tờ. Mỗi ghi chú giữ bộ và điều khoản mà nó đến từ, và tờ in ra cho biết khi nào bộ đó chưa được xác minh. Các ghi chú chỉ là điểm khởi đầu: người chịu trách nhiệm về bản vẽ quyết định chúng nói gì. Chúng cần tiện ích bổ sung Quy định xây dựng.

## Trên các tờ có gì

- **Mặt bằng** hiển thị tường, cửa đi, cửa sổ, phòng cùng diện tích, kích thước và đường mặt cắt, ở tỷ lệ tiêu chuẩn lớn nhất vừa vặn: 1/4" = 1'-0" hoặc nhỏ hơn (1:50 hoặc nhỏ hơn khi tính bằng milimét).
- **Mặt đứng** được vẽ từ mô hình 3D với các nét khuất đã loại bỏ, hai mặt trên một tờ, tất cả cùng tỷ lệ, với đường mặt đất bên dưới. Mái, móng và mặt đất hiển thị đúng như được mô hình hóa.
- **Mặt cắt** tô những gì đường cắt đi qua (tường, sàn, mái) và vẽ những gì nhìn thấy phía sau nó.
- **Mặt đứng và mặt cắt có các ghi chú của chúng:** một dấu cho mỗi cốt với tên và độ cao ở bên phải, khoảng cách giữa các cốt ở bên trái, và trên mặt đứng là chiều rộng công trình bên dưới cùng một nhãn (D1, W1) trên mỗi cửa đi và cửa sổ trong tường hướng về bạn. Với tường riêng của một phòng, xem [Mặt đứng nội thất](topic:interior-elevations).
- **Bảng thống kê** là các bảng giống như {{ui:Bảng thống kê}} trên thanh mô hình.
- **Khung** hiển thị các đố, thanh đỉnh, dầm đầu và ngưỡng của mỗi tường có khung khi nhìn từ phía ngoài, để tổ thi công có thể bố trí. Xem [Khung tường, sàn và mái](topic:framing).

Mỗi tờ có một khung tên với số, tiêu đề, tên tệp và ngày.

:::tip
Các tờ được tạo từ mô hình: để thay đổi bản vẽ, hãy thay đổi mô hình rồi mở lại {{ui:Tờ}}.
:::

:::note
Mặt đứng và mặt cắt chỉ hiển thị nét và phần tô: kích thước, dấu cốt và ghi chú trên chúng chưa được xây dựng.
:::
