---
title: Uporedi skeniranje sa modelom i 4D rasporedom
summary: Oceni svaki element modela u odnosu na otvoreni oblak tačaka (izgrađen, delimično, nedostaje, nije dostignut), vidi procenat izgrađenog, oboji model prema tome i, uz učitan 4D raspored, nabroj šta kasni ili je ispred na 4D dan.
keywords: skeniranje, oblak tačaka, napredak, procenat završenosti, izgrađeno, nedostaje, kasni, ispred rasporeda, 4D, napredak na terenu, odstupanje, izvedeno stanje, laserski sken, dron, uporedi
from: 6fdc9003
---

Otvorite IFC, otvorite oblak tačaka pored njega (pogledajte [Oblaci tačaka](topic:point-clouds)) i postavite ga na model. Odeljak {{ui:Uporedi skeniranje sa modelom}} se pojavljuje na desnom panelu dok je oblak otvoren.

## Šta radi

Pritisnite {{ui:Uporedi}}. Svaki element modela se ocenjuje po svojoj površini, jer to je ono što skener vidi. Šest strana njegove kutije se seče na ćelije od oko 20 cm; ćelija se računa kada tačka skena leži unutar vaše {{ui:Tolerancija}} (na početku 50 mm) od strane. Računa se najveća velika strana, pa zid skeniran sa jedne strane nije kažnjen zbog druge strane.

- **Izgrađeno**: bar 40 % površine je viđeno.
- **Delimično**: od 10 % do 40 %.
- **Nedostaje**: manje od toga, ali skener dopire do elementa (tačke unutar 1.5 m od njega).
- **Nije dostignuto**: skener nikad nije bio tamo, pa se o tome ništa ne kaže.

Za izgrađene i delimično izgrađene elemente daje i srednje odstupanje tačaka skena od površine modela i kaže da li je element na mestu (unutar tolerancije), blizu (unutar tri puta) ili van mesta (dalje). Vidi samo odstupanja do pet puta tolerancije: element izgrađen dalje od svog mesta od toga izgleda kao da nedostaje.

Rezime daje procenat izgrađenog među elementima koje skener dostiže, po broju i po zapremini. Delimično izgrađeni elementi se broje posebno i ne dodaju se izgrađenima.

## Prema 4D rasporedu

Sa učitanim 4D rasporedom (pogledajte [4D raspored](topic:4d-schedule)), rezultat takođe koristi dan koji ste podesili na 4D klizaču: elementi koji treba da budu gotovi do tog dana, a koje skener ne prikazuje kao izgrađene, su **iza rasporeda**; elementi koji još nisu na redu, a izgrađeni su, su **ispred**. Elementi iza rasporeda su navedeni u {{ui:Problemi}}, a tabela može da se filtrira na njih. Bez rasporeda se ništa ne kaže o tome da li je nešto iza ili ispred.

## Tabela i model

Kliknite red da izaberete element. {{ui:Oboji model}} boji elemente zeleno (izgrađeno), jantarno (delimično), crveno (nedostaje) ili sivo (nije dostignuto); {{ui:Sopstvene boje}} ih vraća. {{ui:Sačuvaj CSV}} upisuje tabelu. {{ui:Označi odgovarajuće elemente kao proverene na terenu}} obeležava svaki element viđen kao izgrađen i unutar tolerancije kao proveren na terenu (LOD 500, metoda skeniranje), u jednom koraku koji možete opozvati. Pogledajte [Označi elemente kao provereno ili proverene na terenu](topic:verification).

:::warning
Ovo poredi kutiju svakog elementa sa tačkama skena unutar tolerancije. To **nije geodetsko snimanje, obračun količina niti osnova za plaćanje**. Element sakriven iza skeniranog (zid iza obloge, ploča ispod završne podloge poda) deli svoju površinu i može se pročitati kao izgrađen; zakrivljen ili nagnut element ima kutiju veću od svog tela i može se pročitati kao delimičan ili nedostajući. Pogledajte listu pre nego što postupite prema njoj. Komentari uz dozvole i beleške o napretku nisu deo ovoga: ostaju u kolonama u kojima ih čuvate.
:::

Pomoćnik može da izvrši isto poređenje alatom {{ui:Uporedi skeniranje sa modelom}}; ništa ne menja u modelu.
