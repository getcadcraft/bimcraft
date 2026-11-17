---
title: Oznake prostorija i površina
summary: Stavite oznaku s brojem, nazivom i površinom na prostoriju ili površinu. Oznaka slijedi prostoriju, a njezinu veličinu određuje visina na papiru.
keywords: oznaka, oznaka prostorije, oznaka površine, označi prostoriju, označi površinu, označi sve neoznačene, natpis, visina teksta, visina na papiru, bilješka
from: 67059d8a
---

## Što ćete učiniti

Označite prostorije i površine jednu po jednu ili sve odjednom te pomaknite oznaku na mjesto gdje dobro izgleda.

## Gdje su alati

- Rasporedi s vrpcom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Oznaka prostorije}} i {{ui:Oznaka površine}}.
- Klasični raspored: traka za crtanje › izbornik {{ui:Prostorije}}.
- Odabrana prostorija ili površina: Svojstva › {{ui:Dodaj oznaku}}.

## Koraci

1. Odaberite {{ui:Oznaka prostorije}} i kliknite u prostoriju, tamo gdje oznaka treba biti.
2. Ili pritisnite {{ui:Označi sve neoznačene}} u retku: svaka prostorija na ovoj etaži koja nema oznaku dobit će je, u svojoj sredini. To je jedan korak poništavanja.
3. Da pomaknete oznaku, odaberite je alatom Odaberi i povucite je. Svojstva imaju {{ui:Vrati u sredinu}}.
4. {{ui:Oznaka površine}} radi isto za površine.

## Što oznaka čini

- Navodi broj, naziv i površinu, u vašim jedinicama prikaza.
- Slijedi svoju prostoriju: preimenujete li prostoriju ili pomaknete zid, riječi i mjesto oznake mijenjaju se u istom koraku.
- Veličina joj je određena na papiru: {{ui:Visina teksta na papiru}} je u milimetrima (početno 2.5). Pri mjerilu prikaza 1:50 oznaka od 2.5 mm visoka je 125 mm u modelu; pri 1:100 je 250 mm.
- Prostorija s oznakom prikazuje oznaku umjesto svoje obične oznake.
- Kad njezina prostorija ili površina nestane, oznaka nestaje s njom. Poništavanje vraća oboje.

## U IFC-u

Oznaka je IfcAnnotation (ObjectType ROOMTAG ili AREATAG) s tekstom kao tekstualnim literalom i GlobalId onoga što imenuje. Tekst u datoteci daje površinu u kvadratnim metrima.

## Još nije izrađeno

- Vlastiti oblici oznaka i vodilica.
- Oznake na vratima, prozorima i zidovima zaseban su alat (vidi stilove oznaka listova).

Vidi i [Prostorije i razdjelnici prostorija](topic:rooms-and-separators).
