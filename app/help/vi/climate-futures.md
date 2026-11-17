---
title: "Khí hậu tương lai: lũ lụt, nắng nóng và cháy rừng năm 2050 và 2080"
summary: Chạy lại mô phỏng lũ, năm năng lượng và sàng lọc cháy rừng với khí hậu tương lai (kịch bản SSP2-4.5 và SSP5-8.5, năm 2050 và 2080) từ một gói dữ liệu khí hậu, hiển thị hiện tại cạnh tương lai.
keywords: khí hậu, biến đổi khí hậu, tương lai, 2050, 2080, ssp, cmip6, kịch bản, mực nước biển, lũ lụt, nóng, tệp thời tiết, epw, morph, energyplus, cháy rừng, cháy rừng bụi, thời tiết cháy
from: 224ecd08
---

Dữ liệu khí hậu đến từ một **gói dữ liệu**, không phải từ ứng dụng. Bật tiện ích bổ sung {{ui:Climate futures}} trong Cài đặt › Tiện ích bổ sung, hoặc tải một tệp gói của riêng bạn trong khối {{ui:Climate future}}.

:::warning
Gói đi kèm tiện ích bổ sung là một **mẫu**: ba địa điểm (Denver, Miami, Johannesburg), một mô hình khí hậu, năm năm trong mỗi chu kỳ 20 năm. Nó có đó để thử các công cụ, **không dùng cho thiết kế**. Bảng ghi điều này bằng chữ đậm khi nó đang được dùng. Một gói đầy đủ (nhiều mô hình, mọi năm, nhiều địa điểm hơn) được tạo bằng `tools/climate/build-pack.mjs` từ dữ liệu NEX-GDDP-CMIP6 của NASA.
:::

## Chọn một tương lai

Trong {{ui:Hazard playback}} của bảng bên trái, chọn một **Kịch bản** (SSP2-4.5, mức trung bình, hoặc SSP5-8.5, phát thải cao) và một **Năm** (2050 nghĩa là 2041-2060, 2080 nghĩa là 2071-2090; cả hai đều so với 1995-2014). **Địa điểm** là địa điểm của gói gần nhất với khu đất của mô hình (vĩ độ và kinh độ IfcSite), hoặc địa điểm bạn chọn. Khi ở xa mọi địa điểm, các thay đổi trung bình toàn cầu của gói được dùng và bảng ghi rõ điều đó.

## Lũ lụt, hiện tại cạnh tương lai

Khi đã chọn một kịch bản, đặt **Loại lũ**: ven biển (cộng thêm mức nước biển dâng), sông, hoặc mưa lớn (sâu hơn theo mức thay đổi lượng mưa của ngày mưa nhiều nhất), hoặc cả hai. Nhấn Chạy: lũ được phát lại như trước, và một bảng hiển thị lũ hiện tại và lũ tương lai cạnh nhau (mực nước, các phòng bị ngập, nước sâu nhất). Các giả định được liệt kê dưới bảng:

- mực nước ven biển tăng đúng bằng mức nước biển dâng toàn cầu; nước dâng do bão và sóng không thay đổi;
- lưu lượng sông tăng tỷ lệ một-một với lượng mưa của ngày mưa nhất, và độ sâu theo lưu lượng mũ 0.6 (phương trình Manning cho lòng sông rộng);
- hai phần được cộng đơn giản với nhau.

## Nhiệt: một tệp thời tiết tương lai

Chọn loại {{ui:Heat: future weather file}}, chọn một tệp thời tiết `.epw` hiện tại và nhấn {{ui:Make the future weather file}}. Tệp được biến đổi (morph) theo từng tháng bằng phương pháp dịch chuyển và kéo giãn đã công bố (Belcher, Hacker and Powell 2005): trung bình tháng ấm lên theo mức thay đổi của gói, các buổi chiều nóng theo mức thay đổi của nhiệt độ cực đại ngày, và các đêm lạnh theo mức thay đổi của nhiệt độ cực tiểu ngày; độ ẩm tương đối dịch chuyển theo mức thay đổi của gói và điểm sương được tính lại. Áp suất và gió giữ nguyên. Bảng so sánh nhiệt độ trung bình và cao nhất, nhiệt độ thiết kế làm mát 0.4 % và sưởi 99.6 %, số giờ ở 30 °C và 35 °C, và số độ-ngày.

{{ui:Save the future weather file}} lưu tệp; {{ui:Use it in the energy check}} chuyển nó sang kiểm tra EnergyPlus (thẻ Năng lượng). Tệp tương lai là cùng một năm điển hình, nhưng ấm hơn: nó không thêm các đợt nóng mới.

## Năm năng lượng, hiện tại cạnh tương lai

Trong kiểm tra EnergyPlus của thẻ Năng lượng (một tiện ích bổ sung riêng, với bộ mô phỏng của bạn), chọn một tệp thời tiết hiện tại, rồi chọn kịch bản và năm trong khối {{ui:Climate future}} của nó, và nhấn {{ui:Simulate a year: present and future}}: năm đó chạy trên tệp hiện tại và trên tệp tương lai đã biến đổi, và tải sưởi và làm mát của từng phòng được liệt kê cạnh nhau.

## Rủi ro cháy rừng (chỉ sàng lọc)

Chọn loại {{ui:Wildfire exposure (screening only)}}: thảm thực vật gần nhất, độ dốc lên từ nó tới công trình và khoảng cách tới nó. Kết quả là một mức từ rất thấp đến cực cao, hiện tại và tương lai.

:::warning
**Chỉ sàng lọc.** Đây là thang đo tương đối của riêng chúng tôi để xem một khu đất có cần đánh giá cháy rừng đầy đủ hay không, không phải xếp hạng theo quy chuẩn hay mức tấn công cháy rừng. Nó nhân một trọng số cho thảm thực vật, một hệ số độ dốc (đám cháy tăng tốc gần gấp đôi cho mỗi 10 độ dốc lên, tính tối đa đến 20 độ), một hệ số khoảng cách (10 m chia cho khoảng cách, tối đa bằng 1) và mức thay đổi của gói đối với chỉ số thời tiết cháy.
:::

## Nguồn các con số

- **Nhiệt độ, độ ẩm, nắng, lượng mưa, thời tiết cháy:** NASA NEX-GDDP-CMIP6, đầu ra CMIP6 được hạ quy mô hằng ngày. Đầu ra của mỗi mô hình theo CC BY 4.0. Mức thay đổi chỉ số thời tiết cháy là Canadian Fire Weather Index được tính ngày qua ngày từ thời tiết của mô hình (dùng độ ẩm hằng ngày thay cho độ ẩm buổi trưa).
- **Mực nước biển dâng:** trung bình toàn cầu của IPCC AR6 (không phải cục bộ; đất nâng lên hay lún xuống không nằm trong đó), trừ khi một gói có số liệu cục bộ.
- Gói ghi nguồn, giấy phép và ngày của nó; bảng hiển thị chúng.
