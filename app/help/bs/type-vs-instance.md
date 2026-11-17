---
title: Promjena svojstva tipa za svaki element tipa
summary: Razlikujte svojstva tipa od svojstava pojedinačnog elementa, promijenite vrijednost na tipu da se svaki element prati, i provjerite da vlastita izmjena jednog elementa ostaje njegova.
keywords: tip, instanca, svojstva tipa, tip porodice, dijeljeno, kopiranje pri pisanju, svi elementi, masovno uređivanje, proizvođač, model
from: bffd8789
---

## Šta ćete uraditi

Postavite proizvođača na tip vrata da svaka vrata tog tipa to prikazuju, pa dajte jednim vratima vlastitu vatrootpornost bez diranja ostalih. Ovo pokazuje razliku između svojstava tipa i svojstava pojedinačnog elementa u BimCraft-u.

## Tip ili pojedinačni element?

- **Svojstvo pojedinačnog elementa** pripada jednom elementu: njegova oznaka, njegova marka, njegova prostorija, njegova vlastita vatrootpornost.
- **Svojstvo tipa** pripada tipu koji mnogi elementi dijele: proizvođač, model, širina tipa vrata.

U panelu {{ui:Properties}}, skupovi koji dolaze iz tipa imaju " (type)" iza svog naziva i red "Svojstvo tipa: promjena ovdje se primjenjuje na svaki element ovog tipa." Svaki drugi skup pripada samom elementu. **Tip** u prvom bloku prikazuje naziv tipa.

## Koraci: promijenite tip

1. Otvorite IFC model i kliknite vrata.
2. Zabilježite njihov **Tip** u prvom bloku panela {{ui:Properties}}, na primjer "Single-Flush 900 x 2100".
3. Pomjerite se do skupa čiji naziv završava sa "(type)".
4. Kliknite vrijednost koju želite promijeniti, na primjer **Manufacturer**.
5. Upišite novu vrijednost i pritisnite {{key:Enter}}.
6. Pogledajte listu {{ui:Changes}}: stavka se završava sa "(type)".
7. Kliknite druga vrata istog tipa.
8. Provjerite istu vrijednost: ona pokazuje i novu vrijednost.

## Koraci: promijenite samo jedan element

1. Kliknite jedna vrata.
2. Otvorite skup bez "(type)" u nazivu, na primjer `Pset_DoorCommon`.
3. Kliknite vrijednost, kao što je **FireRating**, upišite novu vrijednost i pritisnite {{key:Enter}}.
4. Kliknite susjedna vrata, istog tipa.
5. Provjerite istu vrijednost: ona i dalje pokazuje staru vrijednost.

Čak i ako je izvoznik taj skup svojstava dijelio između oba vrata, BimCraft je prvim vratima dao vlastitu kopiju prije promjene. Vidi [Zašto vaša izmjena mijenja samo jedan element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Čuvanje

1. Kliknite {{ui:Save as IFC}} ili pritisnite {{key:Mod+S}}.
2. Otvorite sačuvanu kopiju u BimCraft-u, ili u bilo kojem IFC pregledaču, da provjerite obje promjene.

## Česte greške

- **Nisu svi modeli sa tipovima.** Neki izvoznici ne pišu objekte tipa, ili sve stavljaju na pojedinačni element. Tada nema "(type)" skupova, pa se svaki element mora mijenjati pojedinačno.
- **Ista vrijednost se pojavljuje u skupu tipa i u skupu elementa.** Neki izvoznici zapišu parametar na oba mjesta. Drugi programi mogu čitati bilo koje; promijenite oba ako želite da se slažu.
- **Očekivanje da odaberete "sva vrata ovog tipa" i uređujete ih zajedno.** U ovoj verziji nema višestrukog odabira. Svojstvo tipa je način da promijenite mnogo elemenata odjednom.
