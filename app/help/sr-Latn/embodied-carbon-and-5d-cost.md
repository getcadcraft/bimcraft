---
title: Ugrađeni ugljenik i troškovi na rasporedu
summary: Zbrojite ugrađeni ugljenik modela iz otvorene tabele faktora koju možete menjati i rasporedite cene po 4D rasporedu u krivu troška i novčanog toka. Oba polaze od vrednosti koje ukucate ili uvezete.
keywords: ugrađeni ugljenik, ugljenik, co2, kgco2e, emisije, tabela faktora, epd, 5d, trošak, novčani tok, s kriva, trošak rasporeda, cene, cene iz predmera
from: 83e82840
---

## Ugrađeni ugljenik

Otvorite okno **Ugljenik**. Količina svakog elementa (zapremina, površina ili dužina) množi se faktorom iz tabele, po modulu životnog ciklusa: faza proizvodnje je obavezna, a transport i otpad su opcioni. Zbirovi se daju po materijalu, klasi i spratu, i po kvadratnom metru poda.

**Tabela faktora je vaša.** Redovi koji dolaze uz BimCraft su opšte početne vrednosti pravog reda veličine. Nisu iz baze podataka, označeni su kao neprovereni i treba ih zameniti izvorom koji koristite (EPD, nacionalnom bazom ili podacima vaše firme). Redove menjate u oknu, ili uvozite i izvozite tabelu kao CSV ili JSON. Redovi koje dodate zamenjuju početni red sa istim id-em. Tabela se čuva u modelu.

Elementi bez poklapanja ili bez količine navode se kao Problemi, a ne broje se kao nula.

## Troškovi na 4D rasporedu

Otvorite okno **Trošak** pored 4D rasporeda. Unesite cene (ukucajte ih, uvezite CSV ili JSON, ili prenesite stavke iz TakeoffCraft-a), povežite svaku cenu sa materijalima modela ključnim rečima, i okno će oceniti elemente svakog zadatka. Trošak zadatka raspoređuje se na dane od početka do završetka (ravnomerno, ili opterećeno na početku ili na kraju), a okno crta kumulativnu krivu novčanog toka po danu, nedelji ili mesecu, sa troškom po fazi i paketu, i prikazuje šta je planirano u odnosu na ono što je izgrađeno na datom datumu. Izvoz ide u CSV. Ništa se ne ocenjuje dok ne unesete cene: nijedna nije isporučena uz program.

## Valuta

Tabela cena može navesti u kojoj su valuti njene cene (tri slova, na primer USD ili EUR). Okno 5D ima polje za to, valuta se čuva u datoteci uz cene, a JSON izvozi je nose. Tabela napravljena pre toga, ili ona u kojoj ste ga ostavili praznim, nema valutu: njeni troškovi se prikazuju kao USD, podrazumevana valuta programa, a okno i tekući zbirovi to kažu. Ništa se ne pretvara između valuta.
