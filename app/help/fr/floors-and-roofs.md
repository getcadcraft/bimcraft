---
title: Pièces, planchers, plafonds et toitures
summary: Les pièces apparaissent dès que les murs les délimitent ; donnez à une pièce ou à tout le bâtiment un plancher et un plafond, et posez une toiture à croupes ou à pignons sur les murs. Tout suit lorsque les murs bougent.
keywords: pièce, pièces, espace, surface, périmètre, plancher, dalle, sous-plancher, plafond, toiture, toit à croupes, toit à pignons, pente, débord, égout, faîtage, noue, 6/12
from: 1fb1813c
---

## Ce que vous allez faire

Terminer l'enveloppe du bâtiment. Les pièces se créent d'elles-mêmes à partir des murs ; les planchers, les plafonds et la toiture ne demandent qu'un clic chacun. Comme ils sont déduits des murs, ils suivent les déplacements de ceux-ci.

## Pièces

Tout espace fermé par des murs dessinés est une pièce. Elle apparaît dès que le dernier mur la ferme, avec un numéro (101, 102 … au premier niveau, 201 … au suivant) et un nom (**Pièce 1**, **Pièce 2** …), et sa surface s'affiche au milieu d'elle sur le plan.

- Avec {{ui:Sélectionner}} activé, cliquez à l'intérieur d'une pièce pour la sélectionner. Dans **Propriétés**, modifiez son **Nom** (par exemple `Cuisine`) et son **Numéro** ; sa surface et son périmètre sont affichés.
- Supprimez un mur entre deux pièces et elles n'en font plus qu'une ; tracez un mur en travers d'une pièce et elle en devient deux. Une pièce garde son nom et son numéro lorsque les murs qui l'entourent sont déplacés.
- Une pièce ne peut pas être supprimée seule : elle est l'espace que forment les murs.

Les surfaces sont mesurées à l'intérieur des faces des murs. Les pièces sont enregistrées comme espaces IFC avec leur surface, leur périmètre, leur hauteur et leur volume, afin que les nomenclatures les exploitent (voir [Totaliser les quantités, lister les éléments et établir des nomenclatures d'espaces](topic:quantity-totals)).

## Planchers

1. Cliquez sur {{ui:Plancher}}.
2. Choisissez **Cette pièce** ou **Tout le bâtiment**, la **Nature** (plancher bois ou dalle béton) et son épaisseur.
3. Pointez à l'intérieur d'une pièce (ou n'importe où dans le bâtiment). Ce que le plancher couvrirait est mis en surbrillance avec sa surface.
4. Cliquez. La face supérieure du plancher est celle du niveau ; il descend de son épaisseur. Un plancher de tout le bâtiment atteint les faces extérieures des murs.

## Plafonds

1. Cliquez sur {{ui:Plafond}}.
2. Choisissez **Cette pièce** ou **Tout le bâtiment**, et sa **Hauteur** au-dessus du sol.
3. Pointez à l'intérieur et cliquez.
4. Pour le voir d'en bas, avec sa trame et les luminaires, passez le plan en plan de plafond : voir [Vues, plages de vue et vos propres feuilles](topic:views-and-sheets).

## Une toiture

1. Sur le niveau dont les murs portent la toiture, cliquez sur {{ui:Toiture}}.
2. Saisissez la **Pente**, en hauteur sur 12 (`6/12`) ou en degrés (`30`), ainsi que le **Débord**.
3. Choisissez les **Extrémités** : **Toit à croupes** (tous les côtés sont en pente), **Pignons sur les petits côtés** ou **Pignons sur les grands côtés** (un bâtiment à quatre côtés), ou **Toit en appentis**.
4. Pointez à l'intérieur du bâtiment : l'égout et le faîtage apparaissent sur le plan. Cliquez.

La toiture repose sur les murs, au niveau situé au-dessus d'eux, et sa face inférieure rejoint la face extérieure des murs. Les pignons sont fermés par un mur de pignon aussi épais que le mur situé dessous. Un bâtiment en L, en T ou en U reçoit un toit à croupes dont les ailes se rejoignent en noues.

## Les modifier

Sélectionnez un plancher, un plafond ou une toiture (dans la vue 3D, dans l'arborescence du modèle, ou une toiture en cliquant à l'intérieur de son contour au niveau supérieur) et modifiez-le dans **Propriétés** : la nature, l'épaisseur et la hauteur de la face supérieure au-dessus du niveau d'un plancher ; la hauteur, l'épaisseur et le **Motif** d'un plafond (la trame que dessine le plan de plafond : aucun, 600 × 600, 600 × 1200, 2' × 2' ou 2' × 4') ; la pente, le débord, les extrémités et l'épaisseur d'une toiture. Chaque modification constitue une seule étape d'annulation.

## Donner un type à un plancher, un plafond ou une toiture avec des couches

Un plancher, un plafond et une toiture peuvent recevoir un **type**, comme un mur : une composition nommée de couches, chacune avec son matériau et son épaisseur réelle.

- **Lors de la pose.** Les outils Plancher, Plafond, Toiture et Dessiner un plancher ont une liste **Type** sur leur ligne. **Aucun type** le pose comme auparavant, avec sa propre épaisseur. Un type le pose avec pour épaisseur la somme de ses couches.
- **Plus tard.** Sélectionnez le plancher, le plafond ou la toiture et choisissez **Type** dans Propriétés. L'élément reste le même élément : sa place, sa pièce et ses données sont conservées, et rien n'est redessiné. Seuls son type, son épaisseur et son matériau changent. C'est ainsi qu'un élément au stade de l'esquisse devient un élément développé : remplacez son type générique par un type réel.
- **Modifier le type…** ouvre l'éditeur de types sur ce type : les couches, **du haut vers le bas**, le noyau, la fonction de chaque couche et l'étiquette LOD du type. L'enregistrement modifie tous les éléments de ce type en une seule étape, et une annulation le défait. Modifier un type de départ enregistre une copie comme votre propre type.
- Tant qu'un élément a un type, son **Épaisseur** est celle du type et ne peut pas être saisie. Choisissez un autre type, ou **Aucun type**, pour la modifier.

Les types de départ sont un type **générique** pour chacun (une couche du matériau générique, étiquetée LOD 200) et deux types en couches (étiquetés LOD 300) : un plancher sur solives bois et un plancher béton avec chape ; une toiture bois et une toiture-terrasse béton ; un plafond en plaques de plâtre et un faux plafond suspendu en dalles. Ce sont des valeurs de départ, non des constructions éprouvées : vérifiez les couches avant de vous y fier.

La nomenclature **Couches : surface et volume** liste chaque couche de chaque type utilisé ; voir [Nomenclatures, cotes et PDF](topic:plan-schedules-and-pdf). Les types de plancher, de toiture et de plafond voyagent d'un projet à l'autre dans un lot de types ou comme élément de bibliothèque ; voir [Lots de types](topic:type-packs).

## Bons à savoir

- Déplacer, ajouter ou supprimer des murs refait les pièces, les planchers, les plafonds et la toiture qui les recouvrent.
- Une toiture s'adapte à n'importe quel contour. Pour donner à chaque mur sa propre pente, son pignon ou son appentis, une sablière surélevée, un bandeau et une sous-face, ou pour dessiner un seul pan de toiture, voir [Toitures : une pente pour chaque mur, pignons, appentis et pans de toiture](topic:roofs).
- {{key:Delete}} supprime le plancher, le plafond ou la toiture sélectionné.
