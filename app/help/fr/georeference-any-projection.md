---
title: Géoréférencement avec n'importe quelle projection
summary: Indiquez à BimCraft dans quel système cartographique sont les coordonnées d'un modèle, à partir de la liste EPSG complète, de n'importe quelle zone UTM ou d'une projection que vous définissez vous-même, et utilisez-le pour la position, les couches cartographiques et les nuages de points.
keywords: projection, système de coordonnées, crs, epsg, utm, zone utm, projection personnalisée, proj4, chaîne proj, prj, wkt, géoréférencement, géoréférencer, conversion cartographique, ifcprojectedcrs, mes projections, latitude, longitude, est, nord, lambert, gauss-kruger, state plane, grille nationale
from: 6894c1f2
---

Certains plans sont dessinés dans un système cartographique absent d'une courte liste : une zone UTM, une grille nationale, ou une projection consignée sous forme de définition en texte. {{ui:Mesurer}} › {{ui:Système de coordonnées…}} vous permet d'indiquer lequel utilise le modèle.

## Choisir le système d'un modèle

1. Ouvrez le modèle, choisissez {{ui:Mesurer}}, puis {{ui:Système de coordonnées…}}.
2. Saisissez dans la zone de recherche. Chacun de ces formats fonctionne :
   - un numéro EPSG : `32633` ou `EPSG:2277` ;
   - une zone UTM : `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N` ;
   - des mots du nom : `lambert 93`, `mga zone 56`, `texas central` ;
   - une définition de projection : `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, éventuellement précédée d'un nom (`Ma grille = +proj=…`) ;
   - le texte d'un fichier `.prj`, ou utilisez {{ui:Charger un fichier .prj…}}.
3. Choisissez un résultat, puis {{ui:Utiliser ce système}}.

Le choix est enregistré dans le modèle (un ensemble de propriétés nommé `CadCraft_CRS` sur le projet), et il se rouvre avec le modèle. Enregistrez le modèle pour le conserver. {{ui:Retirer du modèle}} revient à ce qu'indique le fichier.

Si votre définition donne les mêmes coordonnées qu'un système EPSG listé, BimCraft l'indique et utilise ce code ; lorsque plusieurs systèmes listés partagent les mêmes calculs, il nomme aussi les autres.

## Mes projections

Une définition collée ou un `.prj` chargé peut être conservé avec {{ui:Garder dans Mes projections}}. La liste est sur cet appareil (ce navigateur) et elle est proposée la prochaine fois que vous ouvrez le sélecteur.

## À quoi cela sert

- {{ui:Mesurer}} › {{ui:Position}} convertit un point choisi en latitude et longitude par le système du modèle. Il s'arrêtait avec une note lorsque le fichier nommait son système cartographique sans code EPSG ; avec un choix enregistré, il donne la réponse.
- Les couches cartographiques sous le modèle utilisent le même système. Un nuage de points ou un fichier de terrain dans un autre système se voit proposer celui du modèle (voir ci-dessous).
- {{ui:Paramètres}} › BimCraft › {{ui:Position}} › {{ui:Choisir un autre système…}} définit ce que {{ui:Position}} indique en plus de celui du modèle : latitude et longitude dans n'importe quel système géographique listé, ou l'est et le nord dans n'importe quel système projeté.

## Un modèle qui n'est pas encore sur la carte

Si le fichier n'a aucune conversion cartographique, choisir un système ouvre {{ui:Placer ce modèle sur la carte}}. Vous pouvez aussi l'ouvrir depuis {{ui:Mesurer}} › {{ui:Origine sur la carte…}}.

1. Donnez l'origine du modèle en est et en nord dans le système, ou saisissez une latitude et une longitude puis choisissez {{ui:Convertir en coordonnées Est et Nord}}.
2. Donnez la rotation vers le nord de la grille (degrés, sens anti-horaire ; 0 signifie que l'axe Y du modèle pointe vers le nord de la grille) et la hauteur de l'origine.
3. L'échelle part de l'écart d'unité entre le modèle et la carte (0.001 pour un modèle en millimètres sur une grille en mètres). Ne la modifiez que pour un facteur combiné sol-grille.
4. Choisissez {{ui:Placer sur la carte}}. Une seule étape d'annulation écrit un IfcProjectedCRS et un IfcMapConversion (IFC4). Le modèle lui-même ne bouge pas.

Un fichier IFC2X3 n'a aucune de ces entités. BimCraft écrit les mêmes valeurs de la façon que cette norme permet : les ensembles de propriétés buildingSMART `ePSet_MapConversion` et `ePSet_ProjectedCRS` sur le projet, la latitude et la longitude du site, et le nord réel. La boîte de dialogue l'indique. Enregistrez le modèle pour le conserver.

## Un modèle déjà sur la carte

Lorsque le fichier se place déjà sur la carte et que vous choisissez un autre système, BimCraft demande :

- {{ui:Modifier seulement ce qu'indique Mesure › Localisation}} conserve le géoréférencement propre au fichier et utilise votre choix pour {{ui:Position}}, les couches cartographiques et les nuages de points (les nombres du modèle sont alors lus comme étant dans le nouveau système).
- {{ui:Déplacer le modèle vers ce système}} réécrit le géoréférencement : l'origine passe par la projection (est, nord, hauteur, rotation et échelle) et l'IfcProjectedCRS (nom, datum, projection, zone, unité) est réécrit, de sorte que l'IFC enregistré indique le nouveau système. La position sur la Terre reste la même : l'origine conserve sa latitude et sa longitude. Les éléments à l'intérieur du modèle ne changent jamais ; seul le géoréférencement change.

La boîte de dialogue affiche l'ancienne et la nouvelle origine avant votre choix. Y aller puis revenir ramène l'origine à moins d'un millimètre près.

## Nuages de points et terrain dans un autre système

Un nuage ou un fichier de levé porte son propre système (LAS, LAZ, E57, GeoTIFF) ou n'en a aucun. Lorsqu'il diffère de celui du modèle, BimCraft propose {{ui:Reprojeter dans le système du modèle}}. Les points sont déplacés par lots (dans un processus de travail lorsqu'il y en a beaucoup, pour que la page reste utilisable), le fichier sur votre ordinateur n'est pas modifié, et la ligne d'état indique ce qui a été fait. Rouvrez le fichier pour revenir à son système d'origine. Pour un nuage déjà ouvert, {{ui:Reprojeter dans le modèle…}} dans la barre du nuage fait la même chose.

Si le fichier ne nomme aucun système, BimCraft demande {{ui:Dans quel système se trouve ce fichier ?}} : choisissez-le avec {{ui:Choisir le système…}}, et la réponse est mémorisée pour ce fichier sur cet appareil. {{ui:Garder le système propre au fichier}} laisse les points tels quels.

## Lorsque quelque chose est approximatif

Les problèmes sont listés dans la boîte de dialogue et dans le panneau **Problèmes**, jamais en silence :

- Un lieu hors de la zone pour laquelle le système est conçu : les calculs fonctionnent, mais la déformation augmente.
- Les décalages de datum qui nécessitent un fichier de grille (NADCON, NTv2 et analogues) ne sont pas disponibles. Les systèmes sur un autre datum sont déplacés par le décalage sans grille que liste le registre EPSG, et le résultat est approximatif à la précision indiquée, que le message donne en mètres.
- Un point qui ne peut pas être projeté est écarté et compté ; un fichier au-delà de la limite de taille est refusé, et la limite est indiquée.

:::tip
Les coordonnées cartographiques nécessitent une conversion cartographique. Un fichier qui n'en a pas est placé sur la carte avec {{ui:Origine sur la carte…}}.
:::

:::note
Passer d'un datum à un autre sans fichier de grille est précis à quelques mètres près ; le résultat de Position indique l'écart lorsque le catalogue le connaît.
:::
