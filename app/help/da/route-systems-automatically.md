---
title: Træk kanaler, afløb, vand- og kølemiddelrør automatisk
summary: I kollisionstjekket finder BimCraft en vej uden om den åbne model for kanaler, tyngdekraftsdrænage, koldt og varmt vand samt split- og multisplit-kølemiddelrør. Strækningerne tegnes med deres fittings i ét fortrydelsestrin. Et tegnehjælpemiddel: størrelser, hældninger og kontroller kommer fra tabellerne i programmet og de tal, du skriver. Intet her siger, at en konstruktion opfylder en norm.
keywords: autotræk, træk kanaler, træk rør, dræn, sanitet, tyngdekraft, stamme, udluftning, vandlås, vand, varmt vand, returløkke, cirkulation, kølemiddel, split, multisplit, VRF, ækvivalent længde, grenkit, Y-stykke
from: 5841d513
---

## Hvad du skal gøre

Lad BimCraft lægge et net af strækninger ud mellem tilslutninger, der allerede står i modellen, uden om vægge og bjælker. Kontrollér derefter resultatet mod tal, du kan se.

## Trin

1. Åbn modellen og kollisionstjekket. Under **Træk kanaler automatisk** vælger du en luftbehandlingsenhed og dens terminaler, eller under **Træk andre systemer automatisk** vælger du et system.
2. **Sanitet med tyngdekraftsdrænage.** Skriv udløbets position og, hvis du har dem, stammernes positioner. Sæt kryds i **Træk hver etage på én gang** for at tage hver etage, der har sanitetsudstyr. Hver etages dræn møder stammen i deres egen højde, og stammen går fra over den højeste hane ned til dens fod. Tryk på {{ui:Træk}}.
3. **Vandlås til udluftning.** Panelet lister afstanden fra hver vandlås til dens udluftning. Skriv det højeste, din norm tillader, i **Længste fra en vandlås til dens udluftning**. Alt udstyr over det listes som ikke udført, med millimeterne over. Sæt kryds i **Udluft gennem stammen**, når sanitetsudstyret ikke har en egen udluftningsstuds. Afstanden måles så til stammen. BimCraft leverer ikke en normtabel til dette: du skriver tallet.
4. **Koldt og varmt vand.** Vælg kilden, skriv trykket ved kilden og det tryk, du har brug for ved et sanitetsudstyr. Sæt kryds i **Varmt vand**, vælg varmerens varmetilslutning, og sæt kryds i **Returløkke** for at afslutte en returledning ved varmerens **hot-return**-tilslutning eller ved en anden tilslutning, du vælger. Den anden ender 150 mm kort og åben, så du kan samle den.
5. **Split, multisplit og VRF.** Vælg udedelen, sæt kryds i indedelene, og skriv hver enheds kapacitet. Skriv grænserne fra din leverandørs data. Skriv **ækvivalent længde** for en bøjning og for et grenkit (leverandørens værdier). Så kontrolleres de længste og samlede længder på ækvivalente længder.
6. Tryk på {{ui:Træk}}. Panelet siger, hvor mange strækninger det tegnede, og hvad det ikke kunne gøre, og hvorfor. {{ui:Fortryd}} tager alt tilbage i ét trin.

## Det skal du se

Rør med albuer, T-stykker og reduktioner. Dræn, der falder mindst den mindste hældning for deres størrelse. Udluftningsstuds ved sanitetsudstyret. Kølemiddellinjer som et væske- og gasspar, der drejer på samme måde ved hvert hjørne, med et grenkit markeret, hvor en gren udgår fra hovedlinjen.

## Godt at vide

- Hvor et dræn møder et andet dræn, tegner modellen et T-stykke. Planen navngiver disse steder som 45-graders Y-forbindelser, så du kan ændre fittingen.
- Varmt vand bruger sanitetsudstyrets egen varme tilslutning, når dens familie har en. Når den ikke har, bruges en tilslutning 100 mm ved siden af den kolde.
- Kølemiddellinjerne starter mellem de to porte på hver enhed. Når en enheds to porte står for tæt til en bøjning, bliver parret centreret mellem dem.
- Vandnettet bruger efterspørgselskurven og friktionstallene vist i beregningerne. Erstat dem med din norms, før du stoler på trykkene.
- Store huse kan tage et halvt minut eller mere, mest det varme net.
- Dette er et tegnehjælpemiddel. En kvalificeret person kontrollerer størrelser, hældninger, udluftninger og tryk mod den norm, der gælder.

## Næste

[Kontrollér for kollisioner](topic:clash-check) · [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure) · [Forbindelser mellem rør og udstyr](topic:mep-connections)
