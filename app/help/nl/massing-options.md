---
title: Massastudie-opties naast elkaar bewaard
summary: Bewaar meerdere massastudie-opties in hetzelfde model, maak er één de huidige optie, controleer die tegen de bouwgrenzen en erfdienstbaarheden van de locatie, neem massa's over uit ModelCraft, en werk de gekozen optie uit tot muren en vloeren.
keywords: massastudie, massa, optie, opties, optieset, schema, concept, conceptontwerp, fase 2, alternatieven, opties vergelijken, huidige optie, bouwmassa, duwen en trekken, modelcraft, civilcraft, bruto vloeroppervlak, voetafdruk, volume, massa uitwerken, erfdienstbaarheid, bouwgrens, terugligging
from: 69a01459
---

## Wat u gaat doen

Bewaar de massastudie-opties van een concept in één model in plaats van in aparte bestanden: meerdere bouwmassa's naast elkaar, één ervan de **huidige optie**, de andere bewaard ter vergelijking.

Een massastudie-optie is een bouwmassa: een contour die tot een hoogte is opgetrokken, met een aantal verdiepingen. Het zijn nog geen muren. U kunt er zoveel bewaren als u wilt, gegroepeerd in **optiesets** (opties van één set zijn alternatieven van elkaar).

## Een optie bewaren

1. Open {{ui:Ruimteprogramma naar massa}}, typ het ruimteprogramma en de contour, en kies {{ui:Opties zoeken}}.
2. Kies één van de getoonde opties.
3. Typ onder {{ui:Massastudie-opties in het model}} een naam voor de {{ui:Optieset}} als u er een wilt, en kies {{ui:De geselecteerde optie bewaren}}.

De optie verschijnt in het model als bouwmassa en in de lijst, met zijn verdiepingen, voetafdruk, bruto vloeroppervlak en volume. Er wordt niets gebouwd. Bewaar een andere op dezelfde manier.

De eerste optie van een set is haar huidige optie. Elke stap is één stap ongedaan maken.

## De huidige optie

Eén optie van elke set is de huidige. Dat betekent twee dingen:

- **Haar verdiepingen tellen als de vloeroppervlakken van het gebouw.** De huidige optie heeft één ruimte per verdieping met het bruto oppervlak van die verdieping, dus alles wat vloeroppervlakken leest, ziet de optie die geldt en geen andere.
- **Ze wordt tegen de locatie gecontroleerd.** Als ze buiten de perceelgrens staat, over een bouwgrens of op een erfdienstbaarheid, verschijnt een waarschuwing met de naam ervan in {{ui:Problemen}}. Het is alleen een waarschuwing: er wordt niets geweigerd. Opties die niet huidig zijn, worden niet gecontroleerd.

Kies {{ui:Huidig maken}} op een andere optie om de huidige te wijzigen.

{{ui:De opties die niet huidig zijn verbergen}} verbergt de andere in de 3D-weergave. Dat geldt alleen voor deze browser en wordt niet in het bestand opgeslagen.

## Massastudie uit ModelCraft

In ModelCraft stuurt {{ui:Exporteren}} › {{ui:Massastudie naar BimCraft…}} elke groep of component als één optie. BimCraft opent het bestand met de opties erin vermeld.

Om ze in een model te brengen dat al open is, kiest u {{ui:Massastudie-opties uit een bestand toevoegen}} en kiest u het `.ifc`-bestand. De massa's ervan komen binnen als opties van een set, in één stap ongedaan maken, en staan waar ze zijn gemodelleerd. Een bestand met bouwmassa's uit CivilCraft werkt op dezelfde manier.

Een optie met de markering "(vorm vereenvoudigd)" was in ModelCraft geen eenvoudig rechtopstaand blok (ze springt terug, loopt schuin of is niet gesloten). Haar massa hier is de contour van haar basis, opgetrokken tot haar hoogte; haar vloeroppervlakken en haar volume zijn die gemeten aan het volume zelf.

## De gekozen optie uitwerken

Kies {{ui:Uitwerken}} op een optie. Ze wordt niveaus (opgeteld tot haar aantal verdiepingen), muren rond haar contour op elke verdieping en een vloerplaat op elke verdieping, in één stap ongedaan maken. De optie verdwijnt uit de lijst; de andere opties blijven zoals ze waren. Er is nog geen dak.

{{ui:Hernoemen}} wijzigt de naam van een optie, {{ui:Verwijderen}} haalt haar uit het model. Als u de huidige optie verwijdert, wordt de eerste andere optie van de set de huidige.

## Wat u ziet

- Elke bewaarde optie als blok in de 3D-weergave en als rij in de lijst.
- "(huidig)" naast één optie van elke set.
- Een waarschuwing in {{ui:Problemen}} wanneer de huidige optie de perceelgrens, een bouwgrens of een erfdienstbaarheid kruist.

## Goed om te weten

- In het IFC-bestand is een optie een building element proxy met de eigenschapsset `CadCraft_SiteMass` (haar optieset, optienaam en of ze huidig is, staan in die set). De verdiepingen van de huidige optie zijn ruimten van het type `MassingFloor`. Andere programma's lezen de proxy als een algemeen element.
- Het bewaren van een optie voegt nooit niveaus toe; het uitwerken van een optie wel.
- Een assistent kan de bewaarde opties weergeven, er een bewaren, een huidig maken, hernoemen, uitwerken of verwijderen.
