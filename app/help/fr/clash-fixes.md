---
title: Régler les conflits avec les corrections de chaque discipline
summary: À partir des résultats de détection, Proposer des corrections liste pour chaque conflit ce que chaque discipline pourrait faire — une gaine contournée sous une poutre, une canalisation écartée, un poteau déplacé, une ouverture dans une poutre — chacune testée sur une copie du modèle avec ses compromis, à accepter ou rejeter. Les corrections acceptées s'appliquent en une seule étape d'annulation.
keywords: conflit, correction de conflit, résoudre les conflits, régler les conflits, coordination, proposer des corrections, contournement, détour, décalage, gaine, tuyau, chemin de câbles, poutre, poteau, ouverture, fourreau, compromis, discipline, structure, mécanique, plomberie, électricité, architecture, assistant
from: f7bafdd9
---

## Ce que vous allez faire

Transformez une liste de conflits en décisions. Chaque discipline (structure, mécanique, plomberie, électricité, architecture) propose des corrections pour ses propres éléments seulement, chaque proposition est vérifiée sur une copie du modèle, et c'est vous qui choisissez.

## Étapes

1. Lancez d'abord la détection de conflits. Voir [Détecter les conflits](topic:clash-check) et [Vérifier les tuyaux et gaines par rapport à la structure](topic:mep-against-structure).
2. Sous les résultats, cliquez sur {{ui:Proposer des corrections}}. Le panneau **Corrections proposées** s'ouvre à côté du modèle.
3. Pour chaque conflit, vous voyez les propositions de chaque discipline, la meilleure en premier. Chaque ligne indique ce qu'elle fait et ses compromis : si elle règle le conflit, combien de nouveaux conflits elle crée, quelles règles elle enfreint, de combien elle allonge le tronçon ou à quelle distance elle le déplace, combien de raccords elle ajoute, et un score de coût.
4. Cliquez sur {{ui:Afficher}} pour voir les éléments en 3D. Cliquez sur {{ui:Accepter}} sur la correction que vous voulez (une par conflit), ou sur {{ui:Rejeter}}.
5. La ligne en bas indique ce que font ensemble toutes vos corrections acceptées : combien de conflits sont réglés, combien restent, et si un nouveau conflit apparaît.
6. Cliquez sur {{ui:Appliquer les corrections acceptées (une seule étape d'annulation)}}. La détection de conflits est relancée. {{ui:Annuler}} les reprend toutes d'un coup.

## Ce que peut faire chaque discipline

- **Mécanique** (gaines, tuyauteries de chauffage et de climatisation) : contourner par-dessus ou par-dessous le tronçon qui heurte, relever ou abaisser tout le tronçon, le déporter sur le côté, aplatir une gaine rectangulaire à section égale.
- **Plomberie** (eau, évacuations, gaz, incendie) : les mêmes mouvements, sauf qu'une évacuation gravitaire n'est jamais contournée ; elle ne peut être déplacée que d'un bloc, en gardant sa pente.
- **Électricité** (chemins de câbles et conduits) : les mêmes mouvements ; un chemin de câbles doit garder 150 mm libres au-dessus de lui pour poser les câbles.
- **Structure** : déplacer un poteau (jusqu'à 300 mm), ou une ouverture dans l'âme d'une poutre ou dans une dalle pour le tronçon qui passe. Chaque correction de structure doit être validée par l'ingénieur structure.
- **Architecture** : un fourreau dans un mur pour le tronçon qui passe, ou déplacer un mur dont on sait qu'il ne porte pas de charge.

## Ce que vous devriez voir

- Les corrections qui enfreignent une règle sont signalées : à moins de l'écart de 25 mm par rapport à un autre élément, sous la ligne de hauteur libre de 2,100 mm, une ouverture dans l'âme plus grande que 40% de la hauteur de la poutre ou trop près de ses extrémités, une poutre qui changerait de portée.
- Les corrections que BimCraft peut appliquer au modèle sont celles des tronçons que vous avez dessinés avec les outils Tuyau et Gaine, et des poteaux que vous avez dessinés. Les autres indiquent **Conseil seulement** : leur acceptation ajoute alors un problème dans l'onglet Problèmes.

## Bon à savoir

- Les corrections proviennent de règles intégrées à l'application ; aucune IA n'est utilisée pour les produire.
- Si vous connectez un assistant (voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants)), il peut lire les conflits et ajouter ses propres propositions pour une discipline dans le panneau ouvert. Elles sont vérifiées de la même façon, marquées du nom de l'assistant, et rien ne change tant que vous n'avez pas accepté et appliqué.
- La copie est vérifiée avec des boîtes englobant chaque élément et chaque tronçon d'un parcours ; un tronçon incliné peut donc afficher un conflit que la détection de conflits ne signalerait pas. Relancez la détection de conflits après application : c'est elle qui fait foi.
- Les limites (jusqu'où un tronçon peut se déplacer, la hauteur maximale d'un contournement, l'écart) sont les valeurs par défaut indiquées dans le panneau.

## Suite

- [Problèmes et fichiers BCF](topic:issues-bcf)
- [Dessiner des tronçons de tuyauterie et de gaines](topic:pipes-and-ducts)
