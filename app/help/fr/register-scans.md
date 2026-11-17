---
title: Recaler plusieurs scans en un seul
summary: Placez des scans pris depuis des positions différentes dans un même repère, à partir de paires de points choisies ou de cibles saisies, affinez-les avec l'ICP, enregistrez le recalage comme projet et exportez le nuage recalé en LAS ou E57.
keywords: recaler, recalage, scans, nuage de points, icp, plus proche point itératif, cibles, paires de points, transformation rigide, aligner, fusionner, e57, las, du scan au BIM
from: e8e270db
---

## Ce que vous allez faire

Plusieurs scans d'un même lieu (chacun pris depuis sa propre position du scanner) commencent avec leurs propres coordonnées. Recalez-les : donnez à chaque scan un seul placement pour qu'ils se trouvent tous dans un même repère, puis enregistrez ce résultat comme projet et écrivez le nuage recalé dans un seul fichier LAS ou E57.

## Placer les scans

1. Ouvrez la boîte de dialogue ({{ui:Recaler les scans…}} dans le panneau de démarrage, ou {{ui:Afficher}} › {{ui:Recaler les scans…}} une fois un modèle ouvert). {{ui:Ajouter des scans…}} accepte les fichiers LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou déposez-les dans la boîte de dialogue. Les scans qui utilisent des unités différentes sont refusés avec une remarque : convertissez-en un d'abord.
2. Choisissez {{ui:Scan à déplacer}} et {{ui:Recaler sur}}. L'image montre chaque scan dans le repère tel qu'il est, avec une couleur par scan : {{ui:Plan}}, {{ui:Avant}} ou {{ui:Côté}} ; faites glisser pour déplacer la vue, utilisez la molette pour zoomer.
3. **Par paires de points.** Cliquez sur {{ui:Choisir une paire}}, puis sur un point du scan à déplacer, puis sur le même endroit dans un autre scan (un coin, une cible, le pied d'un poteau). Faites-le au moins trois fois, avec des points non alignés et répartis. Cliquez sur {{ui:Placer par paires}} : le scan est placé par un ajustement aux moindres carrés, et **Écart restant** indique de combien chaque paire diverge encore. Une paire avec un grand écart est un mauvais pointage : supprimez-la avec la croix, puis replacez.
4. **Par cibles.** Si les coordonnées réelles d'un point sont connues (cibles topographiques), cliquez sur {{ui:Choisir, puis saisir la cible}}, cliquez sur le point de son scan, puis saisissez les X, Y et Z de la cible dans la ligne. Les paires et les cibles saisies peuvent être combinées librement.

## Affiner avec l'ICP

Les paires donnent un placement approximatif. {{ui:Affiner}} déplace le scan jusqu'à ce que ses surfaces se superposent à celles de l'autre scan : d'abord **point à point**, puis **point à plan**. Le tableau liste chaque étape avec son erreur et le nombre de points appariés ; la ligne au-dessus trace la baisse de l'erreur. {{ui:Arrêter}} termine le calcul après l'étape en cours et conserve ce qu'il a atteint. {{ui:Annuler}} annule l'ensemble du calcul (ou le dernier placement) ; {{ui:Réinitialiser}} remet le scan à ses coordonnées de fichier.

Pour rester rapide sur un ordinateur portable, l'ICP travaille sur une partie sous-échantillonnée des points ({{ui:Points utilisés}}, de 5,000 à 60,000) et ignore les correspondances situées au-delà de {{ui:Plus grande distance d'appariement}} (par défaut 5% de la taille du scan, qui diminue à mesure que le calage se stabilise). Il faut d'abord un placement approximatif : les scans qui se chevauchent à peine signalent qu'ils ne peuvent pas être appariés. Les surfaces seulement planes ou seulement droites ne peuvent pas corriger une position le long d'elles-mêmes ; ajoutez alors des paires.

## Enregistrer et exporter

- {{ui:Enregistrer le projet}} écrit un petit fichier `.ccscans.json` : le nom et la taille de chaque scan, une empreinte de ses 64 premiers Ko, avec sa transformation. Il ne contient aucun point. {{ui:Ouvrir un projet…}} retrouve les fichiers de scan à partir de ces références (les fichiers doivent d'abord être ajoutés) et rétablit toutes les transformations.
- {{ui:Exporter en LAS}} et {{ui:Exporter en E57}} écrivent un seul fichier contenant chaque scan à sa place recalée. Les points des originaux ne sont jamais réécrits : la transformation est appliquée à la sortie. Avec {{ui:Lire chaque point depuis les fichiers}} activé, chaque fichier est relu pour chaque point (jusqu'à 20 millions par scan) ; désactivé, seuls les points affichés dans la visionneuse sont écrits.
- {{ui:Afficher le nuage recalé}} (BimCraft) écrit le LAS et l'ouvre dans la vue 3D à côté du modèle, comme tout autre nuage.

:::note
Rien n'est envoyé. Le recalage s'effectue dans les unités propres aux fichiers et conserve les millimètres : un LAS est écrit avec une échelle adaptée (jusqu'à 0.1 mm), un E57 avec des doubles. Un système de coordonnées n'est reporté dans le LAS que si tous les scans désignent le même code EPSG. Le module d'écriture E57 est le nôtre ; il est vérifié en relisant ses fichiers avec ce lecteur et avec libE57Format.
:::
