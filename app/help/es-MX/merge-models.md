---
title: Combinar las ediciones de dos personas en un mismo modelo
summary: Deje que git, Fossil o Mercurial combinen dos copias editadas del mismo modelo IFC objeto por objeto, para que dos personas dibujen sobre un mismo edificio y unan el trabajo.
keywords: combinar, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, ifc, globalid, equipo, dos copias, ramas
from: 50733df8
---

Dos personas toman una copia del mismo edificio: una dibuja el ala este y otra el ala oeste, y después las copias tienen que convertirse en una. Si tocaron objetos distintos, un programa puede hacerlo en lugar de una persona.

## Qué lo hace posible

Cada muro, puerta, nivel, local y conjunto de propiedades en un archivo IFC tiene un GlobalId que nunca cambia. La combinación busca los objetos por ese id, no por el número que les da el archivo (`#123`), porque los números cambian cuando un programa guarda. Las partes que cuelgan de un objeto y no tienen id propio (ubicaciones, formas, unidades) se comparan por lo que contienen.

Ambas copias deben tener la misma versión de IFC (2x3, 4 o 4.3). La combinación conserva su archivo tal como está, con su orden y sus números, y agrega lo nuevo, así que una diferencia de git de la combinación muestra solo lo que cambió la combinación.

## Configuración

Git necesita dos líneas una vez por repositorio:

```
# .gitattributes
*.ifc merge=cadcraft

# una sola vez, en cada computadora
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecute `cadcraft merge <base> <ours> <theirs>`. Fossil y Mercurial usan los mismos tres archivos en su propia configuración de herramienta de combinación. No se sube nada; todo se ejecuta en su computadora.

## Las reglas

- Un atributo cambiado de un solo lado se toma. El mismo cambio en ambos lados se toma una vez.
- Si el mismo atributo cambió de dos maneras (el mismo nivel renombrado de dos formas), es un **conflicto**: se queda su lado y el informe enumera ambos. Abra el resultado y corríjalo a mano.
- Una lista de elementos (los muros de un nivel, las propiedades de un conjunto) se combina como conjunto: se conserva lo que agregó cualquiera de los dos lados y se elimina lo que quitó cualquiera de ellos. Dos personas que agregan muros al mismo nivel no tienen conflicto.
- Un objeto agregado de cualquier lado se conserva, con su forma y propiedades. Eliminado de un lado y sin tocar del otro: se elimina. Eliminado de un lado y cambiado del otro: se elimina y se informa.
- La marca de tiempo y el autor del archivo, y el historial de propietario de cada objeto, se conservan los suyos.

La geometría se combina completa: la forma de un muro viene de un lado, nunca mezclada punto por punto. Los archivos IFC y IFCX comprimidos no se combinan. Después de combinar, abra el resultado en BimCraft y revise el panel de {{ui:Problemas}} antes de guardar.
