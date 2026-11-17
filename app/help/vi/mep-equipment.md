---
title: Thiết bị MEP có cổng
summary: Đặt AHU, quạt, bơm, lò hơi, bình nước nóng, thiết bị đầu cuối, miệng gió, lưới và bồn chứa có kích thước theo các giá trị bạn nhập, mỗi cái có các cổng kết nối ống và ống gió để các đoạn khác nối vào.
keywords: mep, thiết bị, ahu, bộ xử lý không khí, quạt, quạt ống, bơm, lò hơi, bình nước nóng, thiết bị đầu cuối, vav, miệng gió, lưới, ống thông gió, bồn, cổng, kết nối, cổ, kích thước cổ, hvac, cấp thoát nước, cơ điện, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Bạn sẽ làm gì

Đặt thiết bị ở đầu các ống và ống gió của bạn. Mỗi thiết bị là một hình dạng chung, được định cỡ theo giá trị bạn nhập, với các kết nối là **cổng**: nơi ống hoặc ống gió nối vào, thuộc hệ thống nào, dòng chảy đi theo hướng nào, và kích thước bao nhiêu. Ống và ống gió vẽ từ một cổng nhận kích thước và hệ thống của nó và được cố định vào đó: xem [Nối ống và ống gió với thiết bị](topic:mep-connections).

:::note
Đây là công cụ hỗ trợ bản vẽ và phối hợp, do kỹ sư định cỡ. Thiết bị không phải là sản phẩm của nhà sản xuất nào: không có công suất, trọng lượng hay kích thước kết nối của nhà sản xuất. Khi cần, hãy mang mô hình của nhà sản xuất từ chương trình MEP của bạn dưới dạng IFC.
:::

## Đặt một thiết bị

1. Bật {{ui:Vẽ}}, mở {{ui:Bản dựng}} và chọn {{ui:Thiết bị}}.
2. Trong thanh, chọn loại và nhập kích thước. Mỗi loại yêu cầu các mục riêng:

| Loại | Bạn nhập | Các cổng của nó |
|---|---|---|
| Air handler (AHU) | dài, rộng, cao; lỗ cấp và hồi; kích thước và hệ thống ống dàn; kích thước ống ngưng | ống gió cấp ra, ống gió hồi vào, dàn vào và ra, ống thoát nước ngưng |
| Quạt ống | đường kính, chiều dài, hệ thống | ống gió vào và ra |
| Bơm | kích thước ống, hệ thống | vào và ra |
| Lò hơi | dài, rộng, cao, kích thước ống, kích thước ống gas, đường kính ống khói | cấp nhiệt ra và hồi vào, gas vào, khói ra |
| Bình nước nóng | đường kính, cao, kích thước ống, gas hoặc điện | nước lạnh vào, nước nóng ra (và gas vào cùng ống khói khi đốt gas) |
| Thiết bị đầu cuối | dài, rộng, cao, đầu vào tròn, chiều rộng và cao đầu ra | khí cấp vào và ra |
| Miệng gió | kích thước mặt, cổ, hệ thống | cổ của nó (khí vào) |
| Lưới | rộng và cao mặt, rộng và cao cổ, hệ thống | cổ của nó (khí ra tới ống hồi hoặc ống xả) |
| Bồn | đường kính, cao, kích thước ống, hệ thống | vào ở trên đỉnh, ra gần đáy |
| Bộ tản nhiệt | dài, cao, sâu, kích thước ống, hệ thống | dòng vào ở đầu trên của một bên, hồi ra ở đáy của đầu bên kia |
| Bộ đối lưu / tấm sưởi | dài, cao, sâu, kích thước ống, hệ thống | dòng vào ở một đầu, hồi ra ở đầu kia |
| Họ của nhà sản xuất | họ (xem [Thông số ống, van, van điều tiết và họ của nhà sản xuất](topic:pipe-specs)) | các cổng mà họ đó được gán |

3. Đặt **Tại**, độ cao của đáy so với tầng. Độ cao của miệng gió hay lưới là độ cao mặt của nó: nhập chiều cao trần.
4. Nhập **Nhãn** nếu muốn (`AHU-1`); thiết bị cùng loại tiếp theo sẽ nhận số kế tiếp.
5. Di chuyển con trỏ trên mặt bằng: dấu chiếm chỗ và các cổng của nó đi theo. Nhấn {{key:R}} để xoay 90°. Bấm nơi cần đặt.

Kích thước ống là kích thước ống thép danh định (ASME B36.10M). Ống vẽ từ bơm bằng vật liệu khác sẽ nhận cùng kích thước danh định theo vật liệu của nó.

## Đổi hoặc xóa

Chọn nó trên mặt bằng hoặc khung nhìn 3D. Thuộc tính hiển thị mọi kích thước bạn đã nhập, nhãn, X, Y, độ cao và góc xoay, cùng từng cổng: kích thước, hệ thống, dòng chảy đi theo hướng nào, và có gì đang nối vào hay không. Mỗi thay đổi là một bước của {{ui:Hoàn tác}}; các đoạn được cố định vào cổng của nó sẽ di chuyển theo. {{key:Delete}} xóa nó; các đoạn từng cố định vào nó vẫn còn, và mục kiểm tra kết nối sẽ liệt kê chúng.

## Trong tệp IFC

Mỗi loại được lưu theo lớp IFC của nó: IfcUnitaryEquipment (AHU), IfcFan (quạt), IfcPump (bơm), IfcBoiler (lò hơi; bình nước nóng là một IfcBoiler kiểu nước với loại đối tượng "Water heater"), IfcAirTerminalBox (thiết bị đầu cuối), IfcAirTerminal (miệng gió, lưới) và IfcTank (bồn), kèm một kiểu dùng chung cho mọi thiết bị cùng loại và kích thước. Tệp IFC2X3 nhận IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal và IfcFlowStorageDevice với các kiểu tương ứng. Mỗi cổng là một IfcDistributionPort đặt đúng ở vị trí kết nối, quay ra ngoài, kèm hướng dòng chảy và hệ thống; các chương trình khác đọc được đoạn nào nối vào cổng nào. Thiết bị tham gia vào hệ thống của từng cổng và mang các tập thuộc tính mà mọi mục thư viện đã đặt đều có.
