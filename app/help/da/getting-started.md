---
title: Kom i gang med BimCraft
summary: Hvad BimCraft gør i dag, hvordan du åbner din første model, ser på den i 3D, ændrer én værdi og gemmer en kopi.
keywords: start, første gang, åbn, ifc, rvt, dwg, hurtig start, introduktion, viewer, bim
from: fc2dea19
---

BimCraft er bygningsmodel-appen i CadCraft-familien. I denne version **åbner, læser og undersøger** den bygningsfiler, og den **redigerer dataene i IFC-modeller**. Den tegner eller modellerer ikke nye elementer endnu. Tænk på den som en modelviser og en kontrol, der også lader dig rette navne, mærker og egenskabsværdier i en IFC-fil.

Det her åbner den:

| Fil | Det du får |
|---|---|
| IFC (`.ifc`) | Hele modellen i 3D: rotér, etager, elementegenskaber og redigering af navne og egenskabsværdier |
| Projekt- og familiefiler (`.rvt`, `.rfa`, `.rte`, `.rft`) | Et filkort: den udgivelse, den blev gemt i, projektoplysninger, forhåndsbilledet og tilknyttede filer. Ingen 3D. |
| DWG og DXF | Tegningen i 2D: modelrum og hvert ark, lag, tilknyttede tegninger, udskriftsvisning og en udstyrsliste for mærkede storkøkkentegninger |
| En projektmappe | En rapport over hver model i mappen: sikkerhedskopier, links, beskadigede kopier og et forslag til, hvilken fil du skal begynde med |

Alt sker i din browser, på din computer. **Der uploades ikke noget.** Se [Filer, BimCraft åbner og gemmer](topic:files) for detaljerne.

## Åbn BimCraft

1. Åbn BimCraft i en aktuel browser. Chrome, Edge, Firefox og Safari virker alle; [Browsere, enheder og hukommelse](topic:platforms) viser forskellene.
2. Vent på den tomme skærm, der siger "Åbn en bygningsmodel."

:::note
BimCraft kører i browseren og på skrivebordet i CadCraft Studio sammen med de andre apps. Gemning i skyen er der ikke endnu: du åbner filer fra din computer og gemmer kopier tilbage dertil.
:::

## Åbn din første model

Den hurtigste måde at se, hvad BimCraft gør, er en IFC-fil.

1. Klik på {{ui:Vælg en fil}} midt på skærmen.
2. Vælg en `.ifc`-fil i {{pick:mac=Finder|windows=Stifinder|linux=filhåndteringen}}, og bekræft.
3. Vent, mens statuslinjen nederst på skærmen siger "Starter IFC-motoren…" og derefter "Opbygger geometri".

Du skal se modellen i 3D i midten, et panel {{ui:Fil}} og en liste {{ui:Etager}} til venstre og et tomt panel {{ui:Egenskaber}} til højre. Statuslinjen ender med "Åbnede" og antallet af elementer.

:::tip
Du kan også trække en fil fra {{pick:mac=Finder|windows=Stifinder|linux=filhåndteringen}} direkte ind på siden. Skærmen viser "Slip for at åbne", mens du trækker.
:::

:::offline
IFC-motoren hentes fra webstedet første gang, du åbner en IFC-model, medmindre BimCraft er gemt til offline brug. DWG- og DXF-tegninger, projektfiler og mapper kræver intet ekstra: deres læsere er en del af appen. Hvis knappen i appfeltet siger {{ui:Klar offline}}, åbnes alt offline. Hvis ikke, åbnes IFC-modeller ikke, før du har forbindelse igen, medmindre en allerede er åbnet i denne fane. Se [Online og offline](topic:online-offline).
:::

:::online
Skal du et sted uden forbindelse? Klik på {{ui:Gem til offline brug}} i appfeltet, og vent på {{ui:Klar offline}}. Den gemte kopi (omkring 11 MB) indeholder IFC-motoren. Se [Arbejd offline](common:offline).
:::

## Se dig omkring

:::mouse
1. Træk med venstre museknap for at rotere rundt om modellen.
2. Rul med hjulet for at zoome.
3. Træk med højre museknap for at panorere. På en Mac-pegeplade holder du i stedet {{key:Shift}} nede og trækker.
4. Tryk på {{key:F}} eller klik på {{ui:Tilpas}} for at se hele modellen igen.
:::

:::touch
1. Træk med én finger for at rotere.
2. Knib med to fingre for at zoome, og flyt to fingre sammen for at panorere.
3. Tryk på {{ui:Tilpas}} for at se hele modellen igen.
:::

## Gør én rigtig ting: ret et mærke

1. Klik på en væg, en dør eller et andet element i modellen. Det bliver blåt, og dets egenskaber vises til højre.
2. Klik på værdien ved siden af **Tag** i panelet {{ui:Egenskaber}}.
3. Skriv det nye mærke, og tryk på {{key:Enter}}.
4. Se på afsnittet {{ui:Ændringer}}, der åbnede til venstre: din ændring står på listen med den gamle og den nye værdi.

## Gem en kopi

1. Klik på {{ui:Gem som IFC}} i afsnittet {{ui:Ændringer}}, eller tryk på {{key:Mod+S}}.
2. Find den nye fil i din mappe til downloads. Den har originalens navn med " (edited)" tilføjet, for eksempel `Clinic (edited).ifc`.

Din originalfil bliver aldrig ændret. [Ændr IFC-egenskaber og gem en redigeret kopi](topic:edit-ifc-properties) forklarer redigering i sin helhed.

## Hvor du kan gå videre

- [BimCraft-skærmen](topic:workspace): hvert panel ved navn.
- [Hvis du kommer fra andre BIM- og tegneprogrammer](topic:coming-from): hvad der føles anderledes, hvis du er vant til Revit.
- [Åbn en hel projektmappe](topic:open-project-folder): peg BimCraft på en projektmappe, og lad den sortere filerne.
- [Se en DWG- eller DXF-tegning](topic:view-dwg): ark, lag og udskriftsvisning.
