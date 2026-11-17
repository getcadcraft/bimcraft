---
title: Examiner le modèle avec un casque VR
summary: Parcourez le modèle IFC en grandeur réelle avec un casque VR : déplacez-vous, tournez, mesurez, coupez-le, placez des problèmes BCF avec une image, voyez-le comme une maquette de table et retrouvez les autres participants d'une session Live.
keywords: vr, réalité virtuelle, casque, webxr, xr, immersif, quest, oculus, vive, index, pico, parcourir, pas à pas, téléportation, revue de conception, coordination, revue, mesure, coupe, problème, problèmes, bcf, maquette, modèle réduit, présence, avatars, live, ensemble
from: 8994b36d
---

{{ui:VR}} sur la barre d'outils vous place dans le modèle avec un casque VR, en grandeur réelle. Vous vous tenez là où se trouve la caméra de la vue 3D, sur le sol situé en dessous, face dans la même direction. Le casque affiche ce que montre la vue 3D : les niveaux, éléments et modèles masqués restent cachés, et les matériaux peints sont repris. Rien n'est envoyé : le navigateur dessine sur cet ordinateur (ou dans le navigateur du casque).

## Ce qu'il vous faut

- Un casque que le navigateur peut piloter (WebXR) : le navigateur propre à un casque autonome, ou Chrome ou Edge sur un PC avec un casque connecté.
- Un modèle IFC ouvert, sur une page sécurisée (https), comme c'est le cas sur ce site.

Lorsqu'il n'y a pas de casque, {{ui:VR}} est grisé et indique pourquoi.

## Démarrer

1. Réglez la vue 3D à l'endroit de départ : dans une pièce, ou à l'extérieur face au bâtiment.
2. Cliquez sur {{ui:VR}} dans la barre d'outils.
3. Mettez le casque.

Le menu se trouve au dos de votre main gauche. Pointez-le avec la manette droite et appuyez sur la gâchette pour choisir un bouton. (Avec une seule main, le menu flotte devant l'endroit où vous avez commencé.)

## Se déplacer

- **Sauter :** dans {{ui:Déplacer}}, pointez un sol et appuyez sur la gâchette ; vous atterrissez là. Ou poussez le stick vers l'avant pour viser, et relâchez pour sauter. Vous ne pouvez atterrir que sur des sols, dalles et terrains (surfaces tournées vers le haut), jamais sur un mur.
- **Tourner :** poussez le stick à gauche ou à droite : vous tournez de 30° à chaque fois.
- **Marcher :** dans votre zone de jeu, marchez simplement.

## Mesurer

Choisissez {{ui:Mesurer}}, puis appuyez sur la gâchette sur deux points. La distance s'affiche entre eux, en mètres. Un point proche d'un coin s'accroche à ce coin.

## Couper le modèle

Choisissez {{ui:Coupe}} et appuyez sur la gâchette sur une surface :

- sur un mur (ou tout ce qui n'est pas un sol) : tout ce qui se trouve entre vous et cette surface est retiré, pour voir à l'intérieur. Cela fonctionne mieux depuis l'extérieur, ou à travers une pièce ;
- sur un sol, par le haut : une coupe de plan à 1.2 m au-dessus de ce sol, pour que les murs montrent leur partie basse.

{{ui:Effacer}} retire la coupe et les mesures. Si un [plan de coupe](topic:section-plane) coupe le modèle au départ, le casque démarre avec lui.

## Placer un problème

Choisissez {{ui:Problème}} et appuyez sur la gâchette à l'endroit du problème. Une épingle numérotée le marque, et le problème passe dans l'onglet {{ui:Problèmes}} comme sujet BCF, avec une image de ce que vous avez vu et la caméra à l'endroit où vous étiez, dans les coordonnées propres au modèle. Enregistrez-les avec le reste de vos [problèmes](topic:issues-bcf) en fichier BCF ; les autres outils de coordination les ouvrent à la même vue.

Ajoutez un commentaire à un problème après avoir quitté la VR, dans l'onglet Problèmes : la saisie dans le casque n'est pas encore disponible.

## Voir le modèle comme une maquette de table

{{ui:Maquette}} réduit le modèle pour qu'il tienne sur une table devant vous ; faites le tour, ou faites-le pivoter avec le stick. {{ui:Taille réelle}} vous remet là où vous étiez.

## Avec d'autres, en direct

Dans une [session Live](topic:work-live), chaque personne en VR voit les autres comme une tête et deux mains de leur propre couleur, avec leur nom, et un point là où chacune pointe. Les modifications de chacun parviennent à votre casque en un instant. Les personnes au bureau ne sont pas encore affichées dans le casque.

## Quitter

Choisissez {{ui:Quitter la VR}} (ou retirez le casque et mettez fin à la session là). La vue 3D à l'écran se déplace à l'endroit où se trouvait votre tête.

:::note
Testé avec un émulateur de casque, pas encore sur chaque casque. Un grand modèle peut faire saccader le casque : masquez d'abord les niveaux ou modèles dont vous n'avez pas besoin ([masquer et isoler](topic:hide-and-isolate)).
:::
