---
title: Coördinaten in BimCraft
summary: Waar u aan het werk bent, de positie van de aanwijzer in de plattegrond en de 3D-weergave, het niveau waarop u zit, de projectoorsprong en het meetpunt van de bouwplaats.
keywords: coördinaten, waar ben ik, positie, aanwijzer, uitlezing, x y z, niveau, verdieping, projectoorsprong, oorsprong, basispunt, meetpunt, bouwplaats, kaartcoördinaten, eastings, northings, georeferentie, eenheden, locatie
from: 84df5245
---

## Wat u gaat doen

Weet in één oogopslag waar u zich in een model bevindt: op welk niveau u tekent, hoe ver de aanwijzer van de projectoorsprong ligt en waar het meetpunt van de bouwplaats is.

## Waar de getallen staan

- **In de 3D-weergave** (rechtsonder, naast de kubus (weergave)): beweeg de aanwijzer over het model. Het vak toont het niveau waarop het punt ligt en hoe hoog het boven de vloer van dat niveau ligt, daarna de **X, Y en Z**. Boven lege ruimte leest het het punt op de vloer van het laagste niveau af.
- **In de plattegrond** (rechtsonder, terwijl {{ui:Tekenen}} aan staat): het niveau dat de plattegrond toont en de hoogte van de vloer ervan, en de **X en Y** van de aanwijzer zolang die boven de plattegrond staat.
- Heeft het bestand een kaartconversie (het is geëxporteerd met kaartcoördinaten), dan voegen beide vakken de **eastings en northings** op het kaartraster toe, in de {{ui:Eenheden}} die u koos (altijd met de eenheid erbij geschreven; feet en inches worden als decimale feet getoond). Een tekening (DWG of DXF) houdt haar eigen eenheden: de uitlezing van de aanwijzer noemt ze en ze worden nooit omgerekend.

Elke X, Y en Z wordt gemeten vanaf de **projectoorsprong**, in de {{ui:Eenheden}} die op de werkbalk is gekozen (feet en inches, inches, decimale feet, millimeter, centimeter of meter). Een positieve Y wijst naar het noorden van het model, dat niet altijd het ware noorden is. Kaart-eastings en -northings volgen dezelfde keuze (feet en inches worden als decimale feet getoond). Wijkt de eenheid van het kaartsysteem af van de door u gekozen eenheid, dan wordt die na de getallen tussen haakjes genoemd, bijvoorbeeld *(US survey feet)*, zodat een landmeter ziet waarin het systeem zelf is geschreven.

## De twee markeringen

- **Projectoorsprong** (een rode cirkel met een kruis): het punt 0, 0, 0 waarvandaan elke coördinaat in het model wordt gemeten.
- **Meetpunt** (een blauwe cirkel met een driehoek): het referentiepunt van de bouwplaats, het punt waarvoor de breedtegraad, lengtegraad en hoogte, of de kaartcoördinaten, zijn opgegeven. Wijs er in de 3D-weergave naar om te zien waar het ligt.

Ligt de bouwplaats op de projectoorsprong, zoals bij een nieuw gebouw dat hier is getekend, dan toont één markering beide. Klik op de knop met het kruis in een van de vakken om de markeringen te verbergen of te tonen; BimCraft onthoudt uw keuze in deze browser.

## Wat u ziet

- De getallen veranderen terwijl de aanwijzer beweegt, en het vak van de plattegrond noemt het niveau dat u in de niveaulijst koos.
- De markeringen blijven staan terwijl u draait, verschuift en zoomt.

:::tip
Om de breedte- en lengtegraad van een punt te lezen, gebruikt u {{ui:Meten}} › {{ui:Locatie}}: zie [Afstanden, vlakoppervlakten en locaties in 3D meten](topic:measure).
:::

:::touch
Op een aanraakscherm toont het 3D-vak niets totdat u een muis of pen gebruikt: met een vinger verplaatst u de weergave.
:::
