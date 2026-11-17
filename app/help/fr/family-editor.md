---
title: Modifier une famille
summary: Modifiez les paramètres, formules et solides d'une famille, affichez des parties selon un paramètre Oui / Non, découpez et joignez des solides, dotez-la de connecteurs pour tuyaux et gaines, et visualisez le résultat à partir de l'IFC qui sera enregistré.
keywords: éditeur de famille, modifier une famille, paramètre, paramètres, formule, formules, visibilité, oui non, solide, solides, boîte, extrusion, extruder, révolution, balayage, profil, arc, booléen, booléens, découpe, union, différence, poignée, poignées, plan de travail, esquisse, nouvelle famille, connecteur, connecteurs, port, ports, connecteur de tuyau, connecteur de gaine, évacuation, alimentation en eau
from: 1ab31c10
---

## Ouvrir l'éditeur

Ouvrez une famille (le groupe **Familles** du navigateur de projet, ou {{ui:Build}} › {{ui:Families…}}) et cliquez sur {{ui:Edit the family}}. Pour partir de zéro, cliquez sur {{ui:New family}} : donnez-lui un nom, précisez ce qu'il est (une porte, une fenêtre, du mobilier, un appareil sanitaire ou autre chose) et, pour une porte ou une fenêtre, la famille de départ dont proviennent son symbole en plan et son sens d'ouverture. L'éditeur s'ouvre sur une famille avec quelques paramètres et un solide.

Modifier une famille de départ ne conserve vos changements que dans ce modèle. Les autres modèles conservent la famille de départ telle quelle.

Rien ne change dans le modèle tant que vous ne cliquez pas sur {{ui:Save the family}}. L'éditeur possède ses propres annulation et rétablissement (les boutons fléchés à côté du nom, ou {{key:Mod+Z}} et {{key:Mod+Y}}) ; l'enregistrement est une seule étape de l'annulation du modèle.

## Paramètres

L'onglet {{ui:Parameters}} liste les paramètres de la famille : un nom, un type et une valeur par défaut. Les types : **Longueur** (millimètres), **Angle** (degrés), **Nombre**, **Nombre entier**, **Oui / Non**, **Plume** (1–16), et trois types qui contiennent des mots au lieu de nombres : **Texte**, **Matériau** (l'un des matériaux du projet) et **Remplissage** (un remplissage en plan). Les mots ne sont pas utilisés dans les formules ; ils colorent un solide (son **Matériau**), remplissent une partie de symbole, ou s'impriment sous la forme `{Name}` dans le texte d'un symbole. La case **Par élément** fait d'un paramètre une valeur que chaque élément placé définit pour lui-même, et non pour sa dimension.

- Une **formule** fait suivre un paramètre à d'autres, par exemple `Width / 30` ou `if(Width > 1200, 2, 1)`. Les longueurs dans les formules sont en millimètres, ou vous écrivez une unité : `3'`, `6in`, `50cm`.
- Renommer un paramètre le renomme dans chaque formule et chaque champ qui l'utilise. Un paramètre encore utilisé ne peut pas être supprimé.
- Le **Matériau** d'un solide prend la couleur d'un matériau du projet (ou celle d'un paramètre Matériau), **Affiché à** le masque aux niveaux de détail plus grossiers, et **Répétition** crée des copies : un nombre (un nombre ou un paramètre entier, de 1 à 200) et le pas entre elles en x, y et z. Un solide répété forme une rangée de planches, de barres ou de trous ; utilisé dans une découpe, les copies sont découpées ensemble.
- Une famille de porte ou de fenêtre reçoit aussi deux noms issus de son mur : `WallThickness` et `Face` (1 ou −1, le côté vers lequel la porte s'ouvre).

## Solides

L'onglet {{ui:Solids}} liste les solides. Ajoutez une boîte, une extrusion, une révolution ou un balayage :

| Solide | Ce que vous définissez |
|---|---|
| Boîte | ses deux coins : x0 à x1, y0 à y1, z0 à z1 |
| Extrusion | un profil sur un plan de travail (plan, face ou côté), la position du plan et une profondeur |
| Révolution | un profil, un axe sur le plan et un angle pouvant aller jusqu'à 360° |
| Balayage | un chemin de points et un rayon (une tige ou un rail) |

Chaque nombre peut être une valeur saisie ou une expression des paramètres. Chaque solide a une couleur et une option **Affiché si** : laissez-la vide pour l'afficher en permanence, ou indiquez un paramètre Oui / Non (ou écrivez une comparaison telle que `Shelves >= 3`) pour ne l'afficher que dans ce cas. C'est un paramètre de visibilité.

### Dessiner un profil

Le profil d'une extrusion ou d'une révolution se dessine sur son plan de travail, sous l'aperçu :

- Cliquez dans la zone de dessin pour ajouter un point après le point sélectionné.
- Faites glisser un point pour le déplacer. Les points s'accrochent à la grille ; maintenez {{key:Shift}} pour les placer librement.
- Cliquez sur un petit carré sur un segment pour y ajouter un point. {{key:Shift}}+clic dessus transforme ce segment en arc (cliquez à nouveau pour l'autre sens, puis pour revenir à une ligne droite).
- Double-cliquez sur un point pour le supprimer.

Les points creux sont définis par des paramètres : modifiez-les dans le tableau, pas en les faisant glisser.

## Booléens

L'onglet {{ui:Booleans}} découpe le second solide dans le premier, ou les joint. Le résultat d'un booléen peut être à nouveau découpé ou joint. Un solide utilisé dans une opération booléenne n'est dessiné que comme partie de celle-ci.

Lorsque le second solide est masqué par son paramètre Oui / Non, le premier est conservé tel quel ; lorsque le premier est masqué, le résultat est masqué.

## Symbole en plan

L'onglet {{ui:Plan symbol}} dessine, pour cette famille, ce que le plan affiche à la place de la coupe de ses solides : lignes, rectangles, cercles, arcs, polygones et textes, dans les axes propres à la famille. Chaque partie a une **plume** (1–16, une expression ou un paramètre Plume), un **remplissage** (aucun, plein, diagonal, croisé, béton, isolant, terre, ou un paramètre Remplissage), une expression **Affiché si**, une **plage de coupe** en millimètres au-dessus de sa base (une partie est dessinée en trait plein lorsque la coupe du plan la traverse, en trait fin si elle est sous la coupe, en pointillés si elle est au-dessus : un meuble au-dessus de la coupe s'affiche en pointillés), un niveau de détail et une répétition. Le texte peut nommer des paramètres sous la forme `{Name}`. **Le plan affiche : la coupe des solides** garde le plan coupant les solides tandis que le symbole reste dans la famille. Les autres logiciels lisent le symbole comme l'emprise de la famille (lignes et formes ; le texte reste dans BimCraft).

## Familles incluses

L'onglet {{ui:Families inside}} place une autre famille à l'intérieur de celle-ci : un pied dans une table, une poignée sur une porte. Choisissez la famille, puis où elle se place (x, y, z), son angle de rotation (uniquement par quarts de tour : 0, 90, 180, 270), quand elle est affichée, et les valeurs qu'elle reçoit, une par ligne sous la forme `Height = Height - 40`. L'enregistrement de la famille incluse redessine celle-ci ; une famille contenue dans une autre ne peut pas être supprimée ; une famille ne peut pas se contenir elle-même, même indirectement, et l'imbrication s'arrête à quatre niveaux.

## Points actifs

Un point actif est un point ou une arête que vous faites glisser pour modifier un paramètre. Dans l'onglet {{ui:Hotspots}}, ajoutez-en un, choisissez l'axe selon lequel il glisse et le paramètre numérique qu'il modifie, puis indiquez sa position avec les mêmes expressions que les solides. Dans l'aperçu, choisissez **Points actifs** sous les poignées pour les faire glisser. Sur un élément placé dans le plan (sélectionnez-le avec {{ui:Select}}), les points actifs x et y apparaissent comme des poignées : faites glisser l'une d'elles et l'élément prend la dimension qui place le point actif à cet endroit, en passant par les formules intermédiaires ; une seule annulation le rétablit. Un point actif ne peut pas modifier un paramètre piloté, un Oui / Non ou un mot.

Dans la vue 3D, les mêmes points actifs apparaissent sous forme de poignées sur l'élément sélectionné, et ceux qui vont de haut en bas (axe z) y apparaissent aussi, ce que le plan ne peut pas dessiner. Sélectionnez l'élément, faites glisser une poignée le long de son axe et relâchez : l'élément prend la dimension qui place le point actif à cet endroit, en une seule étape d'annulation. Les poignées sont masquées lorsque la boîte de coupe est active, car elle utilise les mêmes poignées.

## Connecteurs

Les familles placées au sol (mobilier, appareils sanitaires et autres) ont un onglet {{ui:Connectors}} : les points où un tuyau ou une gaine se raccorde à l'élément, comme le robinet et la vidange d'un lavabo. Cliquez sur {{ui:Add a connector}} et définissez :

- **Type** : tuyau ou gaine, et son **Système** (eau froide, évacuation sanitaire, air soufflé…).
- **x**, **y** et **z** : son emplacement, dans les axes propres à la famille. Comme les nombres d'un solide, chacun peut être un nombre ou une formule des paramètres, de sorte que le connecteur suit la dimension.
- **Sortie** : la direction dans laquelle un tuyau ou une gaine quitte l'élément, selon l'un des axes de la famille (une vidange sous un lavabo part vers le **Bas**).
- **Dimension (mm)** : le diamètre nominal du tuyau (DN) ou le diamètre de la gaine ronde.
- **Écoulement** : **Entrant** pour un connecteur alimenté (un robinet), **Sortant** pour un connecteur qui évacue.

L'aperçu dessine chaque connecteur sous forme d'anneau, avec une flèche indiquant la sortie. Les portes et fenêtres n'ont pas de connecteurs.

Pour un appareil sanitaire, choisissez lequel il est sous **Appareil sanitaire** (WC, lavabo, évier de cuisine, douche, bac à laver). Les appareils de départ l'indiquent déjà.

Chaque élément placé à partir de la famille reçoit ses connecteurs sous forme de ports dans le fichier IFC, et ils sont refaits lorsque l'élément change de dimension ou lorsque la famille est enregistrée. Les logiciels qui lisent les systèmes IFC voient à quel endroit chaque tuyau ou gaine doit se raccorder.

## L'aperçu et ses poignées

L'aperçu est la famille écrite au format IFC, par le même code que celui qui l'enregistre dans le modèle, puis redessinée. Ce que vous voyez est ce que reçoivent les autres logiciels. Sous l'aperçu, **Dimension affichée** définit les valeurs de paramètres utilisées par l'aperçu.

Les **poignées** sont des points sur l'aperçu : **La dimension** affiche une poignée pour Width, Depth et Height ; **Le solide sélectionné** en affiche une sur chaque face du solide choisi. Faites glisser une poignée :

- sur une face définie par un paramètre, la dimension affichée change (les formules de la famille sont conservées) ;
- sur une face définie par un nombre saisi, ce nombre change.

## Enregistrement

{{ui:Save the family}} vérifie la famille, puis redessine chacune de ses dimensions et recrée chacun de ses éléments, en une seule étape que vous pouvez annuler. Si une dimension ne peut pas être dessinée avec la modification (par exemple, un solide n'aurait pas de largeur pour cette dimension), rien n'est enregistré et l'éditeur indique la dimension concernée.

Si quelqu'un d'autre a enregistré la même famille pendant que votre éditeur était ouvert (dans une session Live TeamWork, ou dans une autre fenêtre), {{ui:Save the family}} refuse et le signale, au lieu de remplacer sa modification par la vôtre. Fermez l'éditeur, rouvrez la famille pour voir sa modification, puis refaites la vôtre.

:::note
La géométrie est enregistrée sous forme de solides propres à IFC : extrusions, révolutions, disques balayés et résultats des opérations booléennes. Rien n'est converti en liste de triangles : les fichiers restent petits et les autres logiciels lisent les formes comme des formes. Les profils comportant des arcs sont enregistrés avec des arcs en IFC4 ; IFC2X3 n'a pas de segments d'arc dans un profil, donc les arcs y sont enregistrés sous forme de courts segments droits.
:::

Voir aussi [Familles et leurs dimensions](topic:families).
