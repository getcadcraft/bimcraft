---
title: Wanden, vloeren en daken van constructie voorzien
summary: Genereer stijlen, regels, lateien, vloerbalken, sparren of dakspanten uit het model en bewaar ze erbij; ze worden opnieuw gemaakt wanneer de wanden, openingen, vloeren of het dak veranderen, en de staat Hout is de snijlijst.
keywords: TJI, I-balk, overspanningstabel vloerbalken, tabel laden, constructie, stijl, stijlen, regel, bovenregel, latei, koningsstijl, vulstijl, omranding, kortstijl, dorpel, blokkering, hoek, California-hoek, T-verbinding, vloerbalk, randbalk, spar, walmspar, dakdalspar, vulspar, nokbalk, plafondbalk, kepspanner, dakspant, hout, snijlijst, board feet, 2x4, 2x6, afstand, hart-op-hart
from: 76d0ffb5
---

## Wat u gaat doen

Bouw het gebouw op uit wat u heeft getekend. BimCraft legt de stijlen, regels en lateien in de wanden, de vloerbalken in de vloeren en de sparren (of dakspanten) in het dak, bepaalt hun afmetingen met gelabelde standaardtabellen, bewaart ze bij het model en maakt ze opnieuw wanneer wat ze dragen verandert. De staat **Hout** is de snijlijst.

## Constructie aanbrengen

1. Op een verdieping opent u {{ui:Build}} en kiest u {{ui:Constructie}}.
2. Kies de **afstand** (16" of 24" hart-op-hart; 400 of 600 mm), de **hoeken** (drie stijlen of California), voor daken **Sparren** of **Dakspanten**, en of wanden een rij **blokkering** op halve hoogte krijgen. Voor vloeren kiest u **Zaaghout** of **TJI (voorlopig)** en zet u de richting van de vloerbalken op automatisch, plan X of plan Y.
3. Klik op **Alle wanden voorzien van constructie**, of klik op een wand, een vloer of een dak (op de verdieping waarop het dak staat) om alleen dat deel van constructie te voorzien.

Zet **Constructie tonen** uit om elk constructiestuk te verbergen, zoals een laag. **Doorzichtig** verbergt de wanden, vloeren en daken die van constructie zijn voorzien, zodat u de constructie alleen kunt bekijken.

## Wat u krijgt

- **Wanden**: een onderregel (bij deuren doorgesneden), een dubbele bovenregel, stijlen op de indeling vanaf het begin van de wand, koningsstijlen en vulstijlen, en een latei boven elke deur en elk raam; kortstijlen boven lateien en onder ramen, een ruwe dorpel onder ramen, hoeken waar wanden samenkomen (de wand die doorloopt, neemt de hoekstijlen), twee steunstijlen waar een andere wand als T-verbinding aansluit, en blokkering tussen de stijlen.
- **Vloeren**: standaard vloerbalken over de korte kant van de vloer, of langs de gekozen plan-as; randbalken rondom de rand, en dubbele omranding en lateien rond een trapgat, met de vloerbalken erdoorheen korter afgesneden (korte vloerbalken). De TJI-modus kiest de kleinste vermelde reeks en hoogte die de gemeten vrije overspanning bij de gekozen afstand haalt.
- **Daken**: gewone sparren loodrecht op elke dakrand, vulsparren waar walmen en dakdalen ze snijden, walm- en dakdalsparren, nokbalken, plafondbalken op de regels en kepspanners, of eenvoudige dakspanten op de afstand, elk één stuk.

## Wijzigen

Selecteer een constructiestuk in de 3D-weergave of de modelboom. {{ui:Eigenschappen}} toont de constructie: wijzig de afstand, het type en de richting van de vloerbalken, de hoeken, de blokkering of de dakconstructie. Het verplaatsen van wanden, deuren en ramen, of het wijzigen van de vloer of het dak, maakt de constructie vanzelf opnieuw.

Om een stuk dat u bewust hebt geplaatst te behouden wanneer de constructie opnieuw wordt gemaakt, selecteert u het en kiest u **Dit onderdeel behouden wanneer de constructie opnieuw wordt gemaakt**. Een behouden stuk blijft waar het is; wanneer de constructie eromheen verandert, wordt het gemarkeerd zodat u het kunt controleren.

## TJI-vloeren uit een tabel die u laadt

BimCraft bevat geen overspanningstabellen van vloerbalkfabrikanten; die zijn van de fabrikant en veranderen met elke uitgave. Kies de constructie van een vloer, zet **Vloerbalken** op **TJI (voorlopig)** en kies **Een tabel laden…** in {{ui:Eigenschappen}}: een bestand in het formaat `cadcraft-tji-table`, JSON of CSV, dat u maakte uit de actuele overspanningstabellen van de fabrikant. Het noemt de fabrikant, het product en de uitgave, en waar de getallen vandaan komen, en het somt per belastinggeval (veranderlijke belasting, permanente belasting, doorbuigingsgrens, oplegglengte) de grootste vrije overspanning van elke reeks en hoogte bij elke afstand op.

- BimCraft neemt de **vrije overspanning** van de vloer, kiest de laagste hoogte en binnen die hoogte de reeks waarvan de vermelde overspanning die haalt voor de afstand en het belastinggeval die u koos, en construeert de vloer ermee. Valt de overspanning of de afstand buiten de tabel, dan meldt het dat en verandert het niets.
- De belastingen, doorbuigingsgrens, oplegglengte, de tabel en de zin "Voorlopige indelingsrichtlijn; de definitieve keuze vereist de tabellen van de fabrikant en de projectbelastingen" worden op de staat Hout afgedrukt, in het model geschreven met de constructie, en als opmerking vermeld in het paneel **Problemen**. Een tabel die als voorbeeld is gemarkeerd, zegt dat in een waarschuwing.
- Met de add-on **Bouwregelgeving** aan, leest de vloerbalkregel daarvan ook een geladen tabel; zonder tabel worden TJI-vloerbalken uit die controle gelaten, zoals voorheen.
- De tabel blijft in deze browser tot u hem wist of een andere laadt. Het bestand: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inch, voet, psf; of `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) en `rows` (`series`, `depth`, `spans`: voor elk geval-id de afstand en de grootste vrije overspanning, zoals `"16": "15-6"`). In CSV staan dezelfde gegevens als regels `# sleutel = waarde`, gevolgd door `series,depth,case,spacing,span`.
- Zonder geladen tabel wordt een TJI-indeling geweigerd en verandert er niets: **Laad een TJI-tabel: de tabellen van de fabrikant horen de fabrikant toe en zijn niet ingebouwd.** Een model dat met de oudere ingebouwde TJI-tabel (vóór deze wijziging) van constructie is voorzien, behoudt elke vloerbalk die het heeft; Eigenschappen en Problemen zeggen dat de tabel nodig is, en de vloer kan opnieuw van constructie worden voorzien zodra u er een laadt. Massieve zaaghouten vloerbalken werken zoals voorheen.

Dit is indelingsrichtlijn. De definitieve keuze van vloerbalken vereist de tabellen van de fabrikant, de projectbelastingen en de constructeur.

## De snijlijst

Kies in het paneel **Staten** de staat **Hout**: elk constructiestuk gegroepeerd op maat en op de voorraadlengte die u zou kopen (hele lengten van 2' vanaf 8'; stappen van 600 mm bij millimeters), met het aantal stukken en de board feet. **CSV** downloadt de lijst.

:::warning
Maten van dakspanten, vloerbalken, sparren en plafondbalken komen uit gelabelde standaardtabellen voor een typische woning van één of twee bouwlagen, geen constructieberekening. {{ui:Eigenschappen}} meldt wanneer een overspanning of een opening buiten zijn tabel valt. Een ontwerper of constructeur controleert overspanningen, belastingen en verbindingen.

TJI-indelingen gebruiken alleen een tabel die u laadt, die u maakt uit de actuele overspanningstabellen van de fabrikant; BimCraft levert er geen. De suggestie controleert geen oplegging, puntlasten, kragers, openingen, trapgatlateien of verbindingen, en de I-vorm van het model is schematisch.
:::

## Wat wordt opgeslagen

Elke van constructie voorziene wand, vloer of elk dak is een IFC-elementassemblage ("Framing") van IFC-staven (stijlen, regels, sparren, kepspanners, blokkering, dakspanten) en balken (lateien, vloerbalken, randbalken, nokbalken), elk met zijn maat, lengte en board feet.
