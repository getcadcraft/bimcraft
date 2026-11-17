---
title: Kiểm tra mô hình: phòng, thẻ, LOD, va chạm và giao diện
summary: Chạy các kiểm tra sẵn có cho phòng chưa đặt tên, thiếu thẻ, phần tử dưới mức phát triển mà giai đoạn dự án yêu cầu, va chạm giữa các bộ môn và giao diện LOD 350. Chỉ là lời khuyên: không có gì bị chặn.
keywords: kiểm tra, phòng chưa đặt tên, thiếu thẻ, đánh dấu, lod, mức phát triển, mốc, giai đoạn, va chạm, bộ môn, phối hợp, giao diện, lod 350, lỗ mở, lanh tô, dầm đỡ, xuyên qua, ống bọc, ống, ống dẫn, sự cố, báo cáo kiểm tra, khuyến nghị
from: cc83a14d
---

## Bạn sẽ làm gì

Xem toàn bộ mô hình trong một lần trước khi phát hành. Việc kiểm tra chạy các bộ quy tắc sẵn có và đưa những gì tìm được vào danh sách {{ui:Sự cố}} như lời khuyên. Không có gì bị chặn: bạn sửa một phát hiện, hoặc chấp nhận nó kèm lý do, như với mọi sự cố khác.

## Các bước

1. Mở {{ui:Kiểm tra mô hình}} › {{ui:Kiểm tra}} trong bảng bên trái, hoặc {{ui:Công cụ}} › {{ui:Kiểm tra mô hình…}} (gõ: `AUDIT`).
2. Chọn {{ui:Giai đoạn dự án}}. Đó là cùng giai đoạn như trong chi tiết bản vẽ.
3. Tick các bộ quy tắc muốn chạy.
4. Nhấp {{ui:Chạy kiểm tra}}.
5. Đọc dòng của mỗi bộ quy tắc, rồi {{ui:Mở danh sách Vấn đề}}. Nhấp một phát hiện để chọn phần tử của nó.
6. {{ui:Báo cáo kiểm tra}} tải báo cáo xuống: mọi phát hiện, ai đã chấp nhận gì và vì sao, và các bộ quy tắc đã chạy.

## Các bộ quy tắc

- **Phòng chưa đặt tên**: một phòng không có tên, hoặc vẫn mang tên mà chương trình đặt ("Room 3").
- **Thiếu thẻ**: một cửa hoặc cửa sổ không có ký hiệu, một phòng không có số, một thiết bị điện không có nhãn.
- **Phần tử dưới LOD của giai đoạn**: mỗi tường, sàn, trần, mái, cửa và cửa sổ có LOD thấp hơn mức giai đoạn yêu cầu. Một phần tử đọc thẻ LOD của kiểu nó; một phần tử đã được xác minh tại hiện trường có LOD 500. Phần tử không có thẻ được đếm trong một ghi chú chung, vì không thể kiểm tra chúng.
- **Va chạm giữa các bộ môn**: các phần tử của hai bộ môn (kiến trúc, kết cấu, cơ khí, cấp thoát nước, điện, theo lớp IFC) xuyên vào nhau. Mái đặt trên tường của nó không được tính.
- **Giao diện LOD 350**: mọi cửa và cửa sổ nằm trong một lỗ mở của tường, lỗ mở vừa khít trong tường, hai lỗ mở không chồng lên nhau, một lỗ mở rộng hơn giới hạn có lanh tô hoặc dầm đỡ (một phần tử phía trên nó, hoặc một ghi chú trên cửa hoặc cửa sổ), và một ống, ống dẫn hoặc máng cáp xuyên qua tường hoặc sàn có lỗ mở ở đó. Các phát hiện được đếm theo từng cặp bộ môn.
- **Phần tử được nhận diện nhưng chưa ai kiểm tra**: tường, cửa, cửa sổ và phòng đọc từ PDF, bản quét hoặc bản vẽ mà vẫn chưa được xác minh. Xem [Đánh dấu phần tử đã kiểm tra hoặc xác minh tại hiện trường](topic:verification).

## LOD mà mỗi giai đoạn yêu cầu

Mở {{ui:LOD mà mỗi giai đoạn yêu cầu}} để xem hoặc đổi bảng.

:::note
Bảng và chiều rộng lanh tô là giá trị khởi đầu của CadCraft. Chúng không lấy từ tiêu chuẩn nào: một dự án đặt LOD theo giai đoạn trong kế hoạch thực hiện BIM của nó. Hãy đặt theo của bạn. Một văn phòng có thể đặt bảng cho mọi người trong Cài đặt › Default Policies › Kiểm tra; thay đổi trong mục Kiểm tra được giữ trên máy tính này.
:::

## Điều cần biết

- Một lanh tô có thể được ghi chú thay vì mô hình hóa: chọn cửa hoặc cửa sổ và điền {{ui:Ghi chú lanh tô hoặc dầm đỡ}} dưới {{ui:Xác minh}} trong Thuộc tính.
- Một ống đi qua một lỗ mở thật không cắt bề mặt nào và không được báo cáo. Ống được mô hình xuyên thẳng qua tường thì được báo cáo.
- Kiểm tra va chạm dừng sau vài giây trên mô hình rất lớn và cho biết điều đó. Để kiểm tra đầy đủ hai bộ đã chọn, dùng [Tìm va chạm giữa các phần tử](topic:clash-check).
- Chạy lại kiểm tra sau khi bạn thay đổi mô hình. Các phát hiện đã chấp nhận vẫn được chấp nhận khi số liệu của chúng không đổi.
- Nó chỉ đọc mô hình. Nó không thay thế việc rà soát phối hợp của những người chịu trách nhiệm.

## Tiếp theo

- [Kiểm tra mô hình về các vấn đề thường gặp](topic:model-checks)
- [Tìm va chạm giữa các phần tử](topic:clash-check)
- [Đánh dấu phần tử đã kiểm tra hoặc xác minh tại hiện trường](topic:verification)
