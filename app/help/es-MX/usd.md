---
title: Exportar el modelo como USD
summary: Escriba los modelos IFC abiertos como USD para renderizado, ensamblaje de escenas y otros programas 3D, con la clase IFC, el GlobalId y las propiedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propiedades, niveles, disciplinas, ensamblaje de escenas, archviz, renderizado
from: 2be5f7b8
---

{{ui:USD}} en la barra de herramientas escribe lo que está abierto (todos los modelos, los federados donde los colocó) como un solo archivo USD.

## Exportar

1. Elija {{ui:USD}} en la barra de herramientas.
2. Seleccione {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}}.
3. El archivo se descarga. La barra de estado indica cuántos elementos entraron.

## Qué contiene el archivo

| En el modelo IFC | En el archivo USD |
|---|---|
| Sitio, edificio, niveles | Grupos anidados, niveles en orden de elevación |
| Cada elemento | Un prim bajo su nivel y disciplina (Arquitectura, Estructura, MEP, Mobiliario, Sitio, Espacios, Otros), con su geometría como malla |
| Clase, GlobalId, nombre, tipo, etiqueta | Atributos llamados `ifc:class`, `ifc:globalId`, `ifc:name` y así sucesivamente |
| Conjuntos de propiedades y de cantidades | Un atributo por propiedad; longitudes, áreas y volúmenes en metros, metros cuadrados y metros cúbicos |
| Colores | Materiales (con transparencia) |
| Espacios | Se conservan, marcados como guías para que los renderizadores los omitan |

La geometría queda en las coordenadas propias del archivo IFC. La organización sigue las convenciones escritas de CadCraft para USD en edificios.
