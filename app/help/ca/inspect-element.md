---
title: Tria un element i llegeix-ne les propietats
summary: Feu clic a qualsevol element del model 3D per ressaltar-lo i llegir-ne el nom, el tipus, l'etiqueta, el GlobalId, els conjunts de propietats i les quantitats.
keywords: propietats, triar, clic, element, paràmetres, conjunts de propietats, pset, quantitats, globalid, guid, tipus, inspeccionar
from: 43b80aa8
---

## Què cal fer

Trieu elements en un model IFC i llegiu tot el que diu el fitxer sobre ells: atributs, conjunts de propietats, propietats de tipus i quantitats.

## Passos

1. Obriu un model IFC.
2. Feu clic a un element, per exemple una porta. Feu clic sense arrossegar: un arrossegament de més de pocs píxels orbita en lloc de triar.
3. Mireu l'element: queda ressaltat en blau.
4. Mireu el tauler {{ui:Propietats}} a la dreta. A la part superior hi ha la classe de l'element (com "Door" o "WallStandardCase") i el seu nom.
5. Llegiu el primer bloc: **Nom**, **Tipus**, **Tipus d'objecte**, **Etiqueta**, **Descripció**, **GlobalId** i **Línia**.
6. Desplaceu-vos cap avall fins als conjunts de propietats. Els tres primers estan oberts; feu clic al nom de qualsevol altre conjunt per obrir-lo.
7. Feu clic a un altre element per canviar-hi.
8. Premeu {{key:Esc}}, o feu clic al fons buit, per treure la selecció.

## Què hauríeu de veure

- L'element ressaltat i les seves dades a la dreta.
- Els conjunts de propietats en ordre alfabètic. Els conjunts que venen del **tipus** de l'element tenen " (tipus)" després del seu nom i la nota "Propietat de tipus: un canvi aquí s'aplica a cada element d'aquest tipus."
- Els conjunts de quantitats (com les longituds, àrees i volums) llistats amb els altres conjunts. Les quantitats són només de lectura.
- Els valors que podeu canviar semblen botons. [Canvia les propietats IFC i desa una còpia editada](topic:edit-ifc-properties) mostra com.

[Camps del tauler de propietats](topic:properties-panel) explica cada camp.

## Com accedir a elements amagats

1. Per arribar a alguna cosa de dins de l'edifici, desmarqueu les plantes que hi ha per sobre a la llista {{ui:Plantes}}.
2. Per arribar a un mur darrere d'un volum de sala, desactiveu {{ui:Espais}}.
3. Feu clic a l'element.

## Errors habituals

- **Arrossegar una mica mentre feu clic.** BimCraft ho tracta com una òrbita i no tria. Mantingueu el ratolí quiet.
- **Esperar unitats al costat dels nombres.** Els valors es mostren tal com estan desats al fitxer, arrodonits a quatre decimals, sense símbol d'unitat. Les longituds en una exportació mètrica solen ser mil·límetres o metres; comproveu la configuració de l'exportador.
- **Buscar un paràmetre pel seu nom habitual.** Els exportadors reanomenen i reagrupen els paràmetres en conjunts de propietats IFC com `Pset_WallCommon`. Mireu cada conjunt; els paràmetres personalitzats sovint són en un conjunt amb el nom del programa exportador o de la vostra empresa.
- **Esperar una caixa de cerca.** Feu clic per triar un element; {{key:Mod}}+clic o {{key:Shift}}+clic en tria més, i {{key:Mod+A}} tria cada element mostrat. La llista {{ui:Elements}} de l'esquerra només compta els elements per classe; no es pot fer clic.
- **Triar a la targeta d'un fitxer de projecte.** Una targeta de fitxer no té elements per triar: "Les propietats dels elements necessiten el model 3D. Obriu una exportació IFC d'aquest fitxer per veure-les."
