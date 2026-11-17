---
title: Navigeren met de modelboom
summary: Blader door een IFC-model op project, terrein, gebouw, verdieping en ruimte, met de elementen gegroepeerd per soort; vink vakjes aan om te tonen en te verbergen, klik op een rij om te kiezen en dubbelklik om in te zoomen.
keywords: modelboom, boom, structuur, ruimtelijke structuur, browser, overzicht, navigator, verdieping, niveau, vloer, ruimte, kamer, groep, klasse, verbergen, tonen, kiezen, selecteren, zoomen
from: 69de4ab7
---

## Wat u gaat doen

Zie hoe een model in elkaar zit en kom bij elk element zonder het in 3D te zoeken: het gebouw, zijn verdiepingen, de ruimten op elke verdieping en de elementen erin, gegroepeerd per soort (muren, deuren, vloeren…).

## Stappen

1. Open een IFC-model. De {{ui:Modelboom}} links opent tot de verdiepingen.
2. Klik op de pijl naast een rij om die te openen of te sluiten. Een verdieping heeft eerst zijn ruimten, daarna zijn elementen per soort met het aantal erbij. Een element dat uit onderdelen bestaat, zoals een trap, heeft zijn onderdelen.
3. Vink het vakje van een rij uit om alles erin te verbergen; vink het weer aan om het te tonen. Een vakje met een streepje betekent dat alleen een deel ervan wordt getoond.
4. Klik op de naam van een rij om te kiezen wat hij voorstelt: één element, of elk element van een groep, verdieping of ruimte. {{key:Mod}}+klik voegt ze aan de keuze toe, of haalt ze eruit.
5. Klik op de knop {{ui:i}} naast een verdieping, ruimte of gebouw om zijn eigen eigenschappen te zien.
6. Dubbelklik op een rij om erop in te zoomen.

## Wat u zou moeten zien

- Wanneer u een element in de 3D-weergave kiest, opent de boom tot daarheen en markeert hem.
- Verborgen elementen zijn doorgestreept. De vakjes van de boom en {{ui:Tonen}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) werken samen: zie [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate).
- Elementen die het model in geen enkele verdieping plaatst, staan aan het eind in een groep, **Niet in de ruimtelijke structuur**.
- Een lange groep toont 200 rijen tegelijk; klik eronder op **Meer tonen** voor de rest.

## Toetsen

Met de naam van een rij in focus: {{key:Up}} en {{key:Down}} verplaatsen, {{key:Right}} opent, {{key:Left}} sluit of gaat omhoog, {{key:Space}} vinkt het vakje aan, {{key:Enter}} kiest.

## Veelgemaakte fouten

- **Het vakje van een verdieping is aangevinkt, maar er is niets te zien.** De lijst {{ui:Verdiepingen}} onder de boom zet hele verdiepingen vanzelf uit: vink ze daar ook aan.
- **Een rij kiest niets.** Sommige rijen, zoals een lege ruimte, hebben geen elementen die getekend kunnen worden; de statusregel zegt dat.

## Volgende

- [Gebouwelementen verwijderen, knippen, kopiëren en plakken](topic:edit-elements)
- [Verdiepingen en ruimten tonen en verbergen, en randen](topic:storeys-and-spaces)
