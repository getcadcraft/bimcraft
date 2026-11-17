---
title: IFC modelini oching va 3D da atrofga qarang
summary: IFC faylni oching, aylantiring, suring va kattalashtiring; yoʻnalishni topish uchun Moslash, Yuqori, Old va Yon dan foydalaning.
keywords: ifc, 3d, aylantirish, surish, kattalashtirish, moslash, yuqori koʻrinish, old koʻrinish, yon koʻrinish, yoʻnalish, koʻrinish kubi, kamera
from: 68b460dd
---

## Nima qilasiz

IFC modelini oching, uning atrofida 3D da harakatlaning va standart koʻrinishlarga oʻting. Taxminan besh daqiqa.

Sizga `.ifc` fayl kerak. Koʻpchilik BIM dasturlari uni eksport qiladi; Revit da bu **File > Export > IFC**. Qarang: [IFC orqali loyiha faylini 3D ga olish](topic:rvt-to-ifc).

## Qadamlar

1. {{ui:Fayl tanlash}} ni bosing (yoki chap yuqoridagi tashlash maydonini).
2. `.ifc` faylingizni tanlang va tasdiqlang.
3. Holat satri tugashini kuting. U birinchi marta "IFC dvigatelini ishga tushirish…" deydi, soʻng "Modelni oʻqish…" va "Geometriyani yasash: … / … element".
4. Modelni koʻring: u uch chorak koʻrinishda, ekranga moslab ochiladi.
5. Model ustidagi asboblar panelida {{ui:Yuqori}} ni bosing, toʻgʻridan pastga qarash uchun.
6. {{ui:Old}} ni bosing, old tomondan qarash uchun, soʻng {{ui:Yon}} — yon tomondan.
7. {{ui:Moslash}} yoki {{key:F}} ni bosing, butun modelning uch chorak koʻrinishiga qaytish uchun.

## Nima koʻrishingiz kerak

- Model oʻrtada, chizmaga oʻxshash koʻrinish uchun yupqa qora chekkalar bilan.
- Chapdagi {{ui:Fayl}} paneli: fayl nomi, hajmi, IFC sxemasi (masalan IFC2X3 yoki IFC4), loyiha nomi, bosqich, eksport qilingan dastur, muallif, eksport sanasi, element va uchburchaklar soni.
- Uning ostidagi {{ui:Qavatlar}} va {{ui:Elementlar}} roʻyxatlari.
- Holat satri: "Ochildi *fayl nomi*: *n* element, *s* s".

## Harakatlanish

:::mouse
| Maqsad | Nima qilish |
|---|---|
| Aylantirish | Chap tugma bilan suring |
| Surish | Oʻng tugma bilan suring yoki {{key:Shift}} (yoki {{key:Mod}}) ushlab, chap tugma bilan suring |
| Kattalashtirish | Gʻildirakni aylantiring yoki oʻrta tugma bilan suring |
| Hammasini koʻrish | {{key:F}} bosing yoki {{ui:Moslash}} ni bosing |
:::

:::mac mouse
Trackpadda: bir barmoq bilan bosib suring — aylantirish; {{key:Shift}} yoki {{key:Mod}} ni ushlab suring — surish; ikki barmoq bilan aylantiring yoki chimchilab kattalashtiring. Ikki barmoqli bosish oʻng tugma bosish hisoblanadi, u bilan ham surish mumkin, lekin {{key:Shift}} va surish qulayroq.
:::

:::touch
| Maqsad | Nima qilish |
|---|---|
| Aylantirish | Bir barmoq bilan suring |
| Kattalashtirish | Ikki barmoq bilan chimchilang |
| Surish | Ikki barmoqni birga suring |
| Hammasini koʻrish | {{ui:Moslash}} ni bosing |
:::

Aylantirish har doim modelning oʻrtasidagi nuqta atrofida boʻladi. Surish bu nuqtani siljitadi, shuning uchun uzoq surilgandan keyin aylantirish markazdan chetga chiqishi mumkin: uni qayta markazlash uchun {{ui:Moslash}} ni bosing.

## Keng tarqalgan xatolar

- **Nomlangan koʻrinishlarni kutish.** BimCraft da toʻrtta belgilangan koʻrinish bor ({{ui:Moslash}}, {{ui:Yuqori}}, {{ui:Old}}, {{ui:Yon}}), pastki oʻng burchakdagi koʻrinish kubi va erkin aylantirish. U koʻrinishlarni saqlamaydi.
- **Rejalar va kesimlarni qidirish.** Bu versiyada 2D rejalar yoki kesim qutilari yoʻq. Modelni bitta {{ui:Kesim}} tekisligi bilan kesing ([IFC modelini kesim tekisligi bilan kesish](topic:section-plane)) yoki qavatlarni oʻchiring: [Qavatlar va fazolarni hamda qirralarni koʻrsatish va yashirish](topic:storeys-and-spaces).
- **Loyiha faylini ochib, 3D kutish.** Loyiha fayli fayl kartasi sifatida ochiladi. Avval IFC eksport qiling.
- **`.ifczip` ni ochish.** Uni arxivdan chiqaring yoki oddiy `.ifc` eksport qiling.
- **Juda katta model yorliqni sekinlashtiradi yoki toʻxtatib qoʻyadi.** Qarang: [Brauzerlar, qurilmalar va xotira](topic:platforms).

## Keyingi

[Elementni tanlang va uning xossalarini oʻqing](topic:inspect-element).
