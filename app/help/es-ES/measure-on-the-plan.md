---
title: Medir en la planta
summary: Haga clic en dos puntos de la planta de un nivel para leer la distancia y las diferencias en X e Y, encadene más clics para un total acumulado, y no guarde nada en el modelo.
keywords: medir, planta, distancia, cota, cinta, total acumulado, encadenar, dx, dy, recto, ajustar, extremos de muro, ejes, pilares, comprobar una longitud
from: 7235633f
---

## Qué va a hacer

Comprobar una longitud en la planta de un nivel, como la anchura de una habitación o la distancia entre dos ejes, sin añadir nada al modelo. Para medir en la vista 3D, vea [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure).

## Pasos

1. Muestre la planta del nivel que quiera: {{ui:Planta}} para solo la planta, o {{ui:Dividir}}.
2. En el grupo {{ui:Dibujo}}, haga clic en {{ui:Medir}}. Con solo la planta visible puede pulsar {{key:M}} en su lugar.
3. Haga clic en el primer punto. Los puntos se ajustan a muros, ejes y pilares.
4. Haga clic en el segundo punto. Una línea de cota muestra la distancia, y la línea de estado da la distancia con las diferencias en X e Y.
5. Para seguir midiendo, haga clic en un tercer punto. Cada tramo se mide y el total se suma.
6. Mantenga pulsado {{key:Shift}} mientras hace clic para que el tramo quede recto respecto al anterior.
7. Pulse {{key:Esc}} para borrar la medida, o elija otra herramienta.

## Notas

- No se escribe nada en el modelo, y la cota desaparece al borrarla. Para cotas que se mantienen, vea [Conjuntos de muro y cotas de referencia](topic:wall-assemblies).
- Con la vista 3D en pantalla, {{key:M}} sigue siendo Medir en 3D. {{key:Shift+M}} es Mover.
- La distancia usa la unidad de visualización que eligió en {{ui:Configuración}}.
