---
title: Tuberías y ductos
summary: Dibuje tramos de tubería y de ducto en el plano por sus ejes; los codos, tes, reducciones y transiciones se generan por usted, los tramos pertenecen a sistemas con puertos conectados en el archivo IFC, y aparecen en plantas, tablas y la cuantificación.
keywords: tubería, tuberías, tubo, plomería, ducto, ductos, ductería, hvac, mep, mecánico, codo, te, reducción, transición, accesorio, accesorios, válvula, válvulas, válvula de compuerta, válvula de bola, válvula de globo, válvula de retención, columna, pendiente, desagüe, sanitario, pluvial, ventilación, agua fría, agua caliente, agua helada, calefacción, gas, protección contra incendios, aire de suministro, aire de retorno, extracción, sistema, sistemas, puerto, puertos, conector, conectores, mueble, muebles, mueble sanitario, lavabo, fregadero, inodoro, regadera, lavadero, unidades de mueble, uhc, dfu, dimensionar los desagües, dimensionamiento de desagües, colector general, ramal, colector, flujo de aire, cfm, fricción, fricción igual, dimensionamiento, cédula, cuantificación, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldable, drenaje sanitario, dn
from: 85140bc5
---

## Qué hará

Dibuje las tuberías y ductos de un edificio como dibuja muros: haga clic en las esquinas del eje de un tramo a la altura que defina. BimCraft hace los accesorios, coloca cada pieza en su sistema y las conecta, para que otros programas lean el tramo como un solo sistema conectado.

## Dibujar una tubería

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Tubería}}.
2. En la barra, elija el **sistema** (agua fría, agua caliente, desagüe sanitario, gas…). Define un material habitual: cobre para agua, PVC para desagües y ventilaciones, acero para calefacción, agua helada, gas y protección contra incendios. Cambie el **material**, la **clase** y el **diámetro** si lo necesita. Los diámetros y espesores provienen de normas públicas: tubería de acero ASME B36.10M, tubo de cobre ASTM B88, PVC ASTM D1785 y PEX ASTM F876. Los proyectos brasileños pueden usar **PVC water pipe (NBR 5648)**, el PVC de unión con solvente para agua fría, y **PVC drain pipe (NBR 5688)**, serie normal o reforzada, para desagües y ventilaciones: sus diámetros se nombran por DN (DN 25, DN 100). Una vez que elige uno de ellos, al elegir otro sistema se mantienen las tuberías brasileñas (por ejemplo, PVC drain pipe para un desagüe sanitario, después de haber elegido PVC water pipe).
3. Defina **A**: la altura del eje de la tubería sobre el nivel.
4. Haga clic donde empieza la tubería, luego en cada esquina. Haga doble clic, o pulse {{key:Enter}}, en el último punto. {{key:Backspace}} quita la última esquina; {{key:Esc}} descarta el tramo.

La tubería se ajusta como lo hacen los muros, y también a otros tramos: empiece en el extremo de una tubería para continuar desde ella, o termine sobre la línea de una tubería para derivar de ella. Un tramo nuevo toma la altura de la tubería a la que se ajusta.

Un tramo que empieza o termina en un puerto de un equipo toma su diámetro y su sistema, y queda fijo a él: vea [Equipos MEP con puertos](topic:mep-equipment) y [Conectar tuberías y ductos a equipos](topic:mep-connections).

## Definir la norma de plomería del proyecto

La primera lista de la barra de tubería es la **norma de plomería** del modelo: **US (IPC, pulgadas)** o **Brasil (ABNT, DN)**. Se guarda en el modelo, así que todos los que abran el archivo empiezan los tramos de la misma manera. Con **US**, un tramo nuevo inicia en cobre (agua) o en PVC Schedule 40 (desagües), en pulgadas, con la pendiente del International Plumbing Code. Con **Brasil**, el agua fría inicia como PVC soldável DN 25, los desagües sanitarios y pluviales y las ventilaciones como PVC esgoto DN 100 con la pendiente de NBR 8160, y el agua caliente en cobre. También aplica a un tramo iniciado en el conector de un mueble o en un puerto de equipo. Las tuberías ya dibujadas conservan su material y sus propias tablas; la lista de materiales sigue abierta, así que aún puede dibujar a propósito un tramo brasileño en un modelo US. Un archivo sin elección se comporta como antes: un tramo nuevo sigue el material en uso.

## Dibujar un ducto

1. Elija {{ui:Ducto}}. Elija el sistema (suministro, retorno, extracción o aire exterior) y la forma: redonda, rectangular u oval plana.
2. Escriba el ancho y el alto (el ancho de un ducto redondo es su diámetro), y **A** para la altura del eje.
3. Para dimensionarlo a partir del **Flujo de aire**, escriba también la **Fricción** y haga clic en {{ui:Dimensionar}}. El ducto se dimensiona por fricción igual, el método del capítulo de diseño de ductos del ASHRAE Handbook, y se redondea hacia arriba a una medida de catálogo, de modo que la fricción sale igual o menor que la tasa que escribió. Sin tasa escrita, usa 0.08 in. de agua por cada 100 ft (0.8 Pa/m). Un ducto rectangular conserva la altura que escribió y obtiene un ancho; BimCraft lo indica cuando sus lados tienen una relación mayor de 4 a 1.
4. Haga clic en las esquinas igual que para una tubería.

## Muebles sanitarios

{{ui:Compilación}} › {{ui:Colocar familia}} ofrece cinco muebles para empezar, cada uno con un desagüe y un conector de agua fría: un **Inodoro**, un **Lavabo**, un **Fregadero de cocina**, un **Plato de regadera** y un **Lavadero**. Al colocarlos, su frente mira hacia usted y su parte posterior va contra el muro. Sus desagües son del menor diámetro de desagüe de mueble de NBR 8160 (DN 100 para el inodoro, DN 50 para el fregadero de cocina, DN 40 para los demás); el agua es DN 20. Cambie sus diámetros, o edítelos como cualquier familia: vea [Familias y sus diámetros](topic:families).

Una familia indica qué mueble es en {{ui:Mueble sanitario}}, en la pestaña {{ui:Conectores}} del editor de familias. Entonces su desagüe se cuenta en unidades de mueble: 6 UHC para un inodoro, 1 para un lavabo, 3 para un fregadero de cocina o un lavadero, 2 para una regadera (NBR 8160), o las unidades de desagüe de la Tabla 709.1 del IPC.

## Desde el conector de un mueble

Los elementos colocados desde una familia con conectores (el desagüe y la llave de un lavabo, el cuello de una terminal de aire: vea [Editar una familia](topic:family-editor)) muestran sus conectores libres como puntos mientras {{ui:Tubería}} o {{ui:Ducto}} está activo, y el puntero se ajusta a ellos.

- **Iniciar en un conector**: el tramo toma su sistema y su diámetro (la tubería del material de la barra, en el diámetro del conector o justo por encima; un ducto redondo de su diámetro). Cuando el conector apunta hacia abajo o hacia arriba, como un desagüe bajo un lavabo, el tramo primero sube o baja en línea recta hasta la altura de **A**, y luego sigue con sus clics.
- **Terminar en un conector**: el tramo baja o sube hasta él y termina ahí.

El tramo queda conectado al elemento en el archivo IFC, así que otros programas ven el mueble como parte de su sistema. Un elemento colocado después con un conector en el extremo de un tramo también queda conectado a él. Un tramo que se aleja de un conector deja de estar conectado a él.

## Los accesorios, generados por usted

| Dónde | Lo que BimCraft genera |
|---|---|
| Un tramo gira | Un codo. Tubería de acero con el radio largo de ASME B16.9 (1.5 × el diámetro), otra tubería a un diámetro exterior, ducto redondo a 1.5 diámetros, ducto rectangular a un ancho (o a una altura para un giro hacia arriba o hacia abajo) |
| Un tramo termina sobre la línea de otro | Una te; el otro tramo se divide ahí |
| Dos tramos se unen extremo a extremo con diámetros distintos | Una reducción (tuberías) o una transición (ductos) |
| Dos tramos del mismo diámetro se unen extremo a extremo en ángulo | Un codo |

Al cambiar, mover o borrar un tramo, cada accesorio de ese nivel se vuelve a generar. Si una pata es demasiado corta para los accesorios de sus extremos, BimCraft lo indica y no cambia nada: aleje más la esquina.

:::note
Los accesorios y válvulas son genéricos: se dibujan a partir del diámetro de la tubería o del ducto, no del catálogo de un fabricante. Los accesorios de enchufe, de prensa y ranurados, los cuerpos de válvula y los equipos tienen medidas propias de cada fabricante; verifíquelas con su proveedor antes de pedir.
:::

## Columnas

Mientras dibuja, escriba una nueva altura en **A** y pulse {{key:Enter}}: el tramo sube o baja en línea recta en la última esquina, con un codo en cada extremo. Una columna puede subir hasta el nivel superior. Cada nivel muestra las partes de un tramo que alcanza su rango de vista, con **UP** o **DN** en la columna.

## Desagües y su pendiente

Los desagües sanitarios y pluviales inician con la pendiente mínima que permite el International Plumbing Code para su diámetro: 1/4 in. por pie hasta 2-1/2 in., 1/8 in. por pie de 3 a 6 in., 1/16 in. por pie desde 8 in. El PVC brasileño de desagüe inicia con la pendiente de NBR 8160: 2 % hasta DN 75, 1 % desde DN 100. Escriba otra pendiente en la barra o en {{ui:Propiedades}}: `1/4"/ft`, `2 %` o `1:50`. El tramo baja desde su primer punto, así que dibuje los desagües en el sentido en que fluyen. El plano muestra la caída y una flecha. {{ui:Propiedades}} advierte cuando un desagüe es más plano que el mínimo del código.

## Dimensionar los desagües por unidades de mueble

Elija un desagüe sanitario: **Unidades de mueble** en {{ui:Propiedades}} indica cuántas lleva y el diámetro mínimo que necesita. Cuenta cada mueble sanitario cuyo conector de desagüe está sobre el tramo, y también cada desagüe que desemboca en él: dibuje los desagües en el sentido en que fluyen, y que cada uno termine en el desagüe al que desemboca.

- Los desagües en PVC brasileño de desagüe cuentan **UHC** y siguen NBR 8160; los demás cuentan **DFU** y siguen el International Plumbing Code.
- **Desagüe**: un **Ramal** se dimensiona con la tabla del código para ramales de muebles; un **Colector general** según su tabla por pendiente, así que su **Pendiente** importa.
- Un desagüe nunca es menor que los desagües de los muebles que atiende (un inodoro necesita DN 100, o 3 in.), ni menor que un desagüe que desemboca en él. Con NBR 8160, un colector general es DN 100 como mínimo.

{{ui:Dimensionar los desagües}} da a cada desagüe sanitario del modelo que sea demasiado pequeño para sus unidades de mueble el diámetro que necesita, en un solo paso que puede deshacer. Un desagüe dibujado más grande de lo necesario se deja como está. Cuando un desagüe lleva más de lo que puede el mayor diámetro de su tubería a su pendiente, BimCraft lo indica: dele una pendiente mayor u otra tubería.

:::note
Las tablas son las de desagües horizontales. Las bajantes, las ventilaciones y los pluviales no se dimensionan aquí: revíselos, junto con todo el diseño, contra el código que aplica al proyecto.
:::

## Válvulas

1. Elija {{ui:Válvula}} y el tipo: de compuerta, de bola, de globo o de retención.
2. Haga clic en una tubería donde va. La tubería se corta alrededor y la válvula queda conectada a ambos lados.

En {{ui:Propiedades}} del tramo se enumeran sus válvulas, cada una con {{ui:Quitar}}.

Más tipos de válvula, un filtro, compuertas en ductos, sus propias especificaciones de tubería y familias de fabricantes: vea [Especificaciones de tubería, válvulas, compuertas y familias de fabricantes](topic:pipe-specs).

## Cambiar un tramo

Seleccione cualquier parte de un tramo, en el plano o en la vista 3D. En {{ui:Propiedades}}:

- **Sistema**, **Material**, **Clase** y **Diámetro** (tuberías), o **Forma**, **Ancho** y **Alto** (ductos).
- **Altura sobre el nivel** mueve todo el tramo hacia arriba o hacia abajo.
- **Aislamiento**: su espesor, que se conserva para la verificación de holguras y la lista de aberturas (no se dibuja nada para él): vea [Verificar tuberías y ductos contra la estructura](topic:mep-against-structure).
- Tubería de acero: **Cortar en carretes**: vea [Carretes de tubería de acero y hojas de carretes](topic:pipe-spools).
- **Pendiente** (tuberías).
- **Flujo** con {{ui:Dimensionar}}: para agua, el diámetro más pequeño que mantiene el agua a 8 ft/s (2.4 m/s), o a 5 ft/s (1.5 m/s) para agua caliente; a 3 m/s para el PVC brasileño de agua (NBR 5626). Para ductos, la velocidad y la tasa de fricción del ducto tal como está dibujado. Los desagües sanitarios se dimensionan por sus unidades de mueble: vea **Dimensionar los desagües por unidades de mueble** más arriba.

Cada cambio es un paso de {{ui:Deshacer}}. {{key:Delete}} elimina el tramo completo.

## Planos

- Las tuberías menores de 150 mm (unas 6 in.) se dibujan como una línea sobre su eje; las tuberías mayores y todos los ductos, como dos líneas a su ancho.
- Cada sistema tiene su propio color; el PDF del plano los imprime en negro.
- Cada tramo lleva una etiqueta con su diámetro y su sistema (por ejemplo `2" CW` o `16×10 SA`).
- El rango de vista de un plano decide qué tramos muestra, y {{ui:Se ve en esta planta}} puede omitir **Tuberías** o **Ductos**: vea [Vistas, rangos de vista y sus propias hojas](topic:views-and-sheets).

## Tablas y la cuantificación

El panel {{ui:Tablas}} agrega **Tuberías** (por sistema, material y diámetro, con sus longitudes), **Ductos** (por sistema, forma y diámetro, con longitudes y el área de superficie exterior) y **Accesorios y válvulas** (por tipo y diámetro, contados). Haga clic en una fila para elegir lo que lista; {{ui:Descargar CSV}} la descarga.

{{ui:Cuantificación}} lleva los tramos a TakeoffCraft: tubería y ducto por diámetro, como tramos dibujados en el plano (los desagües con pendiente se miden a lo largo de su pendiente), y accesorios y válvulas contados donde están: vea [Enviar las cantidades del modelo a TakeoffCraft](topic:takeoff). Las columnas se excluyen de esa hoja, porque un plano no puede medirlas; la tabla de Tuberías tiene su longitud.

## En el archivo IFC

Cada tramo es un ensamblaje que contiene sus partes: segmentos de tubería y de ducto, accesorios y válvulas, cada uno con su tipo, su material, un color de su sistema y sus puertos. Los puertos que se tocan quedan conectados, y cada pieza pertenece a su sistema de distribución (los archivos IFC2X3 reciben lo mismo como segmentos de flujo, accesorios y controladores en un sistema). Otros programas que leen sistemas IFC ven un tramo conectado por sistema. La definición propia del tramo se guarda con él, así que BimCraft lo vuelve a generar igual cuando lo cambia.
