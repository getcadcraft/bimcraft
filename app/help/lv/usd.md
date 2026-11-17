---
title: Modela eksportēšana kā USD
summary: Rakstiet atvērtos IFC modeļus kā USD renderēšanai, ainu salikšanai un citām 3D programmām, ar katra elementa IFC klasi, GlobalId un rekvizītiem.
keywords: usd, usda, usdc, usdz, openusd, eksports, ifc, globalid, rekvizīti, stāvi, disciplīnas, ainas salikšana, archviz, renderēšana
from: 2be5f7b8
---

{{ui:USD}} rīkjoslā ieraksta to, kas ir atvērts (katru modeli, federētos tur, kur tos esat novietojis), vienā USD failā.

## Eksports

1. Izvēlieties {{ui:USD}} rīkjoslā.
2. Izvēlieties {{ui:Teksts (.usda)}}, {{ui:Binārs (.usdc)}} vai {{ui:Pakotne (.usdz)}}.
3. Fails tiek lejupielādēts. Statusa josla norāda, cik elementu tika iekļauti.

## Kas ir failā

| IFC modelī | USD failā |
|---|---|
| Teritorija, ēka, stāvi | Iekārtotas grupas, stāvi kārtībā pēc augstuma |
| Katrs elements | Viens prims zem sava stāva un disciplīnas (Arhitektūra, Konstrukcijas, MEP, Iekārtojums, Teritorija, Telpas, Citi) ar tā ģeometriju kā tīklu |
| Klase, GlobalId, nosaukums, tips, marķējums | Atribūti ar nosaukumiem `ifc:class`, `ifc:globalId`, `ifc:name` un tā tālāk |
| Rekvizītu un daudzumu kopas | Viens atribūts katram rekvizītam; garumi, laukumi un tilpumi metros, kvadrātmetros un kubikmetros |
| Krāsas | Materiāli (ar caurspīdīgumu) |
| Telpas | Saglabātas, atzīmētas kā vadlīnijas, lai renderētāji tās izlaistu |

Ģeometrija atrodas IFC faila pašu koordinātēs. Izkārtojums seko CadCraft rakstītajām USD konvencijām ēkām.
