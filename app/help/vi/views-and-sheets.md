---
title: Góc nhìn, phạm vi góc nhìn và các tờ của riêng bạn
summary: Tìm mọi mặt bằng, mặt đứng, mặt cắt, góc nhìn 3D, bảng thống kê và tờ trong trình duyệt dự án, đặt cách cắt và nội dung hiển thị của từng mặt bằng, tạo chi tiết phóng, vẽ đường và tô bóng trong một góc nhìn, giữ cài đặt trong mẫu góc nhìn, và sắp xếp các tờ của riêng bạn.
keywords: chi tiết phóng, góc nhìn chi tiết, phóng to mặt bằng, bản vẽ, đường chi tiết, đường vẽ, tô bóng, vùng tô bóng, vùng lấp đầy, mẫu tô, mặt bằng trần phản chiếu, rcp, mặt bằng trần, lưới trần, đèn, trình duyệt dự án, góc nhìn, phạm vi góc nhìn, cắt, vùng cắt, góc nhìn cắt, tỷ lệ, nền dưới, hiển thị tầng khác, nửa tông, mặt phẳng cắt, cao độ cắt, trên, dưới, độ sâu góc nhìn, hiển thị, danh mục, ẩn trong góc nhìn, mẫu góc nhìn, tờ, khung tên, khung nhìn, sắp xếp tờ, bố cục, pdf, trình duyệt
from: ee1d5afe
---

## Bạn sẽ làm gì

Làm việc theo cách các dự án BIM được tổ chức: mọi góc nhìn trong một danh sách, mỗi mặt bằng được cắt ở nơi bạn muốn, cùng một bộ cài đặt cho nhiều mặt bằng qua một mẫu, và các tờ do bạn tự bố trí.

## Trình duyệt dự án

1. Bật {{ui:Vẽ}}. Bảng bên trái có {{ui:Trình duyệt dự án}} nằm dưới các mô hình.
2. Nó liệt kê:
   - **Mặt bằng tầng**: mỗi tầng. Nhấn một mặt bằng để xem nó. Nút thanh trượt bên cạnh đặt phạm vi góc nhìn của nó (bên dưới). Mặt bằng theo mẫu sẽ hiển thị tên mẫu.
   - **Mặt bằng trần**: mặt bằng trần phản chiếu của mỗi tầng (bên dưới).
   - **Chi tiết phóng**: mỗi chi tiết phóng cùng góc nhìn mà nó được vẽ trên đó, và {{ui:Chi tiết phóng mới}}. **Thiếu** liệt kê các chi tiết phóng có góc nhìn đã mất.
   - **Mặt đứng** và **Mặt cắt**: bốn phía và mọi đường cắt. Nhấn một cái để mở bộ bản vẽ mà chúng được vẽ trong đó.
   - **Góc nhìn 3D**: các góc nhìn bạn đã lưu bằng {{ui:Góc nhìn}}.
   - **Bảng thống kê**: nhấn một bảng để hiển thị nó dưới mặt bằng.
   - **Tờ**: các tờ bạn đã tạo, {{ui:Tờ mới}}, và {{ui:Bộ bản vẽ…}} cho toàn bộ bộ bản vẽ được làm từ mô hình.
   - **Mẫu góc nhìn**, với {{ui:Mẫu mới}}, và **Liên kết** (các mô hình được liên kết).

## Đặt phạm vi góc nhìn của mặt bằng

1. Nhấn nút thanh trượt bên cạnh một tầng trong **Mặt bằng tầng**.
2. Đặt các cao độ, phía trên tầng đó:
   - **Cắt tại**: nơi mặt bằng cắt qua tường, cửa đi và cửa sổ (1200 mm, khoảng 4 ft, trừ khi bạn đổi).
   - **Đỉnh**: vật nằm phía trên điểm cắt và dưới đỉnh được vẽ nét đứt (tủ cao, dầm). Để trống để dùng chiều cao của tầng.
   - **Đáy** và **Độ sâu dưới đáy**: vật thấp hơn điểm cắt được vẽ bằng nét mảnh xuống đến đáy, và sâu thêm chừng đó dưới đáy.
3. Dưới **Hiển thị trong mặt bằng này**, bỏ chọn những gì mặt bằng này không cần: nội thất, phòng, cột, v.v.
4. Để ẩn các cấu kiện đơn lẻ: chọn chúng trên mặt bằng hoặc góc nhìn 3D, mở hộp thoại và nhấn {{ui:Ẩn những gì đã chọn tại đây}}. {{ui:Hiện tất cả}} đưa chúng trở lại.
5. Nhấn {{ui:Dùng các cài đặt này}}.

Mặt bằng được cắt lại ngay, và bộ bản vẽ cùng các tờ của bạn theo sau. Lát cắt của đám điểm cũng theo cao độ cắt.

## Cắt mặt bằng, đặt tỷ lệ, hiển thị tầng khác bên dưới

Cả ba đều nằm trong cùng một hộp thoại (nút thanh trượt bên cạnh một tầng):

- **Tỷ lệ**: tỷ lệ mà mặt bằng được in ở ({{ui:In}} trên thanh của mặt bằng) và được đưa lên tờ. **Fit** chọn tỷ lệ tiêu chuẩn lớn nhất vừa khung.
- **Vùng cắt**: nhấn {{ui:Vẽ trên mặt bằng…}}, rồi nhấn một góc và góc đối diện trên mặt bằng ({{key:Esc}} để dừng). Phần mặt bằng nằm ngoài vùng được che mờ trên màn hình, và bạn vẫn có thể làm việc ở đó; khi in, trên các tờ và trong bộ bản vẽ, mặt bằng chỉ hiện những gì nằm trong vùng. {{ui:Xóa}} bỏ việc cắt. {{ui:Vừa khung}} vừa khung với vùng cắt.
- **Nền dưới**: chọn một tầng khác. Tường, cấu kiện bị cắt, cửa đi và cửa sổ của tầng đó được vẽ nhạt bên dưới mặt bằng này, để căn chỉnh với tầng bên dưới hoặc bên trên. Bạn không thể chọn chúng ở đây, và chúng in màu xám nhạt.

Một mẫu góc nhìn mang theo tỷ lệ cùng các cao độ và danh mục. Vùng cắt và nền dưới luôn thuộc về riêng mặt bằng đó.

## Mặt bằng trần của tầng

Mỗi tầng có một mặt bằng trần phản chiếu bên cạnh mặt bằng sàn: mặt bằng nhìn từ dưới lên, để bố trí trần và những gì treo từ trần.

1. Nhấn tầng dưới **Mặt bằng trần** trong trình duyệt, hoặc chọn {{ui:Mặt bằng trần}} bên cạnh tầng trên thanh của mặt bằng.
2. Tường được cắt ở 2300 mm (khoảng 7'-6"). Phần nằm trên điểm cắt đó và dưới chiều cao của tầng được vẽ: trần với lưới và thẻ chiều cao (`CLG 2438`), đèn, dầm. Cửa đi, cửa sổ và phần nằm dưới điểm cắt bị bỏ qua.
3. Để tạo trần, dùng {{ui:Trần}} như trên mặt bằng sàn, rồi chọn nó và chọn **Mẫu tô** trong Thuộc tính. Xem [Phòng, sàn, trần và mái](topic:floors-and-roofs).
4. Để treo đèn từ trần, đặt vật phẩm từ thư viện khi mặt bằng trần đang hiển thị: nó sẽ vào **Tại trần**. Xem [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library).
5. Nút thanh trượt bên cạnh mặt bằng trần đặt điểm cắt và đỉnh, tỷ lệ, danh mục, vùng cắt và nền dưới, như với mặt bằng sàn. Mặt bằng trần không dùng mẫu góc nhìn.

Nó được vẽ theo cùng chiều với mặt bằng sàn (mặt bằng phản chiếu, không phải ảnh gương). Trần thấp hơn điểm cắt không được vẽ: hãy hạ điểm cắt cho mặt bằng trần của tầng đó. Mặt bằng trần đi lên tờ của bạn như mặt bằng; bộ bản vẽ không tự thêm chúng.

## Tạo chi tiết phóng

Chi tiết phóng hiển thị một phần mặt bằng lớn hơn, theo tỷ lệ riêng, như một góc nhìn riêng: một bếp, một cầu thang, một góc tường.

1. Hiển thị mặt bằng, mặt bằng trần hoặc chi tiết phóng mà nó thuộc về.
2. Chọn {{ui:Chú thích}} › {{ui:Chi tiết phóng}} trên thanh của mặt bằng (hoặc {{ui:Chi tiết phóng mới}} trong trình duyệt), rồi nhấn một góc của khu vực và góc đối diện. {{key:Esc}} để dừng.
3. Chi tiết phóng được tạo ở tỷ lệ 1:20 (1/2" = 1'-0" theo feet và inch). Hình chữ nhật của nó và một thẻ tròn được vẽ trên mặt bằng.
4. Nhấn thẻ bằng {{ui:Chọn}}, hoặc nhấn chi tiết phóng trong trình duyệt, để mở nó: mặt bằng chỉ hiện khu vực đó, theo tỷ lệ của chi tiết phóng. Thanh hiển thị {{ui:Chi tiết phóng:}} cùng tên của nó; {{ui:Lên}} quay về góc nhìn mà nó được vẽ trên đó.
5. Nút thanh trượt bên cạnh nó (trong trình duyệt hoặc trên thanh) đổi tên, đổi tỷ lệ, vẽ lại hình chữ nhật hoặc xóa nó.

Chi tiết phóng hiển thị những gì góc nhìn của nó hiển thị: cùng điểm cắt, cùng danh mục, trần của mặt bằng trần. Chi tiết phóng của một chi tiết phóng hoạt động theo cách tương tự. Đặt chi tiết phóng lên tờ như một mặt bằng; thẻ của nó khi đó cho biết nó nằm ở đâu (`1 / A-501`: góc nhìn đầu tiên trên tờ A-501). {{ui:In}} trong một chi tiết phóng chỉ in khu vực đó theo tỷ lệ của nó.

Xóa một chi tiết phóng cũng xóa các chi tiết phóng vẽ bên trong nó, cùng các đường và tô bóng vẽ trong đó (bạn sẽ được hỏi trước). Nếu tầng mà một chi tiết phóng được vẽ trên đó bị xóa, chi tiết phóng vẫn nằm dưới **Thiếu** cho đến khi bạn xóa nó, và các tờ có nó sẽ báo là thiếu.

## Vẽ đường và tô bóng trong một góc nhìn

Bản vẽ là công việc 2D thuộc về đúng một góc nhìn: ghi chú bằng đường, một vùng bê tông hoặc đất được tô bóng, một vùng lấp đầy. Nó không bao giờ nằm trong góc nhìn 3D và không bao giờ nằm trong mặt bằng khác.

1. Hiển thị mặt bằng sàn, mặt bằng trần hoặc chi tiết phóng để vẽ.
2. Chọn từ {{ui:Chú thích}} trên thanh của mặt bằng:
   - {{ui:Dòng}}: nhấn nơi nó bắt đầu và nơi nó kết thúc. Đường kế tiếp bắt đầu ở nơi đường trước kết thúc; {{key:Enter}} bắt đầu lại từ đầu.
   - {{ui:Đa tuyến}}: nhấn các điểm của nó; {{key:Enter}} hoặc nhấp đúp để kết thúc, nhấn vào điểm đầu tiên để đóng lại.
   - {{ui:Hình chữ nhật}}: hai góc đối diện.
   - {{ui:Vùng tô bóng}}: chọn **Mẫu tô** (Solid, Diagonal, Cross-hatch, Concrete, Insulation, Earth) và tỷ lệ của nó trên thanh, rồi nhấn các góc; {{key:Enter}}, nhấp đúp hoặc nhấn vào góc đầu tiên để đóng. Khi {{ui:Tô một phòng}} được đánh dấu, một lần nhấn trong phòng sẽ tô bóng đường bao của nó.
3. Các điểm bắt điểm như với tường; {{key:Shift}} giữ đường thẳng vuông góc, và bạn có thể gõ chiều dài như với tường. {{key:Backspace}} lấy lại điểm cuối cùng.

Chọn một đường hoặc một vùng tô bóng bằng {{ui:Chọn}} trên mặt bằng. Thuộc tính đổi mẫu và tỷ lệ tô bóng, và có {{ui:Di chuyển…}} (nhấn điểm để di chuyển từ đó, rồi nhấn nơi nó đến). {{key:Delete}} xóa nó. Mỗi đường, vùng tô bóng và thay đổi là một bước.

Đường và tô bóng được in cùng mặt bằng, đi lên tờ cùng nó và có trong bộ bản vẽ. Bỏ chọn **Chú thích** trong phạm vi góc nhìn để loại chúng khỏi góc nhìn đó.

## Giữ cài đặt trong mẫu góc nhìn

1. Nhấn {{ui:Mẫu mới}} trong trình duyệt, hoặc {{ui:Lưu thành mẫu…}} trong phạm vi góc nhìn của một mặt bằng (khi đó mặt bằng đó dùng mẫu).
2. Đặt tên, đặt các cao độ và danh mục, rồi nhấn {{ui:Lưu mẫu}}.
3. Trong phạm vi góc nhìn của bất kỳ mặt bằng nào, chọn mẫu. Mặt bằng nhận các cao độ và danh mục của nó; đổi mẫu sẽ đổi mọi mặt bằng dùng nó. Các cấu kiện bạn ẩn từng cái một vẫn ẩn trong mặt bằng riêng của chúng.
4. Nhấn một mẫu trong trình duyệt để đổi, đổi tên hoặc xóa. Xóa một mẫu sẽ khiến các mặt bằng của nó giữ lại cài đặt của chúng như cài đặt riêng.

## Sắp xếp một tờ của riêng bạn

1. Nhấn {{ui:Tờ mới}}. Nhập số và tiêu đề của nó, rồi chọn khổ giấy.
2. Nhấn {{ui:Thêm}} bên cạnh một mặt bằng, mặt bằng trần, chi tiết phóng, mặt đứng, mặt cắt hoặc bảng thống kê. Nó sẽ nằm giữa tờ.
3. Kéo nó đến nơi nó sẽ nằm. Khi đang chọn, chọn **Tỷ lệ**, hoặc để theo tỷ lệ riêng của mặt bằng (nếu mặt bằng có), nếu không thì theo tỷ lệ vừa một phần ba tờ. {{ui:Gỡ khỏi tờ}} sẽ gỡ nó khỏi tờ.
4. Nhấn {{ui:Lưu tờ}}. Nó được liệt kê dưới **Tờ**; nhấn vào nó để đổi sau này.
5. {{ui:Tải xuống dạng PDF}} lưu tờ đó thành một trang.

## Bạn nên thấy

- Mặt bằng được cắt ở các cao độ của bạn, phần trên điểm cắt được vẽ nét đứt và phần bạn đã bỏ chọn bị bỏ qua.
- Một mặt bằng đã cắt được che mờ bên ngoài vùng trên màn hình và được cắt theo vùng trên giấy, theo tỷ lệ bạn đã đặt.
- Mặt bằng trần với lưới trần và thẻ chiều cao, cùng đèn ở trần.
- Chi tiết phóng với hình chữ nhật và thẻ trên mặt bằng, mỗi cái mở theo tỷ lệ riêng.
- Đường và tô bóng chỉ hiện trong góc nhìn bạn đã vẽ chúng.
- Các tờ của bạn được vẽ lại từ mô hình mỗi lần bạn mở, nên luôn khớp với nó. Một góc nhìn có tầng hoặc đường cắt đã bị xóa sẽ được báo cáo, không được vẽ.
- Mọi thay đổi ở đây là một bước: {{key:Mod+Z}} hoàn tác nó.

:::note
Tất cả được lưu trong tệp IFC dưới dạng bộ thuộc tính mà các chương trình khác không đụng đến: phạm vi góc nhìn và mặt bằng trần của mỗi tầng nằm trên tầng đó, các mẫu, chi tiết phóng và tờ của bạn nằm trên dự án. Đường và tô bóng là chú thích IFC trong tầng của chúng, nên các chương trình khác thấy chúng là đường cong 2D và vùng tô bóng (bản vẽ riêng của họ cho mỗi mẫu), dù không biết chúng thuộc góc nhìn nào.
:::

:::tip
Các chương trình BIM khác gọi đường cắt là phạm vi góc nhìn hoặc mặt phẳng cắt, mẫu là mẫu góc nhìn hoặc thiết lập góc nhìn, đường vẽ chi tiết là đường chi tiết, và vùng tô là vùng lấp đầy. Ý tưởng giống nhau; cài đặt góc nhìn không chuyển sang các chương trình đó.
:::
