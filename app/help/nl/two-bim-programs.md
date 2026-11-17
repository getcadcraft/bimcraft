---
title: Werken tussen twee BIM-programma's
summary: Stuur een model van het ene BIM-programma naar het andere via IFC, met BimCraft in het midden; behoud de GlobalIds, eigenschapssets en classificaties, stel beide programma's in op dezelfde eigenschappen, en zie wat er is teruggekomen.
keywords: ifc, heen en weer, interoperabiliteit, globalid, guid, eigenschapssets, psets, classificaties, gedeelde parameters, eigenschapstoewijzing, vertaler, bcf, coördinatie, uitwisseling
from: 9f224176
---

## Wat u gaat doen

Verplaats een model tussen twee BIM-programma's, bijvoorbeeld van Revit naar Archicad en terug, via IFC, met BimCraft in het midden om het te controleren, er aan toe te voegen en te rapporteren wat is blijven bestaan. Het eigen bestandsformaat van geen van beide programma's wordt gelezen: alles reist mee als IFC.

## Wat BimCraft bewaart

Wanneer u een model in BimCraft wijzigt en op {{ui:Opslaan als IFC}} klikt, wordt elke regel die u niet heeft gewijzigd precies zoals hij was teruggeschreven. Dus:

- **GlobalIds** blijven gelijk, en het andere programma kan elk element koppelen aan het element dat het heeft verstuurd.
- **Eigenschapssets** en hun waarden blijven behouden, behalve de waarden die u heeft gewijzigd.
- **Classificaties** blijven gekoppeld aan hun elementen.

## Beide programma's instellen voor dezelfde eigenschappen

1. Open het model in BimCraft (en de projectbundel, als u er een heeft: de eigenschapsgroepen worden dan toegevoegd).
2. Open in het linkerpaneel {{ui:Tussen twee BIM-programma's}}.
3. Download onder **Eigenschapstoewijzing** wat elk programma nodig heeft:
   - {{ui:Gedeelde parameters}}: een bestand met gedeelde parameters. Laad het in Revit met Beheer › Gedeelde parameters en voeg de parameters toe aan de categorieën die ze nodig hebben.
   - {{ui:IFC-exporteigenschapssets}}: een bestand met door de gebruiker gedefinieerde eigenschapssets. Kies het in de IFC-exportinstellingen van Revit, onder door de gebruiker gedefinieerde eigenschapssets, zodat de geëxporteerde IFC dezelfde set- en eigenschapsnamen bevat.
   - {{ui:Toewijzingstabel (CSV)}}: elke eigenschap met zijn IFC-set en -naam, zijn type, en de bijbehorende namen in elk programma. Archicads toewijzingsbestanden zijn geen gepubliceerd formaat, dus stel de IFC-vertaler en het eigenschappenbeheer van Archicad met de hand in aan de hand van deze tabel.
   - {{ui:Toewijzingsbestand}}: de hele toewijzing als één bestand, om bij het project te bewaren.

Standaardsets (Pset_ en Qto_) worden uit het bestand met gedeelde parameters weggelaten: beide programma's schrijven die zelf uit hun eigen gegevens.

## Het model versturen en terughalen

1. Exporteer IFC uit het eerste programma met GlobalIds behouden (Revit: "Store the IFC GUID in an element parameter after export" aan).
2. Open het in BimCraft, controleer het ({{ui:Modelcontroles}}, {{ui:Botsingscontrole}}), voeg issues toe ({{ui:Issues}}, BCF), wijzig waarden als u dat nodig heeft, en klik op {{ui:Opslaan als IFC}}.
3. Open het opgeslagen IFC in het tweede programma, werk eraan, en exporteer daarna IFC met GlobalIds behouden (vertaler van Archicad: "Global Unique Identifiers: Keep existing").
4. Terug in BimCraft: open het model dat is verstuurd, en voeg het teruggekomen model toe ({{ui:Een model toevoegen}} onder Modellen).
5. Kies in {{ui:Tussen twee BIM-programma's}} **Verstuurd** en **Teruggekomen**, en klik op {{ui:Het rapport maken}}.

## Het rapport lezen

- **Elementen**: hoeveel er zijn teruggekomen met dezelfde GlobalId, hoeveel er ontbreken, en hoeveel er nieuw zijn. Elementen met een nieuwe GlobalId worden getoond als één ontbrekend en één nieuw: het andere programma heeft die niet bewaard.
- **IFC-klasse gewijzigd**: elementen die zijn teruggekomen als een ander soort element.
- **Eigenschapswaarden behouden**: het aandeel waarden dat ongewijzigd is teruggekomen. De lijst hieronder toont de eigenschappen met de meeste gewijzigde of ontbrekende waarden.
- **Classificaties**: behouden, gewijzigd (zelfde systeem, andere code) of ontbrekend.

{{ui:Het rapport downloaden (CSV)}} geeft elke eigenschap met de aantallen. Om te zien welke elementen zijn verplaatst of van vorm zijn veranderd, gebruikt u {{ui:Versies vergelijken}} op dezelfde twee modellen.

:::note
BimCraft draait geen van beide programma's. Welke instellingen een waarde doorgeven hangt af van de IFC-instellingen van elk programma: het rapport toont wat er werkelijk is teruggekomen, dus probeer een instelling, exporteer opnieuw en vergelijk.
:::

## Issues reizen mee als BCF

Issues die u in BimCraft aanmaakt, worden geëxporteerd als BCF ({{ui:Issues}}). Beide programma's kunnen die lezen met hun BCF-hulpmiddelen, zodat een vraag over een element met zijn aanzicht de persoon bereikt die in het andere programma werkt.

Zie ook [Een projectbundel openen](topic:open-project-bundle), [Van een projectbestand naar BimCraft via IFC](topic:rvt-to-ifc) en [Twee versies van een model vergelijken](topic:compare-versions).
