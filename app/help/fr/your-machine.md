---
title: Avec quoi votre machine effectue le rendu
summary: Paramètres › Rendu affiche les cartes graphiques, les cœurs de processeur et la mémoire que ce navigateur laisse à l'application, ainsi que le niveau qui fixe le point de départ du rendu.
keywords: votre machine, carte graphique, gpu, webgpu, webgl, processeur, cpu, cœurs, threads, mémoire, ram, mémoire partagée, isolement, palier, niveau, vitesse, lent, vitesse de rendu, ordinateur portable
from: 360f2375
---

Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), restez sur l'onglet propre à cette application et faites défiler jusqu'à {{ui:Rendu}}. {{ui:Votre machine}} énumère ce que ce navigateur laisse l'application utiliser pour le rendu. Rien de tout cela ne quitte votre ordinateur.

| Ligne | Ce que cela signifie |
|---|---|
| {{ui:Graphismes}} | La carte graphique que signale le navigateur. « WebGPU » signifie qu'elle peut effectuer le travail de rendu ; « WebGL 2 uniquement » signifie qu'il n'y a pas de WebGPU : la vue en direct et les images de haute qualité utilisent la carte graphique via WebGL 2 (images avec l'ancien moteur de rendu WebGL à tracé de chemins, sans les fonctions qui exigent WebGPU) ; un substitut logiciel signifie que tout s'exécute sur le processeur |
| {{ui:Processeur}} | Le nombre de cœurs de processeur que signale le navigateur |
| {{ui:Mémoire}} | Environ la quantité de mémoire de l'ordinateur, lorsque le navigateur l'indique. Certains navigateurs ne l'indiquent pas |
| {{ui:Mémoire partagée}} | Indique si la page peut partager la mémoire entre ses threads de travail. Activée, chaque cœur peut travailler sur une seule copie d'une scène ; désactivée, chacun a besoin de sa propre copie, donc une grande scène tient sur moins de cœurs à la fois |
| {{ui:Code processeur rapide}} | Indique si le navigateur exécute le code WebAssembly plus rapide. Sans lui, une solution de repli plus lente est utilisée |
| {{ui:Niveau}} | {{ui:Carte graphique, haute}}, {{ui:Carte graphique, de base}} ou {{ui:Processeur seul}}, avec la raison affichée dessous |

## Le niveau

Le niveau fixe le point de départ du rendu, afin qu'un ordinateur portable doté d'une puce graphique intégrée ou sans carte graphique reste réactif. Une puce graphique intégrée ou de téléphone, ou 4 GB de mémoire ou moins, n'obtient jamais {{ui:Carte graphique, haute}}.

:::note
Les navigateurs diffèrent. Le même ordinateur peut afficher WebGPU dans un navigateur et « WebGL 2 uniquement » dans un autre. Sous Linux, la plupart des navigateurs ne disposent pas encore de WebGPU.
:::
