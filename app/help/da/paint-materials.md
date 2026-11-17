---
title: Mal materialer på vægge, gulve og tage
summary: Giv elementer et materiale såsom murværk, facadebeklædning, tagdækning, træ eller flise, på hele elementet eller på én side, gemt i IFC og vist i renderede billeder.
keywords: mal, materiale, materialer, overflade, overflader, tekstur, murværk, facadebeklædning, tagdækning, træ, sten, flise, beton, puds, terræn, glas, metal, vægside, indvendig, udvendig, gulvbelægning, rum, overfladestil
from: fbfed676
---

{{ui:Mal}} på værktøjslinjen åbner materialebiblioteket over 3D-visningen: murværk og blokke, facadebeklædning, tagdækning, træ, sten, flise, beton, puds, terræn, glas og metal.

## Mal elementer

1. Klik på {{ui:Mal}}.
2. Klik på et materiale.
3. Klik på elementer i 3D-visningen. Hvert klik maler det element, du klikker på.

For at male mange på én gang vælger du dem først (klik, {{key:Ctrl}}+klik, eller en [søgning](topic:find)), og klikker derefter på materialet: hvert valgt element får det i ét trin.

Elementet viser materialets farve i 3D-visningen med det samme. Dets tekstur vises i et [renderet billede](topic:render). {{key:Esc}} eller {{ui:Luk}} afslutter malingen.

## Mal én side

Vælg {{ui:Kun den side, der klikkes på}}, og klik derefter på den side, du vil have: ydersiden af en væg i facadebeklædning og dens inderside i en anden overflade, eller et gulvs overside i træ med undersiden urørt. Resten af elementet beholder sit materiale.

En side findes ud fra elementets egne retninger, så den forbliver den samme side, når du flytter eller drejer elementet.

For at male gulve rum for rum giver du hvert rum sit eget gulv ({{ui:Tegn}} › {{ui:Gulv}} › **Dette rum**, se [Rum, gulve, lofter og tage](topic:floors-and-roofs)), og maler derefter hvert gulvs overside.

## Fjern et materiale

Klik på den stribede farveprøve ({{ui:Intet materiale}}), og klik derefter på elementet. Alle materialer på det, sider inklusive, fjernes.

## I filen

Maling ændrer IFC'en (ét trin hver gang, {{key:Ctrl+Z}} fortryder det) og forbliver ren IFC:

- hvert malet element får egenskabssættet `CadCraft_Render`, der angiver dets materiale, og én egenskab pr. malet side;
- dets krop får en overfladestil med materialets farve, så andre BIM-programmer viser farven. I IFC4 angiver stilen også teksturen.

Når BimCraft ændrer formen på en væg, du har malet (du flytter dens ende, for eksempel), beholder væggen sit materiale og sin farve, i BimCraft, i billeder og i andre programmer.

:::note
Teksturerne tegnes af BimCraft selv: de virker offline og må frit bruges til alt (CC0). Dine egne billedteksturer er ikke lavet endnu.
:::

## Teksturer i 3D-visningen

En malet murstensvæg viser sine mursten, et trægulv sine planker, i deres rigtige størrelse, så snart malingen er på. Fjern fluebenet ved **Vis teksturerne i 3D-visningen** i malepaletten for at se flade farver i stedet (en meget stor model slår dem fra af sig selv og siger det). Farvelægning efter egenskab viser altid sine egne farver. Teksturerne tegnes af programmet, så intet hentes, og renderinger og glTF-filen indeholder dem under alle omstændigheder.
