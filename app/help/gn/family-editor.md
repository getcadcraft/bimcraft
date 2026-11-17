---
title: Editar una familia
summary: Cambie los parámetros, fórmulas y sólidos de una familia, muestre partes según un parámetro Sí / No, corte y una sólidos, dele conectores para caños y conductos, y vea el resultado dibujado desde el IFC que se va a guardar.
keywords: editor de familias, editar familia, parámetro, parámetros, fórmula, fórmulas, visibilidad, sí no, sólido, sólidos, caja, extrusión, extruir, revolución, barrido, perfil, arco, booleano, booleanos, cortar, unir, diferencia, unión, manija, manijas, plano de trabajo, boceto, nueva familia, conector, conectores, puerto, puertos, conector de caño, conector de conducto, desagüe, suministro de agua
from: 1ab31c10
---

## Abrir el editor

Abra una familia (el grupo **Familias** del explorador de proyecto, o {{ui:Build}} › {{ui:Families…}}) y haga clic en {{ui:Edit the family}}. Para empezar desde cero, haga clic en {{ui:New family}}: póngale un nombre, indique qué es (una puerta, una ventana, un mueble, un artefacto u otra cosa) y, para una puerta o ventana, de qué inicial salen su símbolo en planta y su manija. El editor se abre con una familia que tiene algunos parámetros y un sólido.

Editar una familia inicial mantiene sus cambios solo en este modelo. Los demás modelos conservan la inicial tal como está.

Nada en el modelo cambia hasta que haga clic en {{ui:Save the family}}. El editor tiene su propio deshacer y rehacer (los botones de flecha junto al nombre, o {{key:Mod+Z}} y {{key:Mod+Y}}); guardar es un solo paso en el deshacer del modelo.

## Parámetros

La pestaña {{ui:Parameters}} lista los parámetros de la familia: un nombre, un tipo y un valor por defecto. Los tipos: **Longitud** (milímetros), **Ángulo** (grados), **Número**, **Número entero**, **Sí / No**, **Pluma** (1–16), y tres que guardan palabras en lugar de números: **Texto**, **Material** (uno de los materiales del proyecto) y **Relleno** (un relleno de plano). Las palabras no se usan en fórmulas; colorean un sólido (su **Material**), rellenan una parte de símbolo o se imprimen como `{Nombre}` dentro del texto de un símbolo. La casilla **Por elemento** hace que un parámetro lo defina cada elemento colocado por sí mismo, en lugar de su medida.

- Una **fórmula** hace que un parámetro siga a otros, por ejemplo `Width / 30` o `if(Width > 1200, 2, 1)`. Las longitudes en fórmulas están en milímetros, o escriba una unidad: `3'`, `6in`, `50cm`.
- Renombrar un parámetro lo renombra en cada fórmula y campo que lo use. Un parámetro en uso no se puede quitar.
- El **Material** de un sólido toma el color de un material del proyecto (o de un parámetro Material), **Se muestra en** lo oculta en niveles de detalle más gruesos, y **Repetir** hace copias: una cantidad (un número o un entero, de 1 a 200) y el paso entre ellas en x, y y z. Un sólido repetido es una fila de tablas, barras o agujeros; usado en un corte, las copias se cortan juntas.
- Una familia de puerta o ventana también recibe dos nombres de su pared: `WallThickness` y `Face` (1 o −1, el lado hacia el que abre la puerta).

## Sólidos

La pestaña {{ui:Solids}} lista los sólidos. Agregue una caja, una extrusión, una revolución o un barrido:

| Sólido | Qué configura |
|---|---|
| Caja | sus dos esquinas: x0 a x1, y0 a y1, z0 a z1 |
| Extrusión | un perfil en un plano de trabajo (planta, frente o lateral), dónde está el plano y una profundidad |
| Revolución | un perfil, un eje sobre el plano y un ángulo de hasta 360° |
| Barrido | una trayectoria de puntos y un radio (una varilla o un riel) |

Cada número puede ser un número escrito o una expresión de los parámetros. Cada sólido tiene un color y **Se muestra cuando**: déjelo vacío para mostrarlo siempre, o nombre un parámetro Sí / No (o escriba una comparación como `Shelves >= 3`) para mostrarlo solo entonces. Eso es un parámetro de visibilidad.

### Dibujar un perfil

El perfil de una extrusión o de una revolución se dibuja en su plano de trabajo, debajo de la vista previa:

- Haga clic en el papel para agregar un punto después del elegido.
- Arrastre un punto para moverlo. Los puntos se ajustan a la cuadrícula; mantenga presionado {{key:Shift}} para colocarlos libremente.
- Haga clic en un cuadradito sobre un segmento para agregar un punto allí. {{key:Shift}}+clic sobre él convierte ese segmento en un arco (haga clic de nuevo para el otro lado, y luego recto).
- Haga doble clic en un punto para quitarlo.

Los puntos huecos se fijan por parámetros: cámbielos en la tabla, no arrastrándolos.

## Booleanos

La pestaña {{ui:Booleans}} corta el segundo sólido del primero, o los une. El resultado de un booleano se puede cortar o unir de nuevo. Un sólido usado en un booleano se dibuja solo como parte de él.

Cuando el segundo sólido está oculto por su parámetro Sí / No, el primero se mantiene como está; cuando el primero está oculto, el resultado queda oculto.

## Símbolo en planta

La pestaña {{ui:Plan symbol}} dibuja lo que el plano muestra de esta familia en lugar del corte de sus sólidos: líneas, rectángulos, círculos, arcos, polígonos y texto, en los ejes propios de la familia. Cada parte tiene una **pluma** (1–16, una expresión o un parámetro Pluma), un **relleno** (ninguno, sólido, diagonal, cruzado, hormigón, aislación, tierra, o un parámetro Relleno), una expresión **mostrado por**, un **rango de corte** en milímetros sobre su base (una parte se dibuja con trazo pleno cuando el corte del plano está dentro de ella, fina por debajo y de trazos por encima: un mueble alto sobre el corte se muestra de trazos), un nivel de detalle y una repetición. El texto puede nombrar parámetros como `{Nombre}`. **El plano muestra: El corte de los sólidos** mantiene el plano cortando los sólidos mientras el símbolo queda en la familia. Otros programas leen el símbolo como la huella de la familia (líneas y formas; el texto queda en BimCraft).

## Familias adentro

La pestaña {{ui:Families inside}} pone otra familia dentro de esta: una pata en una mesa, una manija en una puerta. Elija la familia, luego dónde va (x, y, z), cuánto está girada (solo cuartos de vuelta: 0, 90, 180, 270), cuándo se muestra y los valores que recibe, uno por línea como `Height = Height - 40`. Al guardar la familia interna, esta se vuelve a dibujar; una familia que está contenida en otra no se puede eliminar; una familia no puede contenerse a sí misma, ni siquiera a través de otra, y el anidamiento se detiene en cuatro niveles.

## Puntos activos

Un punto activo es un punto o un borde que usted arrastra para cambiar un parámetro. En la pestaña {{ui:Hotspots}} agregue uno, elija el eje a lo largo del que arrastra y el parámetro numérico que cambia, y escriba su posición con las mismas expresiones que los sólidos. En la vista previa, elija **Puntos activos** debajo de las manijas para arrastrarlos. En un elemento colocado en el plano (elíjalo con {{ui:Select}}) los puntos activos x e y aparecen como agarraderas: arrastre una y el elemento toma la medida que pone el punto allí, a través de las fórmulas intermedias; un Deshacer lo devuelve. Un punto activo no puede cambiar un parámetro impulsado, un Sí / No ni una palabra.

En la vista 3D los mismos puntos activos aparecen como agarraderas sobre el elemento elegido, y los de arriba y abajo (eje z) también se ven ahí, algo que el plano no puede dibujar. Elija el elemento, arrastre una agarradera a lo largo de su eje y suelte: el elemento toma la medida que pone el punto allí, como un solo paso para deshacer. Las agarraderas se ocultan mientras la caja de sección está activa, porque usa las mismas.

## Conectores

Las familias colocadas sobre un piso (muebles, artefactos y otras) tienen una pestaña {{ui:Connectors}}: los puntos donde un caño o un conducto se une al elemento, como en la canilla y el desagüe de un lavatorio. Haga clic en {{ui:Add a connector}} y configure:

- **Tipo**: caño o conducto, y su **Sistema** (agua fría, desagüe sanitario, aire de impulsión…).
- **x**, **y** y **z**: dónde está, en los ejes propios de la familia. Como los números de un sólido, cada uno puede ser un número o una fórmula de los parámetros, así el conector se mueve con la medida.
- **Salida**: la dirección en que sale el caño o el conducto, a lo largo de uno de los ejes de la familia (un desagüe debajo de un lavatorio sale hacia **Abajo**).
- **Medida (mm)**: el tamaño nominal del caño (DN) o el diámetro del conducto redondo.
- **Flujo**: **Entrada** para un conector que recibe (una canilla), **Salida** para uno que desagua.

La vista previa dibuja cada conector como un anillo con una flecha que indica la salida. Las puertas y ventanas no tienen conectores.

Para un artefacto sanitario, elija cuál es bajo **Artefacto sanitario** (inodoro, lavatorio, pileta de cocina, ducha, pileta de lavandería). Los artefactos iniciales ya lo indican.

Cada elemento colocado desde la familia recibe sus conectores como puertos en el archivo IFC, y se vuelven a generar cuando el elemento cambia de tamaño o cuando se guarda la familia. Los programas que leen sistemas IFC ven a qué caño o conducto pertenece cada uno.

## La vista previa y sus manijas

La vista previa es la familia escrita como IFC, con el mismo código que la guarda en el modelo, y vuelta a dibujar. Lo que ve es lo que reciben los otros programas. Debajo, **Medida mostrada** fija los valores de los parámetros que usa la vista previa.

Las **manijas** son puntos sobre la vista previa: **La medida** muestra una manija para Ancho, Profundidad y Alto; **El sólido elegido** muestra una en cada cara del sólido que usted eligió. Arrastre una manija:

- en una cara fijada por un parámetro, cambia la medida mostrada (las fórmulas de la familia se mantienen);
- en una cara fijada por un número escrito, cambia ese número.

## Guardar

{{ui:Save the family}} verifica la familia, luego vuelve a dibujar cada una de sus medidas y vuelve a generar cada uno de sus elementos, como un solo paso que puede deshacer. Si una medida no se puede dibujar con el cambio (por ejemplo, un sólido quedaría sin ancho en esa medida), no se guarda nada y el editor indica cuál medida es.

Si otra persona guardó la misma familia mientras su editor estaba abierto (en una sesión de Live TeamWork, o en otra ventana), {{ui:Save the family}} lo rechaza y lo informa, en lugar de reemplazar su cambio por el suyo. Cierre el editor, abra la familia de nuevo para ver el cambio de la otra persona, y vuelva a hacer el suyo.

:::note
La geometría se guarda como los sólidos propios de IFC: extrusiones, revoluciones, discos barridos y resultados booleanos. No se convierte en una lista de triángulos, así los archivos quedan chicos y otros programas pueden leer las formas como formas. Los perfiles con arcos se guardan con arcos en IFC4; IFC2X3 no tiene segmentos de arco en un perfil, así que allí los arcos se guardan como tramos rectos cortos.
:::

Vea también [Familias y sus medidas](topic:families).
