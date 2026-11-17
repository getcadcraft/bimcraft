---
title: Orienta't amb l'arbre del model
summary: Recorreu un model IFC per projecte, solar, edifici, planta i espai, amb els seus elements agrupats per tipus; marqueu les caselles per mostrar i amagar, feu clic a una fila per triar-la i doble clic per fer zoom.
keywords: arbre del model, arbre, estructura, estructura espacial, navegador, esquema, planta, nivell, terra, espai, sala, grup, classe, amagar, mostrar, triar, seleccionar, zoom
from: 69de4ab7
---

## Què faràs

Veureu com està construït un model i arribareu a qualsevol element sense haver-lo de buscar en 3D: l'edifici, les seves plantes, els espais de cada planta i els elements que hi ha, agrupats per tipus (murs, portes, forjats…).

## Passos

1. Obriu un model IFC. El panell de l'esquerra, {{ui:Arbre del model}}, s'obre fins a les plantes.
2. Feu clic a la fletxa al costat d'una fila per obrir-la o tancar-la. Una planta conté primer els seus espais, després els seus elements per tipus, amb el recompte de cada tipus. Un element format per parts, com una escala, conté les seves parts.
3. Desmarqueu la casella d'una fila per amagar tot el que conté; marqueu-la per tornar-ho a mostrar. Una casella amb un guió vol dir que només es mostra una part del que conté.
4. Feu clic al nom d'una fila per triar el que representa: un element, o tots els elements d'un grup, planta o espai. {{key:Mod}}+clic els afegeix a la tria, o els en treu.
5. Feu clic al botó {{ui:i}} al costat d'una planta, espai o edifici per veure'n les propietats pròpies.
6. Feu doble clic en una fila per fer-hi zoom.

## Què hauríeu de veure

- Quan trieu un element a la vista 3D, l'arbre s'obre fins a ell i el marca.
- Els elements amagats estan ratllats. Les caselles de l'arbre i {{ui:Mostra}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funcionen junts: vegeu [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate).
- Els elements que el model no situa en cap planta són en un grup al final, **No hi ha a l'estructura espacial**.
- Un grup llarg mostra 200 files cada vegada; feu clic a **Mostra'n més** sota seu per veure la resta.

## Tecles

Amb el nom d'una fila enfocat: {{key:Up}} i {{key:Down}} es mouen, {{key:Right}} obre, {{key:Left}} tanca o puja, {{key:Space}} marca la casella, {{key:Enter}} tria.

## Errors habituals

- **La casella d'una planta està marcada però no es veu res.** La llista {{ui:Plantes}} sota l'arbre desactiva per ella mateixa plantes senceres: marqueu-la també allà.
- **Una fila no tria res.** Algunes files, com un espai buit, no tenen elements que es puguin dibuixar; la línia d'estat ho indica.

## Següent

- [Suprimeix, retalla, copia i enganxa elements de l'edifici](topic:edit-elements)
- [Mostra i amaga plantes, espais i arestes](topic:storeys-and-spaces)
