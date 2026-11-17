---
title: Een element naar PartCraft sturen en terugnemen
summary: Kies een steun, beugel, leuning of stuk apparatuur, ontwerp het als onderdeel in PartCraft met het gebouw eromheen, en accepteer de nieuwe vorm terug in het model.
keywords: partcraft, onderdeel, sturen, koppeling, element, steun, beugel, hek, leuning, apparatuur, ontwerpen, heen en terug, accepteren, gewijzigd, onderdeellinks
from: 4ce2f449
---

## Wat u gaat doen

Ontwerp één element van het gebouw als onderdeel: stuur het naar PartCraft, wijzig het daar (snijden, toevoegen, boren, formaat wijzigen) en breng de nieuwe vorm terug naar het model.

## Stappen

1. Kies één element in het model: een generiek element, apparatuur, een kolom, een balk, een leuning of meubilair.
2. Kies {{ui:Onderdeellinks}} op de werkbalk en dan {{ui:Naar PartCraft sturen}}. PartCraft opent in een nieuw tabblad met het element als onderdeel. De elementen binnen 3 m worden grijs naast het element getekend, zodat u het ter plaatse kunt ontwerpen. Ze kunnen daar niet worden gewijzigd.
3. Wijzig het onderdeel in PartCraft. Kies in PartCraft {{ui:Bestand}} › {{ui:Exporteren}} › {{ui:Terugopslaan naar BimCraft}}. U kunt zo vaak terugopslaan als u wilt.
4. Terug in BimCraft toont de knop {{ui:Onderdeellinks}} een aantal, en de kaart vermeldt het element als {{ui:Gewijzigd in PartCraft}}, met de verandering van afmeting en volume in woorden.
5. Kies {{ui:Tonen}} om ernaar te kijken, en dan {{ui:Accepteren}} om het element de nieuwe vorm te geven, of {{ui:Mijne behouden}} om het te laten zoals het was.

## Wat u ziet

- Accepteren is één stap om ongedaan te maken. Het element behoudt zijn plaats, GlobalId, type, materiaal en eigenschappen. Alleen het lichaam wordt vervangen.
- Het element krijgt een eigenschapsset {{ui:CadCraft_PartLink}} met de koppeling, de status en de revisie.
- {{ui:Opnieuw sturen}} opent hetzelfde element nogmaals in PartCraft, op dezelfde koppeling.

## Goed om te weten

- Muren, vloeren, daken, deuren, ramen, trappen, hellingen en ruimten worden door de bouwgereedschappen getekend vanaf een omtrek en na elke wijziging opnieuw opgebouwd. Een lichaam uit een andere app zou eroverheen geschreven worden, dus die worden geweigerd, met een reden.
- De vorm komt terug als een mesh (een IFC-tessellatie), niet als de onderdeelkenmerken. De geschiedenis van het onderdeel blijft in PartCraft.
- Als het element in het model is gewijzigd nadat u het hebt gestuurd, meldt de kaart dat voordat u accepteert: accepteren vervangt die wijzigingen.
- Er wordt niets geüpload. De twee apps zijn pagina's van één site en geven het element in deze browser aan elkaar door. Beide moeten in dezelfde browser open zijn.
- Het element moet in PartCraft sluiten tot een volume. Een element waarvan de vorm grote open gaten heeft, wordt daar geweigerd, met het aantal open randen.
- Om te accepteren, maakt u het model dat het element bevat het actieve model.
