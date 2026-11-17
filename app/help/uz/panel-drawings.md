---
title: Yogʻoch yoki yengil poʻlatdan panel chizmalari
summary: Model devorlari, pollari va tomlarini yogʻoch yoki yengil poʻlatdan panel sifatida karkaslang, har bir stoyka, plastina, peshtoq, tirgak va sirtmoqni masshtabda koʻring, kesish roʻyxatini CSV va ustaxona chizmalarini PDF sifatida saqlang.
keywords: panel, karkas, ustaxona chizmasi, kesish roʻyxati, yengil poʻlat, poʻlat stoyka, LGS, yogʻoch, tirgak, sirtmoq, peshtoq, zaxira, PDF
from: c09f916e
---

## Panellarni ochish

{{ui:Build}} menyusidan {{ui:Panel chizmalari}} ni tanlang (yoki {{cmd:PANELS}} ni yozing). Roʻyxatda modeldagi chizilgan har bir devor, har bir pol va har bir tom boʻladi, har biri belgisi bilan. Devorlar eshik va derazalar bilan teshik sifatida keladi. Pol uning konturi atrofidagi toʻrtburchak sifatida karkaslanadi, tirgaklar qisqa tomonga yoʻnaltirilgan. Tom gabl sifatida karkaslanadi, devorlar konturi ustida, tomning qiyaligi bilan; roʻyxat buni aytadi, chunki chorshoʻp yoki murakkab tom gabl emas.

## Material, oʻlcham va qadam

{{ui:Material}} ni tanlang: **Yogʻoch** yoki **Yengil poʻlat**. Poʻlat boʻlaklari chuqurligi va qalinligi bilan nomlangan C-stoykalar boʻladi (masalan, C92-1.2), plastinalar uchun esa yoʻl bilan. {{ui:Member size}} belgilangan barcha panellar uchun bitta oʻlchamni tanlaydi yoki Standart holatda qoldiring, u holda har bir panel turining standart qiymatlari olinadi. {{ui:Spacing}} stoykalar, tirgaklar yoki stropilalar orasidagi masofadir. Bular siz sozlaydigan boshlangʻich qiymatlar. Bu meʼyor tekshiruvi emas: shu qadamda stoyka devorni koʻtaradimi va peshtoq oraliqni oʻtkazadimi, buni meʼyor jadvallari (Qurilish meʼyorlari qoʻshimchasida IRC bor) va muhandisingiz hal qiladi.

## Nimani olasiz

Birinchi belgilangan panel dialogda oʻlchamlari bilan masshtabda chiziladi. {{ui:Cut list (CSV)}} har bir panelning boʻlaklarini belgisi, oʻlchami va uzunligi boʻyicha, hamda ularni sotib olish uchun zaxira uzunliklarini saqlaydi. {{ui:Shop drawings (PDF)}} har bir panel uchun bitta A3 varaqni saqlaydi, har bir boʻlak belgilangan va uning kesish roʻyxati bilan. {{ui:Drawing (SVG)}} birinchi panelni chizma sifatida saqlaydi. Karkaslash kodi topa olmagan har qanday narsa (devor oxiriga juda yaqin teshik, plastinalar ostiga sigʻmaydigan peshtoq, eng uzun zahiradan uzunroq boʻlak) dialogda, shuningdek **Muammolar** da roʻyxatlanadi.

## Nimani qilmaydi

Panellar talab qilingan vaqtda modeldan yasalgan chizmalar: modelga hech narsa yozilmaydi, shuning uchun ular doim unga mos keladi. Karkasni modelga elementlar sifatida kiritish uchun yogʻoch devorlar, pollar va tomlar uchun {{ui:Framing}} dan foydalaning.
