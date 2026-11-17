---
title: Mở tệp dự án .pln và .pla
summary: BimCraft hiện làm gì với tệp .pln, .pla, .tpl và .bpn, và cách xuất IFC và DWG từ chúng để mô hình và bản vẽ mở được ở đây.
keywords: pln, pla, tpl, bpn, tệp dự án, kho lưu trữ, mẫu, bản sao lưu, xuất ifc, xuất dwg, bộ chuyển đổi, vùng, bố cục
from: 41fb921d
---

## Bạn sẽ làm gì

Đưa một dự án được lưu dưới dạng `.pln` (dự án), `.pla` (kho lưu trữ kèm thư viện), `.tpl` (mẫu) hoặc `.bpn` (bản sao lưu) vào BimCraft. Đây là các tệp riêng của Archicad.

## Hiện mở được gì

- **Bản thân tệp dự án chưa mở được.** Định dạng của chúng chưa được công bố, và BimCraft chưa đọc được. Khi bạn mở một tệp, BimCraft thông báo điều đó và chỉ tới trang này.
- **BimCraft kiểm tra vài byte đầu của tệp.** Dự án Archicad từ phiên bản 17 trở lên bắt đầu bằng cùng một chữ ký ngắn, nên BimCraft có thể xác định chắc chắn một tệp là dự án Archicad. Tệp mang tên Archicad nhưng không bắt đầu như vậy có thể đã bị đổi tên, bị hỏng, hoặc đến từ phiên bản cũ. Chữ ký không phân biệt được dự án, kho lưu trữ và mẫu.
- **Tệp xuất IFC mở đầy đủ**: mô hình 3D, tầng, vùng dưới dạng không gian, dữ liệu cấu kiện, bộ thuộc tính và phân loại, với mọi công cụ của BimCraft.
- **Tệp xuất DWG mở được** trong chế độ xem 2D, với các lớp và bố cục, và trong {{ui:3D}}. Để chỉnh sửa, dùng {{ui:Chỉnh sửa trong CadCraft}}.

Hoặc đưa cả dự án vào dưới dạng một tệp zip, cùng các chế độ xem, bố cục và nhóm thuộc tính: xem [Mở gói dự án](topic:open-project-bundle).

## Xuất IFC (mô hình)

1. Mở dự án trong Archicad.
2. Chọn **File > Save As**, rồi chọn **IFC** làm loại tệp.
3. Chọn một bộ chuyển đổi IFC (tên Archicad đặt cho một bộ thiết lập xuất IFC). Bộ **IFC4 Reference View** hoặc **IFC2X3 Coordination View 2.0** phù hợp với BimCraft. IFC4X3 cũng mở được.
4. Chọn nội dung xuất: toàn bộ dự án, hoặc chỉ các cấu kiện hiển thị trên các tầng bạn đang xem.
5. Lưu, rồi nhấp {{ui:Chọn tệp}} trong BimCraft và chọn tệp `.ifc`.

Kiểm tra các mục này trong cài đặt của bộ chuyển đổi trước khi xuất:

- **Vùng**: xuất chúng, để các phòng vào dưới dạng không gian. Nhấp {{ui:Không gian}} trong BimCraft để xem chúng.
- **Thuộc tính và phân loại**: xuất chúng, để chúng hiện trong {{ui:Thuộc tính}} và dùng được trong {{ui:Tìm}}, {{ui:Màu}} và {{ui:Tổng khối lượng}}.
- **`.ifc` thuần**, không phải `.ifczip` hay `.ifcxml`. BimCraft chỉ mở `.ifc` thuần.

## Xuất DWG (bản vẽ)

1. Mở mặt bằng, mặt cắt hoặc bố cục bạn muốn.
2. Chọn **File > Save As**, rồi chọn **DWG** làm loại tệp.
3. Chọn một bộ chuyển đổi DXF-DWG, và lưu.
4. Với cả bộ tờ, lưu các bố cục từ Layout Book, hoặc xuất bản chúng dưới dạng DWG.
5. Mở `.dwg` trong BimCraft. Các bản vẽ được liên kết khi xuất sẽ mở cùng nếu nằm trong cùng thư mục; xem [Bản vẽ và hình ảnh liên kết](topic:dwg-linked-files).

## Khắc phục sự cố

- **"… là một dự án Archicad: các byte đầu của tệp cho biết điều đó."** Xuất IFC hoặc DWG như trên, rồi mở tệp đó.
- **"… có tên giống tệp Archicad nhưng không bắt đầu như vậy."** Kiểm tra nguồn gốc tệp: có thể đó là loại tệp khác đổi tên (thử mở bằng đuôi thực của nó), một bản sao chưa chép xong, hoặc dự án từ phiên bản trước 17. Nếu được, mở tệp trong Archicad rồi xuất IFC hoặc DWG.
- **Mô hình mở ra không có phòng.** Vùng chưa được xuất. Bật chúng trong bộ chuyển đổi IFC rồi xuất lại.
- **Lỗ mở chưa được cắt.** BimCraft ghi điều này dưới **Chưa vẽ** trong bảng {{ui:Tệp}}. Xuất lại; nếu vẫn vậy, mở mô hình trong chương trình đã tạo ra nó và kiểm tra các lỗ ở đó.
- **Chữ trên DWG trông khác.** Tệp xuất có thể giữ các phông mà BimCraft không có; BimCraft vẽ chữ bằng phông sans-serif đơn giản.

Xem thêm [Đưa tệp dự án vào 3D qua IFC](topic:rvt-to-ifc) và [BimCraft đọc gì từ mỗi định dạng](topic:file-formats).
