---
title: Kopiëren, plakken en dupliceren van bibliotheekitems
summary: Kopieer een geplaatst bibliotheekitem en plak het waar u klikt, op dezelfde plaats naast het origineel, of in een ander model; kopieer de eigenschappen van andere elementen als tekst; ongedaan maken en opnieuw.
keywords: kopiëren, plakken, dupliceren, klembord, plakken op dezelfde plaats, knippen, verwijderen, alles selecteren, ongedaan maken, opnieuw, menu Bewerken, meer, bibliotheekitem, plaatsing, herhalen, array
from: 6ac15931
---

## Wat u gaat doen

Maak extra kopieën van een item dat u al geplaatst hebt: een tweede werktafel, een rij wastafels. Dit onderwerp gaat over **geplaatste bibliotheekitems**, de elementen die BimCraft in het model heeft geschreven. Een van die items kan in elk model geplakt worden, ook in een ander tabblad. Muren, deuren en alle andere elementen worden binnen hun eigen model op dezelfde manier gekopieerd, geknipt, geplakt en verwijderd: zie [Bouwelementen verwijderen, knippen, kopiëren en plakken](topic:edit-elements).

De opdrachten staan in de werkbalk boven het model: {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}} en {{ui:Meer}}, een menu met {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Plakken op dezelfde plaats}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}} en {{ui:Selectie opheffen}}. Een opdracht die op dit moment niets kan doen, is grijs; wijs ernaar om te lezen waarom, of klik erop en de statusregel zegt waarom.

## Stappen

1. Open een IFC-model met een bibliotheekitem erin, of plaats er eerst een. Zie [Apparatuur en meubilair uit de bibliotheek plaatsen](topic:place-from-library).
2. Klik op het item in de 3D-weergave. De eigenschappen tonen een vak **Bibliotheekitem**.
3. Klik op {{ui:Kopiëren}} of druk op {{key:Mod+C}}.
4. Klik op {{ui:Plakken}} of druk op {{key:Mod+V}}. De plaatsbalk opent en een doorzichtig vak volgt de aanwijzer, gedraaid zoals het origineel.
5. Druk op {{key:R}} om het 90° te draaien, op {{key:Tab}} om de achterkant aan een wand vast te laten klikken, of typ X en Y in de plaatsbalk.
6. Klik waar de kopie komt. Elke klik plaatst een kopie; druk op {{key:Esc}} om te stoppen.
7. Klik op {{ui:Opslaan als IFC}} om de bewerkte kopie van het model te downloaden.

## Plakken op dezelfde plaats

{{ui:Meer}}, {{ui:Plakken op dezelfde plaats}} of {{key:Mod+Shift+V}} plakt zonder klikken, op dezelfde X en Y en op dezelfde manier gedraaid:

- **In hetzelfde model, op dezelfde verdieping**: twee items op precies dezelfde plek zouden nutteloos zijn, dus de kopie komt direct naast het origineel, één itembreedte plus 100 mm langs de eigen breedte van het item. Plak opnieuw op dezelfde plaats vanaf de nieuwe kopie om een rij te maken.
- **Op een andere verdieping of in een ander model**: precies dezelfde X, Y en draaiing. BimCraft gebruikt de verdieping met dezelfde naam; is die er niet, dan de verdieping op de dichtstbijzijnde hoogte. De statusregel zegt welke.

## Dupliceren

{{ui:Meer}}, {{ui:Dupliceren}} of {{key:Mod+D}} kopieert het gekozen item en begint meteen met plakken: één stap in plaats van twee.

## In een ander model of een ander tabblad

Wat u kopieert, wordt in deze browser bewaard. U kunt dus een ander IFC-model openen, of BimCraft in een ander tabblad, en daar plakken. Het andere model heeft het bibliotheekitem zelf nodig: BimCraft heeft dat wanneer het item in dit tabblad is geplaatst, gewisseld of bijgewerkt. Een item dat in een eerdere sessie is geplaatst, kan alleen opnieuw in het eigen model geplakt worden; in een ander model plaatst u het via het tabblad {{ui:Bibliotheek}}.

## Wat u zou moeten zien

- De kopie in het model, geselecteerd, met hetzelfde bibliotheekitem, licentie, apparatuurgegevens, hoeveelheid en notitie als het origineel, en het **volgende vrije itemnummer**. Wijzig het nummer in Eigenschappen, onder `CadCraft_Placement`.
- "Geplaatst: *item* (item *n*)" in de wijzigingenlijst. {{key:Mod+Z}} maakt het ongedaan; {{key:Mod+Y}} zet het weer terug.

## Goed om te weten

- Kopieën delen het type van het origineel, dus ze gebruiken allemaal dezelfde geometrie, net als wanneer u hetzelfde item twee keer plaatst.
- {{ui:Ongedaan maken}} en {{ui:Opnieuw}} gelden voor elke wijziging: bewerkte waarden, plaatsingen, plakacties, wisselingen en bijwerkingen. Opnieuw zet een plaatsing terug op dezelfde plek; een nieuwe wijziging wist wat opnieuw gedaan kon worden.
- In de 2D-weergave van een tekening is niets te selecteren, dus is er niets te kopiëren. Gebruik {{ui:Bewerken in CadCraft}} om de tekening te wijzigen, wanneer die verschijnt.

## Veelvoorkomende fouten

- **{{ui:Plakken}} zegt dat de elementen uit een ander model komen.** Het laatste wat u kopieerde was een bouwelement, of meerdere elementen: die worden alleen in hun eigen model geplakt. Kies één geplaatst bibliotheekitem en kopieer dat.
- **{{ui:Plakken}} zegt dat de kopie uit een ander model komt zonder bijbehorend bibliotheekitem.** Plaats het item één keer vanuit het tabblad {{ui:Bibliotheek}} in dit tabblad, en kopieer en plak het daarna.
- **{{key:Mod+C}} kopieert in plaats daarvan paginatekst.** Er was tekst geselecteerd op de pagina. Klik eerst op het model.

## Zie ook

- [Toetsen en muis](topic:keyboard#edit)
- [Instellingen van BimCraft](topic:settings)
