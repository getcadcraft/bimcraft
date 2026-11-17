---
title: Le terrain du site, la plate-forme du bâtiment et les revêtements extérieurs
summary: Intégrer le terrain au modèle à partir de points topographiques, de courbes de niveau, d'un nuage LAS ou LAZ, d'un GeoTIFF, d'une surface LandXML (de CivilCraft) ou de quelques altitudes ponctuelles ; creuser la plate-forme du bâtiment avec ses pentes et son déblai / remblai ; poser allées, cheminements et terrasses dessus ; le transmettre à CivilCraft en LandXML.
keywords: terrain, sol, site, topographie, levé, points, PNEZD, courbes de niveau, LAS, LAZ, LiDAR, GeoTIFF, MNT, altitude, altitude ponctuelle, profil, plate-forme, plate-forme du bâtiment, déblai, remblai, terrassement, raccordement au terrain, pente, allée carrossable, cheminement, terrasse, revêtement, LandXML, CivilCraft
from: 208298d6
---

## Ce que vous allez faire

Installer la maison sur son site. Le terrain devient une partie du modèle : il est affiché en 3D, coupé dans les coupes et les élévations, avec les courbes de niveau sur le plan. Une plate-forme de bâtiment est creusée sous la maison, les allées et cheminements la suivent, et les semelles descendent avec elle.

## Importer le terrain

1. Ouvrez {{ui:Build}} et choisissez {{ui:Terrain}}.
2. Au choix :
   - **Ouvrir un fichier de levé…** : points topographiques (PNEZD, PENZD ou simplement coordonnée est, coordonnée nord, altitude, séparés par des virgules, des tabulations ou des espaces), courbes de niveau dans un DXF ou un DWG (polylignes à leur altitude, polylignes 3D), un nuage LAS ou LAZ (points du sol conservés, réduits à environ un point par mètre carré), un GeoTIFF ou une grille d'altitudes ASCII, ou une surface **LandXML** comme celles qu'exporte CivilCraft (ses propres points et triangles sont conservés ; si le fichier contient plusieurs surfaces, BimCraft demande laquelle est le terrain ; ses unités proviennent du fichier). Choisissez d'abord les unités du fichier (LandXML indique les siennes).
   - Ou saisissez une **Altitude ponctuelle** (depuis le sol de ce niveau, donc `-1'` est un pied en dessous), cliquez des points sur le plan, modifiez l'altitude puis cliquez d'autres points, et enfin **Créer le terrain**. Trois points suffisent pour commencer.

Les coordonnées de levé éloignées du modèle (projection Lambert, UTM) sont déplacées sur la maison, et les altitudes sont fixées pour que le terrain au niveau de la maison soit à environ 8" sous le premier étage. Vous pouvez corriger cela, de la valeur que vous voulez, avec **Surélever le terrain** dans **Propriétés**.

## La plate-forme du bâtiment

1. Choisissez {{ui:Building pad}}.
2. Réglez la **Marge** autour de la maison, de combien la **plate-forme se trouve sous le plancher** (8" sous une dalle, davantage sous un vide sanitaire) et les **Pentes** jusqu'au terrain existant (`2:1` = deux pieds vers l'extérieur pour chaque pied de montée ou de descente).
3. Pointez à l'intérieur de la maison et cliquez.

Le terrain est aplani sous la maison et jusqu'à la marge, puis remonte vers le versant (déblai) et descend vers le côté bas (remblai) jusqu'à rejoindre le terrain existant. Les **Propriétés** du terrain et de la plate-forme donnent les volumes de déblai et de remblai. Si vous déplacez les murs, la plate-forme suit.

## Allées, cheminements et terrasses

Choisissez {{ui:Paving}}, sélectionnez **Cheminement**, **Allée carrossable** ou **Terrasse**, puis cliquez les angles. Cliquez de nouveau sur le premier angle, double-cliquez ou appuyez sur {{key:Enter}} pour terminer. Le revêtement suit le terrain fini ; modifiez son type ou son épaisseur dans **Propriétés**.

## Les semelles suivent le terrain

Lorsque le terrain est dans le modèle, les murs de soubassement et les semelles de vide sanitaire le suivent : le long de chaque mur, la semelle reste à sa profondeur sous le terrain extérieur, et elle descend par paliers de 8" entiers là où le terrain baisse (voir [Fondations sous les murs](topic:foundations)).

## Transmettre à CivilCraft

**LandXML pour CivilCraft** (dans la ligne Terrain, ou dans les **Propriétés** du terrain) télécharge le terrain existant et le terrain fini dans un fichier LandXML. Ouvrez-le dans CivilCraft pour le nivellement réel, le drainage et le terrassement.

## Bon à savoir

- Le terrain nécessite un modèle IFC4, comme tout nouveau bâtiment.
- Les courbes de niveau s'affichent sur le plan du niveau du terrain, à l'intervalle défini dans les **Propriétés** du terrain ; une sur cinq est plus épaisse.
- Le terrain est enregistré comme élément de terrain IFC (surface triangulée fermée, afin que les coupes la traversent) ; la plate-forme et les revêtements sont enregistrés avec lui. Supprimez le terrain pour recommencer : sa plate-forme et ses revêtements partent avec lui.
