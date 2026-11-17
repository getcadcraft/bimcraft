---
title: Sienas no pārzīmēta rasējuma
summary: Pārveidojiet DWG vai DXF plānu par sienām, durvīm un logiem stāvā un paturiet rasējumu zem plāna kā atsauci.
keywords: dwg, dxf, pārzīmēt, pārzīmēts, importēt plānu, konvertēt, no CAD uz BIM, no 2D uz 3D, sienas no līnijām, slāņi, bloki, durvis no blokiem, pamatne, atsauces rasējums, fons, xref, zīmēšanas lietotne
from: 3bf213f1
---

## Ko jūs darīsiet

Izmantojiet plānu, ko jūs (vai kāds cits) uzzīmējāt zīmēšanas lietotnē, kā modeļa sākumu: tā sienu līnijas kļūst par sienām, tā durvju un logu bloki — par durvīm un logiem.

## Soļi

1. Ieslēdziet {{ui:Zīmēšana}} un izvēlieties stāvu, ko rasējums rāda plāna stāvu sarakstā.
2. Izvēlieties {{ui:Būvējums}} › {{ui:No rasējuma…}}, tad {{ui:Izvēlēties rasējumu…}} un izvēlieties DWG vai DXF.
3. Dialogā:
   - **Rasējuma mērvienības** nāk no rasējuma; izvēlieties citas, ja tās ir nepareizas (plāns, zīmēts pēdās, bet lasīts kā collas, ir divpadsmit reizes par mazs).
   - **Slāņi ar sienām**: atzīmējiet slāņus, kuros atrodas sienu līnijas. Slāņi, kuru nosaukumi satur "wall", tiek atzīmēti jūsu vietā.
   - **Līnijas ir**: **abas katras sienas malas** (parasts plānu zīmēšanas veids: katrs paralēlo līniju pāris līdz 600 mm attālumā kļūst par vienu sienu, tik biezu, cik sprauga), **sienu centrālās līnijas** vai **viena mala** ar sienu pa kreisi vai pa labi. Ar centrālajām līnijām vai vienu malu sienas tips nosaka biezumu.
   - **Sienas tips** un **Sienas augstums**, kā {{ui:Siena}} rīkam.
   - **Bloki**: izvēlieties durvju vai logu tipu katram blokam, kas ir durvis vai logs, vai atstājiet to ārpus. Blokus, kuru nosaukumi satur "door" vai "window", izvēlas jūsu vietā. Katrs tiek ievietots sienā, uz kuras tas atrodas, tikpat plats, cik bloks gar sienu; durvis atveras uz to pusi, kur ir uzzīmēta to atvēršanās līnija.
   - **Kur tas iet**: pēc rasējuma pašu koordinātēm vai ar tā apakšējo kreiso stūri plāna sākumpunktā.
   - **Saglabāt rasējumu zem šī stāva plāna**: atstājiet atzīmētu, lai redzētu rasējumu kā plānas līnijas zem tā, ko veidojat.
4. Līnija zem izvēlēm saka, cik sienu, durvju un logu tā izveidos. Noklikšķiniet uz {{ui:Izveidot tās}}.

## Ko jums vajadzētu redzēt

- Sienas, durvis un logi stāvā, savienoti tur, kur tie saiet, ar telpām, ko tie noslēdz; viss ir viens solis, tāpēc {{key:Mod+Z}} to atceļ.
- Rasējums kā plānas līnijas zem plāna. {{ui:Būvējums}} › {{ui:No rasējuma…}} uzskaita stāvā saglabātos rasējumus, katru ar {{ui:Noņemt}}; viena rasējuma noņemšana atstāj sienas.
- IFC failā saglabātais rasējums ir anotācija uz stāva (tā līnijas), tāpēc arī citas BIM programmas to rāda.

:::note
PDF vai skenējums arī darbojas: skatiet [Sienas no plānu komplekta](topic:walls-from-plans). Loki tiek izlaisti (BimCraft zīmē taisnas sienas), tāpat kā līnijas blokos. Līnijas bez partnera režīmā "abas malas" tiek saskaitītas dialogā un izlaistas: zīmējiet šīs sienas ar {{ui:Siena}} rīku vai sakārtojiet tās ar {{ui:Labot}} › {{ui:Apgriezt / pagarināt}} (skatiet [Apgriezt, pagarināt un savienot sienas](topic:trim-extend-walls)).
:::

:::tip
Pārzīmējāt pār skenējumu zīmēšanas lietotnē? Atveriet arī skenējumu šeit un pārbaudiet sienas pret to: skatiet [Modelis no skenējuma](topic:model-from-a-scan).
:::
