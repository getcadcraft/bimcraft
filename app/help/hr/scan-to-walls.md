---
title: Zidovi i vrata iz skeniranja telefonom ili laserom
summary: Pretvorite skeniranje prostorije u predložene zidove, vrata i prostorije koje prihvaćate jedno po jedno.
keywords: skeniranje, skeniranje telefonom, lidar, oblak točaka, zidovi iz skeniranja, vrata iz skeniranja, skeniranje prostorije, ply, e57, las, obj, predloži
from: a4ef0f10
---

## Što radi

Kad je skeniranje otvoreno (oblak točaka poput PLY, E57 ili LAS, ili mreža poput OBJ), BimCraft reže skeniranje na visini tlocrta, okreće ga okomito na zgradu i traži duge, tanke nizove točaka: to su zidovi. Razmak otprilike širine vrata između dva niza na istoj liniji postaje jedan zid s vratima u njemu. Zidovi koji zatvaraju prostor tvore prostoriju.

Ništa se ne crta dok ga ne prihvatite. Zidovi i vrata dolaze kao popis prijedloga (to su promjene u načinu rada Predloži): zadržite one ispravne, odbacite ostale, a sve što zadržite nacrta se u jednom koraku poništavanja. Prostorije se pojavljuju same od sebe.

## Što provjerava

Zidovi koji se ne zatvaraju, dijelovi zidova kraći od debljine zida te praznina veličine vrata bez zida oko nje prijavljuju se kao Problemi s položajem, pa možete pogledati skeniranje tamo.

## Neprovjereno dok se ne provjeri

Zidovi, vrata i prostorije koje prihvatite iz skeniranja označeni su kao neprovjereni: isprekidani okvir i „?“ u tlocrtu dok ih ne označite kao provjerene. Vidi [Označavanje elemenata kao provjerenih ili provjerenih na terenu](topic:verification).

## Što ne može

- Nalazi zidove koji idu u dva okomita smjera. Dijagonalni ili zakrivljeni zid se ne nalazi.
- Jedna etaža odjednom. Prozori se ne nalaze (prozor je samo praznina kad je rez na visini podbočnice).
- Isprobano je na generiranim skeniranjima prostorija i mrežama, još ne na skeniranjima sa stvarnog telefona. Koliko dobro radi na stvarnom skeniranju (odstupanje pri dugoj šetnji, namještaj uz zidove, staklo, otvorena vrata) nije poznato, a podešavanje na stvarnim skeniranjima je sljedeći korak. Provjerite svaki prijedlog prema skeniranju prije nego ga prihvatite.
