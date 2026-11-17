---
title: Ensambles de muro y cotas de referencia
summary: Cree sus propios tipos de muro capa por capa con un núcleo explícito, mantenga una biblioteca de materiales del proyecto y acote a caras y ejes que siguen unidos cuando cambia el muro.
keywords: lod, nivel de desarrollo, lod 200, lod 300, genérico, ensamble de muro, tipo de muro, capas, núcleo, cara del núcleo, eje del núcleo, cámara, cámara de aire, membrana, barrera contra humedad, biblioteca de materiales, materiales, espesor, cota de referencia, cota, asociativo, línea de ubicación, revestimiento, montante, tablero de yeso
from: 4ea8fbf5
---

## Qué hará

Haga un tipo de muro que coincida con el muro que va a construir: revestimiento exterior, entablado, un núcleo de montantes de 5½ pulgadas y tablero de yeso, o ladrillo, una cámara de aire y un muro de madera. Marque qué capas son el núcleo, para que una cota o una línea de ubicación pueda sostener el núcleo mientras cambian los acabados que lo rodean. Luego acote los muros a las caras y ejes que quiera.

## Crear un tipo de muro

1. Comience un edificio o abra un modelo IFC, active {{ui:Dibujo}} y elija la herramienta {{ui:Muro}}.
2. Elija una plantilla en {{ui:Tipo de muro}} y abra {{ui:Ensambles de muro…}}. Una plantilla se abre como copia; asígnele un nombre al nuevo tipo.
3. Las capas van desde el exterior, en la parte superior de la lista, hasta el interior, en la parte inferior. Elija el material de cada capa, escriba su espesor (en las unidades del proyecto, o unidades explícitas como `12.7 mm` o `1/2"`), elija su función (acabado, sustrato, estructura, aislamiento, membrana) y marque las capas de **Núcleo**. El núcleo debe ser un grupo continuo.
4. {{ui:Agregar capa}} agrega una capa; {{ui:Agregar cámara}} agrega una cámara de aire con su ventilación (no especificada, sin ventilar, ventilada); {{ui:Agregar membrana}} agrega una capa sin espesor nominal, como una barrera contra humedad. Las flechas mueven una capa hacia afuera o hacia adentro.
5. La vista previa dibuja las capas a escala, con el núcleo subrayado y numerado como las filas, y acota cada capa, el núcleo y el total. {{ui:Guardar tipo}}.

El nuevo tipo aparece en la lista de tipos de la herramienta Muro y en las **Propiedades** de un muro seleccionado. Guardar un tipo que edita cambia cada muro que lo usa; {{ui:Duplicar tipo}} crea uno separado y lo asigna solo a los muros que seleccionó. Cada guardado es un paso de deshacer, junto con los muros que mueve, las puertas y ventanas que contienen y las cotas que dependen de ellos.

Una cámara agrega espesor. Una membrana no agrega ninguno: se queda en el tipo para que una tabla pueda encontrarla después, y no cuenta para el espesor del muro ni del núcleo. Una cámara o una membrana nunca se cuenta como material sólido. En un archivo guardado como IFC2X3, una membrana se conserva en el registro del tipo, pero se omite de sus capas de material físico.

## Etiquetar un tipo con su nivel de desarrollo (LOD)

Un tipo puede indicar qué tan desarrollado está. En el editor, **Nivel de desarrollo (LOD)** ofrece la escala fija 100, 200, 300, 350, 400 y 500, o **No definido**. Un muro genérico ("Muro 230 genérico") es LOD 100 o 200; una composición específica con sus capas reales ("230 ladrillo de arcilla, revocado de ambos lados") es LOD 300 o más. La etiqueta la define usted: BimCraft no la calcula, y las plantillas iniciales no tienen ninguna.

La etiqueta aparece junto al nombre del tipo en la lista de tipos de la herramienta Muro, en las Propiedades de un muro y en la lista de [Cambiar tipo](topic:wall-tools); el informe después de un cambio indica si el nivel subió o bajó. Para verla en la tabla **Muros por tipo** y en su CSV, marque **Mostrar el LOD de cada tipo de muro en la tabla de muros** en Configuración › BimCraft › Muros: se agrega una última columna, LOD. Se guarda en el archivo IFC con el tipo (en el conjunto de propiedades `CadCraft_WallType`, como la propiedad `LOD` y dentro del registro del tipo), así que sigue ahí cuando vuelve a abrir el archivo. Por ahora la etiqueta está solo en los tipos de muro, no en elementos sueltos ni en otros tipos de elemento.

## Muros genéricos para la etapa de croquis

La lista de tipos de la herramienta Muro empieza con dos muros **genéricos**: **Muro genérico 200 mm (exterior)** y **Muro genérico 100 mm (interior)**. Cada uno es una capa del material genérico, etiquetada LOD 200. Úselos cuando sepa dónde van los muros y todavía no de qué están hechos.

Un muro cuyo tipo está etiquetado **LOD 100** o **LOD 200** se dibuja en cada planta como **una sola banda rayada**, en todos los niveles de detalle: sin capas, sin líneas de capa. Eso vale para los muros genéricos y para cualquier tipo propio que etiquete LOD 100 o 200. El muro en sí está completo: tiene su espesor, sus puertas y ventanas, sus cuartos y sus cantidades.

Para desarrollarlo, cambie su tipo (Editar › Muros › **Cambiar tipo**, o Tipo en Propiedades). El muro no se vuelve a dibujar nunca: el mismo muro toma el nuevo tipo, y el informe dice qué se movió. Un tipo etiquetado LOD 300 o superior se dibuja con sus capas, como antes.

Para dibujar cada muro por sus capas sin importar su etiqueta: Configuración › BimCraft › Muros, desmarque **Dibujar muros de tipo LOD 100 o LOD 200 como una banda rayada**.

Las puertas y ventanas iniciales también son tipos genéricos (un tamaño y una forma de abrir, no un producto). Con **Mostrar el LOD de cada tipo de muro en la tabla de muros** activado, las tablas de Puertas y Ventanas muestran LOD 200 para ellas.

## Dar a un tipo sus datos de cuantificación

En el editor de tipos de muro, **Datos de cuantificación** registra lo que un presupuestista necesita saber sobre el muro, una sola vez para el tipo: la **unidad** con la que está construido (un ladrillo o un bloque: su nombre, largo, alto y ancho), el **mortero** (nombre y espesor de junta) y una **tarifa** con su código de moneda (tres letras, como USD, EUR o ZAR) y su base: por metro cuadrado o pie cuadrado de área neta de muro, por metro o pie de longitud de muro, o por muro. Todo es opcional.

Se guarda con el tipo en el archivo. Entonces cada muro del tipo lo informa: {{ui:Tablas}} › **Tipos de muro: datos de cuantificación** lista la unidad, el mortero, la tarifa y la tarifa por la cantidad medida, y la cuantificación enviada a TakeoffCraft lleva estos datos en la partida de ese tipo de muro. Cambie el dato en el tipo y todos los muros lo siguen.

Tres campos más sirven para contar ladrillos o bloques, y mortero:

- **Desperdicio en unidades, %** se suma al número de unidades. Déjelo vacío para usar la cifra del método de medición del proyecto, o ninguna si el método no tiene. Escriba 0 para no tener desperdicio, sin importar lo que diga el método.
- **Mortero adicional, %** es para las perforaciones o rebajes que llevan mortero. Se suma al volumen de mortero. Déjelo vacío si no hay.
- **Capas construidas con esta unidad**: marque cada capa que sea una hoja de este ladrillo o bloque. Un muro con cámara tiene dos. Si no marca ninguna, se cuentan las capas del núcleo.

La tarifa también puede ser por unidad a pedir, por 1000 unidades a pedir o por m³ de mortero. Cuando la unidad tiene largo y alto, **Tipos de muro: datos de cuantificación** muestra las unidades por m² (o ft²) de una hoja, las unidades a pedir y el volumen de mortero; las fórmulas están en [Ladrillos, bloques y mortero](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipo tiene una sola unidad: dos hojas de unidades distintas (una hoja exterior de ladrillo y una hoja interior de bloque) todavía no se pueden contar en un mismo tipo.

## Mantener quieto el núcleo

En **Propiedades**, asigne a la **Línea de ubicación** de un muro una cara del núcleo o el eje del núcleo. Cuando después agregue o engruese un acabado, esa línea se queda donde está y el muro crece a su alrededor; los muros que llegan a ella en una esquina la siguen, así las esquinas rectas quedan cerradas.

## Materiales del proyecto

{{ui:Biblioteca de materiales…}} lista los materiales del proyecto: nombre, categoría, el espesor con que empieza una capa, color de visualización, patrón de relleno de corte y notas. La biblioteca se guarda en el IFC con el proyecto. Al elegir un material para una capa, esa capa toma el espesor predeterminado del material, que después puede cambiar; editar la biblioteca más adelante nunca cambia el tamaño de los muros que ya dibujó. También puede crear un material desde la lista de materiales de la capa con {{ui:+ Material nuevo…}}.

## Cotas de referencia

{{ui:Anotar}} › {{ui:Cota de referencia}}: elija horizontal, vertical o alineada, y una referencia: la cara exterior o interior del acabado, la cara exterior o interior del núcleo, el eje del muro o el eje del núcleo. Elija el primer muro, cambie la referencia si quiere, elija el segundo y luego haga clic donde va la línea de cota. Dos referencias en un mismo muro miden su espesor total o el de su núcleo. {{ui:Cotas de referencia…}} lista las cotas de la vista, incluidas las que perdieron un muro, con Propiedades, Volver a vincular referencias y Eliminar.

### Acotar todo el plano con reglas

{{ui:Anotar}} › {{ui:Acotar el plano…}} acota el exterior de la planta que está viendo: el tamaño total en cada dirección, y una fila de cotas a lo largo de cada borde exterior (extremos de muro, muros que llegan al borde, y las puertas y ventanas en él), con las filas colocadas fuera del edificio. Marque lo que quiera, lea el conteo y luego {{ui:Agregar las cotas}}. Son cotas de referencia normales, así que siguen a los muros cuando estos se mueven, y puede elegir, mover o eliminar cualquiera de ellas. El conjunto completo es un paso de deshacer, y volver a ejecutarlo no crea duplicados.

Solo acota el exterior: los cuartos dentro del edificio, los muros curvos y los muros que no son cuadrados con respecto a la planta se dejan para las herramientas manuales, y las líneas de eje no son muros, así que aquí no se hacen cotas entre ejes. Su asistente conectado puede hacer lo mismo con `plan_dimension`.

La cota está unida a los muros, no a un punto de la pantalla: cuando un muro se mueve o cambia su tipo, el valor la sigue. Si se elimina un muro, la cota dice que no está resuelta y no muestra número, hasta que la vuelva a vincular o deshaga. El cuadro de longitud también acepta coordenadas de planta, como `10',12'`, para una línea de cota en un lugar exacto.

Las cotas son para los muros que BimCraft dibujó, en vistas de planta. Todavía no existen: cotas en secciones y alzados, cotas a puertas, ventanas y otros componentes, y capas de ensamble dibujadas en la planta y en la sección; vea [Lo que aún no está hecho](topic:not-built-yet).

## Vea también

[Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door), [Propiedades](topic:properties-panel).
