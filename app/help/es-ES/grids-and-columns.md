---
title: Retículas y pilares
summary: Trace ejes de retícula con círculos numerados y con letras, por separación o uno a uno, dibuje muros y pilares a lo largo de ellos y véalos en plantas, alzados y secciones.
keywords: retícula, retículas, eje de retícula, retícula de pilares, eje, ejes, círculo, línea de retícula, retícula estructural, 1 2 3, A B C, pilar, columna, poste, ajustar, IfcGrid, IfcColumn
from: bf99a8f7
---

## Qué va a hacer

Trace un edificio sobre una retícula y, después, dibuje muros y coloque pilares a lo largo de sus ejes.

## Colocar una retícula completa

1. Active {{ui:Dibujo}} y, después, elija {{ui:Compilación}} › {{ui:Retícula}}.
2. Haga clic en {{ui:Colocar una retícula…}}. Indique cuántos **ejes numerados** (1, 2, 3…) y cuántos **ejes con letras** (A, B, C…) quiere, y a qué distancia entre sí. Escriba una separación, o varias separadas por comas para crujías desiguales (por ejemplo `20', 24', 20'`). {{ui:Más allá de los últimos ejes}} es hasta dónde se prolonga cada eje más allá de los ejes exteriores del otro tipo, y {{ui:Girada (grados)}} gira toda la retícula.
3. Haga clic en {{ui:Colocarla}} y, después, en el punto donde debe ir el primer cruce (1 / A). La vista previa sigue al puntero.

Los ejes numerados recorren el plano hacia arriba y se reparten por él; los ejes con letras recorren el plano de lado a lado y se reparten hacia arriba. Las letras omiten la I y la O, como en los planos, para que nunca se confundan con 1 y 0.

## Dibujar ejes uno a uno

Con {{ui:Retícula}} activada, haga clic donde empieza un eje y donde termina. Recibe la siguiente etiqueta de los ejes a lo largo de los que corre (después de 3 viene 4; después de B viene C). Pulse {{key:Esc}} para terminar.

## Cambiar un eje de la retícula

Con {{ui:Retícula}} activada, haga clic en un eje para seleccionarlo. Escriba una nueva {{ui:Etiqueta}} y pulse {{key:Enter}}, o haga clic en {{ui:Eliminar este eje}} (o pulse {{key:Delete}}). {{ui:Círculos}} coloca los círculos en ambos extremos, en el inicio o el final de cada eje, o en ninguno. Cada cambio es un paso: {{key:Mod+Z}} lo deshace.

## Dibujar a lo largo de la retícula

La herramienta {{ui:Muro}}, la herramienta {{ui:Pilar}} y las demás herramientas de dibujo se ajustan a los ejes de la retícula y a sus cruces (la marca de ajuste es un pequeño círculo con una cruz).

**Pilares:** elija {{ui:Compilación}} › {{ui:Pilar}}, seleccione la forma (rectangular o redonda), el tamaño y si el pilar llega **hasta el nivel superior** o hasta una altura fija, y haga clic. {{ui:En cada cruce de la retícula}} coloca un pilar en cada cruce que aún no tiene ninguno. Haga clic en un pilar para cambiar su forma, tamaño o altura en {{ui:Propiedades}}; {{key:Delete}} lo elimina. Los pilares que llegan al nivel superior lo siguen cuando cambia su altura.

## Qué debe ver

- La retícula en la planta de cada nivel, con un círculo y su etiqueta en los extremos de cada eje.
- Los ejes en el conjunto de dibujos: en las plantas, y en alzados y secciones donde un eje se ve de frente, con su círculo encima del edificio. Consulte [Alzados, secciones y hojas](topic:sheets).
- En el archivo IFC: una retícula para el edificio (IfcGrid, con sus ejes numerados en una lista y sus ejes con letras en la otra), y los pilares como IfcColumn con su tamaño, altura y cantidades. Otros programas BIM muestran ambos.

:::note
Una retícula que llegó en un archivo de otro programa se muestra, y las herramientas se ajustan a ella, pero sus ejes no se pueden modificar aquí.
:::
