---
title: Variantli kutubxona elementini joylashtirish va almashtirish
summary: Ayrim kutubxona elementlari bir necha oʻlchamda yoki parametrda keladi. Joylashtirishdan oldin variantni tanlang, joylashtirilgan elementning qaysi variant ekanligini koʻring, uni bir bosishda boshqa variantga almashtiring va element yangilanganda uni saqlang.
keywords: variant, variantlar, oʻlchamlar, parametrlar, konfiguratsiya, kutubxona, librarycraft, joylashtirish, almashtirish, konfiguratsiyalovchi, oila, tur, yangilanish, portlar
from: c05f0af3
---

## Nima qilasiz

Kerakli oʻlchamda yoki parametrda kutubxona elementini joylashtiring va keyinroq fikringizni oʻzgartirsangiz, uni qayta joylashtirmasdan almashtiring. Variantli element kutubxonada bitta element (bitta nom, bitta litsenziya, bitta versiya) boʻladi, u keladigan variantlar jadvali bilan: masalan, Kichik, Oʻrta va Katta oʻlchamdagi montaj plastinkasi yoki teshiksiz xuddi shu plastinka.

## Variantni tanlang va joylashtiring

1. {{ui:Kutubxona}} yorligʻini oching va elementning kartochkasini bosing.
2. Nom ostida {{ui:Variant}} tanlovi har bir variantni oʻlchami bilan sanaydi. Elementning standart varianti birinchi tanlangan boʻladi.
3. Bittasini tanlang. Reja, oʻlcham va 3D jism qatori tanlovingizga ergashadi.
4. {{ui:Rejaga joylashtirish}} (yoki 3D koʻrinishda {{ui:Modelga joylashtirish}}) ni bosing va uni boshqa element kabi joylashtiring. Qarang: [Kutubxonadan jihoz va mebelni joylashtirish](topic:place-from-library).

Joylashtirilgan element element va variant nomi bilan ataladi, masalan *Montaj plastinkasi — Large*, shunda Jihozlar jadvali va daraxt ularni bir-biridan ajratadi. Har bir variant oʻz IFC turiga ega: bir xil variantni ikki marta joylashtirsangiz, u bitta turni ulashadi, boshqa variant esa oʻzinikini oladi.

## Joylashtirilgan variantni koʻrish

Elementni tanlang. **Xossalar** da **Kutubxona elementi** qutisida **Variant** qatori bor. IFC uni `CadCraft_LibraryItem` ichida saqlaydi: `Variant` (variant identifikatori), `VariantName` va `VariantValues` (parametr qiymatlari matn sifatida), shuning uchun boshqa dasturlar uni oʻqiy oladi.

## Boshqa variantga almashtirish

1. Joylashtirilgan elementni tanlang va **Kutubxona elementi** qutisida {{ui:Elementni almashtirish…}} ni bosing. {{ui:Kutubxona}} yorligʻi ochiladi.
2. Tepada **Quyidagining boshqa variantlari** — *element* har bir variantni oʻlchami bilan sanaydi. Joylashtirilgani belgilangan boʻladi va uni tanlab boʻlmaydi.
3. Kerakli variantda {{ui:…ga almashtirish}} ni bosing.

Element oʻz joyini, burilishini, qavatini, element raqamini, miqdorini va izohlarini saqlaydi; uning turi, shakli va maʼlumotlari boshqa variantga oʻzgaradi. {{key:Mod+Z}} birinchisini qaytaradi. Xohlasangiz, avvalgidek pastdagi roʻyxatdan boshqa elementni ham tanlashingiz mumkin. Qarang: [Joylashtirilgan elementni almashtirish va kutubxona elementlarini yangilash](topic:swap-and-update-library-items).

## Nusxalash, qoʻyish va yangilanishlar

- Joylashtirilgan variantning nusxasi xuddi shu variant boʻladi: shu modelda va xuddi shu brauzer yorligʻida ochilgan boshqa modelda, Nusxalash va Qoʻyish orqali.
- **Yangilanishlar** variantni saqlaydi: agar elementning yangi versiyasida u hali bor boʻlsa, joylashtirish yangi versiyaning oʻsha varianti boʻladi. Agar yangi versiyada u boʻlmasa, joylashtirish elementning standart variantini oladi.

## Yaxshi bilish kerak

- Faqat ayrim kutubxona elementlarida variantlar bor. Kartochkalar buni koʻrsatmaydi; elementni ochganingizda {{ui:Variant}} tanlovi koʻrinadi.
- Element har bir variant uchun **portlar** (quvur va havo kanallari uchun ulanish nuqtalari) roʻyxatiga ega boʻlishi mumkin. Kutubxona yorligʻi variantda nechta borligini koʻrsatadi. Ular hali Kutubxona yorligʻidan elementni joylashtirganda IFC ga yozilmaydi.
- 3D jismi boʻlmagan variant vaqtincha quti bilan joylashtiriladi, xuddi har qanday 2D belgi kabi.
- Tanlovdagi oʻlchamlar kutubxona yozganidek millimetrda.
