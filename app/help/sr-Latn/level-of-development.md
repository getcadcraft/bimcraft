---
title: Nivo razvoja (LOD) i provere prekretnica
summary: Dodelite elementima nivo razvoja, pogledajte odakle on potiče, proverite model u odnosu na LOD koji prekretnica traži i ispravite nedostajuće oznake i neimenovane prostorije. Svaka provera daje savet; ništa se ne blokira.
keywords: lod, nivo razvoja, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, prekretnica, tabela prekretnica, provere modela, nedostajuće oznake, neimenovane prostorije, generički u ranoj fazi, IFC klasa, klasifikacija
from: 2091c79b
---

## Šta ćete uraditi

Navedite koliko je svaki element razvijen, a zatim proverite ceo model u odnosu na ono što projektna prekretnica traži.

## Koraci

1. Izaberite element (ili više njih) i otvorite {{ui:Svojstva}}. Pronađite {{ui:Nivo razvoja}}.
2. Izaberite nivo sa liste. Svaki nivo nosi naziv prema onome što znači, i uključuje sve nivoe ispod sebe. Jedan korak za opozivanje obuhvata ceo izbor.
3. Pročitajte odakle nivo potiče: sa ovog elementa, sa njegovog tipa ili iz oznake potvrđene na terenu.
4. Da biste proverili model, sa leve strane otvorite {{ui:Provere modela}}, pa {{ui:LOD prekretnice}}. Izaberite prekretnicu i tabelu (polaznu tabelu ili sopstvenu CSV ili JSON datoteku pomoću {{ui:Opterećenje}}).
5. Kliknite {{ui:Proveri model}}. Ukupni zbirovi i red za svaki red tabele pokazuju šta je dostiglo svoj nivo, a šta nije; nalazi se takođe pojavljuju na listi Problema.
6. Pod {{ui:Nedostajuće oznake i neimenovane prostorije}} kliknite {{ui:Pronađi ih}}, po želji izmenite predloge i kliknite {{ui:Primeni}}.

## Šta treba da vidite

- Nivo koji ste izabrali na elementu, sa njegovom IFC klasom i kodovima klasifikacije pored.
- Zbirove i redove za prekretnicu. Tabela nikada ne menja značenje nivoa: razmera je fiksna, a tabela samo kaže koji nivo prekretnica traži.
- „Ostajanje generičnim u ranoj fazi”: savet da elementi ostanu generički u ranoj prekretnici. To je samo savet.

## Dobro je znati

- Ovde se ništa ne blokira. Model ispod nivoa koji prekretnica traži se navodi, ali se ne odbija.
- Tri dela nivoa (geometrija, informacije i dokumentacija) može se postaviti pojedinačno; oznaka pokazuje da je ispunjeno, ispod ili nije navedeno.
