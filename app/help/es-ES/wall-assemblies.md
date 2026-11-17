---
title: Composiciones de muro y cotas de referencia
summary: Cree sus propios tipos de muro capa a capa con un núcleo explícito, mantenga una biblioteca de materiales del proyecto y acote a caras y ejes que siguen unidos cuando cambia el muro.
keywords: LOD, nivel de desarrollo, LOD 200, LOD 300, genérico, composición de muro, tipo de muro, capas, núcleo, cara del núcleo, eje del núcleo, cámara, cámara de aire, membrana, lámina de barrera, biblioteca de materiales, materiales, espesor, cota de referencia, cota, asociativa, línea de referencia, revestimiento exterior, montante, placa de yeso laminado
from: 4ea8fbf5
---

## Qué hará

Cree un tipo de muro que coincida con el muro que va a construir: un revestimiento exterior, un tablero de cerramiento, un núcleo de montantes de 5½ pulgadas y placa de yeso laminado, o ladrillo, una cámara de aire y un muro de entramado de madera. Marque qué capas son el núcleo, para que una cota o una línea de referencia mantengan el núcleo mientras cambian los acabados que lo rodean. Después acote los muros a las caras y ejes que quiera.

## Crear un tipo de muro

1. Inicie un edificio o abra un modelo IFC, active {{ui:Dibujo}} y elija la herramienta {{ui:Muro}}.
2. Elija un punto de partida en {{ui:Tipo de muro}} y abra {{ui:Composiciones de muro…}}. Un punto de partida se abre como copia; dé un nombre al nuevo tipo.
3. Las capas van desde el exterior, arriba de la lista, hasta el interior, abajo. Elija el material de cada capa, escriba su espesor (unidades del proyecto, o valores explícitos como `12.7 mm` o `1/2"`), elija su función (acabado, sustrato, estructura, aislamiento, membrana) y marque las capas de **Núcleo**. El núcleo debe ser un grupo continuo.
4. {{ui:Añadir capa}} añade una capa, {{ui:Añadir cámara}} añade una cámara de aire con su ventilación (sin especificar, sin ventilación, ventilada), y {{ui:Añadir membrana}} añade una capa sin espesor nominal, como una lámina de barrera. Las flechas mueven una capa hacia fuera o hacia dentro.
5. La vista previa dibuja las capas a escala, con el núcleo subrayado, numeradas como las filas, y acota cada capa, el núcleo y el total. {{ui:Guardar tipo}}.

El nuevo tipo aparece en la lista de la herramienta de muro y en las **Propiedades** de un muro seleccionado. Al guardar un tipo que edita, cambian todos los muros que lo usan; {{ui:Duplicar tipo}} crea uno independiente y lo asigna solo a los muros que haya seleccionado. Cada guardado es un paso de deshacer, junto con los muros que mueve, las puertas y ventanas que contienen y las cotas que dependen de ellos.

Una cámara añade anchura. Una membrana no añade ninguna: se queda en el tipo para que una tabla la pueda encontrar más adelante, y no cuenta para el espesor del muro ni del núcleo. Una cámara o una membrana nunca se cuentan como material macizo. En un archivo guardado como IFC2X3, la membrana se conserva en el registro del tipo, pero se omite de sus capas de material físico.

## Etiquetar un tipo con su nivel de desarrollo (LOD)

Un tipo puede indicar su grado de desarrollo. En el editor, **Nivel de desarrollo (LOD)** ofrece la escala fija 100, 200, 300, 350, 400 y 500, o **Sin definir**. Un muro genérico ("Wall 230 generic") es LOD 100 o 200; una composición concreta con sus capas reales ("230 clay brick, plastered both sides") es LOD 300 o superior. La etiqueta la define usted: BimCraft no la calcula, y los tipos de inicio no tienen ninguna.

La etiqueta aparece junto al nombre del tipo en la lista de tipos de la herramienta de muro, en las Propiedades de un muro y en la lista de [Cambiar tipo](topic:wall-tools), y el informe tras un cambio indica si el nivel subió o bajó. Para verla en la tabla **Muros por tipo** y en su CSV, marque **Mostrar el LOD de cada tipo de muro en la tabla de muros** en Configuración › BimCraft › Muros: se añade una última columna, LOD. Se guarda en el archivo IFC con el tipo (en el conjunto de propiedades `CadCraft_WallType` de este, como propiedad `LOD`, y dentro del registro del tipo), por lo que sigue ahí al volver a abrir el archivo. Por ahora la etiqueta solo está en los tipos de muro, no en elementos sueltos ni en otros tipos de elemento.

## Muros genéricos para la fase de esbozo

La lista de tipos de la herramienta de muro empieza con dos muros **genéricos**: **Generic wall 200 mm (exterior)** y **Generic wall 100 mm (interior)**. Cada uno es una capa del material genérico, etiquetada LOD 200. Úselos cuando sepa dónde van los muros, pero aún no de qué están hechos.

Un muro cuyo tipo está etiquetado como **LOD 100** o **LOD 200** se dibuja en todas las plantas como **una sola franja con trama**, en todos los niveles de detalle: sin capas ni líneas de capa. Esto vale para los muros genéricos y para cualquier tipo propio que etiquete como LOD 100 o 200. El muro en sí está completo: tiene su espesor, sus puertas y ventanas, sus habitaciones y sus cantidades.

Para desarrollarlo, cambie su tipo (Editar › Muros › **Cambiar tipo**, o Tipo en Propiedades). El muro no se vuelve a dibujar: el mismo muro toma el nuevo tipo, y el informe indica qué se ha movido. Un tipo etiquetado como LOD 300 o superior se dibuja con sus capas, como antes.

Para dibujar todos los muros por sus capas, sea cual sea su etiqueta: Configuración › BimCraft › Muros, desmarque **Dibujar los muros de tipo LOD 100 o LOD 200 como una sola franja con trama**.

Las puertas y ventanas de inicio también son tipos genéricos (una medida y un modo de apertura, no un producto). Con **Mostrar el LOD de cada tipo de muro en la tabla de muros** activado, las tablas de Puertas y Ventanas muestran LOD 200 para ellas.

## Asignar a un tipo sus datos de cubicación

En el editor de tipos de muro, **Datos de cubicación** recoge lo que necesita un presupuestista sobre el muro, una sola vez para el tipo: la **unidad** de la que está hecho (un ladrillo o un bloque: su nombre, longitud, altura y anchura), el **mortero** (nombre y espesor de junta) y una **tarifa** con su código de moneda (tres letras, como USD, EUR o ZAR) y la base de la tarifa: un metro cuadrado o pie cuadrado de superficie neta de muro, un metro o pie de longitud de muro, o cada muro. Todo es opcional.

Se guarda con el tipo en el archivo. Cada muro del tipo lo informa entonces: {{ui:Tablas}} › **Tipos de muro: datos de cubicación** muestra la unidad, el mortero, la tarifa y la tarifa por la cantidad medida, y la cubicación entregada a TakeoffCraft lleva estos datos en el elemento de ese tipo de muro. Cambie los datos en el tipo y todos los muros se actualizan.

Otros tres campos sirven para contar ladrillos o bloques y el mortero:

- **Desperdicio en unidades, %** se suma al número de unidades. Déjelo vacío para usar la cifra del método de medición del proyecto, o ninguna si el método no tiene. Escriba 0 para no tener desperdicio, sea cual sea el método.
- **Mortero adicional, %** es para las rebajas o perforaciones que llevan mortero. Se suma al volumen de mortero. Déjelo vacío si no hay.
- **Capas construidas con esta unidad**: marque cada capa que sea una hoja de este ladrillo o bloque. Un muro con cámara tiene dos. Si no marca ninguna, se cuentan las capas del núcleo.

La tarifa también puede ser por unidad a pedir, por 1000 unidades a pedir o por m³ de mortero. Cuando la unidad tiene longitud y altura, **Tipos de muro: datos de cubicación** muestra las unidades por m² (o ft²) de una hoja, las unidades a pedir y el volumen de mortero; las fórmulas están en [Ladrillos, bloques y mortero](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipo tiene una sola unidad: por ahora no se pueden contar en un mismo tipo dos hojas de unidades distintas (una hoja exterior de ladrillo y una hoja interior de bloque).

## Mantener el núcleo fijo

En **Propiedades**, ponga la **Línea de referencia** de un muro en una cara del núcleo o en el eje del núcleo. Cuando después añada o engrose un acabado, esa línea se queda donde está y el muro crece a su alrededor; los muros que llegan a ella en una esquina la siguen, de modo que las esquinas rectas siguen cerradas.

## Materiales del proyecto

{{ui:Biblioteca de materiales…}} enumera los materiales del proyecto: nombre, categoría, el espesor con el que empieza una capa, color de visualización, patrón de relleno de corte y notas. La biblioteca se guarda en el IFC con el proyecto. Al elegir un material para una capa, esa capa toma el espesor predeterminado del material, que después puede cambiar; editar la biblioteca más adelante nunca cambia el tamaño de los muros que ya dibujó. También puede crear un material desde la lista de materiales de la capa con {{ui:+ Material nuevo…}}.

## Cotas de referencia

{{ui:Anotar}} › {{ui:Cota de referencia}}: elija horizontal, vertical o alineada, y una referencia: la cara de acabado exterior o interior, la cara del núcleo exterior o interior, el eje del muro o el eje del núcleo. Elija el primer muro, cambie la referencia si lo desea, elija el segundo y, después, haga clic donde vaya la línea de cota. Dos referencias en un mismo muro miden su espesor total o el de su núcleo. {{ui:Cotas de referencia…}} enumera las cotas de la vista, incluidas las que han perdido un muro, con Propiedades, Volver a vincular referencias y Eliminar.

### Acotar toda la planta por reglas

{{ui:Anotar}} › {{ui:Acotar la planta…}} acota el exterior de la planta que está viendo: el tamaño total en cada dirección, una fila de cotas a lo largo de cada borde exterior (extremos de muro, muros que llegan al borde, y las puertas y ventanas que contiene), con las filas colocadas separadas del edificio. Marque lo que quiera, lea el recuento y después {{ui:Añadir las cotas}}. Son cotas de referencia normales, así que siguen a los muros cuando estos se mueven, y puede seleccionar, mover o eliminar cualquiera de ellas; el conjunto completo es un solo paso de deshacer, y volver a ejecutarlo no crea ninguna duplicada.

Solo acota el exterior: las habitaciones del interior, los muros curvos y los muros que no son ortogonales a la planta se dejan para las herramientas manuales, y las líneas de rejilla no son muros, por lo que aquí no se crean cotas entre rejillas. Su asistente conectado puede hacer lo mismo con `plan_dimension`.

La cota está unida a los muros, no a un punto de la pantalla: cuando un muro se mueve o cambia su tipo, el valor se actualiza. Si se elimina un muro, la cota indica que no está resuelta y no muestra número, hasta que la vuelva a vincular o deshaga la acción. El cuadro de longitud también admite coordenadas de planta como `10',12'` para una línea de cota en un lugar exacto.

Las cotas son para los muros que BimCraft dibujó, en vistas de planta. Aún no están disponibles: cotas en secciones y alzados, a puertas, ventanas y otros componentes, y capas de composición dibujadas en la planta y en la sección; véase [Lo que aún no está disponible](topic:not-built-yet).

## Véase también

[Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door), [Propiedades](topic:properties-panel).
