---
title: Raccorder tuyaux et gaines aux équipements
summary: Démarrez ou terminez un tuyau ou une gaine sur un piquage pour qu'il prenne la taille et le système du piquage et reste fixé à lui, puis vérifiez les raccordements : piquages ouverts, écarts de taille et de système, tronçons sans source.
keywords: mep, raccorder, raccordement, raccordements, piquage, piquages, piquage ouvert, écart de taille, écart de système, source, vérifier les raccordements, fixé, suivre, déplacer l'équipement, ifcrelconnectsports, coordination
from: 29144fb0
---

## Ce que vous allez faire

Reliez les tronçons aux équipements pour que la maquette forme un seul système connecté : la sortie d'une pompe au tuyau qui en part, le col d'un diffuseur à sa gaine de branchement. Laissez ensuite BimCraft lister ce qui n'est pas relié.

## Dessiner depuis un piquage

1. Choisissez {{ui:Tuyau}} ou {{ui:Gaine}}.
2. Placez le pointeur sur un piquage d'un équipement (les petits cercles ; un piquage ouvert est dessiné dans la couleur d'avertissement). Le pointeur s'y accroche et affiche **sur un piquage**.
3. Cliquez : le tronçon part à la hauteur du piquage et **prend sa taille et son système** (un tuyau prend aussi le matériau habituel du système). La barre d'état indique ce qu'il a pris.
4. Dessinez normalement. Terminer un tronçon sur un autre piquage fixe aussi cette extrémité.

L'extrémité d'un tronçon sur un piquage est **fixée** à lui : déplacez ou tournez l'équipement (dans les Propriétés) et l'extrémité du tronçon le suit ; modifiez le tronçon et cette extrémité reste sur le piquage. Les autres angles du tronçon restent en place : après un grand déplacement, le premier segment peut se détacher du piquage en biais ; déplacez alors aussi le coude suivant.

## Vérifier les raccordements

Ouvrez {{ui:Build}} et cliquez sur {{ui:Vérifier les raccordements}}. La liste sous la barre affiche :

| Ligne | Ce que cela signifie |
|---|---|
| Un piquage n'est pas raccordé | Un équipement a un raccord auquel rien n'est dessiné |
| Rien à son extrémité | Un tronçon se termine dans le vide |
| Piquages raccordés de tailles différentes | Un tronçon d'une taille rencontre un piquage ou un tronçon d'une autre taille sans réduction (diamètre nominal d'un tuyau, forme et côtés d'une gaine) |
| Piquages raccordés de systèmes différents | Par exemple une gaine de reprise sur un diffuseur de soufflage |
| Un tuyau raccordé à une gaine | Deux raccords de types différents se rencontrent |
| Aucun équipement de son réseau ne l'alimente | Rien de ce à quoi un tronçon est raccordé, aussi loin que ce soit, n'a de sortie. Les évacuations, eaux pluviales et ventilations ne sont pas contrôlées sur ce point : leur eau vient des appareils sanitaires |
| Fixé à un piquage d'un équipement qui n'est plus dans le modèle | L'équipement a été supprimé ; redessinez l'extrémité ou supprimez le tronçon |

Les erreurs apparaissent en premier. Cliquez sur une ligne pour sélectionner ce qu'elle désigne. {{ui:Fermer}} masque la liste. La vérification lit le modèle tel qu'il est dessiné : elle contrôle les raccordements et les tailles, jamais les débits, les pressions ni l'équilibrage.
