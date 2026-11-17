---
title: Cuadrículas y columnas
summary: Armá líneas de cuadrícula con burbujas numeradas y con letras, por separación o una por una, dibujá muros y columnas a lo largo de ellas, y vélas en planos, elevaciones y cortes.
keywords: cuadrícula, cuadrículas, línea de cuadrícula, cuadrícula de columnas, eje, ejes, burbuja, gridline, cuadrícula estructural, 1 2 3, A B C, columna, columnas, pilar, poste, ajuste, IfcGrid, IfcColumn
from: bf99a8f7
---

## Mba'épa reipapáta

Ojehechauka un edificio ha peteĩ cuadrícula, upe rire dibujá muros ha emoĩ columnas hendápe líneas-kuéra.

## Emoĩ peteĩ cuadrícula entera

1. Prendé {{ui:Dibujar}} y upe rire escogé {{ui:Compilación}} › {{ui:Cuadrícula}}.
2. Clickeá {{ui:Emoĩ cuadrícula…}}. Decí cuántas **líneas numeradas** (1, 2, 3…) y **líneas con letra** (A, B, C…) querés y cuán separadas. Escribí una separación, o varias separadas por comas para tramos desiguales (por ejemplo `20', 24', 20'`). {{ui:Línea ipahápe}} es cuánto se extiende cada línea más allá de las líneas exteriores del otro tipo, y {{ui:Mboyvegua (grado)}} gira toda la cuadrícula.
3. Clickeá {{ui:Emoĩ}}, upe rire clickeá donde va el primer cruce (1 / A). La vista previa sigue al puntero.

Las líneas numeradas van hacia arriba en el plano y se reparten a lo ancho; las líneas con letra van a lo ancho y se reparten hacia arriba. Las letras saltan la I y la O, como en los planos, para que nunca se lean como 1 y 0.

## Dibujá líneas de cuadrícula una por una

Con {{ui:Cuadrícula}} prendido, clickeá donde empieza y donde termina una línea. Recibe la próxima etiqueta de las líneas por donde va (después del 3 viene el 4; después de la B viene la C). Apretá {{key:Esc}} para parar.

## Cambiá una línea de cuadrícula

Con {{ui:Cuadrícula}} prendido, clickeá una línea para elegirla. Escribí una nueva {{ui:Etiqueta}} y apretá {{key:Enter}}, o clickeá {{ui:Eliminar ko línea}} (o apretá {{key:Delete}}). {{ui:Burbujas}} pone las burbujas en los dos extremos, al comienzo o al final de cada línea, o en ningún lugar. Cada cambio es un paso: {{key:Mod+Z}} lo vuelve atrás.

## Dibujá siguiendo la cuadrícula

La herramienta {{ui:Muro}}, la herramienta {{ui:Columna}} y las otras herramientas de dibujo se ajustan a las líneas de cuadrícula y a donde se cruzan (la marca de ajuste es un pequeño círculo con una cruz).

**Columnas:** escogé {{ui:Compilación}} › {{ui:Columna}}, elegí la forma (rectangular o redonda), el tamaño y si la columna llega **hasta el piso de arriba** o a una altura fija, después clickeá. {{ui:Cuadrícula cruce opa-pe}} pone una columna en cada cruce que todavía no tenga. Clickeá una columna para cambiar su forma, tamaño o altura en {{ui:Propiedades}}; {{key:Delete}} la quita. Las columnas que llegan al piso de arriba lo siguen cuando cambia su altura.

## Mba'épa reikuaa

- La cuadrícula en el plano de cada nivel, con una burbuja y su etiqueta en los extremos de cada línea.
- Líneas de cuadrícula en el juego de dibujos: en los planos, y en elevaciones y cortes donde una línea se ve de punta, con su burbuja encima del edificio. Ver [Elevaciones, cortes y hojas](topic:sheets).
- En el archivo IFC: una cuadrícula para el edificio (IfcGrid, con sus líneas numeradas en una lista y sus líneas con letra en la otra), y columnas como IfcColumn con su tamaño, altura y cantidades. Otros programas BIM muestran ambas.

:::note
Una cuadrícula que vino en un archivo de otro programa se muestra, y las herramientas se ajustan a ella, pero sus líneas no se pueden cambiar aquí.
:::
