---
title: Filer, BimCraft åbner og gemmer
summary: Hvert format, BimCraft åbner, hvad det beholder, hvad det gemmer, hvor gemte filer havner, og hvad der ændrer sig mellem browsere og offline.
keywords: formater, åbn, gem, eksport, download, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, upload, fortrolighed, filstørrelse
from: a1f0161b
---

BimCraft læser filer på din computer, i browserfanen. **Der uploades ikke noget** til CadCraft eller andre. Når du gemmer, giver BimCraft browseren en ny fil til download; den skriver aldrig oven i en fil, du har åbnet.

## Det her åbner den

| Format | Filtypenavne | Det du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, etager, antal elementer og hvert elements egenskaber. Navne, mærker og enkelte egenskabsværdier kan ændres. |
| Projekt- og familiefiler | `.rvt` `.rfa` `.rte` `.rft` | Et filkort: udgivelse, build, worksharing, projektoplysninger, familieparametre, tilknyttede filer og forhåndsbilledet. Ingen 3D. |
| DWG | `.dwg` | Tegningen i 2D: modelrum, hvert ark, lag, tilknyttede tegninger, billeder og udskriftsvisning. Modelrummet også i 3D. Formater fra AutoCAD 2000 til 2018 er dem, der er afprøvet. |
| DXF | `.dxf` | Det samme som DWG. |
| STEP | `.step` `.stp` | En del, et stykke udstyr eller en leverandørs model (AP203, AP214, AP242) i 3D: hvert massivt legeme bliver ét element (en byggeelement-proxy) i en lille IFC-model på én etage, læst som trekanter i sin sande størrelse, en samling med hver del, hvor filen placerer den. Derfra virker den som enhver IFC: egenskaber, snit, mål, gem som IFC. Farver og samlingstræet læses ikke. |
| Punktskyer | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Scanningen i 3D-visningen, ved siden af en model eller alene: se [Vis en punktsky ved siden af modellen](topic:point-clouds). |
| Projektpakke | `.ccbundle.zip` | Modellen med dens visninger, layouts og egenskabsgrupper: se [Åbn en projektpakke](topic:open-project-bundle). |
| En mappe | alle | En rapport over hver model, tegning og projektpakke i den. Enhver IFC, model, tegning eller pakke i rapporten åbnes med et klik. |

[Hvad BimCraft læser fra hvert format](topic:file-formats) går i detaljer.

BimCraft afgør, hvad en fil er, ved at se på dens første bytes og ikke kun på navnet, så en projektfil med et usædvanligt filtypenavn stadig åbnes som et filkort.

### Åbnes ikke

- `.ifczip` og `.ifcxml`: BimCraft siger ".ifczip is not supported yet. Save or export the model as a plain .ifc file." Pak `.ifczip` ud (den indeholder en almindelig `.ifc`), eller eksportér igen som almindelig IFC.
- DGN-tegninger står i en mapperapport, men åbnes ikke.
- PDF, billeder og kontorfiler åbnes ikke af sig selv. Billeder bruges som billeder i en DWG, og {{ui:Byg}} › {{ui:Fra en tegning…}} gør siderne i en PDF eller en scanning til vægge: se [Vægge ud fra et sæt planer](topic:walls-from-plans).

## Det her gemmer den

| Du klikker | Du får | Hvor |
|---|---|---|
| {{ui:Gem som IFC}} | En ny IFC-fil med dine ændringer, med navnet "*originalt navn* (edited).ifc" | Browserens mappe til downloads |
| {{ui:Download CSV}} i udstyrslisten | En CSV med emnerne på listen, med navnet "*tegningens navn* equipment.csv" | Browserens mappe til downloads |

Andre ting gemmes dér, hvor de laves, hver i sit eget emne: {{ui:USD}} ([Eksportér modellen som USD](topic:usd)), .glb-filen {{ui:Til rendering}}, renderede billeder, ark og planer som PDF, lister og tabeller som CSV, BCF-emner, COBie-regnearket, familiefiler og registrerede scanninger som LAS eller E57. BimCraft gemmer ikke DWG, DXF eller projektfiler, og den ændrer aldrig de filer, du har åbnet.

:::chromium
Chrome og Edge gemmer downloads i den mappe, der er angivet i deres indstillinger, som regel Downloads. For at blive spurgt, hvor hver fil skal gemmes, slår du "Spørg, hvor hver fil skal gemmes, før den downloades" til i browserens indstillinger for downloads.
:::

:::firefox
Firefox gemmer i mappen Downloads, medmindre du i indstillingerne vælger "Spørg altid, hvor filer skal gemmes".
:::

:::safari
Safari gemmer i Downloads, medmindre du vælger en anden mappe under **Safari > Indstillinger > Generelt > Placering af filhentning**.
:::

## At gemme en gang til

Hver gemning downloader hele modellen med **alle ændringer siden du åbnede den**, ikke kun dem, der er lavet efter sidste gemning. Listen {{ui:Ændringer}} er tom igen efter hver gemning, så du kan ikke fortryde længere tilbage end en gemning. Åbn originalfilen igen for at starte forfra.

## Store filer og hukommelse

- **IFC**-filer læses helt ind i fanens hukommelse, og 3D-geometrien bruger mere hukommelse oveni. En model på nogle hundrede megabyte kan være for meget for en bærbar. Over 1,5 million trekanter slås kanter fra for at spare hukommelse ("Kanter er slået fra for meget store modeller").
- **Projektfiler** læses ikke helt. BimCraft læser kun de små dele, den skal bruge, omkring 40 KB til 100 KB uanset hvor stor filen er, så en central model på 500 MB på et netværksdrev åbnes på et øjeblik.
- **DWG- og DXF**-filer læses helt. En meget stor tegning viser "Denne tegning er meget stor; kun en del af den vises."
- **Mapper** med op til 20.000 filer åbnes. Der læses kun de få kilobyte, hvert modelkort har brug for.

Se [Browsere, enheder og hukommelse](topic:platforms) for mere.

## Online og offline

At åbne filer kræver aldrig internettet. Én læser hentes fra webstedet første gang, du har brug for den: IFC-motoren, første gang du åbner en IFC-model ("Starter IFC-motoren…"). Læserne til DWG og DXF er en del af appen.

:::offline
Du er offline. Hvis knappen i appfeltet siger {{ui:Klar offline}}, åbnes alle formater som sædvanligt. Hvis ikke, kan en IFC-model ikke åbnes, medmindre en allerede er åbnet i denne fane: opret forbindelse igen først. Se [Online og offline](topic:online-offline).
:::

For at bruge BimCraft uden forbindelse klikker du på {{ui:Gem til offline brug}} i appfeltet, mens du er online, og venter på {{ui:Klar offline}}. Den gemte kopi fylder omkring 33 MB; den indeholder IFC-motoren, så IFC-modeller åbnes også offline. [Arbejd offline](common:offline) forklarer gemte kopier i almindelighed.

## Gemning i skyen

Gemning i skyen er der ikke endnu. Gem dine redigerede kopier på din egen computer eller din virksomheds filserver, som du ville gøre med enhver anden fil. Se [Dine filer](common:your-files).
