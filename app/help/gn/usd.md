---
title: Exportar el modelo como USD
summary: Escribir los modelos IFC abiertos como USD para renderizado, armado de escenas y otros programas 3D, con la clase IFC, el GlobalId y las propiedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propiedades, pisos, disciplinas, armado de escenas, archviz, renderizado
from: 2be5f7b8
---

{{ui:USD}} en la barra de herramientas escribe lo que está abierto (cada modelo, los federados donde los colocaste) como un único archivo USD.

## Exportar

1. Elegí {{ui:USD}} en la barra de herramientas.
2. Elegí {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}}.
3. El archivo se descarga. La barra de estado dice cuántos elementos entraron.

## Qué hay en el archivo

| En el modelo IFC | En el archivo USD |
|---|---|
| Sitio, edificio, pisos | Grupos anidados, pisos en orden de elevación |
| Cada elemento | Un prim bajo su piso y disciplina (Arquitectura, Estructura, MEP, Mobiliario, Sitio, Ambientes, Otros), con su geometría como malla |
| Clase, GlobalId, nombre, tipo, etiqueta | Atributos llamados `ifc:class`, `ifc:globalId`, `ifc:name` y así sucesivamente |
| Conjuntos de propiedades y cantidades | Un atributo por propiedad; longitudes, superficies y volúmenes en metros, metros cuadrados y metros cúbicos |
| Colores | Materiales (con transparencia) |
| Ambientes | Se conservan, marcados como guías para que los renderizadores los omitan |

La geometría queda en las coordenadas propias del archivo IFC. La organización sigue las convenciones escritas de CadCraft para USD en edificios.
