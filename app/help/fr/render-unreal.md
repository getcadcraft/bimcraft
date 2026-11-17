---
title: Envoyer la scène vers un moteur de jeu
summary: Studio peut écrire la scène dans un projet Unreal Engine et la tenir à jour à chaque envoi ; vos propres modifications vivent dans un calque que CadCraft n'écrit jamais. Le module qui l'ouvre n'est pas encore publié.
keywords: unreal, unreal engine, moteur de jeu, lien, envoyer, scène USD, projet, live, cine camera, movie render queue
from: 154d55ef
---

Dans CadCraft Studio, la liste Moteur peut contenir un **lien** vers un projet Unreal Engine. Dans un seul sens : de CadCraft vers Unreal.

## Envoyer la scène

1. Choisissez l'entrée Unreal dans la liste Moteur. La première fois, Studio vous demande de désigner le dossier de votre projet (celui qui contient le fichier `.uproject`) ; il s'en souvient.
2. Cliquez sur {{ui:Envoyer}}. Studio écrit `CadCraft/<nom du fichier>/` dans le projet : la scène en fichier USD, le fichier de réglages, les profils de lumière et deux petits fichiers de calque.
3. Modifiez le modèle, enregistrez et renvoyez. Seuls la scène et le fichier de réglages sont remplacés.

## Vos modifications sont protégées

La scène qu'Unreal ouvre est une petite couche racine créée une seule fois, avec deux couches en dessous : **la vôtre** au-dessus (`<name>.user.usda`, vide au départ et jamais réécrite par CadCraft) et la scène de CadCraft en dessous. Les modifications que vous enregistrez dans votre propre couche restent lorsque la scène est renvoyée. Les lumières et les autres acteurs que vous placez dans le niveau Unreal sont hors de la scène et ne sont pas touchés non plus.

## Sans Studio

Dans le navigateur, ou sur un ordinateur où Studio ne trouve pas Unreal, choisissez **Dossier de projet Unreal (.zip)** dans la liste Moteur et cliquez sur {{ui:Rendu}}. Il enregistre le même dossier sous forme de zip : décompressez-le dans le dossier `CadCraft` de votre projet. Laissez **Inclure les fichiers de scène** coché la première fois ; décochez-le pour les enregistrements suivants, afin que le zip ne contienne que la scène et le fichier de réglages, et que votre propre calque ne soit jamais remplacé.

:::note
Le module Unreal qui ouvre la scène, applique le soleil, les lampes, les caméras et l'exposition, suit chaque envoi et calcule une image depuis une caméra n'est **pas encore publié** et n'a pas été exécuté dans Unreal. Tant qu'il ne l'est pas, Envoyer dépose les fichiers dans le projet, et les outils USD propres à Unreal peuvent les ouvrir. Windows est le premier système ; macOS suivra.
:::
