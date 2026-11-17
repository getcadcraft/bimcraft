---
title: Ver varios modelos IFC juntos
summary: Añada más archivos IFC a la escena, como los de arquitectura, estructura e instalaciones, véalos en las mismas coordenadas, desplace uno, oculte otro y elija cuál edita.
keywords: federar, federación, modelo federado, varios modelos, varios archivos, combinar, superponer, coordinación, disciplina, estructura, mep, instalaciones, desplazamiento, mover modelo, modelo activo, añadir un modelo
from: df0efbbf
---

## Qué hará

Vea modelos de distintas disciplinas en un solo lugar: el modelo del arquitecto con los modelos de estructura e instalaciones. Cada uno sigue siendo su propio archivo; BimCraft solo los muestra juntos.

## Pasos

1. Abra el primer modelo IFC como de costumbre.
2. En {{ui:Modelos}}, a la izquierda, haga clic en {{ui:Añadir un modelo…}} y elija uno o más archivos IFC. Cada uno aparece en la lista y en la vista 3D.
3. Desmarque un modelo para ocultarlo; márquelo para volver a mostrarlo.
4. Si un modelo llega en un lugar incorrecto (otro punto topográfico), haga clic en {{ui:Desplazar}} bajo él, escriba cuánto desplazarlo a lo largo de X, Y y Z en metros, y haga clic en {{ui:Aplicar}}.
5. El modelo con el punto es el que edita. Haga clic en el punto de otro modelo para editar ese.
6. Haga clic en × junto a un modelo para sacarlo de la escena.

## Abrir los modelos del equipo

Cuando el modelo abierto es un archivo en la nube dentro de un proyecto de equipo, {{ui:Abrir los modelos del equipo}} aparece bajo la lista. Abre los otros modelos IFC del proyecto junto a este, cada uno desplazado según el desfase que fijó el proyecto. Los modelos que le están ocultos quedan fuera y se cuentan; un modelo que el proyecto gira se abre sin girar y también se cuenta; los archivos que no son IFC (un DWG, por ejemplo) se omiten y se nombran en la línea de estado. Un modelo ya abierto nunca se abre dos veces. El botón está oculto para un archivo que no pertenece a un proyecto de equipo.

## Lo que debe ver

- Cada modelo en las coordenadas del primer modelo, tal como las coloca su archivo. Los modelos exportados desde el mismo proyecto se alinean sin mover nada.
- Al designar un elemento de un modelo que no está editando, sus propiedades se muestran de solo lectura, con {{ui:Editar ese modelo}} para cambiar.
- El {{ui:Árbol del modelo}}, {{ui:Niveles}}, {{ui:Color}}, la lista de {{ui:Cambios}}, la colocación de elementos de la biblioteca y {{ui:Guardar como IFC}} funcionan sobre el modelo que edita. Ocultar, aislar, transparencia y {{ui:Seleccionar todo}} funcionan en todos los modelos.
- {{ui:Guardar como IFC}} descarga el modelo que edita, solo con sus cambios.

## Errores frecuentes

- **Un modelo está lejos o no aparece.** Su archivo usa otras coordenadas. Use {{ui:Encuadrar}} para encontrarlo y luego {{ui:Desplazar}} para colocarlo.
- **Borrar o Copiar aparecen atenuados en un elemento designado.** Pertenece a otro modelo: cámbiese a él primero.
- **Al abrir un archivo con Elegir un archivo se reemplazó todo.** Eso inicia una escena nueva. Use {{ui:Añadir un modelo…}} para añadir archivos a la que tiene.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Colorear elementos según una propiedad](topic:color-by-property)
