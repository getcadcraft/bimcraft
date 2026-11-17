---
title: Dibujar muros
summary: Dibujá muros en la planta de un nivel ojeclic hag̃ua sus esquinas térã ojeskrive longitudes; las esquinas se unen solas, y los muros se guardan como IFC.
keywords: curvo, arco, línea de ubicación, justificación, muro, muros, dibujar, planta, planta de piso, ambiente, esquina, unir, tipo de muro, 2x6, 2x4, cmu, hormigón, altura, nivel, niveles, piso, longitud escrita, ortogonal, ajuste
from: 8269cd4b
---

## Lo que hará

Dibujá los muros de un edificio sobre la planta de cada nivel. Ojeclic dónde comienza cada muro y después cada esquina; BimCraft ojoina las esquinas por vos, da a cada muro sus capas (revestimiento, aislación, parantes, placa de yeso …) y lo lleva hasta el nivel de arriba. La vista 3D muestra los muros mientras avanzás.

## Abrir la planta

1. Comenzá un edificio nuevo ([Comenzar un edificio nuevo](topic:start-a-new-building)) o abrí un modelo IFC.
2. Ojeclic {{ui:Dibujar}} en la barra de herramientas. Se abre un edificio nuevo ya con eso activado.
3. La planta de un nivel se muestra a la izquierda y la vista 3D a la derecha. Elegí el nivel en la lista de arriba de la planta, o con el botón redondo al lado en el panel **Niveles**.
4. {{ui:Planta}}, {{ui:Emboyke}} y {{ui:3D}} son herramientas de la fila {{ui:Vista}} de la barra de herramientas (los comandos PLAN, SPLIT y las teclas siguen funcionando igual). Usá {{ui:Planta}} para ver solo la planta, {{ui:Emboyke}} para ver ambas, y {{ui:3D}} para cerrar la planta. Cuando la ventana es angosta (o el tamaño de la interfaz es grande), {{ui:Emboyke}} pone la planta encima de la vista 3D en vez de al lado.

La planta corta el nivel a 4'-0" (1200 mm) sobre su piso, como lo hace una planta de piso. Desplazá la rueda para acercar; arrastrá con el botón del medio o el derecho (o mantené {{key:Space}} y arrastrá) para desplazarte; con {{ui:Seleccionar}} activado, un arrastre simple también desplaza. {{key:F}} con el puntero sobre la planta la ajusta.

## Dibujar un ambiente

1. Ojeclic {{ui:Muro}} (o presioná {{key:W}}).
2. Elegí el tipo de muro en la primera lista, por ejemplo **Exterior 2×6** o **Interior 2×4**.
3. Elegí su altura: **Hasta el nivel de arriba** (el muro sigue si ese nivel se mueve), **Hasta** un nivel más arriba para un muro que atraviesa varios niveles (un hall de escalera, un ambiente de doble altura, un frontón alto), o **Altura fija** y escribila. Un muro así pertenece al nivel donde lo dibujaste; las plantas de los niveles que atraviesa lo muestran más claro, los ambientes allí cierran contra él, y podés ojeclic puertas y ventanas en él desde esas plantas (una puerta se apoya en el piso de ese nivel). Para mover o cambiar la forma del muro en sí, andá al nivel donde comienza.
4. Ojeclic dónde comienza el primer muro.
5. Ojeclic cada esquina. Cada clic hace un muro; el siguiente comienza donde terminó el anterior. La longitud y el ángulo se muestran al lado del puntero.
6. Ojeclic otra vez el primer punto para cerrar el ambiente. La línea de estado indica cuántos muros tiene el ambiente, y en modo eje central cada muro recibe su capa exterior hacia afuera del ambiente.
7. Presioná {{key:Esc}} (o clic derecho, o doble clic) para terminar sin cerrar.

Las esquinas se unen solas: dos muros se encuentran en inglete, un muro que termina en otro se detiene en su cara (una T), y tres o más muros en un mismo punto comparten la esquina. Los muros que se cruzan quedan como están.

Un ambiente entero de una vez: abrí {{ui:Formas}} para un rectángulo, un rectángulo girado, un polígono, arcos, muros sobre líneas elegidas o alrededor de un contorno (ver [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools)).

## Elegir la referencia de dibujo

Elegí **Eje central**, **Cara interior** o **Cara exterior** antes del primer clic. Con una cara seleccionada, tus clics y longitudes escritas describen esa cara; BimCraft desplaza el eje del muro la mitad del espesor total y une las esquinas consecutivas. Elegí **Exterior a la izquierda** o **Exterior a la derecha** según la dirección en que dibujás. Para un contorno cerrado dibujado en sentido antihorario, el exterior queda a la derecha; en sentido horario, a la izquierda. Con **Cara interior** el cuerpo del muro va hacia el lado exterior de tu línea; con **Cara exterior**, hacia el otro lado. El dibujo por cara mantiene el lado exterior elegido al cerrar el ciclo. En el eje central, los muros que no cierran un ambiente toman el lado exterior que elegiste; al cerrar un ambiente, cada muro pone su exterior hacia afuera del ambiente por sí solo, sin importar el sentido en que lo dibujaste.

Cambiar el tipo de muro, la referencia o el lado exterior termina la cadena actual. Cerca de una esquina que invierte el sentido, los ingletes largos se cortan dejando extremos rectos.

Mientras dibujás, un punto final sobre espacio vacío puede alinearse horizontal o verticalmente con un extremo de muro o con una esquina anterior. Una guía punteada une ese punto con el puntero ajustado. Shift mantiene la dirección de dibujo en ángulo recto; la alineación entonces se detiene a lo largo de esa dirección. Los extremos cercanos, puntos medios e intersecciones de muros tienen prioridad sobre la alineación lejana.

## Línea de ubicación

Con **Referencia** en **Cara exterior** o **Cara interior**, el muro conserva esa cara como su línea de ubicación. Luego, si el muro se engrosa o se invierte su exterior, esa cara se queda en su lugar y el muro crece o se invierte alrededor de ella. Un muro recto que se encuentra con ella en una esquina la sigue, para que la esquina siga cerrada. Podés cambiar la línea de ubicación después en **Propiedades**: ver [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door).

## Dibujar un muro curvo

1. Ojeclic {{ui:Muro}} y luego elegí **Curvo** en la lista **Forma** de la fila de opciones.
2. Ojeclic dónde comienza el muro, y después dónde termina.
3. Ojeclic un punto sobre su arco. O escribí la altura del arco y presioná {{key:Enter}}.
4. La cadena continúa desde el final del muro. Presioná {{key:Esc}} para terminarla.

Un muro curvo se une a los muros en sus extremos (funcionan las uniones en esquina y en T), forma ambientes y aloja puertas y ventanas a lo largo de su arco. Ellas siguen siendo unidades rectas, perpendiculares al muro en su punto medio, y su distancia se mide a lo largo del arco. Un muro puede girar como máximo tres cuartos de círculo. Se ajusta a sus extremos y al punto medio de su arco.

Todavía no construido para muros curvos: {{ui:Eheja / emboguete}} y {{ui:Esquina}}, armazón, cotas automáticas de planta y ajuste a lo largo del arco. Ver [Qué todavía no está hecho](topic:not-built-yet).

## Escribir una longitud en vez de hacer clic

Después del primer clic, escribí y presioná {{key:Enter}}:

| Escribir | Dibuja |
|---|---|
| `12'6"` o `3810` | un muro de esa longitud, en la dirección que muestra el puntero |
| `12'6"<90` | esa longitud, con ese ángulo (grados, en sentido antihorario desde la derecha) |
| `@3000,0` | hasta un punto a esa distancia del último, a lo ancho y hacia arriba |
| `1200,3400` | hasta ese punto en la planta |

Escribir un número mientras la herramienta Muro está activa va directo al cuadro {{ui:Longitud}}. En pies y pulgadas, un número sin unidad son pulgadas; en milímetros, son milímetros. Siempre podés escribir la unidad: `3.5 m`, `10 ft`, `6 1/2"`.

## Ajustes

- Los extremos de muro, sus esquinas de cara y los puntos medios de muro se ajustan cuando el puntero está cerca de ellos (un cuadrado, un triángulo).
- El puntero se ajusta al eje central de un muro o a cualquiera de sus caras (una cruz).
- Desde el último punto, la dirección se mantiene cada 15° cuando está cerca; mantené {{key:Shift}} para mantenerla en 0°, 90°, 180° o 270°.
- Las direcciones libres redondean la longitud a 1/2" (o 10 mm).

## Cambiar, deshacer, eliminar

- Cada muro es un paso en **Cambios**: {{ui:Deshacer}} y {{ui:Rehacer}} quitan muros y los devuelven.
- Con {{ui:Seleccionar}} activado, ojeclic un muro en la planta para elegirlo; la vista 3D y **Propiedades** lo siguen. {{key:Delete}} elimina los muros elegidos, y los muros que estaban unidos a ellos se vuelven a limpiar.

## Niveles

El panel **Niveles** lista cada nivel con su elevación y altura.

- Escribí un nombre nuevo, una elevación o una altura y presioná {{key:Enter}}. Cambiar la altura (o la elevación) de un nivel mueve los niveles de arriba en la misma cantidad, y los muros que llegan hasta un nivel la siguen.
- {{ui:Agregar un nivel arriba}} agrega un nivel encima del más alto, de la misma altura.
- {{ui:Agregar un nivel abajo}} agrega un nivel debajo del más bajo (un sótano), de la misma altura que ese: su elevación es negativa cuando el nivel más bajo está en 0, y ningún otro nivel se mueve. {{ui:Deshacer}} lo quita de nuevo.
- {{ui:Copiar este nivel…}} vuelve a dibujar lo que hay en el nivel que estás viendo en otro nivel, o en uno nuevo encima: sus muros con sus puertas y ventanas, pisos y cielorrasos (no techos). Los muros que llegaban hasta el nivel de arriba llegan hasta el nivel de arriba del nuevo; los ambientes aparecen solos. Un solo {{ui:Deshacer}} lo quita todo. Si el otro nivel ya tiene muros, la copia se agrega a ellos.
- {{ui:Unidades}} en la barra de herramientas elige las unidades (pies y pulgadas, pulgadas, pies decimales, milímetros, centímetros o metros) para todo lo que muestran y leen las herramientas de dibujo.

## Guardar

Ojeclic {{ui:Guardar como IFC}}. Cada muro es un muro IFC con su línea central, su forma unida, su tipo y capas, `Pset_WallCommon` y cantidades base (longitud, altura, áreas y volúmenes), para que otros programas BIM lo abran y lo planifiquen.

## Útil saber

- Los muros se dibujan sobre su línea central. El espesor viene del tipo de muro.
- La planta muestra los muros dibujados aquí rellenos, y todo lo demás (elementos de biblioteca, modelos de otros programas) cortado por el mismo plano, con lo que queda debajo del corte en líneas finas.
- Los muros hechos por otros programas se muestran en la planta, pero todavía no se pueden cambiar con estas herramientas.
