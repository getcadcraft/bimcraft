---
title: Xem bản vẽ DWG hoặc DXF ở dạng 3D
summary: Chuyển không gian mô hình của bản vẽ sang 3D để xem cao độ, độ dày, mặt 3D, lưới và khối, xoay quanh nó, nhấp một đối tượng để xem thuộc tính, và xem những gì chưa được vẽ.
keywords: 3d, dwg, dxf, bản vẽ, không gian mô hình, xoay quanh, mặt cắt, cắt, cắt xén, chọn, thuộc tính, handle, cao độ, độ dày, đùn, 3dface, polyface, lưới, polyline 3d, khối, khung nhìn, phối cảnh, song song, phạm vi, acis, khối đặc
from: a0c6cd17
---

## Bạn sẽ làm gì

Xem không gian mô hình của một bản vẽ ở dạng 3D. Đường thẳng và polyline nằm ở chiều cao thật của chúng, các đối tượng có độ dày đứng lên như tường, và mặt 3D, lưới và khối 3D hiển thị dưới dạng bề mặt mà bạn có thể xoay quanh. Các tờ vẫn là 2D.

## Các bước

1. Mở một DWG hoặc DXF. Xem [Xem bản vẽ DWG hoặc DXF](topic:view-dwg). Nó mở ở 3D trừ khi {{ui:Cài đặt}} › {{ui:BimCraft}} › **Bản vẽ mở ở** ghi {{ui:Mô hình (2D)}}.
2. Từ 2D, nhấp {{ui:3D}} trong thanh phía trên bản vẽ, hoặc nhấn {{key:3}}.
3. Chờ một chút lần đầu tiên: dòng trạng thái ghi "Đang dựng bản vẽ ở 3D…", rồi số đường và số mặt nó đang hiển thị.
4. Xoay, di chuyển và thu phóng (xem bảng bên dưới).
5. Nhấp một khung nhìn trong thanh thứ hai: {{ui:Iso}}, {{ui:Trên}}, {{ui:Dưới}}, {{ui:Trước}}, {{ui:Sau}}, {{ui:Trái}} hoặc {{ui:Phải}}.
6. Nhấp {{ui:Phối cảnh}} để chuyển giữa khung nhìn phối cảnh và khung nhìn song song.
7. Nhấp {{ui:Phạm vi}} hoặc nhấn {{key:F}} để xem lại toàn bộ bản vẽ.
8. Nhấp {{ui:3D}} lần nữa, nhấn {{key:3}}, hoặc nhấp {{ui:Mô hình}} hoặc một thẻ tờ để quay lại 2D.

## Bạn sẽ thấy gì

- Không gian mô hình ở 3D, trục Z hướng lên, với màu của chính bản vẽ. Các mặt sáng hơn cạnh của chúng một chút.
- Các lớp bạn tắt trong {{ui:Lớp}} cũng biến mất khỏi khung nhìn 3D.
- Ở bên phải: số đường và số mặt, kích thước bản vẽ theo X, Y và Z, **Chỉ có trong khung nhìn 2D** và **Chưa vẽ**.

## Cắt bằng mặt phẳng cắt

Nhấp {{ui:Mặt cắt}} trên thanh 3D, hoặc nhấn {{key:X}}. Thanh bên dưới hoạt động như với mô hình IFC (xem [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)): cắt từ {{ui:Trên}}, {{ui:Trước}} hoặc {{ui:Bên}}, kéo hoặc gõ độ lệch — ở đây tính bằng đơn vị riêng của bản vẽ — và {{ui:Đảo}} để giữ phía bên kia. Phần mà mặt phẳng cắt đi không thể được chọn. Quay lại 2D sẽ gỡ bỏ phần cắt.

## Xem thuộc tính của đối tượng

Nhấp một đối tượng trong khung nhìn 3D. Nó chuyển sang màu chọn và {{ui:Thuộc tính}} hiển thị những gì tệp ghi về nó: loại, lớp, màu, kiểu đường và handle, rồi dữ liệu riêng của nó, ví dụ điểm đầu, điểm cuối và chiều dài của một đường, tâm và bán kính của một đường tròn, các góc của một mặt 3D, hoặc khối tham chiếu, khối, điểm chèn, tỷ lệ, góc xoay và giá trị thuộc tính của một tham chiếu khối.

- Một tham chiếu khối được chọn như một tổng thể, cùng các khối lồng bên trong nó.
- Một cú nhấp cách đường vài pixel sẽ chọn đường đó.
- Giữ {{key:Mod}} và nhấp để chọn thêm đối tượng, hoặc để bỏ một đối tượng; khi đó {{ui:Thuộc tính}} đếm chúng theo loại.
- {{key:Esc}}, hoặc nhấp vào khoảng trống, sẽ xóa vùng chọn.
- Các đối tượng trên lớp bạn đã tắt không thể được chọn.

## Di chuyển xung quanh

:::mouse
| Để | Làm như sau |
|---|---|
| Xoay | Kéo bằng nút giữa, hoặc bằng nút trái |
| Di chuyển | Kéo bằng nút phải, hoặc giữ {{key:Shift}} và kéo |
| Thu phóng | Cuộn bánh xe; nó thu phóng về phía vật dưới con trỏ |
| Xem tất cả | {{ui:Phạm vi}} hoặc {{key:F}} |
| Nhìn từ một phía | Nhấp một mặt, cạnh hoặc góc của khối xem ở góc dưới bên phải |
:::

Khối xem có thể được thay bằng một biểu tượng trục, hoặc ẩn đi, trong {{ui:Cài đặt}}. Xem [Cài đặt BimCraft](topic:settings).

:::mac mouse
Trên bàn di chuột, vuốt bằng hai ngón để xoay, giữ {{key:Shift}} và vuốt để di chuyển, và chụm để thu phóng.
:::

:::touch
Kéo bằng một ngón để xoay. Chụm bằng hai ngón để thu phóng, và di chuyển chúng cùng lúc để di chuyển khung nhìn.
:::

## Những gì được vẽ ở 3D

| Trong bản vẽ | Ở 3D |
|---|---|
| Đường thẳng, polyline 3D | Ở chiều cao thật của chúng |
| Polyline, đường tròn, cung, elip | Trong mặt phẳng riêng, ở cao độ của chúng, nghiêng khi bản vẽ nghiêng chúng |
| Độ dày trên đường thẳng, polyline, đường tròn và cung | Tường có chiều cao đó; đường tròn được đóng kín trên và dưới |
| Mặt 3D, lưới polyface, lưới đa giác | Bề mặt tô bóng với các cạnh nhìn thấy |
| Khối | Được đặt, xoay và đổi tỷ lệ trong 3D, cả khối lồng nhau |
| Tô bóng (hatch) | Đường viền của chúng |
| Nét 2D thuần túy | Phẳng, nơi nó được vẽ |

## Chỉ có trong khung nhìn 2D

Văn bản, văn bản nhiều dòng và các thuộc tính hiển thị của khối được vẽ ở 3D, trong mặt phẳng riêng của chúng ở chiều cao riêng, và một cú nhấp lên chúng sẽ chọn chúng. Polyline rộng thể hiện độ rộng của nó như một dải phẳng. Đa đường dẫn (multileader), ảnh và mẫu tô bóng được đếm trong **Chỉ có trong khung nhìn 2D**: xem chúng trên thẻ {{ui:Mô hình}} hoặc các tờ.

## Chưa vẽ

Các khối đặc và bề mặt được lưu dưới dạng khối ACIS (khối 3D, khối, vùng và bề mặt) và lưới chia nhỏ (subdivision) được liệt kê trong **Chưa vẽ** cùng số lượng của chúng. Chúng bị bỏ qua, không được đoán.

## Lỗi thường gặp

- **Mọi thứ trông phẳng.** Bản vẽ là 2D: các đường của nó không có chiều cao. Nhấp {{ui:Trước}} để kiểm tra; một bản vẽ phẳng hiển thị như một đường.
- **Mô hình khối đặc không hiển thị gì.** Các khối đặc được tạo bằng bộ dựng khối là khối ACIS, được liệt kê trong **Chưa vẽ**. Hãy xuất mô hình dưới dạng IFC hoặc mặt 3D từ chương trình đã tạo ra nó.
- **Bản vẽ là một cụm nhỏ ở giữa.** Một thứ gì đó ở xa trong không gian mô hình, như bản sao cũ của một mặt bằng, làm phạm vi lớn lên. Hãy thu phóng bằng bánh xe ở nơi bạn muốn xem.

## Tiếp theo

- [Làm việc với lớp và tờ](topic:dwg-layers-sheets)
- [Cắt mô hình IFC bằng mặt phẳng cắt](topic:section-plane)
