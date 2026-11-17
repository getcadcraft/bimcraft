---
title: Cài đặt BimCraft
summary: Chọn có hiển thị phòng và không gian hay không, có vẽ cạnh hay không, mô hình mở ra ở khung nhìn nào, và bắt đầu đặt với bắt theo tường đã bật.
keywords: cài đặt, tùy chọn, lựa chọn, không gian, phòng, ifcspace, cạnh, đường, hiệu năng, mô hình lớn, khung nhìn khi mở, camera, khung nhìn trên, bắt theo tường, bắt điểm
from: 4416e64f
---

Mở {{ui:Cài đặt}} bằng biểu tượng bánh răng trên thanh ứng dụng hoặc {{key:Mod+,}}. Thẻ đầu tiên, {{ui:BimCraft}}, chứa các cài đặt thuộc ứng dụng này; {{ui:Chung}} chứa các cài đặt mà mọi ứng dụng CadCraft dùng chung (giao diện, thanh công cụ, bảng). Cài đặt của BimCraft chỉ tồn tại trong ứng dụng: bạn thay đổi chúng tại đây, và trình duyệt này ghi nhớ chúng. {{ui:Đặt lại cài đặt BimCraft}} ở cuối hộp thoại đưa chúng, và các cài đặt dùng chung, về trạng thái ban đầu.

## Menu, phím và chuột

Kiểu menu (thanh công cụ riêng của BimCraft, thanh menu kiểu thiết kế nhà, dải lệnh BIM hoặc dòng lệnh vẽ kỹ thuật), phím và menu riêng của bạn, và những gì bánh xe và các nút chuột làm. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).

## Khi mô hình mở ra

- **Hiện phòng và không gian** (tắt khi bắt đầu): phòng và không gian là các hộp trong suốt có thể che các bức tường phía sau, nên chúng bắt đầu ẩn. Nút {{ui:Không gian}} phía trên mô hình vẫn bật và tắt chúng cho mô hình đang mở.
- **Cạnh**: {{ui:Bật cạnh}} (mặc định) vẽ các đường cạnh tạo nên phong cách bản vẽ. {{ui:Chỉ mô hình nhỏ}} chỉ vẽ chúng cho các mô hình dưới 300,000 tam giác, giúp các mô hình lớn xoay nhanh hơn. {{ui:Tắt cạnh}} mở mọi mô hình không có cạnh. Nút {{ui:Cạnh}} vẫn bật và tắt chúng cho mô hình đang mở. Trên 1.5 triệu tam giác, cạnh luôn tắt.

## Bản vẽ mở ở

Cách một bản vẽ DWG hoặc DXF hiển thị lần đầu: {{ui:3D (nhanh nhất)}} (mặc định) vẽ nhanh ngay cả bản vẽ lớn, hoặc {{ui:Mô hình (2D)}} mở khung nhìn không gian mô hình phẳng. Các thẻ phía trên bản vẽ chuyển giữa {{ui:Mô hình}}, các tờ và {{ui:3D}} bất cứ lúc nào. Một bản vẽ không có gì trong không gian mô hình, hoặc một trình duyệt không hiển thị được 3D, luôn mở ở 2D.

## Khung nhìn khi mở

Góc nhìn mà một mô hình mở ra: {{ui:Vừa khung}} (mặc định, toàn bộ mô hình từ một góc), {{ui:Trên}}, {{ui:Trước}} hoặc {{ui:Bên}}. Các nút phía trên mô hình đổi khung nhìn bất cứ lúc nào.

**Công trình xoay trong khu đất**: nhiều mô hình có công trình đặt lệch góc so với các trục của tệp (trên tọa độ khảo sát hoặc tọa độ dùng chung). {{ui:Thẳng với công trình}} (mặc định) làm cho một công trình như vậy hiển thị thẳng: {{ui:Vừa khung}}, {{ui:Trên}}, {{ui:Trước}}, {{ui:Bên}}, các mặt của khối xem và mọi mặt cắt mới đều theo các bức tường của nó, và la bàn của khối xem vẫn chỉ hướng bắc của mô hình. {{ui:Theo vị trí trong khu đất}} giữ các trục của tệp. Một công trình có các bức tường chạy dọc theo trục trông giống nhau theo cả hai cách.

## Đặt mục thư viện

**Bắt đầu với bắt theo tường bật** (tắt khi bắt đầu): khi bắt đầu đặt hoặc dán một mục thư viện, mặt sau của nó bắt vào bức tường gần nhất, hướng vào phòng. {{key:Tab}} hoặc {{ui:Bắt theo tường}} trên thanh đặt sẽ tắt nó tạm thời. Một cốt không có tường sẽ bắt đầu mà không có tính năng này.

## Hộp cắt

{{ui:Khoảng trống quanh vùng chọn}} là khoảng không gian mà {{ui:Hộp cắt quanh vùng chọn}} để lại ở mọi phía của các cấu kiện đã chọn, tính bằng milimét: mặc định 300, tối đa 5000. Xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane).

## Vị trí

{{ui:Vĩ độ và kinh độ theo}} chọn hệ mà {{ui:Đo}} › {{ui:Vị trí}} đưa ra vĩ độ và kinh độ: WGS 84 (EPSG:4326, mặc định, như GPS và bản đồ web dùng), {{ui:Hệ quy chiếu riêng của tệp}}, hoặc một trong các hệ ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 và CGCS2000. Hệ bản đồ và hệ quy chiếu riêng của tệp luôn được hiển thị. Xem [Đo khoảng cách, diện tích mặt và vị trí trong 3D](topic:measure).

## Chỉ báo góc

Thứ nằm ở góc dưới bên phải của các khung nhìn 3D (một mô hình IFC, và một bản vẽ chuyển sang 3D): {{ui:Khối xem}} (mặc định), {{ui:Biểu tượng trục}} (một chữ X, Y và Z nhỏ) hoặc {{ui:Không có}}. Thay đổi có hiệu lực ngay. Khung nhìn bản vẽ 2D không bao giờ hiển thị chỉ báo nào.

Trên khối xem, nhấp một mặt, một cạnh hoặc một góc để nhìn từ phía đó, kéo khối để xoay quanh, kéo vòng để quay tròn, và nhấp hình ngôi nhà để về khung nhìn ban đầu.

## Tên của bạn trên vấn đề

Khi đã đăng nhập, các vấn đề mang tên tài khoản của bạn và BimCraft không yêu cầu gì thêm: phần này hiển thị {{ui:Từ tài khoản của bạn (<name>)}}. {{ui:Dùng tên khác}} mở một hộp để nhập tên khác, và tên này được ưu tiên cho đến khi bạn chọn {{ui:Dùng tên tài khoản của tôi}}. Khi chưa đăng nhập, biểu mẫu vấn đề vẫn yêu cầu nhập tên như trước. Xem [Vấn đề và tệp BCF](topic:issues-bcf).

## Trợ lý

**Cho phép trợ lý AI và kịch bản dùng BimCraft** (tắt khi bắt đầu) cho phép một trợ lý trên máy tính của bạn truy cập mô hình đang mở qua CadCraft Studio: **Đọc** tìm cấu kiện và đọc thuộc tính của chúng, **Đổi khung nhìn** cô lập, ẩn và hiện chúng. **Hoạt động** liệt kê các lần gọi của nó. Xem [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants).

:::note
Các cài đặt khác có hiệu lực khi một mô hình mở ra hoặc khi bắt đầu đặt. Một mô hình đã mở giữ nguyên cách hiển thị của nó cho đến khi bạn dùng các nút thanh công cụ hoặc mở lại nó.
:::

## Liên quan

- [Sao chép, dán và nhân bản mục thư viện](topic:copy-paste)
- [Đặt thiết bị và nội thất từ thư viện](topic:place-from-library)
- [Màn hình BimCraft](topic:workspace)
- [Để trợ lý AI làm việc với mô hình của bạn](topic:assistants)
