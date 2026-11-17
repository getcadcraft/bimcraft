---
title: Ugrađeni ugljik i troškovi na rasporedu
summary: Zbrojite ugrađeni ugljik modela iz otvorene, izmjenjive tabele faktora, i rasporedite cijene preko 4D rasporeda u krivu troška i novčanog toka. Oba polaze od vrijednosti koje upišete ili uvezete.
keywords: ugrađeni ugljik, ugljik, co2, kgco2e, emisije, tabela faktora, epd, 5d, trošak, novčani tok, S-kriva, trošak rasporeda, cijene, cijene predmjera
from: 83e82840
---

## Ugrađeni ugljik

Otvorite panel **Ugljik**. Količina svakog elementa (zapremina, površina ili dužina) množi se faktorom iz tabele, po modulu životnog ciklusa: faza proizvodnje je obavezna, transport i otpad su opcioni. Zbirovi se daju po materijalu, klasi i spratu, te po kvadratnom metru poda.

**Tabela faktora je vaša.** Redovi koji dolaze uz BimCraft su generičke početne vrijednosti pravog reda veličine. Nisu iz baze podataka, označeni su kao neprovjereni, i treba ih zamijeniti izvorom koji koristite (EPD, nacionalna baza ili podaci vaše firme). Uređujte redove u panelu, ili uvezite i izvezite tabelu kao CSV ili JSON. Redovi koje dodate zamjenjuju početni red sa istim id-om. Tabela se čuva u modelu.

Elementi bez poklapanja, ili bez količine, navode se kao Problemi, umjesto da se broje kao nula.

## Troškovi na 4D rasporedu

Otvorite panel **Trošak** pored 4D rasporeda. Unesite cijene (upišite ih, uvezite CSV ili JSON, ili donesite stavke iz TakeoffCraft), povežite svaku cijenu sa materijalima modela pomoću ključnih riječi, i ona će odrediti cijenu elemenata svakog zadatka. Trošak zadatka raspoređuje se na dane od početka do kraja (ravnomjerno, ili s opterećenjem na početku ili kraju), a panel crta kumulativnu krivu novčanog toka po danu, sedmici ili mjesecu, sa troškom po fazi i paketu, te šta je planirano naspram onoga što je izgrađeno na datum. Izvoz je CSV. Ništa nije cijenjeno dok ne unesete cijene: nijedna nije isporučena uz program.

## Valuta

Tabela cijena može navesti u kojoj su valuti njene cijene (tri slova, kao USD ili EUR). Panel 5D ima polje za to; čuva se u datoteci uz cijene, a JSON izvozi ga nose. Tabela napravljena prije toga, ili ona u kojoj ste ga ostavili praznim, nema valutu: njeni troškovi prikazuju se kao USD, što je podrazumijevana vrijednost programa, a panel i tekući zbirovi to kažu. Ništa se ne pretvara između valuta.
