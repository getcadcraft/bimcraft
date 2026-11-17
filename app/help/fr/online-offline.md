---
title: En ligne et hors ligne
summary: Ce que BimCraft charge depuis le site, comment Enregistrer pour le hors ligne permet d'ouvrir les modèles IFC et les dessins DWG sans connexion, et pourquoi rien de ce que vous ouvrez n'est jamais envoyé.
keywords: hors ligne, en ligne, internet, connexion, sans réseau, avion, visite de chantier, enregistrer pour le hors ligne, prêt hors ligne, téléverser, confidentialité, wasm, webassembly, moteur IFC, dwg, cloud
from: 39e5c7eb
---

BimCraft lit vos fichiers dans l'onglet du navigateur. L'ouverture, l'inspection, la modification et l'enregistrement n'envoient jamais vos fichiers quelque part que ce soit, en ligne ou hors ligne. [Travailler hors ligne](common:offline) explique le fonctionnement des copies hors ligne dans toutes les applications ; cette page couvre ce qui est propre à BimCraft.

## Ce que BimCraft charge depuis le site

| Élément | Quand il se charge sans copie hors ligne | Taille |
|---|---|---|
| L'application elle-même, avec la visionneuse 3D et le code du moteur IFC | Au lancement de BimCraft | Plusieurs MB |
| La partie WebAssembly du moteur IFC | Le premier fichier IFC ouvert dans l'onglet : « Démarrage du moteur IFC… » | Environ 1.6 MB |

Les dessins DWG et DXF, les fichiers de projet et de familles, et les dossiers n'ont besoin de rien de plus : leurs lecteurs font partie de l'application.

## Enregistrer BimCraft pour une utilisation hors ligne

1. Ouvrez BimCraft pendant que vous êtes en ligne.
2. Cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre d'application en haut.
3. Regardez le bouton compter : « Enregistrement 40 sur 212 », par exemple. La copie de BimCraft fait environ 11 MB, car elle inclut le moteur IFC.
4. Attendez {{ui:Prêt hors ligne}}.

Dès que {{ui:Prêt hors ligne}} s'affiche, les modèles IFC, les dessins DWG et DXF, les fichiers de projet, les dossiers et cette aide s'ouvrent sans connexion. Vous n'avez pas besoin d'ouvrir d'abord un IFC ou un DWG pour « préchauffer » les lecteurs.

Pour mettre à jour ou supprimer la copie, cliquez sur {{ui:Prêt hors ligne}} et choisissez {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}.

## Ce que signifie le bouton

| Bouton | Signification |
|---|---|
| {{ui:Enregistrer pour le hors ligne}} | Pas encore de copie hors ligne dans ce navigateur. Cliquez pour en enregistrer une |
| « Enregistrement *n* sur *m* » | Enregistrement en cours ; gardez l'onglet ouvert jusqu'à la fin |
| {{ui:Prêt hors ligne}} | Enregistré. Survolez pour voir quand ; cliquez pour le menu |
| {{ui:Enregistrement impossible}} | Certains fichiers n'ont pas été téléchargés. Vérifiez votre connexion et cliquez pour réessayer. La dernière bonne copie, s'il y en a une, est conservée |
| {{ui:Hors ligne indisponible}} | Cette fenêtre ne peut pas conserver de copie hors ligne (fenêtre privée ou ordinateur géré). Voir [Travailler hors ligne](common:offline) |

:::offline
Vous êtes hors ligne.

- Si le bouton indique {{ui:Prêt hors ligne}}, chaque type de fichier s'ouvre comme d'habitude.
- Sinon, seul ce que cet onglet a déjà chargé fonctionne : un lecteur jamais chargé dans cet onglet ne peut pas démarrer, et l'ouverture de ce type de fichier affiche une erreur du navigateur dans la barre d'état. Ne rechargez pas l'onglet tant que vous n'êtes pas de nouveau en ligne.
:::

## Ce qui n'a jamais besoin de connexion

Une fois BimCraft ouvert dans l'onglet, ces fonctions marchent hors ligne, même sans copie enregistrée :

- Lecture des fichiers de projet et de familles, et vérification des dossiers.
- Sélection des éléments, lecture des propriétés et modification des valeurs IFC dans un modèle déjà ouvert.
- {{ui:Enregistrer au format IFC}} et {{ui:Télécharger le CSV}} : ce sont des téléchargements effectués dans l'onglet.

## Ce qui n'est pas encore disponible

- **Enregistrement dans le cloud.** Les fichiers ne sont enregistrés que sur votre ordinateur.

Voir [Où vont vos fichiers](common:your-files).
