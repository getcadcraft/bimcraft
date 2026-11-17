---
title: Georeferentie met elke projectie
summary: Vertel BimCraft in welk kaartstelsel de coördinaten van een model zijn, uit de volledige EPSG-lijst, uit elke UTM-zone of uit een projectie die u zelf definieert, en gebruik dat voor Locatie, kaartlagen en puntenwolken.
keywords: projectie, coördinatenstelsel, crs, epsg, utm, utm-zone, eigen projectie, proj4, proj-string, prj, wkt, georeferentie, georefereren, kaartconversie, ifcprojectedcrs, mijn projecties, breedtegraad, lengtegraad, easting, northing, lambert, gauss-kruger, state plane, nationaal raster
from: 6894c1f2
---

Sommige plannen zijn getekend op een kaartstelsel dat niet in een korte lijst staat: een UTM-zone, een nationaal raster, of een projectie die iemand als tekstdefinitie heeft opgeschreven. {{ui:Meten}} › {{ui:Coördinatenstelsel…}} laat u kiezen welk stelsel het model gebruikt.

## Het stelsel voor een model kiezen

1. Open het model, kies {{ui:Meten}} en dan {{ui:Coördinatenstelsel…}}.
2. Typ in het zoekvak. Elk van deze werkt:
   - een EPSG-nummer: `32633` of `EPSG:2277`;
   - een UTM-zone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - woorden uit de naam: `lambert 93`, `mga zone 56`, `texas central`;
   - een projectiedefinitie: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, eventueel met een naam ervoor (`Mijn raster = +proj=…`);
   - de tekst van een `.prj`-bestand, of gebruik {{ui:Een .prj-bestand laden…}}.
3. Kies een resultaat, en dan {{ui:Dit stelsel gebruiken}}.

De keuze wordt in het model bewaard (een eigenschapsset met de naam `CadCraft_CRS` op het project), zodat ze opnieuw wordt geopend met het model. Sla het model op om het te bewaren. {{ui:Van het model verwijderen}} gaat terug naar wat het bestand zegt.

Als uw definitie dezelfde coördinaten geeft als een vermeld EPSG-stelsel, zegt BimCraft dat en gebruikt die code. Wanneer meerdere vermelde stelsels dezelfde wiskunde delen, noemt het ook de andere.

## Mijn projecties

Een definitie die u plakt of een `.prj` die u laadt, kan worden bewaard met {{ui:Bewaren bij Mijn projecties}}. De lijst staat op dit apparaat (deze browser) en wordt de volgende keer dat u de kiezer opent aangeboden.

## Waarvoor het wordt gebruikt

- {{ui:Meten}} › {{ui:Locatie}} zet een aangewezen punt om in breedte- en lengtegraad via het stelsel van het model. Vroeger stopte het met een opmerking wanneer het bestand zijn kaartstelsel noemde zonder EPSG-code; met een bewaarde keuze geeft het nu het antwoord.
- De kaartlagen onder het model gebruiken hetzelfde stelsel. Een puntenwolk of een terreinbestand in een ander stelsel krijgt het stelsel van het model aangeboden (zie hieronder).
- {{ui:Instellingen}} › {{ui:BimCraft}} › {{ui:Locatie}} › {{ui:Een ander stelsel kiezen…}} bepaalt wat {{ui:Locatie}} daarnaast ook meldt: breedte- en lengtegraad in elk vermeld geografisch stelsel, of de easting en northing in elk geprojecteerd stelsel, naast het eigen stelsel van het model.

## Een model dat nog niet op de kaart staat

Als het bestand geen kaartconversie heeft, opent het kiezen van een stelsel {{ui:Plaats dit model op de kaart}}. U kunt het ook openen via {{ui:Meten}} › {{ui:Oorsprong op de kaart…}}.

1. Geef de oorsprong van het model als eastings en northings in het stelsel, of typ een breedte- en lengtegraad en kies {{ui:Omzetten naar Easting en Northing}}.
2. Geef de draaiing naar het rasternoorden (in graden, tegen de klok in; 0 betekent dat de Y-as van het model naar het rasternoorden wijst) en de hoogte van de oorsprong.
3. De schaal begint met het eenhedenverschil tussen het model en de kaart (0.001 voor een millimetermodel op een meterraster). Wijzig hem alleen voor een gecombineerde factor van grond naar raster.
4. Kies {{ui:Op de kaart plaatsen}}. Eén stap ongedaan maken schrijft een IfcProjectedCRS en een IfcMapConversion (IFC4). Het model zelf verschuift niet.

Een IFC2X3-bestand heeft geen van beide entiteiten. BimCraft schrijft dan dezelfde getallen op de manier die die standaard toestaat: de buildingSMART-eigenschapssets `ePSet_MapConversion` en `ePSet_ProjectedCRS` op het project, de breedte- en lengtegraad van de locatie, en het ware noorden. Het dialoogvenster zegt dat. Sla het model op om het te bewaren.

## Een model dat al op de kaart staat

Wanneer het bestand zichzelf al op de kaart plaatst en u een ander stelsel kiest, vraagt BimCraft:

- {{ui:Alleen wijzigen wat Locatie aangeeft}} houdt de eigen georeferentie van het bestand en gebruikt uw keuze voor {{ui:Locatie}}, de kaartlagen en de puntenwolken (de getallen van het model worden dan gelezen als zijnde in het nieuwe stelsel).
- {{ui:Verplaats het model naar dit stelsel}} herschrijft de georeferentie: de oorsprong gaat door de projectie (eastings, northings, hoogte, draaiing en schaal) en de IfcProjectedCRS (naam, datum, projectie, zone, eenheid) wordt herschreven, zodat het opgeslagen IFC het nieuwe stelsel vermeldt. De plek op aarde blijft gelijk: de oorsprong houdt zijn breedte- en lengtegraad. Elementen binnen het model veranderen nooit; alleen de georeferentie verandert.

Het dialoogvenster toont de oude en de nieuwe oorsprong voordat u kiest. Heen en terug gaan zet de oorsprong terug binnen een millimeter.

## Puntenwolken en terrein in een ander stelsel

Een wolk of een opmetingsbestand draagt zijn eigen stelsel mee (LAS, LAZ, E57, GeoTIFF) of geen. Wanneer het afwijkt van dat van het model, biedt BimCraft {{ui:Herprojecteren naar het stelsel van het model}} aan. De punten worden in batches verplaatst (in een achtergrondproces wanneer er veel zijn, zodat de pagina bruikbaar blijft), het bestand op uw computer wordt niet aangeraakt, en de statusregel zegt wat er is gedaan. Open het bestand opnieuw om terug te gaan naar het eigen stelsel. Voor een wolk die al open is, doet {{ui:Herprojecteren naar het model…}} in de wolkbalk hetzelfde.

Als het bestand geen stelsel noemt, vraagt BimCraft {{ui:In welk stelsel staat dit bestand?}}: kies het met {{ui:Kies het stelsel…}} en het antwoord wordt voor dat bestand op dit apparaat onthouden. {{ui:Het eigen stelsel van het bestand behouden}} laat de punten zoals ze zijn.

## Wanneer iets benaderend is

Problemen worden vermeld in het dialoogvenster en in het paneel Problemen, nooit stilzwijgend:

- Een plek buiten het gebied waarvoor het stelsel is gemaakt: de getallen werken, maar de vervorming neemt toe.
- Datumverschuivingen die een rasterbestand nodig hebben (NADCON, NTv2 en dergelijke) zijn niet beschikbaar. Stelsels op een andere datum worden verplaatst met de rasterloze verschuiving die het EPSG-register vermeldt, en het resultaat is benaderend binnen de vermelde nauwkeurigheid, die het bericht in meters geeft.
- Een punt dat niet kan worden geprojecteerd, wordt weggelaten en geteld; een bestand boven de groottelimiet wordt geweigerd, met de vermelde limiet.

:::tip
Kaartcoördinaten hebben een kaartconversie nodig. Een bestand zonder kaartconversie wordt met {{ui:Oorsprong op de kaart…}} op de kaart geplaatst.
:::

:::note
Verplaatsen tussen datums zonder rasterbestand is goed tot enkele meters; het Locatie-resultaat zegt hoeveel het is wanneer de catalogus dat weet.
:::
