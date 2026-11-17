---
title: Vues, plages de vue et vos propres feuilles
summary: Retrouvez chaque plan, élévation, coupe, vue 3D, nomenclature et feuille dans le navigateur de projet, réglez la coupe et le contenu de chaque plan, créez des détails, tracez des lignes et des hachures dans une vue, conservez les réglages dans des modèles de vue et disposez vos propres feuilles.
keywords: détail, vue de détail, plan agrandi, dessin, lignes de détail, lignes de dessin, hachure, zone de hachures, zone remplie, motif de remplissage, plan de plafond réfléchi, rcp, plan de plafond, trame de plafond, luminaires, navigateur de projet, vues, plage de vue, recadrage, région de recadrage, vue recadrée, échelle de vue, sous-jacent, afficher un autre niveau, tramé, plan de coupe, hauteur de coupe, haut, bas, profondeur de vue, visibilité, catégories, masquer dans la vue, modèle de vue, modèles, feuille, feuilles, cartouche, fenêtre de présentation, échelle, disposer les feuilles, présentation, pdf, réglages de vue en plan, navigateur
from: ee1d5afe
---

## Ce que vous allez faire

Travailler comme on organise un projet BIM : chaque vue dans une seule liste, chaque plan coupé où vous le voulez, les mêmes réglages pour plusieurs plans grâce à un modèle, et des feuilles que vous disposez vous-même.

## Le navigateur de projet

1. Activez {{ui:Dessin}}. Le panneau de gauche affiche un {{ui:Navigateur de projet}} sous les modèles.
2. Il liste :
   - **Plans d'étage** : chaque niveau. Cliquez sur l'un pour voir son plan. Le bouton curseur à côté règle sa plage de vue (ci-dessous). Un plan qui suit un modèle affiche le nom de ce modèle.
   - **Plans de plafond** : le plan de plafond réfléchi de chaque niveau (ci-dessous).
   - **Détails** : chaque détail avec la vue sur laquelle il est dessiné, et {{ui:Nouveau détail}}. **Manquants** liste les détails dont la vue n'existe plus.
   - **Élévations** et **Coupes** : les quatre côtés et chaque ligne de coupe. Cliquez sur l'un pour ouvrir le jeu de plans dans lequel il est dessiné.
   - **Vues 3D** : les vues que vous avez enregistrées avec {{ui:Vues}}.
   - **Nomenclatures** : cliquez sur l'une pour l'afficher sous le plan.
   - **Feuilles** : les feuilles que vous avez créées, {{ui:Nouvelle feuille}}, et {{ui:Jeu de plans…}} pour l'ensemble du jeu généré depuis le modèle.
   - **Modèles de vue**, avec {{ui:Nouveau modèle}}, et **Liens** (les modèles liés).

## Régler la plage de vue d'un plan

1. Cliquez sur le bouton curseur à côté d'un niveau dans **Plans d'étage**.
2. Réglez les hauteurs, au-dessus de ce niveau :
   - **Couper à** : là où le plan coupe les murs, portes et fenêtres (1200 mm, environ 4 ft, sauf si vous le modifiez).
   - **Haut** : les éléments au-dessus de la coupe et sous le haut sont dessinés en pointillés (un meuble haut, une poutre). Laissez vide pour la hauteur du niveau.
   - **Bas** et **Profondeur sous le bas** : les éléments plus bas que la coupe sont dessinés en traits fins jusqu'au bas, et sur cette profondeur sous lui.
3. Sous **Affiché dans ce plan**, décochez ce que ce plan omet : mobilier, pièces, poteaux, etc.
4. Pour omettre des éléments isolés : sélectionnez-les dans le plan ou la vue 3D, ouvrez la boîte de dialogue et cliquez sur {{ui:Masquer la sélection ici}}. {{ui:Tout afficher}} les rétablit.
5. Cliquez sur {{ui:Utiliser ces réglages}}.

Le plan est de nouveau coupé immédiatement, et le jeu de plans ainsi que vos feuilles suivent. La coupe d'un nuage de points suit elle aussi la hauteur de coupe.

## Recadrer un plan, lui donner une échelle, afficher un autre niveau dessous

Les trois réglages sont dans la même boîte de dialogue (le bouton curseur à côté d'un niveau) :

- **Échelle** : l'échelle à laquelle le plan s'imprime ({{ui:Imprimer}} sur la barre du plan) et s'insère sur une feuille. **{{ui:Ajuster}}** choisit la plus grande échelle standard qui convient.
- **Région de recadrage** : cliquez sur {{ui:Dessiner sur le plan…}}, puis cliquez sur un coin, puis sur le coin opposé du plan ({{key:Esc}} arrête). Le plan hors de la région est voilé à l'écran, et vous pouvez quand même y travailler ; imprimé, sur les feuilles et dans le jeu de plans, le plan n'affiche que ce qui est à l'intérieur. {{ui:Effacer}} supprime le recadrage. {{ui:Ajuster}} ajuste à la région.
- **Sous-jacent** : choisissez un autre niveau. Ses murs, éléments coupés, portes et fenêtres sont dessinés en clair sous ce plan, pour aligner avec le niveau inférieur ou supérieur. On ne peut pas les sélectionner ici, et ils s'impriment en gris clair.

Un modèle de vue porte l'échelle avec les hauteurs et les catégories. La région de recadrage et le sous-jacent appartiennent toujours au seul plan.

## Le plan de plafond d'un niveau

Chaque niveau a un plan de plafond réfléchi à côté de son plan d'étage : le plan vu d'en dessous, pour disposer les plafonds et ce qui y est suspendu.

1. Cliquez sur le niveau sous **Plans de plafond** dans le navigateur, ou choisissez {{ui:Plan de plafond}} à côté du niveau sur la barre du plan.
2. Les murs sont coupés à 2300 mm (environ 7'-6"). Ce qui se trouve au-dessus de cette coupe et sous la hauteur du niveau est dessiné : plafonds avec leur trame et une étiquette de hauteur (`CLG 2438`), luminaires, poutres. Portes, fenêtres et ce qui se trouve sous la coupe sont omis.
3. Pour créer un plafond, utilisez {{ui:Plafond}} comme sur le plan d'étage, puis sélectionnez-le et choisissez son **Motif** dans {{ui:Propriétés}}. Voir [Pièces, planchers, plafonds et toitures](topic:floors-and-roofs).
4. Pour suspendre un luminaire, placez l'élément de la bibliothèque pendant l'affichage du plan de plafond : il va dans **Au plafond**. Voir [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library).
5. Le bouton curseur à côté d'un plan de plafond règle sa coupe et son haut, son échelle, ses catégories, sa région de recadrage et son sous-jacent, comme pour un plan d'étage. Les plans de plafond n'acceptent pas de modèle de vue.

Il est dessiné dans le même sens que le plan d'étage (un plan réfléchi, et non une image miroir). Un plafond situé sous la coupe n'est pas dessiné : abaissez la coupe pour le plan de plafond de ce niveau. Les plans de plafond vont sur vos feuilles comme les plans ; le jeu de plans ne les ajoute pas de lui-même.

## Créer un détail

Un détail montre une partie d'un plan plus grande, à sa propre échelle, comme une vue à part entière : une cuisine, un escalier, un angle de mur.

1. Affichez le plan, le plan de plafond ou le détail auquel il appartient.
2. Choisissez {{ui:Annoter}} › {{ui:Détail}} sur la barre du plan (ou {{ui:Nouveau détail}} dans le navigateur), puis cliquez sur un coin de la zone et sur le coin opposé. {{key:Esc}} arrête.
3. Le détail est créé au 1:20 (1/2" = 1'-0" en pieds et pouces). Son rectangle et une bulle circulaire sont dessinés sur le plan.
4. Cliquez sur la bulle avec {{ui:Sélectionner}}, ou sur le détail dans le navigateur, pour l'ouvrir : le plan n'affiche que cette zone, à l'échelle du détail. La barre affiche {{ui:Détail :}} et son nom ; {{ui:Remonter}} revient à la vue sur laquelle il est dessiné.
5. Le bouton curseur à côté du détail (dans le navigateur ou sur la barre) le renomme, change son échelle, redessine son rectangle ou le supprime.

Un détail montre ce que montre sa vue : la même coupe, les mêmes catégories, les plafonds d'un plan de plafond. Un détail d'un détail fonctionne de la même façon. Placez un détail sur une feuille comme un plan ; sa bulle indique alors où il se trouve (`1 / A-501` : la première vue de la feuille A-501). {{ui:Imprimer}} dans un détail n'imprime que cette zone, à son échelle.

Supprimer un détail supprime aussi les détails dessinés à l'intérieur, ainsi que les lignes et hachures tracées dans ceux-ci (on vous demande d'abord). Si le niveau sur lequel un détail est dessiné est supprimé, le détail reste sous **Manquants** jusqu'à ce que vous le supprimiez, et les feuilles qui le portent le signalent comme manquant.

## Tracer des lignes et des hachures dans une vue

Le dessin est un travail 2D qui appartient à une seule vue : notes en lignes, zone hachurée de béton ou de terre, zone remplie. Il n'apparaît jamais dans la vue 3D ni dans un autre plan.

1. Affichez le plan d'étage, le plan de plafond ou le détail où dessiner.
2. Choisissez dans {{ui:Annoter}} sur la barre du plan :
   - {{ui:Ligne}} : cliquez où elle commence et où elle finit. La ligne suivante commence où la précédente s'est terminée ; {{key:Enter}} recommence.
   - {{ui:Polyligne}} : cliquez ses points ; {{key:Enter}} ou un double-clic la termine, un clic sur son premier point la ferme.
   - {{ui:Rectangle}} : deux coins opposés.
   - {{ui:Zone de hachures}} : choisissez le **Motif** (Plein, Diagonal, Croisillon, Béton, Isolant, Terre) et son échelle sur la barre, puis cliquez les coins ; {{key:Enter}}, un double-clic ou un clic sur le premier coin la ferme. Avec {{ui:Remplir une pièce}} coché, un clic dans une pièce hachure son contour.
3. Les points s'accrochent comme les murs ; {{key:Shift}} garde une ligne d'équerre, et vous pouvez saisir une longueur comme pour les murs. {{key:Backspace}} retire le dernier point.

Sélectionnez une ligne ou une hachure avec {{ui:Sélectionner}} sur le plan. {{ui:Propriétés}} modifie le motif et l'échelle d'une hachure et propose {{ui:Déplacer…}} (cliquez le point de départ, puis l'endroit où il va). {{key:Delete}} la supprime. Chaque ligne, hachure et modification est une étape.

Les lignes et hachures s'impriment avec le plan, passent sur vos feuilles avec lui et figurent dans le jeu de plans. Décochez **Annotations** dans une plage de vue pour les en exclure.

## Conserver les réglages dans un modèle de vue

1. Cliquez sur {{ui:Nouveau modèle}} dans le navigateur, ou sur {{ui:Enregistrer comme modèle…}} dans la plage de vue d'un plan (ce plan l'utilise alors).
2. Donnez-lui un nom, réglez les hauteurs et les catégories, puis cliquez sur {{ui:Enregistrer le modèle}}.
3. Dans la plage de vue de n'importe quel plan, choisissez le modèle. Le plan prend ses hauteurs et ses catégories ; modifiez le modèle pour changer chaque plan qui l'utilise. Les éléments que vous avez masqués un par un restent masqués dans leur propre plan.
4. Cliquez sur un modèle dans le navigateur pour le modifier, le renommer ou le supprimer. Le supprimer laisse ses plans avec ses réglages comme les leurs.

## Disposer une feuille à vous

1. Cliquez sur {{ui:Nouvelle feuille}}. Saisissez son numéro et son titre, et choisissez le papier.
2. Cliquez sur {{ui:Ajouter}} à côté d'un plan, d'un plan de plafond, d'un détail, d'une élévation, d'une coupe ou d'une nomenclature. Il arrive au milieu de la feuille.
3. Faites-le glisser où il doit aller. Une fois sélectionné, choisissez une **Échelle**, ou laissez l'échelle propre au plan (lorsqu'il en a une), sinon l'échelle qui tient dans un tiers de la feuille. {{ui:Retirer de la feuille}} le retire.
4. Cliquez sur {{ui:Enregistrer la feuille}}. Elle figure sous **Feuilles** ; cliquez dessus pour la modifier plus tard.
5. {{ui:Télécharger en PDF}} enregistre cette feuille en une seule page.

## Ce que vous devez voir

- Des plans coupés à vos hauteurs, avec ce qui est au-dessus de la coupe en pointillés et ce que vous avez retiré omis.
- Un plan recadré voilé à l'écran hors de sa région, et coupé à elle sur le papier, à l'échelle que vous lui avez donnée.
- Un plan de plafond avec les trames des plafonds et les étiquettes de hauteur, et les luminaires au plafond.
- Des détails avec leur rectangle et leur bulle sur le plan, chacun s'ouvrant à sa propre échelle.
- Des lignes et des hachures uniquement dans la vue où vous les avez tracées.
- Vos feuilles redessinées depuis le modèle à chaque ouverture, pour toujours correspondre à lui. Une vue dont le niveau ou la ligne de coupe a été supprimé est signalée, et non dessinée.
- Chaque modification ici est une étape : {{key:Mod+Z}} l'annule.

:::note
Tout cela est conservé dans le fichier IFC sous forme de jeux de propriétés que les autres logiciels ignorent : la plage de vue et le plan de plafond de chaque niveau sur le niveau, les modèles, détails et vos feuilles sur le projet. Les lignes et hachures sont des annotations IFC dans leur niveau ; les autres logiciels les voient donc comme des courbes 2D et des zones hachurées (leur propre dessin de chaque motif), mais pas à quelle vue elles appartiennent.
:::

:::tip
D'autres logiciels BIM appellent la coupe une plage de vue ou un plan de coupe, les modèles des modèles de vue ou des réglages de vue, les lignes de dessin des lignes de détail, et les zones hachurées des zones remplies. Les idées sont les mêmes ; les réglages de vue ne les accompagnent pas.
:::
