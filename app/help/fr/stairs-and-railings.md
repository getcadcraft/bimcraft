---
title: Escaliers et garde-corps
summary: Dessinez des escaliers droits, en L, en U et à marches balancées, qui calculent leurs contremarches et leurs marches à partir de la hauteur entre niveaux, avec mains courantes, balustres et cage d'escalier découpée dans le plancher supérieur ; dessinez des garde-corps le long des terrasses et autour des ouvertures.
keywords: escalier en colimaçon, escalier rond, escalier, escaliers, volée, contremarche, marche, palier, marches balancées, escalier en L, escalier en U, rebroussement, main courante, garde-corps, rambarde, balustre, barreau, poteau d'angle, poteau, cage d'escalier, hauteur libre, terrasse, balcon
from: 16e5ace4
---

## Ce que vous allez faire

Ajoutez des escaliers entre les niveaux et des garde-corps là où les personnes en ont besoin. Un escalier calcule ses propres marches à partir de la hauteur entre les niveaux, les maintient dans les limites usuelles pour l'habitation, place des mains courantes sur ses côtés ouverts et découpe sa cage d'escalier dans le plancher supérieur.

## Dessiner un escalier

1. Sur le niveau de départ de l'escalier, ouvrez {{ui:Build}} et choisissez {{ui:Stair}}.
2. Choisissez le type — **Droit**, **En L avec palier**, **En U avec palier** ou **En L avec marches balancées** — le sens de **rotation**, sa **largeur** et l'emplacement de ses **mains courantes**.
3. Cliquez à l'endroit où commence l'escalier : au milieu du bord avant de la première marche.
4. Déplacez le pointeur dans le sens de la montée ; les marches le suivent, avec le nombre de contremarches et de marches. Il s'accroche aux murs et aux pas de 15° ; maintenez {{key:Shift}} pour le garder d'équerre.
5. Cliquez. {{key:Esc}} recommence.

## Dessiner un escalier hélicoïdal

1. Ouvrez {{ui:Build}}, choisissez {{ui:Stair}}, puis choisissez **Hélicoïdal** comme type.
2. Réglez **Rotation**, le sens d'enroulement en montant (à gauche = sens inverse des aiguilles d'une montre).
3. Cliquez sur le centre de son poteau.
4. Cliquez dans le sens où pointe la première marche.

Il commence avec une largeur de 30" (la marche, du poteau à l'extérieur), avec un poteau de 4½". Les contremarches sont calculées à partir de la hauteur entre niveaux, au maximum 9½" par défaut. Les marches font 7½" de profondeur sur la ligne de marche, à 12" du poteau. La main courante court sur l'extérieur.

Dans **Propriétés**, un escalier hélicoïdal ajoute **Centre du poteau**, son diamètre. Le champ **Marche** est mesuré sur la ligne de marche. Ses contrôles sont des valeurs par défaut indiquées pour les escaliers hélicoïdaux : largeur libre de 26", au moins 6¾" de marche sur la ligne de marche, contremarches d'au plus 9½" et mains courantes de 34"–38". Ce ne sont pas des calculs d'ingénierie ; c'est l'autorité du bâtiment qui décide.

## Calcul des marches

La hauteur entre le sol du niveau et le niveau supérieur est répartie en contremarches égales, d'au plus 7¾", et chaque marche fait 10" de profondeur (les deux valeurs peuvent être modifiées dans **Propriétés**). Un palier compte pour une marche ; les marches balancées sont trois marches disposées en éventail autour de l'angle intérieur. Si vous modifiez la hauteur d'un niveau, tous les escaliers de ce niveau sont recalculés.

:::warning
Les contremarches de 7¾", les marches de 10", la largeur de 36", la hauteur libre de 6'-8" et les mains courantes de 34"–38" sont des valeurs par défaut issues des règles usuelles pour l'habitation, et non des calculs d'ingénierie. **Propriétés** indique lesquelles sont respectées ; c'est l'autorité du bâtiment qui décide de ce qui s'applique.
:::

## Modifier un escalier

Sélectionnez-le (cliquez dessus sur le plan ou dans la vue 3D) et modifiez dans **Propriétés** : son type et sa rotation, sa largeur, sa contremarche la plus haute, la profondeur des marches, ses mains courantes et leur hauteur, et **Découper le plancher supérieur** pour la cage d'escalier. Les contremarches et marches qu'il a finalement obtenues sont affichées en dessous.

## La cage d'escalier

Lorsque le niveau supérieur a un plancher, l'escalier le découpe là où les marches laisseraient moins de 6'-8" de hauteur libre. La découpe suit l'escalier et disparaît lorsque l'escalier est supprimé.

## Dessiner un garde-corps

1. Ouvrez {{ui:Build}} et choisissez {{ui:Railing}}.
2. Choisissez **Rambarde** (36" de haut) ou **Main courante**, puis sa hauteur.
3. Cliquez le long du bord — une terrasse, un balcon, autour d'une cage d'escalier — puis double-cliquez ou appuyez sur {{key:Enter}} pour terminer.

Les garde-corps reçoivent des poteaux à leurs extrémités et à leurs angles, et des balustres espacés de moins de 4". Sélectionnez-en un pour modifier son type, sa hauteur ou la hauteur à laquelle il part au-dessus du sol.

## Dessiner une clôture

Choisissez **Clôture** dans le même outil Garde-corps, réglez sa hauteur (1800 mm par défaut), cliquez le long de la ligne de la clôture, puis appuyez sur {{key:Enter}}.

- La clôture reçoit un poteau à chaque extrémité et à chaque angle, et un poteau au plus tous les 2.4 m entre eux. Une clôture à panneaux comporte un panneau entre deux poteaux ; une clôture à lisses en comporte deux. Ces dimensions sont des choix courants, non une exigence réglementaire : les règles locales limitent la hauteur d'une clôture.
- C'est un seul élément du modèle (un IfcRailing nommé Fence) avec un ensemble de propriétés {{ui:CadCraft_Fence}} : style, hauteur, poteaux, panneaux, lisses, portails, longueur et surface des panneaux. Une seule étape d'annulation.
- Non dessinés ici : les portails (le générateur de CivilCraft les dispose), les barreaudages, le terrain (la clôture repose sur le niveau), et la sélection d'un poteau isolé.

## Ce qui est enregistré

Un escalier est enregistré comme escalier IFC composé de volées (avec leurs contremarches, marches, hauteur de contremarche et longueur de marche), de paliers, de marches balancées et de mains courantes ; la cage d'escalier est une ouverture dans la dalle du plancher supérieur. Les garde-corps sont des garde-corps IFC, avec leur longueur et leur nombre de balustres et de poteaux.
