---
title: BimCraft har bir formatdan nimani oʻqiydi
summary: BimCraft IFC, loyiha va oila fayllari, DWG va DXF dan aniq nimani oʻqiydi va nimaga tegmaydi.
keywords: formatlar, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiyalar, moslik, nima oʻqiladi
from: 9b8dfb4f
---

## IFC

| Oʻqiladi | Tafsilotlar |
|---|---|
| Geometriya | Shakli bor har bir element, fayl aytgan rangda. Xonalar va boʻshliqlar shaffof chiziladi va dastlab yashirin |
| Qavatlar | Bino qavatlari balandlik tartibida va har birida qaysi elementlar turgani. Hech bir qavatda boʻlmagan elementlar "Qavatda emas" deb guruhlanadi |
| Element sonlari | Har bir turdagi elementlar soni (devorlar, eshiklar, plitalar…), **Elementlar** da koʻrsatiladi |
| Loyiha maʼlumotlari | Loyiha nomi, uzun nomi va bosqichi; sxema; fayl sarlavhasidagi eksport qiluvchi dastur, muallif va eksport sanasi |
| Element maʼlumotlari | Nomi, turi, obyekt turi, belgi, tavsif, GlobalId; elementda va uning turida boʻlgan har bir xossalar toʻplami hamda miqdorlar toʻplami |

Tahrirlash mumkin: nom, obyekt turi, belgi, tavsif va bitta xossa qiymatlari. Yangi IFC fayl sifatida saqlanadi. IFC2X3, IFC4 va IFC4X3 sxemalari ochiladi, BimCraft oʻzining IFC dvigateli bilan oʻqiydi; hali chizib boʻlmaydiganlari {{ui:Fayl}} panelida **Hali chizilmagan** ostida roʻyxatga olinadi. Model ochilganda boshlangʻich nuqtaga suriladi, shuning uchun undan uzoqda joylashgan model ham ekran oʻrtasida koʻrinadi. `.ifczip` va `.ifcxml` ochilmaydi.

## Loyiha va oila fayllari

`.rvt` loyihalar, `.rte` loyiha shablonlari, `.rfa` oilalar va `.rft` oila shablonlari.

| Oʻqiladi | Tafsilotlar |
|---|---|
| Fayl maʼlumoti | Versiya va yigʻilish, birgalikda ishlash, markaziy model yoʻli, oxirgi saqlangan yoʻl, foydalanuvchi nomi, lokal, hujjat GUID |
| Loyiha maʼlumoti | Loyihaning oʻz maydonlari (nomi, raqami, mijoz, manzil, holati…), yangi loyiha standart qiymatlarisiz |
| Oila maʼlumoti | Oila nomi, kategoriya, versiya, oxirgi yangilanish va uning parametrlari guruhlar boʻyicha |
| Havolalar | Fayl koʻrsatadigan bogʻlangan modellar, CAD havolalar, rasmlar va kalit jadvallar roʻyxati |
| Oldindan koʻrish rasmi | Faylda saqlangan miniatyura |

Oʻqilmaydi: 3D model, elementlar, koʻrinishlar, varaqlar va jadvallar. Ular hujjatlanmagan formatda saqlanadi. BimCraft har bir fayldan bir necha oʻn kilobaytgina oʻqiydi, shuning uchun fayl hajmi deyarli ahamiyatga ega emas.

## .pln, .pla, .tpl va .bpn loyiha fayllari

Hali oʻqilmaydi: ochganingizda BimCraft buni aytadi. Model uchun IFC va chizmalar uchun DWG eksport qiling; qarang [.pln va .pla loyiha fayllarini ochish](topic:pln-project-files).

## DWG va DXF

| Oʻqiladi | Tafsilotlar |
|---|---|
| Fazolar | Model fazosi va har bir varaq (layout), jadval tartibida |
| Koʻrinishlar | Har bir varaqdagi koʻrinishlar, ularning masshtabi, burilishi va muzlatilgan qatlamlari bilan |
| Qatlamlar | Nomi, rangi, yoqilgan/oʻchirilgan, muzlatilgan, chop etish belgisi va chiziq qalinligi |
| Obyektlar | Chiziqlar, polichiziqlar, yoylar, aylanalar, ellipslar, splaynlar, shtrixlashlar va jismlar, matn va koʻp qatorli matn, bloklar va atributlar, oʻlchamlar, yetakchilar va koʻp yetakchilar, jadvallar, nuqtalar, rasmlar |
| Bogʻlangan chizmalar | Qoʻyilgan joyida chiziladi, fayllari topilganda |
| Rasmlar | Rasm fayllaridan chiziladi, topilganda (PNG, JPEG, GIF, BMP, WebP; TIFF emas) |
| Jihoz belgilari | Oziq-ovqat xizmati element belgilari (`KCL-ITEM` atributlari), jihozlar jadvali uchun |

Boshqa hamma narsa **Hali chizilmagan** ostida sanaladi, hech qachon taxmin qilinmaydi. Tekshirilgan DWG formatlari AutoCAD 2000 dan 2018 gacha (R13 va R14 fayllari ham qabul qilinadi, lekin sinov toʻplamida boʻlmagan; eskiroq DWG lar ochilmaydi). {{ui:Chizma}} paneli format kodini (masalan AC1032) koʻrsatadi. Har qanday versiyadagi DXF fayllar ochiladi, R12 ham. Ikkalasi ham BimCraft ning oʻz oʻqish dasturlari bilan, shu yorliqda oʻqiladi. DWG yoki DXF ga hech narsa qaytarib saqlanmaydi.

## Papkada

| Tur | Kengaytmalar | Hisobotda |
|---|---|---|
| Modellar | `.rvt` `.rfa` `.rte` `.rft` | Raqamlangan zaxira nusxalari bilan guruhlangan, sogʻligi tekshirilgan, kartochkasi oʻqilgan, havolalari tekshirilgan |
| IFC | `.ifc` | Roʻyxatga olinadi; 3D da ochiladi |
| CAD | `.dwg` `.dxf` `.dgn` | Ularni bogʻlaydigan modellar bilan roʻyxatga olinadi; DWG va DXF 2D da ochiladi, DGN ochilmaydi |
| Qoldiqlar | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | **Chetga surilgan** ostida roʻyxatga olinadi |
| Xizmat papkalari | `*_backup`, `*_log`, `Revit_temp`, yashirin papkalar | **Chetga surilgan** ostida roʻyxatga olinadi, oʻqilmaydi |

Qarang: [Papka hisoboti: rollar, holatlar va havolalar](topic:folder-roles).
