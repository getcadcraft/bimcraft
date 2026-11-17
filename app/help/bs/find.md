---
title: Pronađi elemente po klasi, nazivu ili svojstvu
summary: Pronađi svaki element koji odgovara jednom ili više pravila — njegovoj klasi, nazivu, tipu, spratu, materijalu ili vrijednosti bilo kog svojstva — odaberi ih sve i sačuvaj pravila kao imenovani skup pretrage.
keywords: pronađi, traži, filter, upit, pravilo, skup pretrage, skup odabira, sačuvana pretraga, svojstvo, vrijednost, klasa, materijal, odaberi sve
from: 3d293bc2
---

## Šta ćete uraditi

Odaberite svaki element jedne vrste ili s jednom vrijednošću u jednom koraku: svaka vrata, svaki zid na Nivou 2, svaki element čija je vatrootpornost EI60, svaki zid koji košta više od zadanog iznosa.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Pronađi}} u lijevom panelu.
3. U prvom pravilu izaberite svojstvo (prvo vlastita svojstva elementa, poput {{ui:Klasa}} i {{ui:Sprat}}, zatim skupove svojstava modela), način poređenja i vrijednost. Polje za vrijednost predlaže vrijednosti koje model ima.
4. Da suzite pretragu, kliknite {{ui:Dodaj pravilo}}. Izaberite {{ui:Svako pravilo}} ako treba zadovoljiti sva, ili {{ui:Bilo koje pravilo}} ako treba zadovoljiti jedno.
5. Kliknite {{ui:Pronađi}} ili pritisnite {{key:Enter}} u polju za vrijednost. Svi odgovarajući elementi se odaberu.
6. Da sačuvate pravila, kliknite {{ui:Spasi kao skup}}, upišite naziv i ponovo kliknite na njega. Kasnije kliknite na naziv skupa da pronađete elemente pomoću njega.

## Šta treba da vidite

- Pogodci su odabrani u 3D prikazu i stablu modela, a {{ui:Svojstva}} pokazuju koliko ih je po klasi. Pritisnite {{key:I}} da prikažete samo njih, {{key:H}} da ih sakrijete.
- Riječi se poklapaju bez obzira na velika i mala slova. Brojevi se upoređuju kao brojevi: „je veće od 1000“ znači vrijednost, a ne tekst.
- {{ui:ima vrijednost}} i {{ui:nema vrijednost}} ne traže vrijednost; pronalaze ono što je popunjeno ili što nedostaje.
- Sačuvani skupovi ostaju u ovom pregledaču za svaki model koji otvorite.

## Česte greške

- **Ništa nije pronađeno.** Pravilo treba vrijednost koja se može poklopiti: pogledajte prijedloge u polju za vrijednost.
- **Svojstvo nedostaje na listi.** Nijedan element s oblikom u ovom modelu ga nema.

## Dalje

- [Boja elemenata prema svojstvu](topic:color-by-property)
- [Sakrij, izoluj i učini providnim elemente](topic:hide-and-isolate)
