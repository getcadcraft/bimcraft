---
title: Tablas, cotas y un PDF del plano
summary: Tablas de puertas, ventanas, muros y espacios que cambian al dibujar, cotas en el plano, y la planta de un nivel guardada como PDF a una escala estándar.
keywords: tabla, tabla de puertas, tabla de ventanas, tabla de muros, tabla de espacios, cantidades, cuantificación, superficie, csv, hoja de cálculo, cotas, cota, imprimir, pdf, trazado, escala, 1/4", 1:50, hoja
from: d97cd16e
---

## Qué hará

Vea lo que suma el edificio que dibujó, mientras lo dibuja: cuántas puertas y ventanas hay de cada tamaño, cuánto muro de cada tipo, qué tamaño tiene cada espacio. Ponga cotas en el plano y guárdelo como PDF para imprimir o enviar.

## Tablas

Con {{ui:Dibujo}} activo, **Tablas** en el panel izquierdo muestra una tabla a la vez:

- **Puertas** y **Ventanas**: cada una por su marca (D1, D2 … y W1 …, dadas al colocarlas), su tipo, ancho, altura (y antepecho), nivel y el muro en el que está.
- **Muros por tipo**: para cada tipo de muro, cuántos muros hay, su espesor, su longitud total y su superficie lateral como **Área bruta**, **Deducciones** y **Área neta**, con un total.
- **Espacios**: número, nombre, nivel, área y perímetro, con el área total.
- **Forjados**: cada forjado con su nivel, tipo y espesor, y su área bruta, deducciones y área neta.
- **Acabados**: cada capa de acabado de los tipos de muro (por material y cara del muro) y los techos, con el número de caras y el bruto, las deducciones y el neto.
- **Tipos de muro: datos de cuantificación**: lo que se introdujo una vez en cada tipo de muro (unidad, mortero, tasa), con el número de muros, su longitud y su área neta, y la tasa por la cantidad medida. Vea [Ensamblajes de muro](topic:wall-assemblies).
- **Acabados por espacio**, **Acabados por muro**, **Acabados por zona** y **Cantidades de acabados**: lo que cubre cada espacio, con áreas, número de baldosas incluidos los cortes, y volúmenes de soporte. Vea [Acabados de espacios y tablas de acabados](topic:room-finishes).
- Sus propias **configuraciones**: una tabla que agrupó, totalizó y guardó con un nombre. Vea [Disponer, guardar y exportar una tabla](topic:schedule-layouts).

Las tablas cambian con cada edición. Haga clic en una fila, o en una sola cifra, para elegir los elementos de los que proviene. {{ui:Descargar CSV}} guarda la tabla, para abrirla en una hoja de cálculo; **Descargar Excel** y **Copiar para Google Sheets** están debajo. **Acabados de espacios** y la **Especificación** ([Redactar la especificación a partir del modelo](topic:specification)) se abren desde el mismo lugar.

## Área y volumen de cada capa

Elija **Capas: área y volumen** en la lista de Tablas. Tiene una fila por cada capa de cada tipo de muro, forjado, cubierta y techo en uso: el elemento, el tipo y su LOD, la capa (contada desde la cara exterior de un muro, o desde la parte superior de un forjado, cubierta o techo), su material y función, su espesor, cuántos elementos hay, el **área neta** y el **volumen**.

- El área es el área neta de los elementos de ese tipo, medida exactamente como en Muros por tipo, Forjados y Acabados, según el método de medición del proyecto. Una cubierta se mide sobre la pendiente; ningún método de medición tiene una regla para cubiertas.
- El volumen es esa área por el propio espesor de la capa.
- Un forjado, cubierta o techo sin tipo es una sola fila: una capa de su propio espesor.
- Una cámara de aire se lista con su área y se excluye del volumen total. Una membrana tiene área y no volumen.

Haga clic en una fila para elegir sus elementos. **Descargar CSV** guarda la tabla.

## Cómo se miden las áreas

Cada área son tres números que suman: bruta menos deducciones es neta. La regla está escrita encima de cada una de estas tablas, y es una sola regla: las tablas, las cantidades guardadas en el archivo IFC y la cuantificación enviada a TakeoffCraft usan todas la misma.

- **Un muro**: la bruta es una cara del muro, su longitud a lo largo de la línea central por su altura (la cara real, para un muro con parte superior o inferior con forma). Se deduce cada puerta, ventana y otro hueco, ancho por alto, cada hueco una vez.
- **Un forjado o un techo**: la bruta es el área dentro de su contorno. Se deduce una vez cada hueco y recorte que haya dentro.
- **Un acabado de muro**: cada capa de acabado del tipo de muro cubre una cara del muro, medida como el muro, con los mismos huecos deducidos. Un acabado es una capa del muro: aparece en Acabados y no se suma al área del muro, de modo que un muro con puerta nunca se cuenta dos veces.

Eso es el **valor por defecto de CadCraft**: se deduce cada hueco, sea cual sea su tamaño; las longitudes de muro son a lo largo de la línea central; los derrames no se miden. Es lo que usan todos los proyectos hasta que elija otro método.

## Elegir un método de medición

Encima de la tabla, **Método de medición** enumera los métodos que vienen con BimCraft, y **Cargar un archivo de método** toma el de su oficina. La elección se guarda en el archivo IFC, como un paso de deshacer, y tres cosas la siguen a la vez: las tablas, las cantidades netas guardadas en el archivo y la cuantificación enviada a TakeoffCraft. La regla encima de cada tabla empieza entonces con el método, su fuente, la fecha en que se leyó la fuente y las palabras **Sin comprobar por un técnico de mediciones**.

Un método es un pequeño archivo de datos, no código de programa. Para cada cantidad indica:

- **el hueco más pequeño que se deduce**: por ejemplo, un hueco de 0.5 m² o menos se queda en el área del muro;
- **cómo se miden las uniones de muros**: a lo largo de la línea central; o con un muro que termina contra otro, medido hasta la cara de ese muro; o con cada extremo de muro que se encuentra con otro muro, medido hasta la cara más cercana;
- **si se miden los derrames** de un acabado (los retornos del acabado en los huecos), como área o, si son poco profundos, como longitud. La profundidad de un derrame se toma como la mitad del espesor del muro;
- **lo que dice sobre la mampostería**: cómo se mide, y cualquier merma o margen de mortero que indique.

Los métodos que vienen con BimCraft:

| Método | Muros: hueco más pequeño deducido | Acabados de muro | Techos | Mampostería |
|---|---|---|---|---|
| CadCraft por defecto | todo hueco | todo hueco | todo recorte | sin márgenes |
| RICS NRM 2 (Reino Unido), 2.ª edición 2021 | 0.5 m² o menos se queda | 1 m² o menos se queda | 1 m² o menos se queda | por área; sin porcentajes indicados |
| AAQS Standard Method for Africa 2015 | 0.5 m² o menos se queda | 0.5 m² o menos se queda | 0.5 m² o menos se queda | por área; medido neto, 0 % de merma |
| IS 1200 (India), 1976, albañilería | 0.1 m² o menos se queda | por defecto (véase abajo) | por defecto | por volumen |
| BIA Technical Note 10 (Estados Unidos), 2009 | todo hueco | por defecto | por defecto | 5 % de merma en unidades, 15 % en mortero |

Lea estos límites antes de confiar en un método:

- **Ninguno de ellos ha sido comprobado por un técnico de mediciones.** Cada uno se hizo leyendo la fuente indicada y anotando sus números con la cláusula de la que proceden. Si es técnico de mediciones y puede comprobar uno, a los creadores de la aplicación les gustaría saberlo.
- Cuando una regla no pudo leerse en la fuente, el método dice **no confirmada** para ella y se usa el valor por defecto de CadCraft. Ningún método que viene con BimCraft tiene una regla confirmada para uniones de muros, derrames o forjados, así que esos se miden de la forma por defecto con todos ellos.
- IS 1200 deduce los huecos en el enlucido en tres bandas. Un archivo de método todavía no puede contener bandas, así que los acabados de muro usan el valor por defecto con ese método, y la regla lo indica.
- El South African Standard System of Measuring Building Work **no** está entre ellos: su texto no pudo leerse. El método AAQS para África dice que se basa en la edición de 1991 de ese sistema, pero es un documento distinto.
- BIA Technical Note 10 es una nota de estimación del sector, no un método estándar de medición.
- Un hueco que tiene exactamente el tamaño más pequeño sigue las propias palabras del método ("no superior a", "menor que"). Los tamaños dentro de 2 partes por 10 000 de él cuentan como exactamente él.
- Con un método, el área lateral neta de un muro y el área neta de un forjado o techo del archivo siguen el método, y el conjunto de cantidades lo nombra. Las áreas brutas y los volúmenes del archivo se mantienen como se dibujaron.

**Notas sobre este método**, bajo el selector, indica lo que deja abierto cada fuente. **Abrir la fuente** lleva al documento.

### El método propio de su oficina

Un archivo de método es JSON en el formato `cadcraft-measurement-method`. Cada valor indica la cláusula de la que procede; un valor sin cláusula se rechaza. El archivo se comprueba al cargarlo: se indica el campo erróneo, y no se usa nada de un archivo que no supere la comprobación. Una vez elegido, el archivo se guarda dentro del proyecto, de modo que el proyecto se abre igual en otro equipo. Su identificador es un nombre propio y sencillo (puede que no sea el identificador de un método que viene con la aplicación).

## Ladrillos, bloques y mortero

**Tipos de muro: datos de cuantificación** cuenta las unidades y el mortero de cada tipo de muro cuya unidad tiene longitud y altura (vea [Dar a un tipo sus datos de cuantificación](topic:wall-assemblies#give-a-type-its-takeoff-data)). Estas son las fórmulas, exactamente como se calculan:

- **Unidades por área de una hoja** = 1 / ((longitud de unidad + junta) × (altura de unidad + junta)). Un ladrillo de 215 × 65 mm con junta de 10 mm: 1 / (225 × 75 mm) = 59.26 por m².
- **Unidades de ancho en una hoja** = (espesor de hoja + junta) / (ancho de unidad + junta), redondeado a un número entero, al menos 1. Una hoja de 102.5 mm de ladrillos de 102.5 mm es 1; un muro de 215 mm de los mismos ladrillos es 2.
- **Unidades** = unidades por área × unidades de ancho en la hoja × el área neta de la cara del muro, sumadas sobre las hojas de mampostería del tipo.
- **Unidades a pedir** = unidades × (1 + merma % / 100), redondeado hacia arriba a una unidad entera. La merma es la que se introdujo en el tipo; si no se introdujo ninguna, la del método, si indica una; si no, 0 %.
- **Mortero** = área neta × espesor de hoja, menos el volumen de las unidades (unidades × longitud × altura × ancho), más el porcentaje adicional introducido en el tipo para cajeados o perforaciones, más la asignación del método si la indica. Necesita el ancho de la unidad.

Se supone que: cada hoja de mampostería de un tipo está construida con la única unidad del tipo; una hoja más gruesa que un ancho de unidad se cuenta como esa cantidad de anchos de unidad, cada uno como una hoja colocada a lo largo, de modo que las unidades cortadas, los cierres y las formas especiales no se cuentan aparte; cuando ninguna capa está marcada como construida con la unidad, se toman las capas del núcleo como hojas, y la nota encima de la tabla lo indica. **Importe** es la tasa multiplicada por aquello a lo que se refiere la tasa, que ahora también puede ser una unidad a pedir, 1000 unidades a pedir o un m³ de mortero.

Las marcas son la etiqueta IFC de los elementos: cambie una en **Propiedades** (Etiqueta) y la tabla la sigue. Para cualquier modelo IFC, dibujado o no, [Sumar cantidades, listar elementos y tabular espacios](topic:quantity-totals) suma cualquier propiedad.

## Acotación

El plano muestra la longitud de cada muro dibujado a lo largo de su cara exterior (un muro interior: a lo largo de una cara) y, para un muro con puertas o ventanas, una cadena desde las esquinas hasta cada hueco. {{ui:Dimensiones}} en la barra del modelo las oculta y las vuelve a mostrar.

## Guardar el plano como PDF

1. Muestre el nivel que quiera y fije las unidades en el panel **Niveles**.
2. Haga clic en {{ui:Imprimir}} en la barra del modelo.
3. BimCraft guarda "<archivo> — <nivel>.pdf": el plano en blanco y negro a la mayor escala estándar que cabe en la página (1/4" = 1'-0", 1/8" = 1'-0" … en Letter, en pies y pulgadas; 1:50, 1:100 … en A4, en milímetros), con los muros rellenos, las puertas, las ventanas, los nombres y áreas de los espacios, las cotas, y un cajetín con el nivel, el archivo, la altura de corte, la fecha y la escala.

El PDF se dibuja como líneas y texto, así que se mantiene nítido a cualquier zoom y su texto se puede buscar.

## Conviene saber

- Las tablas enumeran lo que hicieron las herramientas de dibujo. Las puertas y ventanas de otros programas aparecen en Totales de cantidades.
- Para presupuestar el trabajo, pase las cantidades a TakeoffCraft: vea [Cantidades a TakeoffCraft](topic:takeoff). La descarga CSV sigue disponible para una hoja de cálculo.
