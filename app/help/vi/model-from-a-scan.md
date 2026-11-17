---
title: Mô hình từ bản quét
summary: Hướng dẫn ngắn từ bản quét laser đến tường: mở đám điểm cạnh một công trình mới, căn nó với một tầng, rồi vẽ theo tường trên mặt bằng.
keywords: quét, quét laser, đám điểm, as-built, công trình hiện có, khảo sát, vẽ theo, quét thành BIM, mô hình từ bản quét, lát cắt, căn chỉnh, vuông góc, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Bạn sẽ làm gì

Vẽ một công trình hiện có từ bản quét laser của nó: tường đặt đúng nơi bản quét cho thấy, đúng tầng, và vuông góc với nhau.

## Các bước

1. **Một công trình để vẽ.** {{ui:File}} › {{ui:New building}}, với số tầng bằng số tầng của công trình (bạn có thể thêm tầng sau, xem [Khu đất, công trình trên đó và các tầng của nó](topic:site-building-and-levels)). {{ui:Draw}} được bật.
2. **Bản quét.** {{ui:Show}} › {{ui:Point cloud}} rồi chọn tệp (LAS, LAZ, E57, PLY, PCD, PTX hoặc XYZ: xem [Hiển thị đám điểm bên cạnh mô hình](topic:point-clouds)). Đám điểm hiện trong khung nhìn 3D, còn mặt bằng hiện **lát cắt** của nó: các điểm quét cách tầng 1200 mm (4 feet), dưới dạng chấm. Đó là độ cao mà tường, cửa đi và cửa sổ hiện rõ nhất.
3. **Căn với tầng.** Mở menu {{ui:Scan}} trên thanh mô hình rồi nhấp {{ui:Align its floor to this level}}: đám điểm di chuyển lên hoặc xuống cho đến khi sàn mà nó quét nằm trên tầng đang hiển thị. Kiểm tra lát cắt giờ đi qua các tường.
4. **Vuông góc với công trình.** {{ui:Scan}} › {{ui:Turn it square to the building}} xoay đám điểm sao cho các tường trong lát cắt chạy dọc theo các trục của mặt bằng, nên các tường bạn vẽ khi giữ {{key:Shift}} sẽ thẳng hàng với bản quét. Nó xoay quanh giữa các tường đã tìm thấy, nên cây cối hoặc tường nhà hàng xóm nằm trong lát cắt không làm bản quét lệch đi. Hãy căn sàn trước: khi đó lát cắt đi qua các tường.
5. **Vẽ theo tường.** Chọn {{ui:Wall}} và nhấp dọc theo các chấm: công cụ bắt vào các điểm đã quét (dấu bắt là một hình thoi nhỏ) cũng như vào các tường bạn đã vẽ. Tường được vẽ theo đường tâm, nên hãy nhấp dọc giữa hai hàng chấm mà một tường để lại; để nhập độ dày, hãy chọn loại tường trước. Sau đó thêm cửa đi và cửa sổ ở những chỗ lát cắt cho thấy khoảng trống.
6. **Tầng tiếp theo.** Chọn tầng phía trên trong danh sách tầng của mặt bằng: lát cắt theo cao độ cắt của tầng. Chỉ căn sàn với tầng đó một lần nữa khi các sàn trong bản quét không nằm đúng vị trí các tầng của bạn.

## Bạn sẽ thấy gì

- Lát cắt thay đổi khi bạn đổi tầng, và lát cắt dày hơn ({{ui:Scan}} › {{ui:Slice thickness}}) hiện nhiều điểm hơn ở chỗ bản quét thưa.
- {{ui:Scan}} › {{ui:Undo the alignment}} đặt đám điểm về vị trí nó có khi được mở. Căn chỉnh chỉ di chuyển đám điểm trong khung nhìn: nó không được lưu trong tệp IFC, và các tường bạn đã vẽ vẫn đứng yên. Căn chỉnh đi theo đám điểm khi bạn đổi {{ui:Place}} hoặc {{ui:Units}}, hoặc mở một mô hình khác.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} ẩn hoặc hiện các chấm.

:::tip
Bản quét lớn: mặt bằng vẽ tối đa 60.000 điểm của lát cắt, còn khung nhìn 3D vẽ vài triệu điểm của toàn bộ đám điểm, cả hai đều lấy đều khắp bản quét, nên tệp lớn vẫn nhanh. Để vẽ theo trong ứng dụng bản vẽ, hãy dùng {{ui:Trace in CadCraft}} trên thanh đám điểm.
:::
