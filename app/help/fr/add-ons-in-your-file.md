---
title: Modules complémentaires utilisés par votre fichier
summary: BimCraft indique dans un fichier IFC les modules complémentaires qui y ont écrit, et propose d'ajouter ceux qui manquent lorsque vous l'ouvrez.
keywords: module complémentaire, addon, ce fichier utilise, module manquant, trusscraft, bibliothèque, enregistrement, cadcraft_addons
from: 9d9500d8
---

## Ce que cela fait

Lorsqu'un module complémentaire écrit dans le modèle (une ferme, un tronçon de tuyauterie), BimCraft enregistre le module et sa version sur le projet IFC, dans un ensemble de propriétés nommé CadCraft_AddOns. L'enregistrement est écrit dans la même étape d'annulation que la modification propre au module : annuler la modification retire donc aussi l'enregistrement. Les autres programmes ignorent cet ensemble de propriétés ; ce que le module a dessiné reste dans le fichier dans tous les cas.

## Étapes

1. Ouvrez un fichier IFC qu'un module complémentaire a aidé à créer.
2. Si un module complémentaire utilisé n'est pas activé, une remarque au-dessus du modèle indique lesquels, avec un bouton pour les ajouter depuis votre compte de bibliothèque.
3. Ajoutez-les, ou fermez la remarque. Le modèle s'ouvre dans les deux cas.

## Erreurs courantes

- **Aucune remarque n'apparaît.** Vous n'êtes pas connecté à votre compte dans cet onglet, ou le fichier ne contient aucun enregistrement (il a été créé avant ces enregistrements, ou par un autre programme).
- **La liste des modifications affiche « undefined ».** Corrigé : les étiquettes affichent désormais le nom du module.

## Suite

- [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library)
