---
title: Ava stseen teises programmis
summary: Salvesta stseen USD-failina või glTF-failina mis tahes programmile, mis neid loeb, või ava see Studiost arvutis olevas programmis.
keywords: ava programmis, usd, gltf, glb, eksport, renderdusprogramm, archviz, studio, usdview, saada, üleandmine, pakett, Unreali kaust
from: 0a6559ee
---

Vali {{ui:Renderda}} dialoogi mootorite loendis kirje **Ava programmis …**, et viia stseen teise programmi. Midagi ei tule mudelisse tagasi.

## Fail mis tahes programmile

- **USD-fail** salvestab stseeni kui `.usdc` (või `.usdz`, kui mudelil on pildid): [sama fail, mis Salvesta nimega USD](topic:usd), koos materjalide, valgustite ja kaameratega. See säilitab eksemplarid ja täpsed materjalivärtused. Enamik renderdajaid, mängumootoreid ja vaatajaid loevad USD-d.
- **glTF-fail (.glb)** salvestab kergema glTF 2.0 faili materjalide, tekstuuride ja valgustitega; vt [Saada mudel renderdusprogrammile](topic:model-for-rendering), mida see kaasa võtab ja mida jätab välja.
- **Unreali projekti kaust (.zip)** salvestab kausta, mille kirjutab [Saada stseen mängumootorisse](topic:render-unreal), projektile mis tahes arvutis.

Kõik kolm töötavad nii brauseris kui ka Studios.

## Studios: ava programmis

Studio loetleb arvutis leitud programmid, mis suudavad stseeni avada: usdview, kui see on teie otsinguteel, ja arvuti enda programmi selle failitüübi jaoks. Vali üks, vali USD või glTF seal, kus programm mõlemat loeb, ning klõpsa {{ui:Renderda}}. Studio kirjutab paketi uude kausta dokumentide alla (`CadCraft hand-off`; midagi ei kirjutata üle, iga saatmine saab oma kausta), käivitab programmi selles ja ütleb, kus failid on.

| Programm | Loeb kõige paremini |
|---|---|
| usdview | USD |
| Arvuti enda programm | Mida arvutil on selle failitüübi jaoks |

Studio käivitab ainult selle fikseeritud loendi programme; ta ei käivita midagi, mida leht nimepidi palub, ega käivita kunagi GNU GPL litsentsiga programmi (vt [Joonista pilt teise programmiga](topic:render-other-program#programs-cadcraft-never-runs)). Iga programm, mis loeb USD- või glTF-d, avab faili jaotisest **Fail mis tahes programmile** ülal.

:::note
Twinmotion, Enscape ja teised visualiseerimisprogrammid ei ole loendis: CadCraft pole nendega kontrollitud ja ei esita nende kohta väiteid. Sellest saadud glTF- või USD-fail on sisendtee; vt märkused jaotises [pistikprogrammi renderdajad](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
