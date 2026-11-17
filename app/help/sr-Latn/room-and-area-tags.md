---
title: Oznake prostorija i površina
summary: Stavite oznaku sa brojem, nazivom i površinom na prostoriju ili površinu. Oznaka prati prostoriju, a veličina joj zavisi od visine na papiru.
keywords: oznaka, oznaka prostorije, oznaka površine, označi prostoriju, označi površinu, označi sve neoznačene, natpis, visina teksta, visina na papiru, anotacija
from: 67059d8a
---

## Šta ćeš uraditi

Označi prostorije i površine jednu po jednu ili sve odjednom i pomeri oznaku na mesto gde se dobro čita.

## Gde su alatke

- Rasporedi trake: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Označi prostoriju}} i {{ui:Označi površinu}}.
- Klasičan raspored: traka za crtanje › meni {{ui:Prostorije}}.
- Izabrana prostorija ili površina: Svojstva › {{ui:Dodaj oznaku}}.

## Koraci

1. Izaberi {{ui:Označi prostoriju}} i klikni u prostoriji, tamo gde oznaka treba da stoji.
2. Ili pritisni {{ui:Označi sve neoznačene}} u traci: svaka prostorija na ovom nivou koja nema oznaku dobija je, u svojoj sredini. To je jedan korak za {{ui:Opozovi}}.
3. Da pomeriš oznaku, izaberi je alatkom {{ui:Izaberi}} i prevuci je. Svojstva imaju {{ui:Vrati u sredinu}}.
4. {{ui:Označi površinu}} radi isto za površine.

## Šta oznaka radi

- Pokazuje broj, naziv i površinu, u vašim jedinicama prikaza.
- Prati svoju prostoriju: ako preimenuješ prostoriju ili pomeriš zid, reči i mesto oznake menjaju se u istom koraku.
- Veličina joj je na papiru: {{ui:Visina teksta na papiru}} je u milimetrima (za početak 2.5). Pri razmeri pogleda 1:50 oznaka od 2.5 mm visoka je 125 mm u modelu; pri 1:100 je 250 mm.
- Prostorija sa oznakom prikazuje oznaku umesto svog običnog natpisa.
- Kada njena prostorija ili površina nestane, oznaka nestaje s njom. {{ui:Opozovi}} vraća obe.

## U IFC-u

Oznaka je IfcAnnotation (ObjectType ROOMTAG ili AREATAG) sa tekstom kao tekstualnim literalom i GlobalId-jem onoga što imenuje. Tekst u datoteci daje površinu u kvadratnim metrima.

## Još nije napravljeno

- Sopstveni oblici oznaka i vodeća linija.
- Oznake na vratima, prozorima i zidovima su zaseban alat (vidi stilove oznaka listova).

Pogledaj takođe [Prostorije i razdelnici prostorija](topic:rooms-and-separators).
