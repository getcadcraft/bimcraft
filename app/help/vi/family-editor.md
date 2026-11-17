---
title: Chỉnh sửa family
summary: Đổi tham số, công thức và khối đặc của family, hiển thị các phần theo tham số Yes / No, cắt và ghép khối đặc, gắn đầu nối cho ống và ống dẫn, và xem kết quả được vẽ từ IFC mà nó sẽ lưu.
keywords: trình chỉnh sửa family, chỉnh sửa family, tham số, công thức, hiển thị, yes no, khối đặc, hộp, đùn, quay tròn, quét, biên dạng, cung tròn, boolean, cắt, ghép, hiệu, hợp, tay nắm, phác thảo, family mới, đầu nối, cổng, đầu nối ống, đầu nối ống dẫn, thoát nước, cấp nước
from: 1ab31c10
---

## Mở trình chỉnh sửa

Mở một family (nhóm **Family** trong trình duyệt dự án, hoặc {{ui:Bản dựng}} › {{ui:Family…}}) và nhấn {{ui:Chỉnh sửa family}}. Để bắt đầu từ đầu, nhấn {{ui:Family mới}}: đặt tên cho nó, cho biết nó là gì (cửa đi, cửa sổ, đồ nội thất, thiết bị lắp đặt hay thứ khác) và, với cửa đi hoặc cửa sổ, ký hiệu mặt bằng và tay nắm của nó lấy từ family khởi đầu nào. Trình chỉnh sửa mở với một family có vài tham số và một khối đặc.

Sửa một family khởi đầu chỉ giữ thay đổi của bạn trong mô hình này. Các mô hình khác giữ family khởi đầu như cũ.

Không có gì trong mô hình thay đổi cho đến khi bạn nhấn {{ui:Lưu family}}. Trình chỉnh sửa có hoàn tác và làm lại riêng (các nút mũi tên cạnh tên, hoặc {{key:Mod+Z}} và {{key:Mod+Y}}); lưu là một bước trong hoàn tác của mô hình.

## Tham số

Thẻ {{ui:Tham số}} liệt kê các tham số của family: tên, loại và giá trị mặc định. Các loại: **Chiều dài** (milimét), **Góc** (độ), **Số**, **Số nguyên**, **Yes / No**, **Bút** (1–16), và ba loại chứa chữ thay vì số: **Văn bản**, **Vật liệu** (một trong các vật liệu của dự án) và **Tô** (một kiểu tô trên mặt bằng). Chữ không dùng trong công thức; chúng tô màu một khối đặc (**Vật liệu** của nó), tô một phần ký hiệu, hoặc in thành `{Name}` trong văn bản của ký hiệu. Ô **Theo phần tử** làm cho một tham số thành thứ mà mỗi phần tử đã đặt tự đặt cho chính nó, thay vì theo kích thước.

- **Công thức** làm một tham số theo các tham số khác, ví dụ `Width / 30` hoặc `if(Width > 1200, 2, 1)`. Chiều dài trong công thức là milimét, hoặc bạn ghi đơn vị: `3'`, `6in`, `50cm`.
- Đổi tên một tham số sẽ đổi tên nó trong mọi công thức và ô dùng nó. Tham số vẫn đang được dùng thì không thể gỡ bỏ.
- **Vật liệu** của một khối đặc lấy màu của vật liệu dự án (hoặc của tham số Vật liệu), **Hiển thị tại** ẩn nó ở các mức chi tiết thô hơn, và **Lặp lại** tạo bản sao: một số lượng (một số hoặc tham số số nguyên, từ 1 đến 200) và bước giữa chúng theo x, y và z. Khối đặc được lặp là một dãy ván, thanh hoặc lỗ; khi dùng trong phép cắt, các bản sao cắt cùng lúc.
- Family cửa đi hoặc cửa sổ còn nhận hai tên từ tường của nó: `WallThickness` và `Face` (1 hoặc −1, phía cửa mở về).

## Khối đặc

Thẻ {{ui:Khối}} liệt kê các khối đặc. Thêm một hộp, một khối đùn, một khối quay tròn hoặc một khối quét:

| Khối đặc | Bạn đặt gì |
|---|---|
| Hộp | hai góc của nó: x0 đến x1, y0 đến y1, z0 đến z1 |
| Đùn | một biên dạng trên mặt phẳng làm việc (mặt bằng, mặt đứng hoặc mặt bên), vị trí mặt phẳng, và độ sâu |
| Quay tròn | một biên dạng, một trục trên mặt phẳng, và góc đến 360° |
| Quét | một đường gồm các điểm và một bán kính (một thanh hoặc một ray) |

Mỗi số có thể là số đã gõ hoặc một biểu thức của các tham số. Mỗi khối đặc có màu và **Hiển thị khi**: để trống để luôn hiển thị, hoặc ghi tên một tham số Yes / No (hoặc viết phép so sánh như `Shelves >= 3`) để chỉ hiển thị khi đó. Đó là một tham số hiển thị.

### Vẽ biên dạng

Biên dạng của khối đùn hoặc khối quay tròn được vẽ trên mặt phẳng làm việc của nó, bên dưới bản xem trước:

- Nhấn lên giấy để thêm một điểm sau điểm đã chọn.
- Kéo một điểm để di chuyển nó. Điểm bắt vào lưới; giữ {{key:Shift}} để đặt chúng tự do.
- Nhấn một ô vuông nhỏ trên một đoạn để thêm điểm tại đó. {{key:Shift}}+nhấn vào nó để biến đoạn đó thành cung tròn (nhấn lại để chuyển sang chiều kia, rồi thành đường thẳng).
- Nhấp đúp vào một điểm để gỡ bỏ nó.

Các điểm rỗng được đặt bằng tham số: đổi chúng trong bảng, không kéo.

## Boolean

Thẻ {{ui:Boolean}} cắt khối đặc thứ hai ra khỏi khối thứ nhất, hoặc ghép chúng. Kết quả của một Boolean có thể lại được cắt hoặc ghép. Khối đặc dùng trong Boolean chỉ được vẽ như một phần của nó.

Khi khối thứ hai bị ẩn bởi tham số Yes / No của nó, khối thứ nhất được giữ nguyên; khi khối thứ nhất bị ẩn, kết quả bị ẩn.

## Ký hiệu mặt bằng

Thẻ {{ui:Ký hiệu mặt bằng}} vẽ những gì mặt bằng hiển thị cho family này thay vì mặt cắt của các khối đặc: đường thẳng, hình chữ nhật, đường tròn, cung tròn, đa giác và văn bản, theo các trục riêng của family. Mỗi phần có một **bút** (1–16, một biểu thức hoặc một tham số Bút), một **tô** (không, đặc, chéo, đan chéo, bê tông, cách nhiệt, đất, hoặc một tham số Tô), một biểu thức **hiển thị theo**, một **khoảng cắt** tính bằng milimét phía trên đáy của nó (phần được vẽ nét đậm khi mặt cắt của mặt bằng nằm trong nó, mảnh ở dưới nó, nét đứt ở trên nó: một tủ nằm trên mặt cắt sẽ hiện nét đứt), một mức chi tiết và một lặp lại. Văn bản có thể gọi tên tham số dưới dạng `{Name}`. **Mặt bằng hiển thị: Mặt cắt của các khối đặc** giữ mặt bằng cắt các khối đặc trong khi ký hiệu vẫn nằm trong family. Các chương trình khác đọc ký hiệu như dấu chân của family (đường và hình; văn bản ở lại trong BimCraft).

## Họ cấu kiện bên trong

Thẻ {{ui:Họ cấu kiện bên trong}} đặt một family khác bên trong family này: một chân trong một cái bàn, một tay nắm trên cửa. Chọn family, rồi chọn vị trí của nó (x, y, z), góc xoay (chỉ các góc quý: 0, 90, 180, 270), lúc nào nó được hiển thị, và các giá trị nó nhận, mỗi dòng một giá trị dạng `Height = Height - 40`. Lưu family bên trong sẽ vẽ lại family này; một family đang được family khác giữ thì không thể xóa; một family không thể chứa chính nó, kể cả qua family khác, và việc lồng nhau dừng ở bốn cấp.

## Điểm nóng

Điểm nóng là một điểm hoặc một cạnh mà bạn kéo để đổi một tham số. Trên thẻ {{ui:Điểm nóng}}, thêm một điểm, chọn trục nó kéo theo và tham số số mà nó đổi, rồi ghi vị trí của nó bằng các biểu thức giống như của khối đặc. Trong bản xem trước, chọn **Điểm nóng** dưới các tay nắm để kéo chúng. Trên một phần tử đã đặt trong mặt bằng (chọn nó bằng {{ui:Chọn}}), các điểm nóng x và y hiển thị dưới dạng grip; kéo một grip và phần tử nhận kích thước đưa điểm nóng đến đó, qua mọi công thức ở giữa; một lần Hoàn tác sẽ đưa nó về. Điểm nóng không thể đổi một tham số bị điều khiển, một Yes / No hoặc một chữ.

Trong khung nhìn 3D, các điểm nóng này hiển thị dưới dạng grip trên phần tử được chọn, và các điểm lên xuống (trục z) cũng hiển thị ở đó, điều mà mặt bằng không vẽ được. Chọn phần tử, kéo một grip dọc theo trục của nó rồi thả: phần tử nhận kích thước đưa điểm nóng đến đó, như một bước hoàn tác. Các grip bị ẩn khi hộp cắt đang bật, vì nó dùng cùng các grip.

## Đầu nối

Các family đặt trên sàn (đồ nội thất, thiết bị lắp đặt và các loại khác) có thẻ {{ui:Đầu nối}}: các điểm nơi ống hoặc ống dẫn nối với phần tử, như vòi và ống thoát của chậu rửa. Nhấn {{ui:Thêm đầu nối}} và đặt:

- **Loại**: ống hoặc ống dẫn, và **Hệ thống** của nó (nước lạnh, thoát nước vệ sinh, cấp khí…).
- **x**, **y** và **z**: vị trí của nó, theo các trục của family. Giống các số của khối đặc, mỗi giá trị có thể là một số hoặc công thức của tham số, nên đầu nối di chuyển theo kích thước.
- **Hướng ra**: hướng mà ống hoặc ống dẫn rời khỏi nó, dọc theo một trục của family (ống thoát dưới chậu đi **Xuống**).
- **Kích thước (mm)**: kích thước danh định (DN) của ống, hoặc đường kính của ống dẫn tròn.
- **Lưu lượng**: **In** cho đầu nối được cấp (vòi), **Out** cho đầu nối xả (ống thoát).

Bản xem trước vẽ mỗi đầu nối như một vòng với mũi tên chỉ hướng ra. Cửa đi và cửa sổ không có đầu nối.

Với một thiết bị cấp thoát nước, chọn nó là loại nào dưới **Thiết bị cấp thoát nước** (bồn cầu, chậu rửa mặt, chậu rửa bếp, vòi sen, chậu giặt). Các thiết bị khởi đầu đã ghi sẵn điều này.

Mọi phần tử đặt từ family đều nhận đầu nối của nó như các cổng trong tệp IFC, và chúng được tạo lại khi phần tử đổi kích thước hoặc khi family được lưu. Các chương trình đọc hệ thống IFC thấy mỗi ống hoặc ống dẫn thuộc về đâu.

## Bản xem trước và tay nắm

Bản xem trước là family được viết thành IFC, bởi cùng mã lưu nó vào mô hình, rồi vẽ lại. Những gì bạn thấy là những gì các chương trình khác nhận được. Bên dưới, **Kích thước hiển thị** đặt các giá trị tham số mà bản xem trước dùng.

**Tay nắm** là các chấm trên bản xem trước: **Kích thước** hiển thị một tay nắm cho Width, Depth và Height; **Khối đặc đã chọn** hiển thị một tay nắm trên mỗi mặt của khối bạn chọn. Kéo một tay nắm:

- trên một mặt được đặt bởi tham số, kích thước hiển thị thay đổi (các công thức của family được giữ lại);
- trên một mặt được đặt bởi một số đã gõ, số đó thay đổi.

## Lưu

{{ui:Lưu family}} kiểm tra family, rồi vẽ lại mọi kích thước của nó và tạo lại mọi phần tử của nó, như một bước bạn có thể hoàn tác. Nếu một kích thước không thể vẽ được với thay đổi (ví dụ một khối đặc sẽ không có chiều rộng ở kích thước đó), không có gì được lưu và trình chỉnh sửa cho biết kích thước nào.

Nếu người khác đã lưu cùng family khi trình chỉnh sửa của bạn đang mở (trong phiên Live TeamWork, hoặc trong một cửa sổ khác), {{ui:Lưu family}} sẽ từ chối và báo như vậy, thay vì thay thế thay đổi của họ bằng của bạn. Đóng trình chỉnh sửa, mở lại family để xem thay đổi của họ, rồi làm lại thay đổi của bạn.

:::note
Hình học được lưu dưới dạng các khối đặc IFC của chính nó: khối đùn, khối quay tròn, đĩa quét và kết quả Boolean. Không có gì bị đổi thành danh sách tam giác, nên tệp vẫn nhỏ và các chương trình khác có thể đọc hình dạng như hình dạng. Biên dạng có cung được lưu với cung trong IFC4; IFC2X3 không có đoạn cung trong biên dạng, nên ở đó các cung được lưu thành các đoạn thẳng ngắn.
:::

Xem thêm [Family và kích thước của chúng](topic:families).
