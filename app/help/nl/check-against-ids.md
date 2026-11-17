---
title: Een model controleren tegen de IDS van de opdrachtgever
summary: Laad het .ids-bestand dat u heeft gekregen en zie in Problemen elk element dat er niet aan voldoet, voordat u de IFC oplevert.
keywords: ids, information delivery specification, buildingsmart, eisen, oplevering, controle, validatie, kwaliteitsborging, eir, bep, eigenschap, classificatie, materiaal, aanbesteding
from: 7b960222
---

## Wat u gaat doen

Een IDS (Information Delivery Specification, een buildingSMART-standaard) is de lijst van wat een IFC moet bevatten: welke klassen, welke eigenschappen met welke waarden, classificaties, materialen en waar onderdelen horen. Opdrachtgevers en overheidsaanbestedingen sturen er een mee met de opdracht. BimCraft controleert het geopende IFC-model hiertegen en toont elk element dat ertoe niet voldoet.

## Stappen

1. Open een IFC-model.
2. Open {{ui:Check against an IDS}} in het linkerpaneel, onder {{ui:Model checks}}, of kies {{ui:Check against IDS…}} in het menu van uw menustijl.
3. Klik op {{ui:Load an .ids file…}} en kies het bestand. Er wordt niets geüpload.
4. Lees het resultaat: elke specificatie met {{ui:Pass}} of {{ui:Fail}} en het aantal elementen waarop zij van toepassing is.
5. Open Problemen ({{key:Ctrl+Shift+M}}) en klik op een fout om het element te selecteren en er naartoe in te zoomen.

## Wat u moet zien

- Eén waarschuwing per element en eis die het niet haalt, met de naam van de specificatie, wat de IDS vraagt en wat het element heeft.
- Een verplichte specificatie waarop niets in het model past, is een eigen waarschuwing.
- Het controlerapport (in Problemen) begint met de IDS: de titel, versie, auteur en per specificatie het aantal van toepassing zijnde, geslaagde en mislukte elementen.

## Goed om te weten

- De IFC bevat alleen een verwijzing naar de IDS (de naam, titel, versie en een hash), niet de IDS zelf: de IDS van een opdrachtgever kan vertrouwelijk zijn, en de IFC gaat naar andere mensen. De IDS blijft in deze browser naast het model, dus wanneer u het opgeslagen IFC hier opnieuw opent, wordt het opnieuw gecontroleerd. Het laden of vergeten van de IDS is één stap die u ongedaan kunt maken.
- Geopend op een andere computer of in een andere browser toont Problemen een melding dat de IDS niet is gevonden: laad hem opnieuw om opnieuw te controleren.
- Om de IDS mee te sturen met de IFC, zet u {{ui:Keep the IDS inside the IFC}} aan in Instellingen, op het tabblad BimCraft, voordat u hem laadt.
- Elke wijziging, ongedaan maken en opnieuw wordt even later opnieuw gecontroleerd.
- Waarden worden vergeleken zoals de IDS dat doet: tekst exact (hoofdletters tellen mee), getallen in SI-eenheden met een kleine tolerantie (lengten in meter, dus een model in millimeter wordt eerst omgerekend).
- Een specificatie die voor een andere IFC-versie is geschreven (bijvoorbeeld IFC2X3 terwijl het model IFC4 is), wordt toch gecontroleerd; het resultaat vermeldt dat.
- Als het IDS-bestand fouten heeft die een IDS-audit zou aanmerken, somt het dialoogvenster ze op; de specificaties waarin ze zitten, falen.
- U kunt een fout met een reden accepteren, zoals elk probleem. Die blijft geaccepteerd zolang de waarden van het element gelijk blijven.

- Patronen in de IDS worden als de hele waarde gelezen. Een `^` aan het begin en een `$` aan het eind worden ook als "de hele waarde" opgevat, zoals de meeste IDS-bestanden ze bedoelen.

## Volgende

- [Een model controleren op veelvoorkomende problemen](topic:model-checks)
- [Een muur of deur wijzigen](topic:change-a-wall-or-door)
