---
title: IFC5 alfa (IFCX) fayllarini ochish va eksport qilish
summary: IFC5 alfa fayl formati (.ifcx) uchun laboratoriya varianti — faylni uning qatlamlari bilan ochish, oʻqish tekshira olmagan narsalarni koʻrish va ochiq modellarni eksport qilish. Format hali oʻzgarmoqda, shuning uchun avval oʻqing.
keywords: ifc5, ifcx, alfa, buildingsmart, json, qatlamlar, sxema, laboratoriya, miqdorlar, qto, eksport, import
from: cffe1669
---

IFC5 alfa (fayl kengaytmasi {{ui:.ifcx}}) — buildingSMART hali ishlab chiqayotgan fayl formati. U yakuniy emas: fayllar va ularni bizning oʻqishimiz oʻzgarishi mumkin. Shuning uchun bu laboratoriya varianti va avval oʻqish kerak.

## Yoqish

1. {{ui:Sozlamalar}} ni tanlang, soʻng BimCraft yorligʻidagi {{ui:IFC5 alfa (IFCX)}} boʻlimini.
2. {{ui:IFC5 alfa (IFCX) — format hali oʻzgarmoqda; avval oʻqing}} katakchasini belgilang.

Odatiy holatda u oʻchiq emas. U oʻchiq boʻlmaganda, .ifcx fayl bu yerga ishora qiluvchi jumla bilan rad etiladi. {{ui:IFC5 alfa (.ifcx) ochish…}} va {{ui:IFC5 alfa}} eksport tugmasi u yoqilganda paydo boʻladi.

## Ochish

- {{ui:Fayl yoki jildni oching}} bilan .ifcx faylni tanlang (u ochiq modelni almashtiradi, tahrirlar haqidagi odatiy savoldan keyin), yoki
- {{ui:IFC5 alfa (.ifcx) ochish…}} ni tanlang va bir vaqtda bir nechta fayl tanlang: fayl, uning qatlamlari va u import qiladigan sxema fayllari. Model allaqachon ochiq boʻlsa, fayl **uning yoniga qoʻshiladi**; model roʻyxatidagi x belgisi uni yana olib tashlaydi, bu esa bekor qilishdir.

IFCX fayl tugunlarni sanab beradi (yoʻl, bolalari, meros oladigan narsalari, atributlari). Bir nechta fayl bir tugunni tasvirlashi mumkin: keyingi fayl (qatlam) oldingisining atributlarini bekor qiladi, null bola esa bolani olib tashlaydi. BimCraft ularni birlashtiradi va natijani kichik IFC4 model sifatida chizadi: loyiha, uchastka, bino, qavatlar va elementlar nomlari, sinflari, xossalari, miqdorlari, ranglari va meshlari bilan.

Tarmoqdan hech narsa olinmaydi. Fayl import qiladigan sxema fayllari (masalan `ifc@v5a.ifcx`) faqat ular bilan birga tanlangan boʻlsa ishlatiladi; aks holda hisobot buni aytadi va atributlar tur tekshiruvisiz oʻqiladi.

### Hisobot

Ochilgandan keyin hisobot oʻqish nimani topganini roʻyxatlaydi: sxemaga mos kelmaydigan maʼlumotlar, berilmagan sxema fayllari, bu yerda IFC maʼnosiga ega boʻlmagan atributlar. Xaritalanmagan atributlar modelda **saqlanadi**, tashlab yuborilmaydi va eksportda qaytadan yoziladi.

## Nima nimaga aylanadi

| IFCX faylda | BimCraft da |
|---|---|
| IFC sinfi bilan tugun (loyiha, uchastka, bino, qavat, devor …) | Mos IFC4 elementi; bu oʻqish tanimaydigan sinf bino elementi proksisi boʻladi |
| Tugunning ota-onasi ostidagi nomi | Element nomi |
| Miqdor turiga ega atributlar (Length, Area, Volume, Mass …) | `Qto_IFCX` nomli IFC4 miqdorlar toʻplami (IFC4 miqdorlari IFC4 `Qto_*` toʻplamlari boʻlib qoladi) |
| Boshqa xossa atributlari | `Pset_IFCX` nomli xossalar toʻplami |
| Mesh va transformatsiya atributlari | Elementning uchburchaklari va joylashuvi; koʻrinmas meshlar chizilmaydi |
| Rang, shaffoflik, material, tasniflash | Elementning sirt uslubi, materiali va tasnifi |

Birliklar metr deb olinadi, Z oʻqi yuqoriga qarab; alfa versiyasi birliklar keyinroq hujjatlashtiriladi deb aytadi.

## Eksport

Asboblar panelidagi {{ui:IFC5 alfa}} ni tanlang, izohni oʻqing, soʻng {{ui:.ifcx eksport qilish}} ni bosing. Fayl bizning sarlavhamizga ega (muallif CadCraft, versiya ifcx_alpha) va oʻzida u alfa format ekanligini aytadi. Har bir model oʻz fayl koordinatalarida, metrda yoziladi: nomlar, sinflar, xossalar toʻplamlari, miqdorlar (turi bilan atribut sifatida), ranglar va uchburchaklar bilan. Qatlamlar va meros tekislanib yoziladi. Faylni yuboradigan dasturda tekshiring.

## Cheklovlar

- Egri geometriya (egri chiziqlar, sirtlar) oʻqilmaydi: faqat uchburchak meshlar.
- Devor ichiga joylashgan eshik va derazalar qavatga joylashtiriladi; ular kelgan devor bilan bogʻlanmaydi.
- IFC4 `Qto_*` toʻplam nomlari bizning atribut guruhlarimiz sifatida saqlanadi (`cadcraft::qto::…`); standart alfa sxemasida miqdor nomlari bir necha tadir.
- Format bizdan bexabar oʻzgarishi mumkin; bugun yaratilgan fayl ertaga oʻqilmasligi mumkin.
