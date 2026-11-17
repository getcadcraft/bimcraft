---
title: Otvorite scenu u drugom programu
summary: Spremite scenu kao USD ili glTF datoteku za bilo koji program koji ih čita ili je iz Studija otvorite u programu na ovom računalu.
keywords: otvori u, usd, gltf, glb, izvoz, program za render, archviz, studio, usdview, pošalji, predaja, paket, mapa unreal
from: 0a6559ee
---

Odaberite stavku **Otvori u** na popisu Motor u {{ui:Render}} da odnesete scenu u drugi program. Ništa se ne vraća u model.

## Datoteka za bilo koji program

- **USD datoteka** sprema scenu kao `.usdc` (ili `.usdz` kad model sadrži slike): [ista datoteka kao Spremi kao USD](topic:usd), s materijalima, svjetiljkama i kamerama. Zadržava instanciranje i točne vrijednosti materijala. Većina renderera, game engine alata i preglednika čita USD.
- **glTF datoteka (.glb)** sprema lakšu glTF 2.0 datoteku s materijalima, teksturama i svjetiljkama; vidi [Pošaljite model programu za render](topic:model-for-rendering) za ono što nosi, a što izostavlja.
- **Mapa Unreal projekta (.zip)** sprema mapu koju piše [Pošaljite scenu game engineu](topic:render-unreal), za projekt na bilo kojem računalu.

Sva tri rade u pregledniku i u Studiju.

## U Studiju: otvorite u programu

Studio popisuje programe koje pronađe na ovom računalu, a mogu otvoriti scenu: usdview ako je na vašoj stazi pretraživanja i program računala za taj tip datoteke. Odaberite jedan, odaberite USD ili glTF tamo gdje čita oboje, i kliknite {{ui:Render}}. Studio piše paket u novu mapu unutar Dokumenata (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobiva svoju mapu), pokreće program nad njom i zatim kaže gdje su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Vlastiti program računala | Što god računalo ima za taj tip datoteke |

Studio pokreće samo programe s ovog fiksnog popisa; ne pokreće ništa što stranica traži po imenu, i nikad ne pokreće program pod licencom GNU GPL (vidi [Nacrtajte sliku drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Svaki program koji čita USD ili glTF otvara datoteku iz odjeljka **Datoteka za bilo koji program** iznad.

:::note
Twinmotion, Enscape i drugi programi za vizualizaciju nisu na popisu. CadCraft s njima nije provjeren i ne daje nikakve tvrdnje o njima. Ulaz je USD ili glTF datoteka odavde; vidi napomene o [renderima putem dodataka](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
