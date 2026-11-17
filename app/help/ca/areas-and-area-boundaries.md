---
title: Àrees i límits d'àrea
summary: Mesureu l'àrea bruta de l'edifici o l'àrea llogable dins de les línies límit que dibuixeu o preneu dels murs, i llisteu les àrees en un quadre.
keywords: àrea, àrees, límit d'àrea, esquema d'àrees, àrea bruta de l'edifici, superfície bruta, GFA, llogable, plànol d'àrees, quadre d'àrees, triar murs, no tancada
from: c79f96d2
---

## Què fareu

Dibuixeu els límits d'un esquema d'àrees, col·loqueu les àrees dins d'ells i llegiu els totals.

## On són les eines

- Disposicions de cinta: {{ui:Arquitectura}} › **Sala i àrea** › {{ui:Àrea}} i {{ui:Límit d'àrea}}.
- Disposició clàssica: la barra de dibuix › menú {{ui:Sales}}.

## Passos

1. Trieu {{ui:Límit d'àrea}}. A la fila, trieu l'{{ui:Esquema}}: Edifici brut o Llogable. Cada esquema té els seus propis límits.
2. Trieu com fer les línies a {{ui:Mètode}}:
   - **Dibuixa**: cliqueu punt rere punt.
   - **Tria murs: línia central**: cliqueu un mur, i la seva línia central és un límit.
   - **Tria murs: la cara clicada**: cliqueu un mur pel costat que vulgueu; aquella cara és el límit. Per a l'àrea bruta de l'edifici, cliqueu l'exterior dels murs exteriors.
3. Trieu {{ui:Àrea}}. Trieu el mateix esquema, escriviu un nom, un número o un tipus si voleu, i cliqueu dins dels límits.
4. L'àrea es mesura de seguida. Seleccioneu-la per canviar-ne el nom, el número o el tipus a Propietats.

## Què depèn de què

- Un límit fet triant un mur segueix aquest mur: si moveu el mur, l'àrea es torna a mesurar en el mateix pas.
- Un límit que heu dibuixat es queda on l'heu dibuixat.
- Les cares dels murs que es troben en una cantonada s'uneixen també allà, de manera que quatre murs triats tanquen una àrea sense buits.
- Els límits d'àrea es veuen al plànol mentre tens una eina de sala o d'àrea a la mà, de manera que no omplen el plànol la resta del temps.

## Si els límits no es tanquen

L'àrea es col·loca igualment. Diu **No tancada** i no mesura res fins que els límits la tanquin. És un consell: no es rebutja res.

## El quadre

Panell esquerre › {{ui:Quadres}} › **Àrees**: esquema, número, nom, tipus, planta, àrea i perímetre, amb un total. Un clic sobre una fila selecciona l'àrea. {{ui:Descarrega el CSV}} dona la mateixa taula.

## A l'IFC

Una àrea és un IfcSpace sense cos: PredefinedType GFA per a l'esquema d'edifici brut, USERDEFINED amb ObjectType Rentable per a l'esquema llogable. Té GrossFloorArea i GrossPerimeter, i cap àrea neta, de manera que no es confon amb una sala. Un límit és un IfcVirtualElement.

## Encara no implementat

- Esquemes propis (només Edifici brut i Llogable).
- Farciments de color per tipus d'àrea.
- Regles que situen el límit per vosaltres, com "fins a la línia del vidre".

Vegeu també [Sales i separadors de sala](topic:rooms-and-separators), [Etiquetes de sala i àrea](topic:room-and-area-tags).
