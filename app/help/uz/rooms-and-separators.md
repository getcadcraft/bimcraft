---
title: Xonalar va xona ajratgichlari
summary: Xonani nomlash va raqamlash uchun tanlang, uning maydoni, perimetri va hajmini oʻqing. Ikki xona devorsiz tutashgan joyda xona ajratgich chizing.
keywords: xona, xonalar, xona ajratgich, ajratish chizigʻi, boʻshliq, IfcSpace, nom, raqam, maydon, perimetr, hajm, ochiq reja, xonani boʻlish, oshxona va yashash xonasi, yopiq emas
from: d4c1d66b
---

## Nima qilasiz

Devorlar hosil qilgan xonalarga nom bering va ochiq xonani devorsiz ikkiga boʻling.

## Asboblar qayerda

- Lentali tartibda: {{ui:Arxitektura}} › **Xona va maydon** › {{ui:Xona}} va {{ui:Xona ajratgich}}.
- Klassik tartibda: Chizish paneli › {{ui:Xonalar}} menyusi.
- Istalgan menyu uslubida: buyruqlar Xona va Xona ajratgich deb nomlangan; buyruqlar paneli ularni topadi.

## Qadamlar

1. Devorlarni chizing. Devorlarning har bir yopiq halqasi allaqachon xona: BimCraft uni yaratadi, raqamlaydi va chizganingizda maydonini beradi.
2. {{ui:Xona}} ni tanlang. Plan ustida harakatlaning: koʻrsatkich ostidagi xona maydoni, perimetri va hajmi bilan yonadi.
3. Xonalarni tez nomlash uchun avval qatorda {{ui:Nom}} va {{ui:Raqami}} ni kiriting, keyin xona ichiga bosing. Raqam keyingi xona uchun bittaga oshadi (101, 102; A-09, A-10).
4. Yoki shunchaki xonani bosing: u tanlanadi va Xossalarda uning nomi, raqami, maydoni, perimetri, hajmi va belgisi boʻladi.
5. Ochiq xonani boʻlish uchun {{ui:Xona ajratgich}} ni tanlang va ikki nuqtani bosing: devordan devorgacha yoki devordan boshqa ajratgichgacha. Zanjir uchun bosishda davom eting; Enter, Esc yoki ikki marta bosish uni tugatadi.

## Ajratgich nima qiladi

- U xonalarni qalinliksiz devor kabi chegaralaydi. Ikki xonaning maydonlari aynan asl xonaga teng boʻladi.
- Eski xonaning oʻrtasini saqlab qolgan xona eski nomi va raqamini saqlaydi. Boshqasi yangi.
- Ochiq joyda toʻxtab, bir uchida hech narsaga tegmagan ajratgich hech narsani boʻlmaydi. Uni choʻzing, shunda boʻladi.
- Devor ichidagi ajratgich qismi eʼtiborga olinmaydi, shuning uchun devor oʻqlariga tutash mumkin.
- Ajratgichni tanlab Delete tugmasini bosing: ikki xona yana bitta boʻladi. Ortga qaytarish uni qaytaradi.

## Agar bosgan joyingizda xona boʻlmasa

Holat qatorida buni aytadi: u yerda devorlar yopilmaydi. Boʻshliqni yoping yoki uning ustidan ajratgich chizing. Hech narsa rad etilmaydi; shunchaki hali yopiq xona yoʻq.

## IFC da

Xona IfcSpace boʻlib, raqami (Name), nomi (LongName) va Qto_SpaceBaseQuantities bilan: NetFloorArea, NetPerimeter, Height, NetVolume. Hajm maydon koʻpaytirilgan, yuqori sathgacha boʻlgan balandlik.

Xona ajratgich IfcVirtualElement boʻladi, IFC qurilmagan chegara uchun ishlatadigan obyekt. Unda chiziq bor va jism yoʻq, shuning uchun boshqa dastur unda devor oʻqimaydi va hech narsani sanamaydi.

## Hali qurilmagan

- Egri ajratgichlar.
- Qiya shiftga ergashadigan xona: hajm har doim maydon koʻpaytirilgan sath balandligi.
- Boʻshliq chegarasi bogʻlanishlari (IfcRelSpaceBoundary) yozilmaydi, devorlar uchun ham, ajratgichlar uchun ham.

Qarang: [Xona va maydon belgilari](topic:room-and-area-tags), [Maydonlar va maydon chegaralari](topic:areas-and-area-boundaries).
