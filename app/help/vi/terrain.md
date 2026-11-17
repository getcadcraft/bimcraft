---
title: Địa hình của công trường, nền công trình và lát nền
summary: Đưa mặt đất vào mô hình từ điểm khảo sát, đường đồng mức, bản quét LAS / LAZ, GeoTIFF, mặt LandXML (của CivilCraft) hoặc vài cao độ điểm; cắt nền công trình của ngôi nhà với các mái dốc và đào / đắp; trải đường lái xe, lối đi và sân lên trên; chuyển cho CivilCraft dưới dạng LandXML.
keywords: địa hình, mặt đất, công trường, trắc địa, khảo sát, điểm, PNEZD, đường đồng mức, LAS, LAZ, LiDAR, GeoTIFF, DEM, cao độ, cao độ điểm, mái dốc, san nền, nền, nền công trình, đào, đắp, khối lượng đất, đường giao với mặt đất, độ dốc, đường lái xe, lối đi, sân, lát nền, LandXML, CivilCraft
from: 208298d6
---

## Mục bạn sẽ làm

Đặt ngôi nhà lên khu đất của nó. Mặt đất trở thành một phần của mô hình: hiển thị trong 3D, cắt trong các mặt cắt và mặt đứng, có đường đồng mức trên mặt bằng. Một nền công trình được cắt vào dưới ngôi nhà, đường lái xe và lối đi bám theo nó, và móng hạ xuống cùng với nó.

## Đưa mặt đất vào

1. Mở {{ui:Bản dựng}} và chọn {{ui:Địa hình}}.
2. Hoặc:
   - **Mở tệp khảo sát…**: điểm khảo sát (PNEZD, PENZD hoặc đơn giản là đông, bắc, cao độ; phân tách bằng dấu phẩy, tab hoặc khoảng trắng), đường đồng mức trong DXF hoặc DWG (đa tuyến ở cao độ của chúng, đa tuyến 3D), bản quét LAS hoặc LAZ (giữ các điểm mặt đất, thưa còn khoảng một điểm trên mỗi mét vuông), lưới cao độ GeoTIFF hoặc ASCII, hoặc một mặt **LandXML** như CivilCraft xuất ra (giữ lại các điểm và tam giác của chính nó; khi tệp chứa nhiều mặt, BimCraft hỏi mặt nào là mặt đất; đơn vị của nó lấy từ tệp). Chọn đơn vị của tệp trước (LandXML tự khai báo).
   - Hoặc nhập một **Cao độ điểm** (tính từ sàn của tầng này, nên `-1'` là thấp hơn sàn một foot) và nhấp các điểm trên mặt bằng, đổi cao độ rồi nhấp thêm, sau đó **Tạo mặt đất**. Ba điểm là đủ để bắt đầu.

Tọa độ khảo sát ở xa mô hình (hệ tọa độ phẳng, UTM) được dời lên ngôi nhà, và cao độ được đặt sao cho mặt đất tại ngôi nhà nằm khoảng 8" dưới sàn tầng một. **Nâng mặt đất** trong **Thuộc tính** sẽ chỉnh theo bất kỳ mức nào.

## Nền công trình

1. Chọn {{ui:Nền công trình}}.
2. Đặt **Lề** quanh ngôi nhà, nền **nằm dưới sàn** bao nhiêu (8" dưới sàn bê tông, sâu hơn dưới gầm sàn thông gió) và **Mái dốc** ra tới mặt đất hiện có (`2:1` = hai foot ra cho mỗi foot lên hoặc xuống).
3. Đặt con trỏ bên trong ngôi nhà và nhấp.

Mặt đất được san phẳng dưới ngôi nhà và ra tới lề, rồi dốc lên vào sườn đồi (đào) và dốc xuống phía thấp (đắp) cho đến khi gặp mặt đất hiện có. **Thuộc tính** của mặt đất và của nền cho khối lượng đào và đắp. Di chuyển tường thì nền đi theo.

## Đường lái xe, lối đi và sân

Chọn {{ui:Lát nền}}, chọn **Lối đi**, **Đường lái xe** hoặc **Sân**, rồi nhấp các góc. Nhấp lại góc đầu tiên, nhấp đúp hoặc nhấn {{key:Enter}} để kết thúc. Lớp lát bám theo cao độ hoàn thiện; đổi loại hoặc độ dày trong **Thuộc tính**.

## Móng bám theo cao độ

Khi mặt đất đã có trong mô hình, tường móng và móng gầm sàn sẽ theo nó: dọc theo mỗi tường, móng giữ đúng độ sâu của nó dưới mặt đất bên ngoài, và bậc xuống theo từng bước 8" khi mặt đất dốc xuống (xem [Móng dưới tường](topic:foundations)).

## Chuyển cho CivilCraft

**LandXML cho CivilCraft** (trong hàng Địa hình, hoặc trong **Thuộc tính** của mặt đất) tải về mặt đất hiện có và cao độ hoàn thiện dưới dạng tệp LandXML. Mở trong CivilCraft để san nền, thoát nước và tính khối lượng đất thực tế.

## Cần biết

- Mặt đất cần một mô hình IFC4, như mọi công trình mới.
- Đường đồng mức hiển thị trên mặt bằng của tầng mặt đất theo khoảng cách đặt trong **Thuộc tính** của mặt đất; cứ mỗi đường thứ năm được vẽ đậm hơn.
- Mặt đất được lưu thành một phần tử địa hình IFC (một mặt tam giác khép kín, để các mặt cắt cắt được nó); nền và lớp lát được lưu cùng. Xóa mặt đất để bắt đầu lại — nền và lớp lát của nó cũng mất theo.
