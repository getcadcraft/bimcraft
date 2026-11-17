---
title: Dibujar muros
summary: Dibuje los muros en la planta de un nivel haciendo clic en sus esquinas o escribiendo longitudes; las esquinas se unen solas y los muros se guardan como IFC.
keywords: curvo, arco, línea de ubicación, justificación, muro, muros, dibujar, planta, plano de planta, habitación, esquina, unir, tipo de muro, 2x6, 2x4, cmu, hormigón, altura, nivel, niveles, planta, longitud escrita, orto, ajuste
from: 8269cd4b
---

## Qué hará

Dibuje los muros de un edificio sobre una planta de cada nivel. Haga clic donde empieza un muro y luego en cada esquina; BimCraft une las esquinas por usted, asigna a cada muro sus capas (revestimiento exterior, tablero, montantes, placa de yeso …) y lo prolonga hasta el nivel superior. La vista 3D muestra los muros a medida que los dibuja.

## Abrir la planta

1. Cree un edificio nuevo ([Crear un edificio nuevo](topic:start-a-new-building)) o abra un modelo IFC.
2. Haga clic en {{ui:Dibujo}} en la barra de herramientas. Se abre un edificio nuevo con esta opción ya activada.
3. La planta de un nivel aparece a la izquierda y la vista 3D a la derecha. Elija el nivel en la lista de la parte superior de la planta, o con el botón redondo que está junto a ella en el panel **Niveles**.
4. {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} son herramientas de la fila {{ui:Vista}} de la barra de herramientas (los comandos PLAN, SPLIT y las teclas funcionan como antes). Use {{ui:Planta}} para ver solo la planta, {{ui:Dividir}} para ver ambas vistas y {{ui:3D}} para cerrar la planta. Cuando la ventana es estrecha (o el tamaño de la interfaz es grande), {{ui:Dividir}} coloca la planta encima de la vista 3D en lugar de al lado.

La planta corta el nivel a 4'-0" (1200 mm) sobre su suelo, como lo hace una planta de arquitectura. Use la rueda del ratón para hacer zoom; arrastre con el botón central o el derecho (o mantenga pulsada {{key:Space}} y arrastre) para desplazarse. Con {{ui:Seleccionar}} activado, un arrastre simple también desplaza la vista. {{key:F}} con el puntero sobre la planta la encuadra.

## Dibujar una habitación

1. Haga clic en {{ui:Muro}} (o pulse {{key:W}}).
2. Elija el tipo de muro en la primera lista, por ejemplo **Exterior 2×6** o **Interior 2×4**.
3. Elija su altura: **Hasta el nivel superior** (el muro sigue al nivel si este se mueve), **Hasta** un nivel más alto para un muro que atraviesa varios niveles (un hall de escalera, una sala de doble altura, un hastial alto), o **Altura fija** y escríbala. Un muro así pertenece al nivel en el que lo dibujó; las plantas de los niveles que atraviesa lo muestran más claro, las habitaciones allí se cierran contra él, y puede hacer clic en esas plantas para colocar puertas y ventanas en él (una puerta se apoya en el suelo de ese nivel). Para mover o modificar el propio muro, vaya al nivel en el que empieza.
4. Haga clic donde empieza el primer muro.
5. Haga clic en cada esquina. Cada clic crea un muro; el siguiente empieza donde terminó el anterior. La longitud y el ángulo se muestran junto al puntero.
6. Haga clic de nuevo en el primer punto para cerrar la habitación. La línea de estado indica cuántos muros tiene la habitación, y en modo de eje cada muro recibe su capa exterior en el exterior de la habitación.
7. Pulse {{key:Esc}} (o haga clic con el botón derecho, o haga doble clic) para detenerse sin cerrar.

Las esquinas se unen solas: dos muros se encuentran en inglete, un muro que termina en otro se detiene en su cara (una T), y tres o más muros en un mismo punto comparten la esquina. Los muros que se cruzan se dejan como están.

Una habitación completa de una vez: abra {{ui:Formas}} para un rectángulo, un rectángulo girado, un polígono, arcos, muros sobre líneas seleccionadas o alrededor de un contorno (vea [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools)).

## Elegir la referencia de dibujo

Elija **Eje**, **Cara interior** o **Cara exterior** antes del primer clic. Con una cara seleccionada, sus clics y longitudes escritas describen esa cara; BimCraft desplaza el eje del muro la mitad del espesor total y une las esquinas consecutivas. Elija **Exterior a la izquierda** o **Exterior a la derecha** según la dirección en la que dibuja. En un contorno cerrado dibujado en sentido antihorario, el exterior queda a la derecha; en sentido horario, a la izquierda. Con **Cara interior**, el cuerpo del muro va al lado exterior de su línea; con **Cara exterior**, al otro lado. Dibujar por cara mantiene el lado exterior elegido al cerrar el bucle. En el eje, los muros que no cierran una habitación toman el lado exterior que eligió; al cerrar una habitación, cada muro pone su exterior hacia fuera de la habitación por sí solo, sea cual sea el sentido en que lo dibujó.

Cambiar el tipo de muro, la referencia o el lado exterior termina la cadena actual. Cerca de una esquina que invierte el sentido, los ingletes largos se limitan dejando extremos rectos.

Al dibujar, un extremo situado en espacio vacío puede alinearse en horizontal o en vertical con el extremo de un muro o con una esquina anterior. Una guía discontinua une ese punto con el puntero ajustado. {{key:Shift}} mantiene la dirección de dibujo en ángulo recto; la alineación se detiene entonces en esa dirección. Los extremos, puntos medios e intersecciones de muros cercanos tienen prioridad sobre la alineación lejana.

## Línea de ubicación

Con **Referencia** en **Cara exterior** o **Cara interior**, el muro conserva esa cara como línea de ubicación. Más adelante, si el muro se engrosa o se invierte su exterior, esa cara se queda donde está y el muro crece o se invierte a su alrededor. Un muro recto que llega a ella en una esquina la sigue, así que la esquina sigue cerrada. Puede cambiar la línea de ubicación después en **Propiedades**: vea [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door).

## Dibujar un muro curvo

1. Haga clic en {{ui:Muro}} y luego elija **Curvo** en la lista **Forma** de la fila de opciones.
2. Haga clic donde empieza el muro y luego donde termina.
3. Haga clic en un punto de su arco. O escriba la altura del arco y pulse {{key:Enter}}.
4. La cadena continúa desde el final del muro. Pulse {{key:Esc}} para terminarla.

Un muro curvo se une a los muros en sus extremos (funcionan las uniones en esquina y en T), forma habitaciones y admite puertas y ventanas a lo largo de su arco. Estas siguen siendo unidades rectas, perpendiculares al muro en su centro, y su distancia se mide a lo largo del arco. Un muro puede girar como máximo tres cuartos de círculo. Se ajusta a sus extremos y al punto medio de su arco.

Todavía no disponible para muros curvos: {{ui:Recortar / alargar}} y {{ui:Esquina}}, el entramado, las cotas automáticas de planta y el ajuste a lo largo del arco. Vea [Lo que aún no está disponible](topic:not-built-yet).

## Escribir una longitud en lugar de hacer clic

Tras el primer clic, escriba y pulse {{key:Enter}}:

| Escriba | Dibuja |
|---|---|
| `12'6"` o `3810` | un muro de esa longitud, en la dirección que indica el puntero |
| `12'6"<90` | esa longitud, con ese ángulo (grados, en sentido antihorario desde la derecha) |
| `@3000,0` | hasta un punto a esa distancia del último, en horizontal y en vertical |
| `1200,3400` | hasta ese punto en la planta |

Escribir un número con la herramienta Muro activa va directamente al cuadro {{ui:Longitud}}. En pies y pulgadas, un número sin unidad son pulgadas; en milímetros, son milímetros. Siempre puede escribir la unidad: `3.5 m`, `10 ft`, `6 1/2"`.

## Ajustes a puntos

- Los extremos de los muros, sus esquinas de cara y los puntos medios de los muros se ajustan cuando el puntero está cerca (un cuadrado, un triángulo).
- El puntero se ajusta al eje de un muro o a cualquiera de sus caras (una cruz).
- Desde el último punto, la dirección se fija cada 15° cuando está próxima; mantenga {{key:Shift}} para mantenerla en 0°, 90°, 180° o 270°.
- Las direcciones libres redondean la longitud a 1/2" (o 10 mm).

## Cambiar, deshacer, eliminar

- Cada muro es un paso en {{ui:Cambios}}: {{ui:Deshacer}} y {{ui:Rehacer}} quitan muros y los devuelven.
- Con {{ui:Seleccionar}} activado, haga clic en un muro de la planta para elegirlo; la vista 3D y **Propiedades** lo siguen. {{key:Delete}} elimina los muros elegidos, y los muros a los que estaban unidos se vuelven a limpiar.

## Niveles

El panel **Niveles** enumera todos los niveles con su elevación y altura.

- Escriba un nuevo nombre, elevación o altura y pulse {{key:Enter}}. Cambiar la altura (o la elevación) de un nivel desplaza los niveles superiores en la misma cantidad, y los muros que llegan hasta un nivel lo siguen.
- {{ui:Agregar un nivel encima}} añade un nivel por encima del más alto, de su misma altura.
- {{ui:Añadir un nivel inferior}} añade un nivel por debajo del más bajo (un sótano), de su misma altura: su elevación es negativa cuando el nivel más bajo está en 0, y ningún otro nivel se mueve. {{ui:Deshacer}} lo quita.
- {{ui:Copiar esta planta…}} vuelve a dibujar lo que hay en el nivel que está viendo en otro nivel, o en uno nuevo encima: sus muros con sus puertas y ventanas, suelos y techos (no cubiertas). Los muros que llegaban hasta el nivel superior llegan hasta el nivel superior del nuevo; las habitaciones aparecen solas. Un solo {{ui:Deshacer}} lo deshace todo. Si el otro nivel ya tiene muros, la copia se añade a ellos.
- {{ui:Unidades}} en la barra de herramientas elige las unidades (pies y pulgadas, pulgadas, pies decimales, milímetros, centímetros o metros) para todo lo que muestran y leen las herramientas de dibujo.

## Guardar

Haga clic en {{ui:Guardar como IFC}}. Cada muro es un muro IFC con su línea de eje, su forma unida, su tipo y sus capas, `Pset_WallCommon` y cantidades base (longitud, altura, áreas y volúmenes), de modo que otros programas BIM lo abran y lo incluyan en sus planificaciones.

## Conviene saber

- Los muros se dibujan sobre su línea de eje. El espesor procede del tipo de muro.
- La planta muestra en relleno los muros dibujados aquí, y el resto (elementos de biblioteca, modelos de otros programas) cortado por el mismo plano, con lo que queda bajo el corte en líneas finas.
- Los muros creados por otros programas aparecen en la planta, pero todavía no se pueden modificar con estas herramientas.
