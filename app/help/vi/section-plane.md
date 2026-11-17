---
title: Cắt mô hình IFC bằng mặt phẳng cắt
summary: Cắt mô hình 3D từ trên, từ trước hoặc từ bên, hoặc chỉ giữ phần nằm trong hộp cắt hay khối gồm nhiều hộp có mặt nghiêng để xem bên trong; di chuyển đường cắt bằng cách kéo hoặc nhập số, đảo chiều, và chọn những gì đường cắt hiển thị.
keywords: mặt cắt, mặt phẳng cắt, hộp cắt, grip, kéo, lề, hộp vùng chọn, hộp cắt xén, cắt, cắt xén, lát cắt, mặt bằng cắt, mặt bằng sàn, mặt đứng, bên trong, nội thất, đảo, khoảng lệch, khối cắt, mặt cắt bậc thang, hình chữ L, nghiêng, mặt cắt nghiêng, mặt phẳng xiên, mặt phẳng phụ
from: 6315e71a
---

## Bạn sẽ làm gì

Cắt qua một mô hình IFC bằng một mặt phẳng để xem bên trong: từ trên để có mặt bằng, hoặc từ trước hoặc từ bên để có mặt cắt qua công trình.

## Các bước

1. Mở một mô hình IFC. Xem [Mở mô hình IFC và xem xung quanh trong 3D](topic:open-ifc-model).
2. Nhấp {{ui:Mặt cắt}} trên thanh công cụ, hoặc nhấn {{key:X}}. Mô hình được cắt ở nửa chiều cao, và một thanh xuất hiện dưới thanh công cụ.
3. Chọn hướng cắt: {{ui:Trên}}, {{ui:Trước}} hoặc {{ui:Bên}}. Trước và Bên cũng xoay khung nhìn để nhìn vào đường cắt.
4. Di chuyển đường cắt: kéo thanh trượt **Khoảng lệch**, hoặc nhập một khoảng cách bằng mét vào ô rồi nhấn {{key:Enter}}. Bạn cũng có thể nhập milimét, ví dụ `1200 mm`.
5. Nhấp {{ui:Đảo}} để giữ phía bên kia của đường cắt.
6. Nhấp một cấu kiện trên đường cắt để xem thuộc tính của nó.
7. Nhấp {{ui:Tắt}}, nhấp {{ui:Mặt cắt}} lần nữa, hoặc nhấn {{key:X}} để bỏ đường cắt.

## Hộp cắt

Nhấp {{ui:Hộp}} trên cùng thanh đó để chỉ giữ những gì nằm trong một hộp. Mỗi trục {{ui:X}}, {{ui:Y}} và {{ui:Z}} có hai thanh trượt: nơi hộp bắt đầu và nơi hộp kết thúc, tính bằng mét từ mép mô hình. Giá trị hiển thị bên cạnh chúng.

- {{ui:Hộp bao quanh vùng chọn}} đặt hộp bao quanh các cấu kiện bạn đã chọn và phóng to tới chúng. Nó chừa lại 300 mm ở mọi phía; đổi con số đó trong {{ui:Cài đặt}} › {{ui:BimCraft}} › {{ui:Khoảng trống quanh vùng chọn}}.
- Khi đã chọn cấu kiện, {{ui:Hiển thị}} › {{ui:Hộp cắt quanh vùng chọn}} hoặc {{key:Shift+X}} làm việc tương tự chỉ trong một bước, ngay cả khi chưa bật đường cắt nào.
- **Grip** trên hộp di chuyển nó bằng con trỏ: kéo ô vuông ở giữa một mặt để di chuyển mặt đó, ô ở giữa một cạnh để di chuyển hai mặt gặp nhau tại đó, hoặc ô ở một góc để di chuyển ba mặt. Các thanh trượt đi theo. Trong {{ui:Trên}}, một góc di chuyển hộp trên mặt bằng; trong {{ui:Trước}} hoặc {{ui:Bên}}, nó di chuyển trên mặt đứng.
- {{ui:Toàn bộ mô hình}} mở hộp ra cho toàn bộ mô hình trở lại.
- {{ui:Trên}}, {{ui:Trước}} hoặc {{ui:Bên}} quay lại một mặt phẳng.

## Khối gồm nhiều hộp, mặt nghiêng và mặt phẳng phụ

Một hộp không phải lúc nào cũng là hình dạng bạn cần: một mặt cắt bậc thang, một cánh hình chữ L, hoặc một đường cắt dọc theo bức tường không vuông góc với lưới.

1. Trong {{ui:Hộp}}, nhấp {{ui:Thêm hộp}}. Đường cắt giờ giữ những gì nằm trong **bất kỳ** hộp nào, nên hai hộp tạo thành khối bậc thang hoặc hình chữ L. Danh sách bên cạnh cho biết hộp nào các thanh trượt thay đổi ({{ui:Hộp 1}}, {{ui:Hộp 2}}…); {{ui:Xóa hộp này}} bỏ hộp được chọn. Một khối có tối đa 8 hộp.
2. Mở {{ui:Nghiêng và mặt phẳng}} để định hình hộp đã chọn:
   - Chọn một {{ui:Mặt}} và nhập mức nghiêng của nó về mỗi hướng, tính bằng độ (tối đa 80). Mặt xoay quanh điểm giữa của nó; các mặt khác giữ nguyên ở vị trí do thanh trượt đặt. {{ui:Thẳng góc}} đưa nó về lại.
   - {{ui:Thêm mặt phẳng}} cắt hộp bằng thêm một mặt phẳng. {{ui:Mặt}} là hướng mà phía bị cắt bỏ quay về, tính bằng độ từ X về phía Y; {{ui:Độ dốc}} là mức nó nghiêng lên (0 cho mặt đứng, 90 cho mặt nằm ngang); {{ui:Khoảng lệch}} là khoảng cách từ mặt phẳng tới điểm giữa hộp, tính bằng mét. × xóa nó. Một hộp chứa tối đa 6 mặt phẳng phụ.
3. Chỗ khối cắt qua các vật thể đặc, các mặt cắt được tô như trước, kể cả chỗ hai hộp gặp nhau tại một bậc.

:::tip
Nếu đường viền biến mất và không còn gì, các độ nghiêng hoặc mặt phẳng đã không để lại gì bên trong hộp đó; thanh sẽ báo như vậy. Nghiêng một mặt trở lại, hoặc đổi khoảng lệch của một mặt phẳng.
:::

## Công trình xoay trong khu đất

Nhiều mô hình đặt công trình lệch góc so với các trục của tệp (bắc thật, tọa độ dùng chung). Khi các bức tường chạy lệch góc, một mặt cắt mới bắt đầu vuông góc với công trình: {{ui:Trước}}, {{ui:Bên}} và hộp chạy theo các bức tường của chính nó, và {{ui:Thẳng với công trình}} trong thanh cắt được bật. Nhấp nó để về các trục của mô hình, và nhấp lần nữa để quay lại (dòng trạng thái cho biết công trình xoay bao nhiêu). Với **Cài đặt › BimCraft › Công trình xoay trong khu đất › Theo vị trí trong khu đất**, các mặt cắt và khung nhìn thay vào đó bắt đầu theo các trục của mô hình. Xem [Cài đặt](topic:settings).

## Bạn sẽ thấy gì

- **Trên** giữ phần nằm dưới đường cắt, nên bạn nhìn xuống các phòng. Khoảng lệch được tính từ đáy mô hình lên.
- **Trước** giữ phần nằm sau đường cắt, nhìn từ phía trước; **Bên** giữ phần nằm bên kia, nhìn từ bên hông. Khoảng lệch được tính từ mặt trước hoặc mặt bên của mô hình.
- Một đường viền mỏng có màu cho biết vị trí của mặt phẳng.
- Chỗ mặt phẳng cắt qua một bức tường, sàn hoặc vật thể đặc khác, mặt cắt được tô bằng màu tối, giống như mặt cắt đã vẽ. {{ui:Tô}} trên thanh bật và tắt việc này.
- Khối xem ở góc dưới bên phải xoay mô hình để nhìn đường cắt từ bất kỳ phía nào.
- Nhấp chọn những gì bạn nhìn thấy: phần đã bị cắt bỏ không thể chọn.

## Lỗi thường gặp

- **Không có gì thay đổi.** Đường cắt có thể nằm trên mái hoặc ngoài mô hình. Kéo thanh trượt, hoặc nhập khoảng lệch nhỏ hơn.
- **Khoảng lệch bị nhảy về.** Một khoảng cách vượt quá mô hình sẽ được đưa về cuối của nó, và dòng trạng thái sẽ báo.
- **Một vấn đề (issue) chỉ hiển thị một phần khối của tôi.** Một vấn đề (BCF) giữ một hộp cùng các mặt nghiêng và mặt phẳng của nó: hộp đầu tiên của khối. Dòng trạng thái sẽ báo khi bạn tạo vấn đề.
- **Mặt cắt bị rỗng.** {{ui:Tô}} trên thanh đang tắt: nhấp để tô các mặt cắt của tường, sàn và vật thể đặc khác.
- **Mặt cắt đã tô bị lốm đốm hoặc thiếu một mảnh.** Việc tô cần các khối kín; một cấu kiện có hình dạng trong tệp không kín (một tấm đơn, tán lá cây) sẽ không được tô thay vì bị phủ lên. Một cấu kiện gồm các phần khác màu (khung và kính của nó) được tô khi các phần của nó khép kín lại với nhau.
- **Thanh cắt ở đâu?** Nó nằm trên đầu khung nhìn 3D mà nó cắt: trên nửa 3D trong {{ui:Tách}}, và dưới thanh bản vẽ khi chỉ có {{ui:Mặt bằng}}. Trong khung nhìn ngắn, thanh sẽ cuộn.

## Tiếp theo

- [Hiển thị và ẩn tầng, không gian và cạnh](topic:storeys-and-spaces)
- [Xem bản vẽ DWG hoặc DXF trong 3D](topic:dwg-in-3d) — bản vẽ 3D có cùng mặt phẳng cắt
