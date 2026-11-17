---
title: Xossalar paneli maydonlari
summary: Xossalar paneli va Fayl, Chizma hamda Jild panellaridagi har bir maydon nimani anglatishi va ulardan qaysilarini oʻzgartirish mumkinligi.
keywords: xossalar, maydonlar, atributlar, globalid, guid, nusxalash, qiymatni nusxalash, hammasini nusxalash, csv, vaqtinchalik xotira, seriya raqami, teg, obyekt turi, qator, express id, xossalar toʻplami, pset, miqdorlar, sxema, fayl paneli
from: fe55b435
---

## IFC element

{{ui:Xossalar}} panelining tepasida elementning turi "Ifc" prefiksisiz (masalan "Door", "WallStandardCase", "FurnishingElement") va uning nomi, yoki nomi boʻlmasa "Nomsiz" koʻrsatiladi.

| Maydon | Maʼnosi | Tahrirlash mumkin |
|---|---|---|
| Nomi | Elementning nomi, koʻpincha eksportchi bergan oila va tur nomi | Ha |
| Turi | Elementning turi nomi, agar boʻlsa | Yoʻq |
| Obyekt turi | Baʼzi eksportchilar toʻldiradigan erkin matnli tur tavsifi | Ha |
| Teg | Elementning tegi yoki belgisi; koʻpgina eksportchilar bu yerga element ID sini yozadi | Ha |
| Tavsif | Erkin matn | Ha |
| GlobalId | Elementning doimiy 22 belgili IFC identifikatori, bir xil elementning har bir eksportida bir xil | Yoʻq |
| Qator | Elementning bu IFC faylidagi qator raqami (`#1234`). Eksportlar orasida oʻzgaradi | Yoʻq |

Quyida **xossalar toʻplamlari** nomi boʻyicha tartiblangan holda keladi:

- Har bir toʻplam uning nomini bosganda ochiladi yoki yopiladi. Birinchi uchtasi ochiq.
- "(type)" bilan belgilangan toʻplam elementning turiga tegishli: "Tur xossasi: bu yerdagi oʻzgarish shu turdagi har bir elementga qoʻllanadi."
- Miqdor toʻplamlari (uzunliklar, maydonlar, hajmlar, sanoqlar, ogʻirliklar) faqat oʻqish uchun.
- Roʻyxatlar va sanab oʻtilgan qiymatlar koʻrsatiladi, faqat oʻqish uchun.
- Ha/Yoʻq qiymatlar **Ha** yoki **Yoʻq** sifatida koʻrsatiladi.
- Raqamlar koʻrsatish uchun toʻrt oʻnlik kasrgacha yaxlitlanadi. Uzunliklar (uzunlik xossasi yoki miqdorning uzunligi) asboblar panelida tanlangan {{ui:Birliklar}} da, birligi bilan birga koʻrsatiladi. Ularga shu birlikda yoki boshqa birlik belgisi bilan (2.4 m, 8'-0") yangi qiymat yozishingiz mumkin: BimCraft faylning oʻz raqamini qayta yozadi. Boshqa raqamlar faylda qanday boʻlsa, shunday koʻrsatiladi.
- Boʻsh qiymat *boʻsh* sifatida koʻrsatiladi. Tahrirlangan qiymat qalin boʻladi va yonida koʻk chiziq boʻladi.

## Qiymatni nusxalash

{{ui:Xossalar}} dagi har bir qiymat yonida kichik nusxalash tugmasi bor: uni bosing, shu qiymat koʻrsatilganidek vaqtinchalik xotiraga tushadi, masalan GlobalId, seriya raqami yoki istalgan xossalar toʻplami qiymati. Nusxalash hech qachon tahrirlashni boshlamaydi.

Yuqorida {{ui:Hammasini nusxalash}} elementning barcha qiymatlarini toʻplam-toʻplam matn sifatida nusxalaydi, {{ui:CSV sifatida nusxalash}} esa ularni guruh, xossa va qiymat qatorlari sifatida elektron jadvalga qoʻyish uchun nusxalaydi. Boʻsh qiymatlar ham saqlanadi, shuning uchun har bir maydon uchun qator boʻladi. Bu boshqa ochiq modelning elementi uchun ham xuddi shunday ishlaydi; bir nechta model ochiq boʻlsa, CSV fayl nomini koʻrsatuvchi Model ustuni bilan boshlanadi.

## Fayl paneli (IFC)

| Maydon | Maʼnosi |
|---|---|
| Fayl, Hajmi | Siz ochgan fayl |
| Sxema | IFC versiyasi, masalan IFC2X3 yoki IFC4 |
| Loyiha | Loyihaning nomi va uzun nomi |
| Bosqich | Loyiha bosqichi, agar eksportchi yozgan boʻlsa |
| Eksport qilgan dastur | Eksport qiluvchi dastur, fayl sarlavhasidan |
| Muallif | Muallif, fayl sarlavhasida |
| Eksport sanasi | Fayl sarlavhasidagi sana va vaqt |
| Elementlar | Shakli bilan chizilgan elementlar soni |
| Uchburchaklar | Ularning shakllari hosil qilgan uchburchaklar soni; modelning ogʻirligi oʻlchovi |

## Fayl paneli (loyiha va oila fayllari)

| Maydon | Maʼnosi |
|---|---|
| Turi | Loyiha, Loyiha shabloni, Oila yoki Oila shabloni |
| Saqlangan versiya | Faylni oxirgi marta saqlagan versiya |
| Build | Oʻsha versiyaning aniq build raqami |
| O'qildi | BimCraft fayldan qancha oʻqiganini, uning hajmiga nisbatan |

## Chizma paneli (DWG va DXF)

| Maydon | Maʼnosi |
|---|---|
| Format | Chizma saqlangan versiya, format kodi bilan, masalan AC1032 |
| Birliklar | Chizmaning kiritish birliklari, agar oʻrnatilgan boʻlsa |
| Obyektlar | Nechta obyekt oʻqildi |
| Qatlamlar | Nechta qatlam |
| Varaqlar | Nechta varaq (maketlar), yoki Yoʻq |
| Bogʻlangan chizmalar | Bogʻlangan chizmalaridan nechtasi topildi va yuklandi |
| Jihozlar | Varaqlarda nechta belgilangan jihoz bor |

## Jild paneli

| Maydon | Maʼnosi |
|---|---|
| Jild, Fayllar, Hajmi | Siz ochgan jild, unda nechta fayl bor va ularning umumiy hajmi |
| Modellar | Loyiha va oila fayllari, har biri zaxira nusxalari bir marta hisobga olingan holda |
| CAD chizmalari, IFC modellari | Har biridan nechta |
| Muammolar | Nechta model nusxasi toʻliq emas yoki oʻqib boʻlmaydi, yoki Yoʻq |
