---
title: "Toitures : une pente pour chaque mur, pignons, appentis et pans de toit"
summary: Réglez chaque mur sous une toiture en pente, en pignon ou aucun, utilisez les préréglages croupe, pignon et appentis, relevez la toiture avec la hauteur de sablière, ajoutez bandeau et sous-face, et dessinez des pans de toit isolés là où la toiture automatique ne convient pas.
keywords: modifier une toiture, toiture sélectionnée, propriétés de la toiture, annuler toiture, toiture, pente, par mur, pignon, mur pignon, appentis, croupe, arêtier, noue, faîtage, hauteur de sablière, talon, bandeau, sous-face, égout, rive, débord, pan de toit, toit de porche, lucarne, lucarne à pignon, lucarne à appentis
from: 096084a7
---

## Ce que vous allez faire

Donnez sa forme à la toiture à partir des murs qu'elle recouvre. Chaque mur a son propre réglage : un toit peut donc être en croupe à l'avant, à pignons aux extrémités, et s'arrêter à plat contre un mur plus haut à l'arrière. Pour un porche ou une face que la toiture automatique ne peut pas faire, dessinez un pan de toit par ses angles.

## Poser une toiture

1. Au niveau dont les murs portent la toiture, cliquez sur {{ui:Toiture}}.
2. Saisissez la **Pente** (`6/12`, ou des degrés comme `30`) et le **Débord**.
3. Choisissez un préréglage : **Toit en croupe**, **Pignons sur les petits côtés**, **Pignons sur les grands côtés**, ou **Appentis** (le côté le plus proche du pointeur est l'égout bas ; les autres côtés sont des pignons).
4. Laissez **Bandeau et sous-face** coché pour des égouts fermés avec une planche de rive, ou décochez-le pour un bord de toit nu.
5. Pointez à l'intérieur du bâtiment : l'égout, le faîtage, les arêtiers et les noues apparaissent sur le plan. Cliquez.

Tout contour convient : formes en L, en T, en U et en croix, angles obliques et décrochements. Les arêtiers, faîtages et noues sont trouvés là où les pans de toit se rejoignent.

## Un mur à la fois

Sélectionnez la toiture (au niveau au-dessus des murs, cliquez à l'intérieur de son contour) et regardez sous **Chaque mur** dans **Propriétés**. Pointer une ligne marque ce mur sur le plan.

- **En pente** : le mur porte un pan de toit incliné. Saisissez sa propre pente à côté, par exemple `12/12` pour des pignons raides sur une toiture en `6/12`.
- **Mur pignon** : la toiture s'arrête en extrémité verticale au-dessus de ce mur, le mur est rempli jusqu'à la toiture, et la toiture dépasse de lui du **Débord du pignon**.
- **Aucun (affleure)** : la toiture s'arrête à ce mur, sans débord ni mur pignon, pour une toiture contre un mur plus haut.

La liste **Extrémités** en haut règle tous les murs d'un coup ; **Définir par mur** apparaît lorsque les murs ne correspondent plus à un préréglage.

## Modifier une toiture déjà posée

Sélectionnez la toiture : **Propriétés** affiche les mêmes réglages que l'outil Toiture : **Pente**, **Débord**, **Débord du pignon**, **Hauteur de sablière**, **Hauteur du bandeau**, **Sous-face fermée** et **Épaisseur**. Chaque modification apparaît aussitôt sur le plan et en 3D, avec les mêmes contrôles que l'outil (une pente de 80 degrés ou plus est refusée, de même qu'un réglage qui ne peut pas produire une toiture). Saisissez une valeur et appuyez sur {{key:Enter}}, ou quittez le champ.

Chaque modification constitue une étape d'annulation. Plusieurs modifications successives d'un même champ (saisir `6/12`, puis `7/12`, puis `8/12`) se regroupent en une seule étape, si bien qu'un {{key:Ctrl}}+{{key:Z}} rétablit l'état de la toiture avant la série ; modifier un autre champ démarre une nouvelle étape.

## Hauteur de sablière, bandeau et sous-face

- **Hauteur de sablière** est la hauteur à laquelle les pans de toit rejoignent l'extérieur des murs, mesurée depuis le sol du niveau. Laissez-la vide pour poser la toiture sur le haut des murs ; saisissez une valeur plus grande pour un talon relevé.
- **Hauteur du bandeau** est la planche le long des égouts et sur les rives. Saisissez `0` pour aucune.
- **Sous-face fermée** place une sous-face horizontale sous chaque égout, du mur jusqu'à l'arrière du bandeau.

Chaque pan rejoint son mur à la hauteur de sablière ; les murs de pentes différentes gardent donc une même ligne de sablière, et leurs égouts finissent à des hauteurs différentes, comme ils le seraient en charpente.

## Dessiner un pan de toit

1. Au niveau sur lequel repose le pan, ouvrez {{ui:Build}} et choisissez {{ui:Pan de toit}}.
2. Saisissez la **Pente** et, si ce n'est pas le haut des murs, la **Hauteur d'égout**.
3. Cliquez sur les angles. Le premier côté dessiné est l'égout ; le pan monte depuis lui vers le reste de la forme.
4. Cliquez de nouveau sur le premier angle, double-cliquez, ou appuyez sur {{key:Enter}} pour terminer. {{key:Esc}} abandonne les angles.

Un pan de toit ne suit pas les murs. Sélectionnez-le au niveau au-dessus (cliquez à l'intérieur) pour modifier sa pente, sa hauteur d'égout ou son épaisseur, ou appuyez sur {{key:Delete}} pour le supprimer.

## Ajouter une lucarne

1. Affichez le niveau sur lequel se trouve la toiture.
2. Ouvrez {{ui:Build}} et choisissez {{ui:Lucarne}}.
3. Dans la ligne d'options, choisissez la **Nature de la lucarne** (**Pignon** ou **Appentis**) et réglez la **Largeur**, le **Mur de façade** (la hauteur du mur de façade, depuis le haut de la toiture jusqu'à l'égout de la lucarne), la **Pente** et le **Débord**.
4. Cliquez sur une face de toit à l'endroit où vient le milieu de la façade de la lucarne.

BimCraft construit le mur de façade, deux jouées et le toit de la lucarne, et le prolonge en arrière jusqu'à rencontrer la toiture. Une lucarne à pignon a deux pans qui se rejoignent au faîtage. Une lucarne à appentis n'a qu'un pan, qui doit être moins raide que la toiture. La toiture sous la lucarne est découpée. La lucarne suit la toiture lorsque les murs bougent.

Sélectionnez-la pour modifier sa nature, sa largeur, son mur de façade, sa pente ou son débord dans **Propriétés**. {{key:Delete}} la supprime et referme la toiture. Elle doit tenir sur une seule face de toit, à l'écart des croupes, des noues et du faîtage ; seules les toitures créées avec l'outil {{ui:Toiture}} acceptent des lucarnes, non les pans de toit dessinés à la main. Pas encore disponible : une fenêtre sur la façade de la lucarne, et les lucarnes sur les pans de toit dessinés à la main.

## Ce qui est enregistré

Les toitures sont des toitures IFC faites d'une dalle de toit par pan, de murs pignons, d'un élément de bandeau et d'un revêtement de sous-face. La toiture porte les longueurs de ses faîtages, arêtiers, noues, égouts et rives, ainsi que ses surfaces, pour les métrés. Un pan de toit est une toiture IFC avec une seule dalle.

:::tip
Annuler revient sur toute modification de toiture en une étape, y compris un préréglage qui change chaque mur.
:::
