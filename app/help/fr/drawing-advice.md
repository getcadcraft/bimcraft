---
title: "Conseils de dessin : les dimensions inhabituelles sont créées, avec un avertissement"
summary: BimCraft crée ce que vous demandez. Une dimension hors de l'usuel devient un avertissement dans Problèmes ; cela ne vous empêche jamais de dessiner ou d'enregistrer.
keywords: conseils, avertissement, problèmes, refusé, ne dessine pas, trop petit, trop étroit, minimum, limite, largeur d'escalier, contremarche, marche, poteau, rampe, dimension de porte, ligne de trame, hauteur de niveau, lucarne, escalier en colimaçon, pente de plateforme, mur court, sans blocage
from: 20090130
---

## Ce que vous allez faire

Dessinez une dimension qui n'est pas la dimension habituelle, et voyez où BimCraft vous en informe.

## Étapes

1. Dessinez ou modifiez l'élément comme vous le souhaitez : par exemple un escalier de 400 mm de large.
2. BimCraft le crée tel que demandé.
3. Ouvrez {{ui:Problèmes}} dans la barre supérieure. Sous **Conseils de dessin**, un avertissement nomme l'élément, la dimension que vous avez donnée et la plage habituelle.
4. Cliquez sur l'avertissement pour sélectionner l'élément. Modifiez la dimension s'il s'agit d'une erreur, ou laissez-la : un avertissement peut être accepté, avec ou sans motif.

## Ce qu'est un conseil

Ces cas étaient refusés. Ils sont désormais créés, chacun avec un avertissement :

- **Escaliers** : plus étroits que 500 mm ou plus larges que 5 m ; contremarches hors de 100 à 300 mm ; marches hors de 150 à 600 mm.
- **Escaliers en colimaçon** : un poteau hors de 40 à 400 mm ; marches de moins de 100 mm de profondeur sur la ligne de marche.
- **Poteaux** : moins de 50 mm de côté ou moins de 300 mm de haut.
- **Rampes** : moins de 300 mm de large.
- **Portes et fenêtres** : moins de 100 mm de large ou de haut.
- **Lignes de trame** : moins de 100 mm de long.
- **Murs** : un mur laissé à moins de 50 mm de long, par exemple par un ajustement.
- **Niveaux** : moins de 1 m ou plus de 100 m de haut (nouveau bâtiment, niveaux décalés, hauteur d'un niveau).
- **Lucarnes** : hors de 600 mm à 12 m de large, un mur de façade hors de 300 mm à 4 m, un débord de plus de 1 m, des murs hors de 50 à 400 mm.
- **Plateformes de bâtiment** : pentes latérales hors de 1:1 à 10:1.

## Ce qui reste refusé

Seul ce qui ne peut être construit ou trouvé est refusé, chacun avec un message qui en explique la raison :

- Une dimension inférieure à 10 mm (un mur de moins de 1 mm) : il n'y a rien à construire.
- Une lucarne dont la largeur ne dépasse pas deux fois l'épaisseur de son mur : ses deux murs latéraux se rejoindraient.
- Une plateforme de bâtiment dont les pentes latérales sont plus raides que 0.1:1 (c'est un mur de soutènement) ou plus plates que 100:1 (le terrassement serait sans fin).
- Un élément qui ne tient pas à l'endroit où vous l'avez placé, un contour qui se croise lui-même, ou un élément qui n'est plus dans le modèle.

## Bon à savoir

- Le conseil est calculé à partir du modèle : il est donc de nouveau là lorsque vous rouvrez le fichier plus tard, et il disparaît lorsque la dimension est corrigée.
- Les contrôles de modèle, les jeux de réglementations et les contrôles IDS ne font aussi que lister ce qu'ils trouvent. Rien dans {{ui:Problèmes}} ne vous empêche de dessiner ou d'enregistrer.
- Les plages habituelles relèvent de la pratique courante, et non d'un code de construction. Pour un code, ajoutez le module complémentaire Réglementation du bâtiment et choisissez votre lieu.

## Suite

- [Vérifier un modèle pour les problèmes courants](topic:model-checks)
- [Escaliers et garde-corps](topic:stairs-and-railings)
