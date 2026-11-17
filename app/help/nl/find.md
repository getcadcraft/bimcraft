---
title: Elementen zoeken op klasse, naam of eigenschap
summary: Zoek elk element dat aan een of meer regels voldoet — de klasse, naam, het type, de verdieping, het materiaal of een eigenschapswaarde — selecteer ze allemaal en bewaar de regels als een benoemde zoekset.
keywords: zoeken, vinden, filteren, query, regel, zoekset, selectieset, opgeslagen zoekopdracht, eigenschap, waarde, klasse, materiaal, alles selecteren
from: 3d293bc2
---

## Wat u gaat doen

Selecteer in één stap elk element van één soort of met één bepaalde waarde: elke deur, elke wand op verdieping 2, elk element met brandwerendheid EI60, elke wand die meer kost dan een ingesteld bedrag.

## Stappen

1. Open een IFC-model.
2. Open {{ui:Zoeken}} in het linker paneel.
3. Kies in de eerste regel een eigenschap (eerst de eigen eigenschappen van het element, zoals {{ui:Klasse}} en {{ui:Verdieping}}, daarna de eigenschapssets van het model), hoe u wilt vergelijken, en een waarde. Het waardeveld stelt de waarden voor die het model heeft.
4. Om te beperken, klikt u op {{ui:Een regel toevoegen}}. Kies {{ui:Elke regel}} als alle regels moeten gelden, of {{ui:Een van de regels}} als één ervan genoeg is.
5. Klik op {{ui:Zoeken}}, of druk in een waardeveld op {{key:Enter}}. Wat overeenkomt, wordt geselecteerd.
6. Om de regels te bewaren, klikt u op {{ui:Opslaan als set}}, typt u een naam en klikt u er nog eens op. Klik later op de naam van een set om ermee te zoeken.

## Wat u ziet

- De overeenkomsten zijn geselecteerd in de 3D-weergave en de modelboom, en {{ui:Eigenschappen}} toont hoeveel er per klasse zijn. Druk op {{key:I}} om alleen die te tonen, of op {{key:H}} om ze te verbergen.
- Woorden worden gevonden, ongeacht hoofdletters. Getallen worden als getallen vergeleken: "is meer dan 1000" betekent de waarde, niet de tekst.
- {{ui:heeft een waarde}} en {{ui:heeft geen waarde}} hebben geen waarde nodig; ze vinden wat is ingevuld, of wat ontbreekt.
- Opgeslagen sets blijven in deze browser beschikbaar voor elk model dat u opent.

## Veelgemaakte fouten

- **Er wordt niets gevonden.** Een regel heeft een waarde nodig die kan overeenkomen: bekijk de suggesties in het waardeveld.
- **Een eigenschap ontbreekt in de lijst.** Geen enkel element met een vorm in dit model heeft die eigenschap.

## Volgende

- [Elementen kleuren op basis van een eigenschap](topic:color-by-property)
- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
