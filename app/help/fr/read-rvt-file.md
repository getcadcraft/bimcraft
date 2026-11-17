---
title: Lire un fichier de projet ou de famille
summary: Ouvrez un fichier .rvt, .rfa, .rte ou .rft et lisez sa version, son travail partagé, les informations du projet, les paramètres de famille, les liens et l'image d'aperçu, sans le programme qui l'a créé.
keywords: rvt, rfa, rte, rft, fichier de projet, famille, version, quelle version, build, travail partagé, central, informations du projet, aperçu, miniature, liens
from: df3600e1
---

## Ce que vous allez faire

Savoir ce qu'un fichier de projet ou de famille contient sans l'ouvrir dans Revit : quelle version l'a enregistré, s'il est en travail partagé, les informations du projet et ce vers quoi il renvoie. Utile lorsqu'un fichier vous arrive d'un tiers et que vous devez savoir dans quelle version l'ouvrir.

## Étapes

1. Cliquez sur {{ui:Choisir un fichier}}.
2. Choisissez un fichier `.rvt`, `.rfa`, `.rte` ou `.rft`.
3. Patientez un instant. La ligne d'état affiche « Lecture du fichier… », puis « Fichier ouvert : *nom du fichier* ».
4. Regardez le haut de la carte : l'image d'aperçu enregistrée dans le fichier, la nature du fichier et la version dans laquelle il a été enregistré, ainsi que le nom du projet.
5. Faites défiler pour lire les sections de la carte.

## Ce que vous devez voir

La carte au centre, avec ces sections lorsque le fichier les contient :

| Section | Ce qu'elle vous indique |
|---|---|
| Fichier | Nom du fichier, taille, nature (projet, gabarit de projet, famille ou gabarit de famille), version et build dans lesquelles il a été enregistré, travail partagé, chemin du modèle central, endroit et date du dernier enregistrement, auteur de l'enregistrement, langue et GUID du document |
| Informations du projet | Les champs propres au projet, tels que nom, numéro, client, adresse et statut. Les champs restés à leurs valeurs par défaut d'un nouveau projet sont omis. |
| Famille, Famille : … | Pour une famille : son nom, sa catégorie, sa version, sa dernière mise à jour et ses paramètres, groupe par groupe |
| Fichiers liés et référencés | Chaque modèle lié, lien CAO, image et tableau de légendes que le fichier pointe, avec son chemin enregistré |

À gauche, le panneau {{ui:Fichier}} reprend les informations clés et ajoute **Lu** : la part du fichier que BimCraft a réellement lue, généralement environ 40 KB pour un fichier qui peut peser plusieurs mégaoctets. À droite, le panneau {{ui:Propriétés}} indique que les propriétés des éléments nécessitent le modèle 3D.

## Pourquoi il n'y a pas de 3D

Le modèle 3D et les éléments d'un fichier de projet sont stockés dans un format non documenté. BimCraft ne lit que les parties du fichier qui sont documentées ou clairement lisibles : les informations du fichier, les informations du projet, les données de famille, la liste des liens et l'image d'aperçu. Il ne devine pas le reste. Pour voir le modèle en 3D et lire les propriétés des éléments, exportez en IFC depuis le programme qui a créé le fichier. Voir [Obtenir un fichier de projet en 3D via IFC](topic:rvt-to-ifc).

## Erreurs courantes

- **Attendre de la 3D.** Voir ci-dessus.
- **Les liens n'affichent que leur chemin enregistré.** Un fichier ouvert seul ne peut pas vérifier que ses liens existent. Ouvrez plutôt le dossier où il se trouve : BimCraft marque chaque lien comme trouvé ou non : [Ouvrir un dossier de projet complet](topic:open-project-folder).
- **« Ce fichier est incomplet… »** Le fichier a été coupé pendant sa copie, son téléversement ou sa synchronisation. Un fichier de stockage cloud encore « en ligne uniquement » produit le même effet. BimCraft l'ouvre tout de même et n'affiche que ce qui a été récupéré : un avis orange en haut de la carte, une section **Récupéré depuis ce fichier** qui liste les parties dont chaque octet figure dans le fichier, et **Absent du fichier** pour le reste. Rien n'est rempli pour la partie manquante ; la version, l'image d'aperçu ou les informations du projet peuvent donc manquer lorsqu'elles étaient stockées après la coupure. Si la liste des contenus du fichier elle-même a été coupée, rien ne peut être ouvert. Copiez à nouveau l'original et rouvrez-le pour obtenir le fichier complet.
- **« Aucune image d'aperçu dans ce fichier ».** Certains fichiers sont enregistrés sans aperçu. C'est normal.
- **Ouvrir une sauvegarde par erreur.** Les fichiers nommés comme `Tower.0004.rvt` sont des sauvegardes numérotées. Ouvrir le dossier les regroupe avec leur modèle.
