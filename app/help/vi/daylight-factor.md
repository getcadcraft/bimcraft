---
title: Ước tính ánh sáng ban ngày trong từng phòng
summary: Hệ số ánh sáng ban ngày trung bình của mỗi phòng, tính từ các cửa sổ, bề mặt bên trong và phần bầu trời mà mỗi cửa sổ nhìn thấy, với góc trời được đo trong mô hình. Đây là ước tính giai đoạn thiết kế sơ bộ, không phải mô phỏng hay kiểm tra quy chuẩn.
keywords: ánh sáng ban ngày, hệ số ánh sáng ban ngày, hệ số ánh sáng ban ngày trung bình, ADF, thành phần trời thẳng đứng, VSC, độ lợi nhiệt mặt trời, mặt trời, g-value, lưới, chia thông lượng, thành phần trời, thành phần phản xạ bên trong, ánh sáng tự nhiên, cửa sổ, lắp kính, góc trời, vật cản, che bóng, ban công, mái hiên, hệ số phản xạ, hệ số truyền sáng, thiết kế sơ bộ, phân tích, phòng, không gian
from: 5f300a78
---

Thẻ {{ui:Ánh sáng ban ngày}} trong bảng bên phải tính **hệ số ánh sáng ban ngày trung bình** của từng phòng: bao nhiêu phần trăm ánh sáng của bầu trời u ám bên ngoài đến được phòng, tính trung bình. Nó đọc các phòng (không gian) và cửa sổ của mô hình IFC đang mở. Không có gì trong mô hình bị thay đổi và không có gì được tải lên.

:::warning
Mọi thứ trong thẻ này là **công cụ hỗ trợ thiết kế, không phải tính toán tuân thủ**: ước tính thiết kế sơ bộ theo các phương pháp đã công bố, **không phải mô phỏng** và **không phải kiểm tra theo quy chuẩn xây dựng hay tiêu chuẩn**. BS EN 17037, LEED, BREEAM và các quy chuẩn năng lượng yêu cầu mô phỏng ánh sáng ban ngày với khí hậu của địa phương; hãy dùng chương trình mô phỏng ánh sáng ban ngày cho những mục đó.
:::

## Tính toán

1. Mở một mô hình IFC có phòng (không gian) và cửa sổ. Các mô hình vẽ ở đây có một phòng bên trong mỗi tập tường khép kín.
2. Mở thẻ {{ui:Ánh sáng ban ngày}} và nhấp {{ui:Tính}}.
3. Mỗi phòng hiển thị hệ số ánh sáng ban ngày và một dải: dưới 2 %, 2–5 %, 5 % trở lên. Nhấp vào một phòng để xem các bề mặt và diện tích cùng góc trời của từng cửa sổ; phòng và các cửa sổ của nó được chọn trong mô hình.

Thay đổi một đầu vào và các số thay đổi ngay; sau khi đổi mô hình, nhấp {{ui:Tính lại}}. {{ui:CSV}} lưu mọi phòng cùng các số và đầu vào đã dùng.

## Công thức

Hệ số ánh sáng ban ngày trung bình (%) = T × Ag × θ × M ÷ (A × (1 − R²)), cộng dồn trên các cửa sổ của phòng (công thức Littlefair, dùng trong BRE 209, BS 8206-2 và CIBSE LG10):

- **T**, hệ số truyền sáng của kính (0.7 để bắt đầu: dùng số của nhà sản xuất).
- **Ag**, diện tích kính: diện tích mỗi cửa sổ (chiều rộng tổng × chiều cao, nếu không thì kích thước trong mô hình) × **tỷ lệ kính** (0.75 để bắt đầu: phần còn lại là khung).
- **θ**, góc trời mà cửa sổ nhìn thấy, tính bằng độ (bên dưới).
- **M**, hệ số bảo trì đối với bụi bẩn trên kính (1 để bắt đầu).
- **A**, mọi bề mặt bên trong của phòng: sàn, tường, trần và cửa sổ, lấy từ hình dạng riêng của phòng.
- **R**, hệ số phản xạ trung bình của chúng, có trọng số theo diện tích: sàn 0.2, tường 0.5, trần 0.7 để bắt đầu; kính được tính là 0.1.

## Cách đo góc trời

Với mỗi cửa sổ, BimCraft cắt mô hình bằng một mặt phẳng thẳng đứng vuông góc với cửa sổ, từ mặt ngoài của kính, rồi nhìn thẳng lên từ đường chân trời: mọi thứ mà mặt cắt gặp ở phía trước cửa sổ (một tòa nhà đối diện, một ban công hoặc mái hiên phía trên, mái đua) đều che một phần của góc 90° đó. θ là phần còn lại. Bản thân cửa sổ và bức tường chứa nó không được tính. Phép đo được làm tại năm vị trí trên chiều rộng cửa sổ rồi lấy trung bình, nên một trụ mỏng đứng trước giữa cửa sổ chỉ chiếm phần của nó, không chiếm toàn bộ bầu trời.

Một tòa nhà cao 8.5 m trên tâm cửa sổ và cách 9.9 m sẽ che 40.65° (góc có tang bằng 8.5 ÷ 9.9), còn lại θ = 49.35°.

## Thành phần trời thẳng đứng của từng cửa sổ

{{ui:Tính}} cũng đo, cho mỗi cửa sổ, phần nó nhìn thấy của toàn bộ bầu trời: cùng một mặt cắt thẳng đứng, quay tới mọi hướng trên mặt trước cửa sổ (mỗi 2°, từ bên này sang bên kia), nên một tòa nhà ở một bên, một vách đứng hoặc một khung lõm sâu đều chiếm phần của nó. Từ đó BimCraft tính **thành phần trời thẳng đứng (VSC)**: bao nhiêu phần ánh sáng của bầu trời u ám đến được kính, như một tỷ lệ so với những gì một mái phẳng không bị che sẽ nhận được. Một cửa sổ không có gì phía trước nhận được **39.6 %**, mức cao nhất mà một cửa sổ thẳng đứng có thể đạt; một tòa nhà dài cao hơn cửa sổ 25° để lại khoảng **27 %**, con số mà hướng dẫn của Anh (BRE 209) dùng làm quy tắc kinh nghiệm. Mỗi cửa sổ trong chi tiết phòng hiển thị VSC và **góc che khuất** của nó (vật ở phía trước cao đến mức nào).

Bầu trời là bầu trời u ám chuẩn CIE, sáng gấp ba lần ngay phía trên so với đường chân trời, và phép cắt là chính xác: không có lấy mẫu nào.

## Mặt trời qua cửa sổ vào một ngày

Mở {{ui:Nắng qua cửa sổ trong một ngày}} và chọn một ngày. BimCraft theo dõi mặt trời suốt ngày đó theo từng 15 phút và cộng lại, cho mỗi cửa sổ, lượng nhiệt mặt trời đi qua kính:

- **nắng trực tiếp**, khi nó ở phía trước cửa sổ và không có gì trong mô hình che nó (cùng phép cắt chính xác, quay về phía mặt trời: một ban công che mặt trời hè cao vào buổi trưa sẽ để mặt trời đông thấp lọt vào);
- **ánh sáng bầu trời** trên kính, trừ phần cửa sổ không nhìn thấy;
- ánh sáng **phản xạ từ mặt đất** (hệ số phản xạ: 0.2 để bắt đầu);
- tất cả đi qua **g-value** của kính (tỷ lệ năng lượng mặt trời nó cho đi qua: 0.6 để bắt đầu; dùng số của nhà sản xuất) và tỷ lệ kính.

Mỗi phòng hiển thị tổng trong ngày bằng kWh và đỉnh bằng watt cùng thời điểm; chi tiết phòng vẽ ngày đó thành biểu đồ. Bầu trời là bầu trời quang đãng theo mô hình Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), với số liệu mùa hè hoặc mùa đông của địa điểm và mùa, cùng độ cao của công trường; vị trí mặt trời theo NOAA. Vĩ độ và kinh độ của công trường lấy từ công trường IFC, còn hướng bắc lấy từ hướng bắc thật của mô hình; nếu mô hình không có công trường, hãy nhập vĩ độ và kinh độ. Thời gian là giờ chuẩn (không có giờ mùa hè) theo múi giờ bạn nhập, nếu không thì theo múi giờ mà kinh độ gợi ý.

Những gì không được tính: mây (đây là ngày quang đãng), việc kính cho ít ánh sáng hơn ở góc thấp, khung che bóng kính, rèm, và phần tường và mái hấp thụ. Ước tính làm mát trong cùng thẻ dùng giá trị đỉnh.

## Hệ số ánh sáng ban ngày trên lưới

Mở {{ui:Hệ số ánh sáng ban ngày trên lưới}} và {{ui:Tính lưới}}: BimCraft đặt một lưới lên sàn mỗi phòng ở độ cao mặt làm việc (0.85 m để bắt đầu), cách tường nửa mét vào trong, và tính hệ số ánh sáng ban ngày tại mọi điểm theo **phương pháp chia thông lượng BRE**:

- **thành phần trời**: bầu trời u ám nhìn thấy từ điểm qua lỗ mở của mỗi cửa sổ, trừ khung;
- **thành phần phản xạ bên ngoài**: phần các tòa nhà bên ngoài mà điểm nhìn thấy qua cửa sổ, sáng bằng một phần mười bầu trời phía sau chúng (đổi độ sáng vật cản nếu chúng sáng hoặc tối hơn nhiều);
- **thành phần phản xạ bên trong**: ánh sáng dội quanh phòng, từ các bề mặt và hệ số phản xạ của phòng, diện tích cửa sổ và phần diện tích nằm ngoài cửa sổ (công thức BRE, với hệ số truyền sáng của kính thay cho kính trong suốt mà nó giả định).

Mỗi phòng hiển thị giá trị trung bình, điểm thấp nhất và phần diện tích đạt từ 2 % trở lên; chi tiết phòng vẽ mặt bằng với mỗi điểm được tô màu theo hệ số ánh sáng ban ngày và các cửa sổ màu đỏ. Để chạy nhanh trên mọi máy tính, mỗi phòng có tối đa **400 điểm**: trong phòng lớn, khoảng cách sẽ tăng để vừa (nhập một khoảng cách để tự chọn).

## Những gì không được tính

- Cửa sổ mái (kính nằm phẳng hoặc dốc) được liệt kê nhưng không được tính: các công thức ở đây dành cho cửa sổ trên tường.
- Cửa sổ không có phòng phía sau (ví dụ một sảnh không có không gian) được liệt kê riêng.
- Lõm khung cửa sổ (lỗ mở được lấy tại mặt ngoài), chói lóa, số giờ nắng và ánh sáng ban ngày theo khí hậu. Với BS EN 17037, LEED hoặc BREEAM, hãy dùng chương trình mô phỏng ánh sáng ban ngày.
- Các dải là từ hướng dẫn cũ của Anh (BS 8206-2), chỉ hiển thị như hướng dẫn, không bao giờ là đạt hay không đạt.
