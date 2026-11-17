---
title: Bouwelementen verwijderen, knippen, kopiëren en plakken
summary: Kies muren, deuren, meubels of andere elementen in een IFC-model; verwijder ze, knip ze uit, of kopieer en plak ze waar u klikt, op dezelfde plaats of op een andere verdieping.
keywords: verwijderen, wissen, knippen, kopiëren, plakken, dupliceren, verplaatsen, alles selecteren, alles kiezen, bouwelement, wand, deur, raam, trap, opening, ongedaan maken
from: d9eec37f
---

## Wat u gaat doen

Wijzig wat er in een IFC-model staat: haal elementen weg die u niet wilt hebben, kopieer een wand of een set meubels naar een andere plek, of verplaats elementen door ze te knippen en te plakken. Elke wijziging is één stap die u ongedaan kunt maken, en opslaan schrijft een nieuw bestand, zodat uw origineel blijft zoals het was.

## Stappen

1. Open een IFC-model. Zie [Een IFC-model openen en in 3D bekijken](topic:open-ifc-model).
2. Kies wat u wilt wijzigen: klik op een element, houd {{key:Mod}} of {{key:Shift}} ingedrukt en klik om meer te kiezen, of druk op {{key:Mod+A}} ({{ui:Meer}}, {{ui:Alles selecteren}}) om elk zichtbaar element te kiezen.
3. Dan:
   - **Verwijderen:** druk op {{key:Delete}}, of {{ui:Meer}}, {{ui:Verwijderen}}.
   - **Kopiëren:** druk op {{key:Mod+C}} of klik op {{ui:Kopiëren}}.
   - **Knippen:** druk op {{key:Mod+X}}, of {{ui:Meer}}, {{ui:Knippen}}. De elementen verdwijnen, en u kunt ze plakken.
4. Om te plakken, druk op {{key:Mod+V}} of klik op {{ui:Plakken}}. Een doorzichtig vak van de grootte van wat u kopieerde volgt de aanwijzer op de verdieping die in de plaatsingsbalk is gekozen. Druk op {{key:R}} om het 90° te draaien en klik dan waar het moet komen. Elke klik plaatst een nieuwe kopie; druk op {{key:Esc}} om te stoppen.
5. Of druk op {{key:Mod+Shift+V}} ({{ui:Meer}}, {{ui:Plakken op dezelfde plaats}}): na een knippen gaan de elementen precies terug waar ze stonden; na een kopiëren komt de kopie direct naast de originelen.
6. Klik op {{ui:Opslaan als IFC}} om het bewerkte model te downloaden.

## Wat bij een element hoort

- **Onderdelen:** een trap neemt zijn looppartijen mee, een gordijngevel zijn panelen; alles dat uit onderdelen bestaat neemt ze allemaal mee.
- **Openingen:** een wand neemt de openingen mee die erin zijn gemaakt. Een deur of raam verwijderen haalt ook de opening weg die het vulde, zodat de wand dichtgaat, zoals in een ontwerpprogramma. Een wand verwijderen die in BimCraft is getekend, verwijdert ook zijn deuren en ramen en verbindt de overgebleven wanden opnieuw. Een wand verwijderen uit een bestand dat elders is gemaakt, laat zijn deuren en ramen staan waar ze waren.
- **Gegevens:** een kopie heeft hetzelfde type, dezelfde materialen, eigenschapssets en hoeveelheden als het origineel, en een nieuwe GlobalId. Een waarde later op de kopie wijzigen laat het origineel ongemoeid.
- **Bibliotheekitems** behouden hun bibliotheekgegevens; een kopie krijgt het eerstvolgende vrije itemnummer, en een geknipt item dat terug wordt geplakt houdt zijn eigen nummer.

## Wat u ziet

- "Verwijderd: …" of "Geplakt: …" in de lijst {{ui:Wijzigingen}}. {{key:Mod+Z}} neemt de laatste wijziging terug; {{key:Mod+Y}} brengt die weer terug.
- Na een verwijdering vermeldt de statusregel hoeveel onderdelen en openingen er ook zijn verdwenen.
- Geplakte elementen worden geselecteerd, zodat u ze opnieuw op dezelfde plaats kunt plakken om een rij te maken, of ze kunt verwijderen.

## Goed om te weten

- Kopieën gebruiken dezelfde geometrie als het origineel (IFC staat toe dat elementen die delen), zodat het bestand maar weinig groeit.
- Bouwelementen worden geplakt in het model waaruit ze zijn gekopieerd, op hetzelfde tabblad. Om geplaatste bibliotheekitems in een ander model te gebruiken, kopieert u één item per keer: zie [Bibliotheekitems kopiëren, plakken en dupliceren](topic:copy-paste).
- Verdiepingen, ruimten, gebouwen en het terrein kunnen niet worden verwijderd of gekopieerd. Kies in plaats daarvan de elementen erin. Een ruimte die in BimCraft is getekend, komt van de wanden eromheen: verwijder een wand om twee ruimten samen te voegen.
- Wanden, deuren en ramen die met de eigen wand-, deur- en raamgereedschappen van BimCraft zijn getekend, kunnen nog niet worden gekopieerd, geknipt of gedupliceerd; de statusregel meldt dat. Teken ze opnieuw. Verwijderen werkt wel.
- Kopiëren zet ook de namen en eigenschappen van wat u kopieert als tekst op uw klembord, om in een spreadsheet of e-mail te plakken.

## Veelgemaakte fouten

- **{{ui:Verwijderen}} is grijs.** Er is niets geselecteerd, of alleen verdiepingen of ruimten. Wijs erop om te lezen waarom.
- **Plakken meldt dat de elementen uit een ander model komen.** U hebt sinds het kopiëren een ander model geopend. Open het eerste model opnieuw en kopieer ze daar.
- **De geplakte kopie staat op een andere verdieping.** De {{ui:Verdieping}} in de plaatsingsbalk bepaalt waar hij komt; kies de verdieping voordat u klikt.

## Gerelateerd

- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
- [Toetsen en muis](topic:keyboard#edit)
