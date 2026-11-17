---
title: Zidovi i vrata iz skeniranja telefonom ili laserom
summary: Pretvorite skeniranje prostorije u predložene zidove, vrata i prostorije koje prihvatate jedan po jedan.
keywords: skeniranje, skeniranje telefonom, lidar, oblak tačaka, zidovi iz skeniranja, vrata iz skeniranja, skeniranje prostorije, ply, e57, las, obj, predloži
from: a4ef0f10
---

## Šta radi

Kad je skeniranje otvoreno (oblak tačaka kao što je PLY, E57 ili LAS, ili mreža kao OBJ), BimCraft presijeca skeniranje na visini plana, okreće ga pravo u odnosu na zgradu, i traži duge, tanke nizove tačaka: to su zidovi. Procijep otprilike širine vrata između dva niza na istoj liniji postaje jedan zid s vratima u njemu. Zidovi koji zatvaraju prostor čine prostoriju.

Ništa se ne crta dok ga ne prihvatite. Zidovi i vrata dolaze kao lista prijedloga (to su promjene u režimu Predloži): zadržite one koji su tačni, odbacite ostale, a sve što zadržite nacrta se u jednom koraku poništavanja. Prostorije se pojavljuju same.

## Šta provjerava

Zidovi koji se ne zatvaraju, dijelovi zidova kraći od debljine zida, i procijep veličine vrata bez zida oko njega prijavljuju se kao Problemi s pozicijom, pa možete pogledati skeniranje na tom mjestu.

## Neprovjereno dok se ne provjeri

Zidovi, vrata i prostorije koje prihvatite iz skeniranja označeni su kao neprovjereni: isprekidan okvir i „?” u planu dok ih ne označite kao provjerene. Vidi [Označavanje elemenata kao provjerenih ili provjerenih na terenu](topic:verification).

## Šta ne može

- Nalazi zidove koji idu u dva okomita smjera. Kosi ili zakrivljeni zid se ne nalazi.
- Jedan sprat u jednom trenutku. Prozori se ne nalaze (prozor je samo procijep kad je presjek na visini parapeta).
- Isprobano je na generisanim skeniranjima prostorija i mrežama, još ne na skeniranjima sa pravog telefona. Koliko dobro radi na pravom skeniranju (pomak tokom dugog hodanja, namještaj uz zidove, staklo, otvorena vrata) nije poznato, a podešavanje na pravim skeniranjima je sljedeći korak. Provjerite svaki prijedlog u odnosu na skeniranje prije nego ga prihvatite.
