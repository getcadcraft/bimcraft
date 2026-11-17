---
title: Trappen en leuningen
summary: Teken rechte trappen, L-trappen, U-trappen en wenteltrappen die hun optreden en treden bepalen uit de hoogte van verdieping tot verdieping, met handleuningen en spijlen en het trapgat in de vloer erboven; teken vallijsten langs terrassen en rond openingen.
keywords: spiraal, ronde trap, trap, trappen, trapbouw, loop, optrede, trede, bordes, waaiertrede, L-trap, U-trap, zigzagtrap, handleuning, vallijst, hekwerk, leuning, spijl, spil, newel, paal, trapgat, vrije hoogte, terras, balkon
from: 16e5ace4
---

## Wat u gaat doen

Voeg trappen toe tussen niveaus en leuningen waar mensen ze nodig hebben. Een trap berekent zijn eigen treden uit de hoogte tussen de niveaus, houdt ze binnen de gebruikelijke woonlimieten, zet handleuningen op zijn open zijden en snijdt zijn trapgat in de vloer erboven.

## Een trap tekenen

1. Open op het niveau waar de trap begint {{ui:Build}} en kies {{ui:Trap}}.
2. Kies de soort — **Recht**, **L met bordes**, **U met bordes** of **L met waaiertreden** — de richting waarin hij **draait**, zijn **breedte** en waar zijn **handleuningen** komen.
3. Klik waar de trap begint: het midden van de voorrand van de onderste trede.
4. Beweeg de aanwijzer de richting op waarin de trap omhoog gaat; de treden volgen, met het aantal optreden en treden. Hij snapt aan op de wanden en op stappen van 15°; houd {{key:Shift}} ingedrukt om hem haaks te houden.
5. Klik. {{key:Esc}} begint opnieuw.

## Een wenteltrap tekenen

1. Open {{ui:Build}}, kies {{ui:Trap}} en kies dan **Wenteltrap** als soort.
2. Stel **Draai** in, de richting waarin hij omhoog kronkelt (links is tegen de klok in).
3. Klik op het midden van zijn paal.
4. Klik in de richting waarin de onderste trede wijst.

Hij begint 30" breed (de trede, van de paal tot de buitenkant), met een paal van 4½". De optreden worden berekend uit de hoogte van verdieping tot verdieping, standaard hoogstens 9½". Treden zijn 7½" diep op de loopijn, 12" uit de paal. De handleuning loopt aan de buitenkant.

In **Eigenschappen** krijgt een wenteltrap **Middenpaal**, de diameter ervan. Het veld **Trede** wordt gemeten op de loopijn. De controles zijn gemarkeerd als standaardwaarden voor wenteltrappen: 26" vrije breedte, minstens 6¾" trede op de loopijn, optreden hoogstens 9½" en handleuningen 34"–38". Het zijn geen constructieve berekeningen; de bouwvergunningverlener beslist.

## Hoe de treden worden berekend

De hoogte tussen de vloer van het niveau en het niveau erboven wordt verdeeld in gelijke optreden van hoogstens 7¾", en elke trede is 10" diep (beide zijn te wijzigen in **Eigenschappen**). Een bordes telt als één stap; waaiertreden zijn drie stappen die rond de binnenhoek waaieren. Verandert u de hoogte van een niveau, dan wordt elke trap erop opnieuw berekend.

:::warning
7¾" optreden, 10" treden, 36" breedte, 6'-8" vrije hoogte en 34"–38" handleuningen zijn gemarkeerde standaardwaarden volgens de gebruikelijke woningbouwvoorschriften, geen constructieve berekeningen. **Eigenschappen** laat zien welke worden gehaald; de bouwvergunningverlener beslist wat van toepassing is.
:::

## Een trap wijzigen

Selecteer hem (klik erop in het plattegrond of in de 3D-weergave) en wijzig in **Eigenschappen**: zijn soort en draai, breedte, hoogste optrede, diepte van de trede, handleuningen en hun hoogte, en **De vloer erboven uitsnijden** voor het trapgat. De optreden en treden die hij uiteindelijk heeft, worden eronder getoond.

## Het trapgat

Wanneer het niveau erboven een vloer heeft, snijdt de trap die weg waar de treden minder dan 6'-8" vrije hoogte zouden hebben. De uitsnijding beweegt mee met de trap en verdwijnt wanneer de trap wordt verwijderd.

## Een leuning tekenen

1. Open {{ui:Build}} en kies {{ui:Leuning}}.
2. Kies **Vallijst** (36" hoog) of **Handleuning** en de hoogte ervan.
3. Klik langs de rand — een terras, een balkon, rond een trapgat — en dubbelklik of druk op {{key:Enter}} om af te ronden.

Leuningen krijgen palen aan hun einden en hoeken en spijlen met openingen kleiner dan 4". Selecteer er één om de soort, de hoogte of hoe ver boven de vloer hij begint te wijzigen.

## Een hek tekenen

Kies **Hek** in hetzelfde leuninggereedschap, stel de hoogte in (1800 mm om mee te beginnen), klik langs de lijn van het hek en druk op {{key:Enter}}.

- Het hek krijgt een paal aan elk einde en elke hoek, en tussen die palen een paal op hoogstens 2.4 m van elkaar. Een paneelhek heeft een paneel tussen de palen; een regelhek heeft twee regels. Deze maten zijn gebruikelijke keuzes, geen wettelijke eis: lokale regels beperken de hoogte van een hek.
- Het is één element in het model (een IfcRailing genaamd Fence) met een eigenschapsset {{ui:CadCraft_Fence}}: stijl, hoogte, palen, panelen, regels, hekken, lengte en paneeloppervlak. Eén stap om ongedaan te maken.
- Niet hier getekend: hekken (de generator in CivilCraft legt ze uit), spijltjes, terrein (het hek staat op het niveau) en het selecteren van één paal.

## Wat wordt opgeslagen

Een trap wordt opgeslagen als een IFC-trap, gemaakt van looppartijen (met hun optreden, treden, optredehoogte en tredlengte), bordessen, waaiertreden en handleuningen; het trapgat is een opening in de vloerplaat erboven. Leuningen zijn IFC-leuningen met hun lengte en hun aantal spijlen en palen.
