---
title: Chạy lịch thi công trên mô hình
summary: Mở danh sách công việc dưới dạng CSV, liên kết mỗi công việc với các phần tử theo một thuộc tính, rồi di chuyển qua các ngày để xem phần nào đã xây, đang thi công và chưa bắt đầu.
keywords: 4d, lịch thi công, trình tự thi công, dòng thời gian, phân pha, tiến độ, gantt, công việc, ngày tháng, mô phỏng, tiến độ thực hiện, đã xây, csv, giai đoạn, pha, gói công việc, wbs, nhóm
from: 1b985a64
---

## Bạn sẽ làm gì

Xem công trình được dựng lên: mỗi công việc trong lịch được liên kết với các phần tử nó thi công, hiển thị theo từng ngày.

## Các bước

1. Mở mô hình IFC rồi mở {{ui:Lịch 4D}} trong bảng bên trái.
2. Nhấp {{ui:Tải mẫu}} để có danh sách công việc với một tuần cho mỗi tầng, rồi chỉnh trong bảng tính. Hoặc tự viết danh sách của bạn.
3. Nhấp {{ui:Mở danh sách công việc…}} và chọn tệp CSV.
4. Kéo thanh trượt ngày, hoặc nhấp {{ui:Phát}}.

## Danh sách công việc

Tệp CSV có một dòng tiêu đề và các cột **Task**, **Start**, **Finish**, **Field** và **Value**. Dấu phẩy hoặc dấu chấm phẩy đều được.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Tầng 1 | 2026-11-02 | 2026-11-13 | Storey | Tầng 1 |
| Mái | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Mái | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Ghi ngày theo dạng YYYY-MM-DD.
- Một dòng liên kết công việc với mọi phần tử có **Field** mang đúng **Value** đó. Trường là một thuộc tính như Storey, Class, Name, Type, Material, Tag hoặc GlobalId, hoặc bất kỳ thuộc tính nào được ghi theo tên tập và tên thuộc tính: `Pset_WallCommon.FireRating`.
- Lặp một công việc trên nhiều dòng, với cùng ngày, để liên kết thêm phần tử cho công việc đó.

## Giai đoạn và gói công việc

Thêm cột **Stage**, cột **Package**, hoặc cả hai, để nhóm công việc thành giai đoạn và gói công việc. Phase và WBS cũng dùng được làm tên cột.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Sàn tầng 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Kết cấu | Khung |
| Tường tầng 1 | 2026-11-05 | 2026-11-13 | Storey | Tầng 1 | Kết cấu | Khung |
| Cửa đi | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Hoàn thiện | Đồ gỗ |

- Một công việc thuộc một giai đoạn và một gói. Nếu một dòng sau của cùng công việc ghi giai đoạn hoặc gói khác, dòng đó được liệt kê kèm số dòng và bỏ qua.
- Cùng tên gói ở hai giai đoạn là hai gói.

Khi danh sách có nhóm, một danh sách {{ui:Hiển thị}} xuất hiện phía trên ngày. Chọn một giai đoạn hoặc một gói và nó chạy như một khối:

- thanh trượt và {{ui:Phát}} chạy từ ngày bắt đầu sớm nhất đến ngày kết thúc muộn nhất của nhóm,
- chỉ các công việc của nhóm được liệt kê và tô màu, mọi thứ ngoài nhóm được xuyên thấu,
- dòng dưới danh sách cho biết có bao nhiêu công việc của nhóm đã xong, đang thi công và chưa đến ở ngày đó,
- {{ui:Chọn các phần tử của nó}} chọn mọi phần tử của nhóm, để dùng với {{ui:Hiển thị}}, {{ui:Mặt cắt}} hoặc một bảng thống kê.

Chọn **Mọi công việc** để xem lại toàn bộ lịch.

## Những gì bạn sẽ thấy

- **Đã xây**: các phần tử mà mọi công việc của chúng đã hoàn thành, theo màu riêng của chúng.
- **Đang thi công**: các phần tử có một công việc đang diễn ra trong ngày đó, màu vàng đất. Một công việc diễn ra từ ngày bắt đầu đến hết ngày kết thúc.
- **Chưa bắt đầu**: xuyên thấu.
- Phần tử không thuộc công việc nào giữ nguyên. Danh sách cho biết mỗi công việc tìm thấy bao nhiêu phần tử. Các dòng không đọc được, hoặc không tìm thấy gì, được liệt kê kèm số dòng.

## Liên kết, biểu đồ Gantt và MS Project

- Mở tệp XML của Microsoft Project (`.xml`) hoặc tệp CSV có cột `Predecessors`. Liên kết có thể là kết thúc đến bắt đầu, bắt đầu đến bắt đầu, kết thúc đến kết thúc hoặc bắt đầu đến kết thúc, mỗi loại kèm độ trễ (lag) hoặc độ dẫn trước (lead) tính theo ngày.
- Bên dưới danh sách công việc, biểu đồ Gantt vẽ mỗi công việc thành một thanh, có mũi tên cho các liên kết. Công việc trên đường găng có màu đỏ. Vòng lặp liên kết hoặc công việc tiền nhiệm không tồn tại được liệt kê trong bảng.
- {{ui:Lưu thành MS Project XML}} và {{ui:Lưu CSV kèm liên kết}} ghi lịch trở lại kèm các liên kết.

## Tiếp theo

- [Tìm phần tử theo lớp, tên hoặc thuộc tính](topic:find)
- [Tô màu phần tử theo thuộc tính](topic:color-by-property)
