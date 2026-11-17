---
title: Rapport de dossier : rôles, statuts et liens
summary: Chaque libellé du rapport de dossier, ce qu'il signifie, et la façon dont la suggestion « Commencer ici » est choisie.
keywords: rapport de dossier, rôles, statut, complet, incomplet, illisible, lié, arrière-plan, modèle, famille, sauvegardes seulement, commencer ici, statut des liens
from: b35bdd10
---

## Statut des copies

Chaque copie d'un modèle, fichier principal et sauvegardes numérotées compris, reçoit une vérification de son en-tête.

| Libellé | Signification |
|---|---|
| **Complet** | L'en-tête et l'index du fichier tiennent dans le fichier |
| **Incomplet** | Le fichier est plus court que ne l'indique son propre index : il a été coupé pendant la copie, le téléversement ou la synchronisation, ou c'est un fichier cloud encore « en ligne seulement » |
| **Illisible** | Le fichier n'est pas un fichier composé valide, ou il n'a pas pu être lu |

Dans la colonne **Statut**, un modèle affiche **Complet**, un « *n* incomplet » en orange lorsqu'au moins une copie est défectueuse mais qu'une autre est saine, ou **Incomplet** en rouge lorsqu'aucune copie n'est saine.

## Sauvegardes

Les fichiers nommés `Name.0001.rvt`, `Name.0002.rvt` et ainsi de suite sont des sauvegardes numérotées de `Name.rvt`. Elles sont regroupées sous leur modèle, la plus récente en premier, dans **Toutes les … copies**. La fiche est lue depuis le fichier principal lorsqu'il est complet, sinon depuis la sauvegarde complète la plus récente (« la plus récente complète »).

## Rôles

Affichés en italique sous le nom d'un modèle.

| Rôle | Signification |
|---|---|
| Lié par *autre modèle* : arrière-plan | Un autre modèle du dossier le lie : il s'agit très probablement de l'arrière-plan de quelqu'un d'autre, comme le modèle d'un bureau d'études |
| Fichier modèle ou sans nom | Un nom comme Blank, Template, Default, Untitled ou Project1 : un point de départ, ou un fichier jamais correctement nommé |
| Modèle central | Un modèle central de travail partagé. Le travail se fait dans une copie locale, pas ici |
| Famille (une pièce) | Un fichier `.rfa` ou `.rft` : un composant, et non le projet |
| Sauvegardes seulement | Le fichier principal a disparu et seules les sauvegardes numérotées subsistent |

## Comment est choisi « Commencer ici »

BimCraft applique le raisonnement qu'un utilisateur expérimenté suivrait :

1. Les candidats sont les fichiers de projet lisibles (`.rvt`, `.rte`) qui ne sont liés par aucun autre modèle et qui ne sont pas des modèles de départ.
2. Les modèles centraux et les modèles réduits aux seules sauvegardes ne comptent que lorsqu'il n'existe rien de mieux.
3. Parmi les candidats, celui enregistré le plus récemment l'emporte.

La zone indique ses raisons, et signale lorsqu'un fichier qui semble être le choix évident est endommagé, lorsque d'autres modèles sont en arrière-plan, et lorsque le choix est un modèle central. C'est une estimation : vérifiez auprès de la personne qui a travaillé en dernier sur le projet.

## Statut des liens

| Libellé | Signification |
|---|---|
| **Dans ce dossier** | Trouvé au chemin relatif enregistré, ou à la fin du chemin complet enregistré, à l'intérieur du dossier |
| **Même nom trouvé** | Pas à son chemin, mais un fichier de même nom se trouve dans le dossier. Vérifiez qu'il s'agit du bon |
| **Fichier de bibliothèque** | Une table de notes clés ou de codes d'assemblage. Elles sont livrées avec le logiciel sur chaque ordinateur |
| **Pas dans ce dossier** | Introuvable dans le dossier |

La colonne **Liens trouvés** de **Modèles** indique combien de liens d'un modèle ont été trouvés, parmi ceux attendus dans le dossier (les fichiers de bibliothèque ne sont pas comptés).

## Mis de côté

| Ligne | Signification |
|---|---|
| Dossiers de maintenance Revit (non lus) | Les dossiers `*_backup`, `*_log` et `Revit_temp`, ainsi que les dossiers cachés et `__MACOSX` |
| Restes de verrouillage, de journal et de sauvegarde | Les fichiers `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` et `.slog` |
| Autres fichiers | Tout le reste (les 40 premiers sont nommés) |
