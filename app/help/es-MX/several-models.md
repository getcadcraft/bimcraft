---
title: Ver varios modelos IFC juntos
summary: Agregue más archivos IFC a la escena, como arquitectura, estructura e instalaciones, véalos en las mismas coordenadas, desplace uno, oculte uno y elija cuál edita.
keywords: federar, federación, modelo federado, varios modelos, varios archivos, combinar, superposición, coordinación, disciplina, estructura, mep, instalaciones, desfase, desplazar modelo, modelo activo, agregar un modelo
from: df0efbbf
---

## Lo que hará

Vea modelos de distintas disciplinas en un solo lugar: el modelo del arquitecto con los modelos de estructura e instalaciones. Cada uno sigue siendo su propio archivo; BimCraft solo los muestra juntos.

## Pasos

1. Abra el primer modelo IFC como de costumbre.
2. En {{ui:Modelos}} a la izquierda, haga clic en {{ui:Agregar un modelo…}} y elija uno o más archivos IFC. Cada uno aparece en la lista y en la vista 3D.
3. Desmarque un modelo para ocultarlo; márquelo para volver a mostrarlo.
4. Si un modelo llega en un lugar equivocado (otro punto de levantamiento), haga clic en {{ui:Desplazar}} debajo de él, escriba cuánto desplazarlo a lo largo de X, Y y Z en metros, y haga clic en {{ui:Aplicar}}.
5. El modelo con el punto es el que edita. Haga clic en el punto de otro modelo para editar ese.
6. Haga clic en × junto a un modelo para sacarlo de la escena.

## Abra los modelos del equipo

Cuando el modelo abierto es un archivo en la nube dentro de un proyecto de equipo, {{ui:Abrir los modelos del equipo}} aparece debajo de la lista. Abre los demás modelos IFC del proyecto junto a este, cada uno desplazado por el desfase que definió el proyecto. Los modelos ocultos para usted quedan fuera y se cuentan; un modelo que el proyecto gira se abre sin girar y también se cuenta; los archivos que no son IFC (un DWG, por ejemplo) se omiten y se nombran en la línea de estado. Un modelo que ya está abierto nunca se abre dos veces. El botón está oculto para un archivo que no está en un proyecto de equipo.

## Lo que debe ver

- Cada modelo en las coordenadas del primer modelo, como lo coloca su archivo. Los modelos exportados del mismo proyecto se alinean sin mover nada.
- Al designar un elemento de un modelo que no está editando, sus propiedades se muestran solo de lectura, con {{ui:Editar ese modelo}} para cambiar.
- {{ui:Árbol del modelo}}, {{ui:Niveles}}, {{ui:Color}}, la lista de {{ui:Cambios}}, la colocación de elementos de biblioteca y {{ui:Guardar como IFC}} funcionan sobre el modelo que edita. Ocultar, aislar, ver a través y {{ui:Seleccionar todo}} funcionan en todos los modelos.
- {{ui:Guardar como IFC}} descarga el modelo que edita, solo con sus cambios.

## Errores comunes

- **Un modelo está lejos o no aparece.** Su archivo usa otras coordenadas. Use {{ui:Encuadrar}} para encontrarlo y luego {{ui:Desplazar}} para colocarlo en su sitio.
- **Eliminar o Copiar aparece atenuado en un elemento designado.** Pertenece a otro modelo: cambie primero a él.
- **Al abrir un archivo con Elegir un archivo se reemplazó todo.** Eso inicia una escena nueva. Use {{ui:Agregar un modelo…}} para agregar archivos al que tiene.

## Siguiente

- [Oculte, aísle y vea a través de elementos](topic:hide-and-isolate)
- [Coloree elementos por una propiedad](topic:color-by-property)
