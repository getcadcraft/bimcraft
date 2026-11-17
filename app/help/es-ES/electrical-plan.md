---
title: El plano eléctrico
summary: Coloque tomas de corriente, interruptores, luces, sensores, cajas de derivación y cuadros en el plano con los mismos símbolos que el complemento Eléctrico de CadCraft, vincule los interruptores a las luces que encienden y liste los dispositivos y circuitos en las tablas.
keywords: eléctrico, plano eléctrico, toma de corriente, base de enchufe, doble, interruptor, conmutador, regulador, luz, luz de techo, luz empotrada, downlight, sensor de movimiento, caja de derivación, cuadro, cuadro de distribución, circuito, carga, vatios, amperios, retorno de interruptor, tabla de dispositivos, tabla de cuadros
from: f7de1947
---

## Lo que hará

Dibuje el plano eléctrico de la vivienda en el modelo: tomas de corriente, interruptores y cuadros en las paredes, luces y sensores en el techo. Cada dispositivo es un elemento eléctrico real en el archivo IFC, con su etiqueta, circuito y carga, y los interruptores recuerdan las luces que encienden.

## Colocar dispositivos

1. En una planta, abra {{ui:Compilación}} y elija {{ui:Eléctrico}}.
2. Elija el dispositivo: tomas de corriente (energía, datos, teléfono, audio y vídeo), interruptores y sensores (también un termostato y un temporizador), luces, detectores y alarmas, una caja de derivación, un cuadro o un subcuadro.
3. Escriba un **Circuito** si lo conoce (cualquier nombre: 1, 2, A-3). Deje **Altura de montaje** en blanco para la altura habitual de ese dispositivo.
4. Haga clic en el plano. Las tomas, los interruptores y los cuadros se colocan en la cara de la pared más cercana, orientados hacia la habitación; las luces, los sensores y las cajas de derivación se colocan en el techo donde haga clic.

Los dispositivos se etiquetan al colocarlos: **R** para las tomas de corriente, **S** para los interruptores, **L** para las luces, **M** para los sensores de movimiento, **J** para las cajas de derivación y **P** para los cuadros. Los dispositivos situados en una pared se desplazan con ella al mover la pared.

¿Prefiere buscar por imagen? Abra la **Paleta de símbolos** desde {{ui:Compilación}} para encontrar un dispositivo por nombre, marque con estrella los que usa y colóquelo con un solo clic: consulte [La paleta de símbolos](topic:symbol-palette).

## Vincular interruptores a luces

1. Seleccione un interruptor (o un sensor de movimiento) y haga clic en **Vincular luces** en **Propiedades**.
2. Haga clic en cada luz que enciende. Vuelva a hacer clic en una luz vinculada para desvincularla.
3. Pulse {{key:Enter}} o haga clic en **Listo**.

El plano dibuja una curva discontinua desde el interruptor hasta cada una de sus luces. En **Propiedades** de una luz se indica qué interruptores la encienden.

## La habitación en la que está un dispositivo

Cada dispositivo sabe en qué habitación está. Un dispositivo en una pared está en la habitación a la que da; un dispositivo de techo está en la habitación que tiene debajo. **Propiedades** muestra **Habitación**, y la tabla **Dispositivos eléctricos** tiene una columna **Habitación** (número y nombre, como 101 Cocina).

Se mantiene actualizado: si renombra o renumera la habitación, mueve el dispositivo o mueve una pared, la habitación se actualiza en el mismo paso. Un dispositivo en la cara exterior de un edificio, o en un espacio que no es una habitación, indica que no está en una habitación.

La habitación también se escribe en el archivo, en el conjunto de propiedades `CadCraft_Location` del dispositivo (Room, RoomNumber, RoomName), para que Buscar, Color por propiedad y una tabla de etiquetas puedan usarla, y también otro programa. Los símbolos de planta y los elementos vinculados a un símbolo reciben el mismo conjunto; consulte [Paleta de símbolos](topic:symbol-palette).

## Deje que su asistente los coloque

Con un asistente conectado (Ajustes › Asistentes, con las ediciones permitidas), puede pedir dispositivos con palabras: "ponga una toma doble cada 2 m a lo largo de las paredes del salón, a 300 mm de altura, en el circuito 3", o "añada una luz de techo con su interruptor junto a la puerta". El asistente usa cinco herramientas: `devices_add`, `device_change`, `lights_set`, `devices_delete` y `devices_list`. Crean los mismos dispositivos que crea la herramienta Eléctrico, en las mismas paredes y con las mismas etiquetas, circuitos, cargas y alturas, y cada llamada es un paso de deshacer.

Un dispositivo nunca recibe un tipo que la herramienta Eléctrico no tiene: un tipo desconocido se rechaza y se entrega al asistente la lista. Una toma o un interruptor debe estar a menos de 600 mm de una cara de pared, como un clic; si no, la llamada se rechaza y no se coloca nada. Las alturas predeterminadas están en milímetros: 300 para las tomas y 1100 para los interruptores; un dispositivo de techo cuelga del techo.

## Cambiar y listar

Seleccione un dispositivo para cambiar su etiqueta, su circuito, su carga (vatios) y su altura de montaje. Seleccione varios para ponerlos todos en un mismo circuito a la vez. Pulse {{key:Delete}} para quitar uno; una luz eliminada se quita de sus interruptores.

En {{ui:Tablas}} elija **Dispositivos eléctricos** para ver cada dispositivo con su planta, circuito, carga, altura y las luces que enciende cada interruptor, o **Circuitos** para ver los dispositivos de cada circuito, la carga total y la corriente. Ambas están también en la hoja de tablas del juego de planos: consulte [Alzados, secciones y hojas](topic:sheets).

:::note
Las alturas de montaje y las cargas son valores predeterminados de planificación (una toma a 16" de altura y 200 W, un interruptor a 48", una luz de techo de 60 W), no un diseño: el electricista o el ingeniero dimensiona los circuitos y comprueba la normativa.
:::

:::tip
Los símbolos son los que dibuja el complemento Eléctrico de CadCraft en los planos de instalaciones, así que un plano de cualquiera de las dos aplicaciones se lee igual.
:::
