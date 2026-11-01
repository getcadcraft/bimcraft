---
title: Datoteke koje BimCraft otvara i sprema
summary: Svaki format koji BimCraft otvara, što zadržava, što sprema, kamo idu spremljene datoteke i što se mijenja između preglednika te kada ste offline.
keywords: formati, otvori, spremi, izvoz, preuzimanje, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, učitavanje, privatnost, veličina datoteke
from: a1f0161b
---

BimCraft čita datoteke na vašem računalu, u kartici preglednika. **Ništa se ne učitava** na CadCraft niti nikome drugome. Kada spremate, BimCraft pregledniku predaje novu datoteku za preuzimanje; nikada ne piše preko datoteke koju ste otvorili.

## Što otvara

| Format | Nastavci | Što dobivate |
|---|---|---|
| IFC | `.ifc` | Model u 3D-u, etaže, brojeve elemenata i svojstva svakog elementa. Nazivi, oznake i pojedinačne vrijednosti svojstava mogu se mijenjati. |
| Projektne datoteke i datoteke obitelji | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, build, zajednički rad, podaci o projektu, parametri obitelji, povezane datoteke i slika pregleda. Bez 3D-a. |
| DWG | `.dwg` | Crtež u 2D-u: prostor modela, svaki list, slojevi, povezani crteži, slike i prikaz ispisa. Prostor modela i u 3D-u. Provjereni su formati od AutoCAD-a 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Dio, komad opreme ili dobavljačev model (AP203, AP214, AP242) u 3D-u: svako puno tijelo postaje jedan element (building element proxy) malog IFC modela na jednoj etaži, čitan kao trokuti u pravoj veličini, a sklop sa svakim dijelom na mjestu koje datoteka određuje. Dalje radi kao svaki IFC: svojstva, presjeci, mjerenje, spremanje kao IFC. Boje i stablo sklopa se ne čitaju. |
| Oblaci točaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skeniranje u 3D prikazu, pored modela ili samostalno: vidi [Prikaz oblaka točaka pored modela](topic:point-clouds). |
| Projektni paket | `.ccbundle.zip` | Model s pogledima, layoutima i skupovima svojstava: vidi [Otvaranje projektnog paketa](topic:open-project-bundle). |
| Mapa | bilo koji | Izvješće o svakom modelu, crtežu i projektnom paketu u njoj. Svaki IFC, model, crtež ili paket u izvješću otvara se klikom. |

[Što BimCraft čita iz svakog formata](topic:file-formats) ulazi u detalje.

BimCraft određuje što je datoteka gledajući njezine prve bajtove, a ne samo naziv, pa se projektna datoteka s neobičnim nastavkom ipak otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft kaže „.ifczip još nije podržan. Spremite ili izvezite model kao običnu .ifc datoteku.“ Raspakirajte `.ifczip` (sadrži običan `.ifc`) ili ponovno izvezite kao običan IFC.
- DGN crteži navode se u izvješću o mapi, ali se ne otvaraju.
- PDF, slike i uredske datoteke ne otvaraju se samostalno. Slike se koriste kao slike unutar DWG-a, a {{ui:Izgradnja}} › {{ui:Iz crteža…}} pretvara stranice PDF-a ili skeniranog crteža u zidove: vidi [Zidovi iz skupa nacrta](topic:walls-from-plans).

## Što sprema

| Što kliknete | Što dobivate | Gdje |
|---|---|---|
| {{ui:Spremi kao IFC}} | Novu IFC datoteku s vašim izmjenama, nazvanu „*izvorni naziv* (edited).ifc“ | Mapa preuzimanja vašeg preglednika |
| {{ui:Preuzmi CSV}} u specifikaciji opreme | CSV stavki s popisa, nazvan „*naziv crteža* equipment.csv“ | Mapa preuzimanja vašeg preglednika |

Ostalo se sprema tamo gdje nastaje, svaka stvar u svojoj temi: {{ui:USD}} ([Izvoz modela kao USD](topic:usd)), .glb {{ui:Za render}}, renderirane slike, listovi i tlocrti kao PDF, specifikacije i popisi kao CSV, BCF teme, COBie proračunska tablica, datoteke obitelji i registrirana skeniranja kao LAS ili E57. BimCraft ne sprema DWG, DXF ni projektne datoteke i nikada ne mijenja datoteke koje ste otvorili.

:::chromium
Chrome i Edge spremaju preuzimanja u mapu zadanu u njihovim postavkama, obično Preuzimanja. Da vas pita kamo spremiti svaki put, uključite „Pitaj gdje spremiti svaku datoteku prije preuzimanja“ u postavkama preuzimanja preglednika.
:::

:::firefox
Firefox sprema u mapu Preuzimanja osim ako u postavkama ne odaberete „Uvijek pitaj gdje spremiti datoteke“.
:::

:::safari
Safari sprema u Preuzimanja osim ako ne odaberete drugu mapu u **Safari > Postavke > Općenito > Lokacija preuzetih datoteka**.
:::

## Drugo spremanje

Svako spremanje preuzima cijeli model sa **svakom izmjenom od otvaranja**, a ne samo izmjene nastale nakon posljednjeg spremanja. Popis {{ui:Promjene}} nakon svakog spremanja ponovno počinje prazan, pa se ne može poništiti iza spremanja. Da počnete ispočetka od izvornika, ponovno otvorite izvornu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke čitaju se u cijelosti u memoriju kartice, a 3D geometrija troši još memorije povrh toga. Model od nekoliko stotina megabajta može biti prevelik za prijenosno računalo. Iznad 1,5 milijuna trokuta bridovi se isključuju radi uštede memorije („Bridovi su isključeni za vrlo velike modele“).
- **Projektne datoteke** ne čitaju se u cijelosti. BimCraft čita samo male dijelove koji su mu potrebni, oko 40 KB do 100 KB bez obzira na veličinu datoteke, pa se središnji model od 500 MB na mrežnom disku otvara u trenu.
- **DWG i DXF** datoteke čitaju se u cijelosti. Vrlo velik crtež prikazuje „Ovaj je crtež vrlo velik; prikazan je samo dio.“
- **Mape** do 20 000 datoteka se otvaraju. Čita se samo nekoliko kilobajta koliko treba kartici svakog modela.

Više u [Preglednici, uređaji i memorija](topic:platforms).

## Online i offline

Otvaranje datoteka nikada ne zahtijeva internet. Jedan čitač učitava se s web-mjesta prvi put kad ga trebate: IFC pogon, prvi put kad otvorite IFC model („Pokretanje IFC pogona…“). Čitači DWG-a i DXF-a dio su aplikacije.

:::offline
Offline ste. Ako gumb na traci aplikacije kaže {{ui:Spremno za offline}}, svaki se format otvara kao i inače. Ako ne, IFC model se ne može otvoriti osim ako se već otvorio u ovoj kartici: najprije se ponovno povežite. Vidi [Online i offline](topic:online-offline).
:::

Da BimCraft koristite bez veze, kliknite {{ui:Spremi za offline}} na traci aplikacije dok ste online i pričekajte {{ui:Spremno za offline}}. Spremljena kopija ima oko 33 MB; uključuje IFC pogon, pa se IFC modeli otvaraju i offline. [Rad offline](common:offline) općenito objašnjava spremljene kopije.

## Spremanje u oblaku

Spremanje u oblaku još nije dostupno. Spremajte svoje uređene kopije na vlastito računalo ili na datotečni poslužitelj svog ureda, kao i svaku drugu datoteku. Vidi [Vaše datoteke](common:your-files).
