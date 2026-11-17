---
title: Phát triển khối công trình từ nghiên cứu công trường
summary: Lấy một khối công trình đã nghiên cứu trong khung nhìn công trường của CivilCraft và phát triển thành các tầng, tường và sàn, với vị trí của công trường trên bản đồ được giữ lại.
keywords: khối, khối công trình, nghiên cứu khối, nghiên cứu công trường, phát triển, CivilCraft, bàn giao, tầng, tường, sàn, dấu chân, định vị địa lý, IFC
from: 557b94d1
---

Khung nhìn công trường của CivilCraft có thể vẽ các khối công trình trên một thửa đất và kiểm tra chúng với mặt đất, các giới hạn bạn nhập và ánh nắng. **Phát triển trong BimCraft** mở BimCraft trong một thẻ mới với các khối; **Khối dưới dạng IFC** lưu chúng thành một tệp để bạn mở ở đây theo cách thông thường. Dù bằng cách nào, mỗi khối đến nơi dưới dạng một công trường, một công trình với một tầng cho mỗi sàn, và một khối (chính khối đó) mang các số liệu của nó.

## Phát triển một khối

1. Chọn một khối trong khung nhìn 3D. Thuộc tính hiển thị công dụng, số tầng và chiều cao tầng, dấu chân, diện tích sàn tổng, cách nó nằm trên dốc, và thửa đất của nó.
2. Nhấp **Phát triển khối này**.

Trong một bước hoàn tác, mỗi tầng của công trình đó có tường bao quanh dấu chân (dấu chân là mặt ngoài của tường; mỗi tường đi lên đến tầng phía trên, và tầng trên cùng cao một tầng) và một sàn dưới toàn bộ công trình. Khối được thay thế, và công trình giữ các số liệu của nghiên cứu trong bộ thuộc tính `CadCraft_SiteMass`, được đánh dấu là đã phát triển. Không có mái: mái phụ thuộc vào thiết kế.

## Vị trí của công trường

Một tệp từ CivilCraft được ghi theo đơn vị chiều dài của dự án và, khi dự án CivilCraft có hệ tọa độ, nó mang hệ tọa độ đó như chuyển đổi bản đồ của dự án. Phát triển khối không thay đổi điều đó, nên công trình vẫn ở đúng vị trí mà bản đồ chỉ ra.
