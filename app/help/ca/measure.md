---
title: Mesura distàncies, àrees de cara i ubicacions en 3D
summary: Mesura entre dos punts d'un model IFC amb ajust als cantons i les arestes, llegeix la diferència en X, Y i Z, i mesura l'àrea d'una cara plana.
keywords: mesura, mesurament, distància, longitud, cota, àrea, àrea de cara, ajust, cantó, aresta, cinta, regle, separació lliure, ubicació, latitud, longitud, coordenades, georeferència, conversió de mapa, EPSG, topografia, coordenades est, coordenades nord, WGS 84, datum
from: 5f430bba
---

## Què faràs

Comprovar una separació lliure, la longitud d'un mur o la mida d'una cara directament del model, sense obrir el programa d'autoria.

## Passos

1. Obre un model IFC.
2. Fes clic a {{ui:Mesura}} a la barra d'eines, o prem {{key:M}}. S'obre una barra a la part inferior de la vista.
3. **Una distància:** amb {{ui:Distància}} triada, fes clic al primer punt i després al segon. A prop d'un cantó, el punter s'ajusta a ell; a prop d'una aresta, s'ajusta a l'aresta. L'etiqueta petita al punter indica quin és. Cada parell de clics fa una mesura.
4. **L'àrea d'una cara:** tria {{ui:Àrea de cara}} i fes clic a una cara. Tota la cara plana s'il·lumina i es mostra la seva àrea.
5. **Línies rectes:** mantén {{key:Shift}} mentre tries el segon punt, o prem {{ui:Recta}} a la barra per mantenir-la. La línia llavors segueix l'eix més proper al punter (en una vista superior, segons X o Y de la planta; en altres vistes, segons X, Y o Z), i l'etiqueta del punter diu "recta segons un eix". {{key:M}} encara inicia i atura Mesura.
6. Fes clic a {{ui:Neteja}} per treure les mesures, o a {{ui:Fet}} (o {{key:Esc}}) per deixar de mesurar.

## Què hauries de veure

- Una línia entre els dos punts amb la seva longitud, i a la barra la longitud amb el recorregut en X, Y i Z (en els eixos del model, Z amunt), tot en les {{ui:Unitats}} triades a la barra d'eines.
- L'àrea d'una cara en metres quadrats, a la cara i a la barra.
- Les etiquetes es mantenen sobre les seves mesures mentre orbites, desplaces i fas zoom.
- Mentre mesures, els clics no trien elements. Un pla o una caixa de secció continuen tallant el model, i pots mesurar el que mostra, inclosos els talls.

## On és un punt a la Terra

Fes clic a {{ui:Ubicació}} a la barra de mesura i després fes clic a un punt del model (s'ajusta a cantons i arestes com en les distàncies). La barra mostra:

- la **latitud i la longitud**, en graus decimals i en graus, minuts i segons, en WGS 84 per començar;
- les **coordenades de mapa** (est i nord, escrites en les {{ui:Unitats}} triades a la barra d'eines) en el sistema de mapa propi del model, per exemple `EPSG:28356`;
- l'**alçada** i el datum vertical que indica el fitxer, i el **datum propi** del fitxer (per exemple GDA94).

{{ui:Copia}} posa tot a la memòria en una sola línia. Canvia el sistema en què són la latitud i la longitud a {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Ubicació}}: WGS 84 (com el GPS i els mapes web), el datum propi del fitxer, o un altre de comú com ETRS89 o NAD83.

Cal un model georeferenciat: un exportat amb coordenades de mapa (una conversió de mapa a un sistema projectat amb un codi EPSG). Un model que només té latitud i longitud de l'emplaçament rep una posició aproximada, calculada a partir del punt de l'emplaçament i del seu nord verdader, i la barra ho indica. Amb diversos models oberts, cada punt utilitza la georeferència del seu propi model.

:::note
Canviar entre datums (per exemple, de GDA94 a WGS 84) es fa sense fitxers de graella, així que és bo fins a pocs metres; la línia d'estat indica quina és la precisió. Les coordenades de mapa en si són exactes.
:::

## Errors habituals

- **"…no té georeferència".** El fitxer no té conversió de mapa ni latitud i longitud de l'emplaçament. Exporta'l de nou amb el seu sistema de coordenades definit (coordenades compartides o punt topogràfic a l'eina d'autoria).
- **Coordenades de mapa però sense latitud ni longitud.** El fitxer indica el seu sistema de mapa sense codi EPSG, o amb un que no és a la llista; la línia d'estat indica quin.

- **El punt cau sobre la cara, no sobre el cantó.** L'ajust mira l'element sota el punter. Acosta't més al cantó, o fes zoom.
- **L'àrea és més petita de l'esperat.** Les obertures no es comptabilitzen, i una cara que es doblega són diverses cares: fes clic a cadascuna.
- **{{key:Esc}} va aturar la mesura.** El primer {{key:Esc}} descarta una distància a mitges; el segon atura.

## Següent

- [Talla un model IFC amb un pla de secció](topic:section-plane)
- [Amaga, aïlla i veu a través d'elements](topic:hide-and-isolate)
