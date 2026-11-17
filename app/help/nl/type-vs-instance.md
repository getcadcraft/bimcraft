---
title: Een typeeigenschap wijzigen voor elk element van een type
summary: Onderscheid typeeigenschappen van instanceeigenschappen, wijzig een waarde op het type zodat elk element meegaat, en controleer dat de eigen wijziging van één element van dat element blijft.
keywords: type, instantie, typeeigenschappen, familietype, gedeeld, kopiëren bij schrijven, alle elementen, bulkbewerking, fabrikant, model
from: bffd8789
---

## Wat u gaat doen

Stel de fabrikant in op een deurtype zodat elke deur van dat type hem toont, en geef daarna één deur een eigen brandwerendheid zonder de andere aan te raken. Dit laat het verschil zien tussen type- en instanceeigenschappen in BimCraft.

## Type of instantie?

- Een **instanceeigenschap** hoort bij één element: zijn label, zijn markering, zijn ruimte, zijn eigen brandwerendheid.
- Een **typeeigenschap** hoort bij het type dat veel elementen delen: fabrikant, model, breedte van een deurtype.

In het paneel {{ui:Eigenschappen}} hebben sets die van het type komen " (type)" achter hun naam, en de regel "Typeeigenschap: een wijziging hier geldt voor elk element van dit type." Elke andere set hoort bij het element zelf. **Type** in het eerste blok toont de naam van het type.

## Stappen: het type wijzigen

1. Open een IFC-model en klik op een deur.
2. Noteer het **Type** in het eerste blok van het paneel {{ui:Eigenschappen}}, bijvoorbeeld "Single-Flush 900 x 2100".
3. Scroll naar een set waarvan de naam eindigt op "(type)".
4. Klik op de waarde die u wilt wijzigen, bijvoorbeeld **Manufacturer**.
5. Typ de nieuwe waarde en druk op {{key:Enter}}.
6. Kijk in de lijst {{ui:Wijzigingen}}: de regel eindigt op "(type)".
7. Klik op een andere deur van hetzelfde type.
8. Controleer dezelfde waarde: die toont ook de nieuwe waarde.

## Stappen: alleen één element wijzigen

1. Klik op één deur.
2. Open een set zonder "(type)" in de naam, bijvoorbeeld `Pset_DoorCommon`.
3. Klik op een waarde, zoals **FireRating**, typ een nieuwe waarde en druk op {{key:Enter}}.
4. Klik op de deur ernaast, van hetzelfde type.
5. Controleer dezelfde waarde: die toont nog de oude waarde.

Ook als de exporteur die eigenschapsset tussen beide deuren heeft gedeeld, gaf BimCraft de eerste deur een eigen kopie voordat het die wijzigde. Zie [Waarom uw wijziging maar één element verandert](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Opslaan

1. Klik op {{ui:Opslaan als IFC}} of druk op {{key:Mod+S}}.
2. Open de opgeslagen kopie in BimCraft, of in een IFC-viewer, om beide wijzigingen te controleren.

## Veelgemaakte fouten

- **Niet elk model heeft typen.** Sommige exporteurs schrijven geen typeobjecten, of zetten alles op de instantie. Dan zijn er geen "(type)"-sets, en moet elk element apart worden gewijzigd.
- **Dezelfde waarde staat in een typeset en in een instanceset.** Sommige exporteurs schrijven een parameter op beide plekken. Andere programma's kunnen de ene of de andere lezen; wijzig beide als ze het eens moeten zijn.
- **Verwachten dat u "alle deuren van dit type" kunt kiezen en samen kunt bewerken.** In deze versie is er geen meervoudige selectie. Een typeeigenschap is de manier om veel elementen tegelijk te wijzigen.
