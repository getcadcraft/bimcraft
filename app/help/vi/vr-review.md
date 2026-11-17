---
title: Xem lại mô hình bằng tai nghe VR
summary: Đi quanh mô hình IFC ở kích thước thật bằng tai nghe VR, xoay, đo, cắt mở, đặt vấn đề BCF kèm ảnh, xem mô hình dưới dạng mô hình để bàn và gặp những người khác trong phiên trực tiếp.
keywords: vr, thực tế ảo, tai nghe, webxr, xr, nhập vai, quest, oculus, vive, index, pico, đi qua, đi bộ, dịch chuyển tức thời, rà soát thiết kế, phối hợp, rà soát, đo, mặt cắt, cắt, vấn đề, các vấn đề, bcf, mặt bàn, mô hình tỷ lệ, hiện diện, hình đại diện, trực tiếp, cùng nhau
from: 8994b36d
---

{{ui:VR}} trên thanh công cụ đưa bạn vào trong mô hình bằng tai nghe VR, ở kích thước thật. Bạn đứng tại vị trí camera của khung nhìn 3D, trên sàn ở phía dưới, hướng về cùng một phía. Tai nghe hiển thị những gì khung nhìn 3D hiển thị: tầng, cấu kiện và mô hình đang ẩn vẫn ẩn, vật liệu đã tô màu vẫn giữ nguyên. Không có gì được tải lên: trình duyệt vẽ mô hình trên máy tính này (hoặc trong trình duyệt của chính tai nghe).

## Yêu cầu

- Một tai nghe mà trình duyệt điều khiển được (WebXR): trình duyệt riêng của tai nghe độc lập, hoặc Chrome hoặc Edge trên PC đã kết nối tai nghe.
- Một mô hình IFC đang mở, trên trang an toàn (https), như trên trang web này.

Khi không có tai nghe, {{ui:VR}} bị mờ và cho biết lý do.

## Bắt đầu

1. Đặt khung nhìn 3D ở vị trí bạn muốn bắt đầu: trong một phòng, hoặc bên ngoài nhìn vào tòa nhà.
2. Nhấp {{ui:VR}} trên thanh công cụ.
3. Đeo tai nghe.

Menu nằm ở mu bàn tay trái. Hướng tay cầm phải vào menu và bóp cò để chọn một nút. (Khi chỉ dùng một tay, menu nổi ở phía trước vị trí bạn đã bắt đầu.)

## Di chuyển quanh

- **Nhảy:** trong {{ui:Di chuyển}}, hướng tia vào một sàn và bóp cò; bạn sẽ đáp xuống đó. Hoặc đẩy cần về phía trước để nhắm, rồi thả cần để nhảy. Bạn chỉ có thể đáp xuống sàn, bản sàn và mặt đất (các bề mặt hướng lên), không bao giờ đáp xuống tường.
- **Xoay:** đẩy cần sang trái hoặc phải: bạn xoay 30° mỗi lần.
- **Đi bộ:** trong khu vực chơi của bạn, chỉ cần đi bộ.

## Đo

Chọn {{ui:Đo}}, rồi bóp cò tại hai điểm. Khoảng cách giữa hai điểm hiển thị bằng mét. Điểm gần góc sẽ bắt vào góc.

## Cắt mở

Chọn {{ui:Mặt cắt}} và bóp cò trên một bề mặt:

- trên tường (hoặc bất kỳ thứ gì không phải sàn): mọi thứ nằm giữa bạn và bề mặt đó bị cắt bỏ, để bạn nhìn vào được bên trong. Cách này hiệu quả nhất khi đứng bên ngoài, hoặc nhìn ngang qua một phòng;
- trên sàn, từ phía trên: một mặt cắt mặt bằng ở độ cao 1.2 m trên sàn đó, để các bức tường hiển thị phần dưới của chúng.

{{ui:Xóa}} gỡ bỏ mặt cắt và các phép đo. Nếu một [mặt phẳng cắt](topic:section-plane) đang cắt mô hình khi bạn bắt đầu, tai nghe sẽ bắt đầu cùng mặt phẳng đó.

## Đặt một vấn đề

Chọn {{ui:Vấn đề}} và bóp cò tại vị trí có vấn đề. Một ghim đánh số sẽ đánh dấu vị trí đó, và vấn đề được đưa vào thẻ {{ui:Vấn đề}} dưới dạng một chủ đề BCF, kèm ảnh của những gì bạn thấy và camera tại vị trí bạn đứng, theo tọa độ riêng của mô hình. Lưu chúng cùng với các [vấn đề](topic:issues-bcf) khác dưới dạng tệp BCF; các công cụ phối hợp khác sẽ mở chúng đúng tại cùng khung nhìn.

Thêm bình luận cho vấn đề sau khi bạn thoát VR, trong thẻ Vấn đề: nhập trong tai nghe chưa xây dựng.

## Xem như mô hình để bàn

{{ui:Mặt bàn}} thu nhỏ mô hình vừa với một chiếc bàn trước mặt bạn; đi vòng quanh, hoặc xoay bằng cần. {{ui:Kích thước thật}} đưa bạn trở lại vị trí cũ.

## Cùng người khác, trực tiếp

Trong một [phiên trực tiếp](topic:work-live), mọi người trong VR nhìn thấy những người khác dưới dạng một đầu và hai bàn tay cùng màu của họ, kèm tên và một chấm ở nơi mỗi người đang chỉ. Các chỉnh sửa của bất kỳ ai đều đến tai nghe của bạn trong thời gian ngắn. Những người ngồi tại bàn làm việc chưa được hiển thị trong tai nghe.

## Thoát

Chọn {{ui:Thoát VR}} (hoặc tháo tai nghe và kết thúc tại đó). Khung nhìn 3D trên màn hình sẽ di chuyển đến vị trí đầu bạn đã đứng.

:::note
Đã thử nghiệm bằng trình giả lập tai nghe, chưa thử trên mọi tai nghe. Một mô hình lớn có thể làm tai nghe bị giật: hãy ẩn các tầng hoặc mô hình không cần thiết trước ([ẩn và cô lập](topic:hide-and-isolate)).
:::
