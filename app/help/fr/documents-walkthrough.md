---
title: Documents et révisions (le coffre)
summary: Une présentation pas à pas d'un vrai chantier : placer sous contrôle un dossier de projet de modèles IFC, extraire un modèle, le modifier, l'archiver avec une note, l'envoyer en revue, l'approuver et le publier, consulter l'historique et les utilisations, ce que voit une seconde personne pendant qu'il est verrouillé, et le fonctionnement avec les dossiers cloud.
keywords: coffre, documents, pas à pas, tutoriel, extraire, archiver, révision, publication, approuver, verrouiller, historique, où utilisé, ifc, modèle, dossier cloud, dossier de projet, deux personnes, dossier partagé
from: 0a753f25
---

## Ce que vous allez faire

Vous êtes Ana, et vous travaillez sur le Riverside Clinic avec un collègue, Ben. Les modèles IFC du projet se trouvent dans un même dossier auquel vous accédez tous les deux (un lecteur partagé, un dossier synchronisé ou un dossier cloud). À la fin, un fichier est passé de sa première copie à une révision **A** publiée, a été modifié de nouveau en **B.1**, vous avez vu qui a fait quoi, et vous avez vu ce que voit Ben lorsque vous tenez le fichier.

Tout est conservé dans un dossier `.ccvault` masqué à côté de vos fichiers : pas de serveur, rien n'est envoyé (un dossier cloud fait exception, voir la dernière étape). Pour chaque bouton et chaque règle au même endroit, voir la rubrique *Documents : extraction, révisions et publication* là où votre application la propose.

## 1. Préparer le dossier du projet

1. Choisissez {{ui:Documents}} à côté de {{ui:Ouvrir un dossier}} sur l'écran d'accueil, ou {{ui:Documents…}} dans le menu **Fichier**.
2. Choisissez {{ui:Choisir le dossier du projet}} et sélectionnez le dossier qui contient les modèles IFC du projet. (Les dossiers de projet fonctionnent dans Studio et dans les navigateurs capables d'ouvrir un dossier, comme Chrome et Edge. Dans les autres navigateurs, le panneau l'indique.)
3. Choisissez {{ui:Modification}} à côté de **Vous :** et saisissez votre nom, `Ana` (s'il le demande, aussi le nom de cet ordinateur). Le panneau affiche maintenant *Vous : Ana sur* et votre ordinateur. Votre nom accompagne tout ce que vous faites.
4. Choisissez {{ui:Créer un coffre dans ce dossier}} et saisissez le nom du projet, `Riverside clinic`. Le panneau affiche *Coffre créé pour Riverside clinic.*

## 2. Placer un fichier sous contrôle

1. Ouvrez **Fichiers hors du coffre** et choisissez {{ui:Ajouter}} à côté de `models/House.ifc`.
2. Il apparaît sous **Fichiers du coffre** à la révision **A.1**, état **En cours de travail**. A.1 est sa première copie ; le coffre conserve une copie de chaque révision.

## 3. Extraire, modifier, archiver

1. Choisissez {{ui:Ouvert}} à côté de `models/House.ifc`. Le modèle s'ouvre dans BimCraft et le panneau se ferme pour que vous puissiez le voir. Rouvrez le panneau depuis {{ui:Documents}}.
2. Rouvrez le panneau et choisissez {{ui:Extraire}}. La ligne indique maintenant **Extrait par vous**. Un fichier de verrouillage a été créé dans `.ccvault/locks` ; personne d'autre ne peut extraire ce fichier tant que vous ne l'avez pas archivé.
3. Modifiez le modèle : déplacez un mur, ajoutez une porte. L'enregistrement est refusé tant que le modèle n'est pas extrait à votre nom, et il indique pourquoi ; Enregistrer sous fonctionne toujours pour une copie de votre propre fichier.
4. Ouvrez le panneau, choisissez {{ui:Archiver}} et saisissez ce qui a changé (`Déplacement de la porte`). Le panneau indique *archivé en tant que A.2*. Le fichier du dossier du projet est maintenant le modèle que vous aviez ouvert, et le verrou a disparu. Archiver sans modification conserve la révision.

Si vous changez d'avis, {{ui:Annuler l'extraction}} rend le fichier sans nouvelle révision.

## 4. Revue et publication

1. Choisissez {{ui:Envoyer en revue}}. L'état passe à **En revue** et le fichier devient en lecture seule.
2. Avant d'approuver, choisissez {{ui:Paramètres du projet}} et indiquez qui peut approuver (un nom par ligne), par exemple `Ben` et `Carla`, puis cochez la règle selon laquelle l'approbateur doit être une autre personne que l'auteur. Choisissez {{ui:Enregistrer les paramètres}}. Désormais le coffre lui-même refuse toute autre personne.
3. Ben (ou Carla) choisit {{ui:Approuver}} et saisit le nom de l'approbateur. L'état devient **Publié** et la révision devient **A**, avec *approuvé par* et le nom. Un fichier publié est en lecture seule. {{ui:Renvoyer}} l'aurait renvoyé en **En cours de travail**, avec un motif.

Le nom de l'approbateur est celui saisi dans le panneau : c'est une trace de qui a validé, et non une preuve d'identité.

## 5. Une nouvelle révision

1. Sur le fichier publié, choisissez {{ui:Nouvelle révision}}. Vous le réservez pour la lettre suivante.
2. Modifiez-le, puis {{ui:Archiver}}. La révision est **B.1**, en cours de travail. Publiez-la de la même façon et elle devient **B**. {{ui:Annuler l'extraction}} avant le premier archivage le laisse à **A**.

Les lettres de révision suivent la séquence A, B … Z, AA, AB. Si votre norme omet certaines lettres, le paramètre du projet *Utiliser la séquence ASME Y14.35* saute I, O, Q, S, X et Z pour les révisions suivantes.

## 6. Voir ce qui s'est passé

Choisissez le nom du fichier pour ouvrir ses détails :

- **{{ui:Historique}}** : chaque événement, du plus récent au plus ancien, avec qui, sur quel ordinateur et à quel moment : *Archivé A.2* par Ana, *Publié* par Ben, et ainsi de suite.
- **{{ui:Révisions}}** : le tableau des révisions : chaque révision conservée, avec sa date, la personne qui l'a archivée, la note et la personne qui l'a approuvée. Le coffre conserve une copie de chacune dans `.ccvault/revs`.
- **{{ui:Utilise}}** : les documents vers lesquels pointe un modèle IFC.
- **{{ui:Utilisé par}}** : liste chaque modèle du coffre qui pointe vers ce fichier.

## Modèles qui pointent vers d'autres documents

Un modèle IFC qui pointe vers d'autres documents du dossier (plans, nomenclatures) les affiche sous **Utilise**, et chacun de ces documents affiche le modèle sous **Utilisé par**. Archivez un document et vous voyez quels modèles s'y réfèrent.

## 7. Ce que voit Ben pendant que vous tenez le fichier

Extrayez maintenant le fichier de nouveau, et demandez à Ben d'ouvrir le même dossier de projet sur son ordinateur et d'ouvrir le panneau. Sur la ligne du fichier, il voit **Extrait par Ana sur** votre ordinateur **depuis** l'heure, et aucun bouton {{ui:Extraire}}. S'il essaie malgré tout, le coffre refuse : le verrou est un fichier que le système ne créera pas deux fois, si bien que deux personnes ne peuvent pas détenir le fichier simultanément, même au même instant, lorsque le dossier se trouve sur disque dans Studio. (Dans un navigateur, le dossier n'offre qu'une garantie au mieux, et le panneau l'indique sous **Dossier**.)

Si Ana est absente et que Ben a besoin du fichier, {{ui:Forcer l'extraction}} le libère. Il doit saisir un motif ; il est inscrit au journal avec le nom de la personne qui avait extrait le fichier. Lorsque le projet liste des administrateurs, eux seuls peuvent le faire. Une extraction plus ancienne que la limite d'ancienneté (14 jours par défaut) est marquée *depuis longtemps*. Après la rupture, l'archivage tardif d'Ana est refusé, si bien que vous ne pouvez pas vous écraser mutuellement.

## 8. Dossiers cloud

Un dossier cloud est un dossier de projet conservé dans le stockage cloud de votre équipe, si bien que l'équipe n'a pas besoin de lecteur partagé. Dans Studio, connecté à votre compte CadCraft, le panneau affiche {{ui:Ouvrir un dossier cloud}} à côté de {{ui:Choisir le dossier du projet}}. Choisissez-le et sélectionnez le dossier, présenté sous la forme espace de travail / dossier. Le propriétaire d'un espace de travail crée d'abord le dossier, et le stockage cloud de l'équipe doit être en vigueur. Tout ce qui précède fonctionne de la même façon ; c'est le serveur qui réalise le verrou, strict entre les personnes. Si vous n'êtes pas connecté, le panneau vous demande de vous connecter. Dans un onglet de navigateur ordinaire, le bouton cloud n'est pas proposé ; utilisez Studio.

## Essayez

Faites les huit étapes ci-dessus avec une copie d'un vrai fichier. Pour les étapes à deux personnes, il vous faut une autre personne, ou deux fenêtres avec deux noms. Si vous essayez avec un vrai dossier partagé, la page de tests communautaires propose une vérification qui demande exactement cela, et accepte les résultats.
