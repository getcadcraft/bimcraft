---
title: Vérifier les éléments en béton et calculer les charges sismiques
summary: Paramétrez les armatures des poutres et poteaux en béton du modèle ouvert, vérifiez-les selon ACI 318-19, calculez les forces latérales équivalentes selon ASCE 7-22 sur planchers rigides et voyez la dérive d'étage. Une aide pour qu'un ingénieur vérifie.
keywords: béton, béton armé, ACI 318, ACI 318-19, armature, poutre, poteau, cisaillement, étriers, sismique, séisme, force latérale équivalente, ELF, ASCE 7-22, dérive, dérive d'étage, planchers, diaphragme rigide, poids d'étage, taux d'utilisation, structurel, ingénieur, analyse
from: 2f342e72
---

Les blocs {{ui:Éléments en béton}} et {{ui:Charges sismiques}} de l'onglet {{ui:Analyse}} vérifient les poutres et poteaux en béton armé de l'IFC ouvert, et calculent les efforts horizontaux d'un séisme sur les planchers de son ossature. Ce sont les mêmes blocs que ceux de DetailCraft, exécutés après l'analyse de l'onglet {{ui:Analyse}}, et enregistrés dans l'IFC avec les autres réglages d'analyse.

:::warning
Les résultats sont **destinés à la vérification par un ingénieur** : une aide tant qu'un ingénieur ne les a pas relus. Les vérifications du béton utilisent des efforts du premier ordre (un poteau dans une ossature que vous déclarez sans déplacement latéral est dimensionné pour son moment amplifié), sans amplification due aux déplacements latéraux, sans dimensionnement à la torsion, sans dispositions sismiques (ACI chapitre 18) ni détail des étriers. Les charges sismiques ne tiennent pas compte du coefficient de redondance, de l'effet sismique vertical, de l'amplification torsionnelle ni des effets P-delta. **Les charges de vent ne sont pas encore disponibles** : les chapitres vent de la norme ne figurent pas dans les pages de référence du projet.
:::

## Ce que BimCraft lit

L'analyse lit les poutres, poteaux et contreventements du modèle avec leurs profilés (voir [Analyser l'ossature](topic:frame-analysis)). Le bloc {{ui:Éléments en béton}} liste toutes les sections qu'ils utilisent. Cliquez sur {{ui:Paramétrer en béton…}} pour une section en béton : BimCraft prend un rectangle à partir de l'aire et de la rigidité du profilé (la largeur b et la hauteur h que vous pouvez ensuite modifier). Une section peu proche d'un rectangle (un profilé acier laminé) donne donc une taille à corriger, ou reste telle quelle.

Une section paramétrée en béton, et tout élément dont le matériau est nommé béton, est analysé comme du béton : E = 4700 √f′c, 2400 kg/m³, et par défaut avec des **sections fissurées** (poteaux 0.70 Ig, poutres 0.35 Ig ; ACI 318-19 tableau 6.6.3.1.1(a)). Choisissez {{ui:Sections brutes}} pour désactiver cela. Sans ces réglages, le modèle est analysé exactement comme avant.

## Armatures, combinaisons, vérification

Indiquez l'enrobage, les armatures supérieures, inférieures et latérales (ou une cage de poteau) et les étriers de chaque section, puis réglez f′c, fy, fyt, K et avec ou sans déplacement latéral. Donnez leur nature aux cas de charge, cliquez sur {{ui:Créer les combinaisons}} (ASCE 7 §5.3.1), puis sur {{ui:Vérifier le béton}} : chaque élément reçoit un taux d'utilisation, coloré sur le modèle. Les éléments dépassant leur capacité, ainsi qu'une dérive d'étage au-delà de sa limite, sont listés dans {{ui:Problèmes}} avec leur article ; cliquez sur l'un d'eux pour sélectionner l'élément.

## Planchers et charges sismiques

Dans le bloc {{ui:Charges sismiques}}, {{ui:Trouver les planchers}} repère les niveaux où deux poutres ou plus se rencontrent ; chacun devient un diaphragme rigide. {{ui:Prendre les poids dans les cas}} lit le poids sismique de chaque plancher à partir des cas auxquels vous donnez un coefficient. Renseignez SDS, SD1, S1, R, Ie, Cd, TL, le système et la catégorie de risque, puis cliquez sur {{ui:Créer les cas sismiques}} (ASCE 7-22 12.8 : période, effort tranchant à la base, répartition sur les planchers, torsion accidentelle de 5 %). Les efforts par étage et la vérification de la dérive (12.12) s'affichent après un calcul. La même période et la même rigidité d'étage alimentent le séisme de [Lancer une inondation, un vent ou un séisme](topic:hazard-playback) lorsque vous choisissez l'ossature d'analyse comme source.

Les dalles et les murs en béton deviennent des plaques dans l'analyse, et le bloc {{ui:Ferraillage des dalles}} calcule l'acier qu'ils nécessitent par mètre. Le détail de chaque vérification se trouve dans la rubrique de même nom de DetailCraft.
