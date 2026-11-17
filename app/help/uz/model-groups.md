---
title: Model guruhlari
summary: Tanlangan elementlarni bitta nomlangan guruhga birlashtiring, guruhni boshqa joyga qayta joylashtiring va bitta nusxani oʻzgartirib hammasini oʻzgartiring.
keywords: guruh, model guruhi, guruhlash, guruhdan chiqarish, nusxa, takror, tipik boʻlim, boʻlim, xonadon, guruhni tahrirlash, IfcGroup
from: 121c5027
---

## Nima qilasiz

Tipik boʻlimni guruhlang, uni bir necha marta joylashtiring va bitta nusxani oʻzgartirib, har bir nusxani oʻzgartiring.

## Asbob qayerda

- Lenta joylashuvlari: {{ui:Arxitektura}} › **Model** › {{ui:Model guruhi}}.
- Klassik joylashuv: Chizish paneli › {{ui:Xonalar}} menyusi › Model guruhi.

## Qadamlar

1. Tanlash bilan elementlarni tanlang: birini bosing, qolganlarini {{key:Ctrl}}+bosish yoki {{key:Shift}}+bosish bilan.
2. {{ui:Model guruhi}} ni tanlang. Ular darhol guruh boʻladi. Nomlash uchun avval qatorga {{ui:Guruh nomi}} ni yozing, yoki keyinroq qayta nomlash uchun yozing.
3. {{ui:Yana joylashtirish}} ni bosing va nusxa turishi kerak boʻlgan joyni bosing: uning pastki chap burchagi bosilgan nuqtaga tushadi.
4. Istalgan nusxani oʻzgartiring: devor uchini siljiting, eshikning oʻlchamini oʻzgartiring, ustunni oʻchiring. Guruhning boshqa barcha nusxalari shu qadamda oʻzgaradi, va bitta Ortga qaytarish hammasini qaytaradi.
5. {{ui:Model guruhi}} qoʻlingizda turganda, elementni bosish uning butun guruhini tanlaydi.

## Boshqa qilsa boʻladigan ishlar

- {{ui:Tanlanganlarni qoʻshish}}: oxirgi tanlagan guruhga yana elementlar qoʻshish.
- {{ui:Guruhdan chiqarish}}: bu nusxa yana oddiy elementlarga aylanadi. Boshqa nusxalar guruh boʻlib qoladi.
- Butun nusxani {{ui:Koʻchirish}} bilan siljiting: u yangi joyda xuddi shu guruh boʻladi; boshqalari siljimaydi.
- Nusxaning elementlarini oʻchirsangiz, oʻsha nusxa yoʻqoladi.

## Guruhda nima boʻlishi mumkin

Eshik va derazalari bilan devorlar, ustunlar va chizilgan polar qayta joylashtirilishi va bir xil saqlanishi mumkin. Guruhda boshqa elementlar ham boʻlishi mumkin, lekin u holda uni hali qayta joylashtirib boʻlmaydi; qator buning sababini koʻrsatadi.

Nusxalar faqat siljitiladi; ularni burish yoki aks ettirish mumkin emas.

## IFC da

Guruh IfcGroup boʻladi, unga aʼzolari bilan IfcRelAssignsToGroup bogʻlanadi, aʼzolar esa oddiy devor, ustun va pol boʻlib qoladi. Bitta guruhning har bir nusxasi bir xil taʼrif identifikatorini oladi.

## Hali qurilmagan

- Nusxani burish yoki aks ettirish.
- Qayta joylashtiriladigan guruhdagi zinalar, tomlar, xona polari va kutubxona elementlari.
- Devorning profili, qiyaligi va devor teshiklari nusxalarga oʻtmaydi.
- Guruhlar ichidagi guruhlar.

Shuningdek qarang: [Koʻchirish, tekislash va taqsimlash](topic:move-align-distribute).
