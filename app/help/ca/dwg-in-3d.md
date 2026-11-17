---
title: Veure un dibuix DWG o DXF en 3D
summary: Canvieu l'espai model d'un dibuix a 3D per veure alçades, gruixos, cares 3D, malles i blocs, orbitar-hi al voltant, fer clic a un objecte per veure'n les propietats i veure el que encara no es dibuixa.
keywords: 3d, dwg, dxf, dibuix, espai model, òrbita, secció, tall, retall, selecció, seleccionar, propietats, atributs, identificador, alçada, gruix, extrusió, 3dface, polyface, malla, polilínia 3D, blocs, vistes, perspectiva, paral·lela, extensió, acis, sòlids
from: a0c6cd17
---

## Què hi fareu

Mireu l'espai model d'un dibuix en 3D. Les línies i les polilínies se situen a les seves alçades reals, els objectes amb gruix s'aixequen com a murs, i les cares 3D, les malles i els blocs 3D es mostren com a superfícies al voltant de les quals podeu orbitar. Els fulls segueixen en 2D.

## Passos

1. Obriu un DWG o un DXF. Vegeu [Veure un dibuix DWG o DXF](topic:view-dwg). S'obre en 3D tret que {{ui:Configuració}} › {{ui:BimCraft}} › **Els dibuixos s'obren en** digui {{ui:Model (2D)}}.
2. Des de 2D, feu clic a {{ui:3D}} a la barra de sobre del dibuix, o premeu {{key:3}}.
3. Espereu un moment la primera vegada: la línia d'estat diu "Construint el dibuix en 3D…", i després quantes línies i cares mostra.
4. Oriteu, desplaceu i feu zoom (vegeu la taula de sota).
5. Feu clic a una vista de la segona barra: {{ui:Iso}}, {{ui:Superior}}, {{ui:Inferior}}, {{ui:Davant}}, {{ui:Darrere}}, {{ui:Esquerra}} o {{ui:Dreta}}.
6. Feu clic a {{ui:Perspectiva}} per canviar entre una vista en perspectiva i una vista paral·lela.
7. Feu clic a {{ui:Extensió}} o premeu {{key:F}} per veure de nou tot el dibuix.
8. Torneu a fer clic a {{ui:3D}}, premeu {{key:3}}, o feu clic a {{ui:Model}} o a una pestanya de full per tornar a 2D.

## Què heu de veure

- L'espai model en 3D, Z amunt, amb els colors propis del dibuix. Les cares són un to més clares que les seves arestes.
- Les capes que apagueu a {{ui:Capes}} també desapareixen de la vista 3D.
- A la dreta: el nombre de línies i cares, la mida del dibuix en X, Y i Z, **Només a la vista 2D** i **Encara no dibuixat**.

## Tallar amb un pla de secció

Feu clic a {{ui:Secció}} a la barra 3D, o premeu {{key:X}}. La barra de sota funciona com per als models IFC (vegeu [Tallar un model IFC amb un pla de secció](topic:section-plane)): talleu des de {{ui:Superior}}, {{ui:Davant}} o {{ui:Lateral}}, arrossegueu o escriviu el desplaçament —en les unitats del propi dibuix aquí— i useu {{ui:Inverteix}} per mantenir l'altre costat. El que el pla retalla no es pot seleccionar. Tornar a 2D treu el tall.

## Veure les propietats d'un objecte

Feu clic a un objecte a la vista 3D. Pren el color de selecció i {{ui:Propietats}} mostra el que diu el fitxer sobre ell: el tipus, la capa, el color, el tipus de línia i l'identificador, i després les seves dades pròpies, com el punt inicial, final i la longitud d'una línia, el centre i el radi d'un cercle, els angles d'una cara 3D, o el bloc, el punt d'inserció, l'escala, la rotació i els valors d'atribut d'una referència de bloc.

- Una referència de bloc se selecciona com a conjunt, i també els blocs que conté.
- Un clic a uns quants píxels d'una línia selecciona la línia.
- Manteniu {{key:Mod}} premuda i feu clic per seleccionar més objectes, o per treure'n un; {{ui:Propietats}} aleshores els compta per tipus.
- {{key:Esc}}, o un clic a un espai buit, neteja la selecció.
- Els objectes de capes apagades no es poden seleccionar.

## Desplaçar-se

:::mouse
| Per | Feu això |
|---|---|
| Orbitar | Arrossegueu amb el botó central, o amb l'esquerre |
| Desplaçar | Arrossegueu amb el botó dret, o manteniu {{key:Shift}} premuda i arrossegueu |
| Zoom | Gireu la roda; fa zoom cap al que hi ha sota el punter |
| Veure-ho tot | {{ui:Extensió}} o {{key:F}} |
| Mirar des d'un costat | Feu clic a una cara, aresta o vèrtex del cub de vista a la cantonada inferior dreta |
:::

El cub de vista es pot canviar per una icona d'eixos, o amagar-lo, a {{ui:Configuració}}. Vegeu [Configuració de BimCraft](topic:settings).

:::mac mouse
En un trackpad, lliscau amb dos dits per orbitar, manteniu {{key:Shift}} premuda i lliscau per desplaçar, i pinceu per fer zoom.
:::

:::touch
Arrossegueu amb un dit per orbitar. Pinceu amb dos dits per fer zoom, i mogueu-los junts per desplaçar.
:::

## Què es dibuixa en 3D

| Al dibuix | En 3D |
|---|---|
| Línies, polilínies 3D | A les seves alçades reals |
| Polilínies, cercles, arcs, el·lipses | Al seu propi pla, a la seva cota, inclinades quan el dibuix les inclina |
| Gruix de línies, polilínies, cercles i arcs | Murs d'aquella alçada; els cercles es tanquen a dalt i a baix |
| Cares 3D, malles polyface, malles de polígons | Superfícies ombrejades amb les seves arestes visibles |
| Blocs | Col·locats, girats i escalats en 3D, també els blocs imbricats |
| Trames | Els seus contorns |
| Traç 2D simple | Pla, on es va dibuixar |

## Només a la vista 2D

El text, el text multilínia i els atributs visibles dels blocs es dibuixen en 3D, al seu propi pla i a la seva pròpia alçada, i un clic sobre ells els selecciona. Les polilínies amples mostren la seva amplada com una banda plana. Les línies de crida múltiples, les imatges i els patrons de trama es compten a **Només a la vista 2D**: vegeu-los a la pestanya {{ui:Model}} o als fulls.

## Encara no dibuixat

Els sòlids i superfícies emmagatzemats com a cossos ACIS (sòlids 3D, cossos, regions i superfícies) i les malles de subdivisió es llisten a **Encara no dibuixat** amb quants n'hi ha. S'omiten, no s'aproximen.

## Errors habituals

- **Tot es veu pla.** El dibuix és 2D: les seves línies no tenen alçada. Feu clic a {{ui:Davant}} per comprovar-ho; un dibuix pla es mostra com una línia.
- **Un model sòlid no mostra res.** Els sòlids fets amb un modelador de sòlids són cossos ACIS, llistats a **Encara no dibuixat**. Exporteu el model com a IFC o com a cares 3D des del programa que l'ha fet.
- **El dibuix és un petit conjunt al mig.** Alguna cosa lluny a l'espai model, com una còpia antiga d'un plànol, fa grans les extensions. Feu zoom amb la roda on vulgueu mirar.

## Següent

- [Treballar amb capes i fulls](topic:dwg-layers-sheets)
- [Tallar un model IFC amb un pla de secció](topic:section-plane)
