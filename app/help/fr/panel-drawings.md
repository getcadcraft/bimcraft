---
title: Plans de panneaux en bois ou en acier léger
summary: Construisez les murs, planchers et toitures du modèle sous forme de panneaux en bois ou en acier léger, voyez chaque montant, lisse, linteau, solive et chevron à l'échelle, et enregistrez la liste de débit en CSV et les plans d'atelier en PDF.
keywords: panneau, ossature, plan d'atelier, liste de débit, acier léger, montant en acier, LGS, bois, solive, chevron, linteau, stock, PDF
from: c09f916e
---

## Ouvrir les panneaux

Choisissez {{ui:Plans de panneaux}} dans le menu {{ui:Build}} (ou tapez {{cmd:PANELS}}). La liste contient chaque mur dessiné, chaque plancher et chaque toiture du modèle, chacun avec une case à cocher. Les murs comportent leurs portes et fenêtres comme ouvertures. Un plancher est charpenté comme le rectangle qui entoure son contour, avec les solives dans le sens le plus court. Une toiture est charpentée comme un pignon au-dessus du contour de ses murs, avec la pente de la toiture ; la liste le précise, car une croupe ou une toiture complexe n'est pas un pignon.

## Matériau, dimension et espacement

Choisissez {{ui:Matériau}} : **Bois** ou **Acier léger**. Les pièces en acier sont des montants en C désignés par leur profondeur et leur épaisseur (par exemple C92-1.2), avec un rail pour les lisses. {{ui:Section des pièces}} choisit une seule dimension pour tous les panneaux cochés, ou laissez sur Par défaut pour prendre les valeurs de chaque type de panneau. {{ui:Espacement}} est la distance entre les montants, les solives ou les chevrons. Ce sont des valeurs de départ à ajuster. Ce ne sont pas une vérification réglementaire : savoir si un montant espacé de cette façon porte ce mur, et si un linteau couvre cette portée, relève des tableaux de la réglementation (le module complémentaire Réglementation du bâtiment contient ceux de l'IRC) et de votre ingénieur.

## Ce que vous obtenez

Le premier panneau coché est dessiné à l'échelle dans la boîte de dialogue, avec ses cotes. {{ui:Liste de débit (CSV)}} enregistre toutes les pièces de chaque panneau par repère, dimension et longueur, ainsi que les longueurs de stock à acheter pour les fabriquer. {{ui:Plans d'atelier (PDF)}} enregistre une page A3 par panneau, avec chaque pièce repérée et sa liste de débit. {{ui:Dessin (SVG)}} enregistre le premier panneau sous forme de dessin. Tout ce que le calcul de charpente ne peut pas construire (une ouverture trop près de l'extrémité d'un mur, un linteau qui ne tient pas sous les lisses, une pièce plus longue que le stock le plus long) est aussi listé dans Problèmes, en plus de la boîte de dialogue.

## Ce qu'il ne fait pas

Les panneaux sont des dessins produits à partir du modèle chaque fois que vous le demandez : rien n'est écrit dans le modèle, ils correspondent donc toujours à celui-ci. Pour intégrer la charpente au modèle sous forme de pièces, utilisez {{ui:Ossature}} pour les murs, planchers et toitures en bois.
