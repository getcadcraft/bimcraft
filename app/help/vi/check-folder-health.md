---
title: Kiểm tra thư mục để tìm bản sao hỏng, liên kết bị thiếu và tệp thừa
summary: Dùng báo cáo thư mục để tìm tệp mô hình bị cắt cụt, chọn bản sao lưu hoàn chỉnh mới nhất, xem liên kết nào bị thiếu, và phát hiện tệp khóa và tệp tạm.
keywords: kiểm tra sức khỏe, hỏng, lỗi, chưa đầy đủ, bị cắt cụt, bản sao lưu, liên kết bị thiếu, xref bị thiếu, kiểm tra, tệp thừa, tệp khóa, dwl, bak, bàn giao
from: 3025a539
---

## Bạn sẽ làm gì

Kiểm tra thư mục dự án trước khi bàn giao hoặc bắt đầu làm việc trên đó: mỗi mô hình có đầy đủ không, bản sao lưu tốt cuối cùng là bản nào, và mọi tệp được liên kết đều có ở đó không?

## Các bước: bản sao hỏng

1. Mở thư mục dự án. Xem [Mở toàn bộ thư mục dự án](topic:open-project-folder).
2. Đọc các ghi chú dưới tên thư mục. "2 tệp chưa đầy đủ hoặc không đọc được. Xem các mô hình bên dưới." nghĩa là có điều cần xem.
3. Trong **Mô hình**, xem cột **Trạng thái**. **Hoàn chỉnh** là ổn. Dòng "1 chưa đầy đủ" màu hổ phách nghĩa là một bản sao bị hỏng nhưng bản khác vẫn tốt. **Chưa đầy đủ** màu đỏ nghĩa là không tìm thấy bản sao nào còn tốt.
4. Mở **Tất cả … bản sao** dưới một mô hình có vấn đề. Danh sách gồm tệp chính và mọi bản sao lưu được đánh số, mới nhất trước, kèm kích thước, ngày và trạng thái.
5. Đọc ghi chú phía trên danh sách, ví dụ "Tower.rvt chưa đầy đủ (183.2 MB, cần tối thiểu 214.0 MB). Thẻ hiển thị bản sao hoàn chỉnh mới nhất, Tower.0012.rvt (Mar 3, 2025)."
6. Nhấn bản sao bạn muốn mở. Chỉ các bản sao hoàn chỉnh mới nhấn được.

## Kiểm tra sức khỏe làm gì

Mỗi bản sao của mọi mô hình được kiểm tra nhanh phần đầu, 512 byte mỗi bản, nên một thư mục nhiều mô hình lớn cũng được kiểm tra trong vài giây. Một tệp có chỉ mục riêng trỏ vượt quá phần cuối của nó là tệp đã bị cắt khi đang sao chép, tải lên hoặc đồng bộ. Một tệp trên ổ đám mây vẫn ở trạng thái "chỉ trực tuyến" cũng trông giống vậy.

Thẻ của mỗi mô hình được đọc từ tệp chính khi tệp còn tốt, và từ bản sao lưu tốt mới nhất khi tệp chính hỏng.

## Các bước: liên kết bị thiếu

1. Tìm ghi chú "*n* tệp được liên kết không có trong thư mục này." dưới tên thư mục.
2. Cuộn tới **Tệp được liên kết và tham chiếu**. Các liên kết bị thiếu được liệt kê trước.
3. Đọc cột **Vị trí** của từng liên kết:
   - **Trong thư mục này**: tìm thấy tại đường dẫn mà mô hình đã lưu.
   - **Tìm thấy cùng tên**: có một tệp cùng tên ở nơi khác trong thư mục. Kiểm tra xem đó có đúng tệp không.
   - **Tệp thư viện**: bảng mã ghi chú chính hoặc bảng mã cụm lắp ráp. Các bảng này đi kèm chương trình trên mỗi máy tính, nên không cần có trong thư mục.
   - **Không có trong thư mục này**: không tìm thấy ở bất kỳ đâu trong thư mục.
4. Đọc **Được dùng bởi** để xem mô hình nào liên kết tới mỗi tệp.

BimCraft tìm từng liên kết trước theo đường dẫn tương đối, rồi theo phần cuối của đường dẫn đã lưu (nên `\\server\jobs\Tower\Cad\X-Refs\site.dwg` được tìm thấy tại `X-Refs/site.dwg` khi bạn chọn thư mục `Cad`), rồi theo tên tệp ở bất kỳ đâu trong thư mục.

## Các bước: tệp thừa

1. Cuộn tới **Để riêng** ở cuối báo cáo.
2. Đọc ba dòng có thể xuất hiện:
   - Thư mục hệ thống (`*_backup`, `*_log`, `Revit_temp`): không được đọc.
   - Tệp khóa, nhật ký và sao lưu thừa: các tệp như `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Chúng do các chương trình bị lỗi hoặc đang mở khi thư mục được sao chép để lại. Thường có thể xóa an toàn khi không ai đang mở các tệp này.
   - Tệp khác: mọi thứ còn lại mà BimCraft không đọc.

## Lỗi thường gặp

- **Xóa tệp chính bị hỏng trước khi lưu một bản sao lưu tốt.** Hãy sao chép bản sao lưu hoàn chỉnh mới nhất trước, rồi mới xử lý tệp hỏng.
- **Tin ngay "Tìm thấy cùng tên".** Hai bản vẽ khác nhau có thể trùng tên. Nếu nghi ngờ, hãy mở cả hai.
- **Cho rằng tệp thư viện bị thiếu là vấn đề.** Bảng mã ghi chú và bảng mã cụm lắp ráp nằm cùng chương trình trên mỗi máy.
- **Số lượng tệp khác nhau giữa các trình duyệt.** Trên Firefox và Safari, {{ui:Open a folder}} chuyển toàn bộ tệp, kể cả tệp trong thư mục hệ thống, nên số lượng (và giới hạn 20,000 tệp) có tính cả chúng. Kéo thả thư mục vào sẽ bỏ qua chúng, như Chrome và Edge. Báo cáo còn lại giống nhau.
