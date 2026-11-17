---
title: Editar una familia
summary: Cambie los parámetros, fórmulas y sólidos de una familia, muestre partes mediante un parámetro Sí / No, corte y una sólidos, dé conectores para tuberías y ductos, y vea el resultado dibujado desde el IFC que guardará.
keywords: editor de familias, editar familia, parámetro, parámetros, fórmula, fórmulas, visibilidad, sí no, sólido, sólidos, caja, extrusión, extruir, revolución, barrido, perfil, arco, booleana, booleanas, cortar, unir, diferencia, unión, manija, manijas, plano de trabajo, croquis, nueva familia, conector, conectores, puerto, puertos, conector de tubería, conector de ducto, desagüe, suministro de agua
from: 1ab31c10
---

## Abrir el editor

Abra una familia (en el grupo **Familias** del explorador de proyectos, o {{ui:Build}} › {{ui:Families…}}) y haga clic en {{ui:Edit the family}}. Para empezar desde cero, haga clic en {{ui:New family}}: póngale un nombre, indique qué es (una puerta, una ventana, un mueble, un accesorio u otra cosa) y, para una puerta o ventana, de qué inicio provienen su símbolo de planta y su manija. El editor se abre con una familia que tiene algunos parámetros y un sólido.

Editar una familia de inicio mantiene sus cambios solo en este modelo. Los demás modelos conservan el inicio tal como es.

Nada en el modelo cambia hasta que haga clic en {{ui:Save the family}}. El editor tiene su propio deshacer y rehacer (los botones de flecha junto al nombre, o {{key:Mod+Z}} y {{key:Mod+Y}}); guardar es un solo paso del deshacer del modelo.

## Parámetros

La pestaña {{ui:Parameters}} enumera los parámetros de la familia: un nombre, un tipo y un valor predeterminado. Los tipos son: **Longitud** (milímetros), **Ángulo** (grados), **Número**, **Número entero**, **Sí / No**, **Pluma** (1–16), y tres que contienen palabras en lugar de números: **Texto**, **Material** (uno de los materiales del proyecto) y **Relleno** (un relleno de planta). Las palabras no se usan en fórmulas; colorean un sólido (su **Material**), rellenan una parte de un símbolo o se imprimen como `{Nombre}` dentro del texto de un símbolo. La casilla **Por elemento** convierte un parámetro en algo que cada elemento colocado define por sí mismo, en lugar de su tamaño.

- Una **fórmula** hace que un parámetro siga a otros, por ejemplo `Width / 30` o `if(Width > 1200, 2, 1)`. Las longitudes en fórmulas son milímetros, o escriba una unidad: `3'`, `6in`, `50cm`.
- Renombrar un parámetro lo renombra en cada fórmula y campo que lo usa. Un parámetro que todavía está en uso no se puede eliminar.
- El **Material** de un sólido toma el color de un material del proyecto (o de un parámetro Material), **Se muestra en** lo oculta en niveles de detalle más gruesos, y **Repetir** crea copias: una cantidad (un número o un entero, de 1 a 200) y el paso entre ellas en x, y y z. Un sólido repetido es una fila de tablas, barras o perforaciones; si se usa en un corte, las copias se cortan juntas.
- Una familia de puerta o ventana también recibe dos nombres de su muro: `WallThickness` y `Face` (1 o −1, el lado hacia el que abre la puerta).

## Sólidos

La pestaña {{ui:Solids}} enumera los sólidos. Agregue una caja, una extrusión, una revolución o un barrido:

| Sólido | Lo que se define |
|---|---|
| Caja | sus dos esquinas: x0 a x1, y0 a y1, z0 a z1 |
| Extrusión | un perfil en un plano de trabajo (planta, alzado o lateral), dónde está el plano y una profundidad |
| Revolución | un perfil, un eje sobre el plano y un ángulo de hasta 360° |
| Barrido | una trayectoria de puntos y un radio (una varilla o un riel) |

Cada número puede ser un valor escrito o una expresión de los parámetros. Cada sólido tiene un color y **Visible cuando**: déjelo vacío para que se muestre siempre, o escriba un parámetro Sí / No (o una comparación como `Shelves >= 3`) para mostrarlo solo entonces. Eso es un parámetro de visibilidad.

### Dibujar un perfil

El perfil de una extrusión o una revolución se dibuja en su plano de trabajo bajo la vista previa:

- Haga clic en el papel para agregar un punto después del elegido.
- Arrastre un punto para moverlo. Los puntos se ajustan a la rejilla; mantenga pulsado {{key:Shift}} para colocarlos libremente.
- Haga clic en un cuadrito pequeño de un segmento para agregar un punto allí. {{key:Shift}}+clic en él convierte ese segmento en un arco (haga clic de nuevo para el otro sentido, y luego para recto).
- Haga doble clic en un punto para eliminarlo.

Los puntos huecos se definen por parámetros: cámbielos en la tabla, no arrastrándolos.

## Booleanas

La pestaña {{ui:Booleans}} corta el segundo sólido del primero, o los une. El resultado de una booleana puede volver a cortarse o unirse. Un sólido usado en una booleana se dibuja solo como parte de ella.

Cuando el segundo sólido queda oculto por su parámetro Sí / No, el primero se conserva tal cual; cuando el primero queda oculto, el resultado queda oculto.

## Símbolo en planta

La pestaña {{ui:Plan symbol}} dibuja lo que la planta muestra para esta familia en lugar del corte de sus sólidos: líneas, rectángulos, círculos, arcos, polígonos y texto, en los ejes propios de la familia. Cada parte tiene una **pluma** (1–16, una expresión o un parámetro Pluma), un **relleno** (ninguno, sólido, diagonal, cruzado, concreto, aislamiento, tierra, o un parámetro Relleno), una expresión de **se muestra por**, un **rango de corte** en milímetros sobre su base (se dibuja con peso completo cuando el corte de la planta está dentro de él, delgada debajo y punteada arriba: un gabinete por encima del corte se muestra punteado), un nivel de detalle y una repetición. El texto puede nombrar parámetros como `{Nombre}`. **La planta muestra: El corte de los sólidos** hace que la planta siga cortando los sólidos mientras el símbolo permanece en la familia. Otros programas leen el símbolo como la huella de la familia (líneas y figuras; el texto se queda en BimCraft).

## Familias dentro

La pestaña {{ui:Families inside}} pone otra familia dentro de esta: una pata en una mesa, una manija en una puerta. Elija la familia, luego dónde va (x, y, z), cuánto se gira (solo cuartos de vuelta: 0, 90, 180, 270), cuándo se muestra y los valores que recibe, uno por línea, como `Height = Height - 40`. Al guardar la familia interior, esta se vuelve a dibujar; una familia que está contenida en otra no se puede eliminar; una familia no puede contenerse a sí misma, ni siquiera a través de otra, y el anidamiento se detiene en cuatro niveles.

## Puntos de control

Un punto de control es un punto o una arista que se arrastra para cambiar un parámetro. En la pestaña {{ui:Hotspots}} agregue uno, elija el eje a lo largo del cual se arrastra y el parámetro numérico que cambia, y escriba su posición con las mismas expresiones que los sólidos. En la vista previa, elija **Hotspots** bajo las manijas para arrastrarlos. En un elemento colocado en la planta (elíjalo con {{ui:Select}}) los puntos de control x e y se muestran como agarraderas: arrastre una y el elemento toma el tamaño que pone el punto de control allí, a través de las fórmulas intermedias; un Deshacer lo devuelve. Un punto de control no puede cambiar un parámetro calculado por fórmula, un Sí / No ni una palabra.

En la vista 3D, los mismos puntos de control se muestran como agarraderas sobre el elemento elegido, y los de arriba y abajo (eje z) también aparecen allí, algo que la planta no puede dibujar. Elija el elemento, arrastre una agarradera a lo largo de su eje y suelte: el elemento toma el tamaño que pone el punto de control allí, como un solo paso de deshacer. Las agarraderas se ocultan mientras la caja de sección está activa, ya que usa las mismas.

## Conectores

Las familias colocadas en un piso (muebles, accesorios y otras) tienen una pestaña {{ui:Connectors}}: los puntos donde una tubería o un ducto se une al elemento, como la llave y el desagüe de un lavabo. Haga clic en {{ui:Add a connector}} y defina:

- **Tipo**: tubería o ducto, y su **Sistema** (agua fría, desagüe sanitario, aire de suministro…).
- **x**, **y** y **z**: dónde está, en los ejes propios de la familia. Como los números de un sólido, cada uno puede ser un número o una fórmula de los parámetros, así que el conector se mueve con el tamaño.
- **Salida**: la dirección en que una tubería o un ducto sale de él, a lo largo de uno de los ejes de la familia (un desagüe bajo un lavabo va **Abajo**).
- **Tamaño (mm)**: el tamaño nominal de la tubería (DN) o el diámetro del ducto redondo.
- **Flujo**: **Entrada** para un conector que recibe agua (una llave), **Salida** para uno que desagua.

La vista previa dibuja cada conector como un anillo con una flecha de salida. Las puertas y ventanas no tienen conectores.

Para un accesorio sanitario, elija cuál es en **Aparato de plomería** (inodoro, lavabo, fregadero de cocina, regadera, lavadero). Los accesorios de inicio ya lo indican.

Cada elemento colocado desde la familia recibe sus conectores como puertos en el archivo IFC, y se vuelven a crear cuando el elemento cambia de tamaño o al guardar la familia. Los programas que leen sistemas IFC ven dónde pertenece cada tubería o ducto.

## La vista previa y sus manijas

La vista previa es la familia escrita como IFC, por el mismo código que la guarda en el modelo, y dibujada de vuelta. Lo que ve es lo que reciben otros programas. Debajo, **Tamaño mostrado** define los valores de los parámetros que usa la vista previa.

Las **manijas** son puntos sobre la vista previa: **El tamaño** muestra una manija para Ancho, Profundidad y Alto; **El sólido elegido** muestra una en cada cara del sólido que eligió. Arrastre una manija:

- en una cara definida por un parámetro, cambia el tamaño mostrado (las fórmulas de la familia se conservan);
- en una cara definida por un número escrito, cambia ese número.

## Guardar

{{ui:Save the family}} revisa la familia, luego vuelve a dibujar cada uno de sus tamaños y vuelve a crear cada uno de sus elementos, como un solo paso que puede deshacer. Si un tamaño no se puede dibujar con el cambio (por ejemplo, un sólido quedaría sin ancho en ese tamaño), no se guarda nada y el editor indica cuál tamaño es.

Si otra persona guardó la misma familia mientras su editor estaba abierto (en una sesión de Live TeamWork, o en otra ventana), {{ui:Save the family}} lo rechaza y lo indica, en lugar de reemplazar el cambio ajeno con el suyo. Cierre el editor, vuelva a abrir la familia para ver el cambio de la otra persona y haga el suyo de nuevo.

:::note
La geometría se guarda como sólidos propios de IFC: extrusiones, revoluciones, discos de barrido y resultados booleanos. Nada se convierte en una lista de triángulos, así que los archivos quedan pequeños y otros programas leen las formas como formas. Los perfiles con arcos se guardan con arcos en IFC4; IFC2X3 no tiene segmentos de arco en un perfil, así que ahí los arcos se guardan como piezas rectas cortas.
:::

Vea también [Familias y sus tamaños](topic:families).
