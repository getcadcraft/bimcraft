---
title: Promijenite svojstvo tipa za svaki element tipa
summary: Razlikujte svojstva tipa od svojstava pojedinog elementa, promijenite vrijednost na tipu da je svaki element slijedi i provjerite da vlastita izmjena jednog elementa ostaje njegova.
keywords: tip, primjerak, svojstva tipa, obiteljski tip, zajedničko, kopiranje pri promjeni, svi elementi, grupna izmjena, proizvođač, model
from: bffd8789
---

## Što ćete napraviti

Postavite proizvođača na tip vrata tako da ga svaka vrata tog tipa prikazuju, zatim dajte jednim vratima vlastitu požarnu otpornost bez diranja ostalih. Ovo pokazuje razliku između svojstava tipa i svojstava primjerka u BimCraftu.

## Tip ili primjerak?

- **Primjerak** svojstvo pripada jednom elementu: njegova oznaka, njegova oznaka u popisu, njegova prostorija, vlastita požarna otpornost.
- **Tip** svojstvo pripada tipu koji dijeli mnogo elemenata: proizvođač, model, širina tipa vrata.

U ploči {{ui:Svojstva}} skupovi koji dolaze iz tipa imaju iza naziva " (tip)" i redak "Svojstvo tipa: promjena ovdje primjenjuje se na svaki element ovog tipa." Svi ostali skupovi pripadaju samom elementu. **Tip** u prvom bloku pokazuje naziv tipa.

## Koraci: promjena tipa

1. Otvorite IFC model i kliknite vrata.
2. Zabilježite njihov **Tip** u prvom bloku ploče {{ui:Svojstva}}, na primjer "Single-Flush 900 x 2100".
3. Pomaknite se do skupa čiji naziv završava s "(tip)".
4. Kliknite vrijednost koju želite promijeniti, na primjer **Manufacturer**.
5. Upišite novu vrijednost i pritisnite {{key:Enter}}.
6. Pogledajte popis {{ui:Promjene}}: stavka završava s "(tip)".
7. Kliknite druga vrata istog tipa.
8. Provjerite istu vrijednost: pokazuje i novu vrijednost.

## Koraci: promjena samo jednog elementa

1. Kliknite jedna vrata.
2. Otvorite skup bez "(tip)" u nazivu, na primjer `Pset_DoorCommon`.
3. Kliknite vrijednost, poput **FireRating**, upišite novu vrijednost i pritisnite {{key:Enter}}.
4. Kliknite vrata pored, istog tipa.
5. Provjerite istu vrijednost: i dalje pokazuje staru vrijednost.

Iako je izvoznik taj skup svojstava podijelio između oba vrata, BimCraft je prvim vratima dao vlastitu kopiju prije promjene. Vidi [Zašto vaša izmjena mijenja samo jedan element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Spremanje

1. Kliknite {{ui:Spremi kao IFC}} ili pritisnite {{key:Mod+S}}.
2. Otvorite spremljenu kopiju u BimCraftu ili u bilo kojem IFC pregledniku da provjerite obje promjene.

## Česte pogreške

- **Nemaju svi modeli tipove.** Neki izvoznici ne zapisuju objekte tipova ili sve stavljaju na primjerak. Tada nema skupova "(tip)", a svaki element mora se mijenjati pojedinačno.
- **Ista vrijednost pojavljuje se u skupu tipa i skupu primjerka.** Neki izvoznici zapisuju parametar na oba mjesta. Drugi programi mogu čitati bilo koje; promijenite oba ako želite da se slažu.
- **Očekivanje da odaberete "sva vrata ovog tipa" i uredite ih zajedno.** U ovoj verziji nema višestrukog odabira. Svojstvo tipa je način da odjednom promijenite mnogo elemenata.
