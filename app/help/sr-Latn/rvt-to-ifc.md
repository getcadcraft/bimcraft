---
title: Iz datoteke projekta u BimCraft preko IFC-a
summary: Podešavanja IFC izvoza koja se najbolje otvaraju u BimCraft-u (verzija, skupovi svojstava, osnovne količine, prostorije, povezani modeli, koordinate), kako otvoriti rezultat i šta izvoz zadržava.
keywords: izvoz, IFC izvoz, rvt u ifc, pretvori, 3D, geometrija, ifc2x3, ifc4, prikaz koordinacije, referentni prikaz, prikaz prenosa projekta, skupovi svojstava, osnovne količine, prostorije, prostori, povezane datoteke, deljene koordinate, tačka istraživanja, osnovna tačka projekta, podešavanja
from: 3efd5fc9
---

## Šta ćeš uraditi

Pretvori datoteku projekta u IFC datoteku koju možeš okretati, pregledati, proveravati i menjati u BimCraft-u. BimCraft još ne čita 3D model unutar `.rvt` datoteke, pa se izvoz radi u programu koji je napravio datoteku (Revit); BimCraft otvara rezultat.

## Koraci

1. Otvori projekat u programu koji ga je napravio. Kartica BimCraft-a navodi izdanje u kojem je sačuvan.
2. Otvori 3D pogled koji pokazuje ono što želiš da izvezeš.
3. Izaberi **File > Export > IFC**.
4. U dijalogu izvoza izaberi podešavanje (ili **Modify setup…**) sa postavkama ispod.
5. Izaberi fasciklu i naziv datoteke, pa izvezi.
6. U BimCraft-u klikni {{ui:Izaberi datoteku}} i izaberi novu `.ifc` datoteku. Povezani modeli izvezeni kao sopstvene datoteke otvaraju se u istu scenu sa {{ui:Dodaj model}}.

## Podešavanja koja se najbolje otvaraju ovde

| Postavka u izvozniku | Izaberi | Zašto |
|---|---|---|
| IFC version | **IFC4 Reference View** za gledanje, proveravanje i uzimanje predmera; **IFC2X3 Coordination View 2.0** kada drugima treba IFC2X3 | Oba se otvaraju u potpunosti. **IFC4 Design Transfer View** se takođe otvara, sa tačnijim oblicima, ali je datoteka veća i sporija. |
| File type | **IFC** (običan) | BimCraft ne otvara `.ifczip` ili `.ifcxml`. |
| Phase / visible elements | Fazu koju misliš i **Export only elements visible in view** kada podešavaš 3D pogled za to | Izostavlja ono što si namerno sakrio. |
| Property sets | **Export Revit property sets** i **Export IFC common property sets** | Postaju skupovi svojstava koje BimCraft prikazuje u {{ui:Svojstva}}, i koje koriste {{ui:Pronađi}}, {{ui:Boja}} i {{ui:Provere modela}}. |
| Base quantities | **Export base quantities** | {{ui:Ukupne količine}} i specifikacije ih koriste (dužine, površine, zapremine) umesto nagađanja. |
| Rooms and areas | **Export rooms in 3D views** (ili opciju Rooms / Spaces) | Prostorije dolaze kao prostori: klikni {{ui:Prostori}} da ih vidiš. |
| Linked files | **Export linked files as separate IFCs** | Svaka veza postaje sopstvena datoteka; otvori ih zajedno sa {{ui:Dodaj model}} i poravnaće se. |
| Coordinate base | **Shared coordinates** (ili tačku istraživanja) | Datoteka tada nosi svoje mesto na karti (IfcMapConversion), pa Izmeri › Lokacija, slojevi karte na zemlji i oblaci tačaka postavljeni po koordinatama karte rade. Osnovna tačka projekta drži model blizu početka, ali bez njegovog mesta na karti. |
| Split walls and columns by level | Uključeno, kada uzimaš količine po spratu | Deo svakog sprata je sopstveni element. |

## Šta treba da vidiš

Model u 3D, sa spratovima preuzetim iz nivoa projekta i podacima projekta u panelu {{ui:Datoteka}}. **Izvezeno iz** navodi izvoznik.

## Šta izvoz zadržava, a šta ne

- **Zadržano**: geometrija, spratovi, vrste elemenata, nazivi, tipovi, većina parametara (kao skupovi svojstava), osnovne količine kada se traže, prostorije kao prostori i mesto na karti sa deljenim koordinatama.
- **Nije zadržano**: pogledi, listovi, anotacije, familije kao uređive familije, radni skupovi i opcije dizajna. IFC datoteka je snimak elemenata modela, a ne projekat. Za listove izvezi DWG i otvori ga u 2D pogledu.

## Česte greške

- **Parametri nedostaju u BimCraft-u.** Uključi opcije skupova svojstava iznad i izvezi ponovo.
- **Prostorije nedostaju.** Uključi opciju prostorija, pa klikni {{ui:Prostori}}.
- **Čuvanje kao `.ifczip`.** Izaberi običan IFC ili raspakuj `.ifczip`.
- **Nema mesta na karti.** Izvezi sa deljenim koordinatama; proveri da je tačka istraživanja projekta postavljena.
- **Očekivanje da se izmene vrate u projekat.** Izmene koje sačuvaš u BimCraft-u idu u novu IFC datoteku, a ne u datoteku projekta.
