---
title: Donesite svoje objekte i datoteke porodica u Biblioteku
summary: Čitajte datoteke porodica (.rfa) te IFC, DWG, DXF, glTF ili OBJ datoteke na kartici Biblioteka, postavljajte ih kao svaku stavku biblioteke i čuvajte ih u Mojim objektima, privatnoj listi koju vidite samo vi.
keywords: rfa, porodica, porodice, biblioteka porodica, vlastiti objekti, moji objekti, privatni objekti, privatna biblioteka, uvoz objekata, sadržaj proizvođača, bim objekti, ifc objekat, gltf, obj, dwg blok, čuvaj, prebaci, migriraj
from: 886261f8
---

## Šta ćete uraditi

Donesite objekte koje već imate u BimCraft: biblioteku porodica iz Revita, IFC ili DWG preuzimanje proizvođača, mrežu iz drugog modelera. Datoteku čitate na kartici {{ui:Library}}, objekat postavljate u model kao pravi IFC element, a ako ga želite kasnije, sačuvate ga u {{ui:My objects}}.

## Koraci

1. Otvorite IFC model ili započnite novu zgradu.
2. Kliknite karticu {{ui:Library}} pored {{ui:Properties}}.
3. Kliknite {{ui:Files…}}, pa {{ui:Choose a file…}}. Izaberite jednu ili više datoteka odjednom: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ili `.csv`. Ili kliknite {{ui:Choose a folder…}} da pročitate cijeli folder i foldere unutra (do 200 datoteka odjednom).
4. Kliknite pločicu da vidite šta je pročitano: pregled plana, naziv, proizvođač i model, veličine i napomene.
5. Kliknite {{ui:Place in plan}} ili {{ui:Place in model}} da postavite.
6. Da ga ponovo koristite u drugim projektima, kliknite {{ui:Keep in my objects}}. Kada je pročitano više datoteka, {{ui:Keep all in my objects}} čuva ih sve odjednom.
7. Kasnije kliknite {{ui:My objects}} na kartici Biblioteka da ih nađete. Postavljaju se, zamjenjuju i ažuriraju kao svaka stavka biblioteke.

Datoteke se čitaju na ovoj kartici. Ništa se ne otprema dok ne izaberete {{ui:Keep in my objects}}.

## Šta se čita iz svake vrste datoteke

| Datoteka | Šta dobijate |
|---|---|
| IFC | Svaka vrsta elementa kao objekat sa svojim pravim 3D oblikom, IFC klasom i skupovima svojstava |
| glTF, GLB, OBJ | Jedan objekat sa pravim 3D oblikom kao mreža. Prvo postavite jedinice i koja strana je gore. |
| DWG, DXF | Svaki blok kao objekat sa svojim crtežom plana i atributima |
| Datoteka porodice (`.rfa`) | Naziv porodice, kategorija, proizvođač, model, parametri i njeni tipovi. **Ne njen 3D oblik:** umjesto njega stoji kutija sa širinom, dubinom i visinom porodice. |
| CSV | Jedan objekat po redu: naziv, veličine i podaci, nacrtan kao kutija |

## Datoteke porodica i njihov 3D oblik

3D oblik unutar `.rfa` datoteke pohranjen je u nedokumentovanom formatu, pa BimCraft čita podatke porodice i ne nagađa njenu geometriju. Kartica to kaže: „Geometrija nije pročitana iz ove porodice; umjesto nje stoji kutija.“

Da unesete porodicu sa njenim pravim oblikom, izvezite je iz programa koji ju je napravio (Revit):

1. Otvorite porodicu ili projekat sa porodicom postavljenom u njemu.
2. Izaberite **File > Export > IFC**. Pogledajte [postavke izvoza koje ovdje najbolje rade](topic:rvt-to-ifc).
3. U BimCraft-u pročitajte `.ifc` datoteku preko {{ui:Files…}}. Svaki tip porodice stiže kao zaseban objekat, sa svojim oblikom i skupovima svojstava.

Mnogi proizvođači nude IFC ili DWG preuzimanje uz datoteku porodice. Te se čitaju direktno.

## Tipovi porodica

Porodica sa više tipova stiže kao jedna stavka sa izborom {{ui:Variant}}, jedna varijanta po tipu. Svaka varijanta ima vrijednosti koje se razlikuju među tipovima, i svoju kutiju kada tip ima širinu i dubinu. Porodica sa jednim tipom je obična stavka popunjena vrijednostima tog tipa.

Neke porodice drže svoje tipove u katalogu tipova: `.txt` datoteka istog naziva pored datoteke porodice. Izaberite obje zajedno ili izaberite folder, pa redovi kataloga postaju varijante.

## Podaci porodice na pravom obliku

Ako folder sadrži datoteku porodice i IFC, glTF ili OBJ datoteku istog naziva (`Chair.rfa` i `Chair.ifc`), izaberite obje zajedno ili izaberite folder. BimCraft pravi jednu stavku: datoteka porodice daje naziv, proizvođača, model, parametre i tipove, a druga datoteka daje pravi 3D oblik. Napomene kažu iz koje datoteke je došao oblik. Jedan oblik se koristi za svaki tip.

Kada datoteka porodice ima sačuvanu sliku, detalji stavke prikazuju tu sliku ispod crteža plana. Slika se prikazuje samo tu; ne čuva se uz stavku.

## Moji objekti

{{ui:My objects}} je vaša privatna lista u Biblioteci. Samo vi vidite šta je u njoj: nije u javnoj biblioteci, nije u pretrazi i nije prikazana vašem timu. Prati vaš račun, pa su isti objekti tu i na drugom računaru kada se prijavite u biblioteku.

- Morate biti prijavljeni u biblioteku da biste sačuvali objekat. Pogledajte [prijava u biblioteku](topic:library-credits).
- Čuvanje objekta šalje samo taj objekat na vaš račun. Do tada ostaje na vašem računaru.
- {{ui:Remove from my objects}} uklanja objekat sa liste. Kopije već postavljene u crtežima ostaju.
- Da biste objekat podijelili sa svima, otpremite ga u javnu biblioteku, pod licencom koju izaberete.

:::note
Moji objekti su u testiranju i možda još nisu otvoreni za vaš račun. Ako izvor nedostaje, ili piše „Moji objekti još nisu otvoreni za ovaj račun“, i dalje možete čitati i postavljati vlastite datoteke preko {{ui:Files…}}; one se čuvaju unutar vašeg modela.
:::

## Česte greške

- **Očekivanje pravog oblika porodice iz `.rfa`.** Čita se samo njen podatak. Izvezite IFC za oblik.
- **Dvije stavke tamo gdje ste očekivali jednu.** Porodica i njena datoteka oblika spajaju se samo kada se nazivi potpuno podudaraju, osim nastavka, i nalaze se u istom folderu.
- **Mreža dođe hiljadu puta prevelika ili leži na boku.** Postavite {{ui:Units of the file}} i {{ui:Up axis of a mesh}} pod {{ui:Files…}} prije izbora datoteke.
- **„Nema podataka porodice“ na datoteci.** To je projekat (`.rvt` sačuvan sa drugim nastavkom) ili šablon porodice, a ne porodica. Pogledajte [Čitanje datoteke projekta ili porodice](topic:read-rvt-file).
- **Čuvanje sadržaja koji ne smijete pohraniti.** Neke plaćene biblioteke ne dozvoljavaju kopije van svoje usluge. Provjerite uslove za sadržaj koji niste sami napravili.
