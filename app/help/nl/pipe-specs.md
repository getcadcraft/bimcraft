---
title: Leidingspecificaties, afsluiters, spjelden en families van fabrikanten
summary: Stel uw eigen leidingspecificaties in (maattabellen met materiaal, verbinding en ruwheid), die in het modelbestand worden bewaard; plaats afsluiters, een vuilvanger en spjelden op trajecten; en voeg de afsluiter of het apparaat van een fabrikant toe als familie met aansluitpunten.
keywords: leidingspecificatie, leidingspecificaties, leidingspecificatie piping, leidingklasse, aangepaste leiding, maattabel, buis, hygiënische buis, roestvrij staal, staat, buitendiameter, wanddikte, binnendiameter, ruwheid, drukklasse, csv, json, importeren, exporteren, rekenblad, norm, bpe, din, en 10357, en 10255, afsluiter, afsluiters, vlinderafsluiter, afregelafsluiter, regelafsluiter, vuilvanger, spjeld, volumeregelspjeld, brandspjeld, oem, fabrikant, maker, familie, families, aansluitpunten, aansluiting, step, obj, gltf, ifc, radiator, convector, paneelverwarming, luchtbehandelingskast, diffuser, rooster
from: bc2f7c4e
---

## Wat u gaat doen

Teken leiding volgens uw eigen specificatie in plaats van de ingebouwde staal-, koper- en kunststoftabellen, plaats afsluiters en spjelden op de trajecten, en plaats het model van een fabrikant met aansluitpunten waarop de leidingen aansluiten.

:::note
Een hulpmiddel voor tekenen en coördinatie. Een leidingspecificatie bevat de getallen die u typt of importeert: controleer elke tabel tegen uw projectnorm. Ingebouwde afsluiters, vuilvangers en spjelden zijn schematische vormen die naar het traject worden bepaald, niet de lengte van een fabrikant of van een afsluiternorm.
:::

## Een leidingspecificatie instellen

1. Zet {{ui:Tekenen}} aan, open {{ui:Build}} en kies {{ui:Leidingspecificaties}}. Dezelfde knop staat op de balk van het hulpmiddel Leiding.
2. Kies {{ui:Nieuw}}, of begin met een bestand, een plakbewerking of een startspecificatie (hieronder).
3. Typ de naam, de norm of referentie die wordt gevolgd, het materiaal en het type uiteinde of verbinding.
4. Typ één rij per maat: de naam van de maat, de buitendiameter en de wand, in millimeter. Typ de binnendiameter in plaats van de wand als u die hebt: de andere wordt ingevuld. DN, drukklasse en gewicht zijn optioneel.
5. Optioneel: de ruwheid in millimeter (de berekening van het drukverlies gebruikt die), een isolatiedikte waarmee nieuwe trajecten beginnen, de bochtstraal als factor van de buitendiameter, of de specificatie T-stukken en verlopen heeft, en een eigen kleur in 3D.
6. Vink de diensten aan waarvan nieuwe trajecten in deze specificatie moeten beginnen, bijvoorbeeld koelwater.
7. Kies {{ui:Opslaan in het model}}.

De specificaties worden opgeslagen in het modelbestand. Iedereen die het bestand opent, heeft ze, en {{ui:Ongedaan maken}} maakt een wijziging terug.

Een specificatie, of een van de maten ervan, kan niet worden verwijderd zolang er een traject in is getekend. Als u de getallen van een maat wijzigt, worden de trajecten in die maat opnieuw getekend.

## Een specificatie hergebruiken in een ander model

- {{ui:Exporteren als .json}} slaat de geselecteerde specificatie op als klein bestand; {{ui:Alles exporteren}} slaat elke specificatie van het model op. {{ui:Een bestand importeren}} leest ze weer in.
- {{ui:Exporteren als .csv}} slaat de maattabel op voor een rekenblad. {{ui:Een bestand importeren}} leest ook een `.csv`.
- {{ui:Rijen plakken}} neemt een tabel over die uit een rekenblad is gekopieerd. De eerste rij noemt de kolommen: `Size`, `OD` en `Wall` (of `ID`), en optioneel `DN`, `Pressure`, `Weight`. Eén rij per maat. Getallen zijn millimeter, tenzij u inch kiest of een cel de eenheid zelf aangeeft (`0.065 in`).

## Startspecificaties

{{ui:Een startspecificatie toevoegen}} voegt er een van deze toe aan uw model, als kopie die u kunt bewerken.

| Startspecificatie | Maten |
|---|---|
| ASME BPE tube | 1/4" tot 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 tot DN200 |
| EN 10255 steel tube, medium series | DN15 tot DN150 |
| EN 10255 steel tube, heavy series | DN15 tot DN125 |

Deze tabellen zijn de buitendiameters en wanden die twee of meer gepubliceerde leverancierspagina's voor de norm afdrukken en die met elkaar overeenkomen. Ze zijn niet uit de normen zelf overgenomen. Maten die maar op één pagina staan, zijn weggelaten. Elke startspecificatie toont zijn bronpagina's en is gemarkeerd met "controleer tegen uw projectnorm". Er is geen ruwheid, drukklasse of gewicht opgegeven.

## Een traject in een specificatie tekenen

1. Kies {{ui:Leiding}}. Een dienst die u in een specificatie hebt aangevinkt, begint erin. Voor elk ander traject kiest u de specificatie in de materiaallijst: specificaties staan na de ingebouwde materialen als "Spec: naam".
2. De maatlijst bevat nu alleen de maten van die specificatie. Kies een maat en teken het traject.

Om een traject later naar een specificatie te verplaatsen, selecteert u het en wijzigt u **Materiaal** in Eigenschappen. De maat wordt dan de dichtstbijzijnde maat van de specificatie op basis van de buitendiameter.

In het IFC-bestand draagt de leiding de naam, norm, het materiaal, de verbinding en de afmetingen van de specificatie (`CadCraft_PipeSpec` en `Pset_PipeSegmentTypeCommon`, op de leiding en op het type ervan).

De berekeningen voor dimensionering en drukverlies lezen de binnendiameter van de specificatie. Heeft de specificatie een ruwheid, dan wordt de wrijving van een traject daarmee berekend (Darcy-Weisbach); zonder ruwheid wordt de gebruikelijke standaardwaarde van de berekening gebruikt.

## Afsluiters, een vuilvanger en spjelden

1. Kies {{ui:Afsluiter}} en kies de soort op de balk: schuif-, kogel-, vlinder-, doorgangs-, terugslag-, afregel- of regelafsluiter, of een vuilvanger voor leidingen; een volumeregelspjeld of een brandspjeld voor kanalen.
2. Klik op het traject waar hij komt. Het traject wordt rond de afsluiter doorgesneden en beide zijden blijven verbonden. Hij krijgt de maat van het traject en beweegt mee met het traject.

Eigenschappen van het traject somt elk van die op, met {{ui:Verwijderen}}; het traject sluit zich weer.

De berekening van het drukverlies telt alleen een verliesfactor voor schuif-, kogel-, doorgangs- en terugslagafsluiters. De andere soorten, spjelden en families van fabrikanten geven daar geen verlies: houd er zelf rekening mee in uw eigen controle. Ze worden geteld in de staat **Fittingen en afsluiters** en in de opmeting, en naar IFC geschreven als afsluiters, een filter (de vuilvanger) en spjelden met twee verbonden aansluitpunten.

## Het model van een fabrikant als familie

1. Open {{ui:Build}} en kies {{ui:Families}}, en daarna {{ui:Model importeren}}. IFC-, STEP-, OBJ-, STL-, glTF- en bibliotheekitembestanden worden gelezen. Stel bij OBJ en STL eerst de eenheden en de opwaartse as van het bestand in.
2. Typ in het dialoogvenster voor de aansluitpunten de naam, de fabrikant en het modelnummer.
3. Kies of het **Op een traject** komt (een afsluiter, vuilvanger of spjeld) of **Apparatuur** is, en wat het als wordt geschreven.
4. Geef de aansluitpunten op. Elk heeft een naam, een leiding of kanaal, de dienst, de maat in millimeter (de buitendiameter van een leiding), de nominale maat zoals uw specificatie die noemt, het type uiteinde, de positie en de richting waarin het is gericht. {{ui:Op een vlak}} plaatst een aansluitpunt in het midden van een vlak van de doos van het model. Het kleine bovenaanzicht toont de aansluitpunten.
5. Kies {{ui:De familie in het model opslaan}}.

Een familie die op een traject komt, heeft precies twee aansluitpunten die van elkaar af wijzen, op één lijn. Kies haar in de lijst van het hulpmiddel Afsluiter en klik op een traject: ze wordt in haar eigen lengte geplaatst en de leidingen sluiten aan op haar aansluitpunten.

Een familie wordt nooit uitgerekt. Als haar aansluitpunten niet de maat van het traject hebben, krijgt u bij het plaatsen een melding, en {{ui:Aansluitingen controleren}} somt haar op.

Een apparatuurfamilie wordt geplaatst met {{ui:Apparatuur}}, soort **Familie van fabrikant**. Leidingen en kanalen klikken vast aan haar aansluitpunten.

{{ui:Downloaden als bibliotheekitem}} slaat een familie met haar aansluitpunten op als bestand dat u bij de Bibliotheek kunt indienen.

## Radiatoren en convectoren

{{ui:Apparatuur}} heeft ook **Radiator** en **Convector / paneelverwarming**: generieke lichamen met een aanvoer- en een retourverbinding voor verwarmingswater. Zie [MEP-apparatuur met aansluitpunten](topic:mep-equipment).
