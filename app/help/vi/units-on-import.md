---
title: Đơn vị khi nhập: tệp khai báo đơn vị của nó, hoặc bạn được hỏi trước
summary: Khi tệp bạn nhập có khai báo đơn vị, BimCraft dùng đơn vị đó và cho biết. Khi không có, BimCraft hỏi trước khi đặt bất cứ thứ gì và ghi nhớ câu trả lời của bạn cho tệp đó.
keywords: đơn vị, nhập, mở, OBJ, STL, DWG, DXF, IFC, đám điểm, mục thư viện, milimét, mét, inch, feet, tỷ lệ, sai kích thước, quá lớn, quá nhỏ, 1000 lần, hỏi, ghi nhớ
from: f044e9bc
---

## Bạn sẽ làm gì

Nhập một tệp và bảo đảm nó vào đúng kích thước.

## Các bước

1. Mở hoặc thêm tệp như thường lệ: {{ui:Open}}, {{ui:Files}} của Thư viện, {{ui:Point clouds}}, hoặc Build › Từ bản vẽ.
2. Nếu tệp khai báo đơn vị, không có gì được hỏi. Dòng trạng thái cho biết tệp khai báo đơn vị nào.
3. Nếu không, một hộp thoại sẽ hỏi **Đơn vị của** tệp. Chọn một đơn vị trong tệp tương đương với đơn vị nào, rồi nhấn {{ui:Use these units}}. Không có gì được đặt trước khi bạn trả lời.
4. {{ui:Cancel}} (hoặc {{key:Esc}}) không nhập gì vào.

## Tệp nào khai báo đơn vị

- **IFC**: khai báo đơn vị chiều dài, và "Đã mở" cho biết đơn vị đó. IFC không khai báo đơn vị nào sẽ được hỏi trước khi mở; câu trả lời của bạn được ghi vào mô hình, nên sau khi bạn lưu, tệp sẽ khai báo đơn vị.
- **DWG và DXF**: đơn vị chèn của bản vẽ. Bản vẽ không có đơn vị này sẽ được hỏi (các tệp của Thư viện, Build › Từ bản vẽ, địa hình từ đường đồng mức).
- **Danh sách điểm** cho địa hình: không khai báo đơn vị. Bạn được hỏi.
- **Đám điểm**: LAS và LAZ có hệ tọa độ, E57, PTX và PLY khai báo đơn vị của chúng. Các định dạng khác sẽ được hỏi.
- **OBJ và STL**: không bao giờ khai báo đơn vị. Bạn được hỏi.
- **glTF và GLB**: mét, theo quy tắc của chính định dạng.
- **Hình ảnh**: không có kích thước riêng. Hình ảnh được vừa khung nhìn và bạn đặt kích thước bằng Tỷ lệ theo hai điểm. Kích thước bạn đặt được ghi nhớ cho tệp đó: khi đặt lại, nó được nhập vào với kích thước đó và dòng trạng thái cho biết điều này.
- **Tiện ích Đám điểm**: hỏi khi bạn dựng một đám điểm có tệp không khai báo đơn vị, và ghi nhãn các số của đám điểm theo đơn vị mà nó mang.

## Lưu ý

- Câu trả lời được ghi nhớ cho tệp đó (tên, kích thước và ngày) trên máy tính này, trong mọi ứng dụng CadCraft. Lần sau khi cùng tệp đó được nhập, bạn không bị hỏi nữa, và dòng trạng thái cho biết đơn vị đã ghi nhớ được dùng.
- Để được hỏi lại: bảng lệnh ({{key:Mod+K}}) › **Hỏi lại đơn vị của tệp nhập**.
- Danh sách đơn vị mà một lần nhập đã có (Đơn vị của Thư viện, Đơn vị của thanh đám điểm, Đơn vị bản vẽ trong Từ bản vẽ) vẫn đổi đơn vị sau đó. Danh sách Đơn vị của công cụ địa hình giờ chỉ là lựa chọn mà câu hỏi bắt đầu từ đó.
