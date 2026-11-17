---
title: Choisir le programme qui dessine l'image
summary: "Le choix Moteur dans la boîte de dialogue Rendu : nos deux moteurs, d'autres programmes dans CadCraft Studio, et ce que fait le web à la place."
keywords: rendu, moteur, moteur de rendu, plug-in, plugin, studio, programme externe, dessiné par, file de rendu, moteur de module complémentaire
from: 44a1ef5e
---

{{ui:Rendu}} a un choix **Moteur** au-dessus de Mode. Nos deux moteurs sont toujours là et fonctionnent partout ; les modules complémentaires peuvent en ajouter d'autres, et dans CadCraft Studio la liste contient aussi les programmes qui reprennent la scène.

| Moteur | Ce qu'il fait | Où |
|---|---|---|
| Intégré : Rapide | L'image fixe rapide : lumière du jour, ombres douces, aspects verre et métal, en quelques secondes | Le navigateur et Studio |
| Intégré : Path tracer | La lumière qui rebondit entre les surfaces, sur votre carte graphique ou votre processeur ; la file de rendu et les autres ordinateurs de votre réseau | Le navigateur et Studio |
| Un moteur de module complémentaire | Il dessine l'image et la renvoie : voir [Dessiner l'image avec un autre programme](topic:render-other-program) | Le navigateur (un moteur écrit en JavaScript) ou Studio (un moteur qui lance un programme) |
| Un programme qui reprend la scène | Studio place la scène dans son dossier et la tient à jour | Studio |
| Ouvrir dans… | Enregistre la scène et l'ouvre dans un programme ; rien ne revient : voir [Ouvrir la scène dans un autre programme](topic:render-open-in) | Le web enregistre le fichier |

## Fonctionnement du choix

- Choisir Rapide ou le Path tracer change Mode avec lui, et inversement. Rien d'autre dans la boîte de dialogue ne change pour ceux qui n'utilisent jamais un autre moteur.
- Un moteur indisponible reste dans la liste avec la raison (« introuvable », « nécessite une version plus récente ») ; vous ne pouvez pas le choisir. Dans le navigateur, un moteur qui ne fonctionne que dans Studio affiche « enregistre un fichier » : {{ui:Rendu}} enregistre alors la scène et ses réglages dans un fichier que vous emportez vers ce programme.
- Le choix est enregistré avec les réglages de rendu du fichier, et le moteur choisi en dernier est le moteur de départ pour les fichiers qui n'ont pas de choix propre.
- Une image venue d'un autre programme indique quel programme l'a dessinée et sa version, dans la boîte de dialogue comme dans la file de rendu. Les engagements de la page [Rendu](topic:render) ne couvrent que **nos propres** moteurs : un autre programme éclaire, règle les tons et échantillonne à sa façon, donc deux images d'une même scène sont semblables en cadrage, soleil, lampes et exposition, mais pas pixel pour pixel.

## Ce que reçoit chaque moteur

La scène va vers un autre programme sous forme de **paquet** : le modèle en fichier USD (le même fichier qu'écrit [Enregistrer au format USD](topic:usd)), et un fichier de réglages qui contient ce qu'un importateur USD ne peut pas gérer de façon sûre : les valeurs exactes des matériaux, les lampes allumées avec leur puissance et leurs profils de lumière, le soleil, le ciel, l'exposition et la caméra telle que la boîte de dialogue la dessinerait. Rien n'est téléversé.

## La file de rendu

Une image destinée à un autre programme peut attendre dans [la file de rendu](topic:render#the-render-queue) comme les nôtres ; sa tâche retient le moteur auquel elle est destinée.
