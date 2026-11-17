---
title: Hệ thống tường rèm: tường kính trên lưới, có thanh đố
summary: Vẽ hệ thống tường rèm như một bức tường hoặc đặt nó lên một mặt, rồi đặt các đường lưới và thanh đố. Hệ thống được lưu dưới dạng IfcCurtainWall với các ô kính và thanh đố.
keywords: hệ thống tường rèm, tường rèm, lưới tường rèm, thanh đố, lắp kính, mặt tiền cửa hàng, tường kính, tấm, ô kính, theo mặt, mặt, khối, đường lưới, khoảng cách, tiết diện, thanh ngang, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Bạn sẽ làm gì

Tạo một bức tường kính gồm các ô kính giữa các thanh đố, thay đổi vị trí các đường lưới, và chọn những đường nào có thanh đố.

## Các bước

1. Bật **Vẽ** và mở menu **Xây dựng** (khi dùng bố cục dải lệnh: thẻ Kiến trúc).
2. Chọn **Hệ thống tường rèm**. Trong hàng của nó, đặt đỉnh (tầng phía trên, hoặc một chiều cao), một đường mỗi quãng bao nhiêu dọc theo nó, một đường mỗi quãng bao nhiêu lên theo nó (để trống nếu không có), có hay không có thanh đố, và tiết diện thanh đố.
3. Nhấp nơi nó bắt đầu và nơi nó kết thúc, như khi vẽ tường. Shift giữ cho nó vuông góc.
4. Để thay đổi lưới, chọn **Lưới tường rèm** và nhấp vào hệ thống:
   - **Thêm một đường**: đường đứng được đặt tại nơi bạn nhấp. Với đường ngang, nhập chiều cao của nó trong **Tại** trước.
   - **Di chuyển một đường**: nhấp vào đường, rồi nhấp nơi nó sẽ đến.
   - **Gỡ một đường**: nhấp vào đường.
   - **Đặt theo khoảng cách**: nhập khoảng cách trong **Mỗi**, rồi nhấp vào hệ thống.
5. Để thay đổi thanh đố, chọn **Thanh đố**, chọn đối tượng nó tác động (đường đứng bạn nhấp, đường ngang ở một chiều cao, biên, hoặc mọi đường), chọn **Đặt thanh đố** hoặc **Gỡ thanh đố** và một tiết diện, rồi nhấp vào hệ thống.
6. Chọn một hệ thống để xem toàn bộ trong **Thuộc tính**: mọi đường lưới cùng vị trí, một dấu chọn cho thanh đố và một nút để gỡ; khoảng cách; biên; tiết diện; độ dày ô kính.

## Theo mặt

**Theo mặt** tạo một hệ thống tường rèm trên một mặt phẳng bạn nhấp trong khung nhìn 3D. Hàng của nó có cùng cài đặt lưới và thanh đố.

- Nó hoạt động trên mọi mặt phẳng của mọi phần tử mà khung nhìn 3D hiển thị: một khối, tường, sàn, mặt mái, cột, một mục đã đặt. Mặt có thể thẳng đứng, dốc hoặc nằm ngang.
- Hệ thống lấy đường bao của mặt. Mái đầu hồi hoặc hình dạng lạ khác sẽ cắt ô kính và thanh đố theo đường bao đó.
- Nó có thể tạo một **tường** thay thế, dọc theo chân một mặt thẳng đứng và cao bằng mặt. Tường ở đây luôn đứng thẳng, nên mặt nghiêng hoặc nằm ngang không thể tạo tường.
- Nó không tạo mái. Mái trong BimCraft được tính từ đường bao của một tầng và độ dốc, không phải từ một mặt đơn lẻ.
- Mặt cong là nhiều mặt phẳng nhỏ: một lần nhấp lấy một trong số đó.
- Mặt có lỗ mở: hệ thống phủ theo đường bao ngoài của mặt.

## Cách đo

- **Diện tích tổng** là đường bao của hệ thống.
- **Diện tích kính** là các ô kính như đã làm: mỗi ô mất nửa chiều rộng thanh đố ở mỗi cạnh có thanh đố lưới, và mất nguyên chiều rộng ở thanh đố biên.
- Thanh đố đứng chạy xuyên từ biên đến biên. Thanh đố ngang dừng ở mỗi thanh đố đứng và ở biên. Thanh đố biên nằm bên trong đường bao; nơi hai thanh gặp nhau, thanh đứng hơn sẽ chạy xuyên. Các mối nối được cắt vuông, không vát.
- **Bảng thống kê** có danh sách **Hệ thống tường rèm** với các số này khi mô hình có một hệ thống.

## Trong tệp IFC

Một IfcCurtainWall trên tầng của nó, gồm một IfcPlate (tấm tường rèm) cho mỗi ô kính và một IfcMember (thanh đố) cho mỗi đoạn thanh đố, mỗi cái có hình dạng, vật liệu và khối lượng cơ sở riêng.

## Điều nên biết

- Mọi kích thước đều được tạo theo yêu cầu. Chỉ đường bao không có diện tích mới bị từ chối, vì không có gì để tạo.
- Hệ thống vẽ như tường giữ chiều cao đã vẽ. Nếu sau này bạn di chuyển một tầng, hãy đặt lại chiều cao trong Thuộc tính.
- Công cụ Di chuyển chưa di chuyển được hệ thống tường rèm. Xóa và vẽ lại, hoặc thay đổi lưới tại chỗ.
- Hoàn tác lấy lại từng bước: toàn bộ hệ thống, một thay đổi lưới, một thay đổi thanh đố.
