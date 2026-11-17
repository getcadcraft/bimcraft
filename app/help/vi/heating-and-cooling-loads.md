---
title: Ước tính tải sưởi và làm mát
summary: Mất nhiệt của mỗi phòng, lượng sưởi trong một năm theo số ngày độ và đỉnh làm mát, từ những gì bao quanh phòng trong mô hình và hệ số truyền nhiệt U của từng cấu kiện, với mọi dữ liệu đầu vào được hiển thị. Công cụ hỗ trợ thiết kế, không phải tính toán tuân thủ.
keywords: năng lượng, sưởi, làm mát, mất nhiệt, tải nhiệt, tải làm mát, hệ số U, độ truyền nhiệt, số ngày độ, hdd, thông gió, số lần trao đổi không khí, nhiệt nội tại, bức xạ mặt trời, lambda, độ dẫn nhiệt, cách nhiệt, thiết kế sơ bộ, phân tích, phòng, không gian
from: ec312d20
---

Trong thẻ {{ui:Daylight}}, sau khi nhấn {{ui:Calculate}}, mở {{ui:Heating and cooling loads}} và nhấn {{ui:Work out the loads}}. Mỗi phòng nhận được **mất nhiệt** vào một ngày thiết kế lạnh, **lượng sưởi trong một năm** và **đỉnh làm mát** vào một ngày nóng. Không có gì được tải lên; không có gì trong mô hình thay đổi trừ khi bạn nhập một giá trị U.

:::warning
Đây là **công cụ hỗ trợ thiết kế, không phải tính toán tuân thủ**: một ước tính trạng thái ổn định với mọi dữ liệu đầu vào hiển thị trên màn hình. Nó **không** phải phương pháp ISO 52016-1, không phải mô phỏng và không phải chứng nhận năng lượng; nó không định cỡ nồi hơi, bơm nhiệt hay máy làm lạnh. Hãy kiểm tra kết quả, và định cỡ thiết bị, cùng với kỹ sư.
:::

## Những gì bao quanh mỗi phòng

BimCraft tìm chúng ngay trong chính mô hình, nên IFC của chương trình nào cũng dùng được (không cần các ranh giới không gian mà một số chương trình xuất ra). Từ mọi phần bề mặt của mỗi phòng, nó nhìn thẳng ra ngoài:

- tường, cửa sổ, cửa đi, sàn, mái, lớp phủ, tường rèm hoặc dầm đầu tiên nó gặp **bao quanh** phần đó;
- ngay sau cấu kiện đó là **một phòng khác** (được tính là phòng liền kề, cùng nhiệt độ: không mất nhiệt), **không có gì** (bên ngoài), hoặc, dưới một sàn ở tầng thấp nhất, **đất**;
- một lối đi mở vào phòng khác được tính là phòng liền kề; một phần không gặp gì cả (trong phạm vi 1.5 m theo chiều ngang hoặc xuống dưới, 8 m lên trên) được liệt kê dưới phòng và bị bỏ qua.

Cửa sổ và cửa đi lấy kích thước riêng từ IFC (chiều rộng tổng × chiều cao) từ tường mà chúng nằm trong. Nhấn một phòng trong bảng để xem mọi cấu kiện bao quanh nó, cùng diện tích, giá trị U và nguồn của giá trị U.

## Hệ số U

Với mỗi cấu kiện, BimCraft dùng theo thứ tự sau:

1. **Giá trị U riêng của IFC** — `ThermalTransmittance` trong bộ thuộc tính chung của cấu kiện (ví dụ `Pset_WallCommon`) hoặc của kiểu của nó. Hầu hết các chương trình thiết kế đều có thể ghi giá trị này.
2. **Các lớp vật liệu** — 1 ÷ (điện trở bề mặt trong + độ dày mỗi lớp ÷ độ dẫn nhiệt λ của lớp đó + điện trở bề mặt ngoài), với các điện trở bề mặt thông thường (0.13 và 0.04 m²K/W cho tường; 0.10 hướng lên và 0.17 hướng xuống ở phía trong). Độ dẫn nhiệt điển hình để bắt đầu (len khoáng 0.035, gạch 0.77, bê tông 1.4…); trong {{ui:Materials' conductivity}} hãy nhập số của nhà sản xuất, và mọi giá trị U tính từ các lớp đó sẽ theo đó mà thay đổi.
3. **Một giá trị điển hình** (tường 0.3, mái 0.2, sàn 0.25, cửa sổ 1.4, cửa đi 1.6 W/m²K), được đánh dấu như vậy — hãy nhập giá trị của bạn.

Giá trị U bạn nhập trong chi tiết của một phòng được ghi vào bộ thuộc tính chung của cấu kiện dưới dạng `ThermalTransmittance` (một bước; {{key:Mod+Z}} hoàn tác). Nếu nhiều cấu kiện dùng chung bộ đó (ví dụ một loại tường), tất cả sẽ thay đổi cùng lúc, và dòng trạng thái cho biết số lượng.

## Sưởi

- **Mất nhiệt** = Σ U × A × (trong − ngoài) cho mọi thứ tiếp xúc với bên ngoài + Σ U × A × (trong − đất) cho các sàn trên đất + 0.335 × số lần trao đổi không khí mỗi giờ × thể tích phòng × (trong − ngoài). 0.335 Wh trên m³ mỗi kelvin là khối lượng riêng của không khí (1.2 kg/m³) nhân với nhiệt dung của nó (1005 J/kgK).
- **Sưởi trong một năm** = (mất nhiệt của phòng trên mỗi độ ra ngoài, qua kết cấu và không khí, cộng với mất nhiệt xuống đất của nó được quy về cùng chênh lệch) × **số ngày độ** × 24 ÷ 1000, tính bằng kWh. Nhập số ngày độ của địa điểm, hoặc {{ui:Read degree-days from a CSV…}} (một dòng cho mỗi ngày hoặc mỗi tháng; số cuối cùng trong mỗi dòng được cộng lại). Hãy dùng số ngày độ theo nhiệt độ cơ sở mà nguồn của bạn sử dụng: nhiệt độ cơ sở đó đã tính đến nhiệt tự do từ người, đèn và mặt trời.

## Làm mát

**Đỉnh làm mát** = nhiệt qua kết cấu và không khí ở nhiệt độ thiết kế mùa hè + người (diện tích sàn mỗi người × nhiệt mỗi người) + đèn và thiết bị trên mỗi m² sàn + **mặt trời**: đỉnh của {{ui:Sun through the windows on a date}} cho phòng đó. Hãy tính mặt trời trước, vào một ngày nóng; cho đến lúc đó mặt trời được tính là 0 và phần này ghi như vậy. Đỉnh của từng phần được cộng lại ngay cả khi chúng xảy ra vào các giờ khác nhau, điều này làm kết quả cao hơn một chút.

## Những gì không được tính

- Các phương pháp theo tháng và theo giờ của ISO 52016-1 (một tiêu chuẩn có phí), nhiệt tích trữ trong khối lượng công trình, cầu nhiệt, cách các hệ thống sưởi và làm mát vận hành, và các tệp khí hậu.
- Các phòng liền kề được xem là cùng nhiệt độ; các không gian không được sưởi không được mô hình hóa.

Xem thêm [Ước tính ánh sáng ban ngày trong mỗi phòng](topic:daylight-factor).
