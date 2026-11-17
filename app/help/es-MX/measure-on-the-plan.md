---
title: Medir en la planta
summary: Haga clic en dos puntos de la planta de un nivel para leer la distancia y las diferencias en X y en Y, encadene más clics para un total acumulado, y no guarde nada en el modelo.
keywords: medir, planta, distancia, cota, cinta, total acumulado, encadenar, dx, dy, recto, ajuste, extremos de muro, ejes, columnas, verificar una longitud
from: 7235633f
---

## Qué hará

Verifique una longitud en la planta de un nivel, como el ancho de un cuarto o la distancia entre dos ejes, sin agregar nada al modelo. Para medir en la vista 3D, vea [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure).

## Pasos

1. Muestre la planta del nivel que quiere: {{ui:Planta}} para solo la planta, o {{ui:Dividir}}.
2. En el grupo {{ui:Dibujo}}, haga clic en {{ui:Medir}}. Con solo la planta visible, puede presionar {{key:M}} en su lugar.
3. Haga clic en el primer punto. Los puntos se ajustan a muros, ejes y columnas.
4. Haga clic en el segundo punto. Una línea de cota muestra la distancia, y la línea de estado da la distancia con las diferencias en X y en Y.
5. Para seguir midiendo, haga clic en un tercer punto. Cada tramo se mide y el total se suma.
6. Mantenga presionado {{key:Shift}} mientras hace clic para que el tramo quede recto respecto del anterior.
7. Presione {{key:Esc}} para borrar la medición, o elija otra herramienta.

## Notas

- No se escribe nada en el modelo, y la cota desaparece al borrarla. Para cotas que permanezcan, vea [Ensambles de muros y cotas de referencia](topic:wall-assemblies).
- Con la vista 3D en pantalla, {{key:M}} sigue siendo Medir 3D. {{key:Shift+M}} es Desplazar.
- La distancia usa la unidad de visualización que eligió en {{ui:Configuración}}.
