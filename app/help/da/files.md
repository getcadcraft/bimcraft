---
title: Filer BimCraft åbner og gemmer
summary: Alle formater BimCraft åbner, hvad de bevarer, hvad der gemmes, hvor gemte filer havner, og hvad der ændrer sig mellem browsere og når du er offline.
keywords: formater, åbn, gem, eksportér, download, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, upload, privatliv, filstørrelse
from: a7275dbf
---

BimCraft læser filer på din computer, i browserfanen. **Intet uploades** til CadCraft eller nogen anden. Når du gemmer, giver BimCraft browseren en ny fil til download; den overskriver aldrig en fil, du har åbnet.

## Hvad den åbner

| Format | Filendelser | Hvad du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, etager, antal elementer og alle elementers egenskaber. Navne, tags og enkeltstående egenskabsværdier kan ændres. |
| Projekt- og familiefiler | `.rvt` `.rfa` `.rte` `.rft` | Et filkort: udgivelse, build, worksharing, projektoplysninger, familieparametre, linkede filer og forhåndsvisningsbilledet. Ingen 3D. |
| DWG | `.dwg` | Tegningen i 2D: modelrum, alle ark, lag, linkede tegninger, billeder og udskriftsvisning. Modelrum også i 3D. Formater fra AutoCAD 2000 til 2018 er dem, der er testet. |
| DXF | `.dxf` | Det samme som DWG. |
| STEP | `.step` `.stp` | En del, et stykke udstyr eller en leverandørs model (AP203, AP214, AP242) i 3D: hver solid bliver til ét element (et building element proxy) i en lille IFC-model på én etage, læst som trekanter i sin rigtige størrelse, og en samling med hver del, hvor filen placerer den. Herfra fungerer den som enhver IFC: egenskaber, snit, måling, gem som IFC. Farver og samlingstræet læses ikke. |
| Punktsky | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Scanningen i 3D-visningen, ved siden af en model eller alene: se [Vis en punktsky ved siden af modellen](topic:point-clouds). |
| Projektpakke | `.ccbundle.zip` | Modellen med dens visninger, layouts og egenskabsgrupper: se [Åbn en projektpakke](topic:open-project-bundle). |
| En mappe | alle | En rapport over alle modeller, tegninger og projektpakker i den. Enhver IFC, model, tegning eller pakke i rapporten åbnes med et klik. |

[Hvad BimCraft læser fra hvert format](topic:file-formats) gennemgås i detaljer.

BimCraft afgør, hvad en fil er, ved at kigge på dens første bytes og ikke kun på navnet, så en projektfil med en usædvanlig filendelse åbner stadig som et filkort.

### Ikke åbnet

- `.ifczip` og `.ifcxml`: BimCraft siger ".ifczip understøttes endnu ikke. Gem eller eksportér modellen som en almindelig .ifc-fil." Pak `.ifczip` ud (den indeholder en almindelig `.ifc`) eller eksportér igen som almindelig IFC.
- DGN-tegninger vises i en mappe-rapport, men åbner ikke.
- PDF, billeder og kontorfiler åbner ikke alene. Billeder bruges som billeder inde i en DWG, og {{ui:Build}} › {{ui:Fra en tegning…}} omdanner siderne i en PDF eller en scanning til vægge: se [Vægge fra et sæt planer](topic:walls-from-plans).

## Hvad den gemmer

| Du klikker på | Du får | Hvor |
|---|---|---|
| {{ui:Gem som IFC}} | En ny IFC-fil med dine redigeringer, navngivet "*original name* (edited).ifc" | Din browsers downloadmappe |
| {{ui:Download CSV}} i udstyrslisten | En CSV med elementerne på listen, navngivet "*drawing name* equipment.csv" | Din browsers downloadmappe |

Andre ting gemmes dér, hvor de laves, hver i sit eget emne: {{ui:USD}} ([Eksportér modellen som USD](topic:usd)), {{ui:Collada}} (.dae og Google Earth .kmz: [Eksportér modellen som Collada eller til Google Earth](topic:collada)), .glb under {{ui:Til rendering}}, renderede billeder, ark og planer som PDF, lister og oversigter som CSV, BCF-emner, COBie-regnearket, familiefiler og registrerede scanninger som LAS eller E57. BimCraft gemmer ikke DWG-, DXF- eller projektfiler, og den ændrer aldrig de filer, du har åbnet.

:::chromium
Chrome og Edge gemmer downloads i den mappe, der er angivet i deres indstillinger, normalt Downloads. Vil du spørges, hvor hver fil skal gemmes, så slå »Spørg, hvor hver fil skal gemmes, før den downloades« til i browserens downloadindstillinger.
:::

:::firefox
Firefox gemmer i mappen Downloads, medmindre du har valgt »Spørg altid, hvor filer skal gemmes« i indstillingerne.
:::

:::safari
Safari gemmer i Downloads, medmindre du vælger en anden mappe under **Safari > Indstillinger > Generelt > Placering for filoverførsler**.
:::

## Gem igen

Hver gemning downloader hele modellen med **alle redigeringer, siden du åbnede den**, ikke kun redigeringerne efter den sidste gemning. Listen {{ui:Ændringer}} starter tom igen efter hver gemning, så du kan ikke fortryde længere end til en gemning. Vil du starte forfra fra originalen, så åbn originalfilen igen.

## Store filer og hukommelse

- **IFC**-filer læses helt ind i fanens hukommelse, og 3D-geometrien tager yderligere hukommelse. En model på nogle hundrede megabyte kan være for meget for en bærbar. Over 1.5 million trekanter slås kanter fra for at spare hukommelse ("Kanter er slået fra for meget store modeller").
- **Projektfiler** læses ikke i fuld længde. BimCraft læser kun de små dele, den har brug for, cirka 40 KB til 100 KB, uanset hvor stor filen er, så en 500 MB central model på et netværksdrev åbner på et øjeblik.
- **DWG og DXF** læses helt. En meget stor tegning viser "Tegningen er meget stor; kun en del af den vises."
- **Mapper** med op til 20,000 filer åbnes. Kun de få kilobyte, hvert modelkort har brug for, læses.

Se [Browsere, enheder og hukommelse](topic:platforms) for mere.

## Online og offline

Åbning af filer kræver aldrig internet. Én læser hentes fra webstedet første gang, du har brug for den: IFC-motoren, første gang du åbner en IFC-model ("Starter IFC-motoren…"). DWG- og DXF-læserne er en del af appen.

:::offline
Du er offline. Hvis knappen i app-linjen siger {{ui:Klar offline}}, åbner alle formater som normalt. Hvis ikke, kan en IFC-model ikke åbnes, medmindre en allerede er åbnet i denne fane: opret forbindelse igen først. Se [Online og offline](topic:online-offline).
:::

For at bruge BimCraft uden forbindelse skal du klikke på {{ui:Gem til offline brug}} i app-linjen, mens du er online, og vente på {{ui:Klar offline}}. Den gemte kopi fylder cirka 33 MB; den indeholder IFC-motoren, så IFC-modeller åbner også offline. [At arbejde offline](common:offline) forklarer gemte kopier generelt.

## Cloud-gemning

Cloud-gemning er ikke tilgængelig endnu. Gem dine redigerede kopier på din egen computer eller på din kontors filserver, som du ville gøre med en hvilken som helst fil. Se [Dine filer](common:your-files).
