---
title: Pronađite elemente prema klasi, nazivu ili svojstvu
summary: Pronađite svaki element koji odgovara jednom ili više pravila — njegovoj klasi, nazivu, tipu, etaži, materijalu ili vrijednosti bilo kojeg svojstva — odaberite ih sve i spremite pravila kao imenovani skup pretraživanja.
keywords: pronađi, traži, filtriraj, upit, pravilo, skup pretraživanja, skup odabira, spremljeno pretraživanje, svojstvo, vrijednost, klasa, materijal, odaberi sve
from: 3d293bc2
---

## Što ćete učiniti

Odaberite sve elemente jedne vrste ili s jednom vrijednošću u jednom koraku: svaka vrata, svaki zid na razini 2, svaki element čija je vatrootpornost EI60, svaki zid koji košta više od zadanog iznosa.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Traži}} u lijevoj ploči.
3. U prvom pravilu odaberite svojstvo (prvo vlastita svojstva elementa, poput {{ui:Klasa}} i {{ui:Etaža}}, zatim skupove svojstava modela), način usporedbe i vrijednost. Okvir za vrijednost predlaže vrijednosti koje model ima.
4. Za sužavanje kliknite {{ui:Dodaj pravilo}}. Odaberite {{ui:Svako pravilo}} ako želite da vrijede sva, ili {{ui:Bilo koje pravilo}} ako je dovoljno jedno od njih.
5. Kliknite {{ui:Traži}} ili pritisnite {{key:Enter}} u okviru za vrijednost. Što odgovara, bit će odabrano.
6. Za spremanje pravila kliknite {{ui:Spremi kao skup}}, upišite naziv i ponovno kliknite. Kasnije kliknite naziv skupa da biste pretraživali s njim.

## Što trebate vidjeti

- Pronađeni elementi odabrani su u 3D prikazu i stablu modela, a {{ui:Svojstva}} navode koliko ih je po klasi. Pritisnite {{key:I}} da prikažete samo njih, {{key:H}} da ih sakrijete.
- Riječi se podudaraju bez obzira na velika i mala slova. Brojevi se uspoređuju kao brojevi: „je veće od 1000” znači vrijednost, a ne tekst.
- {{ui:ima vrijednost}} i {{ui:nema vrijednost}} ne traže vrijednost; pronalaze ono što je popunjeno ili što nedostaje.
- Spremljeni skupovi ostaju u ovom pregledniku za svaki model koji otvorite.

## Česte pogreške

- **Ništa nije pronađeno.** Pravilo treba vrijednost koju može usporediti: pogledajte prijedloge u okviru za vrijednost.
- **Svojstvo nedostaje na popisu.** Nijedan element s oblikom u ovom modelu nema ga.

## Dalje

- [Bojanje elemenata prema svojstvu](topic:color-by-property)
- [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate)
