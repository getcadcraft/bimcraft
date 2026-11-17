---
title: Composiciones de muro y cotas de referencia
summary: Armá tus propios tipos de muro capa por capa con un núcleo explícito, mantené una biblioteca de materiales del proyecto y acotá a caras y ejes que siguen unidos cuando el muro cambia.
keywords: lod, nivel de desarrollo, lod 200, lod 300, genérico, composición de muro, tipo de muro, capas, núcleo, cara del núcleo, eje del núcleo, cámara, entrehierro, membrana, barrera de aire, biblioteca de materiales, materiales, espesor, cota de referencia, cota, asociativo, línea de ubicación, revestimiento, montante, placa de yeso
from: 4ea8fbf5
---

## Mba'e rejapóta

Armá un tipo de muro que coincida con el muro que vas a construir: revestimiento, placa, núcleo de montantes de 5½ pulgadas y placa de yeso, o ladrillo, entrehierro y muro de madera. Marcá qué capas son el núcleo, así una cota o una línea de ubicación puede sostener el núcleo mientras cambian los acabados alrededor. Después acotá muros a las caras y ejes que querés.

## Armar un tipo de muro

1. Empezá un edificio o abrí un modelo IFC y activá {{ui:Draw}}, luego elegí la herramienta {{ui:Wall}}.
2. Elegí un punto de partida en {{ui:Wall type}} y abrí {{ui:Wall assemblies…}}. El punto de partida se abre como copia; ponele un nombre al tipo nuevo.
3. Las capas van desde el exterior, arriba de la lista, hasta el interior, abajo. Elegí el material de cada capa, escribí su espesor (unidades del proyecto, o explícitas como `12.7 mm` o `1/2"`), elegí su función (acabado, sustrato, estructura, aislante, membrana) y marcá las capas de **Núcleo**. El núcleo tiene que ser un grupo continuo.
4. {{ui:Add layer}} agrega una capa, {{ui:Add cavity}} agrega un entrehierro con su ventilación (sin especificar, sin ventilar, ventilado), {{ui:Add membrane}} agrega una capa sin espesor nominal, como una barrera de aire. Las flechas mueven una capa hacia afuera o hacia adentro.
5. La vista previa dibuja las capas a escala con el núcleo subrayado, numeradas como las filas, y acota cada capa, el núcleo y el total. {{ui:Save type}}.

El tipo nuevo está en la lista de la herramienta Muro y en **Propiedades** de un muro seleccionado. Guardar un tipo que editás cambia cada muro que lo usa; {{ui:Duplicate type}} hace uno aparte y lo asigna solo a los muros seleccionados. Cada guardado es un paso de deshacer, junto con los muros que mueve, las puertas y ventanas en ellos y las cotas que dependen de ellos.

Un entrehierro agrega ancho. Una membrana no agrega nada: queda en el tipo para que una planilla pueda encontrarla después, y no cuenta para el espesor del muro ni del núcleo. Un entrehierro o una membrana nunca se cuentan como material sólido. En un archivo guardado como IFC2X3, una membrana queda en el registro del tipo pero no aparece en sus capas de material físico.

## Etiquetar un tipo con su nivel de desarrollo (LOD)

Un tipo puede indicar qué tan desarrollado está. En el editor, **Nivel de desarrollo (LOD)** ofrece la escala fija 100, 200, 300, 350, 400 y 500, o **Sin definir**. Un muro genérico ("Wall 230 generic") es LOD 100 o 200; una composición específica con sus capas reales ("230 clay brick, plastered both sides") es LOD 300 o más. La etiqueta la define vos: BimCraft no la calcula, y los tipos de partida no tienen.

La etiqueta aparece al lado del nombre del tipo en la lista de tipos de la herramienta Muro, en **Propiedades** de un muro y en la lista de [Cambiar tipo](topic:wall-tools); el informe después de un cambio dice si el nivel subió o bajó. Para verla en la planilla **Muros por tipo** y en su CSV, marcá **Mostrar el LOD de cada tipo de muro en la planilla de muros** en Configuración › BimCraft › Muro-kuéra: se agrega una última columna, LOD. Se guarda en el archivo IFC con el tipo (en el conjunto de propiedades `CadCraft_WallType`, como la propiedad `LOD` y dentro del registro del tipo), así que sigue ahí cuando volvés a abrir el archivo. Por ahora la etiqueta es solo para tipos de muro, no para elementos sueltos ni otros tipos de elemento.

## Muros genéricos para la etapa de boceto

La lista de Tipo de la herramienta Muro empieza con dos muros **genéricos**: **Generic wall 200 mm (exterior)** y **Generic wall 100 mm (interior)**. Cada uno es una capa del material genérico, etiquetada LOD 200. Usalos cuando sabés dónde van los muros y todavía no de qué están hechos.

Un muro cuyo tipo está etiquetado **LOD 100** o **LOD 200** se dibuja en cada planta como **una banda rayada**, en todos los niveles de detalle: sin capas, sin líneas de capa. Eso vale para los muros genéricos y para cualquier tipo propio que etiquetes LOD 100 o 200. El muro en sí está completo: tiene su espesor, sus puertas y ventanas, sus ambientes y sus cantidades.

Para desarrollarlo, cambiá su tipo (Editar › Muro-kuéra › **Cambiar tipo**, o Tipo en Propiedades). El muro no se vuelve a dibujar: el mismo muro toma el tipo nuevo, y el informe dice qué se movió. Un tipo etiquetado LOD 300 o más se dibuja con sus capas como antes.

Para dibujar cada muro por sus capas sin importar la etiqueta: Configuración › BimCraft › Muro-kuéra, desmarcá **Dibujar muros de un tipo LOD 100 o LOD 200 como una banda rayada**.

Las puertas y ventanas de partida también son tipos genéricos (un tamaño y una forma de abrir, no un producto). Con **Mostrar el LOD de cada tipo de muro en la planilla de muros** activado, las planillas de Puertas y Ventanas muestran LOD 200 para ellas.

## Darle a un tipo sus datos de cómputo

En el editor de tipos de muro, **Datos de cómputo** toma lo que un presupuestista necesita saber del muro, una vez para el tipo: la **unidad** con la que está hecho (un ladrillo o un bloque: su nombre, largo, alto y ancho), el **mortero** (nombre y espesor de junta) y una **tarifa** con su código de moneda (tres letras, como USD, EUR o ZAR) y a qué se aplica: un metro cuadrado o pie cuadrado de superficie neta de muro, un metro o pie de largo de muro, o cada muro. Todo es opcional.

Se guarda con el tipo en el archivo. Cada muro del tipo entonces lo informa: {{ui:Schedules}} › **Tipos de muro: datos de cómputo** lista la unidad, el mortero, la tarifa y la tarifa por la cantidad medida, y el cómputo que se pasa a TakeoffCraft lleva eso en el ítem de ese tipo de muro. Cambialo en el tipo y cada muro lo sigue.

Tres campos más son para contar ladrillos o bloques y mortero:

- **Desperdicio en unidades, %** se suma al número de unidades. Dejalo vacío para usar la cifra del método de medición del proyecto, o ninguna si el método no tiene. Ingresá 0 para no tener desperdicio, sea cual sea el método.
- **Mortero extra, %** es para huecos o perforaciones que llevan mortero. Se suma al volumen de mortero. Dejalo vacío si no hay.
- **Capas construidas con esta unidad**: marcá cada capa que es una hoja de este ladrillo o bloque. Un muro con cámara tiene dos. Si no marcás ninguna, se cuentan las capas del núcleo.

La tarifa también puede ser por unidad a pedir, por 1000 unidades a pedir o por m³ de mortero. Cuando la unidad tiene largo y alto, **Tipos de muro: datos de cómputo** muestra las unidades por m² (o ft²) de una hoja, las unidades a pedir y el volumen de mortero; las fórmulas están en [Ladrillos, bloques y mortero](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipo tiene una sola unidad: dos hojas de unidades distintas (una hoja exterior de ladrillo y una hoja interior de bloque) todavía no se pueden contar en un solo tipo.

## Mantener el núcleo quieto

En **Propiedades**, poné la **Línea de ubicación** de un muro en una cara del núcleo o en el eje del núcleo. Cuando después agregues o engrosés un acabado, esa línea se queda donde está y el muro crece alrededor; los muros que llegan a ella en una esquina la siguen, así que las esquinas rectas quedan cerradas.

## Materiales del proyecto

{{ui:Material library…}} lista los materiales del proyecto: nombre, categoría, el espesor con el que empieza una capa, color de visualización, patrón de relleno de corte y notas. La biblioteca se guarda en el IFC con el proyecto. Elegir un material para una capa le da a esa capa el espesor predeterminado del material, que después podés cambiar; editar la biblioteca más tarde nunca redimensiona muros que ya dibujaste. También podés crear un material desde la lista de materiales de la capa con {{ui:+ New material…}}.

## Cotas de referencia

{{ui:Annotate}} › {{ui:Reference dimension}}: elegí horizontal, vertical o alineada, y una referencia: la cara de acabado exterior o interior, la cara del núcleo exterior o interior, el eje del muro o el eje del núcleo. Elegí el primer muro, cambiá la referencia si querés, elegí el segundo y después hacé clic donde va la línea de cota. Dos referencias en un mismo muro miden su espesor total o el de su núcleo. {{ui:Reference dimensions…}} lista las cotas de la vista, incluidas las que perdieron un muro, con Propiedades, Volver a enlazar referencias y Eliminar.

### Acotar toda la planta por reglas

{{ui:Annotate}} › {{ui:Dimension the plan…}} acota el exterior de la planta del piso que estás viendo: el tamaño total en cada dirección, una fila de cotas a lo largo de cada borde exterior (extremos de muros, muros que llegan al borde, y las puertas y ventanas en él), con las filas ubicadas fuera del edificio. Marcá lo que querés, leé la cantidad y después {{ui:Add the dimensions}}. Son cotas de referencia comunes, así que siguen a los muros cuando se mueven y podés elegir, mover o eliminar cualquiera; el conjunto entero es un paso de deshacer, y volver a ejecutarlo no crea duplicados.

Acota solo el exterior: los ambientes dentro del edificio, los muros curvos y los muros que no son cuadrados con la planta se dejan para las herramientas manuales, y las líneas de grilla no son muros, así que las cotas entre grillas no se hacen aquí. Tu asistente conectado puede hacer lo mismo con `plan_dimension`.

La cota está ligada a los muros, no a un punto de la pantalla: cuando un muro se mueve o cambia su tipo, el valor la sigue. Si se elimina un muro, la cota dice que no está resuelta y no muestra número, hasta que la vuelvas a enlazar o deshagas. El cuadro de largo también acepta coordenadas de planta como `10',12'` para una línea de cota en un lugar exacto.

Las cotas son para muros que BimCraft dibujó, en vistas de planta. Todavía no están hechas: cotas en cortes y elevaciones, a puertas, ventanas y otros componentes, y capas de conjunto dibujadas en planta y corte; ver [Qué todavía no está hecho](topic:not-built-yet).

## Ver también

[Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door), [Propiedades](topic:properties-panel).
