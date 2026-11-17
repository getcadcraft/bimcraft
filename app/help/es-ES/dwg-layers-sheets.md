---
title: Trabajar con capas y hojas
summary: Active y desactive las capas del dibujo, cambie entre el espacio modelo y las hojas, y comprenda cómo las hojas muestran el modelo a través de sus ventanas gráficas.
keywords: capas, activar desactivar capa, congelar, descongelar, hojas, presentaciones, espacio papel, pestañas, ventanas gráficas, gestor de capas, la
from: a9a16b53
---

## Qué hará

Limpie la vista de un dibujo cargado desactivando capas, y luego vea las hojas del dibujo una a una.

## Pasos: capas

1. Abra un dibujo DWG o DXF.
2. Busque la lista {{ui:Capas}} a la izquierda. Cada capa tiene una casilla, una muestra de color y su nombre.
3. Desmarque una capa para ocultar todo lo que contiene.
4. Haga clic en {{ui:Todas desactivadas}} para ocultar todas las capas.
5. Marque solo las capas que quiera ver.
6. Haga clic en {{ui:Todas activadas}} para volver a mostrarlo todo.

## Qué debe ver

Las capas desaparecen y reaparecen de golpe, en {{ui:Modelo}} y en cada hoja. Las capas desactivadas o congeladas en el propio dibujo empiezan desmarcadas.

## Pasos: hojas

1. Mire la fila de pestañas sobre el dibujo: {{ui:Modelo}} y, después, cada hoja por su nombre.
2. Haga clic en una pestaña de hoja.
3. Mire la hoja: el papel se apoya sobre un fondo más oscuro, y cada ventana gráfica muestra su parte del modelo a su propia escala y ángulo.
4. Acérquese a una ventana gráfica para leer el detalle. Usted hace zoom en la hoja, no en la ventana gráfica, así que toda la hoja se mueve junta.
5. Haga clic en {{ui:Encuadrar}} o haga doble clic para ver de nuevo la hoja completa.

## Cómo funcionan aquí las hojas

Una hoja (una presentación o espacio papel) contiene un cajetín y ventanas gráficas que miran al espacio modelo. BimCraft dibuja cada ventana gráfica recortada a su borde, a su propia escala y giro, y oculta las capas congeladas en esa ventana. La primera ventana gráfica de cada hoja es la propia hoja y no se dibuja dos veces.

## Errores habituales

- **Esperar que los cambios de capas se guarden.** Los ajustes de capas solo afectan a la vista, hasta que abra otro archivo.
- **Esperar control de capas por ventana gráfica.** La lista {{ui:Capas}} cambia una capa en todas partes. Las capas congeladas en una ventana por el dibujo siguen congeladas allí.
- **Buscar un filtro de capas o estados de capa.** Todavía no está disponible. La lista sigue el orden del dibujo.
- **Esperar trabajar dentro de una ventana gráfica.** No hay nada que activar: BimCraft solo muestra la hoja. Use {{ui:Modelo}} para ver el espacio modelo directamente.
