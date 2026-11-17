---
title: Xeorreferenciar con calquera proxección
summary: Indique a BimCraft en que sistema de mapa están as coordenadas dun modelo, desde toda a lista EPSG, calquera zona UTM ou unha proxección que defina vostede, e úseo para Localización, as capas do mapa e as nubes de puntos.
keywords: proxección, sistema de coordenadas, crs, epsg, utm, zona utm, proxección personalizada, proj4, cadea proj, prj, wkt, xeorreferenciar, xeorreferenciación, conversión de mapa, ifcprojectedcrs, as miñas proxeccións, latitude, lonxitude, coordenada este, coordenada norte, lambert, gauss-kruger, state plane, rede nacional
from: 6894c1f2
---

Algúns planos debúxanse nun sistema de mapa que non está nunha lista curta: unha zona UTM, unha rede nacional, ou unha proxección que alguén escribiu como definición de texto. {{ui:Medir}} › {{ui:Sistema de coordenadas…}} permítelle dicir cal usa o modelo.

## Escoller o sistema dun modelo

1. Abra o modelo, escolla {{ui:Medir}} e despois {{ui:Sistema de coordenadas…}}.
2. Escriba na caixa de busca. Funciona calquera destes:
   - un número EPSG: `32633` ou `EPSG:2277`;
   - unha zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - palabras do nome: `lambert 93`, `mga zone 56`, `texas central`;
   - unha definición de proxección: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalmente cun nome diante (`A miña rede = +proj=…`);
   - o texto dun ficheiro `.prj`, ou use {{ui:Cargar un ficheiro .prj…}}.
3. Escolla un resultado e despois {{ui:Usar este sistema}}.

A elección gárdase no modelo (un conxunto de propiedades chamado `CadCraft_CRS` no proxecto), así que se reabre co modelo. Garde o modelo para conservala. {{ui:Quitar do modelo}} volve ao que indica o ficheiro.

Se a súa definición dá as mesmas coordenadas que un sistema EPSG da lista, BimCraft avísao e usa ese código; cando varios sistemas listados comparten as mesmas matemáticas, tamén nomea os outros.

## As miñas proxeccións

Unha definición que pegue ou un `.prj` que cargue pode gardarse con {{ui:Gardar en As miñas proxeccións}}. A lista está neste dispositivo (neste navegador) e ofrécese a próxima vez que abra o selector.

## Para que se usa

- {{ui:Medir}} › {{ui:Localización}} convirte un punto escollido en latitude e lonxitude a través do sistema do modelo. Antes paraba cunha nota cando o ficheiro nomeaba o seu sistema de mapa sen código EPSG; con un sistema gardado dá a resposta.
- As capas de mapa baixo o modelo usan o mesmo sistema. Unha nube de puntos ou un terreo noutro sistema ofrécese co do modelo (vexa máis abaixo).
- {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Localización}} › {{ui:Escoller outro sistema…}} define o que {{ui:Localización}} tamén informa: latitude e lonxitude en calquera sistema xeográfico listado, ou a coordenada este e norte en calquera sistema proxectado, ademais do propio do modelo.

## Un modelo que aínda non está no mapa

Se o ficheiro non ten conversión a mapa, ao escoller un sistema ábrese {{ui:Situar este modelo no mapa}}. Tamén pode abrila desde {{ui:Medir}} › {{ui:Orixe no mapa…}}.

1. Dea a orixe do modelo como coordenadas este e norte no sistema, ou escriba unha latitude e unha lonxitude e escolla {{ui:Converter a este e norte}}.
2. Dea a rotación cara ao norte da rede (en graos, no sentido antihorario; 0 significa que o eixe Y do modelo apunta ao norte da rede) e a altura da orixe.
3. A escala comeza coa diferenza de unidades entre o modelo e o mapa (0,001 para un modelo en milímetros sobre unha rede en metros). Cámbiea só para un factor combinado de terreo a rede.
4. Escolla {{ui:Situar no mapa}}. Un paso de desfacer escribe un IfcProjectedCRS e un IfcMapConversion (IFC4). O modelo en si non se move.

Un ficheiro IFC2X3 non ten nin unha entidade nin outra. BimCraft escribe os mesmos números da maneira que ese estándar permite: os conxuntos de propiedades buildingSMART `ePSet_MapConversion` e `ePSet_ProjectedCRS` no proxecto, a latitude e a lonxitude do emprazamento, e o norte verdadeiro. O diálogo indícao. Garde o modelo para conservalo.

## Un modelo que xa está no mapa

Cando o ficheiro xa se sitúa no mapa e escolle outro sistema, BimCraft pregunta:

- {{ui:Cambiar só o que informa Localización}} mantén a xeorreferenciación propia do ficheiro e usa a súa elección para {{ui:Localización}}, as capas do mapa e as nubes de puntos (os números do modelo léense entón como se estivesen no novo sistema).
- {{ui:Mover o modelo a este sistema}} reescribe a xeorreferenciación: a orixe pasa pola proxección (coordenadas este, norte, altura, rotación e escala) e o IfcProjectedCRS (nome, datum, proxección, zona, unidade) reescríbese, así que o IFC gardado indica o novo sistema. O lugar na Terra non cambia: a orixe conserva a súa latitude e lonxitude. Os elementos dentro do modelo nunca cambian; só a xeorreferenciación.

O diálogo amosa a orixe antiga e a nova antes de escoller. Ir e volver deixa a orixe a menos dun milímetro.

## Nubes de puntos e terreo noutro sistema

Unha nube ou un ficheiro de levantamento leva o seu propio sistema (LAS, LAZ, E57, GeoTIFF) ou ningún. Cando difire do modelo, BimCraft ofrece {{ui:Reproxectar no sistema do modelo}}. Os puntos móvense por lotes (nun worker cando son moitos, para que a páxina siga utilizable), o ficheiro no seu computador non se toca, e a liña de estado indica o que se fixo. Abra o ficheiro de novo para volver ao seu propio sistema. Para unha nube xa aberta, {{ui:Reproxectar ao modelo…}} na barra da nube fai o mesmo.

Se o ficheiro non nomea ningún sistema, BimCraft pregunta {{ui:En que sistema está este ficheiro?}}: escolla co {{ui:Escoller o sistema…}} e a resposta recórdase para ese ficheiro neste dispositivo. {{ui:Manter o sistema propio do ficheiro}} deixa os puntos como están.

## Cando algo é aproximado

Os problemas indícanse no diálogo e no panel Problemas, nunca en silencio:

- Un lugar fóra da zona para a que está feito o sistema: os números funcionan, pero a distorsión aumenta.
- Os cambios de datum que precisan un ficheiro de rede (NADCON, NTv2 e similares) non están dispoñibles. Os sistemas noutro datum móvense cun desprazamento sen rede que lista o rexistro EPSG, e o resultado é aproximado á precisión indicada, que a mensaxe dá en metros.
- Un punto que non se pode proxectar déixase fóra e cóntase; un ficheiro por riba do límite de tamaño recházase co límite indicado.

:::tip
As coordenadas de mapa precisan unha conversión a mapa. Un ficheiro sen ela sitúase no mapa con {{ui:Orixe no mapa…}}.
:::

:::note
Pasar entre datums sen ficheiro de rede é válido a uns poucos metros; o resultado de Localización indica canto, cando o catálogo o sabe.
:::
