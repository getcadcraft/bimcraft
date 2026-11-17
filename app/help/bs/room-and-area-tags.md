---
title: Oznake prostorija i površina
summary: Stavite oznaku s brojem, nazivom i površinom na prostoriju ili površinu. Oznaka prati svoju prostoriju, a veličina joj zavisi od visine na papiru.
keywords: oznaka, oznaka prostorije, oznaka površine, označi prostoriju, označi površinu, označi sve neoznačene, natpis, visina teksta, visina na papiru, anotacija
from: 67059d8a
---

## Šta ćete uraditi

Označite prostorije i površine jednu po jednu ili sve odjednom, i pomjerite oznaku gdje se dobro čita.

## Gdje su alati

- Layouti sa trakom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Označi prostoriju}} i {{ui:Označi površinu}}.
- Klasični layout: traka Crtanje › meni {{ui:Prostorije}}.
- Odabrana prostorija ili površina: Svojstva › {{ui:Dodaj oznaku}}.

## Koraci

1. Odaberite {{ui:Označi prostoriju}} i kliknite u prostoriju, tamo gdje oznaka treba stajati.
2. Ili pritisnite {{ui:Označi sve neoznačene}} u redu: svaka prostorija na ovom nivou koja nema oznaku dobija je, u njenoj sredini. To je jedan korak poništavanja.
3. Da pomjerite oznaku, odaberite je alatom Odaberi i prevucite je. Svojstva imaju {{ui:Vrati u sredinu}}.
4. {{ui:Označi površinu}} radi isto za površine.

## Šta oznaka radi

- Pokazuje broj, naziv i površinu, u vašim jedinicama prikaza.
- Prati svoju prostoriju: preimenujete prostoriju ili pomjerite zid, a riječi i mjesto oznake se mijenjaju u istom koraku.
- Veličina joj je na papiru: {{ui:Visina teksta na papiru}} je u milimetrima (na početku 2.5). Pri razmjeri prikaza 1:50, oznaka od 2.5 mm visoka je 125 mm u modelu; pri 1:100 je 250 mm.
- Prostorija s oznakom prikazuje oznaku umjesto svog običnog natpisa.
- Kad njena prostorija ili površina nestane, oznaka nestaje s njom. Poništi vraća oboje.

## U IFC-u

Oznaka je IfcAnnotation (ObjectType ROOMTAG ili AREATAG) s tekstom kao tekstualnim literalom i GlobalId elementa koji imenuje. Tekst u datoteci daje površinu u kvadratnim metrima.

## Još nije urađeno

- Vlastiti oblici oznaka i vodilica.
- Oznake na vratima, prozorima i zidovima su poseban alat (vidi stilove oznaka listova).

Vidi i [Prostorije i razdjelnici prostorija](topic:rooms-and-separators).
