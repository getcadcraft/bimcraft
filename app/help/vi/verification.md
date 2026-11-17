---
title: Đánh dấu cấu kiện đã kiểm tra hoặc đã xác minh tại hiện trường
summary: Một cấu kiện đọc từ PDF hoặc bản quét là chưa xác minh cho đến khi bạn kiểm tra. Đánh dấu cấu kiện là đã kiểm tra, hoặc đã xác minh tại hiện trường (LOD 500) kèm người đo, thời điểm và cách đo, rồi bàn giao một mô hình hoàn công cho biết cái nào là cái nào.
keywords: chưa xác minh, đã xác minh, đã kiểm tra, xác minh tại hiện trường, hoàn công, as-built, lod 500, kết thúc, bàn giao, đo tại hiện trường, thước dây, laser, quét, khảo sát, công trình hiện có, cải tạo, đánh dấu đã kiểm tra, xác minh, giai đoạn 7
from: df35d908
---

## Bạn sẽ làm gì

Theo dõi những gì trong mô hình đã thực sự được ai đó xem xét. Một cấu kiện có một trong ba dấu, hoặc không có dấu nào:

- **Chưa xác minh**: chương trình nhận ra nó từ PDF, bản vẽ quét, bản vẽ đã vẽ lại hoặc bản quét đám điểm. Chưa ai kiểm tra.
- **Đã kiểm tra**: một người đã so sánh nó với bản vẽ mà nó lấy từ đó.
- **Đã xác minh tại hiện trường (LOD 500)**: một người đã đo nó tại hiện trường. Ai, khi nào và đo bằng cách nào được lưu kèm với nó.
- **Không có dấu**: do người vẽ. Mô hình không đưa ra nhận định nào về nó.

## Các bước

1. Chọn một cấu kiện hoặc nhiều cấu kiện (tường, cửa, cửa sổ, phòng, bất kỳ cấu kiện nào).
2. Trong {{ui:Thuộc tính}}, mở {{ui:Xác minh}}.
3. Gõ tên người đã kiểm tra hoặc đo. Ngày là hôm nay, trừ khi bạn đổi.
4. Nhấn {{ui:Đánh dấu đã kiểm tra}}. Với đo tại hiện trường, chọn cách đo (thước dây, máy đo khoảng cách laser, quét, khảo sát) và nhấn {{ui:Đánh dấu đã xác minh tại hiện trường (LOD 500)}}.
5. {{ui:Đánh dấu chưa xác minh}} và {{ui:Gỡ dấu}} hoàn lại. Mỗi lần nhấn là một bước bạn có thể hoàn tác, cho toàn bộ vùng đã chọn.

Để đánh dấu nhanh một vùng chọn: {{ui:Công cụ}} › {{ui:Đánh dấu đã kiểm tra}} (gõ: `MARKCHECKED`) đánh dấu vùng chọn là đã kiểm tra bởi bạn, hôm nay.

## Bạn nên thấy

- Trong mặt bằng, cấu kiện chưa xác minh có hộp nét đứt và dấu "?"; cấu kiện đã xác minh tại hiện trường có dấu tích. Bỏ chọn {{ui:Hiển thị dấu xác minh trên mặt bằng}} trong mục {{ui:Kiểm tra}} để ẩn chúng.
- {{ui:Bảng thống kê}} › {{ui:Xác minh}} liệt kê mọi cấu kiện được đánh dấu cùng tầng, trạng thái, người, thời điểm, cách đo và nguồn gốc của nó.
- Kiểm tra liệt kê các cấu kiện chưa xác minh, và tính cấu kiện đã xác minh tại hiện trường là LOD 500. Xem [Kiểm tra mô hình](topic:audit-the-model).

## Từ bản quét

Khi bạn so sánh bản quét với mô hình, {{ui:Đánh dấu các cấu kiện khớp là đã xác minh tại hiện trường}} đánh dấu mọi cấu kiện mà bản quét thấy là đã xây dựng trong dung sai, với phương pháp "scan" và dung sai được ghi trong ghi chú. Xem [So sánh bản quét với mô hình](topic:compare-scan-with-model).

:::warning
Phép so sánh đó ghép hộp của từng cấu kiện với các điểm quét. Nó không phải là khảo sát. Hãy dùng nó cho các cấu kiện mà bạn cũng đã xem xét.
:::

## Mô hình hoàn công và gói bàn giao

{{ui:Tạo gói bàn giao}} trên thẻ {{ui:Tài nguyên}} đặt mô hình hoàn công vào tệp zip, cùng với:

- một bản tóm tắt trên dự án về số cấu kiện đã xác minh tại hiện trường, đã kiểm tra, chưa xác minh và chưa đánh dấu;
- `as-built/verified-elements.csv`: mọi cấu kiện và phòng với trạng thái, người, thời điểm và cách đo của nó;
- `as-built/as-built-drawings.pdf`: bộ bản vẽ đúng như hiện nay;
- nhật ký thay đổi bản vẽ, khi mô hình đã phát hành các bộ bản vẽ.

Xem [Tài nguyên và bảo trì](topic:assets-and-maintenance).

## Cách được lưu trong IFC

Mỗi cấu kiện được đánh dấu mang bộ thuộc tính `CadCraft_Verification`: State, By, On, Method, Source, Note và LevelOfDevelopment (`LOD 500` khi đã xác minh tại hiện trường). Đây là các thuộc tính văn bản thuần, nên các chương trình khác liệt kê được, và Tìm, Tô màu theo thuộc tính cùng bảng thống kê thẻ có thể dùng chúng. Bản tóm tắt hoàn công là bộ thuộc tính `CadCraft_AsBuilt` trên dự án. Cấu kiện không có bộ này chưa được đo tại hiện trường.

## Tiếp theo

- [Tường từ một bộ mặt bằng](topic:walls-from-plans)
- [Kiểm tra mô hình](topic:audit-the-model)
