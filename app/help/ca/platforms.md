---
title: Navegadors, dispositius i memòria
summary: Què canvia a BimCraft entre Chrome, Edge, Firefox i Safari, a Mac, Windows i Linux, amb un ratolí, un trackpad o pantalla tàctil, i quin fitxer pot admetre segons la seva mida.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tauleta, telèfon, tàctil, trackpad, memòria, fitxers grans, webgl, rendiment
from: fd8acba1
---

BimCraft funciona en les versions actuals de Chrome, Edge, Firefox i Safari, a Mac, Windows i Linux. La vista 3D necessita WebGL, que tots els navegadors actuals tenen. Vegeu [Navegadors i ordinadors](common:browsers) per al que necessiten les aplicacions en general.

## Obrir una carpeta

| Navegador | {{ui:Obre una carpeta}} fa això | Arrossegar una carpeta | {{ui:Carpetes recents}} |
|---|---|---|---|
| Chrome, Edge | El selector de carpetes del navegador, després "Permet que el lloc vegi els fitxers?": feu clic a **Veure fitxers** | S'obre sense cap avís | Sí, per a les carpetes triades o arrossegades |
| Firefox | El selector de carpetes del sistema | S'obre sense cap avís | No |
| Safari | El selector de carpetes del sistema, amb un botó **Puja** (no es puja res) | S'obre sense cap avís | No |

Darrere d'això: Chrome i Edge fan servir el selector de l'API File System Access i poden recordar la carpeta. Firefox i Safari fan servir el selector de carpetes més antic, que lliura tots els fitxers de la carpeta alhora i no es pot recordar. Una carpeta arrossegada es llegeix entrada per entrada en tots els navegadors.

:::chromium
Brave i alguns altres navegadors basats en Chromium desactiven el selector de carpetes. BimCraft llavors fa servir el selector de carpetes del sistema, i el navegador pot preguntar "Puja *n* fitxers a aquest lloc?". No es puja res; els fitxers només van a la pestanya. Arrossegar la carpeta evita la pregunta.
:::

## Mac, Windows i Linux

- Les dreceres {{key:Mod+S}} i {{key:Mod+Z}} són Command en un Mac, i Ctrl a Windows i Linux.
- {{key:Ctrl+Shift+F}} (modes de pantalla) és Control en totes les plataformes, inclòs un Mac.
- Els diàlegs de fitxers i la carpeta de baixades són els del vostre sistema.

## Ratolí, trackpad i tàctil

| Entrada | Vista 3D | Dibuix 2D |
|---|---|---|
| Ratolí | Arrossegar amb el botó esquerre orbita, amb el dret desplaça, la roda fa zoom, el clic tria | Qualsevol arrossegament desplaça, la roda fa zoom, el doble clic ajusta |
| Trackpad | Clic i arrossegar orbita; {{key:Shift}} o {{key:Mod}} i arrossegar desplaça; el desplaçament amb dos dits o el pessic fan zoom | Clic i arrossegar desplaça; el desplaçament amb dos dits o el pessic fan zoom |
| Tàctil | Un dit orbita, dos dits pessiguen i desplacen, tocar tria | Un dit desplaça; encara no hi ha zoom amb pessic; toqueu {{ui:Ajusta}} |

En un trackpad de Mac, el clic dret és un clic amb dos dits (o clic amb Control). Vegeu [Tecles, ratolins i trackpads](common:keys).

Les tauletes i els telèfons poden obrir fitxers individuals i mirar-los, però la pantalla és petita, molts navegadors mòbils no poden triar carpetes, i els models grans potser no hi caben a la memòria. Un ordinador funciona millor.

## Fitxers grans i memòria

Tot el que BimCraft llegeix viu a la memòria de la pestanya del navegador. Quanta memòria pot fer servir una pestanya depèn més del navegador i de l'ordinador que de BimCraft.

| Fitxer | Què es llegeix | Què esperar |
|---|---|---|
| IFC | El fitxer sencer, més la geometria 3D construïda a partir d'ell | Depèn de l'ordinador i del navegador; un model de diversos centenars de megabytes pot ser massa per a un portàtil. Per sobre de 1.5 milions de triangles, les arestes es desactiven |
| Fitxers de projecte i de famílies | Uns 40 KB a 100 KB, sigui quina sigui la mida | Fins i tot els models centrals molt grans s'obren en un moment, també des d'una unitat de xarxa |
| DWG i DXF | El fitxer sencer | Els dibuixos molt grans mostren "Aquest dibuix és molt gran; només es mostra una part." |
| Carpetes | La llista de fitxers, més uns pocs kilobytes per model | Fins a 20,000 fitxers |

Si una pestanya es queda sense memòria, el navegador mostra la seva pròpia pàgina d'error (com «Aw, Snap!» a Chrome). Tanqueu altres pestanyes, torneu a carregar BimCraft i proveu de nou, o useu un ordinador amb més memòria.

## Relacionat

- [En línia i fora de línia](topic:online-offline)
- [Resolució de problemes](topic:troubleshooting)
