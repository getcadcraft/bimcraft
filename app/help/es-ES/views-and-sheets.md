---
title: Vistas, rangos de vista y hojas propias
summary: Encontrar cada planta, alzado, sección, vista 3D, tabla y hoja en el navegador del proyecto; definir la altura de corte y lo que muestra cada planta; crear llamadas; dibujar líneas y tramas en una vista; guardar los ajustes en plantillas de vista, y organizar hojas propias.
keywords: llamada, vista de llamada, vista de detalle, planta ampliada, delineación, líneas de detalle, líneas de delineación, trama, región de trama, región rellena, patrón de relleno, plano de plafones, rcp, rejilla de techo, luminarias, navegador del proyecto, vistas, rango de vista, recorte, región de recorte, escala de vista, subyacente, mostrar otro nivel, semitono, plano de corte, altura de corte, superior, inferior, profundidad de vista, visibilidad, categorías, ocultar en vista, plantilla de vista, plantillas, hoja, hojas, cajetín, ventana gráfica, escala, organizar hojas, presentación, pdf, ajustes de vista de planta, navegador
from: ee1d5afe
---

## Qué hará

Trabajar como se organizan los proyectos BIM: cada vista en una sola lista, cada planta cortada donde quiera, los mismos ajustes para varias plantas mediante una plantilla, y hojas que organiza usted mismo.

## El navegador del proyecto

1. Active {{ui:Draw}}. El panel izquierdo tiene un {{ui:Project browser}} bajo los modelos.
2. Enumera:
   - **Plantas**: cada nivel. Haga clic en una para ver su planta. El botón de control deslizante junto a ella define su rango de vista (más abajo). Una planta que sigue una plantilla muestra el nombre de la plantilla.
   - **Planos de plafones**: el plano de plafones reflejado de cada nivel (más abajo).
   - **Llamadas**: cada llamada con la vista sobre la que está dibujada, y {{ui:New callout}}. **Falta** enumera las llamadas cuya vista ya no existe.
   - **Alzados** y **Secciones**: los cuatro lados y cada línea de sección. Haga clic en una para abrir el juego de planos en el que se dibujan.
   - **Vistas 3D**: las vistas que guardó con {{ui:Views}}.
   - **Tablas**: haga clic en una para mostrarla bajo la planta.
   - **Hojas**: las hojas que creó, {{ui:New sheet}}, y {{ui:Drawing set…}} para el juego completo creado a partir del modelo.
   - **Plantillas de vista**, con {{ui:New template}}, y **Vínculos** (los modelos vinculados).

## Definir el rango de vista de una planta

1. Haga clic en el botón de control deslizante junto a un nivel en **Plantas**.
2. Defina las alturas, sobre ese nivel:
   - **Corte en**: donde la planta corta muros, puertas y ventanas (1200 mm, unos 4 ft, salvo que lo cambie).
   - **Superior**: lo que queda sobre el corte y bajo la parte superior se dibuja discontinuo (un armario alto, una viga). Déjelo vacío para la altura del nivel.
   - **Inferior** y **Profundidad bajo el inferior**: lo que queda más bajo que el corte se dibuja con líneas finas hasta la base, y hasta esa distancia bajo ella.
3. Bajo **Mostrado en esta planta**, desmarque lo que esta planta deja fuera: mobiliario, espacios, columnas, etcétera.
4. Para dejar fuera elementos sueltos: selecciónelos en la planta o en la vista 3D, abra el cuadro de diálogo y haga clic en {{ui:Hide the selected here}}. {{ui:Show them all}} los devuelve.
5. Haga clic en {{ui:Use these settings}}.

La planta se vuelve a cortar de inmediato, y el juego de planos y sus hojas la siguen. El corte de una nube de puntos también sigue la altura de corte.

## Recortar una planta, darle escala, mostrar otro nivel debajo

Los tres están en el mismo cuadro de diálogo (el botón de control deslizante junto a un nivel):

- **Escala**: la escala a la que se imprime la planta ({{ui:Print}} en la barra de la planta) y a la que entra en una hoja. **Ajustar** elige la escala estándar más grande que quepa.
- **Región de recorte**: haga clic en {{ui:Draw on the plan…}}, luego en una esquina y en la opuesta sobre la planta ({{key:Esc}} termina). La planta fuera de la región se vela en pantalla, y aún puede trabajar allí; impresa, en hojas y en el juego de planos, la planta muestra solo lo que está dentro. {{ui:Clear}} quita el recorte. {{ui:Fit}} encuadra el recorte.
- **Subyacente**: elija otro nivel. Sus muros, elementos cortados, puertas y ventanas se dibujan en tono claro bajo esta planta, para alinear las cosas con el nivel inferior o superior. No puede seleccionarlos aquí, y se imprimen en gris claro.

Una plantilla de vista lleva la escala junto con las alturas y las categorías. La región de recorte y el subyacente siempre pertenecen a la única planta.

## El plano de plafones de un nivel

Cada nivel tiene un plano de plafones reflejado junto a su planta: la planta vista desde abajo, para disponer techos y lo que cuelga de ellos.

1. Haga clic en el nivel bajo **Planos de plafones** en el navegador, o elija {{ui:Ceiling plan}} junto al nivel en la barra de la planta.
2. Los muros se cortan a 2300 mm (unos 7'-6"). Se dibuja lo que queda sobre ese corte y bajo la altura del nivel: techos con su rejilla y una etiqueta de altura (`CLG 2438`), luminarias, vigas. Puertas, ventanas y lo que queda bajo el corte se dejan fuera.
3. Para crear un techo, use {{ui:Ceiling}} como en la planta, luego selecciónelo y elija su **Patrón** en Propiedades. Véase [Espacios, suelos, techos y cubiertas](topic:floors-and-roofs).
4. Para colgar una luminaria, coloque el elemento de la biblioteca mientras se muestra el plano de plafones: queda en **En el techo**. Véase [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library).
5. El botón de control deslizante junto a un plano de plafones define su corte y su altura superior, su escala, sus categorías, su región de recorte y su subyacente, como en una planta. Los planos de plafones no admiten plantilla de vista.

Se dibuja del mismo modo que la planta (un plano reflejado, no una imagen especular). Un techo más bajo que el corte no se dibuja: baje el corte para el plano de plafones de ese nivel. Los planos de plafones van a sus propias hojas como las plantas; el juego de planos no los añade por sí solo.

## Crear una llamada

Una llamada muestra una parte de una planta más grande, a su propia escala, como una vista propia: una cocina, una escalera, la esquina de un muro.

1. Muestre la planta, el plano de plafones o la llamada a la que pertenece.
2. Elija {{ui:Annotate}} › {{ui:Callout}} en la barra de la planta (o {{ui:New callout}} en el navegador), y luego haga clic en una esquina de la zona y en la opuesta. {{key:Esc}} termina.
3. La llamada se crea a 1:20 (1/2" = 1'-0" en pies y pulgadas). Su rectángulo y una etiqueta redonda se dibujan en la planta.
4. Haga clic en la etiqueta con {{ui:Select}}, o en la llamada en el navegador, para abrirla: la planta muestra solo esa zona, a la escala de la llamada. La barra dice {{ui:Llamada:}} y su nombre; {{ui:Up}} vuelve a la vista sobre la que está dibujada.
5. El botón de control deslizante junto a ella (en el navegador o en la barra) la renombra, cambia su escala, vuelve a dibujar su rectángulo o la elimina.

Una llamada muestra lo que muestra su vista: el mismo corte, las mismas categorías, los techos de un plano de plafones. Una llamada dentro de otra funciona igual. Coloque una llamada en una hoja como una planta; su etiqueta indica entonces dónde está (`1 / A-501`: la primera vista de la hoja A-501). {{ui:Print}} en una llamada imprime solo esa zona a su escala.

Eliminar una llamada también elimina las llamadas dibujadas dentro de ella, y las líneas y tramas dibujadas en ellas (se le pregunta antes). Si se elimina el nivel en el que está dibujada una llamada, la llamada queda en **Falta** hasta que la elimine, y las hojas en las que está la dan por ausente.

## Dibujar líneas y tramas en una vista

El dibujo es un trabajo 2D que pertenece a una sola vista: notas en líneas, una zona con trama de hormigón o tierra, una región rellena. Nunca está en la vista 3D ni en otra planta.

1. Muestre la planta, el plano de plafones o la llamada en los que quiere dibujar.
2. Elija en {{ui:Annotate}} de la barra de la planta:
   - {{ui:Line}}: haga clic donde empieza y donde termina. La línea siguiente empieza donde terminó la anterior; {{key:Enter}} empieza de nuevo.
   - {{ui:Polyline}}: haga clic en sus puntos; {{key:Enter}} o un doble clic la terminan, y un clic en su primer punto la cierra.
   - {{ui:Rectangle}}: dos esquinas opuestas.
   - {{ui:Hatch region}}: elija el **Patrón** (Sólido, Diagonal, Trama cruzada, Hormigón, Aislamiento, Tierra) y su escala en la barra, y luego haga clic en las esquinas; {{key:Enter}}, un doble clic o un clic en la primera esquina la cierran. Con {{ui:Fill a room}} marcado, un clic dentro de un espacio traza la trama de su contorno.
3. Los puntos se ajustan como en los muros; {{key:Shift}} mantiene una línea en escuadra, y puede escribir una longitud como para los muros. {{key:Backspace}} quita el último punto.

Seleccione una línea o una trama con {{ui:Select}} en la planta. Propiedades cambia el patrón y la escala de una trama, y tiene {{ui:Move…}} (haga clic en el punto desde el que mover y luego en el destino). {{key:Delete}} la elimina. Cada línea, trama y cambio es un paso.

Las líneas y tramas se imprimen con la planta, pasan a sus hojas con ella y están en el juego de planos. Desmarque **Anotaciones** en un rango de vista para dejarlas fuera de esa vista.

## Guardar los ajustes en una plantilla de vista

1. Haga clic en {{ui:New template}} en el navegador, o en {{ui:Save as a template…}} en el rango de vista de una planta (esa planta la usa entonces).
2. Ponga un nombre, defina las alturas y las categorías, y haga clic en {{ui:Save the template}}.
3. En el rango de vista de cualquier planta, elija la plantilla. La planta toma sus alturas y categorías; cambie la plantilla para cambiar cada planta que la usa. Los elementos que ocultó uno a uno siguen ocultos en su propia planta.
4. Haga clic en una plantilla en el navegador para cambiarla, renombrarla o eliminarla. Al eliminar una, sus plantas conservan sus ajustes como propios.

## Organizar una hoja propia

1. Haga clic en {{ui:New sheet}}. Escriba su número y su título, y elija el papel.
2. Haga clic en {{ui:Add}} junto a una planta, plano de plafones, llamada, alzado, sección o tabla. Se coloca en el centro de la hoja.
3. Arrástrelo a donde corresponda. Con él seleccionado, elija una **Escala**, o déjelo en la escala propia de la planta (si la tiene), o en la que quepa en un tercio de la hoja. {{ui:Take off the sheet}} lo quita de la hoja.
4. Haga clic en {{ui:Save the sheet}}. Aparece en **Hojas**; haga clic en ella para cambiarla más tarde.
5. {{ui:Download as PDF}} guarda esa hoja como una página.

## Qué debe ver

- Plantas cortadas a sus alturas, con lo que queda sobre el corte en discontinuo y lo que quitó, fuera.
- Una planta recortada, velada fuera de su región en pantalla y cortada a ella en papel, a la escala que le dio.
- Un plano de plafones con las rejillas de los techos y sus etiquetas de altura, y las luminarias en el techo.
- Llamadas con su rectángulo y etiqueta en la planta, cada una abierta a su propia escala.
- Líneas y tramas solo en la vista en que las dibujó.
- Sus hojas, redibujadas desde el modelo cada vez que las abre, por lo que siempre coinciden con él. Una vista cuyo nivel o línea de sección se eliminó se notifica, no se dibuja.
- Cada cambio aquí es un paso: {{key:Mod+Z}} lo deshace.

:::note
Todo esto se guarda en el archivo IFC como conjuntos de propiedades que otros programas no tocan: el rango de vista y el plano de plafones de cada nivel, en el nivel; y las plantillas, las llamadas y sus hojas, en el proyecto. Las líneas y tramas son anotaciones IFC en su nivel, así que otros programas las ven como curvas 2D y zonas con trama (su propio dibujo de cada patrón), aunque no saben a qué vista pertenecen.
:::

:::tip
Otros programas BIM llaman a esto rango de vista o plano de corte; a las plantillas, plantillas de vista o ajustes de vista; a las líneas de delineación, líneas de detalle; y a las regiones de trama, regiones rellenas. Las ideas son las mismas; los ajustes de vista no pasan a esos programas.
:::
