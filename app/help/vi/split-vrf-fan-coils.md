---
title: Máy split, VRF và dàn quạt cuộn
summary: Đặt các dàn trong nhà kiểu treo tường, âm trần cassette và có ống gió, dàn ngoài trời split đơn và VRF, khớp refnet, và dàn quạt cuộn 2 ống hoặc 4 ống, mỗi dàn có các kết nối môi chất, nước, nước ngưng và ống gió; vẽ các đường ống gas nối giữa chúng, với cỡ ống lấy từ một bảng bạn có thể thay đổi.
keywords: split, mini split, minisplit, multi split, vrf, vrv, lưu lượng môi chất biến thiên, bơm nhiệt, dàn trong nhà, dàn ngoài trời, cụm ngưng tụ, treo tường, treo tường cao, cassette, có ống gió, âm trần, dàn quạt cuộn, fcu, 2 ống, 4 ống, refnet, khớp nhánh, khớp chữ y, đường ống gas, lineset, môi chất lạnh, ống lỏng, ống gas, ống hút, acr, đồng, nước ngưng, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Bạn sẽ làm gì

Đặt các dàn của hệ split, multi-split hoặc VRF và các dàn quạt cuộn vào mô hình, rồi nối chúng bằng đường ống gas: một đường lỏng và một đường gas bằng đồng ACR, gắn vào cổng của các dàn. Các dàn hoạt động như mọi thiết bị khác trong [Thiết bị MEP có cổng](topic:mep-equipment): cùng thanh công cụ, {{ui:Thuộc tính}}, cổng và [kết nối](topic:mep-connections).

:::note
Đây là công cụ hỗ trợ bản vẽ và phối hợp. Các dàn là hình khối chung, có kích thước theo giá trị bạn nhập, không phải sản phẩm của hãng nào. Cỡ ống của chúng lấy từ một bảng **giá trị ví dụ điển hình** cho thiết bị R410A và R32, không từ hãng nào: sách hướng dẫn lắp đặt của hãng dàn quyết định cỡ ống thực tế; đường ống dài hoặc chênh lệch độ cao lớn sẽ làm thay đổi cỡ ống. Hãy đổi bảng, hoặc nhập cỡ ống, để khớp với các dàn bạn dùng.
:::

## Đặt một dàn

1. Bật {{ui:Vẽ}}, mở {{ui:Bản dựng}} và chọn {{ui:Thiết bị}}.
2. Chọn loại và đặt các giá trị:

| Loại | Bạn đặt | Cổng của dàn |
|---|---|---|
| Dàn trong nhà split, treo tường | công suất, đường lỏng và gas, chiều dài, chiều sâu, chiều cao, cỡ ống nước ngưng | môi chất lỏng và gas, ống thoát nước ngưng (ở đầu phải, sát tường) |
| Dàn trong nhà split, cassette | công suất, đường lỏng và gas, tấm mặt, thân, chiều cao, cỡ ống nước ngưng | môi chất lỏng và gas, ống thoát nước ngưng (một bên, gần phía trên) |
| Dàn trong nhà split, có ống gió | công suất, đường lỏng và gas, chiều dài, chiều rộng, chiều cao, miệng cấp và miệng hồi, cỡ ống nước ngưng | ống gió cấp ra, ống gió hồi vào, môi chất lỏng và gas, ống thoát nước ngưng |
| Dàn ngoài trời split | công suất, đường lỏng và gas, chiều rộng, chiều sâu, chiều cao | môi chất lỏng và gas (ở bên phải) |
| Dàn ngoài trời VRF | công suất, đường lỏng và gas, chiều rộng, chiều sâu, chiều cao | môi chất lỏng và gas (ở phía trước, thấp) |
| Khớp refnet | đường lỏng hoặc gas, tải trên mỗi nhánh, ống ở mỗi đầu | đầu vào, nhánh A, nhánh B |
| Dàn quạt cuộn | 2 ống hoặc 4 ống, chiều dài, chiều rộng, chiều cao, miệng cấp và miệng hồi, ống cuộn và hệ thống, ống sưởi, cỡ ống nước ngưng | ống gió cấp ra, ống gió hồi vào, cuộn vào và ra, sưởi vào và ra (4 ống), ống thoát nước ngưng |

3. Đặt **Cao độ**: độ cao đáy của dàn so với cốt. Đáy của dàn treo tường là mặt dưới của nó (thường là 2100 mm); của cassette là mặt của nó trên trần; của refnet là độ cao tâm đường ống của nó.
4. Nhấp nơi dàn sẽ được đặt ({{key:R}} xoay 90°).

**Công suất** là công suất làm lạnh danh định của dàn tính bằng kW, kèm Btu/h bên cạnh. Khi **Đường lỏng** và **Đường gas** để ở **Từ bảng**, các kết nối của dàn lấy cỡ ống trong bảng ứng với công suất đó; chọn một cỡ ống để dùng cỡ ống riêng của dàn bạn. Đầu vào của refnet được chọn cỡ cho cả hai nhánh cùng lúc, mỗi nhánh theo tải riêng của nó.

Cổng môi chất hoạt động cả hai chiều (bơm nhiệt chạy được theo cả hai hướng). Ống thoát nước ngưng là một cỡ ống như mọi ống thoát khác.

## Vẽ một đường ống gas

1. Chọn hai thiết bị (giữ {{key:Shift}} và nhấp thiết bị thứ hai): một dàn ngoài trời và một dàn trong nhà (split đơn), hoặc một dàn ngoài trời và một refnet, một refnet và một dàn trong nhà, hoặc hai refnet (VRF).
2. Mở {{ui:Bản dựng}} và chọn {{ui:Đường ống gas}}.

BimCraft vẽ các đoạn lỏng và gas giữa các cổng còn trống của chúng, đi ra từ mỗi cổng và lên đến một độ cao chung, bằng đồng ACR (cuộn ủ đến 1-5/8 in, ống kéo ở trên mức đó), như một bước của {{ui:Hoàn tác}}. Refnet chỉ nhận đường ống riêng của nó: vào đầu vào từ phía dàn ngoài trời và ra từ một nhánh về phía các dàn trong nhà. Mỗi đoạn lấy cỡ của đầu hạ lưu (dàn trong nhà, hoặc đầu vào của refnet); nếu cổng ở đầu kia có cỡ khác, {{ui:Kiểm tra kết nối}} sẽ liệt kê điều đó: đó là chỗ cần đặt bộ giảm. Hai dàn trong nhà cần một refnet ở giữa.

Sau đó bạn có thể di chuyển các đoạn như mọi đường ống; hai đầu của chúng vẫn bám trên cổng. Các đoạn giữa các tầng được vẽ bằng {{ui:Ống}}: ống bắt đầu từ cổng môi chất sẽ lấy hệ thống, đồng ACR và cỡ của nó.

## Đổi bảng kích thước đường ống gas

Mở {{ui:Bản dựng}} và chọn {{ui:Kích thước đường ống gas}}. Mỗi dòng cho biết: đến công suất này (kW), ống lỏng này và ống gas này.

| Đến | Lỏng | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Đây là các giá trị khởi đầu, điển hình. Sửa một dòng, thêm hoặc bớt dòng rồi chọn {{ui:Lưu}}: bảng được giữ trong mô hình, nên mọi người làm trên tệp đều dùng nó, và {{ui:Hoàn tác}} sẽ khôi phục lại. {{ui:Dùng các giá trị điển hình}} đặt lại bảng khởi đầu. Các phần tử đã đặt giữ nguyên cổng của chúng cho đến khi bạn đổi chúng.

## Trong tệp IFC

Dàn trong nhà và dàn ngoài trời của hệ split và VRF là IfcUnitaryEquipment kiểu SPLITSYSTEM, với loại đối tượng cho biết đó là dàn nào ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Dàn quạt cuộn là IfcUnitaryEquipment kiểu AIRHANDLER với loại đối tượng "Fan coil unit": IFC4 không có kiểu dàn quạt cuộn, và một quạt, một cuộn và một bộ lọc cho một phòng là những gì AIRHANDLER mô tả. Khớp refnet là IfcPipeFitting kiểu JUNCTION ("Refnet joint"). Tệp IFC2X3 nhận IfcEnergyConversionDevice và IfcFlowFitting với các kiểu tương ứng.

Cổng và đoạn môi chất nằm trong hệ REFRIGERATION (một hệ cho đường lỏng, một hệ cho đường gas), nước ngưng nằm trong hệ DRAINAGE. Các đoạn ACR được đặt tên theo đường kính ngoài. Bảng kích thước đường ống gas là bộ thuộc tính CadCraft_HvacLineSets trên dự án.

Xem thêm [Thiết bị MEP có cổng](topic:mep-equipment), [Nối ống và ống gió vào thiết bị](topic:mep-connections) và [Ống và ống gió](topic:pipes-and-ducts).
