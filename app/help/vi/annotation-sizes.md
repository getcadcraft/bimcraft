---
title: Vẽ ở kích thước thật, chú thích theo tỷ lệ
summary: Công trình luôn được vẽ ở kích thước thật. Chữ, kích thước, thẻ, tên phòng, ký hiệu lưới và ký hiệu được định cỡ trên giấy, theo milimét khi in, và giữ kích thước đó khi tỷ lệ bản vẽ đổi từ 1:100 sang 1:50.
keywords: tỷ lệ chú thích, chú thích theo tỷ lệ, cỡ chữ, chiều cao chữ, chiều cao trên giấy, cỡ chữ kích thước, cỡ thẻ, cỡ tên phòng, ký hiệu lưới, cỡ ký hiệu, tỷ lệ bản vẽ, 1:50, 1:100, tiêu chuẩn văn phòng, ghi chữ, vẽ ở 1:1, kích thước thật, chữ trên tờ
from: 94118788
---

## Bạn sẽ làm gì

Đặt chiều cao chữ của bản vẽ trên giấy, một lần cho công trình. Bạn không bao giờ thu phóng mô hình và không bao giờ đổi cỡ chữ theo tỷ lệ: BimCraft tự tính cỡ từ chiều cao trên giấy và tỷ lệ bản vẽ.

## Cách hoạt động

- Mô hình ở kích thước thật. Một bức tường dài 10 m là 10 000 mm ở mọi tỷ lệ.
- Một chú thích có **chiều cao trên giấy**: chiều cao của một chữ hoa trên tờ in, tính bằng milimét.
- Ở tỷ lệ 1:100, chữ 2.5 mm cao 250 mm trong mô hình; ở 1:50 thì là 125 mm. Trên giấy đều là 2.5 mm.
- Ký hiệu mặt bằng (điện, cấp thoát nước) được vẽ theo milimét trên giấy và theo cùng quy tắc.

## Các bước

1. Mở bảng dự án. Dưới {{ui:Tờ}}, nhấp {{ui:Kích thước chú thích…}}.
2. Nhập chiều cao theo milimét cho các loại bạn muốn đặt: {{ui:Ghi chú và nhãn}}, {{ui:Văn bản kích thước}}, {{ui:Thẻ và tên tầng}}, {{ui:Tên phòng}}, {{ui:Chữ ký hiệu lưới}}, {{ui:Tiêu đề khung nhìn trên tờ}} và {{ui:Văn bản bảng thống kê}}. Ô trống giữ kích thước riêng của BimCraft, hiển thị màu xám.
3. Nhấp {{ui:Lưu}}. Đây là một bước bạn có thể hoàn tác.

Mọi tờ, bộ bản vẽ, PDF mặt bằng, mặt đứng và mặt cắt dùng kích thước đã đặt từ đó trở đi. Khoảng cách giữa đường kích thước và văn bản của nó, kích thước ký hiệu lưới và chiều cao hàng bảng thống kê đều tăng theo văn bản.

## Mặt bằng có tỷ lệ riêng

Đặt tỷ lệ cho một mặt bằng trong phạm vi khung nhìn ({{ui:Tỷ lệ}}; xem [Khung nhìn và tờ](topic:views-and-sheets)). Khi đó:

- trên màn hình, tên phòng, thẻ, văn bản kích thước và ký hiệu lưới được vẽ ở cỡ in của chúng so với mô hình, nên điều bạn thấy là điều tờ sẽ hiển thị;
- ký hiệu mặt bằng và thẻ của chúng được định cỡ theo tỷ lệ đó. Đổi tỷ lệ từ 1:100 sang 1:50 thì chúng nhỏ đi một nửa trong mô hình và giữ nguyên trên giấy.

Mặt bằng không có tỷ lệ riêng giữ văn bản trên màn hình cố định, và ký hiệu của nó được định cỡ cho 1:50 (1/4" = 1'-0" theo feet và inch), như trước đây.

## Kích thước của văn phòng

Khi tiện ích bổ sung Default Policies đang bật, đặt chiều cao của văn phòng trong Cài đặt › Toàn cục › Default Policies › {{ui:Kích thước chú thích trên giấy}}. Công trình mới nhận chúng khi bạn nhấp Create. Trong một công trình đã bắt đầu, hộp thoại có {{ui:Dùng kích thước của văn phòng}}. Xem [Default Policies](topic:default-policies).

## Kích thước của gói quy định

Một gói quy định có thể đưa ra chiều cao chữ mà vị trí của nó yêu cầu (tiện ích bổ sung Quy định xây dựng, quy ước bản vẽ). Tick gói trong Cài đặt › Quy định xây dựng, rồi trong hộp thoại nhấp {{ui:Dùng kích thước của gói quy định}}: các ô được điền, bạn kiểm tra và lưu. Kích thước mà gói đưa ra theo điểm là cỡ phông chữ, và được đổi thành chiều cao chữ hoa, nên hãy kiểm tra lại. Không có gì được đặt cho đến khi bạn lưu.

## Điều bạn sẽ thấy

- Cùng một chiều cao chữ theo milimét trên tờ ở 1:100 và trên tờ ở 1:50, trong khi bản thân mặt bằng lớn gấp đôi ở 1:50.
- Kích thước đi theo công trình: chúng được lưu trong tệp IFC của công trình.

## Điều cần biết

- Kích thước riêng của BimCraft là các kích thước mà tờ của nó luôn dùng (khoảng 1.5 mm chữ hoa cho văn bản kích thước). Chúng không phải tiêu chuẩn vẽ: hãy đặt của văn phòng bạn.
- Chiều cao phải từ 0.5 đến 50 mm.
- Chữ khối tiêu đề và chú giải ký hiệu không thuộc phạm vi này: chúng giữ cỡ riêng.
