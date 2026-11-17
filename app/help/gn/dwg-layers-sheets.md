---
title: Trabajar con capas y hojas
summary: Activá y desactivá capas del plano, cambiá entre el espacio modelo y las hojas, y entendé cómo las hojas muestran el modelo a través de sus viewports.
keywords: capas, activar desactivar capa, congelar, descongelar, hojas, layouts, espacio papel, pestañas, viewports, administrador de capas, la
from: a9a16b53
---

## Lo que hará

Ordená la vista de un plano cargado apagando capas, y luego mirá las hojas del plano una por una.

## Pasos: capas

1. Abrí un plano DWG o DXF.
2. Buscá la lista {{ui:Capas}} a la izquierda. Cada capa tiene una casilla, un color y su nombre.
3. Destildá una capa para ocultar todo lo que tiene.
4. Ojeclic {{ui:Todas desactivadas}} para ocultar todas las capas.
5. Tildá solo las capas que querés ver.
6. Ojeclic {{ui:Todas activadas}} para mostrar todo otra vez.

## Lo que deberías ver

Las capas desaparecen y reaparecen de una vez, en {{ui:Modelo}} y en cada hoja. Las capas apagadas o congeladas en el propio plano empiezan destildadas.

## Pasos: hojas

1. Mirá la fila de pestañas encima del plano: {{ui:Modelo}}, y luego cada hoja por su nombre.
2. Ojeclic una pestaña de hoja.
3. Mirá la hoja: el papel está sobre un escritorio más oscuro, y cada viewport muestra su parte del modelo con su propia escala y ángulo.
4. Acercá en un viewport para leer el detalle. Estás acercando la hoja, no el viewport, así que toda la hoja se mueve junta.
5. Ojeclic {{ui:Ajustar}} o hacé doble clic para ver la hoja completa otra vez.

## Cómo funcionan las hojas aquí

Una hoja (un layout, o espacio papel) contiene un cajetín y viewports que miran el espacio modelo. BimCraft dibuja cada viewport recortado a su borde, con su propia escala y giro, y oculta las capas congeladas en ese viewport. El primer viewport de cada hoja es la hoja misma y no se dibuja dos veces.

## Errores comunes

- **Esperar que los cambios de capas se guarden.** Los ajustes de capas solo afectan la vista, hasta que abrís otro archivo.
- **Esperar control de capas por viewport.** La lista {{ui:Capas}} cambia una capa en todos lados. Las capas congeladas en un viewport por el plano siguen congeladas allí.
- **Buscar un buscador de capas o estados de capas.** Todavía no está hecho. La lista está en el orden del plano.
- **Esperar trabajar dentro de un viewport.** No hay nada que activar: BimCraft solo muestra la hoja. Usá {{ui:Modelo}} para mirar el espacio modelo directamente.
