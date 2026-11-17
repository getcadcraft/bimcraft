---
title: Ouvrir un dossier de projet complet
summary: Indiquez à BimCraft un dossier de projet pour voir d'un coup chaque modèle, ses sauvegardes et ses liens, et laissez la zone Commencer ici suggérer le fichier à ouvrir.
keywords: dossier, répertoire, dossier de projet, lecteur réseau, serveur, commencer ici, quel fichier, sauvegardes, liens, références externes, dossiers récents, glisser un dossier
from: 16fbdce2
---

## Ce que vous allez faire

Ouvrir un dossier de projet complet, comme celui qui vous a été remis pour un chantier, et laisser BimCraft le trier : quels modèles s'y trouvent, quelles copies sont des sauvegardes, quels fichiers sont liés à quoi, quels fichiers sont endommagés, et quel fichier vous voulez probablement ouvrir.

Seuls les quelques kilo-octets nécessaires à chaque fiche de modèle sont lus ; un dossier sur un lecteur réseau ou un dossier cloud synchronisé convient donc.

## Étapes

:::chromium
1. Cliquez sur {{ui:Ouvrir un dossier}} à gauche (ou au milieu de l'écran vide).
2. Choisissez le dossier de projet dans la fenêtre qui s'ouvre et cliquez sur **Sélectionner** (ou **Téléverser** ou **Ouvrir**, selon votre système).
3. Cliquez sur **Afficher les fichiers** lorsque le navigateur demande « Autoriser le site à afficher les fichiers ? ». Cela permet seulement à l'onglet de lire le dossier ; rien n'est téléversé.
4. Patientez pendant que la ligne d'état compte : « Analyse du dossier : … fichiers », puis « Vérification des fichiers Revit : … sur … ».
:::

:::firefox
1. Cliquez sur {{ui:Ouvrir un dossier}} à gauche (ou au milieu de l'écran vide).
2. Choisissez le dossier de projet dans la fenêtre qui s'ouvre et confirmez. Firefox peut vous demander de confirmer que la page peut lire les fichiers du dossier ; ceux-ci restent sur votre ordinateur.
3. Patientez pendant que la ligne d'état affiche « Lecture du dossier : … fichiers », puis « Vérification des fichiers Revit : … sur … ».
:::

:::safari
1. Cliquez sur {{ui:Ouvrir un dossier}} à gauche (ou au milieu de l'écran vide).
2. Choisissez le dossier de projet dans la fenêtre qui s'ouvre et cliquez sur **Téléverser**. Malgré le mot, rien ne quitte votre Mac : les fichiers sont seulement remis à l'onglet.
3. Patientez pendant que la ligne d'état affiche « Lecture du dossier : … fichiers », puis « Vérification des fichiers Revit : … sur … ».
:::

Vous pouvez aussi **glisser le dossier** depuis {{pick:mac=Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} sur la page. Un dossier glissé s'ouvre sans demande d'autorisation, dans tous les navigateurs.

## Ce que vous devez voir

Le rapport du dossier occupe le centre :

- Le nom du dossier, le nombre de modèles, de dessins CAO, de modèles IFC et de fichiers, ainsi que la taille totale.
- Des remarques rouges ou orange si des fichiers sont incomplets ou si des fichiers liés manquent dans le dossier.
- La zone {{ui:Commencer ici}} : le fichier que BimCraft vous suggère d'ouvrir, avec les raisons.
- **Modèles** : une ligne par modèle, avec ses sauvegardes regroupées dessous.
- **Fichiers liés et référencés**, **Modèles IFC**, **Dessins CAO** et **Mis de côté**, lorsque le dossier en contient.

À gauche, le panneau {{ui:Dossier}} en fait le résumé ; **Problèmes** indique « Aucun » lorsque toutes les copies sont saines.

## Utiliser la zone Commencer ici

La zone nomme un fichier et explique pourquoi, par exemple :

- « Travail enregistré le plus récemment dans ce dossier (3 mars 2025). »
- « *Consultant.rvt* est lié dans d'autres modèles : c'est un fond de plan, pas le fichier à modifier. »
- « *Tower.rvt* semble le choix évident, mais il est endommagé ; sa dernière copie valide date de … »
- « Il s'agit d'un modèle central : dans Revit, ouvrez-le avec « Create New Local » et travaillez sur la copie locale. »

1. Lisez les raisons.
2. Cliquez sur {{ui:Ouvrir sa fiche}} pour lire la fiche de ce fichier, ou sur {{ui:L'afficher dans la liste}} pour trouver sa ligne dans **Modèles**.
3. Vérifiez auprès de la personne qui a travaillé en dernier sur le projet avant de vous y fier. La zone le précise aussi : c'est une estimation fondée sur les noms, les dates et les liens.

## Ouvrir des fichiers depuis le rapport

1. Cliquez sur le nom d'un modèle pour ouvrir sa fiche. La fiche vérifie chaque lien par rapport au dossier.
2. Cliquez sur {{ui:Back to}} et sur le nom du dossier en haut de la fiche (ou sur {{ui:Retour au dossier}} à gauche) pour revenir.
3. Cliquez sur un fichier IFC sous **Modèles IFC** pour l'ouvrir en 3D.
4. Cliquez sur un DWG ou DXF sous **Dessins CAO** pour l'ouvrir en 2D. Ses dessins liés et ses images sont retrouvés automatiquement dans le dossier.

## Rouvrir un dossier plus tard

:::chromium
Les dossiers ouverts avec {{ui:Ouvrir un dossier}} ou par glisser-déposer figurent sous {{ui:Dossiers récents}} à gauche. Cliquez sur {{ui:Rouvrir}} puis sur le nom du dossier pour l'ouvrir à nouveau sans le choisir. Après un redémarrage du navigateur, Chrome ou Edge demande une fois encore ; choisissez « Autoriser à chaque visite » pour qu'il ne redemande plus. La liste n'est conservée que dans ce navigateur, elle n'est jamais envoyée. Cliquez sur × pour oublier un dossier.
:::

:::firefox safari
Ce navigateur ne peut pas mémoriser les dossiers entre deux visites. Choisissez de nouveau le dossier avec {{ui:Ouvrir un dossier}}, ou glissez-le dans la page.
:::

## Erreurs courantes

- **Choisir un dossier trop volumineux.** Au-delà de 20 000 fichiers : « Ce dossier contient plus de 20 000 fichiers. Choisissez un dossier plus petit, comme celui d'un seul projet. » Choisissez le dossier du projet, pas le lecteur entier.
- **Choisir le dossier parent de plusieurs projets.** La zone {{ui:Commencer ici}} choisit alors entre les projets. Choisissez un seul projet.
- **Les dossiers propres à Revit semblent ignorés.** Les dossiers `*_backup`, `*_log` et `Revit_temp` sont des dossiers de maintenance : ils figurent sous **Mis de côté** et ne sont pas lus.
- **Attendre qu'un modèle s'ouvre en 3D depuis sa fiche.** Un fichier de projet n'est qu'une fiche. Ouvrez son export IFC.
- **Téléphones et tablettes.** De nombreux navigateurs mobiles ne permettent pas de choisir un dossier. Utilisez un ordinateur.

Voir [Vérifier un dossier pour repérer les copies endommagées, les liens manquants et les fichiers résiduels](topic:check-folder-health) et [Rapport de dossier : rôles, états et liens](topic:folder-roles).
