---
title: Style de travail, vues dupliquées, plumes sur papier, Déclarer comme et modèles
summary: Choisissez le comportement de BimCraft selon votre façon de travailler, dupliquez n'importe quelle vue en copie propre ou liée, conservez les surcharges de plumes dans le fichier et imprimez tel qu'affiché ou par une table de plumes, déclarez un élément comme une autre classe IFC, et démarrez les projets à partir de vos propres modèles.
keywords: style de travail, dupliquer vue, dupliquer, copier vue, vue dépendante, vue liée, copie propre, copie de vue, surcharges de plumes, plumes, épaisseurs de ligne, imprimer tel quel, table de plumes, style de traçage, ctb, monochrome, niveaux de gris, déclarer comme, classe ifc, reclasser, type prédéfini, modèle générique, dalle en route, mur en panneau, toit en rampe, modèle de projet, modèle, enregistrer comme modèle, standard d'agence
from: 231d98b0
---

## Ce que vous allez faire

Réglez BimCraft selon votre façon de travailler, dupliquez des vues, imprimez-les comme vous l'attendez, comptez les éléments pour ce qu'ils sont réellement et démarrez chaque projet à partir du modèle de votre agence.

## Choisir un style de travail

1. Ouvrez {{ui:Paramètres}} et l'onglet {{ui:BimCraft}}. Trouvez {{ui:Style de travail}}.
2. Choisissez l'une des options :
   - {{ui:Chaque vue la sienne}} (le premier choix) : une vue dupliquée copie ses annotations, qui restent propres à cette vue ; les feuilles s'impriment comme s'affiche l'écran.
   - {{ui:Annotations et tables de plumes partagées}} : les vues dupliquées partagent leurs annotations ; l'impression passe par une table de plumes.
3. Sous ce choix figurent les quatre réglages qu'il définit. Modifiez l'un d'eux isolément ; le style affiche alors {{ui:Personnalisé}}.

Le style de travail est conservé dans ce navigateur, comme la disposition de l'espace de travail. Un modèle transmet ce style aux nouveaux modèles.

## Dupliquer une vue

1. Dans le {{ui:Navigateur de projet}}, chaque plan d'étage, plan de plafond, légende, élévation et coupe possède un bouton {{ui:Dupliquer}} (deux feuilles).
2. Nommez la copie et choisissez son comportement :
   - {{ui:Copie propre}} : son dessin, ses cotes, son recadrage, ses éléments masqués et ses plumes sont copiés et restent les siens. Modifier l'une ou l'autre vue ne change jamais l'autre ; une vue sur une feuille émise reste donc telle qu'elle a été émise.
   - {{ui:Liée}} : elle affiche la même vue, avec un seul jeu d'annotations et de réglages.
3. La copie figure sous {{ui:Vues dupliquées}}. Cliquez dessus pour l'ouvrir ; la barre au-dessus du plan indique qu'il s'agit d'une copie, avec {{ui:Remonter}} pour revenir à sa vue.
4. Son bouton à curseurs ouvre ses réglages : le nom, {{ui:Portée de vue}} (une copie propre a la sienne), {{ui:Rendre la copie propre}} pour une copie liée, et {{ui:Supprimer}}.

Les copies d'élévations et de coupes vont sur vos propres feuilles, comme les vues dont elles proviennent. La duplication constitue une seule étape d'annulation, et les copies sont conservées dans l'IFC avec les légendes.

## Plumes conservées avec la vue, et imprimées telles qu'affichées

1. Activez {{ui:Dessin}} et choisissez {{ui:Plumes}}.
2. {{ui:Pour}} liste désormais toutes les catégories : murs, portes et fenêtres, dalles, toits, poteaux, escaliers, mobilier et le reste, ainsi que le dessin et les cotes.
3. {{ui:Appliquer}} conserve la plume dans l'IFC avec la vue affichée : un plan, un plan de plafond, une légende ou une vue dupliquée. Les plumes créées avant la version 0.9 étaient conservées dans le navigateur ; {{ui:Conserver dans le fichier}} les y fait passer.
4. Les feuilles et le PDF tracent chaque plume telle qu'elle s'affiche à l'écran.

Pour imprimer plutôt par une table de plumes, réglez {{ui:Imprimer}} dans la ligne Plumes sur {{ui:Par une table de plumes}}, puis choisissez une table (couleur, monochrome, niveaux de gris) ou {{ui:Modifier la table de plumes…}} : chaque couleur reçoit la couleur, l'épaisseur et la trame avec lesquelles elle s'imprime. La table est le fichier de style de traçage de CadCraft ; {{ui:Importer…}} accepte donc une table créée dans l'application CadCraft, et {{ui:Exporter}} en fournit une en retour. Le modèle conserve son choix ; sans choix, le style de travail décide.

## Déclarer un élément comme une autre classe

Une dalle dessinée comme une route, un mur utilisé comme panneau, un toit en forme de rampe : conservez l'outil avec lequel vous l'avez dessiné et déclarez-le pour ce qu'il est.

1. Sélectionnez l'élément et ouvrez {{ui:Propriétés}}. Ouvrez {{ui:Déclarer comme}}.
2. Saisissez dans le champ de recherche pour trouver une classe qui correspond à la forme, puis choisissez-la ainsi que son type prédéfini. Pour un type qui vous est propre, choisissez USERDEFINED et donnez-lui un nom.
3. {{ui:Appliquer}} (une seule étape d'annulation). {{ui:Effacer}} le déclare de nouveau comme dessiné.

Vous continuez à le modifier avec l'outil de dessin d'origine. Le fichier IFC enregistré l'écrit sous la classe déclarée ; ainsi, les autres logiciels, le métré des {{ui:Quantités}}, Rechercher, Colorer par, les contrôles de modèle et {{ui:Problèmes}} le comptent comme tel. Les nomenclatures excluent du tableau des murs un mur déclaré comme panneau, et {{ui:Éléments par classe déclarée}} les répertorie tous. Cela fonctionne dans les fichiers IFC4 et IFC2X3 ; la liste ne propose que les classes correspondant à la version IFC du fichier. Portes, fenêtres, escaliers, pièces et niveaux gardent leur propre classe.

## Enregistrer un projet comme modèle, et partir de lui

1. Avec un projet ouvert, cliquez sur {{ui:Enregistrer comme modèle}} à côté de {{ui:Enregistrer}}.
2. Nommez-le. Cochez {{ui:Télécharger aussi le fichier de modèle}} pour le partager sous forme de fichier IFC, et {{ui:Commencer les nouveaux modèles avec celui-ci}} pour en faire votre modèle par défaut.
3. Un modèle conserve les niveaux, les modèles de vue et les réglages de vue, les vues dupliquées et les légendes, le dessin, les plumes et la table de plumes, les repères, les familles et types, les feuilles, les formats de feuille, les cartouches et le style de travail. Les murs, dalles, portes et tous les autres éléments du modèle sont exclus.
4. Cliquez sur {{ui:Nouveau bâtiment}} et choisissez-le sous {{ui:Commencer à partir de}}, ou choisissez {{ui:Un fichier de modèle…}} pour un modèle qui vous a été envoyé. Le nouveau projet reçoit son propre nom et sa propre identité de projet ; tout le reste est tel que le modèle le définit.

:::note
Les modèles sont conservés dans ce navigateur. Les modèles d'équipe partagés via CadCraft Studio ne sont pas encore disponibles : envoyez plutôt le fichier de modèle.
:::
