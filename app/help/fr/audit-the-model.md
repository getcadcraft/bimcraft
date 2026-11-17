---
title: Auditer le modèle : pièces, repères, LOD, conflits et interfaces
summary: Lancez des contrôles prêts à l'emploi pour les pièces sans nom, les repères manquants, les éléments en dessous du niveau de développement exigé par le stade du projet, les conflits entre disciplines et les interfaces LOD 350. Simples conseils : rien n'est bloqué.
keywords: audit, contrôle, pièce sans nom, repère manquant, repère, lod, niveau de développement, jalon, stade, conflit, discipline, coordination, interface, lod 350, ouverture, linteau, traverse, traversée, fourreau, tuyau, gaine, problèmes, rapport de contrôle, conseil
from: cc83a14d
---

## Ce que vous allez faire

Parcourez tout le modèle d'un seul coup avant de le diffuser. L'audit lance des jeux de règles prêts à l'emploi et place ce qu'il trouve dans la liste {{ui:Problèmes}}, sous forme de conseils. Rien n'est bloqué : vous corrigez un constat, ou vous l'acceptez avec une raison, comme pour tout autre problème.

## Étapes

1. Ouvrez {{ui:Contrôles du modèle}} › {{ui:Audit}} dans le panneau de gauche, ou {{ui:Outils}} › {{ui:Auditer le modèle…}} (saisi : `AUDIT`).
2. Choisissez le {{ui:Stade du projet}}. C'est le même stade que dans les détails du dessin.
3. Cochez les jeux de règles à exécuter.
4. Cliquez sur {{ui:Lancer l'audit}}.
5. Lisez la ligne de chaque jeu de règles, puis {{ui:Ouvrir la liste des Problèmes}}. Un clic sur un constat sélectionne son élément.
6. {{ui:Le rapport de vérification}} télécharge le rapport : chaque constat, qui a accepté quoi et pourquoi, et les jeux de règles exécutés.

## Les jeux de règles

- **Pièces sans nom** : une pièce sans nom, ou qui porte encore le nom donné par le programme (« Pièce 3 »).
- **Repères manquants** : une porte ou une fenêtre sans repère, une pièce sans numéro, un appareil électrique sans repère.
- **Éléments sous le LOD du stade** : chaque mur, dalle, plafond, toiture, porte et fenêtre dont le LOD est inférieur à celui qu'exige le stade. Un élément lit le repère LOD de son type ; un élément vérifié sur site est en LOD 500. Les éléments sans repère sont comptés dans une seule remarque, car ils ne peuvent pas être contrôlés.
- **Conflits entre disciplines** : des éléments de deux disciplines (architecture, structure, mécanique, plomberie, électricité, selon la classe IFC) qui se heurtent. Une toiture reposant sur ses murs n'est pas comptée.
- **Interfaces LOD 350** : chaque porte et fenêtre se trouve dans une ouverture de son mur, l'ouverture tient dans le mur, deux ouvertures ne se chevauchent pas, une ouverture plus large que la limite a un linteau ou une traverse (un élément au-dessus, ou une remarque sur la porte ou la fenêtre), et un tuyau, une gaine ou un chemin de câbles qui traverse un mur ou une dalle a une ouverture à cet endroit. Les constats sont comptés par paire de disciplines.
- **Éléments reconnus que personne n'a vérifiés** : murs, portes, fenêtres et pièces lus depuis un PDF, un scan ou un dessin, et encore non vérifiés. Voir [Marquer des éléments comme vérifiés ou contrôlés sur site](topic:verification).

## Le LOD demandé à chaque stade

Ouvrez {{ui:Le LOD demandé à chaque stade}} pour voir ou modifier le tableau.

:::note
Le tableau et la largeur du linteau sont des valeurs de départ de CadCraft. Elles ne sont pas tirées d'une norme : un projet fixe le LOD par stade dans son plan d'exécution BIM. Réglez-les selon le vôtre. Un bureau peut régler le tableau pour tout le monde dans Paramètres › Default Policies › Audit ; une modification dans la section Audit est conservée sur cet ordinateur.
:::

## Bon à savoir

- Un linteau peut être noté au lieu d'être modélisé : choisissez la porte ou la fenêtre et renseignez {{ui:Note sur le linteau ou la traverse}} sous {{ui:Vérification}} dans les Propriétés.
- Un tuyau qui passe par une vraie ouverture ne traverse aucune surface et n'est pas signalé. Un tuyau modélisé directement à travers le mur, lui, l'est.
- Le contrôle des conflits s'arrête après quelques secondes sur un très grand modèle, et l'indique. Pour un contrôle complet de deux jeux choisis, utilisez [Trouver les conflits entre éléments](topic:clash-check).
- Relancez l'audit après avoir modifié le modèle. Les constats acceptés restent acceptés tant que leurs numéros ne changent pas.
- Il lit le modèle. Il ne remplace pas une revue de coordination par les personnes responsables.

## Suite

- [Contrôler un modèle pour détecter les problèmes courants](topic:model-checks)
- [Trouver les conflits entre éléments](topic:clash-check)
- [Marquer des éléments comme vérifiés ou contrôlés sur site](topic:verification)
