---
title: Placér en facade og åbn dens visning
summary: Sæt en facademarkør på plantegningen, peg den den vej, den skal se, find derefter dens tegning i projektbrowseren, redigér i den og læg den på et ark. Trin for båndlayouts og for det klassiske layout.
keywords: facade, facadevisning, facademarkør, facadetag, placér en facade, ny facade, lav en facade, ydre facade, sidevisning, frontvisning, visning fra et punkt, hvor er min facade, åbn facade, facade på et ark, vend facade, omdøb facade, nordfacade, fliselæg visninger, opdel visning, plan og 3D side om side
from: a7cfd2b9
---

## Hvad du gør

Du laver din egen facade: en tegning af bygningen set fra et punkt, du vælger, og i den retning du vælger. Det tager to klik på en plantegning. Tegningen vises derefter sammen med bygningens øvrige facader.

:::note
De fire sider findes allerede. Hver bygning har nord-, øst-, syd- og vestfacader i {{ui:Project browser}} under {{ui:Elevations}}, uden at du placerer noget. Placér din egen, når du vil have en visning fra et andet sted: vinkelret på en skråtstillet fløj, fra inde i en gårdhave eller af én væg inde i et rum.
:::

## Hvor værktøjet findes

- Båndlayouts: {{ui:View}} › **Opret** › {{ui:Elevation}}.
- Klassisk layout: slå {{ui:Draw}} til, og vælg derefter {{ui:Build}} › {{ui:Elevation}}.
- Enhver menustil: kommandoen hedder {{ui:Elevation}}; kommandopaletten finder den, og kommandolinjen tager ELEVATION.

## Trin

1. Vælg {{ui:Elevation}}. En facade placeres på en plantegning, så hvis du var i 3D-visningen, viser BimCraft planen for den etage, du var på. Markøren siger **Klik, hvor facaden står**.
2. Klik, hvor visningen tages fra. Til en ydre facade klikker du uden for bygningen, en lille smule fra den væg, du vil se.
3. Markøren siger nu **Klik, så den ser ud**. Bevæg dig hen mod bygningen: en pil viser retningen, og den korte linje over dit første klik er kanten, visningen kigger fra. Klik.
4. En cirkel med et nummer og en pegepil vises på planen. Det er facademarkøren. Den første er 1, den næste 2.
5. Tryk Esc for at afslutte, eller fortsæt og placér en mere.

Placering af en markør er ét trin: {{key:Mod+Z}} fortryder den.

## Åbn tegningen

Planen forbliver foran dig efter det andet klik. Tegningen findes i {{ui:Project browser}}:

1. Åbn {{ui:Elevations}}. Din vises efter de fire sider som **Elevation 1**.
2. Klik på blyantknappen {{ui:Edit in this view}} på dens række for at se tegningen og arbejde i den: flyt vægge, døre, vinduer og etager, og tilføj noter og målsætninger. Se [Redigér i facader og snit](topic:edit-in-elevations).
3. Klik på selve rækken for at åbne tegningssættet, eller læg visningen på et ark, du selv har lavet. Se [Visninger og ark](topic:views-and-sheets).

I klassisk layout er projektbrowseren i venstre panel, mens {{ui:Draw}} er slået til. I båndlayouts er den fanen {{ui:Project Browser}} under **Egenskaber**.

## Hvad visningen viser

- Alt foran markøren, så langt bygningen rækker. Intet bag den.
- Etagerne med deres navne og højder.
- Hvis markøren står inde i bygningen, skæres det, den står i, over dér, ligesom et snit skærer det. Til en ren ydre facade skal du stå uden for.

## Ændr den

Vælg markøren på planen (klik på dens cirkel med {{ui:Select}}). Egenskaber har:

- {{ui:Label}}: dens nummer eller et navn, du selv vælger, op til 8 tegn.
- {{ui:Flip the view}}: kig den modsatte vej fra samme sted.
- {{ui:Look as far as}}: hvor langt foran markøren visningen rækker. 0 viser alt.

Tryk Delete for at fjerne markøren og dens tegning. Fortryd lægger begge tilbage.

:::tip
For at se plan og 3D-visning samtidig, mens du arbejder, brug {{ui:View}} › **Vinduer** › {{ui:Tile Views}} i båndlayouts, eller {{ui:Split}} i klassisk layout. Et klik på en visningsfane går tilbage til én visning.
:::

## Begrænsninger

- En markør kan endnu ikke trækkes eller drejes på planen. Slet den og placér den igen, eller brug {{ui:Flip the view}}.
- I listen over visninger, du kan lægge på et ark, vises en facade, du selv har lavet, sammen med snittene.
- Døre- og vinduesmærkater tegnes på de fire sidefacader, ikke på én, du har placeret.

## I IFC

Markøren gemmes i filen som en IfcAnnotation med navnet "Elevation 1" og objekttypen "Elevation marker", i den etage den blev placeret på. Et andet program viser den som en annotation; selve tegningen laves af BimCraft ud fra modellen hver gang.
