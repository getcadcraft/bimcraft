---
title: Revisar un dibujo en vista de impresión
summary: Cambie un DWG o DXF a vista de impresión para verlo en blanco y negro, con sus grosores de línea y sin las capas que nunca se imprimen.
keywords: imprimir, trazar, vista previa, vista previa de trazado, grosores de línea, grosor de línea, monocromo, blanco y negro, defpoints, no trazar
from: 1a59c23e
---

## Qué hará

Vea cómo se verá una hoja en papel antes de imprimirla desde el programa que la creó: en blanco y negro, con los grosores de línea a su ancho real, y sin las capas configuradas para no imprimirse.

## Pasos

1. Abra un dibujo DWG o DXF.
2. Haga clic en una pestaña de hoja sobre el dibujo.
3. Haga clic en {{ui:Vista de impresión}} al final de las pestañas, o pulse {{key:P}}.
4. Acerque el zoom sobre un detalle para comparar líneas gruesas y finas.
5. Haga clic de nuevo en {{ui:Vista de impresión}}, o pulse {{key:P}}, para volver a los colores normales.

## Qué debe ver

- Papel blanco sobre un escritorio gris, con cada línea y cada texto en negro, sin importar el tema.
- Grosores de línea: en una hoja, cada grosor se dibuja a su ancho real en el papel, así que una línea de 0.5 mm es el doble de gruesa que una de 0.25 mm en cualquier zoom. Una línea nunca se dibuja más delgada que su grosor en pantalla.
- Las capas configuradas para no imprimirse, y la capa DEFPOINTS, quedan ocultas.
- El botón {{ui:Vista de impresión}} queda presionado. La vista de impresión se mantiene al cambiar de hoja o al abrir otro dibujo, hasta que la desactive.

En {{ui:Modelo}}, la vista de impresión usa solo grosores de pantalla (las líneas finas de un píxel, las más gruesas un poco más anchas), porque el espacio modelo no tiene tamaño de papel.

## Errores comunes

- **Esperar que se imprima.** La vista de impresión es una vista previa. La impresión y la exportación a PDF todavía no están integradas en BimCraft; imprima desde el programa que creó el dibujo.
- **Esperar estilos de trazado.** Las tablas de plumas y los colores de estilo de trazado no se leen. Todo se ve en negro simple.
- **Pulsar P mientras escribe.** {{key:F}} y {{key:P}} no hacen nada mientras escribe en un campo, o mientras se muestra el cuadro de equipos.
