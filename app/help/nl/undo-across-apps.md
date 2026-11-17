---
title: Ongedaan maken over apps heen in CadCraft Studio
summary: In Studio meldt BimCraft elke afgeronde stap aan Studio, zodat Studio uw laatste stap ongedaan kan maken in het venster waarin u het laatst werkte.
keywords: ongedaan maken, studio, over apps heen, project ongedaan maken, geschiedenis, logboek, venster
from: c66dd0c1
---

## Wat het doet

In CadCraft Studio meldt elk app-venster aan Studio wanneer een stap is afgerond (een wand getekend, een set wanden geaccepteerd uit een scan). Studio bewaart die stappen in de volgorde waarin u werkte en kan het venster dat de laatste stap maakte vragen die ongedaan te maken, met de eigen ongedaan-maakfunctie van dat venster. Ctrl+Z binnen BimCraft blijft van BimCraft en wordt ook aan Studio gemeld.

## Wat u moet weten

- Studio vraagt een venster alleen om iets ongedaan te maken wanneer de lijst met ongedaan te maken stappen precies is zoals de stap die het achterliet. Na opslaan (dat een nieuwe wijzigingslijst start) of nadat u het model wisselt dat u bewerkt, antwoordt BimCraft dat de lijst is verschoven en slaat Studio dit venster over. Er wordt niets geforceerd.
- Het ongedaan maken van de effecten van één app in een andere app is nog niet beschikbaar.
- Buiten Studio verandert er niets.
- Het Studio-menu-item dat om het ongedaan maken vraagt, komt mee met een Studio-build. Tot die tijd worden de stappen wel gemeld, maar gebruikt geen menu-item ze.

## Volgende

- [Live samenwerken met anderen](topic:work-live)
