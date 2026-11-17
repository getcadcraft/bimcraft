---
title: Phòng, sàn, trần và mái
summary: Phòng xuất hiện khi các tường khép kín chúng; đặt sàn và trần cho một phòng hoặc cho cả tòa nhà, và đặt mái chóp hoặc mái đầu hồi lên các tường. Tất cả đi theo khi tường di chuyển.
keywords: phòng, không gian, diện tích, chu vi, sàn, bản sàn, sàn phụ, trần, mái, mái chóp, mái đầu hồi, độ dốc, phần nhô, mép mái, nóc mái, rãnh mái, 6/12
from: 1fb1813c
---

## Bạn sẽ làm gì

Hoàn thiện phần vỏ của tòa nhà. Phòng được tạo tự động từ các tường; sàn, trần và mái mỗi thứ chỉ cần một lần nhấn. Vì được xác định từ tường, chúng đi theo khi tường di chuyển.

## Phòng

Mọi không gian được khép kín bởi tường đã vẽ đều là một phòng. Phòng xuất hiện ngay khi bức tường cuối cùng khép kín nó, với một số (101, 102 … ở tầng đầu, 201 … ở tầng tiếp theo) và một tên (**Phòng 1**, **Phòng 2** …), và diện tích của nó hiển thị ở giữa phòng trên mặt bằng.

- Khi {{ui:Chọn}} đang bật, nhấn bên trong một phòng để chọn. Trong **{{ui:Thuộc tính}}**, đổi **Tên** (ví dụ `Nhà bếp`) và **Số**; diện tích và chu vi được hiển thị.
- Xóa một tường giữa hai phòng thì chúng thành một; vẽ một tường cắt ngang một phòng thì nó thành hai. Phòng giữ tên và số khi các tường xung quanh di chuyển.
- Không thể xóa một phòng riêng lẻ: nó là khoảng không gian do các tường tạo thành.

Diện tích được đo bên trong các mặt tường. Phòng được lưu thành không gian IFC với diện tích sàn, chu vi, chiều cao và thể tích, để các bảng thống kê đọc được chúng (xem [Cộng khối lượng, liệt kê cấu kiện và lập bảng thống kê không gian](topic:quantity-totals)).

## Sàn

1. Nhấn {{ui:Sàn}}.
2. Chọn **Phòng này** hoặc **Cả tòa nhà**, **Loại** (sàn gỗ hoặc bản sàn bê tông) và độ dày của nó.
3. Trỏ vào bên trong một phòng (hoặc vào bất kỳ chỗ nào bên trong tòa nhà). Phần mà sàn sẽ phủ được tô sáng cùng diện tích.
4. Nhấn. Mặt trên của sàn nằm ngang với cốt của tầng; sàn đi xuống theo độ dày của nó. Sàn cả tòa nhà kéo đến các mặt ngoài của tường.

## Trần

1. Nhấn {{ui:Trần}}.
2. Chọn **Phòng này** hoặc **Cả tòa nhà**, và **Chiều cao** của trần so với sàn.
3. Trỏ vào bên trong và nhấn.
4. Để nhìn từ bên dưới, với lưới và đèn trên đó, chuyển mặt bằng sang mặt bằng trần của nó: xem [Khung nhìn, dải khung nhìn và tờ do bạn tự tạo](topic:views-and-sheets).

## Một mái

1. Trên tầng có các tường mang mái, nhấn {{ui:Mái}}.
2. Gõ **Độ dốc** dưới dạng số tăng trên 12 (`6/12`) hoặc theo độ (`30`), và **Phần nhô**.
3. Chọn **Đầu mái**: **Mái chóp** (mọi cạnh đều dốc), **Đầu hồi ở cạnh ngắn** hoặc **Đầu hồi ở cạnh dài** (tòa nhà có bốn cạnh), hoặc **Mái một dốc**.
4. Trỏ vào bên trong tòa nhà: mép mái và nóc mái hiển thị trên mặt bằng. Nhấn.

Mái nằm trên đỉnh các tường, ở tầng phía trên chúng, và mặt dưới của nó gặp mặt ngoài của tường. Đầu hồi được lấp bằng một tường đầu hồi dày bằng tường bên dưới. Một tòa nhà hình chữ L, T hoặc U sẽ có mái chóp mà các cánh gặp nhau ở rãnh mái.

## Thay đổi chúng

Chọn một sàn, trần hoặc mái (trong khung nhìn 3D, trên cây mô hình, hoặc một mái bằng cách nhấn bên trong đường viền của nó trên tầng phía trên) và đổi trong **{{ui:Thuộc tính}}**: loại, độ dày và khoảng cách từ mặt trên của sàn đến cốt tầng; chiều cao, độ dày và **Mẫu** của trần (lưới mà mặt bằng trần vẽ lên nó: không có, 600 × 600, 600 × 1200, 2' × 2' hoặc 2' × 4'); độ dốc, phần nhô, đầu mái và độ dày của mái. Mỗi thay đổi là một bước {{ui:Hoàn tác}}.

## Gán cho sàn, trần hoặc mái một kiểu có các lớp

Sàn, trần và mái có thể nhận một **kiểu**, giống như tường: một cấu tạo có tên gồm các lớp, mỗi lớp có vật liệu và độ dày thực.

- **Khi đặt.** Các công cụ Sàn, Trần, Mái và Vẽ sàn có một danh sách **Kiểu** trên dòng của chúng. **Không có kiểu** đặt như trước, với độ dày riêng. Một kiểu đặt nó dày bằng tổng độ dày các lớp của kiểu.
- **Sau đó.** Chọn sàn, trần hoặc mái và chọn **Kiểu** trong {{ui:Thuộc tính}}. Phần tử vẫn là cùng một phần tử: vị trí, phòng và dữ liệu của nó được giữ nguyên và không vẽ lại. Chỉ kiểu, độ dày và vật liệu của nó thay đổi. Đây là cách một phần tử ở giai đoạn phác thảo trở thành phần tử đã phát triển: thay kiểu chung bằng một kiểu thực.
- **Sửa kiểu…** mở trình sửa kiểu cho kiểu đó: các lớp từ **trên** xuống, lõi, chức năng của từng lớp, và thẻ LOD của kiểu. Lưu sẽ thay đổi mọi phần tử của kiểu trong một bước, và một lần {{ui:Hoàn tác}} sẽ lấy lại. Thay đổi một kiểu mẫu sẽ lưu một bản sao thành kiểu riêng của bạn.
- Khi một phần tử có kiểu, **Độ dày** của nó là của kiểu và không thể gõ trực tiếp. Chọn một kiểu khác, hoặc **Không có kiểu**, để đổi.

Các kiểu mẫu gồm một kiểu **chung** cho mỗi loại (một lớp của vật liệu chung, gắn thẻ LOD 200) và hai kiểu nhiều lớp (gắn thẻ LOD 300): một sàn đà gỗ và một sàn bê tông có lớp vữa láng; một mái gỗ và một mái bằng bê tông; một trần tấm thạch cao và một trần treo ô. Đây là giá trị khởi đầu, không phải cấu tạo đã được thử nghiệm: hãy kiểm tra các lớp trước khi dựa vào chúng.

Bảng thống kê **Các lớp: diện tích và thể tích** liệt kê mọi lớp của mọi kiểu đang dùng; xem [Bảng thống kê, kích thước và PDF](topic:plan-schedules-and-pdf). Các kiểu sàn, mái và trần được chuyển giữa các dự án trong một gói kiểu hoặc dưới dạng mục Thư viện; xem [Gói kiểu](topic:type-packs).

## Điều cần biết

- Di chuyển, thêm hoặc xóa tường sẽ làm lại các phòng, sàn, trần và mái phía trên chúng.
- Mái phù hợp với mọi đường viền. Để mỗi tường có độ dốc, đầu hồi hoặc mái một dốc riêng, một gờ đỡ nâng, diềm mái và ván đáy mái, hoặc để vẽ một mặt mái đơn, xem [Mái: độ dốc cho từng tường, đầu hồi, mái một dốc và mặt mái](topic:roofs).
- {{key:Delete}} xóa một sàn, trần hoặc mái đã chọn.
