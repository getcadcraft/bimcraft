---
title: Couper un modèle IFC avec un plan de coupe
summary: Tranchez le modèle 3D par le dessus, l'avant ou le côté, ou ne gardez que ce qui se trouve dans une boîte de coupe ou dans un volume de plusieurs boîtes aux faces inclinées, pour voir l'intérieur ; déplacez la coupe en faisant glisser ou en saisissant une valeur, inversez-la et choisissez ce que la coupe montre.
keywords: coupe, plan de coupe, boîte de coupe, poignées, glisser, marge, boîte de sélection, boîte de découpe, couper, découpage, trancher, coupe en plan, plan d'étage, façade, intérieur, inverser, décalage, volume de coupe, coupe en gradins, en L, incliner, coupe oblique, plan supplémentaire
from: 6315e71a
---

## Ce que vous allez faire

Coupez un modèle IFC avec un seul plan pour voir son intérieur : depuis le dessus pour un plan, ou depuis l'avant ou le côté pour une coupe à travers le bâtiment.

## Étapes

1. Ouvrez un modèle IFC. Voir [Ouvrir un modèle IFC et le parcourir en 3D](topic:open-ifc-model).
2. Cliquez sur {{ui:Coupe}} dans la barre d'outils, ou appuyez sur {{key:X}}. Le modèle est coupé à mi-hauteur, et une barre apparaît sous la barre d'outils.
3. Choisissez d'où couper : {{ui:Dessus}}, {{ui:Avant}} ou {{ui:Côté}}. Avant et Côté tournent aussi la vue pour regarder la coupe.
4. Déplacez la coupe : faites glisser le curseur **Décalage**, ou saisissez une distance en mètres dans la case puis appuyez sur {{key:Enter}}. Vous pouvez aussi saisir des millimètres, par exemple `1200 mm`.
5. Cliquez sur {{ui:Inverser}} pour garder l'autre côté de la coupe.
6. Cliquez sur un élément de la coupe pour voir ses propriétés.
7. Cliquez sur {{ui:Désactivé}}, cliquez à nouveau sur {{ui:Coupe}}, ou appuyez sur {{key:X}} pour supprimer la coupe.

## Une boîte de coupe

Cliquez sur {{ui:Boîte}} dans la même barre pour ne garder que ce qui se trouve dans une boîte. Chacun de {{ui:X}}, {{ui:Y}} et {{ui:Z}} porte deux curseurs : là où la boîte commence et là où elle finit, en mètres depuis le bord du modèle. Les valeurs s'affichent à côté.

- {{ui:Boîte autour de la sélection}} ajuste la boîte autour des éléments sélectionnés et fait un zoom sur eux. Elle laisse 300 mm de marge de chaque côté ; modifiez-la dans {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Marge autour de la sélection}}.
- Avec des éléments sélectionnés, {{ui:Afficher}} › {{ui:Boîte de coupe autour de la sélection}} ou {{key:Shift+X}} fait la même chose en une étape, même lorsqu'aucune coupe n'est active.
- Les **poignées** de la boîte la déplacent au pointeur : faites glisser un carré au milieu d'une face pour déplacer cette face, un carré au milieu d'une arête pour déplacer les deux faces qui s'y rejoignent, ou un carré dans un angle pour déplacer les trois. Les curseurs suivent. En {{ui:Dessus}}, un angle déplace la boîte en plan ; en {{ui:Avant}} ou {{ui:Côté}}, il la déplace en élévation.
- {{ui:Tout le modèle}} rouvre la boîte à tout le modèle.
- {{ui:Dessus}}, {{ui:Avant}} ou {{ui:Côté}} ramènent à un seul plan.

## Un volume de plusieurs boîtes, faces inclinées et plans supplémentaires

Une boîte n'est pas toujours la forme dont vous avez besoin : une coupe en gradins, une aile en L, ou une coupe le long d'un mur qui n'est pas d'équerre avec la trame.

1. Dans {{ui:Boîte}}, cliquez sur {{ui:Ajouter une boîte}}. La coupe garde désormais ce qui se trouve dans **l'une quelconque** des boîtes : deux boîtes forment donc un volume en gradins ou en L. La liste à côté indique la boîte que modifient les curseurs ({{ui:Boîte 1}}, {{ui:Boîte 2}}…) ; {{ui:Retirer cette boîte}} supprime celle que vous avez choisie. Un volume compte jusqu'à 8 boîtes.
2. Ouvrez {{ui:Inclinaison et plans}} pour façonner la boîte choisie :
   - Choisissez une {{ui:Face}} et saisissez de combien elle s'incline dans chaque sens, en degrés (jusqu'à 80). La face pivote autour de son milieu ; les autres faces restent où les curseurs les placent. {{ui:D'équerre}} la remet en place.
   - {{ui:Ajouter un plan}} coupe la boîte avec un plan de plus. {{ui:Faces}} est le sens vers lequel la partie coupée est orientée, en degrés depuis X vers Y ; {{ui:Pente}} est l'inclinaison de ce plan vers le haut (0 pour un plan vertical, 90 pour un plan horizontal) ; {{ui:Décalage}} est la distance du plan au milieu de la boîte, en mètres. × le supprime. Une boîte accepte jusqu'à 6 plans supplémentaires.
3. Là où le volume coupe des solides, les faces coupées sont remplies comme précédemment, y compris là où deux boîtes se rejoignent en gradin.

:::tip
Si le contour disparaît et qu'il ne reste rien, les inclinaisons ou les plans ne laissent rien à l'intérieur de cette boîte ; la barre l'indique. Ramenez une face en arrière ou modifiez le décalage d'un plan.
:::

## Un bâtiment tourné sur son site

Beaucoup de modèles placent le bâtiment en biais par rapport aux axes du fichier (nord réel, coordonnées partagées). Lorsque les murs sont inclinés, une nouvelle coupe s'aligne d'équerre sur le bâtiment : {{ui:Avant}}, {{ui:Côté}} et la boîte suivent ses propres murs, et {{ui:D'équerre avec le bâtiment}} dans la barre de coupe est activé. Cliquez dessus pour revenir aux axes du modèle, et à nouveau pour revenir en arrière (la barre d'état indique de combien le bâtiment est tourné). Avec **Paramètres › BimCraft › Un bâtiment tourné sur son site › Tel qu'implanté sur le site**, les coupes et les vues partent plutôt des axes du modèle. Voir [Paramètres](topic:settings).

## Ce que vous devez voir

- **Dessus** garde ce qui se trouve sous la coupe, de sorte que vous regardez dans les pièces depuis le haut. Le décalage se mesure vers le haut depuis le bas du modèle.
- **Avant** garde ce qui se trouve derrière la coupe, vu de face ; **Côté** garde ce qui se trouve au-delà, vu de côté. Le décalage se mesure depuis l'avant ou le côté du modèle.
- Un mince contour coloré indique où se trouve le plan.
- Là où le plan coupe un mur, une dalle ou un autre solide, la face coupée est remplie d'une couleur sombre, comme une coupe dessinée. {{ui:Remplissage}} dans la barre active ou désactive ce remplissage.
- Le ViewCube dans l'angle inférieur droit fait tourner le modèle pour regarder la coupe sous n'importe quel angle.
- Un clic sélectionne ce que vous voyez : ce qui est coupé ne peut pas être sélectionné.

## Erreurs fréquentes

- **Rien n'a changé.** La coupe se trouve peut-être au-dessus du toit ou hors du modèle. Faites glisser le curseur, ou saisissez un décalage plus petit.
- **Le décalage est revenu en arrière.** Une distance au-delà du modèle est ramenée à son extrémité, et la barre d'état l'indique.
- **Un problème (BCF) ne montre qu'une partie de mon volume.** Un problème (BCF) conserve une seule boîte avec ses faces inclinées et ses plans : la première boîte d'un volume. La barre d'état l'indique lorsque vous créez le problème.
- **La coupe est creuse.** {{ui:Remplissage}} dans la barre est désactivé : cliquez dessus pour remplir les faces coupées des murs, dalles et autres solides.
- **Une coupe remplie semble mouchetée ou il manque un morceau.** Le remplissage nécessite des solides fermés ; un élément dont la forme dans le fichier n'est pas fermée (une seule feuille, un feuillage d'arbre) reste non rempli plutôt que d'être peint par-dessus. Un élément composé de parties de couleurs différentes (un cadre et son vitrage) est rempli lorsque ses parties se joignent.
- **Où est la barre de coupe ?** Elle se trouve en haut de la vue 3D qu'elle coupe : dans la moitié 3D de {{ui:Diviser}}, et sous la barre de dessin en {{ui:Plan}} seul. Dans une vue basse, elle défile.

## Suite

- [Afficher et masquer les étages, les espaces et les arêtes](topic:storeys-and-spaces)
- [Voir un dessin DWG ou DXF en 3D](topic:dwg-in-3d) — les dessins en 3D ont le même plan de coupe
