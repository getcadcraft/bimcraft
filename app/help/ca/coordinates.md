---
title: Coordenades a BimCraft
summary: La posició del punter al pla i a la vista 3D, el nivell on esteu, l'origen del projecte i el punt topogràfic del solar.
keywords: coordenades, on sóc, posició, punter, lectura, x y z, nivell, planta, origen del projecte, origen, punt base, punt topogràfic, solar, coordenades del mapa, est, nord, georeferència, unitats, ubicació
from: 84df5245
---

## Què farà

Sabreu on sou en un model d'un cop d'ull: en quin nivell dibuixeu, a quina distància és el punter de l'origen del projecte i on és el punt topogràfic del solar.

## On es mostren els números

- **Sobre la vista 3D** (a la part inferior dreta, al costat del cub de vista): moveu el punter sobre el model. La caixa mostra el nivell on és el punt i quant és per sobre del terra d'aquest nivell, i després la seva **X, Y i Z**. Sobre l'espai buit, llegeix el punt del terra del nivell més baix.
- **Al pla** (a la part inferior dreta, mentre {{ui:Dibuixa}} és activat): el nivell que mostra el pla i l'alçada del seu terra, i la **X i la Y** del punter mentre és sobre el pla.
- Quan el fitxer té una conversió de mapa (s'ha exportat amb coordenades del mapa), totes dues caixes afegeixen la **est i el nord** a la quadrícula del mapa, en les {{ui:Unitats}} que heu triat (sempre amb la unitat escrita al costat; els peus i polzades es mostren com a peus decimals). Un dibuix (DWG o DXF) manté les seves pròpies unitats: la lectura del punter les indica i mai no es converteix.

Cada X, Y i Z es mesura des de l'**origen del projecte**, en les {{ui:Unitats}} triades a la barra d'eines (peus i polzades, polzades, peus decimals, mil·límetres, centímetres o metres). La Y positiva apunta al nord del model, que no sempre és el nord geogràfic. Les coordenades est i nord del mapa segueixen la mateixa elecció (els peus i polzades es mostren com a peus decimals); quan la unitat del sistema del mapa és diferent de la que heu triat, s'indica entre parèntesis després dels números, per exemple *(peus US d'agrimensura)*, perquè un topògraf pugui veure en quina unitat està escrit el mateix sistema.

## Els dos marcadors

- **Origen del projecte** (un cercle vermell amb una creu): el punt 0, 0, 0 des del qual es mesura cada coordenada del model.
- **Punt topogràfic** (un cercle blau amb un triangle): el punt de referència del solar, aquell per al qual es donen la latitud, la longitud i l'elevació, o les coordenades del mapa. A la vista 3D, apunteu-hi el punter per llegir on és.

Quan el solar és sobre l'origen del projecte, com passa en un edifici nou dibuixat aquí, un sol marcador mostra tots dos. Feu clic al botó de la creu de qualsevol de les dues caixes per amagar o mostrar els marcadors; BimCraft recorda la vostra elecció en aquest navegador.

## Què hauríeu de veure

- Els números canvien quan es mou el punter, i la caixa del pla indica el nivell que heu triat a la llista de nivells.
- Els marcadors es queden quiets mentre orbiteu, desplaceu i feu zoom.

:::tip
Per llegir la latitud i la longitud d'un punt, useu {{ui:Mesura}} › {{ui:Ubicació}}: vegeu [Mesura distàncies, àrees de cares i ubicacions en 3D](topic:measure).
:::

:::touch
En una pantalla tàctil la caixa 3D no mostra res fins que useu un ratolí o un llapis: amb el dit, el que es mou és la vista.
:::
