---
title: Georeferència amb qualsevol projecció
summary: Digueu a BimCraft en quin sistema de mapa estan les coordenades d'un model, des de la llista EPSG completa, de qualsevol zona UTM o d'una projecció que definiu vosaltres, i useu-ho per a Ubicació, les capes de mapa i els núvols de punts.
keywords: projecció, sistema de coordenades, crs, epsg, utm, zona utm, projecció personalitzada, proj4, cadena proj, prj, wkt, georeferència, georeferenciació, conversió de mapa, ifcprojectedcrs, les meves projeccions, latitud, longitud, est, nord, lambert, gauss-kruger, pla estatal, quadrícula nacional
from: 6894c1f2
---

Alguns plànols es dibuixen en un sistema de mapa que no és a la llista curta: una zona UTM, una quadrícula nacional, o una projecció que algú va escriure com a definició de text. {{ui:Mesura}} › {{ui:Sistema de coordenades…}} us permet dir quin sistema usa el model.

## Trieu el sistema d'un model

1. Obriu el model, trieu {{ui:Mesura}} i després {{ui:Sistema de coordenades…}}.
2. Escriviu a la casella de cerca. Funciona qualsevol d'aquests:
   - un número EPSG: `32633` o `EPSG:2277`;
   - una zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - paraules del nom: `lambert 93`, `mga zone 56`, `texas central`;
   - una definició de projecció: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalment amb un nom davant (`La meva quadrícula = +proj=…`);
   - el text d'un fitxer `.prj`, o useu {{ui:Carrega un fitxer .prj…}}.
3. Trieu un resultat i després {{ui:Usa aquest sistema}}.

L'elecció es desa al model (un conjunt de propietats anomenat `CadCraft_CRS` al projecte), de manera que es reobre amb el model. Deseu el model per conservar-la. {{ui:Treu-lo del model}} torna al que diu el fitxer.

Si la vostra definició dona les mateixes coordenades que un sistema EPSG de la llista, BimCraft ho diu i usa aquell codi; quan diversos sistemes de la llista comparteixen les mateixes matemàtiques, n'anomena també els altres.

## Les meves projeccions

Una definició que enganxeu o un `.prj` que carregueu es pot guardar amb {{ui:Desa a Les meves projeccions}}. La llista és en aquest dispositiu (aquest navegador) i s'ofereix la pròxima vegada que obriu el selector.

## Per a què serveix

- {{ui:Mesura}} › {{ui:Ubicació}} converteix un punt triat en latitud i longitud a través del sistema del model. Abans s'aturava amb una nota quan el fitxer indicava el seu sistema de mapa sense codi EPSG; amb una elecció desada, en dona la resposta.
- Les capes de mapa sota el model usen el mateix sistema. Un núvol de punts o un fitxer de terreny en un altre sistema s'ofereix amb el del model (vegeu més avall).
- {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Ubicació}} › {{ui:Trieu un altre sistema…}} fixa el que {{ui:Ubicació}} també informa, a més del propi del model: latitud i longitud en qualsevol sistema geogràfic de la llista, o l'est i el nord en qualsevol de projectat.

## Un model que encara no és al mapa

Si el fitxer no té conversió de mapa, en triar un sistema s'obre {{ui:Col·loca aquest model al mapa}}. També es pot obrir des de {{ui:Mesura}} › {{ui:Origen al mapa…}}.

1. Doneu l'origen del model com a est i nord en el sistema, o escriviu una latitud i una longitud i trieu {{ui:Converteix a est i nord}}.
2. Doneu la rotació cap al nord de la quadrícula (graus, en sentit antihorari; 0 vol dir que l'eix Y del model apunta al nord de la quadrícula) i l'alçada de l'origen.
3. L'escala comença amb la diferència d'unitats entre el model i el mapa (0.001 per a un model en mil·límetres sobre una quadrícula en metres). Canvieu-la només per a un factor combinat de terra a quadrícula.
4. Trieu {{ui:Col·loca al mapa}}. Un sol pas per desfer escriu un IfcProjectedCRS i un IfcMapConversion (IFC4). El model en si no es mou.

Un fitxer IFC2X3 no té cap de les dues entitats. BimCraft escriu els mateixos números de la manera que permet aquest estàndard: els conjunts de propietats de buildingSMART `ePSet_MapConversion` i `ePSet_ProjectedCRS` al projecte, la latitud i la longitud del lloc, i el nord verdader. El diàleg ho indica. Deseu el model per conservar-ho.

## Un model que ja és al mapa

Quan el fitxer ja es col·loca al mapa i en trieu un altre sistema, BimCraft pregunta:

- {{ui:Canvia només el que informa Ubicació}} manté la georeferència pròpia del fitxer i usa la vostra elecció per a {{ui:Ubicació}}, les capes de mapa i els núvols de punts (els números del model llavors es llegeixen com si estiguessin en el nou sistema).
- {{ui:Mou el model a aquest sistema}} reescriu la georeferència: l'origen passa per la projecció (est, nord, alçada, rotació i escala) i el IfcProjectedCRS (nom, datum, projecció, zona, unitat) es reescriu, de manera que l'IFC desat diu el nou sistema. El lloc a la Terra es manté igual: l'origen conserva la seva latitud i longitud. Els elements dins del model no canvien mai; només la georeferència.

El diàleg mostra l'origen antic i el nou abans que trieu. Anar-hi i tornar-hi retorna l'origen a menys d'un mil·límetre.

## Núvols de punts i terreny en un altre sistema

Un núvol o un fitxer de topografia porta el seu propi sistema (LAS, LAZ, E57, GeoTIFF) o no en porta cap. Quan és diferent del del model, BimCraft ofereix {{ui:Reprojecta al sistema del model}}. Els punts es mouen per lots (en segon pla quan n'hi ha molts, perquè la pàgina segueixi sent usable), el fitxer del vostre ordinador no es toca, i la línia d'estat diu què s'ha fet. Torneu a obrir el fitxer per tornar al seu propi sistema. Per a un núvol ja obert, {{ui:Reprojecta al model…}} a la barra del núvol fa el mateix.

Si el fitxer no indica cap sistema, BimCraft pregunta {{ui:En quin sistema és aquest fitxer?}}: trieu-lo amb {{ui:Trieu el sistema…}} i la resposta es recorda per a aquest fitxer en aquest dispositiu. {{ui:Manté el sistema propi del fitxer}} deixa els punts tal com són.

## Quan alguna cosa és aproximada

Els problemes es llisten al diàleg i al panell de Problemes, mai en silenci:

- Un lloc fora de l'àrea per a la qual està fet el sistema: els números funcionen, però la distorsió creix.
- Els canvis de datum que necessiten un fitxer de graella (NADCON, NTv2 i similars) no estan disponibles. Els sistemes en un datum diferent es mouen amb el canvi sense graella que indica el registre EPSG, i el resultat és aproximat a la precisió indicada, que el missatge dona en metres.
- Un punt que no es pot projectar es deixa fora i es compta; un fitxer per sobre del límit de mida es rebutja, amb el límit indicat.

:::tip
Les coordenades de mapa necessiten una conversió de mapa. Un fitxer sense conversió es col·loca al mapa amb {{ui:Origen al mapa…}}.
:::

:::note
Els desplaçaments entre datums sense fitxer de graella són bons fins a uns quants metres; el resultat d'Ubicació indica quant quan el catàleg ho sap.
:::
