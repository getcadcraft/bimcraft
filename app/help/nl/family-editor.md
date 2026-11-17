---
title: Een familie bewerken
summary: Wijzig de parameters, formules en volumes van een familie, toon onderdelen via een Ja / Nee-parameter, snijd en verbind volumes, geef ze aansluitingen voor leidingen en kanalen, en bekijk het resultaat als het IFC dat wordt opgeslagen.
keywords: familie-editor, familie bewerken, parameter, parameters, formule, formules, zichtbaarheid, ja nee, volume, volumes, blok, extrusie, extruderen, omwentelen, uitvegen, profiel, boog, boolean, booleaans, snijden, samenvoegen, verschil, vereniging, handvat, handvatten, werkvlak, schets, nieuwe familie, aansluiting, aansluitingen, poort, poorten, leidingaansluiting, kanaalaansluiting, afvoer, watertoevoer
from: 1ab31c10
---

## De editor openen

Open een familie (de groep Families van de projectbrowser, of {{ui:Build}} › {{ui:Families…}}) en klik op {{ui:De familie bewerken}}. Om met niets te beginnen, klikt u op {{ui:Nieuwe familie}}: geef de naam op, zeg wat het is (een deur, een raam, meubel, een armatuur of iets anders) en, voor een deur of raam, welke startfamilie het plansymbool en het handvat levert. De editor opent met een familie met een paar parameters en één volume.

Een startfamilie bewerken houdt uw wijzigingen alleen in dit model. Andere modellen houden de startfamilie zoals ze is.

Er verandert niets in het model totdat u op {{ui:De familie opslaan}} klikt. De editor heeft een eigen ongedaan maken en opnieuw (de pijlknoppen naast de naam, of {{key:Mod+Z}} en {{key:Mod+Y}}); opslaan is één stap in het ongedaan maken van het model.

## Parameters

Het tabblad {{ui:Parameters}} toont de parameters van de familie: een naam, een soort en een standaardwaarde. De soorten: **Lengte** (millimeter), **Hoek** (graden), **Getal**, **Geheel getal**, **Ja / Nee**, **Pen** (1–16), en drie die woorden bevatten in plaats van getallen: **Tekst**, **Materiaal** (een van de materialen van het project) en **Vulling** (een plansvulling). Woorden worden niet in formules gebruikt; ze kleuren een volume (zijn **Materiaal**), vullen een deel van een symbool, of worden afgedrukt als `{Name}` in de tekst van een symbool. Het vakje **Per element** maakt van een parameter iets dat elk geplaatst element voor zichzelf instelt in plaats van zijn maat.

- Een **formule** laat een parameter andere volgen, bijvoorbeeld `Width / 30` of `if(Width > 1200, 2, 1)`. Lengtes in formules zijn millimeter, of u schrijft een eenheid: `3'`, `6in`, `50cm`.
- Een parameter hernoemen hernoemt hem in elke formule en elk veld dat hem gebruikt. Een parameter die nog in gebruik is, kan niet worden verwijderd.
- De **Materiaal** van een volume neemt de kleur van een materiaal van het project (of van een Materiaal-parameter), **Getoond bij** verbergt het bij grovere detailniveaus, en **Herhalen** maakt kopieën: een aantal (een getal of een geheel getal-parameter, 1 tot 200) en de stap ertussen in x, y en z. Een herhaald volume is een rij planken, staven of gaten; in een snede worden de kopieën samen gesneden.
- Een deur- of raamfamilie krijgt ook twee namen uit zijn wand: `WallThickness` en `Face` (1 of −1, de kant waarnaar de deur draait).

## Volumes

Het tabblad {{ui:Volumes}} toont de volumes. Voeg een doos, een extrusie, een omwenteling of een uitvegen toe:

| Volume | Wat u instelt |
|---|---|
| Doos | de twee hoeken: x0 tot x1, y0 tot y1, z0 tot z1 |
| Extrusie | een profiel op een werkvlak (plan, voorkant of zijkant), waar het vlak ligt, en een diepte |
| Omwenteling | een profiel, een as op het vlak, en een hoek tot 360° |
| Uitvegen | een pad van punten en een straal (een staaf of een rail) |

Elk getal kan een getypt getal zijn of een uitdrukking van de parameters. Elk volume heeft een kleur en **Getoond wanneer**: laat het leeg om het altijd te tonen, of noem een Ja / Nee-parameter (of schrijf een vergelijking zoals `Shelves >= 3`) om het alleen dan te tonen. Dat is een zichtbaarheidsparameter.

### Een profiel tekenen

Het profiel van een extrusie of omwenteling wordt getekend op zijn werkvlak onder het voorbeeld:

- Klik op het papier om een punt toe te voegen na het gekozen punt.
- Sleep een punt om het te verplaatsen. Punten snappen naar het raster; houd {{key:Shift}} ingedrukt om ze vrij te plaatsen.
- Klik op een klein vierkantje op een segment om daar een punt toe te voegen. {{key:Shift}}+klik erop om dat segment een boog te maken (klik nogmaals voor de andere kant, dan recht).
- Dubbelklik op een punt om het te verwijderen.

Holle punten worden door parameters ingesteld: wijzig ze in de tabel, niet door te slepen.

## Booleaanse bewerkingen

Het tabblad {{ui:Booleaanse bewerkingen}} snijdt het tweede volume uit het eerste, of voegt ze samen. Het resultaat van een booleaanse bewerking kan opnieuw gesneden of samengevoegd worden. Een volume dat in een booleaanse bewerking wordt gebruikt, wordt alleen als onderdeel daarvan getekend.

Wanneer het tweede volume door zijn Ja / Nee-parameter verborgen is, blijft het eerste zoals het is; wanneer het eerste verborgen is, is het resultaat verborgen.

## Plansymbool

Het tabblad {{ui:Plansymbool}} tekent wat het plan toont voor deze familie, in plaats van de snede van haar volumes: lijnen, rechthoeken, cirkels, bogen, veelhoeken en tekst, op de eigen assen van de familie. Elk onderdeel heeft een **pen** (1–16, een uitdrukking of een Pen-parameter), een **vulling** (geen, effen, diagonaal, gekruist, beton, isolatie, grond, of een Vulling-parameter), een **getoond door**-uitdrukking, een **snijbereik** in millimeter boven zijn basis (getekend in volle dikte als de snede van het plan erin ligt, dun eronder en gestreept erboven: een kast boven de snede toont gestreept), een detailniveau en een herhaling. Tekst mag parameters noemen als `{Name}`. **Het plan toont: De snede van de volumes** houdt het plan de volumes snijden terwijl het symbool in de familie blijft. Andere programma's lezen het symbool als de voetafdruk van de familie (lijnen en vormen; de tekst blijft in BimCraft).

## Families erin

Het tabblad {{ui:Families erin}} zet een andere familie in deze: een poot in een tafel, een handvat op een deur. Kies de familie, dan waar die komt (x, y, z), hoe ver ze gedraaid wordt (alleen kwartslagen: 0, 90, 180, 270), wanneer ze getoond wordt, en de waarden die ze krijgt, één per regel als `Height = Height - 40`. Het opslaan van de binnenste familie tekent deze opnieuw. Een familie die door een andere wordt vastgehouden, kan niet worden verwijderd; een familie kan zichzelf niet bevatten, ook niet via een andere, en het nesten stopt op vier niveaus.

## Hotspots

Een hotspot is een punt of een rand die u sleept om een parameter te wijzigen. Voeg er op het tabblad {{ui:Hotspots}} één toe, kies de as waarlangs hij sleept en de getalparameter die hij wijzigt, en schrijf zijn positie met dezelfde uitdrukkingen als de volumes. In het voorbeeld kiest u **Hotspots** onder de handvatten om ze te slepen. Op een geplaatst element in het plan (kies het met {{ui:Selecteren}}) tonen de x- en y-hotspots zich als grips: sleep er één en het element krijgt de maat die de hotspot daar zet, via alle formules ertussen; één Ongedaan maken zet het terug. Een hotspot kan geen aangestuurde parameter wijzigen, geen Ja / Nee en ook geen woord.

In de 3D-weergave tonen dezelfde hotspots zich als grips op het gekozen element, en de omhoog-en-omlaag-hotspots (as z) verschijnen daar ook, wat het plan niet kan tekenen. Kies het element, sleep een grip langs zijn as en laat los: het element krijgt de maat die de hotspot daar zet, als één stap die u ongedaan kunt maken. De grips zijn verborgen terwijl het snijkader aan staat, omdat het dezelfde grips gebruikt.

## Aansluitingen

Families die op een vloer staan (meubels, armaturen en andere) hebben een tabblad {{ui:Aansluitingen}}: de punten waar een leiding of een kanaal op het element aansluit, zoals bij de kraan en de afvoer van een wastafel. Klik op {{ui:Een aansluiting toevoegen}} en stel in:

- **Soort**: leiding of kanaal, en zijn **Systeem** (koud water, sanitaire afvoer, toevoerlucht…).
- **x**, **y** en **z**: waar het zit, op de eigen assen van de familie. Net als de getallen van een volume kan elk een getal of een formule van de parameters zijn, zodat de aansluiting met de maat meebeweegt.
- **Uitgangsrichting**: de richting waarin een leiding of kanaal eruit gaat, langs een van de assen van de familie (een afvoer onder een wastafel gaat **Omlaag**).
- **Maat (mm)**: de nominale maat van de leiding (DN) of de diameter van het ronde kanaal.
- **Stroming**: **In** voor een aansluiting die gevoed wordt (een kraan), **Uit** voor een die afvoert.

Het voorbeeld tekent elke aansluiting als een ring met een pijl in de uitgangsrichting. Deuren en ramen hebben geen aansluitingen.

Voor een sanitair element kiest u onder **Sanitair element** welk het is (toilet, wastafel, keukenspoelbak, douche, wasbak). De startobjecten zeggen dat al.

Elk element dat uit de familie is geplaatst, krijgt zijn aansluitingen als poorten in het IFC-bestand, en ze worden opnieuw gemaakt wanneer het element van maat verandert of de familie wordt opgeslagen. Programma's die IFC-systemen lezen, zien waar elke leiding of elk kanaal hoort.

## Het voorbeeld en zijn handvatten

Het voorbeeld is de familie geschreven als IFC, door dezelfde code die haar in het model opslaat, en daarna teruggetekend. Wat u ziet, is wat andere programma's krijgen. Eronder bepaalt **Getoonde maat** de parameterwaarden die het voorbeeld gebruikt.

**Handvatten** zijn stippen op het voorbeeld: **De maat** toont een handvat voor Breedte, Diepte en Hoogte; **Het gekozen volume** toont er één op elk vlak van het volume dat u koos. Sleep een handvat:

- op een vlak dat door een parameter wordt bepaald, verandert de getoonde maat (de formules van de familie blijven behouden);
- op een vlak dat door een getypt getal wordt bepaald, verandert het getal.

## Opslaan

{{ui:De familie opslaan}} controleert de familie, tekent daarna elke maat ervan opnieuw en maakt elk element ervan opnieuw, als één stap die u ongedaan kunt maken. Als een maat niet met de wijziging kan worden getekend (bijvoorbeeld omdat een volume bij die maat geen breedte zou hebben), wordt er niets opgeslagen en zegt de editor welke maat het is.

Als iemand anders dezelfde familie heeft opgeslagen terwijl uw editor openstond (in een Live TeamWork-sessie, of in een ander venster), weigert {{ui:De familie opslaan}} en zegt dat, in plaats van hun wijziging met de uwe te vervangen. Sluit de editor, open de familie opnieuw om hun wijziging te zien, en maak de uwe opnieuw.

:::note
De geometrie wordt opgeslagen als de eigen volumes van IFC: extrusies, omwentelingen, uitgeveegde schijven en resultaten van booleaanse bewerkingen. Niets wordt omgezet in een lijst met driehoeken, zodat bestanden klein blijven en andere programma's de vormen als vormen kunnen lezen. Profielen met bogen worden in IFC4 met bogen opgeslagen; IFC2X3 kent geen boogsegmenten in een profiel, dus daar worden de bogen als korte rechte stukken opgeslagen.
:::

Zie ook [Families en hun maten](topic:families).
