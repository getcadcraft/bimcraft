---
title: Een afbeelding van het model renderen
summary: Maak een daglichtafbeelding van de 3D-weergave: lucht, de zon op de breedtegraad van de locatie, zachte schaduwen, glasramen; met WebGPU, padtraced op de videokaart met luchten, een camera, lichtmenging, graderen, mist en een renderwachtrij.
keywords: render, voorinstelling, voorinstellingen, scènevoorinstelling, interieur, exterieur, doorsnedeweergave, nacht, één klik, renderen, padtracing, straaltracing, globale verlichting, reflecties, breking, hoge kwaliteit, foto, fotorealistisch, realistisch, afbeelding, beeld, png, stilstaand beeld, lucht, zon, daglicht, schaduwen, zachte schaduwen, ambient occlusion, glas, ramen, metaal, materialen, belichting, helderheid, bewolkt, schemering, studio, presentatie, visualisatie, webgpu, ontruisen, fysieke lucht, hdri, ies, scherptediepte, panorama, witbalans, lichtmenging, renderelementen, exr, 16-bit png, mist, caustics, renderwachtrij
from: beb74cc7
---

{{ui:Renderen}} op de werkbalk maakt een afbeelding van de 3D-weergave die eruitziet als daglicht: een lucht, de zon waar de breedtegraad van de locatie hem plaatst, zachte schaduwen, licht van de hele lucht dat hoeken donkerder maakt, en kleuren die als glas of metaal kunnen lijken. Het model en het bestand worden niet gewijzigd.

## De weergave renderen

1. Zet de 3D-weergave zoals u de afbeelding wilt: draai en zoom, verberg verdiepingen of elementen die u niet wilt, en stel een [doorsnede](topic:section-plane) in als de afbeelding een snede moet tonen.
2. Klik op {{ui:Renderen}} op de werkbalk.
3. Kies een {{ui:Scène}} als de ingedrukte knop niet is wat u wilt (zie [Scènevoorinstellingen](topic:render#scene-presets-a-good-picture-in-one-click)), kies de {{ui:Grootte}}, en klik dan op {{ui:Renderen}} in het dialoogvenster.

   De afbeelding vult zich terwijl hij rendert en wordt bij elke ronde gladder. {{ui:Stoppen}} (of {{key:Esc}}) beëindigt het vroegtijdig en bewaart de afbeelding tot dan toe.

4. Klik op {{ui:Opslaan}} om hem als PNG te downloaden, of op {{ui:Opslaan als}} voor een ander formaat (zie [De afbeelding opslaan](topic:render#save-the-picture)). Hij krijgt de naam van het modelbestand.

:::tip
Begin met {{ui:Concept}} bij {{ui:De grootte van de weergave}} om de camera te controleren, en render daarna {{ui:Goed}} of {{ui:Best}} in een grotere grootte voor de definitieve afbeelding.
:::

## Scènevoorinstellingen: een goede afbeelding in één klik

Bovenaan het dialoogvenster staan vier knoppen {{ui:Scène}}. Elk stelt de lucht, de helderheid, de grond, de randlijnen, de kwaliteit en de zon in één klik in, zodat u niets hoeft te leren voor de eerste afbeelding. Klik er één aan, en dan op {{ui:Renderen}}.

| Scène | Wat het instelt | Gebruik het voor |
|---|---|---|
| {{ui:Exterieur}} | Heldere lucht, de eigen zon van het model, grond aan | Het gebouw van buiten |
| {{ui:Interieur}} | Bewolkte lucht (egaal licht, geen harde zonvlekken), een halve stop helderder | Een weergave van binnen in een ruimte |
| {{ui:Doorsnedeweergave}} | Witte studio, geen grond, randlijnen in de snelle render | Een model dat door een doorsnede is gesneden |
| {{ui:Nacht}} | De zon onder (middernacht in midwinter voor het halfrond van de locatie), één stop helderder | Lampen die het model verlichten. Zonder lampen is de afbeelding donker |

- {{ui:Kiezen voor deze weergave}} kiest voor u: {{ui:Doorsnedeweergave}} wanneer een doorsnede aan staat, {{ui:Interieur}} wanneer de camera binnen het model staat, anders {{ui:Exterieur}}. De eerste keer dat u het dialoogvenster opent, begint het op deze manier vanzelf.
- Elke instelling blijft hieronder staan en kan worden gewijzigd. Zodra u een instelling wijzigt die de scène bepaalt, is geen knop meer ingedrukt en de regel onder de knoppen zegt dat de instellingen van uzelf zijn. Klik de scène opnieuw aan om de waarden terug te zetten.
- Een scène raakt de engine, de modus, de grootte, de materialen, de camera of de lampen niet aan.

:::note
De scènes geven dezelfde waarden in ModelCraft en BimCraft. Hoe de afgewerkte afbeelding eruitziet, hangt af van uw model en uw videokaart.
:::

## Wat in de afbeelding te zien is

Wat de 3D-weergave massief toont, wordt getoond: verborgen en doorzichtige elementen, verborgen verdiepingen en verborgen modellen worden weggelaten, en ruimten worden alleen getoond wanneer {{ui:Ruimten}} aan staat. Een doorsnedevlak of snijkader snijdt de afbeelding zoals het de weergave snijdt. Elementen tonen hun eigen kleuren: kleuren op eigenschap (het tabblad {{ui:Kleur}}) wordt niet gebruikt.

## Instellingen

| Instelling | Wat het doet |
|---|---|
| {{ui:Grootte}} | De grootte van de weergave, twee keer de grootte van de weergave, Full HD, 4K of een vierkant |
| {{ui:Modus}} | {{ui:Snel}}, of {{ui:Hoge kwaliteit (padtracing)}} (hieronder) met zijn {{ui:Tijdlimiet}} |
| {{ui:Kwaliteit}} | Hoeveel rondes (of, in hoge kwaliteit, samples) worden gemiddeld: {{ui:Concept}} 16, {{ui:Goed}} 64, {{ui:Best}} 256. Meer rondes geven gladdere schaduwen en randen en duren langer |
| {{ui:Hemel}} | {{ui:Heldere lucht}}, {{ui:Bewolkt}}, {{ui:Schemering}} of {{ui:Witte studio}} (een effen witte achtergrond) |
| {{ui:Zon}} | 21 juni om 15:00 op de breedtegraad die het bestand voor de locatie geeft (IfcSite), gedraaid naar het echte noorden van het model. Vink {{ui:Een andere datum en tijd voor deze afbeelding gebruiken}} aan voor een ander tijdstip |
| {{ui:Helderheid}} | Lichter of donkerder, in stappen (stops) |
| {{ui:Grond onder het model}} | Een grond op het laagste punt van het model die de schaduwen opvangt en in de horizon vervaagt |
| {{ui:Randen tekenen}} | Tekent de randen van de elementen dun over de afbeelding |

Als de zon op het gekozen tijdstip onder de horizon staat, is het nacht: de lucht wordt donker en de lampen van het model verlichten het.

## Lampen

Elke lichtarmatuur in het model is een lamp in de afbeelding: de armaturen in een IFC-bestand (IfcLightFixture, of een element dat als lichtarmatuur is getypeerd), inclusief die u uit de bibliotheek plaatst. Elk schijnt naar beneden vanaf net onder het armatuur. Wanneer het bestand het vermogen van een armatuur geeft, volgt de helderheid daaruit; anders is het 800 lumen, een warm wit.

Het dialoogvenster toont de lampen onder {{ui:Lampen}}: vink er één uit om hem uit te schakelen, of typ zijn helderheid in lumen. Deze wijzigingen worden opgeslagen in de IFC (de eigenschapsset `CadCraft_Light` van het armatuur, waar u ze ook kunt wijzigen onder Eigenschappen), en {{key:Ctrl+Z}} maakt ze ongedaan.

Wanneer een bestand niets zegt over waar de locatie ligt, wordt de zon op 40° noord geplaatst, en het dialoogvenster zegt dat. De tijd is de kloktijd van de locatie, berekend uit de lengtegraad, dus kan hij een uur afwijken waar klokken anders zijn ingesteld.

Deze instellingen worden in deze browser bewaard voor de volgende afbeelding. Ze worden niet in het IFC-bestand opgeslagen.

## Glas en andere materialen

Onder {{ui:Materialen}} heeft elke kleur op het scherm een look: {{ui:Mat}}, {{ui:Satijn}}, {{ui:Glanzend}}, {{ui:Metaal}}, {{ui:Gepolijst metaal}}, {{ui:Glas}} of {{ui:Matglas}}. Kleuren die het IFC-bestand doorzichtig maakt (bijvoorbeeld raamglas) beginnen als {{ui:Glas}}.

:::note
In de modus {{ui:Snel}} weerkaatsen glas en metaal de lucht, niet de rest van het model, en buigt licht niet door glas. De modus {{ui:Hoge kwaliteit (padtracing)}} hieronder doet beide.
:::

## Hoge kwaliteit

Kies {{ui:Modus}} › {{ui:Hoge kwaliteit (padtracing)}} voor een afbeelding die licht volgt zoals een camera het ziet:

- licht weerkaatst tussen oppervlakken, zodat een ruimte die door een raam of door een lamp wordt verlicht, rondom verlicht is en kleuren naar hun buren uitlopen;
- glas is echt glas: licht buigt erdoorheen en het weerkaatst het model;
- metaal en gepolijste oppervlakken weerkaatsen de rest van het model;
- lichtpanelen verlichten als panelen, met zachte schaduwen.

Het is veel trager dan {{ui:Snel}}: elke ronde volgt het licht van elke pixel opnieuw. De afbeelding begint korrelig en wordt scherper naarmate de samples zich opstapelen, dus begin klein ({{ui:De grootte van de weergave}}, {{ui:Concept}}) en kies een {{ui:Tijdlimiet}}: wanneer die afloopt, blijft de afbeelding tot dan bewaard. {{ui:Stoppen}} bewaart hem ook. De eerste ronde wacht terwijl de browser de padtracer voorbereidt.

Waar de browser WebGPU heeft, is de padtracer van CadCraft zelf en draait hij op de videokaart; de regel onder de afbeelding zegt dat. Na {{ui:Stoppen}} of de tijdlimiet gaat {{ui:Hervatten}} verder met dezelfde afbeelding totdat hij alle samples heeft; een instelling wijzigen of opnieuw op {{ui:Renderen}} drukken begint opnieuw. Zonder WebGPU wordt de afbeelding in plaats daarvan met WebGL gepadtraced (de regel zegt dat) en wordt {{ui:Hervatten}} niet aangeboden.

:::linux
Firefox en de meeste Chrome-installaties op Linux hebben nog geen WebGPU, dus hoge kwaliteit gebruikt daar WebGL.
:::

In deze modus worden randen niet getekend, tonen texturen hun kleur en ruwheid maar niet hun reliëf, en wordt een doorsnede op het model gemaakt voordat de afbeelding begint.

{{ui:Ontruisen (haalt de korrel weg die na de samples overblijft)}} staat standaard aan: wanneer de afbeelding klaar is, of gestopt, wordt de overgebleven korrel weggehaald door een neuraal netwerk dat hiervoor is gemaakt (het gepubliceerde netwerk van Intel Open Image Denoise, op uw eigen computer uitgevoerd: op de videokaart, anders op de processor). {{ui:Tonen}} › {{ui:Het beeld vóór het ontruisen}} toont het zoals gerenderd.

## Luchten en lichtprofielen op de videokaart

Met WebGPU heeft hoge kwaliteit twee extra luchten:

- {{ui:Fysieke lucht}} berekent het daglicht uit de hoogte van de zon: een diepblauw boven ons, een bleke band aan de horizon, en een zon die warmer en zwakker wordt naarmate hij laag staat. {{ui:Waas}} loopt van een heel heldere dag (2) tot een wazige dag (10).
- {{ui:Luchtafbeelding (HDRI)}} verlicht het model met een panoramabeeld van een echte plek. {{ui:Kies een afbeelding…}} neemt een equirectangulair `.hdr`- of `.exr`-bestand; {{ui:Draaien}} draait het om het model heen en {{ui:Helderheid van de afbeelding}} maakt het helderder of donkerder. De afbeelding heeft haar eigen zon, dus de zon van het model wordt niet toegevoegd. Hij wordt alleen bewaard zolang de pagina open is: na opnieuw openen kiest u hem opnieuw.

Elke lamp in de lijst {{ui:Lampen}} kan een lichtprofiel van de fabrikant krijgen: {{ui:IES-profiel…}} leest een IES-bestand (LM-63) en de lamp werpt dan zijn licht zoals die armatuur dat doet (een smalle downlight, een wandwasser). Elke lamp met die naam gebruikt het, en de lamp behoudt zijn eigen helderheid. Klik op de naam van het profiel om het niet meer te gebruiken.

Ramen van helder glas helpen het licht van de lucht een weg naar binnen vinden.

De modus {{ui:Snel}} en de WebGL-padtracer tonen de {{ui:Fysieke lucht}} en {{ui:Luchtafbeelding (HDRI)}} als een heldere lucht en negeren lichtprofielen.

## De camera

{{ui:Camera}} stelt de afbeelding in zoals een foto:

- {{ui:Blootstelling}}: houd de {{ui:Helderheidsschuifregelaar}}, of kies {{ui:Camera-instellingen}} en stel het {{ui:Diafragma (f-stop)}}, de {{ui:Sluitertijd}} en de {{ui:ISO}} in zoals op een camera; de EV ernaast is de gebruikelijke belichtingswaarde. f/16 bij 1/100 s en ISO 100 past bij een zonnige dag; een donkerdere scène vraagt om een wijder diafragma, een langzamere sluitertijd of een hogere ISO. Dit werkt in elke modus.
- {{ui:Scherptediepte}} vervaagt wat dichterbij of verder ligt dan de {{ui:Scherpstelafstand (m)}}, zoals een lens met die f-stop dat zou doen (laat leeg om scherp te stellen op wat in het midden van de weergave staat); {{ui:Vorm van het diafragma}} geeft onscherpe highlights een ronde of gelamelleerde vorm.
- {{ui:Tweepuntsperspectief (verticale lijnen blijven verticaal)}} waterpast de camera en verschuift het beeld, zoals een architectonische tilt-shiftlens doet, zodat muren niet overhellen wanneer u omhoog of omlaag naar een gebouw kijkt.
- {{ui:Witbalans}} bepaalt welke lichtkleur als wit wordt getoond: lager (bijvoorbeeld 3000 K) voor warm lampenlicht, hoger voor schaduw en bewolkte dagen.
- {{ui:Projectie}}: {{ui:360°-panorama}} maakt een 2:1-afbeelding van alles rond de camera voor panoramaviewers; {{ui:360°-stereopanorama}} zet een linker- en een rechteroogpanorama onder elkaar voor headsets; {{ui:Kubusmap (6 vlakken)}} maakt zes vierkante weergaven in een raster van 3 × 2. De breedte komt van {{ui:Grootte}}.

Projectie, scherptediepte, tweepuntsperspectief en witbalans hebben de padtracer op de videokaart (WebGPU) nodig, dus ze worden alleen getoond in {{ui:Hoge kwaliteit (padtracing)}}.

## De afbeelding afwerken

Met {{ui:Afbeelding}} wordt de afbeelding van hoge kwaliteit gegradeerd zoals een foto, en elke regelaar past de afgewerkte afbeelding meteen aan, zonder opnieuw te renderen:

- {{ui:Uitstraling (view transform)}}: {{ui:ACES filmic}} (de afbeelding zoals eerder), {{ui:AgX}} (zachter, behoudt kleur in heel fel licht), {{ui:Filmic}} (een zachte filmcurve) of {{ui:Standard}} (vlak, fel licht knipt af tot wit).
- {{ui:Contrast}} en {{ui:Compressie van hooglichten}} (herstelt detail in heel heldere delen).
- {{ui:Bloom}} (een zachte gloed rond fel licht), {{ui:Schittering}} met zijn {{ui:Schitteringsstrepen}} (sterstralen uit de helderste punten) en {{ui:Vignettering}} (donkerdere hoeken).
- {{ui:Kleurtabel (.cube)…}} past een kleurgradering toe uit een `.cube`-bestand, met zijn {{ui:Sterkte van de kleurtabel}}; net als een luchtafbeelding blijft het alleen bewaard zolang de pagina open is.

## De afbeelding opslaan

{{ui:Opslaan als}} naast {{ui:Opslaan}} kiest het bestand: {{ui:PNG}}, {{ui:JPEG}} of {{ui:WebP}} om te delen (JPEG en WebP alleen waar de browser ze kan schrijven), en na een renderen van hoge kwaliteit op de videokaart ook:

- {{ui:PNG, 16 bits}}: de gegradeerde afbeelding met fijnere stappen tussen tinten, voor afdrukken of verdere bewerking.
- {{ui:EXR, elke laag (32-bit float)}}: de afbeelding zoals gerenderd (lineair licht, zonder graderen) met elk renderelement en elke lichtgroep als eigen laag, voor compositieprogramma's.
- {{ui:Renderbestand (.ccrender, om later opnieuw te graderen)}}: alles wat het dialoogvenster nodig heeft om de afbeelding opnieuw te mengen en te graderen. {{ui:Een renderbestand openen…}} haalt het terug, met zijn mengsel en zijn gradering, zonder te renderen.

## Lichten mengen na het renderen

Zet {{ui:Lichtmenging (kleur en helderheid van elke lamp na het renderen wijzigen)}} aan voordat u op {{ui:Renderen}} drukt. Wanneer de afbeelding klaar is (of gestopt), somt {{ui:Het beeld mengen}} de lichten op in groepen: de lucht, de zon, en de lampen op naam (elke lamp met dezelfde naam is één groep). Zet een groep uit, geef hem een kleur, of maak hem helderder of donkerder, en de afbeelding verandert meteen, zonder opnieuw te renderen. {{ui:Mengsel opslaan}} bewaart het mengsel onder een naam om later opnieuw te kiezen; {{ui:Zoals gerenderd}} gaat terug naar de afbeelding zoals die is gemaakt. {{ui:Opslaan}} slaat de gemengde afbeelding op.

{{ui:Renderelementen (albedo, normalen, diepte, diffuus, speculair, transmissie, emissie, ID's)}} bewaart ook de onderdelen van de afbeelding. {{ui:Tonen}} schakelt de weergave naar één ervan: de oppervlaktekleuren (albedo), de normalen, de diepte, het diffuse, speculaire en doorgelaten licht (elk direct en indirect), wat gloeit en de lucht, en een kleur per object of per materiaal voor het maken van maskers.

Beide bewaren extra lagen op de videokaart. Bij grote formaten heeft een videokaart mogelijk geen ruimte; het dialoogvenster zegt dat, en een kleiner formaat werkt.

## Mist, rook, ruis en caustics

Deze staan onder {{ui:Mist, rook en ruis}} en werken in {{ui:Hoge kwaliteit (padtracing)}} op de videokaart; de andere engines laten ze weg.

- {{ui:Mist en nevel}} vult de lucht tot een hoogte met een mist die door de zon, de lucht en lampen wordt verlicht. {{ui:Hoe ver u kunt zien, in meters}} bepaalt hoe dik hij is (ongeveer 100 m is een lichte nevel, 20 m een dikke mist), {{ui:Hoogte van de mist boven de grond, in meters}} is waar hij eindigt, en {{ui:Lichtschachten}} bepaalt hoeveel de mist naar het licht toe gloeit. Zonlicht verlaat de mist aan de bovenkant, dus waar de zon door een raam of tussen gebouwen komt, ziet u het als lichtschachten.
- {{ui:Rook of wolk}} voegt één volume rook of wolk toe, verlicht als de mist. {{ui:Soort}} is een {{ui:Wolk}}, een {{ui:Rookpluim}} of {{ui:Uit een volumebestand (.ccvol)}}, het eigen rastformaat van CadCraft. {{ui:Detail}} en {{ui:Variatie}} wijzigen een gemaakte wolk of pluim, {{ui:Grootte van de langste zijde, in meters (0 = de grootte van het model)}}, {{ui:Verplaats X (m)}}, {{ui:Verplaats Y (m)}}, {{ui:Verplaats Z (m)}} en {{ui:Draaien}} plaatsen hem (hij begint in het midden van het model), {{ui:Dikte}} maakt hem dichter, {{ui:Gloed naar voren}} maakt hem helderder richting het licht, en {{ui:Kleur}} tint hem. Een volumebestand blijft alleen bewaard zolang de pagina open is, net als een luchtafbeelding.
- {{ui:Vroeg stoppen waar het beeld schoon is (adaptieve sampling)}} geeft geen extra samples meer aan pixels die tot rust zijn gekomen. {{ui:Ruis die u accepteert}} is hoeveel korrel overblijft wanneer een pixel stopt. De regel onder de afbeelding zegt hoeveel samples een pixel gemiddeld kreeg.
- {{ui:Caustics (licht gebroken door glas of weerkaatst door spiegels)}} volgt licht van de lampen en de zon, zodat de heldere vlek onder een glazen bol of het licht van een spiegel op een muur schoon wordt in plaats van korrelig. Het staat uit zolang mist, rook, lichtmenging of renderelementen aan staan, en het is gemaakt voor afbeeldingen, niet voor 360°-afbeeldingen.

## De renderwachtrij

{{ui:Renderwachtrij}} in het dialoogvenster: {{ui:Dit beeld aan de wachtrij toevoegen}} bewaart de instellingen en de weergave van de afbeelding, en {{ui:Wachtrij starten}} rendert wat wacht, één na één, op deze computer. Het sluiten van de pagina bewaart de wachtrij; open hetzelfde model om verder te gaan. {{ui:Opslaan}} downloadt een voltooide; {{ui:Verwijderen}} en {{ui:Voltooide wissen}} ruimen de lijst op. De wachtrij rendert in hoge kwaliteit, dus hij heeft WebGPU nodig.

## Hoe lang het duurt

De afbeelding wordt gemaakt op uw eigen computer, door de videokaart; er wordt niets geüpload. De tijd groeit met de rondes en de pixels: {{ui:Best}} heeft 16 keer zoveel rondes als {{ui:Concept}}, en een 4K-afbeelding heeft ongeveer vier keer de pixels van Full HD. Grote modellen duren per ronde langer.
