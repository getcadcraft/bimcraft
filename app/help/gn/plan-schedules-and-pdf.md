---
title: Planillas, cotas y un PDF del plano
summary: Planillas de puertas, ventanas, muros y ambientes que cambian mientras dibujás, cotas en el plano, y el plano de un nivel guardado como PDF a una escala estándar.
keywords: planilla, planilla de puertas, planilla de ventanas, planilla de muros, planilla de ambientes, cantidades, cómputo, superficie, csv, planilla de cálculo, cotas, cota, imprimir, pdf, graficar, escala, 1/4", 1:50, hoja
from: d97cd16e
---

## Mba'e pe ojapóta

Mirá cuánto suma el edificio que dibujaste, mientras lo dibujás: cuántas puertas y ventanas hay de cada tamaño, cuánto muro de cada tipo, qué tan grande es cada ambiente. Poné cotas en el plano y guardalo como PDF para imprimir o enviar.

## Planillas

Con {{ui:Draw}} activado, **Schedules** en el panel izquierdo muestra una tabla a la vez:

- **Doors** y **Windows**: cada una por su marca (D1, D2 … y W1 …, según la vas colocando), su tipo, ancho, altura (y antepecho), nivel y el muro en que está.
- **Walls by type**: para cada tipo de muro, cuántos muros hay, su espesor, su longitud total y su superficie lateral como **Gross area**, **Deductions** y **Net area**, con un total.
- **Rooms**: número, nombre, nivel, superficie y perímetro, con la superficie total.
- **Floors**: cada piso con su nivel, tipo y espesor, y su superficie bruta, deducciones y superficie neta.
- **Finishes**: cada capa de terminación de los tipos de muro (por material y lado del muro) y los cielorrasos, con la cantidad de caras y el bruto, deducciones y neto.
- **Wall types: takeoff data**: lo que se cargó una vez en cada tipo de muro (unidad, mortero, rendimiento), con la cantidad de muros, su longitud y superficie neta, y el rendimiento por la cantidad medida. Ver [Conjuntos de muros](topic:wall-assemblies).

- **Finishes by room**, **Finishes by wall**, **Finishes by zone** y **Finish quantities**: qué cubre cada ambiente, con superficies, cantidades de baldosas incluidos los cortes y volúmenes de base. Ver [Terminaciones de ambientes y planillas de terminaciones](topic:room-finishes).
- Tus propias **set-ups**: una planilla que agrupaste, totalizaste y guardaste con un nombre. Ver [Diseñar, guardar y exportar una planilla](topic:schedule-layouts).

Las tablas cambian con cada edición. Hacé clic en una fila, o en una sola cifra, para elegir los elementos de los que proviene. **Download CSV** guarda la tabla para abrirla en una planilla de cálculo; **Descargar Excel** y **Copiar para Google Sheets** están debajo. **Room finishes** y **Specification** ([Escribir la especificación desde el modelo](topic:specification)) se abren desde el mismo lugar.

## Superficie y volumen de cada capa

Elegí **Layers: area and volume** en la lista de Schedules. Tiene una fila por cada capa de cada tipo de muro, piso, techo y cielorraso en uso: el elemento, el tipo y su LOD, la capa (contada desde el lado exterior de un muro, o desde arriba de un piso, techo o cielorraso), su material y función, su espesor, cuántos elementos hay, la **net area** (superficie neta) y el **volume** (volumen).

- La superficie es la superficie neta de los elementos de ese tipo, medida exactamente como en Walls by type, Floors y Finishes, según el método de medición del proyecto. Un techo se mide sobre la pendiente; ningún método de medición tiene una regla para techos.
- El volumen es esa superficie por el espesor propio de la capa.
- Un piso, techo o cielorraso sin tipo es una sola fila: una capa de su propio espesor.
- Una cámara de aire se lista con su superficie y se deja afuera del volumen total. Una membrana tiene superficie y no tiene volumen.

Hacé clic en una fila para elegir sus elementos. **Download CSV** guarda la tabla.

## Cómo se miden las superficies

Cada superficie son tres números que suman: el bruto menos las deducciones es el neto. La regla está escrita sobre cada una de estas tablas, y es una sola regla: las planillas, las cantidades guardadas en el archivo IFC y el cómputo enviado a TakeoffCraft usan todas la misma.

- **Un muro**: el bruto es una cara del muro, su longitud sobre el eje por su altura (la cara real para un muro con parte superior o inferior con forma). Se deduce cada puerta, ventana y otra abertura, ancho por altura, una vez cada una.
- **Un piso o un cielorraso**: el bruto es la superficie dentro de su contorno. Se deduce una vez cada abertura y recorte que haya dentro.
- **Una terminación de muro**: cada capa de terminación del tipo de muro cubre una cara del muro, medida como el muro, con las mismas aberturas deducidas. Una terminación es una capa del muro: se lista en Finishes y no se suma a la superficie del muro, así que un muro con una puerta nunca se cuenta dos veces.

Ese es el **CadCraft default**: se deduce cada abertura, sea cual sea su tamaño; las longitudes de muro son sobre el eje; los rebajes no se miden. Es lo que usa todo proyecto hasta que elijas otro método.

## Elegir un método de medición

Encima de la planilla, **Measurement method** lista los métodos que vienen con BimCraft, y **Load a method file** carga el de tu oficina. La elección se guarda en el archivo IFC, como un paso de deshacer, y tres cosas la siguen al mismo tiempo: las planillas, las cantidades netas guardadas en el archivo y el cómputo enviado a TakeoffCraft. La regla encima de cada tabla empieza entonces con el método, su fuente, la fecha en que se leyó la fuente y las palabras **Unchecked by a quantity surveyor**.

Un método es un pequeño archivo de datos, no código de programa. Para cada cantidad indica:

- **la menor abertura deducida**: por ejemplo, una abertura de 0,5 m² o menos queda en la superficie del muro;
- **cómo se miden las uniones de muros**: sobre el eje; o con un muro que termina contra otro, medido hasta la cara de ese muro; o con cada extremo de muro que se encuentra con otro muro, medido hasta la cara cercana;
- **si se miden los rebajes** de una terminación (los retornos de la terminación dentro de las aberturas), como superficie o, cuando son poco profundos, como longitud. La profundidad de un rebaje se toma como la mitad del espesor del muro;
- **qué dice sobre la mampostería**: cómo se mide, y cualquier desperdicio o margen de mortero que indique.

Los métodos que vienen con BimCraft:

| Método | Muros: menor abertura deducida | Terminaciones de muro | Cielorrasos | Mampostería |
|---|---|---|---|---|
| CadCraft default | cada abertura | cada abertura | cada recorte | sin márgenes |
| RICS NRM 2 (Reino Unido), 2.ª edición 2021 | 0,5 m² o menos queda | 1 m² o menos queda | 1 m² o menos queda | por superficie; sin porcentajes indicados |
| AAQS Standard Method for Africa 2015 | 0,5 m² o menos queda | 0,5 m² o menos queda | 0,5 m² o menos queda | por superficie; medida neta, 0 % de desperdicio |
| IS 1200 (India), 1976, mampostería de ladrillo | 0,1 m² o menos queda | predeterminado (ver abajo) | predeterminado | por volumen |
| BIA Technical Note 10 (Estados Unidos), 2009 | cada abertura | predeterminado | predeterminado | 5 % de desperdicio en unidades, 15 % en mortero |

Leé estos límites antes de confiar en un método:

- **Ningún topógrafo de cantidades revisó ninguno.** Cada uno se hizo leyendo la fuente nombrada y registrando sus números con la cláusula de la que salen. Si sos topógrafo de cantidades y podés revisar uno, a los creadores de la aplicación les gustaría saberlo.
- Cuando una regla no se pudo leer en la fuente, el método dice **not confirmed** para ella y se usa el CadCraft default. Ningún método que viene con BimCraft tiene una regla confirmada para uniones de muros, rebajes o pisos, así que esas se miden de la forma predeterminada con todos ellos.
- IS 1200 deduce aberturas en el revoque en tres bandas. Un archivo de método todavía no puede tener bandas, así que las terminaciones de muro usan el predeterminado con ese método, y la regla lo dice.
- El South African Standard System of Measuring Building Work **no** está entre ellos: su texto no pudo leerse. El método AAQS para África dice que se basó en la edición de 1991 de ese sistema, pero es un documento distinto.
- BIA Technical Note 10 es una nota de presupuesto de la industria, no un método estándar de medición.
- Una abertura que tiene exactamente el tamaño mínimo sigue las propias palabras del método ("not exceeding", "less than"). Los tamaños dentro de 2 partes en 10 000 de él cuentan como exactamente él.
- Con un método, la superficie lateral neta de un muro y la superficie neta de un piso o cielorraso del archivo siguen el método, y el conjunto de cantidades lo nombra. Las superficies brutas y los volúmenes del archivo quedan como se dibujaron.

**Notes on this method**, debajo del selector, dice qué deja abierto cada fuente. **Open the source** abre el documento.

### El método propio de tu oficina

Un archivo de método es JSON con el formato `cadcraft-measurement-method`. Cada valor en él nombra la cláusula de la que viene; un valor sin cláusula se rechaza. El archivo se verifica al cargarlo, se nombra el campo equivocado, y no se usa nada de un archivo que no pasa. Una vez elegido, el archivo se guarda dentro del proyecto, así el proyecto se abre igual en otra computadora. Su id es un nombre simple propio (puede no ser el id de un método que viene con la aplicación).

## Ladrillos, bloques y mortero

**Wall types: takeoff data** cuenta las unidades y el mortero de cada tipo de muro cuya unidad tiene longitud y altura (ver [Dar a un tipo sus datos de cómputo](topic:wall-assemblies#give-a-type-its-takeoff-data)). Estas son las fórmulas, tal como se calculan:

- **Unidades por superficie de una hoja** = 1 / ((longitud de la unidad + junta) × (altura de la unidad + junta)). Un ladrillo de 215 × 65 mm con una junta de 10 mm: 1 / (225 × 75 mm) = 59,26 por m².
- **Anchos de unidad a lo ancho de una hoja** = (espesor de hoja + junta) / (ancho de la unidad + junta), redondeado a un número entero, como mínimo 1. Una hoja de 102,5 mm de ladrillos de 102,5 mm da 1; un muro de 215 mm de los mismos ladrillos da 2.
- **Unidades** = unidades por superficie × anchos de unidad a lo ancho × la superficie neta de la cara del muro, sumadas en todas las hojas de mampostería del tipo.
- **Unidades a pedir** = unidades × (1 + desperdicio % / 100), redondeado hacia arriba a una unidad entera. El desperdicio es el que se cargó en el tipo; si no se cargó ninguno, el del método, si indica uno; si no, 0 %.
- **Mortero** = superficie neta × espesor de hoja, menos el volumen de las unidades (unidades × longitud × altura × ancho), más el porcentaje extra cargado en el tipo por rebajes o perforaciones, más el margen del método si lo indica. Necesita el ancho de la unidad.

Qué se supone: cada hoja de mampostería de un tipo se construye con la única unidad del tipo; una hoja más gruesa que un ancho de unidad se cuenta como esa cantidad de anchos de unidad, cada uno como una hoja colocada a lo largo, así que las unidades cortadas, los cierres y las formas especiales no se cuentan aparte; cuando ninguna capa está marcada como construida con la unidad, se toman las capas del núcleo como hojas, y la nota encima de la tabla lo dice. **Amount** es el rendimiento por lo que se mide el rendimiento, que ahora también puede ser una unidad a pedir, 1000 unidades a pedir o un m³ de mortero.

Las marcas son la etiqueta IFC de los elementos: cambiá una en **Properties** (Tag) y la planilla la sigue. Para todo modelo IFC, esté dibujado o no, [Sumar cantidades, listar elementos y planillar espacios](topic:quantity-totals) suma cualquier propiedad.

## Cotas

El plano muestra la longitud de cada muro dibujado a lo largo de su cara exterior (un muro interior: a lo largo de una cara) y, para un muro con puertas o ventanas, una cadena desde las esquinas hasta cada abertura. {{ui:Dimensions}} en la barra del modelo las oculta y las vuelve a mostrar.

## Guardar el plano como PDF

1. Mostrá el nivel que querés y elegí las unidades en el panel **Levels**.
2. Hacé clic en {{ui:Print}} en la barra del modelo.
3. BimCraft guarda "<archivo> — <nivel>.pdf": el plano en blanco y negro a la mayor escala estándar que entra en la página (1/4" = 1'-0", 1/8" = 1'-0" … en Letter en pies y pulgadas; 1:50, 1:100 … en A4 en milímetros), con los muros rellenos, puertas, ventanas, nombres y superficies de ambientes, cotas, y una franja de título con el nivel, el archivo, la altura de corte, la fecha y la escala.

El PDF se dibuja como líneas y texto, así que se ve nítido a cualquier zoom y su texto se puede buscar.

## Para tener en cuenta

- Las planillas listan lo que hicieron las herramientas de dibujo. Las puertas y ventanas de otro programa se muestran en Quantity totals en su lugar.
- Para cotizar el trabajo, enviá las cantidades a TakeoffCraft: ver [Cantidades a TakeoffCraft](topic:takeoff). La descarga CSV queda para una planilla de cálculo.
