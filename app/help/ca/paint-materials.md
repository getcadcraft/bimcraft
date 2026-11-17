---
title: Pinta materials a murs, forjats i cobertes
summary: Doneu als elements un material com maó, revestiment, teula, fusta o rajola, al conjunt de l'element o només en una cara, que es desa a l'IFC i es mostra en les imatges renderitzades.
keywords: pintar, material, materials, acabat, acabats, textura, maó, revestiment, teula, fusta, pedra, rajola, formigó, estucat, herba, grava, vidre, metall, cara del mur, interior, exterior, acabat de forjat, sala, estil de superfície
from: fbfed676
---

{{ui:Pinta}} a la barra d'eines obre la biblioteca de materials sobre la vista 3D: maó i blocs, revestiments, cobertes, fusta, pedra, rajola, formigó, estucat, terreny, vidre i metall.

## Pinta elements

1. Feu clic a {{ui:Pinta}}.
2. Feu clic a un material.
3. Feu clic als elements a la vista 3D. Cada clic pinta l'element en què feu clic.

Per pintar-ne molts de cop, seleccioneu-los primer (amb un clic, {{key:Ctrl}}+clic, o amb una [cerca](topic:find)), i després feu clic al material: tots els elements seleccionats el reben en un sol pas.

L'element mostra de seguida el color del material a la vista 3D. La seva textura es veu en una [imatge renderitzada](topic:render). {{key:Esc}} o {{ui:Tanca}} acaba de pintar.

## Pinta una cara

Trieu {{ui:Només el costat clicat}}, i després feu clic al costat que voleu: l'exterior d'un mur amb revestiment i l'interior amb un altre acabat, la part superior d'un forjat en fusta amb la part inferior tal com està. La resta de l'element conserva el seu material.

Un costat es troba a partir de les direccions del propi element, de manera que continua sent el mateix costat quan moveu o gireu l'element.

Per pintar els forjats sala per sala, doneu a cada sala el seu propi forjat ({{ui:Dibuixa}} › {{ui:Forjat}} › **Aquesta sala**, vegeu [Sales, forjats, sostres i cobertes](topic:floors-and-roofs)), i després pinteu la part superior de cada forjat.

## Treu un material

Feu clic a la mostra a ratlles ({{ui:Sense material}}), i després feu clic a l'element. S'hi treu tot material, inclosos els costats.

## Al fitxer

Pintar canvia l'IFC (un pas cada vegada, {{key:Ctrl+Z}} ho desfà) i es manté com a IFC simple:

- cada element pintat rep el conjunt de propietats `CadCraft_Render` amb el nom del seu material, i una propietat per cada cara pintada;
- el seu cos rep un estil de superfície amb el color del material, perquè altres programes BIM mostrin el color. A IFC4 l'estil també indica la textura.

Quan BimCraft reforma un mur que heu pintat (per exemple, moveu un dels seus extrems), el mur conserva el seu material i el seu color, a BimCraft, a les imatges i en altres programes.

:::note
Les textures les dibuixa el mateix BimCraft: funcionen sense connexió i es poden fer servir lliurement per a qualsevol cosa (CC0). Les vostres pròpies textures d'imatge encara no estan implementades.
:::

## Textures a la vista 3D

Un mur de maó pintat mostra els seus maons, i un forjat de fusta els seus taulons, a la mida real, en el moment que s'aplica la pintura. Desmarqueu **Mostra les textures a la vista 3D** a la paleta Pinta per veure colors plans en lloc d'això (un model molt gran les desactiva automàticament i ho indica). Color per propietat sempre mostra els seus propis colors. El programa dibuixa les textures, de manera que no es descarrega res, i els renderitzats i el fitxer glTF les porten de totes maneres.
