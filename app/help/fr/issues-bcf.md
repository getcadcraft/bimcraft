---
title: Problèmes et fichiers BCF
summary: Enregistrez une vue du modèle comme problème — caméra, éléments sélectionnés, éléments masqués, coupe —, partagez-la dans un fichier BCF avec d'autres outils de coordination, et ouvrez leurs fichiers BCF pour voir leurs problèmes.
keywords: bcf, bcfzip, problème, problèmes, sujet, point de vue, rapport de conflits, coordination, commentaire, instantané, ouvrir un bcf, enregistrer un bcf, exporter, importer
from: 2a6cf201
---

## Ce que vous allez faire

Repérez un problème dans le modèle et conservez la vue qui le montre, puis transmettez-la dans un fichier BCF, le format que lisent et écrivent les autres outils de coordination.

## Étapes

1. Ouvrez un modèle IFC et réglez la vue : orbitez jusqu'à lui, sélectionnez les éléments concernés, masquez ce qui gêne, coupez-le avec un plan de coupe ou une boîte.
2. Cliquez sur l'onglet {{ui:Problèmes}} à droite, puis sur {{ui:Nouveau problème depuis cette vue}}.
3. Saisissez un titre, et un commentaire si vous le souhaitez ; choisissez un statut ; indiquez votre nom ou votre e-mail (connecté, le nom de votre compte est renseigné ; voir [Paramètres de BimCraft](topic:settings#your-name-on-issues)). Cliquez sur {{ui:Créer le problème}}.
4. Cliquez sur {{ui:Afficher}} sur un problème pour rétablir sa vue.
5. Cliquez sur {{ui:Enregistrer le BCF}} pour télécharger tous les problèmes dans un seul fichier `.bcf`.
6. Pour voir les problèmes créés par quelqu'un d'autre, cliquez sur {{ui:Ouvrir un BCF…}} et choisissez son fichier `.bcf` ou `.bcfzip`.

## Ce que vous devriez voir

- Chaque problème dans la liste, avec une image de sa vue, son titre, son statut, son auteur et sa date.
- {{ui:Afficher}} rétablit la caméra, les éléments sélectionnés, ce qui était masqué (ou les seules choses affichées) et la coupe. Les éléments sont retrouvés par leur GlobalId dans chaque modèle ouvert ; la ligne d'état indique si certains manquent.
- Un plan de coupe ou une boîte venant d'un autre outil est affiché lorsqu'il est aligné sur les axes du modèle ; les plans inclinés ou supplémentaires reviennent sous forme de volume de coupe (jusqu'à 6 plans). Un problème conserve la première boîte d'un volume composé de plusieurs boîtes.

## Bon à savoir

- Le fichier est au format BCF 2.1 et conserve la vue dans les coordonnées propres au modèle, afin que les autres outils placent la caméra au même endroit.
- Les problèmes restent dans cet onglet jusqu'à leur enregistrement. Ouvrir un autre modèle conserve la liste ; ouvrez le modèle concerné par les problèmes avant de les afficher.
- Une caméra parallèle (orthogonale) venant d'un autre outil est affichée avec la caméra en perspective de ce visualiseur, reculée pour que la même partie du modèle remplisse la vue.

## Erreurs courantes

- **Afficher a déplacé la caméra vers un endroit étrange.** Le problème a été créé sur un autre modèle ou avec d'autres coordonnées. Ouvrez d'abord le bon modèle.
- **Le fichier ne s'ouvre pas.** Ce n'est pas un fichier BCF zippé, ou il est endommagé ; la ligne d'état indique la raison.

## Suite

- [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate)
- [Couper un modèle IFC avec un plan de coupe](topic:section-plane)
