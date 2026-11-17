---
title: Vérifier la réverbération d'une pièce et l'écouter
summary: Temps de réverbération par bande d'octave pour chaque pièce (Sabine et Eyring), d'après sa taille et ses finitions, avec une cible de votre choix, et une voix, un claquement de mains ou de la musique joués à travers une réponse impulsionnelle calculée pour la pièce.
keywords: acoustique, réverbération, temps de réverbération, rt60, sabine, eyring, absorption, écho, son, écouter, réponse impulsionnelle, parole, salle de classe, bureau, moquette, dalle de plafond, bruit
from: 16996cbb
---

La section {{ui:Acoustique des pièces}} du panneau de gauche calcule la durée pendant laquelle le son persiste dans chaque pièce. Elle lit la surface au sol, la hauteur, les murs, les portes et les fenêtres de chaque pièce dans le modèle IFC ouvert. Rien n'est modifié dans le modèle.

## Choisir les finitions

Lorsque le modèle indique ce qui recouvre une surface, la pièce le lit : la couche intérieure du type de chaque mur (plâtre, enduit, brique, béton et bloc sont reconnus), le type de sol (bois ou béton) et la présence d'un plafond carrelé. L'étiquette à côté de chaque choix indique s'il provient du modèle, s'il s'agit d'une valeur par défaut ou d'un choix de votre part ; choisissez une autre finition pour la remplacer. Ce que le modèle n'indique pas reste à la valeur par défaut. Les coefficients sont des **valeurs typiques publiées** ; remplacez-les par les données d'essai d'un produit lorsque vous les avez. Saisissez une **cible** (la réverbération à fréquences moyennes la plus longue que vous acceptez) : toute pièce qui la dépasse affiche un avertissement, avec l'absorption qui permettrait de la ramener sous cette valeur.

## Lire le tableau

La réverbération est donnée de 125 Hz à 4 kHz. Sabine convient aux pièces réverbérantes et Eyring aux pièces mates ; la ligne marquée *Utilisé* prend Eyring lorsque l'absorption moyenne est supérieure à 0.2. L'absorption de l'air est incluse (elle raccourcit les bandes aiguës dans les grandes pièces). C'est un modèle statistique : il suppose que le son se répartit uniformément. Les pièces longues ou plates et les très petites pièces ne donnent donc qu'une indication approximative, et le mobilier, les personnes et les portes ouvertes ne sont pas comptés.

## Écouter

{{ui:Le jouer dans cette pièce}} joue une voix (générée ici), un claquement de mains, des notes pincées ou **votre propre fichier audio** (il reste sur votre ordinateur) à travers une réponse impulsionnelle calculée pour la pièce : le son direct, les premières réflexions d'une boîte de cette taille, et une queue qui s'éteint au temps de réverbération propre à la pièce dans chaque bande. {{ui:Le jouer à sec}} joue le même son au même niveau, sans la pièce. Vous pouvez enregistrer la réponse impulsionnelle ou le son dans la pièce sous forme de fichiers WAV. Le résultat sonne comme une pièce de cette taille et de cette finition, pas comme une pièce réelle en particulier.

## Personnes et mobilier

Saisissez le nombre de **personnes dans cette pièce** pour ajouter leur absorption. Le mobilier présent dans le modèle (canapés, lits, chaises, tables, armoires, reconnus par leur nom) ajoute sa propre absorption. Les valeurs sont des ordres de grandeur arrondis, destinés à la planification ; remplacez-les par des mesures pour une pièce importante.

## Source et auditeur

Sous {{ui:Source et auditeur}}, cliquez sur {{ui:Placer la source}} ou {{ui:Placer l'auditeur}}, puis cliquez sur le plan de la pièce. Le son que vous jouez s'entend alors depuis ce point : le son direct arrive après la distance, et la partie réverbérée est au niveau correspondant à cette distance. Effacez les deux pour revenir à la case de distance.

## Absorption inégale et modes de la pièce

Sous {{ui:Absorption inégale (pièce en boîte)}}, saisissez la pièce sous forme de boîte et choisissez les finitions de son sol, de son plafond et de ses murs. Le tableau ajoute les formules de Fitzroy et d'Arau-Puchades à celles de Sabine et Eyring : elles traitent séparément les trois paires de surfaces opposées, de sorte qu'une pièce moquettée à plafond dur n'est pas jugée trop courte. Lorsque les paires diffèrent fortement, une remarque indique laquelle retenir. Sous le tableau, **Modes de la pièce** liste les ondes stationnaires les plus basses de la boîte, ainsi que la fréquence en dessous de laquelle la pièce a des modes distincts au lieu d'un champ sonore uniforme. Ce sont des prévisions pour une pièce en boîte, une aide à la conception et non une mesure.

## Unités

Les surfaces, hauteurs, volumes et distances des pièces s'affichent dans les {{ui:Unités}} que vous avez choisies (pieds et pouces carrés et cubes, pouces, millimètres, centimètres ou mètres). Le calcul lui-même reste en SI ; seul l'affichage change. Les durées (secondes), les fréquences et les niveaux ne changent pas.
