---
title: Unités split, VRF et ventilo-convecteurs
summary: Placez les unités intérieures murales, cassettes et gainables, les unités extérieures split et VRF, les raccords refnet et les ventilo-convecteurs à 2 ou 4 tuyaux, chacun avec ses raccordements frigorifiques, d'eau, de condensats et de gaines, puis dessinez les liaisons frigorifiques entre elles, dimensionnées à partir d'un tableau que vous pouvez modifier.
keywords: split, mini split, minisplit, multi split, vrf, vrv, débit de réfrigérant variable, pompe à chaleur, unité intérieure, unité extérieure, groupe extérieur, murale, cassette, gainable, dissimulée, ventilo-convecteur, fcu, 2 tuyaux, 4 tuyaux, refnet, raccord de dérivation, raccord en Y, liaison frigorifique, ligne liquide, ligne gaz, ligne d'aspiration, acr, cuivre, condensats, cvc, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ce que vous allez faire

Placez dans le modèle les unités d'un système split, multi-split ou VRF ainsi que ses ventilo-convecteurs, puis reliez-les par des liaisons frigorifiques : une ligne liquide et une ligne gaz en cuivre ACR, fixées aux raccords des unités. Les unités fonctionnent comme toutes les autres pièces d'[équipements MEP avec raccords](topic:mep-equipment) : la même barre, les mêmes Propriétés, les mêmes raccords et [connexions](topic:mep-connections).

:::note
Il s'agit d'une aide au dessin et à la coordination. Les unités sont des formes génériques dimensionnées selon les valeurs que vous saisissez, et non des produits d'un fabricant. Leurs diamètres de tube proviennent d'un tableau de **valeurs typiques** pour des équipements R410A et R32, et non d'un fabricant : le manuel d'installation du fabricant de l'unité détermine les dimensions réelles, et les longues distances ou les grandes différences de hauteur les modifient. Modifiez le tableau, ou saisissez les dimensions, pour correspondre aux unités que vous utilisez.
:::

## Placer une unité

1. Activez {{ui:Dessin}}, ouvrez {{ui:Build}} et choisissez {{ui:Équipements}}.
2. Choisissez le type et réglez ses valeurs :

| Type | Vous réglez | Ses raccords |
|---|---|---|
| Unité intérieure split, murale | puissance, ligne liquide et ligne gaz, longueur, profondeur, hauteur, diamètre des condensats | frigorifique liquide et gaz, évacuation des condensats (à l'extrémité droite, près du mur) |
| Unité intérieure split, cassette | puissance, ligne liquide et ligne gaz, panneau, caisson, hauteur, diamètre des condensats | frigorifique liquide et gaz, évacuation des condensats (d'un côté, près du haut) |
| Unité intérieure split, gainable | puissance, ligne liquide et ligne gaz, longueur, largeur, hauteur, ouvertures de soufflage et de reprise, diamètre des condensats | sortie de gaine de soufflage, entrée de gaine de reprise, frigorifique liquide et gaz, évacuation des condensats |
| Unité extérieure split | puissance, ligne liquide et ligne gaz, largeur, profondeur, hauteur | frigorifique liquide et gaz (côté droit) |
| Unité extérieure VRF | puissance, ligne liquide et ligne gaz, largeur, profondeur, hauteur | frigorifique liquide et gaz (en façade, en bas) |
| Raccord refnet | ligne liquide ou gaz, la charge de chaque dérivation, le tube à chaque extrémité | entrée, dérivation A, dérivation B |
| Ventilo-convecteur | 2 ou 4 tuyaux, longueur, largeur, hauteur, ouvertures de soufflage et de reprise, tuyau et système de batterie, tuyau de chauffage, diamètre des condensats | sortie de gaine de soufflage, entrée de gaine de reprise, entrée et sortie de batterie, entrée et sortie de chauffage (4 tuyaux), évacuation des condensats |

3. Réglez **À** : la hauteur de la base de l'unité au-dessus du niveau. La base d'une unité murale est sa face inférieure (souvent 2100 mm) ; celle d'une cassette est sa face dans le plafond ; celle d'un refnet est la hauteur de l'axe de son tuyau.
4. Cliquez à l'endroit voulu ({{key:R}} tourne l'unité de 90°).

**Puissance** est la puissance frigorifique nominale de l'unité en kW, avec sa valeur en Btu/h à côté. Lorsque **Ligne liquide** et **Ligne gaz** restent sur **Depuis le tableau**, les raccords de l'unité prennent les dimensions du tableau pour cette puissance ; choisissez un diamètre de tube pour utiliser celui de votre unité. L'entrée d'un refnet est dimensionnée pour les deux dérivations ensemble, et chaque dérivation pour sa propre charge.

Les raccords frigorifiques fonctionnent dans les deux sens (une pompe à chaleur fonctionne dans un sens ou dans l'autre). L'évacuation des condensats est un diamètre de tuyau comme toute évacuation.

## Dessiner une liaison frigorifique

1. Choisissez deux pièces ({{key:Shift}}+clic sur la seconde) : une unité extérieure et une unité intérieure (un split simple), ou une unité extérieure et un refnet, un refnet et une unité intérieure, ou deux refnets (VRF).
2. Ouvrez {{ui:Build}} et choisissez {{ui:Liaison frigorifique}}.

BimCraft dessine les parcours liquide et gaz entre leurs raccords libres, depuis chaque raccord jusqu'à une hauteur commune, en cuivre ACR (couronne recuite jusqu'à 1-5/8 in, tube étiré au-delà), en une seule étape de {{ui:Annuler}}. Un refnet ne prend que sa propre liaison : vers son entrée côté unité extérieure, et en sortie d'une dérivation vers les unités intérieures. Chaque parcours prend le diamètre de son extrémité aval (l'unité intérieure, ou l'entrée du refnet) ; lorsque le raccord de l'autre extrémité a un autre diamètre, {{ui:Vérifier les raccordements}} le signale : c'est là qu'il faut un réducteur. Deux unités intérieures nécessitent un refnet entre elles.

Déplacez ensuite les parcours comme n'importe quel tronçon de tuyauterie ; leurs extrémités restent sur les raccords. Les parcours entre niveaux se dessinent avec {{ui:Tuyau}} : un tuyau commencé sur un raccord frigorifique prend son système, son cuivre ACR et son diamètre.

## Modifier le tableau des liaisons

Ouvrez {{ui:Build}} et choisissez {{ui:Dimensions des liaisons}}. Chaque ligne indique : jusqu'à cette puissance (kW), ce tube liquide et ce tube gaz.

| Jusqu'à | Liquide | Gaz |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Ces valeurs sont les valeurs typiques de départ. Modifiez une ligne, ajoutez ou supprimez des lignes, puis cliquez sur {{ui:Enregistrer}} : le tableau est conservé dans le modèle, donc tous ceux qui travaillent sur le fichier l'utilisent, et {{ui:Annuler}} le rétablit. {{ui:Utiliser les valeurs typiques}} remet le tableau de départ. Les pièces déjà placées conservent leurs raccords jusqu'à ce que vous les modifiiez.

## Dans le fichier IFC

Les unités intérieures et extérieures des systèmes split et VRF sont des IfcUnitaryEquipment de type SPLITSYSTEM, dont le type d'objet précise laquelle (« Split indoor unit, wall-mounted », « Split indoor unit, ceiling cassette », « Split indoor unit, ducted », « Split outdoor unit », « VRF outdoor unit »). Un ventilo-convecteur est un IfcUnitaryEquipment de type AIRHANDLER avec le type d'objet « Fan coil unit » : IFC4 n'a pas de type ventilo-convecteur, et un ventilateur, une batterie et un filtre pour une même pièce, c'est ce que décrit AIRHANDLER. Un raccord refnet est un IfcPipeFitting de type JUNCTION (« Refnet joint »). Les fichiers IFC2X3 reçoivent IfcEnergyConversionDevice et IfcFlowFitting avec les types correspondants.

Les raccords et parcours frigorifiques sont dans des systèmes REFRIGERATION (un pour les lignes liquide, un pour les lignes gaz), et les condensats dans un système DRAINAGE. Les parcours ACR sont nommés d'après leur diamètre extérieur. Le tableau des liaisons est le jeu de propriétés CadCraft_HvacLineSets du projet.

Voir aussi [Équipements MEP avec raccords](topic:mep-equipment), [Raccorder des tuyaux et des gaines à un équipement](topic:mep-connections) et [Tuyaux et gaines](topic:pipes-and-ducts).
