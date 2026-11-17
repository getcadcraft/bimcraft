---
title: Dodaci koje vaša datoteka koristi
summary: BimCraft u IFC datoteci bilježi koje su dodatke u nju upisale i nudi da dodate one koji nedostaju kada je otvorite.
keywords: dodatak, addon, ova datoteka koristi, nedostajući dodatak, trusscraft, biblioteka, zapis, cadcraft_addons
from: 9d9500d8
---

## Šta radi

Kada dodatak upiše nešto u model (rešetku, dionicu cijevi), BimCraft na IFC projekat zapisuje dodatak i njegovu verziju, u skup svojstava CadCraft_AddOns. Zapis se upisuje u istom koraku poništavanja kao i sama promjena dodatka, pa poništavanje promjene vraća i zapis. Drugi programi ignorišu taj skup svojstava; ono što je dodatak nacrtao u svakom slučaju ostaje u datoteci.

## Koraci

1. Otvorite IFC datoteku koju je dodatak pomogao napraviti.
2. Ako dodatak koji je koristila nije uključen, iznad modela se pojavljuje napomena koja kaže koji su, sa dugmetom za njihovo dodavanje iz vašeg računa u biblioteci.
3. Dodajte ih ili zatvorite napomenu. Model se otvara u oba slučaja.

## Česte greške

- **Napomena se ne pojavljuje.** Niste prijavljeni na svoj račun u ovoj kartici, ili datoteka nema zapis (napravljena je prije zapisa ili drugim programom).
- **Spisak promjena kaže „undefined”.** Ispravljeno: oznake sada prikazuju naziv dodatka.

## Dalje

- [Postavite opremu i namještaj iz biblioteke](topic:place-from-library)
