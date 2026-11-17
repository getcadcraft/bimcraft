---
title: Shëno elementët si të kontrolluar ose të verifikuar në terren
summary: Një element i lexuar nga një PDF ose skanim është i paverifikuar derisa ta kontrolloni. Shënoni elementët si të kontrolluar, ose si të verifikuar në terren (LOD 500) me kë i ka matur, kur dhe si, dhe jepni një model as-built që thotë cili është cili.
keywords: i paverifikuar, i verifikuar, i kontrolluar, i verifikuar në terren, as built, as-built, lod 500, mbyllje, dorëzim, i matur në vend, shirit mase, lazer, skanim, rilevim, ndërtesë ekzistuese, ndryshim, shëno si të kontrolluar, verifikim, faza 7
from: df35d908
---

## Çfarë do të bëni

Mbani gjurmë për atë që dikush në të vërtetë e ka parë në model. Një element ka një nga tri shenjat, ose asnjë:

- **I paverifikuar**: programi e ka njohur nga një PDF, një vizatim i skanuar, një vizatim i gjurmuar ose një skanim re pikash. Askush nuk e ka kontrolluar ende.
- **I kontrolluar**: një person e ka krahasuar me vizatimin nga i cili erdhi.
- **I verifikuar në terren (LOD 500)**: një person e ka matur në vend. Kush, kur dhe si mbahen bashkë me të.
- **Pa shenjë**: e vizatuar nga një person. Modeli nuk pretendon asgjë për të.

## Hapa

1. Zgjidhni një element ose shumë (mure, dyer, dritare, dhoma, çdo element).
2. Te {{ui:Vetitë}}, hapni {{ui:Verifikimi}}.
3. Shkruani kush e ka kontrolluar ose matur. Data është sot, përveç nëse e ndryshoni.
4. Klikoni {{ui:Shëno si të kontrolluar}}. Për një matje në vend, zgjidhni si u mat (shirit mase, metër lazer me distancë, skanim, rilevim) dhe klikoni {{ui:Shëno si të verifikuar në terren (LOD 500)}}.
5. {{ui:Shëno si të paverifikuar}} dhe {{ui:Hiq shenjën}} kthehen prapa. Çdo klikim është një hap që mund ta zhbëni, për tërë zgjedhjen.

Për të shënuar shpejt një zgjedhje: {{ui:Mjete}} › {{ui:Shëno si të kontrolluar}} (shkruar: `MARKCHECKED`) e shënon si të kontrolluar nga ju, sot.

## Çfarë duhet të shihni

- Në planimetri, një element i paverifikuar ka një kuti me vija të ndërprera dhe një "?"; një i verifikuar në terren ka një shenjë kontrolli. Hiqni zgjedhjen te {{ui:Shfaq shenjat e verifikimit në plan}} në seksionin {{ui:Auditimi}} për t'i fshehur.
- {{ui:Tabelat}} › {{ui:Verifikimi}} liston çdo element të shënuar me nivelin, gjendjen, kush, kur, si dhe nga erdhi.
- Auditimi liston elementët e paverifikuar, dhe numëron një element të verifikuar në terren si LOD 500. Shih [Audito modelin](topic:audit-the-model).

## Nga një skanim

Kur krahasoni një skanim me modelin, {{ui:Shëno elementët përkatës si të verifikuar në terren}} shënon çdo element që skanimi e pa si të ndërtuar brenda tolerancës, me metodën "skanim" dhe tolerancën në shënim. Shih [Krahaso një skanim me modelin](topic:compare-scan-with-model).

:::warning
Ai krahasim i përputh kutinë e secilit element me pikat e skanimit. Nuk është rilevim. Përdoreni për elementët që i keni parë edhe ju.
:::

## Modeli as-built dhe paketa e dorëzimit

{{ui:Ndërto paketën e dorëzimit}} te skeda {{ui:Asete}} e vendos modelin as-built në zip, me:

- një deklaratë te projekti për sa elemente janë të verifikuara në terren, të kontrolluara, të paverifikuara dhe pa shenjë;
- `as-built/verified-elements.csv`: çdo element dhe dhomë me gjendjen, kush, kur dhe si;
- `as-built/as-built-drawings.pdf`: grupi i vizatimeve siç është tani;
- regjistrin e ndryshimeve të vizatimeve, kur modeli ka nxjerrë grupe.

Shih [Asete dhe mirëmbajtja](topic:assets-and-maintenance).

## Si mbahet në IFC

Çdo element i shënuar mban grupin e vetive `CadCraft_Verification`: State, By, On, Method, Source, Note dhe LevelOfDevelopment (`LOD 500` kur është i verifikuar në terren). Ato janë veti thjesht tekst, kështu programet e tjera i listojnë, dhe Gjej, Ngjyros sipas vetisë dhe tabelat me etiketa mund t'i përdorin. Deklarata as-built është grupi i vetive `CadCraft_AsBuilt` te projekti. Një element pa grupin nuk është matur në vend.

## Tjetra

- [Muret nga një grup planesh](topic:walls-from-plans)
- [Audito modelin](topic:audit-the-model)
