---
title: Modelni USD sifatida eksport qilish
summary: Ochiq IFC modellarini render qilish, sahna yigʻish va boshqa 3D dasturlar uchun USD sifatida yozing, har bir elementning IFC sinfi, GlobalId va xossalari bilan.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, xossalar, qavatlar, sohalar, sahna yigʻish, archviz, render qilish
from: 2be5f7b8
---

{{ui:USD}} asboblar panelida ochiq boʻlgan hamma narsani (barcha modellar, siz joylashtirgan federativ modellar ham) bitta USD fayl sifatida yozadi.

## Eksport

1. Asboblar panelida {{ui:USD}} ni tanlang.
2. {{ui:Matn (.usda)}}, {{ui:Ikkilik (.usdc)}} yoki {{ui:Paket (.usdz)}} ni tanlang.
3. Fayl yuklab olinadi. Holat paneli nechta element kirganini koʻrsatadi.

## Fayl ichida nima bor

| IFC modelida | USD faylida |
|---|---|
| Sayt, bino, qavatlar | Ichma-ich guruhlar, qavatlar balandlik tartibida |
| Har bir element | Oʻz qavati va sohasi (Architecture, Structure, MEP, Furnishing, Site, Spaces, Other) ostida bitta prim, geometriyasi mesh sifatida |
| Sinf, GlobalId, nomi, tur, teg | `ifc:class`, `ifc:globalId`, `ifc:name` va hokazo nomli atributlar |
| Xossa va miqdor toʻplamlari | Har bir xossa uchun bitta atribut; uzunlik, maydon va hajmlar metrda, kvadrat metrda va kub metrda |
| Ranglar | Materiallar (shaffoflik bilan) |
| Fazolar | Saqlanadi, renderlovchilar oʻtkazib yuborishi uchun yoʻriqnoma sifatida belgilanadi |

Geometriya IFC faylining oʻz koordinatalarida turadi. Tartib binolar uchun CadCraft USD qoidalariga amal qiladi.
