---
title: Papka hisoboti: rollar, holatlar va havolalar
summary: Papka hisobotidagi har bir yorliq, uning maʼnosi va "Shu yerdan boshlang" taklifi qanday tanlanishi.
keywords: papka hisoboti, rollar, holat, toʻliq, toʻliq emas, oʻqib boʻlmaydi, fon, boshlangʻich, markaziy, oila, faqat zaxira nusxalar, shu yerdan boshlash, havola holati
from: b35bdd10
---

## Nusxa holati

Modelning har bir nusxasi — asosiy fayl va raqamlangan zaxira nusxalar ham — sarlavha tekshiruvidan oʻtadi.

| Yorliq | Maʼnosi |
|---|---|
| **Toʻliq** | Fayl sarlavhasi va indeksi fayl ichiga sigʻadi |
| **Toʻliq emas** | Fayl oʻz indeksidan qisqa: u nusxalash, yuklash yoki sinxronlash vaqtida kesilgan, yoki bu bulutli fayl hali "faqat onlayn" holatida |
| **Oʻqib boʻlmaydi** | Fayl yaroqli compound fayl emas yoki oʻqib boʻlmadi |

**Holat** ustunida model **Toʻliq** holatini koʻrsatadi; agar kamida bitta nusxa buzilgan, lekin boshqasi sogʻ boʻlsa, sariq "*n* ta toʻliq emas"; agar hech bir nusxa sogʻ boʻlmasa, qizil **Toʻliq emas**.

## Zaxira nusxalar

`Name.0001.rvt`, `Name.0002.rvt` va hokazo fayllar `Name.rvt` ning raqamlangan zaxira nusxalaridir. Ular modeli ostida, eng yangisi birinchi boʻlib, **Barcha … nusxalari** da guruhlanadi. Karta asosiy fayldan oʻqiladi, agar u toʻliq boʻlsa, aks holda eng yangi toʻliq zaxira nusxadan ("eng yangi toʻliq").

## Rollar

Model nomi ostida kursivda koʻrsatiladi.

| Rol | Maʼnosi |
|---|---|
| *Boshqa model tomonidan bogʻlangan*: fon | Papkadagi boshqa model bu modelga bogʻlangan, shuning uchun u koʻpincha birovning fon modeli, masalan maslahatchining modeli |
| Boshlangʻich yoki nomsiz fayl | Blank, Template, Default, Untitled yoki Project1 kabi nom: boshlanish nuqtasi yoki hech qachon toʻgʻri nomlanmagan fayl |
| Markaziy model | Hamkorlikda ishlanadigan markaziy model. Ish bu yerda emas, mahalliy nusxada bajariladi |
| Oila (komponent) | `.rfa` yoki `.rft` fayl: loyiha emas, komponent |
| Faqat zaxira nusxalar | Asosiy fayl yoʻq, faqat raqamlangan zaxira nusxalar qolgan |

## "Shu yerdan boshlang" qanday tanlanadi

BimCraft tajribali foydalanuvchi qiladigan mulohazalarni qoʻllaydi:

1. Nomzodlar — boshqa model tomonidan bogʻlanmagan va boshlangʻich boʻlmagan oʻqiladigan loyiha fayllari (`.rvt`, `.rte`).
2. Markaziy va faqat zaxira nusxali modellar faqat yaxshiroq variant boʻlmasa hisobga olinadi.
3. Nomzodlar ichida eng oxirgi saqlangani gʻalaba qozonadi.

Roʻyxatda uning sabablari koʻrsatiladi. Tanlov aniq koʻringan fayl buzilgan boʻlsa, boshqa modellar fon boʻlsa yoki tanlov markaziy model boʻlsa, ogohlantiradi. Bu taxminiy tanlov; loyihada oxirgi marta ishlagan kishi bilan tekshiring.

## Havola holati

| Yorliq | Maʼnosi |
|---|---|
| **Shu papkada** | Saqlangan nisbiy yoʻlda yoki saqlangan toʻliq yoʻl oxirida, papka ichida topildi |
| **Bir xil nomli topildi** | Oʻz yoʻlida emas, lekin papkada bir xil nomli fayl bor. Toʻgʻriligini tekshiring |
| **Kutubxona fayli** | Asosiy yozuvlar yoki yigʻish kodlari jadvali. Ular har bir kompyuterda dastur bilan birga keladi |
| **Bu papkada yoʻq** | Papkaning hech qayerida topilmadi |

**Topilgan havolalar** ustuni **Modellar** boʻlimida modelning kutilgan havolalaridan nechtasi papkada topilganini koʻrsatadi (kutubxona fayllari hisobga olinmaydi).

## Chetga surilganlar

| Qator | Maʼnosi |
|---|---|
| Revit xizmat papkalari (oʻqilmaydi) | `*_backup`, `*_log` va `Revit_temp` papkalar, shuningdek yashirin papkalar va `__MACOSX` |
| Qulf, log va zaxira qoldiqlari | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` va `.slog` fayllar |
| Boshqa fayllar | Qolgan hammasi (birinchi 40 tasi nomlanadi) |
