---
title: Mở và xuất IFC5 alpha (tệp IFCX)
summary: Tùy chọn thử nghiệm cho định dạng tệp IFC5 alpha (.ifcx): mở tệp cùng các lớp của nó, xem những gì việc đọc không kiểm tra được, và xuất các mô hình đang mở. Định dạng vẫn đang thay đổi, nên hãy đọc trước.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lớp, lược đồ, thử nghiệm, khối lượng, qto, xuất, nhập
from: cffe1669
---

IFC5 alpha (tệp có đuôi {{ui:.ifcx}}) là định dạng tệp mà buildingSMART vẫn đang thiết kế. Định dạng này chưa hoàn chỉnh: các tệp, và cách BimCraft đọc chúng, có thể thay đổi. Đó là lý do đây là một tùy chọn thử nghiệm và phải đọc trước.

## Bật tính năng

1. Chọn {{ui:Settings}}, rồi mục {{ui:IFC5 alpha (IFCX)}} của thẻ BimCraft.
2. Bật {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

Mặc định nó tắt. Khi tắt, một tệp .ifcx sẽ bị từ chối kèm một câu trỏ đến đây. {{ui:Open IFC5 alpha (.ifcx)…}} và nút xuất {{ui:IFC5 alpha}} chỉ xuất hiện khi đã bật.

## Mở

- Chọn một tệp .ifcx bằng {{ui:Open a file or folder}} (nó thay thế mô hình đang mở, sau câu hỏi thông thường về các chỉnh sửa), hoặc
- chọn {{ui:Open IFC5 alpha (.ifcx)…}} và chọn nhiều tệp cùng lúc: tệp, các lớp của nó và các tệp lược đồ mà nó nhập. Khi đã có một mô hình đang mở, tệp được **thêm vào bên cạnh** mô hình đó; nút x trong danh sách mô hình sẽ gỡ nó ra, và đó là thao tác hoàn tác.

Tệp IFCX liệt kê các nút (một đường dẫn, các nút con của nó, những gì nó kế thừa, các thuộc tính của nó). Nhiều tệp có thể mô tả cùng một nút: một tệp sau (một lớp) ghi đè thuộc tính của tệp trước, và một nút con rỗng sẽ gỡ bỏ một nút con. BimCraft tổng hợp chúng, rồi vẽ kết quả như một mô hình IFC4 nhỏ: dự án, khu đất, công trình, các tầng và cấu kiện với tên, lớp, thuộc tính, khối lượng, màu và lưới.

Không có gì được tải về từ mạng. Các tệp lược đồ mà một tệp nhập (ví dụ `ifc@v5a.ifcx`) chỉ được dùng nếu bạn đã chọn chúng cùng tệp; nếu không, báo cáo sẽ nói như vậy và các thuộc tính được đọc mà không kiểm tra kiểu.

### Báo cáo

Sau khi mở, một báo cáo liệt kê những gì việc đọc tìm thấy: dữ liệu không khớp với lược đồ của nó, các tệp lược đồ không được cung cấp, các thuộc tính không có ý nghĩa IFC ở đây. Các thuộc tính không có ánh xạ sẽ được **giữ lại** trong mô hình, không bị bỏ, và được ghi lại khi xuất.

## Chuyển đổi thành gì

| Trong tệp IFCX | Trong BimCraft |
|---|---|
| Một nút có lớp IFC (dự án, khu đất, công trình, tầng, tường …) | Phần tử IFC4 tương ứng; một lớp mà cách đọc này không biết sẽ thành một phần tử proxy của công trình |
| Tên mà nút có dưới nút cha của nó | Tên cấu kiện |
| Thuộc tính có loại đại lượng (Length, Area, Volume, Mass …) | Một bộ đại lượng IFC4 tên là `Qto_IFCX` (các bộ đại lượng IFC4 vẫn là bộ `Qto_*` của IFC4) |
| Các thuộc tính khác | Một bộ thuộc tính tên là `Pset_IFCX` |
| Thuộc tính lưới và biến đổi | Các tam giác và vị trí của cấu kiện; các lưới vô hình không được vẽ |
| Màu, độ mờ, vật liệu, phân loại | Kiểu bề mặt, vật liệu và phân loại của cấu kiện |

Các đơn vị được hiểu là mét, với trục Z hướng lên: bản alpha nói rằng đơn vị sẽ được ghi thành tài liệu sau.

## Xuất

Chọn {{ui:IFC5 alpha}} trên thanh công cụ, đọc ghi chú, rồi {{ui:Export .ifcx}}. Tệp có tiêu đề riêng (tác giả CadCraft, phiên bản ifcx_alpha) và tự nói rằng nó là định dạng alpha. Mỗi mô hình được ghi theo tọa độ tệp riêng của nó, bằng mét, kèm tên, lớp, bộ thuộc tính, bộ đại lượng (dưới dạng thuộc tính kèm loại của chúng), màu và các tam giác. Các lớp và phần kế thừa được ghi dưới dạng đã gộp phẳng. Hãy kiểm tra tệp trong chương trình mà bạn gửi nó tới.

## Giới hạn

- Hình học cong (đường cong, bề mặt) không được đọc: chỉ các lưới tam giác.
- Cửa đi và cửa sổ lồng trong tường được đặt trên tầng; tường mà chúng thuộc về không được liên kết.
- Các tên bộ `Qto_*` của IFC4 được giữ như các nhóm thuộc tính riêng của CadCraft (`cadcraft::qto::…`); lược đồ alpha chuẩn chỉ có một vài tên đại lượng.
- Định dạng có thể thay đổi; một tệp được tạo hôm nay có thể không đọc được vào ngày mai.
