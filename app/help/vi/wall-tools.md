---
title: Hình dạng tường, tách, khoảng lệch, kéo giãn và khóa
summary: Vẽ tường dưới dạng hình chữ nhật, đa giác, cung, trên các đường có sẵn hoặc theo một đường viền; tách chúng, lấy một đoạn ra, khoảng lệch, kéo giãn hộp, căn thẳng và khóa chúng với nhau, với một kích thước hoặc một đường lưới. Mọi thay đổi giữ các tường nối liền và là một bước hoàn tác.
keywords: đổi kiểu, thay đổi kiểu, đổi loại, cái gì đã di chuyển, lod, mức phát triển, kiểu nối, góc vát, mitre, miter, butt, cắt vuông, nối tường, tiếp theo, xuyên qua, cấm nối, cho phép nối, ưu tiên lớp, lõi, ưu tiên, giao điểm, hình chữ nhật, hình chữ nhật xoay, đa giác, nội tiếp, ngoại tiếp, cung, tâm, cung tiếp tuyến, chọn đường, tab, theo vết, đường viền, đũa thần, tách, tách có khe, khe hở, xóa đoạn, nối lại, khoảng lệch, sao chép, kéo giãn hộp, khung chọn, kéo giãn, căn chỉnh, khóa, ổ khóa, ràng buộc, khóa kích thước, sửa kích thước, lưới, khóa vào lưới, di chuyển đường lưới, lệch vị trí, ngắt nối, tự do, mọc từ, đo từ, đường tâm, mặt trong, mặt ngoài, hủy nối, alt
from: 5b7d2f75
---

## Mục tiêu

Tạo và thay đổi tường bằng các công thức của công cụ tường. Mỗi công thức kết thúc giống như khi vẽ một bức tường bằng các góc của nó: các góc tự nối với nhau, các mối nối được lưu trong tệp, và toàn bộ thay đổi là một bước trong **Thay đổi** mà {{ui:Hoàn tác}} lấy lại được. Các tường giữ nguyên danh tính của chúng: một bức tường bạn tách, khoảng lệch hoặc kéo giãn vẫn là cùng một bức tường, với các cửa đi, cửa sổ và kích thước của nó.

## Vẽ hình chữ nhật, đa giác hoặc cung

Với {{ui:Vẽ}} được bật, mở {{ui:Hình dạng}} trong nhóm Vẽ (hoặc chọn một hình trong danh sách **Hình dạng** của hàng Tường). Hàng Tường hiển thị loại tường, tham chiếu bản vẽ, phía ngoài và đỉnh, giống như với công cụ {{ui:Tường}}. Rồi nhấp, hoặc nhập các điểm (x,y · @dx,dy · @độ dài<góc · một độ dài dọc theo con trỏ):

- **Hình chữ nhật**: hai góc đối diện. Bốn tường, bốn mối nối góc, một bước.
- **Hình chữ nhật xoay**: nơi cạnh thứ nhất bắt đầu và kết thúc (điều đó đặt góc xoay và chiều dài của nó), rồi một lần nhấp thứ ba cho cạnh còn lại.
- **Đa giác**: tâm, rồi một góc (**Nội tiếp**) hoặc trung điểm của một cạnh (**Ngoại tiếp**). Đặt **Số cạnh** (3 đến 64) trước tiên.
- **Cung, tâm**: tâm, điểm bắt đầu (điều đó đặt bán kính), điểm kết thúc. **Chiều quay**: cách ngắn hơn, ngược chiều kim đồng hồ hoặc theo chiều kim đồng hồ. Một cung quét qua ba phần tư đường tròn được vẽ thành hai tường.
- **Cung tiếp tuyến**: nhấp vào đầu của một tường, rồi đến nơi cung kết thúc. Cung rời khỏi đầu tường theo hướng riêng của tường.

Một hình khép kín có mặt ngoài hướng ra ngoài. Khi vẽ theo **Mặt ngoài** hoặc **Mặt trong**, mặt bạn nhấp là mặt giữ nguyên vị trí.

## Tường trên các đường đã có

- **Chọn đường**: nhấp vào một đường và một tường được đặt trên đó. Nhấn {{key:Tab}} (hoặc giữ {{key:Shift}} khi nhấp) để lấy cả chuỗi đường nối đầu cuối với nhau. Các đường này là đường bản vẽ của khung nhìn này, tham chiếu theo vết và đường lưới.
- **Theo đường viền**: nhấp vào bên trong một vùng khép kín bởi các đường đó hoặc bởi tường. Các tường đi vòng quanh vùng nhỏ nhất bao quanh điểm nhấp.

## Đặt trước khi vẽ: khoảng lệch và kiểu nối

Hàng Tường có thêm hai trường nữa, được dùng bởi công cụ {{ui:Tường}} và các hình:

- **Khoảng lệch**: các tường được vẽ cách đường bạn nhấp một khoảng này: + về bên trái của nó, − về bên phải, nhìn theo cách bạn vẽ.
- **Nối**: bỏ đánh dấu để vẽ tường tự do. Các đầu của chúng nhận **Cấm nối** và vẫn tự do ở bất cứ đâu chúng đi tới (xem [Thay đổi tường](topic:change-a-wall-or-door)).

## Tách, lấy một đoạn ra, nối lại

Mở {{ui:Tường}} trong nhóm Chỉnh sửa.

- **Tách**: nhấp vào một tường nơi nó nên được cắt, hoặc nhập khoảng cách từ điểm đầu của nó. Gần một tường cắt ngang, điểm cắt bắt vào nơi chúng gặp nhau. Hai phần có cùng loại và vẫn nối đầu cuối với nhau. **Khe hở** để lại một khoảng trống có chiều dài đó, căn giữa tại điểm cắt. **Đầu tự do** thay vào đó đặt **Cấm nối** cho các đầu vừa cắt (Cài đặt › BimCraft › Tường › **Khi tường bị tách** đặt tùy chọn nào được đánh dấu lúc đầu). Cửa đi hoặc cửa sổ đi theo phần tường mà nó nằm trong; cắt xuyên qua một cửa như vậy sẽ bị từ chối.
- **Xóa đoạn**: nhấp vào nơi đoạn bắt đầu và nơi nó kết thúc. Cửa đi trong đoạn đó đi theo nó.
- **Nối lại**: nhấp vào hai phần của cùng một tường (thẳng hàng, cùng loại). Chúng trở thành một tường trở lại, là tường có điểm bạn nhấp đầu tiên, với các cửa đi của cả hai.

## Kiểu nối, Cấm nối, ưu tiên lớp

Mở {{ui:Tường}} trong nhóm Chỉnh sửa.

- **Kiểu nối**: nhấp vào một góc nơi hai tường thẳng kết thúc. Mỗi lần nhấp chuyển sang kiểu tiếp theo: **Góc vát** (cả hai đầu được cắt theo đường từ góc trong đến góc ngoài, là kiểu mà mọi góc bắt đầu), **Đối đầu** (một tường chạy xuyên đến mặt ngoài của tường kia, tường này dừng lại sát cạnh của nó) và **Cắt vuông** (như đối đầu, và tường chạy xuyên kết thúc vuông; ở góc vuông nó trông giống đối đầu). **Tiếp theo**, hoặc {{key:Tab}}, làm cho tường kia trở thành tường chạy xuyên. Danh sách **Kiểu** trong thanh cho biết góc bạn nhấp lần cuối. Hai lựa chọn này cũng có trong **Thuộc tính** của một tường: **Kiểu nối tại đầu / tại cuối** và **Chạy xuyên**. Mỗi thay đổi là một bước trong **Thay đổi**. Mặt bằng, khối 3D, các phòng và khối lượng đều theo.
- Tại một chữ T, tường có cạnh bị gặp luôn chạy xuyên. Nơi hai tường cắt nhau, một cú nhấp (hoặc **Liên tục tại chỗ giao** trong Thuộc tính) cho biết tường nào liên tục; điều đó quyết định lớp nào của tường được vẽ xuyên qua chỗ giao.
- Kiểu thuộc về mối nối: nó được giữ khi các tường di chuyển và chỉ mất khi mối nối mất (tường bị xóa, bị tách tại đầu đó, hoặc đầu đó nhận Cấm nối). Một góc có tường cong, hoặc nơi ba tường trở lên gặp nhau, vẫn giữ góc vát. Một góc nhọn hơn khoảng 30 độ, hoặc tù hơn khoảng 150 độ, cũng quay lại góc vát.
- **Cấm nối**: nhấp gần một đầu tường. Đầu đó được giải phóng: nó không nối với gì cả, bất kể tường đi đâu, cho đến khi bạn nhấp lại vào nó. Các đầu tự do được đánh dấu bằng dấu chéo khi công cụ đang bật. Cùng công tắc này là **Nối tại đầu / Nối tại cuối** trong Thuộc tính.
- **Ưu tiên lớp**: nơi các tường có lớp gặp nhau, lớp mạnh hơn cắt lớp yếu hơn, nên các lõi nối với lõi và một lớp hoàn thiện dừng lại sát lớp mạnh hơn. Mỗi lớp có một ưu tiên từ 0 đến 999; mặc định nó lấy từ chức năng của lớp (kết cấu 800, nền 600, cách nhiệt 400, màng 300, hoàn thiện 200, khoang 100). {{ui:Ưu tiên lớp}} mở cấu tạo tường, nơi cột **Ưu tiên** đặt số riêng của một lớp. Các lớp có cùng ưu tiên dừng lại sát nhau, và một đường chỉ được vẽ giữa các vật liệu khác nhau. Bạn thấy điều này trên mặt bằng với chi tiết **Trung bình** hoặc **Mịn**, tại các góc, chỗ chữ T và chỗ giao của hai tường thẳng; Cài đặt › BimCraft › Tường › **Làm sạch các lớp tường tại nơi tường gặp nhau** sẽ tắt nó. Nó chỉ thay đổi những gì được vẽ bên trong các tường: đường viền và khối lượng của tường vẫn theo kiểu nối đã đặt.

## Đổi loại cho nhiều tường

Chuyển từ mặt bằng phác thảo sang bản vẽ thi công chủ yếu là đổi loại: một tường chung trở thành cấu tạo cụ thể. Bạn không vẽ lại gì cả.

1. Chọn các tường (một, hoặc nhiều bằng {{key:Ctrl}} hoặc {{key:Shift}}).
2. Trong Thuộc tính, nhấn **Đổi kiểu…** dưới Loại tường (hoặc mở {{ui:Tường}} trong nhóm Chỉnh sửa và chọn {{ui:Đổi kiểu}}, lệnh này mở cùng danh sách). Danh sách mở ngay trong Thuộc tính, trong khối của các tường đã chọn. Nó không phải là hộp thoại và không che gì cả: mặt bằng, khung nhìn 3D và việc chọn vẫn hoạt động khi nó đang mở, và nó theo các tường bạn chọn.
3. Danh sách hiển thị mọi loại tường cùng độ dày và thẻ LOD, ví dụ "Tường 230 chung, LOD 200" và "230 gạch đất nung, trát hai mặt, LOD 300". Các loại mà các tường đã chọn đang có được đánh dấu. Gõ vào **Tìm** để thu hẹp: một tên, một độ dày, hoặc `lod 300`.
4. Nhấp vào một loại. Mọi tường đã chọn đổi sang loại đó trong một bước, nên một {{ui:Hoàn tác}} sẽ lấy lại toàn bộ việc đổi. Chữ x nhỏ đóng danh sách.

Mỗi tường giữ đường vị trí của nó. Một tường có đường vị trí ở tim sẽ lớn ra cả hai phía; một tường có đường vị trí là một mặt sẽ giữ mặt đó và lớn theo hướng khác, và các tường nối với nó sẽ theo tại các góc. Các tường bị khóa vào một tường đã đổi cũng theo nó. Cửa đi và cửa sổ vẫn nằm trong tường của chúng và được cắt lại cho độ dày mới.

Sau khi đổi, danh sách hiển thị **Cái gì đã di chuyển**: có bao nhiêu tường đã thay đổi và thành gì, độ dày và LOD trước và sau, các tường đã dời ngang để giữ đường vị trí của chúng, các tường nối đã theo, các cửa đi và cửa sổ được gắn lại, và mỗi phòng có diện tích thay đổi cùng diện tích trước và sau. Thanh trạng thái nói điều tương tự trong một dòng. Báo cáo chỉ cho biết; nó không bao giờ dừng một lần đổi. Chọn một loại trong **Thuộc tính › Loại tường** cũng thực hiện cùng việc đổi và đưa ra cùng báo cáo.

Có hai điều dừng một lần đổi, và khi đó không có gì bị thay đổi: một cửa đi hoặc cửa sổ không còn vừa trong tường của nó (một tường bị ngắn đi tại nơi một góc theo sau; hãy làm cửa hẹp hơn hoặc dời nó ra khỏi góc trước), và một khóa mà lần đổi sẽ phá vỡ (một tường bị khóa vào một đường lưới bằng tim của nó trong khi đường vị trí của nó là một mặt; hãy mở khóa hoặc đặt lại đường vị trí về tim).

Một trợ lý được kết nối với BimCraft có thể thực hiện cùng việc đổi (các công cụ `wall_types_list` và `walls_swap_type`) và nhận lại cùng báo cáo.

Thẻ LOD của một loại được đặt trong trình chỉnh sửa cấu tạo tường: xem [Cấu tạo tường](topic:wall-assemblies).

## Khoảng lệch và kéo giãn hộp

- **Khoảng lệch**: nhấp vào một tường, rồi nhấp vào phía để dời nó sang, hoặc nhập khoảng cách. Tường dời vuông góc với chính nó và các tường nối với nó được kéo giãn. Đánh dấu **Sao chép** để có một bản song song thay thế (nó không được nối với bản gốc).
- **Kéo giãn hộp**: nhấp vào hai góc của một hộp, rồi một điểm để di chuyển từ và một điểm để di chuyển đến. Mọi đầu tường nằm trong hộp đều di chuyển; một tường hoàn toàn nằm trong hộp sẽ di chuyển, và các tường đâm vào nó cũng theo; các tường cắt ngang hộp sẽ được kéo giãn.

## Sửa một kích thước và khóa nó

Chọn một kích thước tham chiếu (Chú thích › {{ui:Kích thước tham chiếu}}) và nhập giá trị của nó trong **Thuộc tính**: tường của tham chiếu thứ hai dời vuông góc với chính nó, tham chiếu thứ nhất giữ nguyên và các tường nối theo. Đánh dấu **Khóa kích thước này** để giữ giá trị: khi một trong hai tường di chuyển sau đó, tường kia sẽ theo. Một giá trị bị khóa không thể gõ đè cho đến khi bạn bỏ đánh dấu.

## Căn chỉnh và khóa

**Căn chỉnh và khóa**: nhấp vào một mặt tường (hoặc đường tâm, gần giữa tường) hoặc một đường lưới, rồi chọn mặt của tường để đưa lên đường đó. Tường dời vuông góc đến đường đó. Đánh dấu **Khóa** trước để giữ chúng thẳng hàng: một ổ khóa hiển thị trên mặt bằng, và khi một tường di chuyển, tường kia theo. **Thuộc tính** của một tường liệt kê **Khóa** của nó, mỗi khóa có **Mở khóa**.

## Khóa tường vào đường lưới

Chọn một tường chạy dọc theo một đường lưới, hoặc có đầu nằm trên một đường lưới, rồi chọn đường lưới trong **Thuộc tính** › **Khóa vào lưới**. Sau đó chọn đường lưới bằng công cụ {{ui:Lưới}} và nhập khoảng cách trong **Di chuyển theo**: đường dời vuông góc với chính nó và các tường khóa vào nó sẽ theo, cùng các tường nối với chúng, trong một bước. Một tường khóa vào đường lưới không thể tự rời khỏi nó (hãy di chuyển đường lưới, hoặc mở khóa tường); một đường lưới bị xoay đến mức tường bị khóa không thể giữ vuông góc trên nó sẽ bị từ chối. Đổi tên đường giữ nguyên khóa; xóa nó sẽ gỡ khóa.

## Chiều dài: phía nào giữ nguyên và nó đo gì

- **Mọc từ** (Thuộc tính của một tường): **Điểm đầu giữ** (đầu cuối di chuyển), **Điểm cuối giữ** (điểm đầu di chuyển) hoặc **Tâm giữ** (cả hai đầu di chuyển một nửa). Khi bạn nhập Chiều dài, mặt bằng đánh dấu điểm được giữ. Tường nối tại đầu di chuyển sẽ dời vuông góc với chính nó và giữ góc của nó.
- **Đo từ** (bên cạnh Kích thước trên mặt bằng, trong Thuộc tính, và trong Cài đặt › BimCraft › Tường): đường tâm, mặt trong hoặc mặt ngoài. Ô Chiều dài và các kích thước tường trên mặt bằng đọc cùng một cách, nên chúng khớp nhau. Mặc định là đường tâm.
- Để di chuyển một tường tách khỏi các mối nối của nó (chúng bị đứt, tường giữ danh tính của nó), giữ {{key:Alt}} khi bạn kéo tay nắm giữa của nó.

## Điều nên biết

- Các công thức này là của đặc tả công cụ tường (trang 4 đến 9). Kiểu nối và ưu tiên lớp được xây dựng cho tường thẳng; ưu tiên lớp chỉ hiển thị trên mặt bằng (không hiển thị trong mặt cắt, mặt đứng hoặc 3D, nơi một tường là một khối), không hiển thị tại các nút của ba tường trở lên, và màng không được mang theo.
- Kiểu của một mối nối được lưu trong bản ghi của nó trong tệp IFC (tên của `IfcRelConnectsPathElements`, ví dụ `CadCraft join L butt 1`), nên các chương trình khác vẫn đọc được mối nối, và một tệp cũ mở ra với góc vát.
- Các khóa và mối nối được lưu trong tệp IFC (khóa dưới dạng `CadCraft_WallHolds` trên dự án, mối nối dưới dạng `IfcRelConnectsPathElements`), nên chúng vẫn còn khi bạn mở lại tệp.
- Tường cong có thể bị tách, nối lại và lấy một đoạn ra; chúng không được dời khoảng lệch hay khóa.
- Xem thêm [Vẽ tường](topic:draw-walls), [Thay đổi tường, cửa đi hoặc cửa sổ](topic:change-a-wall-or-door) và [Tạo hình tường](topic:wall-shape).
