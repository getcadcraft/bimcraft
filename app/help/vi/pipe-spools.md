---
title: Đoạn ống thép (spool) và bản vẽ đoạn ống
summary: Cắt một tuyến ống thép hàn đối đầu thành các đoạn ống theo chiều dài tối đa và tại các mối hàn tại công trường bạn đặt, đánh số chúng, và tải bản vẽ đoạn ống cho từng đoạn (khung nhìn 3D, chiều dài cắt, phụ kiện, mối hàn, bảng vật tư) dưới dạng PDF và CSV; ống gió nhận một danh sách cắt các đoạn thẳng.
keywords: spool, spools, bản vẽ đoạn ống, spool sheet, isometric, chế tạo, fabrication, gia công trước, prefabrication, mối hàn tại công trường, field weld, mối hàn xưởng, shop weld, mối hàn đối đầu, butt weld, chiều dài cắt, cut length, danh sách cắt, cut list, bảng vật tư, bill of materials, bom, ống thép, steel pipe, schedule 40, số tuyến, line number, danh sách cắt ống gió, duct cut list, các đoạn ống gió, ductwork pieces
from: 539f51de
---

## Bạn sẽ làm gì

Biến một tuyến ống thép thành các phần mà xưởng hàn lại và thợ lắp đặt đưa vào công trình: các đoạn ống không dài hơn chiều dài bạn chọn, tách tại các mối hàn tại công trường bạn đặt, mỗi đoạn có bản vẽ riêng.

Chỉ **ống thép hàn đối đầu** mới được cắt thành đoạn ống (kích thước ống theo ASME B36.10M, co bán kính dài theo ASME B16.9). Các mối nối đồng, PVC và PEX không phải hàn đối đầu, nên tuyến của chúng không có đoạn ống.

## Cắt một tuyến thành đoạn ống

1. Chọn một tuyến ống thép. Trong Thuộc tính, đánh dấu **Cắt thành đoạn ống**.
2. **Đoạn ống dài nhất**: chiều dài đường tim lớn nhất mà một đoạn ống có thể có (ban đầu là 6 m, khoảng 20 ft).
3. **Số tuyến**: một phần của số của mọi đoạn ống. Tuyến mới được cắt đoạn sẽ nhận số trống tiếp theo của hệ thống của nó.

Các đoạn được đánh số dọc theo tuyến từ điểm đầu: `CHW-12-S01`, `CHW-12-S02` … (hệ thống, số tuyến, số đoạn). Một đoạn lớn dần theo từng chi tiết; chi tiết làm đoạn quá dài sẽ bắt đầu đoạn tiếp theo, và một đoạn thẳng dài hơn một đoạn ống sẽ được cắt tại chỗ đoạn ống đầy.

## Đặt mối hàn tại công trường

1. Mở {{ui:Bản dựng}} và chọn {{ui:Mối hàn tại công trường}}.
2. Bấm vào một ống có đoạn ống nơi đặt mối hàn tại công trường. Bên trong một đoạn thẳng, ống được cắt tại đó; bên trong một phụ kiện hoặc van, mối hàn di chuyển đến mối nối gần hơn.

Thuộc tính liệt kê các mối hàn tại công trường của tuyến, mỗi mối có {{ui:Xóa}}. Mỗi thay đổi là một bước của {{ui:Hoàn tác}}.

## Bản vẽ đoạn ống

Trong Thuộc tính của một tuyến có đoạn ống:

- {{ui:Bản vẽ đoạn ống (PDF)}}: một trang cho mỗi đoạn ống. Bên trái, đoạn ống ở khung nhìn isometric 30°: các đoạn thẳng được đánh số, mối hàn xưởng là chấm, mối hàn tại công trường đánh dấu FW, và hướng bắc của mặt bằng. Bên phải, số của đoạn, kích thước, schedule và chiều dài, rồi **chiều dài cắt**, **phụ kiện**, **mối hàn** (một mối hàn đối đầu xưởng tại mỗi mối nối bên trong đoạn, và một mối hàn tại công trường nơi đoạn gặp đoạn kế tiếp) và **bảng vật tư** cùng trọng lượng ống (trọng lượng ASME B36.10M đầu trơn).
- {{ui:Danh sách đoạn ống (CSV)}}: nội dung tương tự, mỗi đoạn một khối.

:::note
Chiều dài cắt được đo đầu đến đầu như đã vẽ: không trừ khe gốc hay lượng dự phòng cho mối hàn. Co là bán kính dài B16.9; tê, côn thu và van là chung chung, lấy kích thước theo ống, không theo B16.9 hay hãng, và bản vẽ có ghi rõ điều đó. Trọng lượng phụ kiện không được cung cấp. Đây là công cụ hỗ trợ bản vẽ và phối hợp, do kỹ sư tính kích thước.
:::

## Trong tệp IFC

Mọi phần của tuyến có đoạn ống mang **CadCraft_Spool** với SpoolId của nó, tuyến, số đoạn trong tuyến, và vị trí bắt đầu và kết thúc dọc theo tuyến. Tuyến giữ các quy tắc của nó (đoạn dài nhất, mối hàn tại công trường, số tuyến) trong tập riêng, nên các đoạn ống không đổi khi mở lại tệp.

## Ống gió: danh sách cắt

Mở {{ui:Bản dựng}} và bấm {{ui:Danh sách cắt ống gió}}: một tệp CSV các đoạn ống gió thẳng theo hệ thống, hình dạng và kích thước, mỗi đoạn thẳng được cắt thành các đoạn có **Chiều dài đoạn** trên thanh Ống gió (1500 mm, khoảng 5 ft, ban đầu) và phần còn lại. Chỉ có chiều dài: không có mối nối, độ dày tôn hay đầu nối.
