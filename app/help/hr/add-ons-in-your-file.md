---
title: Dodaci koje vaša datoteka koristi
summary: BimCraft u IFC datoteci bilježi koji su dodaci u nju zapisali, i nudi da dodate one koji nedostaju kad je otvorite.
keywords: dodatak, addon, ova datoteka koristi, nedostajući dodatak, trusscraft, knjižnica, zapis, cadcraft_addons
from: 9d9500d8
---

## Što radi

Kad dodatak zapisuje u model (rešetku, dionicu cijevi), BimCraft bilježi dodatak i njegovu verziju na IFC projektu, u skupu svojstava CadCraft_AddOns. Zapis se upisuje u istom koraku poništavanja kao i sama promjena dodatka, pa poništavanje promjene vraća i zapis. Drugi programi ignoriraju skup svojstava; ono što je dodatak nacrtao ostaje u datoteci u oba slučaja.

## Koraci

1. Otvorite IFC datoteku koju je dodatak pomogao izraditi.
2. Ako dodatak koji je koristila nije uključen, iznad modela se pojavljuje napomena koja kaže koji su to, s gumbom za dodavanje iz vašeg računa u Knjižnici.
3. Dodajte ih ili zatvorite napomenu. Model se otvara u oba slučaja.

## Česte pogreške

- **Napomena se ne pojavljuje.** Niste prijavljeni na svoj račun u ovoj kartici, ili datoteka nema zapis (nastala je prije zapisa ili drugim programom).
- **Popis promjena kaže „undefined“.** Ispravljeno: oznake sada prikazuju naziv dodatka.

## Dalje

- [Postavite opremu i namještaj iz knjižnice](topic:place-from-library)
