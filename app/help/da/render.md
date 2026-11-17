---
title: Render et billede af modellen
summary: Lav et dagslysbillede af 3D-visningen: himmel, solen på stedets breddegrad, bløde skygger, glasvinduer; med WebGPU path tracet på grafikkortet med himle, kamera, lysblanding, gradering, tåge og en renderingskø.
keywords: render, forvalg, scenepreset, interiør, eksteriør, snitvisning, nat, ét klik, rendering, path tracing, ray tracing, global belysning, refleksioner, refraktion, høj kvalitet, foto, fotorealistisk, realistisk, billede, png, stillbillede, himmel, sol, dagslys, skygger, bløde skygger, ambient occlusion, glas, vinduer, metal, materialer, eksponering, lysstyrke, overskyet, skumring, studie, præsentation, visualisering, webgpu, støjfjernelse, fysisk himmel, hdri, ies, dybdeskarphed, panorama, hvidbalance, lysblanding, renderelementer, exr, 16-bit png, tåge, kaustik, renderingskø
from: beb74cc7
---

{{ui:Render}} på værktøjslinjen laver et billede af 3D-visningen, der ligner dagslys: en himmel, solen der, hvor stedets breddegrad placerer den, bløde skygger, lys fra hele himlen, der mørkner hjørner, og farver, der kan se ud som glas eller metal. Modellen og filen ændres ikke.

## Render visningen

1. Stil 3D-visningen, som du vil have billedet: kredsen og zoom, skjul etager eller elementer, du ikke vil have med, og sæt et [snit](topic:section-plane), hvis billedet skal vise et udsnit.
2. Klik på {{ui:Render}} på værktøjslinjen.
3. Vælg en {{ui:Scene}}, hvis den trykkede ikke er den, du vil have (se [Scenepresets](topic:render#scene-presets-a-good-picture-in-one-click)), vælg {{ui:Size}}, og klik så på {{ui:Render}} i dialogen.

   Billedet fyldes ud, mens det renderes, og bliver glattere for hver gennemgang. {{ui:Stop}} (eller {{key:Esc}}) afslutter tidligt og beholder billedet indtil nu.

4. Klik på {{ui:Save}} for at hente det som PNG, eller {{ui:Save as}} for et andet format (se [Gem billedet](topic:render#save-the-picture)). Det får navn efter modellens fil.

:::tip
Start med {{ui:Draft}} ved {{ui:The view's size}} for at kontrollere kameraet, og render derefter {{ui:Good}} eller {{ui:Best}} i en større størrelse til det endelige billede.
:::

## Scenepresets: et godt billede med ét klik

Øverst i dialogen er fire {{ui:Scene}}-knapper. Hver sætter himlen, lysstyrken, terrænet, kantlinjerne, kvaliteten og solen med ét klik, så der ikke er noget at lære, før det første billede. Klik på en, og derefter {{ui:Render}}.

| Scene | Hvad den sætter | Brug den til |
|---|---|---|
| {{ui:Exterior}} | Klar himmel, modellens egen sol, terræn til | Bygningen udefra |
| {{ui:Interior}} | Overskyet himmel (jævnt lys, ingen hårde solpletter), et blændetrin lysere | En udsigt indefra et rum |
| {{ui:Section view}} | Hvidt studie, intet terræn, kantlinjer i det hurtige render | En model skåret af et snit |
| {{ui:Night}} | Solen nede (midnat midt om vinteren for stedets halvkugle), et blændetrin lysere | Lamper, der lyser modellen. Uden lamper bliver billedet mørkt |

- {{ui:Pick for this view}} vælger for dig: {{ui:Section view}}, når et snit er slået til, {{ui:Interior}}, når kameraet er inde i modellen, ellers {{ui:Exterior}}. Første gang du åbner dialogen, starter den sådan af sig selv.
- Alle indstillinger står nedenfor og kan ændres. Når du ændrer en, som scenen sætter, er ingen knap trykket ind, og linjen under knapperne siger, at indstillingerne er dine egne. Klik på scenen igen for at sætte dens værdier tilbage.
- En scene rører ikke motoren, tilstanden, størrelsen, materialerne, kameraet eller lamperne.

:::note
Scenerne giver de samme værdier i ModelCraft og BimCraft. Hvordan det færdige billede ser ud, afhænger af din model og dit grafikkort.
:::

## Hvad der vises i billedet

Det, 3D-visningen viser som fyldt, er med i billedet: skjulte og gennemsigtige elementer, skjulte etager og skjulte modeller udelades, og rum vises kun, når {{ui:Spaces}} er slået til. Et snitplan eller en snitboks skærer billedet, ligesom den skærer visningen. Elementer vises i deres egne farver: farvelægning efter egenskab (fanen {{ui:Color}}) bruges ikke.

## Indstillinger

| Indstilling | Hvad den gør |
|---|---|
| {{ui:Size}} | Visningens størrelse, dobbelt visningens størrelse, Full HD, 4K eller et kvadrat |
| {{ui:Mode}} | {{ui:Fast}}, eller {{ui:High quality (path traced)}} (nedenfor) med sin {{ui:Time limit}} |
| {{ui:Quality}} | Hvor mange gennemgange (eller, i høj kvalitet, samples) der middeles: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Flere gennemgange giver blødere skygger og kanter og tager længere tid |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} eller {{ui:White studio}} (en almindelig hvid baggrund) |
| {{ui:Sun}} | 21. juni kl. 15:00 ved den breddegrad, filen angiver for sit sted (IfcSite), drejet til modellens sande nord. Sæt kryds i {{ui:Use another date and time for this picture}} for et andet tidspunkt |
| {{ui:Brightness}} | Lysere eller mørkere, i blændetrin |
| {{ui:Ground under the model}} | Et terræn ved modellens laveste punkt, der modtager skygger og toner ud mod horisonten |
| {{ui:Draw edges}} | Tegner elementernes kanter tyndt over billedet |

Når solen er under horisonten på det valgte tidspunkt, er det nat: himlen bliver mørk, og modellens lamper lyser den op.

## Lamper

Hver lysarmatur i modellen er en lampe i billedet: armaturerne i en IFC-fil (IfcLightFixture, eller et element typet som lysarmatur), herunder dem, du placerer fra biblioteket. Hver lyser nedad fra lige under armaturen. Når filen angiver en armaturs watt, følger dens lysstyrke af det; ellers er den 800 lumen, et varmt hvidt lys.

Dialogen lister lamperne under {{ui:Lamps}}: fjern markeringen for at slukke en, eller skriv dens lysstyrke i lumen. Disse ændringer gemmes i IFC'en (armaturens `CadCraft_Light`-egenskabssæt, hvor du også kan ændre dem under Egenskaber), og {{key:Ctrl+Z}} fortryder dem.

Når en fil intet siger om, hvor dens sted ligger, placeres solen på 40° nord, og dialogen siger det. Tidspunktet er stedets klokkeslæt, udregnet ud fra dets længdegrad, så det kan være en time forkert, hvor ure er stillet anderledes.

Disse indstillinger gemmes i denne browser til næste billede. De gemmes ikke i IFC-filen.

## Glas og andre materialer

Under {{ui:Materials}} har hver farve på skærmen et udseende: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} eller {{ui:Frosted glass}}. Farver, som IFC-filen gør gennemsigtige (fx vinduesglas), starter som {{ui:Glass}}.

:::note
I {{ui:Fast}}-tilstanden reflekterer glas og metal himlen, ikke resten af modellen, og lys bøjer ikke gennem glas. {{ui:High quality (path traced)}}-tilstanden nedenfor gør begge dele.
:::

## Høj kvalitet

Vælg {{ui:Mode}} › {{ui:High quality (path traced)}} for et billede, der følger lyset, sådan som et kamera ser det:

- lys kastes mellem flader, så et rum, der er belyst gennem et vindue eller af en lampe, er lyst hele vejen rundt, og farver flyder over på naboerne;
- glas er rigtigt glas: lys bøjer gennem det, og det reflekterer modellen;
- metal og blanke flader reflekterer resten af modellen;
- lyspaneler lyser som paneler, med bløde skygger.

Den er meget langsommere end {{ui:Fast}}: hver gennemgang sporer lyset for hver pixel igen. Billedet starter kornet og bliver rent, efterhånden som samples lægges sammen, så start småt ({{ui:The view's size}}, {{ui:Draft}}) og vælg en {{ui:Time limit}}: når den løber ud, beholdes billedet indtil nu. {{ui:Stop}} beholder det også. Den første gennemgang venter, mens browseren forbereder path traceren.

Hvor browseren har WebGPU, er path traceren CadCraft's egen og kører på grafikkortet; linjen under billedet siger det. Efter {{ui:Stop}} eller tidsgrænsen fortsætter {{ui:Resume}} med samme billede, indtil det har alle sine samples; ændrer du en indstilling, eller trykker {{ui:Render}} igen, starter det forfra. Uden WebGPU path traces billedet med WebGL i stedet (linjen siger det), og {{ui:Resume}} tilbydes ikke.

:::linux
Firefox og de fleste Chrome-opsætninger på Linux har endnu ingen WebGPU, så høj kvalitet bruger WebGL dér.
:::

I denne tilstand tegnes kanter ikke, teksturer viser deres farve og ruhed, men ikke deres ujævnheder, og et snit laves på modellen, før billedet starter.

{{ui:Denoise (clears the grain left after the samples)}} er slået til som standard: når billedet er færdigt, eller stoppet, fjernes det tilbageværende korn af et neuralt netværk lavet til formålet (Intel Open Image Denoise's offentliggjorte netværk, kørt på din egen computer: på grafikkortet, ellers på processoren). {{ui:Show}} › {{ui:The picture before denoising}} viser det, som det blev renderet.

## Himle og lysprofiler på grafikkortet

Med WebGPU har høj kvalitet to himle mere:

- {{ui:Physical sky}} udregner dagslyset ud fra solens højde: en dyb blå over hovedet, et bleg bånd ved horisonten, og en sol, der bliver varmere og svagere, jo lavere den står. {{ui:Haze}} går fra en meget klar dag (2) til en diset (10).
- {{ui:Sky picture (HDRI)}} belyser modellen med et panoramabillede af et virkeligt sted. {{ui:Choose a picture…}} tager en equirectangular `.hdr`- eller `.exr`-fil; {{ui:Turn}} drejer den rundt om modellen, og {{ui:Picture brightness}} gør den lysere eller mørkere. Billedet har sin egen sol, så modellens sol lægges ikke til. Det huskes kun, mens siden er åben: efter genåbning skal du vælge det igen.

Hver lampe i listen {{ui:Lamps}} kan få en producents lysprofil: {{ui:IES profile…}} læser en IES (LM-63)-fil, og lampen kaster så sit lys, som armaturen gør (en smal nedlys, en vægbelysning). Hver lampe med det navn bruger den, og lampen beholder sin egen lysstyrke. Klik på profilens navn for at holde op med at bruge den.

Vinduer af klart glas hjælper himlens lys med at finde vej ind i et rum.

{{ui:Fast}}-tilstanden og WebGL-path traceren viser {{ui:Physical sky}} og {{ui:Sky picture (HDRI)}} som en klar himmel og ignorerer lysprofiler.

## Kameraet

{{ui:Camera}} sætter billedet op som et fotografi:

- {{ui:Exposure}}: behold {{ui:Brightness slider}}, eller vælg {{ui:Camera settings}} og sæt {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} og {{ui:ISO}}, som på et kamera; EV ved siden af dem er den sædvanlige eksponeringsværdi. f/16 ved 1/100 s og ISO 100 svarer til en solrig dag; en mørkere scene vil have en større blænde, en langsommere lukker eller en højere ISO. Dette virker i alle tilstande.
- {{ui:Depth of field}} sløre det, der er nærmere eller længere væk end {{ui:Focus distance (m)}}, som en linse med den f-stop ville gøre (lad feltet stå tomt for at fokusere på det, der er midt i visningen); {{ui:Aperture shape}} giver ude-af-fokus-højlys en rund eller bladet form.
- {{ui:Two-point perspective (vertical lines stay vertical)}} retter kameraet op og forskyder billedet, som en arkitektonisk tilt-shift-linse gør, så vægge ikke hælder, når du kigger op eller ned på en bygning.
- {{ui:White balance}} sætter, hvilken lysfarve der vises som hvid: lavere (fx 3000 K) for varmt lampelys, højere for skygge og overskyede dage.
- {{ui:Projection}}: {{ui:360° panorama}} laver et 2:1-billede af alt rundt om kameraet til panoramafremvisere; {{ui:360° stereo panorama}} stabler et venstre- og et højre-øje-panorama til headsets; {{ui:Cube map (6 faces)}} laver seks kvadratiske visninger i et 3 × 2-gitter. Bredden kommer fra {{ui:Size}}.

Projektion, dybdeskarphed, to-punkts perspektiv og hvidbalance kræver path traceren på grafikkortet (WebGPU), så de vises kun i {{ui:High quality (path traced)}}.

## Afslut billedet

{{ui:Picture}} graderer højkvalitetsbilledet som et fotografi, og hver kontrol ændrer det færdige billede med det samme, uden at rendere igen:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (billedet som før), {{ui:AgX}} (blødere, bevarer farve i meget stærkt lys), {{ui:Filmic}} (en mild filmkurve) eller {{ui:Standard}} (simpelt; stærkt lys klippes til hvidt).
- {{ui:Contrast}} og {{ui:Highlight compression}} (henter detaljer tilbage i meget lyse dele).
- {{ui:Bloom}} (en blød glød omkring stærkt lys), {{ui:Glare}} med sine {{ui:Glare streaks}} (stjernestråler fra de klareste punkter) og {{ui:Vignette}} (mørkere hjørner).
- {{ui:Colour table (.cube)…}} anvender en farvegradering fra en `.cube`-fil, med sin {{ui:Colour table strength}}; ligesom et himmelbillede beholdes den kun, mens siden er åben.

## Gem billedet

{{ui:Save as}} ved siden af {{ui:Save}} vælger filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} til deling (JPEG og WebP kun, hvor browseren kan skrive dem), og efter en højkvalitetsrendering på grafikkortet også:

- {{ui:PNG, 16 bits}}: det graderede billede med finere trin mellem nuancerne, til udskrivning eller videre redigering.
- {{ui:EXR, every layer (32-bit float)}}: billedet som renderet (lineært lys, ingen gradering) med hvert renderelement og lysgruppe som sit eget lag, til compositing-programmer.
- {{ui:Render file (.ccrender, to grade again later)}}: alt, dialogen skal bruge for at blande og gradere billedet igen. {{ui:Open a render file…}} henter det tilbage med sin blanding og gradering, uden at rendere.

## Bland lysene efter renderingen

Slå {{ui:Light mixing (change each light's colour and brightness after the render)}} til, før du trykker på {{ui:Render}}. Når billedet er færdigt (eller stoppet), lister {{ui:Mix the picture}} dets lys i grupper: himlen, solen og lamperne efter navn (hver lampe med samme navn er én gruppe). Slå en gruppe fra, giv den en farve, eller gør den lysere eller mørkere, og billedet ændres med det samme, uden at rendere igen. {{ui:Save mix}} gemmer blandingen under et navn, så du kan vælge den igen senere; {{ui:As rendered}} går tilbage til billedet, som det blev lavet. {{ui:Save}} gemmer det blandede billede.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} gemmer også billedets dele. {{ui:Show}} skifter visningen til en af dem: overfladefarverne (albedo), normalerne, dybden, det diffuse, spekulære og transmitterede lys (hver direkte og indirekte), det, der lyser, og himlen, samt en farve pr. objekt eller pr. materiale til masker.

Begge gemmer ekstra lag på grafikkortet. Ved store størrelser har grafikkortet måske ikke plads; dialogen siger det, og en mindre størrelse virker.

## Tåge, røg, støj og kaustik

Disse findes i {{ui:Fog, smoke and noise}} og virker i {{ui:High quality (path traced)}} på grafikkortet; de andre motorer udelader dem.

- {{ui:Fog and haze}} fylder luften op til en højde med en dis, som solen, himlen og lamperne lyser. {{ui:How far you can see, in meters}} angiver, hvor tyk den er (ca. 100 m er let dis, 20 m tæt tåge), {{ui:Fog height above the ground, in meters}} er, hvor den slutter, og {{ui:Light shafts}} er, hvor meget disen gløder mod lyset. Sollys forlader tågen øverst, så hvor sol kommer ind gennem et vindue eller mellem bygninger, ser du det som lysstråler.
- {{ui:Smoke or cloud}} tilføjer ét volumen røg eller sky, belyst ligesom tågen. {{ui:Kind}} er en {{ui:Cloud}}, en {{ui:Smoke column}} eller {{ui:From a volume file (.ccvol)}}, CadCraft's eget gitterformat. {{ui:Detail}} og {{ui:Variation}} ændrer en lavet sky eller søjle, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} og {{ui:Turn}} placerer den (den starter midt i modellen), {{ui:Thickness}} gør den tættere, {{ui:Forward glow}} gør den lysere mod lyset, og {{ui:Color}} farver den. En volumenfil beholdes kun, mens siden er åben, ligesom et himmelbillede.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} giver ikke flere samples til pixels, der har stabiliseret sig. {{ui:Noise to accept}} er, hvor meget korn der er tilbage, når en pixel stopper. Linjen under billedet siger, hvor mange samples en pixel fik i gennemsnit.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} sporer lys fra lamperne og solen, så det lyse felt under en glaskugle eller en spejls lys på en væg kommer rent frem i stedet for kornet. Den er slået fra, mens tåge, røg, lysblanding eller renderelementer er slået til, og den er lavet til billeder, ikke til 360°-billeder.

## Renderingskøen

{{ui:Render queue}} i dialogen: {{ui:Add this picture to the queue}} gemmer billedets indstillinger og visning, og {{ui:Start the queue}} renderer det, der venter, ét efter ét, på denne computer. Lukker du siden, bevares køen; åbn den samme model for at fortsætte. {{ui:Save}} henter et færdigt billede; {{ui:Remove}} og {{ui:Clear finished}} rydder listen. Køen renderer i høj kvalitet, så den kræver WebGPU.

## Hvor lang tid det tager

Billedet laves på din egen computer af dit grafikkort; intet uploades. Tiden vokser med gennemgangene og pixlerne: {{ui:Best}} har 16 gange så mange gennemgange som {{ui:Draft}}, og et 4K-billede har ca. fire gange så mange pixels som Full HD. Store modeller tager længere tid pr. gennemgang.
