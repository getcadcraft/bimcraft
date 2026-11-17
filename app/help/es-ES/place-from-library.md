---
title: Colocar equipos y mobiliario desde la biblioteca
summary: Busque un elemento en la Biblioteca, en un archivo o en el dibujo abierto, colóquelo en una planta de un modelo IFC con una vista previa fantasma, gírelo, ajústelo a un muro y guarde.
keywords: mover, girar, rotar, arrastrar, biblioteca, librarycraft, colocar, insertar, equipo, mobiliario, bloque, familia, elemento, catálogo, contenido, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## Qué hará

Ponga un elemento de la biblioteca en un modelo IFC: un fregadero, una mesa de trabajo, una silla. BimCraft lo escribe como un elemento IFC adecuado, con un tipo, de modo que cada copia del mismo elemento comparte un solo conjunto de geometría, y sus datos, su número de elemento y su licencia viajan con él.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en la pestaña {{ui:Biblioteca}} junto a {{ui:Propiedades}}, a la derecha, o en {{ui:Biblioteca}} de la barra de herramientas sobre el modelo.
3. Elija un origen:
   - **Símbolos integrados**: símbolos genéricos de planta de fontanería incluidos con BimCraft bajo Apache-2.0, disponibles sin conexión. Compruebe sus dimensiones antes de construir. Para símbolos eléctricos de planta y dispositivos eléctricos IFC, use **{{ui:Compilación}} › Eléctrico**.
   - **Biblioteca**: la biblioteca de CadCraft de este sitio. Los elementos públicos no requieren iniciar sesión.
   - **Este archivo**: los bloques de un dibujo DWG o DXF abierto. Un bloque dinámico con estados de visibilidad se ofrece una vez por estado, con un nombre como "Fregadero: Doble cubeta", y cada uno se dibuja solo con los objetos de ese estado.
   - **Archivos…**: un archivo DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV de su equipo. Se lee en esta pestaña; no se sube nada.
   - **Otras fuentes**: otra biblioteca que habla el mismo formato de fuente. Añada su dirección una vez; se guarda en este navegador.
4. Busque o elija una categoría, y luego haga clic en una tarjeta. La tarjeta muestra una vista previa en planta, el nombre, el fabricante y el modelo, la licencia y la versión.
5. Haga clic en {{ui:Colocar en el plano}} (en la vista de Planta) o en {{ui:Colocar en el modelo}} (en la vista 3D). En {{ui:Dividir}}, donde se ven a la vez la planta y la 3D, el botón es un botón dividido: su acción principal es {{ui:Colocar en el plano}}, y la flecha de su extremo derecho abre un menú con {{ui:Colocar en el modelo}}. O arrastre la tarjeta, o la imagen de los detalles del elemento, sobre la planta o la vista 3D: el elemento se coloca donde lo suelte. Con un lápiz o un dedo, mantenga pulsada la tarjeta un momento y luego arrástrela.
6. Elija la planta en la barra de colocación. En la vista 3D, las plantas por encima de ella quedan ocultas mientras coloca, y la vista se gira hacia arriba; en la planta, esta ya muestra esa planta. Elegir {{ui:Colocar en el modelo}} desde la planta sola abre la vista 3D junto a ella.
7. Mueva el puntero sobre el modelo: una caja translúcida muestra dónde va el elemento.
8. Pulse {{key:R}} para girarlo 90°. Pulse {{key:Tab}} (o {{ui:Ajuste a muro}}) para apoyar su parte trasera contra el muro más cercano, mirando hacia la habitación.
9. Haga clic para colocarlo. O escriba la posición en **X, Y (mm)**, por ejemplo `1200, 3400`, y pulse {{key:Enter}}.

Una luminaria, o cualquier cosa colgada desde arriba: fije **Montaje** en **En el techo**. La parte superior del elemento queda entonces a la altura de la cara inferior del techo sobre ese punto (o a la altura del nivel donde no hay techo). Con un plano de techo en la vista de planta, **Montaje** empieza en **En el techo**.

10. Responda a la única pregunta: el **número de elemento** (se rellena el siguiente libre), la cantidad y una nota. Pulse {{key:Enter}}.
11. Coloque más, o pulse {{key:Esc}} para parar.
12. Haga clic en {{ui:Guardar como IFC}} para descargar la copia editada.

## Planta o modelo

El botón de colocar de la Biblioteca sigue la vista en la que está, y cambia en cuanto cambia de vista (los botones {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}}, el teclado, al abrir un archivo). Planta muestra un solo botón, {{ui:Colocar en el plano}}; 3D muestra un solo botón, {{ui:Colocar en el modelo}}; Dividir muestra el botón dividido, con {{ui:Colocar en el plano}} como acción principal y {{ui:Colocar en el modelo}} en su menú. Ambas formas usan la misma barra de colocación y escriben el mismo elemento IFC: el puntero trabaja en la vista de planta para una, y en la vista 3D para la otra. Pulse {{key:Esc}} en cualquier momento para parar.

Arrastrar una tarjeta no tiene tecla propia: el botón dividido, o el botón simple, hace lo mismo con el teclado.

## Mover o girar un elemento colocado

En {{ui:Dibujo}}, elija el elemento en la planta. Un agarre cuadrado aparece en su punto de inserción, y un agarre redondo junto a él.

- Arrastre el elemento, o su agarre cuadrado, para moverlo. Se ajusta como la herramienta Muro (extremos y caras de muros); {{key:Shift}} lo mantiene cuadrado respecto a donde estaba.
- Arrastre el agarre redondo para girarlo en pasos de 15°. Mantenga {{key:Shift}} para pasos de 1°.
- Pulse {{key:R}} para girarlo 90°.
- En **Propiedades** (también en la vista 3D), escriba **X**, **Y** y **Rotación (°)**, o haga clic en **Girar 90°**.

Cada movimiento es un paso de deshacer y viaja en Live TeamWork. El elemento conserva su número de elemento, sus datos de biblioteca y su altura sobre el nivel. Todavía no está hecho: arrastrarlo en la vista 3D.

## Lo que debería ver

- El elemento en el modelo, seleccionado, con sus propiedades a la derecha: un recuadro **Elemento de la biblioteca** con su licencia y su atribución, y los conjuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` y, para elementos de dibujos etiquetados, `CadCraft_SourceAttributes`.
- "Colocado: *elemento* (elemento *n*)" en la lista de cambios. {{key:Mod+Z}} lo deshace.
- La línea de estado: "Colocado *elemento* como elemento *n*."

## Conviene saber

- Algunos elementos vienen en varios tamaños u opciones: la tarjeta tiene entonces una elección de **Variante**, y la que elija es la que se coloca. Vea [Colocar y cambiar un elemento de la biblioteca que tiene variantes](topic:library-variants).
- Un elemento sin cuerpo 3D (un símbolo 2D) se coloca con una caja provisional; usted indica su altura cuando se le pregunta.
- Más copias: elija un elemento colocado y use {{ui:Copiar}} y {{ui:Pegar}}, o {{key:Mod+D}}. Vea [Copiar, pegar y duplicar elementos de la biblioteca](topic:copy-paste).
- Para iniciar cada colocación con el ajuste a muro activado, active **Empezar con ajuste a muro activado** en la [Configuración de BimCraft](topic:settings).
- Las longitudes se convierten a las unidades propias del modelo, sean cuales sean.
- **Entourage** (árboles, arbustos, personas, coches) también está en la biblioteca: busque "tree", "person" o "car". Los dibuja CadCraft (CC0) y conservan sus colores al colocarse (un tronco marrón, hojas verdes, las ventanillas de un coche transparentes), en BimCraft y en otros programas BIM. Aparecen en las [imágenes renderizadas](topic:render).
- En un archivo IFC2X3 el cuerpo se escribe como un sólido facetado; en IFC4, como un conjunto de caras triangulado. Ambos se abren en otras herramientas IFC.
- Un dibujo (DWG o DXF) no se puede guardar aquí, así que los elementos solo se colocan en modelos IFC. Use **Este archivo** en un dibujo para ver en qué se convertirían sus bloques.

## Elementos en su idioma

Un elemento puede llevar su nombre, su descripción y su tipo en otros idiomas. Cuando los tiene en el idioma configurado en BimCraft (Configuración › General › Idioma), la página del elemento muestra esos, con debajo el nombre que le dio su fabricante, y **Colocar** escribe en el modelo el nombre en su idioma, de modo que la tabla de {{ui:Equipos}} lo lista así. El elemento sigue siendo el mismo: la comprobación de actualizaciones y los cambios se hacen por el propio elemento, nunca por su nombre. Los elementos sin traducción conservan sus propias palabras.

## Errores frecuentes

- **Falta el botón de colocar.** No hay ningún modelo IFC abierto. Ábralo primero.
- **La vista previa no sigue al puntero.** El puntero está fuera del área del modelo, o el plano de la planta no está a la vista. Haga clic en {{ui:Superior}}.
- **{{ui:Ajuste a muro}} dice que no hay muros.** La planta no tiene muros en el IFC (algunas exportaciones ponen los muros en otra planta). Elija esa planta, o escriba X e Y.
- **Los elementos de un archivo tienen un tamaño incorrecto.** El archivo no tiene unidades, o indica unas incorrectas. En {{ui:Archivos…}} elija las unidades y vuelva a leerlo.

:::tip
Colocar el mismo elemento dos veces comparte un solo tipo IFC, de modo que un modelo con cuarenta sillas almacena la silla una sola vez.
:::
