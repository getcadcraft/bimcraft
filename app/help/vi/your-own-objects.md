---
title: Đưa đối tượng và tệp họ của bạn vào Thư viện
summary: Đọc tệp họ (.rfa) cùng tệp IFC, DWG, DXF, glTF hoặc OBJ trong thẻ Thư viện, đặt chúng như mọi mục thư viện khác, và giữ trong {{ui:My objects}}, một danh sách riêng chỉ bạn thấy.
keywords: rfa, họ, các họ, thư viện họ, đối tượng riêng, đối tượng của tôi, danh sách riêng, thư viện riêng, nhập đối tượng, nội dung nhà sản xuất, đối tượng bim, đối tượng ifc, gltf, obj, khối dwg, giữ, chuyển, di chuyển
from: 886261f8
---

## Bạn sẽ làm gì

Đưa các đối tượng bạn đã có vào BimCraft: một thư viện họ từ Revit, tệp IFC hoặc DWG nhà sản xuất tải về, hoặc một lưới từ phần mềm mô hình khác. Bạn đọc tệp trong thẻ {{ui:Library}}, đặt đối tượng vào mô hình như một cấu kiện IFC đầy đủ, và nếu muốn dùng lại sau này, giữ nó trong {{ui:My objects}}.

## Các bước

1. Mở một mô hình IFC, hoặc bắt đầu một công trình mới.
2. Bấm thẻ {{ui:Library}} cạnh {{ui:Properties}}.
3. Bấm {{ui:Files…}}, rồi {{ui:Choose a file…}}. Chọn một tệp hoặc nhiều tệp cùng lúc: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` hoặc `.csv`. Hoặc bấm {{ui:Choose a folder…}} để đọc cả một thư mục và các thư mục bên trong (tối đa 200 tệp trong một lần).
4. Bấm một thẻ để xem những gì đã được đọc: bản xem trước mặt bằng, tên, nhà sản xuất và model, kích thước và ghi chú.
5. Bấm {{ui:Place in plan}} hoặc {{ui:Place in model}} để đặt nó.
6. Để dùng lại trong các dự án khác, bấm {{ui:Keep in my objects}}. Khi đã đọc nhiều tệp, {{ui:Keep all in my objects}} giữ tất cả trong một lần.
7. Sau đó, bấm {{ui:My objects}} trong thẻ Thư viện để tìm chúng. Chúng được đặt, thay thế và cập nhật như mọi mục thư viện khác.

Các tệp được đọc trong thẻ này. Không có gì được tải lên cho đến khi bạn chọn {{ui:Keep in my objects}}.

## Đọc được gì từ mỗi loại tệp

| Tệp | Bạn nhận được |
|---|---|
| IFC | Mỗi loại cấu kiện là một đối tượng với hình dạng 3D thực, lớp IFC và các bộ thuộc tính |
| glTF, GLB, OBJ | Một đối tượng với hình dạng 3D thực dưới dạng lưới. Đặt đơn vị và chiều lên trước. |
| DWG, DXF | Mỗi khối là một đối tượng với bản vẽ mặt bằng và thuộc tính |
| Tệp họ (`.rfa`) | Tên họ, danh mục, nhà sản xuất, model, tham số và các kiểu của nó. **Không đọc hình dạng 3D:** một hộp có Chiều rộng, Chiều sâu và Chiều cao của họ được dùng thay thế. |
| CSV | Một đối tượng cho mỗi dòng: tên, kích thước và dữ liệu, vẽ dưới dạng hộp |

## Tệp họ và hình dạng 3D của chúng

Hình dạng 3D bên trong tệp `.rfa` được lưu theo một định dạng không có tài liệu, nên BimCraft đọc dữ liệu của họ và không đoán hình học của nó. Thẻ nói rõ điều đó: "Chưa đọc hình học từ họ này; một hộp được dùng thay thế."

Để đưa một họ vào với hình dạng thực, hãy xuất nó từ chương trình đã tạo ra nó (Revit):

1. Mở họ, hoặc một dự án có họ đã được đặt trong đó.
2. Chọn **File > Export > IFC**. Xem [các cài đặt xuất cho kết quả mở tốt nhất ở đây](topic:rvt-to-ifc).
3. Trong BimCraft, đọc tệp `.ifc` bằng {{ui:Files…}}. Mỗi kiểu họ đến như một đối tượng riêng, với hình dạng và các bộ thuộc tính.

Nhiều nhà sản xuất cung cấp tệp IFC hoặc DWG tải về bên cạnh tệp họ. Các tệp đó được đọc trực tiếp.

## Các kiểu của họ

Một họ có nhiều kiểu đến như một mục với một lựa chọn {{ui:Variant}}, mỗi kiểu là một biến thể. Mỗi biến thể có các giá trị khác nhau giữa các kiểu, và có hộp riêng khi kiểu có Chiều rộng và Chiều sâu. Một họ có một kiểu là một mục đơn giản được điền bằng các giá trị của kiểu đó.

Một số họ giữ các kiểu trong một danh mục kiểu: một tệp `.txt` cùng tên nằm cạnh tệp họ. Chọn cả hai cùng lúc, hoặc chọn thư mục, và các dòng của danh mục trở thành các biến thể.

## Dữ liệu họ trên một hình dạng thực

Nếu một thư mục có một tệp họ và một tệp IFC, glTF hoặc OBJ cùng tên (`Chair.rfa` và `Chair.ifc`), hãy chọn cả hai cùng lúc hoặc chọn thư mục. BimCraft tạo một mục: tệp họ cho tên, nhà sản xuất, model, tham số và các kiểu, còn tệp kia cho hình dạng 3D thực. Ghi chú cho biết hình dạng đến từ tệp nào. Một hình dạng được dùng cho mọi kiểu.

Khi tệp họ có lưu một ảnh, chi tiết của mục hiển thị ảnh đó bên dưới bản vẽ mặt bằng. Ảnh chỉ hiển thị ở đó; nó không được giữ cùng mục.

## Đối tượng riêng

{{ui:My objects}} là danh sách riêng của bạn trong Thư viện. Chỉ bạn thấy được những gì có trong đó: nó không nằm trong thư viện công khai, không có trong tìm kiếm, và không hiển thị cho nhóm của bạn. Nó theo tài khoản của bạn, nên cùng các đối tượng sẽ có trên một máy tính khác sau khi bạn đăng nhập vào thư viện.

- Bạn cần đăng nhập vào thư viện để giữ một đối tượng. Xem [đăng nhập vào thư viện](topic:library-credits).
- Giữ một đối tượng sẽ gửi riêng đối tượng đó lên tài khoản của bạn. Cho đến khi đó, nó vẫn ở trên máy tính của bạn.
- {{ui:Remove from my objects}} gỡ một đối tượng khỏi danh sách. Các bản sao đã đặt trong bản vẽ vẫn còn.
- Để chia sẻ một đối tượng với mọi người, hãy tải nó lên thư viện công khai thay vì, theo một giấy phép bạn chọn.

:::note
Đối tượng riêng đang được thử nghiệm và có thể chưa mở cho tài khoản của bạn. Nếu nguồn bị thiếu, hoặc hiển thị "Đối tượng riêng chưa được mở cho tài khoản này", bạn vẫn có thể đọc và đặt các tệp của riêng mình bằng {{ui:Files…}}; chúng được lưu bên trong mô hình của bạn.
:::

## Lỗi thường gặp

- **Mong đợi hình dạng thực của họ từ một `.rfa`.** Chỉ dữ liệu được đọc. Hãy xuất IFC để lấy hình dạng.
- **Hai mục thay vì một.** Một họ và tệp hình dạng của nó chỉ được ghép khi tên khớp chính xác, trừ phần đuôi, và chúng nằm trong cùng một thư mục.
- **Một lưới đến lớn gấp nghìn lần hoặc nằm nghiêng.** Đặt {{ui:Units of the file}} và {{ui:Up axis of a mesh}} trong {{ui:Files…}} trước khi chọn tệp.
- **"Không có dữ liệu họ" trên một tệp.** Đó là một dự án (`.rvt` lưu với đuôi khác) hoặc một mẫu họ, không phải họ. Xem [Đọc tệp dự án hoặc họ](topic:read-rvt-file).
- **Giữ nội dung bạn có thể không được phép lưu trữ.** Một số thư viện trả phí không cho phép sao chép ra ngoài dịch vụ của họ. Hãy kiểm tra điều khoản của nội dung mà bạn không tự làm.
