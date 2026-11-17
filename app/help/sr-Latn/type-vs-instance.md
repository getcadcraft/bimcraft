---
title: Promena svojstva tipa za svaki element tipa
summary: Razlikuj svojstva tipa od svojstava primerka, promeni vrednost na tipu da svaki element prati, i proveri da izmena jednog elementa ostane njegova.
keywords: tip, primerak, svojstva tipa, tip porodice, deljeno, kopija pri pisanju, svi elementi, masovna izmena, proizvođač, model
from: bffd8789
---

## Šta ćeš uraditi

Postavi proizvođača na tipu vrata da svaka vrata tog tipa to prikazuju, pa jednim vratima daj sopstvenu ocenu otpornosti na vatru, bez diranja ostalih. Ovo pokazuje razliku između svojstava tipa i svojstava primerka u BimCraft-u.

## Tip ili primerak?

- **Primerak** svojstvo pripada jednom elementu: njegova oznaka, njegova marka, njegova prostorija, njegova sopstvena ocena otpornosti na vatru.
- **Tip** svojstvo pripada tipu koji deli mnogo elemenata: proizvođač, model, širina tipa vrata.

U panelu {{ui:Svojstva}} skupovi koji dolaze iz tipa imaju „ (tip)“ posle naziva i red „Svojstvo tipa: promena ovde važi za svaki element ovog tipa.“. Svaki drugi skup pripada samom elementu. **Tip** u prvom bloku prikazuje naziv tipa.

## Koraci: promeni tip

1. Otvori IFC model i klikni vrata.
2. Zapiši njihov **Tip** u prvom bloku panela {{ui:Svojstva}}, na primer „Single-Flush 900 x 2100“.
3. Skroluj do skupa čiji naziv se završava sa „(tip)“.
4. Klikni vrednost koju želiš da promeniš, na primer **Proizvođač**.
5. Upiši novu vrednost i pritisni {{key:Enter}}.
6. Pogledaj listu {{ui:Izmene}}: stavka se završava sa „(tip)“.
7. Klikni druga vrata istog tipa.
8. Proveri istu vrednost: sada prikazuje i novu vrednost.

## Koraci: promeni samo jedan element

1. Klikni jedna vrata.
2. Otvori skup čiji naziv nema „(tip)“, na primer `Pset_DoorCommon`.
3. Klikni vrednost, kao što je **FireRating**, upiši novu vrednost i pritisni {{key:Enter}}.
4. Klikni susedna vrata, istog tipa.
5. Proveri istu vrednost: i dalje prikazuje staru vrednost.

Čak i ako je izvoznik delio taj skup svojstava između oba vrata, BimCraft je prvim vratima dao sopstvenu kopiju pre izmene. Vidi [Zašto tvoja izmena menja samo jedan element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Čuvanje

1. Klikni {{ui:Sačuvaj kao IFC}} ili pritisni {{key:Mod+S}}.
2. Otvori sačuvanu kopiju u BimCraft-u ili u bilo kom IFC pregledaču da proveriš obe promene.

## Česte greške

- **Nemaju svi modeli tipove.** Neki izvoznici ne pišu objekte tipova ili sve stavljaju na primerak. Tada nema skupova „(tip)“, pa svaki element mora da se menja pojedinačno.
- **Ista vrednost se pojavljuje u skupu tipa i u skupu primerka.** Neki izvoznici upisuju parametar na oba mesta. Drugi programi mogu čitati bilo koje; promeni oba ako treba da se slažu.
- **Očekivati da izabereš „sva vrata ovog tipa“ i izmeniš ih zajedno.** U ovoj verziji nema višestrukog izbora. Svojstvo tipa je način da promeniš mnogo elemenata odjednom.
