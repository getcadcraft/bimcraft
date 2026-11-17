---
title: Dossiers client, rapports d'étape et comparaison des options
summary: Produisez un dossier client ou un rapport d'étape à partir du modèle, avec les options de volumétrie comparées par surface et coût, les surfaces de planchers, les dessins avec leurs révisions et l'historique des émissions. Chaque chiffre conserve les éléments qui le composent.
keywords: dossier client, présentation, rapport d'étape, rapport, comparaison des options, options, comparer les options, surface et coût, coût par option, sans tarif, volumétrie, surfaces de planchers, liste des dessins, historique des émissions, chiffres, chiffres liés
from: f6679bf5
---

## Ce que vous allez faire

Produisez un dossier client ou un rapport d'étape à partir du modèle tel qu'il est maintenant, et comparez côte à côte les options de volumétrie conservées, par surface et coût.

## Étapes

1. Dans le panneau de gauche, ouvrez **Dossier client et rapport d'étape**.
2. Choisissez **Ouvrir dans Documents** à côté de Dossier client ou de Rapport d'étape. Le document apparaît dans Documents, à partir du modèle, où vous pouvez modifier son texte.
3. Dans l'aperçu, cliquez sur un chiffre pour sélectionner les éléments qui le composent.
4. Choisissez **Générer le dossier**. Une archive zip est enregistrée : le document en PDF, une image de la vue 3D, et `figures.csv`, qui liste chaque chiffre avec les GlobalId de ses éléments.

## Les champs

Vous pouvez les utiliser dans tout document.

| Champ | Ce qu'il affiche |
|---|---|
| `{{stage}}` | La phase du projet, tirée des détails du dessin. |
| `{{options}}` | Les options de volumétrie conservées, côte à côte : niveaux, hauteur, emprise au sol, surface de plancher brute, enveloppe et coût. |
| `{{areas}}` | Surface de plancher par niveau, à partir des pièces. |
| `{{sheets}}` | Les feuilles avec la révision de chacune et la date de sa dernière émission. |
| `{{issues}}` | L'historique des émissions et le journal des modifications des dessins. |
| `{{changes}}` | Ce qui a changé depuis la dernière émission, feuille par feuille. |

## Comment les options sont chiffrées

Le coût provient uniquement de la table de prix de votre projet (Energy/Cost, coût 5D). Rien n'est estimé à votre place.

- Une ligne de prix ne chiffre une option que si ses classes désignent `IfcBuildingElementProxy`.
- La surface de plancher est chiffrée par une ligne dont les mots désignent l'usage de l'option, comme bureau. Sans une telle ligne, une ligne contenant les mots gross floor area ou building mass est utilisée. Une ligne au m² utilise la surface de plancher brute. Une ligne au m³ utilise le volume.
- L'enveloppe (périmètre fois hauteur) est chiffrée par une ligne contenant le mot envelope ou facade.
- Une option sans ligne correspondante affiche **Pas de tarif**. Un total n'est affiché que lorsque chaque partie demandée a un tarif.

## Bon à savoir

- Conservez les options avec **Conserver comme option** dans la liste de volumétrie du programme de la pièce. Voir les options de volumétrie.
- Un PDF ne permet pas de sélectionner des éléments. Hors de BimCraft, `figures.csv` porte le lien entre chaque chiffre et ses éléments.

## Pas encore disponible

- Les feuilles et les vues dessinées ne sont pas placées dans le document. Le dossier ne contient qu'une image de la vue 3D.
