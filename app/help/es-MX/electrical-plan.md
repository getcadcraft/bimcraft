---
title: El plano eléctrico
summary: Coloque contactos, interruptores, luces, sensores, cajas de conexiones y tableros en el plano con los mismos símbolos del complemento Eléctrico de CadCraft, vincule los interruptores con las luces que encienden y liste dispositivos y circuitos en las tablas.
keywords: eléctrico, plano eléctrico, contacto, tomacorriente, contacto doble, interruptor, tres vías, atenuador, luz, luminaria de techo, luz empotrada, downlight, sensor de movimiento, caja de conexiones, tablero, tablero de distribución, circuito, carga, watts, amperes, retorno de interruptor, tabla de dispositivos, tabla de tableros
from: f7de1947
---

## Qué va a hacer

Dibuje el plano eléctrico de la casa en el modelo: contactos, interruptores y tableros en los muros, luces y sensores en el techo. Cada dispositivo es un elemento eléctrico real en el archivo IFC, con su etiqueta, circuito y carga, y los interruptores recuerdan las luces que encienden.

## Colocar dispositivos

1. En un nivel, abra {{ui:Build}} y elija {{ui:Electrical}}.
2. Elija el dispositivo: contactos (corriente, datos, teléfono, audio y video), interruptores y sensores (también un termostato y un temporizador), luces, detectores y alarmas, una caja de conexiones, un tablero o un subtablero.
3. Escriba un **Circuito** si lo conoce (cualquier nombre: 1, 2, A-3). Deje **Altura de montaje** en blanco para la altura habitual de ese dispositivo.
4. Haga clic en el plano. Los contactos, interruptores y tableros van en la cara del muro más cercano, mirando hacia el local; las luces, sensores y cajas de conexiones van en el techo donde haga clic.

Los dispositivos se etiquetan al colocarse: **R** para contactos, **S** para interruptores, **L** para luces, **M** para sensores de movimiento, **J** para cajas de conexiones, **P** para tableros. Los dispositivos en un muro se mueven con él cuando mueve el muro.

¿Prefiere buscar por imagen? Abra la **Paleta de símbolos** desde {{ui:Build}} para encontrar un dispositivo por nombre, marque con estrella los que usa y colóquelo con un solo clic: vea [La paleta de símbolos](topic:symbol-palette).

## Vincular interruptores con luces

1. Designe un interruptor (o un sensor de movimiento) y haga clic en **Vincular luces** en **Propiedades**.
2. Haga clic en cada luz que enciende. Haga clic de nuevo en una luz vinculada para desvincularla.
3. Pulse {{key:Enter}} o haga clic en **Listo**.

El plano dibuja una curva punteada desde el interruptor hasta cada una de sus luces. En **Propiedades** de una luz se ve qué interruptores la encienden.

## El local en que está un dispositivo

Cada dispositivo sabe en qué local está. Un dispositivo en un muro está en el local hacia el que mira; un dispositivo de techo está en el local bajo el que se encuentra. **Propiedades** muestra **Local**, y la tabla **Dispositivos eléctricos** tiene una columna **Local** (número y nombre, como 101 Cocina).

Se mantiene actualizado: si renombra o renumera el local, mueve el dispositivo o mueve un muro, el local se actualiza en el mismo paso. Un dispositivo en la cara exterior de un edificio, o en un espacio que no es un local, indica que no está en un local.

El local también se escribe en el archivo, en el conjunto de propiedades del dispositivo `CadCraft_Location` (Room, RoomNumber, RoomName), para que Buscar, Color por propiedad y una tabla de etiquetas puedan usarlo, y también para que lo use otro programa. Los símbolos de planta y los elementos vinculados a un símbolo reciben el mismo conjunto; vea [Paleta de símbolos](topic:symbol-palette).

## Deje que su asistente los coloque

Con un asistente conectado (Configuración › Asistentes, con cambios permitidos), puede pedir dispositivos con palabras: "ponga un contacto doble cada 2 m a lo largo de los muros de la sala, a 300 mm de altura, en el circuito 3", o "agregue una luz de techo con su interruptor junto a la puerta". El asistente usa cinco herramientas: `devices_add`, `device_change`, `lights_set`, `devices_delete` y `devices_list`. Crean los mismos dispositivos que crea la herramienta Eléctrico, en los mismos muros y con las mismas etiquetas, circuitos, cargas y alturas, y cada llamada es un paso de deshacer.

Un dispositivo nunca recibe un tipo que la herramienta Eléctrico no tiene: un tipo desconocido se rechaza y se le entrega al asistente la lista. Un contacto o interruptor debe quedar a menos de 600 mm de una cara de muro, como con un clic, o la llamada se rechaza y no se coloca nada. Las alturas predeterminadas están en milímetros: 300 para contactos y 1100 para interruptores; un dispositivo de techo cuelga del techo.

## Cambiar y listar

Designe un dispositivo para cambiar su etiqueta, circuito, carga (watts) y altura de montaje. Designe varios para ponerlos todos en un mismo circuito a la vez. Pulse {{key:Delete}} para eliminar uno; una luz eliminada se quita de sus interruptores.

En {{ui:Schedules}} elija **Dispositivos eléctricos** para ver cada dispositivo con su nivel, circuito, carga, altura y las luces que enciende cada interruptor, o **Circuitos** para ver los dispositivos de cada circuito, la carga total y la corriente. Ambas también están en la hoja de tablas del juego de planos: vea [Elevaciones, cortes y hojas](topic:sheets).

:::note
Las alturas de montaje y las cargas son valores predeterminados de planeación (un contacto a 16" de altura y 200 W, un interruptor a 48", una luz de techo de 60 W), no un diseño: el electricista o el ingeniero dimensionan los circuitos y revisan el código.
:::

:::tip
Los símbolos son los que el complemento Eléctrico de CadCraft dibuja en los planos de instalación, así que un plano de cualquiera de las dos aplicaciones se lee igual.
:::
