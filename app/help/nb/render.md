---
title: Rendre et bilde av modellen
summary: Lag et dagslysbilde av 3D-visningen med himmel, sol på stedets breddegrad, myke skygger og glassvinduer. Med WebGPU blir bildet stråleført på grafikkortet, med himler, kamera, lysblanding, gradering, tåke og en renderkø.
keywords: render, forhåndsinnstilling, scenevalg, interiør, eksteriør, snittvisning, natt, ett klikk, rendering, stråleføring, stråleført, strålesporing, global belysning, refleksjoner, brytning, høy kvalitet, foto, fotorealistisk, realistisk, bilde, image, png, stillbilde, himmel, sol, dagslys, skygger, myke skygger, ambient occlusion, glass, vinduer, metall, materialer, eksponering, lysstyrke, overskyet, skumring, studio, presentasjon, visualisering, webgpu, støyfjerning, fysisk himmel, hdri, ies, skarphetsdybde, panorama, hvitbalanse, lysblanding, renderelementer, exr, 16-bit png, tåke, kaustikker, renderkø
from: beb74cc7
---

{{ui:Render}} på verktøylinjen lager et bilde av 3D-visningen som ser ut som dagslys: en himmel, solen der stedets breddegrad plasserer den, myke skygger, lys fra hele himmelen som mørkner hjørner, og farger som kan se ut som glass eller metall. Modellen og filen endres ikke.

## Render visningen

1. Still inn 3D-visningen slik du vil ha bildet: roter og zoom, skjul etasjer eller elementer du ikke vil ha med, og sett et [snitt](topic:section-plane) hvis bildet skal vise et kutt.
2. Klikk {{ui:Render}} på verktøylinjen.
3. Velg en {{ui:Scene}} hvis den som er trykket, ikke er den du vil ha (se [Scene-forhåndsinnstillinger](topic:render#scene-presets-a-good-picture-in-one-click)). Velg {{ui:Size}}, og klikk deretter {{ui:Render}} i dialogboksen.

   Bildet fylles inn mens det rendres, og blir jevnere for hvert pass. {{ui:Stop}} (eller {{key:Esc}}) avslutter tidlig og beholder bildet så langt.

4. Klikk {{ui:Save}} for å laste ned det som PNG, eller {{ui:Save as}} for et annet format (se [Lagre bildet](topic:render#save-the-picture)). Det får navnet etter modellens fil.

:::tip
Start med {{ui:Draft}} i {{ui:The view's size}} for å sjekke kameraet. Render deretter {{ui:Good}} eller {{ui:Best}} i en større størrelse for det endelige bildet.
:::

## Scene-forhåndsinnstillinger: et godt bilde med ett klikk

Øverst i dialogboksen er det fire {{ui:Scene}}-knapper. Hver setter himmel, lysstyrke, underlag, kantlinjer, kvalitet og sol med ett klikk, så det er ingenting å lære før det første bildet. Klikk én, og deretter {{ui:Render}}.

| Scene | Hva den setter | Bruk den til |
|---|---|---|
| {{ui:Exterior}} | Klar himmel, modellens egen sol, bakke på | Bygningen utenfra |
| {{ui:Interior}} | Overskyet himmel (jevnt lys, ingen harde solflekker), et halvt trinn lysere | En utsikt fra innsiden av et rom |
| {{ui:Section view}} | Hvitt studio, ingen bakke, kantlinjer i den raske renderingen | En modell kuttet av et snitt |
| {{ui:Night}} | Solen under horisonten (midnatt midtvinter på stedets halvkule), ett trinn lysere | Lamper som lyser opp modellen. Uten lamper blir bildet mørkt |

- {{ui:Pick for this view}} velger for deg: {{ui:Section view}} når et snitt er på, {{ui:Interior}} når kameraet er inne i modellen, ellers {{ui:Exterior}}. Første gang du åpner dialogboksen, starter den slik av seg selv.
- Alle innstillinger står under og kan endres. Når du endrer én, er ikke scenen lenger trykket inn. Linjen under knappene sier da at innstillingene er dine egne. Klikk scenen igjen for å sette verdiene tilbake.
- En scene berører ikke motoren, modusen, størrelsen, materialene, kameraet eller lampene.

:::note
Scenene gir de samme verdiene i ModelCraft og BimCraft. Hvordan det ferdige bildet ser ut, avhenger av modellen og grafikkortet.
:::

## Hva som vises i bildet

Det 3D-visningen viser som faste flater, blir slik i bildet. Skjulte og gjennomsiktige elementer, skjulte etasjer og skjulte modeller utelates, og rom vises bare når {{ui:Spaces}} er på. Et snittplan eller en snittboks kutter bildet slik den kutter visningen. Elementer vises i sine egne farger. Farging etter egenskap (fanen {{ui:Color}}) brukes ikke.

## Innstillinger

| Innstilling | Hva den gjør |
|---|---|
| {{ui:Size}} | Visningens størrelse, to ganger visningens størrelse, Full HD, 4K eller et kvadrat |
| {{ui:Mode}} | {{ui:Fast}}, eller {{ui:High quality (path traced)}} (nedenfor) med sin {{ui:Time limit}} |
| {{ui:Quality}} | Hvor mange pass (eller, i høy kvalitet, prøver) som midles: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Flere pass gir jevnere skygger og kanter, og tar lengre tid |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} eller {{ui:White studio}} (en vanlig hvit bakgrunn) |
| {{ui:Sun}} | 21. juni kl. 15:00 på breddegraden filen oppgir for stedet (IfcSite), vendt mot modellens sanne nord. Kryss av for {{ui:Use another date and time for this picture}} for et annet tidspunkt |
| {{ui:Brightness}} | Lysere eller mørkere, i trinn |
| {{ui:Ground under the model}} | Et underlag ved modellens laveste punkt, som tar imot skyggene og toner ut mot horisonten |
| {{ui:Draw edges}} | Tegner elementenes kanter tynt over bildet |

Når solen er under horisonten på valgt tidspunkt, er det natt. Himmelen blir mørk, og modellens lamper lyser den opp.

## Lamper

Hver lysarmatur i modellen er en lampe i bildet: armaturene i en IFC-fil (IfcLightFixture, eller et element med typen lysarmatur), også dem du plasserer fra biblioteket. Hver lyser nedover, like under armaturen. Når filen oppgir en armaturs effekt i watt, følger lysstyrken av den. Ellers er den 800 lumen, en varm hvit.

Dialogboksen lister lampene under {{ui:Lamps}}. Fjern haken for en lampe for å slå den av, eller skriv lysstyrken i lumen. Disse endringene lagres i IFC-filen (armaturens `CadCraft_Light`-egenskapssett, der du også kan endre dem i Egenskaper), og {{key:Ctrl+Z}} angrer dem.

Når en fil ikke sier noe om hvor stedet ligger, plasseres solen på 40° nord, og dialogboksen sier det. Tidspunktet er stedets klokkeslett, regnet ut fra lengdegraden. Det kan derfor være en time feil der klokker er satt annerledes.

Disse innstillingene huskes i denne nettleseren til neste bilde. De lagres ikke i IFC-filen.

## Glass og andre materialer

Under {{ui:Materials}} har hver farge på skjermen et utseende: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} eller {{ui:Frosted glass}}. Farger som IFC-filen gjør gjennomsiktige (for eksempel vindusglass), starter som {{ui:Glass}}.

:::note
I {{ui:Fast}}-modusen reflekterer glass og metall himmelen, ikke resten av modellen, og lys bøyer ikke gjennom glass. {{ui:High quality (path traced)}}-modusen nedenfor gjør begge deler.
:::

## Høy kvalitet

Velg {{ui:Mode}} › {{ui:High quality (path traced)}} for et bilde som følger lyset slik et kamera ser det:

- lys spretter mellom flater, så et rom som er lyst gjennom et vindu eller av en lampe, er lyst rundt omkring, og farger smitter over på naboene;
- glass er ekte glass: lys bøyer gjennom det, og det reflekterer modellen;
- metall og polerte flater reflekterer resten av modellen;
- lyspaneler lyser som paneler, med myke skygger.

Det er mye tregere enn {{ui:Fast}}: hvert pass sporer lyset for hver piksel på nytt. Bildet starter kornet og blir klarere etter hvert som prøvene legges sammen. Start derfor lite ({{ui:The view's size}}, {{ui:Draft}}) og velg en {{ui:Time limit}}. Når den er brukt opp, beholdes bildet så langt. {{ui:Stop}} beholder det også. Det første passet venter mens nettleseren klargjør stråleføringen.

Der nettleseren har WebGPU, er stråleføringen CadCraft sin egen, og den kjører på grafikkortet. Linjen under bildet sier det. Etter {{ui:Stop}} eller tidsgrensen fortsetter {{ui:Resume}} med samme bilde til det har alle prøvene. Endrer du en innstilling, eller trykker {{ui:Render}} igjen, starter det på nytt. Uten WebGPU stråleføres bildet med WebGL i stedet. Linjen sier det, og {{ui:Resume}} tilbys ikke.

:::linux
Firefox og de fleste Chrome-oppsett på Linux har ikke WebGPU ennå, så høy kvalitet bruker WebGL der.
:::

I denne modusen tegnes ikke kanter. Teksturer viser sin farge og ruhet, men ikke sine ujevnheter. Et snitt lages på modellen før bildet starter.

{{ui:Denoise (clears the grain left after the samples)}} er på som standard. Når bildet er ferdig, eller stoppet, fjernes kornet som er igjen, av et nevralt nettverk laget for dette (Intel Open Image Denoise sitt publiserte nettverk, kjørt på din egen datamaskin: på grafikkortet, ellers på prosessoren). {{ui:Show}} › {{ui:The picture before denoising}} viser bildet slik det ble rendret.

## Himler og lysprofiler på grafikkortet

Med WebGPU har høy kvalitet to himler til:

- {{ui:Physical sky}} regner ut dagslyset fra solens høyde: en dyp blå himmel rett over, et blekt bånd ved horisonten, og en sol som blir varmere og svakere etter hvert som den går lavt. {{ui:Haze}} går fra en veldig klar dag (2) til en diset dag (10).
- {{ui:Sky picture (HDRI)}} belyser modellen med et panoramabilde av et ekte sted. {{ui:Choose a picture…}} tar en ekvirektangulær `.hdr`- eller `.exr`-fil. {{ui:Turn}} snur den rundt modellen, og {{ui:Picture brightness}} gjør den lysere eller mørkere. Bildet har sin egen sol, så modellens sol legges ikke til. Det beholdes bare mens siden er åpen. Etter å ha åpnet den på nytt, velg den igjen.

Hver lampe i {{ui:Lamps}}-listen kan få en produsents lysprofil. {{ui:IES profile…}} leser en IES-fil (LM-63), og lampen kaster da lyset slik den armaturen gjør (en smal nedlampe, en veggvasker). Hver lampe med det navnet bruker den, og lampen beholder sin egen lysstyrke. Klikk på profilens navn for å slutte å bruke den.

Vinduer av klart glass hjelper himmelens lys å finne veien inn i et rom.

{{ui:Fast}}-modusen og WebGL-stråleføringen viser {{ui:Physical sky}} og {{ui:Sky picture (HDRI)}} som en klar himmel, og ignorerer lysprofiler.

## Kameraet

{{ui:Camera}} setter opp bildet som et fotografi:

- {{ui:Exposure}}: behold {{ui:Brightness slider}}, eller velg {{ui:Camera settings}} og sett {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} og {{ui:ISO}} som på et kamera. EV ved siden av dem er den vanlige eksponeringsverdien. f/16 ved 1/100 s og ISO 100 passer en solrik dag. En mørkere scene vil ha en bredere blenderåpning, en lengre lukkertid eller en høyere ISO. Dette fungerer i alle moduser.
- {{ui:Depth of field}} gjør uskarpt det som er nærmere eller lenger unna enn {{ui:Focus distance (m)}}, slik en linse med den f-verdien ville gjort. La den stå tom for å fokusere på det som er midt i visningen. {{ui:Aperture shape}} gir uskarpe høylys en rund eller bladet form.
- {{ui:Two-point perspective (vertical lines stay vertical)}} retter opp kameraet og forskyver bildet, slik en arkitektonisk tilt-shift-linse gjør. Vegger heller dermed ikke når du ser opp eller ned på en bygning.
- {{ui:White balance}} setter hvilken lysfarge som vises som hvitt: lavere (for eksempel 3000 K) for varmt lampelys, høyere for skygge og overskyede dager.
- {{ui:Projection}}: {{ui:360° panorama}} lager et bilde på 2:1 av alt rundt kameraet, for panoramavisere. {{ui:360° stereo panorama}} stabler et venstre- og et høyreøyepanorama for hodesett. {{ui:Cube map (6 faces)}} lager seks kvadratiske visninger i et rutenett på 3 × 2. Bredden kommer fra {{ui:Size}}.

Projeksjon, skarphetsdybde, topunktsperspektiv og hvitbalanse krever stråleføringen på grafikkortet (WebGPU), så de vises bare i {{ui:High quality (path traced)}}.

## Ferdigstill bildet

{{ui:Picture}} graderer høykvalitetsbildet som et fotografi. Hver kontroll endrer det ferdige bildet med en gang, uten å rendre på nytt:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (bildet som før), {{ui:AgX}} (mykere, beholder farge i svært sterkt lys), {{ui:Filmic}} (en mild filmkurve) eller {{ui:Standard}} (enkel; sterkt lys klippes til hvitt).
- {{ui:Contrast}} og {{ui:Highlight compression}} (henter detaljer tilbake i svært lyse partier).
- {{ui:Bloom}} (en myk glød rundt sterkt lys), {{ui:Glare}} med sine {{ui:Glare streaks}} (stjerneformede stråler fra de sterkeste punktene) og {{ui:Vignette}} (mørkere hjørner).
- {{ui:Colour table (.cube)…}} bruker en fargegradering fra en `.cube`-fil, med sin {{ui:Colour table strength}}. Som et himmelbilde beholdes den bare mens siden er åpen.

## Lagre bildet

{{ui:Save as}} ved siden av {{ui:Save}} velger filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} for deling (JPEG og WebP bare der nettleseren kan skrive dem). Etter en høykvalitetsrendering på grafikkortet finnes også:

- {{ui:PNG, 16 bits}}: det graderte bildet med finere trinn mellom toner, for utskrift eller videre redigering.
- {{ui:EXR, every layer (32-bit float)}}: bildet slik det ble rendret (lineært lys, ingen gradering), med hvert renderelement og lysgruppe som sitt eget lag, for komponeringsprogrammer.
- {{ui:Render file (.ccrender, to grade again later)}}: alt dialogboksen trenger for å blande og gradere bildet på nytt. {{ui:Open a render file…}} henter det tilbake, med blandingen og graderingen, uten å rendre.

## Bland lysene etter renderingen

Slå på {{ui:Light mixing (change each light's colour and brightness after the render)}} før du trykker {{ui:Render}}. Når bildet er ferdig (eller stoppet), lister {{ui:Mix the picture}} lysene i grupper: himmelen, solen, og lampene etter navn. Hver lampe med samme navn er én gruppe. Slå av en gruppe, gi den en farge, eller gjør den lysere eller mørkere, så endres bildet med en gang, uten å rendre på nytt. {{ui:Save mix}} beholder blandingen under et navn du kan velge igjen senere. {{ui:As rendered}} går tilbake til bildet slik det ble laget. {{ui:Save}} lagrer det blandede bildet.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} beholder bildets deler også. {{ui:Show}} bytter visningen til en av dem: overflatefargene (albedo), normalene, dybden, det diffuse, speilende og transmitterte lyset (hvert direkte og indirekte), det som gløder og himmelen, og en farge per objekt eller per materiale for å lage masker.

Begge beholder ekstra lag på grafikkortet. I store størrelser har kanskje ikke grafikkortet plass. Dialogboksen sier det, og en mindre størrelse fungerer.

## Tåke, røyk, støy og kaustikker

Disse ligger i {{ui:Fog, smoke and noise}} og fungerer i {{ui:High quality (path traced)}} på grafikkortet. De andre motorene utelater dem.

- {{ui:Fog and haze}} fyller luften opp til en høyde med en dis, som solen, himmelen og lampene lyser opp. {{ui:How far you can see, in meters}} setter hvor tykk den er (ca. 100 m er lett dis, 20 m er tykk tåke). {{ui:Fog height above the ground, in meters}} er hvor den slutter, og {{ui:Light shafts}} er hvor mye disen gløder mot lyset. Sollys forlater tåken øverst, så der sol kommer gjennom et vindu eller mellom bygninger, ser du det som lysstråler.
- {{ui:Smoke or cloud}} legger til ett volum av røyk eller sky, lyst likt tåken. {{ui:Kind}} er en {{ui:Cloud}}, en {{ui:Smoke column}} eller {{ui:From a volume file (.ccvol)}}, CadCraft sitt eget rutenettformat. {{ui:Detail}} og {{ui:Variation}} endrer en laget sky eller søyle. {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} og {{ui:Turn}} plasserer den (den starter midt i modellen). {{ui:Thickness}} gjør den tettere, {{ui:Forward glow}} gjør den lysere mot lyset, og {{ui:Color}} farger den. En volumfil beholdes bare mens siden er åpen, som et himmelbilde.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} gir ikke flere prøver til piksler som har satt seg. {{ui:Noise to accept}} er hvor mye korn som er igjen når en piksel stopper. Linjen under bildet sier hvor mange prøver en piksel fikk i snitt.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} sporer lys fra lampene og solen, slik at den lyse flekken under en glasskule, eller et speils lys på en vegg, blir ren i stedet for kornet. Den er av mens tåke, røyk, lysblanding eller renderelementer er på, og den er laget for bilder, ikke for 360°-bilder.

## Renderkøen

{{ui:Render queue}} i dialogboksen: {{ui:Add this picture to the queue}} beholder bildets innstillinger og visning. {{ui:Start the queue}} rendrer det som venter, ett etter ett, på denne datamaskinen. Lukker du siden, beholdes køen. Åpne samme modell for å fortsette. {{ui:Save}} laster ned et ferdig bilde, og {{ui:Remove}} og {{ui:Clear finished}} rydder i listen. Køen rendrer i høy kvalitet, så den trenger WebGPU.

## Hvor lang tid det tar

Bildet lages på din egen datamaskin, av grafikkortet. Ingenting lastes opp. Tiden øker med passene og pikslene: {{ui:Best}} har 16 ganger så mange pass som {{ui:Draft}}, og et 4K-bilde har omtrent fire ganger så mange piksler som Full HD. Store modeller tar lengre tid per pass.
