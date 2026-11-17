---
title: Exporta el model com a USD
summary: Escriu els models IFC oberts com a USD per a renderització, muntatge d'escenes i altres programes 3D, amb la classe IFC, el GlobalId i les propietats de cada element.
keywords: usd, usda, usdc, usdz, openusd, exporta, ifc, globalid, propietats, plantes, disciplines, muntatge d'escenes, archviz, renderització
from: 2be5f7b8
---

{{ui:USD}} a la barra d'eines escriu el que és obert (tots els models, els federats on els heu col·locat) com un sol fitxer USD.

## Exporta

1. Trieu {{ui:USD}} a la barra d'eines.
2. Escolliu {{ui:Text (.usda)}}, {{ui:Binari (.usdc)}} o {{ui:Paquet (.usdz)}}.
3. El fitxer es baixa. La barra d'estat diu quants elements s'hi han inclòs.

## Què hi ha al fitxer

| Al model IFC | Al fitxer USD |
|---|---|
| Emplaçament, edifici, plantes | Grups imbricats, plantes en ordre d'elevació |
| Cada element | Un prim sota la seva planta i disciplina (Arquitectura, Estructura, MEP, Mobiliari, Emplaçament, Espais, Altres), amb la geometria com a malla |
| Classe, GlobalId, nom, tipus, etiqueta | Atributs anomenats `ifc:class`, `ifc:globalId`, `ifc:name` i així successivament |
| Conjunts de propietats i de quantitats | Un atribut per propietat; longituds, àrees i volums en metres, metres quadrats i metres cúbics |
| Colors | Materials (amb transparència) |
| Espais | Es conserven, marcats com a guies perquè els renderitzadors els ometin |

La geometria es troba a les coordenades pròpies del fitxer IFC. La disposició segueix les convencions escrites de CadCraft per a edificis en USD.
