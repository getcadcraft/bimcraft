---
title: Usporedite sken s modelom i 4D rasporedom
summary: Ocijenite svaki element modela prema otvorenom oblaku točaka (izgrađen, djelomično, nedostaje, nije dosegnut), pogledajte postotak izgrađenosti, obojite model prema tome i s učitanim 4D rasporedom popišite što kasni ili prednjači na 4D danu.
keywords: sken, oblak točaka, napredak, postotak dovršenosti, izgrađeno, nedostaje, kasni, prednjači, 4D, napredak na gradilištu, odstupanje, stvarno izvedeno, lasersko skeniranje, dron, usporedba
from: 6fdc9003
---

Otvorite IFC, otvorite oblak točaka uz njega (vidi [Oblaci točaka](topic:point-clouds)) i postavite ga na model. Odjeljak {{ui:Usporedi sken s modelom}} pojavljuje se na desnom panelu dok je oblak otvoren.

## Što radi

Pritisnite {{ui:Usporedi}}. Svaki element modela ocjenjuje se prema svojoj površini, jer to je ono što skener vidi. Šest strana njegove kutije podijeljeno je na ćelije od oko 20 cm; ćelija se broji kad točka skeniranja leži unutar vaše {{ui:Tolerancija}} (na početku 50 mm) od strane. Računa se najveća velika strana, pa zid skeniran s jedne strane nije kažnjen zbog druge.

- **Izgrađen**: najmanje 40 % površine je viđeno.
- **Djelomično**: 10 % do 40 %.
- **Nedostaje**: manje od toga, ali skeniranje doseže element (točke unutar 1.5 m od njega).
- **Nije dosegnut**: skeniranje nikad nije tamo bilo, pa se o njemu ništa ne tvrdi.

Za izgrađene i djelomično izgrađene elemente daje i srednje odstupanje točaka skeniranja od površine modela te kaže je li element na mjestu (unutar tolerancije), blizu (unutar trostruke tolerancije) ili izvan mjesta (dalje). Vidi samo odstupanja do petostruke tolerancije: element izgrađen dalje od svog mjesta od toga čita se kao nedostajući.

Sažetak daje postotak izgrađenih među elementima koje skeniranje doseže, po broju i po volumenu. Djelomično izgrađeni elementi broje se zasebno i ne zbrajaju se s izgrađenima.

## Prema 4D rasporedu

S učitanim 4D rasporedom (vidi [4D raspored](topic:4d-schedule)) rezultat također koristi dan koji ste postavili na 4D klizaču: elementi koji su do tog dana trebali biti gotovi, a skeniranje ih ne prikazuje kao izgrađene, **kasne prema rasporedu**; elementi koji još nisu na redu, a izgrađeni su, **prednjače**. Elementi koji kasne popisani su u {{ui:Problemi}}, a tablica se može filtrirati na njih. Bez rasporeda ništa se ne tvrdi o kašnjenju ili prednjačenju.

## Tablica i model

Kliknite redak da odaberete element. {{ui:Oboji model}} boji elemente zeleno (izgrađeni), jantarno (djelomično), crveno (nedostaje) ili sivo (nije dosegnut); {{ui:Vlastite boje}} ih vraća. {{ui:Spremi CSV}} zapisuje tablicu. Označi odgovarajuće elemente kao provjerene na terenu označava svaki element viđen kao izgrađen i unutar tolerancije kao provjeren na terenu (LOD 500, metoda skeniranje), u jednom koraku koji možete poništiti. Pogledajte [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

:::warning
Ovo uspoređuje kutiju svakog elementa s točkama skeniranja unutar tolerancije. **Nije geodetsko snimanje, predmjer ni osnova za plaćanje.** Element skriven iza skeniranog (zid iza obloge, ploča ispod podne obloge) dijeli svoju površinu i može se čitati kao izgrađen; zakrivljen ili nagnut element ima kutiju veću od svog tijela i može se čitati kao djelomičan ili nedostajući. Pogledajte popis prije nego što djelujete na temelju njega. Komentari uz dozvole i bilješke o napretku nisu dio ovoga: ostaju u stupcima u kojima ih držite.
:::

Pomoćnik može pokrenuti istu usporedbu alatom {{ui:Usporedi sken s modelom}}; ne mijenja ništa u modelu.
