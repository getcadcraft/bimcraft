---
title: Để trợ lý AI làm việc với mô hình của bạn
summary: Bật trợ lý trong {{ui:Settings}} để trợ lý trên máy tính của bạn có thể tìm cấu kiện, đọc thuộc tính của chúng, cô lập chúng trong khung nhìn và vẽ tường, cửa đi, cửa sổ, sàn, tầng và lưới, thông qua CadCraft Studio. Tắt cho đến khi bạn bật lên.
keywords: ai, trợ lý, mcp, kịch bản, tự động hóa, studio, tìm cấu kiện, cô lập, thuộc tính, quyền, ngắt kết nối, hoạt động, vẽ tường, thêm cửa đi, thêm cửa sổ, tầng, lưới, sàn, hoàn tác, lưu, dòng lệnh, cli, không giao diện (headless), dùng với trợ lý ai
from: 66d72742
---

## Bạn sẽ học được gì

Cách để một trợ lý AI (bất kỳ trợ lý nào nói được MCP) xem mô hình IFC bạn đang mở và vẽ trong đó, những gì nó làm được và không làm được, và cách dừng nó.

## Trợ lý có thể làm gì trong BimCraft

| Nó yêu cầu | Điều gì xảy ra | Cần quyền |
|---|---|---|
| Tìm cấu kiện | Nó nhận danh sách cấu kiện theo lớp, tầng, tên hoặc giá trị thuộc tính, giống như **Tìm** thực hiện | Đọc |
| Đọc thuộc tính | Nó nhận các thuộc tính, kiểu, bộ thuộc tính và khối lượng của một cấu kiện, như **Thuộc tính** hiển thị | Đọc |
| Mô tả mô hình, liệt kê tường | Nó nhận các tầng, tường, cửa đi, cửa sổ, phòng, sàn, lưới và cột, cùng đầu mút, kiểu và chiều cao của từng tường | Đọc |
| Cô lập, xuyên thấu, ẩn hoặc hiện | Khung nhìn 3D thay đổi như thể bạn đã dùng menu {{ui:Show}} | Thay đổi khung nhìn và vẽ |
| Vẽ tường, cửa đi, cửa sổ, sàn, tầng hoặc đường lưới | Mô hình thay đổi như thể bạn đã dùng các công cụ {{ui:Draw}}: tường nối với nhau, phòng, sàn và mái theo sau | Thay đổi khung nhìn và vẽ |
| Đổi tên hoặc giá trị thuộc tính | Tên, Mô tả, Loại đối tượng hoặc Thẻ của một cấu kiện, hoặc một giá trị thuộc tính của nó. Giá trị dùng chung với cấu kiện khác sẽ được sao chép riêng cho nó trước; giá trị của kiểu chỉ đổi khi trợ lý nói rõ, vì mọi cấu kiện cùng kiểu đều theo | Thay đổi khung nhìn và vẽ |
| Di chuyển, xóa, đổi tường, cửa đi và cửa sổ | Cấu kiện được di chuyển hoặc xóa cùng các cấu kiện mà nó đặt trên đó; tường vẽ bằng công cụ {{ui:Draw}} đổi theo đầu mút hoặc kiểu, cửa đi và cửa sổ đổi theo vị trí, kích thước hoặc kiểu, còn phòng và các điểm nối theo sau | Thay đổi khung nhìn và vẽ |
| Thiết lập, sắp xếp và đọc bảng thống kê | "Bảng thống kê cửa theo tầng, với cấp chống cháy và phụ kiện cửa": trợ lý đặt tên bảng thống kê, các cột của nó (thuộc tính hoặc thẻ trở thành cột) và cách nhóm; BimCraft điền dữ liệu từ mô hình và trình bày, lấy phần trợ lý không nêu từ tiêu chuẩn của văn phòng. Thiết lập được thêm vào danh sách Bảng thống kê của bạn. Mỗi dòng trả về đều nêu các cấu kiện của nó, để trợ lý có thể chọn chúng | Đọc để đọc; Thay đổi khung nhìn và vẽ để lưu thiết lập |
| Xuất bảng thống kê | CSV, Excel hoặc văn bản phân tách bằng tab để dán vào Google Sheets (không có gì được gửi tới Google) | Xuất |
| Đọc và đặt hoàn thiện phòng | Các loại hoàn thiện, hoàn thiện sàn, tường và trần của từng phòng, các khu vực; khi đó diện tích, số viên gạch và thể tích lớp nền lấy từ bảng thống kê hoàn thiện | Đọc; Thay đổi khung nhìn và vẽ để đặt |
| Chọn cấu kiện, hoàn tác các bước của chính nó | Cấu kiện được chọn trong khung nhìn; bước cuối cùng của nó bị hoàn tác | Thay đổi khung nhìn và vẽ |
| Lưu | Một tệp IFC mới với mọi thay đổi, như {{ui:Save as IFC}} tạo ra (tệp gốc không bao giờ bị thay đổi) | Lưu |
| Xuất USD | Các mô hình đang mở dưới dạng OpenUSD (.usda, .usdc hoặc .usdz), như nút {{ui:USD}} trên thanh công cụ ghi ra | Xuất |
| Kết xuất ảnh, chạy hàng đợi kết xuất | Ảnh khung nhìn 3D, như hộp thoại {{ui:Render}} tạo ra với cài đặt Kết xuất của bạn trừ khi trợ lý yêu cầu khác, hoặc các ảnh chất lượng cao được thêm vào hàng đợi của hộp thoại và kết xuất lần lượt (hàng đợi cần WebGPU). Không có gì trong mô hình thay đổi ([Kết xuất ảnh](topic:render)) | Xuất |

Mỗi thay đổi của trợ lý là một bước trong **Thay đổi**, có tên "Trợ lý: …" (ví dụ "Trợ lý: thêm 4 tường"), nên {{key:Mod+Z}} hoàn tác toàn bộ hành động của nó, và bạn thấy bước đó là của ai. Trong cửa sổ, trợ lý không thể mở tệp: bạn mở mô hình, và nó làm việc với mô hình đang mở.

## Bật trợ lý

Trợ lý kết nối với BimCraft qua CadCraft Studio trên máy tính của bạn; trình duyệt thông thường không có đường vào.

1. Mở {{ui:Settings}} và chọn thẻ **BimCraft**.
2. Trong **Trợ lý**, chọn **Cho phép trợ lý AI và kịch bản dùng BimCraft**.
3. **Đọc** đã được chọn sẵn cho bạn. Chọn **Thay đổi khung nhìn và vẽ** nếu trợ lý được phép cô lập, ẩn cấu kiện và vẽ, và **Lưu** nếu nó được phép lưu mô hình thành tệp mới.
4. Kết nối trợ lý trong Studio (Studio hiển thị địa chỉ và các cài đặt cần dán vào trợ lý).

## Khi trợ lý đang kết nối

Một ghi chú ở đầu bảng bên phải cho biết trợ lý nào đang kết nối và nó làm được gì. Bấm {{ui:Disconnect}} để kết thúc phiên của nó ngay; nó phải kết nối lại để tiếp tục.

**Hoạt động**, dưới **Trợ lý** trong Cài đặt, liệt kê mọi lệnh mà trợ lý đã gọi, mới nhất trước, kèm việc lệnh có thành công hay không.

:::tip
Hãy hỏi bằng lời thường, ví dụ "cô lập các tường ngoài ở Tầng 1", "những cửa nào chưa có cấp chống cháy?" hoặc "vẽ một phòng 6 x 4 mét ở Tầng 1 với một cửa đi ở tường phía nam". Trợ lý tìm cấu kiện và hiển thị chúng trong khung nhìn của bạn, hoặc vẽ chúng.
:::

## Không cần cửa sổ: kịch bản và dòng lệnh

Các công cụ vẽ giống nhau cũng hoạt động trên tệp IFC trong các thư mục bạn chỉ định, không cần mở cửa sổ: máy chủ MCP và dòng lệnh của CadCraft có thể bắt đầu một công trình mới hoặc mở tệp IFC, mô tả nó, thêm tường, cửa đi, cửa sổ, sàn, tầng và lưới, hoàn tác, rồi lưu thành tệp `.ifc` mới. Bốn công cụ khác phù hợp với kịch bản: `ifc_batch` chạy tối đa 200 bước sửa như một khối (tất cả hoặc không gì: một lần hoàn tác đưa cả khối về trạng thái cũ, và một bước bị từ chối sẽ hoàn tác các bước còn lại và nêu tên bước đó); `ifc_describe` liệt kê các tầng và mọi tường cùng cửa đi và cửa sổ của nó; `ifc_render_png` ghi một ảnh kiểm tra tô bóng phẳng của mô hình (không có vật liệu, kết cấu hay bóng đổ) mà không cần cửa sổ; `usd_export` ghi `.usda`, `.usdc` hoặc `.usdz`. Trên dòng lệnh, `cadcraft bim script.json --from model.ifc -o out.ifc` chạy một kịch bản gồm các bước, còn `--usd`, `--png` và `--plan` ghi tệp USD, ảnh hoặc mặt bằng từ cùng lần chạy. Bạn quyết định nó được dùng những thư mục nào và được phép thay đổi hoặc lưu gì.

## Tắt trợ lý

Bỏ chọn **Cho phép trợ lý AI và kịch bản dùng BimCraft**. Mọi trợ lý được ngắt kết nối ngay, và cài đặt được giữ cho lần sau.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ minh họa, mỗi ví dụ kèm các công cụ nó gọi.
- [Tìm cấu kiện theo lớp, tên hoặc thuộc tính](topic:find)
- [Ẩn, cô lập và xuyên thấu cấu kiện](topic:hide-and-isolate)
- [Cài đặt BimCraft](topic:settings)
