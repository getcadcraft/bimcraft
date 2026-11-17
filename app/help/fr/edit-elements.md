---
title: Supprimer, couper, copier et coller des éléments du bâtiment
summary: Sélectionnez des murs, des portes, du mobilier ou tout autre élément d'un modèle IFC ; supprimez-les, coupez-les, ou copiez-les et collez-les à l'endroit où vous cliquez, à la même position ou sur un autre niveau.
keywords: supprimer, retirer, effacer, couper, copier, coller, dupliquer, déplacer, tout sélectionner, sélectionner tout, élément du bâtiment, mur, porte, fenêtre, escalier, ouverture, annuler
from: d9eec37f
---

## Ce que vous allez faire

Modifier le contenu d'un modèle IFC : retirer les éléments dont vous n'avez pas besoin, copier un mur ou un ensemble de mobilier vers un autre endroit, ou déplacer des éléments en les coupant puis en les collant. Chaque modification est une étape que vous pouvez annuler, et l'enregistrement écrit un nouveau fichier : votre original reste donc intact.

## Étapes

1. Ouvrez un modèle IFC. Voir [Ouvrir un modèle IFC et le parcourir en 3D](topic:open-ifc-model).
2. Sélectionnez ce que vous voulez modifier : cliquez sur un élément, maintenez {{key:Mod}} ou {{key:Shift}} et cliquez pour en sélectionner d'autres, ou appuyez sur {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}) pour sélectionner tous les éléments affichés.
3. Ensuite :
   - **Supprimer :** appuyez sur {{key:Delete}}, ou {{ui:More}}, {{ui:Delete}}.
   - **Copier :** appuyez sur {{key:Mod+C}} ou cliquez sur {{ui:Copy}}.
   - **Couper :** appuyez sur {{key:Mod+X}}, ou {{ui:More}}, {{ui:Cut}}. Les éléments disparaissent, et vous pouvez les coller.
4. Pour coller, appuyez sur {{key:Mod+V}} ou cliquez sur {{ui:Paste}}. Une boîte transparente de la taille de ce que vous avez copié suit le pointeur sur le niveau choisi dans la barre de placement. Appuyez sur {{key:R}} pour la tourner de 90°, puis cliquez à l'endroit voulu. Chaque clic place une autre copie ; appuyez sur {{key:Esc}} pour arrêter.
5. Ou appuyez sur {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}) : après une coupe, les éléments reviennent exactement à leur place ; après une copie, la copie se place juste à côté des originaux.
6. Cliquez sur {{ui:Save as IFC}} pour télécharger le modèle modifié.

## Ce qui accompagne un élément

- **Parties :** un escalier entraîne ses volées, un mur-rideau ses panneaux ; tout élément composé de parties les entraîne toutes.
- **Ouvertures :** un mur entraîne les ouvertures qui y sont découpées. Supprimer une porte ou une fenêtre supprime aussi l'ouverture qu'elle remplissait, de sorte que le mur se referme, comme dans un logiciel de modélisation. Supprimer un mur dessiné dans BimCraft supprime aussi ses portes et fenêtres, et rattache les murs restants. Supprimer un mur d'un fichier créé ailleurs laisse ses portes et fenêtres à leur place.
- **Données :** une copie a le même type, les mêmes matériaux, ensembles de propriétés et quantités que l'original, ainsi qu'un nouveau GlobalId. Modifier ensuite une valeur de la copie ne touche pas à l'original.
- **Les éléments de bibliothèque** conservent leurs données de bibliothèque ; une copie reçoit le prochain numéro d'élément libre, et un élément coupé puis recollé conserve le sien.

## Ce que vous devez voir

- « Supprimé : … » ou « Collé : … » dans la liste {{ui:Changes}}. {{key:Mod+Z}} annule la dernière modification ; {{key:Mod+Y}} la rétablit.
- Après une suppression, la barre d'état indique combien de parties et d'ouvertures ont aussi été supprimées.
- Les éléments collés sont sélectionnés : vous pouvez donc les coller à nouveau à la même position pour créer une rangée, ou les supprimer.

## Bon à savoir

- Les copies utilisent la même géométrie que l'original (IFC permet aux éléments de la partager), donc le fichier grossit très peu.
- Les éléments du bâtiment se collent dans le modèle d'où ils proviennent, dans le même onglet. Pour utiliser des éléments de bibliothèque placés dans un autre modèle, copiez un élément à la fois : voir [Copier, coller et dupliquer des éléments de bibliothèque](topic:copy-paste).
- Les niveaux, les espaces, les bâtiments et le site ne peuvent pas être supprimés ni copiés. Sélectionnez plutôt les éléments qui s'y trouvent. Une pièce dessinée dans BimCraft provient des murs qui l'entourent : supprimez un mur pour réunir deux pièces.
- Les murs, portes et fenêtres dessinés avec les outils mur, porte et fenêtre de BimCraft ne peuvent pas encore être copiés, coupés ni dupliqués ; la barre d'état l'indique. Dessinez-les à nouveau. La suppression fonctionne.
- Copier place aussi dans le presse-papiers, sous forme de texte, les noms et propriétés de ce que vous avez copié, pour les coller dans un tableur ou un e-mail.

## Erreurs fréquentes

- **{{ui:Delete}} est grisé.** Rien n'est sélectionné, ou seuls des niveaux ou des espaces le sont. Placez le pointeur dessus pour lire la raison.
- **Coller indique que les éléments viennent d'un autre modèle.** Vous avez ouvert un autre modèle depuis la copie. Rouvrez le premier modèle et copiez-y les éléments.
- **La copie collée est sur un autre étage.** Le {{ui:Storey}} de la barre de placement détermine où elle va ; sélectionnez le niveau avant de cliquer.

## Voir aussi

- [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate)
- [Touches et souris](topic:keyboard#edit)
