---
title: Pronađi elemente po klasi, nazivu ili svojstvu
summary: Pronađi svaki element koji odgovara jednom ili više pravila — njegovoj klasi, nazivu, tipu, spratu, materijalu ili vrednosti nekog svojstva — izaberi ih sve i sačuvaj pravila kao imenovani skup pretrage.
keywords: pronađi, pretraga, filter, upit, pravilo, skup pretrage, skup izbora, sačuvana pretraga, svojstvo, vrednost, klasa, materijal, izaberi sve
from: 3d293bc2
---

## Šta ćete uraditi

Izaberite odjednom svaki element jedne vrste ili sa jednom vrednošću: svaka vrata, svaki zid na Nivou 2, svaki element čija je vatrootpornost EI60, svaki zid koji košta više od zadate sume.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Pronađi}} u levom panelu.
3. U prvom pravilu izaberite svojstvo (prvo sopstvena svojstva elementa, poput {{ui:Klasa}} i {{ui:Sprat}}, pa zatim skupove svojstava modela), način poređenja i vrednost. Polje za vrednost predlaže vrednosti koje model ima.
4. Da biste suzili pretragu, kliknite {{ui:Dodaj pravilo}}. Izaberite {{ui:Svako pravilo}} ako su potrebna sva, ili {{ui:Bilo koje pravilo}} ako je dovoljno jedno.
5. Kliknite {{ui:Pronađi}} ili pritisnite {{key:Enter}} u polju za vrednost. Ono što odgovara biva izabrano.
6. Da biste sačuvali pravila, kliknite {{ui:Sačuvaj kao skup}}, unesite naziv i kliknite ponovo. Kasnije kliknite naziv skupa da biste pretražili pomoću njega.

## Šta treba da vidite

- Podudarni elementi izabrani su u 3D prikazu i u stablu modela, a {{ui:Svojstva}} pokazuju koliko ih ima po klasi. Pritisnite {{key:I}} da prikažete samo njih, {{key:H}} da ih sakrijete.
- Reči se poklapaju bez obzira na velika i mala slova. Brojevi se porede kao brojevi: „je veće od 1000” znači vrednost, a ne tekst.
- {{ui:ima vrednost}} i {{ui:nema vrednost}} ne traže vrednost; pronalaze ono što je popunjeno, ili ono što nedostaje.
- Sačuvani skupovi ostaju u ovom pregledaču za svaki model koji otvorite.

## Česte greške

- **Ništa nije pronađeno.** Pravilo mora imati vrednost koju može da poklopi: pogledajte predloge u polju za vrednost.
- **Svojstvo nedostaje na listi.** Nijedan element sa oblikom u ovom modelu nema ga.

## Dalje

- [Obojite elemente po svojstvu](topic:color-by-property)
- [Sakrijte, izolujte i učinite elemente providnim](topic:hide-and-isolate)
