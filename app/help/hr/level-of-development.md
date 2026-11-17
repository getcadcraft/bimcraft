---
title: Razina razvoja (LOD) i provjere prekretnica
summary: Dodijelite elementima razinu razvoja, pogledajte odakle ona dolazi, provjerite model u odnosu na LOD koji prekretnica traži te ispravite nedostajuće oznake i nenazvane prostorije. Svaka provjera samo savjetuje; ništa se ne blokira.
keywords: lod, razina razvoja, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, prekretnica, tablica prekretnica, provjere modela, nedostajuće oznake, nenazvane prostorije, generički u ranoj fazi, ifc klasa, klasifikacija
from: 2091c79b
---

## Što ćete učiniti

Navedite koliko je svaki element razrađen, zatim provjerite cijeli model u odnosu na ono što zahtijeva projektna prekretnica.

## Koraci

1. Odaberite element (ili više njih) i otvorite {{ui:Svojstva}}. Pronađite {{ui:Razina razvoja}}.
2. Odaberite razinu s popisa. Svaka razina nosi naziv prema onome što znači, a svaka uključuje i razine ispod nje. Jedan korak poništavanja obuhvaća cijeli odabir.
3. Pročitajte odakle razina dolazi: ovaj element, njegov tip ili oznaka provjerena na terenu.
4. Za provjeru modela otvorite {{ui:Provjere modela}} s lijeve strane, zatim {{ui:LOD prekretnice}}. Odaberite prekretnicu i tablicu (početnu tablicu ili vlastitu CSV ili JSON datoteku pomoću {{ui:Opterećenje}}).
5. Kliknite {{ui:Provjeri model}}. Ukupni zbrojevi i redak za svaki redak tablice pokazuju što je doseglo svoju razinu, a što nije; nalazi se također prikazuju na popisu problema.
6. Pod {{ui:Nedostajuće oznake i nenazvane prostorije}} kliknite {{ui:Pronađi ih}}, uredite prijedloge po želji i kliknite {{ui:Primijeni}}.

## Što biste trebali vidjeti

- Razinu koju ste odabrali na elementu, uz njegovu IFC klasu i kodove klasifikacije.
- Ukupne zbrojeve i retke za prekretnicu. Tablica nikada ne mijenja značenje razine: mjerilo je fiksno, a tablica samo kaže koju razinu prekretnica zahtijeva.
- „Zadržavanje generičnosti u ranoj fazi”: savjet da se elementi u ranoj prekretnici drže generičkima. To je samo savjet.

## Dobro je znati

- Ništa ovdje vas ne blokira. Model ispod razine koju prekretnica zahtijeva se navodi, ali se ne odbija.
- Tri dijela razine (geometrija, informacije, dokumentacija) mogu se postaviti zasebno; oznaka pokazuje je li ispunjeno, ispod razine ili nije navedeno.
