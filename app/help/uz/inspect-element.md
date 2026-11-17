---
title: Elementni tanlab, uning xossalarini oʻqish
summary: 3D modelda istalgan elementni bosing: u ajratib koʻrsatiladi va uning nomi, turi, belgisi, GlobalId, xossalar toʻplamlari hamda miqdorlari oʻqiladi.
keywords: xossalar, tanlash, bosish, element, parametrlar, xossalar toʻplamlari, pset, miqdorlar, globalid, guid, tur, tekshirish
from: 43b80aa8
---

## Nima qilasiz

IFC modelidagi elementlarni tanlang va fayl ular haqida aytgan hamma narsani oʻqing: atributlar, xossalar toʻplamlari, tur xossalari va miqdorlar.

## Qadamlar

1. IFC modelni oching.
2. Elementni bosing, masalan eshikni. Sudramasdan bosing: bir necha pikseldan ortiq sudrash tanlamasdan aylantiradi.
3. Elementga qarang: u koʻk rang bilan ajratib koʻrsatiladi.
4. Oʻngdagi {{ui:Xossalar}} panelini koʻring. Tepada elementning turi (masalan "Door" yoki "WallStandardCase") va uning nomi turadi.
5. Birinchi blokni oʻqing: **Nomi**, **Turi**, **Obyekt turi**, **Belgisi**, **Tavsifi**, **GlobalId** va **Qatori**.
6. Xossalar toʻplamlariga pastga aylantiring. Birinchi uchtasi ochiq; boshqasini ochish uchun uning nomini bosing.
7. Boshqa elementga oʻtish uchun uni bosing.
8. Tanlovni tozalash uchun {{key:Esc}} ni bosing yoki boʻsh fonni bosing.

## Nimani koʻrishingiz kerak

- Ajratib koʻrsatilgan element va uning maʼlumotlari oʻngda.
- Xossalar toʻplamlari alifbo tartibida. Elementning **turidan** kelgan toʻplamlar nomidan keyin " (tur)" qoʻshimchasiga va "Tur xossasi: bu yerdagi oʻzgarish shu turdagi har bir elementga qoʻllanadi." izohiga ega.
- Miqdorlar toʻplamlari (uzunlik, maydon va hajm kabi) boshqa toʻplamlar bilan roʻyxatda. Miqdorlarni faqat oʻqish mumkin.
- Oʻzgartirish mumkin boʻlgan qiymatlar tugma kabi koʻrinadi. [IFC xossalarini oʻzgartirish va tahrirlangan nusxani saqlash](topic:edit-ifc-properties) qanday qilinishini koʻrsatadi.

[Xossalar paneli maydonlari](topic:properties-panel) har bir maydonni tushuntiradi.

## Yashirilgan elementlarga yetish

1. Bino ichidagi biror narsaga yetish uchun {{ui:Qavatlar}} roʻyxatida undan yuqoridagi qavatlar belgisini olib tashlang.
2. Xona hajmi orqasidagi devorga yetish uchun {{ui:Boʻshliqlar}} ni oʻchiring.
3. Elementni bosing.

## Keng tarqalgan xatolar

- **Bosish paytida ozgina sudrash.** BimCraft buni aylantirish deb oladi va tanlamaydi. Sichqonchani qimirlatmasdan tuting.
- **Sonlar yonida birliklarni kutish.** Qiymatlar faylda saqlangani kabi, toʻrt oʻnlik kasrgacha yaxlitlanib, birlik belgisisiz koʻrsatiladi. Metrik eksportdagi uzunliklar odatda millimetr yoki metr boʻladi; eksportchining sozlamalarini tekshiring.
- **Parametrni tanish nomi bilan izlash.** Eksportchilar parametrlarni qayta nomlaydi va `Pset_WallCommon` kabi IFC xossalar toʻplamlariga guruhlaydi. Har bir toʻplamni koʻzdan kechiring; maxsus parametrlar koʻpincha eksport qilayotgan dastur yoki kompaniyangiz nomi bilan atalgan toʻplamda turadi.
- **Qidiruv maydonini kutish.** Element tanlash uchun bosing; {{key:Mod}}+bosish yoki {{key:Shift}}+bosish koʻprog tanlaydi, {{key:Mod+A}} esa koʻrsatilgan hamma elementni tanlaydi. Chapdagi {{ui:Elementlar}} roʻyxati elementlarni faqat tur boʻyicha sanaydi; uni bosib boʻlmaydi.
- **Loyiha fayli kartasida tanlash.** Fayl kartasida tanlash uchun elementlar yoʻq: "Element xossalari uchun 3D model kerak. Koʻrish uchun bu faylning IFC eksportini oching."
