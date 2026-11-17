---
title: Lire un planning de construction sur le modèle
summary: Ouvrez une liste de tâches en CSV, reliez chaque tâche à des éléments par une propriété, et parcourez les dates pour voir ce qui est construit, en cours et pas encore commencé.
keywords: 4d, planning, séquence de construction, chronologie, phasage, programme, gantt, tâches, dates, simulation, avancement, construit, csv, phase, lot de travaux, wbs, groupe
from: 1b985a64
---

## Ce que vous allez faire

Regardez le bâtiment s'élever : chaque tâche de votre planning est reliée aux éléments qu'elle construit, affichés jour par jour.

## Étapes

1. Ouvrez un modèle IFC et ouvrez {{ui:Planning 4D}} dans le panneau de gauche.
2. Cliquez sur {{ui:Télécharger un modèle}} pour obtenir une liste de tâches avec une semaine par niveau, et modifiez-la dans un tableur. Ou rédigez la vôtre.
3. Cliquez sur {{ui:Ouvrir une liste de tâches…}} et choisissez le CSV.
4. Faites glisser le curseur de date, ou cliquez sur {{ui:Lire}}.

## La liste des tâches

Un CSV avec une ligne d'en-tête et les colonnes **Task**, **Start**, **Finish**, **Field** et **Value**. Les virgules ou les points-virgules fonctionnent.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Écrivez les dates au format YYYY-MM-DD.
- Une ligne relie la tâche à chaque élément dont le **Field** a exactement cette **Value**. Le champ est une propriété telle que Storey, Class, Name, Type, Material, Tag ou GlobalId, ou toute propriété écrite avec son ensemble et son nom : `Pset_WallCommon.FireRating`.
- Répétez une tâche sur plusieurs lignes, avec les mêmes dates, pour la relier à davantage d'éléments.

## Phases et lots de travaux

Ajoutez une colonne **Stage**, une colonne **Package**, ou les deux, pour regrouper les tâches en phases et en lots de travaux. Phase et WBS fonctionnent aussi comme noms de colonnes.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Une tâche appartient à une seule phase et à un seul lot. Si une ligne suivante de la même tâche en nomme une autre, cette ligne est signalée avec son numéro de ligne et ignorée.
- Un même nom de lot dans deux phases fait deux lots.

Lorsque la liste comporte des groupes, une liste {{ui:Afficher}} apparaît au-dessus de la date. Choisissez une phase ou un lot et il se joue comme un tout :

- le curseur et {{ui:Lire}} vont du premier début du groupe à sa dernière fin,
- seules les tâches du groupe sont listées et colorées, et tout ce qui est hors du groupe est transparent,
- la ligne sous la liste indique combien de tâches du groupe sont terminées, en cours et à venir à cette date,
- {{ui:Sélectionner ses éléments}} sélectionne tous les éléments du groupe, pour {{ui:Afficher}}, {{ui:Coupe}} ou une nomenclature.

Choisissez **Toutes les tâches** pour revoir l'ensemble du planning.

## Ce que vous devriez voir

- **Construit** : éléments dont toutes les tâches sont terminées, dans leurs propres couleurs.
- **En cours** : éléments dont une tâche est en cours ce jour-là, en ocre. Une tâche est en cours de sa date de début à sa date de fin.
- **Non commencé** : transparent.
- Les éléments sans tâche restent tels quels. La liste indique le nombre d'éléments trouvés par chaque tâche. Les lignes illisibles, ou qui n'ont rien trouvé, sont listées avec leurs numéros de ligne.

## Liens, diagramme de Gantt et MS Project

- Ouvrez un fichier Microsoft Project XML (`.xml`) ou un CSV qui comporte une colonne `Predecessors`. Les liens peuvent être fin à début, début à début, fin à fin ou début à fin, chacun avec un décalage ou un retard en jours.
- Sous la liste des tâches, le diagramme de Gantt dessine chaque tâche sous forme de barre, avec des flèches pour les liens. Les tâches du chemin critique sont en rouge. Une boucle de liens ou un prédécesseur inexistant est signalé dans le panneau.
- {{ui:Enregistrer au format XML MS Project}} et {{ui:Enregistrer en CSV avec les liens}} réécrivent le planning avec ses liens.

## Suite

- [Trouver des éléments par classe, nom ou propriété](topic:find)
- [Colorer des éléments selon une propriété](topic:color-by-property)
