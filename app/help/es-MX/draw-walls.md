---
title: Dibujar muros
summary: Dibuje los muros en la planta de un nivel haciendo clic en sus esquinas o escribiendo longitudes; las esquinas se unen solas y los muros se guardan como IFC.
keywords: curvo, arco, línea de referencia, justificación, muro, muros, dibujar, planta, planta de piso, habitación, esquina, unir, tipo de muro, 2x6, 2x4, cmu, concreto, altura, nivel, niveles, nivel, longitud escrita, orto, forzcursor
from: 8269cd4b
---

## Qué hará

Dibuje los muros de un edificio sobre una planta de cada nivel. Haga clic donde empieza un muro y luego en cada esquina; BimCraft une las esquinas por usted, asigna a cada muro sus capas (recubrimiento exterior, forro, montantes, tablaroca …) y lo lleva hasta el nivel superior. La vista 3D muestra los muros mientras avanza.

## Abrir la planta

1. Inicie un edificio nuevo ([Iniciar un edificio nuevo](topic:start-a-new-building)) o abra un modelo IFC.
2. Haga clic en {{ui:Draw}} de la barra de herramientas. Se abre un edificio nuevo con ese modo ya activo.
3. La planta de un nivel se muestra a la izquierda y la vista 3D a la derecha. Elija el nivel en la lista de la parte superior de la planta, o con el botón redondo junto a ella en el panel **Niveles**.
4. {{ui:Plan}}, {{ui:Split}} y {{ui:3D}} son herramientas de la fila {{ui:View}} de la barra de herramientas (los comandos PLAN, SPLIT y las teclas funcionan como antes). Utilice {{ui:Plan}} para ver solo la planta, {{ui:Split}} para ver ambas y {{ui:3D}} para cerrar la planta. Cuando la ventana es estrecha (o el tamaño de la interfaz es grande), {{ui:Split}} coloca la planta encima de la vista 3D en lugar de al lado.

La planta corta el nivel a 4'-0" (1200 mm) por encima de su piso, como lo hace una planta de piso. Use la rueda para hacer zoom; arrastre con el botón central o el derecho (o mantenga presionada {{key:Space}} y arrastre) para encuadrar. Con {{ui:Select}} activado, un arrastre simple también encuadra. {{key:F}} con el puntero sobre la planta la encuadra por completo.

## Dibujar una habitación

1. Haga clic en {{ui:Wall}} (o presione {{key:W}}).
2. Elija el tipo de muro en la primera lista, por ejemplo **Exterior 2×6** o **Interior 2×4**.
3. Elija su altura: **Hasta el nivel superior** (el muro sigue al nivel si ese nivel se mueve), **Hasta** un nivel más alto para un muro que atraviesa varios niveles (un vestíbulo de escalera, un espacio de doble altura, un muro de hastial alto), o **Altura fija** y escríbala. Un muro así pertenece al nivel en el que lo dibujó; las plantas de los niveles que atraviesa lo muestran más claro, las habitaciones se cierran contra él, y puede hacer clic en puertas y ventanas sobre él desde esas plantas (una puerta se apoya en el piso de ese nivel). Para mover o modificar el muro mismo, vaya al nivel donde empieza.
4. Haga clic donde empieza el primer muro.
5. Haga clic en cada esquina. Cada clic crea un muro; el siguiente comienza donde terminó el anterior. La longitud y el ángulo se muestran junto al puntero.
6. Haga clic de nuevo en el primer punto para cerrar la habitación. La barra de estado indica cuántos muros tiene la habitación, y en modo de eje cada muro recibe su capa exterior hacia el exterior de la habitación.
7. Presione {{key:Esc}} (o haga clic derecho, o doble clic) para terminar sin cerrar.

Las esquinas se unen solas: dos muros se encuentran en inglete, un muro que termina en otro se detiene en su cara (una T), y tres o más muros en un mismo punto comparten la esquina. Los muros que se cruzan se dejan como están.

Una habitación completa de una vez: abra {{ui:Shapes}} para un rectángulo, un rectángulo girado, un polígono, arcos, muros sobre líneas elegidas o alrededor de un contorno (vea [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools)).

## Elegir la referencia de dibujo

Elija **Eje**, **Cara interior** o **Cara exterior** antes del primer clic. Con una cara seleccionada, sus clics y las longitudes escritas describen esa cara; BimCraft desplaza el eje del muro la mitad del espesor total y une las esquinas consecutivas. Elija **Exterior a la izquierda** o **Exterior a la derecha** según la dirección en que dibuja. En un contorno cerrado dibujado en sentido antihorario, el exterior queda a la derecha; en sentido horario, a la izquierda. Con **Cara interior**, el cuerpo del muro va al lado exterior de su línea; con **Cara exterior**, al otro lado. El dibujo por cara conserva el lado exterior elegido al cerrar el ciclo. En el eje, los muros que no cierran una habitación toman el lado exterior que eligió; al cerrar una habitación, cada muro pone su exterior hacia el exterior de la habitación por sí solo, sin importar el sentido en que la dibujó.

Cambiar el tipo de muro, la referencia o el lado exterior termina la cadena actual. Cerca de una esquina de retroceso, los ingletes largos se limitan dejando extremos cuadrados.

Mientras dibuja, un extremo en un espacio vacío puede alinearse horizontal o verticalmente con un extremo de muro o con una esquina anterior. Una guía punteada une ese punto con el puntero ajustado. Con {{key:Shift}} la dirección de dibujo se mantiene en escuadra; la alineación entonces se detiene a lo largo de esa dirección. Los extremos cercanos, los puntos medios y las intersecciones de muros tienen prioridad sobre la alineación lejana.

## Línea de referencia

Con **Referencia** en **Cara exterior** o **Cara interior**, el muro conserva esa cara como su línea de referencia. Después, si el muro se engrosa o se invierte su exterior, esa cara se queda en su lugar y el muro crece o se invierte alrededor de ella. Un muro recto que llega a ella en una esquina la sigue, así que la esquina sigue cerrada. Puede cambiar la línea de referencia después en **Propiedades**: vea [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door).

## Dibujar un muro curvo

1. Haga clic en {{ui:Wall}} y luego elija **Curvo** en la lista **Forma** de la barra de opciones.
2. Haga clic donde empieza el muro y luego donde termina.
3. Haga clic en un punto de su arco. O escriba la altura del arco y presione {{key:Enter}}.
4. La cadena continúa desde el final del muro. Presione {{key:Esc}} para terminarla.

Un muro curvo se une a los muros en sus extremos (funcionan las uniones en esquina y en T), forma habitaciones y aloja puertas y ventanas a lo largo de su arco. Estas siguen siendo unidades rectas, perpendiculares al muro en su punto medio, y su distancia se mide a lo largo del arco. Un muro puede girar como máximo tres cuartos de círculo. Se ajusta a sus extremos y al punto medio de su arco.

Todavía no están construidos para muros curvos: {{ui:Trim / extend}} y {{ui:Corner}}, el entramado, las cotas automáticas de planta y el ajuste a lo largo del arco. Vea [Qué falta por construir](topic:not-built-yet).

## Escribir una longitud en lugar de hacer clic

Después del primer clic, escriba y presione {{key:Enter}}:

| Escriba | Dibuja |
|---|---|
| `12'6"` o `3810` | un muro de esa longitud, en la dirección que muestra el puntero |
| `12'6"<90` | esa longitud, en ese ángulo (grados, en sentido antihorario desde la derecha) |
| `@3000,0` | hasta un punto a esa distancia del último, en horizontal y en vertical |
| `1200,3400` | hasta ese punto en la planta |

Escribir un número con la herramienta Muro activa va directamente al cuadro {{ui:Length}}. En pies y pulgadas, un número sin unidad son pulgadas; en milímetros, son milímetros. Siempre puede escribir la unidad: `3.5 m`, `10 ft`, `6 1/2"`.

## Forzcursor

- Los extremos de muro, las esquinas de sus caras y los puntos medios de los muros se ajustan cuando el puntero está cerca (un cuadrado, un triángulo).
- El puntero se ajusta a la línea central de un muro o a cualquiera de sus caras (una cruz).
- Desde el último punto, la dirección se mantiene cada 15° cuando está cerca; mantenga {{key:Shift}} para conservarla en 0°, 90°, 180° o 270°.
- En direcciones libres, la longitud se redondea a 1/2" (o 10 mm).

## Cambiar, deshacer, eliminar

- Cada muro es un paso en {{ui:Changes}}: {{ui:Undo}} y {{ui:Redo}} quitan los muros y los vuelven a poner.
- Con {{ui:Select}} activado, haga clic en un muro de la planta para elegirlo; la vista 3D y **Propiedades** lo siguen. {{key:Delete}} elimina los muros elegidos, y los muros que estaban unidos a ellos se limpian de nuevo.

## Niveles

El panel **Niveles** enumera cada nivel con su elevación y su altura.

- Escriba un nombre, una elevación o una altura nuevos y presione {{key:Enter}}. Cambiar la altura (o la elevación) de un nivel mueve los niveles superiores en la misma cantidad, y los muros que llegan hasta un nivel la siguen.
- {{ui:Add a level on top}} agrega un nivel encima del superior, de la misma altura.
- {{ui:Add a level below}} agrega un nivel debajo del más bajo (un sótano), de la misma altura que este: su elevación es negativa cuando el nivel más bajo está en 0, y ningún otro nivel se mueve. {{ui:Undo}} lo quita de nuevo.
- {{ui:Copy this level…}} vuelve a dibujar lo que hay en el nivel que está viendo en otro nivel, o en uno nuevo encima: sus muros con sus puertas y ventanas, pisos y techos (no techumbres). Los muros que llegaban hasta el nivel superior llegan hasta el nivel superior del nuevo; las habitaciones aparecen solas. Un solo {{ui:Undo}} deshace todo. Si el otro nivel ya tiene muros, la copia se agrega a ellos.
- {{ui:Units}} en la barra de herramientas elige las unidades (pies y pulgadas, pulgadas, pies decimales, milímetros, centímetros o metros) para todo lo que muestran y leen las herramientas de dibujo.

## Guardar

Haga clic en {{ui:Save as IFC}}. Cada muro es un muro IFC con su línea central, su forma unida, su tipo y sus capas, `Pset_WallCommon` y cantidades base (longitud, altura, áreas y volúmenes), para que otros programas BIM lo abran y lo incluyan en sus cuadros de cantidades.

## Conviene saber

- Los muros se dibujan sobre su línea central. El espesor viene del tipo de muro.
- La planta muestra en relleno los muros dibujados aquí, y todo lo demás (elementos de biblioteca, modelos de otros programas) cortado por el mismo plano, con lo que queda debajo del corte en líneas delgadas.
- Los muros hechos por otros programas se muestran en la planta, pero todavía no se pueden modificar con estas herramientas.
