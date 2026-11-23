---
title: Donesite svoje objekte i datoteke obitelji u Knjižnicu
summary: Čitajte datoteke obitelji (.rfa) te IFC, DWG, DXF, glTF ili OBJ datoteke na kartici Knjižnica, postavljajte ih kao i svaku stavku knjižnice i čuvajte ih u Moji objekti, privatnom popisu koji vidite samo vi.
keywords: rfa, obitelj, obitelji, knjižnica obitelji, vlastiti objekti, moji objekti, privatni objekti, privatna knjižnica, uvoz objekata, sadržaj proizvođača, bim objekti, ifc objekt, gltf, obj, dwg blok, čuvanje, prebacivanje, migracija
from: 886261f8
---

## Što ćete raditi

Donesite objekte koje već imate u BimCraft: biblioteku obitelji iz Revita, IFC ili DWG preuzimanje proizvođača, mrežu iz drugog modelara. Datoteku čitate na kartici **Knjižnica**, objekt postavljate u model kao pravi IFC element i, ako ga želite ponovno kasnije, spremate ga u {{ui:Moji objekti}}.

## Koraci

1. Otvorite IFC model ili započnite novu zgradu.
2. Kliknite karticu {{ui:Knjižnica}} pored {{ui:Svojstva}}.
3. Kliknite {{ui:Datoteke…}}, zatim {{ui:Odaberi datoteku…}}. Odaberite jednu datoteku ili više odjednom: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ili `.csv`. Ili kliknite {{ui:Odaberite mapu…}} da pročitate cijelu mapu i mape unutar nje (do 200 datoteka odjednom).
4. Kliknite karticu objekta da vidite što je pročitano: pregled u tlocrtu, naziv, proizvođač i model, dimenzije i napomene.
5. Kliknite {{ui:Postavi u tlocrt}} ili {{ui:Postavi u model}} da ga postavite.
6. Da ga ponovno koristite u drugim projektima, kliknite {{ui:Spremi u moje objekte}}. Kad je pročitano više datoteka, {{ui:Spremi sve u moje objekte}} sprema ih sve odjednom.
7. Kasnije kliknite {{ui:Moji objekti}} na kartici Knjižnica da ih pronađete. Postavljaju se, zamjenjuju i ažuriraju kao svaka stavka knjižnice.

Datoteke se čitaju na ovoj kartici. Ništa se ne učitava dok ne odaberete {{ui:Spremi u moje objekte}}.

## Što se čita iz svake vrste datoteke

| Datoteka | Što dobivate |
|---|---|
| IFC | Svaka vrsta elementa kao objekt s pravim 3D oblikom, IFC klasom i skupovima svojstava |
| glTF, GLB, OBJ | Jedan objekt s pravim 3D oblikom kao mreža. Prvo postavite jedinice i koja je strana gore. |
| DWG, DXF | Svaki blok kao objekt s tlocrtnim crtežom i atributima |
| Datoteka obitelji (`.rfa`) | Naziv obitelji, kategorija, proizvođač, model, parametri i njezini tipovi. **Ne njezin 3D oblik:** umjesto njega stoji kutija s Width, Depth i Height obitelji. |
| CSV | Jedan objekt po retku: naziv, dimenzije i podaci, nacrtan kao kutija |

## Datoteke obitelji i njihov 3D oblik

3D oblik unutar `.rfa` datoteke pohranjen je u nedokumentiranom formatu, pa BimCraft čita podatke obitelji i ne pogađa njezinu geometriju. Kartica to kaže: „Geometrija nije pročitana iz ove obitelji; umjesto nje stoji kutija.“

Da biste obitelj unijeli s pravim oblikom, izvezite je iz programa u kojem je izrađena (Revit):

1. Otvorite obitelj ili projekt u koji je obitelj postavljena.
2. Odaberite **File > Export > IFC**. Pogledajte [postavke izvoza koje ovdje najbolje rade](topic:rvt-to-ifc).
3. U BimCraftu pročitajte `.ifc` datoteku pomoću {{ui:Datoteke…}}. Svaki tip obitelji dolazi kao zaseban objekt, s oblikom i skupovima svojstava.

Mnogi proizvođači uz datoteku obitelji nude IFC ili DWG preuzimanje. Ta se čitaju izravno.

## Tipovi obitelji

Obitelj s više tipova dolazi kao jedna stavka s izborom {{ui:Varijanta}}, jedna varijanta po tipu. Svaka varijanta ima vrijednosti koje se razlikuju među tipovima i vlastitu kutiju kad tip ima Width i Depth. Obitelj s jednim tipom je obična stavka napunjena vrijednostima tog tipa.

Neke obitelji čuvaju tipove u katalogu tipova: `.txt` datoteci istog naziva uz datoteku obitelji. Odaberite obje zajedno ili odaberite mapu, pa retci kataloga postaju varijante.

## Podaci obitelji na pravom obliku

Ako mapa sadrži datoteku obitelji i IFC, glTF ili OBJ datoteku istog naziva (`Chair.rfa` i `Chair.ifc`), odaberite obje zajedno ili odaberite mapu. BimCraft tada stvara jednu stavku: datoteka obitelji daje naziv, proizvođača, model, parametre i tipove, a druga datoteka daje pravi 3D oblik. Napomene kažu iz koje je datoteke oblik. Jedan se oblik koristi za svaki tip.

Kad je u datoteci obitelji spremljena slika, detalji stavke pokazuju tu sliku ispod tlocrtnog crteža. Slika se tu samo prikazuje; ne čuva se uz stavku.

## Moji objekti

{{ui:Moji objekti}} je vaš privatni popis u Knjižnici. Samo vi vidite što je na njemu: nije u javnoj knjižnici, nije u pretrazi i nije prikazan vašem timu. Prati vaš račun, pa su isti objekti na drugom računalu nakon što se prijavite u knjižnicu.

- Morate biti prijavljeni u knjižnicu da biste spremili objekt. Pogledajte [prijava u knjižnicu](topic:library-credits).
- Spremanje objekta šalje taj jedan objekt na vaš račun. Dotad ostaje na vašem računalu.
- {{ui:Ukloni iz mojih objekata}} uklanja objekt s popisa. Kopije već postavljene u crtežima ostaju.
- Da biste objekt podijelili sa svima, učitajte ga umjesto toga u javnu knjižnicu, pod licencom koju odaberete.

:::note
Moji objekti se testira i možda još nisu otvoreni za vaš račun. Ako izvor nedostaje ili piše „Moji objekti još nisu otvoreni za ovaj račun“, i dalje možete čitati i postavljati svoje datoteke pomoću {{ui:Datoteke…}}; spremljene su unutar vašeg modela.
:::

## Česte pogreške

- **Očekivanje pravog oblika obitelji iz `.rfa`.** Čita se samo njezin podatak. Za oblik izvezite IFC.
- **Dvije stavke tamo gdje ste očekivali jednu.** Obitelj i njezina datoteka oblika spajaju se samo kad se nazivi podudaraju točno, osim nastavka, i nalaze se u istoj mapi.
- **Mreža dođe tisuću puta prevelika ili leži na boku.** Postavite {{ui:Jedinice datoteke}} i {{ui:Gornja os mreže}} pod {{ui:Datoteke…}} prije odabira datoteke.
- **„Nema podataka obitelji“ za datoteku.** To je projekt (`.rvt` spremljen s drugim nastavkom) ili predložak obitelji, a ne obitelj. Pogledajte [Čitanje datoteke projekta ili obitelji](topic:read-rvt-file).
- **Spremanje sadržaja koji smijete pohraniti.** Neke plaćene knjižnice ne dopuštaju kopije izvan vlastite usluge. Provjerite uvjete sadržaja koji niste sami napravili.
