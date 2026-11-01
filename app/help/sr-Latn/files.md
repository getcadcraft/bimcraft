---
title: Datoteke koje BimCraft otvara i čuva
summary: Svaki format koji BimCraft otvara, šta zadržava, šta čuva, gde završavaju sačuvane datoteke i šta se menja između pregledača i kada ste van mreže.
keywords: formati, otvori, sačuvaj, izvezi, preuzmi, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, otpremanje, privatnost, veličina datoteke
from: a1f0161b
---

BimCraft čita datoteke na vašem računaru, u kartici pregledača. **Ništa se ne otprema** na CadCraft niti na bilo koga drugog. Kada čuvate, BimCraft pregledaču daje novu datoteku za preuzimanje; nikada ne prepisuje datoteku koju ste otvorili.

## Šta otvara

| Format | Ekstenzije | Šta dobijate |
|---|---|---|
| IFC | `.ifc` | Model u 3D, spratovi, broj elemenata i svojstva svakog elementa. Nazivi, oznake i pojedinačne vrednosti svojstava mogu se menjati. |
| Projektne i porodične datoteke | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: izdanje, verzija, deljeni rad, podaci o projektu, parametri porodice, povezane datoteke i slika pregleda. Bez 3D. |
| DWG | `.dwg` | Crtež u 2D: prostor modela, svaki list, slojevi, povezani crteži, slike i prikaz za štampu. Prostor modela i u 3D. Proveravaju se formati od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Isto kao DWG. |
| STEP | `.step` `.stp` | Deo, komad opreme ili model dobavljača (AP203, AP214, AP242) u 3D: svako telo postaje jedan element (building element proxy) malog IFC modela na jednom spratu, čita se kao trouglovi u pravoj veličini, a sklop sa svakim delom tamo gde ga datoteka postavlja. Od tog trenutka radi kao svaki IFC: svojstva, preseci, merenje, sačuvaj kao IFC. Boje i stablo sklopa se ne čitaju. |
| Oblaci tačaka | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Snimak u 3D prikazu, uz model ili sam: pogledajte [Prikaz oblaka tačaka uz model](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model sa svojim prikazima, rasporedima i grupama svojstava: pogledajte [Otvaranje paketa projekta](topic:open-project-bundle). |
| Fascikla | bilo koja | Izveštaj o svakom modelu, crtežu i paketu projekta u njoj. Svaki IFC, model, crtež ili paket u izveštaju otvara se jednim klikom. |

[Šta BimCraft čita iz svakog formata](topic:file-formats) objašnjava detaljno.

BimCraft odlučuje šta je datoteka tako što gleda njene prve bajtove, a ne samo naziv, pa se projektna datoteka sa neobičnom ekstenzijom i dalje otvara kao kartica datoteke.

### Ne otvara se

- `.ifczip` i `.ifcxml`: BimCraft kaže: ".ifczip još nije podržan. Sačuvajte ili izvezite model kao običnu .ifc datoteku." Raspakujte `.ifczip` (sadrži običnu `.ifc`) ili ponovo izvezite kao običan IFC.
- DGN crteži su navedeni u izveštaju fascikle, ali se ne otvaraju.
- PDF, slike i kancelarijske datoteke se ne otvaraju same od sebe. Slike se koriste kao slike unutar DWG-a, a {{ui:Build}} › {{ui:From a drawing…}} pretvara stranice PDF-a ili skena u zidove: pogledajte [Zidovi iz skupa planova](topic:walls-from-plans).

## Šta čuva

| Kliknete | Dobijate | Gde |
|---|---|---|
| {{ui:Save as IFC}} | Novu IFC datoteku sa vašim izmenama, nazvanu "*originalni naziv* (edited).ifc" | Fascikla za preuzimanja vašeg pregledača |
| {{ui:Download CSV}} u spisku opreme | CSV stavki sa liste, nazvan "*naziv crteža* equipment.csv" | Fascikla za preuzimanja vašeg pregledača |

Ostalo se čuva tamo gde je napravljeno, svako u svojoj temi: {{ui:USD}} ([Izvoz modela u USD](topic:usd)), .glb za {{ui:For rendering}}, renderovane slike, listovi i planovi kao PDF, specifikacije i liste kao CSV, BCF problemi, COBie tabela, datoteke porodica i registrovani skenovi kao LAS ili E57. BimCraft ne čuva DWG, DXF ni projektne datoteke, i nikada ne menja datoteke koje ste otvorili.

:::chromium
Chrome i Edge čuvaju preuzimanja u fascikli koja je postavljena u podešavanjima, obično Preuzimanja. Da biste svaki put bili pitani gde da sačuvate datoteku, uključite opciju „Pitaj gde da se sačuva svaka datoteka pre preuzimanja“ u podešavanjima preuzimanja pregledača.
:::

:::firefox
Firefox čuva u fascikli Preuzimanja, osim ako u podešavanjima niste izabrali „Uvek pitaj gde da se čuvaju datoteke“.
:::

:::safari
Safari čuva u fascikli Preuzimanja, osim ako ne izaberete drugu fasciklu pod **Safari > Podešavanja > Opšte > Lokacija za preuzimanje datoteka**.
:::

## Ponovno čuvanje

Svako čuvanje preuzima ceo model sa **svim izmenama od trenutka kada ste ga otvorili**, a ne samo izmene posle poslednjeg čuvanja. Spisak {{ui:Changes}} posle svakog čuvanja počinje ponovo prazan, pa ne možete da opozovete ništa pre čuvanja. Da počnete ispočetka od originala, ponovo otvorite originalnu datoteku.

## Velike datoteke i memorija

- **IFC** datoteke se u celosti čitaju u memoriju kartice, a 3D geometrija zauzima još memorije. Model od nekoliko stotina megabajta može biti previše za laptop. Iznad 1,5 miliona trouglova ivice se isključuju da bi se sačuvala memorija („Ivice su isključene za veoma velike modele“).
- **Projektne datoteke** se ne čitaju u celosti. BimCraft čita samo male delove koji su mu potrebni, oko 40 KB do 100 KB, bez obzira koliko je datoteka velika, pa se centralni model od 500 MB na mrežnom disku otvara za trenutak.
- **DWG i DXF** datoteke se čitaju u celosti. Veoma veliki crtež prikazuje poruku: „Ovaj crtež je veoma velik; prikazan je samo deo.“
- **Fascikle** do 20.000 datoteka se otvaraju. Čitaju se samo nekoliko kilobajta koliko svaka kartica modela zahteva.

Pogledajte [Pregledači, uređaji i memorija](topic:platforms) za više.

## Na mreži i van mreže

Otvaranje datoteka nikada ne zahteva internet. Jedan čitač se učitava sa sajta prvi put kada je potreban: IFC mašina, pri prvom otvaranju IFC modela („Pokretanje IFC mašine…“). DWG i DXF čitači su deo aplikacije.

:::offline
Van ste mreže. Ako dugme u traci aplikacije kaže {{ui:Offline ready}}, svaki format se otvara kao i obično. Ako ne, IFC model se ne može otvoriti osim ako je već otvoren u ovoj kartici: prvo se ponovo povežite. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

Da biste koristili BimCraft bez veze, kliknite {{ui:Save for offline}} u traci aplikacije dok ste na mreži i sačekajte {{ui:Offline ready}}. Sačuvana kopija je oko 33 MB; sadrži IFC mašinu, pa se IFC modeli otvaraju i van mreže. [Rad van mreže](common:offline) opisuje sačuvane kopije uopšte.

## Čuvanje u oblaku

Čuvanje u oblaku još nije dostupno. Sačuvajte izmenjene kopije na svom računaru ili na serveru vaše kancelarije, kao i svaku drugu datoteku. Pogledajte [Vaše datoteke](common:your-files).
