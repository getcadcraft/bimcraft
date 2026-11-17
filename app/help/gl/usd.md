---
title: Exportar o modelo como USD
summary: Escribe os modelos IFC abertos como USD para renderizado, montaxe de escenas e outros programas 3D, con a clase IFC, o GlobalId e as propiedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propiedades, pisos, disciplinas, montaxe de escenas, archviz, renderizado
from: 2be5f7b8
---

{{ui:USD}} na barra de ferramentas escribe o que está aberto (todos os modelos, os federados onde os colocaches) como un único ficheiro USD.

## Exportar

1. Escolle {{ui:USD}} na barra de ferramentas.
2. Escolle {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} ou {{ui:Paquete (.usdz)}}.
3. O ficheiro descárgase. A barra de estado di cantos elementos entraron.

## Que hai no ficheiro

| No modelo IFC | No ficheiro USD |
|---|---|
| Sitio, edificio, pisos | Grupos aniñados, pisos en orde de elevación |
| Cada elemento | Un prim baixo o seu piso e disciplina (Arquitectura, Estrutura, MEP, Mobiliario, Sitio, Espazos, Outros), coa súa xeometría como malla |
| Clase, GlobalId, nome, tipo, etiqueta | Atributos chamados `ifc:class`, `ifc:globalId`, `ifc:name` e así sucesivamente |
| Conxuntos de propiedades e cantidades | Un atributo por propiedade; lonxitudes, superficies e volumes en metros, metros cadrados e metros cúbicos |
| Cores | Materiais (con transparencia) |
| Espazos | Consérvanse, marcados como guías para que os renderizadores os omitan |

A xeometría sitúase nas coordenadas propias do ficheiro IFC. A disposición segue as convencións escritas de CadCraft para USD en edificios.
