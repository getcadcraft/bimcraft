---
title: Formes de murs, découpe, décalage, étirement et verrouillage
summary: Dessinez des murs en rectangle, en polygone, en arc, sur des lignes choisies ou autour d'un contour ; découpez-les, retirez un morceau, décalez-les, étirez-les par cadre, alignez-les et verrouillez-les entre eux, à une cote ou à une ligne de trame. Chaque modification garde les murs joints et est une seule étape d'annulation.
keywords: changer de type, retyper, ce qui a bougé, lod, niveau de développement, style de jonction, onglet, mitre, bout à bout, rendre d'équerre, jonctions de murs, suivant, traverse, désactiver la jonction, autoriser la jonction, priorité des couches, âme, priorité, jonction, rectangle, rectangle incliné, polygone, inscrit, circonscrit, arc, centre, arc tangent, lignes choisies, tabulation, tracer un contour, baguette magique, diviser, écart, supprimer un segment, rattacher, décalage, copier, étirement par cadre, étirer, aligner, cadenas, cote verrouillée, modifier une cote, trame, verrouiller à la trame, décalage de placement, autoportant, agrandir à partir de, mesurer depuis, axe, face intérieure, face extérieure, dissocier, alt
from: 5b7d2f75
---

## Ce que vous allez faire

Créez et modifiez des murs avec les recettes de l'outil Mur. Chacune se termine comme le dessin d'un mur par ses angles : les angles se joignent d'eux-mêmes, les jonctions sont enregistrées dans le fichier, et l'ensemble de la modification est une seule étape dans **Modifications** que {{ui:Annuler}} retire. Les murs gardent leur identité : un mur que vous divisez, décalez ou étirez reste le même mur, avec ses portes, fenêtres et cotes.

## Dessiner un rectangle, un polygone ou un arc

Avec {{ui:Dessin}} activé, ouvrez {{ui:Formes}} dans le groupe Dessin (ou choisissez une forme dans la liste **Forme** de la ligne Mur). La ligne Mur affiche le type de mur, la référence de dessin, le côté extérieur et le sommet, comme pour l'outil {{ui:Mur}}. Cliquez ensuite, ou saisissez les points (x,y · @dx,dy · @longueur<angle · une longueur dans la direction du pointeur) :

- **Rectangle** : deux angles opposés. Quatre murs, quatre jonctions d'angle, une seule étape.
- **Rectangle incliné** : là où commence et finit le premier côté (cela fixe son orientation et sa longueur), puis un troisième clic pour l'autre côté.
- **Polygone** : le centre, puis un angle (**Inscrit**) ou le milieu d'un côté (**Circonscrit**). Réglez d'abord les **Côtés** (de 3 à 64).
- **Arc, centre** : le centre, le début (qui fixe le rayon), la fin. **Sens** : le plus court, sens antihoraire ou horaire. Un balayage de plus de trois quarts de cercle est dessiné en deux murs.
- **Arc tangent** : cliquez sur l'extrémité d'un mur, puis à l'endroit où l'arc se termine. L'arc part de l'extrémité du mur dans la direction propre au mur.

Une forme fermée a son extérieur vers l'extérieur. Dessinée sur la **Face extérieure** ou la **Face intérieure**, la face sur laquelle vous cliquez est celle qui reste en place.

## Murs sur des lignes existantes

- **Lignes choisies** : cliquez sur une ligne et un mur s'y place. Appuyez sur {{key:Tab}} (ou maintenez {{key:Shift}} pendant le clic) pour prendre toute la chaîne de lignes jointes bout à bout. Les lignes sont les lignes de dessin de cette vue, la référence de tracé et les lignes de trame.
- **Tracer le contour** : cliquez à l'intérieur d'une zone fermée par ces lignes ou par des murs. Les murs contournent la plus petite zone autour du clic.

## Régler avant de dessiner : décalage et jonction

La ligne Mur comporte deux champs de plus, utilisés par l'outil {{ui:Mur}} et par les formes :

- **Décalage** : les murs sont dessinés à cette distance de la ligne cliquée : + à sa gauche, − à sa droite, vu dans le sens du dessin.
- **Jonction** : décochez-la pour dessiner des murs autoportants. Leurs extrémités reçoivent **Interdire la jonction** et restent libres où qu'elles aillent (voir [Modifier un mur](topic:change-a-wall-or-door)).

## Diviser, retirer un morceau, rattacher

Ouvrez {{ui:Murs}} dans le groupe Modifier.

- **Diviser** : cliquez sur un mur à l'endroit où il doit être coupé, ou saisissez la distance depuis son début. Près d'un mur qui le croise, la coupe s'accroche à leur point de rencontre. Les deux parties ont le même type et restent jointes bout à bout. **Écart** laisse un espace de cette longueur centré sur la coupe. **Extrémités libres** attribue plutôt aux extrémités coupées l'option Interdire la jonction (Paramètres › BimCraft › Murs › **Lorsqu'un mur est divisé** détermine laquelle est cochée au départ). Une porte ou une fenêtre suit la partie où elle se trouve ; une coupe qui la traverse est refusée.
- **Supprimer un segment** : cliquez à l'endroit où le morceau commence et à celui où il finit. Une porte située dans le morceau disparaît avec lui.
- **Rattacher** : cliquez sur les deux parties d'un même mur (alignées, de même type). Elles redeviennent un seul mur, le premier cliqué, avec les portes des deux.

## Style de jonction, interdire la jonction, priorité des couches

Ouvrez {{ui:Murs}} dans le groupe Modifier.

- **Style de jonction** : cliquez sur un angle où deux murs droits se terminent. Chaque clic passe au style suivant : **Onglet** (les deux extrémités sont coupées sur la ligne allant de l'angle intérieur à l'angle extérieur, ce par quoi tout angle commence), **Bout à bout** (un mur traverse jusqu'à la face extérieure de l'autre, qui s'arrête contre son côté) et **Rendre d'équerre** (comme bout à bout, et le mur qui traverse se termine d'équerre ; à angle droit, il ressemble à bout à bout). **Suivant**, ou {{key:Tab}}, fait de l'autre mur celui qui traverse. La liste **Style** de la barre indique l'angle cliqué en dernier. Les mêmes deux choix figurent dans les **Propriétés** d'un mur : **Style de jonction au début / à la fin** et **Traverse**. Chaque modification est une étape dans **Modifications**. Le plan, le volume 3D, les pièces et les quantités suivent.
- À un T, le mur dont le côté est rejoint traverse toujours. Lorsque deux murs se croisent, un clic (ou **Continu au croisement** dans les Propriétés) indique lequel des deux est continu ; c'est lui qui décide de quelles couches du mur sont dessinées à travers le croisement.
- Le style appartient à la jonction : il reste lorsque les murs bougent et disparaît seulement avec la jonction (le mur est supprimé, divisé à cette extrémité, ou son extrémité reçoit Interdire la jonction). Un angle avec un mur courbe, ou là où trois murs ou plus se rencontrent, garde l'onglet. Un angle plus aigu que environ 30 degrés, ou plus plat que environ 150, revient aussi à l'onglet.
- **Interdire la jonction** : cliquez près d'une extrémité de mur. Cette extrémité est libérée : elle ne se joint à rien, où que le mur aille, jusqu'à ce que vous cliquiez à nouveau. Les extrémités libres sont marquées d'une croix tant que l'outil est actif. Le même réglage est **Jonction au début / Jonction à la fin** dans les Propriétés.
- **Priorité des couches** : là où des murs à couches se rencontrent, la couche la plus forte coupe la plus faible, de sorte que les âmes se joignent aux âmes et qu'une finition s'arrête contre la couche la plus forte. Chaque couche a une priorité de 0 à 999 ; par défaut elle vient de la fonction de la couche (structure 800, support 600, isolant 400, membrane 300, finition 200, une lame d'air 100). {{ui:Priorité des couches}} ouvre la composition de mur, où la colonne **Priorité** règle le numéro propre à une couche. Des couches de même priorité s'arrêtent l'une contre l'autre, et un trait n'est dessiné qu'entre des matériaux différents. Vous le voyez sur les plans en détail **Moyen** ou **Fin**, aux angles, aux jonctions en T et aux croisements de deux murs droits ; Paramètres › BimCraft › Murs › **Nettoyer les couches de murs aux jonctions** le désactive. Cela ne change que ce qui est dessiné à l'intérieur des murs : les contours et les quantités des murs restent tels que le style de jonction les donne.

## Changer le type de plusieurs murs

Passer des plans d'esquisse aux dessins d'exécution revient surtout à changer de type : un mur générique devient la composition précise. Vous ne redessinez rien.

1. Désignez les murs (un seul, ou plusieurs avec {{key:Ctrl}} ou {{key:Shift}}).
2. Dans Propriétés, appuyez sur **Changer de type…** sous Type de mur (ou ouvrez {{ui:Murs}} dans le groupe Modifier et choisissez {{ui:Changer de type}}, qui ouvre la même liste). La liste s'ouvre dans Propriétés, dans le bloc propre aux murs désignés. Ce n'est pas une boîte de dialogue et elle ne recouvre rien : le plan, la vue 3D et la sélection restent utilisables pendant qu'elle est ouverte, et elle suit les murs que vous désignez.
3. La liste affiche chaque type de mur avec son épaisseur et son étiquette LOD, par exemple « Mur 230 générique, LOD 200 » et « 230 brique d'argile, enduite des deux côtés, LOD 300 ». Les types que les murs désignés ont actuellement sont marqués. Saisissez dans **Rechercher** pour restreindre : un nom, une épaisseur, ou `lod 300`.
4. Cliquez sur un type. Chaque mur désigné prend ce type en une seule étape, donc un seul {{ui:Annuler}} retire tout le changement. La petite croix ferme la liste.

Chaque mur garde sa ligne de localisation. Un mur sur son axe grandit des deux côtés ; un mur dont la ligne de localisation est une face conserve cette face et grandit de l'autre côté, et les murs qui lui sont joints suivent aux angles. Les murs verrouillés à un mur changé le suivent aussi. Les portes et fenêtres restent dans leurs murs et sont à nouveau découpées pour la nouvelle épaisseur.

Après le changement, la liste affiche **Ce qui a bougé** : combien de murs ont changé et vers quoi, l'épaisseur et le LOD avant et après, les murs qui se sont décalés latéralement pour garder leur ligne de localisation, les murs joints qui ont suivi, les portes et fenêtres réinsérées, et chaque pièce dont la surface a changé, avec sa surface avant et après. La barre d'état dit la même chose en une ligne. Le rapport se contente d'informer ; il n'interrompt jamais un changement. Choisir un type dans **Propriétés › Type de mur** fait le même changement et donne le même rapport.

Deux cas arrêtent un changement, et alors rien n'est modifié du tout : une porte ou une fenêtre qui ne tiendrait plus dans son mur (un mur se raccourcit là où un angle suit ; rendez d'abord la porte plus étroite ou éloignez-la de l'angle), et un verrou que le changement romprait (un mur verrouillé à une ligne de trame par son axe alors que sa ligne de localisation est une face ; déverrouillez-le ou remettez sa ligne de localisation sur l'axe).

Un assistant connecté à BimCraft peut faire le même changement (outils `wall_types_list` et `walls_swap_type`) et reçoit le même rapport.

L'étiquette LOD d'un type se règle dans l'éditeur de composition de mur : voir [Compositions de murs](topic:wall-assemblies).

## Décalage et étirement par cadre

- **Décalage** : cliquez sur un mur, puis sur le côté où le placer, ou saisissez la distance. Le mur se déplace d'équerre à lui-même et les murs qui lui sont joints s'étirent. Cochez **Copier** pour une copie parallèle à la place (elle n'est pas jointe à l'original).
- **Étirement par cadre** : cliquez sur deux coins d'un cadre, puis sur un point de départ et un point d'arrivée. Chaque extrémité de mur située dans le cadre se déplace ; un mur entièrement à l'intérieur se déplace, et les murs qui s'y appuient suivent aussi ; les murs qui traversent le cadre s'étirent.

## Modifier une cote et la verrouiller

Désignez une cote de référence (Annoter › {{ui:Cote de référence}}) et saisissez sa valeur dans **Propriétés** : le mur de sa seconde référence se déplace d'équerre à lui-même, la première référence reste fixe et les murs joints suivent. Cochez **Verrouiller cette cote** pour conserver la valeur : lorsque l'un des murs bouge plus tard, l'autre suit. Une valeur verrouillée ne peut pas être remplacée tant que vous ne l'avez pas décochée.

## Aligner et verrouiller

**Aligner et verrouiller** : cliquez sur une face de mur (ou sur l'axe, près du milieu du mur) ou sur une ligne de trame, puis sur la face du mur à amener sur cette ligne. Le mur se place d'équerre sur elle. Cochez d'abord **Verrouiller** pour les garder alignés : un cadenas apparaît sur le plan, et lorsqu'un mur bouge, l'autre suit. Les **Propriétés** d'un mur listent ses **Verrous**, chacun avec **Déverrouiller**.

## Verrouiller des murs aux lignes de trame

Désignez un mur qui longe une ligne de trame, ou dont une extrémité s'y trouve, et choisissez la ligne de trame dans **Propriétés** › **Verrouiller à la trame**. Désignez ensuite la ligne de trame avec l'outil {{ui:Grille}} et saisissez une distance dans **Déplacer de** : la ligne se déplace d'équerre à elle-même et les murs qui lui sont verrouillés la suivent, avec leurs murs joints, en une seule étape. Un mur verrouillé à une ligne de trame ne peut pas en être écarté par lui-même (déplacez la ligne, ou déverrouillez le mur) ; une ligne de trame tournée de sorte qu'un mur verrouillé ne puisse plus rester d'équerre sur elle est refusée. Renommer la ligne conserve le verrou ; la supprimer retire le verrou.

## Longueur : quel côté reste fixe et ce qu'elle mesure

- **Agrandir à partir de** (Propriétés d'un mur) : **Le début reste fixe** (la fin bouge), **La fin reste fixe** (le début bouge) ou **Le centre reste fixe** (les deux extrémités bougent d'une moitié). Pendant que vous saisissez la Longueur, le plan marque le point qui reste fixe. Le mur joint à l'extrémité qui bouge se déplace d'équerre à lui-même et garde son angle.
- **Mesurer depuis** (à côté de Cotes sur le plan, dans Propriétés, et dans Paramètres › BimCraft › Murs) : l'axe, la face intérieure ou la face extérieure. Le champ Longueur et les cotes de murs du plan lisent la même valeur, donc elles concordent. Par défaut, c'est l'axe.
- Pour déplacer un mur libre de ses jonctions (elles se rompent, le mur garde son identité), maintenez {{key:Alt}} pendant que vous faites glisser sa poignée centrale.

## Bon à savoir

- Ces recettes suivent la spécification de l'outil Mur (pages 4 à 9). Le style de jonction et la priorité des couches sont conçus pour les murs droits ; la priorité des couches n'apparaît que sur le plan (pas dans les coupes, les élévations ni en 3D, où un mur est un seul volume), pas aux nœuds de trois murs ou plus, et les membranes ne sont pas reprises.
- Le style d'une jonction est enregistré dans son enregistrement du fichier IFC (le nom de l'`IfcRelConnectsPathElements`, par exemple `CadCraft join L butt 1`), de sorte que les autres logiciels lisent toujours la jonction et qu'un ancien fichier s'ouvre avec des onglets.
- Les verrous et les jonctions sont enregistrés dans le fichier IFC (les verrous sous forme de `CadCraft_WallHolds` sur le projet, les jonctions sous forme de `IfcRelConnectsPathElements`), donc ils restent présents lorsque vous rouvrez le fichier.
- Les murs courbes peuvent être divisés, rattachés et amputés d'un morceau ; ils ne sont ni décalés ni verrouillés.
- Voir aussi [Dessiner des murs](topic:draw-walls), [Modifier un mur, une porte ou une fenêtre](topic:change-a-wall-or-door) et [Donner une forme à un mur](topic:wall-shape).
