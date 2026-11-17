---
title: Revisar un plano en vista de impresión
summary: Cambie un DWG o DXF a la vista de impresión para verlo en negro sobre blanco con sus grosores de línea y sin las capas que nunca se imprimen.
keywords: imprimir, trazar, vista previa, vista previa de trazado, grosores de línea, grosor de línea, monocromo, blanco y negro, defpoints, no trazar
from: 1a59c23e
---

## Qué va a hacer

Vea cómo quedará una hoja en papel antes de imprimirla desde el programa que la creó: negro sobre blanco, grosores de línea a su anchura real y sin las capas configuradas para no imprimirse.

## Pasos

1. Abra un dibujo DWG o DXF.
2. Pulse una pestaña de hoja sobre el dibujo.
3. Pulse {{ui:Print view}} al final de las pestañas, o pulse {{key:P}}.
4. Acerque el zoom a un detalle para comparar líneas gruesas y finas.
5. Pulse {{ui:Print view}} de nuevo, o pulse {{key:P}}, para volver a los colores normales.

## Qué debe ver

- Papel blanco sobre una mesa gris, con cada línea y cada texto en negro, sea cual sea el tema.
- Grosores de línea: en una hoja, cada grosor se dibuja con su anchura real en papel, así que una línea de 0.5 mm es el doble de gruesa que una de 0.25 mm con cualquier zoom. Una línea nunca se dibuja más fina que su grosor en pantalla.
- Las capas configuradas para no imprimirse, y la capa DEFPOINTS, quedan ocultas.
- El botón {{ui:Print view}} permanece pulsado. La vista de impresión sigue activa al cambiar de hoja o al abrir otro dibujo, hasta que la desactive.

En {{ui:Model}}, la vista de impresión usa solo grosores de pantalla (líneas finas de un píxel, las más gruesas algo más anchas), porque el espacio modelo no tiene tamaño de papel.

## Errores habituales

- **Esperar que se imprima.** La vista de impresión es una vista previa. La impresión y la exportación a PDF todavía no están integradas en BimCraft; imprima desde el programa que creó el dibujo.
- **Esperar estilos de trazado.** No se leen las tablas de plumillas ni los colores de los estilos de trazado. Todo sale en negro.
- **Pulsar P mientras escribe.** {{key:F}} y {{key:P}} no hacen nada mientras escribe en un campo, o mientras se muestra la tabla de equipos.
