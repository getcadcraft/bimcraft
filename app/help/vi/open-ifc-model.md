---
title: Mở mô hình IFC và xem xung quanh trong 3D
summary: Mở tệp IFC, xoay, di chuyển khung nhìn và thu phóng, và dùng Vừa khung, Trên, Trước và Bên để định hướng.
keywords: ifc, 3d, xoay, di chuyển khung nhìn, thu phóng, vừa khung, khung nhìn trên, khung nhìn trước, khung nhìn bên, điều hướng, khối xem, camera
from: 68b460dd
---

## Bạn sẽ làm gì

Mở một mô hình IFC, di chuyển quanh nó trong 3D và chuyển tới các khung nhìn tiêu chuẩn. Khoảng năm phút.

Bạn cần một tệp `.ifc`. Hầu hết chương trình BIM đều xuất được một tệp; trong Revit đó là **File > Export > IFC**. Xem [Đưa tệp dự án vào 3D qua IFC](topic:rvt-to-ifc).

## Các bước

1. Nhấp {{ui:Choose a file}} (hoặc vùng thả ở góc trên bên trái).
2. Chọn tệp `.ifc` của bạn và xác nhận.
3. Đợi dòng trạng thái hoàn tất. Lần đầu nó hiện "Đang khởi động IFC engine…", rồi "Đang đọc mô hình…" và "Đang dựng hình học: … trên … cấu kiện".
4. Xem mô hình: nó mở ra ở góc nhìn ba phần tư, vừa khung màn hình.
5. Nhấp {{ui:Top}} trên thanh công cụ phía trên mô hình để nhìn thẳng xuống.
6. Nhấp {{ui:Front}} để nhìn mặt trước, rồi {{ui:Side}} để nhìn từ bên hông.
7. Nhấp {{ui:Fit}}, hoặc nhấn {{key:F}}, để quay lại góc nhìn ba phần tư của toàn bộ mô hình.

## Bạn sẽ thấy gì

- Mô hình ở giữa, với các cạnh tối mỏng để có vẻ như bản vẽ.
- Bảng {{ui:File}} bên trái: tên tệp, kích thước, lược đồ IFC (ví dụ IFC2X3 hoặc IFC4), tên dự án, giai đoạn, chương trình nó được xuất từ, tác giả, ngày xuất, và số lượng cấu kiện và tam giác.
- Các danh sách {{ui:Storeys}} và {{ui:Elements}} bên dưới.
- Dòng trạng thái: "Đã mở *tên tệp*: *n* cấu kiện trong *s* s".

## Di chuyển quanh mô hình

:::mouse
| Để | Làm thế này |
|---|---|
| Xoay | Kéo bằng nút trái |
| Di chuyển khung nhìn | Kéo bằng nút phải, hoặc giữ {{key:Shift}} (hoặc {{key:Mod}}) và kéo bằng nút trái |
| Thu phóng | Lăn con lăn chuột, hoặc kéo bằng nút giữa |
| Xem tất cả | Nhấn {{key:F}} hoặc nhấp {{ui:Fit}} |
:::

:::mac mouse
Trên bàn di chuột (trackpad): kéo bằng một ngón đang nhấn để xoay; giữ {{key:Shift}} hoặc {{key:Mod}} và kéo để di chuyển khung nhìn; cuộn bằng hai ngón hoặc chụm để thu phóng. Nhấp bằng hai ngón là nhấp chuột phải, và bạn có thể kéo bằng nó để di chuyển khung nhìn, nhưng {{key:Shift}} và kéo thì dễ hơn.
:::

:::touch
| Để | Làm thế này |
|---|---|
| Xoay | Kéo bằng một ngón |
| Thu phóng | Chụm bằng hai ngón |
| Di chuyển khung nhìn | Di hai ngón cùng nhau |
| Xem tất cả | Chạm {{ui:Fit}} |
:::

Việc xoay luôn quay quanh một điểm ở giữa mô hình. Di chuyển khung nhìn sẽ dời điểm đó, nên sau một lần di chuyển dài, việc xoay có thể thấy lệch tâm: nhấp {{ui:Fit}} để đặt lại.

## Tô bóng, cạnh hay khung dây

Ba nút nhỏ ngay phía trên khối xem chọn cách vẽ mô hình: {{ui:Shaded}}, {{ui:Shaded with edges}} (mặc định) và {{ui:Wireframe}}. Chúng cũng là lệnh (Chế độ xem trong các menu và danh sách Tùy chỉnh), nên chúng có thể có phím riêng. {{ui:Plan}}, {{ui:Split}} và {{ui:3D}} nằm trong hàng {{ui:View}} của thanh công cụ.

## Lỗi thường gặp

- **Mong đợi khung nhìn đặt tên.** BimCraft có bốn khung nhìn cố định ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), khối xem ở góc dưới bên phải và xoay tự do. Nó không lưu khung nhìn.
- **Tìm mặt bằng và mặt cắt.** Không có bản vẽ 2D mặt bằng hay hộp cắt trong bản dựng này. Hãy cắt mô hình bằng một mặt phẳng {{ui:Section}} ([Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)), hoặc tắt các tầng: [Hiện và ẩn tầng, không gian và cạnh](topic:storeys-and-spaces).
- **Mở tệp dự án và mong đợi 3D.** Tệp dự án mở như một thẻ tệp. Hãy xuất IFC trước.
- **Mở `.ifczip`.** Giải nén nó, hoặc xuất `.ifc` thuần.
- **Mô hình rất lớn làm thẻ chậm hoặc treo.** Xem [Trình duyệt, thiết bị và bộ nhớ](topic:platforms).

## Tiếp theo

[Chọn một cấu kiện và đọc thuộc tính của nó](topic:inspect-element).
