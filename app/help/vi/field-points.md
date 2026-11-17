---
title: Điểm bố trí và kiểm tra hoàn công
summary: Đánh số các vị trí tổ thi công bố trí từ mô hình — tâm cột, đầu tường, bulông neo, ống xuyên, bất kỳ phần tử nào bạn chọn — ghi chúng cho máy toàn đạc, rồi đọc lại các điểm hoàn công của tổ và xem chỗ nào sai lệch.
keywords: điểm bố trí, bố trí, đóng cọc, máy toàn đạc, khảo sát, tệp điểm, csv, txt, pnezd, penzd, xyz, bắc, đông, cao độ, hoàn công, kiểm tra, dung sai, sai lệch, bulông neo, tâm cột, đầu tường, ống xuyên, tọa độ khảo sát, chuyển đổi bản đồ
from: acea9606
---

Thẻ {{ui:Điểm}} bên phải tạo các điểm mà tổ thi công bố trí ngoài công trường từ mô hình đang mở, và kiểm tra các điểm họ đo sau đó.

## Tạo điểm

1. Mở một mô hình IFC và thẻ {{ui:Điểm}}.
2. Đánh dấu những gì cần bố trí: **tâm cột** (chân đường tâm của mỗi cột), **đầu tường** (cả hai đầu của trục tường, tại đáy), **bulông neo**, **ống xuyên** (sleeve: các phần tử có tên hoặc kiểu ghi sleeve), và **các phần tử đã chọn** (mỗi điểm tại vị trí đặt của nó — chọn chúng trong khung nhìn trước).
3. Chọn số đầu tiên và tiền tố, tọa độ, đơn vị, các cột và tệp:
   - **Mô hình**: tọa độ của chính tệp. **Lưới khảo sát**: lưới bản đồ của tham chiếu địa lý của mô hình (chỉ hiển thị khi IFC có chuyển đổi bản đồ), tính bằng mét hoặc đơn vị bạn chọn.
   - Các cột **PNEZD** (điểm, bắc, đông, cao độ, mô tả), **PENZD** hoặc **XYZ**; **CSV** (dấu phẩy) hoặc **TXT** (tab).
4. Nhấn {{ui:Tạo điểm}}: danh sách hiển thị các điểm và khung nhìn đánh dấu chúng màu xanh dương. {{ui:Tải các điểm}} ghi tệp.

Các điểm có thứ tự cố định — theo loại, rồi theo hàng trên mặt bằng — nên tạo lại từ cùng mô hình sẽ cho cùng số. Tệp là loại mà CivilCraft mở và EXPORTPOINTS của CadCraft ghi: một điểm mỗi dòng, ba chữ số thập phân, mô tả nằm trong dấu ngoặc kép khi có dấu phẩy.

## Kiểm tra điểm hoàn công

Khi tổ gửi lại những gì họ đo, chọn một **dung sai** tính bằng milimét và cách ghép các điểm — theo **số điểm** (họ giữ số của bạn) hoặc theo **điểm đo gần nhất** — rồi nhấn {{ui:Đọc điểm hoàn công…}}. Đọc tệp với cùng đơn vị và tọa độ bạn đã ghi.

Mỗi điểm thiết kế khi đó là **trong** dung sai, **ngoài** dung sai, **chưa đo**, và mọi điểm đo không ai yêu cầu là **thừa**. Bảng cho chênh lệch theo đơn vị bạn chọn trên thanh công cụ, feet hiển thị dạng inch thập phân (hoàn công trừ thiết kế: đông, bắc, cao độ, và khoảng cách trên mặt bằng). Khung nhìn đánh dấu mỗi điểm màu xanh lá hoặc đỏ với một đường nối tới điểm đo, và màu xám khi chưa đo. {{ui:Báo cáo (CSV)}} ghi toàn bộ so sánh.

Không có gì ở đây thay đổi mô hình. Chưa xây dựng: bố trí từ mép sàn, giao điểm lưới hoặc lỗ mở được tạo cho bạn, và gửi điểm trực tiếp tới thiết bị — hãy dùng tệp.
