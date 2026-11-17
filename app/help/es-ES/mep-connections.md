---
title: Conectar tuberías y conductos a equipos
summary: Inicie o termine una tubería o conducto en un puerto para que tome el tamaño y el sistema del puerto y quede fijo a él, y luego compruebe las conexiones: puertos abiertos, incompatibilidades de tamaño y de sistema, y tramos sin origen.
keywords: mep, conectar, conexión, conexiones, puerto, puertos, puerto abierto, incompatibilidad de tamaño, incompatibilidad de sistema, origen, comprobar conexiones, fijo, seguir, mover equipo, ifcrelconnectsports, coordinación
from: 29144fb0
---

## Qué hará

Una los tramos a los equipos para que el modelo sea un único sistema conectado: la salida de una bomba con la tubería que sale de ella, el cuello de un difusor con su conducto de ramal. Después deje que BimCraft liste lo que no está unido.

## Dibujar desde un puerto

1. Elija {{ui:Tubería}} o {{ui:Ducto}}.
2. Mueva el puntero sobre un puerto de un equipo (los pequeños círculos; un puerto abierto se dibuja en el color de advertencia). El puntero se ajusta a él y muestra **en un puerto**.
3. Haga clic: el tramo empieza a la altura del puerto y **toma su tamaño y sistema** (una tubería también toma el material habitual del sistema). La línea de estado indica lo que tomó.
4. Siga dibujando como de costumbre. Terminar un tramo en otro puerto fija también ese extremo.

Un extremo de tramo sobre un puerto queda **fijo** a él: si mueve o gira el equipo (en Propiedades), el extremo del tramo se mueve con él; si edita el tramo, ese extremo se mantiene en el puerto. Las demás esquinas del tramo se quedan donde están, así que tras un movimiento grande el primer tramo puede desprenderse del puerto en ángulo: mueva también la siguiente esquina.

## Comprobar las conexiones

Abra {{ui:Compilación}} y haga clic en {{ui:Comprobar conexiones}}. La lista bajo la barra muestra:

| Línea | Qué significa |
|---|---|
| Un puerto no está conectado | Un equipo tiene una conexión a la que no llega ningún dibujo |
| Nada en su extremo | Un tramo termina en el aire |
| Puertos unidos de tamaños distintos | Un tramo de un tamaño se une a un puerto o tramo de otro sin reductor (tamaño nominal de una tubería, forma y lados de un conducto) |
| Puertos unidos de sistemas distintos | Por ejemplo, un conducto de retorno en un difusor de impulsión |
| Una tubería unida a un conducto | Se encuentran dos conexiones de tipos distintos |
| Ningún equipo de su red lo alimenta | Nada a lo que esté unido un tramo, por lejos que esté, tiene una salida. No se pregunta por desagües, pluviales ni ventilaciones: su agua viene de los aparatos |
| Fijo a un puerto de un equipo que ya no está en el modelo | El equipo se borró; dibuje de nuevo el extremo o borre el tramo |

Los errores aparecen primero. Haga clic en una línea para seleccionar lo que nombra. {{ui:Cerrar}} oculta la lista. La comprobación lee el modelo tal como está dibujado: revisa conexiones y tamaños, nunca caudales, presiones ni equilibrado.
