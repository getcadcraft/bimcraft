---
title: Định dạng đám điểm: những gì mở được và cần xuất gì
summary: Tệp quét laser nào mở trong chế độ xem 3D, tệp nào là định dạng riêng của hãng máy quét, và cần xuất gì từ phần mềm của máy quét để bản quét mở được ở đây.
keywords: đám điểm, quét laser, bản quét, định dạng, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, xuất, không mở được, không đọc
from: 1e985f01
---

## Những gì mở được ở đây

Mở các tệp này bằng {{ui:Mở}} hoặc thả chúng vào trang (xem chủ đề về hiển thị đám điểm cạnh mô hình):

| Định dạng | Phần mở rộng | Được đọc gì |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: điểm, màu, cường độ, lớp LiDAR, hệ tọa độ. LAZ tối đa 1 GB. |
| E57 | `.e57` | Mọi bản quét trong tệp, mỗi bản đặt theo tư thế của nó; màu, hoặc cường độ khi tệp không có màu. Ảnh trong tệp bị bỏ qua (có thông báo). Hiện tối đa 6 triệu điểm và 512 MB: xuất bản quét lớn hơn dưới dạng LAS hoặc LAZ. |
| PLY | `.ply` | Văn bản và nhị phân (cả hai thứ tự byte): tọa độ x y z của đỉnh, màu và cường độ. Mặt bị bỏ qua (có thông báo). |
| PCD | `.pcd` | Văn bản và nhị phân: x y z, màu gộp hoặc tách riêng, cường độ. Tệp PCD nén chưa được đọc: lưu dưới dạng nhị phân hoặc văn bản. |
| PTX | `.ptx` | Một hoặc nhiều bản quét, mỗi bản đặt theo phép biến đổi riêng; các điểm máy quét không đo được bị bỏ qua. Đơn vị mét. |
| PTS, XYZ | `.pts`, `.xyz` | Văn bản: x y z, kèm cường độ và màu khi có các cột đó. |

## Tệp chỉ phần mềm của máy quét đọc được

Một số tệp quét là định dạng riêng của hãng máy quét, không có mô tả công khai và không có bộ đọc mở. BimCraft không đọc được chúng; khi mở, hiện một thẻ cho biết đó là gì và cần làm gì. Xuất bản quét từ phần mềm của hãng dưới dạng E57 hoặc LAS (hoặc PTX, PTS), rồi mở tệp đã xuất.

| Tệp | Phần mở rộng | Xuất từ |
|---|---|---|
| Dự án ReCap | `.rcp` | ReCap: mở dự án và xuất nó. Dự án chỉ trỏ tới các bản quét của nó, nên chỉ sao chép `.rcp` thì không có điểm nào. |
| Bản quét ReCap | `.rcs` | ReCap: mở dự án mà bản quét thuộc về và xuất nó. |
| Bản quét FARO | `.fls` | FARO SCENE. |
| Bản quét Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Bản quét Trimble | `.tzf` | Trimble RealWorks hoặc Trimble Business Center. |
| Bản quét Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Khi xuất hỏi định dạng, LAS hoặc LAZ giữ được mọi thứ BimCraft hiển thị (màu, cường độ, lớp và hệ tọa độ) trong tệp nhỏ nhất.
:::

## Vì sao các tệp này không được đọc

Những định dạng đó không được công bố, và cách duy nhất để đọc là thư viện phần mềm riêng của từng hãng, theo điều khoản riêng của hãng. BimCraft chỉ đọc các định dạng nó có thể đọc bằng mã riêng trên máy tính của bạn, nên bản quét không bao giờ phải gửi đi đâu để mở.
