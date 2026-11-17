---
title: Calculer un rendu du modèle
summary: "Faire une image en lumière du jour de la vue 3D : ciel, soleil à la latitude de votre site, ombres douces, vitrages ; avec WebGPU, calcul en path tracing sur la carte graphique avec ciels, caméra, mixage de lumière, étalonnage, brouillard et file de rendu."
keywords: rendu, préréglage, préréglages, préréglage de scène, intérieur, extérieur, vue en coupe, nuit, un clic, rendu, path tracing, path tracé, lancer de rayons, illumination globale, reflets, réfraction, haute qualité, photo, photoréaliste, réaliste, image, png, fixe, ciel, soleil, lumière du jour, ombres, ombres douces, occlusion ambiante, verre, fenêtres, métal, matériaux, exposition, luminosité, couvert, crépuscule, studio, présentation, visualisation, webgpu, débruitage, ciel physique, hdri, ies, profondeur de champ, panorama, balance des blancs, mixage de lumière, éléments de rendu, exr, png 16 bits, brouillard, caustiques, file de rendu
from: beb74cc7
---

{{ui:Rendu}} de la barre d'outils fait une image de la vue 3D qui ressemble à la lumière du jour : un ciel, le soleil là où la latitude du site le place, des ombres douces, la lumière de tout le ciel qui assombrit les angles, et des couleurs qui peuvent rendre du verre ou du métal. Le modèle et le fichier ne sont pas modifiés.

## Calculer la vue

1. Réglez la vue 3D comme vous voulez l'image : orbite et zoom, masquez les niveaux ou éléments que vous ne voulez pas, et mettez une [coupe](topic:section-plane) si l'image doit montrer une coupe.
2. Cliquez sur {{ui:Rendu}} dans la barre d'outils.
3. Choisissez une {{ui:Scène}} si celle qui est proposée ne convient pas (voir [Préréglages de scène](topic:render#scene-presets-a-good-picture-in-one-click)), choisissez la {{ui:Taille}}, puis cliquez sur {{ui:Rendu}} dans la boîte de dialogue.

   L'image se remplit pendant le calcul et s'affine à chaque passe. {{ui:Arrêter}} (ou {{key:Esc}}) y met fin plus tôt et conserve l'image obtenue jusque-là.

4. Cliquez sur {{ui:Enregistrer}} pour la télécharger en PNG, ou sur {{ui:Enregistrer sous}} pour un autre format (voir [Enregistrer l'image](topic:render#save-the-picture)). Elle porte le nom du fichier du modèle.

:::tip
Commencez avec {{ui:Brouillon}} à {{ui:Taille de la vue}} pour vérifier la caméra, puis calculez en {{ui:Bon}} ou {{ui:Meilleur}}, à une taille plus grande, pour l'image finale.
:::

## Préréglages de scène : une belle image en un clic

En haut de la boîte de dialogue, quatre boutons {{ui:Scène}}. Chacun règle à la fois le ciel, la luminosité, le sol, les arêtes, la qualité et le soleil, en un clic ; il n'y a donc rien à apprendre avant la première image. Cliquez sur l'un, puis sur {{ui:Rendu}}.

| Scène | Ce qu'elle règle | Pour |
|---|---|---|
| {{ui:Extérieur}} | Ciel dégagé, le soleil propre au modèle, sol activé | Le bâtiment vu de l'extérieur |
| {{ui:Intérieur}} | Ciel couvert (lumière uniforme, sans taches de soleil dures), un demi-stop plus clair | Une vue depuis l'intérieur d'une pièce |
| {{ui:Vue en coupe}} | Studio blanc, pas de sol, arêtes dans le rendu rapide | Un modèle coupé par une coupe |
| {{ui:Nuit}} | Le soleil couché (minuit en plein hiver pour l'hémisphère du site), un stop plus clair | Des lampes qui éclairent le modèle. Sans lampes, l'image est sombre |

- {{ui:Choisir pour cette vue}} choisit à votre place : {{ui:Vue en coupe}} lorsqu'une coupe est active, {{ui:Intérieur}} lorsque la caméra est à l'intérieur du modèle, sinon {{ui:Extérieur}}. La première fois que vous ouvrez la boîte de dialogue, elle démarre ainsi toute seule.
- Chaque réglage reste visible plus bas et peut être modifié. Dès que vous en changez un, la scène ne correspond plus, aucun bouton n'est enfoncé, et la ligne sous les boutons indique que les réglages sont les vôtres. Cliquez de nouveau sur la scène pour remettre ses valeurs.
- Une scène ne touche ni au moteur, ni au mode, ni à la taille, ni aux matériaux, ni à la caméra, ni aux lampes.

:::note
Les scènes donnent les mêmes valeurs dans ModelCraft et dans BimCraft. L'aspect de l'image finale dépend de votre modèle et de votre carte graphique.
:::

## Ce qui apparaît dans l'image

Ce que la vue 3D montre en plein est rendu : les éléments masqués et translucides, les niveaux masqués et les modèles masqués sont laissés de côté, et les pièces n'apparaissent que lorsque {{ui:Espaces}} est activé. Un plan de coupe ou une boîte de coupe découpe l'image comme il découpe la vue. Les éléments gardent leurs propres couleurs : la coloration par propriété (l'onglet {{ui:Couleur}}) n'est pas utilisée.

## Réglages

| Réglage | Ce qu'il fait |
|---|---|
| {{ui:Taille}} | La taille de la vue, le double de la taille de la vue, Full HD, 4K ou un carré |
| {{ui:Mode}} | {{ui:Rapide}}, ou {{ui:Haute qualité (path tracing)}} (ci-dessous) avec sa {{ui:Limite de temps}} |
| {{ui:Qualité}} | Le nombre de passes (ou, en haute qualité, d'échantillons) moyennées : {{ui:Brouillon}} 16, {{ui:Bon}} 64, {{ui:Meilleur}} 256. Plus de passes donnent des ombres et des bords plus lisses, mais prennent plus de temps |
| {{ui:Ciel}} | {{ui:Ciel dégagé}}, {{ui:Couvert}}, {{ui:Crépuscule}} ou {{ui:Studio blanc}} (un fond blanc uni) |
| {{ui:Soleil}} | 21 juin à 15 h, à la latitude que le fichier donne pour son site (IfcSite), orienté vers le vrai nord du modèle. Cochez {{ui:Utiliser une autre date et une autre heure pour cette image}} pour une autre heure |
| {{ui:Luminosité}} | Plus clair ou plus sombre, par paliers (stops) |
| {{ui:Sol sous le modèle}} | Un sol au point le plus bas du modèle, qui reçoit les ombres et se fond dans l'horizon |
| {{ui:Dessiner les arêtes}} | Dessine finement les arêtes des éléments par-dessus l'image |

Lorsque le soleil est sous l'horizon à l'heure choisie, c'est la nuit : le ciel s'assombrit et les lampes du modèle l'éclairent.

## Lampes

Chaque luminaire du modèle est une lampe dans l'image : les luminaires d'un fichier IFC (IfcLightFixture, ou un élément typé comme luminaire), y compris ceux que vous placez depuis la bibliothèque. Chacun éclaire vers le bas, depuis juste sous le luminaire. Lorsque le fichier donne la puissance (en watts) d'un luminaire, sa luminosité en découle ; sinon elle vaut 800 lumens, un blanc chaud.

La boîte de dialogue liste les lampes sous {{ui:Lampes}} : décochez-en une pour l'éteindre, ou saisissez sa luminosité en lumens. Ces modifications sont enregistrées dans l'IFC (le jeu de propriétés `CadCraft_Light` du luminaire, où vous pouvez aussi les modifier dans Propriétés), et {{key:Ctrl+Z}} les annule.

Lorsqu'un fichier ne dit rien sur l'emplacement de son site, le soleil est placé à 40° nord, et la boîte de dialogue l'indique. L'heure est l'heure locale du site, calculée à partir de sa longitude ; elle peut donc être décalée d'une heure là où les horloges sont réglées autrement.

Ces réglages sont conservés dans ce navigateur pour la prochaine image. Ils ne sont pas enregistrés dans le fichier IFC.

## Verre et autres matériaux

Sous {{ui:Matériaux}}, chaque couleur à l'écran a un aspect : {{ui:Mat}}, {{ui:Satiné}}, {{ui:Brillant}}, {{ui:Métal}}, {{ui:Métal poli}}, {{ui:Verre}} ou {{ui:Verre dépoli}}. Les couleurs que le fichier IFC rend transparentes (le vitrage des fenêtres, par exemple) commencent en {{ui:Verre}}.

:::note
En mode {{ui:Rapide}}, le verre et le métal reflètent le ciel, pas le reste du modèle, et la lumière ne se courbe pas à travers le verre. Le mode {{ui:Haute qualité (path tracing)}} ci-dessous fait les deux.
:::

## Haute qualité

Choisissez {{ui:Mode}} › {{ui:Haute qualité (path tracing)}} pour une image qui suit la lumière comme la voit un appareil photo :

- la lumière rebondit entre les surfaces : une pièce éclairée par une fenêtre ou par une lampe est éclairée sur tout son pourtour, et les couleurs débordent sur leurs voisins ;
- le verre est du vrai verre : la lumière s'y courbe et il reflète le modèle ;
- le métal et les surfaces polies reflètent le reste du modèle ;
- les panneaux lumineux éclairent comme des panneaux, avec des ombres douces.

C'est beaucoup plus lent que {{ui:Rapide}} : chaque passe recalcule la lumière de chaque pixel. L'image commence granuleuse et s'éclaircit à mesure que les échantillons s'ajoutent ; commencez donc petit ({{ui:Taille de la vue}}, {{ui:Brouillon}}) et choisissez une {{ui:Limite de temps}} : à l'échéance, l'image obtenue jusque-là est conservée. {{ui:Arrêter}} la conserve aussi. La première passe attend que le navigateur prépare le path tracer.

Lorsque le navigateur dispose de WebGPU, le path tracer est celui de CadCraft et tourne sur la carte graphique ; la ligne sous l'image l'indique. Après {{ui:Arrêter}} ou la limite de temps, {{ui:Reprendre}} poursuit la même image jusqu'à atteindre tous ses échantillons ; modifier un réglage ou cliquer de nouveau sur {{ui:Rendu}} repart de zéro. Sans WebGPU, l'image est calculée avec WebGL à la place (la ligne l'indique), et {{ui:Reprendre}} n'est pas proposé.

:::linux
Firefox et la plupart des configurations de Chrome sous Linux n'ont pas encore WebGPU ; la haute qualité y utilise donc WebGL.
:::

Dans ce mode, les arêtes ne sont pas dessinées, les textures montrent leur couleur et leur rugosité mais pas leurs reliefs, et une coupe est faite sur le modèle avant le début du calcul.

{{ui:Débruiter (supprime le grain restant après les échantillons)}} est activé par défaut : lorsque l'image est terminée, ou arrêtée, le grain restant est supprimé par un réseau de neurones conçu pour cela (le réseau publié par Intel Open Image Denoise, exécuté sur votre ordinateur : sur la carte graphique, sinon sur le processeur). {{ui:Afficher}} › {{ui:L'image avant débruitage}} la montre telle qu'elle a été calculée.

## Ciels et profils de lumière sur la carte graphique

Avec WebGPU, la haute qualité propose deux ciels de plus :

- {{ui:Ciel physique}} calcule la lumière du jour à partir de la hauteur du soleil : un bleu profond au zénith, une bande pâle à l'horizon, et un soleil qui devient plus chaud et plus faible en se rapprochant de l'horizon. {{ui:Brume}} va d'un jour très clair (2) à un jour brumeux (10).
- {{ui:Image de ciel (HDRI)}} éclaire le modèle avec une image panoramique d'un lieu réel. {{ui:Choisir une image…}} prend un fichier `.hdr` ou `.exr` équirectangulaire ; {{ui:Pivoter}} le fait tourner autour du modèle, et {{ui:Luminosité de l'image}} le rend plus clair ou plus sombre. L'image porte son propre soleil, donc le soleil du modèle n'est pas ajouté. Elle n'est conservée que tant que la page est ouverte : après une réouverture, choisissez-la de nouveau.

Chaque lampe de la liste {{ui:Lampes}} peut recevoir le profil de lumière d'un fabricant : {{ui:Profil IES…}} lit un fichier IES (LM-63), et la lampe projette alors sa lumière comme le fait ce luminaire (un spot étroit, un éclairage de mur). Toutes les lampes portant ce nom l'utilisent, et chaque lampe conserve sa propre luminosité. Cliquez sur le nom du profil pour cesser de l'utiliser.

Les fenêtres en verre clair aident la lumière du ciel à entrer dans une pièce.

Le mode {{ui:Rapide}} et le path tracer WebGL affichent {{ui:Ciel physique}} et {{ui:Image de ciel (HDRI)}} comme un ciel dégagé, et ignorent les profils de lumière.

## La caméra

{{ui:Caméra}} règle l'image comme une photographie :

- {{ui:Exposition}} : gardez le {{ui:Curseur de luminosité}}, ou choisissez {{ui:Réglages de la caméra}} et réglez l'{{ui:Ouverture (f/)}}, la {{ui:Vitesse d'obturation}} et l'{{ui:ISO}} comme sur un appareil ; l'EV à côté est la valeur d'exposition habituelle. f/16 à 1/100 s et ISO 100 correspondent à une journée ensoleillée ; une scène plus sombre demande une ouverture plus grande, un obturateur plus lent ou un ISO plus élevé. Cela fonctionne dans tous les modes.
- {{ui:Profondeur de champ}} floute ce qui est plus proche ou plus loin que la {{ui:Distance de mise au point (m)}}, comme le ferait un objectif de cette ouverture (laissez-la vide pour faire la mise au point sur ce qui se trouve au milieu de la vue) ; {{ui:Forme de l'ouverture}} donne aux reflets flous une forme ronde ou à lamelles.
- {{ui:Perspective à deux points (les lignes verticales restent verticales)}} met la caméra à niveau et décale l'image, comme le fait un objectif architectural à décentrement, pour que les murs ne penchent pas lorsque vous regardez un bâtiment vers le haut ou vers le bas.
- {{ui:Balance des blancs}} règle la couleur de lumière qui apparaît comme blanche : plus basse (par exemple 3000 K) pour une lumière de lampe chaude, plus haute pour l'ombre et les journées couvertes.
- {{ui:Projection}} : {{ui:Panorama 360°}} produit une image 2:1 de tout ce qui entoure la caméra, pour les visionneuses de panorama ; {{ui:Panorama stéréo à 360°}} empile un panorama pour l'œil gauche et un pour l'œil droit, pour les casques ; {{ui:Carte cubique (6 faces)}} produit six vues carrées dans une grille de 3 × 2. La largeur vient de {{ui:Taille}}.

La projection, la profondeur de champ, la perspective à deux points et la balance des blancs demandent le path tracer de la carte graphique (WebGPU) ; elles n'apparaissent donc qu'en {{ui:Haute qualité (path tracing)}}.

## Finir l'image

{{ui:Image}} étalonne l'image en haute qualité comme une photographie, et chaque commande modifie l'image finie immédiatement, sans nouveau calcul :

- {{ui:Rendu (transformation de vue)}} : {{ui:ACES filmique}} (l'image comme avant), {{ui:AgX}} (plus doux, conserve la couleur dans une lumière très vive), {{ui:Filmique}} (une courbe de film douce) ou {{ui:Standard}} (simple : la lumière vive est écrêtée en blanc).
- {{ui:Contraste}} et {{ui:Compression des hautes lumières}} (restitue du détail dans les parties très vives).
- {{ui:Halo}} (une lueur douce autour des lumières vives), {{ui:Éblouissement}} avec ses {{ui:Traînées d'éblouissement}} (rayons en étoile depuis les points les plus lumineux) et {{ui:Vignettage}} (coins plus sombres).
- {{ui:Table de couleurs (.cube)…}} applique un étalonnage de couleur depuis un fichier `.cube`, avec son {{ui:Intensité de la table de couleurs}} ; comme une image de ciel, elle n'est conservée que tant que la page est ouverte.

## Enregistrer l'image

{{ui:Enregistrer sous}} à côté de {{ui:Enregistrer}} choisit le fichier : {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} pour le partage (JPEG et WebP seulement là où le navigateur peut les écrire), et, après un rendu haute qualité sur la carte graphique, aussi :

- {{ui:PNG, 16 bits}} : l'image étalonnée, avec des paliers plus fins entre les nuances, pour l'impression ou une retouche ultérieure.
- {{ui:EXR, toutes les couches (flottant 32 bits)}} : l'image telle que calculée (lumière linéaire, sans étalonnage), avec chaque élément de rendu et chaque groupe de lumières sur sa propre couche, pour les logiciels de compositing.
- {{ui:Fichier de rendu (.ccrender, pour retoucher plus tard)}} : tout ce dont la boîte de dialogue a besoin pour mélanger et étalonner de nouveau l'image. {{ui:Ouvrir un fichier de rendu…}} le rouvre, avec son mélange et son étalonnage, sans nouveau calcul.

## Mélanger les lumières après le rendu

Activez {{ui:Mixage de lumière (modifier la couleur et la luminosité de chaque lumière après le rendu)}} avant de cliquer sur {{ui:Rendu}}. Lorsque l'image est terminée (ou arrêtée), {{ui:Mélanger l'image}} liste ses lumières par groupes : le ciel, le soleil, et les lampes par leur nom (chaque lampe portant le même nom forme un groupe). Désactivez un groupe, donnez-lui une couleur, ou rendez-le plus clair ou plus sombre, et l'image change aussitôt, sans nouveau calcul. {{ui:Enregistrer le mélange}} conserve le mélange sous un nom, à choisir plus tard ; {{ui:Tel que rendu}} revient à l'image telle qu'elle a été calculée. {{ui:Enregistrer}} enregistre l'image mélangée.

{{ui:Éléments de rendu (albédo, normales, profondeur, diffus, spéculaire, transmission, émission, ID)}} conserve aussi les parties de l'image. {{ui:Afficher}} bascule la vue sur l'une d'elles : les couleurs de surface (albédo), les normales, la profondeur, la lumière diffuse, spéculaire et transmise (chacune directe et indirecte), ce qui brille et le ciel, et une couleur par objet ou par matériau pour créer des masques.

Les deux conservent des couches supplémentaires sur la carte graphique. Pour les grandes tailles, la carte graphique peut manquer de place ; la boîte de dialogue le signale, et une taille plus petite fonctionne.

## Brouillard, fumée, bruit et caustiques

Ces réglages se trouvent dans {{ui:Brouillard, fumée et bruit}} et fonctionnent en {{ui:Haute qualité (path tracing)}} sur la carte graphique ; les autres moteurs ne les proposent pas.

- {{ui:Brouillard et brume}} remplit l'air jusqu'à une hauteur avec une brume que le soleil, le ciel et les lampes éclairent. {{ui:Distance de visibilité, en mètres}} règle son épaisseur (environ 100 m pour une légère brume, 20 m pour un brouillard épais), {{ui:Hauteur du brouillard au-dessus du sol, en mètres}} indique où il s'arrête, et {{ui:Rayons de lumière}} indique à quel point la brume rayonne vers la lumière. La lumière du soleil quitte le brouillard par son sommet ; là où le soleil passe par une fenêtre ou entre des bâtiments, vous le voyez sous forme de rayons de lumière.
- {{ui:Fumée ou nuage}} ajoute un volume de fumée ou de nuage éclairé comme le brouillard. {{ui:Nature}} est un {{ui:Nuage}}, une {{ui:Colonne de fumée}} ou {{ui:Depuis un fichier de volume (.ccvol)}}, le format de grille propre à CadCraft. {{ui:Détail}} et {{ui:Variation}} modifient un nuage ou une colonne créée ; {{ui:Taille de son plus grand côté, en mètres (0 = la taille du modèle)}}, {{ui:Déplacer en X (m)}}, {{ui:Déplacer en Y (m)}}, {{ui:Déplacer en Z (m)}} et {{ui:Pivoter}} le placent (il commence au milieu du modèle), {{ui:Épaisseur}} le rend plus dense, {{ui:Lueur vers l'avant}} le rend plus clair vers la lumière, et {{ui:Couleur}} le teinte. Un fichier de volume n'est conservé que tant que la page est ouverte, comme une image de ciel.
- {{ui:Arrêter plus tôt là où l'image est nette (échantillonnage adaptatif)}} n'attribue plus d'échantillons aux pixels qui se sont stabilisés. {{ui:Bruit accepté}} est la quantité de grain qui subsiste lorsqu'un pixel s'arrête. La ligne sous l'image indique le nombre moyen d'échantillons reçus par pixel.
- {{ui:Caustiques (lumière courbée par le verre ou réfléchie par les miroirs)}} suit la lumière des lampes et du soleil, si bien que la tache lumineuse sous une boule de verre, ou la lumière d'un miroir sur un mur, sort nette au lieu de granuleuse. Elle est désactivée lorsque le brouillard, la fumée, le mixage de lumière ou les éléments de rendu sont actifs, et elle est prévue pour les images fixes, non pour les images à 360°.

## La file de rendu

{{ui:File de rendu}} dans la boîte de dialogue : {{ui:Ajouter cette image à la file}} conserve les réglages et la vue de l'image, et {{ui:Démarrer la file}} calcule ce qui attend, l'un après l'autre, sur cet ordinateur. Fermer la page conserve la file ; ouvrez le même modèle pour reprendre. {{ui:Enregistrer}} télécharge une image terminée ; {{ui:Supprimer}} et {{ui:Effacer les terminés}} rangent la liste. La file calcule en haute qualité, elle a donc besoin de WebGPU.

## Durée du calcul

L'image est calculée sur votre ordinateur, par sa carte graphique ; rien n'est envoyé en ligne. La durée augmente avec les passes et les pixels : {{ui:Meilleur}} a 16 fois plus de passes que {{ui:Brouillon}}, et une image 4K a environ quatre fois plus de pixels qu'une image Full HD. Les grands modèles prennent plus de temps par passe.
