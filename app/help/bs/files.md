---
title: Datoteke koje BimCraft otvara i čuva
summary: Svaki format koji BimCraft otvara, šta zadržava, šta čuva, gdje završavaju sačuvane datoteke i šta se mijenja između pregledača i kad ste van mreže.
keywords: formati, otvori, spasi, izvoz, preuzimanje, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, otpremanje, privatnost, veličina datoteke
from: a1f0161b
---

BimCraft čita datoteke na vašem računaru, u kartici pregledača. **Ništa se ne otprema** u CadCraft ili bilo kome drugom. Kada spašavate, BimCraft pregledaču daje novu datoteku za preuzimanje; nikada ne prepisuje datoteku koju ste otvorili.

## Šta otvara

| Format | Ekstenzije | Šta dobijate |
|---|---|---|
| IFC | `.ifc` | Model u 3D, spratovi, broj elemenata i svojstva svakog elementa. Nazivi, oznake i pojedinačne vrijednosti svojstava mogu se mijenjati. |
| Projektne i porodične datoteke | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, verzija (build), zajednički rad, podaci o projektu, parametri porodice, povezane datoteke i pregled slike. Bez 3D. |
| DWG | `.dwg` | Crtež u 2D: prostor modela, svaki list, slojevi, povezani crteži, slike i prikaz za štampu. Prostor modela i u 3D. Provjereni su formati od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Dio, komad opreme ili model dobavljača (AP203, AP214, AP242) u 3D: svako tijelo postaje jedan element (building element proxy) malog IFC modela na jednom spratu, čita se kao trouglovi prave veličine, a sklop sa svakim dijelom tamo gdje ga datoteka postavlja. Od tada radi kao bilo koji IFC: svojstva, presjeci, mjerenje, spasi kao IFC. Boje i stablo sklopa se ne čitaju. |
| Tačke oblaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skeniranje u 3D prikazu, pored modela ili samostalno: pogledajte [Prikaz oblaka tačaka pored modela](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model sa svojim pogledima, rasporedima i grupama svojstava: pogledajte [Otvaranje paketa projekta](topic:open-project-bundle). |
| Folder | bilo koja | Izvještaj o svakom modelu, crtežu i paketu projekta u njemu. Svaki IFC, model, crtež ili paket u izvještaju otvara se klikom. |

[Šta BimCraft čita iz svakog formata](topic:file-formats) detaljno objašnjava.

BimCraft određuje šta je datoteka gledajući i njene prve bajtove, a ne samo ime, pa se datoteka projekta s neobičnom ekstenzijom i dalje otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft kaže ".ifczip još nije podržan. Spasite ili izvezite model kao običnu .ifc datoteku." Raspakujte `.ifczip` (sadrži običan `.ifc`) ili ponovo izvezite kao običan IFC.
- DGN crteži su navedeni u izvještaju foldera, ali se ne otvaraju.
- PDF, slike i kancelarijske datoteke se ne otvaraju same. Slike se koriste kao slike unutar DWG-a, a {{ui:Build}} › {{ui:From a drawing…}} pretvara stranice PDF-a ili skeniranja u zidove: pogledajte [Zidovi iz skupa nacrta](topic:walls-from-plans).

## Šta čuva

| Kliknete | Dobijate | Gdje |
|---|---|---|
| {{ui:Save as IFC}} | Novu IFC datoteku s vašim izmjenama, nazvanu "*originalni naziv* (edited).ifc" | Folder za preuzimanja vašeg pregledača |
| {{ui:Download CSV}} u rasporedu opreme | CSV stavki s liste, nazvan "*naziv crteža* equipment.csv" | Folder za preuzimanja vašeg pregledača |

Ostale stvari se čuvaju tamo gdje nastaju, svaka u svojoj temi: {{ui:USD}} ([Izvoz modela kao USD](topic:usd)), .glb za {{ui:For rendering}}, renderovane slike, listovi i planovi kao PDF, rasporedi i liste kao CSV, BCF problemi, COBie tabela, datoteke porodica i registrovani skenovi kao LAS ili E57. BimCraft ne čuva DWG, DXF ni datoteke projekta i nikada ne mijenja datoteke koje ste otvorili.

:::chromium
Chrome i Edge spremaju preuzimanja u folder postavljen u njihovim postavkama, obično Preuzimanja. Da vas pitaju gdje da spasite svaku datoteku, uključite opciju "Pitaj gdje da spasi svaku datoteku prije preuzimanja" u postavkama preuzimanja pregledača.
:::

:::firefox
Firefox sprema u folder Preuzimanja, osim ako ste u njegovim postavkama izabrali "Uvijek pitaj gdje da spasim datoteke".
:::

:::safari
Safari sprema u Preuzimanja, osim ako ne izaberete drugi folder pod **Safari > Postavke > Opšte > Lokacija za preuzimanje datoteka**.
:::

## Ponovno spašavanje

Svako spašavanje preuzima cijeli model sa **svim izmjenama od kako ste ga otvorili**, ne samo izmjenama nakon posljednjeg spašavanja. Lista {{ui:Changes}} počinje ispočetka nakon svakog spašavanja, pa ne možete poništiti dalje od spašavanja. Da počnete ponovo od originala, ponovo otvorite originalnu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke se u potpunosti učitavaju u memoriju kartice, a 3D geometrija zauzima još memorije. Model od nekoliko stotina megabajta može biti previše za laptop. Iznad 1.5 miliona trouglova ivice se isključuju kako bi se uštedjela memorija ("Ivice su isključene za vrlo velike modele").
- **Datoteke projekta** se ne čitaju u cijelosti. BimCraft čita samo male dijelove koji su mu potrebni, oko 40 KB do 100 KB, bez obzira koliko je datoteka velika, pa se centralni model od 500 MB na mrežnom disku otvara za trenutak.
- **DWG i DXF** datoteke se čitaju u cijelosti. Vrlo veliki crtež prikazuje poruku "Ovaj crtež je vrlo velik; prikazan je samo dio."
- **Folderi** do 20.000 datoteka se otvaraju. Čitaju se samo nekoliko kilobajta koje svaka kartica modela treba.

Pogledajte [Pregledači, uređaji i memorija](topic:platforms) za više.

## Na mreži i van mreže

Otvaranje datoteka nikad ne zahtijeva internet. Jedan čitač se učitava sa sajta prvi put kada ga zatreba: IFC motor, pri prvom otvaranju IFC modela ("Pokretanje IFC motora…"). DWG i DXF čitači su dio aplikacije.

:::offline
Van ste mreže. Ako dugme u traci aplikacije kaže {{ui:Offline ready}}, svaki format se otvara kao i obično. Ako ne kaže, IFC model se ne može otvoriti, osim ako već nije otvoren u ovoj kartici: prvo se ponovo povežite. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

Da koristite BimCraft bez veze, kliknite {{ui:Save for offline}} u traci aplikacije dok ste na mreži i sačekajte {{ui:Offline ready}}. Sačuvana kopija je oko 33 MB; uključuje IFC motor, pa se IFC modeli otvaraju i van mreže. [Rad van mreže](common:offline) opisuje sačuvane kopije uopšte.

## Spašavanje u oblaku

Spašavanje u oblaku još nije dostupno. Spasite svoje izmijenjene kopije na vlastiti računar ili na server datoteka vaše kancelarije, kao što biste sačuvali bilo koju datoteku. Pogledajte [Vaše datoteke](common:your-files).
