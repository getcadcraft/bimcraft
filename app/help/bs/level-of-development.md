---
title: Nivo razvoja (LOD) i provjere prekretnica
summary: Dodijelite elementima nivo razvoja, pogledajte odakle dolazi, provjerite model u odnosu na LOD koji prekretnica traži i ispravite nedostajuće oznake i neimenovane prostorije. Svaka provjera daje savjet; ništa se ne blokira.
keywords: lod, nivo razvoja, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, prekretnica, tabela prekretnica, provjere modela, nedostajuće oznake, neimenovane prostorije, generički rano, ifc klasa, klasifikacija
from: 2091c79b
---

## Šta ćete uraditi

Recite koliko je svaki element razvijen, zatim provjerite cijeli model u odnosu na ono što traži projektna prekretnica.

## Koraci

1. Odaberite element (ili više) i otvorite {{ui:Svojstva}}. Pronađite {{ui:Nivo razvoja}}.
2. Odaberite nivo sa liste. Svaki nivo je nazvan po onome što znači, i svaki uključuje one ispod sebe. Jedan korak poništavanja obuhvata cijeli odabir.
3. Pročitajte odakle nivo dolazi: ovaj element, njegov tip ili oznaka potvrđena na terenu.
4. Za provjeru modela otvorite {{ui:Provjere modela}} lijevo, zatim {{ui:Prekretnice LOD}}. Odaberite prekretnicu i tabelu (početnu tabelu ili vlastitu CSV ili JSON datoteku pomoću {{ui:Opterećenje}}).
5. Kliknite {{ui:Provjeri model}}. Ukupni iznosi i red za svaki red tabele pokazuju šta je dostiglo svoj nivo, a šta nije; nalazi se također prikazuju na listi problema.
6. Pod {{ui:Nedostajuće oznake i neimenovane prostorije}} kliknite {{ui:Pronađi ih}}, uredite prijedloge ako želite, i kliknite {{ui:Primijeni}}.

## Šta treba da vidite

- Nivo koji ste odabrali na elementu, uz njegovu IFC klasu i kodove klasifikacije.
- Ukupni iznosi i redovi za prekretnicu. Tabela nikada ne mijenja značenje nivoa: razmjera je fiksna, tabela samo kaže koji nivo prekretnica traži.
- "Ostajanje generičkim u ranoj fazi": savjet da elemente zadržite generičkim u ranoj prekretnici. To je samo savjet.

## Dobro je znati

- Ništa ovdje ne blokira. Model ispod nivoa koji prekretnica traži se navodi, ali se ne odbija.
- Tri dijela nivoa (geometrija, informacije, dokumentacija) mogu se postaviti pojedinačno; oznaka pokazuje ispunjeno, ispod ili nije navedeno.
