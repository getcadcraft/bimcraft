---
title: Envoyer un élément vers PartCraft et le reprendre
summary: Choisissez un support, une équerre, une clôture, un garde-corps ou un équipement, concevez-le comme pièce dans PartCraft avec le bâtiment autour, puis acceptez la nouvelle forme dans le modèle.
keywords: partcraft, pièce, envoyer, lien, élément, support, équerre, clôture, garde-corps, équipement, conception, aller-retour, accepter, modifié, liens de pièces
from: 4ce2f449
---

## Ce que vous allez faire

Concevoir un élément du bâtiment comme pièce : l'envoyer vers PartCraft, le modifier (découper, ajouter, percer, redimensionner), puis ramener la nouvelle forme dans le modèle.

## Étapes

1. Sélectionnez un élément du modèle : un élément générique, un équipement, un poteau, une poutre, un garde-corps ou du mobilier.
2. Choisissez {{ui:Part links}} dans la barre d'outils, puis {{ui:Send to PartCraft}}. PartCraft s'ouvre dans un nouvel onglet avec l'élément comme pièce. Les éléments situés à moins de 3 m sont dessinés en gris à côté, pour concevoir la pièce en place. Ils ne peuvent pas être modifiés dans PartCraft.
3. Modifiez la pièce dans PartCraft. Dans PartCraft, choisissez {{ui:File}} › {{ui:Export}} › « Enregistrer dans BimCraft ». Vous pouvez enregistrer autant de fois que vous le souhaitez.
4. De retour dans BimCraft, le bouton {{ui:Part links}} affiche un nombre, et la fiche liste l'élément comme {{ui:Changed in PartCraft}}, avec la variation de taille et de volume exprimée en mots.
5. Choisissez {{ui:Show}} pour le regarder, puis {{ui:Accept}} pour donner à l'élément la nouvelle forme, ou {{ui:Keep mine}} pour le laisser tel quel.

## Ce que vous devez voir

- Accepter constitue une seule étape d'annulation. L'élément garde sa position, son GlobalId, son type, son matériau et ses propriétés. Seul son corps est remplacé.
- L'élément reçoit un ensemble de propriétés {{ui:CadCraft_PartLink}} avec le lien, son état et la révision.
- {{ui:Send again}} rouvre le même élément dans PartCraft, avec le même lien.

## Bon à savoir

- Les murs, planchers, toits, portes, fenêtres, escaliers, rampes et espaces sont dessinés par les outils de construction à partir d'un contour, et reconstruits après chaque modification. Un corps venant d'une autre application serait écrasé : ces éléments sont donc refusés, avec la raison indiquée.
- La forme revient sous forme de maillage (une tessellation IFC), et non sous forme de fonctions de la pièce. L'historique de la pièce reste dans PartCraft.
- Si l'élément a été modifié dans le modèle après l'envoi, la fiche le signale avant que vous acceptiez : l'acceptation remplace ces modifications.
- Rien n'est téléversé. Les deux applications sont des pages d'un même site et se transmettent l'élément dans ce navigateur. Elles doivent être ouvertes toutes les deux dans le même navigateur.
- L'élément doit former un solide fermé dans PartCraft. Un élément dont la forme présente de grandes ouvertures est refusé, avec le nombre d'arêtes ouvertes.
- Pour accepter, rendez actif le modèle qui contient l'élément.
