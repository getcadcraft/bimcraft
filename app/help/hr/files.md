---
title: Datoteke koje BimCraft otvara i sprema
summary: Svaki format koji BimCraft otvara, što zadržava, što sprema, kamo idu spremljene datoteke i što se mijenja između preglednika i kad ste izvan mreže.
keywords: formati, otvori, spremi, izvezi, preuzmi, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, učitaj, privatnost, veličina datoteke
from: a7275dbf
---

BimCraft čita datoteke na vašem računalu, u kartici preglednika. **Ništa se ne učitava** na CadCraft ni bilo kome drugome. Kad spremate, BimCraft pregledniku predaje novu datoteku za preuzimanje; nikad ne prepisuje datoteku koju ste otvorili.

## Što otvara

| Format | Ekstenzije | Što dobivate |
|---|---|---|
| IFC | `.ifc` | Model u 3D, etaže, broj elemenata i svojstva svakog elementa. Nazivi, oznake i pojedinačne vrijednosti svojstava mogu se mijenjati. |
| Datoteke projekta i obitelji | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, verzija, zajednički rad, podaci o projektu, parametri obitelji, povezane datoteke i slika pregleda. Bez 3D prikaza. |
| DWG | `.dwg` | Crtež u 2D: prostor modela, svaki list, slojevi, vanjske reference (Xref), slike i prikaz za ispis. Prostor modela i u 3D. Provjereni su formati od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Dio, komad opreme ili model dobavljača (AP203, AP214, AP242) u 3D: svako tijelo postaje jedan element (zamjenski element građevine) malog IFC modela na jednoj etaži, čita se kao trokuti prave veličine, a sklop sadrži svaki dio na mjestu koje mu datoteka određuje. Dalje radi kao bilo koji IFC: svojstva, presjeci, mjerenje, spremi kao IFC. Boje i stablo sklopa se ne čitaju. |
| Oblaci točaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skeniranje u 3D prikazu, uz model ili samostalno: vidi [Prikaz oblaka točaka uz model](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model s pogledima, rasporedima i grupama svojstava: vidi [Otvaranje paketa projekta](topic:open-project-bundle). |
| Mapa | bilo koja | Izvješće o svakom modelu, crtežu i paketu projekta u njoj. Svaki IFC, model, crtež ili paket u izvješću otvara se klikom. |

[Što BimCraft čita iz svakog formata](topic:file-formats) opisuje podrobnije.

BimCraft određuje što je datoteka prema prvim bajtovima kao i prema nazivu, pa se datoteka projekta s neobičnom ekstenzijom svejedno otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft kaže „.ifczip još nije podržan. Spremite ili izvezite model kao običnu .ifc datoteku.“ Raspakirajte `.ifczip` (sadrži običnu `.ifc`) ili ponovno izvezite kao obični IFC.
- DGN crteži navode se u izvješću mape, ali se ne otvaraju.
- PDF, slike i uredski dokumenti ne otvaraju se sami od sebe. Slike se koriste kao slike unutar DWG-a, a {{ui:Izgradnja}} › {{ui:Iz crteža…}} pretvara stranice PDF-a ili skena u zidove: vidi [Zidovi iz skupa tlocrta](topic:walls-from-plans).

## Što sprema

| Kliknete | Dobijete | Gdje |
|---|---|---|
| {{ui:Spremi kao IFC}} | Novu IFC datoteku s vašim izmjenama, nazvanu „*izvorni naziv* (edited).ifc“ | Mapa Preuzimanja vašeg preglednika |
| {{ui:Preuzmi CSV}} u rasporedu opreme | CSV stavki s popisa, nazvan „*naziv crteža* equipment.csv“ | Mapa Preuzimanja vašeg preglednika |

Ostalo se sprema tamo gdje nastane, svako u vlastitoj temi: {{ui:USD}} ([Izvoz modela kao USD](topic:usd)), {{ui:Collada}} ([Izvoz modela kao Collada ili za Google Earth](topic:collada): .dae i Google Earth .kmz), .glb za {{ui:Za render}}, renderirane slike, listovi i tlocrti kao PDF, rasporedi i popisi kao CSV, BCF teme, COBie tablica, datoteke obitelji i registrirani skenovi kao LAS ili E57. BimCraft ne sprema DWG, DXF ni datoteke projekta, i nikad ne mijenja datoteke koje ste otvorili.

:::chromium
Chrome i Edge spremaju preuzimanja u mapu postavljenu u njihovim postavkama, obično Preuzimanja. Da vas se pita gdje spremiti svaku datoteku, uključite „Pitaj gdje spremiti svaku datoteku prije preuzimanja“ u postavkama preuzimanja preglednika.
:::

:::firefox
Firefox sprema u mapu Preuzimanja, osim ako ste u njegovim postavkama odabrali „Uvijek pitaj gdje spremiti datoteke“.
:::

:::safari
Safari sprema u Preuzimanja, osim ako ne odaberete drugu mapu pod **Safari > Postavke > Općenito > Mjesto preuzimanja datoteka**.
:::

## Ponovno spremanje

Svako spremanje preuzima cijeli model sa **svim izmjenama otkad ste ga otvorili**, a ne samo izmjenama nakon posljednjeg spremanja. Popis {{ui:Promjene}} se nakon svakog spremanja opet prazni, pa ne možete poništiti ništa prije spremanja. Da počnete ponovo od izvornika, ponovno otvorite izvornu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke čitaju se u cijelosti u memoriju kartice, a 3D geometrija zauzima još memorije. Model od nekoliko stotina megabajta može biti previše za prijenosno računalo. Iznad 1.5 milijuna trokuta rubovi se isključuju radi uštede memorije („Bridovi su isključeni za vrlo velike modele“).
- **Datoteke projekta** ne čitaju se u cijelosti. BimCraft čita samo male dijelove koji mu trebaju, oko 40 KB do 100 KB bez obzira na veličinu datoteke, pa se središnji model od 500 MB na mrežnom disku otvara u trenu.
- **DWG i DXF** datoteke čitaju se u cijelosti. Vrlo velik crtež prikazuje poruku „Ovaj crtež je vrlo velik; prikazan je samo dio.“
- **Mape** s do 20,000 datoteka otvaraju se. Čitaju se samo nekoliko kilobajta koliko treba svakoj kartici modela.

Više u [Preglednici, uređaji i memorija](topic:platforms).

## Na mreži i izvan mreže

Otvaranje datoteka nikad ne treba internet. Jedan čitač učitava se s web-mjesta prvi put kad ga zatreba: IFC pogon, prvi put kad otvorite IFC model („Pokretanje IFC pogona…“). Čitači DWG i DXF dio su aplikacije.

:::offline
Izvan ste mreže. Ako gumb u traci aplikacije kaže {{ui:Spremno za offline}}, svaki format se otvara kao obično. Ako ne kaže, IFC model se ne može otvoriti osim ako nije već otvoren u ovoj kartici: prvo se ponovno spojite. Vidi [Na mreži i izvan mreže](topic:online-offline).
:::

Da biste BimCraft koristili bez veze, kliknite {{ui:Spremi za offline}} u traci aplikacije dok ste na mreži i pričekajte {{ui:Spremno za offline}}. Spremljena kopija je oko 33 MB; sadrži IFC pogon, pa se IFC modeli otvaraju i izvan mreže. [Rad izvan mreže](common:offline) općenito objašnjava spremljene kopije.

## Spremanje u oblak

Spremanje u oblak još nije dostupno. Spremajte uređene kopije na svoje računalo ili na poslužitelj datoteka vašeg ureda, kao i bilo koju drugu datoteku. Vidi [Vaše datoteke](common:your-files).
