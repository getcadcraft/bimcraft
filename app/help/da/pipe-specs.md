---
title: Rørspecifikationer, ventiler, spjæld og producentfamilier
summary: Opsæt dine egne rørspecifikationer (dimensionstabeller med materiale, samling og ruhed), som gemmes i modelfilen; placér ventiler, et filter og spjæld på forløb; og hent en producents ventil- eller udstyrsmodel ind som familie med tilslutningsporte.
keywords: rørspec, rørspecifikation, rørspecifikationer, rørklasse, brugerdefineret rør, dimensionstabel, rør, hygiejnerør, rustfri, liste, udvendig diameter, vægtykkelse, indvendig diameter, ruhed, trykklasse, csv, json, import, eksport, regneark, standard, bpe, din, en 10357, en 10255, ventil, ventiler, sommerfuglventil, balanceventil, reguleringsventil, filter, spjæld, volumenspjæld, brandspjæld, oem, producent, familie, familier, porte, forbindelse, step, obj, gltf, ifc, radiator, konvektor, panelvarmer, luftbehandlingsaggregat, diffusor, rist
from: bc2f7c4e
---

## Hvad du skal gøre

Tegn rør i din egen specifikation i stedet for de indbyggede tabeller for stål, kobber og plast, placér ventiler og spjæld på forløbene, og placér en producents model med porte, som rørene forbindes til.

:::note
En tegne- og koordineringshjælp. En rørspecifikation indeholder de tal, du skriver eller importerer: kontrollér hver tabel mod din projektstandard. De indbyggede ventiler, filtre og spjæld er skematiske figurer, dimensioneret ud fra forløbet, ikke efter en producents eller en ventilstandards længde.
:::

## Opsæt en rørspecifikation

1. Tænd for {{ui:Tegn}}, åbn {{ui:Build}} og vælg {{ui:Rørspecifikationer}}. Den samme knap findes på værktøjslinjen for Rør.
2. Vælg {{ui:Nyt}}, eller start fra en fil, en indsætning eller en startspecifikation (se nedenfor).
3. Skriv dens navn, den standard eller reference den følger, materialet og slut- eller samlingstypen.
4. Skriv én række pr. dimension: dimensionens navn, den udvendige diameter og væggen, i millimeter. Skriv den indvendige diameter i stedet for væggen, hvis det er det, du har: den anden udfyldes. DN, trykklasse og vægt er valgfri.
5. Valgfrit: ruheden i millimeter (trykfaldsberegningen bruger den), en isoleringstykkelse nye forløb starter med, radius på bøjningen som en faktor af den udvendige diameter, om specifikationen har T-stykker og reduktioner, og en egen farve i 3D.
6. Sæt kryds ved de tjenester, hvis nye forløb skal starte i denne specifikation, for eksempel koldt vand.
7. Vælg {{ui:Gem i modellen}}.

Specifikationerne gemmes i modelfilen. Alle, der åbner filen, har dem, og {{ui:Fortryd}} tager en ændring tilbage.

En specifikation, eller en af dens dimensioner, kan ikke slettes, mens et forløb er tegnet i den. Ændres en dimensions tal, tegnes forløbene i den dimension igen.

## Genbrug en specifikation i en anden model

- {{ui:Eksportér .json}} gemmer den valgte specifikation som en lille fil; {{ui:Eksportér alle}} gemmer alle modellens specifikationer. {{ui:Importér en fil}} læser dem tilbage.
- {{ui:Eksportér .csv}} gemmer dimensionstabellen til et regneark. {{ui:Importér en fil}} læser også en `.csv`.
- {{ui:Indsæt rækker}} tager en tabel, der er kopieret fra et regneark. Den første række navngiver kolonnerne: `Size`, `OD` og `Wall` (eller `ID`), og valgfrit `DN`, `Pressure`, `Weight`. Én række pr. dimension. Tal er millimeter, medmindre du vælger tommer, eller en celle skriver sin enhed (`0.065 in`).

## Startspecifikationer

{{ui:Tilføj en startspecifikation}} føjer en af disse til din model som en kopi, du kan redigere:

| Startspecifikation | Dimensioner |
|---|---|
| ASME BPE-rør | 1/4" til 6" |
| EN 10357 serie A-rør (DIN 11850 række 2) | DN10 til DN200 |
| EN 10255 stålrør, middelserie | DN15 til DN150 |
| EN 10255 stålrør, tung serie | DN15 til DN125 |

Disse tabeller er de udvendige diametre og vægtykkelser, som to eller flere offentliggjorte leverandørsider angiver for standarden, og som er enige. De er ikke hentet fra selve standarderne. Dimensioner, som kun én side angiver, er udeladt. Hver startspecifikation viser sine kildesider og er markeret »kontrollér mod din projektstandard«. Der er ingen ruhed, trykklasse eller vægt angivet.

## Tegn et forløb i en specifikation

1. Vælg {{ui:Rør}}. En tjeneste, du har sat kryds ved i en specifikation, starter i den. For ethvert andet forløb vælger du specifikationen i materialelisten: specifikationer står efter de indbyggede materialer som "Spec: navn".
2. Dimensionslisten indeholder nu kun den specifikations dimensioner. Vælg en, og tegn forløbet.

For at flytte et forløb ind i en specifikation senere, vælg det og ændr **Materiale** i {{ui:Egenskaber}}. Dets dimension bliver specifikationens nærmeste dimension efter udvendig diameter.

I IFC-filen har røret specifikationens navn, standard, materiale, samling og dimensioner (`CadCraft_PipeSpec` og `Pset_PipeSegmentTypeCommon`, på røret og på dets type).

Beregningerne for dimensionering og trykfald læser specifikationens indvendige diameter. Når specifikationen har en ruhed, beregnes et forløbs friktion med den (Darcy-Weisbach); uden den bruges beregningens sædvanlige standardværdi.

## Ventiler, et filter og spjæld

1. Vælg {{ui:Ventil}} og vælg typen i værktøjslinjen: skydeventil, kugleventil, sommerfuglventil, globeventil, kontraventil, balanceventil eller reguleringsventil, eller et filter, for rør; et volumenspjæld eller et brandspjæld for kanaler.
2. Klik på forløbet, hvor den skal være. Forløbet skæres over om den, og begge sider forbliver forbundet. Den får forløbets dimension og flytter med forløbet.

Egenskaber for forløbet lister hver af dem med {{ui:Fjern}}; forløbet samles igen.

Beregningen af trykfald tæller kun et tabsled for skydeventiler, kugleventiler, globeventiler og kontraventiler. De øvrige typer, spjæld og producentfamilier giver ingen tab der: tag højde for dem i din egen kontrol. De tælles i listen **Fittings og ventiler** og i mængdeudtrækket, og skrives til IFC som ventiler, et filter (strainer) og spjæld med to forbundne porte.

## En producentmodel som familie

1. Åbn {{ui:Build}} og vælg {{ui:Familier}}, og derefter {{ui:Importér en model}}. IFC-, STEP-, OBJ-, STL-, glTF- og biblioteksemnefiler læses. For OBJ og STL skal filens enheder og opadakse angives først.
2. I dialogen for porte skriver du navn, producent og modelnummer.
3. Vælg, om den skal være **På et forløb** (en ventil, et filter eller et spjæld) eller **Udstyr**, og hvad den skrives som.
4. Giv den dens porte. Hver har et navn, rør eller kanal, mediet, dimensionen i millimeter (et rørs udvendige diameter), den nominelle dimension som din specifikation angiver den, endetypen, sin position og den retning, den vender. {{ui:På en flade}} sætter en port i midten af en flade på modellens boks. Den lille topvisning viser portene.
5. Vælg {{ui:Gem familien i modellen}}.

En familie, der skal sidde på et forløb, har præcis to porte, som vender væk fra hinanden på én linje. Vælg den i listen i Ventil-værktøjet, og klik på et forløb: den placeres med sin egen længde, og rørene forbindes til dens porte.

En familie strækkes aldrig. Hvis dens porte ikke har forløbets dimension, får du besked, når du placerer den, og {{ui:Kontrollér forbindelser}} lister den.

En udstyrsfamilie placeres med {{ui:Udstyr}}, type **Producentfamilie**. Rør og kanaler snapper til dens porte.

{{ui:Hent som biblioteksemne}} gemmer en familie med dens porte som en fil, du kan indsende til biblioteket.

## Radiatorer og konvektorer

{{ui:Udstyr}} har også **Radiator** og **Konvektor / panelvarmer**: generiske legemer med en fremløbs- og en returtilslutning til varmtvand. Se [MEP-udstyr med porte](topic:mep-equipment).
