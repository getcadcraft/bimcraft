---
title: Symbolen, typen en assets, projectsjablonen en Quick Kits
summary: De bibliotheek heeft drie soorten items (Symbolen, Typen, Assets). Voeg een type toe aan uw project, begin met een gedeeld projectsjabloon, voeg een Quick Kit toe en deel uw eigen items via de uploadpagina van de bibliotheek.
keywords: bibliotheek, symbolen, typen, assets, type, wandtype, vloertype, daktype, plafondtype, projectsjabloon, sjabloon, quick kit, kit, delen, uploaden, versie, wijzigingslog, LOD, classificatie, licentie, notities uit de praktijk
from: e13b0e67
---

## Wat u gaat doen

Vind wat u nodig hebt in de bibliotheek op basis van wat het is, voeg een type toe aan het project dat u tekent, begin een nieuw project vanuit een sjabloon dat iemand heeft gedeeld, en deel uw eigen sjablonen, typen en kits.

## De drie soorten bibliotheekitems

- **Symbolen** zijn tekenconventies: alleen 2D, getekend op de annotatiegrootte, gegroepeerd per discipline.
- **Typen** geven aan waaruit een element bestaat: de lagen met hun echte dikte, hun ontwikkelingsniveau (LOD) en hun classificatiecode. Een type wordt aan het project toegevoegd, niet getekend.
- **Assets** zijn fysieke objecten zoals deuren, ramen, meubels, vaste voorzieningen en apparatuur, met een plattegrondweergave en een 3D-lichaam op ware grootte.

Kies in het tabblad {{ui:Bibliotheek}} de optie {{ui:Bibliotheek}} en gebruik **Soort item** om Alles, Symbolen, Typen of Assets te tonen.

## Een type aan uw project toevoegen

1. Kies **Typen** onder Soort item en open er een.
2. Controleer de opbouw, LOD en classificatie onder de afbeelding en kies daarna {{ui:Toevoegen aan dit project}}.
3. Het wordt toegevoegd als wand-, vloer-, dak- of plafondtype waarmee u kunt tekenen. Als er al een type met die naam is, wordt het nieuwe als kopie toegevoegd en blijft het uwe zoals het was. Eén keer ongedaan maken haalt het weg.

## Projectsjablonen en Quick Kits

Kies {{ui:Kits}} om te zien wat anderen hebben gedeeld.

- **Een projectsjabloon** is een IFC-bestand met niveaus, rasters, typen en instellingen. {{ui:Opslaan in mijn sjablonen}} plaatst het onder Nieuw gebouw bij **Beginnen met**.
- **Een Quick Kit** is een lijst met bibliotheekitems. {{ui:De items van de kit tonen}} toont ze als kaarten die u kunt plaatsen.
- Elke kit heeft een versie en een wijzigingslog, nieuwste eerst. Een versie die met 0 begint, is voor discussie; 1.0.0 is alleen voor wat de eigenaar van de lijn heeft overgenomen.

## Uw eigen items delen

- **Een projectsjabloon:** {{ui:Opslaan als sjabloon}}, vink {{ui:Ook een bestand maken om te delen in de Bibliotheek}} aan, voeg toe wat het bevat en een versie. U krijgt een `.json`-bestand.
- **Een Quick Kit:** kies in {{ui:Kits}} {{ui:Een Quick Kit maken van dit project}}. Het toont de bibliotheekitems die het project gebruikt.
- **Een type:** vink in {{ui:Typepakketten}} één type aan en kies {{ui:Opslaan als bibliotheekitem…}}.

Upload het bestand op de uploadpagina van de bibliotheek. Het doorloopt dezelfde beoordeling als elk item en u kiest daar de licentie: elk item vermeldt zijn licentie. Van items wordt het LOD, een IFC-klasse en een classificatiecode gevraagd (een code, niet alleen een naam).

## Notities uit de praktijk

Op de pagina van elk bibliotheekitem kunnen aangemelde leden een notitie toevoegen: gebruikt in een echt project, uitgeprobeerd op een voorbeeldproject, of een probleem gevonden. Zeg in een paar woorden om wat voor project het gaat en laat opdrachtgeversnamen weg. Een notitie is openbaar en is geen beoordeling: ze verandert het item niet.

## Goed om te weten

- Er wordt niets vanuit de app verzonden. De bestanden worden op uw computer gemaakt en u uploadt ze zelf.
- Een kit die uit een sjabloon is gemaakt, bevat de IFC-tekst precies zoals opgeslagen. Controleer die op privégegevens voordat u uploadt.
- CadCraft toont Symbolen en Assets in het tabblad Bibliotheek; typen en sjablonen zijn voor BimCraft-projecten.
