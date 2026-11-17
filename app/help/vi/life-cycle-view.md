---
title: Xem những gì hao mòn sau năm mươi năm
summary: Các cửa sổ, cửa đi, lớp hoàn thiện và mái mà mô hình có, tuổi thọ sử dụng, các năm mỗi bộ phận được thay thế, và chi phí theo năm cùng giá trị hiện tại khi bạn nhập chi phí trên mỗi đơn vị.
keywords: vòng đời, chu kỳ sống, tuổi thọ sử dụng, thay thế, bảo trì, chi phí, giá trị hiện tại, chiết khấu, lạm phát, 50 năm, cửa sổ, sơn, mái, hoàn thiện, toàn vòng đời
from: 1b849545
---

Mục {{ui:Góc nhìn vòng đời}} trong bảng bên trái liệt kê những gì mô hình có và hao mòn, cùng thời điểm thay thế trong giai đoạn nghiên cứu (ban đầu là 50 năm). Không có gì trong mô hình bị thay đổi.

## Cách đọc

Mỗi bộ phận hiển thị khối lượng (đo từ mô hình: diện tích cửa sổ, cửa đi bên ngoài và bên trong, lớp hoàn thiện tường ngoài, sơn nội thất, lớp hoàn thiện sàn và trần, diện tích hình chiếu của mái, cầu thang), **tuổi thọ tính bằng năm** và **chi phí trên mỗi đơn vị**. Một bộ phận được thay thế khi đạt tuổi thọ, rồi lại sau hai lần tuổi thọ, và cứ thế, miễn là trước khi hết giai đoạn nghiên cứu. Vì vậy, một cửa sổ 30 năm trong giai đoạn nghiên cứu 50 năm được thay thế một lần, vào năm thứ 30. Tuổi thọ sử dụng là các con số lập kế hoạch thông thường: hãy thay đổi chúng theo sản phẩm và khí hậu của bạn. Không có chi phí nào được giả định sẵn; nhập một chi phí để xem số tiền theo năm, tổng và giá trị hiện tại của nó. Thêm tỷ lệ chiết khấu và tỷ lệ lạm phát nếu bạn muốn.

{{ui:Lưu lịch (CSV)}} ghi các cấu kiện và các năm. Ống, ống dẫn, dây điện và thiết bị cũng được liệt kê (xem bên dưới).

## Ống, ống dẫn, dây điện và thiết bị

- **Ống và ống dẫn** là số mét của mọi đoạn đã vẽ. **Thiết bị** (bơm, quạt, van, đầu cuối, thiết bị lắp đặt, ổ cắm, công tắc, tủ điện và các đối tượng khác mà thẻ Tài sản theo dõi) được đếm theo loại, mỗi loại có một tuổi thọ lập kế hoạch. Một đối tượng có *tuổi thọ sử dụng* riêng đặt trong thẻ Tài sản sẽ là một dòng riêng với tuổi thọ đó; nếu nó có ngày lắp đặt thì tính từ tuổi hiện tại: một máy bơm 16 tuổi với tuổi thọ 10 năm sẽ đến hạn thay ngay bây giờ, rồi cứ mỗi mười năm một lần.
- **Dây điện** là một **ước tính**: khoảng cách trên mặt bằng từ tủ điện qua các thiết bị của mỗi mạch, theo thứ tự gần nhất trước, nhân với 1.25 cho đường đi dây. Mô hình không vẽ dây cáp, nên hãy đối chiếu với bảng bóc tách khối lượng của riêng bạn.
- Tuổi thọ là các con số lập kế hoạch cần xem lại, không phải nguồn chuẩn.

## Cacbon trên mỗi lần thay thế

Đánh dấu {{ui:Tính cacbon hàm chứa của mỗi bộ phận thay thế}}. Một cửa sổ, cửa đi, cầu thang, mái, ống hoặc thiết bị mới được tính theo lượng cacbon mà các cấu kiện cùng loại của chính mô hình mang (các hệ số trong thẻ Cacbon, trên mỗi đơn vị). Bộ phận không có cấu kiện hoặc hệ số tương ứng, chẳng hạn sơn, lớp hoàn thiện và dây điện, hiển thị dấu gạch ngang và vẫn được liệt kê. Thời điểm hết tuổi thọ của bộ phận cũ và công việc thay thế nó không được tính.
