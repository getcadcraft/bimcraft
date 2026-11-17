---
title: Andere modellen koppelen voor coördinatie
summary: Toon een ander IFC-model naast het uwe via een verwijzing (nooit samengevoegd), plaats het op gedeelde coördinaten, kaartcoördinaten of twee punten, snap erop tijdens het tekenen, en laad het opnieuw wanneer het bestand verandert.
keywords: koppelen, gekoppeld model, verwijzing, xref, coördinatie, federatie, constructie, MEP, adviseur, gedeelde coördinaten, opmeting, kaartcoördinaten, opnieuw laden, ontladen, documentverwijzing, IfcDocumentReference
from: 3e0f1eab
---

## Wat u gaat doen

Tekenen tegen het model van een adviseur (de constructie, de installaties, het bestaande gebouw) zonder iets in uw eigen bestand te kopiëren.

Een **gekoppeld model** wordt in de 3D-weergave getoond en op uw plattegronden doorgesneden, maar het wordt nooit gewijzigd en nooit in uw model opgeslagen. Uw model bewaart alleen de koppeling: de naam van het bestand en waar het komt te staan.

## Een model koppelen

1. Klik in de sectie {{ui:Gekoppelde modellen}} van het linkerpaneel op {{ui:Een model koppelen…}} en kies het IFC-bestand. Het wordt meteen getoond, en de rij ervan zegt **Getoond**.
2. Kies waar het komt te staan bij {{ui:Plaatsing}}:
   - **Gedeelde coördinaten** (om mee te beginnen): de coördinaten ervan zijn de uwe, alsof beide modellen vanuit dezelfde oorsprong zijn uitgezet.
   - **Kaartcoördinaten**: de kaartcoördinaten van beide bestanden lijnen ze uit (beide moeten een kaartconversie hebben; BimCraft meldt het als er bij een van beide geen is).
   - **Via twee punten…**: klik een punt op het gekoppelde model, en daarna waar het komt te staan in het uwe; daarna een tweede paar. De koppeling wordt verplaatst en gedraaid (om de verticale as) om te passen.
3. Elke koppeling en elke wijziging van de plaatsing is één stap: {{key:Mod+Z}} neemt die terug.

## Ermee werken

- De plattegronden tonen het gekoppelde model op de snijhoogte van de verdieping als dunne lijnen, en het gereedschap {{ui:Wand}} en de andere tekengereedschappen snappen op de hoeken en randen ervan.
- Kies de elementen ervan in de 3D-weergave om hun eigenschappen te lezen; een gekoppeld model is nooit het model dat u bewerkt, dus de keuzeknop ervan in {{ui:Modellen}} staat uit.
- **Is het bestand gewijzigd?** Wanneer de browser het bestand kan volgen (een bestand dat is geopend via de bestandskiezer, of in Studio), laadt BimCraft de koppeling zelf opnieuw enkele seconden nadat het bestand weer is opgeslagen, en meldt dat. Anders klikt u op {{ui:Opnieuw laden}}.
- {{ui:Ontladen}} verbergt het model en geeft het geheugen vrij; de koppeling blijft in uw model. {{ui:Laden…}} toont het weer (u kiest het bestand: een browser kan een bestand niet zelf op naam openen).
- De × verwijdert de koppeling uit uw model.

## Wat u ziet

- In uw IFC-bestand: een IfcDocumentReference voor elke koppeling (de naam van het bestand), gekoppeld aan het project, en waar het komt te staan in de eigenschapsset CadCraft_Links van het project. Als u uw model opnieuw opent, staan de koppelingen vermeld als **Niet geladen** totdat u ze laadt.

:::note
Clashcontroles, Vergelijken en Zoeken kunnen een geladen koppeling gebruiken, net als elk ander open model: zie [Meerdere IFC-modellen samen bekijken](topic:several-models).
:::
