---
title: La línea de comandos en la barra de estado
summary: En un diseño con línea de comandos, escriba en cualquier parte y las letras aparecen en la línea de abajo. Muestra lo que coincide, guarda un historial y nunca tapa el dibujo.
keywords: línea de comandos, escriba en cualquier parte, comando escrito, barra de estado, historial, teclas de flecha, enter, espacio, WALL, DOOR, diseño Duncan, diseño Rhino, atajo, teclas, buscador de comandos
from: d583b52d
---

## Lo que hará

Ejecute herramientas escribiendo sus nombres, sin hacer clic antes en un cuadro.

## Pasos

1. Elija un diseño que tenga línea de comandos: abra {{ui:Configuración}}, elija {{ui:Global}}, luego {{ui:Diseño}}, y elija **Duncan** (o **Rhino**). La línea está en la barra de estado, en la parte inferior de la ventana.
2. Con el puntero en cualquier parte y sin ningún cuadro en uso, escriba `wall`. Las letras aparecen en la línea de comandos y una lista encima muestra los comandos que coinciden.
3. Pulse {{key:Enter}}. La herramienta Wall se inicia.
4. Haga clic en la línea de comandos (o pulse una tecla de nuevo). Con la línea vacía, la lista muestra los comandos que escribió antes. {{key:Up}} y {{key:Down}} recorren la lista; {{key:Enter}} ejecuta el que se muestra.

## Lo que puede escribir

- Una palabra de comando del estilo de menú en uso, cuando el estilo las tiene (`WALL`, `WA`, `DOOR` en el estilo Dibujo).
- La tecla de un comando, como palabra: `W` y luego {{key:Enter}} o {{key:Space}} es Wall, `D` es Door.
- El nombre de un comando, con o sin espacios: `split wall`, `wallrectangle`.
- El inicio de una palabra o de un nombre, cuando solo un comando empieza así.
- Cualquier otra cosa abre el buscador de comandos con lo que escribió.

## Conviene saber

- {{key:Esc}} vacía la línea y devuelve las teclas al dibujo.
- En estos diseños, una sola letra ya no inicia una herramienta por sí misma: espera en la línea a que pulse {{key:Enter}} o {{key:Space}}. Las teclas con {{key:Ctrl}}, las teclas de función, {{key:Delete}} y {{key:Esc}} funcionan como antes. En los demás diseños no cambia nada.
- Mientras una herramienta de dibujo está activa, los dígitos quedan para la herramienta (una longitud escrita).
- Escribir en un cuadro, un diálogo o Configuración se queda ahí.
- El historial se guarda en esta computadora: 50 comandos por cada aplicación.
