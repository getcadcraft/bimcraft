---
title: Di chuyển, sao chép, căn chỉnh và phân bố cấu kiện công trình
summary: Di chuyển tường, sàn, cột và mục thư viện đã đặt theo một điểm gốc và điểm thứ hai hoặc khoảng cách nhập vào, sao chép khi đi, và căn chỉnh hoặc chia đều khoảng cách, trên mặt bằng hoặc từ một lựa chọn trong 3D.
keywords: di chuyển, sao chép, căn chỉnh, phân bố, khoảng cách, dời, điểm gốc, độ dời, tường, cột, sàn, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Bạn sẽ làm gì

Dịch chuyển một tường, một cột, một sàn hoặc một mục thư viện đã đặt tới chỗ mới, tạo bản sao của nó, hoặc xếp nhiều thứ thẳng hàng, mà không cần vẽ lại.

## Tên lệnh và phím

Các lệnh có tên {{ui:Move}}, {{ui:Align}} và {{ui:Distribute}}, và bạn có thể gõ `MOVE`, `ALIGN` và `DISTRIBUTE` trong dòng lệnh, như trong ứng dụng bản vẽ CadCraft. Một khác biệt: trong BimCraft {{key:M}} là Đo, nên Di chuyển có phím riêng, {{key:Shift+M}}. Các công cụ nằm trong menu {{ui:Build}}.

## Di chuyển

1. Chọn thứ cần di chuyển, trên mặt bằng hoặc trong khung nhìn 3D. Tường, sàn, cột và mục thư viện đã đặt đều có thể được chọn trong một lần.
2. Nhấn {{key:Shift+M}} hoặc chọn {{ui:Move}}.
3. Nhấp một điểm gốc, rồi một điểm thứ hai. Hoặc, sau điểm gốc, gõ một khoảng cách rồi nhấn {{key:Enter}}: nó đi theo hướng con trỏ chỉ từ điểm gốc. Bạn cũng có thể gõ `dx,dy` (hoặc `@dx,dy`), hoặc `độ dài<góc`.
4. Nhấn {{key:C}} để bật {{ui:Copy}}: mỗi lần di chuyển sau đó tạo bản sao và sẵn sàng cho lần kế tiếp. Nhấn {{key:Esc}} để dừng.

Cả hai điểm cũng có thể nhấp trong khung nhìn 3D: khi Di chuyển đang bật, con trỏ gặp cao độ sàn của tầng, nên một lần nhấp ở đó là một điểm của mặt bằng. Giữ {{key:Shift}} khi nhấp để chọn một cấu kiện khác. Dùng mặt bằng, Trên, Trước hoặc Bên tùy ý: các điểm luôn nằm trên tầng đó.

Tường mang theo cửa đi và cửa sổ của nó. Sàn đã vẽ mang theo các lỗ mở của nó. Phòng, sàn và trần bám theo tường được cập nhật. Tường nối với tường được di chuyển thì vẫn đứng yên.

Mỗi lần di chuyển là một thay đổi: một lần {{key:Mod+Z}} hoàn tác nó, và nó được truyền tới mọi người trong phiên Live TeamWork. Mục thư viện đã đặt không thể sao chép theo cách này; hãy dùng {{ui:Edit}} › {{ui:Copy}} và {{ui:Paste}}.

## Căn chỉnh

Chọn hai hoặc nhiều cấu kiện, chọn {{ui:Align}}, rồi chọn một phía (trái, tâm, phải, trên, giữa hoặc dưới) và thứ cần căn theo: tập đã chọn, cái được chọn đầu tiên, cái được chọn cuối cùng, hoặc một điểm bạn nhấp. Nhấn {{ui:Align}} trên thanh.

## Phân bố

Chọn ba hoặc nhiều cấu kiện, chọn {{ui:Distribute}}, rồi chọn hướng (ngang hoặc dọc) và khoảng cách: khoảng hở bằng nhau giữa chúng, hoặc tâm bằng nhau. Hai cái ở hai đầu giữ nguyên vị trí.

Các tường mà Căn chỉnh hoặc Phân bố di chuyển vẫn giữ các mối nối, như khi Di chuyển: một tường nối với tường được di chuyển sẽ trượt đầu của nó dọc theo đường của chính nó để giữ mối nối, các vách ngăn đâm vào nó đi theo, và hai tường nối nhau đều được di chuyển giữ góc của chúng tại nơi các đường mới gặp nhau. Các phòng vẫn khép kín. Đây là một bước trong **Thay đổi**.
