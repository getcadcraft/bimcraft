---
title: Recortar, alargar y unir muros
summary: Recorte o alargue muros hasta otro muro, y una dos muros en el punto donde se encuentran, cada operación como un paso que puede deshacer.
keywords: recortar, alargar, esquina, unir, encuentro, limpiar, extremo de muro, esquina de muro, recortar hacia atrás, alargar, acortar, modificar, TR
from: a6fb2e8b
---

## Qué va a hacer

Ordene los muros que dibujó: recorte un muro que sobrepasa a otro, alargue uno que se queda corto o cierre una esquina abierta.

## Pasos

1. Active {{ui:Dibujo}} y elija el nivel en la lista de niveles de la planta.
2. **Recortar o alargar hasta un muro:** elija {{ui:Modificar}} › {{ui:Recortar / alargar}}. Haga clic en el muro hasta el que recortar o alargar (el borde) y después en cada muro que quiera modificar. Un muro que sobrepasa el borde se recorta hasta él, y la parte en la que hizo clic es la que permanece; un muro que se queda corto se alarga hasta encontrar el borde. El borde sigue elegido, así que puede hacer clic en varios muros uno tras otro. Pulse {{key:Esc}} para elegir otro borde.
3. **Unir dos muros en una esquina:** elija {{ui:Modificar}} › {{ui:Esquina}}, haga clic en el primer muro y después en el segundo. Ambos llegan hasta el punto donde se encuentran, y BimCraft limpia la esquina. Cuando un muro cruza al otro, permanece la parte en la que hizo clic.
4. Pulse {{key:Esc}} para empezar de nuevo, o {{key:V}} para volver a {{ui:Seleccionar}}.

## Qué debería ver

- Mientras apunta a un muro, la planta muestra dónde quedaría, ya unido a los muros que encuentra, con su nueva longitud.
- Cada cambio es un solo paso: {{key:Mod+Z}} lo deshace.
- Las habitaciones, los forjados, los techos, las cubiertas y lo que sigue a los muros se vuelven a generar, como después de cualquier cambio en los muros. Una habitación cerrada por una esquina aparece con su número y su superficie.
- Una puerta o una ventana situada en una parte que se corta se elimina con ella.

## Para tener en cuenta

- Los muros se dibujan sobre su eje, así que se recortan y alargan a lo largo de él: un muro llega hasta el eje del otro, y la unión se limpia formando una T o una L.
- BimCraft indica el motivo cuando no puede hacerlo: los dos muros son paralelos, la línea del muro pasa junto al otro muro, una puerta o una ventana estorba (muévala o elimínela primero) o no quedaría nada del muro (menos de 1 mm). Un muro que quede con menos de 50 mm se crea, con una advertencia en Problemas: véase [Consejos de dibujo](topic:drawing-advice).
- Solo se pueden recortar o alargar los muros dibujados en BimCraft.

Véase también [Dibujar muros](topic:draw-walls) y [Modificar un muro, una puerta o una ventana](topic:change-a-wall-or-door).
