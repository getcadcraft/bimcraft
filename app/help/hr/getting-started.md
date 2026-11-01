---
title: Prvi koraci s BimCraftom
summary: Što BimCraft danas radi, kako otvoriti prvi model, pogledati ga u 3D-u, promijeniti jednu vrijednost i spremiti kopiju.
keywords: početak, prvo pokretanje, otvori, ifc, rvt, dwg, brzi početak, uvod, preglednik, bim
from: fc2dea19
---

BimCraft je aplikacija za modele zgrada iz obitelji CadCraft. U ovoj verziji **otvara, čita i pregledava** datoteke zgrada te **uređuje podatke u IFC modelima**. Još ne crta i ne modelira nove elemente. Zamislite ga kao preglednik i provjeravatelj modela koji vam omogućuje i ispravljanje naziva, oznaka i vrijednosti svojstava u IFC datoteci.

Što otvara:

| Datoteka | Što dobivate |
|---|---|
| IFC (`.ifc`) | Cijeli model u 3D-u: orbitiranje, etaže, svojstva elemenata te uređivanje naziva i vrijednosti svojstava |
| Projektne datoteke i datoteke obitelji (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartica datoteke: izdanje u kojem je spremljena, podaci o projektu, slika pregleda i povezane datoteke. Bez 3D-a. |
| DWG i DXF | Crtež u 2D-u: prostor modela i svaki list, slojevi, povezani crteži, prikaz ispisa i specifikacija opreme za označene crteže ugostiteljske opreme |
| Projektna mapa | Izvješće o svakom modelu u mapi: sigurnosne kopije, veze, oštećene kopije i prijedlog s koje datoteke započeti |

Sve se događa u vašem pregledniku, na vašem računalu. **Ništa se ne učitava.** Pojedinosti su u [Datoteke koje BimCraft otvara i sprema](topic:files).

## Otvaranje BimCrafta

1. Otvorite BimCraft u aktualnom pregledniku. Rade Chrome, Edge, Firefox i Safari; razlike navodi [Preglednici, uređaji i memorija](topic:platforms).
2. Pričekajte prazan zaslon s tekstom „Otvorite model zgrade.“

:::note
BimCraft radi u pregledniku, a na radnoj površini unutar CadCraft Studija, s ostalim aplikacijama. Spremanje u oblaku još nije dostupno: datoteke otvarate sa svog računala i kopije spremate natrag na njega.
:::

## Otvaranje prvog modela

Najbrži način da vidite što BimCraft radi je IFC datoteka.

1. Kliknite {{ui:Odaberi datoteku}} na sredini zaslona.
2. Odaberite `.ifc` datoteku u {{pick:mac=Finderu|windows=Exploreru|linux=vašem upravitelju datoteka}} i potvrdite.
3. Pričekajte dok statusni redak pri dnu zaslona prikazuje „Pokretanje IFC pogona…“, a zatim „Izrada geometrije“.

Trebali biste vidjeti model u 3D-u na sredini, ploču {{ui:Datoteka}} i popis {{ui:Etaže}} lijevo te praznu ploču {{ui:Svojstva}} desno. Statusni redak završava s „Otvoreno“ i brojem elemenata.

:::tip
Datoteku možete povući i iz {{pick:mac=Findera|windows=Explorera|linux=vašeg upravitelja datoteka}} izravno na stranicu. Zaslon prikazuje „Ispustite za otvaranje“ dok povlačite.
:::

:::offline
IFC pogon učitava se s web-mjesta prvi put kad otvorite IFC model, osim ako je BimCraft spremljen za offline uporabu. DWG i DXF crteži, projektne datoteke i mape ne trebaju ništa dodatno: njihovi su čitači dio aplikacije. Ako gumb na traci aplikacije kaže {{ui:Spremno za offline}}, sve se otvara offline. Ako ne, IFC modeli neće se otvoriti dok se ponovno ne povežete, osim ako se jedan već otvorio u ovoj kartici. Vidi [Online i offline](topic:online-offline).
:::

:::online
Idete negdje bez veze? Kliknite {{ui:Spremi za offline}} na traci aplikacije i pričekajte {{ui:Spremno za offline}}. Spremljena kopija (oko 11 MB) uključuje IFC pogon. Vidi [Rad offline](common:offline).
:::

## Razgledavanje

:::mouse
1. Povucite lijevom tipkom miša da orbitirate oko modela.
2. Okrenite kotačić za zumiranje.
3. Povucite desnom tipkom miša za pomicanje prikaza. Na Mac trackpadu umjesto toga držite {{key:Shift}} i povucite.
4. Pritisnite {{key:F}} ili kliknite {{ui:Prilagodi}} da ponovno vidite cijeli model.
:::

:::touch
1. Povucite jednim prstom za orbitiranje.
2. Dva prsta razmaknite ili primaknite za zumiranje, a pomaknite ih zajedno za pomicanje prikaza.
3. Dodirnite {{ui:Prilagodi}} da ponovno vidite cijeli model.
:::

## Učinite jednu pravu stvar: ispravite oznaku

1. Kliknite zid, vrata ili bilo koji element u modelu. Postaje plav, a njegova se svojstva pojavljuju desno.
2. Na ploči {{ui:Svojstva}} kliknite vrijednost pored **Oznaka**.
3. Upišite novu oznaku i pritisnite {{key:Enter}}.
4. Pogledajte odjeljak {{ui:Promjene}} koji se otvorio lijevo: vaša je promjena navedena sa starom i novom vrijednošću.

## Spremanje kopije

1. Kliknite {{ui:Spremi kao IFC}} u odjeljku {{ui:Promjene}} ili pritisnite {{key:Mod+S}}.
2. Pronađite novu datoteku u mapi preuzimanja. Nazvana je prema izvorniku s dodanim „ (edited)“, na primjer `Clinic (edited).ifc`.

Vaša izvorna datoteka nikada se ne mijenja. [Promjena IFC svojstava i spremanje uređene kopije](topic:edit-ifc-properties) objašnjava uređivanje u potpunosti.

## Kamo dalje

- [BimCraft zaslon](topic:workspace): svaka ploča po nazivu.
- [Dolazite iz drugih BIM i crtaćih programa](topic:coming-from): što se osjeća drukčije ako ste navikli na Revit.
- [Otvaranje cijele projektne mape](topic:open-project-folder): usmjerite BimCraft na projektnu mapu i prepustite mu da složi datoteke.
- [Pregled DWG ili DXF crteža](topic:view-dwg): listovi, slojevi i prikaz ispisa.
