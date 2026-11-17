---
title: Chọn cỡ ống và ống gió, kiểm tra độ đầy cáp và chiếu sáng
summary: Kiểm tra cỡ ống cấp và ống gió với độ sụt áp, luồn cáp qua máng cáp và ống luồn rồi xem độ đầy của chúng, và tính độ rọi trong phòng từ tệp IES hoặc EULUMDAT. Giá trị mặc định được ghi nhãn; hãy nhập giá trị của quy chuẩn đang có hiệu lực.
keywords: chọn cỡ, chọn cỡ ống, chọn cỡ ống gió, độ sụt áp, đơn vị thiết bị vệ sinh, nhu cầu, hunter, hazen-williams, vận tốc, ma sát, ma sát đều, áp suất quạt, van điều tiết, đường găng, máng cáp, ống luồn, độ đầy, bảng cáp, ies, ldt, eulumdat, trắc quang, độ rọi, lux, độ đồng đều, tính toán chiếu sáng, mật độ công suất, mep, tính toán, sự cố
from: 9cb90815
---

## Bạn sẽ làm gì

Vẽ ống, ống gió, máng cáp và ống luồn như thường lệ, rồi mở bảng **Tính toán**. Mỗi thẻ đọc mô hình, hiển thị một bảng, và liệt kê những gì sai dưới dạng Sự cố trong bảng ⚠. Khi một cỡ sẽ khắc phục được một Sự cố, **Áp dụng cỡ** thay đổi các đoạn chỉ trong một bước hoàn tác.

Các công cụ này chỉ là phương tiện hỗ trợ bản vẽ. Mọi giá trị mặc định đều được ghi nhãn trên màn hình, và không có bảng nào là bảng quy chuẩn: hãy nhập các con số từ tiêu chuẩn bạn thiết kế theo, và để kỹ sư chịu trách nhiệm xem xét kết quả.

## Ống

1. Chọn khóa **hệ thống** (nước lạnh là `cw`, nước nóng là `hw`).
2. Đặt vận tốc cao nhất và, nếu muốn kiểm tra áp suất, áp suất tại nguồn cùng áp suất thấp nhất mà thiết bị cần.
3. Bấm {{ui:Kiểm tra}}.

Mỗi ống mang nhu cầu của các đơn vị thiết bị nằm phía dưới nó. Nhu cầu lấy từ đường cong đơn vị thiết bị theo lưu lượng, theo cách Hunter đã mô tả. **Đường cong tích hợp sẵn chỉ là ví dụ, không phải bảng quy chuẩn**; các Sự cố sẽ nói rõ điều này cho đến khi bạn nhập đường cong riêng. Ma sát tính theo Hazen–Williams, phụ kiện là hệ số tổn thất, và một đoạn lên cao tốn 9.8 kPa trên mỗi mét. Số đơn vị của một thiết bị lấy từ loại của nó, hoặc từ con số bạn đặt bằng công cụ trợ lý `loads_set`.

## Ống gió

Đặt hệ thống, tốc độ ma sát (ma sát đều) hoặc vận tốc, và tổn thất của bất kỳ dàn lạnh, bộ lọc hay bộ giảm âm nào. Các đầu cuối lấy lưu lượng khí từ `loads_set` trên miệng gió. Bảng hiển thị vận tốc và ma sát của từng đoạn, **áp suất quạt** tại đường găng, và áp suất mà van điều tiết của mỗi đầu cuối còn lại phải chịu. Tổn thất phụ kiện dùng các hệ số mặc định đã làm tròn, không lấy từ cơ sở dữ liệu phụ kiện.

## Máng cáp và ống luồn

Vẽ chúng bằng công cụ Ống gió: các hệ thống **Máng cáp** và **Ống luồn** được lưu như ống dẫn cáp, nên các chương trình khác đọc chúng như máng cáp và ống luồn. Trong thẻ Cáp, dán danh sách cáp (nhãn, đường kính ngoài tính bằng mm, số lượng, từ, đến). `from` và `to` là nhãn của một thiết bị, hoặc một điểm `x,y,z` tính bằng milimét. Cáp đi theo tuyến liên tục ngắn nhất qua máng cáp và ống luồn; mỗi đoạn hiển thị độ đầy so với các giới hạn bạn nhập, và bảng xuất ra CSV với chiều dài đã cộng phần dư theo phần trăm, kèm hai đầu.

## Chiếu sáng

Gán cho mỗi đèn tệp IES (LM-63) hoặc EULUMDAT của nó bằng công cụ trợ lý `photometry_set`. Nhập các mục tiêu, khoảng lưới và chiều cao mặt làm việc. Kết quả chỉ là độ rọi **trực tiếp**: không có phản xạ qua lại và không có bóng, nên trong một căn phòng nó là một giá trị cận dưới.

## Đầu phun chữa cháy

Tiện ích bổ sung **Đầu phun chữa cháy** có thẻ riêng; xem trợ giúp của nó.
