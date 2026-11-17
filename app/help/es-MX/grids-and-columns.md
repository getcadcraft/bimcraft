---
title: Retículas y columnas
summary: Trace ejes de retícula con círculos numerados y con letras, por separación o uno por uno, dibuje muros y columnas a lo largo de ellos y véalos en plantas, alzados y secciones.
keywords: retícula, retículas, eje de retícula, retícula de columnas, eje, ejes, círculo, línea de retícula, retícula estructural, 1 2 3, A B C, columna, columnas, pilar, poste, forzcursor, IfcGrid, IfcColumn
from: bf99a8f7
---

## Qué hará

Ubique un edificio sobre una retícula y luego dibuje muros y coloque columnas a lo largo de sus ejes.

## Colocar una retícula completa

1. Active {{ui:Dibujo}} y luego elija {{ui:Compilación}} › {{ui:Retícula}}.
2. Haga clic en {{ui:Colocar una retícula…}}. Indique cuántos **ejes numerados** (1, 2, 3…) y **ejes con letra** (A, B, C…) quiere y a qué distancia están. Escriba una separación, o varias separadas por comas para crujías desiguales (por ejemplo `20', 24', 20'`). {{ui:Más allá de los últimos ejes}} es cuánto se prolonga cada eje más allá de los ejes exteriores del otro tipo, y {{ui:Girada (grados)}} gira toda la retícula.
3. Haga clic en {{ui:Colocarla}} y después en el punto donde va la primera intersección (1 / A). La vista previa sigue al puntero.

Los ejes numerados suben por la planta y se distribuyen a lo ancho de ella; los ejes con letra cruzan la planta y se distribuyen hacia arriba. Las letras omiten la I y la O, como en los planos, para que nunca se lean como 1 y 0.

## Dibujar ejes uno por uno

Con {{ui:Retícula}} activa, haga clic donde empieza un eje y donde termina. Recibe la siguiente etiqueta de los ejes a lo largo de los que corre (después del 3 viene el 4; después de la B, la C). Pulse {{key:Esc}} para terminar.

## Cambiar un eje de la retícula

Con {{ui:Retícula}} activa, haga clic en un eje para designarlo. Escriba una nueva {{ui:Etiqueta}} y pulse {{key:Enter}}, o haga clic en {{ui:Eliminar este eje}} (o pulse {{key:Delete}}). {{ui:Círculos}} coloca los círculos en ambos extremos, en el inicio o el final de cada eje, o en ninguno. Cada cambio es un solo paso: {{key:Mod+Z}} lo deshace.

## Dibujar a lo largo de la retícula

La herramienta {{ui:Muro}}, la herramienta {{ui:Columna}} y las demás herramientas de dibujo se ajustan a los ejes de la retícula y a sus intersecciones (la marca de forzcursor es un pequeño círculo con una cruz).

**Columnas:** elija {{ui:Compilación}} › {{ui:Columna}}, indique la forma (rectangular o redonda), el tamaño y si la columna llega **hasta el nivel superior** o hasta una altura fija, y luego haga clic. {{ui:En cada cruce de la retícula}} coloca una columna en cada intersección que todavía no tenga una. Haga clic en una columna para cambiar su forma, tamaño o altura en {{ui:Propiedades}}; {{key:Delete}} la elimina. Las columnas que llegan al nivel superior siguen a este cuando cambia su altura.

## Qué debe ver

- La retícula en la planta de cada nivel, con un círculo y su etiqueta en los extremos de cada eje.
- Los ejes de la retícula en el juego de planos: en las plantas, y en alzados y secciones donde un eje se ve de canto, con su círculo encima del edificio. Consulte [Alzados, secciones y hojas](topic:sheets).
- En el archivo IFC: una retícula para el edificio (IfcGrid, con sus ejes numerados en una lista y sus ejes con letra en la otra), y columnas como IfcColumn con su tamaño, altura y cantidades. Otros programas BIM muestran ambas.

:::note
Una retícula que llegó en un archivo de otro programa se muestra, y las herramientas se ajustan a ella, pero sus ejes no se pueden cambiar aquí.
:::
