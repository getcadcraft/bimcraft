---
title: Tablas, cotas y un PDF del plano
summary: Tablas de puertas, ventanas, muros y locales que cambian mientras dibuja, cotas en el plano y el plano de un nivel guardado como PDF a una escala estándar.
keywords: tabla, tabla de puertas, tabla de ventanas, tabla de muros, tabla de locales, cantidades, cuantificación, área, csv, hoja de cálculo, cotas, cota, imprimir, pdf, trazar, escala, 1/4", 1:50, hoja
from: d97cd16e
---

## Qué hará

Vea lo que suma el edificio que dibujó, mientras lo dibuja: cuántas puertas y ventanas de cada tamaño, cuánto muro de cada tipo, qué tan grande es cada local. Ponga cotas en el plano y guárdelo como PDF para imprimir o enviar.

## Tablas

Con {{ui:Dibujo}} activado, **Tablas** en el panel izquierdo muestra una tabla a la vez:

- **Puertas** y **Ventanas**: cada una por su marca (D1, D2… y W1…, según las coloca), su tipo, ancho, alto (y antepecho), nivel y el muro en que está.
- **Muros por tipo**: para cada tipo de muro, cuántos muros hay, su espesor, su longitud total y su área lateral como **Área bruta**, **Deducciones** y **Área neta**, con un total.
- **Locales**: número, nombre, nivel, área y perímetro, con el área total.
- **Pisos**: cada piso con su nivel, tipo y espesor, y su área bruta, deducciones y área neta.
- **Acabados**: cada capa de acabado de los tipos de muro (por material y lado del muro) y los techos, con el número de caras, y bruta, deducciones y neta.
- **Tipos de muro: datos de cuantificación**: lo que se capturó una vez en cada tipo de muro (unidad, mortero, tasa), con el número de muros, su longitud y su área neta, y la tasa por la cantidad medida. Vea [Ensambles de muros](topic:wall-assemblies).

- **Acabados por local**, **Acabados por muro**, **Acabados por zona** y **Cantidades de acabados**: qué cubre cada local, con áreas, conteos de azulejos incluidos los cortes, y volúmenes de sustrato. Vea [Acabados de locales y tablas de acabados](topic:room-finishes).
- Sus propias **configuraciones**: una tabla que agrupó, totalizó y guardó con un nombre. Vea [Organizar, guardar y exportar una tabla](topic:schedule-layouts).

Las tablas cambian con cada edición. Haga clic en una fila, o en una cifra, para elegir los elementos de los que proviene. {{ui:Descargar CSV}} guarda la tabla, para abrirla en una hoja de cálculo; {{ui:Descargar Excel}} y **Copiar para Google Sheets** están debajo. **Acabados de locales** y **Especificación** ([Escribir la especificación desde el modelo](topic:specification)) se abren desde el mismo lugar.

## Área y volumen de cada capa

Elija **Capas: área y volumen** en la lista de Tablas. Tiene una fila por cada capa de cada tipo de muro, piso, cubierta y techo en uso: el elemento, el tipo y su LOD, la capa (contada desde el lado exterior de un muro, o desde la parte superior de un piso, cubierta o techo), su material y función, su espesor, cuántos elementos hay, el **área neta** y el **volumen**.

- El área es el área neta de los elementos de ese tipo, medida exactamente como en Muros por tipo, Pisos y Acabados, por el método de medición del proyecto. Una cubierta se mide sobre la pendiente; ningún método de medición tiene una regla para cubiertas.
- El volumen es esa área por el espesor propio de la capa.
- Un piso, cubierta o techo sin tipo es una sola fila: una capa de su propio espesor.
- Una cámara de aire se enumera con su área y se excluye del volumen total. Una membrana tiene área y no volumen.

Haga clic en una fila para elegir sus elementos. {{ui:Descargar CSV}} guarda la tabla.

## Cómo se miden las áreas

Cada área son tres números que suman: la bruta menos las deducciones es la neta. La regla está escrita encima de cada una de estas tablas, y es una sola regla: las tablas, las cantidades guardadas en el archivo IFC y la cuantificación enviada a TakeoffCraft usan todas la misma.

- **Un muro**: la bruta es una cara del muro, su longitud a lo largo del eje por su altura (la cara real, para un muro con parte superior o inferior con forma). Se deduce cada puerta, ventana y otra abertura, ancho por alto, cada abertura una vez.
- **Un piso o un techo**: la bruta es el área dentro de su contorno. Se deduce cada abertura y recorte interior, una vez.
- **Un acabado de muro**: cada capa de acabado del tipo de muro cubre una cara del muro, medida como el muro, con las mismas aberturas deducidas. Un acabado es una capa del muro: se enumera en Acabados y no se suma al área del muro, así que un muro con puerta nunca se cuenta dos veces.

Esto es el **predeterminado de CadCraft**: se deduce cada abertura, sea cual sea su tamaño; las longitudes de muro son a lo largo del eje; los derrames no se miden. Es lo que usa cada proyecto hasta que elija otro método.

## Elegir un método de medición

Encima de la tabla, **Método de medición** lista los métodos que vienen con BimCraft, y **Cargar un archivo de método** toma el de su oficina. La elección se guarda en el archivo IFC, como un paso de deshacer, y tres cosas la siguen a la vez: las tablas, las cantidades netas guardadas en el archivo y la cuantificación enviada a TakeoffCraft. La regla encima de cada tabla comienza entonces con el método, su fuente, la fecha en que se leyó la fuente y las palabras **No verificado por un cuantificador**.

Un método es un pequeño archivo de datos, no código de programa. Para cada cantidad indica:

- **la abertura más pequeña que se deduce**: por ejemplo, una abertura de 0.5 m² o menos se queda en el área del muro;
- **cómo se miden las uniones de muros**: a lo largo del eje; o con un muro que termina contra otro, medido hasta la cara de ese muro; o con cada extremo de muro que llega a otro muro, medido hasta la cara cercana;
- **si se miden los derrames** de un acabado (las vueltas del acabado en las aberturas), como área o, cuando son poco profundos, como longitud. La profundidad de un derrame se toma como la mitad del espesor del muro;
- **qué dice sobre la mampostería**: cómo se mide, y cualquier desperdicio o asignación de mortero que indique.

Los métodos que vienen con BimCraft:

| Método | Muros: abertura más pequeña deducida | Acabados de muros | Techos | Mampostería |
|---|---|---|---|---|
| CadCraft predeterminado | cada abertura | cada abertura | cada recorte | sin asignaciones |
| RICS NRM 2 (Reino Unido), 2.ª edición 2021 | 0.5 m² o menos se queda | 1 m² o menos se queda | 1 m² o menos se queda | por área; sin porcentajes indicados |
| AAQS Standard Method for Africa 2015 | 0.5 m² o menos se queda | 0.5 m² o menos se queda | 0.5 m² o menos se queda | por área; medido neto, 0 % de desperdicio |
| IS 1200 (India), 1976, mampostería | 0.1 m² o menos se queda | predeterminado (véase abajo) | predeterminado | por volumen |
| BIA Technical Note 10 (Estados Unidos), 2009 | cada abertura | predeterminado | predeterminado | 5 % de desperdicio en piezas, 15 % en mortero |

Lea estos límites antes de depender de un método:

- **Ningún cuantificador ha verificado ninguno.** Cada uno se hizo leyendo la fuente citada y registrando sus números con la cláusula de la que provienen. Si usted es cuantificador y puede verificar uno, a los creadores de la aplicación les gustaría saberlo.
- Cuando una regla no pudo leerse en la fuente, el método dice **no confirmada** para ella y se usa el predeterminado de CadCraft. Ningún método que viene con BimCraft tiene una regla confirmada para uniones de muros, derrames o pisos, así que todos esos se miden de la forma predeterminada con cualquiera de ellos.
- IS 1200 deduce aberturas en el yeso en tres bandas. Un archivo de método todavía no puede contener bandas, así que los acabados de muro usan el predeterminado bajo ese método, y la regla lo indica.
- El South African Standard System of Measuring Building Work **no** está entre ellos: su texto no pudo leerse. El método AAQS para África dice que se basó en la edición de 1991 de ese sistema, pero es un documento distinto.
- BIA Technical Note 10 es una nota de estimación de la industria, no un método estándar de medición.
- Una abertura exactamente del tamaño más pequeño sigue las palabras del propio método ("not exceeding", "less than"). Las medidas dentro de 2 partes en 10 000 de ese valor cuentan como exactamente ese valor.
- Bajo un método, el área lateral neta de un muro y el área neta de un piso o techo del archivo siguen al método, y el juego de cantidades lo nombra. Las áreas brutas y los volúmenes del archivo se quedan como se dibujaron.

**Notas sobre este método**, bajo el selector, dice lo que cada fuente deja abierto. **Abrir la fuente** lleva al documento.

### El método propio de su oficina

Un archivo de método es JSON en el formato `cadcraft-measurement-method`. Cada valor indica la cláusula de la que proviene; un valor sin cláusula se rechaza. El archivo se revisa al cargarlo, se nombra el campo incorrecto, y no se usa nada de un archivo que no pasa. Una vez elegido, el archivo se guarda dentro del proyecto, así que el proyecto se abre igual en otra computadora. Su id es un nombre sencillo propio (puede no ser el id de un método que viene con la aplicación).

## Ladrillos, bloques y mortero

**Tipos de muro: datos de cuantificación** cuenta las piezas y el mortero de cada tipo de muro cuya unidad tiene longitud y altura (vea [Dar a un tipo sus datos de cuantificación](topic:wall-assemblies#give-a-type-its-takeoff-data)). Estas son las fórmulas, tal como se calculan:

- **Piezas por área de una hoja** = 1 / ((longitud de pieza + junta) × (altura de pieza + junta)). Un ladrillo de 215 × 65 mm con junta de 10 mm: 1 / (225 × 75 mm) = 59.26 por m².
- **Piezas de ancho a lo ancho de una hoja** = (espesor de hoja + junta) / (ancho de pieza + junta), redondeado a un entero, al menos 1. Una hoja de 102.5 mm de piezas de 102.5 mm es 1; un muro de 215 mm de las mismas piezas es 2.
- **Piezas** = piezas por área × piezas de ancho a lo ancho × el área neta de la cara del muro, sumadas sobre las hojas de mampostería del tipo.
- **Piezas a pedir** = piezas × (1 + desperdicio % / 100), redondeado hacia arriba a una pieza entera. El desperdicio es el capturado en el tipo; sin ninguno capturado, el del método, si indica uno; si no, 0 %.
- **Mortero** = área neta × espesor de hoja, menos el volumen de las piezas (piezas × longitud × altura × ancho), más el porcentaje extra capturado en el tipo para rebajes o perforaciones, más la asignación del método si indica una. Necesita el ancho de pieza.

Se supone: cada hoja de mampostería de un tipo se construye con la única pieza del tipo; una hoja más gruesa que un ancho de pieza se cuenta como tantos anchos de pieza, cada uno como una hoja colocada a lo largo, así que las piezas cortadas, los cierres y las formas especiales no se cuentan aparte; cuando ninguna capa está marcada como construida con la pieza, se toman las capas del núcleo como hojas, y la nota encima de la tabla lo dice. **Cantidad** es la tasa por lo que se mide la tasa, que ahora también puede ser una pieza a pedir, 1000 piezas a pedir o un m³ de mortero.

Las marcas son la etiqueta IFC de los elementos: cambie una en **Propiedades** (Etiqueta) y la tabla la sigue. Para cada modelo IFC, dibujado o no, [Sumar cantidades, enumerar elementos y tabular espacios](topic:quantity-totals) suma cualquier propiedad.

## Cotas

El plano muestra la longitud de cada muro dibujado a lo largo de su cara exterior (un muro interior: a lo largo de una cara) y, para un muro con puertas o ventanas, una cadena desde las esquinas hasta cada abertura. {{ui:Dimensiones}} en la barra del modelo las oculta y las vuelve a mostrar.

## Guardar el plano como PDF

1. Muestre el nivel que quiere y configure las unidades en el panel **Niveles**.
2. Haga clic en {{ui:Imprimir}} en la barra del modelo.
3. BimCraft guarda "<archivo> — <nivel>.pdf": el plano en blanco y negro, a la mayor escala estándar que cabe en la hoja (1/4" = 1'-0", 1/8" = 1'-0"… en Letter en pies y pulgadas; 1:50, 1:100… en A4 en milímetros), con los muros rellenos, puertas, ventanas, nombres de locales y áreas, cotas, y una franja de título con el nivel, el archivo, la altura de corte, la fecha y la escala.

El PDF se dibuja como líneas y texto, así que se ve nítido con cualquier zoom y su texto se puede buscar.

## Conviene saber

- Las tablas enumeran lo que hicieron las herramientas de dibujo. Las puertas y ventanas de otro programa aparecen en su lugar en Totales de cantidades.
- Para cotizar el trabajo, entregue las cantidades a TakeoffCraft: vea [Cantidades a TakeoffCraft](topic:takeoff). La descarga en CSV queda para una hoja de cálculo.
