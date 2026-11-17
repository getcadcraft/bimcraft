---
title: Modelgroepen
summary: Maak van gekozen elementen één benoemde groep, plaats de groep elders opnieuw en wijzig één kopie om ze allemaal te wijzigen.
keywords: groep, modelgroep, groeperen, groepering opheffen, instantie, kopie, herhalen, typische eenheid, traveé, appartement, groep bewerken, IfcGroup
from: 121c5027
---

## Wat u gaat doen

Groepeer een typische traveé, plaats die meerdere keren en wijzig elke kopie door één te wijzigen.

## Waar het gereedschap staat

- Lintindelingen: {{ui:Architectuur}} › **Model** › {{ui:Modelgroep}}.
- Klassieke indeling: de balk {{ui:Tekenen}} › menu {{ui:Ruimten}} › Modelgroep.

## Stappen

1. Kies met Selecteren de elementen: klik op één, en Ctrl+klik of Shift+klik op de andere.
2. Kies {{ui:Modelgroep}}. Ze worden meteen een groep. Typ eerst een {{ui:Groepsnaam}} in de rij om hem te benoemen, of typ er daarna een om hem te hernoemen.
3. Druk op {{ui:Nog een plaatsen}} en klik waar de kopie moet staan: de linkerbenedenhoek ervan gaat naar de klik.
4. Wijzig elke kopie: verplaats een muuruiteinde, pas de maat van een deur aan, verwijder een kolom. Elke andere kopie van de groep verandert in dezelfde stap, en één keer Ongedaan maken draait het allemaal terug.
5. Zolang Modelgroep actief is, pakt een klik op een element de hele groep.

## Andere dingen die u kunt doen

- {{ui:Gekozen toevoegen}}: voeg meer elementen toe aan de groep die u als laatste koos.
- {{ui:Groepering opheffen}}: deze kopie wordt weer gewone elementen. De andere kopieën blijven een groep.
- Verplaats een hele kopie met {{ui:Verplaatsen}}: dan is het dezelfde groep op een nieuwe plek; de andere bewegen niet mee.
- Verwijder de elementen van een kopie, dan is die kopie weg.

## Wat er in een groep kan

Muren met hun deuren en ramen, kolommen en getekende vloeren kunnen opnieuw worden geplaatst en gelijk gehouden. Een groep mag ook andere elementen bevatten, maar dan kan hij nog niet opnieuw worden geplaatst; de rij zegt waarom.

Kopieën worden verplaatst, niet gedraaid of gespiegeld.

## In de IFC

Een groep is een IfcGroup met een IfcRelAssignsToGroup naar zijn leden, die gewone muren, kolommen en vloeren blijven. Elke kopie van één groep heeft dezelfde definitie-id.

## Nog niet beschikbaar

- Een kopie draaien of spiegelen.
- Trappen, daken, ruimtevloeren en bibliotheekitems in een groep die opnieuw wordt geplaatst.
- Het profiel, de schuinte en de muuropeningen van een muur worden niet naar kopieën overgenomen.
- Groepen binnen groepen.

Zie ook [Verplaatsen, kopiëren, uitlijnen en verdelen](topic:move-align-distribute).
