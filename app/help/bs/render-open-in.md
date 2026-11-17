---
title: Otvaranje scene u drugom programu
summary: Spasite scenu kao USD ili glTF datoteku za bilo koji program koji ih čita, ili je iz Studija otvorite u programu na ovom računaru.
keywords: otvori u, usd, gltf, glb, izvoz, program za renderovanje, archviz, studio, usdview, pošalji, predaja, paket, unreal fascikla
from: 0a6559ee
---

Odaberite stavku **Otvori u** na listi „Motor“ u {{ui:Renderuj}} da scenu odnesete u drugi program. Ništa se ne vraća modelu.

## Datoteka za bilo koji program

- **USD datoteka** spašava scenu kao `.usdc` (ili `.usdz` kad model sadrži slike): [ista datoteka kao Spasi kao USD](topic:usd), sa materijalima, svjetiljkama i kamerama. Zadržava instanciranje i tačne vrijednosti materijala. Većina renderera, motora za igre i pregledača čita USD.
- **glTF datoteka (.glb)** spašava lakšu glTF 2.0 datoteku sa materijalima, teksturama i svjetiljkama; vidi [Pošaljite model programu za renderovanje](topic:model-for-rendering) za to šta sadrži i šta izostavlja.
- **Fascikla Unreal projekta (.zip)** spašava fasciklu koju piše [Pošaljite scenu motoru za igre](topic:render-unreal), za projekat na bilo kojem računaru.

Sva tri rade u pregledniku i u Studiju.

## U Studiju: otvorite u programu

Studio nabraja programe koje nađe na ovom računaru, a koji mogu otvoriti scenu: usdview ako je na vašoj putanji za pretragu, i sistemski program za tu vrstu datoteke. Odaberite jedan, izaberite USD ili glTF gdje oba čita, i kliknite {{ui:Renderuj}}. Studio upisuje paket u novu fasciklu unutar Dokumenata (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobija svoju fasciklu) i pokreće program nad njom, zatim kaže gdje su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Sistemski program računara | Šta god računar ima za tu vrstu datoteke |

Studio pokreće samo programe sa ove fiksne liste; ne pokreće ništa što stranica zatraži po imenu, i nikada ne pokreće program pod GNU GPL licencom (vidi [Nacrtajte sliku drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Bilo koji program koji čita USD ili glTF otvara datoteku iz odjeljka **Datoteka za bilo koji program** iznad.

:::note
Twinmotion, Enscape i drugi vizualizacijski programi nisu na listi: CadCraft nije provjeren sa njima i ne tvrdi ništa o njima. glTF ili USD datoteka odavde je ulaz; vidi napomene o [rendererima sa dodacima](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
