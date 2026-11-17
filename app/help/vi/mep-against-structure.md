---
title: Kiểm tra ống và ống gió so với kết cấu
summary: Chạy các bộ va chạm có sẵn giữa ống và ống gió với tường, sàn, dầm và cột, tìm các đoạn nằm gần kết cấu hơn mức cho phép bởi lớp cách nhiệt cộng khe hở, và liệt kê các lỗ mở mà đoạn ống cần đi qua tường và sàn dưới dạng CSV và BCF.
keywords: mep, va chạm, kiểm tra va chạm, phối hợp, kết cấu, tường, sàn, dầm, cột, khoảng hở, va chạm mềm, cách nhiệt, khe hở, lỗ mở, xuyên qua, ống bọc, lõi, công việc xây dựng, bcf, csv
from: 2d597f01
---

## Bạn sẽ làm gì

Bảo đảm các hệ thống kỹ thuật khớp với công trình: những gì đâm vào kết cấu, những gì đi quá sát nó, và chỗ nào tường và sàn cần đục lỗ. Mở {{ui:Kiểm tra va chạm}} ở bảng bên trái; mục **Ống và ống gió với kết cấu** nằm dưới phần kiểm tra thông thường.

## Va chạm cứng

Hai danh sách bộ giờ cũng có **Ống và ống gió**, **Tường**, **Sàn và mái**, **Dầm**, **Cột** và **Kết cấu** (cả bốn), kèm số phần tử mỗi nhóm có. Bấm {{ui:Ống và ống gió × kết cấu}} để chọn bộ đầu tiên và bộ cuối cùng rồi chạy kiểm tra; hoặc tự chọn một cặp bất kỳ rồi bấm {{ui:Chạy}}. Xem [Kiểm tra va chạm](topic:clash-check).

## Khoảng hở

Một số hệ thống cần chừa chỗ xung quanh: lớp cách nhiệt, và khoảng trống để thi công hoặc đặt ống bọc.

1. Đặt chiều dày **Cách nhiệt** cho một đoạn ống hoặc ống gió trong bảng Thuộc tính (không vẽ gì cho phần này).
2. Nhập **Khe hở quanh ống và ống gió** (mm) trong Kiểm tra va chạm.
3. Bấm {{ui:Kiểm tra khoảng hở}}: mỗi chi tiết nằm gần tường, sàn, dầm hoặc cột hơn mức cách nhiệt cộng khe hở sẽ được liệt kê, kèm khoảng cách hiện có và khoảng cách yêu cầu. Bấm một dòng để xem hai đối tượng.

Chi tiết xuyên qua tường hoặc sàn là một lỗ mở, không phải khoảng hở, và được liệt kê ở đó.

## Lỗ mở cần thiết

Bấm {{ui:Lỗ mở cần thiết}}. Ở nơi đường tâm của một đoạn đi xuyên qua tường hoặc sàn, BimCraft liệt kê lỗ mở mà nó cần: tròn với ống hoặc ống gió tròn, còn lại là hình chữ nhật; kích thước bằng kích thước ngoài của đoạn, cộng hai lần lớp cách nhiệt, cộng hai lần khe hở, đặt ở giữa tại chỗ đoạn cắt qua. Bấm một dòng để xem đoạn và tường hoặc sàn.

- {{ui:Lỗ mở dạng CSV}}: mỗi lỗ mở một dòng, gồm đoạn, kích thước và cách nhiệt của nó, kích thước lỗ, phần tử mà nó đi qua và GlobalId của phần tử đó, tầng, tọa độ X, Y và Z của tâm, và đoạn đi xuyên sâu bao nhiêu.
- {{ui:Lỗ mở dạng vấn đề BCF}}: mỗi lỗ mở một vấn đề, có một camera nhìn vào nó, cùng đoạn và phần tử được chọn, dành cho chương trình của kỹ sư kết cấu.

:::note
Không có gì bị cắt: các lỗ mở chỉ là danh sách cho những người định cỡ chúng. Khe hở do bạn tự nhập; không có quy chuẩn nào quy định lỗ mở phải lớn bao nhiêu. Dầm và cột là va chạm, không phải lỗ mở: việc một ống có được đi qua hay không là quyết định của kỹ sư kết cấu.
:::
