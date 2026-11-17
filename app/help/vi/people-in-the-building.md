---
title: Cho người đi qua tòa nhà
summary: Mô phỏng sơ tán hoặc lượng người đến trong một ngày bình thường qua các phòng, cửa và cầu thang của bạn, có hàng đợi ở nơi tòa nhà thu hẹp, quãng đường dài nhất đến lối thoát từ mỗi phòng, và các phát hiện hiển thị trong Vấn đề. Một mô hình đám đông thô phục vụ quyết định thiết kế, không phải chứng nhận an toàn cháy.
keywords: người, sơ tán, thoát hiểm, lối thoát, quãng đường, hàng đợi, đám đông, lưu lượng, chiều rộng cửa, cầu thang, người đến, nút thắt, mô phỏng, người ở, người đi bộ, nếu thì sao, cửa bị chặn
from: 84aa8920
---

Mục {{ui:Người trong tòa nhà}} của bảng bên trái cho người đi qua các phòng, cửa và cầu thang của mô hình IFC đang mở. Không có gì trong mô hình bị thay đổi và không có gì được tải lên.

:::warning
Đây là **công cụ hỗ trợ thiết kế, không phải chứng nhận an toàn cháy**. Nó không biết về lửa, khói, hoảng loạn, khác biệt về khả năng di chuyển hay những gì một quy chuẩn yêu cầu bạn. Các giới hạn thuộc về bạn: quãng đường dài nhất đến lối thoát và thời gian có sẵn là những con số bạn nhập, và không con số nào được giả định sẵn.
:::

## Chạy

1. Mở một mô hình có các phòng và cửa được đóng kín. Một cửa chỉ có một phòng ở một bên là lối thoát; một cửa giữa hai phòng nối chúng lại; một cầu thang nối các phòng ở hai đầu của nó.
2. Chọn **Sơ tán** (mọi người đi đến lối thoát), **Đến** (mọi người vào và đi đến một phòng) hoặc **Trao đổi** (người trong các phòng rời đi trong khi có số người tương đương đi vào), rồi chọn diện tích sàn cho mỗi người. Các phòng được đặt tên như hành lang, cầu thang, sảnh hay nhà vệ sinh không có ai.
3. Nhấp {{ui:Chạy}}. Bạn nhận được thời điểm người cuối cùng ra ngoài (và khi nửa số người và chín trên mười người ra), hàng đợi ở mỗi cửa và cầu thang, phòng có quãng đường đi dài nhất, và một mặt bằng phát lại quá trình chạy.

## Nếu thì sao

Đánh dấu {{ui:Đóng}} ở một cửa trong bảng rồi chạy lại: người ta tìm đường khác, hoặc các phòng không có lối ra được liệt kê thành lỗi. Một cửa rộng gấp đôi sẽ làm trống phòng sớm hơn nhiều; bảng cho thấy các hàng đợi nằm ở đâu.

## Cách hoạt động

Mỗi phòng là một lưới, nên người ta đi vòng qua góc, không đi xuyên tường. Tốc độ giảm khi phòng đầy (S = 1.4 (1 − 0.266 D) m/s, D tính bằng người trên m²). Một cửa cho 1.3 người mỗi giây đi qua trên mỗi mét chiều rộng, trừ 150 mm mỗi bên; một cầu thang là 1.0 và đi chậm hơn. Người ta xếp hàng theo thứ tự đến trước được phục vụ trước. Cùng một số chạy sẽ cho đúng cùng một lần chạy.

Trợ lý cũng có thể chạy cùng điều này: yêu cầu một mô phỏng sơ tán, hoặc quãng đường dài nhất đến lối thoát từ mỗi phòng.

## Người trong từng phòng

Mở {{ui:Người trong từng phòng}} để nhập một số cho bất kỳ phòng nào. Ô trống sẽ dùng số theo diện tích sàn (hiển thị màu xám); 0 làm trống phòng. Các số bạn nhập được dùng cho lần chạy và được lưu trong trình duyệt này.

## Ngược chiều tại cửa

Trong **Trao đổi**, người đi ra và người đi vào gặp nhau ở cùng các cửa. Khi một cửa cho người đi ngược chiều ngay sát sau người cuối cùng, nó giữ lại một phần lưu lượng (ở đây là 0.8; một giả định, vì các giá trị được công bố khác nhau), và bảng đếm số lần đổi chiều. Một cửa đổi chiều thường xuyên được liệt kê trong Vấn đề như một ghi chú.

## Cầu thang và chiếu nghỉ

Mỗi chiếu nghỉ của cầu thang mất một giây để người đi bộ quay (một giả định). Cầu thang thẳng không có chiếu nghỉ; cầu thang chữ L hoặc chữ U có một. Lưu lượng của cầu thang vẫn được tính từ chiều rộng của vế thang.

## Trong khung nhìn 3D

Đánh dấu {{ui:Hiện người trong khung nhìn 3D}} và những người đi bộ xuất hiện dưới dạng hình người trong mô hình, được tô màu theo việc họ đang làm, và di chuyển khi bạn phát lại lần chạy. Không có gì được thêm vào mô hình.
