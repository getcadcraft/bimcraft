---
title: Otvaranje scene u drugom programu
summary: Sačuvaj scenu kao USD ili glTF datoteku za bilo koji program koji ih čita, ili je otvori iz Studija u programu na ovom računaru.
keywords: otvori u, usd, gltf, glb, izvoz, program za renderovanje, archviz, studio, usdview, pošalji, predaja, paket, fascikla za Unreal
from: 0a6559ee
---

Izaberi stavku **Otvori u** na listi motora u {{ui:Render}} da scenu odneseš u drugi program. Ništa se ne vraća u model.

## Datoteka za bilo koji program

- **USD datoteka** čuva scenu kao `.usdc` (ili `.usdz` kad model ima slike): [ista datoteka kao Sačuvaj kao USD](topic:usd), sa materijalima, svetiljkama i kamerama. Zadržava ponavljanje instanci i tačne vrednosti materijala. Većina renderera, alata za igre i pregledača čita USD.
- **glTF datoteka (.glb)** čuva lakšu glTF 2.0 datoteku sa materijalima, teksturama i svetiljkama; vidi [Pošalji model programu za renderovanje](topic:model-for-rendering) za to šta sadrži i šta izostavlja.

- **Fascikla Unreal projekta (.zip)** čuva fasciklu koju piše [Pošalji scenu alatu za igre](topic:render-unreal), za projekat na bilo kom računaru.

Sva tri rade u pregledaču i u Studiju.

## U Studiju: otvori u programu

Studio navodi programe koje nađe na ovom računaru i koji mogu da otvore scenu: usdview ako je na tvojoj putanji za pretragu i sopstveni program računara za taj tip datoteke. Izaberi jedan, izaberi USD ili glTF gde čita oba, i klikni {{ui:Render}}. Studio piše paket u novu fasciklu u Dokumentima (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobija svoju fasciklu), pokreće program nad njom i kaže gde su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Sopstveni program računara | Šta računar ima za taj tip datoteke |

Studio pokreće samo programe sa ove fiksne liste; ne pokreće ništa što mu stranica traži po imenu, i nikad ne pokreće program pod GNU GPL licencom (vidi [Nacrtaj sliku drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Svaki program koji čita USD ili glTF otvara datoteku iz odeljka **Datoteka za bilo koji program** gore.

:::note
Twinmotion, Enscape i ostali vizuelizacioni programi nisu na listi: CadCraft ih nije proveravao i ne tvrdi ništa o njima. USD ili glTF datoteka odavde je put do njih; vidi napomene o [renderima sa dodacima](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
