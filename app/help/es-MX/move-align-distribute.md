---
title: Desplazar, copiar, alinear y distribuir elementos de construcción
summary: Mueva muros, pisos, columnas y elementos colocados por un punto base y un segundo punto o una distancia escrita, cópielos mientras avanza, y alinéelos o espácielos de manera uniforme, en la planta o desde una selección en 3D.
keywords: desplazar, copiar, alinear, distribuir, espaciado, desfase, punto base, desplazamiento, muros, columnas, pisos, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Qué hará

Mueva un muro, una columna, un piso o un elemento de biblioteca colocado a un lugar nuevo, cree copias o alinee varios, sin volver a dibujarlos.

## Nombres y teclas

Los comandos se llaman {{ui:Desplazar}}, {{ui:Alinear}} y {{ui:Distribuir}}, y puede escribir `MOVE`, `ALIGN` y `DISTRIBUTE` en la línea de comandos, como en la aplicación de dibujo CadCraft. Una diferencia: en BimCraft {{key:M}} es Medir, así que Desplazar tiene su propia tecla, {{key:Shift+M}}. Las herramientas están en el menú {{ui:Compilación}}.

## Desplazar

1. Elija lo que va a mover, en la planta o en la vista 3D. Muros, pisos, columnas y elementos de biblioteca colocados pueden ir en una sola selección.
2. Presione {{key:Shift+M}} o elija {{ui:Desplazar}}.
3. Haga clic en un punto base y luego en un segundo punto. O, después del punto base, escriba una distancia y presione {{key:Enter}}: se moverá en la dirección que señale el puntero desde el punto base. También puede escribir `dx,dy` (o `@dx,dy`), o `length<angle`.
4. Presione {{key:C}} para activar {{ui:Copiar}}: cada desplazamiento entonces crea copias y queda listo para el siguiente. Presione {{key:Esc}} para parar.

Ambos puntos también se pueden hacer clic en la vista 3D: con {{ui:Desplazar}} activo, el puntero coincide con la altura del piso del nivel, así que un clic ahí es un punto de la planta. Mantenga presionada {{key:Shift}} mientras hace clic para elegir otro elemento en su lugar. Use la planta, Superior, Frontal o Lateral como prefiera: los puntos siempre quedan sobre ese nivel.

Un muro lleva consigo sus puertas y ventanas. Un piso dibujado lleva sus aberturas. Las habitaciones, pisos y techos que siguen a los muros se actualizan. Los muros que se unían al muro movido permanecen donde están.

Cada desplazamiento es un cambio: un {{key:Mod+Z}} lo deshace, y llega a todos en una sesión de Live TeamWork. Un elemento de biblioteca colocado no se puede copiar así; use {{ui:Editar}} › {{ui:Copiar}} y {{ui:Pegar}}.

## Alinear

Elija dos o más elementos, elija {{ui:Alinear}}, luego un lado (izquierda, centro, derecha, superior, medio o inferior) y a qué alinear: el conjunto elegido, el primero elegido, el último elegido, o un punto en que haga clic. Presione {{ui:Alinear}} en la barra.

## Distribuir

Elija tres o más elementos, elija {{ui:Distribuir}}, luego una dirección (horizontal o vertical) y el espaciado: separaciones iguales entre ellos o centros iguales. Los dos de los extremos se quedan donde están.

Los muros que mueven Alinear o Distribuir conservan sus uniones, igual que con Desplazar: un muro unido a un muro movido desliza su extremo por su propia línea para seguir unido, los tabiques que llegan a él se mueven con él, y dos muros unidos que ambos se mueven conservan su esquina donde se cruzan sus nuevas líneas. Las habitaciones permanecen cerradas. Es un paso en **Cambios**.
