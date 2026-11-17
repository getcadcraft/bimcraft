---
title: La vue en direct
summary: Un panneau à côté du modèle qui l'affiche avec un rendu en temps réel, avec soleil, ombres et lumière réfléchie, et qui suit chaque modification que vous faites ; parcourez-le et réglez l'heure de la journée et le mois.
keywords: vue en direct, temps réel, rendu en temps réel, parcours, marche, première personne, présentation, client, second écran, seconde fenêtre, moniteur, heure de la journée, soleil, saison, mois, ombres, occlusion ambiante, reflets, lumière réfléchie, éclairage global, webgpu, webgl
from: ea5c02bf
---

La vue en direct affiche le modèle avec un rendu en temps réel : le ciel et le soleil selon le lieu et la date de votre site, les ombres portées par le soleil, les peintures et matériaux que vous avez donnés aux éléments, les lampes, et la lumière réfléchie par les murs et les sols. Elle suit ce que vous faites : si vous tournez la vue 3D, elle tourne aussi ; si vous modifiez le modèle, elle montre le changement un instant plus tard. Rien n'est téléversé.

Elle dessine la même scène, les mêmes peintures, lampes et soleil que [Calculer un rendu](topic:render) ; pour une image finale, utilisez celui-ci.

## Ouvrir la vue

1. Ouvrez un modèle et choisissez {{ui:Vue en direct}} dans la barre d'outils. Le panneau s'ouvre par-dessus l'application, en bas à droite.
2. Faites glisser sa barre de titre pour le déplacer, tirez sur son coin pour l'agrandir.
3. {{ui:Vue en direct dans une nouvelle fenêtre}} (le bouton à côté) ou {{ui:Nouvelle fenêtre}} dans le panneau la place dans une fenêtre distincte, pour un second écran. Si votre navigateur bloque les fenêtres surgissantes, elle s'ouvre sous forme de panneau.
4. {{ui:Fermer}} la ferme.

## Les commandes

| Commande | Ce qu'elle fait |
|---|---|
| {{ui:Suivre la vue}} | Activé : la vue en direct regarde là où regarde la vue 3D. La marche le désactive |
| {{ui:Marche}} | Parcourir le modèle (voir ci-dessous) |
| {{ui:Gravité}} | En marche : se tenir sur les sols et monter les escaliers. Désactivée : voler |
| {{ui:Heure}} | L'heure de la journée. Le soleil se déplace pendant que vous faites glisser le curseur |
| {{ui:Mois}} | Le mois, pour voir le soleil en hiver et en été |
| {{ui:Qualité}} | {{ui:Pour cet ordinateur}}, ou {{ui:Basse}}, {{ui:Moyen}} ou {{ui:Haute}} |

La ligne du bas indique ce qui dessine la vue (WebGPU ou WebGL 2), la qualité et la lumière réfléchie.

## Parcourir le modèle

1. Orientez la vue 3D vers l'endroit où vous voulez vous tenir et choisissez {{ui:Marche}}. Vous vous tenez sur le sol, sous le point de vue de la vue, d'une hauteur de 1.6 m.
2. Cliquez dans la vue en direct, puis utilisez {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou les touches fléchées. Maintenez {{key:Shift}} pour courir. Faites glisser pour regarder autour de vous.
3. Les marches jusqu'à 40 cm sont franchies (escaliers) ; tout ce qui est plus haut est un mur. Les murs vous arrêtent et vous glissez le long de ceux-ci.
4. Avec {{ui:Gravité}} désactivée, vous volez : {{key:E}} monte, {{key:Q}} descend.
5. {{key:Esc}} arrête la marche.

## Lumière réfléchie

La lumière qui se réfléchit depuis un mur ensoleillé sur le sol, ainsi que l'intérieur plus sombre d'une pièce, sont calculées en arrière-plan sur chaque cœur du processeur. Pendant le calcul, la ligne du bas affiche {{ui:Lumière réfléchie : 40 %}} ; une fois prêt, la vue la prend en compte. Après une modification, le calcul recommence.

:::note
Il s'agit d'une approximation pour une vue en direct, et non d'une image calculée : les petits détails situés entre les points reçoivent la lumière réfléchie des points voisins.
:::

:::note
Les navigateurs diffèrent. Lorsque le navigateur dispose de WebGPU, la vue en direct l'utilise ; sinon, elle utilise WebGL 2 et l'aspect est le même. Sans l'un ni l'autre, le panneau l'indique.
:::
