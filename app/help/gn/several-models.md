---
title: Ver varios modelos IFC juntos
summary: Agregá más archivos IFC a la escena, como arquitectura, estructura e instalaciones, véalos en las mismas coordenadas, mové uno, ocultá otro y elegí cuál editás.
keywords: federar, federación, modelo federado, varios modelos, varios archivos, combinar, superposición, coordinación, disciplina, estructura, mep, instalaciones, desplazamiento, mover modelo, modelo activo, agregar un modelo
from: df0efbbf
---

## Lo que vas a hacer

Mirá modelos de distintas disciplinas en un solo lugar: el modelo del arquitecto con los modelos de estructura e instalaciones. Cada uno sigue siendo su propio archivo; BimCraft solo los muestra juntos.

## Pasos

1. Abrí el primer modelo IFC como de costumbre.
2. En {{ui:Models}} a la izquierda, hacé clic en {{ui:Add a model…}} y elegí uno o más archivos IFC. Cada uno aparece en la lista y en la vista 3D.
3. Destildá un modelo para ocultarlo; tildalo para mostrarlo de nuevo.
4. Si un modelo llega en un lugar equivocado (otro punto de relevamiento), hacé clic en {{ui:Move}} debajo de él, escribí cuánto moverlo a lo largo de X, Y y Z en metros, y hacé clic en {{ui:Apply}}.
5. El modelo con el punto es el que editás. Hacé clic en el punto de otro modelo para editar ese.
6. Hacé clic en × al lado de un modelo para sacarlo de la escena.

## Abrir los modelos del equipo

Cuando el modelo abierto es un archivo en la nube dentro de un proyecto de equipo, {{ui:Open the team's models}} aparece debajo de la lista. Abre los demás modelos IFC del proyecto junto a este, cada uno movido por el desplazamiento que definió el proyecto. Los modelos ocultos para vos quedan afuera y se cuentan; un modelo que el proyecto gira se abre sin girar y también se cuenta; los archivos que no son IFC (un DWG, por ejemplo) se omiten y se nombran en la línea de estado. Un modelo que ya está abierto nunca se abre dos veces. El botón está oculto para un archivo que no está en un proyecto de equipo.

## Lo que deberías ver

- Cada modelo en las coordenadas del primer modelo, como lo ubica su archivo. Los modelos exportados del mismo proyecto se alinean sin mover nada.
- Al seleccionar un elemento de un modelo que no estás editando, sus propiedades se muestran solo de lectura, con {{ui:Edit that model}} para cambiar.
- El {{ui:Model tree}}, {{ui:Storeys}}, {{ui:Color}}, la lista de {{ui:Changes}}, la colocación de elementos de la biblioteca y {{ui:Save as IFC}} funcionan sobre el modelo que editás. Ocultar, aislar, ver a través y {{ui:Select all}} funcionan en todos los modelos.
- {{ui:Save as IFC}} descarga el modelo que editás, solo con sus cambios.

## Errores comunes

- **Un modelo está lejos o no aparece.** Su archivo usa otras coordenadas. Usá {{ui:Fit}} para encontrarlo, y después {{ui:Move}} para ponerlo en su lugar.
- **Delete o Copy aparecen en gris sobre un elemento seleccionado.** Pertenece a otro modelo: cambiá a ese primero.
- **Abrir un archivo con Choose a file reemplazó todo.** Eso inicia una escena nueva. Usá {{ui:Add a model…}} para agregar archivos a la que tenés.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Colorear elementos por una propiedad](topic:color-by-property)
