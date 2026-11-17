---
title: Ghi kích thước lưới
summary: Hiển thị khoảng cách giữa các đường lưới liền kề và kích thước tổng thể của lưới trên mặt bằng của mọi tầng, được lưu trong IFC và tự theo lưới khi các đường thay đổi.
keywords: lưới, kích thước lưới, kích thước, khoảng cách, nhịp, kích thước tổng thể, nhãn tròn, lưới cột, mặt bằng, tờ
from: aaea5d08
---

## Bạn sẽ làm gì

Đặt khoảng cách giữa các đường lưới và kích thước tổng thể của lưới lên mặt bằng, bên ngoài các nhãn tròn, để các tờ được làm từ chúng mang kích thước. Trước hết bạn cần có lưới: xem [Lưới và cột](topic:grids-and-columns).

## Các bước

1. Hiển thị mặt bằng của một tầng rồi nhấn {{ui:Grid}} để bật công cụ lưới. Dải tùy chọn lưới sẽ hiện ra.
2. Bật {{ui:Dimensions}}. Khoảng cách giữa các đường đánh số liền kề và giữa các đường đánh chữ liền kề, cùng kích thước tổng thể theo mỗi hướng, sẽ được vẽ trên mặt bằng.
3. Chọn một tầng khác: cùng các kích thước đó sẽ hiện trên mặt bằng của tầng ấy.
4. Di chuyển một đường, đổi tên một đường hoặc thêm một đường. Các kích thước sẽ theo lưới.
5. Tắt {{ui:Dimensions}} để gỡ các kích thước đi.

## Ghi chú

- Mỗi thay đổi là một bước hoàn tác: {{key:Mod+Z}} sẽ hoàn tác lại.
- Cài đặt này được lưu trong IFC cùng với lưới, và các mặt bằng đặt trên tờ sẽ mang kích thước.
- Nếu mô hình không có lưới nào bạn có thể thay đổi (lưới đến từ tệp của chương trình khác thì không thể đổi ở đây), dòng trạng thái sẽ hiện "Không có lưới nào để thay đổi."
