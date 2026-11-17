---
title: Vistas, rangos de vista y tus propias hojas
summary: Encontrá cada planta, elevación, corte, vista 3D, planilla y hoja en el explorador de proyecto, definí cómo se corta cada planta y qué muestra, hacé llamadas, dibujá líneas y sombreados en una vista, guardá ajustes en plantillas de vista y organizá tus propias hojas.
keywords: llamada, vista de llamada, vista de detalle, planta ampliada, dibujo, líneas de detalle, sombreado, región con sombreado, región rellena, patrón de relleno, planta de cielorraso reflejado, rcp, planta de cielorraso, grilla de cielorraso, artefactos de luz, explorador de proyecto, vistas, rango de vista, recorte, región de recorte, vista de recorte, escala de vista, subyacente, mostrar otro nivel, medio tono, plano de corte, altura de corte, superior, inferior, profundidad de vista, visibilidad, categorías, ocultar en vista, plantilla de vista, plantillas, hoja, hojas, cajetín, ventana gráfica, escala, organizar hojas, diseño, pdf, ajustes de planta, explorador
from: ee1d5afe
---

## Lo que vas a hacer

Trabajar como se organizan los proyectos BIM: cada vista en una sola lista, cada planta cortada donde querés, los mismos ajustes para varias plantas mediante una plantilla, y hojas que armás vos.

## El explorador de proyecto

1. Activá {{ui:Draw}}. El panel izquierdo tiene un {{ui:Project browser}} debajo de los modelos.
2. Lista:
   - **Plantas**: cada nivel. Hacé clic en una para ver su planta. El botón de deslizador a su lado define su rango de vista (abajo). Una planta que sigue una plantilla muestra el nombre de la plantilla.
   - **Plantas de cielorraso**: la planta de cielorraso reflejado de cada nivel (abajo).
   - **Llamadas**: cada llamada con la vista en que está dibujada, y {{ui:New callout}}. **Faltantes** lista las llamadas cuya vista ya no existe.
   - **Elevaciones** y **Cortes**: los cuatro lados y cada línea de corte. Hacé clic en una para abrir el conjunto de planos en que se dibujan.
   - **Vistas 3D**: las vistas que guardaste con {{ui:Views}}.
   - **Planillas**: hacé clic en una para mostrarla debajo de la planta.
   - **Hojas**: las hojas que hiciste, {{ui:New sheet}}, y {{ui:Drawing set…}} para el conjunto completo armado desde el modelo.
   - **Plantillas de vista**, con {{ui:New template}}, y **Vínculos** (los modelos vinculados).

## Definir el rango de vista de una planta

1. Hacé clic en el botón de deslizador junto a un nivel en **Plantas**.
2. Definí las alturas, por encima de ese nivel:
   - **Corte en**: donde la planta corta muros, puertas y ventanas (1200 mm, unos 4 pies, salvo que lo cambies).
   - **Superior**: lo que está por encima del corte y por debajo del tope se dibuja punteado (un mueble alto, una viga). Dejalo vacío para la altura del nivel.
   - **Inferior** y **Profundidad bajo el inferior**: lo que está más bajo que el corte se dibuja con líneas finas hasta el fondo, y esa distancia por debajo.
3. En **Mostrado en esta planta**, desmarcá lo que esta planta deja afuera: muebles, ambientes, columnas, etc.
4. Para dejar afuera elementos sueltos: seleccionalos en la planta o en la vista 3D, abrí el diálogo y hacé clic en {{ui:Hide the selected here}}. {{ui:Show them all}} los devuelve.
5. Hacé clic en {{ui:Use these settings}}.

La planta se corta de nuevo al instante, y el conjunto de planos y tus hojas la siguen. El corte de una nube de puntos también sigue la altura de corte.

## Recortar una planta, darle escala, mostrar otro nivel debajo

Las tres están en el mismo diálogo (el botón de deslizador junto a un nivel):

- **Escala**: la escala a la que la planta se imprime ({{ui:Print}} en la barra de la planta) y se coloca en una hoja. **Fit** elige la escala estándar más grande que entra.
- **Región de recorte**: hacé clic en {{ui:Draw on the plan…}}, y luego en una esquina y en la opuesta sobre la planta ({{key:Esc}} detiene). La planta fuera de la región se vela en pantalla, y igual podés trabajar ahí; impresa, en hojas y en el conjunto de planos, la planta muestra solo lo que está dentro. {{ui:Clear}} quita el recorte. {{ui:Fit}} ajusta a la vista del recorte.
- **Subyacente**: elegí otro nivel. Sus muros, elementos cortados, puertas y ventanas se dibujan en tono claro debajo de esta planta, para alinear con el nivel de abajo o de arriba. Aquí no se pueden seleccionar, e imprimen en gris claro.

Una plantilla de vista lleva la escala junto con las alturas y categorías. La región de recorte y el subyacente siempre pertenecen a una sola planta.

## La planta de cielorraso reflejado de un nivel

Cada nivel tiene una planta de cielorraso reflejado junto a su planta: la planta vista desde abajo, para diseñar cielorrasos y lo que cuelga de ellos.

1. Hacé clic en el nivel bajo **Plantas de cielorraso** en el explorador, o elegí {{ui:Ceiling plan}} junto al nivel en la barra de la planta.
2. Los muros se cortan a 2300 mm (unos 7'-6"). Se dibuja lo que está por encima de ese corte y por debajo de la altura del nivel: cielorrasos con su grilla y una etiqueta de altura (`CLG 2438`), luces, vigas. Puertas, ventanas y lo que está por debajo del corte se dejan afuera.
3. Para hacer un cielorraso, usá {{ui:Ceiling}} como en la planta, después seleccionalo y elegí su **Patrón** en Propiedades. Ver [Ambientes, pisos, cielorrasos y techos](topic:floors-and-roofs).
4. Para colgar una luz, colocá el elemento de la biblioteca mientras se muestra la planta de cielorraso: queda en **En el cielorraso**. Ver [Colocar equipos y muebles desde la biblioteca](topic:place-from-library).
5. El botón de deslizador junto a una planta de cielorraso define su corte y su tope, escala, categorías, región de recorte y subyacente, como en una planta. Las plantas de cielorraso no aceptan plantilla de vista.

Se dibuja con la misma orientación que la planta (un plano reflejado, no una imagen espejada). Un cielorraso más bajo que el corte no se dibuja: bajá el corte para la planta de cielorraso de ese nivel. Las plantas de cielorraso van a tus hojas como las plantas; el conjunto de planos no las agrega por sí solo.

## Hacer una llamada

Una llamada muestra una parte de una planta más grande, a su propia escala, como una vista propia: una cocina, una escalera, una esquina de muro.

1. Mostrá la planta, la planta de cielorraso o la llamada a la que pertenece.
2. Elegí {{ui:Annotate}} › {{ui:Callout}} en la barra de la planta (o {{ui:New callout}} en el explorador), después hacé clic en una esquina del área y en la opuesta. {{key:Esc}} detiene.
3. La llamada se hace a 1:20 (1/2" = 1'-0" en pies y pulgadas). Su rectángulo y una etiqueta redonda se dibujan en la planta.
4. Hacé clic en la etiqueta con {{ui:Select}}, o en la llamada del explorador, para abrirla: la planta muestra solo esa área, a la escala de la llamada. La barra dice {{ui:Callout:}} y su nombre; {{ui:Up}} vuelve a la vista en que está dibujada.
5. El botón de deslizador junto a ella (en el explorador o en la barra) le cambia el nombre, cambia su escala, vuelve a dibujar su rectángulo o la borra.

Una llamada muestra lo que muestra su vista: el mismo corte, las mismas categorías, los cielorrasos de una planta de cielorraso. Una llamada dentro de otra funciona igual. Poné una llamada en una hoja como una planta; su etiqueta indica entonces dónde está (`1 / A-501`: la primera vista en la hoja A-501). {{ui:Print}} en una llamada imprime solo esa área a su escala.

Borrar una llamada también borra las llamadas dibujadas dentro de ella, y las líneas y sombreados dibujados en ellas (se pregunta antes). Si se borra el nivel en el que está dibujada una llamada, la llamada queda en **Faltantes** hasta que la borres, y las hojas en que está la marcan como faltante.

## Dibujar líneas y sombreados en una vista

El dibujo es trabajo 2D que pertenece a una sola vista: notas en líneas, un área sombreada de hormigón o tierra, una región rellena. Nunca está en la vista 3D ni en otra planta.

1. Mostrá la planta, la planta de cielorraso o la llamada donde vas a dibujar.
2. Elegí en {{ui:Annotate}} de la barra de la planta:
   - {{ui:Line}}: hacé clic donde empieza y donde termina. La siguiente línea empieza donde terminó la última; {{key:Enter}} empieza de nuevo.
   - {{ui:Polyline}}: hacé clic en sus puntos; {{key:Enter}} o un doble clic la termina, un clic en su primer punto la cierra.
   - {{ui:Rectangle}}: dos esquinas opuestas.
   - {{ui:Hatch region}}: elegí el **Patrón** (Sólido, Diagonal, Cruzado, Hormigón, Aislación, Tierra) y su escala en la barra, después hacé clic en las esquinas; {{key:Enter}}, un doble clic o un clic en la primera esquina la cierran. Con {{ui:Fill a room}} tildado, un clic dentro de un ambiente sombrea su contorno.
3. Los puntos se ajustan como los muros; {{key:Shift}} mantiene una línea en escuadra, y podés escribir una longitud como en los muros. {{key:Backspace}} quita el último punto.

Seleccioná una línea o un sombreado con {{ui:Select}} en la planta. Propiedades cambia el patrón y la escala de un sombreado, y tiene {{ui:Move…}} (hacé clic en el punto desde donde mover, luego en el destino). {{key:Delete}} lo borra. Cada línea, sombreado y cambio es un paso.

Las líneas y sombreados se imprimen con la planta, pasan a tus hojas con ella y están en el conjunto de planos. Desmarcá **Anotaciones** en un rango de vista para dejarlos fuera de esa vista.

## Guardar los ajustes en una plantilla de vista

1. Hacé clic en {{ui:New template}} en el explorador, o en {{ui:Save as a template…}} en el rango de vista de una planta (esa planta entonces la usa).
2. Dale un nombre, definí las alturas y categorías, y hacé clic en {{ui:Save the template}}.
3. En el rango de vista de cualquier planta, elegí la plantilla. La planta toma sus alturas y categorías; cambiá la plantilla para cambiar cada planta que la usa. Los elementos que ocultaste uno por uno siguen ocultos en su propia planta.
4. Hacé clic en una plantilla del explorador para cambiarla, renombrarla o borrarla. Al borrar una, sus plantas conservan sus ajustes como propios.

## Armar una hoja propia

1. Hacé clic en {{ui:New sheet}}. Escribí su número y título, y elegí el papel.
2. Hacé clic en {{ui:Add}} junto a una planta, planta de cielorraso, llamada, elevación, corte o planilla. Cae en el medio de la hoja.
3. Arrastralo a donde va. Con él seleccionado, elegí una **Escala**, o dejalo en la escala propia de la planta (cuando la tiene), o en la que entra en un tercio de la hoja. {{ui:Take off the sheet}} lo saca.
4. Hacé clic en {{ui:Save the sheet}}. Queda en **Hojas**; hacé clic en ella para cambiarla después.
5. {{ui:Download as PDF}} guarda esa hoja como una página.

## Lo que deberías ver

- Plantas cortadas en tus alturas, con lo que está por encima del corte punteado y lo que quitaste dejado afuera.
- Una planta recortada, velada fuera de su región en pantalla y cortada a ella en papel, a la escala que le diste.
- Una planta de cielorraso con las grillas de los cielorrasos, las etiquetas de altura y las luces en el cielorraso.
- Llamadas con su rectángulo y etiqueta en la planta, cada una abriendo a su propia escala.
- Líneas y sombreados solo en la vista en que los dibujaste.
- Tus hojas se redibujan desde el modelo cada vez que las abrís, así siempre coinciden. Una vista cuyo nivel o línea de corte fue borrado se informa, no se dibuja.
- Cada cambio aquí es un paso: {{key:Mod+Z}} lo deshace.

:::note
Todo esto se guarda en el archivo IFC como conjuntos de propiedades que otros programas no tocan: el rango de vista y la planta de cielorraso de cada nivel en el nivel, y las plantillas, llamadas y tus hojas en el proyecto. Las líneas y sombreados son anotaciones IFC en su nivel, así que otros programas los ven como curvas 2D y áreas sombreadas (su propio dibujo de cada patrón), aunque no cuál vista les pertenece.
:::

:::tip
Otros programas BIM llaman al corte rango de vista o plano de corte, a las plantillas plantillas de vista o ajustes de vista, a las líneas de dibujo líneas de detalle, y a las regiones de sombreado regiones rellenas. Las ideas son las mismas; los ajustes de vista no viajan a ellos.
:::
