---
title: Gói kiểu: chia sẻ kiểu tường dưới dạng tệp mở
summary: Lưu kiểu tường cùng các lớp, vật liệu, thẻ và mã phân loại, và họ, thành một tệp mở (JSON thuần túy hoặc IFC), rồi thêm chúng vào dự án khác. Kiểu tường của một tệp IFC từ chương trình khác cũng có thể đọc được.
keywords: gói kiểu, kiểu, kiểu tường, chia sẻ, xuất, nhập, thư viện, định dạng mở, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, vật liệu, lớp, mẫu, tiêu chuẩn văn phòng, họ
from: e4c91331
---

## Mục bạn sẽ làm

Mang các kiểu tường của bạn từ dự án này sang dự án khác, hoặc giao chúng cho người làm việc ở chương trình khác. Một gói kiểu giữ từng kiểu tường cùng các lớp, độ dày, vật liệu, lõi, khoang, thứ tự ưu tiên lớp, mức độ phát triển, dữ liệu bóc tách khối lượng và mã phân loại, cùng bất kỳ họ nào bạn thêm vào. Đó là một tệp mở: văn bản JSON thuần túy mà bất kỳ ai cũng đọc được, hoặc một tệp IFC. Không có gì trong đó bị khóa vào một công ty, một quốc gia hay một tài khoản.

## Lưu các kiểu từ dự án

1. Mở **Dữ liệu** trên thanh mô hình và chọn {{ui:Gói kiểu}}.
2. Dưới {{ui:Lưu các kiểu từ dự án này}}, đánh dấu các kiểu tường cần đưa vào. Các kiểu riêng của dự án được đánh dấu sẵn; một kiểu mẫu có thể được thêm và sẽ đi vào dưới dạng bản sao. Đánh dấu họ nếu bạn muốn đưa chúng vào.
3. Nhập một {{ui:Tên gói}}.
4. {{ui:Lưu thành gói (.json)}} tải về một tệp `.cctypes.json`. {{ui:Lưu thành IFC (.ifc)}} tải về một tệp IFC chỉ chứa các kiểu: mỗi kiểu tường là một IfcWallType với bộ lớp vật liệu, vật liệu và phân loại của nó, dùng cho mọi chương trình BIM.

## Thêm kiểu vào dự án

1. Trong cùng hộp thoại, chọn {{ui:Mở một gói hoặc tệp IFC…}} và chọn một gói `.json` hoặc tệp `.ifc`.
2. Hộp thoại liệt kê những gì tệp chứa: mỗi kiểu tường với độ dày, số lớp và mã, các vật liệu và họ.
3. Chọn điều gì xảy ra với {{ui:Một kiểu mà dự án này đã có}}: **Giữ của dự án**, **Thêm của gói như một bản sao** (nó nhận tên mới kết thúc bằng "(2)"), hoặc **Thay thế (chỉ khi không có tường nào dùng nó)**.
4. {{ui:Thêm vào dự án}}. Hộp thoại liệt kê những gì đã được thêm, sao chép, thay thế hoặc giữ lại. Đó là một bước hoàn tác.

Các kiểu mới có ngay trong danh sách kiểu của công cụ Tường.

## Kiểu sàn, mái và trần

Danh sách kiểu cần lưu cũng chứa các kiểu sàn, mái và trần của dự án cùng các kiểu mẫu của chúng (được đánh dấu Sàn, Mái, Trần). Một gói có thể mang cả bốn loại; mỗi kiểu nêu lớp IFC của nó (IfcWallType, IfcSlabType, IfcCoveringType). Một kiểu sàn, mái hoặc trần mà các phần tử đang dùng sẽ không bị thay thế từ gói: hãy đổi nó trong trình chỉnh sửa kiểu.

## Một kiểu như một mục Thư viện

Chỉ đánh dấu đúng một kiểu và chọn **Lưu thành mục Thư viện…**. Nó lưu một tệp `.cctype.json`: một mục Thư viện thuộc loại Kiểu, chứa đúng một kiểu đó (các lớp, vật liệu, LOD và mã phân loại của nó). Tải nó lên Thư viện để chia sẻ. **Mở một gói hoặc tệp IFC** cũng đọc mục như vậy và thêm kiểu của nó vào dự án như một gói.

## Cần biết

- Một tệp IFC từ chương trình khác cũng có thể mở ở đây. Mỗi kiểu tường của nó có các lớp vật liệu sẽ được đọc: tên, vật liệu và độ dày của các lớp, và khoang nếu có, đều là của chính tệp. Lớp nào là lõi và mỗi lớp làm gì (hoàn thiện, kết cấu, cách nhiệt) được suy đoán, kiểu được đánh dấu **(suy đoán)**, và bạn nên kiểm tra trong trình chỉnh sửa kiểu tường. Một kiểu tường không có lớp nào sẽ bị bỏ qua và được nêu tên.
- Vật liệu mà dự án đã có được giữ nguyên. Một vật liệu mới có tên đã bị dùng sẽ có "(gói)" thêm sau tên.
- Một kiểu mà tường đang dùng không bao giờ bị thay thế từ gói. Hãy đổi nó trong trình chỉnh sửa kiểu tường, nơi các tường của nó được di chuyển đúng cách.
- Mã đặt trên một tường không đi theo: nó thuộc về tường đó. Mã đặt trên kiểu thì đi theo.
- Một tệp có trường mà định dạng không có, một lớp có vật liệu bị thiếu, hoặc bất cứ thứ gì không phải văn bản thuần túy sẽ bị từ chối, và thông báo nói rõ ở đâu và vì sao.
- Chưa xây dựng: kiểu sàn, mái và trần (chúng chưa có kiểu trong phiên bản này: mỗi loại có độ dày riêng), kiểu cửa đi và cửa sổ khác với họ, và các nét tô bóng hoặc màu từ tệp của chương trình khác.
