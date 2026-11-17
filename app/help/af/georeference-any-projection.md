---
title: Georefereer met enige projeksie
summary: Vertel BimCraft in watter kaartstelsel 'n model se koördinate is, uit die volle EPSG-lys, enige UTM-sone, of 'n projeksie wat jy self definieer, en gebruik dit vir Ligging, kaartlae en puntwolke.
keywords: projeksie, koördinaatstelsel, crs, epsg, utm, utm-sone, eie projeksie, proj4, proj-string, prj, wkt, georefereer, georeferensie, kaartomskakeling, ifcprojectedcrs, my projeksies, breedtegraad, lengtegraad, oos-koördinaat, noord-koördinaat, lambert, gauss-kruger, state plane, nasionale rooster
from: 6894c1f2
---

Sommige planne word op 'n kaartstelsel geteken wat nie in 'n kort lys is nie: 'n UTM-sone, 'n nasionale rooster, of 'n projeksie wat iemand as 'n teksdefinisie neergeskryf het. {{ui:Meet}} › {{ui:Koördinaatstelsel…}} laat jou sê watter een die model gebruik.

## Kies die stelsel vir 'n model

1. Maak die model oop, kies {{ui:Meet}}, en dan {{ui:Koördinaatstelsel…}}.
2. Tik in die soekkassie. Enige van hierdie werk:
   - 'n EPSG-nommer: `32633` of `EPSG:2277`;
   - 'n UTM-sone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - woorde uit die naam: `lambert 93`, `mga zone 56`, `texas central`;
   - 'n projeksiedefinisie: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opsioneel met 'n naam voor dit (`My grid = +proj=…`);
   - die teks van 'n `.prj`-lêer, of gebruik {{ui:Laai 'n .prj-lêer…}}.
3. Kies 'n resultaat, en dan {{ui:Gebruik hierdie stelsel}}.

Die keuse word in die model gestoor ('n eiendomstel genoem `CadCraft_CRS` op die projek), so dit heropen saam met die model. Stoor die model om dit te behou. {{ui:Haal dit van die model af}} gaan terug na wat die lêer sê.

As jou definisie dieselfde koördinate as 'n gelyste EPSG-stelsel gee, sê BimCraft dit en gebruik daardie kode; wanneer verskeie gelyste stelsels dieselfde wiskunde deel, noem dit ook die ander.

## Eie projeksies

'n Definisie wat jy plak, of 'n `.prj` wat jy laai, kan met {{ui:Bewaar in My projeksies}} bewaar word. Die lys is op hierdie toestel (hierdie blaaier) en word weer aangebied die volgende keer as jy die kieser oopmaak.

## Wat dit gebruik

- {{ui:Meet}} › {{ui:Ligging}} draai 'n gekose punt om na breedte- en lengtegraad deur die model se stelsel. Dit het voorheen met 'n nota gestop wanneer die lêer sy kaartstelsel sonder 'n EPSG-kode genoem het; met 'n gestoorde keuse gee dit die antwoord.
- Die kaartlae onder die model gebruik dieselfde stelsel. 'n Puntwolk of 'n terreinlêer in 'n ander stelsel word die model s'n aangebied (sien hieronder).
- {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Ligging}} › {{ui:Kies 'n ander stelsel…}} stel wat {{ui:Ligging}} ook rapporteer: breedte- en lengtegraad in enige gelyste geografiese stelsel, of die oos- en noord-koördinate in enige geprojekteerde stelsel, naas die model se eie.

## 'n Model wat nog nie op die kaart is nie

As die lêer geen kaartomskakeling het nie, open die keuse van 'n stelsel {{ui:Plaas hierdie model op die kaart}}. Jy kan dit ook oopmaak vanaf {{ui:Meet}} › {{ui:Kaartoorsprong…}}.

1. Gee die model se oorsprong as oos- en noord-koördinate in die stelsel, of tik 'n breedte- en lengtegraad en kies {{ui:Skakel om na oos- en noord-koördinate}}.
2. Gee die rotasie na roosternoord (grade, linksom; 0 beteken die model se Y-as wys na roosternoord) en die hoogte van die oorsprong.
3. Die skaal begin by die eenheidsverskil tussen die model en die kaart (0.001 vir 'n millimeter-model op 'n meter-rooster). Verander dit net vir 'n gekombineerde grond-tot-rooster-faktor.
4. Kies {{ui:Plaas op die kaart}}. Een Ontdoen-stap skryf 'n IfcProjectedCRS en 'n IfcMapConversion (IFC4). Die model self beweeg nie.

'n IFC2X3-lêer het nie een van die twee entiteite nie. BimCraft skryf dieselfde getalle op die manier wat daardie standaard toelaat: die buildingSMART-eiendomstelle `ePSet_MapConversion` en `ePSet_ProjectedCRS` op die projek, die terrein se breedte- en lengtegraad, en ware noord. Die dialoog sê dit. Stoor die model om dit te behou.

## 'n Model wat alreeds op die kaart is

Wanneer die lêer hom reeds op die kaart plaas en jy 'n ander stelsel kies, vra BimCraft:

- {{ui:Verander net wat Ligging rapporteer}} hou die lêer se eie georeferensie en gebruik jou keuse vir {{ui:Ligging}}, die kaartlae en puntwolke (die model se getalle word dan gelees as in die nuwe stelsel).
- {{ui:Skuif die model na hierdie stelsel}} skryf die georeferensie oor: die oorsprong gaan deur die projeksie (oos, noord, hoogte, rotasie en skaal) en die IfcProjectedCRS (naam, datum, projeksie, sone, eenheid) word oorgeskryf, sodat die gestoorde IFC die nuwe stelsel noem. Die plek op die aarde bly dieselfde: die oorsprong behou sy breedte- en lengtegraad. Elemente binne die model verander nooit nie; net die georeferensie verander.

Die dialoog wys die ou en nuwe oorsprong voordat jy kies. Heen en terug skuif gee die oorsprong terug tot binne 'n millimeter.

## Puntwolke en terrein in 'n ander stelsel

'n Wolk of 'n opnamelêer dra sy eie stelsel (LAS, LAZ, E57, GeoTIFF) of geen. Wanneer dit van die model s'n verskil, bied BimCraft {{ui:Herprojekteer na die model se stelsel}} aan. Die punte word in groepe geskuif (in 'n werker wanneer daar baie is, sodat die bladsy bruikbaar bly), die lêer op jou rekenaar word nie aangeraak nie, en die statuslyn sê wat gedoen is. Maak die lêer weer oop om terug te gaan na sy eie stelsel. Vir 'n wolk wat reeds oop is, doen {{ui:Herprojekteer na die model…}} in die wolkbalk dieselfde.

As die lêer geen stelsel noem nie, vra BimCraft {{ui:In watter stelsel is hierdie lêer?}}: kies dit met {{ui:Kies die stelsel…}}, en die antwoord word vir daardie lêer op hierdie toestel onthou. {{ui:Behou die lêer se eie stelsel}} laat die punte soos hulle is.

## Wanneer iets benaderd is

Probleme word in die dialoog en in die Probleme-paneel gelys, nooit stilweg nie:

- 'n Plek buite die gebied waarvoor die stelsel gemaak is: die getalle werk, maar die vervorming groei.
- Datumverskuiwings wat 'n roosterlêer nodig het (NADCON, NTv2 en dergelike) is nie beskikbaar nie. Stelsels op 'n ander datum word geskuif met die roosterlose verskuiwing wat die EPSG-register lys, en die resultaat is benaderd tot die gegewe akkuraatheid, wat die boodskap in meter gee.
- 'n Punt wat nie geprojekteer kan word nie, word weggelaat en getel; 'n lêer oor die groottegrens word geweier met die grens gestel.

:::tip
Kaartkoördinate benodig 'n kaartomskakeling. 'n Lêer sonder een word met {{ui:Kaartoorsprong…}} op die kaart geplaas.
:::

:::note
Beweging tussen datums sonder 'n roosterlêer is goed tot 'n paar meter; die Ligging-resultaat sê hoeveel wanneer die katalogus dit weet.
:::
