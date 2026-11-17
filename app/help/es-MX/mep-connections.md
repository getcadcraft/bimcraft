---
title: Conectar tuberías y ductos a equipos
summary: Inicie o termine una tubería o ducto en un puerto para que tome el tamaño y el sistema del puerto y quede fijo a él, y luego revise las conexiones: puertos abiertos, discrepancias de tamaño y de sistema, y tramos sin fuente.
keywords: mep, conectar, conexión, conexiones, puerto, puertos, puerto abierto, discrepancia de tamaño, discrepancia de sistema, fuente, revisar conexiones, fijo, seguir, mover equipo, ifcrelconnectsports, coordinación
from: 29144fb0
---

## Qué hará

Una los tramos a los equipos para que el modelo sea un solo sistema conectado: la salida de una bomba con la tubería que sale de ella, el cuello de un difusor con su ducto ramal. Luego deje que BimCraft enumere lo que no está unido.

## Dibujar desde un puerto

1. Elija {{ui:Tubería}} o {{ui:Ducto}}.
2. Mueva el puntero sobre un puerto de un equipo (los círculos pequeños; un puerto abierto se dibuja en el color de advertencia). El puntero se ajusta a él y dice **en un puerto**.
3. Haga clic: el tramo comienza a la altura del puerto y **toma su tamaño y sistema** (una tubería también toma el material habitual del sistema). La línea de estado indica lo que tomó.
4. Dibuje como de costumbre. Terminar un tramo en otro puerto fija también ese extremo.

El extremo de un tramo en un puerto queda **fijo** a él: si mueve o gira el equipo (en Propiedades), el extremo del tramo se mueve con él; si edita el tramo, ese extremo se queda en el puerto. Las demás esquinas del tramo se quedan donde están, así que tras un movimiento grande el primer segmento puede desprenderse del puerto en ángulo: mueva también la siguiente esquina.

## Revisar las conexiones

Abra {{ui:Compilación}} y haga clic en {{ui:Revisar conexiones}}. La lista bajo la barra muestra:

| Línea | Qué significa |
|---|---|
| Un puerto no está conectado | Un equipo tiene una conexión a la que no se dibuja nada |
| Sin nada en su extremo | Un tramo termina en el aire |
| Puertos unidos de distinto tamaño | Un tramo de un tamaño se une a un puerto o tramo de otro sin reducción (el diámetro nominal de una tubería, la forma y los lados de un ducto) |
| Puertos unidos de distinto sistema | Por ejemplo, un ducto de retorno en un difusor de suministro |
| Una tubería unida a un ducto | Se encuentran dos conexiones de tipos distintos |
| Ningún equipo de su red lo abastece | Nada de lo que está unido a un tramo, por lejos que esté, tiene una salida. Los drenajes, las aguas pluviales y las ventilaciones no se revisan así: su agua proviene de los muebles sanitarios |
| Fijo a un puerto de un equipo que ya no está en el modelo | El equipo se eliminó; dibuje de nuevo el extremo o elimine el tramo |

Los errores van primero. Haga clic en una línea para seleccionar lo que nombra. {{ui:Cerrar}} oculta la lista. La revisión lee el modelo tal como está dibujado: revisa conexiones y tamaños, nunca caudales, presiones ni balanceo.
