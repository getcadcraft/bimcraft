---
title: Datoteke koje BimCraft otvara i spašava
summary: Svaki format koji BimCraft otvara, šta zadržava, šta spašava, gdje idu spašene datoteke i šta se mijenja između preglednika i kad ste van mreže.
keywords: formati, otvori, spasi, izvezi, preuzmi, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, otpremi, privatnost, veličina datoteke
from: a7275dbf
---

BimCraft čita datoteke na vašem računaru, u kartici preglednika. **Ništa se ne otprema** u CadCraft niti ikome drugom. Kad spašavate, BimCraft pregledniku daje novu datoteku za preuzimanje; nikad ne prepisuje datoteku koju ste otvorili.

## Šta otvara

| Format | Ekstenzije | Šta dobijate |
|---|---|---|
| IFC | `.ifc` | Model u 3D, spratovi, broj elemenata i sva svojstva svakog elementa. Nazivi, oznake i pojedinačne vrijednosti svojstava se mogu mijenjati. |
| Projektne i porodične datoteke | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, build, zajednički rad, podaci o projektu, parametri porodice, povezane datoteke i slika pregleda. Bez 3D. |
| DWG | `.dwg` | Crtež u 2D: prostor modela, svaki list, slojevi, povezani crteži, slike i prikaz za štampu. Prostor modela i u 3D. Provjereni su formati od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Dio, komad opreme ili model dobavljača (AP203, AP214, AP242) u 3D: svaki solid postaje jedan element (building element proxy) malog IFC modela na jednom spratu, čita se kao trouglovi u stvarnoj veličini, a sklop se prikazuje sa svakim dijelom tamo gdje ga datoteka postavlja. Dalje radi kao svaki IFC: svojstva, presjeci, mjerenje, spasi kao IFC. Boje i stablo sklopa se ne čitaju. |
| Oblaci tačaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken u 3D pogledu, uz model ili samostalno: pogledajte [Prikaz oblaka tačaka uz model](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model sa svojim pogledima, rasporedima i grupama svojstava: pogledajte [Otvaranje paketa projekta](topic:open-project-bundle). |
| Folder | bilo koja | Izvještaj o svakom modelu, crtežu i paketu projekta u njemu. Svaki IFC, model, crtež ili paket u izvještaju otvara se klikom. |

[Šta BimCraft čita iz svakog formata](topic:file-formats) ulazi u detalje.

BimCraft određuje šta je datoteka na osnovu njenih prvih bajtova, a ne samo naziva, pa se projektna datoteka s neobičnom ekstenzijom i dalje otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft kaže ".ifczip još nije podržan. Spasite ili izvezite model kao običnu datoteku .ifc." Raspakujte `.ifczip` (sadrži običan `.ifc`) ili ponovo izvezite kao običan IFC.
- DGN crteži se navode u izvještaju foldera, ali se ne otvaraju.
- PDF, slike i kancelarijske datoteke se ne otvaraju same. Slike se koriste kao slike unutar DWG-a, a {{ui:Verzija}} › {{ui:Iz crteža…}} pretvara stranice PDF-a ili skena u zidove: pogledajte [Zidovi iz skupa nacrta](topic:walls-from-plans).

## Šta spašava

| Kliknete | Dobijate | Gdje |
|---|---|---|
| {{ui:Spasi kao IFC}} | Novu IFC datoteku s vašim izmjenama, nazvanu "*originalni naziv* (edited).ifc" | Folder za preuzimanja vašeg preglednika |
| {{ui:Preuzmi CSV}} u rasporedu opreme | CSV s stavkama s liste, nazvan "*naziv crteža* equipment.csv" | Folder za preuzimanja vašeg preglednika |

Ostale stvari se spašavaju tamo gdje su napravljene, svaka u svojoj temi: {{ui:USD}} ([Izvoz modela kao USD](topic:usd)), {{ui:Collada}} ([Izvoz modela kao Collada ili za Google Earth](topic:collada): .dae i Google Earth .kmz), .glb za {{ui:Za renderovanje}}, renderovane slike, listovi i planovi kao PDF, rasporedi i liste kao CSV, BCF problemi, COBie tabela, porodične datoteke i registrovani skenovi kao LAS ili E57. BimCraft ne spašava DWG, DXF ili projektne datoteke i nikad ne mijenja datoteke koje ste otvorili.

:::chromium
Chrome i Edge spašavaju preuzimanja u folder postavljen u njihovim postavkama, obično Downloads. Da vas pitaju gdje da spasite svaku datoteku, uključite opciju "Ask where to save each file before downloading" u postavkama preuzimanja preglednika.
:::

:::firefox
Firefox sprema u folder Downloads, osim ako u njegovim postavkama niste izabrali "Always ask you where to save files".
:::

:::safari
Safari sprema u Downloads, osim ako pod **Safari > Postavke > Opšte > Lokacija za preuzimanje datoteka** ne izaberete drugi folder.
:::

## Ponovno spašavanje

Svako spašavanje preuzima cijeli model sa **svim izmjenama otkad ste ga otvorili**, a ne samo izmjenama nakon posljednjeg spašavanja. Lista {{ui:Promjene}} se nakon svakog spašavanja ponovo prazni, pa ne možete poništiti dalje od spašavanja. Da počnete ispočetka od originala, ponovo otvorite originalnu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke se u potpunosti čitaju u memoriju kartice, a 3D geometrija zauzima još memorije. Model od nekoliko stotina megabajta može biti previše za laptop. Iznad 1.5 miliona trouglova ivice se isključuju radi uštede memorije ("Edges are off for very large models").
- **Projektne datoteke** se ne čitaju u cijelosti. BimCraft čita samo male dijelove koji su mu potrebni, otprilike 40 KB do 100 KB bez obzira koliko je datoteka velika, pa se centralni model od 500 MB na mrežnom disku otvara za trenutak.
- **DWG i DXF** datoteke se čitaju u potpunosti. Vrlo velik crtež pokazuje "This drawing is very large; only part of it is shown."
- **Folderi** do 20,000 datoteka se otvaraju. Čitaju se samo nekoliko kilobajta koje treba svaka kartica modela.

Pogledajte [Preglednici, uređaji i memorija](topic:platforms) za više.

## Na mreži i van mreže

Otvaranje datoteka nikad ne treba internet. Jedan čitač se učitava sa sajta prvi put kad ga zatreba: IFC motor, pri prvom otvaranju IFC modela ("Starting the IFC engine…"). DWG i DXF čitači su dio aplikacije.

:::offline
Van ste mreže. Ako dugme u traci aplikacije kaže {{ui:Spremno za rad van mreže}}, svaki format se otvara kao i obično. Ako ne, IFC model se ne može otvoriti osim ako jedan nije već otvoren u ovoj kartici: prvo se ponovo povežite. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

Da biste koristili BimCraft bez veze, kliknite {{ui:Spasi za rad van mreže}} u traci aplikacije dok ste na mreži i sačekajte {{ui:Spremno za rad van mreže}}. Sačuvana kopija je oko 33 MB; sadrži IFC motor, pa se IFC modeli otvaraju i van mreže. [Rad van mreže](common:offline) objašnjava sačuvane kopije uopšte.

## Spašavanje u oblaku

Spašavanje u oblaku još nije dostupno. Spasite izmijenjene kopije na svoj računar ili fajl-server vaše kancelarije, kao i svaku drugu datoteku. Pogledajte [Vaše datoteke](common:your-files).
