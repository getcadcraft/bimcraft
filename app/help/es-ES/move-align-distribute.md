---
title: Desplazar, copiar, alinear y distribuir elementos del edificio
summary: Desplace muros, losas, pilares y elementos colocados indicando un punto base y un segundo punto o una distancia escrita; cópielos mientras los desplaza, y alínelos o repártalos a la misma distancia, en el plano o a partir de una selección en 3D.
keywords: desplazar, copiar, alinear, distribuir, espaciado, desfase, punto base, desplazamiento, muros, pilares, losas, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Qué va a hacer

Mueva un muro, un pilar, una losa o un elemento de biblioteca colocado a un lugar nuevo, cree copias de él o alinee varios, sin volver a dibujarlos.

## Nombres y teclas

Los comandos se llaman {{ui:Desplazar}}, {{ui:Alinear}} y {{ui:Distribuir}}, y puede escribir `MOVE`, `ALIGN` y `DISTRIBUTE` en la línea de comandos, como en la aplicación de dibujo CadCraft. Una diferencia: en BimCraft {{key:M}} es Medir, así que Desplazar tiene su propia tecla, {{key:Shift+M}}. Las herramientas están en el menú {{ui:Compilación}}.

## Desplazar

1. Seleccione lo que va a mover, en la planta o en la vista 3D. Muros, losas, pilares y elementos de biblioteca colocados pueden ir todos en una misma selección.
2. Pulse {{key:Shift+M}} o elija {{ui:Desplazar}}.
3. Haga clic en un punto base y después en un segundo punto. O bien, tras el punto base, escriba una distancia y pulse {{key:Enter}}: se desplaza en la dirección en que apunta el puntero desde el punto base. También puede escribir `dx,dy` (o `@dx,dy`), o `longitud<ángulo`.
4. Pulse {{key:C}} para activar {{ui:Copiar}}: cada desplazamiento hará copias y quedará listo para el siguiente. Pulse {{key:Esc}} para parar.

También se pueden hacer clic en ambos puntos en la vista 3D: con {{ui:Desplazar}} activo, el puntero encuentra la altura del suelo de la planta, así que un clic allí es un punto del plano. Mantenga {{key:Shift}} pulsado al hacer clic para seleccionar otro elemento en su lugar. Use una vista de Planta, Superior, Frontal o Lateral según prefiera: los puntos siempre quedan en ese nivel.

Un muro se lleva consigo sus puertas y ventanas. Una losa dibujada se lleva sus huecos. Las habitaciones, losas y techos que siguen a los muros se actualizan. Los muros que se unían al muro desplazado se quedan donde están.

Cada desplazamiento es un solo cambio: un {{key:Mod+Z}} lo deshace, y llega a todos en una sesión de Live TeamWork. Un elemento de biblioteca colocado no se puede copiar de esta forma; use {{ui:Edición}} › {{ui:Copiar}} y {{ui:Pegar}}.

## Alinear

Seleccione dos o más elementos, elija {{ui:Alinear}}, luego un lado (izquierda, centro, derecha, superior, medio o inferior) y a qué alinear: el conjunto seleccionado, el primero seleccionado, el último seleccionado o un punto en el que haga clic. Pulse {{ui:Alinear}} en la barra.

## Distribuir

Seleccione tres o más elementos, elija {{ui:Distribuir}}, luego una dirección (horizontal o vertical) y el espaciado: huecos iguales entre ellos o centros iguales. Los dos de los extremos se quedan donde están.

Los muros que Alinear o Distribuir mueven conservan sus uniones, igual que con Desplazar: un muro unido a un muro desplazado desliza su extremo por su propia línea para seguir unido, los tabiques que se apoyan en él vienen con él, y dos muros unidos que se desplazan ambos conservan su esquina donde se encuentran sus nuevas líneas. Las habitaciones siguen cerradas. Es un solo paso en **Cambios**.
