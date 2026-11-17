---
title: Dựng khung tường, sàn và mái
summary: Tạo các thanh đứng, thanh ngang, dầm đầu cửa, đà, xà gồ hoặc vì kèo từ mô hình và giữ chúng cùng mô hình; chúng được tạo lại khi tường, lỗ mở, sàn hoặc mái thay đổi, và bảng Gỗ xẻ là danh sách cắt.
keywords: TJI, dầm chữ I, bảng nhịp đà, tải bảng, khung, thanh đứng, thanh ngang, dầm đầu cửa, thanh đứng chính, thanh đứng phụ, dầm viền, thanh đứng ngắn, ngạch cửa, thanh chèn, góc, góc California, chữ T, đà, đà biên, xà gồ, xà gồ chóp, xà gồ rãnh, xà gồ phụ, ván nóc, đà trần, thanh căng, vì kèo, gỗ xẻ, danh sách cắt, board feet, 2x4, 2x6, khoảng cách, tâm đến tâm
from: 76d0ffb5
---

## Bạn sẽ làm gì

Dựng khung cho tòa nhà từ những gì bạn đã vẽ. BimCraft bố trí các thanh đứng, thanh ngang và dầm đầu cửa trong tường, các đà trong sàn và các xà gồ (hoặc vì kèo) trong mái, định kích thước chúng theo các bảng mặc định được gắn nhãn, giữ chúng cùng mô hình và tạo lại mỗi khi những thứ chúng dựng khung thay đổi. Bảng **Gỗ xẻ** là danh sách cắt.

## Dựng khung

1. Trên một tầng, mở {{ui:Bản dựng}} và chọn {{ui:Khung}}.
2. Chọn **khoảng cách** (16 in hoặc 24 in tâm đến tâm; 400 hoặc 600 mm), **góc** (ba thanh đứng hoặc California), **Xà gồ** hoặc **Vì kèo** cho mái, và việc tường có một hàng **thanh chèn** ở giữa chiều cao hay không. Với sàn, chọn **Gỗ xẻ** hoặc **TJI (sơ bộ)** và đặt hướng đà là tự động, trục X hoặc trục Y của mặt bằng.
3. Nhấn **Dựng khung mọi tường**, hoặc nhấn một tường, một sàn, hoặc một mái (trên tầng mà mái đặt lên) để chỉ dựng khung cho phần đó.

Tắt **Hiện khung** để ẩn mọi chi tiết khung, giống như một lớp; **Xuyên thấu** ẩn các tường, sàn và mái đã có khung để bạn chỉ nhìn khung.

## Bạn nhận được gì

- **Tường**: một thanh đáy (cắt tại các cửa đi), một thanh đỉnh kép, các thanh đứng theo bố cục từ điểm đầu của tường, thanh đứng chính và thanh đứng phụ cùng một dầm đầu cửa tại mọi cửa đi và cửa sổ, các thanh đứng ngắn phía trên dầm đầu cửa và phía dưới cửa sổ, một ngạch cửa thô dưới cửa sổ, các góc nơi tường gặp nhau (tường chạy xuyên qua nhận các thanh đứng góc), hai thanh đứng đỡ nơi một tường khác nối chữ T vào, và thanh chèn giữa các thanh đứng.
- **Sàn**: đà chạy ngang theo cạnh ngắn hơn của sàn theo mặc định, hoặc dọc theo trục mặt bằng bạn chọn; các đà biên quanh mép, và các thanh viền và dầm đầu đôi quanh một giếng thang, với các đà đi qua nó được cắt ngắn (đà đuôi). Chế độ TJI chọn chuỗi nhỏ nhất được liệt kê và chiều sâu nhỏ nhất đạt đến nhịp thông thủy đo được ở khoảng cách đã chọn.
- **Mái**: các xà gồ chính vuông góc với mỗi mép mái, các xà gồ phụ nơi chóp và rãnh cắt chúng, các xà gồ chóp và xà gồ rãnh, ván nóc, đà trần trên các thanh ngang, và thanh căng — hoặc các vì kèo đơn giản theo khoảng cách, mỗi cái một chi tiết.

## Thay đổi khung

Chọn bất kỳ chi tiết khung nào trong khung nhìn 3D hoặc cây mô hình. {{ui:Thuộc tính}} hiển thị khung của nó: đổi khoảng cách, loại và hướng đà sàn, các góc, thanh chèn hoặc khung mái. Di chuyển tường, cửa đi và cửa sổ, hoặc thay đổi sàn hay mái, sẽ tự động dựng lại khung.

Để giữ một chi tiết bạn đặt có chủ đích khi khung được tạo lại, chọn nó và chọn **Giữ chi tiết này khi khung được tạo lại**. Chi tiết được giữ sẽ nằm nguyên tại chỗ; khi khung xung quanh nó thay đổi, nó được đánh dấu để bạn kiểm tra.

## Sàn TJI từ một bảng bạn tải lên

BimCraft không mang các bảng nhịp của nhà sản xuất đà (chúng thuộc về nhà sản xuất và thay đổi theo mỗi phiên bản). Chọn khung của một sàn, đặt **Đà sàn** thành **TJI (sơ bộ)** và chọn **Tải bảng…** trong {{ui:Thuộc tính}}: một tệp định dạng `cadcraft-tji-table`, JSON hoặc CSV, mà bạn lập từ các bảng nhịp hiện hành của nhà sản xuất. Tệp ghi tên nhà sản xuất, sản phẩm, phiên bản và nguồn số liệu, và liệt kê cho mỗi trường hợp tải (hoạt tải, tĩnh tải, giới hạn độ võng, chiều dài gối tựa) nhịp thông thủy lớn nhất của mỗi chuỗi và chiều sâu ở mỗi khoảng cách.

- BimCraft lấy **nhịp thông thủy** của sàn, chọn chiều sâu nhỏ nhất, và trong đó chọn chuỗi có nhịp được liệt kê đạt đến nhịp đó với khoảng cách và trường hợp tải bạn đã chọn, rồi dựng khung sàn bằng nó. Nếu nhịp hoặc khoảng cách nằm ngoài bảng, nó sẽ báo và không thay đổi gì.
- Hoạt tải, tĩnh tải, giới hạn độ võng, chiều dài gối tựa, bảng và câu "Bố trí sơ bộ chỉ mang tính hướng dẫn; lựa chọn cuối cùng cần bảng của nhà sản xuất và tải trọng của dự án" được in trên bảng Gỗ xẻ, ghi vào mô hình cùng với khung, và được liệt kê trong bảng **Vấn đề** như một ghi chú. Một bảng được đánh dấu là ví dụ sẽ có cảnh báo cho điều đó.
- Với tiện ích **Quy định xây dựng** bật, quy tắc đà sàn của nó cũng đọc một bảng đã tải; không có bảng thì các đà TJI bị bỏ khỏi kiểm tra đó, như trước đây.
- Bảng nằm trong trình duyệt này cho đến khi bạn xóa hoặc tải một bảng khác. Tệp gồm: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: in, ft, psf; hoặc `metric`: mm, m, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) và `rows` (`series`, `depth`, `spans`: với mỗi id trường hợp, khoảng cách và nhịp thông thủy lớn nhất, chẳng hạn `"16": "15-6"`). Trong CSV, các dữ kiện đó là các dòng `# key = value`, rồi `series,depth,case,spacing,span`.
- Khi chưa tải bảng nào, một bố trí TJI bị từ chối và không có gì thay đổi: **Tải bảng TJI: các bảng của nhà sản xuất thuộc về họ và không được tích hợp sẵn.** Một mô hình đã dựng khung bằng bảng TJI tích hợp cũ (trước thay đổi này) giữ mọi đà đã có; {{ui:Thuộc tính}} và bảng **Vấn đề** cho biết cần có bảng, và sàn có thể được dựng khung lại khi bạn tải một bảng. Các đà gỗ xẻ hoạt động như trước.

Đây là hướng dẫn bố trí. Lựa chọn đà cuối cùng cần bảng của nhà sản xuất, tải trọng của dự án và kỹ sư.

## Bảng cắt

Trong bảng {{ui:Bảng thống kê}}, chọn **Gỗ xẻ**: mọi chi tiết khung được nhóm theo kích thước và theo chiều dài tiêu chuẩn bạn sẽ mua (chiều dài nguyên bội 2 ft từ 8 ft; bước 600 mm khi dùng hệ mm từ 2400 mm), với số chi tiết và board feet. **CSV** tải xuống bảng này.

:::warning
Kích thước dầm đầu, đà, xà gồ và đà trần lấy từ các bảng mặc định được gắn nhãn cho nhà điển hình một hoặc hai tầng, không phải tính toán kỹ thuật. {{ui:Thuộc tính}} cho biết khi một nhịp hoặc một lỗ mở vượt quá bảng của nó. Nhà thiết kế hoặc kỹ sư kiểm tra nhịp, tải và liên kết.

Bố trí TJI chỉ dùng bảng bạn tải lên, bảng mà bạn lập từ các bảng nhịp hiện hành của nhà sản xuất; BimCraft không đi kèm bảng nào. Gợi ý này không kiểm tra gối tựa, tải tập trung, công xôn, lỗ, dầm đầu giếng thang hoặc liên kết, và hình I của mô hình chỉ mang tính sơ đồ.
:::

## Những gì được lưu

Mỗi tường, sàn hoặc mái đã dựng khung là một cụm cấu kiện IFC ("Framing") gồm các thanh IFC (thanh đứng, thanh ngang, xà gồ, thanh căng, thanh chèn, vì kèo) và dầm (dầm đầu cửa, đà, dầm biên, ván nóc), mỗi cái có kích thước, chiều dài và board feet.
