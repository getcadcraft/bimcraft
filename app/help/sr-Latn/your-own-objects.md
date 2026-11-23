---
title: Unesite sopstvene objekte i datoteke porodica u Biblioteku
summary: Čitajte datoteke porodica (.rfa) i IFC, DWG, DXF, glTF ili OBJ datoteke na kartici Biblioteka, postavljajte ih kao svaku stavku biblioteke i čuvajte ih u Moji objekti, privatnoj listi koju vidite samo vi.
keywords: rfa, porodica, porodice, biblioteka porodica, sopstveni objekti, moji objekti, privatni objekti, privatna biblioteka, uvoz objekata, sadržaj proizvođača, BIM objekti, ifc objekat, gltf, obj, DWG blok, sačuvaj, prebaci, migracija
from: 886261f8
---

## Šta ćete raditi

Unesite objekte koje već imate u BimCraft: biblioteku porodica iz Revit-a, IFC ili DWG preuzimanje proizvođača, mrežu iz drugog modelara. Datoteku čitate na kartici {{ui:Biblioteka}}, postavljate objekat u model kao pravi IFC element i, ako ga želite ponovo kasnije, čuvate ga u {{ui:Moji objekti}}.

## Koraci

1. Otvorite IFC model ili započnite novu zgradu.
2. Kliknite karticu {{ui:Biblioteka}} pored {{ui:Svojstva}}.
3. Kliknite {{ui:Datoteke…}}, pa {{ui:Izaberite datoteku…}}. Izaberite jednu datoteku ili više odjednom: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ili `.csv`. Ili kliknite {{ui:Izaberi fasciklu…}} da pročitate celu fasciklu i fascikle unutar nje (do 200 datoteka odjednom).
4. Kliknite karticu da vidite šta je pročitano: pregled u osnovi, naziv, proizvođač i model, dimenzije i napomene.
5. Kliknite {{ui:Postavi u osnovu}} ili {{ui:Postavi u model}} da ga postavite.
6. Da ga koristite ponovo u drugim projektima, kliknite {{ui:Sačuvaj u mojim objektima}}. Sa više pročitanih datoteka, {{ui:Sačuvaj sve u mojim objektima}} čuva ih sve odjednom.
7. Kasnije kliknite {{ui:Moji objekti}} na kartici Biblioteka da ih nađete. Postavljaju se, zamenjuju i ažuriraju kao svaka stavka biblioteke.

Datoteke se čitaju na ovoj kartici. Ništa se ne otprema dok ne izaberete {{ui:Sačuvaj u mojim objektima}}.

## Šta se čita iz svake vrste datoteke

| Datoteka | Šta dobijate |
|---|---|
| IFC | Svaki tip elementa kao objekat sa pravim 3D oblikom, IFC klasom i skupovima svojstava |
| glTF, GLB, OBJ | Jedan objekat sa pravim 3D oblikom kao mreža. Prvo postavite jedinice i koja strana je gore. |
| DWG, DXF | Svaki blok kao objekat sa svojim crtežom u osnovi i atributima |
| Datoteka porodice (`.rfa`) | Naziv porodice, kategorija, proizvođač, model, parametri i njeni tipovi. **Ne njen 3D oblik:** umesto njega stoji kutija sa širinom, dubinom i visinom porodice |
| CSV | Jedan objekat po redu: naziv, dimenzije i podaci, prikazani kao kutija |

## Datoteke porodica i njihov 3D oblik

3D oblik unutar `.rfa` datoteke čuva se u nedokumentovanom formatu, pa BimCraft čita podatke porodice i ne pogađa njenu geometriju. Kartica to kaže: „Geometrija nije pročitana iz ove porodice; umesto nje stoji kutija.“

Da uvezete porodicu sa njenim pravim oblikom, izvezite je iz programa koji ju je napravio (Revit):

1. Otvorite porodicu, ili projekat sa porodicom postavljenom u njemu.
2. Izaberite **Datoteka > Izvoz > IFC**. Pogledajte [podešavanja izvoza koja najbolje rade ovde](topic:rvt-to-ifc).
3. U BimCraft-u pročitajte `.ifc` datoteku pomoću {{ui:Datoteke…}}. Svaki tip porodice stiže kao poseban objekat, sa svojim oblikom i skupovima svojstava.

Mnogi proizvođači nude IFC ili DWG preuzimanje pored datoteke porodice. Ona se čitaju direktno.

## Tipovi porodica

Porodica sa više tipova stiže kao jedna stavka sa izborom {{ui:Varijanta}}, jedna varijanta po tipu. Svaka varijanta ima vrednosti koje se razlikuju među tipovima i sopstvenu kutiju kada tip ima širinu i dubinu. Porodica sa jednim tipom je obična stavka popunjena vrednostima tog tipa.

Neke porodice drže svoje tipove u katalogu tipova: `.txt` datoteka istog naziva pored datoteke porodice. Izaberite obe zajedno ili izaberite fasciklu, pa redovi kataloga postaju varijante.

## Podaci porodice na pravom obliku

Ako fascikla sadrži datoteku porodice i IFC, glTF ili OBJ datoteku istog naziva (`Stolica.rfa` i `Stolica.ifc`), izaberite obe zajedno ili izaberite fasciklu. BimCraft pravi jednu stavku: datoteka porodice daje naziv, proizvođača, model, parametre i tipove, a druga datoteka daje pravi 3D oblik. Napomene kažu iz koje je datoteke oblik. Jedan oblik se koristi za svaki tip.

Kada datoteka porodice ima sačuvanu sliku, detalji stavke prikazuju tu sliku ispod crteža u osnovi. Slika se prikazuje samo tu; ne čuva se uz stavku.

## Moji objekti

{{ui:Moji objekti}} je vaša privatna lista u Biblioteci. Samo vi vidite šta je u njoj: nije u javnoj biblioteci, nije u pretrazi i nije prikazana vašem timu. Prati vaš nalog, pa su isti objekti tu i na drugom računaru kada se prijavite u biblioteku.

- Morate biti prijavljeni u biblioteku da biste sačuvali objekat. Pogledajte [prijava u biblioteku](topic:library-credits).
- Čuvanje objekta šalje taj jedan objekat na vaš nalog. Dok to ne uradite, ostaje na vašem računaru.
- {{ui:Ukloni iz mojih objekata}} izbacuje objekat sa liste. Kopije koje su već postavljene u crtežima ostaju.
- Da podelite objekat sa svima, otpremite ga u javnu biblioteku, pod licencom koju izaberete.

:::note
Moji objekti su u testiranju i možda još nisu otvoreni za vaš nalog. Ako izvor nedostaje, ili piše „Moji objekti još nisu otvoreni za ovaj nalog“, i dalje možete da čitate i postavljate sopstvene datoteke pomoću {{ui:Datoteke…}}; one se čuvaju unutar vašeg modela.
:::

## Česte greške

- **Očekivanje pravog oblika porodice iz `.rfa`.** Čitaju se samo njeni podaci. Izvezite IFC za oblik.
- **Dve stavke tamo gde ste očekivali jednu.** Porodica i njena datoteka oblika spajaju se samo kada se nazivi poklope tačno, osim nastavka, i nalaze se u istoj fascikli.
- **Mreža stiže hiljadu puta prevelika ili leži na boku.** Postavite {{ui:Jedinice datoteke}} i {{ui:Osa „gore“ mreže}} pod {{ui:Datoteke…}} pre biranja datoteke.
- **„Nema podataka o porodici“ za datoteku.** To je projekat (`.rvt` sačuvan sa drugim nastavkom) ili šablon porodice, a ne porodica. Pogledajte [čitanje datoteke projekta ili porodice](topic:read-rvt-file).
- **Čuvanje sadržaja koji ne smete da čuvate.** Neke plaćene biblioteke ne dozvoljavaju kopije van sopstvene usluge. Proverite uslove za sadržaj koji niste napravili.
