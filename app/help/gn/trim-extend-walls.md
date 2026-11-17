---
title: Recortar, extender y unir muros
summary: Recortar o extender muros hasta otro muro, y unir dos muros en el punto donde se encuentran, cada uno como un paso que puede deshacer.
keywords: recortar, extender, esquina, unir, encontrar, limpiar, extremo de muro, esquina de muro, cortar, alargar, acortar, modificar, TR
from: a6fb2e8b
---

## Qué va a hacer

Ordene los muros que dibujó: recorte un muro que pasa de otro, alargue uno que se queda corto, o cierre una esquina abierta.

## Pasos

1. Active {{ui:Draw}} y elija el nivel en la lista de niveles de la planta.
2. **Recortar o extender hasta un muro:** elija {{ui:Modify}} › {{ui:Trim / extend}}. Haga clic en el muro hasta el que recortar o extender (el borde) y luego en cada muro que quiera cambiar. Un muro que pasa del borde se recorta hasta él, y la parte donde hizo clic es la que queda; un muro que se queda corto se alarga hasta encontrar el borde. El borde queda elegido, así que puede hacer clic en varios muros uno tras otro. Presione {{key:Esc}} para elegir otro borde.
3. **Unir dos muros en una esquina:** elija {{ui:Modify}} › {{ui:Corner}}, haga clic en el primer muro y luego en el segundo. Ambos llegan hasta el punto donde se encuentran, y BimCraft limpia la esquina. Cuando un muro cruza el otro, se conserva la parte donde hizo clic.
4. Presione {{key:Esc}} para empezar de nuevo, o {{key:V}} para volver a {{ui:Select}}.

## Qué debería ver

- Mientras apunta a un muro, la planta muestra dónde iría, ya unido a los muros con los que se encuentra, con su nueva longitud.
- Cada cambio es un paso: {{key:Mod+Z}} lo deshace.
- Los ambientes, pisos, cielorrasos, techos y lo que sigue a los muros se rehacen, como después de cualquier cambio en los muros. Un ambiente cerrado por una esquina aparece con su número y superficie.
- Una puerta o ventana en una parte que queda cortada se elimina junto con ella.

## Conviene saber

- Los muros se dibujan sobre su línea central, así que se recortan y extienden a lo largo de ella: un muro llega a la línea central del otro muro, y la junta se limpia en forma de T o de L.
- BimCraft indica por qué no puede hacerlo: los dos muros son paralelos, la línea del muro pasa al lado del otro muro, una puerta o ventana estorba (muévala o elimínela primero), o no quedaría nada del muro (menos de 1 mm). Un muro que quede con menos de 50 mm se crea, con una advertencia en Problemas: ver [Consejos de dibujo](topic:drawing-advice).
- Solo se pueden recortar o extender los muros dibujados en BimCraft.

Ver también [Dibujar muros](topic:draw-walls) y [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door).
