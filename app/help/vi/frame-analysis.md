---
title: Phân tích khung kết cấu
summary: Lực, phản lực và độ võng của dầm, cột và giằng của mô hình dưới các trường hợp tải và tổ hợp bạn đặt, được giữ trong IFC. Một công cụ hỗ trợ phân tích, không phải kiểm tra theo quy chuẩn.
keywords: phân tích, đơn vị, feet và inch, đơn vị hiển thị, phân tích kết cấu, kiểm tra thiết kế, mức sử dụng, cán nóng, hàn, AISC 360, EN 1993-1-1, phân tích khung, mô hình phân tích, phương pháp độ cứng, tải trọng, trường hợp tải, tổ hợp, trường hợp tải trọng thường xuyên, hoạt tải, trọng lượng bản thân, phản lực, mômen uốn, lực cắt, lực dọc trục, độ võng, dạng biến dạng, gối tựa, khớp, ngàm, giải phóng, báo cáo, pdf, csv, craftscript, frame3d, dầm, cột, thanh
from: b93b58c4
---

Thẻ {{ui:Phân tích}} ở bên phải tìm các lực trong dầm, cột và giằng của mô hình đang mở, các phản lực tại chân cột và mức độ cong vênh của các thanh, theo các tải bạn cung cấp.

:::warning
Đây là **công cụ hỗ trợ phân tích, không phải kiểm tra theo quy chuẩn**. Phân tích không áp dụng quy chuẩn thiết kế nào: nó không định kích thước cấu kiện hay kiểm tra khả năng chịu lực, và không chọn hệ số tải. Kỹ sư kiểm tra mô hình phân tích, các tải và gối tựa, rồi quyết định ý nghĩa của các con số. Khối {{ui:Kiểm tra thiết kế}} bên dưới kiểm tra các tiết diện thép hình I cán nóng theo AISC 360 hoặc EN 1993-1-1, chỉ là một công cụ hỗ trợ cho đến khi kỹ sư xem xét: xem [Kiểm tra thiết kế](topic:frame-analysis#design-checks).
:::

## Chạy phân tích

1. Mở một mô hình IFC và thẻ {{ui:Phân tích}}.
2. Chọn một hoặc nhiều dầm, cột hoặc giằng trong khung nhìn, chọn {{ui:Trường hợp}}, {{ui:Tải}} và {{ui:Hướng}}, gõ giá trị rồi nhấn {{ui:Thêm tải}}: kN/m cho tải phân bố dọc theo cấu kiện, kN cho tải tập trung.
3. Nhấn {{ui:Chạy phân tích}}.

Bảng liệt kê lực dọc trục lớn nhất, các lực cắt, mômen uốn, xoắn và độ võng của mỗi cấu kiện; nhấn tên một cấu kiện để chọn nó trong khung nhìn. Bên dưới là các phản lực. {{ui:Trên mô hình}} vẽ dạng biến dạng, hoặc một tác động dưới dạng biểu đồ bên cạnh mỗi cấu kiện. Kết quả sẽ lỗi thời khi mô hình thay đổi: hãy chạy lại.

Mỗi tải và thiết lập là một thay đổi trong danh sách {{ui:Thay đổi}}: {{ui:Hoàn tác}} lấy lại nó, và {{ui:Lưu thành IFC}} giữ chúng trong tệp (bộ thuộc tính `CadCraft_Analysis` của dự án), để lần tới mô hình mở ở đây thì các tải vẫn còn đó.

## Cách tạo mô hình phân tích

- Mỗi IfcBeam, IfcColumn và IfcMember có hình dạng là một khối đùn thẳng duy nhất trở thành một cấu kiện trên đường tâm của tiết diện. Các đặc trưng tiết diện lấy từ profile: hình I, U, L và T, hình chữ nhật và ống, hình tròn và ống tròn, hoặc bất kỳ đường viền kín nào (khi đó hằng số xoắn là một ước lượng, được nêu trong báo cáo). Mọi thứ khác bị bỏ qua và được đếm.
- Trong một mô hình, dầm dừng ở mặt của cột và nằm dưới sàn. Mỗi đầu cấu kiện được đưa dọc theo đường riêng của nó lên trục của cấu kiện mà nó đóng khung vào, khi trục đó gần (trong phạm vi khoảng kích thước tiết diện), và cấu kiện đó được chia tại đó. Báo cáo cho biết có bao nhiêu đầu đã được dịch chuyển.
- **Chân cột** mà không có gì bên dưới là gối tựa: ngàm (điểm đầu) hoặc khớp (được giữ tại chỗ và chống xoắn, nhưng tự do xoay).
- **Đầu dầm** là cứng hoặc khớp theo quy tắc {{ui:Đầu dầm chưa có liên kết}}; **giằng** (IfcMember) là khớp ở cả hai đầu. Chọn một cấu kiện để đặt quy tắc riêng cho các đầu của nó, hoặc cho chân của một cột.
- Vật liệu theo tên: bê tông (E = 30 GPa), gỗ (E = 11 GPa), còn lại là thép (E = 200 GPa).

Nếu khung có thể chuyển động mà không uốn bất kỳ thứ gì — một cơ cấu — quá trình chạy sẽ dừng và cho biết ở đâu và theo hướng nào.

## Trường hợp, tổ hợp, dấu và báo cáo

Phân tích bắt đầu với **Dead** (trọng lượng bản thân), **Live** và **Dead + live**; thêm các trường hợp và tổ hợp với các hệ số mà quy chuẩn thiết kế của bạn yêu cầu. N > 0 là kéo; My > 0 đặt phía −z cục bộ của cấu kiện chịu kéo (một dầm võng dưới trọng lực có My > 0). {{ui:Báo cáo (PDF)}} và {{ui:Báo cáo (CSV)}} chứa các giả định, tiết diện, trường hợp, phản lực cùng tổng của chúng, lực cấu kiện, chuyển vị và một bao hình. {{ui:Xuất dưới dạng CraftScript}} ghi khung cho không gian Script của PartCraft, nơi hàm thư viện `frame3d` giải nó bằng mã đọc được.

Phương pháp là phương pháp độ cứng trực tiếp, tuyến tính và bậc nhất trừ khi bạn đánh dấu *Bậc hai (P-Delta)*, và đã được kiểm tra với các bài toán giáo khoa.

**Bậc hai (P-Delta).** Đánh dấu *Bậc hai (P-Delta)* cạnh nút Chạy: mỗi tổ hợp được giải lại với lực dọc trục của các cấu kiện tác dụng lên khung đã biến dạng (mỗi cấu kiện được cắt thành 4 đoạn, để uốn của một cấu kiện giữa hai đầu cũng được tính), cho đến khi lực dọc trục ổn định. Dòng kết quả cho biết số lượt và mức độ tăng của độ lệch ngang; các mômen, độ võng, kiểm tra thiết kế và báo cáo khi đó dùng các kết quả này. Trên tải tới hạn đàn hồi của khung, quá trình chạy dừng lại và cho biết như vậy. Phương pháp này đàn hồi với góc xoay nhỏ, chỉ uốn, không có giảm độ cứng hay tải danh nghĩa (không phải tự thân là phương pháp phân tích trực tiếp của AISC); sàn, tường và sàn cứng vẫn ở bậc nhất.

**Áp lực sàn lên bản sàn.** Với các bản sàn bê tông (phân tích đọc một bản sàn như tấm khi vật liệu của nó là bê tông), khối Tải có {{ui:Áp lực trên mọi bản sàn}}: gõ kN/m², chọn trường hợp ở trên và nhấn {{ui:Thêm vào sàn}}. Áp lực được phân bố hướng xuống trên mọi bản sàn mà phân tích tìm thấy, và được liệt kê kèm liên kết {{ui:Gỡ bỏ}}. Đây là một áp lực cho mọi bản sàn, không phải cho từng bản sàn riêng, và không phải tải theo quy chuẩn: hãy gõ giá trị mà kỹ sư của bạn cung cấp.

**Tần số dao động riêng (phần tử hữu hạn).** Khối {{ui:Phần tử hữu hạn: tần số dao động riêng}} dưới kết quả tìm các dạng dao động thấp nhất của cùng mô hình bằng bộ giải phần tử hữu hạn: dầm với các giải phóng ở đầu, bản sàn và tường là các vỏ bốn nút phẳng, sàn cứng, gối tựa. Chọn số dạng (3, 6, 10 hoặc 20) và phần tử sàn (vỏ bốn nút cho bản dày hoặc mỏng, hoặc phần tử bản mỏng), rồi nhấn {{ui:Tìm các tần số}}. Bảng cho biết tần số của mỗi dạng bằng Hz, chu kỳ bằng giây và khối lượng modal hiệu dụng theo X, Y và Z dưới dạng tỷ lệ của khối lượng có thể chuyển động; {{ui:Hiển thị trên mô hình}} vẽ bất kỳ dạng nào theo cách vẽ dạng biến dạng. Khối lượng bằng khối lượng riêng vật liệu nhân với thể tích: tải không thêm khối lượng, và một vật liệu không có khối lượng riêng thì không có khối lượng. Báo cáo (PDF, CSV) chứa bảng này. Kết quả chỉ đàn hồi và chuyển động nhỏ, và không có tải động đất hay tải gió nào được tạo từ quy chuẩn ở đây. Không phải kiểm tra theo quy chuẩn; kỹ sư xem xét kết quả.

**Phổ phản ứng, lịch sử thời gian và đẩy dần.** Ba khối nữa nằm dưới các tần số, dùng cùng mô hình phần tử hữu hạn. Khối lượng của tất cả là khối lượng riêng vật liệu cộng với các tải hướng xuống của các trường hợp bạn đánh dấu, mỗi cái nhân với một hệ số bạn gõ (ví dụ Dead ở 1 và Live ở tỷ lệ bạn tính là khối lượng).

{{ui:Phổ phản ứng}} đọc từng dạng từ một phổ bạn đưa vào (một bảng chu kỳ và gia tốc, hoặc hình dạng ASCE 7 từ SDS, SD1 và TL; nút {{ui:Dùng giá trị khối Động đất}} sao chép các giá trị đó từ khối Động đất) và tổ hợp các dạng bằng CQC, SRSS, quy tắc 10 %, hoặc tổng tuyệt đối, rồi ghép các hướng X, Y và Z (100 % + 30 % hoặc SRSS). Nó cho lực cắt đáy, độ trôi tầng, lực đầu cấu kiện và một bảng dạng cảnh báo khi các dạng được dùng mang ít hơn 90 % khối lượng. Bạn có thể nhân kết quả với một hệ số hoặc tỷ lệ đến một lực cắt đáy bạn gõ; khối không bao giờ tự tính lực cắt đáy đó. Kết quả không có dấu.

{{ui:Lịch sử thời gian}} chạy một gia tốc nền bằng chồng chất modal (chính xác cho các đoạn thẳng của bản ghi giữa các điểm) hoặc bằng tích phân trực tiếp (Newmark gia tốc trung bình với cản Rayleigh). Đầu vào là một sin hoặc xung giả (luôn được gắn nhãn tổng hợp), một bản ghi bạn dán vào, hoặc một tệp văn bản bạn mở (thời gian và gia tốc, mỗi gia tốc một dòng với một bước, hoặc tệp kiểu PEER với tiêu đề DT=; theo g hoặc m/s²). Nó cho chuyển vị đỉnh mái và lực cắt đáy theo thời gian, độ trôi của mỗi tầng, và bao hình của lực đầu cấu kiện. Các mô hình có bản ghi rất dài chỉ giữ bản ghi trong phiên làm việc.

{{ui:Đẩy dần (pushover)}} đẩy mái sang ngang theo các bước nhỏ (theo dạng như dạng dao động thứ nhất, hoặc đều), với các bản lề dẻo ở đầu các cấu kiện có tiết diện hình I. Một bản lề chảy tại mômen dẻo, mômen này giảm khi lực dọc tăng (tính từ hình vẽ, bỏ qua bo góc); làm cứng là tùy chọn, P-delta là tùy chọn, và có thể áp dụng trước một tổ hợp trọng lực. Nó cho đường cong sức chịu (lực cắt đáy theo chuyển vị mái), bản lề đầu tiên, và trạng thái cùng góc xoay dẻo của mỗi bản lề. {{ui:Chạy lịch sử thời gian phi tuyến}} chạy cùng các bản lề dưới bản ghi của khối Lịch sử thời gian trên các mô hình nhỏ. Bản lề chỉ hình thành ở đầu cấu kiện (đặt một nút chỗ bản lề nên hình thành ở giữa nhịp); một cấu kiện được giải phóng ở cả hai đầu thì không có bản lề nào; chảy dẻo và mất ổn định của giằng không được mô hình hóa; sàn và tường vẫn đàn hồi; không có tiêu chí chấp nhận nào được đưa ra. Không phải kiểm tra theo quy chuẩn; kỹ sư xem xét kết quả. Các thiết lập được lưu cùng mô hình, và báo cáo chứa các bảng.

Chưa xây dựng: mất ổn định (buckling), hiệu chỉnh khối lượng thiếu cho phổ phản ứng, co giãn bản ghi, tiêu chí chấp nhận cho bản lề (đáp ứng động đã có ở trên), tải diện tích khác ngoài áp lực trên mọi bản sàn, độ lệch trục cấu kiện, giằng chỉ chịu kéo, tường và sàn trong khung, kiểm tra quy chuẩn cho các mối hàn và các tiết diện khác ngoài thép hình I cán nóng. Xem [Chưa xây dựng](topic:not-built-yet).

## Đơn vị

Chiều dài theo đơn vị bạn chọn trong thanh công cụ ({{ui:Đơn vị}}), như phần còn lại của BimCraft: các vị trí tải bạn gõ và xem ({{ui:Từ}}, {{ui:Đến}}, {{ui:Tại}}), các điểm của tải nút và phản lực, chiều cao sàn trong {{ui:Động đất}}, và các cột độ võng và độ trôi (feet và inch hiển thị các chiều dài nhỏ này bằng inch thập phân). Có thể đổi đơn vị bất cứ lúc nào; thẻ được vẽ lại. Lực giữ theo kN và kN·m, còn báo cáo (PDF, CSV) và tệp CraftScript giữ theo milimét, với đơn vị được ghi rõ. Kích thước tiết diện, đường kính thanh và lớp bảo vệ trong khối {{ui:Bê tông}} giữ theo milimét, như tên của chúng.

## Kiểm tra thiết kế

Khối {{ui:Kiểm tra thiết kế}} (giống của DetailCraft) nhận một {{ui:Quy chuẩn thiết kế}}, ASCE 7 + AISC 360 hoặc EN 1990 + EN 1993-1-1, và một {{ui:Mác thép}}. Đặt loại cho mỗi trường hợp tải (tĩnh, hoạt, gió …), và {{ui:Tạo tổ hợp}} sẽ ghi các tổ hợp tải của quy chuẩn từ các trường hợp của bạn; phân tích khi đó chạy chúng như bất kỳ tổ hợp nào.

{{ui:Kiểm tra thanh}} kiểm tra mỗi **tiết diện thép cán nóng hình I** bằng các kiểm tra của DetailCraft (kéo, nén có mất ổn định, uốn có mất ổn định xoắn ngang, cắt, uốn kết hợp lực dọc, độ võng; các điều khoản nằm trong báo cáo) và cho biết tỷ lệ khả năng chịu lực mà nó sử dụng, được tô màu trên mô hình. Đây là **một công cụ hỗ trợ cho đến khi kỹ sư xem xét**.

**Cấu kiện nào được kiểm tra.** Một profile IFC không cho biết một tiết diện thép hình I là cán nóng hay hàn, nên BimCraft chỉ coi là cán nóng khi tên profile của nó (hoặc, nếu không có, tên kiểu của cấu kiện) là một kích thước trong bảng AISC W hoặc S, hoặc bảng EN 10365 IPE, HEA hoặc HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **và** chiều cao, bề rộng, bụng và cánh trong tệp khớp với kích thước đó trong phạm vi 1 %. Mọi tiết diện hình I khác (một dầm bản hàn, một kích thước có tên khác, một kích thước đã chỉnh sửa) được coi là hàn và sẽ trả về **không được kiểm tra**, cũng như ống, thép góc, thép chữ C và các tiết diện khác, các phần mảnh và xoắn. Hãy kiểm tra các cấu kiện đó với kỹ sư.
