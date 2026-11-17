---
title: Niveau de développement (LOD) et contrôles des jalons
summary: Attribuez un niveau de développement aux éléments, voyez d'où il provient, vérifiez le modèle par rapport au LOD qu'exige un jalon, et corrigez les étiquettes manquantes et les pièces sans nom. Chaque contrôle donne un conseil ; rien n'est bloqué.
keywords: lod, niveau de développement, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, jalon, tableau des jalons, contrôles du modèle, étiquettes manquantes, pièces sans nom, générique au début, classe ifc, classification
from: 2091c79b
---

## Ce que vous allez faire

Indiquez le degré de développement de chaque élément, puis vérifiez l'ensemble du modèle par rapport à ce qu'exige un jalon du projet.

## Étapes

1. Choisissez un élément (ou plusieurs) et ouvrez {{ui:Propriétés}}. Repérez {{ui:Niveau de développement}}.
2. Choisissez un niveau dans la liste. Chaque niveau est désigné par ce qu'il signifie, et chacun inclut les niveaux inférieurs. Une seule étape d'annulation couvre toute la sélection.
3. Vérifiez d'où provient le niveau : de cet élément, de son type, ou d'un repère vérifié sur le terrain.
4. Pour vérifier le modèle, ouvrez {{ui:Contrôles du modèle}} à gauche, puis {{ui:Jalons LOD}}. Choisissez le jalon et le tableau (le tableau de départ, ou votre propre fichier CSV ou JSON avec {{ui:Charge}}).
5. Cliquez sur {{ui:Vérifier le modèle}}. Les totaux et une ligne pour chaque ligne du tableau indiquent ce qui a atteint son niveau et ce qui ne l'a pas atteint ; les constats apparaissent aussi dans la liste des problèmes.
6. Sous {{ui:Étiquettes manquantes et pièces sans nom}}, cliquez sur {{ui:Les rechercher}}, modifiez les propositions si vous le souhaitez, puis cliquez sur {{ui:Appliquer}}.

## Ce que vous devez voir

- Le niveau que vous avez choisi sur l'élément, avec sa classe IFC et ses codes de classification à côté.
- Totaux et lignes pour le jalon. Un tableau ne modifie jamais la signification d'un niveau : l'échelle est fixe, un tableau indique seulement le niveau qu'un jalon exige.
- « Rester générique au début » : conseil de garder les éléments génériques à un jalon précoce. Ce n'est qu'un conseil.

## Bon à savoir

- Rien ici ne vous bloque. Un modèle en dessous du niveau exigé par un jalon est signalé, pas refusé.
- Les trois volets d'un niveau (géométrie, informations, documentation) peuvent être renseignés chacun ; un repère indique atteint, insuffisant ou non renseigné.
