---
title: Kontroleer betonlede en maak seismiese laste
summary: Stel die stawe van betonbalke en -kolomme van die oop model op, kontroleer hulle volgens ACI 318-19, maak gelykwaardige laterale kragte volgens ASCE 7-22 op starre vloere, en sien verdiepingsdrywing. 'n Hulpmiddel vir 'n ingenieur om na te gaan.
keywords: beton, gewapende beton, ACI 318, ACI 318-19, wapening, balk, kolom, skuif, bande, seismies, aardbewing, gelykwaardige laterale krag, ELF, ASCE 7-22, drywing, verdiepingsdrywing, vloere, starre diafragma, verdiepingsgewig, benutting, struktureel, ingenieur, ontleding
from: 2f342e72
---

Die {{ui:Betonlede}}- en {{ui:Seismiese laste}}-blokke in die {{ui:Ontleding}}-oortjie kontroleer gewapende betonbalke en -kolomme van die oop IFC, en maak die sywaartse kragte van 'n aardbewing op die vloere van sy raamwerk. Hulle is dieselfde blokke as DetailCraft se, uitgevoer ná die {{ui:Ontleding}}-oortjie se ontleding, en in die IFC gestoor saam met die ander ontledingsinstellings.

:::warning
Die resultate is **vir nagaan deur 'n ingenieur**: 'n hulpmiddel totdat een dit hersien het. Betonkontroles gebruik eerste-orde kragte (’n kolom in 'n raamwerk wat jy nie-swaai noem, word ontwerp vir sy vergrote moment), sonder swaaivergroting, geen wringingsontwerp, geen seismiese detaillering (ACI-hoofstuk 18) en geen bandedetaillering nie. Die seismiese laste laat die oortolligheidsfaktor, die vertikale seismiese effek, wringingsversterking en P-delta-effekte uit. **Wind-laste is nie gebou nie**: die standaard se windhoofstukke is nie in die projek se verwysingsbladsye nie.
:::

## Wat BimCraft lees

Die ontleding lees die model se balke, kolomme en diagonale met hul profiele (sien [Ontleed die strukturele raamwerk](topic:frame-analysis)). Die {{ui:Betonlede}}-blok lys elke afdeling wat hulle gebruik. Druk {{ui:Stel op as beton…}} op 'n afdeling wat beton is: BimCraft neem 'n reghoek uit die profiel se oppervlakte en styfheid (die breedte b en diepte h wat jy daarna kan verander), so 'n afdeling wat nie naby 'n reghoek is nie (’n gewalste staalvorm) gee 'n grootte wat jy moet regstel, of word met rus gelaat.

'n Afdeling wat as beton opgestel is, en enige element waarvan die materiaal beton genoem is, word as beton ontleed: E = 4700 √f′c, 2400 kg/m³, en standaard met **gekraakte afdelings** (kolomme 0.70 Ig, balke 0.35 Ig; ACI 318-19 Tabel 6.6.3.1.1(a)). Kies {{ui:Bruto snitte}} om dit af te skakel. Sonder hierdie instellings word die model presies soos voorheen ontleed.

## Stawe, kombinasies, kontrole

Gee die dekking, die bo-, onder- en sy-stawe (of 'n kolomkorf) en die bande van elke afdeling, stel f′c, fy, fyt, K en swaai of nie-swaai in. Gee die lastgevalle hul soort, druk {{ui:Maak kombinasies}} (ASCE 7 §5.3.1) en dan {{ui:Kontroleer beton}}: elke lid kry 'n benutting, gekleur op die model. Lede oor kapasiteit, en 'n verdiepingsdrywing oor sy limiet, word in {{ui:Probleme}} gelys met hul klousule; klik op een om die element te kies.

## Vloere en seismiese laste

In die {{ui:Seismiese laste}}-blok neem {{ui:Vind vloere}} die vlakke waar twee of meer balke ontmoet; elk word 'n starre diafragma. {{ui:Neem gewigte uit gevalle}} lees elke vloer se seismiese gewig uit die gevalle wat jy 'n faktor gee. Vul SDS, SD1, S1, R, Ie, Cd, TL, die stelsel en die risikokategorie in, en dan {{ui:Maak seismiese gevalle}} (ASCE 7-22 12.8: periode, basisskuif, verspreiding op die vloere op, 5 % toevallige wringing). Die verdiepingskragte en die drywingskontrole (12.12) verskyn ná 'n lopie. Dieselfde periode en verdiepingstyfheid voed die aardbewing in [Speel 'n vloed, wind of 'n aardbewing af](topic:hazard-playback) wanneer jy die ontledingsraamwerk as sy bron kies.

Vloerplate en mure van beton word plate in die ontleding, en die {{ui:Vloerwapening}}-blok werk die staal uit wat hulle per meter nodig het. Die besonderhede van elke kontrole is in DetailCraft se onderwerp van dieselfde naam.
