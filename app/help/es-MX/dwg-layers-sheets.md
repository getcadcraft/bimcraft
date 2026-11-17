---
title: Trabajar con capas y hojas
summary: Active y desactive las capas del dibujo, cambie entre el espacio modelo y las hojas, y entienda cómo las hojas muestran el modelo a través de sus ventanas gráficas.
keywords: capas, activar capa, desactivar capa, inutilizar, reutilizar, hojas, presentaciones, espacio papel, pestañas, ventanas gráficas, administrador de capas, la
from: a9a16b53
---

## Qué hará

Limpie la vista de un dibujo complejo apagando capas, y luego revise las hojas del dibujo una por una.

## Pasos: capas

1. Abra un dibujo DWG o DXF.
2. Busque la lista {{ui:Layers}} a la izquierda. Cada capa tiene una casilla, un cuadro de color y su nombre.
3. Desmarque una capa para ocultar todo lo que tiene.
4. Haga clic en {{ui:All off}} para ocultar todas las capas.
5. Marque solo las capas que quiere ver.
6. Haga clic en {{ui:All on}} para mostrar todo de nuevo.

## Qué debe ver

Las capas desaparecen y reaparecen de inmediato, en {{ui:Model}} y en todas las hojas. Las capas que están apagadas o inutilizadas en el propio dibujo empiezan desmarcadas.

## Pasos: hojas

1. Mire la fila de pestañas sobre el dibujo: {{ui:Model}}, y luego cada hoja por su nombre.
2. Haga clic en una pestaña de hoja.
3. Mire la hoja: el papel está sobre un escritorio más oscuro, y cada ventana gráfica muestra su parte del modelo a su propia escala y ángulo.
4. Haga zoom en una ventana gráfica para leer el detalle. Usted hace zoom en la hoja, no en la ventana gráfica, así que toda la hoja se mueve junta.
5. Haga clic en {{ui:Fit}} o haga doble clic para ver toda la hoja de nuevo.

## Cómo funcionan aquí las hojas

Una hoja (una presentación, o espacio papel) contiene un cuadro de rótulo y ventanas gráficas que miran al espacio modelo. BimCraft dibuja cada ventana gráfica recortada a su borde, a su propia escala y giro, y oculta en ella las capas inutilizadas. La primera ventana gráfica de cada hoja es la propia hoja y no se dibuja dos veces.

## Errores comunes

- **Esperar que los cambios de capa se guarden.** Los ajustes de capa solo afectan la vista, hasta que abre otro archivo.
- **Esperar control de capas por ventana gráfica.** La lista {{ui:Layers}} cambia una capa en todas partes. Las capas inutilizadas en una ventana por el dibujo siguen inutilizadas allí.
- **Buscar una búsqueda de capas o estados de capa.** Todavía no está construido. La lista está en el orden del dibujo.
- **Esperar trabajar dentro de una ventana gráfica.** No hay nada que activar: BimCraft solo muestra la hoja. Use {{ui:Model}} para ver el espacio modelo directamente.
