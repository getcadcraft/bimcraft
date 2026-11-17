---
title: Caños y conductos
summary: Dibujá tramos de caño y conducto en el plano por sus ejes; los codos, tes, reducciones y transiciones se hacen solos, los tramos pertenecen a sistemas con puertos conectados en el archivo IFC, y se muestran en planos, planillas y el cómputo.
keywords: caño, caños, cañería, plomería, conducto, conductos, ductería, hvac, mep, mecánica, codo, te, reducción, transición, accesorio, accesorios, válvula, válvulas, válvula de compuerta, válvula de esfera, válvula globo, válvula de retención, montante, pendiente, desagüe, sanitario, pluvial, ventilación, agua fría, agua caliente, agua enfriada, calefacción, gas, protección contra incendios, aire de impulsión, aire de retorno, extracción, sistema, sistemas, puerto, puertos, conector, conectores, artefacto, artefactos, artefacto sanitario, lavatorio, pileta, inodoro, ducha, fixture, unidades de artefacto, uhc, dfu, dimensionar desagües, dimensionado de desagües, desagüe de edificio, ramal, colector, caudal de aire, cfm, fricción, fricción igual, dimensionado, planilla, cómputo, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldable, cloacas, dn
from: 85140bc5
---

## Mba'e pe ojapóta

Dibujá los caños y conductos de un edificio como dibujás los muros: hacé clic en las esquinas del eje de un tramo a la altura que fijaste. BimCraft hace los accesorios, pone cada pieza en su sistema y las conecta, para que otros programas lean el tramo como un sistema conectado.

## Dibujar un caño

1. Prendé {{ui:Draw}}, abrí {{ui:Build}} y elegí {{ui:Pipe}}.
2. En la barra, elegí el **sistema** (agua fría, agua caliente, desagüe sanitario, gas…). Eso fija un material habitual: cobre para agua, PVC para desagües y ventilaciones, acero para calefacción, agua enfriada, gas y protección contra incendios. Cambiá el **material**, la **clase** y el **tamaño** si necesitás. Los tamaños y espesores vienen de normas públicas: caño de acero ASME B36.10M, tubo de cobre ASTM B88, PVC ASTM D1785 y PEX ASTM F876. En proyectos de Brasil podés usar **caño de agua de PVC (NBR 5648)**, el PVC de unión con solvente para agua fría, y **caño de desagüe de PVC (NBR 5688)**, serie normal o reforzada, para desagües y ventilaciones: sus tamaños se nombran por DN (DN 25, DN 100). Una vez que elegís uno, si elegís otro sistema se mantiene en los caños brasileños (caño de desagüe de PVC para un desagüe sanitario después de caño de agua de PVC).
3. Elegí **En**: la altura del eje del caño sobre el nivel.
4. Hacé clic donde empieza el caño, y después en cada esquina. Hacé doble clic, o presioná {{key:Enter}}, en el último punto. {{key:Backspace}} deshace la última esquina; {{key:Esc}} descarta el tramo.

El caño se ajusta como lo hacen los muros, y a otros tramos: empezá en el extremo de un caño para seguir desde ahí, o terminá sobre la línea de un caño para derivarlo. Un tramo nuevo toma la altura del caño al que se ajusta.

Un tramo que empieza o termina en un puerto de un equipo toma su tamaño y su sistema, y queda fijo a él: ver [Equipos MEP con puertos](topic:mep-equipment) y [Conectar caños y conductos a equipos](topic:mep-connections).

## Fijar el estándar de plomería del proyecto

La primera lista de la barra de caños es el **estándar de plomería** del modelo: **EE. UU. (IPC, pulgadas)** o **Brasil (ABNT, DN)**. Se guarda en el modelo, así que todos los que abren el archivo empiezan los tramos de la misma forma. Con **EE. UU.**, un tramo nuevo empieza en cobre (agua) o PVC Schedule 40 (desagües), en pulgadas, con la pendiente del International Plumbing Code. Con **Brasil**, el agua fría empieza en PVC soldable DN 25, los desagües pluviales y sanitarios y las ventilaciones en PVC cloacas DN 100 con la pendiente de NBR 8160, y el agua caliente en cobre. También se aplica a un tramo que empieza en un conector de artefacto o en un puerto de equipo. Los caños ya dibujados mantienen su material y sus tablas; la lista de materiales queda abierta, así que todavía podés dibujar a propósito un tramo brasileño en un modelo de EE. UU. Un archivo sin ninguna elección se comporta como antes: un tramo nuevo sigue el material en uso.

## Dibujar un conducto

1. Elegí {{ui:Duct}}. Elegí el sistema (impulsión, retorno, extracción o aire exterior) y la forma: redonda, rectangular u oval plana.
2. Escribí el ancho y la altura (el ancho de un conducto redondo es su diámetro), y **En** para la altura del eje.
3. Para dimensionarlo según el caudal, escribí el **Airflow** y la tasa de **Friction** y hacé clic en {{ui:Size it}}. El conducto se dimensiona por fricción igual, el método del capítulo de diseño de conductos del ASHRAE Handbook, y se redondea al tamaño disponible más cercano, así que la fricción queda igual o por debajo de la tasa que escribiste. Si no escribís ninguna tasa, usa 0,08 in. de agua por cada 100 ft (0,8 Pa/m). Un conducto rectangular mantiene la altura que escribiste y recibe un ancho; BimCraft lo avisa cuando sus lados tienen más de 4 a 1.
4. Hacé clic en las esquinas como con un caño.

## Artefactos sanitarios

{{ui:Build}} › {{ui:Place family}} ofrece cinco artefactos para empezar, cada uno con un desagüe y un conector de agua fría: un **Water closet** (inodoro), un **Lavatory** (lavatorio), un **Kitchen sink** (pileta de cocina), un **Shower tray** (plato de ducha) y un **Laundry tub** (pileta de lavadero). Su frente te mira al colocarlos, y su parte trasera va contra el muro. Sus desagües están en el menor desagüe de artefacto de NBR 8160 (DN 100 para el inodoro, DN 50 para la pileta de cocina, DN 40 para los demás); el agua es DN 20. Cambiá sus tamaños, o editálos como cualquier familia: ver [Familias y sus tamaños](topic:families).

Una familia dice qué artefacto es en {{ui:Plumbing fixture}} de la pestaña {{ui:Connectors}} del editor de familias. Su desagüe se cuenta entonces en unidades de artefacto: 6 UHC para un inodoro, 1 para un lavatorio, 3 para una pileta de cocina o de lavadero, 2 para una ducha (NBR 8160), o las unidades de artefacto de desagüe de la tabla 709.1 del IPC.

## Desde el conector de un artefacto

Los elementos colocados desde una familia con conectores (el desagüe y la canilla de un lavatorio, el cuello de un terminal de aire: ver [Editar una familia](topic:family-editor)) muestran sus conectores libres como puntos mientras {{ui:Pipe}} o {{ui:Duct}} están activos, y el puntero se ajusta a ellos.

- **Empezar en un conector**: el tramo toma su sistema y tamaño (el caño del material de la barra en el tamaño del conector o justo por encima; un conducto redondo de su diámetro). Cuando el conector apunta hacia abajo o hacia arriba, como un desagüe bajo un lavatorio, el tramo primero baja o sube recto hasta la altura de **En**, y después sigue con tus clics.
- **Terminar en un conector**: el tramo baja o sube hasta él y termina ahí.

El tramo queda conectado al elemento en el archivo IFC, así que otros programas ven el artefacto como parte de su sistema. Un elemento colocado después con un conector al final de un tramo también queda conectado a él. Un tramo movido lejos de un conector deja de estar conectado a él.

## Los accesorios, hechos para vos

| Dónde | Qué hace BimCraft |
|---|---|
| Un tramo gira | Un codo. Caño de acero en radio largo de ASME B16.9 (1,5 × el tamaño), otro caño a un diámetro exterior, conducto redondo a 1,5 diámetros, conducto rectangular a un ancho (o a una altura para un giro hacia arriba o abajo) |
| Un tramo termina sobre la línea de otro | Una te; el otro tramo se corta ahí |
| Dos tramos se unen en un extremo con tamaños distintos | Una reducción (caños) o una transición (conductos) |
| Dos tramos del mismo tamaño se unen en un extremo con un ángulo | Un codo |

Cuando cambiás, movés o eliminás un tramo, se vuelve a hacer cada accesorio de ese nivel. Si un tramo es demasiado corto para los accesorios de sus extremos, BimCraft lo avisa y no cambia nada: alejá más la esquina.

:::note
Los accesorios y válvulas son genéricos: se dibujan a partir del tamaño del caño o conducto, no según el catálogo de un fabricante. Los accesorios de enchufe, de prensa y ranurados, los cuerpos de válvula y los equipos tienen tamaños propios de cada fabricante; verificalos con tu proveedor antes de pedir.
:::

## Montantes

Mientras dibujás, escribí una nueva altura en **En** y presioná {{key:Enter}}: el tramo sube o baja recto en la última esquina, con un codo en cada extremo. Un montante puede subir hasta el nivel de arriba. Cada nivel muestra las partes de un tramo que alcanza su rango de vista, con **UP** o **DN** en el montante.

## Desagües y su pendiente

Los desagües sanitarios y pluviales empiezan con la menor pendiente que permite el International Plumbing Code para su tamaño: 1/4 in. por pie hasta 2-1/2 in., 1/8 in. por pie de 3 a 6 in., 1/16 in. por pie desde 8 in. El caño de desagüe de PVC brasileño empieza con la pendiente de NBR 8160: 2 % hasta DN 75, 1 % desde DN 100. Escribí otra pendiente en la barra o en {{ui:Properties}}: `1/4"/ft`, `2 %` o `1:50`. El tramo baja desde su primer punto, así que dibujá los desagües en el sentido en que escurren. El plano muestra la caída y una flecha. {{ui:Properties}} avisa cuando un desagüe es más plano que el mínimo del código.

## Dimensionar los desagües por unidades de artefacto

Elegí un desagüe sanitario: **Fixture units** en {{ui:Properties}} dice cuántas unidades lleva y el menor tamaño que necesitan. Cuentan todos los artefactos sanitarios cuyo conector de desagüe está sobre el tramo, y también todo desagüe que desemboque en él: dibujá los desagües en el sentido en que escurren, cada uno terminando en el desagüe en el que desemboca.

- Los desagües de caño de desagüe de PVC brasileño cuentan **UHC** y siguen NBR 8160; los demás cuentan **DFU** y siguen el International Plumbing Code.
- **Drain**: un **Branch** (ramal) se dimensiona con la tabla del código para ramales de artefacto; un **Building drain** (desagüe de edificio) con su tabla según la pendiente, así que su **Slope** importa.
- Un desagüe nunca es más chico que los desagües de artefacto a los que sirve (un inodoro necesita DN 100, o 3 in.), ni que un desagüe que desemboque en él. Con NBR 8160, un desagüe de edificio es DN 100 como mínimo.

{{ui:Size the drains}} hace que cada desagüe sanitario del modelo que es demasiado chico para sus unidades de artefacto tome el tamaño que necesita, en un solo paso que podés deshacer. Un desagüe dibujado más grande de lo necesario se deja como está. Cuando un desagüe lleva más de lo que puede llevar el mayor tamaño de su caño con su pendiente, BimCraft lo avisa: dale una pendiente mayor u otro caño.

:::note
Las tablas son las de desagües horizontales. Las columnas, ventilaciones y desagües pluviales no se dimensionan aquí: verificalos, y todo el diseño, contra el código que aplica al proyecto.
:::

## Válvulas

1. Elegí {{ui:Valve}} y el tipo: de compuerta, de esfera, globo o retención.
2. Hacé clic en un caño donde va. El caño se corta alrededor y la válvula queda conectada a ambos lados.

En {{ui:Properties}} del tramo aparecen sus válvulas, cada una con {{ui:Remove}}.

Más tipos de válvula, un filtro, compuertas en conductos, tus propias especificaciones de caño y familias de fabricantes: ver [Especificaciones de caño, válvulas, compuertas y familias de fabricantes](topic:pipe-specs).

## Cambiar un tramo

Elegí cualquier parte de un tramo, en el plano o en la vista 3D. En {{ui:Properties}}:

- **System**, **Material**, **Class** y **Size** (caños), o **Shape**, **Width**, **Height** (conductos).
- **Height above the level** mueve todo el tramo hacia arriba o hacia abajo.
- **Insulation**: su espesor, que se guarda para la verificación de holgura y la lista de aberturas (no se dibuja): ver [Verificar caños y conductos contra la estructura](topic:mep-against-structure).
- Caño de acero: **Cut into spools**: ver [Spools de caño de acero y hojas de spool](topic:pipe-spools).
- **Slope** (caños).
- **Flow** con {{ui:Size it}}: para agua, el menor tamaño que mantiene el agua a 8 ft/s (2,4 m/s), o 5 ft/s (1,5 m/s) para agua caliente; a 3 m/s para el caño de agua de PVC brasileño (NBR 5626). Para conductos, la velocidad y la tasa de fricción del conducto tal como está dibujado. Los desagües sanitarios se dimensionan por sus unidades de artefacto: ver **Dimensionar los desagües por unidades de artefacto** más abajo.

Cada cambio es un paso de {{ui:Undo}}. {{key:Delete}} elimina el tramo completo.

## Planos

- Los caños menores de 150 mm (unas 6 in.) se dibujan como una línea sobre su eje; los caños mayores y todos los conductos como dos líneas a su ancho.
- Cada sistema tiene su propio color; el PDF del plano los imprime en negro.
- Cada tramo lleva su etiqueta con tamaño y sistema (por ejemplo `2" CW` o `16×10 SA`).
- El rango de vista de un plano decide qué tramos muestra, y {{ui:Shown in this plan}} puede dejar afuera **Pipes** o **Ducts**: ver [Vistas, rangos de vista y tus propias hojas](topic:views-and-sheets).

## Planillas y el cómputo

El panel {{ui:Schedules}} agrega **Pipes** (por sistema, material y tamaño, con sus longitudes), **Ducts** (por sistema, forma y tamaño, con longitudes y superficie exterior) y **Fittings and valves** (por tipo y tamaño, contados). Hacé clic en una fila para elegir qué lista; {{ui:Download CSV}} la descarga.

{{ui:Takeoff}} lleva los tramos a TakeoffCraft: caño y conducto por tamaño, como tramos dibujados en el plano (los desagües con pendiente se miden a lo largo de su pendiente), y los accesorios y válvulas contados donde están: ver [Enviar las cantidades del modelo a TakeoffCraft](topic:takeoff). Los montantes se dejan afuera de esa hoja, porque un plano no puede medirlos; la planilla Pipes tiene su longitud.

## En el archivo IFC

Cada tramo es un conjunto que contiene sus partes: segmentos de caño y de conducto, accesorios y válvulas, cada uno con su tipo, material, un color para su sistema y sus puertos. Los puertos que se tocan quedan conectados, y cada parte pertenece a su sistema de distribución (los archivos IFC2X3 reciben lo mismo como segmentos de flujo, accesorios y controladores de un sistema). Otros programas que leen sistemas IFC ven un tramo conectado por sistema. La definición propia del tramo se guarda con él, así BimCraft la vuelve a hacer igual cuando la cambiás.
