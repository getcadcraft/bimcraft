---
title: Làm việc giữa hai chương trình BIM
summary: Gửi một mô hình từ chương trình BIM này sang chương trình khác qua IFC với BimCraft ở giữa, giữ GlobalId, bộ thuộc tính và phân loại của nó, thiết lập cả hai chương trình cho cùng các thuộc tính, và xem những gì đã quay về.
keywords: ifc, khứ hồi, khả năng tương tác, globalid, guid, bộ thuộc tính, psets, phân loại, tham số dùng chung, ánh xạ thuộc tính, bộ dịch, bcf, phối hợp, trao đổi
from: 9f224176
---

## Mục bạn sẽ làm

Chuyển một mô hình giữa hai chương trình BIM, ví dụ từ Revit sang Archicad và ngược lại, qua IFC, với BimCraft ở giữa để kiểm tra, bổ sung và báo cáo những gì còn giữ được. Định dạng tệp riêng của chương trình nào cũng không được đọc: mọi thứ đi qua dưới dạng IFC.

## BimCraft giữ lại gì

Khi bạn đổi một mô hình trong BimCraft và nhấp {{ui:Lưu thành IFC}}, mọi dòng bạn không thay đổi được ghi lại đúng như cũ. Vì vậy:

- **GlobalId** giữ nguyên, và chương trình kia có thể khớp mỗi phần tử với phần tử đã gửi đi.
- **Bộ thuộc tính** và giá trị của chúng được giữ lại, ngoại trừ các giá trị bạn đã đổi.
- **Phân loại** vẫn gắn với các phần tử của chúng.

## Thiết lập cả hai chương trình cho cùng thuộc tính

1. Mở mô hình trong BimCraft (và gói dự án, nếu bạn có: các nhóm thuộc tính của nó sẽ được thêm vào).
2. Trong bảng bên trái, mở {{ui:Giữa hai chương trình BIM}}.
3. Dưới **Ánh xạ thuộc tính**, tải về những gì mỗi chương trình cần:
   - {{ui:Tham số dùng chung}}: một tệp tham số dùng chung. Trong Revit, nạp nó bằng Quản lý › Tham số dùng chung và thêm các tham số vào các hạng mục cần chúng.
   - {{ui:Bộ thuộc tính xuất IFC}}: một tệp bộ thuộc tính do người dùng định nghĩa. Trong cài đặt xuất IFC của Revit, chọn nó dưới bộ thuộc tính do người dùng định nghĩa, để IFC xuất ra mang đúng tên bộ và tên thuộc tính giống nhau.
   - {{ui:Bảng ánh xạ (CSV)}}: mọi thuộc tính với bộ IFC và tên của nó, kiểu của nó, và các tên tương ứng trong mỗi chương trình. Tệp ánh xạ của Archicad không phải định dạng được công bố, nên hãy thiết lập bộ dịch IFC và trình quản lý thuộc tính của nó từ bảng này bằng tay.
   - {{ui:Tệp ánh xạ}}: toàn bộ ánh xạ thành một tệp, để giữ cùng dự án.

Các bộ tiêu chuẩn (Pset_ và Qto_) được bỏ qua khỏi tệp tham số dùng chung: cả hai chương trình đều ghi chúng từ dữ liệu của riêng mình.

## Gửi mô hình và đưa về

1. Xuất IFC từ chương trình thứ nhất với GlobalId được giữ (Revit: bật tùy chọn lưu GUID IFC trong một tham số phần tử sau khi xuất).
2. Mở trong BimCraft, kiểm tra ({{ui:Kiểm tra mô hình}}, {{ui:Kiểm tra va chạm}}), thêm vấn đề ({{ui:Vấn đề}}, BCF), đổi giá trị nếu cần, và {{ui:Lưu thành IFC}}.
3. Mở IFC đã lưu trong chương trình thứ hai, làm việc trên đó, và xuất IFC từ đó với GlobalId được giữ (bộ dịch của Archicad: Global Unique Identifiers, chọn giữ các định danh hiện có).
4. Quay lại BimCraft, mở mô hình đã gửi đi, rồi thêm mô hình đã quay về ({{ui:Thêm mô hình}} dưới Mô hình).
5. Trong {{ui:Giữa hai chương trình BIM}}, chọn **Đã gửi đi** và **Đã quay về**, rồi nhấp {{ui:Lập báo cáo}}.

## Đọc báo cáo

- **Phần tử**: có bao nhiêu phần tử quay về với cùng GlobalId, bao nhiêu thiếu, và bao nhiêu mới. Phần tử có GlobalId mới hiển thị như một phần thiếu và một phần mới: chương trình kia đã không giữ nó.
- **Đổi lớp IFC**: các phần tử quay về dưới dạng một loại phần tử khác.
- **Giá trị thuộc tính được giữ**: tỷ lệ giá trị quay về không đổi. Danh sách bên dưới hiển thị các thuộc tính có nhiều giá trị bị đổi hoặc thiếu nhất.
- **Phân loại**: được giữ, bị đổi (cùng hệ thống, mã khác) hoặc thiếu.

{{ui:Tải báo cáo (CSV)}} cho mọi thuộc tính kèm số đếm. Để xem phần tử nào đã dịch chuyển hoặc đổi hình dạng, dùng {{ui:So sánh phiên bản}} trên cùng hai mô hình.

:::note
BimCraft không chạy chương trình nào trong hai chương trình. Cài đặt nào giữ được giá trị phụ thuộc vào cài đặt IFC của từng chương trình: báo cáo cho thấy những gì thực sự quay về, nên hãy thử một cài đặt, xuất lại và so sánh.
:::

## Vấn đề đi theo dạng BCF

Các vấn đề bạn nêu trong BimCraft xuất thành BCF ({{ui:Vấn đề}}), mà cả hai chương trình đều đọc được bằng công cụ BCF của họ, nên một câu hỏi về phần tử đến được người làm việc ở chương trình kia cùng với khung nhìn của nó.

Xem thêm [Mở gói dự án](topic:open-project-bundle), [Từ tệp dự án đến BimCraft qua IFC](topic:rvt-to-ifc) và [So sánh hai phiên bản của một mô hình](topic:compare-versions).
