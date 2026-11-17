---
title: Dodaci koje vaša datoteka koristi
summary: BimCraft u IFC datoteci beleži koji su dodaci u nju upisali i nudi da dodate one koji nedostaju kada je otvorite.
keywords: dodatak, addon, ova datoteka koristi, nedostajući dodatak, trusscraft, biblioteka, zapis, cadcraft_addons
from: 9d9500d8
---

## Šta radi

Kada dodatak upiše nešto u model (rešetku, deonicu cevi), BimCraft zapisuje dodatak i njegovu verziju na IFC projektu, u skupu svojstava CadCraft_AddOns. Zapis se upisuje u istom koraku opozivanja kao i sopstvena izmena dodatka, pa opozivanje izmene uklanja i zapis. Drugi programi ne obraćaju pažnju na ovaj skup svojstava; ono što je dodatak nacrtao ostaje u datoteci u svakom slučaju.

## Koraci

1. Otvorite IFC datoteku koju je dodatak pomogao da se napravi.
2. Ako dodatak koji je koristila nije uključen, iznad modela se pojavljuje napomena koja kaže koji su, sa dugmetom za dodavanje iz vašeg naloga u biblioteci.
3. Dodajte ih ili zatvorite napomenu. Model se otvara u oba slučaja.

## Česte greške

- **Napomena se ne pojavljuje.** Niste prijavljeni na svoj nalog u ovoj kartici, ili datoteka nema zapis (napravljena je pre uvođenja zapisa ili drugim programom).
- **Spisak izmena kaže „undefined“.** Ispravljeno: oznake sada prikazuju naziv dodatka.

## Dalje

- [Postavite opremu i nameštaj iz biblioteke](topic:place-from-library)
