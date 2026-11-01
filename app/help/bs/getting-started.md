---
title: Početak rada s BimCraft-om
summary: Šta BimCraft danas radi, kako otvoriti prvi model, pogledati ga u 3D, promijeniti jednu vrijednost i spasiti kopiju.
keywords: početak, prvo pokretanje, otvori, ifc, rvt, dwg, brzi početak, uvod, pregledač, bim
from: fc2dea19
---

BimCraft je aplikacija za modele zgrada iz porodice CadCraft. U ovoj verziji **otvara, čita i pregledava** datoteke zgrada i **uređuje podatke u IFC modelima**. Još ne crta niti ne modeluje nove elemente. Zamislite ga kao pregledač i provjeravač modela koji vam također omogućava da ispravite nazive, oznake i vrijednosti svojstava u IFC datoteci.

Šta otvara:

| Datoteka | Šta dobijate |
|---|---|
| IFC (`.ifc`) | Cijeli model u 3D: rotiranje, spratovi, svojstva elemenata i uređivanje naziva i vrijednosti svojstava |
| Projektne i porodične datoteke (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartica datoteke: izdanje u kojem je spašena, podaci o projektu, pregled slike i povezane datoteke. Bez 3D. |
| DWG i DXF | Crtež u 2D: prostor modela i svaki list, slojevi, povezani crteži, prikaz za štampu i raspored opreme za označene crteže ugostiteljske opreme |
| Projektni folder | Izvještaj o svakom modelu u folderu: sigurnosne kopije, veze, oštećene kopije i prijedlog s kojom datotekom početi |

Sve se odvija u vašem pregledaču, na vašem računaru. **Ništa se ne otprema.** Pogledajte [Datoteke koje BimCraft otvara i čuva](topic:files) za detalje.

## Otvorite BimCraft

1. Otvorite BimCraft u aktuelnom pregledaču. Chrome, Edge, Firefox i Safari svi rade; [Pregledači, uređaji i memorija](topic:platforms) navodi razlike.
2. Sačekajte prazan ekran koji kaže "Otvori model zgrade."

:::note
BimCraft radi u pregledaču, a na desktopu unutar CadCraft Studija, uz ostale aplikacije. Spašavanje u oblaku još nije dostupno: datoteke otvarate s računara, a kopije vraćate na njega.
:::

## Otvorite prvi model

Najbrži način da vidite šta BimCraft radi jeste IFC datoteka.

1. Kliknite {{ui:Choose a file}} u sredini ekrana.
2. Izaberite `.ifc` datoteku u {{pick:mac=Finder|windows=Istraživač datoteka|linux=vaš upravitelj datoteka}} i potvrdite.
3. Sačekajte dok statusna linija na dnu ekrana ne kaže "Pokretanje IFC motora…", pa "Izgradnja geometrije".

Trebali biste vidjeti model u 3D u sredini, panel {{ui:File}} i listu {{ui:Storeys}} lijevo, te prazan panel {{ui:Properties}} desno. Statusna linija završava se porukom "Otvoreno" i brojem elemenata.

:::tip
Datoteku možete i prevući iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vaš upravitelj datoteka}} direktno na stranicu. Ekran pokazuje "Pusti za otvaranje" dok prevlačite.
:::

:::offline
IFC motor se učitava sa sajta prvi put kada otvorite IFC model, osim ako BimCraft nije sačuvan za rad van mreže. DWG i DXF crteži, datoteke projekta i folderi ne zahtijevaju ništa dodatno: njihovi čitači su dio aplikacije. Ako dugme u traci aplikacije kaže {{ui:Offline ready}}, sve se otvara van mreže. Ako ne kaže, IFC modeli se neće otvoriti dok se ne ponovo povežete, osim ako već nije otvoren u ovoj kartici. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

:::online
Idete negdje bez veze? Kliknite {{ui:Save for offline}} u traci aplikacije i sačekajte {{ui:Offline ready}}. Sačuvana kopija (oko 11 MB) uključuje IFC motor. Pogledajte [Rad van mreže](common:offline).
:::

## Pogledajte okolo

:::mouse
1. Povucite lijevim tasterom miša da rotirate oko modela.
2. Pomjerite točkić da zumirate.
3. Povucite desnim tasterom miša da pomjerite pogled. Na Mac trackpadu držite {{key:Shift}} i povucite umjesto toga.
4. Pritisnite {{key:F}} ili kliknite {{ui:Fit}} da ponovo vidite cijeli model.
:::

:::touch
1. Povucite jednim prstom da rotirate.
2. Stisnite dva prsta da zumirate, a pomjerite dva prsta zajedno da pomjerite pogled.
3. Dodirnite {{ui:Fit}} da ponovo vidite cijeli model.
:::

## Uradite jednu stvarnu stvar: ispravite oznaku

1. Kliknite zid, vrata ili bilo koji element u modelu. Postaje plav i njegova svojstva se pojavljuju desno.
2. U panelu {{ui:Properties}} kliknite vrijednost pored **Oznaka**.
3. Ukucajte novu oznaku i pritisnite {{key:Enter}}.
4. Pogledajte odjeljak {{ui:Changes}} koji se otvorio lijevo: vaša izmjena je navedena sa starom i novom vrijednošću.

## Spasite kopiju

1. Kliknite {{ui:Save as IFC}} u odjeljku {{ui:Changes}} ili pritisnite {{key:Mod+S}}.
2. Pronađite novu datoteku u folderu za preuzimanja. Nazvana je po originalu uz dodatak " (edited)", na primjer `Clinic (edited).ifc`.

Originalna datoteka se nikada ne mijenja. [Promjena IFC svojstava i spašavanje izmijenjene kopije](topic:edit-ifc-properties) potpuno objašnjava uređivanje.

## Kuda dalje

- [Ekran BimCraft-a](topic:workspace): svaki panel po nazivu.
- [Dolazak iz drugih BIM i programa za crtanje](topic:coming-from): šta će vam izgledati drugačije ako ste navikli na Revit.
- [Otvaranje cijelog projektnog foldera](topic:open-project-folder): usmjerite BimCraft na projektni folder i pustite ga da sredi datoteke.
- [Pregled DWG ili DXF crteža](topic:view-dwg): listovi, slojevi i prikaz za štampu.
