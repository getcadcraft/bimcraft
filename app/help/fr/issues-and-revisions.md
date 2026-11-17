---
title: Émissions, révisions et journal des modifications du dessin
summary: Enregistrez chaque lot de feuilles que vous transmettez, voyez ce qui a changé depuis sur chaque feuille et chaque élément, et rattachez les instructions de chantier, les plans d'atelier et les modèles liés à l'émission à laquelle ils appartiennent.
keywords: émission, lot émis, lot soumis, soumission, révision, révisions, ce qui a changé, depuis l'émission, journal des modifications, registre des dessins, bordereau de transmission, instruction de chantier, plan d'atelier, modèle lié, appel d'offres, construction, instantané, comparer
from: 4c732832
---

## Ce que vous allez faire

Enregistrez une émission : quelles feuilles sont parties, à quelle date, pour quel objet, chacune à sa révision. Plus tard, demandez ce qui a changé depuis cette émission. Rattachez à l'émission les instructions de chantier et les plans d'atelier retournés.

## Étapes

1. Dans le panneau de gauche, ouvrez **Émissions et révisions**.
2. Choisissez **Enregistrer une émission**. La révision est proposée (A, puis B ; une révision numérotée telle que P1 s'incrémente). Choisissez l'objet de l'émission, le destinataire, la date et les feuilles. Lorsque l'étape de votre projet est définie, l'objet la suit. Lorsque le dossier de permis comporte une liste de documents justificatifs, les feuilles liées à cette liste sont cochées pour vous.
3. Laissez **Enregistrer aussi une copie du modèle telle qu'émise** cochée pour conserver le modèle exactement tel qu'il est parti. La copie est téléchargée ; son nom, sa taille et son SHA-256 sont conservés avec l'émission.
4. Choisissez **Enregistrer cette émission**. Une feuille modifiée depuis sa dernière émission prend la nouvelle révision. Une feuille non modifiée garde sa révision. Le cartouche de chaque feuille affiche sa révision.
5. Pour voir ce qui a changé, choisissez **Modifications depuis** à côté d'une émission. Chaque feuille indique Identique ou Modifiée, avec les éléments ajoutés, modifiés et supprimés. Cliquez sur un nombre pour sélectionner ces éléments.
6. Choisissez **Ajouter un enregistrement** pour une instruction de chantier, un plan d'atelier, un jeu d'annotations, un modèle lié ou une remarque. Choisissez l'émission à laquelle il se rattache. Un fichier que vous choisissez est enregistré par son nom, sa taille et son SHA-256 ; le fichier reste à son emplacement.
7. **Journal des modifications du dessin** affiche une ligne par feuille et une colonne par émission. **Télécharger le journal (CSV)** l'enregistre avec les émissions et les enregistrements.
8. **Enregistrer l'historique des émissions** écrit un fichier `.issues.json`. MarkupCraft, TakeoffCraft et DetailCraft le lisent avec **Lire un historique des émissions**.

## Bon à savoir

- L'historique est conservé dans le fichier IFC (ensemble de propriétés `CadCraft_Issues` sur le projet). Les autres programmes l'ignorent.
- Une feuille est considérée comme modifiée lorsque son propre paramétrage a changé, ou lorsqu'un élément qu'elle montre a changé : un plan montre son niveau, une élévation ou une coupe montre tout le modèle, un tableau de portes ou de fenêtres montre ses portes ou fenêtres.
- Un élément est considéré comme modifié lorsqu'une propriété, sa position, sa taille ou sa forme a changé.
- Pour voir exactement quelle propriété a changé, ouvrez la copie enregistrée du modèle émis avec **Comparer les versions**.
- Supprimer une émission conserve ses enregistrements, sans émission. Chaque étape s'annule en une seule fois.
- Un modèle de plus de 60 000 éléments ne conserve pas d'enregistrement de chaque élément avec l'émission. Les feuilles sont toujours comparées.

## Pas encore disponible

- Les feuilles ne sont pas enregistrées en PDF avec l'émission.
- Un nuage de révision n'est pas dessiné sur les feuilles de BimCraft. Enregistrez les nuages dans MarkupCraft, rattachés à l'émission.
