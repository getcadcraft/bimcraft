---
title: Ugrađeni ugljik i troškovi na rasporedu
summary: Zbrojite ugrađeni ugljik modela iz otvorene tablice faktora koju možete uređivati i raspodijelite cijene na 4D raspored u krivulju troškova i novčanog toka. Oboje polazi od vrijednosti koje upišete ili uvezete.
keywords: ugrađeni ugljik, ugljik, co2, kgco2e, emisije, tablica faktora, epd, 5d, trošak, novčani tok, s-krivulja, trošak rasporeda, cijene, cijene iz predmjera
from: 83e82840
---

## Ugrađeni ugljik

Otvorite ploču **Ugljik**. Količina svakog elementa (volumen, površina ili duljina) množi se faktorom iz tablice, po modulu životnog ciklusa: faza proizvoda je obavezna, prijevoz i otpad su izborni. Zbirovi se daju po materijalu, klasi i etaži te po m² poda.

**Tablica faktora je vaša.** Redci koji dolaze uz BimCraft su generičke početne vrijednosti pravog reda veličine. Nisu iz baze podataka, označeni su kao nepotvrđeni i treba ih zamijeniti izvorom koji koristite (EPD-om, nacionalnom bazom ili podacima vaše tvrtke). Redke uređujte u ploči ili uvezite i izvezite tablicu kao CSV ili JSON. Redci koje dodate nadjačavaju početni redak s istim id-jem. Tablica se sprema u model.

Elementi bez podudaranja ili bez količine navode se u **Problemima**, a ne broje se kao nula.

## Troškovi na 4D rasporedu

Otvorite ploču **Troškovi** pored 4D rasporeda. Unesite cijene (upišite ih, uvezite CSV ili JSON ili dodajte stavke iz TakeoffCraft), povežite svaku cijenu s materijalima modela preko ključnih riječi, a ploča će odrediti cijenu elemenata svakog zadatka. Trošak zadatka raspodjeljuje se na dane od početka do završetka (ravnomjerno ili s naglaskom na početku ili kraju), a ploča crta kumulativnu krivulju novčanog toka po danu, tjednu ili mjesecu, s troškom po fazi i paketu te planiranim naspram izvedenog na određeni datum. Izvoz je u CSV. Ništa nema cijenu dok ne unesete cijene: nijedna nije isporučena uz program.

## Valuta

Tablica cijena može navesti u kojoj su valuti cijene (tri slova, poput USD ili EUR). Ploča 5D ima polje za to; sprema se u datoteku uz cijene, a JSON izvozi ga nose. Tablica nastala prije toga, ili ona u kojoj ste ga ostavili praznim, nema valutu: njezini troškovi prikazuju se kao USD, zadana postavka aplikacije, a ploča i tekući zbirovi to navode. Ništa se ne pretvara između valuta.
