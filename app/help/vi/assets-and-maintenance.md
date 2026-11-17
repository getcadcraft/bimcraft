---
title: Lưu dữ liệu tài sản và nhật ký bảo trì trong mô hình
summary: Dùng mô hình IFC đã bàn giao để vận hành công trình: hãng, kiểu máy, số seri, bảo hành và tuổi thọ cho thiết bị và thiết bị gắn cố định, cùng nhật ký các công việc bảo trì đã làm, tất cả được ghi vào IFC.
keywords: bàn giao, chứng nhận hoàn thành, chứng nhận sử dụng, as-built, gói bàn giao, tài sản, sổ tài sản, quản lý cơ sở vật chất, fm, vận hành, bảo trì, dịch vụ, bảo hành, số seri, mã vạch, hãng sản xuất, kiểu máy, tuổi thọ, bàn giao, cobie, bản sao số, quá hạn, đến hạn, phiếu công việc
from: b84ac492
---

Thẻ {{ui:Tài nguyên}} trong bảng bên phải biến mô hình IFC đang mở thành bản ghi thiết bị của công trình. Mọi thứ được ghi vào chính tệp IFC, trong các tập thuộc tính và công việc của IFC, nên chương trình tiếp theo mở tệp cũng đọc được. Không có gì được tải lên và không cần máy chủ: lưu IFC để giữ lại.

## Những gì được liệt kê

- Thiết bị và thiết bị gắn cố định: nội thất, thiết bị vệ sinh, đèn, thiết bị gia dụng, đầu thu gió, van, bơm, quạt, nồi hơi, bể, ổ cắm, tủ điện, thang máy và các phần tử tương tự khác, cùng các mục thư viện có dữ liệu thiết bị.
- Mọi phần tử khác mà bạn **theo dõi**: chọn nó trong mô hình (một cửa, một bức tường, một máy bơm vẽ như đối tượng thường) rồi nhấp {{ui:Theo dõi vùng chọn}}.
- Bất kỳ thứ gì đã có dữ liệu tài sản hoặc một công việc bảo trì, được ghi ở đây hoặc bởi chương trình khác.

Quá hạn xếp đầu, sau đó là những gì đến hạn trong vòng 30 ngày. Lọc theo tên, nhãn, hãng, kiểu máy hoặc số seri, theo tầng, hoặc tick {{ui:Chỉ quá hạn hoặc đến hạn trong 30 ngày}}.

## Dữ liệu tài sản

Nhấp một tài sản trong danh sách (hoặc chọn nó trong mô hình) để mở dữ liệu của nó: hãng, kiểu máy, tham chiếu kiểu máy, số seri, mã vạch, ngày lắp đặt, số bảo hành và ngày bắt đầu và kết thúc, tuổi thọ tính bằng năm. {{ui:Lưu dữ liệu}} ghi chúng trong một bước ({{key:Mod+Z}} hoàn tác). Để trống một ô để xóa giá trị đó.

## Tài liệu

Dưới dữ liệu, {{ui:Tài liệu}} liệt kê sách hướng dẫn, bảo hành, ảnh, chứng nhận và bản vẽ được liên kết với tài sản. Chọn loại, đặt tiêu đề (hoặc để trống: tên tệp được dùng) và nhập vị trí của nó:

- một **địa chỉ web** (`https://…`): nó có liên kết Mở, mở trong thẻ mới;
- hoặc một **tên tệp hoặc đường dẫn** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, một thư mục mạng): giữ các tệp cạnh IFC, trong cùng thư mục hoặc một thư mục con của nó, để các tên vẫn đúng khi bạn bàn giao thư mục. BimCraft hiển thị tên; mở tệp từ thư mục.

Các tệp thật không bao giờ được tải lên hay sao chép vào IFC: chỉ liên kết được ghi. Một địa chỉ web có mật khẩu trong đó, và mọi liên kết không phải địa chỉ web hay tệp (như `javascript:`), đều bị từ chối. {{ui:Xóa}} gỡ một tài liệu khỏi tài sản (một bước; {{key:Mod+Z}} hoàn tác).

Tài liệu do chương trình khác gắn vào phần tử cũng được liệt kê. Tài liệu gắn vào **kiểu** của phần tử hiển thị trên mọi phần tử cùng kiểu và ghi rõ điều đó; hãy đổi chúng ở nơi kiểu được tạo ra.

Trong IFC, mỗi tài liệu là một tham chiếu tài liệu IFC gắn với phần tử, với loại của nó được giữ trên liên kết đó, trong cả IFC4 và IFC2X3.

## Nhật ký bảo trì

Dưới tài liệu, {{ui:Ghi công việc đã làm}}: ngày thực hiện, công việc, ai làm, khi nào đến hạn tiếp theo và ghi chú. Mỗi mục là một bước; {{ui:Chỉnh sửa}} và {{ui:Xóa}} thay đổi nó sau này. Ngày đến hạn tiếp theo của mục mới nhất quyết định tài sản có quá hạn hay sắp đến hạn không.

## Cách lưu trong IFC

- Hãng và kiểu máy nằm trong `Pset_ManufacturerTypeInformation`, số seri, mã vạch và ngày lắp đặt trong `Pset_ManufacturerOccurrence`, bảo hành trong `Pset_Warranty`, tuổi thọ trong `Pset_ServiceLife`, trên chính phần tử. Khi kiểu của phần tử đã có hãng hoặc kiểu máy, nó hiển thị cho đến khi bạn nhập của riêng bạn.
- Mỗi mục bảo trì là một **công việc** IFC thuộc loại bảo trì, gắn với phần tử, với các ngày của nó (trong IFC4 cũng là thời gian riêng của công việc) và một tập `CadCraft_Maintenance` với ngày, người làm và ngày đến hạn tiếp theo.
- Giá trị mà phần tử khác dùng chung được sao chép trước: đổi một tài sản không bao giờ đổi các tài sản lân cận.
- Trong tệp IFC2X3 cũ, ngày được ghi dưới dạng văn bản (YYYY-MM-DD); phiên bản đó cần một bản ghi ngày riêng, điều BimCraft không ghi.

## Số đọc cảm biến

Mở {{ui:Giá trị cảm biến}} và {{ui:Mở số đọc (CSV)…}} để nhập số đọc xuất từ hệ thống quản lý tòa nhà, bộ ghi dữ liệu hoặc bảng tính:

- **Cột đầu tiên là thời gian**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` hoặc giây Unix. Thời gian không có múi giờ được đọc theo múi giờ của máy tính bạn. Ngày có ngày đứng trước như `23/10/2026` không được đọc (vì mơ hồ); hãy xuất ngày theo chuẩn ISO.
- **Mỗi cột khác là một cảm biến**, có tiêu đề là **nhãn**, **tên** hoặc **GlobalId** của tài sản. Tiêu đề không khớp với tài sản nào, hoặc khớp với nhiều hơn một, được liệt kê và bỏ qua. Dấu phẩy, dấu chấm phẩy hoặc tab phân cách các cột; với dấu chấm phẩy hoặc tab, dấu phẩy thập phân (`21,5`) cũng được đọc.
- Thời gian hoặc giá trị không đọc được (một chữ, một đơn vị gõ vào ô) được đếm và bỏ qua, không bao giờ đoán.

Số đọc mới nhất hiển thị trong cột {{ui:Số đọc}} của danh sách và trong khối {{ui:Cảm biến}} của tài sản, kèm một **biểu đồ** của mọi số đọc (trên điện thoại, biểu đồ chờ đến khi bạn chạm {{ui:Hiển thị biểu đồ}}). Đặt một **giới hạn thấp và cao** và một đơn vị cho tài sản rồi {{ui:Lưu các giới hạn}}: số đọc nằm ngoài chúng sẽ đánh dấu tài sản. Tick {{ui:Hiển thị trên mô hình}} để tô mỗi tài sản theo số đọc của nó — xanh dương dưới giới hạn thấp, xanh lá trong giới hạn, đỏ trên giới hạn cao, và với tài sản không có giới hạn, một thang màu xanh dương duy nhất từ số đọc thấp nhất đến cao nhất — với số đọc của nó làm nhãn (tối đa 60 nhãn, các mục bị đánh dấu được ưu tiên trước).

**Số đọc chỉ nằm trong thẻ trình duyệt này**: chúng không được lưu trong IFC và không gửi đi đâu cả; mở lại tệp CSV lần sau. **Giới hạn được lưu trong IFC** (một tập `CadCraft_Sensor` trên phần tử: Low, High, Unit), nên người tiếp theo mở tệp sẽ thấy cùng các đánh dấu.

## Số đọc trực tiếp

{{ui:Nguồn dữ liệu trực tiếp}} đọc giá trị ngay khi chúng xảy ra, **trực tiếp từ trình duyệt này đến hệ thống của riêng bạn**. Không có gì đi qua máy chủ của chúng tôi và không có gì được lưu ở đâu ngoài thẻ trình duyệt của bạn. Không có kết nối nào khi tệp mở: chỉ {{ui:Kết nối}} mới kết nối.

- **MQTT qua WebSocket**: địa chỉ của bộ lắng nghe WebSocket của máy chủ trung gian (broker) của bạn (`wss://broker.example.com:8884/mqtt`), và một hoặc nhiều chủ đề với `{tag}` ở nơi nhãn của tài sản đi vào, ví dụ `site/{tag}/temperature` (BimCraft đăng ký `site/+/temperature` và đọc nhãn từ chủ đề của mỗi thông điệp). Chủ đề không có `{tag}` tự gọi tên cảm biến. Một thông điệp là một số đơn thuần (`21.5`) hoặc JSON như `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (đặt {{ui:Trường giá trị trong JSON}} nếu của bạn gọi tên khác).
- **Hỏi một địa chỉ (HTTP)**: một địa chỉ web mà hệ thống quản lý tòa nhà hoặc một script nhỏ của bạn trả lời, được hỏi mỗi vài giây (ít nhất 5 giây). Nó có thể trả lời bằng JSON theo nhãn (`{"AHU-1": 21.5}`), một danh sách JSON (`[{"tag": "AHU-1", "value": 21.5}]`), hoặc một CSV số đọc như trên. Nếu nó không trả lời, BimCraft đợi lâu gấp đôi trước khi hỏi lại, tối đa năm phút.

Mỗi số đọc được gửi đến tài sản có nhãn, tên hoặc GlobalId mà nó nêu, đúng như một cột CSV; tên không khớp với tài sản nào được liệt kê. Các số đọc được nối vào {{ui:Giá trị cảm biến}}: danh sách, biểu đồ, giới hạn và màu trên mô hình hoạt động giống nhau.

**Mật khẩu hoặc token của bạn** được nhập cho một kết nối: nó được chuyển cho kết nối và ô được xóa trống; nó không bao giờ được lưu trong trình duyệt này hay trong IFC. Token được gửi dưới dạng tiêu đề `Authorization: Bearer` chuẩn, và không gửi cookie nào.

{{ui:Giữ các cài đặt này trong IFC}} ghi địa chỉ, chủ đề, trường giá trị và tần suất hỏi vào mô hình (một tập `CadCraft_Feed` trên dự án; không có ô cho mật khẩu), nên người tiếp theo mở tệp chỉ cần nhập đăng nhập của họ và nhấp {{ui:Kết nối}}. Đừng đặt mật khẩu hay khóa trong chính địa chỉ: một địa chỉ có tên người dùng và mật khẩu trong đó sẽ bị từ chối.

:::note
**Máy chủ trung gian hoặc địa chỉ của bạn cần gì.** Một trang trình duyệt chỉ nói chuyện được với máy chủ cho phép nó:
- Trang an toàn (https), nên trình duyệt chỉ kết nối đến địa chỉ `wss://` và `https://` — trừ trên máy tính của bạn (`localhost`), nơi `ws://` và `http://` hoạt động để thử nghiệm.
- Địa chỉ HTTP phải cho phép yêu cầu từ trang này (CORS: tiêu đề `Access-Control-Allow-Origin`, và `Authorization` trong các tiêu đề được phép nếu bạn dùng token).
- Hầu hết máy chủ trung gian (Mosquitto, EMQX, HiveMQ và các loại khác) có bộ lắng nghe WebSocket; nó thường tắt cho đến khi được bật. BimCraft dùng MQTT 3.1.1.
:::

**Không có cảnh báo** khi BimCraft đóng: giới hạn chỉ đánh dấu tài sản khi mô hình đang mở và có nguồn dữ liệu được kết nối. Theo dõi một công trình suốt ngày đêm cần một máy chủ, mà BimCraft không chạy.

## Bảng tính COBie

**COBie** là bảng tính bàn giao mà nhiều chủ đầu tư và đội vận hành yêu cầu (do National BIM Standard công bố ở Mỹ; BS 1192-4 ở Anh). Mở {{ui:Bảng tính COBie}} trong thẻ:

- {{ui:Lưu thành COBie (.xlsx)}} ghi các trang COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document và Attribute — từ mô hình và dữ liệu tài sản: công trình, các tầng và phòng (diện tích lấy từ khối lượng của mô hình), mọi tài sản như một component với số seri, ngày lắp đặt, ngày bắt đầu bảo hành, nhãn và mã vạch, kiểu của nó cùng hãng, kiểu máy, tuổi thọ và độ dài bảo hành, các hệ thống nó thuộc về, nhật ký bảo trì dưới dạng công việc và các tài liệu liên kết. Mỗi component mang GlobalId IFC của phần tử. Gõ địa chỉ email của bạn cho cột "created by" của COBie, hoặc để trống (khi đó ghi n/a). Giá trị mô hình không có ghi **n/a**; các cột danh mục mang lớp IFC, không phải mã OmniClass.
- {{ui:Đọc bảng tính COBie…}} đọc lại một bảng tính, từ BimCraft hoặc chương trình khác, và **liệt kê mọi thay đổi trước**: tài sản nào, giá trị nào, từ cái gì sang cái gì, và tài liệu mới. {{ui:Áp dụng}} ghi tất cả trong một bước ({{key:Mod+Z}} hoàn tác). Các dòng được khớp theo GlobalId, rồi theo tên của component. Dòng không khớp gì trong mô hình được liệt kê, không được thêm.

Bảng tính được coi là không đáng tin: công thức không bao giờ được đọc hay chạy (chỉ lấy giá trị được lưu lần cuối trong ô); giá trị khiến bảo hành kết thúc trước khi bắt đầu, và liên kết tài liệu không phải địa chỉ web hay tên tệp, đều bị bỏ qua và được đếm; các bảng tính rất lớn bị từ chối. Các công việc của COBie là công việc lên kế hoạch của một kiểu, nên chúng được ghi ra nhưng không được đọc lại. Trong bảng tính BimCraft ghi, văn bản mà bảng tính có thể hiểu là công thức (bắt đầu bằng `=`, `+`, `-` hoặc `@`) được đánh dấu là văn bản.

Bảng tính này đã được kiểm tra trong thử nghiệm của chúng tôi bằng một trình đọc bảng tính độc lập; nó chưa qua trình kiểm tra COBie. Nếu đội nhận chạy một trình kiểm tra, hãy cho chúng tôi biết kết quả.

## Tài liệu bàn giao

Các giấy tờ giao cho chủ sở hữu khi công trình hoàn thành thuộc về dự án, không thuộc một tài sản riêng. Trên thẻ {{ui:Tài nguyên}}, mở {{ui:Tài liệu bàn giao}}:

1. {{ui:Thêm tài liệu}}, chọn loại (chứng nhận hoàn thành, chứng nhận sử dụng, bảo hành, sách hướng dẫn, bản vẽ hoàn công, khác), rồi nhập tiêu đề, ngày cấp, người cấp và số tham chiếu.
2. Cho biết nó ở đâu: một địa chỉ web, một tên tệp giữ cạnh IFC, hoặc {{ui:Đính kèm tệp}}.
3. {{ui:Thêm vào danh sách}}. {{ui:Chỉnh sửa}} và {{ui:Xóa}} thay đổi danh sách; mỗi thao tác là một bước bạn có thể hoàn tác.

{{ui:Tạo gói bàn giao}} tải xuống một tệp zip: một trang bìa liệt kê mọi tài liệu, cùng danh sách như một bảng tính, bảng tính COBie (các tài liệu nằm ở trang Document, dưới dạng các hàng về Facility), mô hình, và mỗi tệp đính kèm. Chứng nhận hoàn thành hoặc sử dụng chưa có trong danh sách sẽ được nêu tên trên trang bìa; gói vẫn được tạo.

Mô hình trong gói là **mô hình hoàn công**: nó nêu phần tử nào đã được đo tại công trường. Cùng với nó, trong thư mục `as-built`: bản tuyên bố, danh sách mọi phần tử kèm trạng thái xác minh, bộ bản vẽ hiện tại thành một PDF (các bản vẽ hoàn công), và nhật ký thay đổi bản vẽ khi mô hình đã phát hành các bộ. Xem [Đánh dấu phần tử đã kiểm tra hoặc xác minh tại hiện trường](topic:verification).

- Trong tệp IFC, mỗi tài liệu là một IfcDocumentInformation gắn với dự án (IfcRelAssociatesDocument), với tiêu đề, số tham chiếu, ngày, người cấp và nơi cấp, để các chương trình khác liệt kê được.
- Một tệp đính kèm được ghi lại theo tên, kích thước và SHA-256. Để giữ chính tệp cùng dự án, dùng {{ui:Lưu dự án thành gói dự án}} (một .ccbundle chứa mô hình và các tệp đính kèm; mở nó sẽ trả lại chúng, mỗi tệp được kiểm tra với bản ghi của nó). Lưu thông thường sẽ hỏi bạn muốn cách nào.
- Một tệp .ifc thường chỉ giữ bản ghi, không giữ tệp: sau khi mở, dùng {{ui:Đính kèm lại tệp}}. Cùng một tệp sẽ được nhận ra; một tệp khác sẽ thay thế bản ghi.

## CSV

{{ui:CSV}} lưu mọi tài sản kèm dữ liệu của nó, mọi mục bảo trì và mọi tài liệu, mỗi cái một dòng, cho bảng tính hoặc một chương trình bảo trì khác.

:::note
Chưa xây dựng: một dịch vụ lưu trữ giữ số đọc và gửi cảnh báo khi BimCraft đóng, và đọc lại các công việc của COBie. Xem [Chưa xây dựng](topic:not-built-yet).
:::
