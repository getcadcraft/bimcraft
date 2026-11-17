---
title: Mesurer les distances, aires de faces et positions en 3D
summary: Mesurer entre deux points d'un modèle IFC avec accrochage aux angles et aux arêtes, lire l'écart selon X, Y et Z, et mesurer l'aire d'une face plane.
keywords: mesure, mesurage, distance, longueur, cote, aire, aire de face, accrochage, angle, arête, mètre ruban, règle, dégagement, position, latitude, longitude, lat long, coordonnées, géoréférencement, conversion cartographique, EPSG, levé, coordonnées est et nord, WGS 84, référentiel
from: 5f430bba
---

## Ce que vous allez faire

Vérifiez un dégagement, une longueur de mur ou la dimension d'une face directement dans le modèle, sans ouvrir le logiciel de création.

## Étapes

1. Ouvrez un modèle IFC.
2. Cliquez sur {{ui:Mesurer}} dans la barre d'outils, ou appuyez sur {{key:M}}. Une barre s'ouvre en bas de la vue.
3. **Une distance :** avec {{ui:Distance}} choisi, cliquez le premier point, puis le second. Près d'un angle, le pointeur s'y accroche ; près d'une arête, il s'accroche à l'arête ; la petite étiquette à côté du pointeur l'indique. Chaque paire de clics donne une mesure.
4. **L'aire d'une face :** choisissez {{ui:Aire de face}} et cliquez sur une face. La face plane entière s'éclaire et son aire s'affiche.
5. **Lignes droites :** maintenez {{key:Shift}} pendant le choix du second point, ou appuyez sur {{ui:Droit}} dans la barre pour le garder actif. La ligne suit alors l'axe le plus proche du pointeur (en vue de dessus, selon X ou Y du plan ; dans les autres vues, selon X, Y ou Z), et l'étiquette du pointeur indique « droit selon un axe ». {{key:M}} lance et arrête toujours la mesure.
6. Cliquez sur {{ui:Effacer}} pour supprimer les mesures, ou sur {{ui:Terminé}} (ou {{key:Esc}}) pour arrêter de mesurer.

## Ce que vous devez voir

- Une ligne entre les deux points avec sa longueur inscrite, et dans la barre la longueur avec son écart selon X, Y et Z (selon les axes du modèle, Z vers le haut), le tout dans les {{ui:Unités}} choisies sur la barre d'outils.
- L'aire d'une face en mètres carrés, sur la face et dans la barre.
- Les étiquettes restent sur leurs mesures pendant que vous orbitez, faites un panoramique ou un zoom.
- Pendant la mesure, les clics ne sélectionnent pas d'éléments. Un plan de coupe ou une boîte de coupe découpe toujours le modèle, et vous pouvez mesurer ce qui est affiché, faces coupées comprises.

## Où se situe un point sur la Terre

Cliquez sur {{ui:Position}} dans la barre de mesure, puis cliquez un point du modèle (il s'accroche aux angles et aux arêtes, comme pour les distances). La barre affiche :

- la **latitude et la longitude**, en degrés décimaux et en degrés, minutes et secondes, en WGS 84 par défaut ;
- les **coordonnées cartographiques** (coordonnées est et nord, exprimées dans les {{ui:Unités}} choisies sur la barre d'outils) dans le système cartographique propre au modèle, par exemple `EPSG:28356` ;
- la **hauteur** et le référentiel altimétrique indiqué par le fichier, ainsi que le **référentiel propre** du fichier (par exemple GDA94).

{{ui:Copier}} place le tout dans le presse-papiers, sur une seule ligne. Vous pouvez changer le système de la latitude et de la longitude dans {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Position}} : WGS 84 (comme le GPS et les cartes en ligne), le référentiel propre du fichier, ou un autre référentiel courant comme ETRS89 ou NAD83.

Cela nécessite un modèle géoréférencé : un modèle exporté avec des coordonnées cartographiques (une conversion cartographique vers un système projeté avec un code EPSG). Un modèle qui n'a qu'une latitude et une longitude de site reçoit une position approchée, calculée à partir du point du site et de son nord géographique, et la barre l'indique. Lorsque plusieurs modèles sont ouverts, chaque point utilise le géoréférencement de son propre modèle.

:::note
Le passage d'un référentiel à un autre (par exemple de GDA94 à WGS 84) se fait sans fichiers de grille ; il est donc précis à quelques mètres près, et la barre d'état indique la précision. Les coordonnées cartographiques elles-mêmes sont exactes.
:::

## Erreurs courantes

- **« … n'a pas de géoréférencement ».** Le fichier n'a ni conversion cartographique ni latitude et longitude de site. Exportez-le à nouveau avec son système de coordonnées défini (coordonnées partagées ou point de levé dans le logiciel de création).

- **Coordonnées cartographiques, mais pas de latitude ni de longitude.** Le fichier désigne son système cartographique sans code EPSG, ou avec un code absent de la liste ; la barre d'état indique lequel.

- **Le point tombe sur la face, et non sur l'angle.** L'accrochage regarde l'élément sous le pointeur. Rapprochez-vous de l'angle, ou faites un zoom.
- **L'aire est plus petite que prévu.** Les ouvertures sont exclues, et une face qui se courbe compte pour plusieurs faces : cliquez chacune d'elles.
- **{{key:Esc}} a arrêté la mesure.** Le premier {{key:Esc}} abandonne une distance à moitié tracée ; le second arrête la mesure.

## Suite

- [Couper un modèle IFC avec un plan de coupe](topic:section-plane)
- [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate)
