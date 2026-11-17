---
title: Compositions de murs et cotes de référence
summary: Créez vos propres types de mur couche par couche avec une âme explicite, gardez une bibliothèque de matériaux de projet, et cotez sur des faces et des axes qui restent attachés lorsque le mur change.
keywords: lod, niveau de développement, lod 200, lod 300, générique, composition de mur, type de mur, couches, âme, face de l'âme, axe de l'âme, lame d'air, membrane, pare-pluie, bibliothèque de matériaux, matériaux, épaisseur, cote de référence, cote, associative, ligne de localisation, bardage, montant, plaque de plâtre
from: 4ea8fbf5
---

## Ce que vous allez faire

Créez un type de mur qui correspond au mur que vous allez construire : bardage, panneau de contreventement, âme à montants de 5½ pouces et plaque de plâtre, ou brique, lame d'air et mur à ossature bois. Indiquez les couches qui forment l'âme, afin qu'une cote ou une ligne de localisation puisse tenir l'âme pendant que les finitions qui l'entourent changent. Cotez ensuite les murs sur les faces et les axes que vous voulez.

## Créer un type de mur

1. Créez un bâtiment ou ouvrez un modèle IFC, activez {{ui:Dessin}}, puis choisissez l'outil {{ui:Mur}}.
2. Choisissez un type de départ dans {{ui:Type de mur}} et ouvrez {{ui:Compositions de murs…}}. Un type de départ s'ouvre comme une copie ; donnez un nom au nouveau type.
3. Les couches vont de l'extérieur, en haut de la liste, à l'intérieur, en bas. Choisissez le matériau de chaque couche, saisissez son épaisseur (unités du projet, ou valeurs explicites comme `12.7 mm` ou `1/2"`), choisissez sa fonction (finition, support, structure, isolant, membrane) et cochez les couches **Âme**. L'âme doit former un seul groupe continu.
4. {{ui:Ajouter une couche}} ajoute une couche, {{ui:Ajouter une lame d'air}} ajoute une lame d'air avec sa ventilation (non précisée, non ventilée, ventilée), {{ui:Ajouter une membrane}} ajoute une couche sans épaisseur nominale, comme un pare-pluie. Les flèches déplacent une couche vers l'extérieur ou vers l'intérieur.
5. L'aperçu dessine les couches à l'échelle, avec l'âme soulignée, numérotées comme les lignes, et cote chaque couche, l'âme et l'ensemble. {{ui:Enregistrer le type}}.

Le nouveau type figure dans la liste de l'outil Mur et dans les **Propriétés** d'un mur sélectionné. Enregistrer un type modifié change tous les murs qui l'utilisent ; {{ui:Dupliquer le type}} en crée un distinct et ne l'attribue qu'aux murs sélectionnés. Chaque enregistrement est une seule étape d'annulation, avec les murs qu'il déplace, les portes et fenêtres qu'ils contiennent et les cotes qui en dépendent.

Une lame d'air ajoute de l'épaisseur. Une membrane n'en ajoute aucune : elle reste dans le type afin qu'une nomenclature puisse la retrouver plus tard, et elle ne compte ni dans l'épaisseur du mur ni dans celle de l'âme. Une lame d'air ou une membrane n'est jamais comptée comme matériau plein. Dans un fichier enregistré en IFC2X3, une membrane est conservée dans l'enregistrement du type mais omise de ses couches de matériaux physiques.

## Indiquer le niveau de développement (LOD) d'un type

Un type peut indiquer son niveau de développement. Dans l'éditeur, **Niveau de développement (LOD)** propose l'échelle fixe 100, 200, 300, 350, 400 et 500, ou **Non défini**. Un mur générique (« Mur 230 générique ») est en LOD 100 ou 200 ; une composition précise avec ses couches réelles (« 230 brique d'argile, enduite des deux côtés ») est en LOD 300 ou plus. L'étiquette est à votre charge : BimCraft ne la calcule pas, et les types de départ n'en ont aucune.

L'étiquette s'affiche à côté du nom du type dans la liste des types de l'outil Mur, dans les Propriétés d'un mur et dans la liste [Changer de type](topic:wall-tools), et le rapport après un changement indique si le niveau a monté ou baissé. Pour la voir dans la nomenclature **Murs par type** et son CSV, cochez **Afficher le LOD de chaque type de mur dans la nomenclature des murs** dans Paramètres › BimCraft › Murs : une dernière colonne, LOD, est ajoutée. Elle est enregistrée dans le fichier IFC avec le type (dans le jeu de propriétés `CadCraft_WallType` du type, sous la propriété `LOD` et dans l'enregistrement du type), donc elle reste là lorsque vous rouvrez le fichier. Pour l'instant, l'étiquette ne concerne que les types de mur, pas les éléments isolés ni les autres types d'éléments.

## Murs génériques pour l'étape d'esquisse

La liste des types de l'outil Mur commence par deux murs **génériques** : **Mur générique 200 mm (extérieur)** et **Mur générique 100 mm (intérieur)**. Chacun est une seule couche du matériau générique, étiqueté LOD 200. Utilisez-les lorsque vous savez où vont les murs mais pas encore de quoi ils sont faits.

Un mur dont le type est étiqueté **LOD 100** ou **LOD 200** est dessiné sur chaque plan comme **une seule bande hachurée**, à tous les niveaux de détail : sans couches ni lignes de couches. C'est le cas des murs génériques et de tout type personnel que vous étiquetez LOD 100 ou 200. Le mur lui-même est complet : il a son épaisseur, ses portes et fenêtres, ses pièces et ses quantités.

Pour le développer, changez son type (Modifier › Murs › **Changer de type**, ou Type dans Propriétés). Le mur n'est jamais redessiné : le même mur prend le nouveau type, et le rapport indique ce qui a bougé. Un type étiqueté LOD 300 ou plus est dessiné avec ses couches comme auparavant.

Pour dessiner chaque mur par ses couches, quelle que soit son étiquette : Paramètres › BimCraft › Murs, décochez **Dessiner les murs d'un type LOD 100 ou LOD 200 sous forme d'une seule bande hachurée**.

Les portes et fenêtres de départ sont aussi des types génériques (une dimension et un mode d'ouverture, pas un produit). Lorsque **Afficher le LOD de chaque type de mur dans la nomenclature des murs** est activé, les nomenclatures Portes et Fenêtres affichent LOD 200 pour elles.

## Renseigner les données de métré d'un type

Dans l'éditeur de type de mur, **Données de métré** renseigne ce qu'un métreur doit savoir sur le mur, une fois pour le type : l'**élément** dont il est constitué (une brique ou un bloc : son nom, sa longueur, sa hauteur et sa largeur), le **mortier** (nom et épaisseur de joint) et un **prix unitaire** avec son code devise (trois lettres, comme USD, EUR ou ZAR) et sa base : le mètre carré ou le pied carré de surface nette de mur, le mètre ou le pied de longueur de mur, ou chaque mur. Tout est facultatif.

Il est enregistré avec le type dans le fichier. Chaque mur du type le restitue alors : {{ui:Nomenclatures}} › **Types de mur : données de métré** affiche l'élément, le mortier, le prix unitaire et le produit du prix unitaire par la quantité mesurée, et le métré transmis à TakeoffCraft porte ces données sur le poste de ce type de mur. Modifiez-les sur le type et tous les murs suivent.

Trois autres champs servent à compter les briques ou les blocs et le mortier :

- **Chute sur éléments, %** s'ajoute au nombre d'éléments. Laissez-le vide pour utiliser la valeur de la méthode de métré du projet, ou aucune si cette méthode n'en prévoit pas. Saisissez 0 pour n'avoir aucune chute, quelle que soit la méthode.
- **Mortier supplémentaire, %** sert aux logements ou perforations qui reçoivent du mortier. Il s'ajoute au volume de mortier. Laissez-le vide s'il n'y en a pas.
- **Couches construites avec cet élément** : cochez chaque couche faite de cette brique ou de ce bloc. Un mur à double paroi en a deux. Si aucune n'est cochée, ce sont les couches de l'âme qui sont comptées.

Le prix unitaire peut aussi être à l'élément commandé, par 1000 éléments commandés ou au m³ de mortier. Lorsque l'élément a une longueur et une hauteur, **Types de mur : données de métré** affiche le nombre d'éléments par m² (ou ft²) d'une paroi, le nombre d'éléments à commander et le volume de mortier ; les formules figurent dans [Briques, blocs et mortier](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un type ne comporte qu'un seul élément : deux parois d'éléments différents (paroi extérieure en brique et paroi intérieure en bloc) ne peuvent pas encore être comptées sur un même type.

## Maintenir l'âme en place

Dans **Propriétés**, réglez la **Ligne de localisation** d'un mur sur une face de l'âme ou sur l'axe de l'âme. Lorsque vous ajoutez ou épaississez ensuite une finition, cette ligne reste à sa place et le mur grandit autour d'elle ; les murs qui la rejoignent à un angle la suivent, de sorte que les angles droits restent fermés.

## Matériaux du projet

{{ui:Bibliothèque de matériaux…}} liste les matériaux du projet : nom, catégorie, épaisseur de départ d'une couche, couleur d'affichage, motif de hachure de coupe et remarques. La bibliothèque est enregistrée dans l'IFC avec le projet. Choisir un matériau pour une couche donne à cette couche l'épaisseur par défaut du matériau, que vous pouvez ensuite modifier ; modifier la bibliothèque plus tard ne redimensionne jamais les murs déjà dessinés. Vous pouvez aussi créer un matériau depuis la liste des matériaux de la couche avec {{ui:+ Nouveau matériau…}}.

## Cotes de référence

{{ui:Annoter}} › {{ui:Cote de référence}} : choisissez horizontale, verticale ou alignée, puis une référence : la face de finition extérieure ou intérieure, la face de l'âme extérieure ou intérieure, l'axe du mur ou l'axe de l'âme. Désignez le premier mur, changez la référence si vous le souhaitez, désignez le second, puis cliquez à l'endroit où passe la ligne de cote. Deux références sur un même mur mesurent son épaisseur totale ou celle de son âme. {{ui:Cotes de référence…}} liste les cotes de la vue, y compris celles qui ont perdu un mur, avec Propriétés, Rattacher les références et Supprimer.

### Coter tout le plan selon des règles

{{ui:Annoter}} › {{ui:Coter le plan…}} cote l'extérieur du plan d'étage que vous regardez : la dimension totale dans chaque sens, une rangée de cotes le long de chaque bord extérieur (extrémités des murs, murs qui rejoignent le bord, et portes et fenêtres qui s'y trouvent), les rangées étant placées hors du bâtiment. Cochez ce que vous voulez, lisez le nombre, puis cliquez sur {{ui:Ajouter les cotes}}. Ce sont des cotes de référence ordinaires : elles suivent les murs lorsque ceux-ci bougent, et vous pouvez en sélectionner, déplacer ou supprimer n'importe laquelle ; l'ensemble est une seule étape d'annulation, et la relancer n'en crée pas de doublons.

Il ne cote que l'extérieur : les pièces intérieures, les murs courbes et les murs non orthogonaux au plan sont laissés aux outils manuels, et les lignes de trame ne sont pas des murs, donc les cotes entre trames ne sont pas créées ici. Votre assistant connecté peut faire la même chose avec `plan_dimension`.

La cote est attachée aux murs, et non à un point de l'écran : lorsqu'un mur bouge ou que son type change, la valeur suit. Si un mur est supprimé, la cote indique qu'elle n'est pas résolue et n'affiche aucun nombre, jusqu'à ce que vous la rattachiez ou annuliez. La zone de longueur accepte aussi des coordonnées de plan, comme `10',12'`, pour une ligne de cote à un endroit exact.

Les cotes s'appliquent aux murs dessinés par BimCraft, dans les vues en plan. Pas encore disponible : les cotes dans les coupes et les élévations, vers les portes, les fenêtres et les autres composants, et les couches d'ensemble dessinées dans le plan et la coupe ; voir [Ce qui n'est pas encore disponible](topic:not-built-yet).

## Voir aussi

[Dessiner des murs](topic:draw-walls), [Modifier un mur, une porte ou une fenêtre](topic:change-a-wall-or-door), [Propriétés](topic:properties-panel).
