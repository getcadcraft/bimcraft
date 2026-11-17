---
title: Ouvrir la scène dans un autre programme
summary: Enregistrer la scène en fichier USD ou glTF pour tout programme qui les lit, ou l'ouvrir depuis Studio dans un programme de cet ordinateur.
keywords: ouvrir dans, usd, gltf, glb, export, programme de rendu, visualisation architecturale, studio, usdview, envoyer, transfert, paquet, dossier Unreal
from: 0a6559ee
---

Choisissez une entrée **Ouvrir dans** dans la liste Moteur de {{ui:Rendu}} pour emmener la scène vers un autre programme. Rien ne revient vers le modèle.

## Un fichier pour tout programme

- **Fichier USD** enregistre la scène en `.usdc` (ou `.usdz` lorsque le modèle contient des images) : le [même fichier que Enregistrer au format USD](topic:usd), avec les matériaux, les lampes et les caméras. Il conserve les instances et les valeurs exactes des matériaux. La plupart des moteurs de rendu, moteurs de jeu et visionneuses lisent l'USD.
- **Fichier glTF (.glb)** enregistre le fichier glTF 2.0, plus léger, avec les matériaux, les textures et les lampes ; voir [Envoyer le modèle vers un programme de rendu](topic:model-for-rendering) pour ce qu'il contient et ce qu'il laisse de côté.

- **Dossier de projet Unreal (.zip)** enregistre le dossier que [Envoyer la scène vers un moteur de jeu](topic:render-unreal) écrit, pour un projet sur n'importe quel ordinateur.

Les trois fonctionnent dans le navigateur et dans Studio.

## Dans Studio : l'ouvrir dans un programme

Studio liste les programmes trouvés sur cet ordinateur qui peuvent ouvrir la scène : usdview s'il se trouve dans votre chemin de recherche, et le programme de l'ordinateur pour ce type de fichier. Choisissez-en un, choisissez USD ou glTF là où il lit les deux, puis cliquez sur {{ui:Rendu}}. Studio écrit le paquet dans un nouveau dossier sous Documents (`CadCraft hand-off` ; rien n'est écrasé, chaque envoi a son propre dossier), lance le programme dessus, puis indique où se trouvent les fichiers.

| Programme | Lit le mieux |
|---|---|
| usdview | USD |
| Le programme de l'ordinateur | Ce que l'ordinateur possède pour ce type de fichier |

Studio ne lance que les programmes de cette liste fixe ; il ne lance rien que la page demande par son nom, et il ne lance jamais un programme sous licence GNU GPL (voir [Dessiner l'image avec un autre programme](topic:render-other-program#programs-cadcraft-never-runs)). Tout programme qui lit l'USD ou le glTF ouvre le fichier issu de **Un fichier pour tout programme** ci-dessus.

:::note
Twinmotion, Enscape et les autres programmes de visualisation ne figurent pas dans la liste : CadCraft n'a pas été testé avec eux et n'affirme rien à leur sujet. Un fichier glTF ou USD issu d'ici est la voie d'entrée ; voir les remarques sur [les moteurs de rendu à plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
