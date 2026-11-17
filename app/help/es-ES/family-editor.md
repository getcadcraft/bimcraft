---
title: Editar una familia
summary: Cambie los parámetros, fórmulas y sólidos de una familia, muestre partes mediante un parámetro Sí / No, corte y una sólidos, dé conectores para tuberías y conductos, y vea el resultado dibujado a partir del IFC que se guardará.
keywords: editor de familias, editar familia, parámetro, parámetros, fórmula, fórmulas, visibilidad, sí no, sólido, sólidos, caja, extrusión, extruir, revolución, barrido, perfil, arco, booleana, booleanas, cortar, unir, diferencia, unión, asa, asas, plano de trabajo, boceto, nueva familia, conector, conectores, puerto, puertos, conector de tubería, conector de conducto, desagüe, suministro de agua
from: 1ab31c10
---

## Abrir el editor

Abra una familia (en **Familias** del explorador del proyecto, o {{ui:Compilación}} › {{ui:Familias…}}) y haga clic en {{ui:Editar la familia}}. Para empezar desde cero, haga clic en {{ui:Nueva familia}}: póngale un nombre, indique qué es (una puerta, una ventana, un mueble, un accesorio u otra cosa) y, en el caso de una puerta o ventana, de qué familia inicial proceden su símbolo de planta y su tirador. El editor se abre con una familia que tiene algunos parámetros y un sólido.

Editar una familia inicial mantiene sus cambios solo en este modelo. Los demás modelos conservan la inicial tal como es.

Nada del modelo cambia hasta que haga clic en {{ui:Guardar la familia}}. El editor tiene su propio deshacer y rehacer (los botones de flecha junto al nombre, o {{key:Mod+Z}} y {{key:Mod+Y}}); guardar es un solo paso del deshacer del modelo.

## Parámetros

La pestaña {{ui:Parámetros}} enumera los parámetros de la familia: un nombre, un tipo y un valor predeterminado. Los tipos son: **Longitud** (milímetros), **Ángulo** (grados), **Número**, **Número entero**, **Sí / No**, **Pluma** (1–16), y tres que contienen palabras en lugar de números: **Texto**, **Material** (uno de los materiales del proyecto) y **Relleno** (un relleno de planta). Las palabras no se usan en fórmulas; colorean un sólido (su **Material**), rellenan una parte de símbolo, o se imprimen como `{Nombre}` dentro del texto de un símbolo. La casilla **Por elemento** convierte un parámetro en algo que cada elemento colocado define para sí mismo, en lugar de por su tamaño.

- Una **fórmula** hace que un parámetro siga a otros, por ejemplo `Width / 30` o `if(Width > 1200, 2, 1)`. Las longitudes en fórmulas son milímetros, o escriba una unidad: `3'`, `6in`, `50cm`.
- Renombrar un parámetro lo renombra en cada fórmula y campo que lo use. Un parámetro aún en uso no se puede quitar.
- El **Material** de un sólido toma el color de un material del proyecto (o de un parámetro Material), **Se muestra en** lo oculta en niveles de detalle más gruesos, y **Repetir** crea copias: un número (un número o un parámetro entero, de 1 a 200) y el paso entre ellas en x, y y z. Un sólido repetido es una fila de tablas, barras o agujeros; usado en un corte, las copias se cortan juntas.
- Una familia de puerta o ventana también recibe dos nombres de su muro: `WallThickness` y `Face` (1 o −1, el lado hacia el que abre la puerta).

## Sólidos

La pestaña {{ui:Sólidos}} enumera los sólidos. Añada una caja, una extrusión, una revolución o un barrido:

| Sólido | Qué define |
|---|---|
| Caja | sus dos esquinas: x0 a x1, y0 a y1, z0 a z1 |
| Extrusión | un perfil sobre un plano de trabajo (planta, alzado o perfil), dónde está el plano y una profundidad |
| Revolución | un perfil, un eje sobre el plano y un ángulo de hasta 360° |
| Barrido | una trayectoria de puntos y un radio (una varilla o un riel) |

Cada número puede ser un número escrito o una expresión de los parámetros. Cada sólido tiene un color y **Visible cuando**: déjelo vacío para mostrarlo siempre, o nombre un parámetro Sí / No (o escriba una comparación como `Shelves >= 3`) para mostrarlo solo entonces. Es un parámetro de visibilidad.

### Dibujar un perfil

El perfil de una extrusión o de una revolución se dibuja sobre su plano de trabajo, bajo la vista previa:

- Haga clic en el papel para añadir un punto después del seleccionado.
- Arrastre un punto para moverlo. Los puntos se ajustan a la rejilla; mantenga pulsado {{key:Shift}} para colocarlos libremente.
- Haga clic en un cuadradito de un segmento para añadir un punto allí. {{key:Shift}}+clic sobre él convierte ese segmento en un arco (haga clic de nuevo para el otro sentido, y luego recto).
- Haga doble clic en un punto para quitarlo.

Los puntos huecos se definen con parámetros: cámbielos en la tabla, no arrastrándolos.

## Booleanas

La pestaña {{ui:Booleanas}} corta el segundo sólido del primero, o los une. El resultado de una booleana puede volver a cortarse o unirse. Un sólido usado en una booleana se dibuja solo como parte de ella.

Cuando el segundo sólido está oculto por su parámetro Sí / No, el primero se mantiene tal cual; cuando el primero está oculto, el resultado queda oculto.

## Símbolo en planta

La pestaña {{ui:Símbolo en planta}} dibuja lo que muestra la planta para esta familia, en lugar del corte de sus sólidos: líneas, rectángulos, círculos, arcos, polígonos y texto, en los ejes propios de la familia. Cada parte tiene una **pluma** (1–16, una expresión o un parámetro Pluma), un **relleno** (ninguno, sólido, diagonal, cruzado, hormigón, aislamiento, tierra, o un parámetro Relleno), una expresión de **mostrado por**, un **rango de corte** en milímetros sobre su base (se dibuja con peso completo cuando el corte de la planta está dentro, fina por debajo y discontinua por encima: un armario por encima del corte se muestra discontinuo), un nivel de detalle y una repetición. El texto puede nombrar parámetros como `{Nombre}`. **La planta muestra: El corte de los sólidos** mantiene el corte de los sólidos en la planta mientras el símbolo permanece en la familia. Otros programas leen el símbolo como la huella de la familia (líneas y formas; el texto queda en BimCraft).

## Familias interiores

La pestaña {{ui:Familias interiores}} pone otra familia dentro de esta: una pata en una mesa, una asa en una puerta. Elija la familia, luego dónde va (x, y, z), cuánto está girada (solo giros de cuarto: 0, 90, 180, 270), cuándo se muestra, y los valores que recibe, uno por línea, como `Height = Height - 40`. Al guardar la familia interior se vuelve a dibujar esta; una familia que está contenida en otra no se puede borrar; una familia no puede contenerse a sí misma, ni siquiera a través de otra, y el anidamiento se detiene en cuatro niveles.

## Puntos activos

Un punto activo es un punto o un borde que arrastra para cambiar un parámetro. En la pestaña {{ui:Puntos activos}} añada uno, elija el eje a lo largo del que arrastra y el parámetro numérico que cambia, y escriba su posición con las mismas expresiones que los sólidos. En la vista previa, elija **Puntos activos** bajo los tiradores para arrastrarlos. En un elemento colocado en la planta (selecciónelo con {{ui:Seleccionar}}) los puntos activos x e y se muestran como agarres: arrastre uno y el elemento toma el tamaño que pone el punto activo allí, a través de cualquier fórmula entre ellos; un Deshacer lo devuelve. Un punto activo no puede cambiar un parámetro calculado por fórmula, un Sí / No ni una palabra.

En la vista 3D los mismos puntos activos se muestran como agarres sobre el elemento seleccionado, y los de arriba y abajo (eje z) también se muestran allí, lo que la planta no puede dibujar. Seleccione el elemento, arrastre un agarre a lo largo de su eje y suelte: el elemento toma el tamaño que pone el punto activo allí, como un solo paso de deshacer. Los agarres se ocultan mientras la caja de sección está activa, ya que usa los mismos agarres.

## Conectores

Las familias colocadas en una planta (muebles, accesorios y otras) tienen una pestaña {{ui:Conectores}}: los puntos donde una tubería o un conducto se une al elemento, como el grifo y el desagüe de un lavabo. Haga clic en {{ui:Añadir un conector}} y defina:

- **Tipo**: tubería o conducto, y su **Sistema** (agua fría, desagüe sanitario, aire de impulsión…).
- **x**, **y** y **z**: dónde está, en los ejes propios de la familia. Como los números de un sólido, cada uno puede ser un número o una fórmula de los parámetros, así que el conector se mueve con el tamaño.
- **Dirección de salida**: la dirección por la que sale una tubería o un conducto, a lo largo de uno de los ejes de la familia (un desagüe bajo un lavabo sale **Abajo**).
- **Tamaño (mm)**: el tamaño nominal de la tubería (DN) o el diámetro del conducto redondo.
- **Caudal**: **Entrada** para un conector que se alimenta (un grifo), **Salida** para uno que desagua.

La vista previa dibuja cada conector como un anillo con una flecha en la dirección de salida. Las puertas y ventanas no tienen conectores.

Para un aparato de fontanería, elija cuál es en **Aparato de fontanería** (inodoro, lavabo, fregadero de cocina, ducha, lavadero). Las familias iniciales de accesorios ya lo indican.

Cada elemento colocado desde la familia recibe sus conectores como puertos en el archivo IFC, y se rehacen cuando el elemento cambia de tamaño o se guarda la familia. Los programas que leen sistemas IFC ven a qué tubería o conducto pertenece cada uno.

## La vista previa y sus tiradores

La vista previa es la familia escrita como IFC, con el mismo código que la guarda en el modelo, y dibujada de nuevo. Lo que ve es lo que reciben otros programas. Debajo, **Tamaño mostrado** define los valores de parámetro que usa la vista previa.

**Tiradores** son puntos en la vista previa: **El tamaño** muestra un tirador para Width, Depth y Height; **El sólido seleccionado** muestra uno en cada cara del sólido que eligió. Arrastre un tirador:

- en una cara fijada por un parámetro, cambia el tamaño mostrado (se conservan las fórmulas de la familia);
- en una cara fijada por un número escrito, cambia ese número.

## Guardar

{{ui:Guardar la familia}} comprueba la familia, vuelve a dibujar cada uno de sus tamaños y rehace cada uno de sus elementos, en un solo paso que puede deshacer. Si un tamaño no se puede dibujar con el cambio (por ejemplo, un sólido quedaría sin ancho en ese tamaño), no se guarda nada y el editor indica cuál es ese tamaño.

Si otra persona guardó la misma familia mientras su editor estaba abierto (en una sesión de Live TeamWork, o en otra ventana), {{ui:Guardar la familia}} lo rechaza y lo indica, en lugar de sustituir su cambio por el suyo. Cierre el editor, vuelva a abrir la familia para ver su cambio y haga el suyo de nuevo.

:::note
La geometría se guarda como sólidos propios de IFC: extrusiones, revoluciones, discos barridos y resultados booleanos. Nada se convierte en una lista de triángulos, así que los archivos siguen siendo pequeños y otros programas pueden leer las formas como formas. Los perfiles con arcos se guardan con arcos en IFC4; IFC2X3 no tiene segmentos de arco en un perfil, así que allí los arcos se guardan como trozos rectos cortos.
:::

Véase también [Familias y sus tamaños](topic:families).
