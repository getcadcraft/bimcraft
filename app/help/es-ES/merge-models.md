---
title: Fusionar dos ediciones de un mismo modelo
summary: Deje que git, Fossil o Mercurial fusionen dos copias editadas del mismo modelo IFC objeto por objeto, para que dos personas dibujen sobre un mismo edificio y unan el trabajo.
keywords: fusionar, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, ifc, globalid, equipo, dos copias, ramas
from: 50733df8
---

Dos personas toman una copia del mismo edificio: una dibuja el ala este y la otra el ala oeste, y más tarde las copias deben convertirse en una sola. Si tocaron objetos distintos, un programa puede hacerlo en lugar de una persona.

## Qué lo hace posible

Cada muro, puerta, planta, sala y conjunto de propiedades de un archivo IFC tiene un GlobalId que nunca cambia. La fusión busca los objetos por ese identificador, no por el número que les da el archivo (`#123`), porque los números cambian cuando un programa guarda. Las partes que cuelgan de un objeto y no tienen identificador propio (ubicaciones, formas, unidades) se comparan por lo que contienen.

Ambas copias deben ser de la misma versión de IFC (2x3, 4 o 4.3). La fusión conserva su archivo tal como está, con su orden y sus números, y añade lo nuevo, de modo que un diff de git de la fusión muestra solo lo que cambió la fusión.

## Configurarlo

Git necesita dos líneas, una vez por repositorio:

```
# .gitattributes
*.ifc merge=cadcraft

# una vez, en cada equipo
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecute `cadcraft merge <base> <ours> <theirs>`. Fossil y Mercurial aceptan los mismos tres archivos en su propio ajuste de herramienta de fusión. No se sube nada: todo se ejecuta en su equipo.

## Las reglas

- Un atributo cambiado solo en un lado se toma. El mismo cambio en ambos lados se toma una vez.
- El mismo atributo cambiado de dos formas (la misma planta renombrada de dos maneras) es un **conflicto**: se conserva su lado y el informe lista ambos. Abra el resultado y corríjalo a mano.
- Una lista de elementos (los muros de una planta, las propiedades de un conjunto) se fusiona como conjunto: se conserva lo que añadió cualquiera de los dos lados y se quita lo que quitó cualquiera de ellos. Dos personas que añaden muros a la misma planta no entran en conflicto.
- Un objeto añadido en cualquier lado se conserva, con su forma y sus propiedades. Quitado en un lado y sin tocar en el otro: se quita. Quitado en un lado y cambiado en el otro: se quita, y se informa.
- La fecha y el autor del archivo, y el historial de propietario de cada objeto, siguen siendo suyos.

La geometría se fusiona entera: la forma de un muro procede de un lado, nunca se mezcla punto a punto. Los archivos IFC comprimidos (zip) y los IFCX no se fusionan. Tras una fusión, abra el resultado en BimCraft y revise el panel de {{ui:Problemas}} antes de guardar.
