---
title: Bố cục, lưu và xuất bảng thống kê
summary: Nhóm một bảng thống kê, đặt tổng phụ và tổng, thêm cột đọc từ một thuộc tính, lưu nó thành cấu hình trong tệp, và xuất nó dưới dạng sổ bảng tính (.xlsx), dạng văn bản để dán vào bảng tính trực tuyến, hoặc CSV. Tiêu chuẩn văn phòng điền những gì bảng thống kê không nêu.
keywords: bố cục bảng thống kê, nhóm theo, tổng phụ, tổng, tiêu đề, tiêu chuẩn văn phòng, chính sách mặc định, cấu hình, bảng thống kê cửa theo tầng, chống cháy, phụ kiện cửa, xlsx, sổ bảng tính, bảng tính trực tuyến, dán, csv, xuất, bảng tính, cấu kiện, chọn từ bảng thống kê, số liệu
from: 95dfd801
---

## Bạn sẽ làm gì

Biến một bảng thống kê đơn giản thành bảng mà văn phòng bạn phát hành: nhóm theo tầng, kiểu hoặc phòng, với tổng phụ và tổng, với các cột bạn cần, dưới tên riêng. Sau đó gửi nó sang bảng tính. Mỗi dòng và mỗi số liệu vẫn biết các cấu kiện mà nó lấy từ đó.

## Các bước

1. Bật {{ui:Vẽ}} và mở **Bảng thống kê** trong bảng bên trái. Chọn một bảng thống kê, ví dụ **Cửa đi**.
2. Phía trên bảng, chọn **Nhóm theo** (một cột của bảng, như Tầng hoặc Kiểu, hoặc **Không nhóm**) và **Tổng** (**Không có tổng**, **Một tổng**, hoặc **Tổng phụ và tổng**). **Theo đã đặt** để lựa chọn cho cấu hình đã lưu hoặc tiêu chuẩn văn phòng quyết định.
3. Để thêm cột đọc từ các cấu kiện, nhập tên thuộc tính hoặc tên nhãn dưới bảng (ví dụ `FireRating`, `Pset_DoorCommon.FireRating` hoặc tên nhãn như `Ironmongery`) rồi nhấn **Thêm cột**. BimCraft đọc các bộ thuộc tính của chính cấu kiện trước, rồi đến kiểu của nó. Khi chưa có cấu kiện nào có giá trị, nó sẽ báo như vậy; cột tự điền khi một giá trị được đặt.
4. Nhập tên (ví dụ "Bảng thống kê cửa theo tầng") và nhấn **Lưu thành cấu hình**. Cấu hình được giữ trong tệp công trình và xuất hiện trong danh sách Bảng thống kê dưới tên của nó. Nó theo mọi thay đổi của mô hình. **Gỡ cấu hình này** xóa nó đi. Cả hai đều là một bước trong Hoàn tác.

## Nhấp số liệu để chọn đối tượng mà nó lấy từ đó

Nhấp bất kỳ dòng nào, hoặc bất kỳ số liệu đơn lẻ nào, để chọn các cấu kiện đứng sau nó trên mặt bằng và trong 3D:

- một dòng chọn các cấu kiện của dòng đó;
- một tổng phụ hoặc tổng chọn mọi thứ nó cộng lại, một tiêu đề nhóm chọn nhóm của nó;
- một số liệu có cấu kiện riêng sẽ chọn các cấu kiện đó: **Phần trừ** của một kiểu tường chọn cửa đi và cửa sổ của nó, diện tích tường của một phòng chọn các tường của nó.

Cùng cách này hoạt động trong tài liệu được tạo từ mô hình: trong bản xem trước, nhấp một số liệu của bảng thống kê.

## Xuất

- **Tải xuống Excel** lưu một sổ .xlsx. Chiều dài, diện tích, thể tích và số đếm là số thực theo đơn vị cột hiển thị (feet và inch vẫn là văn bản). Trang tính thứ hai, **Cấu kiện**, liệt kê cho mỗi dòng các GlobalId của cấu kiện đứng sau nó.
- **Sao chép cho Google Sheets** đặt bảng thống kê lên bộ nhớ tạm dưới dạng văn bản phân tách bằng tab. Trong một Google Sheet, nhấp ô A1 và dán. **Mở Google Sheet mới** mở `sheets.new`, địa chỉ riêng của Google cho một bảng tính trống, trong tài khoản Google của bạn. BimCraft không đăng nhập Google và không gửi gì đến đó: việc dán là do bạn.
- **Tải xuống CSV** lưu bảng đúng như bố cục trên màn hình.

## Tiêu chuẩn văn phòng

Một văn phòng có thể nói một lần cách bố cục bảng thống kê của họ. Bật tiện ích **Chính sách mặc định** ([Chính sách mặc định](topic:default-policies)) và đặt, trong **Cài đặt › Toàn cục › Chính sách mặc định › Bố cục bảng thống kê (tiêu chuẩn văn phòng)**:

| Chính sách | Nó làm gì |
|---|---|
| Nhóm bảng thống kê theo | Tầng, Kiểu, Phòng hoặc không nhóm, cho mọi bảng thống kê có cột như vậy |
| Tổng trong bảng thống kê | Không có tổng, một tổng ở cuối, hoặc tổng phụ dưới mỗi nhóm và một tổng |
| Tiêu đề bảng thống kê | Một mẫu, ví dụ `{project}: {schedule}` |
| Tiêu đề cột | Như đã viết, VIẾT HOA, hoặc Viết Hoa Chữ Đầu |

Tiêu chuẩn áp dụng cho mọi bảng thống kê, dù ai thiết lập: các bảng thống kê đơn giản trong bảng bên, một cấu hình đã lưu, một bảng thống kê do trợ lý thiết lập, các bản xuất và các bảng thống kê trong tài liệu. Một cấu hình nêu nhóm, tổng hoặc tiêu đề riêng sẽ giữ chúng; tiêu chuẩn điền phần còn lại. Bảng bên cho biết phần nào do tiêu chuẩn văn phòng đặt. Các chính sách đi cùng các tệp Chính sách mặc định khác.

## Điều nên biết

- Một cấu hình nêu bảng thống kê nguồn và các cột của nó; nó không chứa số. Các số được đọc từ mô hình mỗi lần.
- Các danh sách không phải là dòng cấu kiện (các tổ hợp tường và bảng chú giải vật liệu) không có bố cục và không có xuất ở đây.
- Một trợ lý có thể làm tất cả việc này cho bạn: xem [Để trợ lý AI làm việc với mô hình](topic:assistants).
