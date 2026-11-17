---
title: Trappor och räcken
summary: Rita raka, L-, U- och vinkelsteg (winder) som bestämmer sina sättsteg och steg utifrån höjden mellan våningsplanen, med handledare och balusterstolpar samt trapphålet i bjälklaget ovanför; rita skyddsräcken längs altaner och runt öppningar.
keywords: spiral, rund trappa, trappa, trappor, trapphus, trapplöp, sättsteg, steg, vilplan, vinkelsteg, winder, L-trappa, U-trappa, växeltrappa, handledare, skyddsräcke, räcke, balusterstolpe, spilla, trappstolpe, trapphål, fri höjd, altan, balkong
from: 16e5ace4
---

## Vad du gör

Lägg till trappor mellan nivåer och räcken där människor behöver dem. En trappa räknar ut sina egna steg utifrån höjden mellan nivåerna, håller dem inom de vanliga gränserna för bostäder, sätter handledare på sina öppna sidor och skär ut sitt trapphål i våningen ovanför.

## Rita en trappa

1. På nivån där trappan börjar öppnar du {{ui:Bygge}} och väljer {{ui:Trappa}}.
2. Välj typ – **Rak**, **L med vilplan**, **U med vilplan** eller **L med vinkelsteg** – vilket håll den **svänger** åt, dess **bredd** och var dess **handledare** ska sitta.
3. Klicka där trappan börjar: mitt på framkanten av nedersta steget.
4. Flytta pekaren i den riktning trappan går uppåt; stegen följer den, med antalet sättsteg och steg. Den fäster mot väggarna och i steg om 15°; håll ned {{key:Shift}} för att hålla den rätvinklig.
5. Klicka. {{key:Esc}} börjar om.

## Rita en spiraltrappa

1. Öppna {{ui:Bygge}}, välj {{ui:Trappa}} och välj **Spiral** som typ.
2. Ange **Varv**, vilket håll den vrider sig uppåt (vänster är moturs).
3. Klicka på mitten av dess stolpe.
4. Klicka i den riktning nedersta steget pekar.

Den börjar 30" bred (steget, från stolpen till utsidan), med en 4½" stolpe. Sättstegen räknas ut från höjden mellan golv och golv, högst 9½" som standard. Stegen är 7½" djupa på gånglinjen, 12" ut från stolpen. Handledaren går på utsidan.

I **Egenskaper** lägger en spiraltrappa till **Mittstolpe**, dess diameter. Fältet **Steg** mäts på gånglinjen. Dess kontroller är märkta som standardvärden för spiraltrappor: 26" fri bredd, minst 6¾" steg på gånglinjen, sättsteg högst 9½" och handledare på 34"–38". De är inte konstruktionsberäkningar; byggnadsmyndigheten avgör.

## Så räknas stegen ut

Höjden mellan nivåns golv och nivån ovanför delas upp i lika sättsteg på högst 7¾", och varje steg är 10" djupt (båda kan ändras i **Egenskaper**). En vilplan räknas som ett steg; vinkelsteg är tre steg vinkelformade runt det inre hörnet. Ändrar du höjden på en nivå räknas varje trappa på den om.

:::warning
7¾" sättsteg, 10" steg, 36" bredd, 6'-8" fri höjd och handledare på 34"–38" är standardvärden efter de vanliga bostadsreglerna, inte konstruktionsberäkningar. **Egenskaper** visar vilka som uppfylls; byggnadsmyndigheten avgör vad som gäller.
:::

## Ändra en trappa

Markera den (klicka på den i planen eller i 3D-vyn) och ändra i **Egenskaper**: typ och svängning, bredd, högsta sättsteg, stegdjup, handledare och deras höjd, samt **Klipp ut bjälklaget ovanför** för trapphålet. Sättstegen och stegen den fick visas nedanför.

## Trapphålet

När nivån ovanför har ett golv skär trappan ut det där stegen skulle ha mindre än 6'-8" fri höjd. Utskärningen följer trappan och försvinner när trappan tas bort.

## Rita ett räcke

1. Öppna {{ui:Bygge}} och välj {{ui:Räcke}}.
2. Välj **Skyddsräcke** (36" högt) eller **Handledare** och dess höjd.
3. Klicka längs kanten – en altan, en balkong, runt ett trapphål – och dubbelklicka eller tryck {{key:Enter}} för att avsluta.

Räcken får stolpar i ändarna och i hörnen, samt balusterstolpar med mellanrum under 4". Markera ett för att ändra dess typ, höjd eller hur långt ovanför golvet det börjar.

## Rita ett staket

Välj **Staket** i samma verktyg för räcken, ange dess höjd (1800 mm till att börja med), klicka längs stakets linje och tryck {{key:Enter}}.

- Staketet får en stolpe i varje ände och i varje hörn, samt en stolpe högst var 2,4 m mellan dem. Ett panelstaket har en panel mellan stolparna; ett ledstaket har två ledstycken. Dessa mått är vanliga val, inte ett krav i någon norm: lokala regler begränsar ett staketets höjd.
- Det är ett element i modellen (ett IfcRailing med namnet Fence) med en egenskapsuppsättning {{ui:CadCraft_Fence}}: utförande, höjd, stolpar, paneler, ledstycken, grindar, längd och panelarea. Ett steg att ångra.
- Inte ritat här: grindar (generatorn i CivilCraft lägger ut dem), spjälor, terräng (staketet står på nivån) och att markera en enskild stolpe.

## Vad som sparas

En trappa sparas som en IFC-trappa uppbyggd av trapplöp (med sina sättsteg, sättshöjd och steglängd), vilplan, vinkelsteg och handledare; trapphålet är en öppning i bjälklaget ovanför. Räcken är IFC-räcken med sin längd och sitt antal balusterstolpar och stolpar.
