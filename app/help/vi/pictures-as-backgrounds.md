---
title: Đặt hình ảnh dưới mặt bằng
summary: Đặt ảnh PNG, JPEG hoặc WebP (bản quét mặt bằng, phác thảo, ảnh hiện trường, ảnh chụp từ trên cao) dưới mặt bằng của một tầng hoặc trên một mặt phẳng đứng, chia tỷ lệ theo hai điểm, di chuyển, xoay, làm mờ và khóa, xem trong 3D và trong PDF mặt bằng, và giữ bên cạnh mô hình trong một gói.
keywords: hình ảnh, ảnh, nền, PNG, JPEG, WebP, bản quét, phác thảo, ảnh chụp, ảnh trên cao, mặt bằng tổng thể, tỷ lệ, độ mờ, khóa, lớp nền, vẽ theo
from: e3c78d1f
---

## Đặt một hình ảnh

Bật {{ui:Vẽ}}, đi đến tầng, và chọn {{ui:Ảnh}} trong menu {{ui:Bản dựng}}. Sau đó {{ui:Chèn hình ảnh…}} và chọn một tệp PNG, JPEG hoặc WebP. Tệp được đọc trong trình duyệt của bạn và không bao giờ được tải lên. Nó xuất hiện dưới mặt bằng, vừa khung nhìn, và thanh công cụ ghi rằng nó chưa được chia tỷ lệ. Mọi thứ bạn vẽ nằm trên nó.

## Đặt tỷ lệ

Chọn {{ui:Tỷ lệ}}, nhấp hai điểm trên hình ảnh mà bạn biết khoảng cách thực giữa chúng (hai đầu của một bức tường trên bản quét mặt bằng, hoặc một kích thước in trên phác thảo), rồi nhập khoảng cách và nhấn {{key:Enter}}. Hình ảnh phóng to hoặc thu nhỏ quanh điểm đầu tiên bạn nhấp. {{key:Esc}} hủy.

## Dán một vùng đã sao chép

Trong MarkupCraft, {{ui:Sao chép vùng}} sao chép một phần của tờ PDF thành một hình ảnh. Quay lại BimCraft, khi mặt bằng của một tầng đang hiển thị, nhấn {{key:Ctrl+V}} (hoặc {{ui:Dán}} trong menu {{ui:Chỉnh sửa}}): vùng đó được đặt lên mặt bằng dưới dạng một hình ảnh, căn giữa tại vị trí con trỏ (hoặc ở giữa khung nhìn). Khi tờ có tỷ lệ bản vẽ, nó được đưa vào ở kích thước thực, nên một bức tường trên đó dài bằng các bức tường của bạn. Không có tỷ lệ thì nó được đưa vào ở khổ giấy và {{ui:Tỷ lệ}} bắt đầu, để bạn nhấp hai điểm và nhập khoảng cách của chúng. Một vùng được sao chép dưới dạng lớp phủ bắt đầu ở độ mờ mà nó được sao chép cùng. Đây là một bước hoàn tác và được lưu như mọi hình ảnh khác.

Dán lấy thứ bạn sao chép sau cùng: một vùng đã sao chép, hoặc thứ gì đó bạn đã sao chép trong BimCraft. {{key:Ctrl+V}} cũng dán bất kỳ hình ảnh PNG, JPEG hoặc WebP nào khác trên bộ nhớ tạm của bạn, được đặt như {{ui:Chèn hình ảnh…}} và chưa được chia tỷ lệ. Một vùng đã sao chép được ghi nhớ trong sáu giờ.

## Di chuyển, xoay, làm mờ, khóa

{{ui:Di chuyển}} lấy một điểm gốc trên hình ảnh rồi đến nơi nó nên đặt. {{ui:Xoay}} nhận một góc tính bằng độ, quanh tâm hình ảnh. {{ui:Độ mờ}} làm mờ nó để các đường của bạn nổi bật. {{ui:Khóa}} giữ nó không bị di chuyển khi bạn vẽ; một hình ảnh bị khóa vẫn cho phép bạn đổi độ mờ và ẩn nó. Mỗi thay đổi là một bước hoàn tác.

## Nhiều hình ảnh, nhiều tầng

Một hình ảnh thuộc về tầng mà nó được đặt lên, và hiển thị trên mặt bằng của tầng đó và mặt bằng trần. Nhấp một hình ảnh để làm việc với nó, hoặc chọn nó trong danh sách. {{ui:Ẩn}} tắt nó mà không xóa; {{ui:Xóa}} (hoặc {{key:Delete}}) gỡ nó khỏi mô hình.

## Hình ảnh trong khung nhìn 3D

Mỗi hình ảnh cũng đứng trong khung nhìn 3D như một mặt phẳng phẳng: một hình ảnh trên mặt bằng nằm trên tầng của nó, một hình ảnh trên mặt phẳng đứng đứng trên đường mặt cắt của nó. Nó được vẽ phủ lên mô hình mà không che khuất, và mô hình che phần hình ảnh nằm phía sau nó. Các hình ảnh chồng lên nhau được sắp xếp theo khoảng cách. Độ mờ, Ẩn, Khóa và Xóa hoạt động như nhau, và {{ui:Hiển thị trong 3D}} tắt mọi mặt phẳng chỉ trong khung nhìn 3D. Một tầng chứa tối đa 8 hình ảnh, để giữ các khung nhìn nhanh.

## Hình ảnh trên mặt phẳng đứng

Dưới {{ui:Đặt trên}} chọn {{ui:Mặt phẳng đứng (đường cắt)}}, rồi {{ui:Chèn hình ảnh…}}. Nhấp hai đầu của một đường trên mặt bằng (đầu mặt tường bắt điểm), hoặc chọn một đường mặt cắt đã đặt tên của tầng trong {{ui:Trên một đường mặt cắt}} và không cần nhấp. Hình ảnh đứng trên tầng, phía trên đường đó, rộng bằng đường. Đặt {{ui:Rộng}}, vị trí {{ui:Dọc theo đường}} và {{ui:Chiều cao trên cốt}} bằng cách nhập; {{ui:Xoay}} quay nó trong mặt phẳng của chính nó. Một hình ảnh đứng không được vẽ dưới mặt bằng; mặt bằng hiển thị đường của nó khi bạn làm việc trên đó. BimCraft chưa có cửa sổ mặt cắt 2D tương tác: mặt cắt và mặt đứng được vẽ trên các tờ, và hình ảnh chưa được in trong các khung nhìn tờ đó.

## In

{{ui:Chế độ in}} trên một mặt bằng ghi các hình ảnh của tầng vào PDF dưới bản vẽ, ở tỷ lệ, góc xoay và độ mờ của chúng, được cắt theo tờ; một hình ảnh bị ẩn vẫn nằm ngoài. Một JPEG được đưa vào nguyên trạng; các hình ảnh khác được hạ xuống 200 dpi trên tờ trước.

## Giữ bên cạnh mô hình

Các byte của hình ảnh không được ghi vào văn bản IFC. Mô hình tham chiếu từng hình ảnh theo tên (một IfcDocumentReference such as pictures/<id>.png) và các byte đi cùng trong một gói dự án. Dùng {{ui:Lưu thành gói…}} (hoặc {{ui:Lưu thành IFC}} và chọn nó): bạn nhận được một tệp .ccbundle với mô hình và các hình ảnh của nó, IFC vẫn nhỏ và các chỉnh sửa vẫn nhanh. Mở .ccbundle và các hình ảnh được khôi phục.

Một tệp .ifc thuần không thể chứa hình ảnh mà không trở nên lớn. Khi bạn lưu một tệp như vậy, BimCraft cho biết có bao nhiêu hình ảnh được giữ bên ngoài và đề xuất một gói, hoặc một IFC thuần nhúng các hình ảnh tối đa 512 KB và bỏ các hình ảnh khác. Một tệp .ifc thuần được mở mà không có gói của nó sẽ hiển thị các hình ảnh đó là thiếu và Vấn đề liệt kê chúng; hãy mở tệp .ccbundle mà chúng đã được lưu trong đó. Các tệp được lưu bởi phiên bản đầu tiên, với hình ảnh bên trong IFC, vẫn mở được, và việc lưu gói sẽ chuyển hình ảnh của chúng ra ngoài. Một hình ảnh được giữ nguyên tới 6 MB; một hình ảnh lớn hơn được giảm kích thước trước, và bạn được thông báo. Các chương trình khác mở mô hình và bỏ qua hình ảnh. Một hình ảnh bạn chưa chia tỷ lệ được liệt kê trong Vấn đề như một ghi chú.

## Trong các tờ mặt cắt và mặt đứng

Một hình ảnh trên mặt phẳng đứng (chọn {{ui:Đứng}} trong bảng hình ảnh và nhấp hai đầu của một đường, hoặc đặt nó trên một đường mặt cắt đã đặt tên) được in trong các khung nhìn tờ nhìn thẳng vào nó. Một mặt cắt hiển thị hình ảnh đứng trên đường cắt của nó, hoặc hình ảnh được đặt trên đường mặt cắt đó theo tên. Một mặt đứng hiển thị mọi hình ảnh đứng mà mặt phẳng của nó hướng về nó. Hình ảnh được vẽ dưới các đường của khung nhìn, ở tỷ lệ của khung nhìn, được cắt theo khung nhìn, và giữ độ mờ của nó. Mở {{ui:Tờ…}} để xem; PDF của tờ mang nó dưới dạng ảnh. Nhìn từ phía sau, một hình ảnh bị lật ngược, như trong 3D. Các hình ảnh bị ẩn được bỏ qua.
