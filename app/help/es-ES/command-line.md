---
title: La línea de comandos en la barra de estado
summary: En una disposición con línea de comandos, escriba en cualquier lugar y las letras aparecen en la línea de la parte inferior. Muestra lo que coincide, guarda un historial y nunca tapa el dibujo.
keywords: línea de comandos, escribir en cualquier lugar, comando escrito, barra de estado, historial, teclas de flecha, intro, espacio, WALL, DOOR, disposición Duncan, disposición Rhino, atajo, teclas, buscador de comandos
from: d583b52d
---

## Lo que hará

Ejecute herramientas escribiendo sus nombres, sin hacer clic antes en un cuadro.

## Pasos

1. Elija una disposición que tenga línea de comandos: abra {{ui:Settings}}, elija {{ui:Global}} y después {{ui:Layout}}, y seleccione **Duncan** (o **Rhino**). La línea se sitúa en la barra de estado de la parte inferior de la ventana.
2. Con el puntero en cualquier lugar y sin ningún cuadro en uso, escriba `wall`. Las letras aparecen en la línea de comandos y, encima, una lista muestra los comandos que coinciden.
3. Pulse {{key:Enter}}. La herramienta Muro se inicia.
4. Haga clic en la línea de comandos (o pulse una tecla de nuevo). Con la línea vacía, la lista muestra los comandos que escribió antes. {{key:Up}} y {{key:Down}} recorren la lista; {{key:Enter}} ejecuta el que se muestra.

## Lo que puede escribir

- Una palabra de comando del estilo de menú en uso, cuando el estilo las tiene (`WALL`, `WA`, `DOOR` en el estilo Dibujo).
- La tecla de un comando, como palabra: `W` y después {{key:Enter}} o {{key:Space}} es Muro; `D` es Puerta.
- El nombre de un comando, con o sin espacios: `split wall`, `wallrectangle`.
- El inicio de una palabra o de un nombre, cuando solo un comando empieza así.
- Cualquier otra cosa abre el buscador de comandos con lo que escribió.

## Conviene saber

- {{key:Esc}} vacía la línea y devuelve las teclas al dibujo.
- En estas disposiciones, una sola letra ya no inicia una herramienta por sí misma: espera en la línea a {{key:Enter}} o {{key:Space}}. Las teclas con {{key:Ctrl}}, las teclas de función, {{key:Delete}} y {{key:Esc}} funcionan como antes. En las otras disposiciones no cambia nada.
- Mientras se ejecuta una herramienta de dibujo, los dígitos son para la herramienta (una longitud escrita).
- Escribir en un cuadro, en un diálogo o en Configuración se queda allí.
- El historial se guarda en este ordenador: 50 comandos por cada aplicación.
