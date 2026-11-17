---
title: Kutubxonadan jihoz va mebel joylashtirish
summary: Kutubxonadan, fayldan yoki ochiq chizmadan element toping, uni IFC modelining qavatiga oldindan koʻrinish (shaffof shabloni) bilan joylashtiring, buriting, devorga tutashtiring va saqlang.
keywords: koʻchirish, aylantirish, burish, sudrash, kutubxona, librarycraft, joylashtirish, qoʻyish, jihoz, mebel, blok, oila, element, katalog, kontent, kcl, csv, gltf, obj, rfa, dwg, ifc turi
from: 3dad5d4b
---

## Nima qilasiz

IFC modeliga kutubxona elementini joylashtirasiz: rakovina, ish stoli, stul. BimCraft uni turi bor toʻgʻri IFC element sifatida yozadi, shuning uchun bir xil elementning har bir nusxasi bitta geometriya toʻplamini ulashadi, uning maʼlumotlari, inventar raqami va litsenziyasi esa birga koʻchadi.

## Qadamlar

1. IFC modelini oching.
2. {{ui:Properties}} yonidagi oʻng tomondagi {{ui:Library}} yorligʻini yoki model ustidagi asboblar panelidagi {{ui:Library}} ni bosing.
3. Manbani tanlang:
   - **Built-in symbols**: BimCraft bilan birga keladigan, Apache-2.0 ostida umumiy santexnika plan belgilari, oflayn mavjud. Qurishdan oldin ularning oʻlchamlarini tekshiring. Elektr plan belgilari va IFC elektr qurilmalari uchun **Build › Electrical** dan foydalaning.
   - **Library**: bu saytdagi CadCraft kutubxonasi. Ommaviy elementlar uchun kirish shart emas.
   - **This file**: ochiq DWG yoki DXF chizmasining bloklari. Koʻrinish holatlari bilan dinamik blok har bir holat uchun bir marta taklif qilinadi, "Sink: Double bowl" nomi bilan, har biri faqat shu holatning obyektlari bilan chizilgan.
   - **Files…**: kompyuteringizdagi DWG, DXF, IFC, glTF/GLB, OBJ, RFA yoki CSV fayl. U shu yorliqda oʻqiladi; hech narsa yuklanmaydi.
   - **Other feeds**: bir xil feed formatini tushunadigan boshqa kutubxona. Uning manzilini bir marta qoʻshing; u shu brauzerda saqlanadi.
4. Kategoriyani qidiring yoki tanlang, soʻng kartochkani bosing. Kartochkada plan oldindan koʻrinishi, nomi, ishlab chiqaruvchi va modeli, litsenziya va versiya koʻrinadi.
5. {{ui:Place in plan}} ni bosing (Plan koʻrinishida) yoki {{ui:Place in model}} ni (3D koʻrinishda). Boʻlingan rejimda, plan va 3D birga koʻringanda, tugma boʻlinadigan tugma boʻladi: asosiy harakati {{ui:Place in plan}}, oʻng uchidagi strelka esa {{ui:Place in model}} bilan menyuni ochadi. Yoki kartochkani, yoki element tafsilotlaridagi rasmni planga yoki 3D koʻrinishga sudrang: element qoʻyib yuborgan joyingizga joylashadi. Qalam yoki barmoq bilan, kartochkani bir lahza bosib turing, soʻng sudrang.
6. Joylashtirish panelida qavatni tanlang. 3D koʻrinishda, joylashtirish paytida undan yuqoridagi qavatlar yashiriladi va koʻrinish tepaga buriladi; planda plan allaqachon shu qavatni koʻrsatadi. Planning oʻzidan {{ui:Place in model}} ni tanlash 3D koʻrinishni yonida ochadi.
7. Koʻrsatkichni model ustiga olib boring: shaffof quti element qayerga borishini koʻrsatadi.
8. Elementni 90° burish uchun {{key:R}} ni bosing. Uning orqasini eng yaqin devorga qoʻyish uchun, xonaga qaratib, {{key:Tab}} (yoki {{ui:Wall snap}}) ni bosing.
9. Joylashtirish uchun bosing. Yoki **X, Y (mm)** ga joy kiriting, masalan `1200, 3400`, va {{key:Enter}} ni bosing.

Yuqoridan osilgan yorugʻlik yoki boshqa narsa uchun **Mount** ni **Shiftga** ga oʻrnating. Elementning tepasi shu nuqtadagi shift ostki tomonida boʻladi (yoki shift boʻlmasa, qavat balandligida). Planda shift rejasi ochiq boʻlsa, **Mount** dastlab **Shiftga** tanlangan boʻladi.
10. Bitta savolga javob bering: **item number** (keyingi boʻsh raqam avtomatik toʻldiriladi), miqdor va izoh. {{key:Enter}} ni bosing.
11. Yana joylashtiring, yoki toʻxtatish uchun {{key:Esc}} ni bosing.
12. Tahrirlangan nusxani yuklab olish uchun {{ui:Save as IFC}} ni bosing.

## Reja yoki model

Kutubxonaning joylashtirish tugmasi siz turgan koʻrinishga boʻysunadi va koʻrinishni oʻzgartirsangiz darhol oʻzgaradi ({{ui:Plan}}, {{ui:Split}} va {{ui:3D}} tugmalari, klaviatura, faylni ochish). Plan bitta tugma koʻrsatadi, {{ui:Place in plan}}; 3D bitta tugma koʻrsatadi, {{ui:Place in model}}; Split boʻlingan tugmani koʻrsatadi, asosiy harakat {{ui:Place in plan}} va menyuda {{ui:Place in model}}. Ikkala usul ham bir xil joylashtirish panelidan foydalanadi va bir xil IFC elementini yozadi: biri uchun koʻrsatkich plan koʻrinishida, boshqasi uchun 3D koʻrinishda ishlaydi. Toʻxtatish uchun istalgan vaqtda {{key:Esc}} ni bosing.

Kartochkani sudrashning oʻz klavishi yoʻq: boʻlingan tugma yoki oddiy tugma klaviatura bilan bir xil ishni bajaradi.

## Joylashtirilgan elementni koʻchirish yoki burish

{{ui:Draw}} da planda elementni tanlang. Uning kiritish nuqtasida kvadrat tutqich va yonida yumaloq tutqich koʻrinadi.

- Uni koʻchirish uchun elementni yoki uning kvadrat tutqichini sudrang. U Devor asbobi kabi tutashadi (devor uchlari va yuzlari); {{key:Shift}} uni oʻsha joyga nisbatan toʻgʻri holatda ushlaydi.
- Yumaloq tutqichni sudrab 15° qadamlarda buring. 1° qadamlar uchun {{key:Shift}} ni ushlab turing.
- 90° burish uchun {{key:R}} ni bosing.
- **Properties** da (3D koʻrinishda ham), **X**, **Y** va **Rotation (°)** ni kiriting yoki **Turn 90°** ni bosing.

Har bir koʻchirish bitta bekor qilish qadami va Live TeamWork orqali uzatiladi. Element oʻz inventar raqamini, kutubxona maʼlumotlarini va qavat ustidagi balandligini saqlaydi. Hali tayyor emas: 3D koʻrinishda sudrash.

## Nimani koʻrishingiz kerak

- Modelda element tanlangan holda, oʻng tomonda xossalari bilan: litsenziya va mualliflik bilan **Library item** qutisi, va `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` toʻplamlari, belgilangan chizmalardan olingan elementlar uchun esa `CadCraft_SourceAttributes`.
- Oʻzgarishlar roʻyxatida "Placed: *item* (item *n*)". {{key:Mod+Z}} uni bekor qiladi.
- Holat satri: "Placed *item* as item *n*."

## Foydali maʼlumot

- Ba'zi elementlar bir necha oʻlchamda yoki variantda keladi: kartochkada **Variant** tanlovi boʻladi va siz tanlagan variant joylashtiriladi. Qarang: [Variantli kutubxona elementini joylashtirish va almashtirish](topic:library-variants).
- 3D tanasi boʻlmagan element (2D belgi) turgan qutisi bilan joylashtiriladi; uning balandligini soʻralganda kiritasiz.
- Yana shunday nusxalar uchun joylashtirilgan elementni tanlab {{ui:Copy}} va {{ui:Paste}}, yoki {{key:Mod+D}} dan foydalaning. Qarang: [Kutubxona elementlarini nusxalash, joylashtirish va dublikat qilish](topic:copy-paste).
- Har bir joylashtirish devor tutashuvi yoqilgan holda boshlanishi uchun, [BimCraft sozlamalari](topic:settings) da **Start with wall snap on** ni yoqing.
- Uzunliklar modelning oʻz birliklariga aylantiriladi, qanday boʻlishidan qatʼi nazar.
- **Entourage** (daraxtlar, butalar, odamlar, mashinalar) ham kutubxonada bor: "tree", "person" yoki "car" deb qidiring. Ular CadCraft tomonidan chizilgan (CC0) va joylashtirilganda rangini saqlaydi (tanasi jigarrang, barglari yashil, mashina oynalari shaffof), BimCraft da va boshqa BIM dasturlarida. Ular [render qilingan rasmlar](topic:render) da koʻrinadi.
- IFC2X3 faylida tana faset qattiq jism sifatida, IFC4 da uchburchaklangan yuzlar toʻplami sifatida yoziladi. Ikkalasi ham boshqa IFC vositalarida ochiladi.
- Chizma (DWG yoki DXF) bu yerda saqlanmaydi, shuning uchun elementlar faqat IFC modellarga joylashtiriladi. Chizmada **This file** dan foydalanib, uning bloklari nimaga aylanishini koʻring.

## Tilingizdagi elementlar

Elementda nomi, tavsifi va turi boshqa tillarda boʻlishi mumkin. BimCraft sozlangan tilda bular boʻlsa (Settings › General › Language), elementning sahifasida ular koʻrinadi va ishlab chiqaruvchi bergan nom pastida turadi; **Place** tilingizdagi nomni modelga yozadi, shuning uchun {{ui:Equipment}} jadvali uni shunday roʻyxatlaydi. Element baribir oʻsha element boʻlib qoladi: yangilanishlarni tekshirish va almashtirish elementning oʻzi boʻyicha ishlaydi, nomi boʻyicha emas. Tarjimasi boʻlmagan elementlar oʻz soʻzlarini saqlaydi.

## Keng tarqalgan xatolar

- **Joylashtirish tugmasi yoʻq.** IFC modeli ochilmagan. Avval uni oching.
- **Shabloni koʻrsatkichga ergashmaydi.** Koʻrsatkich model maydonidan tashqarida, yoki qavat tekisligi koʻrinishda emas. {{ui:Top}} ni bosing.
- **{{ui:Wall snap}} devor yoʻqligini aytadi.** Qavatda IFC da devor yoʻq (ba'zi eksportlar devorlarni boshqa qavatga qoʻyadi). Shu qavatni tanlang yoki X va Y ni kiriting.
- **Faylning elementlari notoʻgʻri oʻlchamda.** Faylda birliklar yoʻq yoki notoʻgʻri. **Files…** da birliklarni tanlang va faylni qayta oʻqing.

:::tip
Bir elementni ikki marta joylashtirish bitta IFC turini ulashadi, shuning uchun qirq ta stulli model stulni bir marta saqlaydi.
:::
