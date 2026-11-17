---
title: Đặt thiết bị và nội thất từ thư viện
summary: Tìm một mục trong Thư viện, một tệp hoặc bản vẽ đang mở, đặt nó trên một tầng của mô hình IFC với bản xem trước dạng bóng mờ, xoay nó, bắt nó vào tường và lưu.
keywords: di chuyển, move, xoay, rotate, kéo, drag, thư viện, library, librarycraft, đặt, place, chèn, insert, thiết bị, equipment, nội thất, furniture, khối, block, family, mục, item, danh mục, catalog, nội dung, content, kcl, csv, gltf, obj, rfa, dwg, loại IFC, ifc type
from: 3dad5d4b
---

## Bạn sẽ làm gì

Đặt một mục thư viện vào mô hình IFC: một bồn rửa, một bàn làm việc, một ghế. BimCraft ghi nó thành một phần tử IFC đúng nghĩa với một kiểu, nên mỗi bản sao của cùng một mục chia sẻ một bộ hình học, và dữ liệu, số mục và giấy phép của nó đi theo.

## Các bước

1. Mở một mô hình IFC.
2. Bấm thẻ {{ui:Thư viện}} cạnh {{ui:Thuộc tính}} ở bên phải, hoặc {{ui:Thư viện}} trên thanh công cụ phía trên mô hình.
3. Chọn một nguồn:
   - **Ký hiệu có sẵn**: ký hiệu mặt bằng ống nước chung đi kèm BimCraft theo Apache-2.0, dùng được khi ngoại tuyến. Kiểm tra kích thước của chúng trước khi thi công. Với ký hiệu điện mặt bằng và thiết bị điện IFC, dùng **Bản dựng › Điện**.
   - **Thư viện**: Thư viện CadCraft trên trang này. Mục công khai không cần đăng nhập.
   - **Tệp này**: các khối của một bản vẽ DWG hoặc DXF đang mở. Một khối động có trạng thái hiển thị được đưa ra mỗi trạng thái một lần, đặt tên như "Sink: Double bowl", mỗi cái chỉ vẽ các đối tượng của trạng thái đó.
   - **Tệp…**: một tệp DWG, DXF, IFC, glTF/GLB, OBJ, RFA hoặc CSV trên máy bạn. Nó được đọc trong thẻ này; không có gì được tải lên.
   - **Nguồn khác**: một thư viện khác dùng cùng định dạng nguồn. Thêm địa chỉ của nó một lần; nó được lưu trong trình duyệt này.
4. Tìm hoặc chọn một danh mục, rồi bấm một thẻ. Thẻ hiển thị bản xem trước mặt bằng, tên, hãng và mẫu, giấy phép và phiên bản.
5. Bấm {{ui:Đặt trên mặt bằng}} (trong khung nhìn Mặt bằng) hoặc {{ui:Đặt trong mô hình}} (trong khung nhìn 3D). Trong {{ui:Tách}}, nơi cả mặt bằng và khung nhìn 3D cùng hiển thị, nút là một nút tách: hành động chính là {{ui:Đặt trên mặt bằng}}, và mũi tên ở đầu bên phải mở một menu có {{ui:Đặt trong mô hình}}. Hoặc kéo thẻ, hay ảnh trong chi tiết của mục, lên mặt bằng hoặc khung nhìn 3D: mục được đặt tại nơi bạn thả. Với bút hoặc ngón tay, nhấn giữ thẻ một lúc, rồi kéo.
6. Chọn tầng trong thanh đặt. Trong khung nhìn 3D, các tầng phía trên nó được ẩn trong lúc đặt và khung nhìn chuyển lên trên cùng; trên mặt bằng, mặt bằng đã thể hiện tầng đó. Chọn {{ui:Đặt trong mô hình}} từ mặt bằng một mình sẽ mở khung nhìn 3D bên cạnh.
7. Di chuyển con trỏ qua mô hình: một hộp trong suốt cho biết mục sẽ đi đâu.
8. Nhấn {{key:R}} để xoay 90°. Nhấn {{key:Tab}} (hoặc {{ui:Bắt theo tường}}) để đặt lưng của nó áp vào bức tường gần nhất, quay về phòng.
9. Bấm để đặt. Hoặc nhập vị trí trong **X, Y (mm)**, ví dụ `1200, 3400`, rồi nhấn {{key:Enter}}.

Một đèn hoặc vật gì treo từ trên: đặt **Gắn** thành **Tại trần**. Đỉnh của mục khi đó nằm ở mặt dưới của trần tại điểm đó (hoặc ở cao độ của tầng nếu không có trần). Với mặt bằng trần trên khung nhìn mặt bằng, **Gắn** bắt đầu ở **Tại trần**.

10. Trả lời một câu hỏi: **số mục** (số trống tiếp theo được điền sẵn), số lượng và ghi chú. Nhấn {{key:Enter}}.
11. Đặt thêm, hoặc nhấn {{key:Esc}} để dừng.
12. Bấm {{ui:Lưu thành IFC}} để tải bản sao đã sửa.

## Mặt bằng hay mô hình

Nút đặt của Thư viện theo khung nhìn bạn đang ở, và đổi ngay khi bạn đổi khung nhìn (các nút {{ui:Mặt bằng}}, {{ui:Tách}} và {{ui:3D}}, phím tắt, hoặc khi mở một tệp). Mặt bằng hiển thị một nút, {{ui:Đặt trên mặt bằng}}; 3D hiển thị một nút, {{ui:Đặt trong mô hình}}; Tách hiển thị nút tách, với {{ui:Đặt trên mặt bằng}} là hành động chính và {{ui:Đặt trong mô hình}} trong menu. Cả hai cách dùng cùng thanh đặt và ghi cùng một phần tử IFC: con trỏ làm việc trong khung nhìn mặt bằng với một cách, và trong khung nhìn 3D với cách kia. Nhấn {{key:Esc}} bất cứ lúc nào để dừng.

Kéo một thẻ không có phím riêng: nút tách, hoặc nút thường, làm điều tương tự bằng bàn phím.

## Di chuyển hoặc xoay một mục đã đặt

Trong {{ui:Vẽ}}, chọn mục trên mặt bằng. Một tay cầm vuông hiển thị tại điểm chèn của nó và một tay cầm tròn bên cạnh.

- Kéo mục, hoặc tay cầm vuông của nó, để di chuyển. Nó bắt như công cụ Tường (đầu tường và mặt tường); {{key:Shift}} giữ nó vuông góc với vị trí cũ.
- Kéo tay cầm tròn để xoay theo bước 15°. Giữ {{key:Shift}} để xoay theo bước 1°.
- Nhấn {{key:R}} để xoay 90°.
- Trong **Thuộc tính** (cũng trong khung nhìn 3D), nhập **X**, **Y** và **Góc xoay (°)**, hoặc bấm **Xoay 90°**.

Mỗi lần di chuyển là một bước hoàn tác và được truyền trong Live TeamWork. Mục giữ số mục, dữ liệu thư viện và chiều cao của nó trên cốt. Chưa xây dựng: kéo nó trong khung nhìn 3D.

## Bạn sẽ thấy gì

- Mục trong mô hình, được chọn, với thuộc tính của nó ở bên phải: một hộp **Mục Thư viện** với giấy phép và ghi công, và các tập `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` và, với mục từ bản vẽ có thẻ, `CadCraft_SourceAttributes`.
- "Đã đặt: *item* (mục *n*)" trong danh sách thay đổi. {{key:Mod+Z}} hoàn tác nó.
- Dòng trạng thái: "Đã đặt *item* thành mục *n*."

## Điều nên biết

- Một số mục có nhiều cỡ hoặc tùy chọn: thẻ khi đó có lựa chọn **Biến thể**, và cái bạn chọn là cái được đặt. Xem [Đặt và thay một mục thư viện có biến thể](topic:library-variants).
- Mục không có thân 3D (ký hiệu 2D) được đặt bằng một hộp thay thế; bạn nhập chiều cao của nó khi được hỏi.
- Thêm bản sao giống nhau: chọn một mục đã đặt và dùng {{ui:Sao chép}} và {{ui:Dán}}, hoặc {{key:Mod+D}}. Xem [Sao chép, dán và nhân bản mục thư viện](topic:copy-paste).
- Để mọi lần đặt bắt đầu với bắt theo tường bật, bật **Bắt theo tường khi bắt đầu** trong [cài đặt BimCraft](topic:settings).
- Chiều dài được đổi sang đơn vị riêng của mô hình, dù chúng là đơn vị gì.
- **Entourage** (cây, bụi, người, ô tô) cũng có trong thư viện: tìm "tree", "person" hoặc "car" (tức là cây, người hoặc ô tô). Chúng do CadCraft vẽ (CC0) và giữ màu khi được đặt (thân cây màu nâu, lá màu xanh, cửa kính ô tô trong suốt), trong BimCraft và trong các chương trình BIM khác. Chúng hiển thị trong [ảnh kết xuất](topic:render).
- Với tệp IFC2X3, phần thân được ghi dưới dạng khối đặc có mặt phẳng; với IFC4 dưới dạng tập mặt tam giác. Cả hai đều mở được trong các công cụ IFC khác.
- Một bản vẽ (DWG hoặc DXF) không thể lưu tại đây, nên mục chỉ được đặt vào mô hình IFC. Dùng **Tệp này** trên một bản vẽ để xem các khối của nó sẽ thành gì.

## Mục bằng ngôn ngữ của bạn

Một mục có thể mang tên, mô tả và loại bằng ngôn ngữ khác. Khi nó có các thông tin đó bằng ngôn ngữ BimCraft đang đặt (Cài đặt › Chung › Ngôn ngữ), trang của mục hiển thị các thông tin đó, với tên do nhà sản xuất đặt bên dưới, và **Đặt** ghi tên bằng ngôn ngữ của bạn vào mô hình, nên bảng {{ui:Thiết bị}} liệt kê nó như vậy. Mục vẫn là cùng một mục: kiểm tra cập nhật và thay thế dựa trên chính mục, không bao giờ dựa trên tên của nó. Mục không có bản dịch giữ nguyên ngôn từ của chúng.

## Lỗi thường gặp

- **Thiếu nút đặt.** Không có mô hình IFC nào đang mở. Mở một mô hình trước.
- **Bóng mờ không theo con trỏ.** Con trỏ nằm ngoài vùng của mô hình, hoặc mặt phẳng tầng nằm ngoài khung nhìn. Bấm {{ui:Trên}}.
- **{{ui:Bắt theo tường}} báo không có tường.** Tầng không có tường trong IFC (một số tệp xuất đặt tường ở tầng khác). Chọn tầng đó, hoặc nhập X và Y.
- **Kích thước mục của một tệp sai.** Tệp không có đơn vị hoặc ghi sai đơn vị. Trong {{ui:Tệp…}} chọn đơn vị và đọc lại.

:::tip
Đặt cùng một mục hai lần chia sẻ một kiểu IFC, nên một mô hình có bốn mươi ghế chỉ lưu ghế một lần.
:::
