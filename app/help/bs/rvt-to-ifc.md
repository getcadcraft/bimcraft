---
title: Iz datoteke projekta u BimCraft preko IFC-a
summary: IFC postavke izvoza koje se najbolje otvaraju u BimCraft-u (verzija, skupovi svojstava, osnovne količine, prostorije, povezani modeli, koordinate), kako otvoriti rezultat i šta izvoz zadržava.
keywords: izvoz, ifc izvoz, rvt u ifc, pretvori, 3d, geometrija, ifc2x3, ifc4, koordinacijski pogled, referentni pogled, pogled za prenos projekta, skupovi svojstava, osnovne količine, prostorije, prostori, povezane datoteke, zajedničke koordinate, geodetska tačka, postavke
from: 3efd5fc9
---

## Šta ćete uraditi

Pretvorite datoteku projekta u IFC datoteku koju možete okretati, pregledati, provjeravati i uređivati u BimCraft-u. BimCraft još ne čita 3D model unutar `.rvt` datoteke, pa se izvoz odvija u programu koji je napravio datoteku (Revit); BimCraft otvara rezultat.

## Koraci

1. Otvorite projekat u programu koji ga je napravio. Kartica BimCraft-a imenuje izdanje u kojem je sačuvan.
2. Otvorite 3D pogled koji prikazuje ono što želite izvesti.
3. Odaberite **Datoteka > Izvezi > IFC**.
4. U dijaloškom okviru izvoza odaberite postavku (ili **Izmijeni postavku…**) s dolje navedenim postavkama.
5. Odaberite fasciklu i naziv datoteke, pa izvezite.
6. U BimCraft-u kliknite {{ui:Odaberi datoteku}} i odaberite novu `.ifc` datoteku. Povezani modeli izvezeni kao zasebne datoteke otvaraju se u istu scenu pomoću {{ui:Dodaj model}}.

## Postavke koje se najbolje otvaraju ovdje

| Postavka u izvozniku | Odaberite | Zašto |
|---|---|---|
| Verzija IFC-a | **IFC4 Reference View** za gledanje, provjeru i predmjer; **IFC2X3 Coordination View 2.0** kad drugi trebaju IFC2X3 | Oba se otvaraju u cijelosti. **IFC4 Design Transfer View** se također otvara, s tačnijim oblicima, ali je datoteka veća i sporija. |
| Vrsta datoteke | **IFC** (običan) | BimCraft ne otvara `.ifczip` ni `.ifcxml`. |
| Faza / vidljivi elementi | Faza koju mislite, i **Izvezi samo elemente vidljive u pogledu** kad postavite 3D pogled za to | Izostavlja ono što ste namjerno sakrili. |
| Skupovi svojstava | **Izvezi Revit skupove svojstava** i **Izvezi zajedničke IFC skupove svojstava** | Postaju skupovi svojstava koje BimCraft prikazuje u {{ui:Svojstva}}, a koje koriste {{ui:Pronađi}}, {{ui:Boja}} i {{ui:Provjere modela}}. |
| Osnovne količine | **Izvezi osnovne količine** | {{ui:Ukupne količine}} i specifikacije ih koriste (dužine, površine, zapremine) umjesto procjene. |
| Prostorije i površine | **Izvezi prostorije u 3D pogledima** (ili opciju Prostorije / Prostori) | Prostorije stižu kao prostori: kliknite {{ui:Prostorije}} da ih vidite. |
| Povezane datoteke | **Izvezi povezane datoteke kao zasebne IFC-ove** | Svaka veza postaje svoja datoteka; otvorite ih zajedno s {{ui:Dodaj model}} i poravnaju se. |
| Osnova koordinata | **Zajedničke koordinate** (ili geodetska tačka) | Datoteka tada nosi svoje mjesto na karti (IfcMapConversion), pa rade Mjeri › Lokacija, slojevi karte na terenu i oblaci tačaka postavljeni prema koordinatama karte. Osnovna tačka projekta drži model blizu ishodišta, ali bez njegovog mjesta na karti. |
| Podijeli zidove i stubove po nivou | Uključeno, kad računate količine po spratu | Dio svakog sprata je zaseban element. |

## Šta biste trebali vidjeti

Model u 3D, sa spratovima preuzetim iz nivoa projekta i informacijama o projektu u panelu {{ui:Datoteka}}. **Izvezeno iz** navodi izvoznik.

## Šta izvoz zadržava, a šta ne

- **Zadržano**: geometrija, spratovi, vrste elemenata, nazivi, tipovi, većina parametara (kao skupovi svojstava), osnovne količine kad se traže, prostorije kao prostori, i mjesto na karti sa zajedničkim koordinatama.
- **Nije zadržano**: pogledi, listovi, anotacije, porodice kao uređivi elementi, radni skupovi i opcije dizajna. IFC datoteka je snimak elemenata modela, a ne projekta. Za listove izvezite DWG i otvorite ga u 2D pogledu.

## Česte greške

- **Parametri nedostaju u BimCraft-u.** Uključite gore navedene opcije skupova svojstava i izvezite ponovo.
- **Prostorije nedostaju.** Uključite opciju prostorija, pa kliknite {{ui:Prostorije}}.
- **Čuvanje kao `.ifczip`.** Odaberite običan IFC, ili raspakujte `.ifczip`.
- **Nema mjesta na karti.** Izvezite sa zajedničkim koordinatama; provjerite da je geodetska tačka projekta postavljena.
- **Očekivanje da se izmjene vrate.** Izmjene koje sačuvate u BimCraft-u idu u novu IFC datoteku, a ne u datoteku projekta.
