---
title: Gộp hai bản chỉnh sửa của một mô hình
summary: Để git, Fossil hoặc Mercurial gộp hai bản sao đã chỉnh sửa của cùng một mô hình IFC theo từng đối tượng, để hai người có thể cùng vẽ trên một công trình và ghép công việc lại.
keywords: gộp, git, fossil, mercurial, kiểm soát phiên bản, xung đột, ba chiều, cadcraft merge, gitattributes, ifc, globalid, nhóm, hai bản sao, nhánh
from: 50733df8
---

Hai người lấy hai bản sao của cùng một công trình, một người vẽ cánh đông và người kia vẽ cánh tây, và sau này hai bản sao phải thành một. Nếu họ chạm vào những đối tượng khác nhau, một chương trình có thể làm việc này thay cho một người.

## Cơ chế hoạt động

Mọi tường, cửa, tầng, phòng và tập thuộc tính trong tệp IFC đều có một GlobalId không bao giờ thay đổi. Việc gộp tra cứu đối tượng theo mã đó, không theo số mà tệp gán cho chúng (`#123`), vì các số thay đổi khi chương trình lưu. Các phần phụ thuộc vào một đối tượng mà không có mã riêng (vị trí đặt, hình dạng, đơn vị) được so sánh theo nội dung của chúng.

Hai bản sao phải cùng phiên bản IFC (2x3, 4 hoặc 4.3). Việc gộp giữ nguyên tệp của bạn, thứ tự và số của nó, và chỉ thêm những gì mới, nên một diff của git cho bản gộp chỉ hiển thị những gì việc gộp đã thay đổi.

## Thiết lập

Git cần hai dòng, một lần cho mỗi kho:

```
# .gitattributes
*.ifc merge=cadcraft

# một lần, trên mỗi máy tính
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Không dùng git, chạy `cadcraft merge <base> <ours> <theirs>`. Fossil và Mercurial nhận cùng ba tệp đó trong cài đặt công cụ gộp riêng của chúng. Không có gì được tải lên; mọi thứ chạy trên máy tính của bạn.

## Quy tắc

- Một thuộc tính chỉ thay đổi ở một phía thì được giữ lại. Cùng một thay đổi ở cả hai phía thì được giữ một lần.
- Cùng một thuộc tính bị thay đổi theo hai cách (cùng một tầng bị đổi tên theo hai cách) là một **xung đột**: bản của bạn được giữ và báo cáo liệt kê cả hai. Mở kết quả và sửa bằng tay.
- Một danh sách các thứ (các tường của một tầng, các thuộc tính của một bộ) được gộp như một tập hợp: những gì một trong hai phía thêm vào được giữ, và những gì một trong hai phía xóa đi thì bị xóa. Hai người mỗi người thêm tường vào cùng một tầng không xung đột.
- Đối tượng được thêm ở một bên được giữ, cùng hình dạng và thuộc tính. Bị xóa ở một bên và không đổi ở bên kia: bị xóa. Bị xóa ở một bên và bị thay đổi ở bên kia: bị xóa, và được báo cáo.
- Dấu thời gian và tác giả của tệp, cùng lịch sử chủ sở hữu của từng đối tượng, vẫn là của bạn.

Hình học được gộp nguyên khối: hình dạng của một bức tường đến từ một phía, không bao giờ bị trộn từng điểm. Tệp IFC nén và IFCX không được gộp. Sau khi gộp, hãy mở kết quả trong BimCraft và xem bảng Sự cố trước khi lưu.
