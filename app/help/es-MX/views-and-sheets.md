---
title: Vistas, rangos de vista y hojas propias
summary: Encuentre cada planta, elevación, sección, vista 3D, tabla y hoja en el navegador del proyecto; defina cómo se corta cada planta y qué muestra; haga llamadas, dibuje líneas y sombreados en una vista; guarde los ajustes en plantillas de vista; y organice hojas propias.
keywords: llamada, vista de llamada, vista de detalle, planta ampliada, dibujo, líneas de detalle, líneas de dibujo, sombreado, región de sombreado, región rellena, patrón de relleno, planta de plafón reflejada, rcp, plano de plafones, rejilla de plafón, luminarias, navegador del proyecto, vistas, rango de vista, recorte, región de recorte, vista recortada, escala de vista, subyacente, mostrar otro nivel, medio tono, plano de corte, altura de corte, arriba, abajo, profundidad de vista, visibilidad, categorías, ocultar en vista, plantilla de vista, plantillas, hoja, hojas, cajetín, ventana gráfica, escala, organizar hojas, presentación, pdf, ajustes de vista de planta, navegador
from: ee1d5afe
---

## Qué hará

Trabaje como se organizan los proyectos BIM: todas las vistas en una lista, cada planta cortada donde quiera, los mismos ajustes para varias plantas mediante una plantilla, y hojas que usted dispone.

## El navegador del proyecto

1. Active {{ui:Dibujo}}. El panel izquierdo tiene un {{ui:Navegador del proyecto}} bajo los modelos.
2. Lista:
   - **Plantas de piso**: cada nivel. Haga clic en una para ver su planta. El botón de control deslizante junto a ella define su rango de vista (abajo). Una planta que sigue una plantilla muestra el nombre de la plantilla.
   - **Planos de plafón**: el plano reflejado de plafón de cada nivel (abajo).
   - **Llamadas**: cada llamada con la vista donde se dibuja, y {{ui:Nueva llamada}}. **Faltantes** enumera las llamadas cuya vista ya no existe.
   - **Elevaciones** y **Secciones**: los cuatro lados y cada línea de sección. Haga clic en una para abrir el juego de planos en que se dibujan.
   - **Vistas 3D**: las vistas que guardó con {{ui:Vistas}}.
   - **Tablas**: haga clic en una para mostrarla bajo la planta.
   - **Hojas**: las hojas que hizo, {{ui:Hoja nueva}}, y {{ui:Juego de planos…}} para todo el juego hecho del modelo.
   - **Plantillas de vista**, con {{ui:Plantilla nueva}}, y **Vínculos** (los modelos vinculados).

## Definir el rango de vista de una planta

1. Haga clic en el botón de control deslizante junto a un nivel en **Plantas de piso**.
2. Defina las alturas, sobre ese nivel:
   - **Cortar en**: donde la planta corta muros, puertas y ventanas (1200 mm, unos 4 ft, salvo que lo cambie).
   - **Tope**: lo que queda sobre el corte y bajo el tope se dibuja punteado (un mueble alto, una viga). Déjelo vacío para la altura del nivel.
   - **Base** y **Profundidad bajo la base**: lo que queda más bajo que el corte se dibuja con líneas delgadas hasta la base, y hasta esa distancia bajo ella.
3. Bajo **Mostrado en esta planta**, desmarque lo que esta planta deja fuera: mobiliario, cuartos, columnas, etc.
4. Para dejar fuera elementos sueltos: selecciónelos en la planta o en la vista 3D, abra el cuadro de diálogo y haga clic en {{ui:Ocultar aquí lo seleccionado}}. {{ui:Mostrarlos todos}} los regresa.
5. Haga clic en {{ui:Usar estos ajustes}}.

La planta se vuelve a cortar de inmediato, y el juego de planos y sus hojas la siguen. El corte de una nube de puntos también sigue la altura de corte.

## Recortar una planta, darle escala, mostrar otro nivel debajo

Las tres están en el mismo cuadro de diálogo (el botón de control deslizante junto a un nivel):

- **Escala**: la escala a la que se imprime la planta ({{ui:Imprimir}} en la barra de la planta) y a la que entra en una hoja. **Encuadrar** elige la escala estándar más grande que quepa.
- **Región de recorte**: haga clic en {{ui:Dibujar en la planta…}}, luego haga clic en una esquina y en la opuesta sobre la planta ({{key:Esc}} detiene). La planta fuera de la región se atenúa en pantalla, y aún puede trabajar allí; impresa, en hojas y en el juego de planos, la planta muestra solo lo que está dentro. {{ui:Borrar}} quita el recorte. {{ui:Encuadrar}} encuadra el recorte.
- **Subyacente**: elija otro nivel. Sus muros, elementos cortados, puertas y ventanas se dibujan tenues bajo esta planta, para alinear con el nivel de abajo o de arriba. Aquí no se pueden seleccionar, y se imprimen en gris claro.

Una plantilla de vista lleva la escala junto con las alturas y categorías. La región de recorte y el subyacente siempre pertenecen a esa única planta.

## El plano de plafón de un nivel

Cada nivel tiene un plano reflejado de plafón junto a su planta de piso: la planta vista desde abajo, para trazar plafones y lo que cuelga de ellos.

1. Haga clic en el nivel bajo **Planos de plafón** en el navegador, o elija {{ui:Plano de plafones}} junto al nivel en la barra de la planta.
2. Los muros se cortan a 2300 mm (unos 7'-6"). Se dibuja lo que queda sobre ese corte y bajo la altura del nivel: plafones con su rejilla y una etiqueta de altura (`CLG 2438`), luminarias, vigas. Puertas, ventanas y lo que queda bajo el corte se dejan fuera.
3. Para hacer un plafón, use {{ui:Techo}} como en la planta de piso; luego selecciónelo y elija su **Patrón** en Propiedades. Vea [Cuartos, pisos, plafones y techos](topic:floors-and-roofs).
4. Para colgar una luminaria de él, coloque el elemento desde la biblioteca mientras se muestra el plano de plafón: va en **En el plafón**. Vea [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library).
5. El botón de control deslizante junto a un plano de plafón define su corte y tope, escala, categorías, región de recorte y subyacente, como en una planta de piso. Los planos de plafón no admiten plantilla de vista.

Se dibuja con el mismo orden que la planta (un plano reflejado, no una imagen espejo). Un plafón más bajo que el corte no se dibuja: baje el corte para el plano de plafón de ese nivel. Los planos de plafón van en sus hojas como las plantas; el juego de planos no los agrega por sí solo.

## Hacer una llamada

Una llamada muestra una parte de una planta más grande, a su propia escala, como una vista propia: una cocina, una escalera, una esquina de muro.

1. Muestre la planta, el plano de plafón o la llamada a la que pertenece.
2. Elija {{ui:Anotar}} › {{ui:Llamada}} en la barra de la planta (o {{ui:Nueva llamada}} en el navegador), luego haga clic en una esquina del área y en la opuesta. {{key:Esc}} detiene.
3. La llamada se crea a 1:20 (1/2" = 1'-0" en pies y pulgadas). Su rectángulo y una etiqueta redonda se dibujan en la planta.
4. Haga clic en la etiqueta con {{ui:Seleccionar}}, o en la llamada en el navegador, para abrirla: la planta muestra solo esa área, a la escala de la llamada. La barra dice {{ui:Llamada:}} y su nombre; {{ui:Subir}} regresa a la vista donde se dibuja.
5. El botón de control deslizante junto a ella (en el navegador o en la barra) le cambia el nombre, cambia su escala, vuelve a dibujar su rectángulo o la borra.

Una llamada muestra lo que muestra su vista: el mismo corte, las mismas categorías, los plafones de un plano de plafón. Una llamada de una llamada funciona igual. Ponga una llamada en una hoja como una planta; su etiqueta indica entonces dónde está (`1 / A-501`: la primera vista en la hoja A-501). {{ui:Imprimir}} en una llamada imprime solo esa área a su escala.

Borrar una llamada también borra las llamadas dibujadas dentro de ella, y las líneas y sombreados trazados en ellas (se le pregunta antes). Si se borra el nivel en el que se dibuja una llamada, la llamada queda bajo **Faltantes** hasta que la borre, y las hojas en que está la reportan como faltante.

## Dibujar líneas y sombreados en una vista

El dibujo es trabajo 2D que pertenece a una sola vista: notas en líneas, un área sombreada de concreto o tierra, una región rellena. Nunca está en la vista 3D ni en otra planta.

1. Muestre la planta de piso, el plano de plafón o la llamada en la que va a dibujar.
2. Elija de {{ui:Anotar}} en la barra de la planta:
   - {{ui:Línea}}: haga clic donde empieza y donde termina. La siguiente línea empieza donde terminó la anterior; {{key:Enter}} empieza de nuevo.
   - {{ui:Polilínea}}: haga clic en sus puntos; {{key:Enter}} o un doble clic la termina, y un clic en su primer punto la cierra.
   - {{ui:Rectángulo}}: dos esquinas opuestas.
   - {{ui:Región de sombreado}}: elija el **Patrón** (Sólido, Diagonal, Entrecruzado, Concreto, Aislamiento, Tierra) y su escala en la barra, luego haga clic en las esquinas; {{key:Enter}}, un doble clic o un clic en la primera esquina la cierra. Con {{ui:Rellenar un cuarto}} marcado, un clic dentro de un cuarto sombrea su contorno.
3. Los puntos se ajustan igual que en los muros; {{key:Shift}} mantiene una línea a escuadra, y puede escribir una longitud como en los muros. {{key:Backspace}} quita el último punto.

Seleccione una línea o un sombreado con {{ui:Seleccionar}} en la planta. Propiedades cambia el patrón y la escala de un sombreado, y tiene {{ui:Mover…}} (haga clic en el punto de origen y luego en el destino). {{key:Delete}} lo borra. Cada línea, sombreado y cambio es un paso.

Las líneas y sombreados se imprimen con la planta, pasan a sus hojas con ella y están en el juego de planos. Desmarque **Anotaciones** en un rango de vista para dejarlos fuera de esa vista.

## Guardar los ajustes en una plantilla de vista

1. Haga clic en {{ui:Plantilla nueva}} en el navegador, o en {{ui:Guardar como plantilla…}} en el rango de vista de una planta (esa planta entonces la usa).
2. Póngale un nombre, defina las alturas y categorías, y haga clic en {{ui:Guardar la plantilla}}.
3. En el rango de vista de cualquier planta, elija la plantilla. La planta toma sus alturas y categorías; cambie la plantilla para cambiar cada planta que la usa. Los elementos que ocultó uno por uno siguen ocultos en su propia planta.
4. Haga clic en una plantilla en el navegador para cambiarla, renombrarla o borrarla. Al borrar una, sus plantas conservan sus ajustes como propios.

## Organizar una hoja propia

1. Haga clic en {{ui:Hoja nueva}}. Escriba su número y título, y elija el papel.
2. Haga clic en {{ui:Agregar}} junto a una planta, plano de plafón, llamada, elevación, sección o tabla. Cae en el centro de la hoja.
3. Arrástrela a donde vaya. Con ella elegida, elija una **Escala**, o déjela en la escala de la planta (cuando la planta tiene una); si no, la escala que cabe en un tercio de la hoja. {{ui:Quitar de la hoja}} la retira.
4. Haga clic en {{ui:Guardar la hoja}}. Aparece bajo **Hojas**; haga clic en ella para cambiarla después.
5. {{ui:Descargar como PDF}} guarda esa hoja como una página.

## Qué debe ver

- Plantas cortadas a sus alturas, con lo que está sobre el corte punteado y lo que quitó fuera.
- Una planta recortada, atenuada fuera de su región en pantalla y cortada a ella en papel, a la escala que le dio.
- Un plano de plafón con las rejillas de los plafones y las etiquetas de altura, y las luminarias en el plafón.
- Llamadas con su rectángulo y etiqueta en la planta, cada una abriendo a su propia escala.
- Líneas y sombreados solo en la vista en que los dibujó.
- Sus hojas vueltas a dibujar desde el modelo cada vez que las abre, así que siempre coinciden con él. Una vista cuyo nivel o línea de sección se borró se reporta, no se dibuja.
- Cada cambio aquí es un paso: {{key:Mod+Z}} lo deshace.

:::note
Todo esto se guarda en el archivo IFC como conjuntos de propiedades que otros programas no tocan: el rango de vista y el plano de plafón de cada nivel en el nivel, y las plantillas, llamadas y hojas en el proyecto. Las líneas y sombreados son anotaciones IFC en su nivel, así que otros programas los ven como curvas 2D y áreas sombreadas (con su propio dibujo de cada patrón), aunque no saben a qué vista pertenecen.
:::

:::tip
Otros programas BIM llaman al corte «rango de vista» o «plano de corte», a las plantillas «plantillas de vista» o «ajustes de vista», a las líneas de dibujo «líneas de detalle», y a las regiones de sombreado «regiones rellenas». Las ideas son las mismas; los ajustes de vista no viajan hacia ellos.
:::
