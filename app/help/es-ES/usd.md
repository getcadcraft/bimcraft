---
title: Exportar el modelo como USD
summary: Escribir los modelos IFC abiertos como USD para renderizado, montaje de escenas y otros programas 3D, con la clase IFC, el GlobalId y las propiedades de cada elemento.
keywords: usd, usda, usdc, usdz, openusd, exportar, ifc, globalid, propiedades, plantas, disciplinas, montaje de escenas, visualización arquitectónica, renderizado
from: 2be5f7b8
---

{{ui:USD}} de la barra de herramientas escribe lo que está abierto (todos los modelos, los federados donde los colocó) como un único archivo USD.

## Exportar

1. Elija {{ui:USD}} en la barra de herramientas.
2. Seleccione {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}}.
3. El archivo se descarga. La barra de estado indica cuántos elementos se han incluido.

## Qué contiene el archivo

| En el modelo IFC | En el archivo USD |
|---|---|
| Sitio, edificio, plantas | Grupos anidados, plantas en orden de cota |
| Cada elemento | Un prim bajo su planta y su disciplina (Arquitectura, Estructura, MEP, Mobiliario, Emplazamiento, Espacios, Otros), con su geometría como malla |
| Clase, GlobalId, nombre, tipo, etiqueta | Atributos llamados `ifc:class`, `ifc:globalId`, `ifc:name`, etcétera |
| Conjuntos de propiedades y de cantidades | Un atributo por propiedad; longitudes, áreas y volúmenes en metros, metros cuadrados y metros cúbicos |
| Colores | Materiales (con transparencia) |
| Espacios | Se conservan, marcados como guías para que los renderizadores los omitan |

La geometría se sitúa en las coordenadas propias del archivo IFC. La disposición sigue las convenciones escritas de CadCraft para edificios en USD.
