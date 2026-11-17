---
title: Hoàn thiện phòng và bảng thống kê hoàn thiện
summary: Nêu lớp phủ sàn, tường và trần của mỗi phòng, thêm các vùng như tấm ốp chống bắn nước, và lấy bảng thống kê hoàn thiện theo phòng, tường và vùng, với diện tích, số lượng gạch kể cả phần cắt và thể tích lớp nền.
keywords: hoàn thiện, bảng thống kê hoàn thiện, hoàn thiện phòng, hoàn thiện sàn, hoàn thiện tường, hoàn thiện trần, chân tường, gạch, viên gạch, gạch cắt, số lượng gạch, hao hụt, lớp nền, vữa láng, tấm lót, trát, vùng, tấm ốp chống bắn nước, ốp lửng, khu vực ướt, nội thất, khối lượng
from: 8c30498c
---

## Bạn sẽ làm gì

Nói với BimCraft một lần về lớp hoàn thiện của mỗi phòng. Các bảng thống kê hoàn thiện sau đó cho diện tích, số gạch cần đặt và thể tích lớp nền, và thay đổi theo mô hình.

## Các bước

1. Bật {{ui:Vẽ}}, mở **Bảng thống kê** trong bảng bên trái rồi nhấn **Hoàn thiện phòng**.
2. Dưới **Loại hoàn thiện**, nhấn **Thêm loại hoàn thiện**. Đặt tên, chọn loại (Gạch, Tấm, Lớp phủ hoặc Ván) và độ dày. Với gạch, nhập chiều dài và chiều rộng viên gạch, mạch ghép và phần hao hụt tính bằng phần trăm. Nếu có thứ nằm dưới lớp hoàn thiện (vữa láng, tấm lót, lớp trát), đặt tên nó dưới **Lớp nền** và nhập độ dày.
3. Dưới **Phòng**, chọn lớp hoàn thiện sàn, tường và trần của mỗi phòng. Nhập tên chân tường và chiều cao nếu phòng có chân tường.
4. Dưới **Vùng**, nhấn **Thêm vùng** cho một phần của phòng có lớp hoàn thiện khác:
   - vùng **tường** là một dải giữa hai độ cao trên sàn (tấm ốp chống bắn nước từ 0 đến 1200, ốp lửng). Nó nằm trên mọi tường của phòng, hoặc chọn các tường của phòng đó trong mô hình và nhấn nút **Bật** để giới hạn chỉ những tường đó;
   - vùng **sàn** hoặc **trần** là một diện tích bạn nhập. Nó được trừ khỏi lớp hoàn thiện của chính phòng.
5. Nhấn **Lưu**. Đó là một bước trong Hoàn tác. Chiều dài được nhập theo đơn vị của dự án.

## Các bảng thống kê

Bốn mục được thêm vào danh sách Bảng thống kê:

- **Hoàn thiện theo phòng**: mỗi phòng với lớp hoàn thiện sàn, tường và trần, diện tích của chúng, và chân tường cùng chiều dài.
- **Hoàn thiện theo tường**: mỗi đoạn tường ở phía phòng và phần dải mà lớp hoàn thiện phủ, với chiều dài, diện tích gộp, phần trừ, diện tích thuần và, với gạch, số viên nguyên, viên cắt và số gạch cần đặt.
- **Hoàn thiện theo vùng**: mỗi vùng với lớp hoàn thiện, diện tích thuần, gạch và thể tích lớp nền.
- **Số lượng hoàn thiện**: một dòng cho mỗi lớp hoàn thiện: diện tích thuần, viên gạch nguyên và viên cắt, số gạch cần đặt, lớp nền và thể tích của nó, và thể tích của chính lớp hoàn thiện.

Nhóm, cộng tổng, lưu và xuất chúng như mọi bảng thống kê khác: xem [Bố cục, lưu và xuất bảng thống kê](topic:schedule-layouts). Nhấp một số liệu để chọn đối tượng mà nó lấy từ đó: phần trừ của một tường sẽ chọn các cửa đi và cửa sổ của nó.

## Cách đo hoàn thiện

- **Tường**: mỗi đoạn tường ở phía phòng, chiều dài của nó dọc theo phòng nhân với chiều cao mà lớp hoàn thiện phủ, trừ phần của mỗi cửa đi và cửa sổ nằm trong chiều cao đó. Tường thấp hơn phòng được hoàn thiện đến đỉnh của chính nó. Phương pháp đo của dự án quyết định những lỗ mở nào quá nhỏ để trừ ([Bảng thống kê](topic:plan-schedules-and-pdf)).
- **Sàn và trần**: phòng bên trong các mặt tường, trừ các phần lõi trong phòng.
- **Chân tường**: chiều dài tường của phòng trừ đi chiều rộng của các cửa đi.
- **Gạch**: được bố trí theo lưới từ một góc của bề mặt, với một mạch giữa các viên. Viên nằm hoàn toàn trên bề mặt là viên nguyên; viên nằm một phần trên đó (ở mép, quanh lỗ mở) là viên cắt. Số gạch cần đặt là viên nguyên cộng viên cắt, cộng phần hao hụt, làm tròn lên. Mỗi viên cắt được tính là một viên mới: phần thừa không được dùng lại.
- **Thể tích lớp nền**: diện tích thuần nhân độ dày của lớp nền.
- Một số lượng có dấu **≈** được tính từ diện tích thay vì bố trí từng viên: bề mặt có một vùng nhập vào bị trừ ra, hoặc bề mặt rất lớn.

## Điều nên biết

- Các hoàn thiện được giữ trong tệp công trình (bộ thuộc tính `CadCraft_Finishes` trên dự án). Mỗi phòng có hoàn thiện cũng nhận bộ thuộc tính IFC chuẩn `Pset_SpaceCoveringRequirements`, để các chương trình khác đọc được tên.
- Bố trí gạch bắt đầu từ một góc. Bố trí căn giữa phòng, họa tiết (xương cá, xây kiểu gạch) và tái sử dụng phần thừa không được tính.
- Tường cong, và ranh giới phòng không phải là tường (vách ngăn phòng), được liệt kê là **Ranh giới khác** với chiều dài và không có lỗ mở.
- Mục **Hoàn thiện** đã có trước đây liệt kê các lớp hoàn thiện của kiểu tường; **Lớp: diện tích và thể tích** liệt kê mọi lớp của mọi kiểu có lớp. Các hoàn thiện phòng ở đây được áp lên phòng, chồng lên các lớp đó.
- Một trợ lý có thể đặt hoàn thiện cho bạn bằng `finishes_set`: xem [Để trợ lý AI làm việc với mô hình](topic:assistants).
