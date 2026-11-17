---
title: Iz projektne datoteke u BimCraft putem IFC-a
summary: Postavke IFC izvoza koje se najbolje otvaraju u BimCraftu (verzija, skupovi svojstava, osnovne količine, prostorije, povezani modeli, koordinate), kako otvoriti rezultat i što izvoz zadržava.
keywords: izvoz, izvoz ifc, rvt u ifc, pretvorba, 3d, geometrija, ifc2x3, ifc4, koordinacijski pogled, referentni pogled, pogled za prijenos projekta, skupovi svojstava, osnovne količine, prostorije, prostori, povezane datoteke, zajedničke koordinate, geodetska točka, početna točka projekta, postavke
from: 3efd5fc9
---

## Što ćete učiniti

Pretvorite projektnu datoteku u IFC datoteku koju možete okretati, pregledati, provjeriti i uređivati u BimCraftu. BimCraft još ne čita 3D model unutar `.rvt` datoteke, pa se izvoz obavlja u programu koji ju je napravio (Revit); BimCraft otvara rezultat.

## Koraci

1. Otvorite projekt u programu koji ga je napravio. BimCraftova kartica navodi izdanje u kojem je spremljen.
2. Otvorite 3D prikaz koji pokazuje ono što želite izvesti.
3. Odaberite **File > Export > IFC**.
4. U dijaloškom okviru izvoza odaberite postavku (ili **Modify setup…**) s postavkama u nastavku.
5. Odaberite mapu i naziv datoteke te izvezite.
6. U BimCraftu kliknite {{ui:Odaberi datoteku}} i odaberite novu `.ifc` datoteku. Povezani modeli izvezeni kao vlastite datoteke otvaraju se u istu scenu pomoću {{ui:Dodaj model}}.

## Postavke koje se ovdje najbolje otvaraju

| Postavka u izvozniku | Odaberite | Zašto |
|---|---|---|
| Verzija IFC-a | **IFC4 Reference View** za pregled, provjeru i izradu predmjera; **IFC2X3 Coordination View 2.0** kad drugi trebaju IFC2X3 | Oba se otvaraju u potpunosti. **IFC4 Design Transfer View** također se otvara, s točnijim oblicima, ali je datoteka veća i sporija. |
| Vrsta datoteke | **IFC** (obična) | BimCraft ne otvara `.ifczip` ni `.ifcxml`. |
| Faza / vidljivi elementi | Faza koju mislite i **Export only elements visible in view** kad za to postavite 3D prikaz | Izostavlja ono što ste namjerno sakrili. |
| Skupovi svojstava | **Export Revit property sets** i **Export IFC common property sets** | Postaju skupovi svojstava koje BimCraft prikazuje u {{ui:Svojstva}}, i koje koriste {{ui:Traži}}, {{ui:Boja}} i {{ui:Provjere modela}}. |
| Osnovne količine | **Export base quantities** | {{ui:Zbrojevi količina}} i specifikacije koriste ih (duljine, površine, volumene) umjesto nagađanja. |
| Prostorije i površine | **Export rooms in 3D views** (ili opcija Rooms / Spaces) | Prostorije dolaze kao prostori: kliknite {{ui:Prostori}} da ih vidite. |
| Povezane datoteke | **Export linked files as separate IFCs** | Svaka veza postaje vlastita datoteka; otvorite ih zajedno s {{ui:Dodaj model}} i poravnat će se. |
| Osnova koordinata | **Shared coordinates** (ili geodetska točka) | Datoteka tada nosi svoje mjesto na karti (IfcMapConversion), pa rade Mjeri › Lokacija, slojevi karte na terenu i oblaci točaka postavljeni prema koordinatama karte. Početna točka projekta drži model blizu ishodišta, ali bez njegova mjesta na karti. |
| Podijeli zidove i stupove po razini | Uključeno, kad izrađujete predmjer po etaži | Dio svake etaže zaseban je element. |

## Što biste trebali vidjeti

Model u 3D, s etažama uzetim iz razina projekta i podacima o projektu u ploči {{ui:Datoteka}}. **Izvezeno iz** navodi izvoznik.

## Što izvoz zadržava, a što ne

- **Zadržava**: geometriju, etaže, vrste elemenata, nazive, tipove, većinu parametara (kao skupove svojstava), osnovne količine kad se traže, prostorije kao prostore te mjesto na karti sa zajedničkim koordinatama.
- **Ne zadržava**: poglede, listove, anotacije, obitelji kao uređive obitelji, radne skupove i opcije dizajna. IFC datoteka je snimka elemenata modela, a ne projekta. Za listove izvezite DWG i otvorite ga u 2D prikazu.

## Česte pogreške

- **Parametri nedostaju u BimCraftu.** Uključite gore navedene opcije skupova svojstava i izvezite ponovno.
- **Prostorije nedostaju.** Uključite opciju prostorija, pa kliknite {{ui:Prostori}}.
- **Spremanje kao `.ifczip`.** Odaberite obični IFC ili raspakirajte `.ifczip`.
- **Nema mjesta na karti.** Izvezite sa zajedničkim koordinatama; provjerite je li geodetska točka projekta postavljena.
- **Očekivanje da se izmjene vrate u projekt.** Izmjene koje spremite u BimCraftu idu u novu IFC datoteku, a ne u projektnu datoteku.
