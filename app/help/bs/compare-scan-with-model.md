---
title: Uporedi sken sa modelom i 4D rasporedom
summary: Ocijeni svaki element modela u odnosu na otvoreni oblak tačaka (izgrađen, djelimično, nedostaje, nije dosegnut), pogledaj procenat izgrađenosti, oboji model prema tome, i uz učitan 4D raspored navedi šta kasni ili ide ispred na 4D dan.
keywords: sken, oblak tačaka, napredak, procenat završenosti, izgrađeno, nedostaje, kasni, ispred rasporeda, 4D, napredak na terenu, odstupanje, kako izgrađeno, lasersko skeniranje, dron, uporedi
from: 6fdc9003
---

Otvorite IFC, otvorite oblak tačaka pored njega (pogledajte [Oblaci tačaka](topic:point-clouds)) i postavite ga na model. Odjeljak {{ui:Uporedi sken sa modelom}} pojavljuje se u desnom panelu dok je oblak otvoren.

## Šta radi

Pritisnite {{ui:Uporedi}}. Svaki element modela se ocjenjuje po svojoj površini, jer je to ono što skener vidi. Šest strana njegove kutije podijeljeno je na ćelije od oko 20 cm; ćelija se računa kada tačka skena leži unutar vaše {{ui:Tolerancije}} (na početku 50 mm) od strane. Računa se najbolja velika strana, tako da zid skeniran sa jedne strane nije kažnjen zbog druge strane.

- **Izgrađeno**: najmanje 40 % površine je vidljivo.
- **Djelimično**: od 10 % do 40 %.
- **Nedostaje**: manje od toga, ali sken dopire do elementa (tačke unutar 1,5 m od njega).
- **Nije dosegnuto**: sken nikad nije bio tamo, pa se ništa ne tvrdi o njemu.

Za izgrađene i djelimično izgrađene elemente daje i srednje odstupanje tačaka skena od površine modela i kaže je li element na mjestu (unutar tolerancije), blizu (unutar tri puta) ili van mjesta (dalje). Vidi samo odstupanja do pet puta veća od tolerancije: element izgrađen dalje od svog mjesta od toga čita se kao da nedostaje.

Sažetak daje procenat izgrađenosti među elementima koje sken dosegne, po broju i po zapremini. Djelimično izgrađeni elementi se broje odvojeno i ne dodaju se izgrađenima.

## U odnosu na 4D raspored

Sa učitanim 4D rasporedom (pogledajte [4D raspored](topic:4d-schedule)), rezultat također koristi dan koji ste postavili na 4D klizaču: elementi koji su na red do tog dana, a koje sken ne prikazuje kao izgrađene, su **iza rasporeda**; elementi koji još nisu na redu, a izgrađeni su, su **ispred**. Elementi koji kasne navedeni su u {{ui:Problemi}}, a tabela se može filtrirati na njih. Bez rasporeda ništa se ne kaže o tome da li kasni ili ide ispred.

## Tabela i model

Kliknite red da odaberete element. {{ui:Oboji model}} boji elemente zeleno (izgrađeno), žuto (djelimično), crveno (nedostaje) ili sivo (nije dosegnuto); {{ui:Vlastite boje}} ih vraća. {{ui:Spasi CSV}} zapisuje tabelu. {{ui:Označi odgovarajuće elemente kao provjerene na terenu}} označava svaki element viđen kao izgrađen i unutar tolerancije kao provjeren na terenu (LOD 500, metoda skeniranje), u jednom koraku koji možete poništiti. Pogledajte [Označi elemente kao provjerene ili provjerene na terenu](topic:verification).

:::warning
Ovo uspoređuje kutiju svakog elementa sa tačkama skena unutar tolerancije. To **nije geodetsko snimanje, obračun količina niti osnova za plaćanje**. Element skriven iza skeniranog (zid iza obloge, ploča ispod završne podne obloge) dijeli svoju površinu i može se pročitati kao izgrađen; zakrivljen ili nagnut element ima kutiju veću od svog tijela i može se pročitati kao djelimičan ili nedostajući. Pogledajte listu prije nego što išta preduzmete. Komentari uz dozvole i bilješke o napretku nisu dio ovoga: ostaju u kolonama u kojima ih čuvate.
:::

Asistent može pokrenuti isto poređenje sa alatom {{ui:Uporedi sken sa modelom}}; ne mijenja ništa u modelu.
