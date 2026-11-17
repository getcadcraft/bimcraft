---
title: Mã phân loại (Uniclass, OmniClass, UniFormat)
summary: Gán mã phân loại cho mọi cấu kiện và kiểu, chọn các hệ thống mà dự án dùng, tìm trong các bảng Uniclass đi kèm ứng dụng, tải bảng có giấy phép của văn phòng bạn, và hiển thị mã trong bảng thống kê. Mã được ghi vào tệp IFC cho phần mềm khác.
keywords: phân loại, phân loại, mã, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, bảng, mã cấu kiện, mã kiểu, mã mặc định, IfcClassification, IfcClassificationReference, cobie, cột bảng thống kê, csv, giấy phép, license
from: 222b94cd
---

## Bạn sẽ làm gì

Gán mã phân loại cho tường, sàn, mái, cửa, cửa sổ và mọi thứ khác trong mô hình, theo tối đa ba hệ thống cạnh nhau: Uniclass, OmniClass và UniFormat. Các bộ môn khác và phần mềm khác dựa vào mã chứ không phải tên, nên mã được lưu trong tệp IFC dưới dạng tham chiếu phân loại mà mọi chương trình BIM đều đọc được.

## Gán mã cho một cấu kiện

1. Chọn một cấu kiện (hoặc nhiều) và mở **Thuộc tính**. Mở mục {{ui:Classification}}.
2. Gõ mã vào ô của hệ thống và nhấn Enter. Khi đã tải danh sách mã, gõ một phần mã hoặc vài từ (như "curtain wall" hoặc "tường rèm") và chọn từ các kết quả khớp: tiêu đề của mã được điền sẵn cho bạn.
3. {{ui:Applies to}} cho biết mã đi đâu: **Cấu kiện này**, hoặc **Kiểu của nó (mọi cấu kiện cùng kiểu)**. Mã trên một kiểu tường được mọi tường thuộc kiểu đó đọc, kể cả những tường bạn vẽ sau.
4. {{ui:Clear}} gỡ một mã.

Dưới mỗi mã, mục này cho biết nó đến từ đâu: đặt trên cấu kiện này, từ kiểu của nó, hoặc mặc định dự án cho lớp của nó. Mã riêng của cấu kiện luôn thắng mã của kiểu, và mã của kiểu thắng mặc định. Khi chọn nhiều cấu kiện, một ô ghi "khác nhau" nghĩa là chúng không dùng chung một mã; gõ một mã sẽ gán cho tất cả. Mỗi thay đổi là một bước hoàn tác.

Mã luôn có thể gõ, dù danh sách có được tải hay không. Nếu mã không giống mã của hệ thống đó, hoặc không có trong danh sách đã tải, một gợi ý sẽ cho biết và mã được giữ nguyên như bạn đã gõ.

## Chọn hệ thống của dự án

Mở **Dữ liệu** trên thanh mô hình và chọn {{ui:Classification}} (hoặc {{ui:Project classification…}} trong mục Thuộc tính).

- Đánh dấu các hệ thống mà dự án này dùng. Thuộc tính khi đó chỉ hiển thị các hệ thống đó.
- **Uniclass**: các bảng Elements/ functions (EF), Systems (Ss) và Products (Pr) đi kèm ứng dụng. Chúng có bản quyền © NBS, được cấp phép Creative Commons Attribution-NoDerivatives 4.0, và được chuyển giao nguyên trạng. Hộp thoại hiển thị phiên bản của từng bảng và ngày nó được đọc. Đây không phải các bảng mới nhất: nhà xuất bản phát hành bảng mới mỗi quý trên trang riêng của họ.
- **OmniClass** và **UniFormat**: không có danh sách mã nào đi kèm ứng dụng, vì nhà xuất bản không cho phép chuyển giao bảng khi không có giấy phép. Gõ mã bất kỳ, hoặc tải bảng có giấy phép của văn phòng bạn.
- {{ui:Load a table (CSV)…}} đọc bảng của văn phòng bạn từ tệp CSV có cột mã và cột tiêu đề (hàng tiêu đề tên Code, Number hoặc Identifier và Title, Name hoặc Description được tự nhận diện; nếu không có, hai cột đầu tiên được dùng). Bảng ở lại trong trình duyệt này và không bao giờ được đưa vào tệp dự án. Chỉ các mã bạn gán được lưu trong tệp. Bạn có thể tải bảng Uniclass mới hơn theo cùng cách.
- {{ui:Give elements a default code by their class}} gán cho mọi tường, sàn, mái, cửa, cửa sổ, cầu thang, dốc, cột, dầm và món nội thất một mã Uniclass khởi đầu từ bảng Elements/ functions khi nó chưa có mã riêng. Các cấu kiện bạn vẽ sau đó cũng nhận mã này.
- {{ui:Show the codes as columns in the schedules}} thêm một cột cho mỗi hệ thống vào các bảng Cửa đi, Cửa sổ, Tường theo kiểu và Phòng, cùng CSV của chúng. Một hàng gồm nhiều cấu kiện hiển thị "khác nhau" khi mã của chúng khác nhau.

## Cần biết

- Các mã mặc định là lựa chọn khởi đầu của CadCraft, không phải của nhà xuất bản, và chưa được chuyên gia kiểm tra. Hãy kiểm tra chúng theo tiêu chuẩn của dự án bạn.
- Trong tệp, mặc định là một phân loại thực sự, được đánh dấu bằng tên quan hệ "CadCraft default", và nó được thay thế ngay khi cấu kiện hoặc kiểu của nó nhận một mã riêng.
- Các mã mà tệp đã có sẵn được đọc và hiển thị, bất kể chương trình khác viết tên hệ thống thế nào. Mã của bất kỳ hệ thống nào khác (của riêng một văn phòng) được liệt kê và giữ nguyên.
- Các mã được đọc lại khi tệp được mở lần nữa, ở đây hoặc trong chương trình khác. Chúng cũng được mang sang khi xuất IFC5 alpha (IFCX) khi tùy chọn thử nghiệm đó được bật, trừ một mã đặt trên mái.
- Chưa xây dựng: cây để duyệt một bảng theo từng cấp, mã trên tầng và phòng làm mặc định dự án, và kiểm tra một mã với phiên bản được ghi trong tệp.
