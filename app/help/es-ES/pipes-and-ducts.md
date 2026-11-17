---
title: Tuberías y conductos
summary: Dibuje tramos de tubería y de conducto en el plano por sus líneas centrales; los codos, tes, reducciones y transiciones se crean por usted, los tramos pertenecen a sistemas con puertos conectados en el archivo IFC, y aparecen en las plantas, las tablas y la cuantificación.
keywords: tubería, tuberías, fontanería, conducto, conductos, ductería, climatización, mep, mecánica, codo, te, reducción, transición, accesorio, accesorios, válvula, válvulas, válvula de compuerta, válvula de bola, válvula de globo, válvula de retención, montante, pendiente, desagüe, sanitario, pluvial, ventilación, agua fría, agua caliente, agua refrigerada, calefacción, gas, protección contra incendios, aire de impulsión, aire de retorno, extracción, sistema, sistemas, puerto, puertos, conector, conectores, aparato, aparatos, aparato sanitario, lavabo, fregadero, inodoro, ducha, unidades de descarga, UHC, DFU, dimensionar desagües, dimensionado de desagües, ramal, colector, caudal de aire, cfm, fricción, fricción constante, dimensionado, tabla, cuantificación, NBR, NBR 5648, NBR 5688, NBR 8160, PVC soldable, saneamiento, DN
from: 85140bc5
---

## Qué hará

Dibuje las tuberías y conductos de un edificio como dibuja muros: haga clic en los vértices de la línea central de un tramo, a la altura que fije. BimCraft crea los accesorios, coloca cada parte en su sistema y las conecta, de modo que otros programas leen el tramo como un único sistema conectado.

## Dibujar una tubería

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Tubería}}.
2. En la barra, elija el **sistema** (agua fría, agua caliente, desagüe sanitario, gas…). Fija un material habitual: cobre para agua, PVC para desagües y ventilaciones, acero para calefacción, agua refrigerada, gas y protección contra incendios. Cambie el **material**, la **clase** y el **tamaño** si lo necesita. Los tamaños y espesores proceden de normas públicas: tubería de acero ASME B36.10M, tubo de cobre ASTM B88, PVC ASTM D1785 y PEX ASTM F876. Los proyectos brasileños pueden usar **Tubería de agua de PVC (NBR 5648)**, el PVC soldable para agua fría, y **Tubería de desagüe de PVC (NBR 5688)**, serie normal o reforzada, para desagües y ventilaciones: sus tamaños se nombran por DN (DN 25, DN 100). Una vez elegida una de ellas, si elige otro sistema se mantienen las tuberías brasileñas (tubería de desagüe de PVC para un desagüe sanitario tras tubería de agua de PVC).
3. Fije **En**: la altura de la línea central de la tubería sobre el nivel.
4. Haga clic donde empieza la tubería y luego en cada vértice. Haga doble clic, o pulse {{key:Enter}}, en el último punto. {{key:Backspace}} deshace el último vértice; {{key:Esc}} descarta el tramo.

La tubería se ajusta como lo hacen los muros, y también a otros tramos: empiece en el extremo de una tubería para continuar desde ella, o termine en la línea de una tubería para ramificarse. Un tramo nuevo toma la altura de la tubería a la que se ajusta.

Un tramo que empieza o termina en un puerto de un equipo toma su tamaño y sistema, y queda fijo a él: vea [Equipos MEP con puertos](topic:mep-equipment) y [Conectar tuberías y conductos a equipos](topic:mep-connections).

## Fijar el estándar de fontanería del proyecto

La primera lista de la barra de tubería es el **estándar de fontanería** del modelo: **EE. UU. (IPC, pulgadas)** o **Brasil (ABNT, DN)**. Se guarda en el modelo, de modo que todos los que abran el archivo empiezan los tramos de la misma forma. Con **EE. UU.**, un tramo nuevo empieza en cobre (agua) o en PVC Schedule 40 (desagües), en pulgadas, con la pendiente del Código Internacional de Fontanería. Con **Brasil**, el agua fría empieza como PVC soldable DN 25; los desagües sanitarios y pluviales, y las ventilaciones, como PVC de saneamiento DN 100 con la pendiente de la NBR 8160; y el agua caliente en cobre. También se aplica a un tramo que empieza en el conector de un aparato o en un puerto de un equipo. Las tuberías ya dibujadas conservan su material y sus propias tablas; la lista de materiales sigue abierta, de modo que aún puede dibujar a propósito un tramo brasileño en un modelo estadounidense. Un archivo sin ninguna elección se comporta como antes: un tramo nuevo sigue el material en uso.

## Dibujar un conducto

1. Elija {{ui:Conducto}}. Elija el sistema (impulsión, retorno, extracción o aire exterior) y la forma: redonda, rectangular u oval plana.
2. Escriba el ancho y la altura (el ancho de un conducto redondo es su diámetro), y **En** para la altura de la línea central.
3. Para dimensionarlo a partir del caudal, escriba el **Caudal** y la **Fricción** y haga clic en {{ui:Dimensionar}}. El conducto se dimensiona por fricción constante, el método del capítulo de diseño de conductos del ASHRAE Handbook, y se redondea a un tamaño disponible, de modo que la fricción sale igual o por debajo de la tasa que escribió. Sin tasa escrita, usa 0.08 in. de columna de agua por 100 ft (0.8 Pa/m). Un conducto rectangular mantiene la altura que escribió y obtiene un ancho; BimCraft lo indica cuando sus lados superan la relación 4 a 1.
4. Haga clic en los vértices como para una tubería.

## Aparatos sanitarios

{{ui:Compilación}} › {{ui:Colocar familia}} ofrece cinco aparatos para empezar, cada uno con un desagüe y un conector de agua fría: un **Inodoro**, un **Lavabo**, un **Fregadero de cocina**, un **Plato de ducha** y un **Lavadero**. Su frente le mira al colocarlos, y su parte trasera va contra el muro. Sus desagües tienen el diámetro mínimo de desagüe de aparato de la NBR 8160 (DN 100 para el inodoro, DN 50 para el fregadero, DN 40 para los demás); el agua es DN 20. Cambie sus tamaños o edítelos, como cualquier familia: vea [Familias y sus tamaños](topic:families).

Una familia indica qué aparato es en {{ui:Aparato sanitario}} de la pestaña {{ui:Conectores}} del editor de familias. Su desagüe se cuenta entonces en unidades de aparato: 6 UHC para un inodoro, 1 para un lavabo, 3 para un fregadero de cocina o un lavadero, 2 para una ducha (NBR 8160), o las unidades de descarga de la tabla 709.1 del IPC.

## Desde el conector de un aparato

Los elementos colocados desde una familia con conectores (el desagüe y el grifo de un lavabo, el cuello de un terminal de aire: vea [Editar una familia](topic:family-editor)) muestran sus conectores libres como puntos mientras {{ui:Tubería}} o {{ui:Conducto}} está activo, y el puntero se ajusta a ellos.

- **Empezar en un conector**: el tramo toma su sistema y su tamaño (la tubería del material de la barra en el tamaño del conector o justo por encima; un conducto redondo de su diámetro). Cuando el conector apunta hacia abajo o hacia arriba, como un desagüe bajo un lavabo, el tramo primero va recto hacia abajo o hacia arriba hasta la altura de **En**, y luego sigue con sus clics.
- **Terminar en un conector**: el tramo baja o sube hasta él y termina allí.

El tramo queda conectado al elemento en el archivo IFC, de modo que otros programas ven el aparato como parte de su sistema. Un elemento colocado después con un conector en el extremo de un tramo también se conecta a él. Un tramo que se aleja de un conector deja de estar conectado a él.

## Los accesorios, hechos por usted

| Dónde | Qué crea BimCraft |
|---|---|
| Un tramo gira | Un codo. Tubería de acero con el radio largo de ASME B16.9 (1.5 × el tamaño), otra tubería a un diámetro exterior, conducto redondo a 1.5 diámetros, conducto rectangular a un ancho (o a una altura para un giro hacia arriba o hacia abajo) |
| Un tramo termina en la línea de otro | Una te; el otro tramo se corta allí |
| Dos tramos se unen extremo con extremo, con tamaños distintos | Una reducción (tuberías) o una transición (conductos) |
| Dos tramos del mismo tamaño se unen extremo con extremo, en ángulo | Un codo |

Al cambiar, mover o borrar un tramo, se vuelve a crear cada accesorio de ese nivel. Si un tramo es demasiado corto para los accesorios de sus extremos, BimCraft lo indica y no cambia nada: aleje más el vértice.

:::note
Los accesorios y válvulas son genéricos: se dibujan según el tamaño de la tubería o del conducto, no según el catálogo de un fabricante. Los accesorios de enchufe, de prensado y ranurados, los cuerpos de válvula y los equipos tienen tamaños propios de cada fabricante; compruébelos con su proveedor antes de pedirlos.
:::

## Montantes

Al dibujar, escriba una nueva altura en **En** y pulse {{key:Enter}}: el tramo sube o baja recto en el último vértice, con un codo en cada extremo. Un montante puede subir hasta el nivel superior. Cada nivel muestra las partes de un tramo que alcanza su rango de vista, con **UP** o **DN** en el montante.

## Desagües y su pendiente

Los desagües sanitarios y pluviales empiezan con la pendiente mínima que permite el Código Internacional de Fontanería para su tamaño: 1/4 in. por ft hasta 2-1/2 in., 1/8 in. por ft de 3 a 6 in., 1/16 in. por ft desde 8 in. El PVC de desagüe brasileño empieza con la pendiente de la NBR 8160: 2 % hasta DN 75, 1 % desde DN 100. Escriba otra pendiente en la barra o en Propiedades: `1/4"/ft`, `2 %` o `1:50`. El tramo baja desde su primer punto, así que dibuje los desagües en el sentido en que fluyen. El plano muestra la caída y una flecha. Las Propiedades avisan cuando un desagüe es más plano que el mínimo del código.

## Dimensionar los desagües por unidades de aparato

Elija un desagüe sanitario: **Unidades de aparato** en Propiedades indica cuántas transporta y el menor tamaño que necesitan. Cuenta todo aparato sanitario cuyo conector de desagüe esté en el tramo, y también todo desagüe que desemboque en él: dibuje los desagües en el sentido en que fluyen, cada uno terminando en el desagüe en el que desemboca.

- Los desagües en tubería de PVC de desagüe brasileña cuentan **UHC** y siguen la NBR 8160; los demás cuentan **DFU** y siguen el Código Internacional de Fontanería.
- **Desagüe**: un **Ramal** se dimensiona con la tabla del código para ramales de aparatos; un **Colector de edificio** con su tabla según la pendiente, de modo que su **Pendiente** importa.
- Un desagüe nunca es más pequeño que los desagües de aparato a los que sirve (un inodoro necesita DN 100, o 3 in.), ni que un desagüe que desemboque en él. Con la NBR 8160, un colector de edificio es DN 100 como mínimo.

{{ui:Dimensionar los desagües}} hace que cada desagüe sanitario del modelo que sea demasiado pequeño para sus unidades de aparato tenga el tamaño que necesita, como un solo paso que puede deshacer. Un desagüe dibujado más grande de lo necesario se deja como está. Cuando un desagüe transporta más de lo que puede el mayor tamaño de su tubería a su pendiente, BimCraft lo indica: dele una pendiente mayor o use otra tubería.

:::note
Las tablas son las de desagües horizontales. Las bajantes, las ventilaciones y los desagües pluviales no se dimensionan aquí: compruébelos, junto con todo el diseño, con el código que se aplica al proyecto.
:::

## Válvulas

1. Elija {{ui:Válvula}} y el tipo: de compuerta, de bola, de globo o de retención.
2. Haga clic en una tubería donde va. La tubería se corta alrededor de ella y la válvula se conecta a ambos lados.

Las Propiedades del tramo enumeran sus válvulas, cada una con {{ui:Quitar}}.

Más tipos de válvula, un filtro, compuertas en conductos, sus propias especificaciones de tubería y familias de fabricantes: vea [Especificaciones de tubería, válvulas, compuertas y familias de fabricantes](topic:pipe-specs).

## Cambiar un tramo

Seleccione cualquier parte de un tramo, en la planta o en la vista 3D. En Propiedades:

- **Sistema**, **Material**, **Clase** y **Tamaño** (tuberías), o **Forma**, **Ancho**, **Altura** (conductos).
- **Altura sobre el nivel** mueve todo el tramo hacia arriba o hacia abajo.
- **Aislamiento**: su espesor, que se conserva para la comprobación de holguras y la lista de huecos (no se dibuja nada para él): vea [Comprobar tuberías y conductos frente a la estructura](topic:mep-against-structure).
- Tubería de acero: **Cortar en carretes**: vea [Carretes de tubería de acero y hojas de carretes](topic:pipe-spools).
- **Pendiente** (tuberías).
- **Caudal** con {{ui:Dimensionar}}: para agua, el menor tamaño que mantiene el agua a 8 ft/s (2.4 m/s), o a 5 ft/s (1.5 m/s) para agua caliente; a 3 m/s para la tubería brasileña de agua de PVC (NBR 5626). Para conductos, la velocidad y la tasa de fricción del conducto tal como está dibujado. Los desagües sanitarios se dimensionan por sus unidades de aparato: vea la sección Dimensionar los desagües por unidades de aparato.

Cada cambio es un paso de {{ui:Deshacer}}. {{key:Delete}} borra el tramo completo.

## Planos

- Las tuberías menores de 150 mm (unas 6 in.) se dibujan como una línea sobre su línea central; las mayores, y todos los conductos, como dos líneas a su ancho.
- Cada sistema tiene su propio color; el PDF del plano los imprime en negro.
- Cada tramo lleva una etiqueta con su tamaño y su sistema (por ejemplo `2" CW` o `16×10 SA`).
- El rango de vista de un plano decide qué tramos muestra, y {{ui:Se ve en esta planta}} puede omitir **Tuberías** o **Conductos**: vea [Vistas, rangos de vista y hojas propias](topic:views-and-sheets).

## Tablas y cuantificación

El panel {{ui:Tablas}} añade **Tuberías** (por sistema, material y tamaño, con sus longitudes), **Conductos** (por sistema, forma y tamaño, con longitudes y superficie exterior) y **Accesorios y válvulas** (por tipo y tamaño, contados). Haga clic en una fila para elegir lo que lista; {{ui:Descargar CSV}} la descarga.

{{ui:Cuantificación}} lleva los tramos a TakeoffCraft: tubería y conducto por tamaño como tramos dibujados en el plano (los desagües con pendiente se miden a lo largo de su pendiente), y accesorios y válvulas contados donde están: vea [Enviar las cantidades del modelo a TakeoffCraft](topic:takeoff). Las bajantes quedan fuera de esa hoja, porque un plano no puede medirlas; la tabla Tuberías tiene su longitud.

## En el archivo IFC

Cada tramo es un conjunto que contiene sus partes: segmentos de tubería y de conducto, accesorios y válvulas, cada uno con su tipo, su material, un color para su sistema y sus puertos. Los puertos que se tocan quedan conectados, y cada parte pertenece a su sistema de distribución (los archivos IFC2X3 reciben lo mismo, como segmentos de flujo, accesorios y controladores en un sistema). Otros programas que leen sistemas IFC ven un tramo conectado por sistema. La definición propia del tramo se guarda con él, de modo que BimCraft lo vuelve a crear igual al cambiarlo.
