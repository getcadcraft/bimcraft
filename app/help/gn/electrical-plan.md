---
title: Plano eléctrico
summary: Ejapo tomacorrientes, llaves, luces, sensores, cajas de empalme y tableros en el plano con los mismos símbolos del complemento Eléctrico de CadCraft, enlace las llaves con las luces que encienden y liste los dispositivos y circuitos en las planillas.
keywords: eléctrico, plano eléctrico, tomacorriente, toma, doble, llave, de tres vías, regulador, luz, luz de cielorraso, luz empotrada, luz embutida, sensor de movimiento, caja de empalme, tablero, tablero de distribución, circuito, carga, vatios, amperios, retorno de llave, planilla de dispositivos, planilla de tableros
from: f7de1947
---

## Lo que hará

Dibuje el plano eléctrico de la casa en el modelo: tomacorrientes, llaves y tableros en las paredes, luces y sensores en el cielorraso. Cada dispositivo es un elemento eléctrico real en el archivo IFC, con su etiqueta, circuito y carga, y las llaves recuerdan las luces que encienden.

## Colocar dispositivos

1. En un nivel, abra {{ui:Build}} y elija {{ui:Electrical}}.
2. Elija el dispositivo: tomacorrientes (energía, datos, teléfono, audio-video), llaves y sensores (también un termostato y un temporizador), luces, detectores y alarmas, una caja de empalme, un tablero o un subtablero.
3. Escriba un **Circuito** si lo conoce (cualquier nombre: 1, 2, A-3). Deje en blanco la **Altura de montaje** para usar la altura habitual de ese dispositivo.
4. Haga clic en el plano. Los tomacorrientes, llaves y tableros van en la cara de la pared más cercana, mirando hacia adentro del ambiente; las luces, sensores y cajas de empalme van en el cielorraso donde hizo clic.

Los dispositivos reciben su etiqueta al colocarse: **R** para tomacorrientes, **S** para llaves, **L** para luces, **M** para sensores de movimiento, **J** para cajas de empalme, **P** para tableros. Los dispositivos en una pared se mueven con ella cuando usted mueve la pared.

¿Prefiere buscar por imagen? Abra la **Paleta de símbolos** desde {{ui:Build}} para encontrar un dispositivo por nombre, marcar con estrella los que usa y colocarlo con un solo clic: vea [La paleta de símbolos](topic:symbol-palette).

## Enlazar llaves con luces

1. Elija una llave (o un sensor de movimiento) y haga clic en **Enlazar luces** en **Propiedades**.
2. Haga clic en cada luz que enciende. Para desenlazar una luz enlazada, haga clic de nuevo en ella.
3. Presione {{key:Enter}} o haga clic en **Listo**.

El plano dibuja una curva de trazos desde la llave hasta cada una de sus luces. En las **Propiedades** de una luz se ve qué llaves la encienden.

## El ambiente donde está un dispositivo

Cada dispositivo sabe en qué ambiente está. Un dispositivo en una pared está en el ambiente al que mira; un dispositivo en el cielorraso está en el ambiente que queda debajo. Las **Propiedades** muestran **Ambiente**, y la planilla **Dispositivos eléctricos** tiene una columna **Ambiente** (número y nombre, por ejemplo 101 Cocina).

Se mantiene actualizado: si renombra o renumera el ambiente, mueve el dispositivo o mueve una pared, el ambiente se actualiza en el mismo paso. Un dispositivo en la cara exterior del edificio, o en un espacio que no es un ambiente, indica que no está en un ambiente.

El ambiente también se escribe en el archivo, en el conjunto de propiedades `CadCraft_Location` del dispositivo (Room, RoomNumber, RoomName), para que Buscar, Color según propiedad y una planilla de etiquetas puedan usarlo, y también otro programa. Los símbolos del plano y los elementos enlazados a un símbolo reciben el mismo conjunto; vea [Paleta de símbolos](topic:symbol-palette).

## Deje que su asistente los coloque

Con un asistente conectado (**Configuración › Asistentes**, con cambios permitidos), puede pedir dispositivos con palabras: "ponga un tomacorriente doble cada 2 m a lo largo de las paredes de la sala, a 300 mm de altura, en el circuito 3", o "agregue una luz de cielorraso con su llave junto a la puerta". El asistente usa cinco herramientas: `devices_add`, `device_change`, `lights_set`, `devices_delete` y `devices_list`. Crean los mismos dispositivos que crea la herramienta Eléctrico, en las mismas paredes y con las mismas etiquetas, circuitos, cargas y alturas, y cada llamada es un solo paso para deshacer.

Un dispositivo nunca recibe un tipo que la herramienta Eléctrico no tiene: un tipo desconocido se rechaza y el asistente recibe la lista. Un tomacorriente o una llave debe estar a menos de 600 mm de la cara de una pared, igual que con un clic; si no, la llamada se rechaza y no se coloca nada. Las alturas por defecto están en milímetros: 300 para tomacorrientes, 1100 para llaves; un dispositivo de cielorraso cuelga del cielorraso.

## Cambiar y listar

Elija un dispositivo para cambiar su etiqueta, circuito, carga (vatios) y altura de montaje. Elija varios para ponerlos todos en un mismo circuito a la vez. Presione {{key:Delete}} para quitar uno; una luz eliminada se saca de sus llaves.

En {{ui:Schedules}} elija **Dispositivos eléctricos** para ver cada dispositivo con su nivel, circuito, carga, altura y las luces que enciende cada llave, o **Circuitos** para ver los dispositivos de cada circuito, la carga total y la corriente. Ambas también están en la hoja de planillas del juego de planos: vea [Elevaciones, cortes y hojas](topic:sheets).

:::note
Las alturas de montaje y las cargas son valores de planificación por defecto (un tomacorriente a 16" de altura y 200 W, una llave a 48", una luz de cielorraso de 60 W), no un diseño: el electricista o el ingeniero dimensiona los circuitos y verifica el código.
:::

:::tip
Los símbolos son los mismos que dibuja el complemento Eléctrico de CadCraft en los planos de instalación, así que un plano de cualquiera de las dos aplicaciones se lee igual.
:::
