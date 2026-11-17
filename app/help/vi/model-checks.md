---
title: Kiểm tra mô hình để tìm các lỗi thường gặp
summary: Tìm cấu kiện thiếu thuộc tính bạn cần, GlobalId bị dùng hai lần, cấu kiện không thuộc tầng nào và các bản sao chồng lên nhau.
keywords: kiểm tra, kiểm tra mô hình, xác thực, qa, chất lượng, thiếu thuộc tính, bắt buộc, trùng lặp, globalid, guid, tầng, chồng lên nhau, chồng lấp
from: 4d835513
---

## Bạn sẽ làm gì

Xem lại mô hình trước khi chuyển giao: các lỗi làm hỏng bảng thống kê, khối lượng và phần mềm của người khác.

## Các bước

1. Mở một mô hình IFC.
2. Mở {{ui:Kiểm tra mô hình}} trong bảng bên trái.
3. Dưới {{ui:Thuộc tính bắt buộc}} đã có sẵn một quy tắc (mọi class, Name). Đổi class (hoặc {{ui:Mọi class}}) và thuộc tính của quy tắc đó, hoặc nhấp {{ui:Thêm thuộc tính}} để thêm quy tắc khác; nút x xóa một quy tắc. Một cấu kiện không đạt quy tắc khi thuộc tính bị thiếu hoặc để trống. Các quy tắc được lưu trong trình duyệt này cho mọi mô hình.
4. Nhấp {{ui:Chạy kiểm tra}}.
5. Nhấp một kết quả để chọn các cấu kiện đó và thu phóng đến chúng.

## Bạn nên thấy gì

- **Thiếu thuộc tính bắt buộc**: mỗi quy tắc cùng các cấu kiện không có giá trị cho nó.
- **GlobalId bị dùng hai lần**: các cấu kiện dùng chung một GlobalId. Phần mềm khác coi chúng là một cấu kiện.
- **Không thuộc tầng nào**: các cấu kiện có hình dạng không nằm trong tầng nào.
- **Bản sao chồng lên nhau**: các cấu kiện cùng class và kiểu, có cùng hình dạng ở cùng vị trí, nên được tính hai lần trong khối lượng.

Mỗi dòng kết quả là một nút: nhấp để chọn và thu phóng đến các cấu kiện đó. Chỉ 50 nhóm đầu tiên của mỗi kiểm tra được liệt kê. Các phát hiện tương tự cũng xuất hiện trong {{ui:Sự cố}}.

## Điều nên biết

- Kiểm tra xem xét mô hình đang hoạt động khi nhiều mô hình được mở. Xem [Xem nhiều mô hình IFC cùng lúc](topic:several-models).
- Sau một lần chỉnh sửa, hãy chạy kiểm tra lại.
- Trong bảng {{ui:Sự cố}}, chiều dài, diện tích và thể tích trong nội dung của một sự cố theo {{ui:Đơn vị}} được chọn trên thanh công cụ (cửa đi "800 mm" hiển thị 2'-7 1/2" theo feet và inch); đổi đơn vị thì bảng viết lại các nội dung này.

## Tiếp theo

- [Đánh giá mô hình: phòng, thẻ, LOD, va chạm và giao diện](topic:audit-the-model)
- [Tìm cấu kiện theo class, tên hoặc thuộc tính](topic:find)
- [Xóa, cắt, sao chép và dán cấu kiện](topic:copy-paste)
