---
title: Zidovi i vrata iz skeniranja telefonom ili laserom
summary: Pretvori skeniranje prostorije u predložene zidove, vrata i prostorije koje prihvataš jedno po jedno.
keywords: skeniranje, skeniranje telefonom, lidar, oblak tačaka, zidovi iz skeniranja, vrata iz skeniranja, skeniranje prostorije, ply, e57, las, obj, predloži
from: a4ef0f10
---

## Šta radi

Kada je skeniranje otvoreno (oblak tačaka kao što je PLY, E57 ili LAS, ili mreža kao OBJ), BimCraft seče skeniranje na visini plana, okreće ga pravo prema zgradi i traži duge, tanke nizove tačaka: to su zidovi. Procep otprilike širine vrata između dva niza na istoj liniji postaje jedan zid sa vratima u njemu. Zidovi koji zatvaraju prostor čine prostoriju.

Ništa se ne crta dok ne prihvatiš. Zidovi i vrata dolaze kao lista predloga (to su izmene u režimu Predlog): zadrži one koji su tačni, odbaci ostale, a sve što zadržiš crta se u jednom koraku za Opozovi. Prostorije se pojavljuju same.

## Šta proverava

Zidovi koji se ne zatvaraju, deonice zida kraće od debljine zida i procep veličine vrata bez zida oko njega prijavljuju se kao **Problemi** sa položajem, pa možeš da pogledaš skeniranje na tom mestu.

## Nepotvrđeno dok se ne proveri

Zidovi, vrata i prostorije koje prihvatiš iz skeniranja označeni su kao nepotvrđeni: isprekidan okvir i „?“ u planu dok ih ne označiš kao proverene. Pogledaj [Označi elemente kao proverene ili potvrđene na terenu](topic:verification).

## Šta ne može

- Nalazi zidove koji idu u dva upravna pravca. Dijagonalni ili zakrivljeni zid se ne nalazi.
- Jedan sprat po jedan. Prozori se ne nalaze (prozor je procep samo kada je rez na visini parapeta).
- Isprobano je na generisanim skeniranjima prostorija i mrežama, još ne na skeniranjima sa pravog telefona. Koliko dobro radi na pravom skeniranju (odstupanje na dugoj šetnji, nameštaj uz zidove, staklo, otvorena vrata) nije poznato, a podešavanje na pravim skeniranjima je sledeći korak. Proveri svaki predlog u odnosu na skeniranje pre prihvatanja.
