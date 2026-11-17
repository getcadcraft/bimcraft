---
title: Mở cảnh trong chương trình khác
summary: Lưu cảnh dưới dạng tệp USD hoặc glTF cho mọi chương trình đọc được chúng, hoặc mở nó từ Studio trong một chương trình trên máy tính này.
keywords: mở bằng, usd, gltf, glb, xuất, chương trình kết xuất, archviz, studio, usdview, gửi, bàn giao, gói, thư mục unreal
from: 0a6559ee
---

Chọn một mục **Mở bằng …** trong danh sách công cụ của {{ui:Kết xuất}} để chuyển cảnh sang chương trình khác. Không có gì được trả về mô hình.

## Một tệp cho mọi chương trình

- **Tệp USD** lưu cảnh dưới dạng `.usdc` (hoặc `.usdz` khi mô hình có ảnh): [cùng tệp với Lưu thành USD](topic:usd), gồm vật liệu, đèn và camera. Tệp giữ được việc tái sử dụng thể hiện (instancing) và các giá trị vật liệu chính xác. Hầu hết bộ kết xuất, công cụ trò chơi và trình xem đều đọc USD.
- **Tệp glTF (.glb)** lưu tệp glTF 2.0 nhẹ hơn với vật liệu, texture và đèn; xem [Gửi mô hình tới chương trình kết xuất](topic:model-for-rendering) để biết những gì tệp mang theo và những gì bị bỏ đi.

- **Thư mục dự án Unreal (.zip)** lưu thư mục mà [Gửi cảnh tới công cụ trò chơi](topic:render-unreal) ghi ra, dùng cho một dự án trên bất kỳ máy tính nào.

Cả ba đều hoạt động trên trình duyệt và trong Studio.

## Trong Studio: mở trong một chương trình

Studio liệt kê các chương trình tìm thấy trên máy tính này có thể mở cảnh: usdview nếu nó nằm trong đường dẫn tìm kiếm của bạn, và chương trình riêng của máy tính cho loại tệp đó. Chọn một chương trình, chọn USD hoặc glTF ở nơi nó đọc được cả hai, rồi nhấp {{ui:Kết xuất}}. Studio ghi gói vào một thư mục mới trong Documents (`CadCraft hand-off`; không tệp nào bị ghi đè, mỗi lần gửi có thư mục riêng) rồi khởi chạy chương trình trên thư mục đó, sau đó cho biết các tệp nằm ở đâu.

| Chương trình | Đọc tốt nhất |
|---|---|
| usdview | USD |
| Chương trình riêng của máy tính | Bất cứ thứ gì máy tính có cho loại tệp đó |

Studio chỉ khởi chạy các chương trình trong danh sách cố định này; nó không chạy bất cứ thứ gì trang web yêu cầu theo tên, và không bao giờ khởi chạy chương trình theo giấy phép GNU GPL (xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program#programs-cadcraft-never-runs)). Bất kỳ chương trình nào đọc USD hoặc glTF đều mở được tệp từ **Một tệp cho mọi chương trình** ở trên.

:::note
Twinmotion, Enscape và các chương trình trực quan hóa khác không có trong danh sách: CadCraft chưa được kiểm thử với chúng và không đưa ra khẳng định nào về chúng. Tệp glTF hoặc USD từ đây là đường vào; xem các ghi chú về [bộ kết xuất plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
