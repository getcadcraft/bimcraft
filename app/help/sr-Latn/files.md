---
title: Datoteke koje BimCraft otvara i čuva
summary: Svaki format koji BimCraft otvara, šta zadržava, šta čuva, gde sačuvane datoteke odlaze i šta se menja između pregledača i kada ste van mreže.
keywords: formati, otvori, sačuvaj, izvezi, preuzmi, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, otpremi, privatnost, veličina datoteke
from: a7275dbf
---

BimCraft čita datoteke sa vašeg računara, u kartici pregledača. **Ništa se ne otprema** u CadCraft niti kome drugom. Kada sačuvate, BimCraft pregledaču prosledi novu datoteku za preuzimanje; nikada ne prepisuje datoteku koju ste otvorili.

## Šta otvara

| Format | Ekstenzije | Šta dobijate |
|---|---|---|
| IFC | `.ifc` | Model u 3D, spratovi, broj elemenata i svojstva svakog elementa. Nazivi, oznake i pojedinačne vrednosti svojstava mogu se menjati. |
| Projektne i porodične datoteke | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, verzija, zajednički rad, podaci o projektu, parametri porodice, povezane datoteke i slika pregleda. Bez 3D prikaza. |
| DWG | `.dwg` | Crtež u 2D: prostor modela, svaki list, slojevi, povezani crteži, slike i prikaz za štampu. Prostor modela i u 3D. Proveravaju se formati od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Deo, komad opreme ili model dobavljača (AP203, AP214, AP242) u 3D: svako telo postaje jedan element (building element proxy) malog IFC modela na jednom spratu, učitava se kao trouglovi u pravoj veličini, a sklop sa svakim delom tamo gde ga datoteka postavlja. Od tog trenutka radi kao svaki IFC: svojstva, preseci, merenje, sačuvaj kao IFC. Boje i stablo sklopa se ne učitavaju. |
| Oblaci tačaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken u 3D prikazu, pored modela ili samostalno: pogledajte [Prikaz oblaka tačaka pored modela](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model sa svojim pogledima, rasporedima i grupama svojstava: pogledajte [Otvaranje paketa projekta](topic:open-project-bundle). |
| Fascikla | bilo koja | Izveštaj o svakom modelu, crtežu i paketu projekta u njoj. Svaki IFC, model, crtež ili paket u izveštaju otvara se jednim klikom. |

[Šta BimCraft čita iz svakog formata](topic:file-formats) objašnjava detaljno.

BimCraft utvrđuje šta je datoteka tako što gleda njene prve bajtove, a ne samo ime, pa se projektna datoteka sa neobičnom ekstenzijom i dalje otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft javlja: „.ifczip još nije podržan. Sačuvajte ili izvezite model kao običnu .ifc datoteku.“ Raspakujte `.ifczip` (sadrži običnu `.ifc`) ili izvezite ponovo kao običan IFC.
- DGN crteži se navode u izveštaju fascikle, ali se ne otvaraju.
- PDF, slike i kancelarijske datoteke ne otvaraju se samostalno. Slike se koriste kao slike unutar DWG-a, a {{ui:Verzija}} › {{ui:Iz crteža…}} pretvara stranice PDF-a ili skena u zidove: pogledajte [Zidovi iz skupa planova](topic:walls-from-plans).

## Šta čuva

| Kliknete | Dobijate | Gde |
|---|---|---|
| {{ui:Sačuvaj kao IFC}} | Novu IFC datoteku sa vašim izmenama, nazvanu „*naziv originala* (edited).ifc“ | Fascikla za preuzimanja vašeg pregledača |
| {{ui:Preuzmi CSV}} u rasporedu opreme | CSV sa stavkama iz liste, nazvan „*naziv crteža* equipment.csv“ | Fascikla za preuzimanja vašeg pregledača |

Ostalo se čuva tamo gde se pravi, svako u svojoj temi: {{ui:USD}} ([Izvoz modela kao USD](topic:usd)), {{ui:Collada}} ([Izvoz modela kao Collada ili za Google Earth](topic:collada)) (.dae i Google Earth .kmz), .glb {{ui:Za renderovanje}}, renderovane slike, listovi i osnove kao PDF, rasporedi i spiskovi kao CSV, BCF problemi, COBie tabela, porodične datoteke i registrovani skenovi kao LAS ili E57. BimCraft ne čuva DWG, DXF ni projektne datoteke i nikada ne menja datoteke koje ste otvorili.

:::chromium
Chrome i Edge čuvaju preuzimanja u fasciklu koja je podešena u njihovim podešavanjima, obično Preuzimanja. Da biste svaki put bili pitani gde da sačuvate, uključite „Pitaj gde da sačuvam svaku datoteku pre preuzimanja“ u podešavanjima preuzimanja pregledača.
:::

:::firefox
Firefox čuva u fasciklu Preuzimanja, osim ako ste u podešavanjima izabrali „Uvek me pitaj gde da sačuvam datoteke“.
:::

:::safari
Safari čuva u Preuzimanja, osim ako izaberete drugu fasciklu pod **Safari > Podešavanja > Opšte > Lokacija za preuzimanje datoteka**.
:::

## Ponovno čuvanje

Svako čuvanje preuzima ceo model sa **svim izmenama od kada ste ga otvorili**, a ne samo izmenama posle poslednjeg čuvanja. Spisak {{ui:Izmene}} se posle svakog čuvanja ponovo prazni, pa ne možete da opozovete ništa pre čuvanja. Da biste počeli ponovo od originala, ponovo otvorite originalnu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke se u celosti učitavaju u memoriju kartice, a 3D geometrija zauzima još memorije. Model od nekoliko stotina megabajta može biti previše za laptop. Iznad 1.5 miliona trouglova ivice se isključuju da bi se uštedela memorija („Ivice su isključene za veoma velike modele”).
- **Projektne datoteke** se ne učitavaju u celosti. BimCraft čita samo male delove koji su mu potrebni, oko 40 KB do 100 KB bez obzira koliko je datoteka velika, pa se centralni model od 500 MB na mrežnom disku otvara za tren.
- **DWG i DXF** datoteke se učitavaju u celosti. Veoma veliki crtež prikazuje poruku „This drawing is very large; only part of it is shown.“
- **Fascikle** sa do 20.000 datoteka se otvaraju. Čitaju se samo nekoliko kilobajta koje svaka kartica modela treba.

Pogledajte [Pregledači, uređaji i memorija](topic:platforms) za više.

## Na mreži i van mreže

Otvaranje datoteka nikada ne zahteva internet. Jedan čitač se učitava sa sajta prvi put kada je potreban: IFC motor, pri prvom otvaranju IFC modela („Starting the IFC engine…“). DWG i DXF čitači su deo aplikacije.

:::offline
Van ste mreže. Ako dugme u traci aplikacije kaže {{ui:Spremno za rad van mreže}}, svi formati se otvaraju kao i obično. Ako ne, IFC model se ne može otvoriti osim ako je već otvoren u ovoj kartici: prvo se ponovo povežite. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

Da biste koristili BimCraft bez veze, kliknite {{ui:Sačuvaj za rad van mreže}} u traci aplikacije dok ste na mreži i sačekajte {{ui:Spremno za rad van mreže}}. Sačuvana kopija je oko 33 MB; sadrži IFC motor, pa se IFC modeli otvaraju i van mreže. [Rad van mreže](common:offline) opisuje sačuvane kopije uopšte.

## Čuvanje u oblaku

Čuvanje u oblaku još nije dostupno. Čuvajte izmenjene kopije na sopstvenom računaru ili na serveru vaše kancelarije, kao i svaku drugu datoteku. Pogledajte [Vaše datoteke](common:your-files).
