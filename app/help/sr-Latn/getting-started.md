---
title: Početak rada sa BimCraft-om
summary: Šta BimCraft danas radi, kako da otvorite prvi model, pogledate ga u 3D, promenite jednu vrednost i sačuvate kopiju.
keywords: početak, prvo pokretanje, otvori, ifc, rvt, dwg, brzi početak, uvod, pregledač, bim
from: fc2dea19
---

BimCraft je aplikacija za model zgrade iz porodice CadCraft. U ovoj verziji **otvara, čita i pregleda** datoteke zgrada, i **menja podatke u IFC modelima**. Još ne crta niti ne modeluje nove elemente. Zamislite je kao pregledač i proveravač modela koji vam takođe omogućava da ispravite nazive, oznake i vrednosti svojstava u IFC datoteci.

Šta otvara:

| Datoteka | Šta dobijate |
|---|---|
| IFC (`.ifc`) | Ceo model u 3D: okretanje, spratovi, svojstva elemenata i izmena naziva i vrednosti svojstava |
| Projektne i porodične datoteke (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartica datoteke: izdanje u kom je sačuvana, podaci o projektu, slika pregleda i povezane datoteke. Bez 3D. |
| DWG i DXF | Crtež u 2D: prostor modela i svaki list, slojevi, povezani crteži, prikaz za štampu i spisak opreme za označene crteže ugostiteljske opreme |
| Fascikla projekta | Izveštaj o svakom modelu u fascikli: rezervne kopije, veze, oštećene kopije i predlog sa kojom datotekom da počnete |

Sve se dešava u vašem pregledaču, na vašem računaru. **Ništa se ne otprema.** Pogledajte [Datoteke koje BimCraft otvara i čuva](topic:files) za detalje.

## Otvaranje BimCraft-a

1. Otvorite BimCraft u aktuelnom pregledaču. Chrome, Edge, Firefox i Safari svi rade; [Pregledači, uređaji i memorija](topic:platforms) navodi razlike.
2. Sačekajte prazan ekran na kom piše „Otvori model zgrade.“

:::note
BimCraft radi u pregledaču, a na radnoj površini unutar CadCraft Studija, zajedno sa ostalim aplikacijama. Čuvanje u oblaku još nije dostupno: datoteke otvarate sa računara, a kopije vraćate na njega.
:::

## Otvaranje prvog modela

Najbrži način da vidite šta BimCraft radi jeste IFC datoteka.

1. Kliknite {{ui:Choose a file}} na sredini ekrana.
2. Izaberite `.ifc` datoteku u {{pick:mac=Finder|windows=File Explorer|linux=tvoj upravljač datotekama}} i potvrdite.
3. Sačekajte dok statusna linija na dnu ekrana ne kaže „Pokretanje IFC mašine…“, pa „Izgradnja geometrije“.

Trebalo bi da vidite model u 3D na sredini, panel {{ui:File}} i listu {{ui:Storeys}} levo, i prazan panel {{ui:Properties}} desno. Statusna linija se završava sa „Otvoreno“ i brojem elemenata.

:::tip
Datoteku možete i prevući iz {{pick:mac=Finder|windows=File Explorer|linux=tvoj upravljač datotekama}} direktno na stranicu. Ekran prikazuje „Pusti za otvaranje“ dok prevlačite.
:::

:::offline
IFC mašina se učitava sa sajta pri prvom otvaranju IFC modela, osim ako je BimCraft sačuvan za rad van mreže. DWG i DXF crteži, projektne datoteke i fascikle ne traže ništa dodatno: njihovi čitači su deo aplikacije. Ako dugme u traci aplikacije kaže {{ui:Offline ready}}, sve se otvara van mreže. Ako ne, IFC modeli se neće otvoriti dok se ne povežete, osim ako je jedan već otvoren u ovoj kartici. Pogledajte [Na mreži i van mreže](topic:online-offline).
:::

:::online
Idete negde bez veze? Kliknite {{ui:Save for offline}} u traci aplikacije i sačekajte {{ui:Offline ready}}. Sačuvana kopija (oko 11 MB) sadrži IFC mašinu. Pogledajte [Rad van mreže](common:offline).
:::

## Pogled oko modela

:::mouse
1. Prevucite levim tasterom miša da biste orbitirali oko modela.
2. Pomerajte točkić za zumiranje.
3. Prevucite desnim tasterom miša da biste pomerali pogled. Na Mac trackpadu držite {{key:Shift}} i prevlačite.
4. Pritisnite {{key:F}} ili kliknite {{ui:Fit}} da ponovo vidite ceo model.
:::

:::touch
1. Prevucite jednim prstom da orbitirate.
2. Raširite ili stegnite dva prsta za zumiranje, a pomerite dva prsta zajedno za pomeranje pogleda.
3. Dodirnite {{ui:Fit}} da ponovo vidite ceo model.
:::

## Jedna stvarna izmena: ispravka oznake

1. Kliknite zid, vrata ili bilo koji element u modelu. Element postaje plav, a njegova svojstva se pojavljuju desno.
2. U panelu {{ui:Properties}} kliknite vrednost pored **Oznaka**.
3. Upišite novu oznaku i pritisnite {{key:Enter}}.
4. Pogledajte odeljak {{ui:Changes}} koji se otvorio levo: vaša izmena je navedena sa starom i novom vrednošću.

## Čuvanje kopije

1. Kliknite {{ui:Save as IFC}} u odeljku {{ui:Changes}} ili pritisnite {{key:Mod+S}}.
2. Pronađite novu datoteku u fascikli za preuzimanja. Nazvana je po originalu uz dodatak " (edited)", na primer `Clinic (edited).ifc`.

Originalna datoteka se nikada ne menja. [Izmena IFC svojstava i čuvanje izmenjene kopije](topic:edit-ifc-properties) objašnjava izmenu u potpunosti.

## Dalje

- [Ekran BimCraft-a](topic:workspace): svaki panel po nazivu.
- [Prelazak iz drugih BIM i programa za crtanje](topic:coming-from): šta će vam delovati drugačije ako ste navikli na Revit.
- [Otvaranje cele fascikle projekta](topic:open-project-folder): usmerite BimCraft na fasciklu projekta i pustite ga da sortira datoteke.
- [Prikaz DWG ili DXF crteža](topic:view-dwg): listovi, slojevi i prikaz za štampu.
