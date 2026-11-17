---
title: Recortar, alargar y juntar muros
summary: Recorte o alargue muros hasta otro muro, y junte dos muros en el punto donde se encuentran, cada uno como un paso que puede deshacer.
keywords: recortar, alargar, esquina, juntar, encontrar, limpiar, extremo de muro, esquina de muro, cortar, prolongar, acortar, modificar, TR
from: a6fb2e8b
---

## Lo que hará

Ordene los muros que dibujó: recorte un muro que pasa de otro, alargue uno que queda corto, o cierre una esquina abierta.

## Pasos

1. Active {{ui:Dibujo}} y elija el nivel en la lista de niveles de la planta.
2. **Recortar o alargar hasta un muro:** elija {{ui:Modificar}} › {{ui:Recortar / alargar}}. Haga clic en el muro hasta el cual recortar o alargar (el borde), y luego haga clic en cada muro que quiera cambiar. Un muro que pasa del borde se recorta hasta él, y la parte donde hizo clic es la que se queda; un muro que queda corto se alarga hasta encontrar el borde. El borde sigue elegido, así que puede hacer clic en varios muros uno tras otro. Pulse {{key:Esc}} para elegir otro borde.
3. **Juntar dos muros en una esquina:** elija {{ui:Modificar}} › {{ui:Esquina}}, haga clic en el primer muro y luego en el segundo. Ambos llegan al punto donde se encuentran, y BimCraft limpia la esquina. Cuando un muro cruza al otro, se queda la parte donde hizo clic.
4. Pulse {{key:Esc}} para empezar de nuevo, o {{key:V}} para volver a {{ui:Seleccionar}}.

## Lo que debe ver

- Mientras apunta a un muro, la planta muestra dónde quedaría, ya unido a los muros que encuentra, con su nueva longitud.
- Cada cambio es un paso: {{key:Mod+Z}} lo deshace.
- Los locales, pisos, techos, cubiertas y lo que sigue a los muros se vuelven a generar, como después de cualquier cambio en los muros. Un local cerrado por una esquina aparece con su número y su área.
- Una puerta o ventana en una parte que queda cortada se elimina con ella.

## Conviene saber

- Los muros se dibujan sobre su línea central, así que se recortan y alargan a lo largo de ella: un muro llega a la línea central del otro, y la unión se limpia en forma de T o de L.
- BimCraft indica por qué no puede hacerlo: los dos muros son paralelos, la línea del muro pasa junto al otro muro, una puerta o ventana estorba (muévala o elimínela primero), o no quedaría nada del muro (menos de 1 mm). Un muro que queda con menos de 50 mm se crea igualmente, con una advertencia en Problemas: vea [Consejos de dibujo](topic:drawing-advice).
- Solo se pueden recortar o alargar los muros dibujados en BimCraft.

Vea también [Dibujar muros](topic:draw-walls) y [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door).
