---
title: Travailler à plusieurs sur un modèle avec Live TeamWork
summary: Ce qui change dans BimCraft pendant une session Live TeamWork depuis CadCraft Studio : les modifications de chacun sur le même modèle IFC, votre propre annulation et la connexion depuis un navigateur sur le même réseau.
keywords: live, live teamwork, studio live, ensemble, collaborer, session, partager en direct, rejoindre, ifc, propriétés, renommer, curseur, pointeur, se voir, noms, couleur, sélection, annuler, hôte
from: 32061b72
---

## Ce que vous allez apprendre

Ce qui se passe avec un modèle IFC lorsque plusieurs personnes le modifient en même temps. CadCraft Studio démarre et rejoint la session Live TeamWork (Partager, Rejoindre) ; cette page porte sur le modèle lui-même.

## Tout le monde modifie en même temps

Le modèle de l'hôte arrive chez chacun de ceux qui rejoignent. Renommez les éléments, modifiez leurs valeurs de propriété, placez, remplacez ou retirez des éléments et des objets de bibliothèque comme d'habitude. Vos modifications s'affichent immédiatement ; celles des autres apparaissent un instant après qu'elles les ont faites. Lorsqu'une modification change ce que vous voyez (un élément placé ou retiré), BimCraft redessine le modèle et conserve votre vue.

- **Deux personnes modifient un même élément :** la modification la plus récente sur la même ligne du modèle l'emporte. Un ensemble de propriétés partagé par plusieurs éléments est copié pour l'élément que vous modifiez, comme toujours, afin que les autres gardent leurs valeurs.
- **Un élément que quelqu'un vient de retirer** ne peut plus être modifié : votre modification est annulée, et la barre d'état indique pourquoi.
- Les nouvelles lignes de chacun dans le modèle reçoivent des numéros qui leur sont propres, de sorte que deux personnes n'obtiennent jamais le même.

## Se voir

Chaque personne de la session a sa propre couleur. Dans la vue 3D, vous voyez le pointeur de chacun sous forme de flèche de sa couleur, avec son nom à côté, sur l'élément qu'il pointe, et un cadre en pointillés de sa couleur autour de chaque élément sélectionné.

Les pointeurs, les noms et les sélections ne valent que pour la session : ils ne sont jamais enregistrés dans le fichier et n'entrent jamais dans l'annulation de personne. Ils glissent jusqu'à la position de chacun, restant ainsi fluides même sur une connexion lente.

## Annuler ne défait que votre travail

{{ui:Annuler}} annule votre dernière modification et laisse celles des autres intactes. Si quelqu'un a modifié la même chose depuis, rien n'est annulé et la barre d'état indique qui.

## Rejoindre depuis un navigateur

Un coéquipier sans Studio peut scanner le QR code de l'hôte avec un téléphone, une tablette ou un ordinateur sur le même réseau. BimCraft s'ouvre dans le navigateur et ouvre le modèle de l'hôte dès que celui-ci vous laisse entrer. Un lien d'invitation permet de rejoindre depuis un autre réseau : l'hôte a besoin d'un poste Team Cloud Plan pour l'application, les autres rejoignent gratuitement, et le lien ne fonctionne que tant que la session de l'hôte est ouverte.

## Quand la session se termine

Seul l'hôte enregistre le modèle. Les autres gardent une copie non enregistrée : utilisez Enregistrer sous IFC si vous voulez la conserver.

:::note
Seul le premier modèle de la scène est partagé. Ouvrir un autre fichier pendant une session quitte la session dans cette fenêtre.
:::
