---
title: Để trợ lý AI làm việc với mô hình của bạn
summary: Bật trợ lý trong Cài đặt để trợ lý trên máy tính của bạn có thể tìm phần tử, đọc thuộc tính, cô lập chúng trong khung nhìn và vẽ tường, cửa, cửa sổ, sàn, tầng và lưới, qua CadCraft Studio. Tắt cho đến khi bạn bật.
keywords: ai, trợ lý, mcp, script, tự động hóa, studio, tìm phần tử, cô lập, thuộc tính, quyền, ngắt kết nối, hoạt động, vẽ tường, thêm cửa, thêm cửa sổ, tầng, lưới, sàn, hoàn tác, lưu, dòng lệnh, cli, không giao diện, dùng với trợ lý AI
from: c5ee595b
---

## Bạn sẽ học được gì

Cách để một trợ lý AI (bất kỳ trợ lý nào nói được MCP) xem mô hình IFC bạn đang mở và vẽ trong đó, những gì nó làm được và không làm được, và cách dừng nó.

## Trợ lý có thể làm gì trong BimCraft

| Yêu cầu | Điều xảy ra | Cần quyền |
|---|---|---|
| Tìm phần tử | Nó nhận danh sách phần tử theo lớp, tầng, tên hoặc giá trị thuộc tính, như **Tìm** làm | Đọc |
| Đọc thuộc tính | Nó nhận thuộc tính, kiểu, tập thuộc tính và khối lượng của một phần tử, như **Thuộc tính** hiển thị | Đọc |
| Mô tả mô hình, liệt kê tường | Nó nhận các tầng, tường, cửa, cửa sổ, phòng, sàn, lưới và cột, cùng hai đầu, kiểu và chiều cao của mỗi tường | Đọc |
| Cô lập, xuyên thấu, ẩn hoặc hiện | Khung nhìn 3D thay đổi như thể bạn đã dùng menu {{ui:Hiển thị}} | Thay đổi khung nhìn và vẽ |
| Vẽ tường, cửa, cửa sổ, sàn, tầng hoặc đường lưới | Mô hình thay đổi như thể bạn đã dùng các công cụ {{ui:Vẽ}}: tường nối với nhau, phòng, sàn và mái theo đó | Thay đổi khung nhìn và vẽ |
| Đổi tên hoặc giá trị thuộc tính | Tên, Mô tả, Loại đối tượng hoặc Nhãn của một phần tử, hoặc một giá trị thuộc tính. Giá trị nó dùng chung với các phần tử khác được sao chép cho nó trước; giá trị của kiểu chỉ đổi khi trợ lý nói rõ, vì mọi phần tử cùng kiểu sẽ theo | Thay đổi khung nhìn và vẽ |
| Di chuyển, xóa, đổi tường, cửa và cửa sổ | Phần tử di chuyển hoặc bị xóa cùng những gì nó chứa; tường vẽ bằng công cụ {{ui:Vẽ}} đổi theo đầu hoặc kiểu, cửa và cửa sổ đổi theo vị trí, kích thước hoặc kiểu, phòng và mối nối theo đó | Thay đổi khung nhìn và vẽ |
| Thiết lập, sắp xếp và đọc một bảng thống kê | "Bảng cửa theo tầng, với khả năng chống cháy và phụ kiện": trợ lý đặt tên bảng, các cột (một thuộc tính hoặc nhãn thành một cột) và cách nhóm; BimCraft điền bảng từ mô hình và trình bày, lấy những gì trợ lý không nêu từ tiêu chuẩn văn phòng. Thiết lập được thêm vào danh sách Bảng thống kê của bạn. Mỗi dòng nó nhận lại đều nêu các phần tử của nó, nên nó có thể chọn chúng | Đọc để đọc; Thay đổi khung nhìn và vẽ để lưu thiết lập |
| Xuất một bảng thống kê | CSV, Excel, hoặc văn bản phân tách bằng tab để dán vào Google Sheets (không gì được gửi đến Google) | Xuất |
| Đọc và đặt hoàn thiện phòng | Các loại hoàn thiện, lớp sàn, tường và trần của mỗi phòng, khu vực; diện tích, số lượng gạch và thể tích nền khi đó lấy từ các bảng thống kê hoàn thiện | Đọc; Thay đổi khung nhìn và vẽ để đặt |
| Chọn phần tử, hoàn tác các bước của chính nó | Phần tử được chọn trong khung nhìn; bước cuối cùng của nó bị lấy lại | Thay đổi khung nhìn và vẽ |
| Lưu | Một tệp IFC mới với mọi thay đổi, như {{ui:Lưu thành IFC}} tạo ra (bản gốc không bao giờ bị đổi) | Lưu |
| Xuất USD | Các mô hình đang mở dưới dạng OpenUSD (.usda, .usdc hoặc .usdz), như {{ui:USD}} trên thanh công cụ ghi | Xuất |
| Kết xuất ảnh, chạy hàng đợi kết xuất | Một ảnh của khung nhìn 3D, như hộp thoại {{ui:Kết xuất}} tạo với cài đặt kết xuất của bạn trừ khi nó yêu cầu khác, hoặc các ảnh chất lượng cao được thêm vào hàng đợi của hộp thoại và được kết xuất lần lượt (hàng đợi cần WebGPU). Không có gì trong mô hình thay đổi ([Kết xuất ảnh](topic:render)) | Xuất |

Mỗi thay đổi của trợ lý là một bước trong **Thay đổi**, có tên "Trợ lý: …" (ví dụ "Trợ lý: thêm 4 tường"), nên {{key:Mod+Z}} lấy lại toàn bộ hành động của nó, và bạn thấy được bước đó là của ai. Trong cửa sổ, nó không thể mở tệp: bạn mở mô hình; nó làm việc với mô hình đang mở.

## Bật

Trợ lý kết nối với BimCraft qua CadCraft Studio trên máy tính của bạn; trình duyệt thường không có đường vào.

1. Mở {{ui:Cài đặt}} và chọn thẻ **BimCraft**.
2. Dưới **Trợ lý**, tick **Cho phép trợ lý AI và script dùng BimCraft**.
3. **Đọc** đã được tick sẵn cho bạn. Tick **Thay đổi khung nhìn và vẽ** nữa nếu trợ lý được phép cô lập và ẩn phần tử, và vẽ; tick **Lưu** nếu nó được phép lưu mô hình thành tệp mới.
4. Kết nối trợ lý trong Studio (Studio hiển thị địa chỉ và các cài đặt để dán vào trợ lý).

## Khi trợ lý đang kết nối

Một ghi chú ở đầu bảng bên phải cho biết trợ lý nào đang kết nối và nó làm được gì. Nhấp {{ui:Ngắt kết nối}} để kết thúc phiên của nó ngay; nó phải kết nối lại để tiếp tục.

**Hoạt động**, dưới **Trợ lý** trong Cài đặt, liệt kê mọi lệnh gọi của trợ lý, mới nhất trước, kèm việc nó có thành công hay không.

:::tip
Hỏi bằng lời thường, ví dụ "cô lập các tường ngoài ở Tầng 1", "những cửa nào chưa có khả năng chống cháy?" hoặc "vẽ một phòng 6 x 4 mét ở Tầng 1 với một cửa ở tường phía nam". Trợ lý tìm các phần tử và hiển thị trong khung nhìn của bạn, hoặc vẽ chúng.
:::

## Không cửa sổ: script và dòng lệnh

Các công cụ vẽ giống hệt cũng hoạt động trên tệp IFC trong các thư mục bạn chỉ định, khi không có cửa sổ nào mở: máy chủ MCP và dòng lệnh của CadCraft có thể bắt đầu một công trình mới hoặc mở một tệp IFC, mô tả nó, thêm tường, cửa, cửa sổ, sàn, tầng và lưới, hoàn tác và lưu nó thành một tệp `.ifc` mới. Bạn quyết định những thư mục nào nó được dùng và nó có được thay đổi hoặc lưu gì không.

## Tắt

Bỏ tick **Cho phép trợ lý AI và script dùng BimCraft**. Mọi trợ lý bị ngắt kết nối ngay, và cài đặt được giữ cho lần sau.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ có sẵn, mỗi cái kèm các công cụ nó gọi.
- [Tìm phần tử theo lớp, tên hoặc thuộc tính](topic:find)
- [Ẩn, cô lập và xuyên thấu phần tử](topic:hide-and-isolate)
- [Cài đặt BimCraft](topic:settings)
