---
title: Lier d'autres modèles pour la coordination
summary: Afficher un autre modèle IFC à côté du vôtre, par référence (jamais fusionné), le positionner par coordonnées partagées, coordonnées cartographiques ou deux points, vous y accrocher pendant le dessin et le recharger lorsque son fichier change.
keywords: lien, modèle lié, référence, xref, coordination, fédération, structure, MEP, consultant, coordonnées partagées, levé, coordonnées cartographiques, recharger, décharger, référence de document, IfcDocumentReference
from: 3e0f1eab
---

## Ce que vous allez faire

Dessiner par rapport au modèle d'un consultant (la structure, les réseaux, le bâtiment existant) sans rien copier dans votre propre fichier.

Un **modèle lié** est affiché dans la vue 3D et coupé sur vos plans, mais il n'est jamais modifié ni enregistré dans votre modèle. Votre modèle ne conserve que le lien : le nom du fichier et l'endroit où il se place.

## Lier un modèle

1. Dans la section {{ui:Modèles liés}} du panneau de gauche, cliquez sur {{ui:Lier un modèle…}} et choisissez le fichier IFC. Il s'affiche aussitôt, et sa ligne indique **Affiché**.
2. Choisissez l'emplacement dans {{ui:Positionnement}} :
   - **Coordonnées partagées** (par défaut) : ses coordonnées sont les vôtres, comme lorsque les deux modèles ont été implantés à partir de la même origine.
   - **Coordonnées cartographiques** : les coordonnées cartographiques des deux fichiers les alignent (les deux doivent avoir une conversion cartographique ; BimCraft le signale lorsque l'un n'en a pas).
   - **Par deux points…** : cliquez un point sur le modèle lié, puis son emplacement dans le vôtre ; recommencez avec une deuxième paire. Le lien est alors déplacé et tourné (autour de la verticale) pour s'ajuster.
3. Chaque modification du lien ou du positionnement constitue une étape : {{key:Mod+Z}} l'annule.

## Travailler avec le lien

- Les plans montrent le modèle lié coupé à la hauteur de coupe du niveau, en traits fins, et l'outil {{ui:Mur}} ainsi que les autres outils de dessin s'accrochent à ses angles et à ses arêtes.
- Sélectionnez ses éléments dans la vue 3D pour lire leurs propriétés ; un modèle lié n'est jamais celui que vous modifiez, donc son bouton radio dans {{ui:Modèles}} est désactivé.
- **Le fichier a changé ?** Lorsque le navigateur peut surveiller le fichier (fichier ouvert via son sélecteur de fichiers, ou dans Studio), BimCraft recharge le lien automatiquement quelques secondes après un nouvel enregistrement du fichier, et l'indique. Sinon, cliquez sur {{ui:Recharger}}.
- {{ui:Décharger}} le masque et libère la mémoire ; le lien reste dans votre modèle. {{ui:Charger…}} l'affiche de nouveau (vous choisissez le fichier : un navigateur ne peut pas ouvrir un fichier par son seul nom).
- Le bouton × supprime le lien de votre modèle.

## Ce que vous devez voir

- Dans votre fichier IFC : un IfcDocumentReference pour chaque lien (le nom du fichier), rattaché au projet, et son emplacement dans l'ensemble de propriétés du projet CadCraft_Links. Lorsque vous rouvrez votre modèle, ses liens sont listés comme **Non chargé** tant que vous ne les avez pas chargés.

:::note
La détection de conflits, la comparaison et la recherche peuvent utiliser un lien chargé comme tout autre modèle ouvert : voir [Voir plusieurs modèles IFC ensemble](topic:several-models).
:::
